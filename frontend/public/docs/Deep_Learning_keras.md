# Keras Documentation
> Scraped on: 2026-03-30 | Root Source: [https://keras.io/api/](https://keras.io/api/)



---

## Source: https://keras.io/api/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
Keras 3 API documentation
Models API
The Model class
The Sequential class
Model training APIs
Saving & serialization
Knowledge distillation
Layers API
The base Layer class
Layer activations
Layer weight initializers
Layer weight regularizers
Layer weight constraints
Core layers
Convolution layers
Pooling layers
Recurrent layers
Preprocessing layers
Normalization layers
Regularization layers
Attention layers
Reshaping layers
Merging layers
Activation layers
Backend-specific layers
Callbacks API
Base Callback class
ModelCheckpoint
BackupAndRestore
TensorBoard
EarlyStopping
LearningRateScheduler
ReduceLROnPlateau
RemoteMonitor
LambdaCallback
TerminateOnNaN
CSVLogger
ProgbarLogger
SwapEMAWeights
Ops API
The Operation class
NumPy ops
NN ops
Linear algebra ops
Core ops
Image ops
FFT ops
Einops ops
Math ops
Optimizers
SGD
RMSprop
Adam
AdamW
Adadelta
Adagrad
Adamax
Adafactor
Nadam
Ftrl
Lion
Lamb
Loss Scale Optimizer
Muon
Metrics
Base Metric class
Accuracy metrics
Probabilistic metrics
Regression metrics
Classification metrics based on True/False positives & negatives
Image segmentation metrics
Hinge metrics for "maximum-margin" classification
Metric wrappers and reduction metrics
Losses
Probabilistic losses
Regression losses
Hinge losses for "maximum-margin" classification
Data loading
Image data loading
Timeseries data loading
Text data loading
Audio data loading
Tree API
Tree utilities
Built-in small datasets
MNIST digits classification dataset
CIFAR10 small images classification dataset
CIFAR100 small images classification dataset
IMDB movie review sentiment classification dataset
Reuters newswire classification dataset
Fashion MNIST dataset, an alternative to MNIST
California Housing price regression dataset
Boston Housing price regression dataset
Keras Applications
Xception
EfficientNet B0 to B7
EfficientNetV2 B0 to B3 and S, M, L
ConvNeXt Tiny, Small, Base, Large, XLarge
VGG16 and VGG19
ResNet and ResNetV2
MobileNet, MobileNetV2, and MobileNetV3
DenseNet
NasNetLarge and NasNetMobile
InceptionV3
InceptionResNetV2
Mixed precision
Mixed precision policy API
Multi-device distribution
LayoutMap API
DataParallel API
ModelParallel API
Distribution utilities
RNG API
SeedGenerator class
Random operations
Quantizers
Quantizer classes
Quantizer utilities
Scope
Scope classes
Context Managers
Rematerialization
RematScope
Remat
Utilities
Experiment management utilities
Model plotting utilities
Structured data preprocessing utilities
Tensor utilities
Bounding boxes
Python & NumPy utilities
Bounding boxes utilities
Visualization utilities
Preprocessing utilities
Backend utilities
Scikit-Learn API wrappers
Keras configuration utilities
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities

---

## Source: https://keras.io/

Keras is a deep learning API designed for human beings, not machines. Keras focuses on debugging speed, code elegance & conciseness, maintainability, and deployability. When you choose Keras, your codebase is smaller, more readable, easier to iterate on.

```
inputs = keras.Input(shape=(32, 32, 3))
x = layers.Conv2D(32, 3, activation="relu")(inputs)
x = layers.Conv2D(64, 3, activation="relu")(x)
residual = x = layers.MaxPooling2D(3)(x)
x = layers.Conv2D(64, 3, padding="same")(x)
x = layers.Activation("relu")(x)
x = layers.Conv2D(64, 3, padding="same")(x)
x = layers.Activation("relu")(x)
x = x + residual
x = layers.Conv2D(64, 3, activation="relu")(x)
x = layers.GlobalAveragePooling2D()(x)
outputs = layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs, name="mini_resnet")
keras.utils.plot_model(model, "mini_resnet.png")
model.fit(dataset, epochs=10)
```


```
causal_lm = keras_hub.models.CausalLM.from_preset(
"gemma2_instruct_2b_en",
dtype="float16",
)
prompt = """<start_of_turn>user
Write python code to print the first 100 primes.
<end_of_turn>
<start_of_turn>model
"""
text_output = causal_lm.generate(prompt, max_length=512)
text_to_image = keras_hub.models.TextToImage.from_preset(
"stable_diffusion_3_medium",
dtype="float16",
)
prompt = "Astronaut in a jungle, detailed"
image_output = text_to_image.generate(prompt)
```


With its multi-backend approach, Keras gives you the freedom to work with JAX, TensorFlow, and PyTorch. Build models that can move seamlessly across these frameworks and leverage the strengths of each ecosystem.

```
inputs = keras.Input(shape=(28, 28, 1))
x = inputs
x = layers.Conv2D(16, 3, activation="relu")(x)
x = layers.Conv2D(32, 3, activation="relu")(x)
x = layers.MaxPooling2D(3)(x)
x = layers.Conv2D(32, 3, activation="relu")(x)
x = layers.Conv2D(16, 3, activation="relu")(x)
x = layers.GlobalMaxPooling2D()(x)
x = layers.Dropout(0.5)
outputs = layers.Dense(10)
model = keras.Model(inputs, outputs)
model.summary()
```


Starting from the beginning and learn how to build models using the functional building pattern.

```
model.compile(
optimizer="rmsprop",
loss="categorical_crossentropy",
metrics=["accuracy"],
)
history = model.fit(
x_train,
y_train,
batch_size=64,
epochs=2,
validation_data=(x_val, y_val),
)
```


Train and evaluate your model using model.fit(...).

```
class MLPBlock(keras.layers.Layer):
def __init__(self):
super().__init__()
self.dense_1 = layers.Dense(32)
self.dense_2 = layers.Dense(32)
self.dense_3 = layers.Dense(1)
def call(self, inputs):
x = self.dense_1(inputs)
x = keras.activations.relu(x)
x = self.dense_2(x)
x = keras.activations.relu(x)
return self.dense_3(x)
```


Learn how to customize your model via subclassing Keras layers.

The KerasHub library provides Keras 3 implementations of popular model architectures, paired with a collection of pretrained checkpoints available on Kaggle Models. Models can be used for both training and inference, on any of the TensorFlow, JAX, and PyTorch backends.

Take a look at our examples for doing image classification, object detection, video processing, and more.

We also have many guides for doing NLP including text classification, machine translation, and language modeling.

Get started with generative deep learning with our wealth of guides involving state-of-the-art diffusion models, GANs, and transformer models.

Keras is used by CERN, NASA, NIH, and many more scientific organizations around the world (and yes, Keras is used at the Large Hadron Collider). Keras is used by Waymo to power self-driving vehicles. Keras partners with Kaggle and HuggingFace to meet ML developers in the tools they use daily.

Sign up to our mailing list for regular updates and discussions about the Keras ecosystem. Listen in at our community meetings, and follow us on social media!

We welcome your code, ideas, and feedback as we continue to grow. Visit our roadmap, contribution guide or GitHub for more information.

---

## Source: https://keras.io/getting_started/

Are you a machine learning engineer looking for a Keras introduction one-pager?
Read our guide [Introduction to Keras for engineers](/getting_started/intro_to_keras_for_engineers/).

Want to learn more about Keras 3 and its capabilities? See the [Keras 3 launch announcement](/keras_3/).

Are you looking for detailed guides covering in-depth usage of different parts of the Keras API?
Read our [Keras developer guides](/guides/).

Are you looking for tutorials showing Keras in action across a wide range of use cases?
See the [Keras code examples](/examples/): over 150 well-explained notebooks demonstrating Keras best practices
in computer vision, natural language processing, and generative AI.

You can install Keras from PyPI via:

```
pip install --upgrade keras
```


You can check your local Keras version number via:

```
import keras
print(keras.__version__)
```


To use Keras 3, you will also need to install a backend framework – either JAX, TensorFlow, or PyTorch:

If you install TensorFlow 2.15, you should reinstall Keras 3 afterwards. The cause is that `tensorflow==2.15`

will overwrite your Keras installation with `keras==2.15`

.
This step is not necessary for TensorFlow versions 2.16 onwards as starting in TensorFlow 2.16, it will install Keras 3 by default.

KerasCV and KerasHub can be installed via pip:

```
pip install --upgrade keras-cv
pip install --upgrade keras-hub
pip install --upgrade keras
```


You can export the environment variable `KERAS_BACKEND`

or you can edit your local config file at `~/.keras/keras.json`

to configure your backend.
Available backend options are: `"jax"`

, `"tensorflow"`

, `"torch"`

. Example:

```
export KERAS_BACKEND="jax"
```


In Colab, you can do:

```
import os
os.environ["KERAS_BACKEND"] = "jax"
import keras
```


**Note:** The backend must be configured before importing Keras, and the backend cannot be changed after the package has been imported.

If you are running on Colab or Kaggle, the GPU should already be configured, with the correct CUDA version. Installing a newer version of CUDA on Colab or Kaggle is typically not possible. Even though pip installers exist, they rely on a pre-installed NVIDIA driver and there is no way to update the driver on Colab or Kaggle.

If you want to attempt to create a "universal environment" where any backend can use the GPU, we recommend following
[the dependency versions used by Colab](https://colab.sandbox.google.com/drive/13cpd3wCwEHpsmypY9o6XB6rXgBm5oSxu)
(which seeks to solve this exact problem). You can install the CUDA driver [from here](https://developer.nvidia.com/cuda-downloads),
then pip install backends by following their respective CUDA installation instructions:
[Installing JAX](https://jax.readthedocs.io/en/latest/installation.html),
[Installing TensorFlow](https://www.tensorflow.org/install),
[Installing PyTorch](https://pytorch.org/get-started/locally/)

This setup is recommended if you are a Keras contributor and are running Keras tests. It installs all backends but only gives GPU access to one backend at a time, avoiding potentially conflicting dependency requirements between backends. You can use the following backend-specific requirements files:

These install all CUDA-enabled dependencies via pip. They expect a NVIDIA driver to be preinstalled.
We recommend a clean python environment for each backend to avoid CUDA version mismatches.
As an example, here is how to create a JAX GPU environment with [Conda](https://docs.conda.io/en/latest/):

```
conda create -y -n keras-jax python=3.11
conda activate keras-jax
pip install -r requirements-jax-cuda.txt
pip install --upgrade keras
```


From TensorFlow 2.0 to TensorFlow 2.15 (included), doing `pip install tensorflow`

will also
install the corresponding version of Keras 2 – for instance, `pip install tensorflow==2.14.0`

will
install `keras==2.14.0`

. That version of Keras is then available via both `import keras`

and `from tensorflow import keras`

(the [ tf.keras](https://www.tensorflow.org/api_docs/python/tf/keras) namespace).

Starting with TensorFlow 2.16, doing `pip install tensorflow`

will install Keras 3. When you have TensorFlow >= 2.16
and Keras 3, then by default `from tensorflow import keras`

([ tf.keras](https://www.tensorflow.org/api_docs/python/tf/keras)) will be Keras 3.

Meanwhile, the legacy Keras 2 package is still being released regularly and is available on PyPI as `tf_keras`

(or equivalently `tf-keras`

– note that `-`

and `_`

are equivalent in PyPI package names).
To use it, you can install it via `pip install tf_keras`

then import it via `import tf_keras as keras`

.

Should you want [ tf.keras](https://www.tensorflow.org/api_docs/python/tf/keras) to stay on Keras 2 after upgrading to TensorFlow 2.16+, you can configure your TensorFlow installation
so that

`tf.keras`

`tf_keras`

. To achieve this:`tf_keras`

. Note that TensorFlow does not install it by default.`TF_USE_LEGACY_KERAS=1`

.There are several ways to export the environment variable:

`export TF_USE_LEGACY_KERAS=1`

before launching the Python interpreter.`export TF_USE_LEGACY_KERAS=1`

to your `.bashrc`

file. That way the variable will still be exported when you restart your shell.```
import os
os.environ["TF_USE_LEGACY_KERAS"] = "1"
```


These lines would need to be before any `import tensorflow`

statement.

The following Keras + JAX versions are compatible with each other:

`jax==0.4.20`

& `keras~=3.0`

The following Keras + TensorFlow versions are compatible with each other:

To use Keras 2:

`tensorflow~=2.13.0`

& `keras~=2.13.0`

`tensorflow~=2.14.0`

& `keras~=2.14.0`

`tensorflow~=2.15.0`

& `keras~=2.15.0`

To use Keras 3:

`tensorflow~=2.16.1`

& `keras~=3.0`

The following Keras + PyTorch versions are compatible with each other:

`torch~=2.1.0`

& `keras~=3.0`

---

## Source: https://keras.io/guides/

Our developer guides are deep-dives into specific topics such as layer subclassing, fine-tuning, or model saving. They're one of the best ways to become a Keras expert.

Most of our guides are written as Jupyter notebooks and can be run in one click in [Google Colab](https://colab.research.google.com/notebooks/welcome.ipynb),
a hosted notebook environment that requires no setup and runs in the cloud. Google Colab includes GPU and TPU runtimes.

`fit()`

with JAX`fit()`

with TensorFlow`fit()`

with PyTorch

---

## Source: https://keras.io/examples/

Our code examples are short (less than 300 lines of code), focused demonstrations of vertical deep learning workflows.

All of our examples are written as Jupyter notebooks and can be run in one click in [Google Colab](https://colab.research.google.com/notebooks/welcome.ipynb),
a hosted notebook environment that requires no setup and runs in the cloud. Google Colab includes GPU and TPU runtimes.

We welcome new code examples! Here are our rules:

New examples are added via Pull Requests to the [keras.io repository](https://github.com/keras-team/keras-io).
They must be submitted as a `.py`

file that follows a specific format. They are usually generated from Jupyter notebooks.
See the [ tutobooks documentation](https://github.com/keras-team/keras-io/blob/master/README.md) for more details.

If you would like to convert a Keras 2 example to Keras 3, please open a Pull Request to the [keras.io repository](https://github.com/keras-team/keras-io).

---

## Source: https://keras.io/api/models/

# Models API

There are three ways to create Keras models:

- The
[Sequential model](/guides/sequential_model), which is very straightforward (a simple list of layers),
but is limited to single-input, single-output stacks of layers (as the name gives away).
- The
[Functional API](/guides/functional_api), which is an easy-to-use, fully-featured API that supports arbitrary model architectures.
For most people and most use cases, this is what you should be using. This is the Keras "industry strength" model.
[Model subclassing](/guides/making_new_layers_and_models_via_subclassing), where you implement everything from scratch on your own.
Use this if you have complex, out-of-the-box research use cases.

## Models API overview

---

## Source: https://keras.io/api/layers/

Layers are the basic building blocks of neural networks in Keras.
A layer consists of a tensor-in tensor-out computation function (the layer's `call`

method)
and some state, held in TensorFlow variables (the layer's *weights*).

A Layer instance is callable, much like a function:

```
import keras
from keras import layers
layer = layers.Dense(32, activation='relu')
inputs = keras.random.uniform(shape=(10, 20))
outputs = layer(inputs)
```


Unlike a function, though, layers maintain a state, updated when the layer receives data
during training, and stored in `layer.weights`

:

```
>>> layer.weights
[<KerasVariable shape=(20, 32), dtype=float32, path=dense/kernel>,
<KerasVariable shape=(32,), dtype=float32, path=dense/bias>]
```


While Keras offers a wide range of built-in layers, they don't cover ever possible use case. Creating custom layers is very common, and very easy.

See the guide
[Making new layers and models via subclassing](/guides/making_new_layers_and_models_via_subclassing)
for an extensive overview, and refer to the documentation for [the base Layer class](base_layer).

---

## Source: https://keras.io/api/callbacks/

A callback is an object that can perform actions at various stages of training (e.g. at the start or end of an epoch, before or after a single batch, etc).

You can use callbacks to:

`fit()`

loopYou can pass a list of callbacks (as the keyword argument `callbacks`

) to the `.fit()`

method of a model:

```
my_callbacks = [
keras.callbacks.EarlyStopping(patience=2),
keras.callbacks.ModelCheckpoint(filepath='model.{epoch:02d}-{val_loss:.2f}.h5'),
keras.callbacks.TensorBoard(log_dir='./logs'),
]
model.fit(dataset, epochs=10, callbacks=my_callbacks)
```


The relevant methods of the callbacks will then be called at each stage of the training.

Creating new callbacks is a simple and powerful way to customize a training loop.
Learn more about creating new callbacks in the guide
[Writing your own Callbacks](/guides/writing_your_own_callbacks), and refer to
the documentation for [the base Callback class](base_callback).

---

## Source: https://keras.io/api/ops/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
The Operation class
NumPy ops
NN ops
Linear algebra ops
Core ops
Image ops
FFT ops
Einops ops
Math ops
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
The Operation class
NumPy ops
NN ops
Linear algebra ops
Core ops
Image ops
FFT ops
Einops ops
Math ops
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Ops API
Ops API
The Operation class
Operation class
NumPy ops
abs function
absolute function
add function
all function
amax function
amin function
angle function
any function
append function
arange function
arccos function
arccosh function
arcsin function
arcsinh function
arctan function
arctan2 function
arctanh function
argmax function
argmin function
argpartition function
argsort function
array function
array_split function
average function
bartlett function
bincount function
bitwise_and function
bitwise_invert function
bitwise_left_shift function
bitwise_not function
bitwise_or function
bitwise_right_shift function
bitwise_xor function
blackman function
broadcast_to function
cbrt function
ceil function
clip function
concatenate function
conj function
conjugate function
copy function
corrcoef function
correlate function
cos function
cosh function
count_nonzero function
cross function
cumprod function
cumsum function
deg2rad function
diag function
diagflat function
diagonal function
diff function
digitize function
divide function
divide_no_nan function
dot function
einsum function
empty function
empty_like function
equal function
exp function
exp2 function
expand_dims function
expm1 function
eye function
flip function
floor function
floor_divide function
full function
full_like function
gcd function
get_item function
greater function
greater_equal function
hamming function
hanning function
heaviside function
histogram function
hstack function
hypot function
identity function
imag function
inner function
isclose function
isfinite function
isinf function
isin function
isnan function
isneginf function
isposinf function
isreal function
kaiser function
kron function
lcm function
ldexp function
left_shift function
less function
less_equal function
linspace function
log function
log10 function
log1p function
log2 function
logaddexp function
logaddexp2 function
logical_and function
logical_not function
logical_or function
logical_xor function
logspace function
matmul function
max function
maximum function
mean function
median function
meshgrid function
min function
minimum function
mod function
moveaxis function
multiply function
nan_to_num function
ndim function
negative function
nonzero function
norm function
not_equal function
ones function
ones_like function
outer function
pad function
power function
prod function
quantile function
ravel function
real function
reciprocal function
repeat function
reshape function
right_shift function
roll function
rot90 function
round function
searchsorted function
select function
sign function
signbit function
sin function
sinh function
size function
slogdet function
sort function
split function
sqrt function
square function
squeeze function
stack function
std function
subtract function
sum function
swapaxes function
take function
take_along_axis function
tan function
tanh function
tensordot function
tile function
trace function
trapezoid function
transpose function
tri function
tril function
triu function
true_divide function
trunc function
unravel_index function
vander function
var function
vdot function
vectorize function
view function
vstack function
where function
zeros function
zeros_like function
NN ops
adaptive_average_pool function
adaptive_max_pool function
average_pool function
batch_normalization function
binary_crossentropy function
categorical_crossentropy function
celu function
conv function
conv_transpose function
ctc_decode function
ctc_loss function
depthwise_conv function
dot_product_attention function
elu function
gelu function
glu function
hard_sigmoid function
hard_shrink function
hard_silu function
hard_swish function
hard_tanh function
leaky_relu function
log_sigmoid function
log_softmax function
max_pool function
moments function
multi_hot function
normalize function
one_hot function
polar function
psnr function
relu function
relu6 function
selu function
separable_conv function
sigmoid function
silu function
soft_shrink function
softmax function
softplus function
softsign function
sparse_categorical_crossentropy function
sparse_plus function
sparse_sigmoid function
sparsemax function
squareplus function
swish function
tanh_shrink function
threshold function
unfold function
Linear algebra ops
cholesky function
det function
eig function
eigh function
inv function
jvp function
logdet function
lstsq function
lu_factor function
norm function
qr function
solve function
solve_triangular function
svd function
Core ops
associative_scan function
cast function
cond function
convert_to_numpy function
convert_to_tensor function
custom_gradient function
dtype function
erf function
erfinv function
extract_sequences function
fori_loop function
in_top_k function
is_tensor function
logsumexp function
map function
rsqrt function
saturate_cast function
scan function
scatter function
scatter_update function
segment_max function
segment_sum function
shape function
slice function
slice_update function
stop_gradient function
switch function
top_k function
unstack function
vectorized_map function
while_loop function
Image ops
affine_transform function
crop_images function
elastic_transform function
extract_patches function
gaussian_blur function
hsv_to_rgb function
map_coordinates function
pad_images function
perspective_transform function
resize function
rgb_to_grayscale function
rgb_to_hsv function
scale_and_translate function
FFT ops
fft function
fft2 function
ifft2 function
irfft function
istft function
rfft function
stft function
Einops ops
rearrange function
Math ops
view_as_complex function
view_as_real function
Ops API
The Operation class
NumPy ops
NN ops
Linear algebra ops
Core ops
Image ops
FFT ops
Einops ops
Math ops

---

## Source: https://keras.io/api/optimizers/

`compile()`

& `fit()`

An optimizer is one of the two arguments required for compiling a Keras model:

```
import keras
from keras import layers
model = keras.Sequential()
model.add(layers.Dense(64, kernel_initializer='uniform', input_shape=(10,)))
model.add(layers.Activation('softmax'))
opt = keras.optimizers.Adam(learning_rate=0.01)
model.compile(loss='categorical_crossentropy', optimizer=opt)
```


You can either instantiate an optimizer before passing it to `model.compile()`

, as in the above example,
or you can pass it by its string identifier. In the latter case, the default parameters for the optimizer will be used.

```
# pass optimizer by name: default parameters will be used
model.compile(loss='categorical_crossentropy', optimizer='adam')
```


You can use a [learning rate schedule](/api/optimizers/learning_rate_schedules) to modulate
how the learning rate of your optimizer changes over time:

```
lr_schedule = keras.optimizers.schedules.ExponentialDecay(
initial_learning_rate=1e-2,
decay_steps=10000,
decay_rate=0.9)
optimizer = keras.optimizers.SGD(learning_rate=lr_schedule)
```


Check out [the learning rate schedule API documentation](/api/optimizers/learning_rate_schedules) for a list of available schedules.

These methods and attributes are common to all Keras optimizers.

`Optimizer`

class```
keras.optimizers.Optimizer()
```


Abstract optimizer base class.

If you intend to create your own optimization algorithm, please inherit from this class and override the following methods:

`build`

: Create your optimizer-related variables, such as momentum
variables in the SGD optimizer.`update_step`

: Implement your optimizer's variable updating logic.`get_config`

: serialization of the optimizer.**Example**

```
class SGD(Optimizer):
def __init__(self, **kwargs):
super().__init__(**kwargs)
self.momentum = 0.9
def build(self, variables):
super().build(variables)
self.momentums = []
for variable in variables:
self.momentums.append(
self.add_variable_from_reference(
reference_variable=variable, name="momentum"
)
)
def update_step(self, gradient, variable, learning_rate):
learning_rate = ops.cast(learning_rate, variable.dtype)
gradient = ops.cast(gradient, variable.dtype)
m = self.momentums[self._get_variable_index(variable)]
self.assign(
m,
ops.subtract(
ops.multiply(m, ops.cast(self.momentum, variable.dtype)),
ops.multiply(gradient, learning_rate),
),
)
self.assign_add(variable, m)
def get_config(self):
config = super().get_config()
config.update(
{
"momentum": self.momentum,
"nesterov": self.nesterov,
}
)
return config
```


`apply_gradients`

method```
Optimizer.apply_gradients(grads_and_vars)
```


`variables`

property```
keras.optimizers.Optimizer.variables
```

---

## Source: https://keras.io/api/metrics/

A metric is a function that is used to judge the performance of your model.

Metric functions are similar to loss functions, except that the results from evaluating a metric are not used when training the model. Note that you may use any loss function as a metric.

`compile()`

& `fit()`

The `compile()`

method takes a `metrics`

argument, which is a list of metrics:

```
model.compile(
optimizer='adam',
loss='mean_squared_error',
metrics=[
metrics.MeanSquaredError(),
metrics.AUC(),
]
)
```


Metric values are displayed during `fit()`

and logged to the `History`

object returned
by `fit()`

. They are also returned by `model.evaluate()`

.

Note that the best way to monitor your metrics during training is via [TensorBoard](/api/callbacks/tensorboard).

To track metrics under a specific name, you can pass the `name`

argument
to the metric constructor:

```
model.compile(
optimizer='adam',
loss='mean_squared_error',
metrics=[
metrics.MeanSquaredError(name='my_mse'),
metrics.AUC(name='my_auc'),
]
)
```


All built-in metrics may also be passed via their string identifier (in this case, default constructor argument values are used, including a default metric name):

```
model.compile(
optimizer='adam',
loss='mean_squared_error',
metrics=[
'MeanSquaredError',
'AUC',
]
)
```


Unlike losses, metrics are stateful. You update their state using the `update_state()`

method,
and you query the scalar metric result using the `result()`

method:

```
m = keras.metrics.AUC()
m.update_state([0, 1, 1, 1], [0, 1, 0, 0])
print('Intermediate result:', float(m.result()))
m.update_state([1, 1, 1, 1], [0, 1, 1, 0])
print('Final result:', float(m.result()))
```


The internal state can be cleared via `metric.reset_states()`

.

Here's how you would use a metric as part of a simple custom training loop:

```
accuracy = keras.metrics.CategoricalAccuracy()
loss_fn = keras.losses.CategoricalCrossentropy(from_logits=True)
optimizer = keras.optimizers.Adam()
# Iterate over the batches of a dataset.
for step, (x, y) in enumerate(dataset):
with tf.GradientTape() as tape:
logits = model(x)
# Compute the loss value for this batch.
loss_value = loss_fn(y, logits)
# Update the state of the `accuracy` metric.
accuracy.update_state(y, logits)
# Update the weights of the model to minimize the loss value.
gradients = tape.gradient(loss_value, model.trainable_weights)
optimizer.apply_gradients(zip(gradients, model.trainable_weights))
# Logging the current accuracy value so far.
if step % 100 == 0:
print('Step:', step)
print('Total running accuracy so far: %.3f' % accuracy.result())
```


Much like loss functions, any callable with signature `metric_fn(y_true, y_pred)`

that returns an array of losses (one of sample in the input batch) can be passed to `compile()`

as a metric.
Note that sample weighting is automatically supported for any such metric.

Here's a simple example:

```
from keras import ops
def my_metric_fn(y_true, y_pred):
squared_difference = ops.square(y_true - y_pred)
return ops.mean(squared_difference, axis=-1) # Note the `axis=-1`
model.compile(optimizer='adam', loss='mean_squared_error', metrics=[my_metric_fn])
```


In this case, the scalar metric value you are tracking during training and evaluation
is the average of the per-batch metric values for all batches see during a given epoch
(or during a given call to `model.evaluate()`

).

`Metric`

(stateful)Not all metrics can be expressed via stateless callables, because metrics are evaluated for each batch during training and evaluation, but in some cases the average of the per-batch values is not what you are interested in.

Let's say that you want to compute AUC over a given evaluation dataset: the average of the per-batch AUC values isn't the same as the AUC over the entire dataset.

For such metrics, you're going to want to subclass the `Metric`

class,
which can maintain a state across batches. It's easy:

`__init__`

`y_true`

and `y_pred`

in `update_state()`

`result()`

`reset_states()`

Here's a simple example computing binary true positives:

```
class BinaryTruePositives(keras.metrics.Metric):
def __init__(self, name='binary_true_positives', **kwargs):
super().__init__(name=name, **kwargs)
self.true_positives = self.add_weight(name='tp', initializer='zeros')
def update_state(self, y_true, y_pred, sample_weight=None):
y_true = ops.cast(y_true, "bool")
y_pred = ops.cast(y_pred, "bool")
values = ops.logical_and(ops.equal(y_true, True), ops.equal(y_pred, True))
values = ops.cast(values, self.dtype)
if sample_weight is not None:
sample_weight = ops.cast(sample_weight, self.dtype)
values = values * sample_weight
self.true_positives.assign_add(ops.sum(values))
def result(self):
return self.true_positives
def reset_state(self):
self.true_positives.assign(0)
m = BinaryTruePositives()
m.update_state([0, 1, 1, 1], [0, 1, 0, 0])
print(f'Intermediate result: {m.result().numpy()}')
m.update_state([1, 1, 1, 1], [0, 1, 1, 0])
print(f'Intermediate result: {m.result().numpy()}')
```

---

## Source: https://keras.io/api/losses/

The purpose of loss functions is to compute the quantity that a model should seek to minimize during training.

Note that all losses are available both via a class handle and via a function handle.
The class handles enable you to pass configuration arguments to the constructor
(e.g.
`loss_fn = CategoricalCrossentropy(from_logits=True)`

),
and they perform reduction by default when used in a standalone way (see details below).

`Loss`

class```
keras.losses.Loss(name=None, reduction="sum_over_batch_size", dtype=None)
```


Loss base class.

This is the class to subclass in order to create new custom losses.

**Arguments**

`"sum_over_batch_size"`

. Supported options are
`"sum"`

, `"sum_over_batch_size"`

, `"mean"`

,
`"mean_with_sample_weight"`

or `None`

. `"sum"`

sums the loss,
`"sum_over_batch_size"`

and `"mean"`

sum the loss and divide by the
sample size, and `"mean_with_sample_weight"`

sums the loss and
divides by the sum of the sample weights. `"none"`

and `None`

perform no aggregation. Defaults to `"sum_over_batch_size"`

.`None`

, which
means using `keras.backend.floatx()`

. `keras.backend.floatx()`

is a
`"float32"`

unless set to different value
(via `keras.backend.set_floatx()`

). If a `keras.DTypePolicy`

is
provided, then the `compute_dtype`

will be utilized.To be implemented by subclasses:

`call()`

: Contains the logic for loss calculation using `y_true`

,
`y_pred`

.Example subclass implementation:

```
class MeanSquaredError(Loss):
def call(self, y_true, y_pred):
return ops.mean(ops.square(y_pred - y_true), axis=-1)
```


**Guides and examples using Loss**

`compile()`

& `fit()`

A loss function is one of the two arguments required for compiling a Keras model:

```
import keras
from keras import layers
model = keras.Sequential()
model.add(layers.Dense(64, kernel_initializer='uniform', input_shape=(10,)))
model.add(layers.Activation('softmax'))
loss_fn = keras.losses.SparseCategoricalCrossentropy()
model.compile(loss=loss_fn, optimizer='adam')
```


All built-in loss functions may also be passed via their string identifier:

```
# pass optimizer by name: default parameters will be used
model.compile(loss='sparse_categorical_crossentropy', optimizer='adam')
```


Loss functions are typically created by instantiating a loss class (e.g. [ keras.losses.SparseCategoricalCrossentropy](/api/losses/probabilistic_losses#sparsecategoricalcrossentropy-class)).
All losses are also provided as function handles (e.g.

`keras.losses.sparse_categorical_crossentropy`

).Using classes enables you to pass configuration arguments at instantiation time, e.g.:

```
loss_fn = keras.losses.SparseCategoricalCrossentropy(from_logits=True)
```


A loss is a callable with arguments `loss_fn(y_true, y_pred, sample_weight=None)`

:

`(batch_size, d0, ... dN)`

. For
sparse loss functions, such as sparse categorical crossentropy, the shape
should be `(batch_size, d0, ... dN-1)`

`(batch_size, d0, .. dN)`

.`sample_weight`

acts as reduction weighting
coefficient for the per-sample losses. If a scalar is provided, then the loss is
simply scaled by the given value. If `sample_weight`

is a tensor of size
`[batch_size]`

, then the total loss for each sample of the batch is
rescaled by the corresponding element in the `sample_weight`

vector. If
the shape of `sample_weight`

is `(batch_size, d0, ... dN-1)`

(or can be
broadcasted to this shape), then each loss element of `y_pred`

is scaled
by the corresponding value of `sample_weight`

. (Note on`dN-1`

: all loss
functions reduce by 1 dimension, usually `axis=-1`

.)By default, loss functions return one scalar loss value for each input sample in the batch dimension, e.g.

```
>>> from keras import ops
>>> keras.losses.mean_squared_error(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(2,), dtype=float32, numpy=array([1., 1.], dtype=float32)>
```


However, loss class instances feature a `reduction`

constructor argument,
which defaults to `"sum_over_batch_size"`

(i.e. average). Allowable values are
"sum_over_batch_size", "sum", and "none":

```
>>> loss_fn = keras.losses.MeanSquaredError(reduction='sum_over_batch_size')
>>> loss_fn(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(), dtype=float32, numpy=1.0>
```


```
>>> loss_fn = keras.losses.MeanSquaredError(reduction='sum')
>>> loss_fn(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(), dtype=float32, numpy=2.0>
```


```
>>> loss_fn = keras.losses.MeanSquaredError(reduction='none')
>>> loss_fn(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(2,), dtype=float32, numpy=array([1., 1.], dtype=float32)>
```


Note that this is an important difference between loss functions like `keras.losses.mean_squared_error`

and default loss class instances like [ keras.losses.MeanSquaredError](/api/losses/regression_losses#meansquarederror-class): the function version
does not perform reduction, but by default the class instance does.

```
>>> loss_fn = keras.losses.mean_squared_error
>>> loss_fn(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(2,), dtype=float32, numpy=array([1., 1.], dtype=float32)>
```


```
>>> loss_fn = keras.losses.MeanSquaredError()
>>> loss_fn(ops.ones((2, 2,)), ops.zeros((2, 2)))
<Array: shape=(), dtype=float32, numpy=1.0>
```


When using `fit()`

, this difference is irrelevant since reduction is handled by the framework.

Here's how you would use a loss class instance as part of a simple training loop:

```
loss_fn = keras.losses.CategoricalCrossentropy(from_logits=True)
optimizer = keras.optimizers.Adam()
# Iterate over the batches of a dataset.
for x, y in dataset:
with tf.GradientTape() as tape:
logits = model(x)
# Compute the loss value for this batch.
loss_value = loss_fn(y, logits)
# Update the weights of the model to minimize the loss value.
gradients = tape.gradient(loss_value, model.trainable_weights)
optimizer.apply_gradients(zip(gradients, model.trainable_weights))
```


Any callable with the signature `loss_fn(y_true, y_pred)`

that returns an array of losses (one of sample in the input batch) can be passed to `compile()`

as a loss.
Note that sample weighting is automatically supported for any such loss.

Here's a simple example:

```
from keras import ops
def my_loss_fn(y_true, y_pred):
squared_difference = ops.square(y_true - y_pred)
return ops.mean(squared_difference, axis=-1) # Note the `axis=-1`
model.compile(optimizer='adam', loss=my_loss_fn)
```


`add_loss()`

APILoss functions applied to the output of a model aren't the only way to create losses.

When writing the `call`

method of a custom layer or a subclassed model,
you may want to compute scalar quantities that you want to minimize during
training (e.g. regularization losses). You can use the `add_loss()`

layer method
to keep track of such loss terms.

Here's an example of a layer that adds a sparsity regularization loss based on the L2 norm of the inputs:

```
from keras import ops
class MyActivityRegularizer(keras.layers.Layer):
"""Layer that creates an activity sparsity regularization loss."""
def __init__(self, rate=1e-2):
super().__init__()
self.rate = rate
def call(self, inputs):
# We use `add_loss` to create a regularization loss
# that depends on the inputs.
self.add_loss(self.rate * ops.sum(ops.square(inputs)))
return inputs
```


Loss values added via `add_loss`

can be retrieved in the `.losses`

list property of any `Layer`

or `Model`

(they are recursively retrieved from every underlying layer):

```
from keras import layers
from keras import ops
class SparseMLP(layers.Layer):
"""Stack of Linear layers with a sparsity regularization loss."""
def __init__(self, output_dim):
super().__init__()
self.dense_1 = layers.Dense(32, activation=ops.relu)
self.regularization = MyActivityRegularizer(1e-2)
self.dense_2 = layers.Dense(output_dim)
def call(self, inputs):
x = self.dense_1(inputs)
x = self.regularization(x)
return self.dense_2(x)
mlp = SparseMLP(1)
y = mlp(ops.ones((10, 10)))
print(mlp.losses) # List containing one float32 scalar
```


These losses are cleared by the top-level layer at the start of each forward pass – they don't accumulate.
So `layer.losses`

always contain only the losses created during the last forward pass.
You would typically use these losses by summing them before computing your gradients when writing a training loop.

```
# Losses correspond to the *last* forward pass.
mlp = SparseMLP(1)
mlp(ops.ones((10, 10)))
assert len(mlp.losses) == 1
mlp(ops.ones((10, 10)))
assert len(mlp.losses) == 1 # No accumulation.
```


When using `model.fit()`

, such loss terms are handled automatically.

When writing a custom training loop, you should retrieve these terms
by hand from `model.losses`

, like this:

```
loss_fn = keras.losses.CategoricalCrossentropy(from_logits=True)
optimizer = keras.optimizers.Adam()
# Iterate over the batches of a dataset.
for x, y in dataset:
with tf.GradientTape() as tape:
# Forward pass.
logits = model(x)
# Loss value for this batch.
loss_value = loss_fn(y, logits)
# Add extra loss terms to the loss value.
loss_value += sum(model.losses)
# Update the weights of the model to minimize the loss value.
gradients = tape.gradient(loss_value, model.trainable_weights)
optimizer.apply_gradients(zip(gradients, model.trainable_weights))
```


See [the add_loss() documentation](/api/layers/base_layer/#add_loss-method) for more details.

---

## Source: https://keras.io/api/data_loading/

Keras data loading utilities, located in `keras.utils`

,
help you go from raw data on disk to a [ tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) object that can be
used to efficiently train a model.

These loading utilites can be combined with
[preprocessing layers](https://keras.io/api/layers/preprocessing_layers/) to
futher transform your input dataset before training.

Here's a quick example: let's say you have 10 folders, each containing 10,000 images from a different category, and you want to train a classifier that maps an image to its category.

Your training data folder would look like this:

```
training_data/
...class_a/
......a_image_1.jpg
......a_image_2.jpg
...class_b/
......b_image_1.jpg
......b_image_2.jpg
etc.
```


You may also have a validation data folder `validation_data/`

structured in the
same way.

You could simply do:

```
import keras
train_ds = keras.utils.image_dataset_from_directory(
directory='training_data/',
labels='inferred',
label_mode='categorical',
batch_size=32,
image_size=(256, 256))
validation_ds = keras.utils.image_dataset_from_directory(
directory='validation_data/',
labels='inferred',
label_mode='categorical',
batch_size=32,
image_size=(256, 256))
model = keras.applications.Xception(
weights=None, input_shape=(256, 256, 3), classes=10)
model.compile(optimizer='rmsprop', loss='categorical_crossentropy')
model.fit(train_ds, epochs=10, validation_data=validation_ds)
```

---

## Source: https://keras.io/api/tree/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Tree utilities
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Tree utilities
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Tree API
Tree API
Tree utilities
MAP_TO_NONE class
assert_same_paths function
assert_same_structure function
flatten function
flatten_with_path function
is_nested function
lists_to_tuples function
map_shape_structure function
map_structure function
map_structure_up_to function
pack_sequence_as function
traverse function
Tree API
Tree utilities

---

## Source: https://keras.io/api/datasets/

The `keras.datasets`

module provide a few toy datasets (already-vectorized, in Numpy format)
that can be used for debugging a model or creating simple code examples.

If you are looking for larger & more useful ready-to-use datasets, take a look at
[TensorFlow Datasets](https://github.com/tensorflow/datasets).

---

## Source: https://keras.io/api/applications/

Keras Applications are deep learning models that are made available alongside pre-trained weights. These models can be used for prediction, feature extraction, and fine-tuning.

Weights are downloaded automatically when instantiating a model. They are stored at `~/.keras/models/`

.

Upon instantiation, the models will be built according to the image data format set in your Keras configuration file at `~/.keras/keras.json`

.
For instance, if you have set `image_data_format=channels_last`

,
then any model loaded from this repository will get built according to the data format convention "Height-Width-Depth".

| Model | Size (MB) | Top-1 Accuracy | Top-5 Accuracy | Parameters | Depth | Time (ms) per inference step (CPU) | Time (ms) per inference step (GPU) |
|---|---|---|---|---|---|---|---|
|

The top-1 and top-5 accuracy refers to the model's performance on the ImageNet validation dataset.

Depth refers to the topological depth of the network. This includes activation layers, batch normalization layers etc.

Time per inference step is the average of 30 batches and 10 repetitions.

Depth counts the number of layers with parameters.

```
import keras
from keras.applications.resnet50 import ResNet50
from keras.applications.resnet50 import preprocess_input, decode_predictions
import numpy as np
model = ResNet50(weights='imagenet')
img_path = 'elephant.jpg'
img = keras.utils.load_img(img_path, target_size=(224, 224))
x = keras.utils.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
preds = model.predict(x)
# decode the results into a list of tuples (class, description, probability)
# (one such list for each sample in the batch)
print('Predicted:', decode_predictions(preds, top=3)[0])
# Predicted: [(u'n02504013', u'Indian_elephant', 0.82658225), (u'n01871265', u'tusker', 0.1122357), (u'n02504458', u'African_elephant', 0.061040461)]
```


```
import keras
from keras.applications.vgg16 import VGG16
from keras.applications.vgg16 import preprocess_input
import numpy as np
model = VGG16(weights='imagenet', include_top=False)
img_path = 'elephant.jpg'
img = keras.utils.load_img(img_path, target_size=(224, 224))
x = keras.utils.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
features = model.predict(x)
```


```
from keras.applications.vgg19 import VGG19
from keras.applications.vgg19 import preprocess_input
from keras.models import Model
import numpy as np
base_model = VGG19(weights='imagenet')
model = Model(inputs=base_model.input, outputs=base_model.get_layer('block4_pool').output)
img_path = 'elephant.jpg'
img = keras.utils.load_img(img_path, target_size=(224, 224))
x = keras.utils.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
block4_pool_features = model.predict(x)
```


```
from keras.applications.inception_v3 import InceptionV3
from keras.models import Model
from keras.layers import Dense, GlobalAveragePooling2D
# create the base pre-trained model
base_model = InceptionV3(weights='imagenet', include_top=False)
# add a global spatial average pooling layer
x = base_model.output
x = GlobalAveragePooling2D()(x)
# let's add a fully-connected layer
x = Dense(1024, activation='relu')(x)
# and a logistic layer -- let's say we have 200 classes
predictions = Dense(200, activation='softmax')(x)
# this is the model we will train
model = Model(inputs=base_model.input, outputs=predictions)
# first: train only the top layers (which were randomly initialized)
# i.e. freeze all convolutional InceptionV3 layers
for layer in base_model.layers:
layer.trainable = False
# compile the model (should be done *after* setting layers to non-trainable)
model.compile(optimizer='rmsprop', loss='categorical_crossentropy')
# train the model on the new data for a few epochs
model.fit(...)
# at this point, the top layers are well trained and we can start fine-tuning
# convolutional layers from inception V3. We will freeze the bottom N layers
# and train the remaining top layers.
# let's visualize layer names and layer indices to see how many layers
# we should freeze:
for i, layer in enumerate(base_model.layers):
print(i, layer.name)
# we chose to train the top 2 inception blocks, i.e. we will freeze
# the first 249 layers and unfreeze the rest:
for layer in model.layers[:249]:
layer.trainable = False
for layer in model.layers[249:]:
layer.trainable = True
# we need to recompile the model for these modifications to take effect
# we use SGD with a low learning rate
from keras.optimizers import SGD
model.compile(optimizer=SGD(lr=0.0001, momentum=0.9), loss='categorical_crossentropy')
# we train our model again (this time fine-tuning the top 2 inception blocks
# alongside the top Dense layers
model.fit(...)
```


```
from keras.applications.inception_v3 import InceptionV3
from keras.layers import Input
# this could also be the output a different Keras model or layer
input_tensor = Input(shape=(224, 224, 3))
model = InceptionV3(input_tensor=input_tensor, weights='imagenet', include_top=True)
```

---

## Source: https://keras.io/api/mixed_precision/

Mixed precision training is the use of lower-precision operations (`float16`

and `bfloat16`

) in a model
during training to make it run faster and use less memory.
Using mixed precision can improve performance by more than 3 times on modern GPUs and 60% on TPUs.

Today, most models use the `float32`

dtype, which takes 32 bits of memory.
However, there are two lower-precision dtypes, `float16`

and `bfloat16`

,
each which take 16 bits of memory instead. Modern accelerators like Google TPUs and NVIDIA GPUs
can run operations faster in the 16-bit dtypes,
as they have specialized hardware to run 16-bit computations and 16-bit dtypes can be read from memory faster.
Therefore, these lower-precision dtypes should be used whenever possible on those devices.

However, variables storage (as well as certain sensitive computations) should still be in `float32`

to preserve numerical stability. By using 16-bit precision whenever possible and keeping certain critical
parts of the model in `float32`

, the model will run faster,
while training as well as when using 32-bit precision.

The precision policy used by Keras layers or models is controled by a `keras.mixed_precision.DTypePolicy`

instance.
Each layer has its own `DTypePolicy`

. You can either set it on an individual layer via the `dtype`

argument
(e.g. `MyLayer(..., dtype="mixed_float16")`

), or you can set a global value to be used by all layers by
default, via the utility `keras.mixed_precision.set_global_policy`

.

Typically, to start using mixed precision on GPU, you would simply call `keras.mixed_precision.set_global_policy("mixed_float16")`

at the start of your program. On TPU, you would call `keras.mixed_precision.set_global_policy("mixed_bfloat16")`

.

While mixed precision will run on most hardware, it will only speed up models on recent NVIDIA GPUs and Google TPUs. NVIDIA GPUs support using a mix of float16 and float32, while TPUs support a mix of bfloat16 and float32.

Among NVIDIA GPUs, those with compute capability 7.0 or higher will see the greatest performance benefit
from mixed precision because they have special hardware units, called Tensor Cores,
to accelerate float16 matrix multiplications and convolutions. Older GPUs offer no math
performance benefit for using mixed precision, however memory and bandwidth savings can enable some speedups.
You can look up the compute capability for your GPU at NVIDIA's [CUDA GPU web page](https://developer.nvidia.com/cuda-gpus).
Examples of GPUs that will benefit most from mixed precision include RTX GPUs, the V100, and the A100.

Even on CPUs and older GPUs, where no speedup is expected, mixed precision APIs can still be used for unit testing, debugging, or just to try out the API. On CPUs, mixed precision will run significantly slower, however.

You can check your GPU type with the following command:

```
nvidia-smi -L
```

---

## Source: https://keras.io/api/distribution/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
LayoutMap API
DataParallel API
ModelParallel API
Distribution utilities
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
LayoutMap API
DataParallel API
ModelParallel API
Distribution utilities
RNG API
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Multi-device distribution
Multi-device distribution
LayoutMap API
LayoutMap class
DeviceMesh class
TensorLayout class
distribute_tensor function
DataParallel API
DataParallel class
ModelParallel API
ModelParallel class
Distribution utilities
set_distribution function
distribution function
list_devices function
initialize function
get_device_count function
Multi-device distribution
LayoutMap API
DataParallel API
ModelParallel API
Distribution utilities

---

## Source: https://keras.io/api/random/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
SeedGenerator class
Random operations
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
SeedGenerator class
Random operations
Quantizers
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ RNG API
RNG API
SeedGenerator class
SeedGenerator class
Random operations
beta function
binomial function
categorical function
dropout function
gamma function
normal function
randint function
shuffle function
truncated_normal function
uniform function
RNG API
SeedGenerator class
Random operations

---

## Source: https://keras.io/api/quantizers/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Quantizer classes
Quantizer utilities
Scope
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Quantizer classes
Quantizer utilities
Scope
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Quantizers
Quantizers
Quantizer classes
Quantizer class
AbsMaxQuantizer class
QuantizationConfig class
Int8QuantizationConfig class
Int4QuantizationConfig class
Float8QuantizationConfig class
GPTQConfig class
Quantizer utilities
abs_max_quantize function
compute_float8_amax_history function
compute_float8_scale function
fake_quant_with_min_max_vars function
pack_int4 function
quantize_and_dequantize function
unpack_int4 function
[source]
Quantizer
class
keras
.
Quantizer
(
output_dtype
=
"int8"
)
Quantizers
Quantizer classes
Quantizer utilities
Quantizer
class

---

## Source: https://keras.io/api/scope/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Scope classes
Context Managers
Rematerialization
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Scope classes
Context Managers
Rematerialization
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Scope
Scope
Scope classes
SymbolicScope class
StatelessScope class
Context Managers
device function
name_scope class
Scope
Scope classes
Context Managers

---

## Source: https://keras.io/api/rematerialization/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
RematScope
Remat
Utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
RematScope
Remat
Utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Rematerialization
Rematerialization
RematScope
Remat

---

## Source: https://keras.io/api/utils/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Experiment management utilities
Model plotting utilities
Structured data preprocessing utilities
Tensor utilities
Bounding boxes
Python & NumPy utilities
Bounding boxes utilities
Visualization utilities
Preprocessing utilities
Backend utilities
Scikit-Learn API wrappers
Keras configuration utilities
Keras 2 API documentation
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Models API
Layers API
Callbacks API
Ops API
Optimizers
Metrics
Losses
Data loading
Tree API
Built-in small datasets
Keras Applications
Mixed precision
Multi-device distribution
RNG API
Quantizers
Scope
Rematerialization
Utilities
Experiment management utilities
Model plotting utilities
Structured data preprocessing utilities
Tensor utilities
Bounding boxes
Python & NumPy utilities
Bounding boxes utilities
Visualization utilities
Preprocessing utilities
Backend utilities
Scikit-Learn API wrappers
Keras configuration utilities
Keras 2 API documentation
►
Keras 3 API documentation
/ Utilities
Utilities
Experiment management utilities
Config class
Model plotting utilities
plot_model function
model_to_dot function
Structured data preprocessing utilities
FeatureSpace class
Tensor utilities
get_source_inputs function
is_keras_tensor function
is_float_dtype function
is_int_dtype function
standardize_dtype function
Bounding boxes
affine_transform function
clip_to_image_size function
compute_ciou function
compute_iou function
convert_format function
crop function
decode_deltas_to_boxes function
encode_box_to_deltas function
pad function
Python & NumPy utilities
set_random_seed function
split_dataset function
pack_x_y_sample_weight function
unpack_x_y_sample_weight function
get_file function
Progbar class
to_categorical function
normalize function
Bounding boxes utilities
affine_transform function
clip_to_image_size function
compute_ciou function
compute_iou function
convert_format function
crop function
decode_deltas_to_boxes function
encode_box_to_deltas function
pad function
Visualization utilities
draw_bounding_boxes function
draw_segmentation_masks function
plot_bounding_box_gallery function
plot_image_gallery function
plot_segmentation_mask_gallery function
Preprocessing utilities
smart_resize function
load_img function
save_img function
PyDataset class
Backend utilities
get_uid function
result_type function
Scikit-Learn API wrappers
SKLearnClassifier class
SKLearnRegressor class
SKLearnTransformer class
Keras configuration utilities
version function
clear_session function
enable_traceback_filtering function
disable_traceback_filtering function
is_traceback_filtering_enabled function
enable_interactive_logging function
disable_interactive_logging function
is_interactive_logging_enabled function
enable_unsafe_deserialization function
floatx function
set_floatx function
image_data_format function
set_image_data_format function
epsilon function
set_epsilon function
backend function
set_backend function
enable_flash_attention function
disable_flash_attention function
is_flash_attention_enabled function
is_nnx_enabled function
max_epochs function
set_max_epochs function
max_steps_per_epoch function
set_max_steps_per_epoch function
Utilities
Experiment management utilities
Model plotting utilities
Structured data preprocessing utilities
Tensor utilities
Bounding boxes
Python & NumPy utilities
Bounding boxes utilities
Visualization utilities
Preprocessing utilities
Backend utilities
Scikit-Learn API wrappers
Keras configuration utilities

---

## Source: https://keras.io/2/api/

None
Getting started
Developer guides
Code examples
Keras 3 API documentation
Keras 2 API documentation
Models API
Layers API
Callbacks API
Optimizers
Metrics
Losses
Data loading
Built-in small datasets
Keras Applications
Mixed precision
Utilities
KerasTuner: Hyperparam Tuning
KerasHub: Pretrained Models
KerasRS
Get started
Guides
API
Examples
Keras Hub
Keras RS
Keras Tuner
Keras 3 API documentation
Keras 2 API documentation
Models API
Layers API
Callbacks API
Optimizers
Metrics
Losses
Data loading
Built-in small datasets
Keras Applications
Mixed precision
Utilities
►
Keras 2 API documentation
Keras 2 API documentation
Models API
The Model class
The Sequential class
Model training APIs
Saving & serialization
Layers API
The base Layer class
Layer activations
Layer weight initializers
Layer weight regularizers
Layer weight constraints
Core layers
Convolution layers
Pooling layers
Recurrent layers
Preprocessing layers
Normalization layers
Regularization layers
Attention layers
Reshaping layers
Merging layers
Activation layers
Callbacks API
Base Callback class
ModelCheckpoint
BackupAndRestore
TensorBoard
EarlyStopping
LearningRateScheduler
ReduceLROnPlateau
RemoteMonitor
LambdaCallback
TerminateOnNaN
CSVLogger
ProgbarLogger
Optimizers
SGD
RMSprop
Adam
AdamW
Adadelta
Adagrad
Adamax
Adafactor
Nadam
Ftrl
Metrics
Accuracy metrics
Probabilistic metrics
Regression metrics
Classification metrics based on True/False positives & negatives
Image segmentation metrics
Hinge metrics for "maximum-margin" classification
Losses
Probabilistic losses
Regression losses
Hinge losses for "maximum-margin" classification
Data loading
Image data loading
Timeseries data loading
Text data loading
Audio data loading
Built-in small datasets
MNIST digits classification dataset
CIFAR10 small images classification dataset
CIFAR100 small images classification dataset
IMDB movie review sentiment classification dataset
Reuters newswire classification dataset
Fashion MNIST dataset, an alternative to MNIST
Boston Housing price regression dataset
Keras Applications
Xception
EfficientNet B0 to B7
EfficientNetV2 B0 to B3 and S, M, L
ConvNeXt Tiny, Small, Base, Large, XLarge
VGG16 and VGG19
ResNet and ResNetV2
MobileNet, MobileNetV2, and MobileNetV3
DenseNet
NasNetLarge and NasNetMobile
InceptionV3
InceptionResNetV2
Mixed precision
Mixed precision policy API
LossScaleOptimizer
Utilities
Model plotting utilities
Structured data preprocessing utilities
Python & NumPy utilities
Backend utilities
Keras 2 API documentation
Models API
Layers API
Callbacks API
Optimizers
Metrics
Losses
Data loading
Built-in small datasets
Keras Applications
Mixed precision
Utilities

---

## Source: https://keras.io/keras_tuner/

KerasTuner is an easy-to-use, scalable hyperparameter optimization framework that solves the pain points of hyperparameter search. Easily configure your search space with a define-by-run syntax, then leverage one of the available search algorithms to find the best hyperparameter values for your models. KerasTuner comes with Bayesian Optimization, Hyperband, and Random Search algorithms built-in, and is also designed to be easy for researchers to extend in order to experiment with new search algorithms.

Install the latest release:

```
pip install keras-tuner --upgrade
```


You can also check out other versions in our
[GitHub repository](https://github.com/keras-team/keras-tuner).

Import KerasTuner and TensorFlow:

```
import keras_tuner
import keras
```


Write a function that creates and returns a Keras model.
Use the `hp`

argument to define the hyperparameters during model creation.

```
def build_model(hp):
model = keras.Sequential()
model.add(keras.layers.Dense(
hp.Choice('units', [8, 16, 32]),
activation='relu'))
model.add(keras.layers.Dense(1, activation='relu'))
model.compile(loss='mse')
return model
```


Initialize a tuner (here, `RandomSearch`

).
We use `objective`

to specify the objective to select the best models,
and we use `max_trials`

to specify the number of different models to try.

```
tuner = keras_tuner.RandomSearch(
build_model,
objective='val_loss',
max_trials=5)
```


Start the search and get the best model:

```
tuner.search(x_train, y_train, epochs=5, validation_data=(x_val, y_val))
best_model = tuner.get_best_models()[0]
```


To learn more about KerasTuner, check out the
[getting stated guide](https://keras.io/guides/keras_tuner/getting_started/).

If KerasTuner helps your research, we appreciate your citations. Here is the BibTeX entry:

```
@misc{omalley2019kerastuner,
title = {KerasTuner},
author = {O'Malley, Tom and Bursztein, Elie and Long, James and Chollet, Fran\c{c}ois and Jin, Haifeng and Invernizzi, Luca and others},
year = 2019,
howpublished = {\url{https://github.com/keras-team/keras-tuner}}
}
```

---

## Source: https://keras.io/keras_hub/

**KerasHub** is a pretrained modeling library that aims to be simple, flexible,
and fast. The library provides [Keras 3](https://keras.io/keras_3/)
implementations of popular model architectures, paired with a collection of
pretrained checkpoints available on [Kaggle Models](https://kaggle.com/models/).
Models can be used for both training and inference, on any of the TensorFlow,
Jax, and Torch backends.

KerasHub is an extension of the core Keras API; KerasHub components are provided
as `keras.layers.Layer`

and [ keras.Model](/api/models/model#model-class) implementations. If you are familiar
with Keras, congratulations! You already understand most of KerasHub.

To install the latest KerasHub release with Keras 3, simply run:

```
pip install --upgrade keras-hub
```


To install the latest nightly changes for both KerasHub and Keras, you can use our nightly package.

```
pip install --upgrade keras-hub-nightly
```


Currently, installing KerasHub will always pull in TensorFlow for use of the
[ tf.data](https://www.tensorflow.org/api_docs/python/tf/data) API for preprocessing. When pre-processing with

`tf.data`

Visit the [core Keras getting started page](https://keras.io/getting_started/)
for more information on installing Keras 3, accelerator support, and
compatibility with different frameworks.

Choose a backend:

```
import os
os.environ["KERAS_BACKEND"] = "jax" # Or "tensorflow" or "torch"!
```


Import KerasHub and other libraries:

```
import keras
import keras_hub
import numpy as np
import tensorflow_datasets as tfds
```


Load a resnet model and use it to predict a label for an image:

```
classifier = keras_hub.models.ImageClassifier.from_preset(
"resnet_50_imagenet",
activation="softmax",
)
url = "https://upload.wikimedia.org/wikipedia/commons/a/aa/California_quail.jpg"
path = keras.utils.get_file(origin=url)
image = keras.utils.load_img(path)
preds = classifier.predict(np.array([image]))
print(keras_hub.utils.decode_imagenet_predictions(preds))
```


Load a Bert model and fine-tune it on IMDb movie reviews:

```
classifier = keras_hub.models.BertClassifier.from_preset(
"bert_base_en_uncased",
activation="softmax",
num_classes=2,
)
imdb_train, imdb_test = tfds.load(
"imdb_reviews",
split=["train", "test"],
as_supervised=True,
batch_size=16,
)
classifier.fit(imdb_train, validation_data=imdb_test)
preds = classifier.predict(["What an amazing movie!", "A total waste of time."])
print(preds)
```


We follow [Semantic Versioning](https://semver.org/), and plan to
provide backwards compatibility guarantees both for code and saved models built
with our components. While we continue with pre-release `0.y.z`

development, we
may break compatibility at any time and APIs should not be consider stable.

KerasHub provides access to pre-trained models via the `keras_hub.models`

API.
These pre-trained models are provided on an "as is" basis, without warranties
or conditions of any kind.

If KerasHub helps your research, we appreciate your citations. Here is the BibTeX entry:

```
@misc{kerashub2024,
title={KerasHub},
author={Watson, Matthew, and Chollet, Fran\c{c}ois and Sreepathihalli,
Divyashree, and Saadat, Samaneh and Sampath, Ramesh, and Rasskin, Gabriel and
and Zhu, Scott and Singh, Varun and Wood, Luke and Tan, Zhenyu and Stenbit,
Ian and Qian, Chen, and Bischof, Jonathan and others},
year={2024},
howpublished={\url{https://github.com/keras-team/keras-hub}},
}
```

---

## Source: https://keras.io/keras_rs/

Keras Recommenders is a library for building recommender systems on top of Keras 3. Keras Recommenders works natively with TensorFlow, JAX, or PyTorch. It provides a collection of building blocks which help with the full workflow of creating a recommender system. As it's built on Keras 3, models can be trained and serialized in any framework and re-used in another without costly migrations.

This library is an extension of the core Keras API; all high-level modules receive that same level of polish as core Keras. If you are familiar with Keras, congratulations! You already understand most of Keras Recommenders.

Keras Recommenders is available on PyPI as `keras-rs`

:

```
pip install keras-rs
```


To try out the latest version of Keras Recommenders, you can use our nightly package:

```
pip install keras-rs-nightly
```


Read [Getting started with Keras](/getting_started/) for more
information on installing Keras 3 and compatibility with different frameworks.

Choose a backend:

```
import os
os.environ["KERAS_BACKEND"] = "jax" # Or "tensorflow" or "torch"!
```


Import KerasRS and other libraries:

```
import keras
import keras_rs
import numpy as np
```


Define a simple model using the `FeatureCross`

layer:

```
vocabulary_size = 32
embedding_dim = 6
inputs = keras.Input(shape=(), name='indices', dtype="int32")
x0 = keras.layers.Embedding(
input_dim=vocabulary_size,
output_dim=embedding_dim
)(inputs)
x1 = keras_rs.layers.FeatureCross()(x0, x0)
x2 = keras_rs.layers.FeatureCross()(x0, x1)
output = keras.layers.Dense(units=10)(x2)
model = keras.Model(inputs, output)
```


Compile the model:

```
model.compile(
loss=keras.losses.MeanSquaredError(),
optimizer=keras.optimizers.Adam(learning_rate=3e-4)
)
```


Call `model.fit()`

on dummy data:

```
batch_size = 2
x = np.random.randint(0, vocabulary_size, size=(batch_size,))
y = np.random.random(size=(batch_size,))
model.fit(x, y=y)
```


If your task is to rank items in a list, you can make use of the ranking losses and metrics which KerasRS provides. Below, we use the pairwise hinge loss and track the nDCG metric:

```
model.compile(
loss=keras_rs.losses.PairwiseHingeLoss(),
metrics=[keras_rs.metrics.NDCG()],
optimizer=keras.optimizers.Adam(learning_rate=3e-4),
)
```


If you have Keras 3 installed in your environment (see installation above), you
can use Keras Recommenders with any of JAX, TensorFlow and PyTorch. To do so,
set the `KERAS_BACKEND`

environment variable. For example:

```
export KERAS_BACKEND=jax
```


Or in Colab, with:

```
import os
os.environ["KERAS_BACKEND"] = "jax"
import keras_rs
```


We follow [Semantic Versioning](https://semver.org/), and plan to provide
backwards compatibility guarantees both for code and saved models built with our
components. While we continue with pre-release `0.y.z`

development, we may break
compatibility at any time and APIs should not be considered stable.

If Keras Recommenders helps your research, we appreciate your citations. Here is the BibTeX entry:

```
@misc{kerasrecommenders2024,
title={KerasRecommenders},
author={Hertschuh, Fabien and Chollet, Fran\c{c}ois and Sharma, Abheesht and others},
year={2024},
howpublished={\url{https://github.com/keras-team/keras-rs}},
}
```

---

## Source: https://keras.io/api/models/model

`Model`

class```
keras.Model()
```


A model grouping layers into an object with training/inference features.

There are three ways to instantiate a `Model`

:

You start from `Input`

,
you chain layer calls to specify the model's forward pass,
and finally, you create your model from inputs and outputs:

```
inputs = keras.Input(shape=(37,))
x = keras.layers.Dense(32, activation="relu")(inputs)
outputs = keras.layers.Dense(5, activation="softmax")(x)
model = keras.Model(inputs=inputs, outputs=outputs)
```


Note: Only dicts, lists, and tuples of input tensors are supported. Nested inputs are not supported (e.g. lists of list or dicts of dict).

A new Functional API model can also be created by using the intermediate tensors. This enables you to quickly extract sub-components of the model.

**Example**

```
inputs = keras.Input(shape=(None, None, 3))
processed = keras.layers.RandomCrop(width=128, height=128)(inputs)
conv = keras.layers.Conv2D(filters=32, kernel_size=3)(processed)
pooling = keras.layers.GlobalAveragePooling2D()(conv)
feature = keras.layers.Dense(10)(pooling)
full_model = keras.Model(inputs, feature)
backbone = keras.Model(processed, conv)
activations = keras.Model(conv, feature)
```


Note that the `backbone`

and `activations`

models are not
created with [ keras.Input](/api/layers/core_layers/input#input-function) objects, but with the tensors that originate
from

`keras.Input`

`full_model`

, and
use `backbone`

or `activations`

to do feature extraction.
The inputs and outputs of the model can be nested structures of tensors as
well, and the created models are standard Functional API models that support
all the existing APIs.`Model`

classIn that case, you should define your
layers in `__init__()`

and you should implement the model's forward pass
in `call()`

.

```
class MyModel(keras.Model):
def __init__(self):
super().__init__()
self.dense1 = keras.layers.Dense(32, activation="relu")
self.dense2 = keras.layers.Dense(5, activation="softmax")
def call(self, inputs):
x = self.dense1(inputs)
return self.dense2(x)
model = MyModel()
```


If you subclass `Model`

, you can optionally have
a `training`

argument (boolean) in `call()`

, which you can use to specify
a different behavior in training and inference:

```
class MyModel(keras.Model):
def __init__(self):
super().__init__()
self.dense1 = keras.layers.Dense(32, activation="relu")
self.dense2 = keras.layers.Dense(5, activation="softmax")
self.dropout = keras.layers.Dropout(0.5)
def call(self, inputs, training=False):
x = self.dense1(inputs)
x = self.dropout(x, training=training)
return self.dense2(x)
model = MyModel()
```


Once the model is created, you can config the model with losses and metrics
with `model.compile()`

, train the model with `model.fit()`

, or use the model
to do prediction with `model.predict()`

.

`Sequential`

classIn addition, [ keras.Sequential](/api/models/sequential#sequential-class) is a special case of model where
the model is purely a stack of single-input, single-output layers.

```
model = keras.Sequential([
keras.Input(shape=(None, None, 3)),
keras.layers.Conv2D(filters=32, kernel_size=3),
])
```


**Guides and examples using Model**

`fit()`

with JAX`fit()`

with TensorFlow`fit()`

with PyTorch`KerasTensor`

class```
keras.KerasTensor(
shape,
dtype="float32",
sparse=False,
ragged=False,
record_history=True,
name=None,
**kwargs
)
```


Symbolic tensor – encapsulates a shape and a dtype.

You can use `KerasTensor`

instances to build computation
graphs of Keras operations, such as `keras.Function`

objects or Functional `keras.models.Model`

objects.

**Example**

```
>>> x = keras.KerasTensor(shape=(3, 4), dtype="float32")
>>> x.shape
(3, 4)
>>> x.dtype
float32
```


Calling a Keras operation (including a layer or a model)
on a `KerasTensor`

instance will return another `KerasTensor`

instance with the appropriate shape and dtype. This is
called a "symbolic call" (since there is no actual data
involved). The computation of the correct output shape and
dtype is called "static shape inference".

`summary`

method```
Model.summary(
line_length=None,
positions=None,
print_fn=None,
expand_nested=False,
show_trainable=False,
layer_range=None,
)
```


Prints a string summary of the network.

**Arguments**

`[0.3, 0.6, 0.70, 1.]`

. Defaults to `None`

.`stdout`

.
If `stdout`

doesn't work in your environment, change to `print`

.
It will be called on each line of the summary.
You can set it to a custom function
in order to capture the string summary.`False`

.`False`

.`layer_range[0]`

and the end predicate will be the last element
that matches `layer_range[1]`

.
By default `None`

considers all layers of the model.**Raises**

`summary()`

is called before the model is built.`get_layer`

method```
Model.get_layer(name=None, index=None)
```


Retrieves a layer based on either its name (unique) or index.

If `name`

and `index`

are both provided, `index`

will take precedence.
Indices are based on order of horizontal graph traversal (bottom-up).

**Arguments**

**Returns**

A layer instance.

`get_quantization_layer_structure`

method```
Model.get_quantization_layer_structure(mode=None)
```


Returns the quantization structure for the model.

This method is intended to be overridden by model authors to provide topology information required for structure-aware quantization modes like 'gptq'.

**Arguments**

**Returns**

`{'pre_block_layers'__: [list], 'sequential_blocks': [list]}`

or `None`

if the mode does not require structure or is not
supported. `'pre_block_layers'`

is a list of layers that
the inputs should be passed through, before being passed to
the sequential blocks. For example, inputs to an LLM must
first be passed through an embedding layer, followed by
the transformer.`get_state_tree`

method```
Model.get_state_tree(value_format="backend_tensor")
```


Retrieves tree-like structure of model variables.

This method allows retrieval of different model variables (trainable, non-trainable, optimizer, and metrics). The variables are returned in a nested dictionary format, where the keys correspond to the variable names and the values are the nested representations of the variables.

**Returns**

`"backend_tensor"`

, `"numpy_array"`

.
The kind of array to return as the leaves of the nested
state tree.**Example**

```
model = keras.Sequential([
keras.Input(shape=(1,), name="my_input"),
keras.layers.Dense(1, activation="sigmoid", name="my_dense"),
], name="my_sequential")
model.compile(optimizer="adam", loss="mse", metrics=["mae"])
model.fit(np.array([[1.0]]), np.array([[1.0]]))
state_tree = model.get_state_tree()
```


The `state_tree`

dictionary returned looks like:

```
{
'metrics_variables': {
'loss': {
'count': ...,
'total': ...,
},
'mean_absolute_error': {
'count': ...,
'total': ...,
}
},
'trainable_variables': {
'my_sequential': {
'my_dense': {
'bias': ...,
'kernel': ...,
}
}
},
'non_trainable_variables': {},
'optimizer_variables': {
'adam': {
'iteration': ...,
'learning_rate': ...,
'my_sequential_my_dense_bias_momentum': ...,
'my_sequential_my_dense_bias_velocity': ...,
'my_sequential_my_dense_kernel_momentum': ...,
'my_sequential_my_dense_kernel_velocity': ...,
}
}
}
}
```


`set_state_tree`

method```
Model.set_state_tree(state_tree)
```


Assigns values to variables of the model.

This method takes a dictionary of nested variable values, which
represents the state tree of the model, and assigns them to the
corresponding variables of the model. The dictionary keys represent the
variable names (e.g., `'trainable_variables'`

, `'optimizer_variables'`

),
and the values are nested dictionaries containing the variable
paths and their corresponding values.

**Arguments**

`quantize`

method```
Model.quantize(mode=None, config=None, filters=None, **kwargs)
```


Quantize the weights of the model.

Note that the model must be built first before calling this method.
`quantize`

will recursively call `quantize(...)`

in all layers and
will be skipped if the layer doesn't implement the function.

This method can be called by passing a `mode`

string, which uses the
default configuration for that mode. Alternatively, a `config`

object
can be passed to customize the behavior of the quantization (e.g. to
use specific quantizers for weights or activations).

**Arguments**

`"int8"`

, `"int4"`

, `"float8"`

, `"gptq"`

. This is
optional if `config`

is provided.`keras.quantizers.QuantizationConfig`

**Example**

Quantize a model to int8 with default configuration:

```
# Build the model
model = keras.Sequential([
keras.Input(shape=(10,)),
keras.layers.Dense(10),
])
model.build((None, 10))
# Quantize with default int8 config
model.quantize("int8")
```


Quantize a model to int8 with a custom configuration:

```
from keras.quantizers import Int8QuantizationConfig
from keras.quantizers import AbsMaxQuantizer
# Build the model
model = keras.Sequential([
keras.Input(shape=(10,)),
keras.layers.Dense(10),
])
model.build((None, 10))
# Create a custom config
config = Int8QuantizationConfig(
weight_quantizer=AbsMaxQuantizer(
axis=0,
value_range=(-127, 127)
),
activation_quantizer=AbsMaxQuantizer(
axis=-1,
value_range=(-127, 127)
),
)
# Quantize with custom config
model.quantize(config=config)
```

---

## Source: https://keras.io/api/models/sequential

`Sequential`

class```
keras.Sequential(layers=None, trainable=True, name=None)
```


`Sequential`

groups a linear stack of layers into a `Model`

.

**Examples**

```
model = keras.Sequential()
model.add(keras.Input(shape=(16,)))
model.add(keras.layers.Dense(8))
# Note that you can also omit the initial `Input`.
# In that case the model doesn't have any weights until the first call
# to a training/evaluation method (since it isn't yet built):
model = keras.Sequential()
model.add(keras.layers.Dense(8))
model.add(keras.layers.Dense(4))
# model.weights not created yet
# Whereas if you specify an `Input`, the model gets built
# continuously as you are adding layers:
model = keras.Sequential()
model.add(keras.Input(shape=(16,)))
model.add(keras.layers.Dense(8))
len(model.weights) # Returns "2"
# When using the delayed-build pattern (no input shape specified), you can
# choose to manually build your model by calling
# `build(batch_input_shape)`:
model = keras.Sequential()
model.add(keras.layers.Dense(8))
model.add(keras.layers.Dense(4))
model.build((None, 16))
len(model.weights) # Returns "4"
# Note that when using the delayed-build pattern (no input shape specified),
# the model gets built the first time you call `fit`, `eval`, or `predict`,
# or the first time you call the model on some input data.
model = keras.Sequential()
model.add(keras.layers.Dense(8))
model.add(keras.layers.Dense(1))
model.compile(optimizer='sgd', loss='mse')
# This builds the model for the first time:
model.fit(x, y, batch_size=32, epochs=10)
```


**Guides and examples using Sequential**

`fit()`

with TensorFlow`fit()`

with PyTorch`add`

method```
Sequential.add(layer, rebuild=True)
```


Adds a layer instance on top of the layer stack.

**Arguments**

`pop`

method```
Sequential.pop(rebuild=True)
```


Removes the last layer in the model.

**Arguments**

`bool`

. Whether to rebuild the model after removing
the layer. Defaults to `True`

.**Returns**

---

## Source: https://keras.io/api/models/model_training_apis

`compile`

method```
Model.compile(
optimizer="rmsprop",
loss=None,
loss_weights=None,
metrics=None,
weighted_metrics=None,
run_eagerly=False,
steps_per_execution=1,
jit_compile="auto",
auto_scale_loss=True,
)
```


Configures the model for training.

**Example**

```
model.compile(
optimizer=keras.optimizers.Adam(learning_rate=1e-3),
loss=keras.losses.BinaryCrossentropy(),
metrics=[
keras.metrics.BinaryAccuracy(),
keras.metrics.FalseNegatives(),
],
)
```


**Arguments**

`keras.optimizers`

.`keras.losses.Loss`

`keras.losses`

. A
loss function is any callable with the signature
`loss = fn(y_true, y_pred)`

, where `y_true`

are the ground truth
values, and `y_pred`

are the model's predictions.
`y_true`

should have shape `(batch_size, d0, .. dN)`

(except in the case of sparse loss functions such as
sparse categorical crossentropy which expects integer arrays of
shape `(batch_size, d0, .. dN-1)`

).
`y_pred`

should have shape `(batch_size, d0, .. dN)`

.
The loss function should return a float tensor.`loss_weights`

coefficients. If a list,
it is expected to have a 1:1 mapping to the model's outputs. If
a dict, it is expected to map output names (strings) to scalar
coefficients.`keras.metrics.Metric`

`keras.metrics`

. Typically you will use
`metrics=['accuracy']`

. A function is any callable with the
signature `result = fn(y_true, _pred)`

. To specify different
metrics for different outputs of a multi-output model, you could
also pass a dictionary, such as
`metrics={'a':'accuracy', 'b':['accuracy', 'mse']}`

.
You can also pass a list to specify a metric or a list of
metrics for each output, such as
`metrics=[['accuracy'], ['accuracy', 'mse']]`

or `metrics=['accuracy', ['accuracy', 'mse']]`

. When you pass
the strings 'accuracy' or 'acc', we convert this to one of
`keras.metrics.BinaryAccuracy`

`keras.metrics.CategoricalAccuracy`

`keras.metrics.SparseCategoricalAccuracy`

`"crossentropy"`

and `"ce"`

as well.
The metrics passed here are evaluated without sample weighting;
if you would like sample weighting to apply, you can specify
your metrics via the `weighted_metrics`

argument instead.`sample_weight`

or `class_weight`

during training and testing.`True`

, this model's forward pass
will never be compiled. It is recommended to leave this
as `False`

when training (for best performance),
and to set it to `True`

when debugging.`steps_per_execution`

is set to `N`

,
`Callback.on_batch_begin`

and `Callback.on_batch_end`

methods
will only be called every `N`

batches (i.e. before/after
each compiled function execution).
Not supported with the PyTorch backend.`"auto"`

. Whether to use XLA compilation when
compiling a model. For `jax`

and `tensorflow`

backends,
`jit_compile="auto"`

enables XLA compilation if the model
supports it, and disabled otherwise.
For `torch`

backend, `"auto"`

will default to eager
execution and `jit_compile=True`

will run with `torch.compile`

with the `"inductor"`

backend.`True`

and the model dtype policy is
`"mixed_float16"`

, the passed optimizer will be automatically
wrapped in a `LossScaleOptimizer`

, which will dynamically
scale the loss to prevent underflow.`fit`

method```
Model.fit(
x=None,
y=None,
batch_size=None,
epochs=1,
verbose="auto",
callbacks=None,
validation_split=0.0,
validation_data=None,
shuffle=True,
class_weight=None,
sample_weight=None,
initial_epoch=0,
steps_per_epoch=None,
validation_steps=None,
validation_batch_size=None,
validation_freq=1,
)
```


Trains the model for a fixed number of epochs (dataset iterations).

**Arguments**

`keras.utils.PyDataset`

`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`tf.data.Dataset`

`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`torch.utils.data.DataLoader`

yielding `(inputs, targets)`

or `(inputs, targets, sample_weights)`

.`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`x`

, it can be either NumPy
array(s) or backend-native tensor(s). If `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or a Python generator function,
`y`

should not be specified since targets will be obtained from
`x`

.`None`

.
Number of samples per gradient update.
If unspecified, `batch_size`

will default to 32.
Do not specify the `batch_size`

if your input data `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function
since they generate batches.`x`

and `y`

data provided
(unless the `steps_per_epoch`

flag is set to
something other than None).
Note that in conjunction with `initial_epoch`

,
`epochs`

is to be understood as "final epoch".
The model is not trained for a number of iterations
given by `epochs`

, but merely until the epoch
of index `epochs`

is reached.`"auto"`

, 0, 1, or 2. Verbosity mode.
0 = silent, 1 = progress bar, 2 = one line per epoch.
"auto" becomes 1 for most cases.
Note that the progress bar is not
particularly useful when logged to a file,
so `verbose=2`

is recommended when not running interactively
(e.g., in a production environment). Defaults to `"auto"`

.`keras.callbacks.Callback`

`keras.callbacks`

. Note
`keras.callbacks.ProgbarLogger`

`keras.callbacks.History`

`model.fit()`

.
`keras.callbacks.ProgbarLogger`

`verbose`

argument in `model.fit()`

.`x`

and `y`

data
provided, before shuffling.
This argument is only supported when `x`

and `y`

are made of
NumPy arrays or tensors.
If both `validation_data`

and `validation_split`

are provided,
`validation_data`

will override `validation_split`

.`validation_split`

or `validation_data`

is not affected by
regularization layers like noise and dropout.
`validation_data`

will override `validation_split`

.
It can be:`(x_val, y_val)`

of NumPy arrays or tensors.`(x_val, y_val, val_sample_weights)`

of NumPy
arrays.`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

yielding `(inputs, targets)`

or a
Python generator function yielding `(x_val, y_val)`

or
`(inputs, targets, sample_weights)`

.`x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function.`class_weight`

is specified
and targets have a rank of 2 or greater, either `y`

must be
one-hot encoded, or an explicit final dimension of `1`

must
be included for sparse class labels.`(samples, sequence_length)`

to apply a different weight
to every timestep of every sample.
This argument is not supported when `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function.
Instead, provide `sample_weights`

as the third element of `x`

.
Note that sample weighting does not apply to metrics specified
via the `metrics`

argument in `compile()`

. To apply sample
weighting to your metrics, you can specify them via the
`weighted_metrics`

in `compile()`

instead.`None`

.
Total number of steps (batches of samples) before declaring one
epoch finished and starting the next epoch. When training with
input tensors or NumPy arrays, the default `None`

means that the
value used is the number of samples in your dataset divided by
the batch size, or 1 if that cannot be determined.
If `x`

is a `keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function, the
epoch will run until the input dataset is exhausted. When
passing an infinitely repeating dataset, you must specify the
`steps_per_epoch`

argument, otherwise the training will run
indefinitely.`None`

.
Only relevant if `validation_data`

is provided.
Total number of steps (batches of samples) to draw before
stopping when performing validation at the end of every epoch.
If `validation_steps`

is `None`

, validation will run until the
`validation_data`

dataset is exhausted. In the case of an
infinitely repeating dataset, it will run indefinitely. If
`validation_steps`

is specified and only part of the dataset
is consumed, the evaluation will start from the beginning of the
dataset at each epoch. This ensures that the same validation
samples are used every time.`None`

.
Number of samples per validation batch.
If unspecified, will default to `batch_size`

.
Do not specify the `validation_batch_size`

if your data is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function
since they generate batches.`validation_freq=2`

runs validation every 2 epochs.Unpacking behavior for iterator-like inputs:
A common pattern is to pass an iterator like object such as a
[ tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) or a

`keras.utils.PyDataset`

`fit()`

,
which will in fact yield not only features (`x`

)
but optionally targets (`y`

) and sample weights (`sample_weight`

).
Keras requires that the output of such iterator-likes be
unambiguous. The iterator should return a tuple
of length 1, 2, or 3, where the optional second and third elements
will be used for `y`

and `sample_weight`

respectively.
Any other type provided will be wrapped in
a length-one tuple, effectively treating everything as `x`

. When
yielding dicts, they should still adhere to the top-level tuple
structure,
e.g. `({"x0": x0, "x1": x1}, y)`

. Keras will not attempt to separate
features, targets, and weights from the keys of a single dict.
A notable unsupported data type is the `namedtuple`

. The reason is
that it behaves like both an ordered datatype (tuple) and a mapping
datatype (dict). So given a namedtuple of the form:
`namedtuple("example_tuple", ["y", "x"])`

it is ambiguous whether to reverse the order of the elements when
interpreting the value. Even worse is a tuple of the form:
`namedtuple("other_tuple", ["x", "y", "z"])`

where it is unclear if the tuple was intended to be unpacked
into `x`

, `y`

, and `sample_weight`

or passed through
as a single element to `x`

.**Returns**

A `History`

object. Its `History.history`

attribute is
a record of training loss values and metrics values
at successive epochs, as well as validation loss values
and validation metrics values (if applicable).

`evaluate`

method```
Model.evaluate(
x=None,
y=None,
batch_size=None,
verbose="auto",
sample_weight=None,
steps=None,
callbacks=None,
return_dict=False,
**kwargs
)
```


Returns the loss value & metrics values for the model in test mode.

Computation is done in batches (see the `batch_size`

arg.)

**Arguments**

`keras.utils.PyDataset`

`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`tf.data.Dataset`

`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`torch.utils.data.DataLoader`

yielding `(inputs, targets)`

or `(inputs, targets, sample_weights)`

.`(inputs, targets)`

or
`(inputs, targets, sample_weights)`

.`x`

, it can be either NumPy
array(s) or backend-native tensor(s). If `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or a Python generator function,
`y`

should not be specified since targets will be obtained from
`x`

.`None`

.
Number of samples per batch of computation.
If unspecified, `batch_size`

will default to 32.
Do not specify the `batch_size`

if your input data `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function
since they generate batches.`"auto"`

, 0, 1, or 2. Verbosity mode.
0 = silent, 1 = progress bar, 2 = single line.
`"auto"`

becomes 1 for most cases.
Note that the progress bar is not
particularly useful when logged to a file, so `verbose=2`

is
recommended when not running interactively
(e.g. in a production environment). Defaults to `"auto"`

.`(samples, sequence_length)`

to apply a different weight
to every timestep of every sample.
This argument is not supported when `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function.
Instead, provide `sample_weights`

as the third element of `x`

.
Note that sample weighting does not apply to metrics specified
via the `metrics`

argument in `compile()`

. To apply sample
weighting to your metrics, you can specify them via the
`weighted_metrics`

in `compile()`

instead.`None`

.
Total number of steps (batches of samples) to draw before
declaring the evaluation round finished. If `steps`

is `None`

,
it will run until `x`

is exhausted. In the case of an infinitely
repeating dataset, it will run indefinitely.`keras.callbacks.Callback`

`True`

, loss and metric results are returned as a
dict, with each key being the name of the metric.
If `False`

, they are returned as a list.**Returns**

Scalar test loss (if the model has a single output and no metrics) or list of scalars (if the model has multiple outputs and/or metrics).

Note: When using compiled metrics, `evaluate()`

may return multiple
submetric values, while `model.metrics_names`

often lists only
top-level names (e.g., 'loss', 'compile_metrics'), leading to a
length mismatch. The order of the `evaluate()`

output corresponds
to the order of metrics specified during `model.compile()`

. You can
use this order to map the `evaluate()`

results to the intended
metric. `model.metrics_names`

itself will still return only the
top-level names.

`predict`

method```
Model.predict(x, batch_size=None, verbose="auto", steps=None, callbacks=None)
```


Generates output predictions for the input samples.

Computation is done in batches. This method is designed for batch processing of large numbers of inputs. It is not intended for use inside of loops that iterate over your data and process small numbers of inputs at a time.

For small numbers of inputs that fit in one batch,
directly use `__call__()`

for faster execution, e.g.,
`model(x)`

, or `model(x, training=False)`

if you have layers such as
`BatchNormalization`

that behave differently during
inference.

Note: See [this FAQ entry](https://keras.io/getting_started/faq/#whats-the-difference-between-model-methods-predict-and-call)
for more details about the difference between `Model`

methods
`predict()`

and `__call__()`

.

**Arguments**

`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

.`None`

.
Number of samples per batch of computation.
If unspecified, `batch_size`

will default to 32.
Do not specify the `batch_size`

if your input data `x`

is a
`keras.utils.PyDataset`

`tf.data.Dataset`

`torch.utils.data.DataLoader`

or Python generator function
since they generate batches.`"auto"`

, 0, 1, or 2. Verbosity mode.
0 = silent, 1 = progress bar, 2 = single line.
`"auto"`

becomes 1 for most cases. Note that the progress bar
is not particularly useful when logged to a file,
so `verbose=2`

is recommended when not running interactively
(e.g. in a production environment). Defaults to `"auto"`

.`steps`

is `None`

,
it will run until `x`

is exhausted. In the case of an infinitely
repeating dataset, it will run indefinitely.`keras.callbacks.Callback`

**Returns**

NumPy array(s) of predictions.

`train_on_batch`

method```
Model.train_on_batch(
x, y=None, sample_weight=None, class_weight=None, return_dict=False
)
```


Runs a single gradient update on a single batch of data.

**Arguments**

`(samples, sequence_length)`

, to apply a different
weight to every timestep of every sample.`class_weight`

is specified
and targets have a rank of 2 or greater, either `y`

must
be one-hot encoded, or an explicit final dimension of 1
must be included for sparse class labels.`True`

, loss and metric results are returned as a
dict, with each key being the name of the metric. If `False`

,
they are returned as a list.**Returns**

A scalar loss value (when no metrics and `return_dict=False`

),
a list of loss and metric values
(if there are metrics and `return_dict=False`

), or a dict of
metric and loss values (if `return_dict=True`

).

`test_on_batch`

method```
Model.test_on_batch(x, y=None, sample_weight=None, return_dict=False)
```


Test the model on a single batch of samples.

**Arguments**

`(samples, sequence_length)`

, to apply a different
weight to every timestep of every sample.`True`

, loss and metric results are returned as a
dict, with each key being the name of the metric. If `False`

,
they are returned as a list.**Returns**

A scalar loss value (when no metrics and `return_dict=False`

),
a list of loss and metric values
(if there are metrics and `return_dict=False`

), or a dict of
metric and loss values (if `return_dict=True`

).

`predict_on_batch`

method```
Model.predict_on_batch(x)
```


Returns predictions for a single batch of samples.

**Arguments**

**Returns**

NumPy array(s) of predictions.

`History`

class```
keras.callbacks.History()
```


Callback that records events into a `History`

object.

This callback is automatically applied to
every Keras model. The `History`

object
gets returned by the `fit()`

method of models.

**Example**

```
>>> model = Sequential([layers.Dense(10)])
>>> model.compile(SGD(), loss='mse')
>>> history = model.fit(np.arange(100).reshape(5, 20), np.zeros(5),
... epochs=10, verbose=1)
>>> print(history.params)
{'verbose': 1, 'epochs': 10, 'steps': 1}
>>> # check the keys of history object
>>> print(history.history.keys())
dict_keys(['loss'])
```


**Guides and examples using History**