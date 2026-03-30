# Albumentations Documentation
> Scraped on: 2026-03-30 | Root Source: [https://albumentations.ai/docs/](https://albumentations.ai/docs/)



---

## Source: https://albumentations.ai/docs/

# Welcome to Albumentations Documentation!

## On this page

Albumentations is a fast and flexible library for image augmentation. Install with `pip install albumentationsx`

. See the [License Guide](/docs/license/) for licensing (AGPL/Commercial). Whether you're working on classification, segmentation, object detection, or other computer vision tasks, Albumentations provides a comprehensive set of transforms and a powerful pipeline framework.

This documentation will guide you through installing the library, understanding its core concepts, applying it to various tasks, and exploring advanced features.

## Getting Started

Learn what data augmentation is and why it's important.[Introduction](/docs/1-introduction/):Set up Albumentations in your environment.[Installation](/docs/1-introduction/installation/):

## Learning the Basics

Understand the fundamental building blocks: Transforms, Pipelines (Compose), Targets (image, mask, bboxes, keypoints), and Probabilities.[Core Concepts](/docs/2-core-concepts/):Find practical examples for common computer vision tasks:[Basic Usage Guides](/docs/3-basic-usage/):A detailed guide on selecting effective augmentation strategies for model generalization.[Choosing Augmentations](/docs/3-basic-usage/choosing-augmentations/):Tips for optimizing your augmentation pipeline speed.[Performance Tuning](/docs/3-basic-usage/performance-tuning/):

## Advanced Topics

Explore more complex features:[Advanced Guides](/docs/4-advanced-guides/):

## Other Resources

See how Albumentations compares to other libraries.[Comparing with Torchvision/Kornia](/docs/torchvision-kornia2albumentations/):Technical comparison for teams evaluating the legacy MIT package against AlbumentationsX.[AlbumentationsX vs Albumentations MIT: Practical Benefits](/docs/albumentationsx-vs-albumentations-mit-benefits/):Find answers to common questions.[Frequently Asked Questions (FAQ)](/docs/faq/):Performance comparison results.[Benchmarks](/docs/./benchmarks/):Check which transforms work with images, masks, bounding boxes, keypoints, etc.[Supported Targets by Transform](/docs/reference/supported-targets-by-transform/):[API Reference](/docs/./api-reference/)Active development[GitHub Repository](https://github.com/albumentations-team/AlbumentationsX):Many practical examples.[Examples Repository](https://github.com/albumentations-team/albumentations_examples):

We hope this documentation helps you leverage the full power of Albumentations!

---

## Source: https://albumentations.ai/

# Do more with less data

Albumentations is a computer vision tool that boosts the performance of deep neural networks.

The library is widely used in industry, deep learning research, machine learning competitions, and open source projects.

## Why Albumentations?

### Fast & Performant

Boost model accuracy with highly optimized, benchmark-proven augmentations.

### Unmatched Versatility

>100 transforms for images, masks, bounding boxes, keypoints & 3D. Used in medical, satellite, self-driving, and more.

### Effortless Integration

Familiar API, similar to torchvision, for easy adoption in PyTorch, TensorFlow, and other frameworks.

### Proven & Trusted

Widely adopted in research, competitions (like Kaggle), and commercial applications.

## Powerful Features

### Versatile Transforms

Pixel-level adjustments (brightness, contrast, noise) and spatial transformations (rotate, scale, flip).

[Learn More→](/docs/reference/supported-targets-by-transform/)

### Task Agnostic

Consistently handles images, segmentation masks, bounding boxes, and keypoints through any augmentation pipeline.

[Learn More→](/docs/3-basic-usage/)

### Performance Focused

Highly optimized code ensures minimal overhead, crucial for training large models. See benchmarks.

[Learn More→](/docs/benchmarks/image-benchmarks/)

### Framework Agnostic

Works seamlessly with PyTorch, TensorFlow, Keras, and other frameworks, using standard NumPy arrays.

[Learn More→](/docs/1-introduction/installation/)

### Extensible

Easily create custom augmentations or pipelines to fit your specific research or application needs.

[Learn More→](/docs/4-advanced-guides/creating-custom-transforms/)

### Easy Serialization

Save and load augmentation pipelines using YAML or JSON for reproducibility and sharing.

[Learn More→](/docs/4-advanced-guides/serialization/)

## Trusted By Leading Companies

## Community Feedback

## Community-Driven Project, Supported By

Albumentations thrives on developer contributions. We appreciate our supporters who help sustain the project's infrastructure.

### 🟢Community Supporter

### 🟡Integration Partner

### 🟠Exclusive Partner

### Trusted & Verified

[NumFOCUS Affiliated Project](https://numfocus.org/sponsored-projects/affiliated-projects)

Part of the NumFOCUS ecosystem supporting open-source scientific computing

Registered for U.S. government contracts and grants (UEI: VB8PKZ4KQS73)

## Need AlbumentationsX for commercial use?

AlbumentationsX is dual-licensed (AGPL / Commercial). Use it in proprietary software with a commercial license — no source code disclosure required.

[Learn about licensing](/pricing/)

## Citing

If you find Albumentations useful for your research, please consider citing the paper:

```
@Article{info11020125,
AUTHOR = {Buslaev, Alexander and Iglovikov, Vladimir I. and Khvedchenya, Eugene and Parinov, Alex and Druzhinin, Mikhail and Kalinin, Alexandr A.},
TITLE = {Albumentations: Fast and Flexible Image Augmentations},
JOURNAL = {Information},
VOLUME = {11},
YEAR = {2020},
NUMBER = {2},
ARTICLE-NUMBER = {125},
URL = {https://www.mdpi.com/2078-2489/11/2/125},
ISSN = {2078-2489},
DOI = {10.3390/info11020125}
}
```


Read the paper: [Information, Volume 11, Issue 2](https://www.mdpi.com/2078-2489/11/2/125)

---

## Source: https://albumentations.ai/docs/api-reference/

# Albumentations API Reference

Browse the complete API documentation for the Albumentations library. Each module includes detailed information about parameters, usage examples, and transform behavior.

## Documentation Structure

- Albumentations
- Augmentations
- Blur
- Crops
- Dropout
- Geometric
- Mixing
- Other
- Pixel
- Spectrogram
- Text
- Transforms3d

- Core
- Pytorch

---

## Source: https://albumentations.ai/blog/

[ • 7 min read • By Vladimir Iglovikovkeypointsaugmentationlabel-mappingface-landmarksalbumentationsxdeep-learning](/blog/2025/04-label-consistency-in-keypoint-augmentation/)

## The Label Consistency Problem in Keypoint Augmentation

When you flip a face horizontally, the left eye becomes the right eye - but your model doesn't know that. Learn how AlbumentationsX's label_mapping feature automatically swaps and reorders keypoint labels during augmentation, reducing landmark detection error by 33%.

---

## Source: https://explore.albumentations.ai

# Albumentations Transforms

## Image-Only Transforms


AdditiveNoise


AdvancedBlur


AtmosphericFog


AutoContrast


Blur


CLAHE


ChannelDropout


ChannelShuffle


ChannelSwap


ChromaticAberration


ColorJitter


Defocus


Dithering


Downscale


Emboss


Equalize


FDA


FancyPCA


FilmGrain


FromFloat


GaussNoise


GaussianBlur


GlassBlur


HEStain


Halftone


HistogramMatching


HueSaturationValue


ISONoise


Illumination


ImageCompression


InvertImg


LensFlare


MedianBlur


MotionBlur


MultiplicativeNoise


Normalize


PhotoMetricDistort


PixelDistributionAdaptation


PlanckianJitter


PlasmaBrightnessContrast


PlasmaShadow


Posterize


RGBShift


RandomBrightnessContrast


RandomFog


RandomGamma


RandomGravel


RandomRain


RandomShadow


RandomSnow


RandomSunFlare


RandomToneCurve


RingingOvershoot


SaltAndPepper


Sharpen


ShotNoise


Solarize


Spatter


Superpixels


TextImage


ToFloat


ToGray


ToRGB


ToSepia


UnsharpMask


Vignetting


ZoomBlur

## Dual Transforms

## 3D Transforms

| Name | volume | mask3d | keypoints |
|---|---|---|---|
|

[CoarseDropout3D](/transform/CoarseDropout3D)[CubicSymmetry](/transform/CubicSymmetry)[GridShuffle3D](/transform/GridShuffle3D)[Pad3D](/transform/Pad3D)[PadIfNeeded3D](/transform/PadIfNeeded3D)[RandomCrop3D](/transform/RandomCrop3D)## Using AlbumentationsX in production?

AlbumentationsX is dual-licensed (AGPL / Commercial). Ship it in proprietary software with a commercial license — no source code disclosure required.

[Learn about licensing](https://albumentations.ai/pricing)