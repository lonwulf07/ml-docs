# Ultralytics Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.ultralytics.com/](https://docs.ultralytics.com/)



---

## Source: https://docs.ultralytics.com/

# Home

Introducing Ultralytics [YOLO26](models/yolo26/), the latest version of the acclaimed real-time object detection and image segmentation model. YOLO26 is built on [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl) and [computer vision](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025) advancements, featuring end-to-end NMS-free inference and optimized edge deployment. Its streamlined design makes it suitable for various applications and easily adaptable to different hardware platforms, from edge devices to cloud APIs. For stable production workloads, both YOLO26 and [YOLO11](models/yolo11/) are recommended.

Explore the Ultralytics Docs, a comprehensive resource designed to help you understand and utilize its features and capabilities. Whether you are a seasoned [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) practitioner or new to the field, this hub aims to maximize YOLO's potential in your projects.

## Where to Start

**Getting Started**Install

`ultralytics`

with pip and get up and running in minutes to train a YOLO model**Predict**Predict on new images, videos and streams with YOLO

**Train a Model**Train a new YOLO model on your own custom dataset from scratch or load and train on a pretrained model

**Explore Computer Vision Tasks**Discover YOLO tasks like detect, segment, classify, pose, OBB and track

**Explore YOLO26 🚀 NEW**Discover Ultralytics' latest YOLO26 models with NMS-free inference and edge optimization

**SAM 3: Segment Anything with Concepts 🚀 NEW**Meta's latest SAM 3 with Promptable Concept Segmentation - segment all instances using text or image exemplars

**Open Source, AGPL-3.0**Ultralytics offers two YOLO licenses: AGPL-3.0 and Enterprise. Explore YOLO on

[GitHub](https://github.com/ultralytics/ultralytics).

**Watch:** How to Train a YOLO26 model on Your Custom Dataset in [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: A Brief History

[YOLO](models/) (You Only Look Once), a popular [object detection](https://www.ultralytics.com/glossary/object-detection) and [image segmentation](https://www.ultralytics.com/glossary/image-segmentation) model, was developed by Joseph Redmon and Ali Farhadi at the University of Washington. Launched in 2015, YOLO gained popularity for its high speed and accuracy.

[YOLOv2](models/), released in 2016, improved the original model by incorporating batch normalization, anchor boxes, and dimension clusters.[YOLOv3](models/yolov3/), launched in 2018, further enhanced the model's performance using a more efficient backbone network, multiple anchors, and spatial pyramid pooling.[YOLOv4](models/yolov4/)was released in 2020, introducing innovations like Mosaic[data augmentation](https://www.ultralytics.com/glossary/data-augmentation), a new anchor-free detection head, and a new[loss function](https://www.ultralytics.com/glossary/loss-function).[YOLOv5](models/yolov5/)further improved the model's performance and added new features such as hyperparameter optimization, integrated experiment tracking, and automatic export to popular export formats.[YOLOv6](models/yolov6/)was open-sourced by[Meituan](https://www.meituan.com/)in 2022 and is used in many of the company's autonomous delivery robots.[YOLOv7](models/yolov7/)added additional tasks such as pose estimation on the COCO keypoints dataset.[YOLOv8](models/yolov8/)released in 2023 by Ultralytics, introduced new features and improvements for enhanced performance, flexibility, and efficiency, supporting a full range of vision AI tasks.[YOLOv9](models/yolov9/)introduces innovative methods like Programmable Gradient Information (PGI) and the Generalized Efficient Layer Aggregation Network (GELAN).[YOLOv10](models/yolov10/)created by researchers from[Tsinghua University](https://www.tsinghua.edu.cn/en/)using the[Ultralytics](https://www.ultralytics.com/)[Python package](https://pypi.org/project/ultralytics/), provides real-time[object detection](tasks/detect/)advancements by introducing an End-to-End head that eliminates Non-Maximum Suppression (NMS) requirements.: Released in September 2024, YOLO11 delivers excellent performance across multiple tasks, including[YOLO11](models/yolo11/)[object detection](tasks/detect/),[segmentation](tasks/segment/),[pose estimation](tasks/pose/),[tracking](modes/track/), and[classification](tasks/classify/), enabling deployment across diverse AI applications and domains.: Ultralytics' next-generation YOLO model optimized for edge deployment with end-to-end NMS-free inference.[YOLO26](models/yolo26/)🚀

## YOLO Licenses: How is Ultralytics YOLO licensed?

Ultralytics offers two licensing options to accommodate diverse use cases:

**AGPL-3.0 License**: This[OSI-approved](https://opensource.org/license/agpl-v3)open-source license is ideal for students and enthusiasts, promoting open collaboration and knowledge sharing. See the[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)file for more details.**Enterprise License**: Designed for commercial use, this license permits seamless integration of Ultralytics software and AI models into commercial goods and services, bypassing the open-source requirements of AGPL-3.0. If your scenario involves embedding our solutions into a commercial offering, reach out through[Ultralytics Licensing](https://www.ultralytics.com/license).

Our licensing strategy is designed to ensure that any improvements to our open-source projects are returned to the community. We believe in open source, and our mission is to ensure that our contributions can be used and expanded in ways that benefit everyone.

## The Evolution of Object Detection

Object detection has evolved significantly over the years, from traditional computer vision techniques to advanced deep learning models. The [YOLO family of models](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) has been at the forefront of this evolution, consistently pushing the boundaries of what's possible in real-time object detection.

YOLO's unique approach treats object detection as a single regression problem, predicting [bounding boxes](https://www.ultralytics.com/glossary/bounding-box) and class probabilities directly from full images in one evaluation. This revolutionary method has made YOLO models significantly faster than previous two-stage detectors while maintaining high accuracy.

With each new version, YOLO has introduced architectural improvements and innovative techniques that have enhanced performance across various metrics. YOLO26 continues this tradition by incorporating the latest advancements in computer vision research, featuring end-to-end NMS-free inference and optimized edge deployment for real-world applications.

## FAQ

### What is Ultralytics YOLO and how does it improve object detection?

Ultralytics YOLO is the acclaimed YOLO (You Only Look Once) series for real-time object detection and image segmentation. The latest model, [YOLO26](models/yolo26/), builds on previous versions by introducing end-to-end NMS-free inference and optimized edge deployment. YOLO supports various [vision AI tasks](tasks/) such as detection, segmentation, pose estimation, tracking, and classification. Its efficient architecture ensures excellent speed and accuracy, making it suitable for diverse applications, including edge devices and cloud APIs.

### How can I get started with YOLO installation and setup?

Getting started with YOLO is quick and straightforward. You can install the Ultralytics package using [pip](https://pypi.org/project/ultralytics/) and get up and running in minutes. Here's a basic installation command:

Installation using pip

```
pip install -U ultralytics
```


For a comprehensive step-by-step guide, visit our [Quickstart](quickstart/) page. This resource will help you with installation instructions, initial setup, and running your first model.

### How can I train a custom YOLO model on my dataset?

Training a custom YOLO model on your dataset involves a few detailed steps:

- Prepare your annotated dataset.
- Configure the training parameters in a YAML file.
- Use the
`yolo TASK train`

command to start training. (Each`TASK`

has its own argument)

Here's example code for the Object Detection Task:

Train Example for Object Detection Task

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


For a detailed walkthrough, check out our [Train a Model](modes/train/) guide, which includes examples and tips for optimizing your training process.

### What are the licensing options available for Ultralytics YOLO?

Ultralytics offers two licensing options for YOLO:

**AGPL-3.0 License**: This open-source license is ideal for educational and non-commercial use, promoting open collaboration.**Enterprise License**: This is designed for commercial applications, allowing seamless integration of Ultralytics software into commercial products without the restrictions of the AGPL-3.0 license.

For more details, visit our [Licensing](https://www.ultralytics.com/license) page.

### How can Ultralytics YOLO be used for real-time object tracking?

Ultralytics YOLO supports efficient and customizable multi-object tracking. To utilize tracking capabilities, you can use the `yolo track`

command, as shown below:

Example for Object Tracking on a Video

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


For a detailed guide on setting up and running object tracking, check our [Track Mode](modes/track/) documentation, which explains the configuration and practical applications in real-time scenarios.

---

## Source: https://docs.ultralytics.com/models/yolo26

# Ultralytics YOLO26

## Overview

[Ultralytics](https://www.ultralytics.com/) YOLO26 is the latest evolution in the YOLO series of real-time object detectors, engineered from the ground up for **edge and low-power devices**. It introduces a streamlined design that removes unnecessary complexity while integrating targeted innovations to deliver faster, lighter, and more accessible deployment.

Try on Ultralytics Platform

Explore and run YOLO26 models directly on [Ultralytics Platform](https://platform.ultralytics.com/ultralytics/yolo26).

The architecture of YOLO26 is guided by three core principles:

**Simplicity:**YOLO26 is a**native end-to-end model**, producing predictions directly without the need for non-maximum suppression (NMS). By eliminating this post-processing step, inference becomes faster, lighter, and easier to deploy in real-world systems. This breakthrough approach was first pioneered in[YOLOv10](../../models/yolov10/)by Ao Wang at Tsinghua University and has been further advanced in YOLO26.**Deployment Efficiency:**The end-to-end design cuts out an entire stage of the pipeline, dramatically simplifying integration, reducing latency, and making deployment more robust across diverse environments.**Training Innovation:**YOLO26 introduces the**MuSGD optimizer**, a hybrid of[SGD](https://docs.pytorch.org/docs/stable/generated/torch.optim.SGD.html)and[Muon](https://arxiv.org/abs/2502.16982)— inspired by Moonshot AI's[Kimi K2](https://www.kimi.com/)breakthroughs in LLM training. This optimizer brings enhanced stability and faster convergence, transferring optimization advances from language models into computer vision.**Task-Specific Optimizations:**YOLO26 introduces targeted improvements for specialized tasks, including semantic segmentation loss and multi-scale proto modules for**Segmentation**, Residual Log-Likelihood Estimation (RLE) for high-precision**Pose**estimation, and optimized decoding with angle loss to resolve boundary issues in**OBB**.

Together, these innovations deliver a model family that achieves higher accuracy on small objects, provides seamless deployment, and runs **up to 43% faster on CPUs** — making YOLO26 one of the most practical and deployable YOLO models to date for resource-constrained environments.

## Key Features

**DFL Removal**

The Distribution Focal Loss (DFL) module, while effective, often complicated export and limited hardware compatibility. YOLO26 removes DFL entirely, simplifying inference and broadening support for**edge and low-power devices**.**End-to-End NMS-Free Inference**

Unlike traditional detectors that rely on NMS as a separate post-processing step, YOLO26 is**natively end-to-end**. Predictions are generated directly, reducing latency and making integration into production systems faster, lighter, and more reliable.**ProgLoss + STAL**

Improved loss functions increase detection accuracy, with notable improvements in**small-object recognition**, a critical requirement for IoT, robotics, aerial imagery, and other edge applications.**MuSGD Optimizer**

A new hybrid optimizer that combines[SGD](https://docs.pytorch.org/docs/stable/generated/torch.optim.SGD.html)with[Muon](https://arxiv.org/abs/2502.16982). Inspired by Moonshot AI's[Kimi K2](https://www.kimi.com/), MuSGD introduces advanced optimization methods from LLM training into computer vision, enabling more stable training and faster convergence.**Up to 43% Faster CPU Inference**

Specifically optimized for edge computing, YOLO26 delivers significantly faster CPU inference, ensuring real-time performance on devices without GPUs.**Instance Segmentation Enhancements**

Introduces semantic segmentation loss to improve model convergence and an upgraded proto module that leverages multi-scale information for superior mask quality.**Precision Pose Estimation**

Integrates[Residual Log-Likelihood Estimation](https://arxiv.org/abs/2107.11291)(RLE) for more accurate keypoint localization and optimizes the decoding process for increased inference speed.**Refined OBB Decoding**

Introduces a specialized angle loss to improve detection accuracy for square-shaped objects and optimizes OBB decoding to resolve boundary discontinuity issues.

## Supported Tasks and Modes

YOLO26 builds upon the versatile model range established by earlier Ultralytics YOLO releases, offering enhanced support across various computer vision tasks:

| Model | Filenames | Task | Inference | Validation | Training | Export |
|---|---|---|---|---|---|---|
| YOLO26 | `yolo26n.pt` `yolo26s.pt` `yolo26m.pt` `yolo26l.pt` `yolo26x.pt` |
|

`yolo26n-seg.pt`

`yolo26s-seg.pt`

`yolo26m-seg.pt`

`yolo26l-seg.pt`

`yolo26x-seg.pt`

[Instance Segmentation](../../tasks/segment/)`yolo26n-pose.pt`

`yolo26s-pose.pt`

`yolo26m-pose.pt`

`yolo26l-pose.pt`

`yolo26x-pose.pt`

[Pose/Keypoints](../../tasks/pose/)`yolo26n-obb.pt`

`yolo26s-obb.pt`

`yolo26m-obb.pt`

`yolo26l-obb.pt`

`yolo26x-obb.pt`

[Oriented Detection](../../tasks/obb/)`yolo26n-cls.pt`

`yolo26s-cls.pt`

`yolo26m-cls.pt`

`yolo26l-cls.pt`

`yolo26x-cls.pt`

[Classification](../../tasks/classify/)This unified framework ensures YOLO26 is applicable across real-time detection, segmentation, classification, pose estimation, and oriented object detection — all with training, validation, inference, and export support.

## Performance Metrics

Performance

See [Detection Docs](../../tasks/detect/) for usage examples with these models trained on [COCO](../../datasets/detect/coco/), which include 80 pretrained classes.

| Model | size(pixels) | mAPval50-95 | mAPval50-95(e2e) | SpeedCPU ONNX(ms) | SpeedT4 TensorRT10(ms) | params(M) | FLOPs(B) |
|---|---|---|---|---|---|---|---|
|

[YOLO26s](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26s.pt)[YOLO26m](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26m.pt)[YOLO26l](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26l.pt)[YOLO26x](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26x.pt)See [Segmentation Docs](../../tasks/segment/) for usage examples with these models trained on [COCO](../../datasets/segment/coco/), which include 80 pretrained classes.

| Model | size(pixels) | mAPbox50-95(e2e) | mAPmask50-95(e2e) | SpeedCPU ONNX(ms) | SpeedT4 TensorRT10(ms) | params(M) | FLOPs(B) |
|---|---|---|---|---|---|---|---|
|

[YOLO26s-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26s-seg.pt)[YOLO26m-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26m-seg.pt)[YOLO26l-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26l-seg.pt)[YOLO26x-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26x-seg.pt)See [Classification Docs](../../tasks/classify/) for usage examples with these models trained on [ImageNet](../../datasets/classify/imagenet/), which include 1000 pretrained classes.

| Model | size(pixels) | acctop1 | acctop5 | SpeedCPU ONNX(ms) | SpeedT4 TensorRT10(ms) | params(M) | FLOPs(B) at 224 |
|---|---|---|---|---|---|---|---|
|

[YOLO26s-cls](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26s-cls.pt)[YOLO26m-cls](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26m-cls.pt)[YOLO26l-cls](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26l-cls.pt)[YOLO26x-cls](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26x-cls.pt)See [Pose Estimation Docs](../../tasks/pose/) for usage examples with these models trained on [COCO](../../datasets/pose/coco/), which include 1 pretrained class, 'person'.

| Model | size(pixels) | mAPpose50-95(e2e) | mAPpose50(e2e) | SpeedCPU ONNX(ms) | SpeedT4 TensorRT10(ms) | params(M) | FLOPs(B) |
|---|---|---|---|---|---|---|---|
|

[YOLO26s-pose](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26s-pose.pt)[YOLO26m-pose](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26m-pose.pt)[YOLO26l-pose](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26l-pose.pt)[YOLO26x-pose](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26x-pose.pt)See [Oriented Detection Docs](../../tasks/obb/) for usage examples with these models trained on [DOTAv1](../../datasets/obb/dota-v2/#dota-v10), which include 15 pretrained classes.

| Model | size(pixels) | mAPtest50-95(e2e) | mAPtest50(e2e) | SpeedCPU ONNX(ms) | SpeedT4 TensorRT10(ms) | params(M) | FLOPs(B) |
|---|---|---|---|---|---|---|---|
|

[YOLO26s-obb](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26s-obb.pt)[YOLO26m-obb](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26m-obb.pt)[YOLO26l-obb](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26l-obb.pt)[YOLO26x-obb](https://github.com/ultralytics/assets/releases/download/v8.4.0/yolo26x-obb.pt)*Params and FLOPs values are for the fused model after model.fuse(), which merges Conv and BatchNorm layers and removes the auxiliary one-to-many detection head. Pretrained checkpoints retain the full training architecture and may show higher counts.*

## Usage Examples

This section provides simple YOLO26 training and inference examples. For full documentation on these and other [modes](../../modes/), see the [Predict](../../modes/predict/), [Train](../../modes/train/), [Val](../../modes/val/), and [Export](../../modes/export/) docs pages.

Note that the example below is for YOLO26 [Detect](../../tasks/detect/) models for [object detection](https://www.ultralytics.com/glossary/object-detection). For additional supported tasks, see the [Segment](../../tasks/segment/), [Classify](../../tasks/classify/), [OBB](../../tasks/obb/), and [Pose](../../tasks/pose/) docs.

Example

[PyTorch](https://www.ultralytics.com/glossary/pytorch) pretrained `*.pt`

models as well as configuration `*.yaml`

files can be passed to the `YOLO()`

class to create a model instance in Python:

```
from ultralytics import YOLO
# Load a COCO-pretrained YOLO26n model
model = YOLO("yolo26n.pt")
# Train the model on the COCO8 example dataset for 100 epochs
results = model.train(data="coco8.yaml", epochs=100, imgsz=640)
# Run inference with the YOLO26n model on the 'bus.jpg' image
results = model("path/to/bus.jpg")
```


CLI commands are available to directly run the models:

```
# Load a COCO-pretrained YOLO26n model and train it on the COCO8 example dataset for 100 epochs
yolo train model=yolo26n.pt data=coco8.yaml epochs=100 imgsz=640
# Load a COCO-pretrained YOLO26n model and run inference on the 'bus.jpg' image
yolo predict model=yolo26n.pt source=path/to/bus.jpg
```


Dual-Head Architecture

YOLO26 features a **dual-head architecture** that provides flexibility for different deployment scenarios:

**One-to-One Head (Default)**: Produces end-to-end predictions without NMS, outputting`(N, 300, 6)`

with a maximum of 300 detections per image. This head is optimized for fast inference and simplified deployment.**One-to-Many Head**: Generates traditional YOLO outputs requiring NMS post-processing, outputting`(N, nc + 4, 8400)`

where`nc`

is the number of classes. This head typically achieves slightly higher accuracy at the cost of additional processing.

You can switch between heads during export, prediction, or validation:

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt")
# Use one-to-one head (default, no NMS required)
results = model.predict("image.jpg") # inference
metrics = model.val(data="coco.yaml") # validation
model.export(format="onnx") # export
# Use one-to-many head (requires NMS)
results = model.predict("image.jpg", end2end=False) # inference
metrics = model.val(data="coco.yaml", end2end=False) # validation
model.export(format="onnx", end2end=False) # export
```


```
# Use one-to-one head (default, no NMS required)
yolo predict model=yolo26n.pt source=image.jpg
yolo val model=yolo26n.pt data=coco.yaml
yolo export model=yolo26n.pt format=onnx
# Use one-to-many head (requires NMS)
yolo predict model=yolo26n.pt source=image.jpg end2end=False
yolo val model=yolo26n.pt data=coco.yaml end2end=False
yolo export model=yolo26n.pt format=onnx end2end=False
```


The choice depends on your deployment requirements: use the one-to-one head for maximum speed and simplicity, or the one-to-many head when accuracy is the top priority.

## YOLOE-26: Open-Vocabulary Instance Segmentation

YOLOE-26 integrates the high-performance YOLO26 architecture with the open-vocabulary capabilities of the [YOLOE](../yoloe/) series. It enables real-time detection and segmentation of any object class using **text prompts**, **visual prompts**, or a **prompt-free mode** for zero-shot inference, effectively removing the constraints of fixed-category training.

By leveraging YOLO26's **NMS-free, end-to-end design**, YOLOE-26 delivers fast open-world inference. This makes it a powerful solution for edge applications in dynamic environments where the objects of interest represent a broad and evolving vocabulary.

Performance

See [YOLOE Docs](.././yoloe/) for usage examples with these models trained on [Objects365v1](https://opendatalab.com/OpenDataLab/Objects365_v1), [GQA](https://cs.stanford.edu/people/dorarad/gqa/about.html) and [Flickr30k](https://shannon.cs.illinois.edu/DenotationGraph/) datasets.

| Model | size(pixels) | Prompt Type | mAPminival50-95(e2e) | mAPminival50-95 | mAPr | mAPc | mAPf | params(M) | FLOPs(B) |
|---|---|---|---|---|---|---|---|---|---|
|

[YOLOE-26s-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt)[YOLOE-26m-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26m-seg.pt)[YOLOE-26l-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26l-seg.pt)[YOLOE-26x-seg](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26x-seg.pt)See [YOLOE Docs](.././yoloe/) for usage examples with these models trained on [Objects365v1](https://opendatalab.com/OpenDataLab/Objects365_v1), [GQA](https://cs.stanford.edu/people/dorarad/gqa/about.html) and [Flickr30k](https://shannon.cs.illinois.edu/DenotationGraph/) datasets.

| Model | size(pixels) | mAPminival50-95(e2e) | mAPminival50(e2e) | params(M) | FLOPs(B) |
|---|---|---|---|---|---|
|

[YOLOE-26s-seg-pf](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg-pf.pt)[YOLOE-26m-seg-pf](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26m-seg-pf.pt)[YOLOE-26l-seg-pf](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26l-seg-pf.pt)[YOLOE-26x-seg-pf](https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26x-seg-pf.pt)### Usage Example

YOLOE-26 supports both text-based and visual prompting. Using prompts is straightforward—just pass them through the `predict`

method as shown below:

Example

Text prompts allow you to specify the classes that you wish to detect through textual descriptions. The following code shows how you can use YOLOE-26 to detect people and buses in an image:

```
from ultralytics import YOLO
# Initialize model
model = YOLO("yoloe-26l-seg.pt") # or select yoloe-26s/m-seg.pt for different sizes
# Set text prompt to detect person and bus. You only need to do this once after you load the model.
model.set_classes(["person", "bus"])
# Run detection on the given image
results = model.predict("path/to/image.jpg")
# Show results
results[0].show()
```


Visual prompts allow you to guide the model by showing it visual examples of the target classes, rather than describing them in text.

```
import numpy as np
from ultralytics import YOLO
from ultralytics.models.yolo.yoloe import YOLOEVPSegPredictor
# Initialize model
model = YOLO("yoloe-26l-seg.pt")
# Define visual prompts using bounding boxes and their corresponding class IDs.
# Each box highlights an example of the object you want the model to detect.
visual_prompts = dict(
bboxes=np.array(
[
[221.52, 405.8, 344.98, 857.54], # Box enclosing person
[120, 425, 160, 445], # Box enclosing glasses
],
),
cls=np.array(
[
0, # ID to be assigned for person
1, # ID to be assigned for glasses
]
),
)
# Run inference on an image, using the provided visual prompts as guidance
results = model.predict(
"ultralytics/assets/bus.jpg",
visual_prompts=visual_prompts,
predictor=YOLOEVPSegPredictor,
)
# Show results
results[0].show()
```


YOLOE-26 includes prompt-free variants that come with a built-in vocabulary. These models don't require any prompts and work like traditional YOLO models. Instead of relying on user-provided labels or visual examples, they detect objects from a [predefined list of 4,585 classes](https://github.com/xinyu1205/recognize-anything/blob/main/ram/data/ram_tag_list.txt) based on the tag set used by the [Recognize Anything Model Plus (RAM++)](https://arxiv.org/abs/2310.15200).

```
from ultralytics import YOLO
# Initialize model
model = YOLO("yoloe-26l-seg-pf.pt")
# Run prediction. No prompts required.
results = model.predict("path/to/image.jpg")
# Show results
results[0].show()
```


For a deep dive into prompting techniques, training from scratch, and full usage examples, visit the ** YOLOE Documentation**.

## Citations and Acknowledgments

Ultralytics YOLO26 Publication

Ultralytics has not published a formal research paper for YOLO26 due to the rapidly evolving nature of the models. Instead, we focus on delivering cutting-edge models and making them easy to use. For the latest updates on YOLO features, architectures, and usage, visit our [GitHub repository](https://github.com/ultralytics/ultralytics) and [documentation](https://docs.ultralytics.com/).

If you use YOLO26 or other Ultralytics software in your work, please cite it as:

```
@software{yolo26_ultralytics,
author = {Glenn Jocher and Jing Qiu},
title = {Ultralytics YOLO26},
version = {26.0.0},
year = {2026},
url = {https://github.com/ultralytics/ultralytics},
orcid = {0000-0001-5950-6979, 0000-0003-3783-7069},
license = {AGPL-3.0}
}
```


DOI pending. YOLO26 is available under [AGPL-3.0](https://github.com/ultralytics/ultralytics/blob/main/LICENSE) and [Enterprise](https://www.ultralytics.com/license) licenses.

## FAQ

### What are the key improvements in YOLO26 compared to YOLO11?

**DFL Removal**: Simplifies export and expands edge compatibility**End-to-End NMS-Free Inference**: Eliminates NMS for faster, simpler deployment**ProgLoss + STAL**: Boosts accuracy, especially on small objects**MuSGD Optimizer**: Combines SGD and Muon (inspired by Moonshot's Kimi K2) for more stable, efficient training**Up to 43% Faster CPU Inference**: Major performance gains for CPU-only devices

### What tasks does YOLO26 support?

YOLO26 is a **unified model family**, providing end-to-end support for multiple computer vision tasks:

[Object Detection](../../tasks/detect/)[Instance Segmentation](../../tasks/segment/)[Image Classification](../../tasks/classify/)[Pose Estimation](../../tasks/pose/)[Oriented Object Detection (OBB)](../../tasks/obb/)

Each size variant (n, s, m, l, x) supports all tasks, plus open-vocabulary versions via [YOLOE-26](#yoloe-26-open-vocabulary-instance-segmentation).

### Why is YOLO26 optimized for edge deployment?

YOLO26 delivers **state-of-the-art edge performance** with:

- Up to 43% faster CPU inference
- Reduced model size and memory footprint
- Architecture simplified for compatibility (no DFL, no NMS)
- Flexible export formats including TensorRT, ONNX, CoreML, TFLite, and OpenVINO

### How do I get started with YOLO26?

YOLO26 models were released on January 14, 2026, and are available for download. Install or update the `ultralytics`

package and load a model:

```
from ultralytics import YOLO
# Load a pretrained YOLO26 nano model
model = YOLO("yolo26n.pt")
# Run inference on an image
results = model("image.jpg")
```


See the [Usage Examples](#usage-examples) section for training, validation, and export instructions.

---

## Source: https://docs.ultralytics.com/zh/

# 主页

隆重推出 Ultralytics [YOLO26](models/yolo26/)，备受赞誉的实时目标检测和图像分割模型的最新版本。YOLO26 基于[深度学习](https://www.ultralytics.com/glossary/deep-learning-dl)和[计算机视觉](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025)的最新进展构建，具有端到端无 NMS 推理和优化的边缘部署能力。其流线型设计使其适用于各种应用，并可轻松适应从边缘设备到云 API 的不同硬件平台。对于稳定的生产工作负载，推荐使用 YOLO26 和 [YOLO11](models/yolo11/)。

探索 Ultralytics 文档，这是一个综合资源，旨在帮助您理解和利用其特性和功能。无论您是经验丰富的[机器学习](https://www.ultralytics.com/glossary/machine-learning-ml)从业者还是该领域的新手，此中心都旨在最大限度地发挥 YOLO 在您项目中的潜力。

## 从哪里开始

**快速入门**安装

`ultralytics`

使用 pip 在几分钟内启动并运行，以训练 YOLO 模型**预测**使用 YOLO 预测新图像、视频和流

**训练模型**从头开始在你自己的自定义数据集上训练一个新的 YOLO 模型，或者加载并在预训练的模型上训练

**探索计算机视觉任务**探索 YOLO 任务，例如 detect、segment、classify、姿势估计、旋转框检测 和 track。

**探索 YOLO26 🚀 新功能**探索 Ultralytics 最新的 YOLO26 模型，具有无 NMS 推理和边缘优化功能

**SAM 3: 用概念分割万物 🚀 新功能**Meta 最新的 SAM 3 支持可提示概念分割 - 使用文本或图像示例分割所有实例

**开源，AGPL-3.0**Ultralytics 提供两种 YOLO 许可：AGPL-3.0 和企业版。在

[GitHub](https://github.com/ultralytics/ultralytics)上探索 YOLO。

**观看：** 如何在您的自定义数据集上训练 YOLO26 模型 [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO 简史

[YOLO](models/)（You Only Look Once）是一种流行的[物体检测](https://www.ultralytics.com/glossary/object-detection)和[图像分割](https://www.ultralytics.com/glossary/image-segmentation)模型，由华盛顿大学的 Joseph Redmon 和 Ali Farhadi 开发。YOLO 于 2015 年推出，因其高速和高精度而广受欢迎。

[YOLOv2](models/)于2016年发布，通过引入批量归一化、锚框和维度聚类，改进了原始模型。- 2018年推出的
[YOLOv3](models/yolov3/)，通过使用更高效的主干网络、多个锚点和空间金字塔池化，进一步提高了模型的性能。 [YOLOv4](models/yolov4/)于 2020 年发布，引入了诸如 Mosaic[数据增强](https://www.ultralytics.com/glossary/data-augmentation)、一种新的无锚框检测头以及一种新的[损失函数](https://www.ultralytics.com/glossary/loss-function)等创新。[YOLOv5](models/yolov5/)进一步提高了模型的性能，并添加了新功能，例如超参数优化、集成实验跟踪和自动导出为流行的导出格式。[YOLOv6](models/yolov6/)由[美团](https://www.meituan.com/)于 2022 年开源，并已应用于该公司的许多自动送货机器人中。[YOLOv7](models/yolov7/)添加了其他任务，例如在 COCO 关键点数据集上进行姿势估计。- Ultralytics 于 2023 年发布的
[YOLOv8](models/yolov8/)引入了新功能和改进，以增强性能、灵活性和效率，并支持全方位的视觉 AI 任务。 [YOLOv9](models/yolov9/)引入了诸如可编程梯度信息 (PGI) 和通用高效层聚合网络 (GELAN) 等创新方法。[YOLOv10](models/yolov10/)由[清华大学](https://www.tsinghua.edu.cn/en/)的研究人员使用[Ultralytics](https://www.ultralytics.com/)[Python package](https://pypi.org/project/ultralytics/)创建，通过引入消除非极大值抑制 (NMS) 要求的端到端头部，提供实时的[目标检测](tasks/detect/)改进。：于 2024 年 9 月发布，YOLO11 在多项任务中表现出色，包括[YOLO11](models/yolo11/)[目标 detect](tasks/detect/)、[segment](tasks/segment/)、[姿势估计](tasks/pose/)、[track](modes/track/)和[分类](tasks/classify/)，可部署到各种 AI 应用和领域。：Ultralytics 的下一代 YOLO 模型，针对边缘部署进行了优化，具有端到端无 NMS 推理功能。[YOLO26](models/yolo26/)🚀

## YOLO 许可：Ultralytics YOLO 如何授权？

Ultralytics 提供两种许可选项，以适应不同的使用场景：

**AGPL-3.0 许可**：此[经 OSI 批准的](https://opensource.org/license/agpl-v3)开源许可非常适合学生和爱好者，可促进开放协作和知识共享。有关更多详细信息，请参见[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)文件。**企业许可**：此许可专为商业用途而设计，允许将 Ultralytics 软件和 AI 模型无缝集成到商业产品和服务中，从而绕过 AGPL-3.0 的开源要求。如果您的场景涉及将我们的解决方案嵌入到商业产品中，请通过[Ultralytics 许可](https://www.ultralytics.com/license)与我们联系。

我们的许可策略旨在确保我们开源项目的任何改进都能回馈社区。我们坚信开源，我们的使命是确保我们的贡献能够以造福所有人的方式被使用和扩展。

## 目标检测的演变

多年来，对象检测技术已经发生了显著的演变，从传统的计算机视觉技术发展到先进的深度学习模型。[YOLO 模型系列](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models)一直处于这一发展的前沿，不断突破实时对象检测的可能性。

YOLO 的独特方法将对象检测视为一个单一的回归问题，通过一次评估直接从完整图像中预测[边界框](https://www.ultralytics.com/glossary/bounding-box)和类别概率。这种革命性的方法使 YOLO 模型比以前的两阶段检测器快得多，同时保持了高精度。

随着每个新版本的发布，YOLO 都引入了架构改进和创新技术，从而提升了各项指标的性能。YOLO26 延续了这一传统，融合了计算机视觉研究的最新进展，具有端到端无 NMS 推理和优化的边缘部署能力，适用于实际应用。

## 常见问题

### 什么是 Ultralytics YOLO？它如何改进目标检测？

Ultralytics YOLO 是备受赞誉的 YOLO (You Only Look Once) 系列，用于实时目标检测和图像分割。最新模型 [YOLO26](models/yolo26/) 在先前版本的基础上，引入了端到端无 NMS 推理和优化的边缘部署。YOLO 支持多种 [视觉 AI 任务](tasks/)，例如 detect、segment、姿势估计、track 和分类。其高效架构确保了出色的速度和准确性，使其适用于各种应用，包括边缘设备和云 API。

### 如何开始 YOLO 的安装和设置？

YOLO 的入门非常快速和直接。您可以使用 [pip](https://pypi.org/project/ultralytics/) 安装 Ultralytics 软件包，并在几分钟内启动并运行。这是一个基本的安装命令：

使用 pip 安装

```
pip install -U ultralytics
```


有关全面的分步指南，请访问我们的[快速入门](quickstart/)页面。此资源将帮助您完成安装说明、初始设置和运行您的第一个模型。

### 如何在我的数据集上训练自定义 YOLO 模型？

在您自己的数据集上训练自定义 YOLO 模型涉及几个详细的步骤：

- 准备带注释的数据集。
- 在 YAML 文件中配置训练参数。
- 使用
`yolo TASK train`

命令开始训练。（每个`TASK`

都有其自己的参数）

以下是对象检测任务的示例代码：

对象检测任务的训练示例

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


有关详细的演练，请查看我们的[模型训练](modes/train/)指南，其中包含优化训练过程的示例和技巧。

### Ultralytics YOLO 有哪些可用的许可选项？

Ultralytics 为 YOLO 提供两种许可选项：

**AGPL-3.0 许可**：此开源许可非常适合教育和非商业用途，可促进开放协作。**企业许可**：此许可专为商业应用而设计，允许将 Ultralytics 软件无缝集成到商业产品中，而没有 AGPL-3.0 许可的限制。

有关更多详细信息，请访问我们的[许可](https://www.ultralytics.com/license)页面。

### Ultralytics YOLO 如何用于实时目标跟踪？

Ultralytics YOLO 支持高效且可定制的多对象跟踪。要使用跟踪功能，您可以使用 `yolo track`

命令，如下所示：

视频对象跟踪示例

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


有关设置和运行对象跟踪的详细指南，请查看我们的[跟踪模式](modes/track/)文档，其中解释了实时场景中的配置和实际应用。

---

## Source: https://docs.ultralytics.com/ko/

# 홈

유명한 실시간 객체 detect 및 이미지 segment 모델의 최신 버전인 Ultralytics [YOLO26](models/yolo26/)를 소개합니다. YOLO26는 [딥러닝](https://www.ultralytics.com/glossary/deep-learning-dl) 및 [컴퓨터 비전](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025)의 발전을 기반으로 구축되었으며, 엔드투엔드 NMS-free 추론 및 최적화된 엣지 배포를 특징으로 합니다. 간소화된 설계로 다양한 애플리케이션에 적합하며, 엣지 장치부터 클라우드 API에 이르기까지 다양한 하드웨어 플랫폼에 쉽게 적용할 수 있습니다. 안정적인 프로덕션 워크로드를 위해 YOLO26와 [YOLO11](models/yolo11/) 모두 권장됩니다.

Ultralytics Docs를 살펴보세요. 이 포괄적인 리소스는 Ultralytics의 기능과 성능을 이해하고 활용할 수 있도록 설계되었습니다. 숙련된 [머신 러닝](https://www.ultralytics.com/glossary/machine-learning-ml) 전문가이든 이 분야를 처음 접하는 사람이든, 이 허브는 프로젝트에서 YOLO의 잠재력을 극대화하는 것을 목표로 합니다.

## 시작하기

**시작하기**설치

`ultralytics`

pip를 사용하여 몇 분 안에 YOLO 모델을 훈련하고 실행할 수 있습니다.**예측**YOLO를 사용하여 새로운 이미지, 비디오 및 스트림에서 예측합니다.

**모델 훈련**자체 사용자 정의 데이터 세트에서 새로운 YOLO 모델을 처음부터 훈련하거나 사전 훈련된 모델을 로드하여 훈련합니다.

**컴퓨터 비전 작업 살펴보기**detect, segment, classify, pose, OBB 및 track과 같은 YOLO task를 알아보세요.

**YOLO26 살펴보기 🚀 신규**NMS-free 추론 및 엣지 최적화 기능을 갖춘 Ultralytics의 최신 YOLO26 모델을 만나보세요.

**SAM 3: 개념을 통한 모든 것 segment 🚀 NEW**Meta의 최신 SAM 3, Promptable Concept Segmentation 포함 - 텍스트 또는 이미지 예시를 사용하여 모든 인스턴스 segment

**오픈 소스, AGPL-3.0**Ultralytics는 두 가지 YOLO 라이선스(AGPL-3.0 및 Enterprise)를 제공합니다.

[GitHub](https://github.com/ultralytics/ultralytics)에서 YOLO를 살펴보세요.

**참고:** 사용자 지정 데이터셋으로 YOLO26 모델을 훈련하는 방법 [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: 간략한 역사

[YOLO](models/)(You Only Look Once)는 널리 사용되는 [객체 감지](https://www.ultralytics.com/glossary/object-detection) 및 [이미지 분할](https://www.ultralytics.com/glossary/image-segmentation) 모델로, 워싱턴 대학교의 Joseph Redmon과 Ali Farhadi가 개발했습니다. 2015년에 출시된 YOLO는 빠른 속도와 정확성으로 인기를 얻었습니다.

- 2016년에 출시된
[YOLOv2](models/)는 배치 정규화, 앵커 박스 및 차원 클러스터를 통합하여 원래 모델을 개선했습니다. - 2018년에 출시된
[YOLOv3](models/yolov3/)는 더욱 효율적인 백본 네트워크, 다중 앵커 및 공간 피라미드 풀링을 사용하여 모델의 성능을 더욱 향상시켰습니다. [YOLOv4](models/yolov4/)는 2020년에 Mosaic[데이터 증강](https://www.ultralytics.com/glossary/data-augmentation), 새로운 앵커 프리 감지 헤드 및 새로운[손실 함수](https://www.ultralytics.com/glossary/loss-function)와 같은 혁신을 도입했습니다.[YOLOv5](models/yolov5/)는 모델의 성능을 더욱 개선하고 하이퍼파라미터 최적화, 통합 실험 추적, 널리 사용되는 내보내기 형식으로의 자동 내보내기 등의 새로운 기능을 추가했습니다.[YOLOv6](models/yolov6/)은 2022년[Meituan](https://www.meituan.com/)에 의해 오픈 소스로 공개되었으며, 회사의 많은 자율 배달 로봇에 사용됩니다.[YOLOv7](models/yolov7/)은 COCO 키포인트 데이터 세트에 대한 포즈 추정과 같은 추가 작업을 추가했습니다.[YOLOv8](models/yolov8/)은(는) 2023년에 Ultralytics에서 출시되었으며, 향상된 성능, 유연성 및 효율성을 위해 새로운 기능과 개선 사항을 도입하여 모든 범위의 비전 AI 작업을 지원합니다.[YOLOv9](models/yolov9/)는 PGI(Programmable Gradient Information) 및 GELAN(Generalized Efficient Layer Aggregation Network)과 같은 혁신적인 방법을 도입했습니다.[Tsinghua University](models/yolov10/)의 연구자들이[Ultralytics](https://www.ultralytics.com/)[Python 패키지](https://pypi.org/project/ultralytics/)를 사용하여 만든[YOLOv10](models/yolov10/)은[객체 detect](tasks/detect/)의 발전을 제공하며, Non-Maximum Suppression (NMS) 요구 사항을 제거하는 End-to-End 헤드를 도입합니다.: 2024년 9월에 출시된 YOLO11은[YOLO11](models/yolo11/)[객체 detect](tasks/detect/),[segmentation](tasks/segment/),[자세 추정](tasks/pose/),[tracking](modes/track/)및[분류](tasks/classify/)를 포함한 여러 작업에서 뛰어난 성능을 제공하여 다양한 AI 애플리케이션 및 도메인에 배포할 수 있습니다.: 종단 간 NMS-free 추론 기능을 갖춘 엣지 배포에 최적화된 Ultralytics의 차세대 YOLO 모델.[YOLO26](models/yolo26/)🚀

## YOLO 라이선스: Ultralytics YOLO 라이선스는 어떻게 되나요?

Ultralytics는 다양한 사용 사례를 수용하기 위해 두 가지 라이선스 옵션을 제공합니다.

**AGPL-3.0 라이선스**: 이[OSI 승인](https://opensource.org/license/agpl-v3)오픈 소스 라이선스는 학생과 매니아에게 적합하며, 개방형 협업과 지식 공유를 장려합니다. 자세한 내용은[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)파일을 참조하십시오.**Enterprise 라이선스**: 상업적 용도로 설계된 이 라이선스는 AGPL-3.0의 오픈 소스 요구 사항을 우회하여 Ultralytics 소프트웨어 및 AI 모델을 상업 제품 및 서비스에 원활하게 통합할 수 있도록 허용합니다. 당사의 솔루션을 상업적 제품에 포함하는 경우[Ultralytics 라이선스](https://www.ultralytics.com/license)를 통해 문의하십시오.

저희의 라이선싱 전략은 오픈 소스 프로젝트에 대한 모든 개선 사항이 커뮤니티로 환원되도록 설계되었습니다. 저희는 오픈 소스를 지지하며, 저희의 기여가 모두에게 이로운 방식으로 사용되고 확장될 수 있도록 하는 것이 저희의 사명입니다.

## 객체 감지의 진화

객체 감지는 전통적인 컴퓨터 비전 기술에서 고급 딥 러닝 모델에 이르기까지 수년에 걸쳐 크게 발전했습니다. [YOLO 모델 제품군](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models)은 이러한 발전의 최전선에 있었으며 실시간 객체 감지에서 가능한 것의 경계를 지속적으로 확장하고 있습니다.

YOLO의 고유한 접근 방식은 객체 감지를 단일 회귀 문제로 취급하여 한 번의 평가에서 전체 이미지에서 직접 [경계 상자](https://www.ultralytics.com/glossary/bounding-box)와 클래스 확률을 예측합니다. 이 혁신적인 방법은 YOLO 모델을 이전의 2단계 감지기보다 훨씬 빠르게 만들면서도 높은 정확도를 유지합니다.

새로운 버전이 출시될 때마다 YOLO는 다양한 지표에서 성능을 향상시키는 아키텍처 개선 사항과 혁신적인 기술을 도입했습니다. YOLO26은 컴퓨터 비전 연구의 최신 발전을 통합하여 이러한 전통을 이어가며, 실제 애플리케이션을 위한 종단 간 NMS-free 추론 및 최적화된 엣지 배포를 특징으로 합니다.

## FAQ

### Ultralytics YOLO는 무엇이며 어떻게 객체 탐지를 개선합니까?

Ultralytics YOLO는 실시간 객체 detect 및 이미지 segmentation을 위한 유명한 YOLO(You Only Look Once) 시리즈입니다. 최신 모델인 [YOLO26](models/yolo26/)은 종단 간 NMS-free 추론 및 최적화된 엣지 배포를 도입하여 이전 버전을 기반으로 구축되었습니다. YOLO는 detect, segmentation, 자세 추정, tracking 및 분류와 같은 다양한 [비전 AI 작업](tasks/)을 지원합니다. 효율적인 아키텍처는 뛰어난 속도와 정확도를 보장하여 엣지 장치 및 클라우드 API를 포함한 다양한 애플리케이션에 적합합니다.

### YOLO 설치 및 설정을 시작하려면 어떻게 해야 합니까?

YOLO 시작하기는 빠르고 간단합니다. [pip](https://pypi.org/project/ultralytics/)를 사용하여 Ultralytics 패키지를 설치하고 몇 분 안에 시작할 수 있습니다. 다음은 기본적인 설치 명령입니다.

pip를 사용한 설치

```
pip install -U ultralytics
```


자세한 단계별 가이드는 [Quickstart](quickstart/) 페이지를 참조하세요. 이 리소스는 설치 지침, 초기 설정 및 첫 번째 모델 실행에 도움이 될 것입니다.

### 내 데이터 세트에 사용자 정의 YOLO 모델을 훈련하려면 어떻게 해야 합니까?

데이터 세트에서 사용자 정의 YOLO 모델을 훈련하려면 몇 가지 자세한 단계가 필요합니다.

- 어노테이션된 데이터 세트를 준비합니다.
- YAML 파일에서 훈련 파라미터를 구성합니다.
- 다음을 사용하여
`yolo TASK train`

명령을 사용하여 훈련을 시작합니다. (각각`TASK`

자체 인수를 가집니다.)

다음은 객체 감지 작업에 대한 예제 코드입니다.

객체 감지 작업에 대한 훈련 예제

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


자세한 내용은 훈련 프로세스 최적화를 위한 예제와 팁이 포함된 [모델 훈련](modes/train/) 가이드를 확인하십시오.

### Ultralytics YOLO에 사용할 수 있는 라이선스 옵션은 무엇입니까?

Ultralytics는 YOLO에 대해 두 가지 라이선스 옵션을 제공합니다.

**AGPL-3.0 라이선스**: 이 오픈 소스 라이선스는 교육 및 비상업적 용도에 적합하며 개방형 협업을 장려합니다.**Enterprise 라이선스**: 상업용 애플리케이션을 위해 설계되었으며 AGPL-3.0 라이선스의 제한 없이 Ultralytics 소프트웨어를 상업용 제품에 원활하게 통합할 수 있습니다.

자세한 내용은 [라이선스](https://www.ultralytics.com/license) 페이지를 참조하십시오.

### Ultralytics YOLO를 실시간 객체 추적에 어떻게 사용할 수 있습니까?

Ultralytics YOLO는 효율적이고 사용자 정의 가능한 다중 객체 추적을 지원합니다. 추적 기능을 활용하려면 다음을 사용할 수 있습니다. `yolo track`

명령어는 다음과 같습니다:

비디오에서 객체 추적 예시

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


객체 추적 설정 및 실행에 대한 자세한 가이드는 [Track Mode](modes/track/) 문서를 확인하십시오. 실시간 시나리오에서의 구성 및 실제 적용에 대해 설명합니다.

---

## Source: https://docs.ultralytics.com/ja/

# ホーム

評価の高いリアルタイム物体detectおよび画像segmentモデルの最新バージョンであるUltralytics [YOLO26](models/yolo26/)をご紹介します。YOLO26は、[ディープラーニング](https://www.ultralytics.com/glossary/deep-learning-dl)と[コンピュータービジョン](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025)の進歩に基づいて構築されており、エンドツーエンドのNMSフリー推論と最適化されたエッジデプロイメントを特徴としています。その合理化された設計により、さまざまなアプリケーションに適しており、エッジデバイスからクラウドAPIまで、さまざまなハードウェアプラットフォームに容易に適応できます。安定した本番ワークロードには、YOLO26と[YOLO11](models/yolo11/)の両方が推奨されます。

Ultralytics Docsをご覧ください。これは、その機能と能力を理解し活用するために設計された包括的なリソースです。あなたが経験豊富な[機械学習](https://www.ultralytics.com/glossary/machine-learning-ml)の実践者であろうと、この分野の初心者であろうと、このハブはあなたのプロジェクトにおけるYOLOの可能性を最大限に引き出すことを目指しています。

## はじめに

**はじめに**インストール

`ultralytics`

pipを使用して数分でYOLOモデルをトレーニングできるようになります。**予測**YOLOで新しい画像、ビデオ、ストリームを予測する

**モデルの学習**独自のカスタムデータセットで新しいYOLOモデルをスクラッチから学習するか、事前学習済みのモデルをロードして学習します。

**コンピュータビジョンタスクをご覧ください**detect、segment、classify、pose、obb、trackなどのYOLOタスクを発見

**YOLO26を探る 🚀 新機能**NMSフリー推論とエッジ最適化を備えたUltralyticsの最新YOLO26モデルを発見

**SAM 3: コンセプトで何でもsegment 🚀 NEW**Metaの最新SAM 3、プロンプト可能なコンセプトsegmentation搭載 - テキストまたは画像例を使用してすべてのインスタンスをsegment

**オープンソース、AGPL-3.0**Ultralyticsは、AGPL-3.0とEnterpriseの2つのYOLOライセンスを提供しています。

[GitHub](https://github.com/ultralytics/ultralytics)でYOLOをご覧ください。

**見る:** カスタムデータセットでYOLO26モデルをトレーニングする方法 [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO：簡単な歴史

[YOLO](models/)（You Only Look Once）は、ワシントン大学のJoseph RedmonとAli Farhadiによって開発された、広く普及している[物体検出](https://www.ultralytics.com/glossary/object-detection)および[画像セグメンテーション](https://www.ultralytics.com/glossary/image-segmentation)モデルです。2015年に発表されたYOLOは、その高速性と精度で人気を博しました。

- 2016年にリリースされた
[YOLOv2](models/)は、バッチ正規化、アンカーボックス、および次元クラスタを組み込むことで、元のモデルを改善しました。 [YOLOv3](models/yolov3/)は、2018年に発表され、より効率的なバックボーンネットワーク、複数のアンカー、および空間ピラミッドプーリングを使用して、モデルのパフォーマンスをさらに向上させました。[YOLOv4](models/yolov4/)は2020年にリリースされ、Mosaic[データ拡張](https://www.ultralytics.com/glossary/data-augmentation)、新しいアンカーフリー検出ヘッド、および新しい[損失関数](https://www.ultralytics.com/glossary/loss-function)などの革新的な機能が導入されました。[YOLOv5](models/yolov5/)は、モデルの性能をさらに向上させ、ハイパーパラメータ最適化、統合された実験追跡、一般的なエクスポート形式への自動エクスポートなどの新機能を追加しました。[YOLOv6](models/yolov6/)は2022年に[Meituan](https://www.meituan.com/)によってオープンソース化され、同社の多くの自律配送ロボットで使用されています。[YOLOv7](models/yolov7/)は、COCOキーポイントデータセットでの姿勢推定など、追加のタスクを加えました。[YOLOv8](models/yolov8/)は、Ultralyticsによって2023年にリリースされ、パフォーマンス、柔軟性、効率を向上させるための新機能と改善が導入され、幅広いビジョンAIタスクをサポートしています。[YOLOv9](models/yolov9/)は、Programmable Gradient Information (PGI) やGeneralized Efficient Layer Aggregation Network (GELAN) といった革新的な手法を導入しています。[Ultralytics](models/yolov10/)[Pythonパッケージ](https://pypi.org/project/ultralytics/)を使用して[清華大学](https://www.tsinghua.edu.cn/en/)の研究者によって作成された[YOLOv10](models/yolov10/)は、Non-Maximum Suppression (NMS)の要件を排除するEnd-to-Endヘッドを導入することにより、リアルタイム[物体検出](tasks/detect/)の進歩を提供します。: 2024年9月にリリースされたYOLO11は、[YOLO11](models/yolo11/)[物体detect](tasks/detect/)、[segment](tasks/segment/)、[ポーズ推定](tasks/pose/)、[track](modes/track/)、[分類](tasks/classify/)を含む複数のタスクで優れたパフォーマンスを発揮し、多様なAIアプリケーションやドメインでのデプロイメントを可能にします。: エンドツーエンドのNMSフリー推論とエッジデプロイメントに最適化されたUltralyticsの次世代YOLOモデル。[YOLO26](models/yolo26/)🚀

## YOLO ライセンス：Ultralytics YOLO はどのようにライセンスされていますか？

Ultralyticsは、多様なユースケースに対応するために、2つのライセンスオプションを提供しています。

**AGPL-3.0 License**: この[OSI承認済みの](https://opensource.org/license/agpl-v3)オープンソースライセンスは、学生や愛好家にとって理想的であり、オープンなコラボレーションと知識の共有を促進します。詳細については、[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)ファイルを参照してください。**エンタープライズライセンス**: 商用利用向けに設計されたこのライセンスは、UltralyticsソフトウェアとAIモデルを商用製品およびサービスにシームレスに統合することを許可し、AGPL-3.0のオープンソース要件を回避します。当社のソリューションを商用製品に組み込む場合は、[Ultralyticsライセンス](https://www.ultralytics.com/license)を通じてご連絡ください。

当社のライセンス戦略は、オープンソースプロジェクトへの改善がコミュニティに還元されるように設計されています。当社はオープンソースを信じており、当社の貢献が、すべての人に利益をもたらす形で利用および拡張されることを保証することが使命です。

## 物体検出の進化

オブジェクト検出は、従来のコンピュータビジョンの技術から高度な深層学習モデルへと、長年にわたり大きく進化してきました。[YOLOモデルファミリー](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models)は、この進化の最前線に立ち、リアルタイムオブジェクト検出で可能なことの限界を常に押し広げています。

YOLO独自のオブジェクト検出アプローチは、オブジェクト検出を単一の回帰問題として扱い、1回の評価で画像全体から直接[バウンディングボックス](https://www.ultralytics.com/glossary/bounding-box)とクラス確率を予測します。この革新的な手法により、YOLOモデルは高い精度を維持しながら、従来の2段階検出器よりも大幅に高速化されました。

新しいバージョンがリリースされるたびに、YOLOはさまざまなメトリクスでパフォーマンスを向上させるアーキテクチャの改善と革新的な技術を導入してきました。YOLO26は、コンピュータービジョン研究における最新の進歩を取り入れ、エンドツーエンドのNMSフリー推論と実世界アプリケーション向けの最適化されたエッジデプロイメントを特徴とすることで、この伝統を継承しています。

## よくある質問

### Ultralytics YOLOとは何ですか？また、どのように物体検出を改善しますか？

Ultralytics YOLOは、リアルタイム物体detectと画像segmentのための評価の高いYOLO (You Only Look Once) シリーズです。最新モデルの[YOLO26](models/yolo26/)は、エンドツーエンドのNMSフリー推論と最適化されたエッジデプロイメントを導入することで、以前のバージョンを基盤としています。YOLOは、detect、segment、ポーズ推定、track、分類など、さまざまな[ビジョンAIタスク](tasks/)をサポートしています。その効率的なアーキテクチャは優れた速度と精度を保証し、エッジデバイスやクラウドAPIを含む多様なアプリケーションに適しています。

### YOLOのインストールとセットアップを開始するにはどうすればよいですか？

YOLOの利用開始は迅速かつ簡単です。[pip](https://pypi.org/project/ultralytics/)を使用してUltralyticsパッケージをインストールすると、数分で起動して実行できます。基本的なインストールコマンドを次に示します。

pip を使用したインストール

```
pip install -U ultralytics
```


包括的なステップごとのガイドについては、[クイックスタート](quickstart/)ページをご覧ください。このリソースは、インストール手順、初期設定、および最初のモデルの実行に役立ちます。

### カスタムYOLOモデルを自分のデータセットでトレーニングするにはどうすればよいですか？

データセットでカスタムYOLOモデルを学習するには、いくつかの詳細な手順が必要です。

- アノテーション付きデータセットを準備します。
- YAMLファイルでトレーニングパラメータを設定します。
- 以下を使用します
`yolo TASK train`

コマンドを使用してトレーニングを開始します。（各`TASK`

独自の引数を持つ)

オブジェクト検出タスクのサンプルコードを以下に示します。

物体検出タスクの学習例

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


詳細なチュートリアルについては、[モデルのトレーニング](modes/train/)ガイドをご覧ください。このガイドには、トレーニングプロセスを最適化するための例とヒントが含まれています。

### Ultralytics YOLOで利用できるライセンスオプションは何ですか？

Ultralyticsは、YOLOに対して2つのライセンスオプションを提供しています。

**AGPL-3.0 License**: このオープンソースライセンスは、教育および非商用での使用に最適であり、オープンなコラボレーションを促進します。**エンタープライズライセンス**: これは商用アプリケーション向けに設計されており、AGPL-3.0ライセンスの制限なしに、Ultralyticsソフトウェアを商用製品にシームレスに統合できます。

詳細については、[ライセンス](https://www.ultralytics.com/license)ページをご覧ください。

### Ultralytics YOLOは、リアルタイムの物体追跡にどのように利用できますか？

Ultralytics YOLOは、効率的でカスタマイズ可能なマルチオブジェクトトラッキングをサポートしています。トラッキング機能を利用するには、以下を使用します。 `yolo track`

コマンドを以下に示します:

動画上の物体追跡の例

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


オブジェクト追跡の設定と実行に関する詳細なガイドについては、[Track Mode](modes/track/)のドキュメントをご覧ください。ここでは、リアルタイムシナリオでの構成と実用的なアプリケーションについて説明しています。

---

## Source: https://docs.ultralytics.com/ru/

# Главная

Представляем Ultralytics [YOLO26](models/yolo26/), последнюю версию признанной модели для обнаружения объектов в реальном времени и сегментации изображений. YOLO26 основан на достижениях в области [глубокого обучения](https://www.ultralytics.com/glossary/deep-learning-dl) и [компьютерного зрения](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), отличаясь сквозным выводом без NMS и оптимизированным развертыванием на периферии. Его оптимизированная конструкция делает его подходящим для различных приложений и легко адаптируемым к различным аппаратным платформам, от периферийных устройств до облачных API. Для стабильных производственных нагрузок рекомендуются как YOLO26, так и [YOLO11](models/yolo11/).

Изучите документацию Ultralytics, всеобъемлющий ресурс, разработанный, чтобы помочь вам понять и использовать ее функции и возможности. Независимо от того, являетесь ли вы опытным специалистом в области [машинного обучения](https://www.ultralytics.com/glossary/machine-learning-ml) или новичком в этой области, этот центр призван максимально раскрыть потенциал YOLO в ваших проектах.

## С чего начать

**Начало работы**Установите

`ultralytics`

с pip и начните работу в считанные минуты, чтобы обучить модель YOLO**Прогнозирование**Прогнозируйте на новых изображениях, видео и потоках с помощью YOLO

**Обучить модель**Обучите новую модель YOLO на своем собственном пользовательском наборе данных с нуля или загрузите и обучите на предварительно обученной модели.

**Изучите задачи компьютерного зрения**Откройте для себя задачи YOLO, такие как detect, segment, classify, pose, OBB и track

**Исследуйте YOLO26 🚀 НОВОЕ**Откройте для себя новейшие модели YOLO26 от Ultralytics с выводом без NMS и оптимизацией для периферийных устройств

**SAM 3: Segment Anything с концепциями 🚀 НОВИНКА**Новейшая SAM 3 от Meta с сегментацией концепций по подсказкам — segment все экземпляры, используя текстовые или образцовые изображения

**Открытый исходный код, AGPL-3.0**Ultralytics предлагает две лицензии YOLO: AGPL-3.0 и Enterprise. Изучите YOLO на

[GitHub](https://github.com/ultralytics/ultralytics).

**Смотреть:** Как обучить модель YOLO26 на вашем пользовательском наборе данных в [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Краткая история

[YOLO](models/) (You Only Look Once) — популярная модель [обнаружения объектов](https://www.ultralytics.com/glossary/object-detection) и [сегментации изображений](https://www.ultralytics.com/glossary/image-segmentation), разработанная Джозефом Редмоном и Али Фархади в Вашингтонском университете. Запущенная в 2015 году, YOLO приобрела популярность благодаря своей высокой скорости и точности.

[YOLOv2](models/), выпущенная в 2016 году, улучшила исходную модель за счет включения пакетной нормализации, якорных блоков и кластеров размеров.[YOLOv3](models/yolov3/), выпущенная в 2018 году, еще больше повысила производительность модели, используя более эффективную базовую сеть, несколько якорей и пространственный пирамидальный пулинг.[YOLOv4](models/yolov4/)была выпущена в 2020 году, представив такие инновации, как Mosaic[аугментация данных](https://www.ultralytics.com/glossary/data-augmentation), новую anchor-free детекцию и новую[функцию потерь](https://www.ultralytics.com/glossary/loss-function).[YOLOv5](models/yolov5/)еще больше улучшила производительность модели и добавила новые функции, такие как оптимизация гиперпараметров, интегрированное отслеживание экспериментов и автоматический экспорт в популярные форматы экспорта.[YOLOv6](models/yolov6/)была разработана компанией[Meituan](https://www.meituan.com/)в 2022 году с открытым исходным кодом и используется во многих автономных роботах-доставщиках компании.[YOLOv7](models/yolov7/)добавила дополнительные задачи, такие как оценка позы на наборе данных ключевых точек COCO.[YOLOv8](models/yolov8/), выпущенная Ultralytics в 2023 году, представила новые функции и улучшения для повышения производительности, гибкости и эффективности, поддерживая полный спектр задач компьютерного зрения.[YOLOv9](models/yolov9/)представляет инновационные методы, такие как Programmable Gradient Information (PGI) и Generalized Efficient Layer Aggregation Network (GELAN).[YOLOv10](models/yolov10/), созданная исследователями из[Университета Цинхуа](https://www.tsinghua.edu.cn/en/)с использованием[Ultralytics](https://www.ultralytics.com/)[пакета Python](https://pypi.org/project/ultralytics/), обеспечивает усовершенствования[detect объектов](tasks/detect/)в реальном времени, представляя сквозную головку, которая устраняет требования к Non-Maximum Suppression (NMS).: Выпущенная в сентябре 2024 года, YOLO11 обеспечивает превосходную производительность в различных задачах, включая[YOLO11](models/yolo11/)[обнаружение объектов](tasks/detect/),[segment](tasks/segment/),[оценку позы](tasks/pose/),[track](modes/track/)и[классификацию](tasks/classify/), что позволяет развертывать ее в различных приложениях и областях ИИ.: Модель YOLO следующего поколения от Ultralytics, оптимизированная для развертывания на периферии с сквозным выводом без NMS.[YOLO26](models/yolo26/)🚀

## Лицензии YOLO: Как лицензируется Ultralytics YOLO?

Ultralytics предлагает два варианта лицензирования для различных случаев использования:

**Лицензия AGPL-3.0**: Эта[одобренная OSI](https://opensource.org/license/agpl-v3)лицензия с открытым исходным кодом идеально подходит для студентов и энтузиастов, способствуя открытому сотрудничеству и обмену знаниями. Подробности см. в файле[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE).**Корпоративная лицензия**: Эта лицензия, предназначенная для коммерческого использования, позволяет плавно интегрировать программное обеспечение и модели искусственного интеллекта Ultralytics в коммерческие товары и услуги, минуя требования открытого исходного кода AGPL-3.0. Если ваш сценарий включает в себя внедрение наших решений в коммерческое предложение, свяжитесь с нами через[Ultralytics Licensing](https://www.ultralytics.com/license).

Наша лицензионная стратегия разработана для того, чтобы любые улучшения наших проектов с открытым исходным кодом возвращались сообществу. Мы верим в открытый исходный код, и наша миссия состоит в том, чтобы наши вклады могли использоваться и расширяться таким образом, чтобы это приносило пользу всем.

## Эволюция обнаружения объектов

Обнаружение объектов значительно эволюционировало за эти годы, от традиционных методов компьютерного зрения до передовых моделей глубокого обучения. [Семейство моделей YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) находится в авангарде этой эволюции, постоянно расширяя границы возможного в обнаружении объектов в реальном времени.

Уникальный подход YOLO рассматривает обнаружение объектов как единую задачу регрессии, предсказывая [ограничивающие рамки](https://www.ultralytics.com/glossary/bounding-box) и вероятности классов непосредственно из полных изображений за одну оценку. Этот революционный метод сделал модели YOLO значительно быстрее, чем предыдущие двухэтапные детекторы, при этом сохраняя высокую точность.

С каждой новой версией YOLO представляла архитектурные улучшения и инновационные методы, которые повышали производительность по различным метрикам. YOLO26 продолжает эту традицию, внедряя последние достижения в исследованиях компьютерного зрения, включая сквозной вывод без NMS и оптимизированное развертывание на периферии для реальных приложений.

## Часто задаваемые вопросы

### Что такое Ultralytics YOLO и как это улучшает обнаружение объектов?

Ultralytics YOLO — это признанная серия YOLO (You Only Look Once) для обнаружения объектов в реальном времени и сегментации изображений. Последняя модель, [YOLO26](models/yolo26/), основывается на предыдущих версиях, представляя сквозной вывод без NMS и оптимизированное развертывание на периферии. YOLO поддерживает различные [задачи визуального ИИ](tasks/), такие как detect, segment, оценка позы, track и классификация. Его эффективная архитектура обеспечивает превосходную скорость и точность, что делает его подходящим для различных приложений, включая периферийные устройства и облачные API.

### Как начать работу с установкой и настройкой YOLO?

Начать работу с YOLO можно быстро и просто. Вы можете установить пакет Ultralytics с помощью [pip](https://pypi.org/project/ultralytics/) и начать работу за считанные минуты. Вот основная команда установки:

Установка с использованием pip

```
pip install -U ultralytics
```


Для получения подробного пошагового руководства посетите нашу страницу [Quickstart](quickstart/). Этот ресурс поможет вам с инструкциями по установке, начальной настройкой и запуском вашей первой модели.

### Как обучить пользовательскую модель YOLO на моем наборе данных?

Обучение пользовательской модели YOLO на вашем наборе данных включает в себя несколько подробных шагов:

- Подготовьте свой аннотированный набор данных.
- Настройте параметры обучения в YAML-файле.
- Используйте
`yolo TASK train`

команду для начала обучения. (У каждого`TASK`

есть свой аргумент)

Вот пример кода для задачи обнаружения объектов:

Пример обучения для задачи обнаружения объектов

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Для подробного ознакомления ознакомьтесь с нашим руководством [Обучение модели](modes/train/), которое включает примеры и советы по оптимизации процесса обучения.

### Какие варианты лицензирования доступны для Ultralytics YOLO?

Ultralytics предлагает два варианта лицензирования для YOLO:

**Лицензия AGPL-3.0**: Эта лицензия с открытым исходным кодом идеально подходит для образовательного и некоммерческого использования, способствуя открытому сотрудничеству.**Корпоративная лицензия**: Предназначена для коммерческих приложений, позволяя беспрепятственно интегрировать программное обеспечение Ultralytics в коммерческие продукты без ограничений лицензии AGPL-3.0.

Для получения более подробной информации посетите нашу страницу [Лицензирование](https://www.ultralytics.com/license).

### Как Ultralytics YOLO можно использовать для отслеживания объектов в реальном времени?

Ultralytics YOLO поддерживает эффективное и настраиваемое отслеживание нескольких объектов. Чтобы использовать возможности отслеживания, вы можете использовать `yolo track`

команду, как показано ниже:

Пример отслеживания объектов на видео

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Подробное руководство по настройке и запуску отслеживания объектов можно найти в нашей документации по [Режиму отслеживания](modes/track/), где объясняются конфигурация и практическое применение в сценариях реального времени.

---

## Source: https://docs.ultralytics.com/de/

# Startseite

Wir stellen Ultralytics [YOLO26](models/yolo26/) vor, die neueste Version des anerkannten Modells für Echtzeit-Objekterkennung und Bildsegmentierung. YOLO26 basiert auf Fortschritten im [Deep Learning](https://www.ultralytics.com/glossary/deep-learning-dl) und der [Computer Vision](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025) und bietet eine durchgängige NMS-freie Inferenz sowie eine optimierte Edge-Bereitstellung. Sein optimiertes Design macht es für verschiedene Anwendungen geeignet und leicht an unterschiedliche Hardwareplattformen anpassbar, von Edge-Geräten bis hin zu Cloud-APIs. Für stabile Produktions-Workloads werden sowohl YOLO26 als auch [YOLO11](models/yolo11/) empfohlen.

Entdecken Sie die Ultralytics-Dokumentation, eine umfassende Ressource, die Ihnen helfen soll, die Funktionen und Möglichkeiten zu verstehen und zu nutzen. Egal, ob Sie ein erfahrener [Experte für maschinelles Lernen](https://www.ultralytics.com/glossary/machine-learning-ml) sind oder neu auf diesem Gebiet, dieses Zentrum zielt darauf ab, das Potenzial von YOLO in Ihren Projekten zu maximieren.

## Wo man anfängt

**Loslegen**Installieren

`ultralytics`

mit pip und in wenigen Minuten startklar sein, um ein YOLO-Modell zu trainieren**Vorhersagen**Vorhersagen auf neuen Bildern, Videos und Streams mit YOLO

**Modell trainieren**Trainieren Sie ein neues YOLO-Modell auf Ihrem eigenen, benutzerdefinierten Datensatz von Grund auf oder laden und trainieren Sie es auf einem vortrainierten Modell.

**Computer Vision Aufgaben entdecken**Entdecken Sie YOLO-Aufgaben wie detect, segment, classify, pose, obb und track.

**YOLO26 erkunden 🚀 NEU**Entdecken Sie die neuesten Ultralytics YOLO26-Modelle mit NMS-freier Inferenz und Edge-Optimierung

**SAM 3: Alles mit Konzepten segmentieren 🚀 NEU**Metas neuestes SAM 3 mit Promptable Concept Segmentation – segmentieren Sie alle Instanzen unter Verwendung von Text- oder Bildbeispielen

**Open Source, AGPL-3.0**Ultralytics bietet zwei YOLO-Lizenzen an: AGPL-3.0 und Enterprise. Entdecken Sie YOLO auf

[GitHub](https://github.com/ultralytics/ultralytics).

**Ansehen:** Wie Sie ein YOLO26-Modell anhand Ihres benutzerdefinierten Datensatzes trainieren können in [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Eine kurze Geschichte

[YOLO](models/) (You Only Look Once), ein beliebtes Modell für [Objekterkennung](https://www.ultralytics.com/glossary/object-detection) und [Bildsegmentierung](https://www.ultralytics.com/glossary/image-segmentation), wurde von Joseph Redmon und Ali Farhadi an der University of Washington entwickelt. YOLO wurde 2015 auf den Markt gebracht und erfreute sich aufgrund seiner hohen Geschwindigkeit und Genauigkeit großer Beliebtheit.

[YOLOv2](models/), das 2016 veröffentlicht wurde, verbesserte das ursprüngliche Modell durch die Integration von Batch-Normalisierung, Anchor Boxes und Dimensionsclustern.[YOLOv3](models/yolov3/), das 2018 auf den Markt kam, verbesserte die Leistung des Modells durch ein effizienteres Backbone-Netzwerk, mehrere Anker und Spatial Pyramid Pooling.[YOLOv4](models/yolov4/)wurde im Jahr 2020 veröffentlicht und führte Innovationen wie Mosaic[Datenerweiterung](https://www.ultralytics.com/glossary/data-augmentation), einen neuen ankerfreien Erkennungskopf und eine neue[Loss-Funktion](https://www.ultralytics.com/glossary/loss-function)ein.[YOLOv5](models/yolov5/)verbesserte die Leistung des Modells weiter und fügte neue Funktionen hinzu, wie z. B. Hyperparameter-Optimierung, integrierte Experimentverfolgung und automatischen Export in gängige Exportformate.[YOLOv6](models/yolov6/)wurde 2022 von[Meituan](https://www.meituan.com/)als Open-Source veröffentlicht und wird in vielen autonomen Lieferrobotern des Unternehmens eingesetzt.[YOLOv7](models/yolov7/)fügte zusätzliche Aufgaben hinzu, wie z. B. die Pose-Schätzung auf dem COCO-Keypoints-Datensatz.[YOLOv8](models/yolov8/), veröffentlicht im Jahr 2023 von Ultralytics, führte neue Funktionen und Verbesserungen für eine höhere Leistung, Flexibilität und Effizienz ein und unterstützt eine vollständige Palette von Vision-KI-Aufgaben.[YOLOv9](models/yolov9/)führt innovative Methoden wie Programmable Gradient Information (PGI) und das Generalized Efficient Layer Aggregation Network (GELAN) ein.[YOLOv10](models/yolov10/), entwickelt von Forschern der[Tsinghua University](https://www.tsinghua.edu.cn/en/)unter Verwendung des[Ultralytics](https://www.ultralytics.com/)[Python-Pakets](https://pypi.org/project/ultralytics/), bietet Echtzeit-Fortschritte in der[Objekterkennung](tasks/detect/)durch die Einführung eines End-to-End-Head, das keine Non-Maximum Suppression (NMS)-Anforderungen stellt.: Im September 2024 veröffentlicht, bietet YOLO11 hervorragende Leistung bei mehreren Aufgaben, einschließlich[YOLO11](models/yolo11/)[Objekterkennung](tasks/detect/),[segment](tasks/segment/),[Pose-Schätzung](tasks/pose/),[track](modes/track/)und[Klassifizierung](tasks/classify/), was den Einsatz in vielfältigen KI-Anwendungen und -Bereichen ermöglicht.: Ultralytics' YOLO-Modell der nächsten Generation, optimiert für Edge-Bereitstellung mit durchgängiger NMS-freier Inferenz.[YOLO26](models/yolo26/)🚀

## YOLO-Lizenzen: Wie ist Ultralytics YOLO lizenziert?

Ultralytics bietet zwei Lizenzoptionen an, um unterschiedlichen Anwendungsfällen gerecht zu werden:

**AGPL-3.0-Lizenz**: Diese[OSI-geprüfte](https://opensource.org/license/agpl-v3)Open-Source-Lizenz ist ideal für Studenten und Enthusiasten und fördert die offene Zusammenarbeit und den Wissensaustausch. Weitere Informationen finden Sie in der[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)-Datei.**Enterprise-Lizenz**: Diese Lizenz wurde für die kommerzielle Nutzung entwickelt und ermöglicht die nahtlose Integration von Ultralytics-Software und KI-Modellen in kommerzielle Güter und Dienstleistungen, wobei die Open-Source-Anforderungen von AGPL-3.0 umgangen werden. Wenn Sie unsere Lösungen in ein kommerzielles Angebot einbetten möchten, wenden Sie sich bitte an[Ultralytics Licensing](https://www.ultralytics.com/license).

Unsere Lizenzierungsstrategie ist darauf ausgelegt, sicherzustellen, dass alle Verbesserungen an unseren Open-Source-Projekten an die Community zurückgegeben werden. Wir glauben an Open Source, und unsere Mission ist es, sicherzustellen, dass unsere Beiträge auf eine Weise genutzt und erweitert werden können, die allen zugutekommt.

## Die Evolution der Objekterkennung

Die Objekterkennung hat sich im Laufe der Jahre erheblich weiterentwickelt, von traditionellen Computer-Vision-Techniken bis hin zu fortschrittlichen Deep-Learning-Modellen. Die [YOLO-Modellfamilie](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) steht an der Spitze dieser Entwicklung und verschiebt kontinuierlich die Grenzen dessen, was in der Echtzeit-Objekterkennung möglich ist.

Der einzigartige Ansatz von YOLO behandelt Objekterkennung als ein einzelnes Regressionsproblem und sagt [Begrenzungsrahmen](https://www.ultralytics.com/glossary/bounding-box) und Klassenwahrscheinlichkeiten direkt aus vollständigen Bildern in einer einzigen Auswertung voraus. Diese revolutionäre Methode hat YOLO-Modelle deutlich schneller gemacht als frühere zweistufige Detektoren, während gleichzeitig eine hohe Genauigkeit erhalten bleibt.

Mit jeder neuen Version hat YOLO architektonische Verbesserungen und innovative Techniken eingeführt, die die Leistung über verschiedene Metriken hinweg gesteigert haben. YOLO26 setzt diese Tradition fort, indem es die neuesten Fortschritte in der Computer-Vision-Forschung integriert und eine durchgängige NMS-freie Inferenz sowie eine optimierte Edge-Bereitstellung für reale Anwendungen bietet.

## FAQ

### Was ist Ultralytics YOLO und wie verbessert es die Objekterkennung?

Ultralytics YOLO ist die anerkannte YOLO (You Only Look Once)-Reihe für Echtzeit-Objekterkennung und Bildsegmentierung. Das neueste Modell, [YOLO26](models/yolo26/), baut auf früheren Versionen auf, indem es eine durchgängige NMS-freie Inferenz und eine optimierte Edge-Bereitstellung einführt. YOLO unterstützt verschiedene [Vision-KI-Aufgaben](tasks/) wie detect, segment, Pose-Schätzung, track und Klassifizierung. Seine effiziente Architektur gewährleistet hervorragende Geschwindigkeit und Genauigkeit und macht es für vielfältige Anwendungen geeignet, einschließlich Edge-Geräte und Cloud-APIs.

### Wie kann ich mit der YOLO-Installation und -Einrichtung beginnen?

Der Einstieg in YOLO ist schnell und unkompliziert. Sie können das Ultralytics-Paket mit [pip](https://pypi.org/project/ultralytics/) installieren und innerhalb von Minuten loslegen. Hier ist ein grundlegender Installationsbefehl:

Installation mit pip

```
pip install -U ultralytics
```


Eine umfassende Schritt-für-Schritt-Anleitung finden Sie auf unserer [Schnellstart](quickstart/)-Seite. Diese Ressource hilft Ihnen bei den Installationsanweisungen, der Ersteinrichtung und der Ausführung Ihres ersten Modells.

### Wie kann ich ein benutzerdefiniertes YOLO-Modell auf meinem Datensatz trainieren?

Das Trainieren eines benutzerdefinierten YOLO-Modells auf Ihrem Datensatz umfasst einige detaillierte Schritte:

- Bereiten Sie Ihren annotierten Datensatz vor.
- Konfigurieren Sie die Trainingsparameter in einer YAML-Datei.
- Verwenden Sie den
`yolo TASK train`

Befehl, um das Training zu starten. (Jeder`TASK`

hat sein eigenes Argument)

Hier ist ein Beispielcode für die Objekterkennungsaufgabe:

Trainingsbeispiel für die Objekterkennungsaufgabe

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Für eine detaillierte Anleitung sehen Sie sich unseren [Train a Model](modes/train/) Leitfaden an, der Beispiele und Tipps zur Optimierung Ihres Trainingsprozesses enthält.

### Welche Lizenzoptionen sind für Ultralytics YOLO verfügbar?

Ultralytics bietet zwei Lizenzierungsoptionen für YOLO an:

**AGPL-3.0 Lizenz**: Diese Open-Source-Lizenz ist ideal für Bildungs- und nichtkommerzielle Zwecke und fördert die offene Zusammenarbeit.**Enterprise Lizenz**: Diese ist für kommerzielle Anwendungen konzipiert und ermöglicht die nahtlose Integration von Ultralytics Software in kommerzielle Produkte ohne die Einschränkungen der AGPL-3.0 Lizenz.

Für weitere Details besuchen Sie unsere [Lizenzierungs](https://www.ultralytics.com/license) Seite.

### Wie kann Ultralytics YOLO für die Echtzeit-Objektverfolgung verwendet werden?

Ultralytics YOLO unterstützt effizientes und anpassbares Multi-Objekt-Tracking. Um die Tracking-Funktionen zu nutzen, können Sie den `yolo track`

Befehl, wie unten gezeigt:

Beispiel für Objektverfolgung in einem Video

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Eine detaillierte Anleitung zur Einrichtung und Ausführung der Objektverfolgung finden Sie in unserer [Track Mode](modes/track/)-Dokumentation, in der die Konfiguration und die praktischen Anwendungen in Echtzeitszenarien erläutert werden.

---

## Source: https://docs.ultralytics.com/fr/

# Accueil

Présentation d'Ultralytics [YOLO26](models/yolo26/), la dernière version du modèle acclamé de détection d'objets et de segmentation d'images en temps réel. YOLO26 est basé sur les avancées du [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl) et de la [vision par ordinateur](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), offrant une inférence de bout en bout sans NMS et un déploiement edge optimisé. Sa conception simplifiée le rend adapté à diverses applications et facilement adaptable à différentes plateformes matérielles, des appareils edge aux API cloud. Pour des charges de travail de production stables, YOLO26 et [YOLO11](models/yolo11/) sont tous deux recommandés.

Explorez la documentation Ultralytics, une ressource complète conçue pour vous aider à comprendre et à utiliser ses fonctionnalités et capacités. Que vous soyez un praticien chevronné du [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) ou un novice dans le domaine, ce hub vise à maximiser le potentiel de YOLO dans vos projets.

## Par où commencer

**Démarrage**Installer

`ultralytics`

avec pip et soyez opérationnel en quelques minutes pour entraîner un modèle YOLO**Prédire**Prédire sur de nouvelles images, vidéos et flux avec YOLO

**Entraîner un modèle**Entraînez un nouveau modèle YOLO sur votre propre jeu de données personnalisé à partir de zéro ou chargez et entraînez sur un modèle pré-entraîné

**Explorer les tâches de vision par ordinateur**Découvrez les tâches YOLO telles que detect, segment, classify, pose, OBB et track

**Explorez YOLO26 🚀 NOUVEAU**Découvrez les derniers modèles YOLO26 d'Ultralytics avec inférence sans NMS et optimisation edge

**SAM 3 : Segment Anything avec des concepts 🚀 NOUVEAU**Le dernier SAM 3 de Meta avec segmentation de concepts activable par invite - segment toutes les instances à l'aide d'invites textuelles ou d'exemplaires d'images

**Open Source, AGPL-3.0**Ultralytics propose deux licences YOLO : AGPL-3.0 et Enterprise. Découvrez YOLO sur

[GitHub](https://github.com/ultralytics/ultralytics).

**Regarder :** Comment entraîner un modèle YOLO26 sur votre ensemble de données personnalisé dans [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO : un bref historique

[YOLO](models/) (You Only Look Once), un modèle populaire de [détection d'objets](https://www.ultralytics.com/glossary/object-detection) et de [segmentation d'images](https://www.ultralytics.com/glossary/image-segmentation), a été développé par Joseph Redmon et Ali Farhadi à l'Université de Washington. Lancé en 2015, YOLO a gagné en popularité pour sa vitesse et sa précision élevées.

[YOLOv2](models/), sorti en 2016, a amélioré le modèle original en intégrant la normalisation par lots, les boîtes d'ancrage et les clusters de dimensions.[YOLOv3](models/yolov3/), lancé en 2018, a encore amélioré les performances du modèle en utilisant un réseau dorsal plus efficace, plusieurs ancres et un regroupement spatial pyramidal.[YOLOv4](models/yolov4/)est sorti en 2020, introduisant des innovations telles que l'augmentation de[données Mosaic](https://www.ultralytics.com/glossary/data-augmentation), une nouvelle tête de détection sans ancrage et une nouvelle[fonction de perte](https://www.ultralytics.com/glossary/loss-function).[YOLOv5](models/yolov5/)a encore amélioré les performances du modèle et ajouté de nouvelles fonctionnalités telles que l'optimisation des hyperparamètres, le suivi intégré des expériences et l'exportation automatique vers des formats d'exportation populaires.[YOLOv6](models/yolov6/)a été mis à disposition en open source par[Meituan](https://www.meituan.com/)en 2022 et est utilisé dans de nombreux robots de livraison autonomes de l'entreprise.[YOLOv7](models/yolov7/)a ajouté des tâches supplémentaires telles que l'estimation de la pose sur l'ensemble de données de points clés COCO.[YOLOv8](models/yolov8/)publié en 2023 par Ultralytics, a introduit de nouvelles fonctionnalités et améliorations pour des performances, une flexibilité et une efficacité accrues, prenant en charge une gamme complète de tâches d'IA de vision.[YOLOv9](models/yolov9/)introduit des méthodes innovantes telles que l'information de gradient programmable (PGI) et le réseau d'agrégation de couches efficaces généralisées (GELAN).[YOLOv10](models/yolov10/)créé par des chercheurs de l'[Université de Tsinghua](https://www.tsinghua.edu.cn/en/)à l'aide du[package Python](https://www.ultralytics.com/)[Ultralytics](https://pypi.org/project/ultralytics/), fournit des avancées en matière de[détection d'objets](tasks/detect/)en temps réel en introduisant une tête de bout en bout qui élimine les exigences de suppression non maximale (NMS).: Lancé en septembre 2024, YOLO11 offre d'excellentes performances sur plusieurs tâches, notamment la[YOLO11](models/yolo11/)[détection d'objets](tasks/detect/), la[segmentation](tasks/segment/), l'[estimation de pose](tasks/pose/), le[tracking](modes/track/)et la[classification](tasks/classify/), permettant un déploiement dans diverses applications et domaines d'IA.: Le modèle YOLO de nouvelle génération d'Ultralytics optimisé pour le déploiement edge avec inférence de bout en bout sans NMS.[YOLO26](models/yolo26/)🚀

## Licences YOLO : comment la licence Ultralytics YOLO est-elle concédée ?

Ultralytics propose deux options de licence pour s'adapter à divers cas d'utilisation :

**Licence AGPL-3.0**: Cette licence open source[approuvée par l'OSI](https://opensource.org/license/agpl-v3)est idéale pour les étudiants et les passionnés, favorisant la collaboration ouverte et le partage des connaissances. Consultez le fichier[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)pour plus de détails.**Licence d'entreprise**: Conçue pour un usage commercial, cette licence permet une intégration transparente du logiciel Ultralytics et des modèles d'IA dans les biens et services commerciaux, contournant les exigences open source d'AGPL-3.0. Si votre scénario implique l'intégration de nos solutions dans une offre commerciale, contactez-nous via[Ultralytics Licensing](https://www.ultralytics.com/license).

Notre stratégie de licence est conçue pour garantir que toute amélioration apportée à nos projets open source soit reversée à la communauté. Nous croyons en l'open source, et notre mission est de veiller à ce que nos contributions puissent être utilisées et développées de manière à bénéficier à tous.

## L'évolution de la détection d'objets

La détection d'objets a considérablement évolué au fil des ans, des techniques traditionnelles de vision par ordinateur aux modèles avancés d'apprentissage profond. La [famille de modèles YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) a été à l'avant-garde de cette évolution, repoussant constamment les limites de ce qui est possible en matière de détection d'objets en temps réel.

L'approche unique de YOLO traite la détection d'objets comme un seul problème de régression, prédisant les [boîtes englobantes](https://www.ultralytics.com/glossary/bounding-box) et les probabilités de classe directement à partir d'images complètes en une seule évaluation. Cette méthode révolutionnaire a rendu les modèles YOLO significativement plus rapides que les détecteurs à deux étapes précédents tout en maintenant une haute précision.

À chaque nouvelle version, YOLO a introduit des améliorations architecturales et des techniques innovantes qui ont amélioré les performances sur diverses métriques. YOLO26 poursuit cette tradition en intégrant les dernières avancées de la recherche en vision par ordinateur, avec une inférence de bout en bout sans NMS et un déploiement edge optimisé pour les applications du monde réel.

## FAQ

### Qu’est-ce qu’Ultralytics YOLO et comment améliore-t-il la détection d’objets ?

Ultralytics YOLO est la série acclamée YOLO (You Only Look Once) pour la détection d'objets en temps réel et la segmentation d'images. Le dernier modèle, [YOLO26](models/yolo26/), s'appuie sur les versions précédentes en introduisant une inférence de bout en bout sans NMS et un déploiement edge optimisé. YOLO prend en charge diverses [tâches d'IA visuelle](tasks/) telles que la detect, la segment, l'estimation de pose, le track et la classification. Son architecture efficace assure une excellente vitesse et précision, le rendant adapté à diverses applications, y compris les appareils edge et les API cloud.

### Comment puis-je commencer avec l’installation et la configuration de YOLO ?

Il est rapide et simple de commencer avec YOLO. Vous pouvez installer le package Ultralytics à l'aide de [pip](https://pypi.org/project/ultralytics/) et être opérationnel en quelques minutes. Voici une commande d'installation de base :

Installation à l'aide de pip

```
pip install -U ultralytics
```


Pour un guide détaillé étape par étape, consultez notre page [Démarrage rapide](quickstart/). Cette ressource vous aidera avec les instructions d'installation, la configuration initiale et l'exécution de votre premier modèle.

### Comment puis-je entraîner un modèle YOLO personnalisé sur mon jeu de données ?

L'entraînement d'un modèle YOLO personnalisé sur votre jeu de données implique quelques étapes détaillées :

- Préparez votre jeu de données annoté.
- Configurez les paramètres d'entraînement dans un fichier YAML.
- Utilisez la
`yolo TASK train`

commande pour démarrer l'entraînement. (Chaque`TASK`

a son propre argument)

Voici un exemple de code pour la tâche de détection d'objets :

Exemple d'entraînement pour la tâche de détection d'objets

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Pour une présentation détaillée, consultez notre guide [Entraîner un modèle](modes/train/), qui comprend des exemples et des conseils pour optimiser votre processus d'entraînement.

### Quelles sont les options de licence disponibles pour Ultralytics YOLO ?

Ultralytics propose deux options de licence pour YOLO :

**Licence AGPL-3.0**: Cette licence open source est idéale pour une utilisation éducative et non commerciale, favorisant ainsi une collaboration ouverte.**Licence d'entreprise**: Elle est conçue pour les applications commerciales, permettant une intégration transparente du logiciel Ultralytics dans les produits commerciaux sans les restrictions de la licence AGPL-3.0.

Pour plus de détails, consultez notre page [Licences](https://www.ultralytics.com/license).

### Comment Ultralytics YOLO peut-il être utilisé pour le suivi d’objets en temps réel ?

Ultralytics YOLO prend en charge le suivi multi-objets efficace et personnalisable. Pour utiliser les capacités de suivi, vous pouvez utiliser la `yolo track`

commande, comme indiqué ci-dessous :

Exemple de suivi d'objets sur une vidéo

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Pour un guide détaillé sur la configuration et l'exécution du suivi d'objets, consultez notre documentation sur le [Mode Track](modes/track/), qui explique la configuration et les applications pratiques dans des scénarios en temps réel.

---

## Source: https://docs.ultralytics.com/es/

# Inicio

Presentamos Ultralytics [YOLO26](models/yolo26/), la última versión del aclamado modelo de detección de objetos en tiempo real y segmentación de imágenes. YOLO26 se basa en los avances de [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl) y [visión por computadora](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), con inferencia de extremo a extremo sin NMS y despliegue optimizado en el borde. Su diseño optimizado lo hace adecuado para diversas aplicaciones y fácilmente adaptable a diferentes plataformas de hardware, desde dispositivos de borde hasta APIs en la nube. Para cargas de trabajo de producción estables, se recomiendan tanto YOLO26 como [YOLO11](models/yolo11/).

Explore la documentación de Ultralytics, un recurso integral diseñado para ayudarle a comprender y utilizar sus características y capacidades. Tanto si es un profesional experimentado del [aprendizaje automático](https://www.ultralytics.com/glossary/machine-learning-ml) como si es nuevo en este campo, este centro tiene como objetivo maximizar el potencial de YOLO en sus proyectos.

## Por dónde empezar

**Empezando**Instalar

`ultralytics`

con pip y ponte en marcha en minutos para entrenar un modelo YOLO**Predecir**Realiza predicciones sobre nuevas imágenes, vídeos y transmisiones con YOLO

**Entrenar un modelo**Entrena un nuevo modelo YOLO en tu propio conjunto de datos personalizado desde cero o carga y entrena sobre un modelo preentrenado

**Explore tareas de visión artificial**Descubra las tareas de YOLO como detect, segment, classify, pose, OBB y track

**Explorar YOLO26 🚀 NUEVO**Descubra los últimos modelos YOLO26 de Ultralytics con inferencia sin NMS y optimización para el borde

**SAM 3: Segmentar Cualquier Cosa con Conceptos 🚀 NUEVO**El último SAM 3 de Meta con Segmentación de Conceptos Promptable: segmenta todas las instancias utilizando ejemplos de texto o imagen

**Código abierto, AGPL-3.0**Ultralytics ofrece dos licencias YOLO: AGPL-3.0 y Enterprise. Explore YOLO en

[GitHub](https://github.com/ultralytics/ultralytics).

**Ver:** ¿Cómo entrenar un modelo YOLO26 en su conjunto de datos personalizado en [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Una breve historia

[YOLO](models/) (You Only Look Once), un popular modelo de [detección de objetos](https://www.ultralytics.com/glossary/object-detection) y [segmentación de imágenes](https://www.ultralytics.com/glossary/image-segmentation), fue desarrollado por Joseph Redmon y Ali Farhadi en la Universidad de Washington. Lanzado en 2015, YOLO ganó popularidad por su alta velocidad y precisión.

[YOLOv2](models/), lanzado en 2016, mejoró el modelo original incorporando la normalización por lotes, los cuadros de anclaje y los clústeres de dimensiones.[YOLOv3](models/yolov3/), lanzado en 2018, mejoró aún más el rendimiento del modelo utilizando una red troncal más eficiente, múltiples anclajes y agrupación espacial piramidal.[YOLOv4](models/yolov4/)se lanzó en 2020, introduciendo innovaciones como la[aumentación de datos](https://www.ultralytics.com/glossary/data-augmentation)Mosaic, un nuevo encabezado de detección sin anclaje y una nueva[función de pérdida](https://www.ultralytics.com/glossary/loss-function).[YOLOv5](models/yolov5/)mejoró aún más el rendimiento del modelo y añadió nuevas características como la optimización de hiperparámetros, el seguimiento integrado de experimentos y la exportación automática a formatos de exportación populares.[YOLOv6](models/yolov6/)fue liberado como código abierto por[Meituan](https://www.meituan.com/)en 2022 y se utiliza en muchos de los robots de reparto autónomos de la empresa.[YOLOv7](models/yolov7/)añadió tareas adicionales como la estimación de la pose en el dataset de puntos clave COCO.[YOLOv8](models/yolov8/), lanzado en 2023 por Ultralytics, introdujo nuevas características y mejoras para un mayor rendimiento, flexibilidad y eficiencia, y es compatible con una amplia gama de tareas de IA de visión.[YOLOv9](models/yolov9/)introduce métodos innovadores como la Información de Gradiente Programable (PGI) y la Red de Agregación de Capas Eficiente Generalizada (GELAN).[YOLOv10](models/yolov10/)creado por investigadores de la[Universidad de Tsinghua](https://www.tsinghua.edu.cn/en/)utilizando el[paquete de Ultralytics](https://www.ultralytics.com/)[Python](https://pypi.org/project/ultralytics/), proporciona avances en la[detección de objetos](tasks/detect/)en tiempo real mediante la introducción de un encabezado End-to-End que elimina los requisitos de supresión no máxima (NMS).: Lanzado en septiembre de 2024, YOLO11 ofrece un rendimiento excelente en múltiples tareas, incluyendo[YOLO11](models/yolo11/)[detección de objetos](tasks/detect/),[segmentation](tasks/segment/),[estimación de pose](tasks/pose/),[tracking](modes/track/)y[clasificación](tasks/classify/), permitiendo su despliegue en diversas aplicaciones y dominios de IA.: El modelo YOLO de próxima generación de Ultralytics optimizado para el despliegue en el borde con inferencia de extremo a extremo sin NMS.[YOLO26](models/yolo26/)🚀

## Licencias YOLO: ¿Cómo se licencia Ultralytics YOLO?

Ultralytics ofrece dos opciones de licencia para adaptarse a diversos casos de uso:

**Licencia AGPL-3.0**: Esta licencia de código abierto[aprobada por la OSI](https://opensource.org/license/agpl-v3)es ideal para estudiantes y entusiastas, ya que promueve la colaboración abierta y el intercambio de conocimientos. Consulte el archivo[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)para obtener más detalles.**Licencia Enterprise**: Diseñada para uso comercial, esta licencia permite la integración perfecta del software y los modelos de IA de Ultralytics en bienes y servicios comerciales, evitando los requisitos de código abierto de AGPL-3.0. Si su caso implica la integración de nuestras soluciones en una oferta comercial, póngase en contacto a través de[Licencias de Ultralytics](https://www.ultralytics.com/license).

Nuestra estrategia de licenciamiento está diseñada para asegurar que cualquier mejora a nuestros proyectos de código abierto sea devuelta a la comunidad. Creemos en el código abierto, y nuestra misión es asegurar que nuestras contribuciones puedan ser utilizadas y expandidas de maneras que beneficien a todos.

## La evolución de la detección de objetos

La detección de objetos ha evolucionado significativamente a lo largo de los años, desde las técnicas tradicionales de visión artificial hasta los modelos avanzados de aprendizaje profundo. La [familia de modelos YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) ha estado a la vanguardia de esta evolución, superando constantemente los límites de lo que es posible en la detección de objetos en tiempo real.

El enfoque único de YOLO trata la detección de objetos como un único problema de regresión, prediciendo los [bounding boxes](https://www.ultralytics.com/glossary/bounding-box) y las probabilidades de clase directamente de las imágenes completas en una sola evaluación. Este método revolucionario ha hecho que los modelos YOLO sean significativamente más rápidos que los detectores de dos etapas anteriores, manteniendo una alta precisión.

Con cada nueva versión, YOLO ha introducido mejoras arquitectónicas y técnicas innovadoras que han mejorado el rendimiento en diversas métricas. YOLO26 continúa esta tradición al incorporar los últimos avances en investigación de visión por computadora, con inferencia de extremo a extremo sin NMS y despliegue optimizado en el borde para aplicaciones del mundo real.

## Preguntas frecuentes

### ¿Qué es Ultralytics YOLO y cómo mejora la detección de objetos?

Ultralytics YOLO es la aclamada serie YOLO (You Only Look Once) para la detección de objetos en tiempo real y la segmentación de imágenes. El modelo más reciente, [YOLO26](models/yolo26/), se basa en versiones anteriores al introducir inferencia de extremo a extremo sin NMS y despliegue optimizado en el borde. YOLO es compatible con diversas [tareas de IA de visión](tasks/), como detect, segment, estimación de pose, track y clasificación. Su arquitectura eficiente garantiza una excelente velocidad y precisión, lo que lo hace adecuado para diversas aplicaciones, incluyendo dispositivos de borde y APIs en la nube.

### ¿Cómo puedo empezar con la instalación y configuración de YOLO?

Comenzar a usar YOLO es rápido y sencillo. Puede instalar el paquete Ultralytics usando [pip](https://pypi.org/project/ultralytics/) y empezar a funcionar en cuestión de minutos. Aquí tiene un comando de instalación básico:

Instalación mediante pip

```
pip install -U ultralytics
```


Para obtener una guía completa paso a paso, visite nuestra página de [Inicio Rápido](quickstart/). Este recurso le ayudará con las instrucciones de instalación, la configuración inicial y la ejecución de su primer modelo.

### ¿Cómo puedo entrenar un modelo YOLO personalizado en mi conjunto de datos?

Entrenar un modelo YOLO personalizado en su conjunto de datos implica algunos pasos detallados:

- Prepare su conjunto de datos anotado.
- Configure los parámetros de entrenamiento en un archivo YAML.
- Utilice el
`yolo TASK train`

comando para iniciar el entrenamiento. (Cada`TASK`

tiene su propio argumento)

Aquí tiene un código de ejemplo para la tarea de detección de objetos:

Ejemplo de entrenamiento para la tarea de detección de objetos

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Para obtener un tutorial detallado, consulte nuestra guía [Entrenar un modelo](modes/train/), que incluye ejemplos y consejos para optimizar su proceso de entrenamiento.

### ¿Cuáles son las opciones de licencia disponibles para Ultralytics YOLO?

Ultralytics ofrece dos opciones de licencia para YOLO:

**Licencia AGPL-3.0**: Esta licencia de código abierto es ideal para uso educativo y no comercial, ya que promueve la colaboración abierta.**Licencia Enterprise**: Está diseñada para aplicaciones comerciales, lo que permite una integración perfecta del software de Ultralytics en productos comerciales sin las restricciones de la licencia AGPL-3.0.

Para obtener más información, visite nuestra página de [Licencias](https://www.ultralytics.com/license).

### ¿Cómo se puede utilizar Ultralytics YOLO para el seguimiento de objetos en tiempo real?

Ultralytics YOLO admite el seguimiento multi-objeto eficiente y personalizable. Para utilizar las capacidades de seguimiento, puede utilizar el `yolo track`

comando, como se muestra a continuación:

Ejemplo para el seguimiento de objetos en un vídeo

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Para obtener una guía detallada sobre cómo configurar y ejecutar el seguimiento de objetos, consulte nuestra documentación del [Modo de Seguimiento](modes/track/), que explica la configuración y las aplicaciones prácticas en escenarios en tiempo real.

---

## Source: https://docs.ultralytics.com/pt/

# Início

Apresentamos o Ultralytics [YOLO26](models/yolo26/), a versão mais recente do aclamado modelo de deteção de objetos em tempo real e segmentação de imagens. O YOLO26 é construído sobre avanços em [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl) e [visão computacional](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), apresentando inferência NMS-free de ponta a ponta e implementação otimizada para edge. O seu design simplificado torna-o adequado para várias aplicações e facilmente adaptável a diferentes plataformas de hardware, desde dispositivos edge a APIs de nuvem. Para cargas de trabalho de produção estáveis, tanto o YOLO26 como o [YOLO11](models/yolo11/) são recomendados.

Explore a documentação Ultralytics, um recurso abrangente projetado para ajudá-lo a entender e utilizar seus recursos e funcionalidades. Seja você um profissional experiente em [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) ou novo na área, este hub tem como objetivo maximizar o potencial do YOLO em seus projetos.

## Por Onde Começar

**Começando**Instalar

`ultralytics`

com pip e comece em minutos a treinar um modelo YOLO**Prever**Preveja em novas imagens, vídeos e transmissões com YOLO

**Treinar um Modelo**Treine um novo modelo YOLO em seu próprio conjunto de dados personalizado do zero ou carregue e treine em um modelo pré-treinado

**Explore Tarefas de Visão Computacional**Descubra as tarefas YOLO como detect, segment, classify, pose, OBB e track

**Explore o YOLO26 🚀 NOVO**Descubra os mais recentes modelos YOLO26 da Ultralytics com inferência NMS-free e otimização para edge

**SAM 3: Segmentar Qualquer Coisa com Conceitos 🚀 NOVO**O mais recente SAM 3 da Meta com Segmentação de Conceitos Promptable - segment todas as instâncias usando exemplares de texto ou imagem

**Código Aberto, AGPL-3.0**A Ultralytics oferece duas licenças YOLO: AGPL-3.0 e Enterprise. Explore YOLO no

[GitHub](https://github.com/ultralytics/ultralytics).

**Assista:** Como treinar um modelo YOLO26 no seu conjunto de dados personalizado em [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Uma Breve História

[YOLO](models/) (You Only Look Once), um modelo popular de [detecção de objetos](https://www.ultralytics.com/glossary/object-detection) e [segmentação de imagens](https://www.ultralytics.com/glossary/image-segmentation), foi desenvolvido por Joseph Redmon e Ali Farhadi na Universidade de Washington. Lançado em 2015, o YOLO ganhou popularidade por sua alta velocidade e precisão.

- O
[YOLOv2](models/), lançado em 2016, aprimorou o modelo original incorporando normalização em lote, caixas delimitadoras (anchor boxes) e agrupamentos de dimensões. [YOLOv3](models/yolov3/), lançado em 2018, aprimorou ainda mais o desempenho do modelo usando uma rede de backbone mais eficiente, múltiplas âncoras e agrupamento de pirâmide espacial.- O
[YOLOv4](models/yolov4/)foi lançado em 2020, introduzindo inovações como[aumento de dados](https://www.ultralytics.com/glossary/data-augmentation)Mosaic, um novo cabeçalho de detecção sem âncora e uma nova[função de perda](https://www.ultralytics.com/glossary/loss-function). [YOLOv5](models/yolov5/)melhorou ainda mais o desempenho do modelo e adicionou novos recursos, como otimização de hiperparâmetros, rastreamento de experimentos integrado e exportação automática para formatos de exportação populares.[YOLOv6](models/yolov6/)foi disponibilizado como código aberto pela[Meituan](https://www.meituan.com/)em 2022 e é usado em muitos dos robôs de entrega autônomos da empresa.[YOLOv7](models/yolov7/)adicionou tarefas adicionais, como a estimativa de pose no conjunto de dados de pontos-chave COCO.[YOLOv8](models/yolov8/)lançado em 2023 pela Ultralytics, introduziu novos recursos e melhorias para desempenho, flexibilidade e eficiência aprimorados, oferecendo suporte a uma gama completa de tarefas de visão de IA.[YOLOv9](models/yolov9/)introduz métodos inovadores como Programmable Gradient Information (PGI) e a Generalized Efficient Layer Aggregation Network (GELAN).[YOLOv10](models/yolov10/)criado por pesquisadores da[Universidade de Tsinghua](https://www.tsinghua.edu.cn/en/)usando o[Ultralytics](https://www.ultralytics.com/)[pacote Python](https://pypi.org/project/ultralytics/), fornece avanços de[detecção de objetos](tasks/detect/)em tempo real, introduzindo um cabeçalho End-to-End que elimina os requisitos de Supressão Não Máxima (NMS).: Lançado em setembro de 2024, o YOLO11 oferece excelente desempenho em múltiplas tarefas, incluindo[YOLO11](models/yolo11/)[deteção de objetos](tasks/detect/),[segment](tasks/segment/),[estimativa de pose](tasks/pose/),[track](modes/track/)e[classificação](tasks/classify/), permitindo a implementação em diversas aplicações e domínios de IA.: O modelo YOLO de próxima geração da Ultralytics, otimizado para implementação em edge com inferência NMS-free de ponta a ponta.[YOLO26](models/yolo26/)🚀

## Licenças YOLO: Como o Ultralytics YOLO é licenciado?

A Ultralytics oferece duas opções de licenciamento para acomodar diversos casos de uso:

**Licença AGPL-3.0**: Esta licença de código aberto[aprovada pela OSI](https://opensource.org/license/agpl-v3)é ideal para estudantes e entusiastas, promovendo a colaboração aberta e o compartilhamento de conhecimento. Consulte o arquivo[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)para obter mais detalhes.**Licença Empresarial**: Projetada para uso comercial, esta licença permite a integração perfeita do software Ultralytics e modelos de IA em bens e serviços comerciais, ignorando os requisitos de código aberto da AGPL-3.0. Se o seu cenário envolve incorporar nossas soluções em uma oferta comercial, entre em contato através do[Licenciamento Ultralytics](https://www.ultralytics.com/license).

Nossa estratégia de licenciamento foi projetada para garantir que quaisquer melhorias em nossos projetos de código aberto sejam retornadas à comunidade. Acreditamos no código aberto e nossa missão é garantir que nossas contribuições possam ser usadas e expandidas de maneiras que beneficiem a todos.

## A Evolução da Detecção de Objetos

A detecção de objetos evoluiu significativamente ao longo dos anos, desde técnicas tradicionais de visão computacional até modelos avançados de aprendizado profundo. A [família de modelos YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) tem estado na vanguarda desta evolução, consistentemente ultrapassando os limites do que é possível na detecção de objetos em tempo real.

A abordagem exclusiva do YOLO trata a detecção de objetos como um único problema de regressão, prevendo [caixas delimitadoras](https://www.ultralytics.com/glossary/bounding-box) e probabilidades de classe diretamente de imagens completas em uma única avaliação. Este método revolucionário tornou os modelos YOLO significativamente mais rápidos do que os detectores de dois estágios anteriores, mantendo alta precisão.

Com cada nova versão, o YOLO tem introduzido melhorias arquitetónicas e técnicas inovadoras que otimizaram o desempenho em várias métricas. O YOLO26 continua esta tradição, incorporando os mais recentes avanços na pesquisa em visão computacional, apresentando inferência NMS-free de ponta a ponta e implementação otimizada para edge em aplicações do mundo real.

## FAQ

### O que é Ultralytics YOLO e como ele melhora a detecção de objetos?

Ultralytics YOLO é a aclamada série YOLO (You Only Look Once) para deteção de objetos em tempo real e segmentação de imagens. O modelo mais recente, [YOLO26](models/yolo26/), baseia-se em versões anteriores, introduzindo inferência NMS-free de ponta a ponta e implementação otimizada para edge. O YOLO suporta várias [tarefas de visão de IA](tasks/), como detect, segment, estimativa de pose, track e classificação. A sua arquitetura eficiente garante excelente velocidade e precisão, tornando-o adequado para diversas aplicações, incluindo dispositivos edge e APIs de nuvem.

### Como posso começar com a instalação e configuração do YOLO?

Começar a usar o YOLO é rápido e direto. Você pode instalar o pacote Ultralytics usando o [pip](https://pypi.org/project/ultralytics/) e começar a usar em minutos. Aqui está um comando de instalação básico:

Instalação usando pip

```
pip install -U ultralytics
```


Para um guia passo a passo completo, visite a nossa página de [Início Rápido](quickstart/). Este recurso irá ajudá-lo com as instruções de instalação, configuração inicial e execução do seu primeiro modelo.

### Como posso treinar um modelo YOLO personalizado no meu conjunto de dados?

Treinar um modelo YOLO personalizado em seu conjunto de dados envolve algumas etapas detalhadas:

- Prepare seu conjunto de dados anotado.
- Configure os parâmetros de treinamento em um arquivo YAML.
- Use o comando
`yolo TASK train`

para iniciar o treinamento. (Cada`TASK`

tem seu próprio argumento)

Aqui está um exemplo de código para a Tarefa de Detecção de Objetos:

Exemplo de Treinamento para a Tarefa de Detecção de Objetos

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Para um guia detalhado, consulte o nosso guia [Treinar um Modelo](modes/train/), que inclui exemplos e dicas para otimizar o seu processo de treinamento.

### Quais são as opções de licenciamento disponíveis para o Ultralytics YOLO?

A Ultralytics oferece duas opções de licenciamento para YOLO:

**Licença AGPL-3.0**: Esta licença de código aberto é ideal para uso educacional e não comercial, promovendo a colaboração aberta.**Licença Empresarial**: Esta é projetada para aplicações comerciais, permitindo a integração perfeita do software Ultralytics em produtos comerciais sem as restrições da licença AGPL-3.0.

Para mais detalhes, visite a nossa página de [Licenciamento](https://www.ultralytics.com/license).

### Como o Ultralytics YOLO pode ser usado para rastreamento de objetos em tempo real?

O Ultralytics YOLO suporta o rastreamento multi-objeto eficiente e personalizável. Para utilizar as capacidades de rastreamento, pode usar o comando `yolo track`

comando, como mostrado abaixo:

Exemplo para Rastreamento de Objetos em um Vídeo

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Para um guia detalhado sobre como configurar e executar o rastreamento de objetos, consulte a nossa documentação do [Modo de Rastreamento](modes/track/), que explica a configuração e as aplicações práticas em cenários em tempo real.

---

## Source: https://docs.ultralytics.com/it/

# Home

Presentiamo Ultralytics [YOLO26](models/yolo26/), l'ultima versione dell'acclamato modello di rilevamento di oggetti in tempo reale e segmentazione delle immagini. YOLO26 si basa sui progressi del [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl) e della [visione artificiale](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), offrendo inferenza end-to-end NMS-free e deployment ottimizzato per edge. Il suo design semplificato lo rende adatto a varie applicazioni e facilmente adattabile a diverse piattaforme hardware, dai dispositivi edge alle API cloud. Per carichi di lavoro di produzione stabili, sono raccomandati sia YOLO26 che [YOLO11](models/yolo11/).

Esplora la documentazione di Ultralytics, una risorsa completa progettata per aiutarti a comprendere e utilizzare le sue caratteristiche e capacità. Che tu sia un professionista esperto nel [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) o un nuovo arrivato nel campo, questo hub mira a massimizzare il potenziale di YOLO nei tuoi progetti.

## Da dove iniziare

**Introduzione**Installa

`ultralytics`

con pip e inizia in pochi minuti ad addestrare un modello YOLO**Predizione**Esegui previsioni su nuove immagini, video e stream con YOLO

**Addestra un modello**Addestra un nuovo modello YOLO sul tuo dataset personalizzato da zero oppure carica e addestra su un modello pre-addestrato

**Esplora le attività di Computer Vision**Scopri le attività YOLO come detect, segment, classify, pose, OBB e track

**Esplora YOLO26 🚀 NOVITÀ**Scopri gli ultimi modelli YOLO26 di Ultralytics con inferenza NMS-free e ottimizzazione per edge

**SAM 3: Segment Anything con Concetti 🚀 NOVITÀ**L'ultimo SAM 3 di Meta con Segmentazione di Concetti Promptable - segment tutte le istanze utilizzando testo o esemplari di immagini

**Open Source, AGPL-3.0**Ultralytics offre due licenze YOLO: AGPL-3.0 ed Enterprise. Esplora YOLO su

[GitHub](https://github.com/ultralytics/ultralytics).

**Guarda:** Come addestrare un modello YOLO26 sul tuo set di dati personalizzato in [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Breve storia

[YOLO](models/) (You Only Look Once), un popolare modello di [object detection](https://www.ultralytics.com/glossary/object-detection) e [image segmentation](https://www.ultralytics.com/glossary/image-segmentation), è stato sviluppato da Joseph Redmon e Ali Farhadi presso l'Università di Washington. Lanciato nel 2015, YOLO ha guadagnato popolarità per la sua alta velocità e precisione.

[YOLOv2](models/), rilasciato nel 2016, ha migliorato il modello originale incorporando la normalizzazione batch, le anchor boxes e i dimension clusters.[YOLOv3](models/yolov3/), lanciato nel 2018, ha ulteriormente migliorato le prestazioni del modello utilizzando una rete backbone più efficiente, ancore multiple e spatial pyramid pooling.[YOLOv4](models/yolov4/)è stato rilasciato nel 2020, introducendo innovazioni come Mosaic[data augmentation](https://www.ultralytics.com/glossary/data-augmentation), una nuova detection head anchor-free e una nuova[loss function](https://www.ultralytics.com/glossary/loss-function).[YOLOv5](models/yolov5/)ha ulteriormente migliorato le prestazioni del modello e aggiunto nuove funzionalità come l'ottimizzazione degli iperparametri, il tracciamento integrato degli esperimenti e l'esportazione automatica in formati di esportazione popolari.[YOLOv6](models/yolov6/)è stato rilasciato come open source da[Meituan](https://www.meituan.com/)nel 2022 ed è utilizzato in molti robot di consegna autonomi dell'azienda.[YOLOv7](models/yolov7/)ha aggiunto attività aggiuntive come la stima della posa sul dataset dei keypoint COCO.[YOLOv8](models/yolov8/)rilasciato nel 2023 da Ultralytics, ha introdotto nuove funzionalità e miglioramenti per prestazioni, flessibilità ed efficienza avanzate, supportando una gamma completa di attività di visione artificiale.[YOLOv9](models/yolov9/)introduce metodi innovativi come le informazioni sul gradiente programmabile (PGI) e la rete di aggregazione di livelli efficiente generalizzata (GELAN).[YOLOv10](models/yolov10/)creato da ricercatori della[Tsinghua University](https://www.tsinghua.edu.cn/en/)utilizzando il[pacchetto Python](https://www.ultralytics.com/)di[Ultralytics](https://pypi.org/project/ultralytics/), fornisce progressi nel[object detection](tasks/detect/)in tempo reale introducendo un head End-to-End che elimina i requisiti di Non-Maximum Suppression (NMS).: Rilasciato a settembre 2024, YOLO11 offre prestazioni eccellenti in molteplici attività, tra cui[YOLO11](models/yolo11/)[rilevamento di oggetti](tasks/detect/),[segment](tasks/segment/),[stima della posa](tasks/pose/),[track](modes/track/)e[classificazione](tasks/classify/), consentendo il deployment in diverse applicazioni e domini AI.: Il modello YOLO di prossima generazione di Ultralytics ottimizzato per il deployment su edge con inferenza end-to-end NMS-free.[YOLO26](models/yolo26/)🚀

## Licenze YOLO: come viene concesso in licenza Ultralytics YOLO?

Ultralytics offre due opzioni di licenza per soddisfare diversi casi d'uso:

**Licenza AGPL-3.0**: Questa licenza open source[approvata da OSI](https://opensource.org/license/agpl-v3)è ideale per studenti e appassionati, promuovendo la collaborazione aperta e la condivisione della conoscenza. Consulta il file[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)per maggiori dettagli.**Licenza Enterprise**: Progettata per l'uso commerciale, questa licenza consente l'integrazione perfetta del software Ultralytics e dei modelli di intelligenza artificiale in beni e servizi commerciali, aggirando i requisiti open source di AGPL-3.0. Se il tuo scenario prevede l'incorporazione delle nostre soluzioni in un'offerta commerciale, contattaci tramite[Ultralytics Licensing](https://www.ultralytics.com/license).

La nostra strategia di licenza è progettata per garantire che qualsiasi miglioramento ai nostri progetti open-source venga restituito alla comunità. Crediamo nell'open source e la nostra missione è garantire che i nostri contributi possano essere utilizzati ed espansi in modi che beneficino tutti.

## L'evoluzione dell'object detection

Il rilevamento di oggetti si è evoluto significativamente nel corso degli anni, dalle tradizionali tecniche di computer vision ai modelli avanzati di deep learning. La [famiglia di modelli YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) è stata in prima linea in questa evoluzione, spingendo costantemente i confini di ciò che è possibile nel rilevamento di oggetti in tempo reale.

L'approccio unico di YOLO considera il rilevamento degli oggetti come un singolo problema di regressione, prevedendo [bounding box](https://www.ultralytics.com/glossary/bounding-box) e probabilità di classe direttamente dalle immagini complete in una singola valutazione. Questo metodo rivoluzionario ha reso i modelli YOLO significativamente più veloci rispetto ai precedenti rilevatori a due stadi, pur mantenendo un'elevata accuratezza.

Con ogni nuova versione, YOLO ha introdotto miglioramenti architetturali e tecniche innovative che hanno migliorato le prestazioni su varie metriche. YOLO26 continua questa tradizione incorporando gli ultimi progressi nella ricerca sulla visione artificiale, con inferenza end-to-end NMS-free e deployment ottimizzato per edge per applicazioni nel mondo reale.

## FAQ

### Cos'è Ultralytics YOLO e come migliora il rilevamento degli oggetti?

Ultralytics YOLO è l'acclamata serie YOLO (You Only Look Once) per il rilevamento di oggetti in tempo reale e la segmentazione delle immagini. L'ultimo modello, [YOLO26](models/yolo26/), si basa sulle versioni precedenti introducendo l'inferenza end-to-end NMS-free e il deployment ottimizzato per edge. YOLO supporta varie [attività di visione AI](tasks/) come detect, segment, stima della posa, track e classificazione. La sua architettura efficiente garantisce velocità e accuratezza eccellenti, rendendolo adatto a diverse applicazioni, inclusi dispositivi edge e API cloud.

### Come posso iniziare con l'installazione e la configurazione di YOLO?

Iniziare con YOLO è semplice e veloce. Puoi installare il pacchetto Ultralytics usando [pip](https://pypi.org/project/ultralytics/) ed essere operativo in pochi minuti. Ecco un comando di installazione di base:

Installazione tramite pip

```
pip install -U ultralytics
```


Per una guida completa dettagliata, visita la nostra pagina di [Avvio rapido](quickstart/). Questa risorsa ti aiuterà con le istruzioni di installazione, la configurazione iniziale e l'esecuzione del tuo primo modello.

### Come posso addestrare un modello YOLO personalizzato sul mio set di dati?

L'addestramento di un modello YOLO personalizzato sul tuo set di dati prevede alcuni passaggi dettagliati:

- Prepara il tuo set di dati annotato.
- Configura i parametri di addestramento in un file YAML.
- Utilizzare il
`yolo TASK train`

comando per avviare l'addestramento. (Ogni`TASK`

ha il suo argomento)

Ecco un codice di esempio per l'attività di rilevamento oggetti:

Esempio di addestramento per l'attività di rilevamento oggetti

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Per una guida dettagliata, consulta la nostra guida [Addestra un modello](modes/train/), che include esempi e suggerimenti per ottimizzare il processo di addestramento.

### Quali sono le opzioni di licenza disponibili per Ultralytics YOLO?

Ultralytics offre due opzioni di licenza per YOLO:

**Licenza AGPL-3.0**: Questa licenza open source è ideale per l'uso didattico e non commerciale, promuovendo la collaborazione aperta.**Licenza Enterprise**: Questa è progettata per applicazioni commerciali, consentendo una perfetta integrazione del software Ultralytics in prodotti commerciali senza le restrizioni della licenza AGPL-3.0.

Per maggiori dettagli, visita la nostra pagina [Licenze](https://www.ultralytics.com/license).

### Come può Ultralytics YOLO essere utilizzato per il tracciamento di oggetti in tempo reale?

Ultralytics YOLO supporta il tracciamento multi-oggetto efficiente e personalizzabile. Per utilizzare le funzionalità di tracciamento, puoi utilizzare il `yolo track`

comando, come mostrato di seguito:

Esempio per il tracciamento di oggetti su un video

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Per una guida dettagliata sulla configurazione e l'esecuzione del tracciamento degli oggetti, consulta la nostra documentazione sulla [Modalità Track](modes/track/), che spiega la configurazione e le applicazioni pratiche in scenari in tempo reale.

---

## Source: https://docs.ultralytics.com/tr/

# Giriş

Beğenilen gerçek zamanlı nesne algılama ve görüntü segmentasyonu modelinin en son sürümü olan Ultralytics [YOLO26](models/yolo26/)'yı tanıtıyoruz. YOLO26, uçtan uca NMS-free çıkarım ve optimize edilmiş uç dağıtımı özellikleriyle [derin öğrenme](https://www.ultralytics.com/glossary/deep-learning-dl) ve [bilgisayar görüşü](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025) gelişmelerine dayanmaktadır. Akıcı tasarımı, onu çeşitli uygulamalar için uygun ve uç cihazlardan bulut API'lerine kadar farklı donanım platformlarına kolayca uyarlanabilir kılar. Kararlı üretim iş yükleri için hem YOLO26 hem de [YOLO11](models/yolo11/) önerilir.

Özelliklerini ve yeteneklerini anlamanıza ve kullanmanıza yardımcı olmak için tasarlanmış kapsamlı bir kaynak olan Ultralytics Belgelerini keşfedin. İster deneyimli bir [makine öğrenimi](https://www.ultralytics.com/glossary/machine-learning-ml) uygulayıcısı olun, ister bu alanda yeni olun, bu merkez YOLO'nun projelerinizdeki potansiyelini en üst düzeye çıkarmayı amaçlar.

## Nereden Başlamalı

**Başlarken**Kurulum

`ultralytics`

pip ile bir YOLO modeli eğitmek için dakikalar içinde çalışmaya başlayın**Tahmin et**YOLO ile yeni resimler, videolar ve yayınlar üzerinde tahmin yapın

**Model Eğitme**Kendi özel veri kümeniz üzerinde sıfırdan yeni bir YOLO modeli eğitin veya önceden eğitilmiş bir modeli yükleyip üzerinde eğitin

**Bilgisayar Görüşü Görevlerini Keşfedin**detect, segment, classify, pose, OBB ve track gibi YOLO görevlerini keşfedin

**YOLO26'yı Keşfedin 🚀 YENİ**Ultralytics'in NMS-free çıkarım ve uç optimizasyonuna sahip en yeni YOLO26 modellerini keşfedin

**SAM 3: Kavramlarla Her Şeyi segment Etme 🚀 YENİ**Meta'nın en yeni SAM 3'ü, İstemlenebilir Kavram segmentasyonu ile - metin veya görüntü örnekleri kullanarak tüm örnekleri segment edin

**Açık Kaynak, AGPL-3.0**Ultralytics iki YOLO lisansı sunar: AGPL-3.0 ve Enterprise. YOLO'yu

[GitHub](https://github.com/ultralytics/ultralytics)üzerinde keşfedin.

**İzle:** Özel Veri Kümenizde Bir YOLO26 Modeli Nasıl Eğitilir? [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Kısa Bir Tarihçe

[YOLO](models/) (You Only Look Once), popüler bir [nesne algılama](https://www.ultralytics.com/glossary/object-detection) ve [görüntü segmentasyonu](https://www.ultralytics.com/glossary/image-segmentation) modeli, Joseph Redmon ve Ali Farhadi tarafından Washington Üniversitesi'nde geliştirilmiştir. 2015'te piyasaya sürülen YOLO, yüksek hızı ve doğruluğu nedeniyle popülerlik kazanmıştır.

- 2016'da piyasaya sürülen
[YOLOv2](models/), toplu normalleştirme, çapa kutuları ve boyut kümeleri ekleyerek orijinal modeli geliştirmiştir. - 2018'de piyasaya sürülen
[YOLOv3](models/yolov3/), daha verimli bir backbone ağı, çoklu bağlantılar ve uzamsal piramit havuzlama kullanarak modelin performansını daha da artırdı. [YOLOv4](models/yolov4/)2020'de piyasaya sürüldü ve Mozaik[veri artırma](https://www.ultralytics.com/glossary/data-augmentation), yeni bir çapa içermeyen algılama başlığı ve yeni bir[kayıp fonksiyonu](https://www.ultralytics.com/glossary/loss-function)gibi yenilikler getirdi.[YOLOv5](models/yolov5/), modelin performansını daha da artırdı ve hiperparametre optimizasyonu, entegre deney takibi ve popüler dışa aktarma biçimlerine otomatik dışa aktarma gibi yeni özellikler ekledi.[YOLOv6](models/yolov6/), 2022'de[Meituan](https://www.meituan.com/)tarafından açık kaynaklı hale getirilmiştir ve şirketin otonom teslimat robotlarının çoğunda kullanılmaktadır.[YOLOv7](models/yolov7/), COCO anahtar noktaları veri kümesinde poz tahmini gibi ek görevler ekledi.[YOLOv8](models/yolov8/), 2023'te Ultralytics tarafından yayınlanmış olup, gelişmiş performans, esneklik ve verimlilik için yeni özellikler ve iyileştirmeler sunarak çok çeşitli vizyon yapay zeka görevlerini destekler.[YOLOv9](models/yolov9/), Programlanabilir Gradyan Bilgisi (PGI) ve Genelleştirilmiş Verimli Katman Toplama Ağı (GELAN) gibi yenilikçi yöntemler sunar.[YOLOv10](models/yolov10/),[Tsinghua Üniversitesi'ndeki](https://www.tsinghua.edu.cn/en/)araştırmacılar tarafından[Ultralytics](https://www.ultralytics.com/)[Python paketi](https://pypi.org/project/ultralytics/)kullanılarak oluşturulmuştur ve Non-Maximum Suppression (NMS) gereksinimlerini ortadan kaldıran Uçtan Uca bir başlık sunarak gerçek zamanlı[nesne algılama](tasks/detect/)alanında gelişmeler sağlar.: Eylül 2024'te piyasaya sürülen YOLO11,[YOLO11](models/yolo11/)[nesne algılama](tasks/detect/),[segment](tasks/segment/), poz tahmini,[track](modes/track/)ve[sınıflandırma](tasks/classify/)dahil olmak üzere birden fazla görevde mükemmel performans sunarak çeşitli yapay zeka uygulamaları ve alanlarında dağıtıma olanak tanır.: Ultralytics'in uçtan uca NMS-free çıkarım ile uç dağıtımı için optimize edilmiş yeni nesil YOLO modeli.[YOLO26](models/yolo26/)🚀

## YOLO Lisansları: Ultralytics YOLO nasıl lisanslanmıştır?

Ultralytics, çeşitli kullanım durumlarına uyum sağlamak için iki lisanslama seçeneği sunar:

**AGPL-3.0 Lisansı**: Bu[OSI onaylı](https://opensource.org/license/agpl-v3)açık kaynaklı lisans, açık işbirliğini ve bilgi paylaşımını teşvik ederek öğrenciler ve meraklılar için idealdir. Daha fazla ayrıntı için[LİSANS](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)dosyasına bakın.**Kurumsal Lisans**: Ticari kullanım için tasarlanan bu lisans, Ultralytics yazılımının ve yapay zeka modellerinin ticari mal ve hizmetlere sorunsuz bir şekilde entegre edilmesine izin vererek AGPL-3.0'ın açık kaynak gereksinimlerini ortadan kaldırır. Çözümlerimizi ticari bir teklife yerleştirmeyi içeren bir senaryonuz varsa,[Ultralytics Lisanslama](https://www.ultralytics.com/license)aracılığıyla bize ulaşın.

Lisanslama stratejimiz, açık kaynak projelerimizdeki tüm iyileştirmelerin topluluğa geri dönmesini sağlamak üzere tasarlanmıştır. Açık kaynağa inanıyoruz ve misyonumuz, katkılarımızın herkesin yararına olacak şekilde kullanılıp genişletilebilmesini sağlamaktır.

## Nesne Algılamanın Evrimi

Nesne tespiti, geleneksel bilgisayar görüşü tekniklerinden gelişmiş derin öğrenme modellerine kadar yıllar içinde önemli ölçüde gelişti. [YOLO model ailesi](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models), gerçek zamanlı nesne tespitinde mümkün olanın sınırlarını sürekli olarak zorlayarak bu evrimin ön saflarında yer almıştır.

YOLO'nun benzersiz yaklaşımı, nesne tespitini tek bir regresyon problemi olarak ele alır ve [sınırlayıcı kutuları](https://www.ultralytics.com/glossary/bounding-box) ve sınıf olasılıklarını tek bir değerlendirmede doğrudan tam görüntülerden tahmin eder. Bu devrim niteliğindeki yöntem, YOLO modellerini yüksek doğruluğu korurken önceki iki aşamalı dedektörlerden önemli ölçüde daha hızlı hale getirmiştir.

Her yeni sürümle birlikte YOLO, çeşitli metriklerde performansı artıran mimari iyileştirmeler ve yenilikçi teknikler sunmuştur. YOLO26, bilgisayar görüşü araştırmalarındaki en son gelişmeleri bünyesine katarak, gerçek dünya uygulamaları için uçtan uca NMS-free çıkarım ve optimize edilmiş uç dağıtımı özellikleriyle bu geleneği sürdürmektedir.

## SSS

### Ultralytics YOLO nedir ve nesne tespitini nasıl geliştirir?

Ultralytics YOLO, gerçek zamanlı nesne algılama ve görüntü segmentasyonu için beğenilen YOLO (You Only Look Once) serisidir. En son model olan [YOLO26](models/yolo26/), uçtan uca NMS-free çıkarım ve optimize edilmiş uç dağıtımı sunarak önceki sürümler üzerine inşa edilmiştir. YOLO; detect, segment, poz tahmini, track ve sınıflandırma gibi çeşitli [görsel yapay zeka görevlerini](tasks/) destekler. Verimli mimarisi, mükemmel hız ve doğruluk sağlayarak, uç cihazlar ve bulut API'leri dahil olmak üzere çeşitli uygulamalar için uygun hale getirir.

### YOLO kurulumu ve yapılandırmasına nasıl başlayabilirim?

YOLO'ya başlamak hızlı ve kolaydır. [pip](https://pypi.org/project/ultralytics/) kullanarak Ultralytics paketini yükleyebilir ve dakikalar içinde çalışmaya başlayabilirsiniz. İşte temel bir kurulum komutu:

pip kullanılarak kurulum

```
pip install -U ultralytics
```


Kapsamlı, adım adım bir kılavuz için [Hızlı Başlangıç](quickstart/) sayfamızı ziyaret edin. Bu kaynak, kurulum talimatları, ilk kurulum ve ilk modelinizi çalıştırma konusunda size yardımcı olacaktır.

### Veri kümem üzerinde özel bir YOLO modelini nasıl eğitebilirim?

Veri kümeniz üzerinde özel bir YOLO modeli eğitmek, birkaç ayrıntılı adım içerir:

- Ek açıklamalı veri kümenizi hazırlayın.
- Bir YAML dosyasında eğitim parametrelerini yapılandırın.
- Şunu kullanın:
`yolo TASK train`

eğitime başlamak için komut. (Her`TASK`

kendi argümanına sahiptir)

İşte Nesne Algılama Görevi için örnek kod:

Nesne Algılama Görevi için Eğitim Örneği

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Ayrıntılı bir inceleme için, eğitim sürecinizi optimize etmeye yönelik örnekler ve ipuçları içeren [Model Eğitme](modes/train/) kılavuzumuza göz atın.

### Ultralytics YOLO için hangi lisanslama seçenekleri mevcuttur?

Ultralytics, YOLO için iki lisanslama seçeneği sunar:

**AGPL-3.0 Lisansı**: Bu açık kaynaklı lisans, açık işbirliğini teşvik ederek eğitimsel ve ticari olmayan kullanım için idealdir.**Kurumsal Lisans**: Bu, ticari uygulamalar için tasarlanmıştır ve Ultralytics yazılımının AGPL-3.0 lisansının kısıtlamaları olmaksızın ticari ürünlere sorunsuz bir şekilde entegre edilmesine olanak tanır.

Daha fazla ayrıntı için [Lisanslama](https://www.ultralytics.com/license) sayfamızı ziyaret edin.

### Ultralytics YOLO gerçek zamanlı nesne takibi için nasıl kullanılabilir?

Ultralytics YOLO, verimli ve özelleştirilebilir çoklu nesne takibini destekler. İzleme özelliklerini kullanmak için aşağıdaki gibi `yolo track`

komutu, aşağıda gösterildiği gibi:

Bir Video Üzerinde Nesne Takibi Örneği

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Nesne takibini ayarlama ve çalıştırma hakkında ayrıntılı bir kılavuz için, gerçek zamanlı senaryolardaki yapılandırmayı ve pratik uygulamaları açıklayan [İzleme Modu](modes/track/) belgelerimize göz atın.

---

## Source: https://docs.ultralytics.com/vi/

# Trang chủ

Giới thiệu Ultralytics [YOLO26](models/yolo26/), phiên bản mới nhất của mô hình phát hiện đối tượng và phân đoạn hình ảnh theo thời gian thực nổi tiếng. YOLO26 được xây dựng dựa trên những tiến bộ về [học sâu](https://www.ultralytics.com/glossary/deep-learning-dl) và [thị giác máy tính](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025), với tính năng suy luận không NMS từ đầu đến cuối và triển khai biên tối ưu. Thiết kế tinh gọn của nó làm cho nó phù hợp với nhiều ứng dụng khác nhau và dễ dàng thích ứng với các nền tảng phần cứng khác nhau, từ thiết bị biên đến API đám mây. Đối với các khối lượng công việc sản xuất ổn định, cả YOLO26 và [YOLO11](models/yolo11/) đều được khuyến nghị.

Khám phá Ultralytics Docs, một tài nguyên toàn diện được thiết kế để giúp bạn hiểu và sử dụng các tính năng và khả năng của nó. Cho dù bạn là một người thực hành [máy học](https://www.ultralytics.com/glossary/machine-learning-ml) dày dặn kinh nghiệm hay người mới làm quen với lĩnh vực này, trung tâm này nhằm mục đích tối đa hóa tiềm năng của YOLO trong các dự án của bạn.

## Bắt đầu từ đâu

**Bắt đầu**Cài đặt

`ultralytics`

với pip và thiết lập và chạy trong vài phút để huấn luyện mô hình YOLO**Dự đoán**Dự đoán trên hình ảnh, video và luồng mới với YOLO

**Huấn luyện mô hình**Huấn luyện một mô hình YOLO mới trên bộ dữ liệu tùy chỉnh của riêng bạn từ đầu hoặc tải và huấn luyện trên một mô hình đã được huấn luyện trước.

**Khám phá các Tác vụ Thị giác Máy tính**Khám phá các tác vụ YOLO như detect, segment, classify, pose, obb và track

**Khám phá YOLO26 🚀 MỚI**Khám phá các mô hình YOLO26 mới nhất của Ultralytics với suy luận không NMS và tối ưu hóa biên

**SAM 3: Segment Anything với Khái niệm 🚀 MỚI**SAM 3 mới nhất của Meta với Promptable Concept Segmentation - segment tất cả các thực thể sử dụng ví dụ văn bản hoặc hình ảnh.

**Mã nguồn mở, AGPL-3.0**Ultralytics cung cấp hai giấy phép YOLO: AGPL-3.0 và Enterprise. Khám phá YOLO trên

[GitHub](https://github.com/ultralytics/ultralytics).

**Xem:** Hướng dẫn cách huấn luyện mô hình YOLO26 trên tập dữ liệu tùy chỉnh của bạn [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: Lịch sử tóm tắt

[YOLO](models/) (You Only Look Once), một mô hình [phát hiện đối tượng](https://www.ultralytics.com/glossary/object-detection) và [phân đoạn hình ảnh](https://www.ultralytics.com/glossary/image-segmentation) phổ biến, được phát triển bởi Joseph Redmon và Ali Farhadi tại Đại học Washington. Ra mắt vào năm 2015, YOLO đã trở nên phổ biến nhờ tốc độ và độ chính xác cao.

[YOLOv2](models/), được phát hành vào năm 2016, đã cải thiện mô hình ban đầu bằng cách kết hợp chuẩn hóa hàng loạt, hộp neo và các cụm chiều.[YOLOv3](models/yolov3/), ra mắt năm 2018, tiếp tục nâng cao hiệu suất của mô hình bằng cách sử dụng mạng xương sống hiệu quả hơn, nhiều neo hơn và spatial pyramid pooling.[YOLOv4](models/yolov4/)được phát hành vào năm 2020, giới thiệu các cải tiến như[tăng cường dữ liệu](https://www.ultralytics.com/glossary/data-augmentation)Mosaic, một đầu dò tìm không cần neo mới và một[hàm mất mát](https://www.ultralytics.com/glossary/loss-function)mới.[YOLOv5](models/yolov5/)tiếp tục cải thiện hiệu suất của mô hình và bổ sung các tính năng mới như tối ưu hóa siêu tham số, tích hợp theo dõi thử nghiệm và tự động xuất sang các định dạng xuất phổ biến.[YOLOv6](models/yolov6/)đã được[Meituan](https://www.meituan.com/)mở mã nguồn vào năm 2022 và được sử dụng trong nhiều robot giao hàng tự động của công ty.[YOLOv7](models/yolov7/)đã thêm các tác vụ bổ sung như ước tính tư thế trên bộ dữ liệu COCO keypoints.[YOLOv8](models/yolov8/)được phát hành vào năm 2023 bởi Ultralytics, giới thiệu các tính năng và cải tiến mới để nâng cao hiệu suất, tính linh hoạt và hiệu quả, hỗ trợ đầy đủ các tác vụ AI về thị giác.[YOLOv9](models/yolov9/)giới thiệu các phương pháp cải tiến như Thông tin Gradient Có thể Lập trình (PGI) và Mạng Tổng hợp Lớp Hiệu quả Tổng quát (GELAN).[YOLOv10](models/yolov10/)được tạo bởi các nhà nghiên cứu từ[Đại học Thanh Hoa](https://www.tsinghua.edu.cn/en/)bằng cách sử dụng[Ultralytics](https://www.ultralytics.com/)[gói Python](https://pypi.org/project/ultralytics/), cung cấp những tiến bộ trong[object detection](tasks/detect/)thời gian thực bằng cách giới thiệu một head End-to-End loại bỏ các yêu cầu về Non-Maximum Suppression (NMS).: Ra mắt vào tháng 9 năm 2024, YOLO11 mang lại hiệu suất vượt trội trên nhiều tác vụ, bao gồm[YOLO11](models/yolo11/)[phát hiện đối tượng](tasks/detect/),[segment](tasks/segment/),[ước tính tư thế](tasks/pose/),[track](modes/track/)và[phân loại](tasks/classify/), cho phép triển khai trên các ứng dụng và lĩnh vực AI đa dạng.: Mô hình YOLO thế hệ tiếp theo của Ultralytics được tối ưu hóa cho triển khai biên với suy luận không NMS từ đầu đến cuối.[YOLO26](models/yolo26/)🚀

## Giấy phép YOLO: Ultralytics YOLO được cấp phép như thế nào?

Ultralytics cung cấp hai tùy chọn cấp phép để phù hợp với các trường hợp sử dụng đa dạng:

**Giấy phép AGPL-3.0**: Giấy phép mã nguồn mở[được OSI phê duyệt](https://opensource.org/license/agpl-v3)này lý tưởng cho sinh viên và những người đam mê, thúc đẩy sự hợp tác mở và chia sẻ kiến thức. Xem tệp[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)để biết thêm chi tiết.**Giấy phép doanh nghiệp**: Được thiết kế để sử dụng cho mục đích thương mại, giấy phép này cho phép tích hợp liền mạch phần mềm và mô hình AI của Ultralytics vào hàng hóa và dịch vụ thương mại, bỏ qua các yêu cầu mã nguồn mở của AGPL-3.0. Nếu trường hợp của bạn liên quan đến việc nhúng các giải pháp của chúng tôi vào một sản phẩm thương mại, hãy liên hệ thông qua[Cấp phép Ultralytics](https://www.ultralytics.com/license).

Chiến lược cấp phép của chúng tôi được thiết kế để đảm bảo rằng mọi cải tiến đối với các dự án mã nguồn mở của chúng tôi đều được trả lại cho cộng đồng. Chúng tôi tin vào mã nguồn mở, và sứ mệnh của chúng tôi là đảm bảo rằng những đóng góp của chúng tôi có thể được sử dụng và mở rộng theo những cách có lợi cho tất cả mọi người.

## Sự phát triển của phát hiện đối tượng

Phát hiện đối tượng đã phát triển đáng kể trong những năm qua, từ các kỹ thuật computer vision truyền thống đến các mô hình deep learning tiên tiến. [Họ mô hình YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) luôn đi đầu trong sự phát triển này, liên tục vượt qua các giới hạn về những gì có thể trong phát hiện đối tượng theo thời gian thực.

Phương pháp tiếp cận độc đáo của YOLO coi việc phát hiện đối tượng như một bài toán hồi quy đơn lẻ, dự đoán [các hộp giới hạn](https://www.ultralytics.com/glossary/bounding-box) và xác suất lớp trực tiếp từ toàn bộ hình ảnh trong một lần đánh giá. Phương pháp mang tính cách mạng này đã làm cho các mô hình YOLO nhanh hơn đáng kể so với các trình dò tìm hai giai đoạn trước đó trong khi vẫn duy trì độ chính xác cao.

Với mỗi phiên bản mới, YOLO đã giới thiệu những cải tiến kiến trúc và kỹ thuật đổi mới giúp nâng cao hiệu suất trên nhiều chỉ số khác nhau. YOLO26 tiếp nối truyền thống này bằng cách tích hợp những tiến bộ mới nhất trong nghiên cứu thị giác máy tính, với tính năng suy luận không NMS từ đầu đến cuối và triển khai biên tối ưu cho các ứng dụng thực tế.

## Câu hỏi thường gặp

### Ultralytics YOLO là gì và nó cải thiện khả năng phát hiện đối tượng như thế nào?

Ultralytics YOLO là dòng YOLO (You Only Look Once) nổi tiếng về khả năng detect đối tượng và segment hình ảnh theo thời gian thực. Mô hình mới nhất, [YOLO26](models/yolo26/), được xây dựng dựa trên các phiên bản trước đó bằng cách giới thiệu suy luận không NMS từ đầu đến cuối và triển khai tối ưu trên thiết bị biên. YOLO hỗ trợ nhiều [tác vụ AI thị giác](tasks/) khác nhau như detect, segment, ước tính tư thế, track và phân loại. Kiến trúc hiệu quả của nó đảm bảo tốc độ và độ chính xác vượt trội, phù hợp cho nhiều ứng dụng đa dạng, bao gồm các thiết bị biên và API đám mây.

### Làm cách nào để bắt đầu cài đặt và thiết lập YOLO?

Bắt đầu với YOLO rất nhanh chóng và đơn giản. Bạn có thể cài đặt gói Ultralytics bằng [pip](https://pypi.org/project/ultralytics/) và thiết lập, chạy trong vài phút. Dưới đây là lệnh cài đặt cơ bản:

Cài đặt bằng pip

```
pip install -U ultralytics
```


Để có hướng dẫn từng bước toàn diện, hãy truy cập trang [Bắt đầu nhanh](quickstart/) của chúng tôi. Tài nguyên này sẽ giúp bạn với hướng dẫn cài đặt, thiết lập ban đầu và chạy mô hình đầu tiên của bạn.

### Làm cách nào để huấn luyện một mô hình YOLO tùy chỉnh trên bộ dữ liệu của tôi?

Huấn luyện một mô hình YOLO tùy chỉnh trên bộ dữ liệu của bạn bao gồm một vài bước chi tiết:

- Chuẩn bị bộ dữ liệu đã được gán nhãn của bạn.
- Định cấu hình các tham số huấn luyện trong tệp YAML.
- Sử dụng
`yolo TASK train`

lệnh để bắt đầu huấn luyện. (Mỗi`TASK`

có đối số riêng)

Dưới đây là mã ví dụ cho Nhiệm vụ Phát hiện Đối tượng:

Ví dụ Huấn luyện cho Nhiệm vụ Phát hiện Đối tượng

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


Để có hướng dẫn chi tiết, hãy xem hướng dẫn [Huấn luyện Mô hình](modes/train/) của chúng tôi, bao gồm các ví dụ và mẹo để tối ưu hóa quy trình huấn luyện của bạn.

### Các tùy chọn cấp phép nào khả dụng cho Ultralytics YOLO?

Ultralytics cung cấp hai tùy chọn cấp phép cho YOLO:

**Giấy phép AGPL-3.0**: Giấy phép mã nguồn mở này lý tưởng cho mục đích sử dụng giáo dục và phi thương mại, thúc đẩy sự hợp tác mở.**Giấy phép Doanh nghiệp**: Được thiết kế cho các ứng dụng thương mại, cho phép tích hợp liền mạch phần mềm Ultralytics vào các sản phẩm thương mại mà không bị giới hạn bởi giấy phép AGPL-3.0.

Để biết thêm chi tiết, hãy truy cập trang [Cấp phép](https://www.ultralytics.com/license) của chúng tôi.

### Ultralytics YOLO có thể được sử dụng để theo dõi đối tượng theo thời gian thực như thế nào?

Ultralytics YOLO hỗ trợ theo dõi đa đối tượng hiệu quả và có thể tùy chỉnh. Để sử dụng các khả năng theo dõi, bạn có thể sử dụng `yolo track`

lệnh, như được hiển thị bên dưới:

Ví dụ về Theo dõi Đối tượng trên Video

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


Để có hướng dẫn chi tiết về thiết lập và chạy theo dõi đối tượng, hãy xem tài liệu [Chế độ theo dõi (Track Mode)](modes/track/) của chúng tôi, tài liệu này giải thích cấu hình và các ứng dụng thực tế trong các tình huống thời gian thực.

---

## Source: https://docs.ultralytics.com/ar/

# الرئيسية

نقدم Ultralytics [YOLO26](models/yolo26/)، أحدث إصدار من نموذج الكشف عن الكائنات في الوقت الفعلي وتجزئة الصور الشهير. تم بناء YOLO26 على أساس التطورات في [التعلم العميق](https://www.ultralytics.com/glossary/deep-learning-dl) و[رؤية الكمبيوتر](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025)، ويتميز باستدلال خالٍ من NMS من البداية إلى النهاية ونشر مُحسّن على الأجهزة الطرفية. تصميمه المبسّط يجعله مناسبًا لمجموعة متنوعة من التطبيقات وقابلاً للتكيف بسهولة مع منصات الأجهزة المختلفة، من الأجهزة الطرفية إلى واجهات برمجة تطبيقات السحابة. لأحمال عمل الإنتاج المستقرة، يوصى بكل من YOLO26 و[YOLO11](models/yolo11/).

استكشف وثائق Ultralytics، وهي مصدر شامل مصمم لمساعدتك على فهم ميزاتها وقدراتها واستخدامها. سواء كنت ممارسًا متمرسًا في [التعلم الآلي](https://www.ultralytics.com/glossary/machine-learning-ml) أو جديدًا في هذا المجال، يهدف هذا المركز إلى زيادة إمكانات YOLO في مشاريعك.

## من أين أبدأ؟

**ابدأ**تثبيت

`ultralytics`

باستخدام pip وابدأ العمل في دقائق لتدريب نموذج YOLO**توقع**توقع على الصور ومقاطع الفيديو والبث الجديدة باستخدام YOLO

**تدريب نموذج**قم بتدريب نموذج YOLO جديد على مجموعة البيانات المخصصة الخاصة بك من البداية أو قم بتحميله والتدريب عليه على نموذج مُدرَّب مسبقًا

**استكشف مهام رؤية الكمبيوتر**اكتشف مهام YOLO مثل detect و segment و classify و pose و OBB و track

**استكشف YOLO26 🚀 جديد**اكتشف أحدث نماذج Ultralytics YOLO26 مع استدلال خالٍ من NMS وتحسين للأجهزة الطرفية.

**SAM 3: segment أي شيء بالمفاهيم 🚀 جديد**أحدث إصدار من SAM 3 من Meta مع segment المفاهيم القابل للتوجيه - segment جميع الكائنات باستخدام موجهات نصية أو صور أمثلة

**مفتوح المصدر، AGPL-3.0**تقدم Ultralytics ترخيصين لـ YOLO: AGPL-3.0 و Enterprise. استكشف YOLO على

[GitHub](https://github.com/ultralytics/ultralytics).

**شاهد:** كيفية تدريب نموذج YOLO26 على مجموعة البيانات المخصصة الخاصة بك في [Google Colab](https://colab.research.google.com/github/ultralytics/ultralytics/blob/main/examples/tutorial.ipynb).

## YOLO: لمحة تاريخية موجزة

[YOLO](models/) (You Only Look Once)، وهو نموذج شائع [لاكتشاف الكائنات](https://www.ultralytics.com/glossary/object-detection) و[تقسيم الصور](https://www.ultralytics.com/glossary/image-segmentation)، تم تطويره بواسطة جوزيف ريدمون وعلي فرهادي في جامعة واشنطن. تم إطلاق YOLO في عام 2015، واكتسب شعبية بسبب سرعته ودقته العالية.

[YOLOv2](models/)، الذي تم إصداره في عام 2016، قام بتحسين النموذج الأصلي من خلال دمج التسوية الدفعية ومربعات الارتكاز ومجموعات الأبعاد.[YOLOv3](models/yolov3/)، الذي تم إطلاقه في عام 2018، عزز أداء النموذج بشكل أكبر باستخدام شبكة أساسية أكثر كفاءة، ومرتكزات متعددة، وتجميع هرمي مكاني.- تم إصدار
[YOLOv4](models/yolov4/)في عام 2020، وقدم ابتكارات مثل[زيادة البيانات](https://www.ultralytics.com/glossary/data-augmentation)Mosaic، ورأس كشف جديد بدون مرساة، و[دالة خسارة](https://www.ultralytics.com/glossary/loss-function)جديدة. [YOLOv5](models/yolov5/)حسّن أداء النموذج بشكل أكبر وأضاف ميزات جديدة مثل تحسين المعلمات الفائقة، وتتبع التجارب المتكامل، والتصدير التلقائي إلى تنسيقات التصدير الشائعة.[YOLOv6](models/yolov6/)تم تطويره مفتوح المصدر بواسطة[Meituan](https://www.meituan.com/)في عام 2022 ويستخدم في العديد من روبوتات التوصيل المستقلة التابعة للشركة.[YOLOv7](models/yolov7/)أضاف مهام إضافية مثل تقدير الوضع على مجموعة بيانات COCO keypoints.[YOLOv8](models/yolov8/)الذي تم إصداره في عام 2023 بواسطة Ultralytics، قدم ميزات وتحسينات جديدة لتحسين الأداء والمرونة والكفاءة، ودعم مجموعة كاملة من مهام رؤية الذكاء الاصطناعي.- يقدم
[YOLOv9](models/yolov9/)طرقًا مبتكرة مثل معلومات التدرج القابلة للبرمجة (PGI) وشبكة تجميع الطبقات الفعالة المعممة (GELAN). [YOLOv10](models/yolov10/)الذي تم إنشاؤه بواسطة باحثين من[جامعة تسينغ هوا](https://www.tsinghua.edu.cn/en/)باستخدام[Ultralytics](https://www.ultralytics.com/)[حزمة بايثون](https://pypi.org/project/ultralytics/)، يوفر تطورات في[اكتشاف الكائنات](tasks/detect/)في الوقت الفعلي من خلال تقديم رأس شامل يزيل متطلبات Non-Maximum Suppression (NMS).: تم إصداره في سبتمبر 2024، يقدم YOLO11 أداءً ممتازًا عبر مهام متعددة، بما في ذلك[YOLO11](models/yolo11/)[الكشف عن الكائنات](tasks/detect/)، و[segment](tasks/segment/)، و[تقدير الوضعيات](tasks/pose/)، و[track](modes/track/)، و[التصنيف](tasks/classify/)، مما يتيح النشر عبر تطبيقات ومجالات الذكاء الاصطناعي المتنوعة.: نموذج YOLO من الجيل التالي من Ultralytics، مُحسّن للنشر على الأجهزة الطرفية مع استدلال خالٍ من NMS من البداية إلى النهاية.[YOLO26](models/yolo26/)🚀

## تراخيص YOLO: كيف يتم ترخيص Ultralytics YOLO؟

تقدم Ultralytics خيارين للترخيص لاستيعاب حالات الاستخدام المتنوعة:

**رخصة AGPL-3.0**: هذه الرخصة مفتوحة المصدر[معتمدة من OSI](https://opensource.org/license/agpl-v3)مثالية للطلاب والمتحمسين، وتعزز التعاون المفتوح وتبادل المعرفة. راجع ملف[LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE)لمزيد من التفاصيل.**رخصة المؤسسة**: صُممت هذه الرخصة للاستخدام التجاري، وتسمح بالتكامل السلس لبرامج Ultralytics ونماذج الذكاء الاصطناعي في السلع والخدمات التجارية، متجاوزةً متطلبات المصدر المفتوح لرخصة AGPL-3.0. إذا كان السيناريو الخاص بك يتضمن تضمين حلولنا في عرض تجاري، فتواصل معنا من خلال[ترخيص Ultralytics](https://www.ultralytics.com/license).

تم تصميم استراتيجية الترخيص لدينا لضمان عودة أي تحسينات على مشاريعنا مفتوحة المصدر إلى المجتمع. نحن نؤمن بالمصدر المفتوح، ومهمتنا هي ضمان إمكانية استخدام مساهماتنا وتوسيعها بطرق تفيد الجميع.

## تطور اكتشاف الأجسام

تطور الكشف عن الكائنات بشكل كبير على مر السنين، من تقنيات رؤية الكمبيوتر التقليدية إلى نماذج التعلم العميق المتقدمة. كانت [عائلة نماذج YOLO](https://www.ultralytics.com/blog/the-evolution-of-object-detection-and-ultralytics-yolo-models) في طليعة هذا التطور، حيث دفعت باستمرار حدود الممكن في الكشف عن الكائنات في الوقت الفعلي.

يعالج نهج YOLO الفريد اكتشاف الكائنات كمشكلة انحدار واحدة، ويتوقع [مربعات الإحاطة](https://www.ultralytics.com/glossary/bounding-box) واحتمالات الفئة مباشرة من الصور الكاملة في تقييم واحد. لقد جعلت هذه الطريقة الثورية نماذج YOLO أسرع بكثير من الكاشفات السابقة ذات المرحلتين مع الحفاظ على دقة عالية.

مع كل إصدار جديد، قدم YOLO تحسينات معمارية وتقنيات مبتكرة عززت الأداء عبر مقاييس مختلفة. يواصل YOLO26 هذا التقليد من خلال دمج أحدث التطورات في أبحاث رؤية الكمبيوتر، ويتميز باستدلال خالٍ من NMS من البداية إلى النهاية ونشر مُحسّن على الأجهزة الطرفية للتطبيقات الواقعية.

## الأسئلة الشائعة

### ما هو Ultralytics YOLO وكيف يحسن من اكتشاف الكائنات؟

Ultralytics YOLO هي سلسلة YOLO (You Only Look Once) الشهيرة للكشف عن الكائنات في الوقت الفعلي وتجزئة الصور. يعتمد أحدث نموذج، [YOLO26](models/yolo26/)، على الإصدارات السابقة من خلال تقديم استدلال خالٍ من NMS من البداية إلى النهاية ونشر مُحسّن على الأجهزة الطرفية. يدعم YOLO مهام [الذكاء الاصطناعي البصري](tasks/) المتنوعة مثل detect، وsegment، وتقدير الوضعيات، وtrack، والتصنيف. تضمن بنيته الفعالة سرعة ودقة ممتازتين، مما يجعله مناسبًا لمجموعة متنوعة من التطبيقات، بما في ذلك الأجهزة الطرفية وواجهات برمجة تطبيقات السحابة.

### كيف يمكنني البدء في تثبيت وإعداد YOLO؟

البدء في استخدام YOLO سريع ومباشر. يمكنك تثبيت حزمة Ultralytics باستخدام [pip](https://pypi.org/project/ultralytics/) والبدء في غضون دقائق. إليك أمر تثبيت أساسي:

التثبيت باستخدام pip

```
pip install -U ultralytics
```


للحصول على دليل شامل خطوة بخطوة، قم بزيارة صفحة [البدء السريع](quickstart/) الخاصة بنا. سيساعدك هذا المورد في تعليمات التثبيت والإعداد الأولي وتشغيل النموذج الأول الخاص بك.

### كيف يمكنني تدريب نموذج YOLO مخصص على مجموعة البيانات الخاصة بي؟

يتضمن تدريب نموذج YOLO مخصص على مجموعة البيانات الخاصة بك بعض الخطوات التفصيلية:

- قم بإعداد مجموعة البيانات المشروحة الخاصة بك.
- قم بتكوين معلمات التدريب في ملف YAML.
- استخدم
`yolo TASK train`

الأمر لبدء التدريب. (كل`TASK`

له وسيطة خاصة به)

إليك مثال على التعليمات البرمجية لمهمة الكشف عن الكائنات:

مثال على التدريب لمهمة الكشف عن الكائنات

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml epochs=100 imgsz=640
```


للحصول على شرح تفصيلي، راجع دليل [تدريب نموذج](modes/train/) الخاص بنا، والذي يتضمن أمثلة ونصائح لتحسين عملية التدريب.

### ما هي خيارات الترخيص المتاحة لـ Ultralytics YOLO؟

تقدم Ultralytics خيارين للترخيص لـ YOLO:

**رخصة AGPL-3.0**: هذه الرخصة مفتوحة المصدر مثالية للاستخدام التعليمي وغير التجاري، وتعزز التعاون المفتوح.**رخصة المؤسسة**: تم تصميم هذا للتطبيقات التجارية، مما يسمح بالتكامل السلس لبرامج Ultralytics في المنتجات التجارية دون قيود رخصة AGPL-3.0.

للمزيد من التفاصيل، يرجى زيارة صفحة [التراخيص](https://www.ultralytics.com/license) الخاصة بنا.

### كيف يمكن استخدام Ultralytics YOLO لتتبع الكائنات في الوقت الفعلي؟

يدعم Ultralytics YOLO تتبعًا فعالًا وقابلاً للتخصيص لأجسام متعددة. للاستفادة من إمكانات التتبع، يمكنك استخدام الأمر `yolo track`

الأمر، كما هو موضح أدناه:

مثال لتتبع الأجسام على مقطع فيديو

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track source=path/to/video.mp4
```


للحصول على دليل مفصل حول إعداد وتشغيل تتبع الكائنات، راجع وثائق [وضع التتبع (Track Mode)](modes/track/) الخاص بنا، والذي يشرح التكوين والتطبيقات العملية في سيناريوهات الوقت الفعلي.

---

## Source: https://docs.ultralytics.com/modes/

# Ultralytics YOLO26 Modes

## Introduction

Ultralytics YOLO26 is not just another object detection model; it's a versatile framework designed to cover the entire lifecycle of [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) models—from data ingestion and model training to validation, deployment, and real-world tracking. Each mode serves a specific purpose and is engineered to offer you the flexibility and efficiency required for different tasks and use cases.

**Watch:** Ultralytics Modes Tutorial: Train, Validate, Predict, Export & Benchmark.

### Modes at a Glance

Understanding the different **modes** that Ultralytics YOLO26 supports is critical to getting the most out of your models:

**Train**mode: Fine-tune your model on custom or preloaded datasets.**Val**mode: A post-training checkpoint to validate model performance.**Predict**mode: Unleash the predictive power of your model on real-world data.**Export**mode: Make your[model deployment](https://www.ultralytics.com/glossary/model-deployment)-ready in various formats.**Track**mode: Extend your object detection model into real-time tracking applications.**Benchmark**mode: Analyze the speed and accuracy of your model in diverse deployment environments.

This comprehensive guide aims to give you an overview and practical insights into each mode, helping you harness the full potential of YOLO26.

[Train](train/)

Train mode is used for training a YOLO26 model on a custom dataset. In this mode, the model is trained using the specified dataset and hyperparameters. The training process involves optimizing the model's parameters so that it can accurately predict the classes and locations of objects in an image. Training is essential for creating models that can recognize specific objects relevant to your application.

[Val](val/)

Val mode is used for validating a YOLO26 model after it has been trained. In this mode, the model is evaluated on a validation set to measure its accuracy and generalization performance. Validation helps identify potential issues like [overfitting](https://www.ultralytics.com/glossary/overfitting) and provides metrics such as [mean Average Precision](https://www.ultralytics.com/glossary/mean-average-precision-map) (mAP) to quantify model performance. This mode is crucial for tuning hyperparameters and improving overall model effectiveness.

[Predict](predict/)

Predict mode is used for making predictions using a trained YOLO26 model on new images or videos. In this mode, the model is loaded from a checkpoint file, and the user can provide images or videos to perform inference. The model identifies and localizes objects in the input media, making it ready for real-world applications. Predict mode is the gateway to applying your trained model to solve practical problems.

[Export](export/)

Export mode is used for converting a YOLO26 model to formats suitable for deployment across different platforms and devices. This mode transforms your PyTorch model into optimized formats like ONNX, TensorRT, or CoreML, enabling deployment in production environments. Exporting is essential for integrating your model with various software applications or hardware devices, often resulting in significant performance improvements.

[Track](track/)

Track mode extends YOLO26's object detection capabilities to track objects across video frames or live streams. This mode is particularly valuable for applications requiring persistent object identification, such as [surveillance systems](https://www.ultralytics.com/blog/shattering-the-surveillance-status-quo-with-vision-ai) or [self-driving cars](https://www.ultralytics.com/solutions/ai-in-automotive). Track mode implements sophisticated algorithms like ByteTrack to maintain object identity across frames, even when objects temporarily disappear from view.

[Benchmark](benchmark/)

Benchmark mode profiles the speed and accuracy of various export formats for YOLO26. This mode provides comprehensive metrics on model size, accuracy (mAP50-95 for detection tasks or accuracy_top5 for classification), and inference time across different formats like ONNX, [OpenVINO](https://docs.ultralytics.com/integrations/openvino/), and TensorRT. Benchmarking helps you select the optimal export format based on your specific requirements for speed and accuracy in your deployment environment.

## FAQ

### How do I train a custom [object detection](https://www.ultralytics.com/glossary/object-detection) model with Ultralytics YOLO26?

Training a custom object detection model with Ultralytics YOLO26 involves using the train mode. You need a dataset formatted in [YOLO format](../datasets/detect/#ultralytics-yolo-format), containing images and corresponding annotation files. Use the following command to start the training process:

Example

```
from ultralytics import YOLO
# Load a pretrained YOLO model (you can choose n, s, m, l, or x versions)
model = YOLO("yolo26n.pt")
# Start training on your custom dataset
model.train(data="path/to/dataset.yaml", epochs=100, imgsz=640)
```


```
# Train a YOLO model from the command line
yolo detect train data=path/to/dataset.yaml model=yolo26n.pt epochs=100 imgsz=640
```


For more detailed instructions, you can refer to the [Ultralytics Train Guide](../modes/train/).

### What metrics does Ultralytics YOLO26 use to validate the model's performance?

Ultralytics YOLO26 uses various metrics during the validation process to assess model performance. These include:

**mAP (mean Average Precision)**: This evaluates the accuracy of object detection.**IOU (Intersection over Union)**: Measures the overlap between predicted and ground truth bounding boxes.: Precision measures the ratio of true positive detections to the total detected positives, while recall measures the ratio of true positive detections to the total actual positives.[Precision](https://www.ultralytics.com/glossary/precision)and[Recall](https://www.ultralytics.com/glossary/recall)

You can run the following command to start the validation:

Example

```
from ultralytics import YOLO
# Load a pretrained or custom YOLO model
model = YOLO("yolo26n.pt")
# Run validation on your dataset
model.val(data="path/to/validation.yaml")
```


```
# Validate a YOLO model from the command line
yolo val model=yolo26n.pt data=path/to/validation.yaml
```


Refer to the [Validation Guide](../modes/val/) for further details.

### How can I export my YOLO26 model for deployment?

Ultralytics YOLO26 offers export functionality to convert your trained model into various deployment formats such as ONNX, TensorRT, CoreML, and more. Use the following example to export your model:

Example

```
from ultralytics import YOLO
# Load your trained YOLO model
model = YOLO("yolo26n.pt")
# Export the model to ONNX format (you can specify other formats as needed)
model.export(format="onnx")
```


```
# Export a YOLO model to ONNX format from the command line
yolo export model=yolo26n.pt format=onnx
```


Detailed steps for each export format can be found in the [Export Guide](../modes/export/).

### What is the purpose of the benchmark mode in Ultralytics YOLO26?

Benchmark mode in Ultralytics YOLO26 is used to analyze the speed and [accuracy](https://www.ultralytics.com/glossary/accuracy) of various export formats such as ONNX, TensorRT, and OpenVINO. It provides metrics like model size, `mAP50-95`

for object detection, and inference time across different hardware setups, helping you choose the most suitable format for your deployment needs.

Example

```
from ultralytics.utils.benchmarks import benchmark
# Run benchmark on GPU (device 0)
# You can adjust parameters like model, dataset, image size, and precision as needed
benchmark(model="yolo26n.pt", data="coco8.yaml", imgsz=640, half=False, device=0)
```


```
# Benchmark a YOLO model from the command line
# Adjust parameters as needed for your specific use case
yolo benchmark model=yolo26n.pt data='coco8.yaml' imgsz=640 half=False device=0
```


For more details, refer to the [Benchmark Guide](../modes/benchmark/).

### How can I perform real-time object tracking using Ultralytics YOLO26?

Real-time object tracking can be achieved using the track mode in Ultralytics YOLO26. This mode extends object detection capabilities to track objects across video frames or live feeds. Use the following example to enable tracking:

Example

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Start tracking objects in a video
# You can also use live video streams or webcam input
model.track(source="path/to/video.mp4")
```


```
# Perform object tracking on a video from the command line
# You can specify different sources like webcam (0) or RTSP streams
yolo track model=yolo26n.pt source=path/to/video.mp4
```


For in-depth instructions, visit the [Track Guide](../modes/track/).

---

## Source: https://docs.ultralytics.com/tasks/

# Computer Vision Tasks Supported by Ultralytics YOLO26

Ultralytics YOLO26 is a versatile AI framework that supports multiple [computer vision](https://www.ultralytics.com/blog/everything-you-need-to-know-about-computer-vision-in-2025)**tasks**. The framework can be used to perform [detection](detect/), [segmentation](segment/), [OBB](obb/), [classification](classify/), and [pose](pose/) estimation. Each of these tasks has a different objective and use case, allowing you to address various computer vision challenges with a single framework.

**Watch:** Explore Ultralytics YOLO Tasks: [Object Detection](https://www.ultralytics.com/blog/a-guide-to-deep-dive-into-object-detection-in-2025), Segmentation, OBB, Tracking, and Pose Estimation.

[Detection](detect/)

Detection is the primary task supported by YOLO26. It involves identifying objects in an image or video frame and drawing bounding boxes around them. The detected objects are classified into different categories based on their features. YOLO26 can detect multiple objects in a single image or video frame with high [accuracy](https://www.ultralytics.com/glossary/accuracy) and speed, making it ideal for real-time applications like [surveillance systems](https://www.ultralytics.com/blog/shattering-the-surveillance-status-quo-with-vision-ai) and [autonomous vehicles](https://www.ultralytics.com/solutions/ai-in-automotive).

[Image segmentation](segment/)

Segmentation takes object detection further by producing pixel-level masks for each object. This precision is useful for applications such as [medical imaging](https://www.ultralytics.com/blog/ai-and-radiology-a-new-era-of-precision-and-efficiency), [agricultural analysis](https://www.ultralytics.com/blog/from-farm-to-table-how-ai-drives-innovation-in-agriculture), and [manufacturing quality control](https://www.ultralytics.com/blog/improving-manufacturing-with-computer-vision).

[Classification](classify/)

Classification involves categorizing entire images based on their content. This task is essential for applications like [product categorization](https://www.ultralytics.com/blog/understanding-vision-language-models-and-their-applications) in e-commerce, [content moderation](https://www.ultralytics.com/blog/ai-in-document-authentication-with-image-segmentation), and [wildlife monitoring](https://www.ultralytics.com/blog/monitoring-animal-behavior-using-ultralytics-yolov8).

[Pose estimation](pose/)

Pose estimation detects specific keypoints in images or video frames to track movements or estimate poses. These keypoints can represent human joints, facial features, or other significant points of interest. YOLO26 excels at keypoint detection with high accuracy and speed, making it valuable for [fitness applications](https://www.ultralytics.com/blog/ai-in-our-day-to-day-health-and-fitness), [sports analytics](https://www.ultralytics.com/blog/exploring-the-applications-of-computer-vision-in-sports), and [human-computer interaction](https://www.ultralytics.com/blog/custom-training-ultralytics-yolo11-for-dog-pose-estimation).

[OBB](obb/)

Oriented Bounding Box (OBB) detection enhances traditional object detection by adding an orientation angle to better locate rotated objects. This capability is particularly valuable for [aerial imagery analysis](https://www.ultralytics.com/blog/using-computer-vision-to-analyze-satellite-imagery), [document processing](https://www.ultralytics.com/blog/using-ultralytics-yolo11-for-smart-document-analysis), and [industrial applications](https://www.ultralytics.com/blog/yolo11-enhancing-efficiency-conveyor-automation) where objects appear at various angles. YOLO26 delivers high accuracy and speed for detecting rotated objects in diverse scenarios.

## Conclusion

Ultralytics YOLO26 supports multiple computer vision tasks, including detection, segmentation, classification, oriented object detection, and keypoint detection. Each task addresses specific needs in the computer vision landscape, from basic object identification to detailed pose analysis. By understanding the capabilities and applications of each task, you can select the most appropriate approach for your specific computer vision challenges and leverage YOLO26's powerful features to build effective solutions.

## FAQ

### What computer vision tasks can Ultralytics YOLO26 perform?

Ultralytics YOLO26 is a versatile AI framework capable of performing various computer vision tasks with high accuracy and speed. These tasks include:

Identifying and localizing objects in images or video frames by drawing bounding boxes around them.[Object Detection](detect/):Segmenting images into different regions based on their content, useful for applications like medical imaging.[Image segmentation](segment/):Categorizing entire images based on their content.[Classification](classify/):Detecting specific keypoints in an image or video frame to track movements or poses.[Pose estimation](pose/):Detecting rotated objects with an added orientation angle for enhanced accuracy.[Oriented Object Detection (OBB)](obb/):

### How do I use Ultralytics YOLO26 for object detection?

To use Ultralytics YOLO26 for object detection, follow these steps:

- Prepare your dataset in the appropriate format.
- Train the YOLO26 model using the detection task.
- Use the model to make predictions by feeding in new images or video frames.

Example

```
from ultralytics import YOLO
# Load a pretrained YOLO model (adjust model type as needed)
model = YOLO("yolo26n.pt") # n, s, m, l, x versions available
# Perform object detection on an image
results = model.predict(source="image.jpg") # Can also use video, directory, URL, etc.
# Display the results
results[0].show() # Show the first image results
```


```
# Run YOLO detection from the command line
yolo detect model=yolo26n.pt source="image.jpg" # Adjust model and source as needed
```


For more detailed instructions, check out our [detection examples](detect/).

### What are the benefits of using YOLO26 for segmentation tasks?

Using YOLO26 for segmentation tasks provides several advantages:

**High Accuracy:**The segmentation task provides precise, pixel-level masks.**Speed:**YOLO26 is optimized for real-time applications, offering quick processing even for high-resolution images.**Multiple Applications:**It is ideal for medical imaging, autonomous driving, and other applications requiring detailed image segmentation.

Learn more about the benefits and use cases of YOLO26 for segmentation in the [image segmentation section](segment/).

### Can Ultralytics YOLO26 handle pose estimation and keypoint detection?

Yes, Ultralytics YOLO26 can effectively perform pose estimation and keypoint detection with high accuracy and speed. This feature is particularly useful for tracking movements in sports analytics, healthcare, and human-computer interaction applications. YOLO26 detects keypoints in an image or video frame, allowing for precise pose estimation.

For more details and implementation tips, visit our [pose estimation examples](pose/).

### Why should I choose Ultralytics YOLO26 for oriented object detection (OBB)?

Oriented Object Detection (OBB) with YOLO26 provides enhanced [precision](https://www.ultralytics.com/glossary/precision) by detecting objects with an additional angle parameter. This feature is beneficial for applications requiring accurate localization of rotated objects, such as aerial imagery analysis and warehouse automation.

**Increased Precision:**The angle component reduces false positives for rotated objects.**Versatile Applications:**Useful for tasks in geospatial analysis, robotics, etc.

Check out the [Oriented Object Detection section](obb/) for more details and examples.

---

## Source: https://docs.ultralytics.com/models/

# Models Supported by Ultralytics

Welcome to Ultralytics' model documentation! We offer support for a wide range of models, each tailored to specific tasks like [object detection](../tasks/detect/), [instance segmentation](../tasks/segment/), [image classification](../tasks/classify/), [pose estimation](../tasks/pose/), and [multi-object tracking](../modes/track/). If you're interested in contributing your model architecture to Ultralytics, check out our [Contributing Guide](../help/contributing/).

## Featured Models

Here are some of the key models supported:

: The third iteration of the YOLO model family, originally by Joseph Redmon, known for its efficient real-time object detection capabilities.[YOLOv3](yolov3/): A darknet-native update to YOLOv3, released by Alexey Bochkovskiy in 2020.[YOLOv4](yolov4/): An improved version of the YOLO architecture by Ultralytics, offering better performance and speed trade-offs compared to previous versions.[YOLOv5](yolov5/): Released by[YOLOv6](yolov6/)[Meituan](https://www.meituan.com/)in 2022, and in use in many of the company's autonomous delivery robots.: Updated YOLO models released in 2022 by the authors of YOLOv4. Only inference is supported.[YOLOv7](yolov7/): A versatile model featuring enhanced capabilities such as[YOLOv8](yolov8/)[instance segmentation](https://www.ultralytics.com/glossary/instance-segmentation), pose/keypoints estimation, and classification.: An experimental model trained on the Ultralytics[YOLOv9](yolov9/)[YOLOv5](yolov5/)codebase implementing Programmable Gradient Information (PGI).: By Tsinghua University, featuring NMS-free training and efficiency-accuracy driven architecture, delivering state-of-the-art performance and latency.[YOLOv10](yolov10/): Ultralytics' YOLO models delivering high performance across multiple tasks including detection, segmentation, pose estimation, tracking, and classification.[YOLO11](yolo11/): Ultralytics'[YOLO26](yolo26/)🚀 NEW**latest**next-generation YOLO model optimized for edge deployment with end-to-end NMS-free inference.: Meta's original Segment Anything Model (SAM).[Segment Anything Model (SAM)](sam/): The next generation of Meta's Segment Anything Model for videos and images.[Segment Anything Model 2 (SAM2)](sam-2/): Meta's third generation Segment Anything Model with Promptable Concept Segmentation for text and image exemplar-based segmentation.[Segment Anything Model 3 (SAM3)](sam-3/)🚀 NEW: MobileSAM for mobile applications, by Kyung Hee University.[Mobile Segment Anything Model (MobileSAM)](mobile-sam/): FastSAM by Image & Video Analysis Group, Institute of Automation, Chinese Academy of Sciences.[Fast Segment Anything Model (FastSAM)](fast-sam/): YOLO[YOLO-NAS](yolo-nas/)[Neural Architecture Search](https://www.ultralytics.com/glossary/neural-architecture-search-nas)(NAS) Models.: Baidu's PaddlePaddle real-time Detection[Real-Time Detection Transformers (RT-DETR)](rtdetr/)[Transformer](https://www.ultralytics.com/glossary/transformer)(RT-DETR) models.: Real-time Open Vocabulary Object Detection models from Tencent AI Lab.[YOLO-World](yolo-world/): An improved open-vocabulary object detector that maintains YOLO's real-time performance while detecting arbitrary classes beyond its training data.[YOLOE](yoloe/)

**Watch:** Run Ultralytics YOLO models in just a few lines of code.

## Getting Started: Usage Examples

This example provides simple YOLO training and inference examples. For full documentation on these and other [modes](../modes/) see the [Predict](../modes/predict/), [Train](../modes/train/), [Val](../modes/val/) and [Export](../modes/export/) docs pages.

Note the below example spotlights YOLO11 [Detect](../tasks/detect/) models for [object detection](https://www.ultralytics.com/glossary/object-detection). For additional supported tasks see the [Segment](../tasks/segment/), [Classify](../tasks/classify/) and [Pose](../tasks/pose/) docs.

Example

[PyTorch](https://www.ultralytics.com/glossary/pytorch) pretrained `*.pt`

models as well as configuration `*.yaml`

files can be passed to the `YOLO()`

, `SAM()`

, `NAS()`

and `RTDETR()`

classes to create a model instance in Python:

```
from ultralytics import YOLO
# Load a COCO-pretrained YOLO26n model
model = YOLO("yolo26n.pt")
# Display model information (optional)
model.info()
# Train the model on the COCO8 example dataset for 100 epochs
results = model.train(data="coco8.yaml", epochs=100, imgsz=640)
# Run inference with the YOLO26n model on the 'bus.jpg' image
results = model("path/to/bus.jpg")
```


CLI commands are available to directly run the models:

```
# Load a COCO-pretrained YOLO26n model and train it on the COCO8 example dataset for 100 epochs
yolo train model=yolo26n.pt data=coco8.yaml epochs=100 imgsz=640
# Load a COCO-pretrained YOLO26n model and run inference on the 'bus.jpg' image
yolo predict model=yolo26n.pt source=path/to/bus.jpg
```


## Contributing New Models

Interested in contributing your model to Ultralytics? Great! We're always open to expanding our model portfolio.

**Fork the Repository**: Start by forking the[Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics).**Clone Your Fork**: Clone your fork to your local machine and create a new branch to work on.**Implement Your Model**: Add your model following the coding standards and guidelines provided in our[Contributing Guide](../help/contributing/).**Test Thoroughly**: Make sure to test your model rigorously, both in isolation and as part of the pipeline.**Create a Pull Request**: Once you're satisfied with your model, create a pull request to the main repository for review.**Code Review & Merging**: After review, if your model meets our criteria, it will be merged into the main repository.

For detailed steps, consult our [Contributing Guide](../help/contributing/).

## FAQ

### What is the latest Ultralytics YOLO model?

The latest Ultralytics YOLO model is [YOLO26](yolo26/), released in January 2026. YOLO26 features end-to-end NMS-free inference, optimized edge deployment, and supports all five tasks (detection, segmentation, classification, pose estimation, and OBB) plus open-vocabulary versions. For stable production workloads, both YOLO26 and [YOLO11](yolo11/) are recommended choices.

### How can I train a YOLO model on custom data?

Training a YOLO model on custom data can be easily accomplished using Ultralytics' libraries. Here's a quick example:

Example

```
from ultralytics import YOLO
# Load a YOLO model
model = YOLO("yolo26n.pt") # or any other YOLO model
# Train the model on custom dataset
results = model.train(data="custom_data.yaml", epochs=100, imgsz=640)
```


```
yolo train model=yolo26n.pt data='custom_data.yaml' epochs=100 imgsz=640
```


For more detailed instructions, visit the [Train](../modes/train/) documentation page.

### Which YOLO versions are supported by Ultralytics?

Ultralytics supports a comprehensive range of YOLO (You Only Look Once) versions from YOLOv3 to YOLO11, along with models like YOLO-NAS, SAM, and RT-DETR. Each version is optimized for various tasks such as detection, segmentation, and classification. For detailed information on each model, refer to the [Models Supported by Ultralytics](../models/) documentation.

### Why should I use Ultralytics Platform for [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) projects?

[Ultralytics Platform](../platform/) provides a no-code, end-to-end platform for training, deploying, and managing YOLO models. It simplifies complex workflows, enabling users to focus on model performance and application. The HUB also offers [cloud training capabilities](../platform/train/cloud-training/), comprehensive dataset management, and user-friendly interfaces for both beginners and experienced developers.

### What types of tasks can Ultralytics YOLO models perform?

Ultralytics YOLO models are versatile and can perform tasks including object detection, instance segmentation, classification, pose estimation, and oriented object detection (OBB). The latest model, [YOLO26](yolo26/), supports all five tasks plus open-vocabulary detection. For details on specific tasks, refer to the [Task pages](../tasks/).

---

## Source: https://docs.ultralytics.com/compare/

# Model Comparisons: Choose the Best Object Detection Model for Your Project

Choosing the right neural network architecture is the cornerstone of any successful [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) project. Welcome to the **Ultralytics Model Comparison Hub**! This page centralizes detailed technical analyses and performance benchmarks, dissecting the trade-offs between the latest [Ultralytics YOLO26](https://docs.ultralytics.com/models/yolo26/) and other leading architectures like YOLO11, YOLOv10, RT-DETR, and EfficientDet.

Whether your application demands the millisecond latency of [edge AI](https://www.ultralytics.com/glossary/edge-ai) or the high-fidelity precision required for medical imaging, this guide provides the data-driven insights needed to make an informed choice. We evaluate models based on [mean Average Precision (mAP)](https://www.ultralytics.com/glossary/mean-average-precision-map), [inference speed](https://www.ultralytics.com/glossary/inference-latency), parameter efficiency, and ease of deployment.

## Interactive Performance Benchmarks

Visualizing the relationship between speed and accuracy is essential for identifying the "Pareto frontier" of object detection—models that offer the best accuracy for a given speed constraint. The chart below contrasts key metrics on standard [datasets like COCO](https://docs.ultralytics.com/datasets/detect/coco/).

This chart visualizes key [performance metrics](https://docs.ultralytics.com/guides/yolo-performance-metrics/) enabling you to quickly assess the trade-offs between different models. Understanding these metrics is fundamental to selecting a model that aligns with your specific deployment constraints.

## Quick Decision Guide

Not sure where to start? Use this decision tree to narrow down the architecture that best fits your hardware and performance requirements.

```
graph TD
A[Start: Define Project Needs] --> B{Deployment Hardware?}
B -- "Edge / Mobile (CPU/NPU)" --> C{Latency Priority?}
B -- "Cloud / GPU" --> D{Accuracy vs Speed?}
C -- "Extreme Speed (Real-time)" --> E[YOLO26n / YOLO26s]
C -- "Balanced Legacy" --> F[YOLO11s / YOLOv8s]
D -- "Max Accuracy (SOTA)" --> G[YOLO26x / YOLO26l]
D -- "Balanced Performance" --> H[YOLO26m / YOLO11m]
A --> I{Specialized Features?}
I -- "NMS-Free Inference" --> J[YOLO26 / YOLOv10]
I -- "Multitask (Seg/Pose/OBB)" --> K[YOLO26 / YOLO11]
I -- "Video Analytics" --> L[YOLO26 + Tracking]
```


## The Current Landscape: YOLO26 and Beyond

The field of object detection moves rapidly. While older models remain relevant for legacy support, new architectures push the boundaries of what is possible.

[Ultralytics YOLO26](../models/yolo26/)

Released in January 2026, **YOLO26** is the latest state-of-the-art model and the recommended starting point for all new projects. It introduces groundbreaking architectural innovations including an **End-to-End NMS-Free Design** that eliminates the need for Non-Maximum Suppression post-processing, resulting in faster and more predictable inference times. YOLO26 is up to **43% faster on CPUs** compared to previous generations, making it ideal for edge deployment.

Key innovations include:

**NMS-Free End-to-End:**Simplified deployment with no post-processing required**DFL Removal:**Streamlined exports to ONNX, TensorRT, and CoreML**MuSGD Optimizer:**Hybrid SGD/Muon optimizer inspired by LLM training for stable convergence**ProgLoss + STAL:**Enhanced small object detection performance

Why Choose YOLO26?

YOLO26 represents the pinnacle of Ultralytics engineering, combining the best of CNN efficiency with transformer-like end-to-end capabilities. It supports all tasks—detection, segmentation, pose estimation, classification, and OBB—while being smaller, faster, and easier to deploy than ever before.

[Ultralytics YOLO11](../models/yolo11/)

**YOLO11** remains a highly capable model, offering a 22% reduction in parameters compared to YOLOv8 while improving detection accuracy. It is fully supported and recommended for users who need proven stability or have existing YOLO11 pipelines.

### Community Models: A Note on YOLO12 and YOLO13

You may encounter references to **YOLO12** or **YOLO13** in community discussions or repositories.

Production Caution

We currently **do not recommend** YOLO12 or YOLO13 for production use.

**YOLO12:**Utilizes attention layers that often cause training instability, excessive memory consumption, and significantly slower CPU inference speeds.**YOLO13:**Benchmarks indicate only marginal accuracy gains over YOLO11 while being larger and slower. Reported results have shown issues with reproducibility.

**Watch:** YOLO Models Comparison: Ultralytics YOLO11 vs. YOLOv10 vs. YOLOv9 vs. Ultralytics YOLOv8

## Detailed Model Comparisons

Explore our in-depth technical comparisons to understand specific architectural differences, such as backbone selection, head design, and loss functions. We've organized them by model for easy access:

[YOLO26](../models/yolo26/) vs

YOLO26 is the latest Ultralytics model featuring NMS-free end-to-end detection, the MuSGD optimizer, and up to 43% faster CPU inference. It's optimized for edge deployment while achieving state-of-the-art accuracy.

[YOLO26 vs YOLO11](yolo26-vs-yolo11/)[YOLO26 vs YOLOv10](yolo26-vs-yolov10/)[YOLO26 vs YOLOv9](yolo26-vs-yolov9/)[YOLO26 vs YOLOv8](yolo26-vs-yolov8/)[YOLO26 vs YOLOv7](yolo26-vs-yolov7/)[YOLO26 vs YOLOv6-3.0](yolo26-vs-yolov6/)[YOLO26 vs YOLOv5](yolo26-vs-yolov5/)[YOLO26 vs PP-YOLOE+](yolo26-vs-pp-yoloe/)[YOLO26 vs DAMO-YOLO](yolo26-vs-damo-yolo/)[YOLO26 vs YOLOX](yolo26-vs-yolox/)[YOLO26 vs RT-DETR](yolo26-vs-rtdetr/)[YOLO26 vs EfficientDet](yolo26-vs-efficientdet/)

[YOLO11](../models/yolo11/) vs

YOLO11 builds upon the success of its predecessors with cutting-edge research. It features an improved backbone and neck architecture for better feature extraction and optimized efficiency.

[YOLO11 vs YOLO26](yolo11-vs-yolo26/)[YOLO11 vs YOLOv10](yolo11-vs-yolov10/)[YOLO11 vs YOLOv9](yolo11-vs-yolov9/)[YOLO11 vs YOLOv8](yolo11-vs-yolov8/)[YOLO11 vs YOLOv7](yolo11-vs-yolov7/)[YOLO11 vs YOLOv6-3.0](yolo11-vs-yolov6/)[YOLO11 vs YOLOv5](yolo11-vs-yolov5/)[YOLO11 vs PP-YOLOE+](yolo11-vs-pp-yoloe/)[YOLO11 vs DAMO-YOLO](yolo11-vs-damo-yolo/)[YOLO11 vs YOLOX](yolo11-vs-yolox/)[YOLO11 vs RT-DETR](yolo11-vs-rtdetr/)[YOLO11 vs EfficientDet](yolo11-vs-efficientdet/)

[YOLOv10](../models/yolov10/) vs

Developed by Tsinghua University, YOLOv10 focuses on removing the [Non-Maximum Suppression (NMS)](https://www.ultralytics.com/glossary/non-maximum-suppression-nms) step to reduce latency variance, offering state-of-the-art performance with reduced computational overhead.

[YOLOv10 vs YOLO26](yolov10-vs-yolo26/)[YOLOv10 vs YOLO11](yolov10-vs-yolo11/)[YOLOv10 vs YOLOv9](yolov10-vs-yolov9/)[YOLOv10 vs YOLOv8](yolov10-vs-yolov8/)[YOLOv10 vs YOLOv7](yolov10-vs-yolov7/)[YOLOv10 vs YOLOv6-3.0](yolov10-vs-yolov6/)[YOLOv10 vs YOLOv5](yolov10-vs-yolov5/)[YOLOv10 vs PP-YOLOE+](yolov10-vs-pp-yoloe/)[YOLOv10 vs DAMO-YOLO](yolov10-vs-damo-yolo/)[YOLOv10 vs YOLOX](yolov10-vs-yolox/)[YOLOv10 vs RT-DETR](yolov10-vs-rtdetr/)[YOLOv10 vs EfficientDet](yolov10-vs-efficientdet/)

[YOLOv9](../models/yolov9/) vs

YOLOv9 introduces Programmable Gradient Information (PGI) and the Generalized Efficient Layer Aggregation Network (GELAN) to address information loss in deep neural networks.

[YOLOv9 vs YOLO26](yolov9-vs-yolo26/)[YOLOv9 vs YOLO11](yolov9-vs-yolo11/)[YOLOv9 vs YOLOv10](yolov9-vs-yolov10/)[YOLOv9 vs YOLOv8](yolov9-vs-yolov8/)[YOLOv9 vs YOLOv7](yolov9-vs-yolov7/)[YOLOv9 vs YOLOv6-3.0](yolov9-vs-yolov6/)[YOLOv9 vs YOLOv5](yolov9-vs-yolov5/)[YOLOv9 vs PP-YOLOE+](yolov9-vs-pp-yoloe/)[YOLOv9 vs DAMO-YOLO](yolov9-vs-damo-yolo/)[YOLOv9 vs YOLOX](yolov9-vs-yolox/)[YOLOv9 vs RT-DETR](yolov9-vs-rtdetr/)[YOLOv9 vs EfficientDet](yolov9-vs-efficientdet/)

[YOLOv8](../models/yolov8/) vs

Ultralytics YOLOv8 remains a highly popular choice, featuring advanced backbone and neck architectures and an anchor-free split head for optimal accuracy-speed tradeoffs.

[YOLOv8 vs YOLO26](yolov8-vs-yolo26/)[YOLOv8 vs YOLO11](yolov8-vs-yolo11/)[YOLOv8 vs YOLOv10](yolov8-vs-yolov10/)[YOLOv8 vs YOLOv9](yolov8-vs-yolov9/)[YOLOv8 vs YOLOv7](yolov8-vs-yolov7/)[YOLOv8 vs YOLOv6-3.0](yolov8-vs-yolov6/)[YOLOv8 vs YOLOv5](yolov8-vs-yolov5/)[YOLOv8 vs PP-YOLOE+](yolov8-vs-pp-yoloe/)[YOLOv8 vs DAMO-YOLO](yolov8-vs-damo-yolo/)[YOLOv8 vs YOLOX](yolov8-vs-yolox/)[YOLOv8 vs RT-DETR](yolov8-vs-rtdetr/)[YOLOv8 vs EfficientDet](yolov8-vs-efficientdet/)

[YOLOv7](../models/yolov7/) vs

YOLOv7 introduced "trainable bag-of-freebies" and model re-parameterization, focusing on optimizing the training process without increasing inference costs.

[YOLOv7 vs YOLO26](yolov7-vs-yolo26/)[YOLOv7 vs YOLO11](yolov7-vs-yolo11/)[YOLOv7 vs YOLOv10](yolov7-vs-yolov10/)[YOLOv7 vs YOLOv9](yolov7-vs-yolov9/)[YOLOv7 vs YOLOv8](yolov7-vs-yolov8/)[YOLOv7 vs YOLOv6-3.0](yolov7-vs-yolov6/)[YOLOv7 vs YOLOv5](yolov7-vs-yolov5/)[YOLOv7 vs PP-YOLOE+](yolov7-vs-pp-yoloe/)[YOLOv7 vs DAMO-YOLO](yolov7-vs-damo-yolo/)[YOLOv7 vs YOLOX](yolov7-vs-yolox/)[YOLOv7 vs RT-DETR](yolov7-vs-rtdetr/)[YOLOv7 vs EfficientDet](yolov7-vs-efficientdet/)

[YOLOv6](../models/yolov6/) vs

Meituan's YOLOv6 is designed for industrial applications, featuring Bi-directional Concatenation (BiC) modules and anchor-aided training strategies.

[YOLOv6-3.0 vs YOLO26](yolov6-vs-yolo26/)[YOLOv6-3.0 vs YOLO11](yolov6-vs-yolo11/)[YOLOv6-3.0 vs YOLOv10](yolov6-vs-yolov10/)[YOLOv6-3.0 vs YOLOv9](yolov6-vs-yolov9/)[YOLOv6-3.0 vs YOLOv8](yolov6-vs-yolov8/)[YOLOv6-3.0 vs YOLOv7](yolov6-vs-yolov7/)[YOLOv6-3.0 vs YOLOv5](yolov6-vs-yolov5/)[YOLOv6-3.0 vs PP-YOLOE+](yolov6-vs-pp-yoloe/)[YOLOv6-3.0 vs DAMO-YOLO](yolov6-vs-damo-yolo/)[YOLOv6-3.0 vs YOLOX](yolov6-vs-yolox/)[YOLOv6-3.0 vs RT-DETR](yolov6-vs-rtdetr/)[YOLOv6-3.0 vs EfficientDet](yolov6-vs-efficientdet/)

[YOLOv5](../models/yolov5/) vs

Ultralytics YOLOv5 is celebrated for its ease of use, stability, and speed. It remains a robust choice for projects requiring broad device compatibility.

[YOLOv5 vs YOLO26](yolov5-vs-yolo26/)[YOLOv5 vs YOLO11](yolov5-vs-yolo11/)[YOLOv5 vs YOLOv10](yolov5-vs-yolov10/)[YOLOv5 vs YOLOv9](yolov5-vs-yolov9/)[YOLOv5 vs YOLOv8](yolov5-vs-yolov8/)[YOLOv5 vs YOLOv7](yolov5-vs-yolov7/)[YOLOv5 vs YOLOv6-3.0](yolov5-vs-yolov6/)[YOLOv5 vs PP-YOLOE+](yolov5-vs-pp-yoloe/)[YOLOv5 vs DAMO-YOLO](yolov5-vs-damo-yolo/)[YOLOv5 vs YOLOX](yolov5-vs-yolox/)[YOLOv5 vs RT-DETR](yolov5-vs-rtdetr/)[YOLOv5 vs EfficientDet](yolov5-vs-efficientdet/)

[RT-DETR](../models/rtdetr/) vs

RT-DETR (Real-Time Detection Transformer) leverages vision transformers to achieve high accuracy with real-time performance, excelling in global context understanding.

[RT-DETR vs YOLO26](rtdetr-vs-yolo26/)[RT-DETR vs YOLO11](rtdetr-vs-yolo11/)[RT-DETR vs YOLOv10](rtdetr-vs-yolov10/)[RT-DETR vs YOLOv9](rtdetr-vs-yolov9/)[RT-DETR vs YOLOv8](rtdetr-vs-yolov8/)[RT-DETR vs YOLOv7](rtdetr-vs-yolov7/)[RT-DETR vs YOLOv6-3.0](rtdetr-vs-yolov6/)[RT-DETR vs YOLOv5](rtdetr-vs-yolov5/)[RT-DETR vs PP-YOLOE+](rtdetr-vs-pp-yoloe/)[RT-DETR vs DAMO-YOLO](rtdetr-vs-damo-yolo/)[RT-DETR vs YOLOX](rtdetr-vs-yolox/)[RT-DETR vs EfficientDet](rtdetr-vs-efficientdet/)

[PP-YOLOE+](../models/yoloe/) vs

PP-YOLOE+, developed by Baidu, uses Task Alignment Learning (TAL) and a decoupled head to balance efficiency and accuracy.

[PP-YOLOE+ vs YOLO26](pp-yoloe-vs-yolo26/)[PP-YOLOE+ vs YOLO11](pp-yoloe-vs-yolo11/)[PP-YOLOE+ vs YOLOv10](pp-yoloe-vs-yolov10/)[PP-YOLOE+ vs YOLOv9](pp-yoloe-vs-yolov9/)[PP-YOLOE+ vs YOLOv8](pp-yoloe-vs-yolov8/)[PP-YOLOE+ vs YOLOv7](pp-yoloe-vs-yolov7/)[PP-YOLOE+ vs YOLOv6-3.0](pp-yoloe-vs-yolov6/)[PP-YOLOE+ vs YOLOv5](pp-yoloe-vs-yolov5/)[PP-YOLOE+ vs DAMO-YOLO](pp-yoloe-vs-damo-yolo/)[PP-YOLOE+ vs YOLOX](pp-yoloe-vs-yolox/)[PP-YOLOE+ vs RT-DETR](pp-yoloe-vs-rtdetr/)[PP-YOLOE+ vs EfficientDet](pp-yoloe-vs-efficientdet/)

### DAMO-YOLO vs

From Alibaba Group, DAMO-YOLO employs Neural Architecture Search (NAS) and efficient RepGFPN to maximize accuracy on static benchmarks.

[DAMO-YOLO vs YOLO26](damo-yolo-vs-yolo26/)[DAMO-YOLO vs YOLO11](damo-yolo-vs-yolo11/)[DAMO-YOLO vs YOLOv10](damo-yolo-vs-yolov10/)[DAMO-YOLO vs YOLOv9](damo-yolo-vs-yolov9/)[DAMO-YOLO vs YOLOv8](damo-yolo-vs-yolov8/)[DAMO-YOLO vs YOLOv7](damo-yolo-vs-yolov7/)[DAMO-YOLO vs YOLOv6-3.0](damo-yolo-vs-yolov6/)[DAMO-YOLO vs YOLOv5](damo-yolo-vs-yolov5/)[DAMO-YOLO vs PP-YOLOE+](damo-yolo-vs-pp-yoloe/)[DAMO-YOLO vs YOLOX](damo-yolo-vs-yolox/)[DAMO-YOLO vs RT-DETR](damo-yolo-vs-rtdetr/)[DAMO-YOLO vs EfficientDet](damo-yolo-vs-efficientdet/)

### YOLOX vs

YOLOX, developed by Megvii, is an anchor-free evolution known for its decoupled head and SimOTA label assignment strategy.

[YOLOX vs YOLO26](yolox-vs-yolo26/)[YOLOX vs YOLO11](yolox-vs-yolo11/)[YOLOX vs YOLOv10](yolox-vs-yolov10/)[YOLOX vs YOLOv9](yolox-vs-yolov9/)[YOLOX vs YOLOv8](yolox-vs-yolov8/)[YOLOX vs YOLOv7](yolox-vs-yolov7/)[YOLOX vs YOLOv6-3.0](yolox-vs-yolov6/)[YOLOX vs YOLOv5](yolox-vs-yolov5/)[YOLOX vs RT-DETR](yolox-vs-rtdetr/)[YOLOX vs PP-YOLOE+](yolox-vs-pp-yoloe/)[YOLOX vs DAMO-YOLO](yolox-vs-damo-yolo/)[YOLOX vs EfficientDet](yolox-vs-efficientdet/)

### EfficientDet vs

EfficientDet by Google Brain uses compound scaling and BiFPN to optimize parameter efficiency, offering a spectrum of models (D0-D7) for different constraints.

[EfficientDet vs YOLO26](efficientdet-vs-yolo26/)[EfficientDet vs YOLO11](efficientdet-vs-yolo11/)[EfficientDet vs YOLOv10](efficientdet-vs-yolov10/)[EfficientDet vs YOLOv9](efficientdet-vs-yolov9/)[EfficientDet vs YOLOv8](efficientdet-vs-yolov8/)[EfficientDet vs YOLOv7](efficientdet-vs-yolov7/)[EfficientDet vs YOLOv6-3.0](efficientdet-vs-yolov6/)[EfficientDet vs YOLOv5](efficientdet-vs-yolov5/)[EfficientDet vs PP-YOLOE+](efficientdet-vs-pp-yoloe/)[EfficientDet vs DAMO-YOLO](efficientdet-vs-damo-yolo/)[EfficientDet vs YOLOX](efficientdet-vs-yolox/)[EfficientDet vs RT-DETR](efficientdet-vs-rtdetr/)

This index is continuously updated as new models are released and benchmarks are refined. We encourage you to explore these resources to find the perfect fit for your next computer vision project. If you are looking for enterprise-grade solutions with private licensing, please visit our [Licensing page](https://www.ultralytics.com/license). Happy comparing!

---

## Source: https://docs.ultralytics.com/datasets/

# Datasets Overview

Ultralytics provides support for various datasets to facilitate computer vision tasks such as detection, [instance segmentation](https://www.ultralytics.com/glossary/instance-segmentation), pose estimation, classification, and multi-object tracking. Below is a list of the main Ultralytics datasets, followed by a summary of each computer vision task and the respective datasets.

**Watch:** Ultralytics Datasets Overview

[Object Detection](detect/)

[Bounding box](https://www.ultralytics.com/glossary/bounding-box) object detection is a computer vision technique that involves detecting and localizing objects in an image by drawing a bounding box around each object.

[African-wildlife](detect/african-wildlife/): A dataset featuring images of African wildlife, including buffalo, elephants, rhinos, and zebras.[Argoverse](detect/argoverse/): A dataset containing 3D tracking and motion forecasting data from urban environments with rich annotations.[Brain-tumor](detect/brain-tumor/): A dataset for detecting brain tumors that includes MRI or CT scan images with details on tumor presence, location, and characteristics.[COCO](detect/coco/): Common Objects in Context (COCO) is a large-scale object detection, segmentation, and captioning dataset with 80 object categories.[COCO8](detect/coco8/): A smaller subset of the first 4 images from COCO train and COCO val, suitable for quick tests.[COCO8-Grayscale](detect/coco8-grayscale/): A grayscale version of COCO8 created by converting RGB to grayscale, useful for single-channel model evaluation.[COCO8-Multispectral](detect/coco8-multispectral/): A 10-channel multispectral version of COCO8 created by interpolating RGB wavelengths, useful for spectral-aware model evaluation.[COCO128](detect/coco128/): A smaller subset of the first 128 images from COCO train and COCO val, suitable for tests.[Construction-PPE](detect/construction-ppe/): A dataset of construction site imagery annotated with key safety gear such as helmets, vests, gloves, boots, and goggles, along with labels for missing equipment, supporting the development of AI models for compliance and worker protection.[Global Wheat 2020](detect/globalwheat2020/): A dataset containing images of wheat heads for the Global Wheat Challenge 2020.[HomeObjects-3K](detect/homeobjects-3k/): A dataset of annotated indoor scenes featuring 12 common household items, ideal for developing and testing computer vision models in smart home systems, robotics, and augmented reality.[KITTI](detect/kitti/)New: A well-known autonomous driving dataset featuring stereo, LiDAR, and GPS/IMU inputs, used for 2D object detection in varied road scenes.[LVIS](detect/lvis/): A large-scale object detection, segmentation, and captioning dataset with 1203 object categories.[Medical-pills](detect/medical-pills/): A dataset containing labeled images of medical pills, designed to aid in tasks like pharmaceutical quality control, sorting, and ensuring compliance with industry standards.[Objects365](detect/objects365/): A high-quality, large-scale dataset for object detection with 365 object categories and over 600K annotated images.[OpenImagesV7](detect/open-images-v7/): A comprehensive dataset by Google with 1.7M train images and 42k validation images.[RF100](detect/roboflow-100/): A diverse object detection benchmark with 100 datasets spanning seven imagery domains for comprehensive model evaluation.[Signature](detect/signature/): A dataset featuring images of various documents with annotated signatures, supporting document verification and fraud detection research.[SKU-110K](detect/sku-110k/): A dataset featuring dense object detection in retail environments with over 11K images and 1.7 million bounding boxes.[VisDrone](detect/visdrone/): A dataset containing object detection and multi-object tracking data from drone-captured imagery with over 10K images and video sequences.[VOC](detect/voc/): The Pascal Visual Object Classes (VOC) dataset for object detection and segmentation with 20 object classes and over 11K images.[xView](detect/xview/): A dataset for object detection in overhead imagery with 60 object categories and over 1 million annotated objects.

[Instance Segmentation](segment/)

Instance segmentation is a computer vision technique that involves identifying and localizing objects in an image at the pixel level. Unlike semantic segmentation which only classifies each pixel, [instance segmentation](https://www.ultralytics.com/glossary/instance-segmentation) distinguishes between different instances of the same class.

[Carparts-seg](segment/carparts-seg/): Purpose-built dataset for identifying vehicle parts, catering to design, manufacturing, and research needs. It serves for both object detection and segmentation tasks.[COCO](segment/coco/): A large-scale dataset designed for object detection, segmentation, and captioning tasks with over 200K labeled images.[COCO8-seg](segment/coco8-seg/): A smaller dataset for instance segmentation tasks, containing a subset of 8 COCO images with segmentation annotations.[COCO128-seg](segment/coco128-seg/): A smaller dataset for instance segmentation tasks, containing a subset of 128 COCO images with segmentation annotations.[Crack-seg](segment/crack-seg/): Specifically crafted dataset for detecting cracks on roads and walls, applicable for both object detection and segmentation tasks.[Package-seg](segment/package-seg/): Tailored dataset for identifying packages in warehouses or industrial settings, suitable for both object detection and segmentation applications.

[Pose Estimation](pose/)

Pose estimation is a technique used to determine the pose of the object relative to the camera or the world coordinate system. This involves identifying key points or joints on objects, particularly humans or animals.

[COCO](pose/coco/): A large-scale dataset with human pose annotations designed for pose estimation tasks.[COCO8-pose](pose/coco8-pose/): A smaller dataset for pose estimation tasks, containing a subset of 8 COCO images with human pose annotations.[Dog-pose](pose/dog-pose/): A comprehensive dataset featuring approximately 6,000 images focused on dogs, annotated with 24 keypoints per dog, tailored for pose estimation tasks.[Hand-Keypoints](pose/hand-keypoints/): A concise dataset featuring over 26,000 images centered on human hands, annotated with 21 keypoints per hand, designed for pose estimation tasks.[Tiger-pose](pose/tiger-pose/): A compact dataset consisting of 263 images focused on tigers, annotated with 12 keypoints per tiger for pose estimation tasks.

[Classification](classify/)

[Image classification](https://www.ultralytics.com/glossary/image-classification) is a computer vision task that involves categorizing an image into one or more predefined classes or categories based on its visual content.

[Caltech 101](classify/caltech101/): A dataset containing images of 101 object categories for image classification tasks.[Caltech 256](classify/caltech256/): An extended version of Caltech 101 with 256 object categories and more challenging images.[CIFAR-10](classify/cifar10/): A dataset of 60K 32x32 color images in 10 classes, with 6K images per class.[CIFAR-100](classify/cifar100/): An extended version of CIFAR-10 with 100 object categories and 600 images per class.[Fashion-MNIST](classify/fashion-mnist/): A dataset consisting of 70,000 grayscale images of 10 fashion categories for image classification tasks.[ImageNet](classify/imagenet/): A large-scale dataset for object detection and image classification with over 14 million images and 20,000 categories.[ImageNet-10](classify/imagenet10/): A smaller subset of ImageNet with 10 categories for faster experimentation and testing.[Imagenette](classify/imagenette/): A smaller subset of ImageNet that contains 10 easily distinguishable classes for quicker training and testing.[Imagewoof](classify/imagewoof/): A more challenging subset of ImageNet containing 10 dog breed categories for image classification tasks.[MNIST](classify/mnist/): A dataset of 70,000 grayscale images of handwritten digits for image classification tasks.[MNIST160](classify/mnist/): First 8 images of each MNIST category from the MNIST dataset. Dataset contains 160 images total.

[Oriented Bounding Boxes (OBB)](obb/)

Oriented Bounding Boxes (OBB) is a method in computer vision for detecting angled objects in images using rotated bounding boxes, often applied to aerial and satellite imagery. Unlike traditional bounding boxes, OBB can better fit objects at various orientations.

[DOTA-v2](obb/dota-v2/): A popular OBB aerial imagery dataset with 1.7 million instances and 11,268 images.[DOTA8](obb/dota8/): A smaller subset of the first 8 images from the DOTAv1 split set, 4 for training and 4 for validation, suitable for quick tests.[DOTA128](obb/dota128/): A 128-image subset of the DOTA dataset with 128 images for training and validation, providing a good balance between size and diversity for testing OBB models.

[Multi-Object Tracking](track/)

Multi-object tracking is a computer vision technique that involves detecting and tracking multiple objects over time in a video sequence. This task extends object detection by maintaining consistent identities of objects across frames.

[Argoverse](detect/argoverse/): A dataset containing 3D tracking and motion forecasting data from urban environments with rich annotations for multi-object tracking tasks.[VisDrone](detect/visdrone/): A dataset containing object detection and multi-object tracking data from drone-captured imagery with over 10K images and video sequences.

## Contribute New Datasets

Contributing a new dataset involves several steps to ensure that it aligns well with the existing infrastructure. Below are the necessary steps:

**Watch:** How to Contribute to Ultralytics Datasets

### Steps to Contribute a New Dataset

**Collect Images**: Gather the images that belong to the dataset. These could be collected from various sources, such as public databases or your own collection.**Annotate Images**: Annotate these images with bounding boxes, segments, or keypoints, depending on the task.**Export Annotations**: Convert these annotations into the YOLO`*.txt`

file format which Ultralytics supports.**Organize Dataset**: Arrange your dataset into the correct folder structure. You should have`images/`

and`labels/`

top-level directories, and within each, a`train/`

and`val/`

subdirectory.`dataset/ ├── images/ │ ├── train/ │ └── val/ └── labels/ ├── train/ └── val/`

**Create a**: In your dataset's root directory, create a`data.yaml`

File`data.yaml`

file that describes the dataset, classes, and other necessary information.**Optimize Images (Optional)**: If you want to reduce the size of the dataset for more efficient processing, you can optimize the images using the code below. This is not required, but recommended for smaller dataset sizes and faster download speeds.**Zip Dataset**: Compress the entire dataset folder into a zip file.**Document and PR**: Create a documentation page describing your dataset and how it fits into the existing framework. After that, submit a Pull Request (PR). Refer to[Ultralytics Contribution Guidelines](https://docs.ultralytics.com/help/contributing/)for more details on how to submit a PR.

### Example Code to Optimize and Zip a Dataset

Optimize and Zip a Dataset

```
from pathlib import Path
from ultralytics.data.utils import compress_one_image
from ultralytics.utils.downloads import zip_directory
# Define dataset directory
path = Path("path/to/dataset")
# Optimize images in dataset (optional)
for f in path.rglob("*.jpg"):
compress_one_image(f)
# Zip dataset into 'path/to/dataset.zip'
zip_directory(path)
```


By following these steps, you can contribute a new dataset that integrates well with Ultralytics' existing structure.

## FAQ

### What datasets does Ultralytics support for object detection?

Ultralytics supports a wide variety of datasets for [object detection](https://www.ultralytics.com/glossary/object-detection), including:

[COCO](detect/coco/): A large-scale object detection, segmentation, and captioning dataset with 80 object categories.[LVIS](detect/lvis/): An extensive dataset with 1203 object categories, designed for more fine-grained object detection and segmentation.[Argoverse](detect/argoverse/): A dataset containing 3D tracking and motion forecasting data from urban environments with rich annotations.[VisDrone](detect/visdrone/): A dataset with object detection and multi-object tracking data from drone-captured imagery.[SKU-110K](detect/sku-110k/): Featuring dense object detection in retail environments with over 11K images.

These datasets facilitate training robust [Ultralytics YOLO](https://docs.ultralytics.com/models/) models for various object detection applications.

### How do I contribute a new dataset to Ultralytics?

Contributing a new dataset involves several steps:

**Collect Images**: Gather images from public databases or personal collections.**Annotate Images**: Apply bounding boxes, segments, or keypoints, depending on the task.**Export Annotations**: Convert annotations into the YOLO`*.txt`

format.**Organize Dataset**: Use the folder structure with`train/`

and`val/`

directories, each containing`images/`

and`labels/`

subdirectories.**Create a**: Include dataset descriptions, classes, and other relevant information.`data.yaml`

File**Optimize Images (Optional)**: Reduce dataset size for efficiency.**Zip Dataset**: Compress the dataset into a zip file.**Document and PR**: Describe your dataset and submit a Pull Request following[Ultralytics Contribution Guidelines](https://docs.ultralytics.com/help/contributing/).

Visit [Contribute New Datasets](#contribute-new-datasets) for a comprehensive guide.

### Why should I use Ultralytics Platform for my dataset?

[Ultralytics Platform](https://platform.ultralytics.com/) offers powerful features for dataset management and analysis, including:

**Seamless Dataset Management**: Upload, organize, and manage your datasets in one place.**Immediate Training Integration**: Use uploaded datasets directly for model training without additional setup.**Visualization Tools**: Explore and visualize your dataset images and annotations.**Dataset Analysis**: Get insights into your dataset distribution and characteristics.

The platform streamlines the transition from dataset management to model training, making the entire process more efficient. Learn more about [Ultralytics Platform Datasets](https://docs.ultralytics.com/platform/data/).

### What are the unique features of Ultralytics YOLO models for computer vision?

Ultralytics YOLO models provide several unique features for [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) tasks:

**Real-time Performance**: High-speed inference and training capabilities for time-sensitive applications.**Versatility**: Support for detection, segmentation, classification, and pose estimation tasks in a unified framework.**Pretrained Models**: Access to high-performing, pretrained models for various applications, reducing training time.**Extensive Community Support**: Active community and comprehensive documentation for troubleshooting and development.**Easy Integration**: Simple API for integrating with existing projects and workflows.

Discover more about YOLO models on the [Ultralytics Models](https://docs.ultralytics.com/models/) page.

### How can I optimize and zip a dataset using Ultralytics tools?

To optimize and zip a dataset using Ultralytics tools, follow this example code:

Optimize and Zip a Dataset

```
from pathlib import Path
from ultralytics.data.utils import compress_one_image
from ultralytics.utils.downloads import zip_directory
# Define dataset directory
path = Path("path/to/dataset")
# Optimize images in dataset (optional)
for f in path.rglob("*.jpg"):
compress_one_image(f)
# Zip dataset into 'path/to/dataset.zip'
zip_directory(path)
```


This process helps reduce dataset size for more efficient storage and faster download speeds. Learn more on how to [Optimize and Zip a Dataset](#example-code-to-optimize-and-zip-a-dataset).

---

## Source: https://docs.ultralytics.com/solutions/

# Ultralytics Solutions: Harness YOLO26 to Solve Real-World Problems

Ultralytics Solutions provide cutting-edge applications of YOLO models, offering real-world solutions like object counting, blurring, and security systems, enhancing efficiency and [accuracy](https://www.ultralytics.com/glossary/accuracy) in diverse industries. Discover the power of YOLO26 for practical, impactful implementations.

**Watch:** How to Run Ultralytics Solutions from the Command Line (CLI) | Ultralytics YOLO26 🚀

## Solutions

Here's our curated list of Ultralytics solutions that can be used to create awesome [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) projects.

[Analytics](../guides/analytics/): Conduct comprehensive data analysis to discover patterns and make informed decisions, leveraging YOLO26 for descriptive, predictive, and prescriptive analytics.[Distance Calculation](../guides/distance-calculation/): Calculate distances between objects using[bounding box](https://www.ultralytics.com/glossary/bounding-box)centroids in YOLO26, essential for spatial analysis.[Heatmaps](../guides/heatmaps/): Utilize detection heatmaps to visualize data intensity across a matrix, providing clear insights in computer vision tasks.[Instance Segmentation with Object Tracking](../guides/instance-segmentation-and-tracking/): Implement[instance segmentation](https://www.ultralytics.com/glossary/instance-segmentation)and object tracking with YOLO26 to achieve precise object boundaries and continuous monitoring.[Live Inference with Streamlit](../guides/streamlit-live-inference/): Leverage the power of YOLO26 for real-time[object detection](https://www.ultralytics.com/glossary/object-detection)directly through your web browser with a user-friendly Streamlit interface.[Object Blurring](../guides/object-blurring/): Apply object blurring using YOLO26 to protect privacy in image and video processing.[Object Counting](../guides/object-counting/): Learn to perform real-time object counting with YOLO26. Gain the expertise to accurately count objects in live video streams.[Object Counting in Regions](../guides/region-counting/): Count objects in specific regions using YOLO26 for accurate detection in varied areas.[Object Cropping](../guides/object-cropping/): Master object cropping with YOLO26 for precise extraction of objects from images and videos.[Parking Management](../guides/parking-management/): Organize and direct vehicle flow in parking areas with YOLO26, optimizing space utilization and user experience.[Queue Management](../guides/queue-management/): Implement efficient queue management systems to minimize wait times and improve productivity using YOLO26.[Security Alarm System](../guides/security-alarm-system/): Create a security alarm system with YOLO26 that triggers alerts upon detecting new objects. Customize the system to fit your specific needs.[Similarity Search](../guides/similarity-search/): Enable intelligent image retrieval by combining[OpenAI CLIP](https://cookbook.openai.com/examples/custom_image_embedding_search)embeddings with[Meta FAISS](https://ai.meta.com/tools/faiss/), allowing natural language queries like "person holding a bag" or "vehicles in motion."[Speed Estimation](../guides/speed-estimation/): Estimate object speed using YOLO26 and object tracking techniques, crucial for applications like autonomous vehicles and traffic monitoring.[Track Objects in Zone](../guides/trackzone/): Learn how to track objects within specific zones of video frames using YOLO26 for precise and efficient monitoring.[VisionEye View Objects Mapping](../guides/vision-eye/): Develop systems that mimic human eye focus on specific objects, enhancing the computer's ability to discern and prioritize details.[Workouts Monitoring](../guides/workouts-monitoring/): Discover how to monitor workouts using YOLO26. Learn to track and analyze various fitness routines in real time.

### Solutions Arguments

| Argument | Type | Default | Description |
|---|---|---|---|
`model` | `str` | `None` | Path to an Ultralytics YOLO model file. |
`region` | `list` | `'[(20, 400), (1260, 400)]'` | List of points defining the counting region. |
`show_in` | `bool` | `True` | Flag to control whether to display the in counts on the video stream. |
`show_out` | `bool` | `True` | Flag to control whether to display the out counts on the video stream. |
`analytics_type` | `str` | `'line'` | Type of graph, i.e., `line` , `bar` , `area` , or `pie` . |
`colormap` | `int` | `cv2.COLORMAP_JET` | Colormap to use for the heatmap. |
`json_file` | `str` | `None` | Path to the JSON file that contains all parking coordinates data. |
`up_angle` | `float` | `145.0` | Angle threshold for the 'up' pose. |
`kpts` | `list[int]` | `'[6, 8, 10]'` | List of three keypoint indices used for monitoring workouts. These keypoints correspond to body joints or parts, such as shoulders, elbows, and wrists, for exercises like push-ups, pull-ups, squats, and ab-workouts. |
`down_angle` | `float` | `90.0` | Angle threshold for the 'down' pose. |
`blur_ratio` | `float` | `0.5` | Adjusts percentage of blur intensity, with values in range `0.1 - 1.0` . |
`crop_dir` | `str` | `'cropped-detections'` | Directory name for storing cropped detections. |
`records` | `int` | `5` | Total detections count to trigger an email with security alarm system. |
`vision_point` | `tuple[int, int]` | `(20, 20)` | The point where vision will track objects and draw paths using VisionEye Solution. |
`source` | `str` | `None` | Path to the input source (video, RTSP, etc.). Only usable with Solutions command line interface (CLI). |
`figsize` | `tuple[int, int]` | `(12.8, 7.2)` | Figure size for analytics charts such as heatmaps or graphs. |
`fps` | `float` | `30.0` | Frames per second used for speed calculations. |
`max_hist` | `int` | `5` | Maximum historical points to track per object for speed/direction calculations. |
`meter_per_pixel` | `float` | `0.05` | Scaling factor used for converting pixel distance to real-world units. |
`max_speed` | `int` | `120` | Maximum speed limit in visual overlays (used in alerts). |
`data` | `str` | `'images'` | Path to image directory used for similarity search. |

Track args

Solutions also support some of the arguments from `track`

, including parameters such as `conf`

, `line_width`

, `tracker`

, `model`

, `show`

, `verbose`

and `classes`

.

| Argument | Type | Default | Description |
|---|---|---|---|
`tracker` | `str` | `'botsort.yaml'` | Specifies the tracking algorithm to use, e.g., `bytetrack.yaml` or `botsort.yaml` . |
`conf` | `float` | `0.1` | Sets the confidence threshold for detections; lower values allow more objects to be tracked but may include false positives. |
`iou` | `float` | `0.7` | Sets the
|

`classes`

`list`

`None`

`classes=[0, 2, 3]`

only tracks the specified classes.`verbose`

`bool`

`True`

`device`

`str`

`None`

`cpu`

, `cuda:0`

or `0`

). Allows users to select between CPU, a specific GPU, or other compute devices for model execution.Visualization args

You can use `show_conf`

, `show_labels`

, and other mentioned arguments to customize the visualization.

| Argument | Type | Default | Description |
|---|---|---|---|
`show` | `bool` | `False` | If `True` , displays the annotated images or videos in a window. Useful for immediate visual feedback during development or testing. |
`line_width` | `int or None` | `None` | Specifies the line width of bounding boxes. If `None` , the line width is automatically adjusted based on the image size. Provides visual customization for clarity. |
`show_conf` | `bool` | `True` | Displays the confidence score for each detection alongside the label. Gives insight into the model's certainty for each detection. |
`show_labels` | `bool` | `True` | Displays labels for each detection in the visual output. Provides immediate understanding of detected objects. |

### Usage of SolutionAnnotator

All Ultralytics Solutions use the separate class [ SolutionAnnotator](https://docs.ultralytics.com/reference/solutions/solutions/#ultralytics.solutions.solutions.SolutionAnnotator), that extends the main

[class, and have the following methods:](https://docs.ultralytics.com/reference/utils/plotting/#ultralytics.utils.plotting.Annotator)

`Annotator`

| Method | Return Type | Description |
|---|---|---|
`draw_region()` | `None` | Draws a region using specified points, colors, and thickness. |
`queue_counts_display()` | `None` | Displays queue counts in the specified region. |
`display_analytics()` | `None` | Displays overall statistics for parking lot management. |
`estimate_pose_angle()` | `float` | Calculates the angle between three points in an object pose. |
`draw_specific_points()` | `None` | Draws specific keypoints on the image. |
`plot_workout_information()` | `None` | Draws a labeled text box on the image. |
`plot_angle_and_count_and_stage()` | `None` | Visualizes angle, step count, and stage for workout monitoring. |
`plot_distance_and_line()` | `None` | Displays the distance between centroids and connects them with a line. |
`display_objects_labels()` | `None` | Annotates bounding boxes with object class labels. |
`sweep_annotator()` | `None` | Visualize a vertical sweep line and optional label. |
`visioneye()` | `None` | Maps and connects object centroids to a visual "eye" point. |
`adaptive_label()` | `None` | Draw a circular or rectangle background shape label in center of a bounding box. |

### Working with SolutionResults

Except [ Similarity Search](../guides/similarity-search/), each Solution call returns a list of

`SolutionResults`

objects.- For object counting, the results include
`in_count`

,`out_count`

, and`classwise_count`

.

SolutionResults

```
import cv2
from ultralytics import solutions
im0 = cv2.imread("path/to/img")
region_points = [(20, 400), (1080, 400), (1080, 360), (20, 360)]
counter = solutions.ObjectCounter(
show=True, # display the output
region=region_points, # pass region points
model="yolo26n.pt", # model="yolo26n-obb.pt" for object counting with OBB model.
# classes=[0, 2], # count specific classes i.e. person and car with COCO pretrained model.
# tracker="botsort.yaml" # Choose trackers i.e "bytetrack.yaml"
)
results = counter(im0)
print(results.in_count) # display in_counts
print(results.out_count) # display out_counts
print(results.classwise_count) # display classwise_count
```


`SolutionResults`

object have the following attributes:

| Attribute | Type | Description |
|---|---|---|
`plot_im` | `np.ndarray` | Image with visual overlays such as counts, blur effects, or solution-specific enhancements. |
`in_count` | `int` | Total number of objects detected entering the defined zone in the video stream. |
`out_count` | `int` | Total number of objects detected exiting the defined zone in the video stream. |
`classwise_count` | `Dict[str, int]` | Dictionary recording class-wise in/out object counts for advanced analytics. |
`queue_count` | `int` | Number of objects currently within a predefined queue or waiting area (suitable for queue management). |
`workout_count` | `int` | Total number of workout repetitions completed during exercise tracking. |
`workout_angle` | `float` | Calculated joint or pose angle during workout for form assessment. |
`workout_stage` | `str` | Current workout stage or movement phase (e.g., 'up', 'down'). |
`pixels_distance` | `float` | Pixel-based distance between two objects or points e.g., bounding boxes. (Suitable for distance calculation). |
`available_slots` | `int` | Number of unoccupied slots in a monitored area (suitable for parking management). |
`filled_slots` | `int` | Number of occupied slots in a monitored area. (suitable for parking management) |
`email_sent` | `bool` | Indicates whether a notification or alert email has been successfully sent (suitable for security alarm). |
`total_tracks` | `int` | Total number of unique object tracks observed during video analysis. |
`region_counts` | `Dict[str, int]` | Object counts within user-defined regions or zones. |
`speed_dict` | `Dict[str, float]` | Track-wise dictionary of calculated object speeds, useful for velocity analysis. |
`total_crop_objects` | `int` | Total number of cropped object images generated by the ObjectCropper solution. |
`speed` | `Dict[str, float]` | Dictionary containing performance metrics for tracking and solution processing. |

For more details, refer to the [ SolutionResults class documentation](https://docs.ultralytics.com/reference/solutions/solutions/#ultralytics.solutions.solutions.SolutionAnnotator).

### Solutions Usage via CLI

Command Info

Most of the Solutions can be used directly through the command-line interface, including:

`Count`

, `Crop`

, `Blur`

, `Workout`

, `Heatmap`

, `Isegment`

, `Visioneye`

, `Speed`

, `Queue`

, `Analytics`

, `Inference`


**Syntax**

```
yolo SOLUTIONS SOLUTION_NAME ARGS
```


**SOLUTIONS**is a required keyword.**SOLUTION_NAME**is one of:`['count', 'crop', 'blur', 'workout', 'heatmap', 'isegment', 'queue', 'speed', 'analytics', 'trackzone', 'inference', 'visioneye']`

.**ARGS**(optional) are custom`arg=value`

pairs, such as`show_in=True`

, to override default settings.

```
yolo solutions count show=True # for object counting
yolo solutions count source="path/to/video.mp4" # specify video file path
```


### Contribute to Our Solutions

We welcome contributions from the community! If you've mastered a particular aspect of Ultralytics YOLO that's not yet covered in our solutions, we encourage you to share your expertise. Writing a guide is a great way to give back to the community and help us make our documentation more comprehensive and user-friendly.

To get started, please read our [Contributing Guide](../help/contributing/) for guidelines on how to open up a Pull Request (PR) 🛠️. We look forward to your contributions!

Let's work together to make the Ultralytics YOLO ecosystem more robust and versatile 🙏!

## FAQ

### How can I use Ultralytics YOLO for real-time object counting?

Ultralytics YOLO26 can be used for real-time object counting by leveraging its advanced object detection capabilities. You can follow our detailed guide on [Object Counting](../guides/object-counting/) to set up YOLO26 for live video stream analysis. Simply install YOLO26, load your model, and process video frames to count objects dynamically.

### What are the benefits of using Ultralytics YOLO for security systems?

Ultralytics YOLO26 enhances security systems by offering real-time object detection and alert mechanisms. By employing YOLO26, you can create a security alarm system that triggers alerts when new objects are detected in the surveillance area. Learn how to set up a [Security Alarm System](../guides/security-alarm-system/) with YOLO26 for robust security monitoring.

### How can Ultralytics YOLO improve queue management systems?

Ultralytics YOLO26 can significantly improve queue management systems by accurately counting and tracking people in queues, thus helping to reduce wait times and optimize service efficiency. Follow our detailed guide on [Queue Management](../guides/queue-management/) to learn how to implement YOLO26 for effective queue monitoring and analysis.

### Can Ultralytics YOLO be used for workout monitoring?

Yes, Ultralytics YOLO26 can be effectively used for monitoring workouts by tracking and analyzing fitness routines in real-time. This allows for precise evaluation of exercise form and performance. Explore our guide on [Workouts Monitoring](../guides/workouts-monitoring/) to learn how to set up an AI-powered workout monitoring system using YOLO26.

### How does Ultralytics YOLO help in creating heatmaps for [data visualization](https://www.ultralytics.com/glossary/data-visualization)?

Ultralytics YOLO26 can generate heatmaps to visualize data intensity across a given area, highlighting regions of high activity or interest. This feature is particularly useful in understanding patterns and trends in various computer vision tasks. Learn more about creating and using [Heatmaps](../guides/heatmaps/) with YOLO26 for comprehensive data analysis and visualization.

---

## Source: https://docs.ultralytics.com/guides/

# Comprehensive Tutorials for Ultralytics YOLO

Welcome to Ultralytics' YOLO Guides. Our comprehensive tutorials cover various aspects of the YOLO [object detection](https://www.ultralytics.com/glossary/object-detection) model, ranging from training and prediction to deployment. Built on [PyTorch](https://www.ultralytics.com/glossary/pytorch), YOLO stands out for its exceptional speed and [accuracy](https://www.ultralytics.com/glossary/accuracy) in real-time object detection tasks.

Whether you're a beginner or an expert in [deep learning](https://www.ultralytics.com/glossary/deep-learning-dl), our tutorials offer valuable insights into the implementation and optimization of YOLO for your [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) projects.

**Watch:** Ultralytics YOLO26 Guides Overview

## Guides

Here's a compilation of in-depth guides to help you master different aspects of Ultralytics YOLO.

[A Guide on Model Testing](model-testing/): A thorough guide on testing your computer vision models in realistic settings. Learn how to verify accuracy, reliability, and performance in line with project goals.[AzureML Quickstart](azureml-quickstart/): Get up and running with Ultralytics YOLO models on Microsoft's Azure[Machine Learning](https://www.ultralytics.com/glossary/machine-learning-ml)platform. Learn how to train, deploy, and scale your object detection projects in the cloud.[Best Practices for Model Deployment](model-deployment-practices/): Walk through tips and best practices for efficiently deploying models in computer vision projects, with a focus on optimization, troubleshooting, and security.[COCO to YOLO Conversion](coco-to-yolo/): Complete guide to converting COCO JSON annotations to YOLO format for training. Covers detection, segmentation, and keypoints with tool-specific tips for CVAT, Label Studio, and Roboflow.[COCO JSON Training](coco-json-training/): Train YOLO directly on COCO JSON annotations without converting to YOLO format, using a custom dataset class and trainer.[Conda Quickstart](conda-quickstart/): Step-by-step guide to setting up a[Conda](https://anaconda.org/conda-forge/ultralytics)environment for Ultralytics. Learn how to install and start using the Ultralytics package efficiently with Conda.[Customizing Trainer](custom-trainer/): Learn how to subclass the YOLO trainer to log custom metrics, add class-weighted loss, customize model saving, freeze/unfreeze the backbone, and set per-layer learning rates.[Data Collection and Annotation](data-collection-and-annotation/): Explore the tools, techniques, and best practices for collecting and annotating data to create high-quality inputs for your computer vision models.[DeepStream on NVIDIA Jetson](deepstream-nvidia-jetson/): Quickstart guide for deploying YOLO models on NVIDIA Jetson devices using DeepStream and TensorRT.[Defining A Computer Vision Project's Goals](defining-project-goals/): Walk through how to effectively define clear and measurable goals for your computer vision project. Learn the importance of a well-defined problem statement and how it creates a roadmap for your project.[Docker Quickstart](docker-quickstart/): Complete guide to setting up and using Ultralytics YOLO models with[Docker](https://hub.docker.com/r/ultralytics/ultralytics). Learn how to install Docker, manage GPU support, and run YOLO models in isolated containers for consistent development and deployment.[Edge TPU on Raspberry Pi](coral-edge-tpu-on-raspberry-pi/):[Google Edge TPU](https://developers.google.com/coral)accelerates YOLO inference on[Raspberry Pi](https://www.raspberrypi.com/).[End-to-End Detection](end2end-detection/): Understand YOLO26's NMS-free end-to-end detection, export compatibility, output format changes, and how to migrate from older YOLO models.[Hyperparameter Tuning](hyperparameter-tuning/): Discover how to optimize your YOLO models by fine-tuning hyperparameters using the Tuner class and genetic evolution algorithms.[Insights on Model Evaluation and Fine-Tuning](model-evaluation-insights/): Gain insights into the strategies and best practices for evaluating and fine-tuning your computer vision models. Learn about the iterative process of refining models to achieve optimal results.[Isolating Segmentation Objects](isolating-segmentation-objects/): Step-by-step recipe and explanation on how to extract and/or isolate objects from images using Ultralytics Segmentation.[K-Fold Cross Validation](kfold-cross-validation/): Learn how to improve model generalization using K-Fold cross-validation technique.[Maintaining Your Computer Vision Model](model-monitoring-and-maintenance/): Understand the key practices for monitoring, maintaining, and documenting computer vision models to guarantee accuracy, spot anomalies, and mitigate data drift.[Model Deployment Options](model-deployment-options/): Overview of YOLO[model deployment](https://www.ultralytics.com/glossary/model-deployment)formats like ONNX, OpenVINO, and TensorRT, with pros and cons for each to inform your deployment strategy.[Model YAML Configuration Guide](model-yaml-config/): A comprehensive deep dive into Ultralytics' model architecture definitions. Explore the YAML format, understand the module resolution system, and learn how to integrate custom modules seamlessly.[NVIDIA DGX Spark](nvidia-dgx-spark/): Quickstart guide for deploying YOLO models on NVIDIA DGX Spark devices.[NVIDIA Jetson](nvidia-jetson/): Quickstart guide for deploying YOLO models on NVIDIA Jetson devices.[OpenVINO Latency vs Throughput Modes](optimizing-openvino-latency-vs-throughput-modes/): Learn latency and throughput optimization techniques for peak YOLO inference performance.[Preprocessing Annotated Data](preprocessing_annotated_data/): Learn about preprocessing and augmenting image data in computer vision projects using YOLO26, including normalization, dataset augmentation, splitting, and exploratory data analysis (EDA).[Raspberry Pi](raspberry-pi/): Quickstart tutorial to run YOLO models on the latest Raspberry Pi hardware.[ROS Quickstart](ros-quickstart/): Learn how to integrate YOLO with the Robot Operating System (ROS) for real-time object detection in robotics applications, including Point Cloud and Depth images.[SAHI Tiled Inference](sahi-tiled-inference/): Comprehensive guide on leveraging SAHI's sliced inference capabilities with YOLO26 for object detection in high-resolution images.[Steps of a Computer Vision Project](steps-of-a-cv-project/): Learn about the key steps involved in a computer vision project, including defining goals, selecting models, preparing data, and evaluating results.[Tips for Model Training](model-training-tips/): Explore tips on optimizing[batch sizes](https://www.ultralytics.com/glossary/batch-size), using[mixed precision](https://www.ultralytics.com/glossary/mixed-precision), applying pretrained weights, and more to make training your computer vision model a breeze.[Triton Inference Server Integration](triton-inference-server/): Dive into the integration of Ultralytics YOLO26 with NVIDIA's Triton Inference Server for scalable and efficient deep learning inference deployments.[Vertex AI Deployment with Docker](vertex-ai-deployment-with-docker/): Streamlined guide to containerizing YOLO models with Docker and deploying them on Google Cloud Vertex AI—covering build, push, autoscaling, and monitoring.[View Inference Images in a Terminal](view-results-in-terminal/): Use VSCode's integrated terminal to view inference results when using Remote Tunnel or SSH sessions.[YOLO26 Training Recipe](yolo26-training-recipe/): Full documentation of the hyperparameters, augmentation pipelines, and optimizer settings used to train the official YOLO26 base checkpoints on COCO, with practical fine-tuning guidance.[YOLO Common Issues](yolo-common-issues/)⭐ RECOMMENDED: Practical solutions and troubleshooting tips to the most frequently encountered issues when working with Ultralytics YOLO models.[YOLO Data Augmentation](yolo-data-augmentation/): Master the complete range of data augmentation techniques in YOLO, from basic transformations to advanced strategies for improving model robustness and performance.[YOLO Performance Metrics](yolo-performance-metrics/)⭐ ESSENTIAL: Understand the key metrics like mAP, IoU, and[F1 score](https://www.ultralytics.com/glossary/f1-score)used to evaluate the performance of your YOLO models. Includes practical examples and tips on how to improve detection accuracy and speed.[YOLO Thread-Safe Inference](yolo-thread-safe-inference/): Guidelines for performing inference with YOLO models in a thread-safe manner. Learn the importance of thread safety and best practices to prevent race conditions and ensure consistent predictions.

## Contribute to Our Guides

We welcome contributions from the community! If you've mastered a particular aspect of Ultralytics YOLO that's not yet covered in our guides, we encourage you to share your expertise. Writing a guide is a great way to give back to the community and help us make our documentation more comprehensive and user-friendly.

To get started, please read our [Contributing Guide](../help/contributing/) for guidelines on how to open a Pull Request (PR). We look forward to your contributions.

## FAQ

### How do I train a custom object detection model using Ultralytics YOLO?

Training a custom object detection model with Ultralytics YOLO is straightforward. Start by preparing your dataset in the correct format and installing the Ultralytics package. Use the following code to initiate training:

Example

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt") # Load a pretrained YOLO model
model.train(data="path/to/dataset.yaml", epochs=50) # Train on custom dataset
```


```
yolo task=detect mode=train model=yolo26n.pt data=path/to/dataset.yaml epochs=50
```


For detailed dataset formatting and additional options, refer to our [Tips for Model Training](model-training-tips/) guide.

### What performance metrics should I use to evaluate my YOLO model?

Evaluating your YOLO model performance is crucial to understanding its efficacy. Key metrics include [Mean Average Precision](https://www.ultralytics.com/glossary/mean-average-precision-map) (mAP), [Intersection over Union](https://www.ultralytics.com/glossary/intersection-over-union-iou) (IoU), and F1 score. These metrics help assess the accuracy and [precision](https://www.ultralytics.com/glossary/precision) of object detection tasks. You can learn more about these metrics and how to improve your model in our [YOLO Performance Metrics](yolo-performance-metrics/) guide.

### Why should I use Ultralytics Platform for my computer vision projects?

Ultralytics Platform is a no-code platform that simplifies managing, training, and deploying YOLO models. It supports seamless integration, real-time tracking, and cloud training, making it ideal for both beginners and professionals. Discover more about its features and how it can streamline your workflow with our [Ultralytics Platform](https://docs.ultralytics.com/platform/) quickstart guide.

### What are the common issues faced during YOLO model training, and how can I resolve them?

Common issues during YOLO model training include data formatting errors, model architecture mismatches, and insufficient [training data](https://www.ultralytics.com/glossary/training-data). To address these, ensure your dataset is correctly formatted, check for compatible model versions, and augment your training data. For a comprehensive list of solutions, refer to our [YOLO Common Issues](yolo-common-issues/) guide.

### How can I deploy my YOLO model for real-time object detection on edge devices?

Deploying YOLO models on edge devices like NVIDIA Jetson and Raspberry Pi requires converting the model to a compatible format such as TensorRT or TFLite. Follow our step-by-step guides for [NVIDIA Jetson](nvidia-jetson/) and [Raspberry Pi](raspberry-pi/) deployments to get started with real-time object detection on edge hardware. These guides will walk you through installation, configuration, and performance optimization.

---

## Source: https://docs.ultralytics.com/integrations/

# Ultralytics Integrations

Welcome to the Ultralytics Integrations page! This page provides an overview of our partnerships with various tools and platforms, designed to streamline your [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) workflows, enhance dataset management, simplify model training, and facilitate efficient deployment.

**Watch:** Ultralytics YOLO Deployment and Integrations

## Training Integrations

[Albumentations](albumentations/): Enhance your Ultralytics models with powerful image augmentations to improve model robustness and generalization.[Amazon SageMaker](amazon-sagemaker/): Leverage Amazon SageMaker to efficiently build, train, and deploy Ultralytics models, providing an all-in-one platform for the ML lifecycle.[ClearML](clearml/): Automate your Ultralytics ML workflows, monitor experiments, and foster team collaboration.[Comet ML](comet/): Enhance your model development with Ultralytics by tracking, comparing, and optimizing your machine learning experiments.[DVC](dvc/): Implement version control for your Ultralytics machine learning projects, synchronizing data, code, and models effectively.[Google Colab](google-colab/): Use Google Colab to train and evaluate Ultralytics models in a cloud-based environment that supports collaboration and sharing.[IBM Watsonx](ibm-watsonx/): See how IBM Watsonx simplifies the training and evaluation of Ultralytics models with its cutting-edge AI tools, effortless integration, and advanced model management system.[JupyterLab](jupyterlab/): Find out how to use JupyterLab's interactive and customizable environment to train and evaluate Ultralytics models with ease and efficiency.[Kaggle](kaggle/): Explore how you can use Kaggle to train and evaluate Ultralytics models in a cloud-based environment with pre-installed libraries, GPU support, and a vibrant community for collaboration and sharing.[MLFlow](mlflow/): Streamline the entire ML lifecycle of Ultralytics models, from experimentation and reproducibility to deployment.[Neptune](neptune/): Maintain a comprehensive log of your ML experiments with Ultralytics in this metadata store designed for MLOps.[Paperspace Gradient](paperspace/): Paperspace Gradient simplifies working on YOLO26 projects by providing easy-to-use cloud tools for training, testing, and deploying your models quickly.[Ray Tune](ray-tune/): Optimize the hyperparameters of your Ultralytics models at any scale.[TensorBoard](tensorboard/): Visualize your Ultralytics ML workflows, monitor model metrics, and foster team collaboration.[Ultralytics Platform](https://platform.ultralytics.com/): Access and contribute to a community of pretrained Ultralytics models.[VS Code](vscode/): An extension for VS Code that provides code snippets to accelerate Ultralytics development workflows and offers examples to help anyone learn or get started.[Weights & Biases (W&B)](weights-biases/): Monitor experiments, visualize metrics, and foster reproducibility and collaboration on Ultralytics projects.

## Deployment Integrations

[Axelera](axelera/): Explore Metis accelerators and the Voyager SDK for running Ultralytics models with efficient edge inference.[CoreML](coreml/): CoreML, developed by[Apple](https://www.apple.com/), is a framework designed for efficiently integrating machine learning models into applications across iOS, macOS, watchOS, and tvOS, using Apple's hardware for effective and secure[model deployment](https://www.ultralytics.com/glossary/model-deployment).[ExecuTorch](executorch/): Developed by[Meta](https://about.meta.com/), ExecuTorch is PyTorch's unified solution for deploying Ultralytics YOLO models on edge devices.[Gradio](gradio/): Deploy Ultralytics models with Gradio for real-time, interactive object detection demos.[MNN](mnn/): Developed by[Alibaba](https://www.alibabagroup.com/), MNN is a highly efficient and lightweight deep learning framework. It supports inference and training of deep learning models and has industry-leading performance for inference and training on-device.[NCNN](ncnn/): Developed by[Tencent](http://www.tencent.com/), NCNN is an efficient[neural network](https://www.ultralytics.com/glossary/neural-network-nn)inference framework tailored for mobile devices. It enables direct deployment of AI models into apps, optimizing performance across various mobile platforms.[Neural Magic](neural-magic/): Leverage Quantization Aware Training (QAT) and pruning techniques to optimize Ultralytics models for superior performance and leaner size.[ONNX](onnx/): An open-source format created by[Microsoft](https://www.microsoft.com/)for facilitating the transfer of AI models between various frameworks, enhancing the versatility and deployment flexibility of Ultralytics models.[OpenVINO](openvino/): Intel's toolkit for optimizing and deploying[computer vision](https://www.ultralytics.com/glossary/computer-vision-cv)models efficiently across various Intel CPU and GPU platforms.[PaddlePaddle](paddlepaddle/): An open-source deep learning platform by[Baidu](https://www.baidu.com/), PaddlePaddle enables the efficient deployment of AI models and focuses on the scalability of industrial applications.[Rockchip RKNN](rockchip-rknn/): Developed by[Rockchip](https://www.rock-chips.com/), RKNN is a specialized neural network inference framework optimized for Rockchip's hardware platforms, particularly their NPUs. It facilitates efficient deployment of AI models on edge devices, enabling high-performance inference in real-time applications.[Seeed Studio reCamera](seeedstudio-recamera/): Developed by[Seeed Studio](https://www.seeedstudio.com/), the reCamera is an advanced edge AI device designed for real-time computer vision applications. Powered by the RISC-V-based SG200X processor, it delivers high-performance AI inference with energy efficiency. Its modular design, advanced video processing capabilities, and support for flexible deployment make it an ideal choice for various use cases, including safety monitoring, environmental applications, and manufacturing.[SONY IMX500](sony-imx500/): Optimize and deploy[Ultralytics YOLO26](https://docs.ultralytics.com/models/yolo26/)models on Raspberry Pi AI Cameras with the IMX500 sensor for fast, low-power performance.[TensorRT](tensorrt/): Developed by[NVIDIA](https://www.nvidia.com/), this high-performance[deep learning](https://www.ultralytics.com/glossary/deep-learning-dl)inference framework and model format optimizes AI models for accelerated speed and efficiency on NVIDIA GPUs, ensuring streamlined deployment.[TF GraphDef](tf-graphdef/): Developed by[Google](https://www.google.com/), GraphDef is TensorFlow's format for representing computation graphs, enabling optimized execution of machine learning models across diverse hardware.[TF SavedModel](tf-savedmodel/): Developed by[Google](https://www.google.com/), TF SavedModel is a universal serialization format for[TensorFlow](https://www.ultralytics.com/glossary/tensorflow)models, enabling easy sharing and deployment across a wide range of platforms, from servers to edge devices.[TF.js](tfjs/): Developed by[Google](https://www.google.com/)to facilitate machine learning in browsers and Node.js, TF.js allows JavaScript-based deployment of ML models.[TFLite](tflite/): Developed by[Google](https://www.google.com/), TFLite is a lightweight framework for deploying machine learning models on mobile and edge devices, ensuring fast, efficient inference with minimal memory footprint.[TFLite Edge TPU](edge-tpu/): Developed by[Google](https://www.google.com/)for optimizing TensorFlow Lite models on Edge TPUs, this model format ensures high-speed, efficient[edge computing](https://www.ultralytics.com/glossary/edge-computing).[TorchScript](torchscript/): Developed as part of the[PyTorch](https://pytorch.org/)framework, TorchScript enables efficient execution and deployment of machine learning models in various production environments without the need for Python dependencies.

## Datasets Integrations

[Roboflow](roboflow/): Facilitate dataset labeling and management for Ultralytics models, offering annotation tools to label images.

### Export Formats

We also support a variety of model export formats for deployment in different environments. Here are the available formats:

| Format | `format` Argument | Model | Metadata | Arguments |
|---|---|---|---|---|
|

`yolo26n.pt`

[TorchScript](../integrations/torchscript/)`torchscript`

`yolo26n.torchscript`

`imgsz`

, `half`

, `dynamic`

, `optimize`

, `nms`

, `batch`

, `device`

[ONNX](../integrations/onnx/)`onnx`

`yolo26n.onnx`

`imgsz`

, `half`

, `dynamic`

, `simplify`

, `opset`

, `nms`

, `batch`

, `device`

[OpenVINO](../integrations/openvino/)`openvino`

`yolo26n_openvino_model/`

`imgsz`

, `half`

, `dynamic`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[TensorRT](../integrations/tensorrt/)`engine`

`yolo26n.engine`

`imgsz`

, `half`

, `dynamic`

, `simplify`

, `workspace`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[CoreML](../integrations/coreml/)`coreml`

`yolo26n.mlpackage`

`imgsz`

, `dynamic`

, `half`

, `int8`

, `nms`

, `batch`

, `device`

[TF SavedModel](../integrations/tf-savedmodel/)`saved_model`

`yolo26n_saved_model/`

`imgsz`

, `keras`

, `int8`

, `nms`

, `batch`

, `device`

[TF GraphDef](../integrations/tf-graphdef/)`pb`

`yolo26n.pb`

`imgsz`

, `batch`

, `device`

[TF Lite](../integrations/tflite/)`tflite`

`yolo26n.tflite`

`imgsz`

, `half`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[TF Edge TPU](../integrations/edge-tpu/)`edgetpu`

`yolo26n_edgetpu.tflite`

`imgsz`

, `device`

[TF.js](../integrations/tfjs/)`tfjs`

`yolo26n_web_model/`

`imgsz`

, `half`

, `int8`

, `nms`

, `batch`

, `device`

[PaddlePaddle](../integrations/paddlepaddle/)`paddle`

`yolo26n_paddle_model/`

`imgsz`

, `batch`

, `device`

[MNN](../integrations/mnn/)`mnn`

`yolo26n.mnn`

`imgsz`

, `batch`

, `int8`

, `half`

, `device`

[NCNN](../integrations/ncnn/)`ncnn`

`yolo26n_ncnn_model/`

`imgsz`

, `half`

, `batch`

, `device`

[IMX500](../integrations/sony-imx500/)`imx`

`yolo26n_imx_model/`

`imgsz`

, `int8`

, `data`

, `fraction`

, `device`

[RKNN](../integrations/rockchip-rknn/)`rknn`

`yolo26n_rknn_model/`

`imgsz`

, `batch`

, `name`

, `device`

[ExecuTorch](../integrations/executorch/)`executorch`

`yolo26n_executorch_model/`

`imgsz`

, `device`

[Axelera](../integrations/axelera/)`axelera`

`yolo26n_axelera_model/`

`imgsz`

, `int8`

, `data`

, `fraction`

, `device`

Explore the links to learn more about each integration and how to get the most out of them with Ultralytics. See full `export`

details in the [Export](../modes/export/) page.

## Contribute to Our Integrations

We're always excited to see how the community integrates Ultralytics YOLO with other technologies, tools, and platforms! If you have successfully integrated YOLO with a new system or have valuable insights to share, consider [contributing to our Integrations Docs](../help/contributing/).

By writing a guide or tutorial, you can help expand our documentation and provide real-world examples that benefit the community. It's an excellent way to contribute to the growing ecosystem around Ultralytics YOLO.

To contribute, please check out our [Contributing Guide](../help/contributing/) for instructions on how to submit a Pull Request (PR) 🛠️. We eagerly await your contributions!

Let's collaborate to make the Ultralytics YOLO ecosystem more expansive and feature-rich 🙏!

## FAQ

### What is Ultralytics Platform, and how does it streamline the ML workflow?

[Ultralytics Platform](https://platform.ultralytics.com) is a cloud-based platform designed to make machine learning workflows for Ultralytics models seamless and efficient. By using this tool, you can easily upload datasets, train models, perform real-time tracking, and deploy YOLO models without needing extensive coding skills. The platform serves as a centralized workspace where you can manage your entire ML pipeline from data preparation to deployment. You can explore the key features on the [Ultralytics Platform](https://platform.ultralytics.com/) page and get started quickly with our [Quickstart](https://docs.ultralytics.com/platform/quickstart/) guide.

### Can I track the performance of my Ultralytics models using MLFlow?

Yes, you can. Integrating [MLFlow](https://mlflow.org/) with Ultralytics models allows you to track experiments, improve reproducibility, and streamline the entire ML lifecycle. Detailed instructions for setting up this integration can be found on the [MLFlow](mlflow/) integration page. This integration is particularly useful for monitoring model metrics, comparing different training runs, and managing the ML workflow efficiently. MLFlow provides a centralized platform to log parameters, metrics, and artifacts, making it easier to understand model behavior and make data-driven improvements.

### What are the benefits of using Neural Magic for YOLO26 model optimization?

[Neural Magic](neural-magic/) optimizes YOLO26 models by leveraging techniques like Quantization Aware Training (QAT) and pruning, resulting in highly efficient, smaller models that perform better on resource-limited hardware. Check out the [Neural Magic](neural-magic/) integration page to learn how to implement these optimizations for superior performance and leaner models. This is especially beneficial for deployment on edge devices where computational resources are constrained. Neural Magic's DeepSparse engine can deliver up to 6x faster inference on CPUs, making it possible to run complex models without specialized hardware.

### How do I deploy Ultralytics YOLO models with Gradio for interactive demos?

To deploy Ultralytics YOLO models with [Gradio](https://www.gradio.app/) for interactive [object detection](https://www.ultralytics.com/glossary/object-detection) demos, you can follow the steps outlined on the [Gradio](gradio/) integration page. Gradio allows you to create easy-to-use web interfaces for real-time model inference, making it an excellent tool for showcasing your YOLO model's capabilities in a user-friendly format suitable for both developers and end-users. With just a few lines of code, you can build interactive applications that demonstrate your model's performance on custom inputs, facilitating better understanding and evaluation of your computer vision solutions.

---

## Source: https://docs.ultralytics.com/platform/

# Ultralytics Platform

[Ultralytics Platform](https://platform.ultralytics.com) is a comprehensive end-to-end computer vision platform that streamlines the entire ML workflow from data preparation to model deployment. Built for teams and individuals who need production-ready [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) solutions without the infrastructure complexity.

## What is Ultralytics Platform?

Ultralytics Platform is designed to replace fragmented ML tooling with a unified solution. It combines the capabilities of:

**Roboflow**- Data management and annotation**Weights & Biases**- Experiment tracking**SageMaker**- Cloud training**HuggingFace**- Model deployment**Arize**- Monitoring

All in one platform with native support for [YOLO26](../models/yolo26/) and [YOLO11](../models/yolo11/) models.

## Workflow: Upload → Annotate → Train → Export → Deploy

The Platform provides an end-to-end workflow:

```
graph LR
subgraph Data["📁 Data"]
A[Upload] --> B[Annotate]
B --> C[Analyze]
end
subgraph Train["🚀 Train"]
D[Configure] --> E[Train on GPU]
E --> F[View Metrics]
end
subgraph Deploy["🌐 Deploy"]
G[Export] --> H[Deploy Endpoint]
H --> I[Monitor]
end
Data --> Train --> Deploy
```


| Stage | Features |
|---|---|
Upload | Images (50MB), videos (1GB), and dataset files (ZIP, TAR including `.tar.gz` /`.tgz` , NDJSON) with automatic processing |
Annotate | Manual tools, SAM smart annotation, YOLO auto-labeling for all 5 task types (see
|

**Train****Export**[17 deployment formats](../modes/export/)(ONNX, TensorRT, CoreML, TFLite, etc.; see[supported formats](train/models/#supported-formats))**Deploy****What you can do:**

**Upload**images, videos, and dataset files to create training datasets**Visualize**annotations with interactive overlays for all 5 YOLO task types (see[supported tasks](data/#supported-tasks))**Train**models on cloud GPUs (20 free, 23 with Pro) with real-time metrics**Export**to[17 deployment formats](../modes/export/)(ONNX, TensorRT, CoreML, TFLite, etc.)**Deploy**to 43 global regions with one-click dedicated endpoints**Monitor**training progress, deployment health, and usage metrics**Collaborate**by making projects and datasets public for the community

## Multi-Region Infrastructure

Your data stays in your region. Ultralytics Platform operates infrastructure in three global regions:

| Region | Label | Location | Best For |
|---|---|---|---|
US | Americas | Iowa, USA | Americas users, fastest for Americas |
EU | Europe, Middle East & Africa | Belgium, Europe | European users, GDPR compliance |
AP | Asia Pacific | Hong Kong, Asia-Pacific | Asia-Pacific users, lowest APAC latency |

You select your region during onboarding, and all your data, models, and deployments remain in that region.

Region is Permanent

Your data region cannot be changed after account creation. During onboarding, the platform measures latency to each region and recommends the closest one. Choose carefully.

## Key Features

### Data Preparation

**Dataset Management**: Upload images, videos, or dataset files with automatic processing**Annotation Editor**: Manual annotation for all 5 YOLO task types (detect, segment, pose, OBB, classify; see[supported tasks](data/#supported-tasks))**Skeleton Templates**: Built-in (Person, Hand, Face, Dog, Box) and custom skeleton templates for one-click pose annotation**SAM Smart Annotation**: Click-based intelligent annotation with 5 models —[SAM 2.1](../models/sam-2/)(Tiny, Small, Base, Large) and the new[SAM 3](../models/sam-3/)for highest accuracy. Switch models per-image from the annotation toolbar.**Auto-Annotation**: Use trained models to pre-label new data**Dataset Versioning**: Create numbered NDJSON snapshots with descriptions for reproducible training**Statistics**: Class distribution, location heatmaps, and dimension analysis

```
graph LR
A[Upload Dataset/Images/Video] --> B[Auto-Process]
B --> C[Browse & Filter]
C --> D{Annotate}
D --> E[Manual Tools]
D --> F[SAM Smart]
D --> G[YOLO Auto-Label]
E --> H[Train-Ready Dataset]
F --> H
G --> H
```


Supported Task Types

The annotation editor supports all 5 YOLO task types: ** detect** (bounding boxes),

**(polygons),**

[segment](../datasets/segment/)**(keypoints),**

[pose](../datasets/pose/)**(oriented boxes), and**

[OBB](../datasets/obb/)**(image-level labels). Each task type has dedicated drawing tools and keyboard shortcuts.**

[classify](../datasets/classify/)### Model Training

**Cloud Training**: Train on cloud GPUs (20 free, 23 with[Pro](account/billing/#plans)) with real-time metrics**Remote Training**: Train anywhere and stream metrics to the platform (W&B-style)**Project Organization**: Group related models, compare experiments, track activity**17 Export Formats**: ONNX, TensorRT, CoreML, TFLite, and more (see[supported formats](train/models/#supported-formats))

You can train models either through the web UI (cloud training) or from your own machine (remote training):

- Navigate to your project
- Click
`Train Model`

- Select dataset, model, GPU, and epochs
- Monitor real-time loss curves and metrics

```
# Install ultralytics
pip install "ultralytics>=8.4.14"
# Set your API key
export ULTRALYTICS_API_KEY="YOUR_API_KEY"
# Train and stream metrics to the platform
yolo train model=yolo26n.pt data=coco.yaml epochs=100 project=username/my-project name=exp1
```


```
import os
from ultralytics import YOLO
os.environ["ULTRALYTICS_API_KEY"] = "YOUR_API_KEY"
model = YOLO("yolo26n.pt")
model.train(
data="coco.yaml",
epochs=100,
project="username/my-project",
name="exp1",
)
# Metrics stream to Platform automatically
```


### Deployment

**Inference Testing**: Test models directly in the browser with custom images**Dedicated Endpoints**: Deploy to 43 global regions with auto-scaling**Monitoring**: Real-time metrics, request logs, and performance dashboards

```
graph LR
A[Trained Model] --> B{Action}
B --> C[Browser Predict]
B --> D[Export Format]
B --> E[Deploy Endpoint]
D --> F[ONNX / TensorRT / CoreML / TFLite / ...]
E --> G[43 Global Regions]
G --> H[API Endpoint URL]
H --> I[Monitor & Scale]
```


Once deployed, call your endpoint from any language:

```
import requests
url = "https://your-endpoint-url/predict"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
with open("image.jpg", "rb") as f:
response = requests.post(url, headers=headers, files={"file": f})
print(response.json())
```


```
curl -X POST "https://your-endpoint-url/predict" \
-H "Authorization: Bearer YOUR_API_KEY" \
-F "file=@image.jpg"
```


```
const form = new FormData();
form.append("file", fileInput.files[0]);
const response = await fetch("https://your-endpoint-url/predict", {
method: "POST",
headers: { Authorization: "Bearer YOUR_API_KEY" },
body: form,
});
const results = await response.json();
console.log(results);
```


### Account Management

**Teams & Organizations**: Collaborate with team members, manage roles and invites**API Keys**: Secure key management for remote training and API access**Credits & Billing**: Pay-as-you-go training with transparent pricing**Activity Feed**: Track all account events and actions**Trash & Restore**: 30-day soft delete with item recovery**GDPR Compliance**: Data export and account deletion

Plan Tiers

| Feature | Free | Pro ($29/mo) | Enterprise |
|---|---|---|---|
| Signup Credit | $5 / $25* | - | Custom |
| Monthly Credit | - | $30/seat/month | Custom |
| Models | 100 | 500 | Unlimited |
| Concurrent Trainings | 3 | 10 | Unlimited |
| Deployments | 3 | 10 | Unlimited |
| Storage | 100 GB | 500 GB | Unlimited |
| Cloud GPU Types | 20 | 23 (incl. H200/B200) | 23 |
| Teams | - | Up to 5 members | Up to 50 |
| Support | Community | Priority | Dedicated |

*$5 at signup, or $25 with a verified company/work email.

## Quick Links

Get started with these resources:

: Create your first project and train a model in minutes**Quickstart**: Upload and manage your training data**Datasets**: Label your data with manual and AI-assisted tools**Annotation**: Organize your models and experiments**Projects**: Train on cloud GPUs**Cloud Training**: Test your models**Inference**: Deploy models to production**Endpoints**: Track deployment performance**Monitoring**: Manage API access**API Keys**: Credits and payment**Billing**: Track account events**Activity**: Recover deleted items**Trash**: API reference**REST API**

## FAQ

### How do I get started with Ultralytics Platform?

To get started with [Ultralytics Platform](https://platform.ultralytics.com):

**Sign Up**: Create an account at[platform.ultralytics.com](https://platform.ultralytics.com)**Select Region**: Choose your data region (US, EU, or AP) during onboarding**Upload Dataset**: Navigate to the[Datasets](data/datasets/)section to upload your data**Train Model**: Create a project and start training on cloud GPUs**Deploy**: Test your model and deploy to a dedicated endpoint

For a detailed guide, see the [Quickstart](quickstart/) page.

### What are the benefits of Ultralytics Platform?

[Ultralytics Platform](https://platform.ultralytics.com) offers:

**Unified Workflow**: Data, training, and deployment in one place**Multi-Region**: Data residency in US, EU, or AP regions**No-Code Training**: Train advanced YOLO models without writing code**Real-Time Metrics**: Stream training progress and monitor deployments**43 Deploy Regions**: Deploy models close to your users worldwide**5 Task Types**: Support for detection, segmentation, pose, OBB, and classification (see[task docs](../tasks/))**AI-Assisted Annotation**: SAM and auto-labeling to speed up data preparation

### What GPU options are available for cloud training?

Ultralytics Platform supports multiple GPU types for cloud training:

| GPU | Generation | VRAM | Cost/Hour | Best For |
|---|---|---|---|---|
| RTX 2000 Ada | Ada | 16 GB | $0.24 | Small datasets, testing |
| RTX A4500 | Ampere | 20 GB | $0.25 | Small-medium datasets |
| RTX 4000 Ada | Ada | 20 GB | $0.26 | Medium datasets |
| RTX A5000 | Ampere | 24 GB | $0.27 | Medium datasets |
| L4 | Ada | 24 GB | $0.39 | Inference optimized |
| A40 | Ampere | 48 GB | $0.40 | Larger batch sizes |
| RTX 3090 | Ampere | 24 GB | $0.46 | General training |
| RTX A6000 | Ampere | 48 GB | $0.49 | Large models |
| RTX PRO 4500 | Blackwell | 32 GB | $0.54 | Great price/performance |
| RTX 4090 | Ada | 24 GB | $0.59 | Best price/performance |
| RTX 6000 Ada | Ada | 48 GB | $0.77 | Large batch training |
| L40S | Ada | 48 GB | $0.86 | Large batch training |
| RTX 5090 | Blackwell | 32 GB | $0.89 | Latest consumer generation |
| L40 | Ada | 48 GB | $0.99 | Large models |
| A100 PCIe | Ampere | 80 GB | $1.39 | Production training |
| A100 SXM | Ampere | 80 GB | $1.49 | Production training |
| RTX PRO 6000 | Blackwell | 96 GB | $1.69 | Recommended default |
| H100 PCIe | Hopper | 80 GB | $2.39 | High-performance training |
| H100 SXM | Hopper | 80 GB | $2.69 | Fastest training |
| H100 NVL | Hopper | 94 GB | $3.07 | Maximum performance |
| H200 NVL | Hopper | 143 GB | $3.39 | Maximum memory (Pro+) |
| H200 SXM | Hopper | 141 GB | $3.59 | Maximum performance (Pro+) |
| B200 | Blackwell | 180 GB | $4.99 | Largest models (Pro+) |

See [Cloud Training](train/cloud-training/) for complete pricing and GPU options.

### How does remote training work?

You can train models on your own hardware and stream real-time metrics to the platform, similar to Weights & Biases.

Package Version Requirement

Platform integration requires **ultralytics>=8.4.14**. Lower versions will NOT work with Platform.

```
pip install "ultralytics>=8.4.14"
```


```
# Set your API key
export ULTRALYTICS_API_KEY="YOUR_API_KEY"
# Train with project/name to stream metrics
yolo train model=yolo26n.pt data=coco.yaml epochs=100 project=username/my-project name=exp1
```


```
import os
from ultralytics import YOLO
os.environ["ULTRALYTICS_API_KEY"] = "YOUR_API_KEY"
model = YOLO("yolo26n.pt")
model.train(
data="coco.yaml",
epochs=100,
project="username/my-project",
name="exp1",
)
```


```
# Train using a Platform dataset directly
export ULTRALYTICS_API_KEY="YOUR_API_KEY"
yolo train model=yolo26n.pt data=ul://username/datasets/my-dataset epochs=100 project=username/my-project name=exp1
```


See [Cloud Training](train/cloud-training/#remote-training) for more details on remote training.

### What annotation tools are available?

The Platform includes a full-featured annotation editor supporting:

**Manual Tools**: Bounding boxes, polygons, keypoints with skeleton templates, oriented boxes, classification**Skeleton Templates**: Place all keypoints at once using built-in (Person, Hand, Face, Dog, Box) or custom templates**SAM Smart Annotation**: Click to generate precise masks — choose from[SAM 2.1](../models/sam-2/)Tiny/Small/Base/Large or the new[SAM 3](../models/sam-3/)via the toolbar model picker**Keyboard Shortcuts**: Efficient workflows with hotkeys

| Shortcut | Action |
|---|---|
`V` | Select mode |
`S` | SAM smart annotation mode |
`A` | Auto-annotate mode |
`1` - `9` | Select class by number |
`Delete` | Delete selected annotation |
`Ctrl+Z` | Undo |
`Ctrl+Y` | Redo |
`Escape` | Cancel current action |

See [Annotation](data/annotation/) for the complete guide.

### What export formats are supported?

The Platform supports 17 deployment formats:

| Format | File Extension | Use Case |
|---|---|---|
| ONNX | `.onnx` | Cross-platform deployment |
| TorchScript | `.torchscript` | C++ deployment |
| OpenVINO | `_openvino_model` | Intel hardware |
| TensorRT | `.engine` | NVIDIA GPU inference |
| CoreML | `.mlpackage` | Apple devices |
| TFLite | `.tflite` | Mobile/edge devices |
| TF SavedModel | `_saved_model` | TensorFlow ecosystem |
| TF GraphDef | `.pb` | TensorFlow legacy |
| PaddlePaddle | `_paddle_model` | Baidu ecosystem |
| NCNN | `_ncnn_model` | Mobile (Android/ARM) |
| Edge TPU | `_edgetpu.tflite` | Google Coral devices |
| TF.js | `_web_model` | Browser deployment |
| MNN | `.mnn` | Alibaba mobile |
| RKNN | `_rknn_model` | Rockchip NPU |
| IMX500 | `_imx_model` | Sony IMX500 sensor |
| Axelera | `_axelera_model` | Axelera AI accelerators |
| ExecuTorch | `_executorch_model` | PyTorch mobile |

See [Models Export](train/models/#export-model), the [Export mode guide](../modes/export/), and the [Integrations index](../integrations/) for format-specific options.

## Troubleshooting

### Dataset Issues

| Problem | Solution |
|---|---|
| Dataset won't process | Check file format is supported (JPEG, PNG, WebP, etc.). Max file size: images 50MB, videos 1GB, datasets 10GB on Free / 20GB on Pro / 50GB on Enterprise |
| Missing annotations | Verify labels are in
`.txt` files matching image filenames |

`train/`

folder to your dataset structure, or create splits in [dataset settings](data/datasets/#filter-by-split)`data.yaml`

file with `names:`

list (see [YOLO format](../datasets/detect/#ultralytics-yolo-format)), or define classes in dataset settings### Training Issues

| Problem | Solution |
|---|---|
| Training won't start | Check credit balance in Settings > Billing. Positive balance required |
| Out of memory error | Reduce batch size, use smaller model (n/s), or select GPU with more VRAM |
| Poor metrics | Check dataset quality, increase epochs, try data augmentation, verify class balance |
| Training slow | Select faster GPU, reduce image size, check dataset isn't bottlenecked |

### Deployment Issues

| Problem | Solution |
|---|---|
| Endpoint not responding | Check endpoint status (Ready vs Stopped). Cold start may take 5-15 seconds |
| 401 Unauthorized | Verify API key is correct and has required scopes |
| Slow inference | Check model size, consider
|

[ONNX](train/models/#supported-formats)for broadest compatibility### Common Questions

## Can I change my username after signup?

No, usernames are permanent and cannot be changed. Choose carefully during signup.

## Can I change my data region?

No, data region is selected during signup and cannot be changed. To switch regions, create a new account and re-upload your data.

## How do I get more credits?

Go to Settings > Billing > Add Credits. Purchase credits from $5 to $1000. Purchased credits never expire.

## What happens if training fails?

You're only charged for completed compute time. Checkpoints are saved, and you can resume training.

## Can I download my trained model?

Yes, click the download icon on any model page to download the `.pt`

file or exported formats.

## How do I share my work publicly?

Edit your project or dataset settings and toggle visibility to "Public". Public content appears on the Explore page.

## What are the file size limits?

Images: 50MB, Videos: 1GB, datasets: 10GB on Free, 20GB on Pro, 50GB on Enterprise. For larger files, split into multiple uploads.

## How long are deleted items kept in Trash?

30 days. After that, items are permanently deleted and cannot be recovered.

## Can I use Platform models commercially?

Free and Pro plans use AGPL license. For commercial use without AGPL requirements, contact sales@ultralytics.com for Enterprise licensing.

---

## Source: https://docs.ultralytics.com/reference/__init__/

# Reference for `ultralytics/__init__.py`


Improvements

This page is sourced from [https://github.com/ultralytics/ultralytics/blob/main/ultralytics/__init__.py](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/__init__.py). Have an improvement or example to add? Open a [Pull Request](https://docs.ultralytics.com/help/contributing/) — thank you! 🙏

Summary

## function `ultralytics.__getattr__`


```
def __getattr__(name: str)
```


Lazy-import model classes on first access.

**Args**

| Name | Type | Description | Default |
|---|---|---|---|
`name` | `str` | required |

## Source code in `ultralytics/__init__.py`


[View on GitHub](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/__init__.py#L35-L39)

```
def __getattr__(name: str):
"""Lazy-import model classes on first access."""
if name in MODELS:
return getattr(importlib.import_module("ultralytics.models"), name)
raise AttributeError(f"module {__name__} has no attribute {name}")
```


## function `ultralytics.__dir__`


```
def __dir__()
```


Extend dir() to include lazily available model names for IDE autocompletion.

## Source code in `ultralytics/__init__.py`


[View on GitHub](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/__init__.py#L42-L44)

```
def __dir__():
"""Extend dir() to include lazily available model names for IDE autocompletion."""
return sorted(set(globals()) | set(MODELS))
```


📅 Created 6 months ago ✏️ Updated 4 months ago

---

## Source: https://docs.ultralytics.com/help/

# Help

Welcome to the Ultralytics Help page. This page brings together practical guides, policies, and FAQs to support your work with Ultralytics YOLO models and repositories.

[Frequently Asked Questions (FAQ)](FAQ/): Find answers to common questions and issues encountered by the community of Ultralytics YOLO users and contributors.[Contributing Guide](contributing/): Discover the protocols for making contributions, including how to submit pull requests, report bugs, and more.[Continuous Integration (CI) Guide](CI/): Gain insights into the CI processes we employ, complete with status reports for each Ultralytics repository.[Contributor License Agreement (CLA)](CLA/): Review the CLA to understand the rights and responsibilities associated with contributing to Ultralytics projects.[Minimum Reproducible Example (MRE) Guide](minimum-reproducible-example/): Learn the process for creating an MRE, which is crucial for the timely and effective resolution of bug reports.[Code of Conduct](code-of-conduct/): Our community guidelines support a respectful and open atmosphere for all collaborators.[Environmental, Health, and Safety (EHS) Policy](environmental-health-safety/): Delve into our commitment to sustainability and the well-being of all our stakeholders.[Security Policy](security/): Familiarize yourself with our security protocols and the procedure for reporting vulnerabilities.[Privacy Policy](privacy/): Read our privacy policy to understand how we protect your data and respect your privacy in all our services and operations.

We encourage you to review these resources for a smooth and productive experience. If you need additional support, reach out via [GitHub Issues](https://github.com/ultralytics/ultralytics/issues) or the [Ultralytics Community](https://community.ultralytics.com/).

## FAQ

### What is Ultralytics YOLO and how does it benefit my [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) projects?

Ultralytics YOLO (You Only Look Once) is a state-of-the-art, real-time [object detection](https://www.ultralytics.com/glossary/object-detection) model. Its latest version, YOLO26, delivers faster, lighter, end-to-end NMS-free inference optimized for edge and low-power devices, making it ideal for a wide range of applications, from real-time video analytics to advanced machine learning research. YOLO's efficiency in detecting objects in images and videos has made it the go-to solution for businesses and researchers looking to integrate robust [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) capabilities into their projects.

For more details on YOLO26, visit the [YOLO26 documentation](../models/yolo26/).

### How do I contribute to Ultralytics YOLO repositories?

Contributing to Ultralytics YOLO repositories is straightforward. Start by reviewing the [Contributing Guide](contributing/) to understand the protocols for submitting pull requests, reporting bugs, and more. You'll also need to sign the [Contributor License Agreement (CLA)](CLA/) to ensure your contributions are legally recognized. For effective bug reporting, refer to the [Minimum Reproducible Example (MRE) Guide](minimum-reproducible-example/).

### Why should I use Ultralytics Platform for my machine learning projects?

Ultralytics Platform offers a seamless, no-code solution for managing your machine learning projects. It enables you to generate, train, and deploy AI models like YOLO26 effortlessly. Unique features include cloud training, real-time tracking, and intuitive dataset management. Ultralytics Platform simplifies the entire workflow, from data processing to [model deployment](https://www.ultralytics.com/glossary/model-deployment), making it an indispensable tool for both beginners and advanced users.

To get started, visit [Ultralytics Platform Quickstart](../platform/quickstart/).

### What is Continuous Integration (CI) in Ultralytics, and how does it ensure high-quality code?

Continuous Integration (CI) in Ultralytics involves automated processes that ensure the integrity and quality of the codebase. Our CI setup includes Docker deployment, broken link checks, [CodeQL analysis](https://github.com/github/codeql), and PyPI publishing. These processes help maintain stable and secure repositories by automatically running tests and checks on new code submissions.

Learn more in the [Continuous Integration (CI) Guide](CI/).

### How is [data privacy](https://www.ultralytics.com/glossary/data-privacy) handled by Ultralytics?

Ultralytics takes data privacy seriously. Our [Privacy Policy](privacy/) outlines how we collect and use anonymized data to improve the YOLO package while prioritizing user privacy and control. We adhere to strict data protection regulations to ensure your information is secure at all times.

For more information, review our [Privacy Policy](privacy/).

---

## Source: https://docs.ultralytics.com/quickstart/

# Install Ultralytics

Ultralytics offers a variety of installation methods, including pip, conda, and Docker. You can install YOLO via the `ultralytics`

pip package for the latest stable release, or by cloning the [Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics) for the most current version. Docker is also an option to run the package in an isolated container, which avoids local installation.

**Watch:** Ultralytics YOLO Quick Start Guide

Install

Install or update the `ultralytics`

package using pip by running `pip install -U ultralytics`

. For more details on the `ultralytics`

package, visit the [Python Package Index (PyPI)](https://pypi.org/project/ultralytics/).

```
# Install or upgrade the ultralytics package from PyPI
pip install -U ultralytics
```


You can also install `ultralytics`

directly from the [Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics). This can be useful if you want the latest development version. Ensure you have the Git command-line tool installed, and then run:

```
# Install the ultralytics package from GitHub
pip install git+https://github.com/ultralytics/ultralytics.git@main
```


Conda can be used as an alternative package manager to pip. For more details, visit [Anaconda](https://anaconda.org/conda-forge/ultralytics). The Ultralytics feedstock repository for updating the conda package is available at [GitHub](https://github.com/conda-forge/ultralytics-feedstock/).

```
# Install the ultralytics package using conda
conda install -c conda-forge ultralytics
```


Note

If you are installing in a CUDA environment, it is best practice to install `ultralytics`

, `pytorch`

, and `pytorch-cuda`

in the same command. This allows the conda package manager to resolve any conflicts. Alternatively, install `pytorch-cuda`

last to override the CPU-specific `pytorch`

package if necessary.

```
# Install all packages together using conda
conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision pytorch-cuda=11.8 ultralytics
```


### Conda Docker Image

Ultralytics Conda Docker images are also available on [Docker Hub](https://hub.docker.com/r/ultralytics/ultralytics). These images are based on [Miniconda3](https://www.anaconda.com/docs/main) and provide a straightforward way to start using `ultralytics`

in a Conda environment.

```
# Set image name as a variable
t=ultralytics/ultralytics:latest-conda
# Pull the latest ultralytics image from Docker Hub
sudo docker pull $t
# Run the ultralytics image in a container with GPU support
sudo docker run -it --ipc=host --runtime=nvidia --gpus all $t # all GPUs
sudo docker run -it --ipc=host --runtime=nvidia --gpus '"device=2,3"' $t # specify GPUs
```


Clone the [Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics) if you are interested in contributing to development or wish to experiment with the latest source code. After cloning, navigate into the directory and install the package in editable mode `-e`

using pip.

```
# Clone the ultralytics repository
git clone https://github.com/ultralytics/ultralytics
# Navigate to the cloned directory
cd ultralytics
# Install the package in editable mode for development
pip install -e .
```


Use Docker to execute the `ultralytics`

package in an isolated container, ensuring consistent performance across various environments. By selecting one of the official `ultralytics`

images from [Docker Hub](https://hub.docker.com/r/ultralytics/ultralytics), you avoid the complexity of local installation and gain access to a verified working environment. Ultralytics offers five main supported Docker images, each designed for high compatibility and efficiency:

**Dockerfile:**GPU image recommended for training.**Dockerfile-arm64:**Optimized for ARM64 architecture, suitable for deployment on devices like Raspberry Pi and other ARM64-based platforms.**Dockerfile-cpu:**Ubuntu-based CPU-only version, suitable for inference and environments without GPUs.**Dockerfile-jetson:**Tailored for[NVIDIA Jetson](https://docs.ultralytics.com/guides/nvidia-jetson/)devices, integrating GPU support optimized for these platforms.**Dockerfile-python:**Minimal image with just Python and necessary dependencies, ideal for lightweight applications and development.**Dockerfile-conda:**Based on Miniconda3 with a conda installation of the`ultralytics`

package.

Here are the commands to get the latest image and execute it:

```
# Set image name as a variable
t=ultralytics/ultralytics:latest
# Pull the latest ultralytics image from Docker Hub
sudo docker pull $t
# Run the ultralytics image in a container with GPU support
sudo docker run -it --ipc=host --runtime=nvidia --gpus all $t # all GPUs
sudo docker run -it --ipc=host --runtime=nvidia --gpus '"device=2,3"' $t # specify GPUs
```


The above command initializes a Docker container with the latest `ultralytics`

image. The `-it`

flags assign a pseudo-TTY and keep stdin open, allowing interaction with the container. The `--ipc=host`

flag sets the IPC (Inter-Process Communication) namespace to the host, which is essential for sharing memory between processes. The `--gpus all`

flag enables access to all available GPUs inside the container, crucial for tasks requiring GPU computation.

Note: To work with files on your local machine within the container, use Docker volumes to mount a local directory into the container:

```
# Mount local directory to a directory inside the container
sudo docker run -it --ipc=host --runtime=nvidia --gpus all -v /path/on/host:/path/in/container $t
```


Replace `/path/on/host`

with the directory path on your local machine, and `/path/in/container`

with the desired path inside the Docker container.

For advanced Docker usage, explore the [Ultralytics Docker Guide](../guides/docker-quickstart/).

See the `ultralytics`

[pyproject.toml](https://github.com/ultralytics/ultralytics/blob/main/pyproject.toml) file for a list of dependencies. Note that all examples above install all required dependencies.

Tip

[PyTorch](https://www.ultralytics.com/glossary/pytorch) requirements vary by operating system and CUDA requirements, so install PyTorch first by following the instructions at [PyTorch](https://pytorch.org/get-started/locally/).

## Headless Server Installation

For server environments without a display (e.g., cloud VMs, Docker containers, CI/CD pipelines), use the `ultralytics-opencv-headless`

package. This is identical to the standard `ultralytics`

package but depends on `opencv-python-headless`

instead of `opencv-python`

, avoiding unnecessary GUI dependencies and potential `libGL`

errors.

Headless Install

```
pip install ultralytics-opencv-headless
```


Both packages provide the same functionality and API. The headless variant simply excludes OpenCV's GUI components that require display libraries.

## Advanced Installation

While the standard installation methods cover most use cases, you might need a more tailored setup for development or custom configurations.

Advanced Methods

If you need persistent custom modifications, you can fork the Ultralytics repository, make changes to `pyproject.toml`

or other code, and install from your fork.

**Fork**the[Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics)to your own GitHub account.**Clone**your fork locally:`git clone https://github.com/YOUR_USERNAME/ultralytics.git cd ultralytics`

**Create a new branch**for your changes:`git checkout -b my-custom-branch`

**Make your modifications**to`pyproject.toml`

or other files as needed.**Commit and push**your changes:`git add . git commit -m "My custom changes" git push origin my-custom-branch`

**Install**using pip with the`git+https`

syntax, pointing to your branch:`pip install git+https://github.com/YOUR_USERNAME/ultralytics.git@my-custom-branch`


Clone the repository locally, modify files as needed, and install in editable mode.

**Clone**the Ultralytics repository:`git clone https://github.com/ultralytics/ultralytics cd ultralytics`

**Make your modifications**to`pyproject.toml`

or other files as needed.**Install**the package in editable mode (`-e`

). Pip will use your modified`pyproject.toml`

to resolve dependencies:`pip install -e .`


This approach is useful for development or testing local changes before committing.

Specify a custom Ultralytics fork in your `requirements.txt`

file to ensure consistent installations across your team.

```
# Install ultralytics from a specific git branch
git+https://github.com/YOUR_USERNAME/ultralytics.git@my-custom-branch
# Other project dependencies
flask
```


Install dependencies from the file:

```
pip install -r requirements.txt
```


## Use Ultralytics with CLI

The Ultralytics command-line interface (CLI) allows for simple single-line commands without needing a Python environment. CLI requires no customization or Python code; run all tasks from the terminal with the `yolo`

command. For more on using YOLO from the command line, see the [CLI Guide](../usage/cli/).

Example

Ultralytics `yolo`

commands use the following syntax:

```
yolo TASK MODE ARGS
```


`TASK`

(optional) is one of ([detect](../tasks/detect/),

[segment](../tasks/segment/),

[classify](../tasks/classify/),

[pose](../tasks/pose/),

[obb](../tasks/obb/)) -

`MODE`

(required) is one of ([train](../modes/train/),

[val](../modes/val/),

[predict](../modes/predict/),

[export](../modes/export/),

[track](../modes/track/),

[benchmark](../modes/benchmark/)) -

`ARGS`

(optional) are `arg=value`

pairs like `imgsz=640`

that override defaults.See all `ARGS`

in the full [Configuration Guide](../usage/cfg/) or with the `yolo cfg`

CLI command.

Train a detection model for 10 [epochs](https://www.ultralytics.com/glossary/epoch) with an initial learning rate of 0.01:

```
yolo train data=coco8.yaml model=yolo26n.pt epochs=10 lr0=0.01
```


Predict a YouTube video using a pretrained segmentation model at image size 320:

```
yolo predict model=yolo26n-seg.pt source='https://youtu.be/LNwODJXcvt4' imgsz=320
```


Validate a pretrained detection model with a batch size of 1 and image size of 640:

```
yolo val model=yolo26n.pt data=coco8.yaml batch=1 imgsz=640
```


Export a YOLO26n classification model to ONNX format with an image size of 224x128 (no TASK required):

```
yolo export model=yolo26n-cls.pt format=onnx imgsz=224,128
```


Count objects in a video or live stream using YOLO26:

```
yolo solutions count show=True
yolo solutions count source="path/to/video.mp4" # specify video file path
```


Monitor workout exercises using a YOLO26 pose model:

```
yolo solutions workout show=True
yolo solutions workout source="path/to/video.mp4" # specify video file path
# Use keypoints for ab-workouts
yolo solutions workout kpts="[5, 11, 13]" # left side
yolo solutions workout kpts="[6, 12, 14]" # right side
```


Use YOLO26 to count objects in a designated queue or region:

```
yolo solutions queue show=True
yolo solutions queue source="path/to/video.mp4" # specify video file path
yolo solutions queue region="[(20, 400), (1080, 400), (1080, 360), (20, 360)]" # configure queue coordinates
```


Perform object detection, instance segmentation, or pose estimation in a web browser using [Streamlit](https://docs.ultralytics.com/reference/solutions/streamlit_inference/):

```
yolo solutions inference
yolo solutions inference model="path/to/model.pt" # use model fine-tuned with Ultralytics Python package
```


Run special commands to see the version, view settings, run checks, and more:

```
yolo help
yolo checks
yolo version
yolo settings
yolo copy-cfg
yolo cfg
yolo solutions help
```


Warning

Arguments must be passed as `arg=value`

pairs, split by an equals `=`

sign and delimited by spaces. Do not use `--`

argument prefixes or commas `,`

between arguments.

`yolo predict model=yolo26n.pt imgsz=640 conf=0.25`

✅`yolo predict model yolo26n.pt imgsz 640 conf 0.25`

❌ (missing`=`

)`yolo predict model=yolo26n.pt, imgsz=640, conf=0.25`

❌ (do not use`,`

)`yolo predict --model yolo26n.pt --imgsz 640 --conf 0.25`

❌ (do not use`--`

)`yolo solution model=yolo26n.pt imgsz=640 conf=0.25`

❌ (use`solutions`

, not`solution`

)

## Use Ultralytics with Python

The Ultralytics YOLO Python interface offers seamless integration into Python projects, making it easy to load, run, and process model outputs. Designed for simplicity, the Python interface allows users to quickly implement [object detection](https://www.ultralytics.com/glossary/object-detection), segmentation, and classification. This makes the YOLO Python interface an invaluable tool for incorporating these functionalities into Python projects.

For instance, users can load a model, train it, evaluate its performance, and export it to ONNX format with just a few lines of code. Explore the [Python Guide](../usage/python/) to learn more about using YOLO within your Python projects.

Example

```
from ultralytics import YOLO
# Create a new YOLO model from scratch
model = YOLO("yolo26n.yaml")
# Load a pretrained YOLO model (recommended for training)
model = YOLO("yolo26n.pt")
# Train the model using the 'coco8.yaml' dataset for 3 epochs
results = model.train(data="coco8.yaml", epochs=3)
# Evaluate the model's performance on the validation set
results = model.val()
# Perform object detection on an image using the model
results = model("https://ultralytics.com/images/bus.jpg")
# Export the model to ONNX format
success = model.export(format="onnx")
```


## Ultralytics Settings

The Ultralytics library includes a `SettingsManager`

for fine-grained control over experiments, allowing users to access and modify settings easily. Stored in a JSON file within the environment's user configuration directory, these settings can be viewed or modified in the Python environment or via the Command-Line Interface (CLI).

### Inspecting Settings

To view the current configuration of your settings:

View settings

Use Python to view your settings by importing the `settings`

object from the `ultralytics`

module. Print and return settings with these commands:

```
from ultralytics import settings
# View all settings
print(settings)
# Return a specific setting
value = settings["runs_dir"]
```


The command-line interface allows you to check your settings with:

```
yolo settings
```


### Modifying Settings

Ultralytics makes it easy to modify settings in the following ways:

Update settings

In Python, use the `update`

method on the `settings`

object:

```
from ultralytics import settings
# Update a setting
settings.update({"runs_dir": "/path/to/runs"})
# Update multiple settings
settings.update({"runs_dir": "/path/to/runs", "tensorboard": False})
# Reset settings to default values
settings.reset()
```


To modify settings using the command-line interface:

```
# Update a setting
yolo settings runs_dir='/path/to/runs'
# Update multiple settings
yolo settings runs_dir='/path/to/runs' tensorboard=False
# Reset settings to default values
yolo settings reset
```


### Understanding Settings

The table below overviews the adjustable settings within Ultralytics, including example values, data types, and descriptions.

| Name | Example Value | Data Type | Description |
|---|---|---|---|
`settings_version` | `'0.0.4'` | `str` | Ultralytics settings version (distinct from the Ultralytics
|
`datasets_dir` | `'/path/to/datasets'` | `str` | Directory where datasets are stored |
`weights_dir` | `'/path/to/weights'` | `str` | Directory where model weights are stored |
`runs_dir` | `'/path/to/runs'` | `str` | Directory where experiment runs are stored |
`uuid` | `'a1b2c3d4'` | `str` | Unique identifier for the current settings |
`sync` | `True` | `bool` | Option to sync analytics and crashes to
|

`api_key`

`''`

`str`

[Ultralytics Platform](https://platform.ultralytics.com)API Key`clearml`

`True`

`bool`

[ClearML](.././integrations/clearml/)logging`comet`

`True`

`bool`

[Comet ML](https://bit.ly/yolov8-readme-comet)for experiment tracking and visualization`dvc`

`True`

`bool`

[DVC for experiment tracking](https://dvc.org/doc/dvclive/ml-frameworks/yolo)and version control`hub`

`True`

`bool`

[Ultralytics Platform](https://platform.ultralytics.com)integration`mlflow`

`True`

`bool`

[MLFlow](.././integrations/mlflow/)for experiment tracking`neptune`

`True`

`bool`

[Neptune](https://neptune.ai/)for experiment tracking`raytune`

`True`

`bool`

[Ray Tune](.././integrations/ray-tune/)for[hyperparameter tuning](https://www.ultralytics.com/glossary/hyperparameter-tuning)`tensorboard`

`True`

`bool`

[TensorBoard](.././integrations/tensorboard/)for visualization`wandb`

`True`

`bool`

[Weights & Biases](.././integrations/weights-biases/)logging`vscode_msg`

`True`

`bool`

[Ultralytics-Snippets](.././integrations/vscode/)extension.Revisit these settings as you progress through projects or experiments to ensure optimal configuration.

## FAQ

### How do I install Ultralytics using pip?

Install Ultralytics with pip using:

```
pip install -U ultralytics
```


This installs the latest stable release of the `ultralytics`

package from [PyPI](https://pypi.org/project/ultralytics/). To install the development version directly from GitHub:

```
pip install git+https://github.com/ultralytics/ultralytics.git
```


Ensure the Git command-line tool is installed on your system.

### Can I install Ultralytics YOLO using conda?

Yes, install Ultralytics YOLO using conda with:

```
conda install -c conda-forge ultralytics
```


This method is a great alternative to pip, ensuring compatibility with other packages. For CUDA environments, install `ultralytics`

, `pytorch`

, and `pytorch-cuda`

together to resolve conflicts:

```
conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision pytorch-cuda=11.8 ultralytics
```


For more instructions, see the [Conda quickstart guide](../guides/conda-quickstart/).

### What are the advantages of using Docker to run Ultralytics YOLO?

Docker provides an isolated, consistent environment for Ultralytics YOLO, ensuring smooth performance across systems and avoiding local installation complexities. Official Docker images are available on [Docker Hub](https://hub.docker.com/r/ultralytics/ultralytics), with variants for GPU, CPU, ARM64, [NVIDIA Jetson](https://docs.ultralytics.com/guides/nvidia-jetson/), and Conda. To pull and run the latest image:

```
# Pull the latest ultralytics image from Docker Hub
sudo docker pull ultralytics/ultralytics:latest
# Run the ultralytics image in a container with GPU support
sudo docker run -it --ipc=host --runtime=nvidia --gpus all ultralytics/ultralytics:latest
```


For detailed Docker instructions, see the [Docker quickstart guide](../guides/docker-quickstart/).

### How do I clone the Ultralytics repository for development?

Clone the Ultralytics repository and set up a development environment with:

```
# Clone the ultralytics repository
git clone https://github.com/ultralytics/ultralytics
# Navigate to the cloned directory
cd ultralytics
# Install the package in editable mode for development
pip install -e .
```


This allows contributions to the project or experimentation with the latest source code. For details, visit the [Ultralytics GitHub repository](https://github.com/ultralytics/ultralytics).

### Why should I use Ultralytics YOLO CLI?

The Ultralytics YOLO CLI simplifies running object detection tasks without Python code, enabling single-line commands for training, validation, and prediction directly from your terminal. The basic syntax is:

```
yolo TASK MODE ARGS
```


For example, to train a detection model:

```
yolo train data=coco8.yaml model=yolo26n.pt epochs=10 lr0=0.01
```


Explore more commands and usage examples in the full [CLI Guide](../usage/cli/).

---

## Source: https://docs.ultralytics.com/usage/cli/

# Command Line Interface

The Ultralytics command line interface (CLI) provides a straightforward way to use Ultralytics YOLO models without needing a Python environment. The CLI supports running various tasks directly from the terminal using the `yolo`

command, requiring no customization or Python code.

**Watch:** Mastering Ultralytics YOLO: CLI

Example

Ultralytics `yolo`

commands use the following syntax:

```
yolo TASK MODE ARGS
```


Where:
- `TASK`

(optional) is one of [detect, segment, classify, pose, obb]
- `MODE`

(required) is one of [train, val, predict, export, track, benchmark]
- `ARGS`

(optional) are any number of custom `arg=value`

pairs like `imgsz=320`

that override defaults.

See all ARGS in the full [Configuration Guide](../cfg/) or with `yolo cfg`

.

Train a detection model for 10 [epochs](https://www.ultralytics.com/glossary/epoch) with an initial [learning rate](https://www.ultralytics.com/glossary/learning-rate) of 0.01:

```
yolo train data=coco8.yaml model=yolo26n.pt epochs=10 lr0=0.01
```


Predict using a pretrained segmentation model on a YouTube video at image size 320:

```
yolo predict model=yolo26n-seg.pt source='https://youtu.be/LNwODJXcvt4' imgsz=320
```


Validate a pretrained detection model with a [batch size](https://www.ultralytics.com/glossary/batch-size) of 1 and image size 640:

```
yolo val model=yolo26n.pt data=coco8.yaml batch=1 imgsz=640
```


Export a YOLO classification model to ONNX format with image size 224x128 (no TASK required):

```
yolo export model=yolo26n-cls.pt format=onnx imgsz=224,128
```


Run special commands to view version, settings, run checks, and more:

```
yolo help
yolo checks
yolo version
yolo settings
yolo copy-cfg
yolo cfg
```


Where:

`TASK`

(optional) is one of`[detect, segment, classify, pose, obb]`

. If not explicitly passed, YOLO will attempt to infer the`TASK`

from the model type.`MODE`

(required) is one of`[train, val, predict, export, track, benchmark]`

`ARGS`

(optional) are any number of custom`arg=value`

pairs like`imgsz=320`

that override defaults. For a full list of available`ARGS`

, see the[Configuration](../cfg/)page and`default.yaml`

.

Warning

Arguments must be passed as `arg=val`

pairs, separated by an equals `=`

sign and delimited by spaces between pairs. Do not use `--`

argument prefixes or commas `,`

between arguments.

`yolo predict model=yolo26n.pt imgsz=640 conf=0.25`

✅`yolo predict model yolo26n.pt imgsz 640 conf 0.25`

❌`yolo predict --model yolo26n.pt --imgsz 640 --conf 0.25`

❌

## Train

Train YOLO on the COCO8 dataset for 100 epochs at image size 640. For a full list of available arguments, see the [Configuration](../cfg/) page.

Example

Start training YOLO26n on COCO8 for 100 epochs at image size 640:

```
yolo detect train data=coco8.yaml model=yolo26n.pt epochs=100 imgsz=640
```


Resume an interrupted training session:

```
yolo detect train resume model=last.pt
```


## Val

Validate the [accuracy](https://www.ultralytics.com/glossary/accuracy) of the trained model on the COCO8 dataset. No arguments are needed as the `model`

retains its training `data`

and arguments as model attributes.

Example

Validate an official YOLO26n model:

```
yolo detect val model=yolo26n.pt
```


Validate a custom-trained model:

```
yolo detect val model=path/to/best.pt
```


## Predict

Use a trained model to run predictions on images.

Example

Predict with an official YOLO26n model:

```
yolo detect predict model=yolo26n.pt source='https://ultralytics.com/images/bus.jpg'
```


Predict with a custom model:

```
yolo detect predict model=path/to/best.pt source='https://ultralytics.com/images/bus.jpg'
```


## Export

Export a model to a different format like ONNX or CoreML.

Example

Export an official YOLO26n model to ONNX format:

```
yolo export model=yolo26n.pt format=onnx
```


Export a custom-trained model to ONNX format:

```
yolo export model=path/to/best.pt format=onnx
```


Available Ultralytics export formats are in the table below. You can export to any format using the `format`

argument, i.e., `format='onnx'`

or `format='engine'`

.

| Format | `format` Argument | Model | Metadata | Arguments |
|---|---|---|---|---|
|

`yolo26n.pt`

[TorchScript](../../integrations/torchscript/)`torchscript`

`yolo26n.torchscript`

`imgsz`

, `half`

, `dynamic`

, `optimize`

, `nms`

, `batch`

, `device`

[ONNX](../../integrations/onnx/)`onnx`

`yolo26n.onnx`

`imgsz`

, `half`

, `dynamic`

, `simplify`

, `opset`

, `nms`

, `batch`

, `device`

[OpenVINO](../../integrations/openvino/)`openvino`

`yolo26n_openvino_model/`

`imgsz`

, `half`

, `dynamic`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[TensorRT](../../integrations/tensorrt/)`engine`

`yolo26n.engine`

`imgsz`

, `half`

, `dynamic`

, `simplify`

, `workspace`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[CoreML](../../integrations/coreml/)`coreml`

`yolo26n.mlpackage`

`imgsz`

, `dynamic`

, `half`

, `int8`

, `nms`

, `batch`

, `device`

[TF SavedModel](../../integrations/tf-savedmodel/)`saved_model`

`yolo26n_saved_model/`

`imgsz`

, `keras`

, `int8`

, `nms`

, `batch`

, `device`

[TF GraphDef](../../integrations/tf-graphdef/)`pb`

`yolo26n.pb`

`imgsz`

, `batch`

, `device`

[TF Lite](../../integrations/tflite/)`tflite`

`yolo26n.tflite`

`imgsz`

, `half`

, `int8`

, `nms`

, `batch`

, `data`

, `fraction`

, `device`

[TF Edge TPU](../../integrations/edge-tpu/)`edgetpu`

`yolo26n_edgetpu.tflite`

`imgsz`

, `device`

[TF.js](../../integrations/tfjs/)`tfjs`

`yolo26n_web_model/`

`imgsz`

, `half`

, `int8`

, `nms`

, `batch`

, `device`

[PaddlePaddle](../../integrations/paddlepaddle/)`paddle`

`yolo26n_paddle_model/`

`imgsz`

, `batch`

, `device`

[MNN](../../integrations/mnn/)`mnn`

`yolo26n.mnn`

`imgsz`

, `batch`

, `int8`

, `half`

, `device`

[NCNN](../../integrations/ncnn/)`ncnn`

`yolo26n_ncnn_model/`

`imgsz`

, `half`

, `batch`

, `device`

[IMX500](../../integrations/sony-imx500/)`imx`

`yolo26n_imx_model/`

`imgsz`

, `int8`

, `data`

, `fraction`

, `device`

[RKNN](../../integrations/rockchip-rknn/)`rknn`

`yolo26n_rknn_model/`

`imgsz`

, `batch`

, `name`

, `device`

[ExecuTorch](../../integrations/executorch/)`executorch`

`yolo26n_executorch_model/`

`imgsz`

, `device`

[Axelera](../../integrations/axelera/)`axelera`

`yolo26n_axelera_model/`

`imgsz`

, `int8`

, `data`

, `fraction`

, `device`

See full `export`

details on the [Export](../../modes/export/) page.

## Overriding Default Arguments

Override default arguments by passing them in the CLI as `arg=value`

pairs.

Tip

Train a detection model for 10 epochs with a learning rate of 0.01:

```
yolo detect train data=coco8.yaml model=yolo26n.pt epochs=10 lr0=0.01
```


Predict using a pretrained segmentation model on a YouTube video at image size 320:

```
yolo segment predict model=yolo26n-seg.pt source='https://youtu.be/LNwODJXcvt4' imgsz=320
```


Validate a pretrained detection model with a batch size of 1 and image size 640:

```
yolo detect val model=yolo26n.pt data=coco8.yaml batch=1 imgsz=640
```


## Overriding Default Config File

Override the `default.yaml`

configuration file entirely by passing a new file with the `cfg`

argument, such as `cfg=custom.yaml`

.

To do this, first create a copy of `default.yaml`

in your current working directory with the `yolo copy-cfg`

command, which creates a `default_copy.yaml`

file.

You can then pass this file as `cfg=default_copy.yaml`

along with any additional arguments, like `imgsz=320`

in this example:

Example

```
yolo copy-cfg
yolo cfg=default_copy.yaml imgsz=320
```


## Solutions Commands

Ultralytics provides ready-to-use solutions for common computer vision applications through the CLI. These solutions simplify the implementation of complex tasks like object counting, workout monitoring, and queue management.

Example

Count objects in a video or live stream:

```
yolo solutions count show=True
yolo solutions count source="path/to/video.mp4" # specify video file path
```


Monitor workout exercises using a pose model:

```
yolo solutions workout show=True
yolo solutions workout source="path/to/video.mp4" # specify video file path
# Use keypoints for ab-workouts
yolo solutions workout kpts=[5, 11, 13] # left side
yolo solutions workout kpts=[6, 12, 14] # right side
```


Count objects in a designated queue or region:

```
yolo solutions queue show=True
yolo solutions queue source="path/to/video.mp4" # specify video file path
yolo solutions queue region="[(20, 400), (1080, 400), (1080, 360), (20, 360)]" # configure queue coordinates
```


Perform object detection, instance segmentation, or pose estimation in a web browser using Streamlit:

```
yolo solutions inference
yolo solutions inference model="path/to/model.pt" # use custom model
```


View available solutions and their options:

```
yolo solutions help
```


For more information on Ultralytics solutions, visit the [Solutions](../../solutions/) page.

## FAQ

### How do I use the Ultralytics YOLO command line interface (CLI) for model training?

To train a model using the CLI, execute a single-line command in the terminal. For example, to train a detection model for 10 epochs with a [learning rate](https://www.ultralytics.com/glossary/learning-rate) of 0.01, run:

```
yolo train data=coco8.yaml model=yolo26n.pt epochs=10 lr0=0.01
```


This command uses the `train`

mode with specific arguments. For a full list of available arguments, refer to the [Configuration Guide](../cfg/).

### What tasks can I perform with the Ultralytics YOLO CLI?

The Ultralytics YOLO CLI supports various tasks, including [detection](../../tasks/detect/), [segmentation](../../tasks/segment/), [classification](../../tasks/classify/), [pose estimation](../../tasks/pose/), and [oriented bounding box detection](../../tasks/obb/). You can also perform operations like:

**Train a Model**: Run`yolo train data=<data.yaml> model=<model.pt> epochs=<num>`

.**Run Predictions**: Use`yolo predict model=<model.pt> source=<data_source> imgsz=<image_size>`

.**Export a Model**: Execute`yolo export model=<model.pt> format=<export_format>`

.**Use Solutions**: Run`yolo solutions <solution_name>`

for ready-made applications.

Customize each task with various arguments. For detailed syntax and examples, see the respective sections like [Train](#train), [Predict](#predict), and [Export](#export).

### How can I validate the accuracy of a trained YOLO model using the CLI?

To validate a model's [accuracy](https://www.ultralytics.com/glossary/accuracy), use the `val`

mode. For example, to validate a pretrained detection model with a [batch size](https://www.ultralytics.com/glossary/batch-size) of 1 and an image size of 640, run:

```
yolo val model=yolo26n.pt data=coco8.yaml batch=1 imgsz=640
```


This command evaluates the model on the specified dataset and provides performance metrics like [mAP](https://www.ultralytics.com/glossary/mean-average-precision-map), [precision](https://www.ultralytics.com/glossary/precision), and [recall](https://www.ultralytics.com/glossary/recall). For more details, refer to the [Val](#val) section.

### What formats can I export my YOLO models to using the CLI?

You can export YOLO models to various formats including ONNX, TensorRT, CoreML, TensorFlow, and more. For instance, to export a model to ONNX format, run:

```
yolo export model=yolo26n.pt format=onnx
```


The export command supports numerous options to optimize your model for specific deployment environments. For complete details on all available export formats and their specific parameters, visit the [Export](../../modes/export/) page.

### How do I use the pre-built solutions in the Ultralytics CLI?

Ultralytics provides ready-to-use solutions through the `solutions`

command. For example, to count objects in a video:

```
yolo solutions count source="path/to/video.mp4"
```


These solutions require minimal configuration and provide immediate functionality for common computer vision tasks. To see all available solutions, run `yolo solutions help`

. Each solution has specific parameters that can be customized to fit your needs.

---

## Source: https://docs.ultralytics.com/usage/python/

# Python Usage

Welcome to the Ultralytics YOLO Python Usage documentation! This guide is designed to help you seamlessly integrate Ultralytics YOLO into your Python projects for [object detection](https://www.ultralytics.com/glossary/object-detection), [segmentation](https://docs.ultralytics.com/tasks/segment/), and [classification](https://docs.ultralytics.com/tasks/classify/). Here, you'll learn how to load and use pretrained models, train new models, and perform predictions on images. The easy-to-use Python interface is a valuable resource for anyone looking to incorporate YOLO into their Python projects, allowing you to quickly implement advanced object detection capabilities. Let's get started!

**Watch:** Mastering Ultralytics YOLO: Python

For example, users can load a model, train it, evaluate its performance on a validation set, and even [export it to ONNX format](../../modes/export/) with just a few lines of code.

Python

```
from ultralytics import YOLO
# Create a new YOLO model from scratch
model = YOLO("yolo26n.yaml")
# Load a pretrained YOLO model (recommended for training)
model = YOLO("yolo26n.pt")
# Train the model using the 'coco8.yaml' dataset for 3 epochs
results = model.train(data="coco8.yaml", epochs=3)
# Evaluate the model's performance on the validation set
results = model.val()
# Perform object detection on an image using the model
results = model("https://ultralytics.com/images/bus.jpg")
# Export the model to ONNX format
success = model.export(format="onnx")
```


## Train

[Train mode](../../modes/train/) is used for training a YOLO model on a custom dataset. In this mode, the model is trained using the specified dataset and hyperparameters. The training process involves optimizing the model's parameters so that it can accurately predict the classes and locations of objects in an image.

Train

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt") # pass any model type
results = model.train(epochs=5)
```


```
from ultralytics import YOLO
model = YOLO("yolo26n.yaml")
results = model.train(data="coco8.yaml", epochs=5)
```


```
model = YOLO("last.pt")
results = model.train(resume=True)
```


## Val

[Val mode](../../modes/val/) is used for validating a YOLO model after it has been trained. In this mode, the model is evaluated on a validation set to measure its [accuracy](https://www.ultralytics.com/glossary/accuracy) and generalization performance. This mode can be used to tune the hyperparameters of the model to improve its performance.

Val

```
from ultralytics import YOLO
# Load a YOLO model
model = YOLO("yolo26n.yaml")
# Train the model
model.train(data="coco8.yaml", epochs=5)
# Validate on training data
model.val()
```


```
from ultralytics import YOLO
# Load a YOLO model
model = YOLO("yolo26n.yaml")
# Train the model
model.train(data="coco8.yaml", epochs=5)
# Validate on separate data
model.val(data="path/to/separate/data.yaml")
```


## Predict

[Predict mode](../../modes/predict/) is used for making predictions using a trained YOLO model on new images or videos. In this mode, the model is loaded from a checkpoint file, and the user can provide images or videos to perform inference. The model predicts the classes and locations of objects in the input images or videos.

Predict

```
import cv2
from PIL import Image
from ultralytics import YOLO
model = YOLO("model.pt")
# accepts all formats - image/dir/Path/URL/video/PIL/ndarray. 0 for webcam
results = model.predict(source="0")
results = model.predict(source="folder", show=True) # Display preds. Accepts all YOLO predict arguments
# from PIL
im1 = Image.open("bus.jpg")
results = model.predict(source=im1, save=True) # save plotted images
# from ndarray
im2 = cv2.imread("bus.jpg")
results = model.predict(source=im2, save=True, save_txt=True) # save predictions as labels
# from list of PIL/ndarray
results = model.predict(source=[im1, im2])
```


```
# results would be a list of Results object including all the predictions by default
# but be careful as it could occupy a lot memory when there're many images,
# especially the task is segmentation.
# 1. return as a list
results = model.predict(source="folder")
# results would be a generator which is more friendly to memory by setting stream=True
# 2. return as a generator
results = model.predict(source=0, stream=True)
for result in results:
# Detection
result.boxes.xyxy # box with xyxy format, (N, 4)
result.boxes.xywh # box with xywh format, (N, 4)
result.boxes.xyxyn # box with xyxy format but normalized, (N, 4)
result.boxes.xywhn # box with xywh format but normalized, (N, 4)
result.boxes.conf # confidence score, (N, 1)
result.boxes.cls # cls, (N, 1)
# Segmentation
result.masks.data # masks, (N, H, W)
result.masks.xy # x,y segments (pixels), List[segment] * N
result.masks.xyn # x,y segments (normalized), List[segment] * N
# Classification
result.probs # cls prob, (num_class, )
# Each result is composed of torch.Tensor by default,
# in which you can easily use following functionality:
result = result.cuda()
result = result.cpu()
result = result.to("cpu")
result = result.numpy()
```


## Export

[Export mode](../../modes/export/) is used for exporting a YOLO model to a format that can be used for deployment. In this mode, the model is converted to a format that can be used by other software applications or hardware devices. This mode is useful when deploying the model to production environments.

Export

Export an official YOLO model to [ONNX](https://www.ultralytics.com/glossary/onnx-open-neural-network-exchange) with dynamic batch-size and image-size.

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt")
model.export(format="onnx", dynamic=True)
```


Export an official YOLO model to [TensorRT](https://www.ultralytics.com/glossary/tensorrt) on `device=0`

for acceleration on CUDA devices.

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt")
model.export(format="engine", device=0)
```


## Track

[Track mode](../../modes/track/) is used for tracking objects in real-time using a YOLO model. In this mode, the model is loaded from a checkpoint file, and the user can provide a live video stream to perform real-time object tracking. This mode is useful for applications such as surveillance systems or [self-driving cars](https://www.ultralytics.com/solutions/ai-in-automotive).

Track

```
from ultralytics import YOLO
# Load a model
model = YOLO("yolo26n.pt") # load an official detection model
model = YOLO("yolo26n-seg.pt") # load an official segmentation model
model = YOLO("path/to/best.pt") # load a custom model
# Track with the model
results = model.track(source="https://youtu.be/LNwODJXcvt4", show=True)
results = model.track(source="https://youtu.be/LNwODJXcvt4", show=True, tracker="bytetrack.yaml")
```


## Benchmark

[Benchmark mode](../../modes/benchmark/) is used to profile the speed and accuracy of various export formats for YOLO. The benchmarks provide information on the size of the exported format, its `mAP50-95`

metrics (for object detection and segmentation) or `accuracy_top5`

metrics (for classification), and the inference time in milliseconds per image across various export formats like ONNX, [OpenVINO](https://docs.ultralytics.com/integrations/openvino/), TensorRT and others. This information can help users choose the optimal export format for their specific use case based on their requirements for speed and accuracy.

Benchmark

Benchmark an official YOLO model across all export formats.

```
from ultralytics.utils.benchmarks import benchmark
# Benchmark
benchmark(model="yolo26n.pt", data="coco8.yaml", imgsz=640, half=False, device=0)
```


## Using Trainers

The `YOLO`

model class serves as a high-level wrapper for Trainer classes. Each YOLO task has its own trainer, which inherits from `BaseTrainer`

. This architecture allows for greater flexibility and customization in your [machine learning workflows](https://docs.ultralytics.com/guides/model-training-tips/).

Detection Trainer Example

```
from ultralytics.models.yolo.detect import DetectionPredictor, DetectionTrainer, DetectionValidator
# trainer
trainer = DetectionTrainer(overrides={})
trainer.train()
trained_model = trainer.best
# Validator
val = DetectionValidator(args=...)
val(model=trained_model)
# predictor
pred = DetectionPredictor(overrides={})
pred(source=SOURCE, model=trained_model)
# resume from last weight
overrides["resume"] = trainer.last
trainer = DetectionTrainer(overrides=overrides)
```


You can easily customize Trainers to support custom tasks or explore research and development ideas. The modular design of Ultralytics YOLO allows you to adapt the framework to your specific needs, whether you're working on a novel [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv) task or fine-tuning existing models for better performance.

## FAQ

### How can I integrate YOLO into my Python project for object detection?

Integrating Ultralytics YOLO into your Python projects is simple. You can load a pretrained model or train a new model from scratch. Here's how to get started:

```
from ultralytics import YOLO
# Load a pretrained YOLO model
model = YOLO("yolo26n.pt")
# Perform object detection on an image
results = model("https://ultralytics.com/images/bus.jpg")
# Visualize the results
for result in results:
result.show()
```


See more detailed examples in our [Predict Mode](../../modes/predict/) section.

### What are the different modes available in YOLO?

Ultralytics YOLO provides various modes to cater to different [machine learning](https://www.ultralytics.com/glossary/machine-learning-ml) workflows. These include:

: Train a model using custom datasets.[Train](../../modes/train/): Validate model performance on a validation set.[Val](../../modes/val/): Make predictions on new images or video streams.[Predict](../../modes/predict/): Export models to various formats like ONNX and TensorRT.[Export](../../modes/export/): Real-time object tracking in video streams.[Track](../../modes/track/): Benchmark model performance across different configurations.[Benchmark](../../modes/benchmark/)

Each mode is designed to provide comprehensive functionalities for different stages of [model development and deployment](https://docs.ultralytics.com/guides/model-deployment-options/).

### How do I train a custom YOLO model using my dataset?

To train a custom YOLO model, you need to specify your dataset and other [hyperparameters](https://www.ultralytics.com/glossary/hyperparameter-tuning). Here's a quick example:

```
from ultralytics import YOLO
# Load the YOLO model
model = YOLO("yolo26n.yaml")
# Train the model with custom dataset
model.train(data="path/to/your/dataset.yaml", epochs=10)
```


For more details on training and hyperlinks to example usage, visit our [Train Mode](../../modes/train/) page.

### How do I export YOLO models for deployment?

Exporting YOLO models in a format suitable for deployment is straightforward with the `export`

function. For example, you can export a model to ONNX format:

```
from ultralytics import YOLO
# Load the YOLO model
model = YOLO("yolo26n.pt")
# Export the model to ONNX format
model.export(format="onnx")
```


For various export options, refer to the [Export Mode](../../modes/export/) documentation.

### Can I validate my YOLO model on different datasets?

Yes, validating YOLO models on different datasets is possible. After training, you can use the validation mode to evaluate the performance:

```
from ultralytics import YOLO
# Load a YOLO model
model = YOLO("yolo26n.yaml")
# Train the model
model.train(data="coco8.yaml", epochs=5)
# Validate the model on a different dataset
model.val(data="path/to/separate/data.yaml")
```


Check the [Val Mode](../../modes/val/) page for detailed examples and usage.

---

## Source: https://docs.ultralytics.com/usage/callbacks/

# Callbacks

Ultralytics framework supports callbacks, which serve as entry points at strategic stages during the `train`

, `val`

, `export`

, and `predict`

modes. Each callback accepts a `Trainer`

, `Validator`

, or `Predictor`

object, depending on the operation type. All properties of these objects are detailed in the [Reference section](../../reference/cfg/__init__/) of the documentation.

**Watch:** How to use Ultralytics Callbacks | Predict, Train, Validate and Export Callbacks | Ultralytics YOLO🚀

## Examples

### Returning Additional Information with Prediction

In this example, we demonstrate how to return the original frame along with each result object:

```
from ultralytics import YOLO
def on_predict_batch_end(predictor):
"""Combine prediction results with corresponding frames."""
_, image, _, _ = predictor.batch
# Ensure that image is a list
image = image if isinstance(image, list) else [image]
# Combine the prediction results with the corresponding frames
predictor.results = zip(predictor.results, image)
# Create a YOLO model instance
model = YOLO("yolo26n.pt")
# Add the custom callback to the model
model.add_callback("on_predict_batch_end", on_predict_batch_end)
# Iterate through the results and frames
for result, frame in model.predict(): # or model.track()
pass
```


### Access Model metrics using the `on_model_save`

callback

This example shows how to retrieve training details, such as the best_fitness score, total_loss, and other metrics after a checkpoint is saved using the `on_model_save`

callback.

```
from ultralytics import YOLO
# Load a YOLO model
model = YOLO("yolo26n.pt")
def print_checkpoint_metrics(trainer):
"""Print trainer metrics and loss details after each checkpoint is saved."""
print(
f"Model details\n"
f"Best fitness: {trainer.best_fitness}, "
f"Loss names: {trainer.loss_names}, " # List of loss names
f"Metrics: {trainer.metrics}, "
f"Total loss: {trainer.tloss}" # Total loss value
)
if __name__ == "__main__":
# Add on_model_save callback.
model.add_callback("on_model_save", print_checkpoint_metrics)
# Run model training on custom dataset.
results = model.train(data="coco8.yaml", epochs=3)
```


## All Callbacks

Below are all the supported callbacks. For more details, refer to the callbacks [source code](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/utils/callbacks/base.py).

### Trainer Callbacks

| Callback | Description |
|---|---|
`on_pretrain_routine_start` | Triggered at the beginning of the pre-training routine. |
`on_pretrain_routine_end` | Triggered at the end of the pre-training routine. |
`on_train_start` | Triggered when the training starts. |
`on_train_epoch_start` | Triggered at the start of each training
|

`on_train_batch_start`

`optimizer_step`

`on_before_zero_grad`

`on_train_batch_end`

`on_train_epoch_end`

`on_fit_epoch_end`

`on_model_save`

`on_train_end`

`on_params_update`

`teardown`

### Validator Callbacks

| Callback | Description |
|---|---|
`on_val_start` | Triggered when validation starts. |
`on_val_batch_start` | Triggered at the start of each validation batch. |
`on_val_batch_end` | Triggered at the end of each validation batch. |
`on_val_end` | Triggered when validation ends. |

### Predictor Callbacks

| Callback | Description |
|---|---|
`on_predict_start` | Triggered when the prediction process starts. |
`on_predict_batch_start` | Triggered at the start of each prediction batch. |
`on_predict_postprocess_end` | Triggered at the end of prediction post-processing. |
`on_predict_batch_end` | Triggered at the end of each prediction batch. |
`on_predict_end` | Triggered when the prediction process ends. |

### Exporter Callbacks

| Callback | Description |
|---|---|
`on_export_start` | Triggered when the export process starts. |
`on_export_end` | Triggered when the export process ends. |

## FAQ

### What are Ultralytics callbacks and how can I use them?

Ultralytics callbacks are specialized entry points that are triggered during key stages of model operations such as training, validation, exporting, and prediction. These callbacks enable custom functionality at specific points in the process, allowing for enhancements and modifications to the workflow. Each callback accepts a `Trainer`

, `Validator`

, or `Predictor`

object, depending on the operation type. For detailed properties of these objects, refer to the [Reference section](../../reference/cfg/__init__/).

To use a callback, define a function and add it to the model using the [ model.add_callback()](../../reference/engine/model/#ultralytics.engine.model.Model.add_callback) method. Here is an example of returning additional information during prediction:

```
from ultralytics import YOLO
def on_predict_batch_end(predictor):
"""Handle prediction batch end by combining results with corresponding frames; modifies predictor results."""
_, image, _, _ = predictor.batch
image = image if isinstance(image, list) else [image]
predictor.results = zip(predictor.results, image)
model = YOLO("yolo26n.pt")
model.add_callback("on_predict_batch_end", on_predict_batch_end)
for result, frame in model.predict():
pass
```


### How can I customize the Ultralytics training routine using callbacks?

Customize your Ultralytics training routine by injecting logic at specific stages of the training process. Ultralytics YOLO provides a variety of training callbacks, such as `on_train_start`

, `on_train_end`

, and `on_train_batch_end`

, which allow you to add custom metrics, processing, or logging.

Here's how to freeze BatchNorm statistics when freezing layers with callbacks:

```
from ultralytics import YOLO
# Add a callback to put the frozen layers in eval mode to prevent BN values from changing
def put_in_eval_mode(trainer):
n_layers = trainer.args.freeze
if not isinstance(n_layers, int):
return
for i, (name, module) in enumerate(trainer.model.named_modules()):
if name.endswith("bn") and int(name.split(".")[1]) < n_layers:
module.eval()
module.track_running_stats = False
model = YOLO("yolo26n.pt")
model.add_callback("on_train_epoch_start", put_in_eval_mode)
model.train(data="coco.yaml", epochs=10)
```


For more details on effectively using training callbacks, see the [Training Guide](../../modes/train/).

### Why should I use callbacks during validation in Ultralytics YOLO?

Using callbacks during validation in Ultralytics YOLO enhances model evaluation by enabling custom processing, logging, or metrics calculation. Callbacks like `on_val_start`

, `on_val_batch_end`

, and `on_val_end`

provide entry points to inject custom logic, ensuring detailed and comprehensive validation processes.

For example, to plot all validation batches instead of just the first three:

```
import inspect
from ultralytics import YOLO
def plot_samples(validator):
frame = inspect.currentframe().f_back.f_back
v = frame.f_locals
validator.plot_val_samples(v["batch"], v["batch_i"])
validator.plot_predictions(v["batch"], v["preds"], v["batch_i"])
model = YOLO("yolo26n.pt")
model.add_callback("on_val_batch_end", plot_samples)
model.val(data="coco.yaml")
```


For more insights on incorporating callbacks into your validation process, see the [Validation Guide](../../modes/val/).

### How do I attach a custom callback for the prediction mode in Ultralytics YOLO?

To attach a custom callback for prediction mode in Ultralytics YOLO, define a callback function and register it with the prediction process. Common prediction callbacks include `on_predict_start`

, `on_predict_batch_end`

, and `on_predict_end`

. These allow for the modification of prediction outputs and the integration of additional functionalities, like data logging or result transformation.

Here is an example where a custom callback saves predictions based on whether an object of a particular class is present:

```
from ultralytics import YOLO
model = YOLO("yolo26n.pt")
class_id = 2
def save_on_object(predictor):
r = predictor.results[0]
if class_id in r.boxes.cls:
predictor.args.save = True
else:
predictor.args.save = False
model.add_callback("on_predict_postprocess_end", save_on_object)
results = model("pedestrians.mp4", stream=True, save=True)
for results in results:
pass
```


For more comprehensive usage, refer to the [Prediction Guide](../../modes/predict/), which includes detailed instructions and additional customization options.

### What are some practical examples of using callbacks in Ultralytics YOLO?

Ultralytics YOLO supports various practical implementations of callbacks to enhance and customize different phases like training, validation, and prediction. Some practical examples include:

**Logging Custom Metrics**: Log additional metrics at different stages, such as at the end of training or validation[epochs](https://www.ultralytics.com/glossary/epoch).: Implement custom data transformations or augmentations during prediction or training batches.[Data Augmentation](https://www.ultralytics.com/glossary/data-augmentation)**Intermediate Results**: Save intermediate results, such as predictions or frames, for further analysis or visualization.

Example: Combining frames with prediction results during prediction using `on_predict_batch_end`

:

```
from ultralytics import YOLO
def on_predict_batch_end(predictor):
"""Combine prediction results with frames."""
_, image, _, _ = predictor.batch
image = image if isinstance(image, list) else [image]
predictor.results = zip(predictor.results, image)
model = YOLO("yolo26n.pt")
model.add_callback("on_predict_batch_end", on_predict_batch_end)
for result, frame in model.predict():
pass
```


Explore the [callback source code](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/utils/callbacks/base.py) for more options and examples.

---

## Source: https://docs.ultralytics.com/usage/cfg/

# Configuration

YOLO settings and hyperparameters play a critical role in the model's performance, speed, and [accuracy](https://www.ultralytics.com/glossary/accuracy). These settings can affect the model's behavior at various stages, including training, validation, and prediction.

**Watch:** Mastering Ultralytics YOLO: Configuration

**Watch:** Mastering Ultralytics YOLO: Configuration

Ultralytics commands use the following syntax:

Example

```
yolo TASK MODE ARGS
```


```
from ultralytics import YOLO
# Load a YOLO model from a pretrained weights file
model = YOLO("yolo26n.pt")
# Run the model in MODE using custom ARGS
MODE = "predict"
ARGS = {"source": "image.jpg", "imgsz": 640}
getattr(model, MODE)(**ARGS)
```


Where:

`TASK`

(optional) is one of ([detect](../../tasks/detect/),[segment](../../tasks/segment/),[classify](../../tasks/classify/),[pose](../../tasks/pose/),[obb](../../tasks/obb/))`MODE`

(required) is one of ([train](../../modes/train/),[val](../../modes/val/),[predict](../../modes/predict/),[export](../../modes/export/),[track](../../modes/track/),[benchmark](../../modes/benchmark/))`ARGS`

(optional) are`arg=value`

pairs like`imgsz=640`

that override defaults.

Default `ARG`

values are defined on this page and come from the `cfg/default.yaml`

[file](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/default.yaml).

## Tasks

Ultralytics YOLO models can perform a variety of computer vision tasks, including:

**Detect**:[Object detection](https://docs.ultralytics.com/tasks/detect/)identifies and localizes objects within an image or video.**Segment**:[Instance segmentation](https://docs.ultralytics.com/tasks/segment/)divides an image or video into regions corresponding to different objects or classes.**Classify**:[Image classification](https://docs.ultralytics.com/tasks/classify/)predicts the class label of an input image.**Pose**:[Pose estimation](https://docs.ultralytics.com/tasks/pose/)identifies objects and estimates their keypoints in an image or video.**OBB**:[Oriented Bounding Boxes](https://docs.ultralytics.com/tasks/obb/)uses rotated bounding boxes, suitable for satellite or medical imagery.

| Argument | Default | Description |
|---|---|---|
`task` | `'detect'` | Specifies the YOLO task: `detect` for
`segment` for segmentation, `classify` for classification, `pose` for pose estimation, and `obb` for oriented bounding boxes. Each task is tailored to specific outputs and problems in image and video analysis. |

## Modes

Ultralytics YOLO models operate in different modes, each designed for a specific stage of the model lifecycle:

**Train**: Train a YOLO model on a custom dataset.**Val**: Validate a trained YOLO model.**Predict**: Use a trained YOLO model to make predictions on new images or videos.**Export**: Export a YOLO model for deployment.**Track**: Track objects in real-time using a YOLO model.**Benchmark**: Benchmark the speed and accuracy of YOLO exports (ONNX, TensorRT, etc.).

| Argument | Default | Description |
|---|---|---|
`mode` | `'train'` | Specifies the YOLO model's operating mode: `train` for model training, `val` for validation, `predict` for inference, `export` for converting to deployment formats, `track` for object tracking, and `benchmark` for performance evaluation. Each mode supports different stages, from development to deployment. |

## Train Settings

Training settings for YOLO models include hyperparameters and configurations that affect the model's performance, speed, and [accuracy](https://www.ultralytics.com/glossary/accuracy). Key settings include [batch size](https://www.ultralytics.com/glossary/batch-size), [learning rate](https://www.ultralytics.com/glossary/learning-rate), momentum, and weight decay. The choice of optimizer, [loss function](https://www.ultralytics.com/glossary/loss-function), and dataset composition also impact training. Tuning and experimentation are crucial for optimal performance. For more details, see the [Ultralytics entrypoint function](../../reference/cfg/__init__/).

| Argument | Type | Default | Description |
|---|---|---|---|
`model` | `str` | `None` | Specifies the model file for training. Accepts a path to either a `.pt` pretrained model or a `.yaml` configuration file. Essential for defining the model structure or initializing weights. |
`data` | `str` | `None` | Path to the dataset configuration file (e.g., `coco8.yaml` ). This file contains dataset-specific parameters, including paths to training and
|
`epochs` | `int` | `100` | Total number of training epochs. Each
|

`time`

`float`

`None`

`epochs`

argument, allowing training to automatically stop after the specified duration. Useful for time-constrained training scenarios.`patience`

`int`

`100`

[overfitting](https://www.ultralytics.com/glossary/overfitting)by stopping training when performance plateaus.`batch`

`int`

or `float`

`16`

[Batch size](https://www.ultralytics.com/glossary/batch-size), with three modes: set as an integer (e.g.,`batch=16`

), auto mode for 60% GPU memory utilization (`batch=-1`

), or auto mode with specified utilization fraction (`batch=0.70`

).`imgsz`

`int`

`640`

`rect=False`

), preserving aspect ratio for YOLO models but not RT-DETR. Affects model [accuracy](https://www.ultralytics.com/glossary/accuracy)and computational complexity.`save`

`bool`

`True`

[model deployment](https://www.ultralytics.com/glossary/model-deployment).`save_period`

`int`

`-1`

`cache`

`bool`

`False`

`True`

/`ram`

), on disk (`disk`

), or disables it (`False`

). Improves training speed by reducing disk I/O at the cost of increased memory usage.`device`

`int`

or `str`

or `list`

`None`

`device=0`

), multiple GPUs (`device=[0,1]`

), CPU (`device=cpu`

), MPS for Apple silicon (`device=mps`

), Huawei Ascend NPU (`device=npu`

or `device=npu:0`

), or auto-selection of most idle GPU (`device=-1`

) or multiple idle GPUs (`device=[-1,-1]`

)`workers`

`int`

`8`

`RANK`

if Multi-GPU training). Influences the speed of data preprocessing and feeding into the model, especially useful in multi-GPU setups.`project`

`str`

`None`

`name`

`str`

`None`

`exist_ok`

`bool`

`False`

`pretrained`

`bool`

or `str`

`True`

`optimizer`

`str`

`'auto'`

`SGD`

, `MuSGD`

, `Adam`

, `Adamax`

, `AdamW`

, `NAdam`

, `RAdam`

, `RMSProp`

, or `auto`

for automatic selection based on model configuration. Affects convergence speed and stability.`seed`

`int`

`0`

`deterministic`

`bool`

`True`

`verbose`

`bool`

`True`

`single_cls`

`bool`

`False`

`classes`

`list[int]`

`None`

`rect`

`bool`

`False`

`imgsz`

. Can improve efficiency and speed but may affect model accuracy.`multi_scale`

`float`

`0.0`

`imgsz`

each batch by +/- `multi_scale`

(e.g. `0.25`

-> `0.75x`

to `1.25x`

), rounding to model stride multiples; `0.0`

disables multi-scale training.`cos_lr`

`bool`

`False`

[learning rate](https://www.ultralytics.com/glossary/learning-rate)scheduler, adjusting the learning rate following a cosine curve over epochs. Helps in managing learning rate for better convergence.`close_mosaic`

`int`

`10`

[data augmentation](https://www.ultralytics.com/glossary/data-augmentation)in the last N epochs to stabilize training before completion. Setting to 0 disables this feature.`resume`

`bool`

`False`

`amp`

`bool`

`True`

[Mixed Precision](https://www.ultralytics.com/glossary/mixed-precision)(AMP) training, reducing memory usage and possibly speeding up training with minimal impact on accuracy.`fraction`

`float`

`1.0`

`profile`

`bool`

`False`

`freeze`

`int`

or `list`

`None`

[transfer learning](https://www.ultralytics.com/glossary/transfer-learning).`lr0`

`float`

`0.01`

`SGD=1E-2`

, `Adam=1E-3`

). Adjusting this value is crucial for the optimization process, influencing how rapidly model weights are updated.`lrf`

`float`

`0.01`

`lr0 * lrf`

), used in conjunction with schedulers to adjust the learning rate over time.`momentum`

`float`

`0.937`

[Adam optimizers](https://www.ultralytics.com/glossary/adam-optimizer), influencing the incorporation of past gradients in the current update.`weight_decay`

`float`

`0.0005`

[regularization](https://www.ultralytics.com/glossary/regularization)term, penalizing large weights to prevent overfitting.`warmup_epochs`

`float`

`3.0`

`warmup_momentum`

`float`

`0.8`

`warmup_bias_lr`

`float`

`0.1`

`box`

`float`

`7.5`

[loss function](https://www.ultralytics.com/glossary/loss-function), influencing how much emphasis is placed on accurately predicting[bounding box](https://www.ultralytics.com/glossary/bounding-box)coordinates.`cls`

`float`

`0.5`

`dfl`

`float`

`1.5`

`pose`

`float`

`12.0`

`kobj`

`float`

`1.0`

`rle`

`float`

`1.0`

`angle`

`float`

`1.0`

`nbs`

`int`

`64`

`overlap_mask`

`bool`

`True`

`mask_ratio`

`int`

`4`

`dropout`

`float`

`0.0`

`val`

`bool`

`True`

`plots`

`bool`

`True`

`compile`

`bool`

or `str`

`False`

`torch.compile`

graph compilation with `backend='inductor'`

. Accepts `True`

→ `"default"`

, `False`

→ disables, or a string mode such as `"default"`

, `"reduce-overhead"`

, `"max-autotune-no-cudagraphs"`

. Falls back to eager with a warning if unsupported.`max_det`

`int`

`300`

Note on Batch-size Settings

The `batch`

argument offers three configuration options:

**Fixed Batch Size**: Specify the number of images per batch with an integer (e.g.,`batch=16`

).**Auto Mode (60% GPU Memory)**: Use`batch=-1`

for automatic adjustment to approximately 60% CUDA memory utilization.**Auto Mode with Utilization Fraction**: Set a fraction (e.g.,`batch=0.70`

) to adjust based on a specified GPU memory usage.

## Predict Settings

Prediction settings for YOLO models include hyperparameters and configurations that influence performance, speed, and [accuracy](https://www.ultralytics.com/glossary/accuracy) during inference. Key settings include the confidence threshold, [Non-Maximum Suppression (NMS)](https://www.ultralytics.com/glossary/non-maximum-suppression-nms) threshold, and the number of classes. Input data size, format, and supplementary features like masks also affect predictions. Tuning these settings is essential for optimal performance.

Inference arguments:

| Argument | Type | Default | Description |
|---|---|---|---|
`source` | `str` | `'ultralytics/assets'` | Specifies the data source for inference. Can be an image path, video file, directory, URL, or device ID for live feeds. Supports a wide range of formats and sources, enabling flexible application across
|

`conf`

`float`

`0.25`

`iou`

`float`

`0.7`

[Intersection Over Union](https://www.ultralytics.com/glossary/intersection-over-union-iou)(IoU) threshold for Non-Maximum Suppression (NMS). Lower values result in fewer detections by eliminating overlapping boxes, useful for reducing duplicates.`imgsz`

`int`

or `tuple`

`640`

`640`

for square resizing or a (height, width) tuple. Proper sizing can improve detection [accuracy](https://www.ultralytics.com/glossary/accuracy)and processing speed.`rect`

`bool`

`True`

`half`

`bool`

`False`

[precision](https://www.ultralytics.com/glossary/precision)(FP16) inference, which can speed up model inference on supported GPUs with minimal impact on accuracy.`device`

`str`

`None`

`cpu`

, `cuda:0`

, `0`

, `npu`

or `npu:0`

). Allows users to select between CPU, a specific GPU, Huawei Ascend NPU, or other compute devices for model execution.`batch`

`int`

`1`

[a directory, video file, or](https://docs.ultralytics.com/modes/predict/#inference-sources)). A larger batch size can provide higher throughput, shortening the total amount of time required for inference.`.txt`

file`max_det`

`int`

`300`

`vid_stride`

`int`

`1`

`stream_buffer`

`bool`

`False`

`False`

, old frames get dropped to accommodate new frames (optimized for real-time applications). If `True`

, queues new frames in a buffer, ensuring no frames get skipped, but will cause latency if inference FPS is lower than stream FPS.`visualize`

`bool`

`False`

`augment`

`bool`

`False`

`agnostic_nms`

`bool`

`False`

`classes`

`list[int]`

`None`

`retina_masks`

`bool`

`False`

`masks.data`

) will match the original image size if enabled. If disabled, they have the image size used during inference.`embed`

`list[int]`

`None`

[embeddings](https://www.ultralytics.com/glossary/embeddings). Useful for downstream tasks like clustering or similarity search.`project`

`str`

`None`

`save`

is enabled.`name`

`str`

`None`

`save`

is enabled.`stream`

`bool`

`False`

`verbose`

`bool`

`True`

`compile`

`bool`

or `str`

`False`

`torch.compile`

graph compilation with `backend='inductor'`

. Accepts `True`

→ `"default"`

, `False`

→ disables, or a string mode such as `"default"`

, `"reduce-overhead"`

, `"max-autotune-no-cudagraphs"`

. Falls back to eager with a warning if unsupported.`end2end`

`bool`

`None`

`False`

lets you run prediction using the traditional NMS pipeline, additionally allowing you to make use of the `iou`

argument. See the [End-to-End Detection guide](../../guides/end2end-detection/)for details.Visualization arguments:

| Argument | Type | Default | Description |
|---|---|---|---|
`show` | `bool` | `False` | If `True` , displays the annotated images or videos in a window. Useful for immediate visual feedback during development or testing. |
`save` | `bool` | `False or True` | Enables saving of the annotated images or videos to files. Useful for documentation, further analysis, or sharing results. Defaults to True when using CLI & False when used in Python. |
`save_frames` | `bool` | `False` | When processing videos, saves individual frames as images. Useful for extracting specific frames or for detailed frame-by-frame analysis. |
`save_txt` | `bool` | `False` | Saves detection results in a text file, following the format `[class] [x_center] [y_center] [width] [height] [confidence]` . Useful for integration with other analysis tools. |
`save_conf` | `bool` | `False` | Includes confidence scores in the saved text files. Enhances the detail available for post-processing and analysis. |
`save_crop` | `bool` | `False` | Saves cropped images of detections. Useful for dataset augmentation, analysis, or creating focused datasets for specific objects. |
`show_labels` | `bool` | `True` | Displays labels for each detection in the visual output. Provides immediate understanding of detected objects. |
`show_conf` | `bool` | `True` | Displays the confidence score for each detection alongside the label. Gives insight into the model's certainty for each detection. |
`show_boxes` | `bool` | `True` | Draws bounding boxes around detected objects. Essential for visual identification and location of objects in images or video frames. |
`line_width` | `int or None` | `None` | Specifies the line width of bounding boxes. If `None` , the line width is automatically adjusted based on the image size. Provides visual customization for clarity. |

## Validation Settings

Validation settings for YOLO models involve hyperparameters and configurations to evaluate performance on a [validation dataset](https://www.ultralytics.com/glossary/validation-data). These settings influence performance, speed, and [accuracy](https://www.ultralytics.com/glossary/accuracy). Common settings include batch size, validation frequency, and performance metrics. The validation dataset's size and composition, along with the specific task, also affect the process.

| Argument | Type | Default | Description |
|---|---|---|---|
`data` | `str` | `None` | Specifies the path to the dataset configuration file (e.g., `coco8.yaml` ). This file should include the path to the
|
`imgsz` | `int` | `640` | Defines the size of input images. All images are resized to this dimension before processing. Larger sizes may improve accuracy for small objects but increase computation time. |
`batch` | `int` | `16` | Sets the number of images per batch. Higher values utilize GPU memory more efficiently but require more VRAM. Adjust based on available hardware resources. |
`save_json` | `bool` | `False` | If `True` , saves the results to a JSON file for further analysis, integration with other tools, or submission to evaluation servers like COCO. |
`conf` | `float` | `0.001` | Sets the minimum confidence threshold for detections. Lower values increase recall but may introduce more false positives. Used during
|

`iou`

`float`

`0.7`

[Intersection Over Union](https://www.ultralytics.com/glossary/intersection-over-union-iou)threshold for[Non-Maximum Suppression](https://www.ultralytics.com/glossary/non-maximum-suppression-nms). Controls duplicate detection elimination.`max_det`

`int`

`300`

`half`

`bool`

`False`

[precision](https://www.ultralytics.com/glossary/precision)(FP16) computation, reducing memory usage and potentially increasing speed with minimal impact on[accuracy](https://www.ultralytics.com/glossary/accuracy).`device`

`str`

`None`

`cpu`

, `cuda:0`

, `npu`

, `npu:0`

, etc.). When `None`

, automatically selects the best available device. Multiple CUDA devices can be specified with comma separation.`dnn`

`bool`

`False`

`True`

, uses the [OpenCV](https://www.ultralytics.com/glossary/opencv)DNN module for ONNX model inference, offering an alternative to[PyTorch](https://www.ultralytics.com/glossary/pytorch)inference methods.`plots`

`bool`

`True`

`True`

, generates and saves plots of predictions versus ground truth, confusion matrices, and PR curves for visual evaluation of model performance.`classes`

`list[int]`

`None`

`rect`

`bool`

`True`

`True`

, uses rectangular inference for batching, reducing padding and potentially increasing speed and efficiency by processing images in their original aspect ratio.`split`

`str`

`'val'`

`val`

, `test`

, or `train`

). Allows flexibility in choosing the data segment for performance evaluation.`project`

`str`

`None`

`name`

`str`

`None`

`verbose`

`bool`

`True`

`True`

, displays detailed information during the validation process, including per-class metrics, batch progress, and additional debugging information.`save_txt`

`bool`

`False`

`True`

, saves detection results in text files, with one file per image, useful for further analysis, custom post-processing, or integration with other systems.`save_conf`

`bool`

`False`

`True`

, includes confidence values in the saved text files when `save_txt`

is enabled, providing more detailed output for analysis and filtering.`workers`

`int`

`8`

`augment`

`bool`

`False`

`agnostic_nms`

`bool`

`False`

[Non-Maximum Suppression](https://www.ultralytics.com/glossary/non-maximum-suppression-nms), which merges overlapping boxes regardless of their predicted class. Useful for instance-focused applications. For end-to-end models (YOLO26, YOLOv10), this only prevents the same detection from appearing with multiple class labels (IoU=1.0 duplicates) and does not perform IoU-threshold-based suppression between distinct boxes.`single_cls`

`bool`

`False`

`visualize`

`bool`

`False`

`compile`

`bool`

or `str`

`False`

`torch.compile`

graph compilation with `backend='inductor'`

. Accepts `True`

→ `"default"`

, `False`

→ disables, or a string mode such as `"default"`

, `"reduce-overhead"`

, `"max-autotune-no-cudagraphs"`

. Falls back to eager with a warning if unsupported.`end2end`

`bool`

`None`

`False`

lets you run validation using the traditional NMS pipeline, additionally allowing you to make use of the `iou`

argument.Careful tuning and experimentation are crucial to ensure optimal performance and to detect and prevent [overfitting](https://www.ultralytics.com/glossary/overfitting).

## Export Settings

Export settings for YOLO models include configurations for saving or exporting the model for use in different environments. These settings impact performance, size, and compatibility. Key settings include the exported file format (e.g., ONNX, TensorFlow SavedModel), the target device (e.g., CPU, GPU), and features like masks. The model's task and the destination environment's constraints also affect the export process.

| Argument | Type | Default | Description |
|---|---|---|---|
`format` | `str` | `'torchscript'` | Target format for the exported model, such as `'onnx'` , `'torchscript'` , `'engine'` (TensorRT), or others. Each format enables compatibility with different
|
`imgsz` | `int` or `tuple` | `640` | Desired image size for the model input. Can be an integer for square images (e.g., `640` for 640×640) or a tuple `(height, width)` for specific dimensions. |
`keras` | `bool` | `False` | Enables export to Keras format for
|

`optimize`

`bool`

`False`

[inference](https://docs.ultralytics.com/modes/predict/)performance. Not compatible with NCNN format or CUDA devices.`half`

`bool`

`False`

`int8`

`bool`

`False`

[accuracy](https://www.ultralytics.com/glossary/accuracy)loss, primarily for[edge devices](https://www.ultralytics.com/blog/understanding-the-real-world-applications-of-edge-ai). When used with TensorRT, performs post-training quantization (PTQ).`dynamic`

`bool`

`False`

`True`

when using TensorRT with INT8.`simplify`

`bool`

`True`

`onnxslim`

, potentially improving performance and compatibility with inference engines.`opset`

`int`

`None`

[ONNX](https://docs.ultralytics.com/integrations/onnx/)parsers and runtimes. If not set, uses the latest supported version.`workspace`

`float`

or `None`

`None`

[TensorRT](https://docs.ultralytics.com/integrations/tensorrt/)optimizations, balancing memory usage and performance. Use`None`

for auto-allocation by TensorRT up to device maximum.`nms`

`bool`

`False`

[Export Formats](https://docs.ultralytics.com/modes/export/)), improving detection post-processing efficiency. Not available for end2end models.`batch`

`int`

`1`

`predict`

mode. For Edge TPU exports, this is automatically set to 1.`device`

`str`

`None`

`device=0`

), CPU (`device=cpu`

), MPS for Apple silicon (`device=mps`

), Huawei Ascend NPU (`device=npu`

or `device=npu:0`

), or DLA for NVIDIA Jetson (`device=dla:0`

or `device=dla:1`

). TensorRT exports automatically use GPU.`data`

`str`

`'coco8.yaml'`

[dataset](https://docs.ultralytics.com/datasets/)configuration file, essential for INT8 quantization calibration. If not specified with INT8 enabled,`coco8.yaml`

will be used as a fallback for calibration.`fraction`

`float`

`1.0`

`end2end`

`bool`

`None`

`False`

lets you export these models to be compatible with the traditional NMS-based postprocessing pipeline. See the [End-to-End Detection guide](../../guides/end2end-detection/)for details.Thoughtful configuration ensures the exported model is optimized for its use case and functions effectively in the target environment.

## Solutions Settings

Ultralytics Solutions configuration settings offer flexibility to customize models for tasks like object counting, heatmap creation, workout tracking, data analysis, zone tracking, queue management, and region-based counting. These options allow easy adjustments for accurate and useful results tailored to specific needs.

| Argument | Type | Default | Description |
|---|---|---|---|
`model` | `str` | `None` | Path to an Ultralytics YOLO model file. |
`region` | `list` | `'[(20, 400), (1260, 400)]'` | List of points defining the counting region. |
`show_in` | `bool` | `True` | Flag to control whether to display the in counts on the video stream. |
`show_out` | `bool` | `True` | Flag to control whether to display the out counts on the video stream. |
`analytics_type` | `str` | `'line'` | Type of graph, i.e., `line` , `bar` , `area` , or `pie` . |
`colormap` | `int` | `cv2.COLORMAP_JET` | Colormap to use for the heatmap. |
`json_file` | `str` | `None` | Path to the JSON file that contains all parking coordinates data. |
`up_angle` | `float` | `145.0` | Angle threshold for the 'up' pose. |
`kpts` | `list[int]` | `'[6, 8, 10]'` | List of three keypoint indices used for monitoring workouts. These keypoints correspond to body joints or parts, such as shoulders, elbows, and wrists, for exercises like push-ups, pull-ups, squats, and ab-workouts. |
`down_angle` | `float` | `90.0` | Angle threshold for the 'down' pose. |
`blur_ratio` | `float` | `0.5` | Adjusts percentage of blur intensity, with values in range `0.1 - 1.0` . |
`crop_dir` | `str` | `'cropped-detections'` | Directory name for storing cropped detections. |
`records` | `int` | `5` | Total detections count to trigger an email with security alarm system. |
`vision_point` | `tuple[int, int]` | `(20, 20)` | The point where vision will track objects and draw paths using VisionEye Solution. |
`source` | `str` | `None` | Path to the input source (video, RTSP, etc.). Only usable with Solutions command line interface (CLI). |
`figsize` | `tuple[int, int]` | `(12.8, 7.2)` | Figure size for analytics charts such as heatmaps or graphs. |
`fps` | `float` | `30.0` | Frames per second used for speed calculations. |
`max_hist` | `int` | `5` | Maximum historical points to track per object for speed/direction calculations. |
`meter_per_pixel` | `float` | `0.05` | Scaling factor used for converting pixel distance to real-world units. |
`max_speed` | `int` | `120` | Maximum speed limit in visual overlays (used in alerts). |
`data` | `str` | `'images'` | Path to image directory used for similarity search. |

## Augmentation Settings

[Data augmentation](https://www.ultralytics.com/glossary/data-augmentation) techniques are essential for improving YOLO model robustness and performance by introducing variability into the [training data](https://www.ultralytics.com/glossary/training-data), helping the model generalize better to unseen data. The following table outlines each augmentation argument's purpose and effect:

| Argument | Type | Default | Supported Tasks | Range | Description |
|---|---|---|---|---|---|
`hsv_h` |

`float`

`0.015`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0.0 - 1.0`

`hsv_s`

`float`

`0.7`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0.0 - 1.0`

`hsv_v`

`float`

`0.4`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0.0 - 1.0`

`degrees`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 180`

`translate`

`float`

`0.1`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 1.0`

`scale`

`float`

`0.5`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0 - 1`

`shear`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`-180 - +180`

`perspective`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 0.001`

`flipud`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0.0 - 1.0`

`fliplr`

`float`

`0.5`

`detect`

, `segment`

, `pose`

, `obb`

, `classify`

`0.0 - 1.0`

`bgr`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 1.0`

`mosaic`

`float`

`1.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 1.0`

`mixup`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 1.0`

`cutmix`

`float`

`0.0`

`detect`

, `segment`

, `pose`

, `obb`

`0.0 - 1.0`

`copy_paste`

`float`

`0.0`

`segment`

`0.0 - 1.0`

`copy_paste_mode`

`str`

`flip`

`segment`

`copy-paste`

strategy to use. Options include `'flip'`

and `'mixup'`

.`auto_augment`

`str`

`randaugment`

`classify`

`'randaugment'`

, `'autoaugment'`

, or `'augmix'`

) to enhance model performance through visual diversity.`erasing`

`float`

`0.4`

`classify`

`0.0 - 1.0`

`augmentations`

`list`

`detect`

, `segment`

, `pose`

, `obb`

Adjust these settings to meet dataset and task requirements. Experimenting with different values can help find the optimal augmentation strategy for the best model performance.

## Logging, Checkpoints and Plotting Settings

Logging, checkpoints, plotting, and file management are important when training a YOLO model:

**Logging**: Track the model's progress and diagnose issues using libraries like[TensorBoard](https://docs.ultralytics.com/integrations/tensorboard/)or by writing to a file.**Checkpoints**: Save the model at regular intervals to resume training or experiment with different configurations.**Plotting**: Visualize performance and training progress using libraries like matplotlib or TensorBoard.**File management**: Organize files generated during training, such as checkpoints, log files, and plots, for easy access and analysis.

Effective management of these aspects helps track progress and makes debugging and optimization easier.

| Argument | Default | Description |
|---|---|---|
`project` | `'runs'` | Specifies the root directory for saving training runs. Each run is saved in a separate subdirectory. |
`name` | `'exp'` | Defines the experiment name. If unspecified, YOLO increments this name for each run (e.g., `exp` , `exp2` ) to avoid overwriting. |
`exist_ok` | `False` | Determines whether to overwrite an existing experiment directory. `True` allows overwriting; `False` prevents it. |
`plots` | `True` | Controls the generation and saving of training and validation plots. Set to `True` to create plots like loss curves,
|
`save` | `True` | Enables saving training checkpoints and final model weights. Set to `True` to save model states periodically, allowing training resumption or model deployment. |

## FAQ

### How do I improve my YOLO model's performance during training?

Improve performance by tuning hyperparameters like [batch size](https://www.ultralytics.com/glossary/batch-size), [learning rate](https://www.ultralytics.com/glossary/learning-rate), momentum, and weight decay. Adjust [data augmentation](https://www.ultralytics.com/glossary/data-augmentation) settings, select the right optimizer, and use techniques like early stopping or [mixed precision](https://www.ultralytics.com/glossary/mixed-precision). For details, see the [Train Guide](../../modes/train/).

### What are the key hyperparameters for YOLO model accuracy?

Key hyperparameters affecting accuracy include:

**Batch Size (**: Larger sizes can stabilize training but need more memory.`batch`

)**Learning Rate (**: Smaller rates offer fine adjustments but slower convergence.`lr0`

)**Momentum (**: Accelerates gradient vectors, dampening oscillations.`momentum`

)**Image Size (**: Larger sizes improve accuracy but increase computational load.`imgsz`

)

Adjust these based on your dataset and hardware. Learn more in [Train Settings](#train-settings).

### How do I set the learning rate for training a YOLO model?

The learning rate (`lr0`

) is crucial; start with `0.01`

for SGD or `0.001`

for [Adam optimizer](https://www.ultralytics.com/glossary/adam-optimizer). Monitor metrics and adjust as needed. Use cosine learning rate schedulers (`cos_lr`

) or warmup (`warmup_epochs`

, `warmup_momentum`

). Details are in the [Train Guide](../../modes/train/).

### What are the default inference settings for YOLO models?

Default settings include:

**Confidence Threshold (**: Minimum confidence for detections.`conf=0.25`

)**IoU Threshold (**: For`iou=0.7`

)[Non-Maximum Suppression (NMS)](https://www.ultralytics.com/glossary/non-maximum-suppression-nms).**Image Size (**: Resizes input images.`imgsz=640`

)**Device (**: Selects CPU, GPU, Apple MPS or Huawei Ascend NPU (`device=None`

)`npu`

).

For a full overview, see [Predict Settings](#predict-settings) and the [Predict Guide](../../modes/predict/).

### Why use mixed precision training with YOLO models?

[Mixed precision](https://www.ultralytics.com/glossary/mixed-precision) training (`amp=True`

) reduces memory usage and speeds up training using FP16 and FP32. It's beneficial for modern GPUs, allowing larger models and faster computations without significant accuracy loss. Learn more in the [Train Guide](../../modes/train/).