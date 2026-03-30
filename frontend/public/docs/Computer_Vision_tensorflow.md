# Tensorflow Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.tensorflow.org/lite/guide](https://www.tensorflow.org/lite/guide)



---

## Source: https://www.tensorflow.org/lite/guide

### LiteRT is Google's on-device framework for high-performance ML & GenAI deployment on edge platforms.

Efficient conversion, runtime, and optimization for on-device machine learning.

### Built on the battle-tested foundation of TensorFlow Lite

LiteRT isn't just new; it's the next generation of the world's most widely deployed machine learning runtime. It powers the apps you use every day, delivering low latency and high privacy on billions of devices.

## Trusted by the most critical Google apps

100K+ applications, billions of global users

## LiteRT highlights

### Cross platform ready

### Unleash genAI

### Simplified hardware acceleration

### Multi-framework support

## Deploy via LiteRT

### Obtain a model

Use .tflite pre-trained models or convert PyTorch, JAX or TensorFlow models to .tflite

### Optimize the model

Optionally Quantize the model

### Run

Pick desired accelerator and run on LiteRT

## Samples, models, and demo

###
[
See sample app
](https://developers.google.com/codelabs/litert-image-segmentation-android)

Tutorials show you how to use LiteRT with complete, end-to-end examples.

###
[
See genAI models
](https://huggingface.co/litert-community)

Pre-trained, out-of-the-box Gen AI models.

###
[
See demos - Google AI Edge Gallery App
](https://play.google.com/store/apps/details?id=com.google.ai.edge.gallery)

A gallery that showcases on-device ML/GenAI use cases

---

## Source: https://www.tensorflow.org/

## Get started with TensorFlow

TensorFlow makes it easy to create ML models that can run in any environment. Learn how to use the intuitive APIs through interactive code samples.

import tensorflow as tf mnist = tf.keras.datasets.mnist (x_train, y_train),(x_test, y_test) = mnist.load_data() x_train, x_test = x_train / 255.0, x_test / 255.0 model = tf.keras.models.Sequential([ tf.keras.layers.Flatten(input_shape=(28, 28)), tf.keras.layers.Dense(128, activation='relu'), tf.keras.layers.Dropout(0.2), tf.keras.layers.Dense(10, activation='softmax') ]) model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy']) model.fit(x_train, y_train, epochs=5) model.evaluate(x_test, y_test)

## Solve real-world problems with ML

Explore examples of how TensorFlow is used to advance research and build AI-powered applications.

[Catch up on the latest from the Web AI Summit]

Explore the latest advancements in running models client-side with speakers from Chrome, MediaPipe, Intel, Hugging Face, Microsoft, LangChain, and more.

[Analyze relational data using graph neural networks](https://blog.tensorflow.org/2024/02/graph-neural-networks-in-tensorflow.html)

GNNs can process complex relationships between objects, making them a powerful technique for traffic forecasting, medical discovery, and more.

[Build recommendation systems with reinforcement learning](https://blog.tensorflow.org/2023/10/simulated-spotify-listening-experiences-reinforcement-learning-tensorflow-tf-agents.html)

Learn how Spotify uses the TensorFlow ecosystem to design an extendable offline simulator and train RL Agents to generate playlists.

## What's new in TensorFlow

Read the latest announcements from the TensorFlow team and community.

## Explore the ecosystem

Discover production-tested tools to accelerate modeling, deployment, and other workflows.

-
Library

### TensorFlow.js

Train and run models directly in the browser using JavaScript or Node.js.

-
Library

### LiteRT

Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU.

-
API

### tf.data

Preprocess data and create input pipelines for ML models.

-
Library

### TFX

Create production ML pipelines and implement MLOps best practices.

-
API

### tf.keras

Create ML models with TensorFlow's high-level API.

-
Resource

### Kaggle Models

Find pre-trained models ready for fine-tuning and deployment.

-
Resource

### TensorFlow Datasets

Browse the collection of standard datasets for initial training and validation.

-
Tool

### TensorBoard

Visualize and track development of ML models.


Collaborate, find support, and share your projects by joining interest groups or attending developer events.

New to machine learning? Begin with TensorFlow's curated curriculums or browse the resource library of books, online courses, and videos.