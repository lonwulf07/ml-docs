# Timm Documentation
> Scraped on: 2026-03-30 | Root Source: [https://timm.fast.ai/](https://timm.fast.ai/)



---

## Source: https://timm.fast.ai/

[Ross Wightman](https://twitter.com/wightmanr)and is a collection of SOTA computer vision models, layers, utilities, optimizers, schedulers, data-loaders, augmentations and also training/validating scripts with ability to reproduce ImageNet training results.

`pip install timm`


Or for an editable install,

```
git clone https://github.com/rwightman/pytorch-image-models
cd pytorch-image-models && pip install -e .
```


```
import timm
import torch
model = timm.create_model('resnet34')
x = torch.randn(1, 3, 224, 224)
model(x).shape
```

It is that simple to create a model using `timm`

. The `create_model`

function is a factory method that can be used to create over 300 models that are part of the `timm`

library.

To create a pretrained model, simply pass in `pretrained=True`

.

```
pretrained_resnet_34 = timm.create_model('resnet34', pretrained=True)
```

To create a model with a custom number of classes, simply pass in `num_classes=<number_of_classes>`

.

```
import timm
import torch
model = timm.create_model('resnet34', num_classes=10)
x = torch.randn(1, 3, 224, 224)
model(x).shape
```

`timm.list_models()`

returns a complete list of available models in `timm`

. To have a look at a complete list of pretrained models, pass in `pretrained=True`

in `list_models`

.

```
avail_pretrained_models = timm.list_models(pretrained=True)
len(avail_pretrained_models), avail_pretrained_models[:5]
```

There are a total of **271** models with pretrained weights currently available in `timm`

!

It is also possible to search for model architectures using Wildcard as below:

```
all_densenet_models = timm.list_models('*densenet*')
all_densenet_models
```

The [fastai](https://docs.fast.ai) library has support for fine-tuning models from timm:

```
from fastai.vision.all import *
path = untar_data(URLs.PETS)/'images'
dls = ImageDataLoaders.from_name_func(
path, get_image_files(path), valid_pct=0.2,
label_func=lambda x: x[0].isupper(), item_tfms=Resize(224))
# if a string is passed into the model argument, it will now use timm (if it is installed)
learn = vision_learner(dls, 'vit_tiny_patch16_224', metrics=error_rate)
learn.fine_tune(1)
```

---

## Source: http://timm.fast.ai

[Ross Wightman](https://twitter.com/wightmanr)and is a collection of SOTA computer vision models, layers, utilities, optimizers, schedulers, data-loaders, augmentations and also training/validating scripts with ability to reproduce ImageNet training results.

`pip install timm`


Or for an editable install,

```
git clone https://github.com/rwightman/pytorch-image-models
cd pytorch-image-models && pip install -e .
```


```
import timm
import torch
model = timm.create_model('resnet34')
x = torch.randn(1, 3, 224, 224)
model(x).shape
```

It is that simple to create a model using `timm`

. The `create_model`

function is a factory method that can be used to create over 300 models that are part of the `timm`

library.

To create a pretrained model, simply pass in `pretrained=True`

.

```
pretrained_resnet_34 = timm.create_model('resnet34', pretrained=True)
```

To create a model with a custom number of classes, simply pass in `num_classes=<number_of_classes>`

.

```
import timm
import torch
model = timm.create_model('resnet34', num_classes=10)
x = torch.randn(1, 3, 224, 224)
model(x).shape
```

`timm.list_models()`

returns a complete list of available models in `timm`

. To have a look at a complete list of pretrained models, pass in `pretrained=True`

in `list_models`

.

```
avail_pretrained_models = timm.list_models(pretrained=True)
len(avail_pretrained_models), avail_pretrained_models[:5]
```

There are a total of **271** models with pretrained weights currently available in `timm`

!

It is also possible to search for model architectures using Wildcard as below:

```
all_densenet_models = timm.list_models('*densenet*')
all_densenet_models
```

The [fastai](https://docs.fast.ai) library has support for fine-tuning models from timm:

```
from fastai.vision.all import *
path = untar_data(URLs.PETS)/'images'
dls = ImageDataLoaders.from_name_func(
path, get_image_files(path), valid_pct=0.2,
label_func=lambda x: x[0].isupper(), item_tfms=Resize(224))
# if a string is passed into the model argument, it will now use timm (if it is installed)
learn = vision_learner(dls, 'vit_tiny_patch16_224', metrics=error_rate)
learn.fine_tune(1)
```

---

## Source: https://timm.fast.ai/training_scripts

It is really easy to do model training on imagenet using `timm`

!

For example, let's train a `resnet34`

model on [imagenette](https://github.com/fastai/imagenette). We are going to:

- Get the
`imagenette`

data - Start training using
`timm`


NOTE: Running training on CPU would be extremely slow! GPU(s) recommended - the more the merrier :)

```
!wget https://s3.amazonaws.com/fast-ai-imageclas/imagenette2-320.tgz
!gunzip imagenette2-320.tgz
!tar -xvf imagenette2-320.tar
```


And to trigger training,

```
python train.py /imagenette2-320 --model resnet34
```

Below is a list of training scripts that were used by Ross to get competitive results!

## EfficientNet-B2 with RandAugment - 80.4 top-1, 95.1 top-5[ ](#EfficientNet-B2-with-RandAugment---80.4-top-1,-95.1-top-5)

These params are for dual Titan RTX cards with NVIDIA Apex installed:

`./distributed_train.sh 2 /imagenet/ --model efficientnet_b2 -b 128 --sched step --epochs 450 --decay-epochs 2.4 --decay-rate .97 --opt rmsproptf --opt-eps .001 -j 8 --warmup-lr 1e-6 --weight-decay 1e-5 --drop 0.3 --drop-connect 0.2 --model-ema --model-ema-decay 0.9999 --aa rand-m9-mstd0.5 --remode pixel --reprob 0.2 --amp --lr .016`


## MixNet-XL with RandAugment - 80.5 top-1, 94.9 top-5[ ](#MixNet-XL-with-RandAugment---80.5-top-1,-94.9-top-5)

This params are for dual Titan RTX cards with NVIDIA Apex installed:

`./distributed_train.sh 2 /imagenet/ --model mixnet_xl -b 128 --sched step --epochs 450 --decay-epochs 2.4 --decay-rate .969 --opt rmsproptf --opt-eps .001 -j 8 --warmup-lr 1e-6 --weight-decay 1e-5 --drop 0.3 --drop-connect 0.2 --model-ema --model-ema-decay 0.9999 --aa rand-m9-mstd0.5 --remode pixel --reprob 0.3 --amp --lr .016 --dist-bn reduce`


## SE-ResNeXt-26-D and SE-ResNeXt-26-T[ ](#SE-ResNeXt-26-D-and-SE-ResNeXt-26-T)

These hparams (or similar) work well for a wide range of ResNet architecture, generally a good idea to increase the epoch # as the model size increases... ie approx 180-200 for ResNe(X)t50, and 220+ for larger. Increase batch size and LR proportionally for better GPUs or with AMP enabled. These params were for 2 1080Ti cards:

`./distributed_train.sh 2 /imagenet/ --model seresnext26t_32x4d --lr 0.1 --warmup-epochs 5 --epochs 160 --weight-decay 1e-4 --sched cosine --reprob 0.4 --remode pixel -b 112`


## EfficientNet-B3 with RandAugment - 81.5 top-1, 95.7 top-5[ ](#EfficientNet-B3-with-RandAugment---81.5-top-1,-95.7-top-5)

The training of this model started with the same command line as EfficientNet-B2 w/ RA above. After almost three weeks of training the process crashed. The results weren't looking amazing so I resumed the training several times with tweaks to a few params (increase RE prob, decrease rand-aug, increase ema-decay). Nothing looked great. I ended up averaging the best checkpoints from all restarts. The result is mediocre at default res/crop but oddly performs much better with a full image test crop of 1.0.

## EfficientNet-B0 with RandAugment - 77.7 top-1, 95.3 top-5[ ](#EfficientNet-B0-with-RandAugment---77.7-top-1,-95.3-top-5)

[Michael Klachko](https://github.com/michaelklachko) achieved these results with the command line for B2 adapted for larger batch size, with the recommended B0 dropout rate of 0.2.

`./distributed_train.sh 2 /imagenet/ --model efficientnet_b0 -b 384 --sched step --epochs 450 --decay-epochs 2.4 --decay-rate .97 --opt rmsproptf --opt-eps .001 -j 8 --warmup-lr 1e-6 --weight-decay 1e-5 --drop 0.2 --drop-connect 0.2 --model-ema --model-ema-decay 0.9999 --aa rand-m9-mstd0.5 --remode pixel --reprob 0.2 --amp --lr .048`


## ResNet50 with JSD loss and RandAugment (clean + 2x RA augs) - 79.04 top-1, 94.39 top-5[ ](#ResNet50-with-JSD-loss-and-RandAugment-(clean-+-2x-RA-augs)---79.04-top-1,-94.39-top-5)

Trained on two older 1080Ti cards, this took a while. Only slightly, non statistically better ImageNet validation result than my first good AugMix training of 78.99. However, these weights are more robust on tests with ImageNetV2, ImageNet-Sketch, etc. Unlike my first AugMix runs, I've enabled SplitBatchNorm, disabled random erasing on the clean split, and cranked up random erasing prob on the 2 augmented paths.

`./distributed_train.sh 2 /imagenet -b 64 --model resnet50 --sched cosine --epochs 200 --lr 0.05 --amp --remode pixel --reprob 0.6 --aug-splits 3 --aa rand-m9-mstd0.5-inc1 --resplit --split-bn --jsd --dist-bn reduce`


## EfficientNet-ES (EdgeTPU-Small) with RandAugment - 78.066 top-1, 93.926 top-5[ ](#EfficientNet-ES-(EdgeTPU-Small)-with-RandAugment---78.066-top-1,-93.926-top-5)

Trained by [Andrew Lavin](https://github.com/andravin) with 8 V100 cards. Model EMA was not used, final checkpoint is the average of 8 best checkpoints during training.

`./distributed_train.sh 8 /imagenet --model efficientnet_es -b 128 --sched step --epochs 450 --decay-epochs 2.4 --decay-rate .97 --opt rmsproptf --opt-eps .001 -j 8 --warmup-lr 1e-6 --weight-decay 1e-5 --drop 0.2 --drop-connect 0.2 --aa rand-m9-mstd0.5 --remode pixel --reprob 0.2 --amp --lr .064`


## MobileNetV3-Large-100 - 75.766 top-1, 92,542 top-5[ ](#MobileNetV3-Large-100---75.766-top-1,-92,542-top-5)

`./distributed_train.sh 2 /imagenet/ --model mobilenetv3_large_100 -b 512 --sched step --epochs 600 --decay-epochs 2.4 --decay-rate .973 --opt rmsproptf --opt-eps .001 -j 7 --warmup-lr 1e-6 --weight-decay 1e-5 --drop 0.2 --drop-connect 0.2 --model-ema --model-ema-decay 0.9999 --aa rand-m9-mstd0.5 --remode pixel --reprob 0.2 --amp --lr .064 --lr-noise 0.42 0.9`


## ResNeXt-50 32x4d w/ RandAugment - 79.762 top-1, 94.60 top-5[ ](#ResNeXt-50-32x4d-w/-RandAugment---79.762-top-1,-94.60-top-5)

These params will also work well for SE-ResNeXt-50 and SK-ResNeXt-50 and likely 101. I used them for the SK-ResNeXt-50 32x4d that I trained with 2 GPU using a slightly higher LR per effective batch size (lr=0.18, b=192 per GPU). The cmd line below are tuned for 8 GPU training.

`./distributed_train.sh 8 /imagenet --model resnext50_32x4d --lr 0.6 --warmup-epochs 5 --epochs 240 --weight-decay 1e-4 --sched cosine --reprob 0.4 --recount 3 --remode pixel --aa rand-m7-mstd0.5-inc1 -b 192 -j 6 --amp --dist-bn reduce`


## ResNet50 with JSD loss and RandAugment (clean + 2x RA augs) - 79.04 top-1, 94.39 top-5[ ](#ResNet50-with-JSD-loss-and-RandAugment-(clean-+-2x-RA-augs)---79.04-top-1,-94.39-top-5)

Trained on two older 1080Ti cards, this took a while. Only slightly, non statistically better ImageNet validation result than my first good AugMix training of 78.99. However, these weights are more robust on tests with ImageNetV2, ImageNet-Sketch, etc. Unlike my first AugMix runs, I've enabled SplitBatchNorm, disabled random erasing on the clean split, and cranked up random erasing prob on the 2 augmented paths.

`./distributed_train.sh 2 /imagenet -b 64 --model resnet50 --sched cosine --epochs 200 --lr 0.05 --amp --remode pixel --reprob 0.6 --aug-splits 3 --aa rand-m9-mstd0.5-inc1 --resplit --split-bn --jsd --dist-bn reduce`

---

## Source: https://timm.fast.ai/training

In this tutorial, we will be looking at the training script of `timm`

. There are various features that `timm`

has to offer and some of them have been listed below:

- Auto Augmentation
[paper](https://arxiv.org/abs/1805.09501) - Augmix
- Distributed Training on multiple GPUs
- Mixed precision training
- Auxiliary Batch Norm for AdvProp
[paper](https://arxiv.org/abs/1911.09665) - Synchronized Batch Norm
- Mixup and Cutmix with an ability to switch between the two & also turn-off augmentation at a certain epoch

`timm`

also supports multiple optimizers & schedulers. In this tutorial we will be only be looking at the above 7 features and look at how you could utilize `timm`

to use these features for your own experiments on a custom dataset.

As part of this tutorial, we will first start out with a general introduction to the training script and look at the various key steps that occur inside this script at a high-level. Then, we will look at some of the details of the above 7 features to get a further understanding of `train.py`

.

The training script in `timm`

can accept ~100 arguments. You can find more about these by running `python train.py --help`

. These arguments are to define Dataset/Model parameters, Optimizer parameters, Learnining Rate scheduler parameters, Augmentation and regularization, Batch Norm parameters, Model exponential moving average parameters, and some miscellaneaous parameters such as `--seed`

, `--tta`

etc.

As part of this tutorial, we will be looking at how the training script makes use of these parameters from a high-level view. This could be beneficial for you to able to run your own experiments on ImageNet or any other custom dataset using `timm`

.

The only argument required by `timm`

training script is the path to the training data such as ImageNet which is structured in the following way:

```
imagenette2-320
├── train
│ ├── n01440764
│ ├── n02102040
│ ├── n02979186
│ ├── n03000684
│ ├── n03028079
│ ├── n03394916
│ ├── n03417042
│ ├── n03425413
│ ├── n03445777
│ └── n03888257
└── val
├── n01440764
├── n02102040
├── n02979186
├── n03000684
├── n03028079
├── n03394916
├── n03417042
├── n03425413
├── n03445777
└── n03888257
```


So to start training on this `imagenette2-320`

we could just do something like `python train.py <path_to_imagenette2-320_dataset>`

.

The various default args, in the training script are setup for you and what get's passed to the training script looks something like this:

```
Namespace(aa=None, amp=False, apex_amp=False, aug_splits=0, batch_size=32, bn_eps=None, bn_momentum=None, bn_tf=False, channels_last=False, clip_grad=None, color_jitter=0.4, cooldown_epochs=10, crop_pct=None, cutmix=0.0, cutmix_minmax=None, data_dir='../imagenette2-320', dataset='', decay_epochs=30, decay_rate=0.1, dist_bn='', drop=0.0, drop_block=None, drop_connect=None, drop_path=None, epochs=200, eval_metric='top1', gp=None, hflip=0.5, img_size=None, initial_checkpoint='', input_size=None, interpolation='', jsd=False, local_rank=0, log_interval=50, lr=0.01, lr_cycle_limit=1, lr_cycle_mul=1.0, lr_noise=None, lr_noise_pct=0.67, lr_noise_std=1.0, mean=None, min_lr=1e-05, mixup=0.0, mixup_mode='batch', mixup_off_epoch=0, mixup_prob=1.0, mixup_switch_prob=0.5, model='resnet101', model_ema=False, model_ema_decay=0.9998, model_ema_force_cpu=False, momentum=0.9, native_amp=False, no_aug=False, no_prefetcher=False, no_resume_opt=False, num_classes=None, opt='sgd', opt_betas=None, opt_eps=None, output='', patience_epochs=10, pin_mem=False, pretrained=False, ratio=[0.75, 1.3333333333333333], recount=1, recovery_interval=0, remode='const', reprob=0.0, resplit=False, resume='', save_images=False, scale=[0.08, 1.0], sched='step', seed=42, smoothing=0.1, split_bn=False, start_epoch=None, std=None, sync_bn=False, torchscript=False, train_interpolation='random', train_split='train', tta=0, use_multi_epochs_loader=False, val_split='validation', validation_batch_size_multiplier=1, vflip=0.0, warmup_epochs=3, warmup_lr=0.0001, weight_decay=0.0001, workers=4)
```

Notice, that `args`

is a `Namespace`

which means we can set more along the way if needed by doing something like `args.new_variable="some_value"`

.

To get a one-line introduction of these various arguments, we can just do something like `python train.py --help`

.

**Note:**We will be looking at what these parameters in greater detail as part of this tutorial. Do note that some random augmentations are set by default such as

`color_jitter`

, `hfliip`

but there is a parameter `no-aug`

in case you wanted to turn of all training data augmentations. Also, the default optimizer `opt`

is ’sgd’ but it is possible to change that. `timm`

offers a vast number of optimizers to train your models with. In this section we will look at the various steps from a high level perspective that occur inside the training script. These steps have been outlined below in the correct order:

- Setup up
__distributed training parameters__if`args.distributed`

is`True`

. - Setup
__manual seed__for reproducible results. **Create Model**: Create the model to train using`timm.create_model`

function.- Setup
__data config__based on model's default config. In general the default config of the model looks something like:{'url': '', 'num_classes': 1000, 'input_size': (3, 224, 224), 'pool_size': (7, 7), 'crop_pct': 0.875, 'interpolation': 'bicubic', 'mean': (0.485, 0.456, 0.406), 'std': (0.229, 0.224, 0.225), 'first_conv': 'conv1', 'classifier': 'fc'}

- Setup
__augmentation batch splits__and if the number of augmentation batch splits is more than 1, and if so, convert all model BatchNormlayers to Split Batch Normalization layers.**Note:**I feel this needs a little more explaination. In general, when we train a model, we apply the data augmentation to the complete batch and then define batch norm statistics from this complete batch such as mean and variance. But as introduced in this[paper](https://arxiv.org/abs/1911.09665), sometimes it is beneficial to split the data into groups and use separate Batch Normalization layers for each to normalize the groups independently throughout the training process. This is referred to as auxiliary batch norm in the paper and is referred to`SplitBatchNorm2d`

in`timm`

.**Note:**Let’s assume that number of augmentation batch splits is set to two. In that case, we split the data into two groups - one without any augmentations (referred to as clean) and one with augmentations. Then we use two separate batch normalization layers to normalize the two groups throughout the training process. If we are using multiple GPUs for training, then setup either apex syncBN or PyTorch native

[SyncBatchNorm](https://pytorch.org/docs/stable/generated/torch.nn.SyncBatchNorm.html)to set up__Synchronized Batch Normalization__. This means that rather than normalizing the data on each individual GPU, we normalize the whole batch at one spread across multiple GPUs.Make model exportable using

`torch.jit`

if requested.__Initialize optimizer__based on arguments passed to the training script.- Setup
__mixed Precision__- either using`apex.amp`

or using native torch amp -`torch.cuda.amp.autocast`

. - Load model weights if resuming from a
__model checkpoint__. - Setup
__exponential moving average__of model weights. This is similar to[Stochastic Weight Averaging](https://pytorch.org/blog/pytorch-1.6-now-includes-stochastic-weight-averaging/). - Setup
__distributed training__based on parameters from step-1. - Setup
__learning rate scheduler__. - Create
__training and validation dataset__. - Setup
__Mixup/Cutmix__data augmentation. - Convert training dataset to
__`AugmixDataset`__if number of augmentation batch splits from step-5 is greater than 1. - Create
__training data loader and Validation dataloader__.18. Setup**Note:**Transforms/Augmentations also get created inside the training dataloader.__Loss__function. - Setup
__model checkpointing and evaluation metrics__. __Train and Validate__the model and also store the eval metrics to an output file.

To enable auto augmentation during training -

```
python train.py ./imagenette2-320 --aa 'v0'
```

A brief introduction about augmix has been presented [here](https://fastai.github.io/timmdocs/dataset.html#AugmixDataset). To enable augmix during training, simply do:

```
python train.py ./imagenette2-320 --aug-splits 3 --jsd
```

`timm`

also supports augmix with `RandAugment`

and `AutoAugment`

like so:

```
python train.py ./imagenette2-320 --aug-splits 3 --jsd --aa rand-m9-mstd0.5-inc1
```

To train models on multiple GPUs, simply replace `python train.py`

with `./distributed_train.sh <num-gpus>`

like so:

```
./distributed_train.sh 4 ./imagenette2-320 --aug-splits 3 --jsd
```

This trains the model using `AugMix`

data augmentation on 4 GPUs.

To enable mixed precision training, simply add the `--amp`

flag. `timm`

will automatically implement mixed precision training either using `apex`

or PyTorch Native mixed precision training.

```
python train.py ../imagenette2-320 --aug-splits 3 --jsd --amp
```

From the paper,

```
Batch normalization serves as an essential component for many state-of-the-art computer vision models. Specifically, BN normalizes input features by the mean and variance computed within each mini-batch. **One intrinsic assumption of utilizing BN is that the input features should come from a single or similar distributions.** This normalization behavior could be problematic if the mini-batch contains data from different distributions, there- fore resulting in inaccurate statistics estimation.
To disentangle this mixture distribution into two simpler ones respectively for the clean and adversarial images, we hereby propose an auxiliary BN to guarantee its normalization statistics are exclusively preformed on the adversarial examples.
```

To enable split batch norm,

```
python train.py ./imagenette2-320 --aug-splits 3 --aa rand-m9-mstd0.5-inc1 --split-bn
```

Using the above command, `timm`

now has separate batch normalization layer for each augmentation split.

Synchronized batch norm is only used when training on multiple GPUs. From [papers with code](https://paperswithcode.com/method/syncbn):

```
Synchronized Batch Normalization (SyncBN) is a type of batch normalization used for multi-GPU training. Standard batch normalization only normalizes the data within each device (GPU). SyncBN normalizes the input within the whole mini-batch.
```

To enable, simply add `--sync-bn`

flag like so:

```
./distributed_train.sh 4 ../imagenette2-320 --aug-splits 3 --jsd --sync-bn
```

To enable either mixup or cutmix, simply add the `--mixup`

or `--cutmix`

flag with alpha value.

Default probability of applying the augmentation is 1.0. If you need to change it, use `--mixup-prob`

argument with new value.

For example, to enable mixup,

```
train.py ../imagenette2-320 --mixup 0.5
train.py ../imagenette2-320 --mixup 0.5 --mixup-prob 0.7
```

Or for Cutmix,

```
train.py ../imagenette2-320 --cutmix 0.5
train.py ../imagenette2-320 --cutmix 0.5 --mixup-prob 0.7
```

It is also possible to enable both,

```
python train.py ../imagenette2-320 --mixup 0.5 --cutmix 0.5 --mixup-switch-prob 0.3
```

The above command will use either Mixup or Cutmix as data augmentation techniques and apply it to the batch with 50% probability. It will also switch between the two with 30% probability (Mixup - 70%, 30% switch to Cutmix).

There is also a parameter to turn off Mixup/Cutmix augmentation at a certail epoch:

```
python train.py ../imagenette2-320 --mixup 0.5 --cutmix 0.5 --mixup-switch-prob 0.3 --mixup-off-epoch 10
```

The above command only applies the Mixup/Cutmix data augmentation for the first 10 epochs.

---

## Source: https://timm.fast.ai/training_modelEMA

When training a model, it is often beneficial to maintain moving averages of the trained parameters. Evaluations that use averaged parameters sometimes produce significantly better results than the final trained values.

**Note:**A smoothed version of the weights is necessary for some training schemes to perform well. Example Google’s hyper-params for training MNASNet, MobileNet-V3, EfficientNet, etc that use RMSprop with a short 2.4-3 epoch decay period and slow LR decay rate of .96-.99 requires EMA smoothing of weights to match results.

`timm`

supports EMA similar to [tensorflow](https://www.tensorflow.org/api_docs/python/tf/train/ExponentialMovingAverage).

To train models with EMA simply add the `--model-ema`

flag and `--model-ema-decay`

flag with a value to define the decay rate for EMA.

To keep EMA from using GPU resources, set device='cpu'. This will save a bit of memory but disable validation of the EMA weights. Validation will have to be done manually in a separate process, or after the training stops converging.

**Note:**This class is sensitive where it is initialized in the sequence of model init, GPU assignment and distributed training wrappers.

```
python train.py ../imagenette2-320 --model resnet34
```

```
python train.py ../imagenette2-320 --model resnet34 --model-ema --model-ema-decay 0.99
```

The above training script means that when updating the model weights, we keep 99.99% of the previous model weights and only update 0.01% of the new weights at each iteration.

```
python"
model_weights = decay * model_weights + (1 - decay) * new_model_weights
```


Inside `timm`

, when we pass `--model-ema`

flag then `timm`

wraps the model class inside `ModelEmaV2`

class which looks like:

```
class ModelEmaV2(nn.Module):
def __init__(self, model, decay=0.9999, device=None):
super(ModelEmaV2, self).__init__()
# make a copy of the model for accumulating moving average of weights
self.module = deepcopy(model)
self.module.eval()
self.decay = decay
self.device = device # perform ema on different device from model if set
if self.device is not None:
self.module.to(device=device)
def _update(self, model, update_fn):
with torch.no_grad():
for ema_v, model_v in zip(self.module.state_dict().values(), model.state_dict().values()):
if self.device is not None:
model_v = model_v.to(device=self.device)
ema_v.copy_(update_fn(ema_v, model_v))
def update(self, model):
self._update(model, update_fn=lambda e, m: self.decay * e + (1. - self.decay) * m)
def set(self, model):
self._update(model, update_fn=lambda e, m: m)
```

Basically, we initialize the `ModeEmaV2`

by passing in an existing `model`

and a decay rate, in this case `decay=0.9999`

.

This looks something like `model_ema = ModelEmaV2(model)`

. Here, `model`

could be any existing model as long as it's created using the `timm.create_model`

function.

Next, during training especially inside the `train_one_epoch`

, we call the `update`

method of `model_ema`

like so:

```
if model_ema is not None:
model_ema.update(model)
```

All parameter updates based on `loss`

occur for `model`

. When we call `optimizer.step()`

, then the `model`

weights get updated and not the `model_ema`

's weights.

Therefore, when we call the `model_ema.update`

method, as can be seen, this calls the `_update`

method with `update_fn = lambda e, m: self.decay * e + (1. - self.decay) * m)`

.

**Note:**Basically, here,

`e`

refers to `model_ema`

and `m`

refers to the `model`

whose weights get updated during training. The `update_fn`

specifies that we keep `self.decay`

times the `model_ema`

and `1-self.decay`

times the `model`

. `_update`

function it goes through each of the parameters inside `model`

and `model_ema`

and updates the state for `model_ema`

to keep 99.99% of the existing state and 0.01% of the new state.
**Note:**Note that

`model`

and `model_ema`

have the same keys inside the `state_dict`

.

---

## Source: https://timm.fast.ai/mixup_cutmix

`timm`

supports a wide variety of augmentations and one such augmentation is [Mixup](https://arxiv.org/abs/1710.09412). [CutMix](https://arxiv.org/abs/1905.04899) followed Mixup and most deep learning practitioners use either Mixup or CutMix in their training pipelines to improve performance.

**BUT** with `timm`

there is an option to use both! In this tutorial we will be looking specifically into the various training arguments to implement `MixUp`

and `CutMix`

augmentations during training and also look into the internals of the library to see how this is achieved in `timm`

.

The various training arguments that are of interest when applying `Mixup`

/`CutMix`

data augmentations are:

```
--mixup MIXUP mixup alpha, mixup enabled if > 0. (default: 0.)
--cutmix CUTMIX cutmix alpha, cutmix enabled if > 0. (default: 0.)
--cutmix-minmax CUTMIX_MINMAX [CUTMIX_MINMAX ...]
cutmix min/max ratio, overrides alpha and enables
cutmix if set (default: None)
--mixup-prob MIXUP_PROB
Probability of performing mixup or cutmix when
either/both is enabled
--mixup-switch-prob MIXUP_SWITCH_PROB
Probability of switching to cutmix when both mixup and
cutmix enabled
--mixup-mode MIXUP_MODE
How to apply mixup/cutmix params. Per "batch", "pair",
or "elem"
--mixup-off-epoch N Turn off mixup after this epoch, disabled if 0. (default: 0.)
```

To train a network with only mixup enabled, simply pass in the `--mixup`

argument with value of Mixup alpha.

Default probability of augmentation is 1.0, if you need to change it, use `--mixup-prob`

argument with new value.

```
python train.py ../imagenette2-320 --mixup 0.5
python train.py ../imagenette2-320 --mixup 0.5 --mixup-prob 0.7
```

To train a network only CutMix enabled, simply pass in the `--cutmix`

argument with with value of Cutmix alpha.

Default probability of augmentation is 1.0, if you need to change it, use `--mixup-prob`

argument with new value.

```
python train.py ../imagenette2-320 --cutmix 0.2
python train.py ../imagenette2-320 --cutmix 0.2 --mixup-prob 0.7
```

To train a nueral network with both enabled,

```
python train.py ../imagenette2-320 --cutmix 0.4 --mixup 0.5
```

Default probability of switching betwin mixup and cutmix is 0.5.

To change it use `--mixup-switch-prob`

argument. It is probability to switch to cutmix.

```
python train.py ../imagenette2-320 --cutmix 0.4 --mixup 0.5 --mixup-switch-prob 0.4
```

Internally, the `timm`

library has a class called `Mixup`

that is capable of impementing both Mixup and Cutmix.

```
import torch
from timm.data.mixup import Mixup
from timm.data.dataset import ImageDataset
from timm.data.loader import create_loader
```

```
def get_dataset_and_loader(mixup_args):
mixup_fn = Mixup(**mixup_args)
dataset = ImageDataset('../../imagenette2-320')
loader = create_loader(dataset,
input_size=(3,224,224),
batch_size=4,
is_training=True,
use_prefetcher=False)
return mixup_fn, dataset, loader
```

```
import torchvision
import numpy as np
from matplotlib import pyplot as plt
```

```
def imshow(inp, title=None):
"""Imshow for Tensor."""
inp = inp.numpy().transpose((1, 2, 0))
mean = np.array([0.485, 0.456, 0.406])
std = np.array([0.229, 0.224, 0.225])
inp = std * inp + mean
inp = np.clip(inp, 0, 1)
plt.imshow(inp)
if title is not None:
plt.title(title)
plt.pause(0.001) # pause a bit so that plots are updated
```

```
mixup_args = {
'mixup_alpha': 1.,
'cutmix_alpha': 0.,
'cutmix_minmax': None,
'prob': 1.0,
'switch_prob': 0.,
'mode': 'batch',
'label_smoothing': 0,
'num_classes': 1000}
```

```
mixup_fn, dataset, loader = get_dataset_and_loader(mixup_args)
inputs, classes = next(iter(loader))
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes])
```

```
inputs, classes = mixup_fn(inputs, classes)
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes.argmax(1)])
```

```
mixup_args = {
'mixup_alpha': 0.,
'cutmix_alpha': 1.0,
'cutmix_minmax': None,
'prob': 1.0,
'switch_prob': 0.,
'mode': 'batch',
'label_smoothing': 0,
'num_classes': 1000}
```

```
mixup_fn, dataset, loader = get_dataset_and_loader(mixup_args)
inputs, classes = next(iter(loader))
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes])
```

```
inputs, classes = mixup_fn(inputs, classes)
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes.argmax(1)])
```

```
def mixup(x, lam):
"""Applies mixup to input batch of images `x`
Args:
x (torch.Tensor): input batch tensor of shape (bs, 3, H, W)
lam (float): Amount of MixUp
"""
x_flipped = x.flip(0).mul_(1-lam)
x.mul_(lam).add_(x_flipped)
return x
```

```
mixup_fn, dataset, loader = get_dataset_and_loader(mixup_args)
inputs, classes = next(iter(loader))
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes])
```

```
imshow(
torchvision.utils.make_grid(
mixup(inputs, 0.3)
),
title=[x.item() for x in classes])
```

It is also possible to do elementwise Mixup/Cutmix in `timm`

. As far as I know, this is the only library that allows for element wise Mixup and Cutmix!

Until now, all operations were applied batch-wise. That is Mixup was done for all elements in a batch. But, by passing argument `mode = 'elem'`

to the `Mixup`

function, we can change it to be elementwise.

In this case, `Cutmix`

or `Mixup`

is applied to each item inside the batch based on the `mixup_args`

.

As can be seen below, Cutmix is being applied to the first, second and third item in the batch, whereas mixup is being applied to the fourth item.

```
mixup_args = {
'mixup_alpha': 0.3,
'cutmix_alpha': 0.3,
'cutmix_minmax': None,
'prob': 1.0,
'switch_prob': 0.5,
'mode': 'elem',
'label_smoothing': 0,
'num_classes': 1000}
```

```
mixup_fn, dataset, loader = get_dataset_and_loader(mixup_args)
inputs, classes = next(iter(loader))
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes])
```

```
inputs, classes = mixup_fn(inputs, classes)
out = torchvision.utils.make_grid(inputs)
imshow(out, title=[x.item() for x in classes.argmax(1)])
```

---

## Source: https://timm.fast.ai/RandAugment

In this tutorial we will first look at how we can use `RandAugment`

to train our models using `timm`

's training script. Next, we will also look at how one can call the `rand_augment_transform`

function in `timm`

and add `RandAugment`

to custom training loops.

Finally, we will take a brief look at what `RandAugment`

is and also look at the `timm`

s implementation of `RandAugment`

in detail to understand the differences.

The research paper for `RandAugment`

can be referred [here](https://arxiv.org/abs/1909.13719).

To train your models using `randaugment`

, simply pass the `--aa`

argument to the training script with a value. Something like:

```
python train.py ../imagenette2-320 --aa rand-m9-mstd0.5
```

Therefore, then by passing in the `--aa`

argument with a value `rand-m9-mstd0.5`

means we will be using `RandAugment`

where the magnitude of the augmentations operations is `9`

. Passing in a magnitude standard deviation means that the magnitute will vary based on the `mstd`

value.

```
magnitude = random.gauss(magnitude, magnitude_std)
```

Thus this means that the magnitude varies as a gaussian distribution with standard deviation of `mstd`

around the `magnitude`

.

Don't want to use the training script from `timm`

and just want to use the `RandAugment`

method as an augmentation in your training script?

Just create a `rand_augment_transform`

as shown below but make sure that your dataset applies this transform to the input when the input image is a `PIL.Image`

and not `torch.tensor`

. That is, this method only works on `PIL.Image`

s and not `tensor`

s.

The normalization and conversion to tensor operation can be performed after the `RandAugment`

augmentation has been applied.

Let's see a quick example of the `rand_augment_transform`

function in `timm`

in action!

**Note:**Don’t worry about the

`config_str`

and `hparams`

that get passed to the `rand_augment_transform`

function for now. This will be explained later in this tutorial.```
from timm.data.auto_augment import rand_augment_transform
from PIL import Image
from matplotlib import pyplot as plt
tfm = rand_augment_transform(
config_str='rand-m9-mstd0.5',
hparams={'translate_const': 117, 'img_mean': (124, 116, 104)}
)
x = Image.open("../../imagenette2-320/train/n01440764/ILSVRC2012_val_00000293.JPEG")
plt.imshow(x)
```

Let's visualize the original image `x`

.

```
plt.imshow(x)
```

Great! It's an image of a "tench". (If you're not aware about what a "tench" is, you're not a true deep learning practitioner)

Let's now visualize the transformed version of the image.

**Note:**Also, it is important to note here that the

`rand_augment_transform`

function actually works on expects a `PIL.Image`

and not a `torch.Tensor`

as input. ```
plt.imshow(tfm(x))
```

As we can see, the `rand_augment_transform`

above is performing data augmentation on our input image `x`

.

In this section we will first look into what `RandAugment`

is and later in section `1.2`

we will look into the `timm`

s implementation of `RandAugment`

. Feel free to skip as it does not really add any more information but only explains how `timm`

implements `RandAugment`

.

From the paper, `RandAugment`

can be implemented in numpy like so:

```
transforms = [
’Identity’, ’AutoContrast’, ’Equalize’,
’Rotate’, ’Solarize’, ’Color’, ’Posterize’,
’Contrast’, ’Brightness’, ’Sharpness’,
’ShearX’, ’ShearY’, ’TranslateX’, ’TranslateY’]
def randaugment(N, M):
"""Generate a set of distortions.
Args:
N: Number of augmentation transformations to
apply sequentially.
M: Magnitude for all the transformations.
"""
sampled_ops = np.random.choice(transforms, N)
return [(op, M) for op in sampled_ops]
```

Basically we have a list of `transforms`

, and from that list we select `N`

transforms. Next, we apply that operation with a magnitude of `M`

to the input image. And that's really it. That's `RandAugment`

. Let's have a look at how `timm`

implements this.

In this section we will be taking a deep dive inside the `rand_augment_transform`

function. Let's take a look at the source code:

```
def rand_augment_transform(config_str, hparams):
"""
Create a RandAugment transform
:param config_str: String defining configuration of random augmentation. Consists of multiple sections separated by
dashes ('-'). The first section defines the specific variant of rand augment (currently only 'rand'). The remaining
sections, not order sepecific determine
'm' - integer magnitude of rand augment
'n' - integer num layers (number of transform ops selected per image)
'w' - integer probabiliy weight index (index of a set of weights to influence choice of op)
'mstd' - float std deviation of magnitude noise applied
'inc' - integer (bool), use augmentations that increase in severity with magnitude (default: 0)
Ex 'rand-m9-n3-mstd0.5' results in RandAugment with magnitude 9, num_layers 3, magnitude_std 0.5
'rand-mstd1-w0' results in magnitude_std 1.0, weights 0, default magnitude of 10 and num_layers 2
:param hparams: Other hparams (kwargs) for the RandAugmentation scheme
:return: A PyTorch compatible Transform
"""
magnitude = _MAX_LEVEL # default to _MAX_LEVEL for magnitude (currently 10)
num_layers = 2 # default to 2 ops per image
weight_idx = None # default to no probability weights for op choice
transforms = _RAND_TRANSFORMS
config = config_str.split('-')
assert config[0] == 'rand'
config = config[1:]
for c in config:
cs = re.split(r'(\d.*)', c)
if len(cs) < 2:
continue
key, val = cs[:2]
if key == 'mstd':
# noise param injected via hparams for now
hparams.setdefault('magnitude_std', float(val))
elif key == 'inc':
if bool(val):
transforms = _RAND_INCREASING_TRANSFORMS
elif key == 'm':
magnitude = int(val)
elif key == 'n':
num_layers = int(val)
elif key == 'w':
weight_idx = int(val)
else:
assert False, 'Unknown RandAugment config section'
ra_ops = rand_augment_ops(magnitude=magnitude, hparams=hparams, transforms=transforms)
choice_weights = None if weight_idx is None else _select_rand_weights(weight_idx)
return RandAugment(ra_ops, num_layers, choice_weights=choice_weights)
```

The basic idea behind the function above is this - "Based on the config `str`

passed, update the `hparams`

parameter and also set the value of the variable `magnitude`

if passed, unless it remains the default value `_MAX_LEVEL`

which is 10.0.

Also set the `transforms`

variable to `_RAND_TRANSFORMS`

. `_RAND_TRANSFORMS`

is a list of transforms to choose from similar to the paper that looks like

```
_RAND_TRANSFORMS = [
'AutoContrast',
'Equalize',
'Invert',
'Rotate',
'Posterize',
'Solarize',
'SolarizeAdd',
'Color',
'Contrast',
'Brightness',
'Sharpness',
'ShearX',
'ShearY',
'TranslateXRel',
'TranslateYRel',
#'Cutout' # NOTE I've implement this as random erasing separately
]
```

Once the `hparams`

, `magnitude`

and `transforms`

variables have been set, next, call the `rand_augment_ops`

function to set a value for the variable `ra_ops`

. Finally we call return an instance `RandAugment`

class based on these variables.

So let's next look into `rand_augment_ops`

function and `RandAugment`

class.

The complete source code of this function looks something like:

```
def rand_augment_ops(magnitude=10, hparams=None, transforms=None):
hparams = hparams or _HPARAMS_DEFAULT
transforms = transforms or _RAND_TRANSFORMS
return [AugmentOp(
name, prob=0.5, magnitude=magnitude, hparams=hparams) for name in transforms]
```

**Note:**We are passing in a hard-coded value for

`prob=0.5`

.Basically, it creates an instance of the `AugmentOp`

class. So, all the fun is inside the `AugmentOp`

class. Let's take a look at it.

Let's take a look at the source code of this class.

```
class AugmentOp:
def __init__(self, name, prob=0.5, magnitude=10, hparams=None):
hparams = hparams or _HPARAMS_DEFAULT
self.aug_fn = NAME_TO_OP[name]
self.level_fn = LEVEL_TO_ARG[name]
self.prob = prob
self.magnitude = magnitude
self.hparams = hparams.copy()
self.kwargs = dict(
fillcolor=hparams['img_mean'] if 'img_mean' in hparams else _FILL,
resample=hparams['interpolation'] if 'interpolation' in hparams else _RANDOM_INTERPOLATION,
)
# If magnitude_std is > 0, we introduce some randomness
# in the usually fixed policy and sample magnitude from a normal distribution
# with mean `magnitude` and std-dev of `magnitude_std`.
# NOTE This is my own hack, being tested, not in papers or reference impls.
self.magnitude_std = self.hparams.get('magnitude_std', 0)
def __call__(self, img):
if self.prob < 1.0 and random.random() > self.prob:
return img
magnitude = self.magnitude
if self.magnitude_std and self.magnitude_std > 0:
magnitude = random.gauss(magnitude, self.magnitude_std)
magnitude = min(_MAX_LEVEL, max(0, magnitude)) # clip to valid range
level_args = self.level_fn(magnitude, self.hparams) if self.level_fn is not None else tuple()
return self.aug_fn(img, *level_args, **self.kwargs)
```

Above, we already know that the value of `self.prob`

is 0.5. Therefore, calling this class will return the `img`

50% of the time and actually perform the actual `self.aug_fn`

50% of the time.

You might ask what is this `self.aug_fn`

? Remember that the `transforms`

was a list of `_RAND_TRANFORMS`

as below:

```
_RAND_TRANSFORMS = [
'AutoContrast',
'Equalize',
'Invert',
'Rotate',
'Posterize',
'Solarize',
'SolarizeAdd',
'Color',
'Contrast',
'Brightness',
'Sharpness',
'ShearX',
'ShearY',
'TranslateXRel',
'TranslateYRel',
#'Cutout' # NOTE I've implement this as random erasing separately
]
```

And that we create a list of instances of `AugmentOp`

like so `[AugmentOp(name, prob=0.5, magnitude=magnitude, hparams=hparams) for name in transforms]`

for each of the `transforms`

that get's returned by `rand_augment_ops`

.

Well, the `self.aug_fn`

actually first uses the `NAME_TO_OP`

dictionary to convert the name to operation.

**Note:**This is a very common pattern that you will see inside

`timm`

. At a lot of places we pass in a `str`

as a function argument that get’s processed inside the function and uses to perform some action items. This `NAME_TO_OP`

is nothing but a dictionary that links each of the `_RAND_TRANSFORMS`

names to their respective function implementations inside `timm`

.

```
NAME_TO_OP = {
'AutoContrast': auto_contrast,
'Equalize': equalize,
'Invert': invert,
'Rotate': rotate,
'Posterize': posterize,
'PosterizeIncreasing': posterize,
'PosterizeOriginal': posterize,
'Solarize': solarize,
'SolarizeIncreasing': solarize,
'SolarizeAdd': solarize_add,
'Color': color,
'ColorIncreasing': color,
'Contrast': contrast,
'ContrastIncreasing': contrast,
'Brightness': brightness,
'BrightnessIncreasing': brightness,
'Sharpness': sharpness,
'SharpnessIncreasing': sharpness,
'ShearX': shear_x,
'ShearY': shear_y,
'TranslateX': translate_x_abs,
'TranslateY': translate_y_abs,
'TranslateXRel': translate_x_rel,
'TranslateYRel': translate_y_rel,
}
```

So in summary, this `AugmentOp`

is nothing but a wrapper on top of thie `self.aug_fn`

that accepts an `img`

and only performs the `self.aug_fn`

on the `img`

50% of the times. Otherwise, it just returns the `img`

unchanged.

Great so this `ra_ops`

variable inside the `rand_augment_transform`

function is nothing but a list of instances of the `AugmentOp`

class that just means that we apply the given augmentation function 50% of the time to the image.

Finally, as we saw in the source code of `rand_augment_transform`

, what get's returned is actually an instance of `RandAugment`

class that accepts the `ra_ops`

, `choice_weights`

and `num_layers`

as arguments. So let's took at it next.

The complete source code of this class looks like:

```
class RandAugment:
def __init__(self, ops, num_layers=2, choice_weights=None):
self.ops = ops
self.num_layers = num_layers
self.choice_weights = choice_weights
def __call__(self, img):
# no replacement when using weighted choice
ops = np.random.choice(
self.ops, self.num_layers, replace=self.choice_weights is None, p=self.choice_weights)
for op in ops:
img = op(img)
return img
```

As already mentioned before, the `ra_ops`

that get's passed to RandAugment is nothing but a list of instances of `AugmentOp`

wrapper around the various transforms in `_RAND_TRANSFORMS`

, so this `ops`

looks something like:

```
ops = [<timm.data.auto_augment.AugmentOp object at 0x7f7a03466990>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466c50>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466650>, <timm.data.auto_augment.AugmentOp object at 0x7f7a034666d0>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466e10>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466490>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466750>, <timm.data.auto_augment.AugmentOp object at 0x7f7a034667d0>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466410>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466710>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466190>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466450>, <timm.data.auto_augment.AugmentOp object at 0x7f7a034664d0>, <timm.data.auto_augment.AugmentOp object at 0x7f7a03466150>, <timm.data.auto_augment.AugmentOp object at 0x7f7a034661d0>]
```

As can be seen, the `ops`

is nothing a but a list of `AugmentOp`

instances. Basically, each transform is wrapped around by this `AugmentOp`

class which means that the `transform`

only get's applied 50% of the time.

Next, for each `img`

, we select `num_layers`

random augmentation and apply it to the image as in the `__call__`

method of this class.

```
ops = np.random.choice(
self.ops, self.num_layers, replace=self.choice_weights is None, p=self.choice_weights)
for op in ops:
img = op(img)
```

Finally, we return this augmented image.

---

## Source: https://timm.fast.ai/RandomErase

From the abstract of the [paper](https://arxiv.org/abs/1708.04896):

`In training, Random Erasing randomly selects a rectangle region in an image and erases its pixels with random values. In this process, training images with various levels of occlusion are generated, which reduces the risk of over-fitting and makes the model robust to occlusion. Random Erasing is parameter learning free, easy to implement, and can be integrated with most of the CNN-based recognition models.`



As seen from image above, this `RandomErase`

data augmentation, randomly selects a region from the input image, erases the existing image in that region and fills the region with random values.

To train a model using the `RandomErase`

data augmentation using `timm`

's training script, simply add the `--reprob`

flag with a probability value.

```
python train.py ../imagenette2-320 --reprob 0.4
```

Running the above command applies the `RandomErase`

data augmentation to the input images with a probability of `0.4`

.

Section `1.1`

provides an example of using `RandomErase`

data augmentation to train a nueral net using `timm`

's training script. But often you might want to simply just use `RandomErase`

augmentation using your own custom training loop. This section explains how one could achieve that.

The `RandomErase`

data augmentation inside `timm`

is implemented inside `RandomErasing`

class. All we do in the code below, is first create an input image tensor, and visualize it.

**Note:**This variant of RandomErasing is intended to be applied to either a batch or single image tensor after it has been normalized by dataset mean and std. This is different from

`RandAugment`

where the class expects a `PIL.Image`

as input. ```
from PIL import Image
from timm.data.random_erasing import RandomErasing
from torchvision import transforms
from matplotlib import pyplot as plt
img = Image.open("../../imagenette2-320/train/n01440764/ILSVRC2012_val_00000293.JPEG")
x = transforms.ToTensor()(img)
plt.imshow(x.permute(1, 2, 0))
```

Great, as we can see it is the same image of a "tench" as shown pretty much everywhere inside this documentation. Let's now apply the `RandomErasing`

augmentation and visualize the results.

```
random_erase = RandomErasing(probability=1, mode='pixel', device='cpu')
plt.imshow(random_erase(x).permute(1, 2, 0))
```

As we can see, after applying the `RandomErasing`

data augmentation, a square of random size inside the image has been replaced with random values as mentioned in the paper. Thus, pseudo-code to use `RandomErasing`

in your custom training script would look something like:

```
from timm.data.random_erasing import RandomErasing
# get input images and convert to `torch.tensor`
X, y = input_training_batch()
X = convert_to_torch_tensor(X)
# perform RandomErase data augmentation
random_erase = RandomErasing(probability=0.5)
# get augmented batch
X_aug = random_erase(X)
# do something here
```

In this section we will look at the source code of the `RandomErasing`

class inside `timm`

. The complete source code of this class looks like:

```
class RandomErasing:
""" Randomly selects a rectangle region in an image and erases its pixels.
'Random Erasing Data Augmentation' by Zhong et al.
See https://arxiv.org/pdf/1708.04896.pdf
This variant of RandomErasing is intended to be applied to either a batch
or single image tensor after it has been normalized by dataset mean and std.
Args:
probability: Probability that the Random Erasing operation will be performed.
min_area: Minimum percentage of erased area wrt input image area.
max_area: Maximum percentage of erased area wrt input image area.
min_aspect: Minimum aspect ratio of erased area.
mode: pixel color mode, one of 'const', 'rand', or 'pixel'
'const' - erase block is constant color of 0 for all channels
'rand' - erase block is same per-channel random (normal) color
'pixel' - erase block is per-pixel random (normal) color
max_count: maximum number of erasing blocks per image, area per box is scaled by count.
per-image count is randomly chosen between 1 and this value.
"""
def __init__(
self,
probability=0.5, min_area=0.02, max_area=1/3, min_aspect=0.3, max_aspect=None,
mode='const', min_count=1, max_count=None, num_splits=0, device='cuda'):
self.probability = probability
self.min_area = min_area
self.max_area = max_area
max_aspect = max_aspect or 1 / min_aspect
self.log_aspect_ratio = (math.log(min_aspect), math.log(max_aspect))
self.min_count = min_count
self.max_count = max_count or min_count
self.num_splits = num_splits
mode = mode.lower()
self.rand_color = False
self.per_pixel = False
if mode == 'rand':
self.rand_color = True # per block random normal
elif mode == 'pixel':
self.per_pixel = True # per pixel random normal
else:
assert not mode or mode == 'const'
self.device = device
def _erase(self, img, chan, img_h, img_w, dtype):
if random.random() > self.probability:
return
area = img_h * img_w
count = self.min_count if self.min_count == self.max_count else \
random.randint(self.min_count, self.max_count)
for _ in range(count):
for attempt in range(10):
target_area = random.uniform(self.min_area, self.max_area) * area / count
aspect_ratio = math.exp(random.uniform(*self.log_aspect_ratio))
h = int(round(math.sqrt(target_area * aspect_ratio)))
w = int(round(math.sqrt(target_area / aspect_ratio)))
if w < img_w and h < img_h:
top = random.randint(0, img_h - h)
left = random.randint(0, img_w - w)
img[:, top:top + h, left:left + w] = _get_pixels(
self.per_pixel, self.rand_color, (chan, h, w),
dtype=dtype, device=self.device)
break
def __call__(self, input):
if len(input.size()) == 3:
self._erase(input, *input.size(), input.dtype)
else:
batch_size, chan, img_h, img_w = input.size()
# skip first slice of batch if num_splits is set (for clean portion of samples)
batch_start = batch_size // self.num_splits if self.num_splits > 1 else 0
for i in range(batch_start, batch_size):
self._erase(input[i], chan, img_h, img_w, input.dtype)
return input
```

All the fun is going inside the `_erase`

method which we will look into next. But in simple words what the above code is doing is that we call this class either passing in a single tensor of size 3 `CHW`

or an input batch of size 4 `NCHW`

. If it's an input batch, and batch is not split similar to `Augmix`

, then we apply the `RandomErase`

data augmentation to the whole batch otherwise we leave the first split as is which becomes the clean split. This splitting of the dataset has already been explained [here](https://fastai.github.io/timmdocs/dataset#AugmixDataset) and [here](https://fastai.github.io/timmdocs/tutorial_splitbn).

Let's now look at the `_erase`

method in detail and understand all the magic.

```
def _erase(self, img, chan, img_h, img_w, dtype):
if random.random() > self.probability:
return
area = img_h * img_w
count = self.min_count if self.min_count == self.max_count else \
random.randint(self.min_count, self.max_count)
for _ in range(count):
for attempt in range(10):
target_area = random.uniform(self.min_area, self.max_area) * area / count
aspect_ratio = math.exp(random.uniform(*self.log_aspect_ratio))
h = int(round(math.sqrt(target_area * aspect_ratio)))
w = int(round(math.sqrt(target_area / aspect_ratio)))
if w < img_w and h < img_h:
top = random.randint(0, img_h - h)
left = random.randint(0, img_w - w)
img[:, top:top + h, left:left + w] = _get_pixels(
self.per_pixel, self.rand_color, (chan, h, w),
dtype=dtype, device=self.device)
break
```

The `_erase`

method above accepts an input `img`

(torch.tensor), `chan`

which represents the number of channels in the image and also `img_h`

and `img_w`

which refer to image height and width.

We select a value for `count`

based on `self.min_count`

and `self.max_count`

. The `self.min_count`

has already been set to minimum number of random erase blocks, and `self.max_count`

refers to the maximum number of random erase blocks. Most of the times, both default to 1, that is we only add a single random erase block to the input `img`

.

Next, we select a random `target_area`

and `aspect_ratio`

of the random erase block, and based on these we select the values of the `h`

height and `w`

width of the random erase block.

Finally, we replace the pixels inside the image from location `img[:, top:top + h, left:left + w]`

where `top`

represents a random integer value on the y-axis and `left`

represents a random integer value on the x-axis. The `_get_pixels`

is a function implemented in `timm`

that returns the random values to be filled inside the random erase block depending on the `Random Erase`

mode inside `timm`

.

If `mode=='pixel'`

, then, the `_get_pixels`

returns a normal distribution, otherwise a constant value of `0`

is filled.

---

## Source: https://timm.fast.ai/AutoAugment

In this tutorial, we will be looking at how one can make use of [AutoAugment](https://arxiv.org/abs/1805.09501) as a data augmentation technique to train a neural net.

We look at:

- How can we use the
`timm`

training script to apply`AutoAugment`

. - How can we use
`AutoAugment`

as a standalone data augmentation technique for custom training loops. - Take a deep-dive inside the source code of
`AutoAugment`

.

To train a model using the `timm`

's and apply auto augmentation data policy, simply add the `--aa`

flag with a value of `'original'`

or `'v1'`

like so:

```
python train.py ../imagenette2-320 --aa original
```

**Note:**The "original" policy is the ImageNet policy from the

[paper](https://arxiv.org/abs/1805.09501).

The above script trains a neural net using `AutoAugment`

as an augmentation technique with the same policies as mentioned in the paper.

In this section we will see how we can use `AutoAugment`

as a standalone data augmentation technique in our own custom training loops.

We can simply create a transform function called `tfm`

using the `auto_augment_transform`

function in `timm`

. We pass in a `config_str`

and some `hparams`

to the function to create our transform function.

**Note:**To apply

`AutoAugment`

, the transform function `tfm`

created below expects the input to be an instance of `PIL.Image`

and not a `torch.tensor`

. Calling this function on a `torch.tensor`

will cause an error. Below, we create our transformation function `tfm`

, and also creat an input image `X`

which is the image of a "tench" as used everywhere else in this documentation.

```
from timm.data.auto_augment import auto_augment_transform
from PIL import Image
from matplotlib import pyplot as plt
tfm = auto_augment_transform(config_str = 'original', hparams = {'translate_const': 100, 'img_mean': (124, 116, 104)})
X = Image.open('../../imagenette2-320/train/n01440764/ILSVRC2012_val_00000293.JPEG')
plt.imshow(X);
```

Having visualized `X`

, let's apply the transform function which applies the auto-augmentation policy to `X`

and let's visualize the results below:

```
plt.imshow(tfm(X));
```

As we can see, the function `tfm`

applies auto augmentation technique to the input image `X`

.

Thus, as long as we make sure that this function transforms an input image that is of type `PIL.Image`

, we can use `timm`

to apply `AutoAugment`

in our custom training loops.

Let's now take a deep dive to understand the `timm`

's implementation of `AutoAugment`

policy.

The complete source code of the `auto_augment_transform`

that we used above looks like:

```
def auto_augment_transform(config_str, hparams):
"""
Create a AutoAugment transform
:param config_str: String defining configuration of auto augmentation. Consists of multiple sections separated by
dashes ('-'). The first section defines the AutoAugment policy (one of 'v0', 'v0r', 'original', 'originalr').
The remaining sections, not order sepecific determine
'mstd' - float std deviation of magnitude noise applied
Ex 'original-mstd0.5' results in AutoAugment with original policy, magnitude_std 0.5
:param hparams: Other hparams (kwargs) for the AutoAugmentation scheme
:return: A PyTorch compatible Transform
"""
config = config_str.split('-')
policy_name = config[0]
config = config[1:]
for c in config:
cs = re.split(r'(\d.*)', c)
if len(cs) < 2:
continue
key, val = cs[:2]
if key == 'mstd':
# noise param injected via hparams for now
hparams.setdefault('magnitude_std', float(val))
else:
assert False, 'Unknown AutoAugment config section'
aa_policy = auto_augment_policy(policy_name, hparams=hparams)
return AutoAugment(aa_policy)
```

This is very similar to [RandAugment](https://fastai.github.io/timmdocs/RandAugment)'s implementation. Basically, we pass in a config string, and based on the config string, this function sets up some `hparams`

that then get passed to `auto_augment_policy`

to create the policy. Finally we wrap this `aa_policy`

around the `AutoAugment`

class which get's returned to be applied to the input data.

Let's take a look inside the `auto_augment_policy`

and `AutoAugment`

source code below.

The source code of the `auto_augment_policy`

function looks something like:

```
def auto_augment_policy(name='v0', hparams=None):
hparams = hparams or _HPARAMS_DEFAULT
if name == 'original':
return auto_augment_policy_original(hparams)
```

Basically, this function accepts a policy name and then returns the corresponding augmentation policy.

Let's take a look inside the `auto_augment_policy_original`

function below.

The source code of this function looks like:

```
def auto_augment_policy_original(hparams):
# ImageNet policy from https://arxiv.org/abs/1805.09501
policy = [
[('PosterizeOriginal', 0.4, 8), ('Rotate', 0.6, 9)],
[('Solarize', 0.6, 5), ('AutoContrast', 0.6, 5)],
[('Equalize', 0.8, 8), ('Equalize', 0.6, 3)],
[('PosterizeOriginal', 0.6, 7), ('PosterizeOriginal', 0.6, 6)],
[('Equalize', 0.4, 7), ('Solarize', 0.2, 4)],
[('Equalize', 0.4, 4), ('Rotate', 0.8, 8)],
[('Solarize', 0.6, 3), ('Equalize', 0.6, 7)],
[('PosterizeOriginal', 0.8, 5), ('Equalize', 1.0, 2)],
[('Rotate', 0.2, 3), ('Solarize', 0.6, 8)],
[('Equalize', 0.6, 8), ('PosterizeOriginal', 0.4, 6)],
[('Rotate', 0.8, 8), ('Color', 0.4, 0)],
[('Rotate', 0.4, 9), ('Equalize', 0.6, 2)],
[('Equalize', 0.0, 7), ('Equalize', 0.8, 8)],
[('Invert', 0.6, 4), ('Equalize', 1.0, 8)],
[('Color', 0.6, 4), ('Contrast', 1.0, 8)],
[('Rotate', 0.8, 8), ('Color', 1.0, 2)],
[('Color', 0.8, 8), ('Solarize', 0.8, 7)],
[('Sharpness', 0.4, 7), ('Invert', 0.6, 8)],
[('ShearX', 0.6, 5), ('Equalize', 1.0, 9)],
[('Color', 0.4, 0), ('Equalize', 0.6, 3)],
[('Equalize', 0.4, 7), ('Solarize', 0.2, 4)],
[('Solarize', 0.6, 5), ('AutoContrast', 0.6, 5)],
[('Invert', 0.6, 4), ('Equalize', 1.0, 8)],
[('Color', 0.6, 4), ('Contrast', 1.0, 8)],
[('Equalize', 0.8, 8), ('Equalize', 0.6, 3)],
]
pc = [[AugmentOp(*a, hparams=hparams) for a in sp] for sp in policy]
return pc
```

It's actually pretty simple the way `auto_augment_policy_original`

has been constructed. As we know from the paper, the ImageNet policy consits of 25 sub policies. We iterate through the `policy`

above to get a sub-policy `sp`

. Finally we also iterate through each operation referred to as `a`

in sub-policy `sp`

and wrap it around the `AugmentOp`

class.

We have already looked into the `AugmentOp`

class [here](https://fastai.github.io/timmdocs/RandAugment#AugmentOp).

Thus, in essence, each operation in the sub-policy get's converted to an instance of `AugmentOp`

class based on the probability and magnitude values mentioned in the policy above. This becomes the policy that get's returned to create `aa_policy`

in `auto_augment_transform`

.

As a last step in `auto_augment_transform`

we wrap this `aa_policy`

in `AutoAugment`

class and that's what get's applied to the input data. So let's look into `AutoAugment`

below:

```
class AutoAugment:
def __init__(self, policy):
self.policy = policy
def __call__(self, img):
sub_policy = random.choice(self.policy)
for op in sub_policy:
img = op(img)
return img
```

Really, this is one of the simplest implementations of `AutoAugment`

. Similar to the paper, we select a random sub-policy, which consists of two operations (where each operation consists of an augmentation function, magnitude and probability of applying the augmentation function), and finally apply to these operations to the `img`

to return the augmented image.

---

## Source: https://timm.fast.ai/random_resized_crop

In this piece of documentation, we will be looking at the `RandomResizedCropAndInterpolation`

data augmentation in `timm`

. This augmentation get's applied in `timm`

to the input data by default unless the `--no-aug`

flag has been passed to train the model, in which case no augmentations except `Resize`

and `CenterCrop`

get applied.

Since this `RandomResizedCropAndInterpolation`

augmentation get's applied by default, we don't look into an example on how we could apply it to the training data. Any training script applies this technique such as the one below:

```
python train.py ../imagenette2-320
```

To not apply any data augmentation to the input data, one could pass in the `--no-aug`

flag like so:

```
python train.py ../imagenette2-320 --no-aug
```

In this section we will be looking at how we could leverage the `timm`

library to apply this data augmentation technique to our input data. Let's see an example.

```
from timm.data.transforms import RandomResizedCropAndInterpolation
from PIL import Image
from matplotlib import pyplot as plt
tfm = RandomResizedCropAndInterpolation(size=224)
X = Image.open("../../imagenette2-320/train/n01440764/ILSVRC2012_val_00000293.JPEG")
plt.imshow(X)
```

As usual, we create an input image `X`

which is the usual image of a "tench" as used everywhere else in this documentation.

**Note:**

`RandomResizedCropAndInterpolation`

expects the input to be an instance of `PIL.Image`

and not `torch.tensor`

. Let's now apply the transform multiple times and visualize the results.

```
for i in range(6):
plt.subplot(2, 3, i+1)
plt.imshow(tfm(X))
```

As can be seen below, we can see the transform is working and it is randomly cropping/resizing the input image and also randomly changing the aspect ratio of the image.

---

## Source: https://timm.fast.ai/model_architectures

The model architectures included come from a wide variety of sources. Sources, including papers, original impl ("reference code") that [Ross](https://twitter.com/wightmanr) rewrote / adapted, and PyTorch impl that he leveraged directly ("code") are listed below.

Most included models have pretrained weights. The weights are either:

- from their original sources
- ported by myself from their original impl in a different framework (e.g. Tensorflow models)
- trained from scratch using the included training script

The validation results for the pretrained weights can be found [here](https://rwightman.github.io/pytorch-image-models/results/).

---

## Source: https://timm.fast.ai/models

`timm`

supports a wide variety of pretrained and non-pretrained models for number of Image based tasks.

To get a complete list of models, use the `list_models`

function from `timm`

as below. The `list_models`

function returns a list of models ordered alphabetically that are supported by `timm`

. We just look at the top-5 models below.

```
import timm
timm.list_models()[:5]
```

In general, you always want to use factory functions inside `timm`

. Particularly, you want to use `create_model`

function from `timm`

to create any model. It is possible to create any of the models listed in `timm.list_models()`

using the `create_model`

function. There are also some wonderful extra features that we will look at later. But, let's see a quick example.

```
import random
import torch
random_model_to_create = random.choice(timm.list_models())
random_model_to_create
```

```
model = timm.create_model(random_model_to_create)
x = torch.randn(1, 3, 224, 224)
model(x).shape
```

In the example above, we randomly select a model name in `timm.list_models()`

, create it and pass some dummy input data through the model to get some output. In general, you never want to create random models like this, and it's only an example to showcase that all models in `timm.list_models()`

are supported by `timm.create_model()`

function. It's really that easy to create a model using `timm`

.

Of course! `timm`

wants to make it super easy for researchers and practioners to experiment and supports a whole lot of models with pretrained weights. These pretrained weights are either:

- Directly used from their original sources
- Ported by Ross from their original implementation in a different framework (e.g. Tensorflow models)
- Trained from scratch using the included training script (
`train.py`

). The exact commands with hyperparameters to train these individual models are mentioned under`Training Scripts`

.

To list all the models that have pretrained weights, `timm`

provides a convenience parameter `pretrained`

that could be passed in `list_models`

function as below. We only list the top-5 returned models.

```
timm.list_models(pretrained=True)[:5]
```

**Note:**Just by listing the top-5 pretrained models, we can see that

`timm`

does not currently have pretrained weights for models such as `cspdarknet53_iabn`

or `cspresnet50d`

. This is a great opportunity for new contributors with hardware availability to pretrain the models on Imagenet dataset using the training script and share these weights. As you might already know, ImageNet data consists of 3-chanenl RGB images. Therefore, to be able to use pretrained weights in most libraries, the model expects a 3-channel input image.

```
import torchvision
m = torchvision.models.resnet34(pretrained=True)
# single-channel image (maybe x-ray)
x = torch.randn(1, 1, 224, 224)
# `torchvision` raises error
try: m(x).shape
except Exception as e: print(e)
```

As can be seen above, these pretrained weights from `torchvision`

won't work with single channel input images. As a work around most practitioners convert their single channel input images to 3-channel images by copying the single channel pixels accross to create a 3-channel image.

Basically, `torchvision`

above is complaining that it expects the input to have 3 channels, but got 1 channel instead.

```
# 25-channel image (maybe satellite image)
x = torch.randn(1, 25, 224, 224)
# `torchvision` raises error
try: m(x).shape
except Exception as e: print(e)
```

Again, `torchvision`

raises an error and this time there is no workaround to get past this error apart from just not using pretrained weights and starting with randomly initialized weights.

```
m = timm.create_model('resnet34', pretrained=True, in_chans=1)
# single channel image
x = torch.randn(1, 1, 224, 224)
m(x).shape
```

We pass in a parameter `in_chans`

to the `timm.create_model`

function and this somehow just magically works! Let's see what happens with the 25-channel image?

```
m = timm.create_model('resnet34', pretrained=True, in_chans=25)
# 25-channel image
x = torch.randn(1, 25, 224, 224)
m(x).shape
```

This works again! :)

`timm`

does all this magic inside the `load_pretrained`

function that get's called to load the pretrained weights of a model. Let's see how `timm`

achieves loading of pretrained weights.

```
from timm.models.resnet import ResNet, BasicBlock, default_cfgs
from timm.models.helpers import load_pretrained
from copy import deepcopy
```

Below, we create a simple `resnet34`

model that can take single channel images as input. We make this happen by passing in `in_chans=1`

to the `ResNet`

constructor class when creating the model.

```
resnet34_default_cfg = default_cfgs['resnet34']
resnet34 = ResNet(BasicBlock, layers=[3, 4, 6, 3], in_chans=1)
resnet34.default_cfg = deepcopy(resnet34_default_cfg)
resnet34.conv1
```

```
resnet34.conv1.weight.shape
```

As we can see from the first convolution of `resnet34`

above, the number of input channels is set to 1. And the `conv1`

weights are of shape `[64, 1, 7, 7]`

. This means that the number of input channels is 1, output channels is 64 and kernel size is `7x7`

.

But what about the pretrained weights? Because ImageNet consists of 3-channel input images, the pretrained for this `conv1`

layer would be `[64, 3, 7, 7]`

.Let's confirm that below:

```
resnet34_default_cfg
```

Let's load the pretrained weights from the model and check the number of input channels that `conv1`

expects.

```
import torch
state_dict = torch.hub.load_state_dict_from_url(resnet34_default_cfg['url'])
```

Great, so we have loaded the pretrained weights of resnet-34 from `'https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-weights/resnet34-43635321.pth'`

URL, let's now check the shape of the weights for `conv1`

below:

```
state_dict['conv1.weight'].shape
```

So this layer expects the number of input channels to be 3!

**Note:**We know this because the shape of

`conv1.weight`

is `[64, 3, 7, 7]`

, this means that the number of input channels is `3`

, output channels is `64`

and the kernel size is `7x7`

. **Note:**This is why when we try to load pretrained weights, torchvision gives an error because our model’s

`conv1`

layer weights would be of shape `[64, 1, 7, 7]`

because we set the number of input channels to be 1. I hope that this exception we saw above now makes more sense: `Given groups=1, weight of size [64, 3, 7, 7], expected input[1, 1, 224, 224] to have 3 channels, but got 1 channels instead.`

Something very clever happens inside the `load_pretrained`

function inside `timm`

. Basically, there's two main cases to consider when the expected number of input channels is not equal to 3. Either the input channels are 1 or not. Let's what happens in either case.

When the number of input channels is not equal to 3, then `timm`

updates the `conv1.weight`

of the pretrained weights accordingly to be able to load the pretrained weights.

If the number of input channels is 1, `timm`

simply sums the 3 channel weights into a single channel to update the shape of `conv1.weight`

to be `[64, 1, 7, 7]`

. This can be achieved like so:

```
conv1_weight = state_dict['conv1.weight']
conv1_weight.sum(dim=1, keepdim=True).shape
>> torch.Size([64, 1, 7, 7])
```

And thus by updating the shape of the first `conv1`

layer, we can now safely load these pretrained weights.

In this case, we simply repeat the `conv1_weight`

as many times as required and then select the required number of input channels weights.


As can be seen in the image above, let's say our input images have 8 channels. Therefore, number of input channels is equal to 8.

But, as we know our pretrained weights only have 3 channels. So how could we still make use of the pretrained weights?

Well, what happens in `timm`

has been shown in the image above. We copy the weights 3 times such that now the total number of channels becomes 9 and then we select the first 8 channels as our weights for `conv1`

layer.

This is all done inside `load_pretrained`

function like so:

```
conv1_name = cfg['first_conv']
conv1_weight = state_dict[conv1_name + '.weight']
conv1_type = conv1_weight.dtype
conv1_weight = conv1_weight.float()
repeat = int(math.ceil(in_chans / 3))
conv1_weight = conv1_weight.repeat(1, repeat, 1, 1)[:, :in_chans, :, :]
conv1_weight *= (3 / float(in_chans))
conv1_weight = conv1_weight.to(conv1_type)
state_dict[conv1_name + '.weight'] = conv1_weight
```

Thus, as can be seen above, we first repeat the `conv1_weight`

and then select required number of `in_chans`

from these copied weights.

---

## Source: https://timm.fast.ai/create_model

As you might have guessed from the title, in this tutorial we are going to look at the `create_model`

function inside `timm`

and also look at all the `**kwargs`

that can be passed to this function.

In `timm`

, the `create_model`

function is responsible for creating the architecture of more than 300 deep learning models! To create a model, simply pass in the `model_name`

to `create_model`

.

```
import timm
# creates resnet-34 architecture
model = timm.create_model('resnet34')
# creates efficientnet-b0 architecture
model = timm.create_model('efficientnet_b0')
# creates densenet architecture
model = timm.create_model('densenet121')
```

And so on.. A complete list of available models can be found using `timm.list_models()`

function.

To create a pretrained model, simply pass in `pretrained=True`

keyword argument to the `timm.create_model`

function along with the model name.

```
import timm
# creates pretrained resnet-34 architecture
model = timm.create_model('resnet34', pretrained=True)
# creates pretrained efficientnet-b0 architecture
model = timm.create_model('efficientnet_b0', pretrained=True)
# creates pretrained densenet architecture
model = timm.create_model('densenet121', pretrained=True)
```

To get a complete list of pretrained models available in `timm`

, pass `pretrained=True`

to `timm.list_models()`

function.

```
all_pretrained_models_available = timm.list_models(pretrained=True)
```

**Note:**Internally, when we set

`pretrained=True`

, `timm`

get’s the model weights from a URL and set’s these weights as the pretrained weights. For example, for `resnet34`

, `timm`

loads the model weights from `https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-weights/resnet34-43635321.pth`

. ’All models support the `features_only=True`

argument for `create_model`

call to return a network that extracts feature maps from the deepest layer at each stride. It is also possible to specify the indices of the layers to extract the features from using `out_indices=[...]`

argument.

```
import timm
import torch
# input batch with batch size of 1 and 3-channel image of size 224x224
x = torch.randn(1,3,224,224)
```

```
model = timm.create_model('resnet34')
model(x).shape
```

```
feature_extractor = timm.create_model('resnet34', features_only=True, out_indices=[2,3,4])
out = feature_extractor(x)
```

**Can you guess the length of out if I tell you that out is a list of Tensors?**


We know that the `resnet-34`

architecture looks like above. If the `7x7`

Convolution Layer at the beginning is considered as Layer-0, can you guess the shapes of features coming out from Layer-1, Layer-2, Layer-3 and Layer-4 where each layer is represented by a different color?

**Note:**This might be a great time to open up a Jupyter notebook and do something like this:

```
import torch.nn as nn
import torch
# input batch
x = torch.randn(1, 3, 224, 224)
pool = nn.MaxPool2d(3, 2, 1, 1)
conv1 = nn.Conv2d(3, 64, 7, stride=2, padding=3)
conv2 = nn.Conv2d(64, 64, 3, 1, 1)
conv3 = nn.Conv2d(64, 128, 3, 2, 1)
# feature map from Layer-0
conv1(x).shape
# feature map from Layer-1
conv2(pool(conv1(x))).shape
# and so on..
```

**Note:**If you’re looking for resources to read about ResNet architecture,

[here](https://github.com/fastai/fastbook/blob/master/14_resnet.ipynb)is an excellent resource in FastBook by

[Jeremy Howard](https://twitter.com/jeremyphoward)and

[Sylvain Gugger](https://twitter.com/GuggerSylvain).

As you might have guessed by now, the output shape of the Feature Map from Layer-2, Layer-3 and Layer-4 should be `[1, 128, 28, 28], [[1, 256, 14, 14], [1, 512, 7, 7]`

respectively.

Let's see if the results match our expectation.

```
[x.shape for x in out]
```

The output shapes of the Feature Maps match our expectation. This way, we can convert any model into a feature extractor in `timm`

.

---

## Source: https://timm.fast.ai/dataset

There are three main Dataset classes in the `timm`

library:

`ImageDataset`

`IterableImageDataset`

`AugMixDataset`


In this piece of documentation, we will be looking at each one of them individually and also looking at various use cases for these Dataset classes.

```
class ImageDataset(root: str, parser: Union[ParserImageInTar, ParserImageFolder, str] = None, class_map: Dict[str, str] = '', load_bytes: bool = False, transform: List = None) -> Tuple[Any, Any]:
```

The `ImageDataset`

can be used to create both training and validation datasets is very similar to [torchvision.datasets.ImageFolder](https://pytorch.org/docs/stable/torchvision/datasets.html#imagefolder) in it's functionality with some nice addons.

The `parser`

is set automatically using a `create_parser`

factory method. The `parser`

finds all images and targets in `root`

where the `root`

folder is structured like so:

```
root/dog/xxx.png
root/dog/xxy.png
root/dog/xxz.png
root/cat/123.png
root/cat/nsdf3.png
root/cat/asd932_.png
```

The `parser`

sets a `class_to_idx`

dictionary mapping from the classes to integers which looks something like:

```
{'dog': 0, 'cat': 1, ..}
```

And also has an attribute called `samples`

which is a List of Tuples that looks something like:

```
[('root/dog/xxx.png', 0), ('root/dog/xxy.png', 0), ..., ('root/cat/123.png', 1), ('root/cat/nsdf3.png', 1), ...]
```

This `parser`

object is subscriptable and on doing something like `parser[index]`

it returns a sample at that particular index in `self.samples`

. Therefore, doing something like `parser[0]`

would return `('root/dog/xxx.png', 0)`

.

Once the `parser`

is set, then the `ImageDataset`

get's an image, target from this `parser`

based on the `index`

.

```
img, target = self.parser[index]
```

It then reads the image either as a `PIL.Image`

and converts to `RGB`

or reads the image as bytes depending on the `load_bytes`

argument.

Finally, it transforms the image and returns the target. A dummy target `torch.tensor(-1)`

is returned in case target is None.

This `ImageDataset`

can also be used as a replacement for `torchvision.datasets.ImageFolder`

. Considering we have the `imagenette2-320`

dataset present whose structure looks like:

```
imagenette2-320
├── train
│ ├── n01440764
│ ├── n02102040
│ ├── n02979186
│ ├── n03000684
│ ├── n03028079
│ ├── n03394916
│ ├── n03417042
│ ├── n03425413
│ ├── n03445777
│ └── n03888257
└── val
├── n01440764
├── n02102040
├── n02979186
├── n03000684
├── n03028079
├── n03394916
├── n03417042
├── n03425413
├── n03445777
└── n03888257
```


And each subfolder contains a set of `.JPEG`

files belonging to that class.

```
# run only once
wget https://s3.amazonaws.com/fast-ai-imageclas/imagenette2-320.tgz
gunzip imagenette2-320.tgz
tar -xvf imagenette2-320.tar
```

Then, it is possible to create an `ImageDataset`

like so:

```
from timm.data.dataset import ImageDataset
dataset = ImageDataset('./imagenette2-320')
dataset[0]
(<PIL.Image.Image image mode=RGB size=426x320 at 0x7FF7F4880460>, 0)
```

We can also see the `dataset.parser`

is an instance of `ParserImageFolder`

:

```
dataset.parser
<timm.data.parsers.parser_image_folder.ParserImageFolder at 0x7ff7f4880d90>
```

Finally, let's have a look at the `class_to_idx`

Dictionary mapping in parser:

```
dataset.parser.class_to_idx
{'n01440764': 0,
'n02102040': 1,
'n02979186': 2,
'n03000684': 3,
'n03028079': 4,
'n03394916': 5,
'n03417042': 6,
'n03425413': 7,
'n03445777': 8,
'n03888257': 9}
```

And, also, the first five samples like so:

```
dataset.parser.samples[:5]
[('./imagenette2-320/train/n01440764/ILSVRC2012_val_00000293.JPEG', 0),
('./imagenette2-320/train/n01440764/ILSVRC2012_val_00002138.JPEG', 0),
('./imagenette2-320/train/n01440764/ILSVRC2012_val_00003014.JPEG', 0),
('./imagenette2-320/train/n01440764/ILSVRC2012_val_00006697.JPEG', 0),
('./imagenette2-320/train/n01440764/ILSVRC2012_val_00007197.JPEG', 0)]
```

`timm`

also provides an `IterableImageDataset`

similar to PyTorch's [IterableDataset](https://pytorch.org/docs/stable/data.html#torch.utils.data.IterableDataset) but, with a key difference - the `IterableImageDataset`

applies the transforms to `image`

before it yields an image and a target.

Such form of datasets are particularly useful when data come from a stream or when the length of the data is unknown.


`timm`

applies the transforms lazily to the `image`

and also sets the target to a dummy target `torch.tensor(-1, dtype=torch.long)`

in case the target is `None`

.

Similar to the `ImageDataset`

above, the `IterableImageDataset`

first creates a parser which gets a tuple of samples based on the `root`

directory.

As explained before, the parser returns an image and the target is the corresponding folder in which the image exists.

**Note:**The

`IterableImageDataset`

does not have a `__getitem__`

method defined therefore it is not subscriptable. Doing something like `dataset[0]`

where the `dataset`

is an instance of `IterableImageDataset`

would return an error. The `__iter__`

method inside `IterableImageDataset`

first gets an image and a target from `self.parser`

and then lazily applies the transforms to the image. Also, sets the target as a dummy value before both are returned.

```
from timm.data import IterableImageDataset
from timm.data.parsers.parser_image_folder import ParserImageFolder
from timm.data.transforms_factory import create_transform
root = '../../imagenette2-320/'
parser = ParserImageFolder(root)
iterable_dataset = IterableImageDataset(root=root, parser=parser)
parser[0], next(iter(iterable_dataset))
```

The `iterable_dataset`

is not Subscriptable.

```
iterable_dataset[0]
> >
---------------------------------------------------------------------------
NotImplementedError Traceback (most recent call last)
<ipython-input-14-9085b17eda0c> in <module>
----> 1 iterable_dataset[0]
~/opt/anaconda3/lib/python3.8/site-packages/torch/utils/data/dataset.py in __getitem__(self, index)
30
31 def __getitem__(self, index) -> T_co:---> 32 raise NotImplementedError 33
34 def __add__(self, other: 'Dataset[T_co]') -> 'ConcatDataset[T_co]':
NotImplementedError:
```

```
class AugmixDataset(dataset: ImageDataset, num_splits: int = 2):
```

The `AugmixDataset`

accepts an `ImageDataset`

and converts it to an Augmix Dataset.

**What's an Augmix Dataset and when would we need to do this?**

Let's answer that with the help of the Augmix paper.


As can be seen in the image above, the final `Loss Output`

is actually the sum of classificaiton loss and `λ`

times Jensen-Shannon loss between labels and model predictions on Xorig, Xaugmix1 and Xaugmix2.

Thus, for such a case, we would require three versions of the batch - original, augmix1 and augmix2. So how we do achieve this? Using `AugmixDataset`

ofcourse!

**Note:**

`augmix1`

and `augmix2`

are the augmented versions of the original batch where the augmentations are chosen randomly from a list of Operations. First, we get an `X`

and corresponding label `y`

from the `self.dataset`

which is the dataset passed into the `AugmixDataset`

constructor. Next, we normalize this image `X`

and add it to a variable called `x_list`

.

Next, based on the `num_splits`

argument which defaults to 0, we apply `augmentations`

to `X`

, normalize the augmented output and append it to `x_list`

.

**Note:**If

`num_splits=2`

, then `x_list`

has two items - `original + augmented`

. If `num_splits=3`

, then `x_list`

has three items - `original + augmented1 + augmented2`

. And so on..```
from timm.data import ImageDataset, IterableImageDataset, AugMixDataset, create_loader
dataset = ImageDataset('../../imagenette2-320/')
dataset = AugMixDataset(dataset, num_splits=2)
```

```
loader_train = create_loader(
dataset,
input_size=(3, 224, 224),
batch_size=8,
is_training=True,
scale=[0.08, 1.],
ratio=[0.75, 1.33],
num_aug_splits=2
)
```

```
# Requires GPU to work
next(iter(loader_train))[0].shape
>> torch.Size([16, 3, 224, 224])
```

**Note:**Now at this stage, you might ask - we passed in

`batch_size=8`

, but the batch size returned by `loader_train`

is 16? Why would that be?`num_aug_splits=2`

. In this case, the `loader_train`

has the first 8 original images and next 8 images that represent `augmix1`

.
Had we passed in `num_aug_splits=3`

, then the effective `batch_size`

would have been 24, where the first 8 images would have been the original images, next 8 representing `augmix1`

and the last 8 representing `augmix2`

.

---

## Source: https://timm.fast.ai/dataloader

The simplest way to create a dataloader in `timm`

is to call the `create_loader`

function in `timm.data.loader`

. It expects a `dataset`

object, an `input_size`

parameter and finally a `batch_size`

. Everything else is preset for us to make things easy. Let's see a quck example on how to create dataloaders using `timm`

.

```
!tree ../../imagenette2-320/ -d
```

```
from timm.data.dataset import ImageDataset
dataset = ImageDataset('../../imagenette2-320/')
dataset[0]
```

Great, so we have created our dataset. This `ImageDataset`

in `timm`

is very similar to [torchvision.datasets.ImageFolder](https://pytorch.org/vision/0.8/datasets.html#torchvision.datasets.ImageFolder) with some nice added features. Let's visualize the first image in our dataset. As expected, it's an image of a tench! ;)

**Note:**By default the dataset created above is for the train folder, thus we can refer to it as the train dataset.

```
from matplotlib import pyplot as plt
# visualize image
plt.imshow(dataset[0][0])
```

Let's now create our **DataLoader**.

```
from timm.data.loader import create_loader
try:
# only works if gpu present on machine
train_loader = create_loader(dataset, (3, 224, 224), 4)
except:
train_loader = create_loader(dataset, (3, 224, 224), 4, use_prefetcher=False)
```

Here, you might ask why do we have a `try-except`

block above? What's the difference between the first `train_loader`

and the second one? What is `use_prefetcher`

argument and what does it do?

Internally, `timm`

has a class called `PrefetchLoader`

. And by default, we use this prefetch loader to create our data loader. But, it only works on GPU enabled machines. Since, GPUs are available for me, the `train_loader`

for me is an instance of this `PrefetchLoader`

class.

```
train_loader
```

**Note:**If you are running this notebook a CPU-only machine, the

`train_loader`

would be an instance of `torch.utils.dataloader`

.Let's now see what does this `PrefetchLoader`

do? All the interesting bits happen inside the `__iter__`

method of this class.

```
def __iter__(self):
stream = torch.cuda.Stream()
first = True
for next_input, next_target in self.loader:
with torch.cuda.stream(stream):
next_input = next_input.cuda(non_blocking=True)
next_target = next_target.cuda(non_blocking=True)
if self.fp16:
next_input = next_input.half().sub_(self.mean).div_(self.std)
else:
next_input = next_input.float().sub_(self.mean).div_(self.std)
if self.random_erasing is not None:
next_input = self.random_erasing(next_input)
if not first:
yield input, target
else:
first = False
torch.cuda.current_stream().wait_stream(stream)
input = next_input
target = next_target
yield input, target
```

Let's try and understand what's actually going on? All we need to know is about `cuda.stream`

s to be able to understand this `__iter__`

method inside `PrefetchLoader`

.

From the [documentation](https://pytorch.org/docs/stable/notes/cuda.html#cuda-streams) available on PyTorch:

```
A CUDA stream is a linear sequence of execution that belongs to a specific device. You normally do not need to create one explicitly: by default, each device uses its own “default” stream.
Operations inside each stream are serialized in the order they are created, but operations from different streams can execute concurrently in any relative order, unless explicit synchronization functions (such as synchronize() or wait_stream()) are used.
When the “current stream” is the default stream, PyTorch automatically performs necessary synchronization when data is moved around. However, when using non-default streams, it is the user’s responsibility to ensure proper synchronization.
```

In simple words, each CUDA device can have it's own "stream" that is a sequence of commands to be run in order. But, doesn't mean that all streams (if multiple CUDA devices exist) are in sync with each other. It could be that while command-1 is running on 1st CUDA device's "stream", command-3 could be running on 2nd CUDA device's "stream".

**But, how is this relevant? Can 'stream's be used to make our data loader faster?**

Ofcourse! That is the whole point! Basically the key idea behind the `PrefetchLoader`

in Ross's words is this:

`"The prefetching with async cuda transfer helps a little to reduce likelihood of the batch transfer to GPU stalling by (hopefully) initiating it sooner and giving it more flexibility to operate in its own cuda stream concurrently with other ops."`


Basically, we are performing the "moving to CUDA" step inside a device's own "stream" instead of the default stream. Which means that this step can be performed asynchronously while some other operations might be happening on the CPU or in the default "stream". This helps speed things up a little bit as now data is available on `CUDA`

to be passed through the model faster.

And that's what's going inside the `__iter__`

method.

For the first batch, we iterate through the loader as we would have normally in `torch.utils.data.DataLoader`

, and return the `input`

, `target`

.

But, for every batch onwards -
We first instantiate a "stream" for CUDA device using `with torch.cuda.stream(stream):`

, next, we perform the `CUDA`

transfer inside this device's own "stream" in an asynchronus manner, and yielf this `next_input`

and `next_target`

.

Thus, every time we iterate through the data loader, we actually returned a prefetched `input`

and `target`

, therefore, the name `PrefetchLoader`

.

---

## Source: https://timm.fast.ai/loss.cross_entropy

```
import timm
import torch
import torch.nn.functional as F
from timm.loss import LabelSmoothingCrossEntropy, SoftTargetCrossEntropy
from timm.data.mixup import mixup_target
```

Same as NLL loss with label smoothing. Label smoothing increases loss when the model is correct `x`

and decreases loss when model is incorrect `x_i`

. Use this to not punish model as harshly, such as when incorrect labels are expected.

```
x = torch.eye(2)
x_i = 1 - x
y = torch.arange(2)
```

```
LabelSmoothingCrossEntropy(0.0)(x,y),LabelSmoothingCrossEntropy(0.0)(x_i,y)
```

```
LabelSmoothingCrossEntropy(0.1)(x,y),LabelSmoothingCrossEntropy(0.1)(x_i,y)
```

`log_softmax`

family loss function to be used with mixup. Use ** mixup_target** to add label smoothing and adjust the amount of mixing of the target labels.

```
x=torch.tensor([[[0,1.,0,0,1.]],[[1.,1.,1.,1.,1.]]],device='cuda')
y=mixup_target(torch.tensor([1,4],device='cuda'),5, lam=0.7)
x,y
```

```
SoftTargetCrossEntropy()(x[0],y),SoftTargetCrossEntropy()(x[1],y)
```

---

## Source: https://timm.fast.ai/asymmetric_loss

This documentation is based on the paper "[Asymmetric Loss For Multi-Label Classification](https://arxiv.org/abs/2009.14119)".

```
import timm
import torch
import torch.nn.functional as F
from timm.loss import AsymmetricLossMultiLabel, AsymmetricLossSingleLabel
import matplotlib.pyplot as plt
from PIL import Image
from pathlib import Path
```

Let's create a example of the `output`

of a model, and our `labels`

.

```
output = F.one_hot(torch.tensor([0,9,0])).float()
labels=torch.tensor([0,0,0])
```

```
labels, output
```

If we set all the parameters to 0, the loss becomes `F.cross_entropy`

loss.

```
asl = AsymmetricLossSingleLabel(gamma_pos=0,gamma_neg=0,eps=0.0)
```

```
asl(output,labels)
```

```
F.cross_entropy(output,labels)
```

Now lets look at the asymetric part. ASL is Asymetric in how it handles positive and negative examples. Positive examples being the labels that are present in the image, and negative examples being labels that are not present in the image. The idea being that an image has a lot of easy negative examples, few hard negative examples and very few positive examples. Getting rid of the influence of easy negative examples, should help emphasize the gradients of the positive examples.

```
Image.open(Path()/'images/cat.jpg')
```

Notice this image contains a cat, that would be a positive label. This images does not contain a dog, elephant bear, giraffe, zebra, banana or many other of the labels found in the coco dataset, those would be negative examples. It is very easy to see that a giraffe is not in this image.

```
output = (2*F.one_hot(torch.tensor([0,9,0]))-1).float()
labels=torch.tensor([0,9,0])
```

```
losses=[AsymmetricLossSingleLabel(gamma_neg=i*0.04+1,eps=0.1,reduction='mean')(output,labels) for i in range(int(80))]
```

```
plt.plot([ i*0.04+1 for i,l in enumerate(losses)],[loss for loss in losses])
plt.ylabel('Loss')
plt.xlabel('Change in gamma_neg')
plt.show()
```

$$L_- = (p)^{\gamma-}\log(1-p) $$

The contibution of small negative examples quickly decreases as gamma_neg is increased as $\gamma-$ is an exponent and $p$ should be a small number close to 0.

Below we set `eps=0`

, this has the effect of completely flattening out the above graph, we are no longer applying label smoothing, so negative examples end up not contributing to the loss.

```
losses=[AsymmetricLossSingleLabel(gamma_neg=0+i*0.02,eps=0.0,reduction='mean')(output,labels) for i in range(100)]
```

```
plt.plot([ i*0.04 for i in range(len(losses))],[loss for loss in losses])
plt.ylabel('Loss')
plt.xlabel('Change in gamma_neg')
plt.show()
```

`AsymmetricLossMultiLabel`

allows for working on multi-label problems.

```
labels=F.one_hot(torch.LongTensor([0,0,0]),num_classes=10)+F.one_hot(torch.LongTensor([1,9,1]),num_classes=10)
labels
```

```
AsymmetricLossMultiLabel()(output,labels)
```

For `AsymmetricLossMultiLabel`

another parameter exists called `clip`

. This clamps smaller inputs to 0 for negative examples. This is called Asymmetric Probability Shifting.

```
losses=[AsymmetricLossMultiLabel(clip=i/100)(output,labels) for i in range(100)]
```

```
plt.plot([ i/100 for i in range(len(losses))],[loss for loss in losses])
plt.ylabel('Loss')
plt.xlabel('Clip')
plt.show()
```

---

## Source: https://timm.fast.ai/jsd_cross_entropy

```
import timm
import torch
import torch.nn.functional as F
from timm.loss import LabelSmoothingCrossEntropy, SoftTargetCrossEntropy
from timm.loss import JsdCrossEntropy
from timm.data.mixup import mixup_target
import matplotlib.pyplot as plt
```

Let's create a example of the `output`

of a model, and our `labels`

. Note we have 3 output predictions, but only 1 label.

```
output = F.one_hot(torch.tensor([0,9,0])).float()
labels=torch.tensor([0])
```

If we set label `smoothing`

and `alpha`

to 0, then we will have the regular `cross_entropy loss`

, if we look only at the first element of our output and labels.

```
jsd = JsdCrossEntropy(smoothing=0,alpha=0)
```

```
jsd(output,labels)
```

```
base_loss = F.cross_entropy(output[0,None],labels[0,None])
base_loss
```

```
jsd = JsdCrossEntropy(num_splits=1,smoothing=0,alpha=0)
```

We can also change the number of splits,changing the size of each group. In `Augmix`

this would equate to the number of transformation mixtures.

```
jsd = JsdCrossEntropy(num_splits=2,smoothing=0,alpha=0)
output = F.one_hot(torch.tensor([0,9,1,0])).float()
labels=torch.tensor([0,9])
```

```
jsd(output,labels),F.cross_entropy(output[[0,1]],labels)
```

By default we have 1 label for 3 predictions, this is a two part loss, and measures both cross entropy and jason-shannon divergence. Jason-shannon entropy does not need a label, instead measuring the how significantly different the 3 predictions are.

```
jsd = JsdCrossEntropy(smoothing=0)
output = F.one_hot(torch.tensor([0,0,0]),num_classes=10).float()
```

```
deltas = torch.cat((torch.zeros([2,10]),torch.tensor([[-1,1,0,0,0,0,0,0,0,0]])))*0.1
deltas[2]
```

```
deltas=(torch.arange(-10,11))[...,None,None]*deltas
```

```
losses = [jsd((output+delta),labels)-base_loss for delta in deltas]
```

The below graph shows how changes in one of the model's outputs(prediction), in a group, effects the Jason-Shannon Divergence.

```
plt.plot([ .1*i-1 for i in range(len(losses))],[loss for loss in losses])
plt.ylabel('JS Divergence')
plt.xlabel('Change in output')
plt.show()
```

---

## Source: https://timm.fast.ai/Optimizers

This tutorial presents the various optimizers available in `timm`

. We look at how we could use each of them using the `timm`

training script and also as standalone optimizers for custom PyTorch training scripts.

The various optimizers available in `timm`

are:

And some more from `apex`

like:

which are GPU-only.

`timm`

also supports lookahead optimizer.

As is the usual format for `timm`

, the best way to create an optimizer using `timm`

is to use the `create_optimizer`

factory method. In this tutorial we will look at how to train each of these models using each of these optimizers using the `timm`

training script first and also as standalone optimizers for custom training script.

To train using any of the optimizers simply pass the optimizer name using the `--opt`

flag to the training script.

```
python train.py ../imagenette-320/ --opt adam
```

Since `Lookahead`

technique can be added to any of the optimizers, we can train our models using `Lookahead`

in `timm`

, simply update the optimizer name by adding a `lookahead_`

prefix. Example for `adam`

, the training script looks like:

```
python train.py ../imagenette-320/ --opt lookahead_adam
```

And that's really it. This way we can train models on `ImageNet`

or `Imagenette`

using all the available optimizers in `timm`

.

Many a time, we might just want to use the optimizers from timm for our own training scripts. The best way to create an optimizer using `timm`

is to use the `create_optimizer`

factory method.

**Note:**

`create_optimizer`

in `timm`

accepts `args`

as the first argument. This `args`

parameter is from `ArgumentParser`

so we might have to mock it to create optimizer for our custom training script. The example below shows how to do this. `create_optimizer`

are shown below:
```
def create_optimizer(args, model, filter_bias_and_bn=True) -> Union[Optimizer, Lookahead]:
"""
Here, `args` are the arguments parsed by `ArgumentParser` in `timm` training script.
If we want to create an optimizer using this function, we should make sure that `args` has the
following attributes set:
args: Arguments from `ArgumentParser`:
- `opt`: Optimizer name
- `weight_decay`: Weight decay if any
- `lr`: Learning rate
- `momentum`: Decay rate for momentum if passed and not 0
model: Model that we want to train
"""
```

Let's see how to mock the `args`

below:

```
from types import SimpleNamespace
from timm.optim.optim_factory import create_optimizer
from timm import create_model
model = create_model('resnet34')
args = SimpleNamespace()
args.weight_decay = 0
args.lr = 1e-4
args.opt = 'adam' #'lookahead_adam' to use `lookahead`
args.momentum = 0.9
optimizer = create_optimizer(args, model)
optimizer
```

In this section we are going to try and experiment some of the various available optimizers and use them in our own custom training script.

We will store the losses for each of the optimizers and in the end visualize the loss curves to compare performance on `Imagenette`

dataset using a `resnet-34`

model that we again create using `timm`

.

```
import torch
import torch.optim as optim
import timm
from timm.data import create_dataset, create_loader
import numpy as np
from matplotlib import pyplot as plt
import torchvision
import torch.nn as nn
from tqdm import tqdm
import logging
from timm.optim import optim_factory
from types import SimpleNamespace
logging.getLogger().setLevel(logging.INFO)
```

```
DATA_DIR = '../imagenette2-320/'
```

The directory structure of the data dir looks something like:

```
imagenette2-320
├── train
│ ├── n01440764
│ ├── n02102040
│ ├── n02979186
│ ├── n03000684
│ ├── n03028079
│ ├── n03394916
│ ├── n03417042
│ ├── n03425413
│ ├── n03445777
│ └── n03888257
└── val
├── n01440764
├── n02102040
├── n02979186
├── n03000684
├── n03028079
├── n03394916
├── n03417042
├── n03425413
├── n03445777
└── n03888257
```


Let's now create our train and validation datasets and dataloaders using `timm`

. For more docs on datasets, refer [here](https://fastai.github.io/timmdocs/dataset).

```
train_dataset = create_dataset("train", DATA_DIR, "train")
train_loader = create_loader(train_dataset, input_size=(3, 320, 320), batch_size=8, use_prefetcher=False,
is_training=True, no_aug=True)
len(train_dataset)
```

```
val_dataset = create_dataset("val", DATA_DIR, "val")
val_loader = create_loader(val_dataset, input_size=(3, 320, 320), batch_size=64, use_prefetcher=False)
len(val_dataset)
```

These are the class names that we have in `Imagenette`

. We list them here for easy visualization below:

```
class_names = ['tench', 'English springer', 'cassette player', 'chain saw', 'church',
'French horn', 'garbage truck', 'gas pump', 'golf ball', 'parachute']
```

Let's now visualize some of the images and classes that our in our dataset.

```
def imshow(inp, title=None):
"""Imshow for Tensor."""
inp = inp.numpy().transpose((1, 2, 0))
mean = np.array([0.485, 0.456, 0.406])
std = np.array([0.229, 0.224, 0.225])
inp = std * inp + mean
inp = np.clip(inp, 0, 1)
plt.imshow(inp)
if title is not None:
plt.title(title)
plt.pause(0.001)
inputs, classes = next(iter(train_loader))[:8]
out = torchvision.utils.make_grid(inputs, nrow=4)
imshow(out, title=[class_names[x.item()] for x in classes])
```

It's great practice to visualize the images straight from the `train_loader`

to check for any errors.

In this section we will create our custom training loop.

```
loss_fn = nn.CrossEntropyLoss()
model = timm.create_model('resnet34', pretrained=False, num_classes=10)
```

```
model(inputs).shape
```

The `AverageMeter`

class below averages the loss for easy visualization. If we didn't take the moving average, then the loss curve would be very rocky and bumpy to visualize.

**Note:**As an experiment, feel free to remove the

`loss_avg = AverageMeter()`

in `train_one_epoch`

function below and try visualizing the loss curve to see the difference. ```
class AverageMeter:
"""
Computes and stores the average and current value
"""
def __init__(self):
self.val = 0
self.avg = 0
self.sum = 0
self.count = 0
def reset(self):
self.val = 0
self.avg = 0
self.sum = 0
self.count = 0
def update(self, val, n=1):
self.val = val
self.sum += val * n
self.count += n
self.avg = self.sum / self.count
```

The function below defines our custom training training loop. Essentially, we take the `inputs`

and `targets`

from the the `train_loader`

. Get the predictions by passing the `inputs`

through the model. Calculate the loss function, perform backpropogation using PyTorch to calculate the gradients. Finally, we use the optimizer to take step to update the parameters and zero out the gradients.

Also, note that we store the moving average of the losses for each of the mini batch `losses.append(loss_avg.avg)`

in a list called `losses`

. Finally, we return a dictionary with the Optimizer name and the list `losses`

.

```
def train_one_epoch(args, loader, model, loss_fn = nn.CrossEntropyLoss(), **optim_kwargs):
model = timm.create_model('resnet34', pretrained=False, num_classes=10)
logging.info(f"\ncreated model: {model.__class__.__name__}")
optimizer = optim_factory.create_optimizer(args, model, **optim_kwargs)
logging.info(f"created optimizer: {optimizer.__class__.__name__}")
losses = []
loss_avg = AverageMeter()
model = model.cuda()
tk0 = tqdm(enumerate(loader), total=len(loader))
for i, (inputs, targets) in tk0:
inputs = inputs.cuda()
targets = targets.cuda()
preds = model(inputs)
loss = loss_fn(preds, targets)
loss.backward()
optimizer.step()
optimizer.zero_grad()
loss_avg.update(loss.item(), loader.batch_size)
losses.append(loss_avg.avg)
tk0.set_postfix(loss=loss.item())
return {args.opt: losses}
```

Note that this `train_one_epoch`

function accepts `args`

. These are the mocked `args`

that we have looked at before. This `args`

parameter get's passed to `optim_factory.create_optimizer`

to create the Optimizer.

```
losses_dict = {}
```

```
args = SimpleNamespace()
args.weight_decay = 0
args.lr = 1e-4
args.momentum = 0.9
```

Let's now pass in the various Optimizers. The training loop that we have created should take care of instantiating the `Optimizer`

using the `create_optimizer`

function.

We have set the learning rate to be `1e-4`

, weight decay and momentum both to be 0.

We also pass in `lookahead_adam`

to showcase training using the `Lookahead`

class in `timm`

.

```
for opt in ['SGD', 'Adam', 'AdamW', 'Nadam', 'Radam', 'AdamP', 'Lookahead_Adam']:
args.opt = opt
loss_dict = train_one_epoch(args, train_loader, model)
losses_dict.update(loss_dict)
```

Finally, let's visualize the results to compare the performance. All the losses alongside the Optimizer passed were stored in `losses_dict`

.

```
fig, ax = plt.subplots(figsize=(15,8))
for k, v in losses_dict.items():
ax.plot(range(1, len(v) + 1), v, '.-', label=k)
ax.legend()
ax.grid()
```

We can see that `Adam`

and `AdamP`

perform the best out of the available optimizers on `Imagenette`

for the 1 epoch that we have trained our model for. After this, please feel free to run your own experiments! :)

---

## Source: https://timm.fast.ai/schedulers

In `timm`

, essentially we have a total of four different schedulers:

[SGDR: Stochastic Gradient Descent with Warm Restarts](https://arxiv.org/abs/1608.03983)[Stochastic Gradient Descent with Hyperbolic-Tangent Decay on Classification](https://arxiv.org/abs/1806.01593)[StepLR](https://github.com/rwightman/pytorch-image-models/blob/master/timm/scheduler/step_lr.py#L13)[PlateauLRScheduler](https://github.com/rwightman/pytorch-image-models/blob/master/timm/scheduler/plateau_lr.py#L12)

In this tutorial we are going to look at each one of them in detail and also look at how we can train our models using these schedulers using the `timm`

training script or use them as standalone schedulers for custom PyTorch training scripts.

In this section we will look at the various available schedulers in `timm`

.

First, let's look at the `SGDR`

scheduler also referred to as the `cosine`

scheduler in `timm`

.

The `SGDR`

scheduler, or the `Stochastic Gradient Descent with Warm Restarts`

scheduler schedules the learning rate using a cosine schedule but with a tweak. It resets the learning rate to the initial value after some number of epochs.


**Note:**Unlike the builtin PyTorch schedulers, this is intended to be consistently called at the END of each epoch, before incrementing the epoch count, to calculate next epoch’s value & at the END of each optimizer update, after incrementing the update count, to calculate next update’s value.

The `StepLR`

is a basic step LR schedule with warmup, noise.

**Note:**PyTorch’s implementation does not support warmup or noise.

The schedule for `StepLR`

annealing looks something like:


After a certain number `decay_epochs`

, the learning rate is updated to be `lr * decay_rate`

. In the above `StepLR`

schedule, `decay_epochs`

is set to 30 and `decay_rate`

is set to 0.5 with an initial `lr`

of 1e-4.

This is also referred to as the `tanh`

annealing. `tanh`

stands for hyperbolic tangent decay. The annealing using this scheduler looks something like:


It is similar to the `SGDR`

in the sense that the learning rate is set to the initial `lr`

after a certain number of epochs but the annealing is done using the `tanh`

function.

This scheduler is very similar to PyTorch's [ReduceLROnPlateau](https://pytorch.org/docs/stable/_modules/torch/optim/lr_scheduler.html#ReduceLROnPlateau) scheduler. The basic idea is to track an eval metric and based on the evaluation metric's value, the `lr`

is reduced using `StepLR`

if the eval metric is stagnant for a certain number of epochs.

It is very easy to train our models using the `timm`

's training script. Essentially, we simply pass in a parameter using the `--sched`

flag to specify which scheduler to use and the various hyperparameters alongside.

- For
`SGDR`

, we pass in`--sched cosine`

. - For
`PlatueLRScheduler`

we pass in`--sched plateau`

. - For
`TanhLRScheduler`

, we pass in`--sched tanh`

. - For
`StepLR`

, we pass in`--sched step`

.

Thus the call to the training script looks something like:

```
python train.py --sched cosine --epochs 200 --min-lr 1e-5 --lr-cycle-mul 2 --lr-cycle-limit 2
```

---

## Source: https://timm.fast.ai/SGDR

In this tutorial we are going to be looking at the `SGDR`

or as referred to in the `timm`

library - the `cosine`

scheduler in little more detail with all the supporting hyperparams.

The SGDR schedule as mentioned in the [paper](https://arxiv.org/abs/1608.03983) looks like:


```
from timm.scheduler.cosine_lr import CosineLRScheduler
from nbdev.showdoc import show_doc
```

The `CosineLRScheduler`

as shown above accepts an `optimizer`

and also some hyperparams which we will look into in detail below. We will first see how we can train models using the `cosine`

LR scheduler by first using `timm`

training docs and then look at how we can use this scheduler as standalone scheduler for our custom training scripts.

To train models using the `cosine`

scheduler we simply update the training script args passed by passing in `--sched cosine`

parameter alongside the necessary hyperparams. In this section we will also look at how each of the hyperparams update the `cosine`

scheduler.

**Note:**In the paper this scheduler is referred to as

`SGDR`

but in `timm`

this is referred to as `cosine`

scheduler. They are both one and the same with minor implementation difference. The training command to use `cosine`

scheduler looks something like:

```
python train.py ../imagenette2-320/ --sched cosine
```

This way we start to use the `cosine`

scheduler with all the defaults. Let's now look at the associated hyperparams and how that updates the annealing schedule.

This is the `optimizer`

that will be used for the training process.

```
from timm import create_model
from timm.optim import create_optimizer
from types import SimpleNamespace
```

```
model = create_model('resnet34')
args = SimpleNamespace()
args.weight_decay = 0
args.lr = 1e-4
args.opt = 'adam'
args.momentum = 0.9
optimizer = create_optimizer(args, model)
```

This `optimizer`

object created using `create_optimizer`

is what get's passed to the `optimizer`

argument.

The initial number of epochs. Example, 50, 100 etc.

Defaults to 1.0. Updates the `SGDR`

schedule annealing.


As shown in the image below, here **T 0** is the

`t_initial`

hyperparameter and **T**is the

mult`t_mul`

hyperparameter. One can see how updating these parameters updates the scheduler.Defaults to `1e-5`

. The minimum learning rate to use during the scheduling. The learning rate does not ever go below this value.

When `decay_rate`

> 0 and <1., at every restart the learning rate is decayed by new learning rate which equals `lr * decay_rate`

. So if `decay_rate=0.5`

, then in that case, the new learning rate becomes half the initial `lr`

.

```
from matplotlib import pyplot as plt
def get_lr_per_epoch(scheduler, num_epoch):
lr_per_epoch = []
for epoch in range(num_epoch):
lr_per_epoch.append(scheduler.get_epoch_values(epoch))
return lr_per_epoch
```

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, decay_rate=1., lr_min=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, decay_rate=0.5, lr_min=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

Defines the number of warmup epochs.

The initial learning rate during warmup.

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="With warmup");
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="Without warmup", alpha=0.8);
plt.legend();
```

As we can see by setting up `warmup_t`

and `warmup_lr_init`

, the `cosine`

scheduler first starts with a value of `warmup_lr_init`

, then gradually progresses up to the `initial_lr`

set in the optimizer which is 1e-4. It takes `warmup_t`

number of epochs to go from `warmup_lr_init`

to `initial_lr`

.

Defaults to `False`

. If set to `True`

, then every new epoch number equals `epoch = epoch - warmup_t`

.

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="Without warmup_prefix");
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5, warmup_prefix=True)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="With warmup_prefix");
plt.legend();
```

In the example above we can see how the `warmup_prefix`

updates the LR annealing schedule.

The number of maximum restarts in SGDR.

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, cycle_limit=1)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, cycle_limit=2)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

If set to False, the learning rates returned for epoch `t`

are `None`

.

```
num_epoch = 50
scheduler = CosineLRScheduler(optimizer, t_initial=num_epoch, t_in_epochs=False)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
lr_per_epoch[:5]
```

Add noise to learning rate scheduler.

The amount of noise to be added. Defaults to 0.67.

Noise standard deviation. Defaults to 1.0.

Noise seed to use. Defaults to 42.

If set to True, then, the an attributes `initial_lr`

is set to each param group. Defaults to `True`

.

**Note:**we leave it up to the reader to try and experiment how the LR annealing scheduling get’s updated by adding in noise hyperparams.

---

## Source: https://timm.fast.ai/stepLR

In this tutorial we are going to be looking at the `StepLRScheduler`

in the `timm`

library.

The schedule looks something like:


```
from timm.scheduler.step_lr import StepLRScheduler
from nbdev.showdoc import show_doc
```

The `StepLRScheduler`

as shown above accepts an `optimizer`

and also some hyperparams which we will look into in detail below. We will first see how we can train models using the `StepLRScheduler`

by first using `timm`

training docs and then look at how we can use this scheduler as standalone scheduler for our custom training scripts.

To train models using the `StepLRScheduler`

we simply update the training script args passed by passing in `--sched step`

parameter alongside the necessary hyperparams. In this section we will also look at how each of the hyperparams update the `cosine`

scheduler.

The training command to use `cosine`

scheduler looks something like:

```
python train.py ../imagenette2-320/ --sched step
```

This way we start to use the `StepLRScheduler`

with all the defaults. Let's now look at the associated hyperparams and how that updates the annealing schedule.

This is the `optimizer`

that will be used for the training process.

```
from timm import create_model
from timm.optim import create_optimizer
from types import SimpleNamespace
```

```
model = create_model('resnet34')
args = SimpleNamespace()
args.weight_decay = 0
args.lr = 1e-4
args.opt = 'adam'
args.momentum = 0.9
optimizer = create_optimizer(args, model)
```

This `optimizer`

object created using `create_optimizer`

is what get's passed to the `optimizer`

argument.

The number of epochs after which to decay the learning rate where the new learning rate value equals `lr * decay_rate`

.

When `decay_rate`

> 0 and <1., at every restart the learning rate is decayed by new learning rate which equals `lr * decay_rate`

. So if `decay_rate=0.5`

, then in that case, the new learning rate becomes half the initial `lr`

.

```
from matplotlib import pyplot as plt
def get_lr_per_epoch(scheduler, num_epoch):
lr_per_epoch = []
for epoch in range(num_epoch):
lr_per_epoch.append(scheduler.get_epoch_values(epoch))
return lr_per_epoch
```

By setting `decay_t`

= 5 and `decay_rate`

= 1., we are telling the schedule to reduce the learning rate by decay_rate where new lr `lr * decay_rate`

every 5 epochs.

But since, `decay_rate=1.`

, the new learning rate equals the old learning rate hence, we get a constant line.

```
num_epoch = 50
scheduler = StepLRScheduler(optimizer, decay_t = 5, decay_rate=1.)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch);
```

By setting `decay_t`

= 5 and `decay_rate`

= 0.5, we are telling the schedule to reduce the learning rate by decay_rate where new lr `lr * decay_rate`

every 5 epochs, that is halve the learning rate after every 5 epochs.

```
num_epoch = 50
scheduler = StepLRScheduler(optimizer, decay_t = 5, decay_rate=.5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch);
```

Defines the number of warmup epochs.

The initial learning rate during warmup.

```
num_epoch = 50
scheduler = StepLRScheduler(optimizer, decay_t=5, warmup_t=2, warmup_lr_init=1e-5, decay_rate=0.8)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="With warmup");
num_epoch = 50
scheduler = StepLRScheduler(optimizer, decay_t=5, decay_rate=0.8)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="Without warmup", alpha=0.8);
plt.legend();
```

As we can see by setting up `warmup_t`

and `warmup_lr_init`

, the `cosine`

scheduler first starts with a value of `warmup_lr_init`

, then gradually progresses up to the `initial_lr`

set in the optimizer which is 1e-4. It takes `warmup_t`

number of epochs to go from `warmup_lr_init`

to `initial_lr`

.

The upper and lower limit of noise.

Percentage of noise to add.

Noise standard deviation.

Seed to use to add random noise.

If set to False, the learning rates returned for epoch `t`

are `None`

.

```
num_epoch = 50
scheduler = StepLRScheduler(optimizer, decay_t=5, t_in_epochs=False)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
lr_per_epoch[:5]
```

If True, then inside each param group of the `optimizer`

a new field is set called `initial_{field_name}`

where `field_name`

refers to the field in param group that we are scheduling. Typically `field_name='lr'`

.

**Note:**we leave it up to the reader to try and experiment how the LR annealing scheduling get’s updated by adding in noise hyperparams. From here on, this should be a fairly simple exercise. :)

---

## Source: https://timm.fast.ai/tanh

In this tutorial we are going to be looking at the `TanhLRScheduler`

in the `timm`

library in little more detail with all the supporting hyperparameters.


```
from timm.scheduler.tanh_lr import TanhLRScheduler
from nbdev.showdoc import show_doc
```

The `TanhLRScheduler`

as shown above accepts an `optimizer`

and also some hyperparams which we will look into in detail below. We will first see how we can train models using the `TanhLRScheduler`

by first using `timm`

training script and then look at how we can use this scheduler as standalone scheduler for our custom training scripts.

To train models using the `TanhLRScheduler`

we simply update the training script args passed by passing in `--sched tanh`

parameter alongside the necessary hyperparams. In the next section we will also look at how each of the hyperparams update the `TanhLRScheduler`

.

The training command to use `TanhLRScheduler`

looks something like:

```
python train.py ../imagenette2-320/ --sched tanh
```

Let's now look at the associated hyperparams and how that updates the annealing schedule.

This is the `optimizer`

that will be used for the training process.

```
from timm import create_model
from timm.optim import create_optimizer
from types import SimpleNamespace
```

```
model = create_model('resnet34')
args = SimpleNamespace()
args.weight_decay = 0
args.lr = 1e-4
args.opt = 'adam'
args.momentum = 0.9
optimizer = create_optimizer(args, model)
```

This `optimizer`

object created using `create_optimizer`

is what get's passed to the `optimizer`

argument.

The number of epochs to schedule the hyperparameter for.

The lower bound denoted by `L`

in the paper.

The upper bound as denoted by `U`

in the paper.

NOTE: `L`

and `U`

indicate the lower and upper bounds of the interval `[L, U]`

for the function `tanh(x)`

.

Defaults to 1.0. Similar to `SGDR`

it updates schedule by increasing the time for annealing.

```
from matplotlib import pyplot as plt
def get_lr_per_epoch(scheduler, num_epoch):
lr_per_epoch = []
for epoch in range(num_epoch):
lr_per_epoch.append(scheduler.get_epoch_values(epoch))
return lr_per_epoch
```

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, t_mul=1.)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*3)
plt.plot([i for i in range(num_epoch*3)], lr_per_epoch, label="With `t_mul=1.`");
```

```
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, t_mul=2.)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*3)
plt.plot([i for i in range(num_epoch*3)], lr_per_epoch, label="With `t_mul=1.`");
```

As we can see in the example, the second schedule that starts at epoch 50 takes twice as long for the learning to be decreased to the minimum value.

Defaults to `1e-5`

. The minimum learning rate to use during the scheduling. The learning rate does not ever go below this value.

When `decay_rate`

> 0 and <1., at every restart the learning rate is decayed by new learning rate which equals `lr * decay_rate`

. So if `decay_rate=0.5`

, then in that case, the new learning rate becomes half the initial `lr`

.

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, decay_rate=1.)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, decay_rate=0.5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

Defines the number of warmup epochs.

The initial learning rate during warmup.

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="With warmup");
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="Without warmup", alpha=0.8);
plt.legend();
```

As we can see by setting up `warmup_t`

and `warmup_lr_init`

, the `cosine`

scheduler first starts with a value of `warmup_lr_init`

, then gradually progresses up to the `initial_lr`

set in the optimizer which is 1e-4. It takes `warmup_t`

number of epochs to go from `warmup_lr_init`

to `initial_lr`

.

Defaults to `False`

. If set to `True`

, then every new epoch number equals `epoch = epoch - warmup_t`

.

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="Without warmup_prefix");
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, warmup_t=5, warmup_lr_init=1e-5, warmup_prefix=True)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
plt.plot([i for i in range(num_epoch)], lr_per_epoch, label="With warmup_prefix");
plt.legend();
```

In the example above we can see how the `warmup_prefix`

updates the LR annealing schedule.

The number of maximum restarts in `TanhLRScheduler`

.

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, cycle_limit=1)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, cycle_limit=2)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch*2)
plt.plot([i for i in range(num_epoch*2)], lr_per_epoch);
```

If set to False, the learning rates returned for epoch `t`

are `None`

.

```
num_epoch = 50
scheduler = TanhLRScheduler(optimizer, t_initial=num_epoch, t_in_epochs=False)
lr_per_epoch = get_lr_per_epoch(scheduler, num_epoch)
lr_per_epoch[:5]
```

Add noise to learning rate scheduler.

The amount of noise to be added. Defaults to 0.67.

Noise standard deviation. Defaults to 1.0.

Noise seed to use. Defaults to 42.

If set to True, then, the an attributes `initial_lr`

is set to each param group. Defaults to `True`

.

**Note:**we leave it up to the reader to try and experiment how the LR annealing scheduling get’s updated by adding in noise hyperparams.

---

## Source: https://timm.fast.ai/plateau

In this tutorial we are going to be looking at the `PlateauLRScheduler`

in the `timm`

library.

```
from timm.scheduler.plateau_lr import PlateauLRScheduler
from nbdev.showdoc import show_doc
```

The `PlateauLRScheduler`

as shown above accepts an `optimizer`

and also some hyperparams which we will look into in detail below. We will first see how we can train models using the `PlateauLRScheduler`

by first using `timm`

training docs and then look at how we can use this scheduler as standalone scheduler for our custom training scripts.

To train models using the `PlateauLRScheduler`

we simply update the training script args passed by passing in `--sched plateau`

parameter alongside the necessary hyperparams. In this section we will also look at how each of the hyperparams update the `plateau`

scheduler.

The training command to use `cosine`

scheduler looks something like:

```
python train.py ../imagenette2-320/ --sched plateau
```

The `PlateauLRScheduler`

by default tracks the `eval-metric`

which is by default `top-1`

in the `timm`

training script. If the performance plateaus, then the new learning learning after a certain number of epochs (by default 10) is set to `lr * decay_rate`

. This scheduler underneath uses PyTorch's [ReduceLROnPlateau](https://pytorch.org/docs/stable/_modules/torch/optim/lr_scheduler.html#ReduceLROnPlateau).

All arguments passed to this scheduler are the same as PyTorch's `ReduceLROnPlateau`

except they are renamed as follows:

| TIMM | PyTorch |
|---|---|
| patience_t | patience |
| decay_rate | factor |
| verbose | verbose |
| threshold | threshold |
| cooldown_t | cooldown |
| mode | mode |
| lr_min | min_lr |

The functionality is very similar to [ReduceLROnPlateau](https://pytorch.org/docs/stable/_modules/torch/optim/lr_scheduler.html#ReduceLROnPlateau) except the addition of Noise.

---

## Source: https://timm.fast.ai/tutorial_feature_extractor

In this tutorial, we will be taking a deep dive inside the source code of the `create_model`

function. We will also how can we convert any given into a feature extractor. We have already seen an example of this [here](https://fastai.github.io/timmdocs/create_model#Turn-any-model-into-a-feature-extractor). We converted a `ResNet-34`

architecture to a feature extractor to extract features from the 2nd, 3rd and 4th layers.

In this tutorial we are going to dig deeper into the `create_model`

source code and have a look at how is `timm`

able to convert any model to a feature extractor.

The `create_model`

function is what is used to create hundreds of models inside `timm`

. It also expects a bunch of `**kwargs`

such as `features_only`

and `out_indices`

and passing these two `**kwargs`

to the `create_model`

function creates a feature extractor instead. Let's see how?

The `create_model`

function itself is only around 50-lines of code. So all the magic has to happen somewhere else. As you might already know, every model name inside `timm.list_models()`

is actually a function.

As an example:

```
%load_ext autoreload
%autoreload 2
```

```
import timm
import random
from timm.models import registry
m = timm.list_models()[-1]
registry.is_model(m)
```

`timm`

has an internal dictionary called `_model_entrypoints`

that contains all the model names and their respective constructor functions. As an example, we could see get the constructor function for our `xception71`

model through the `model_entrypoint`

function inside `_model_entrypoints`

.

```
constuctor_fn = registry.model_entrypoint(m)
constuctor_fn
```

As we can see there is a function called `xception71`

inside `timm.models.xception_aligned`

module. Similarly, every model has a constructor function inside `timm`

. In fact, this internal `_model_entrypoints`

dictionary looks something like:

```
_model_entrypoints
> >
{
'cspresnet50':<function timm.models.cspnet.cspresnet50(pretrained=False, **kwargs)>,'cspresnet50d': <function timm.models.cspnet.cspresnet50d(pretrained=False, **kwargs)>,
'cspresnet50w': <function timm.models.cspnet.cspresnet50w(pretrained=False, **kwargs)>,
'cspresnext50': <function timm.models.cspnet.cspresnext50(pretrained=False, **kwargs)>,
'cspresnext50_iabn': <function timm.models.cspnet.cspresnext50_iabn(pretrained=False, **kwargs)>,
'cspdarknet53': <function timm.models.cspnet.cspdarknet53(pretrained=False, **kwargs)>,
'cspdarknet53_iabn': <function timm.models.cspnet.cspdarknet53_iabn(pretrained=False, **kwargs)>,
'darknet53': <function timm.models.cspnet.darknet53(pretrained=False, **kwargs)>,
'densenet121': <function timm.models.densenet.densenet121(pretrained=False, **kwargs)>,
'densenetblur121d': <function timm.models.densenet.densenetblur121d(pretrained=False, **kwargs)>,
'densenet121d': <function timm.models.densenet.densenet121d(pretrained=False, **kwargs)>,
'densenet169': <function timm.models.densenet.densenet169(pretrained=False, **kwargs)>,
'densenet201': <function timm.models.densenet.densenet201(pretrained=False, **kwargs)>,
'densenet161': <function timm.models.densenet.densenet161(pretrained=False, **kwargs)>,
'densenet264': <function timm.models.densenet.densenet264(pretrained=False, **kwargs)>,
}
```

So, every model inside `timm`

has a constructor defined inside the respective modules. For example, all ResNets have been defined inside `timm.models.resnet`

module. Thus, there are two ways to create a `resnet34`

model:

```
import timm
from timm.models.resnet import resnet34
# using `create_model`
m = timm.create_model('resnet34')
# directly calling the constructor fn
m = resnet34()
```

In `timm`

, you never really want to directly call the constructor function. All models should be created using the `create_model`

function itself.

The source code of the `resnet34`

constructor function looks like:

```
@register_model
def resnet34(pretrained=False, **kwargs):
"""Constructs a ResNet-34 model.
"""
model_args = dict(block=BasicBlock, layers=[3, 4, 6, 3], **kwargs)
return _create_resnet('resnet34', pretrained, **model_args)
```

**Note:**You will find that every model inside

`timm`

has a `register_model`

decorator. At the beginning, the `_model_entrypoints`

is an empty dictionary. It is the `register_model`

decorator that adds the given model function constructor along with it’s name to `_model_entrypoints`

. ```
def register_model(fn):
# lookup containing module
mod = sys.modules[fn.__module__]
module_name_split = fn.__module__.split('.')
module_name = module_name_split[-1] if len(module_name_split) else ''
# add model to __all__ in module
model_name = fn.__name__
if hasattr(mod, '__all__'):
mod.__all__.append(model_name)
else:
mod.__all__ = [model_name]
# add entries to registry dict/sets
_model_entrypoints[model_name] = fn
_model_to_module[model_name] = module_name
_module_to_models[module_name].add(model_name)
has_pretrained = False # check if model has a pretrained url to allow filtering on this
if hasattr(mod, 'default_cfgs') and model_name in mod.default_cfgs:
# this will catch all models that have entrypoint matching cfg key, but miss any aliasing
# entrypoints or non-matching combos
has_pretrained = 'url' in mod.default_cfgs[model_name] and 'http' in mod.default_cfgs[model_name]['url']
if has_pretrained:
_model_has_pretrained.add(model_name)
return fn
```

As can be seen above, the `register_model`

function does some pretty basic steps. But the main one that I'd like to highlight is this one

```
_model_entrypoints[model_name] = fn
```

Thus, it adds the given `fn`

to `_model_entrypoints`

where the key is `fn.__name__`

.

**Note:**Can you now guess what does having

`@register_model`

decorator on the `resnet34`

function do? It creates an entry inside the `_model_entrypoints`

that looks like `{’resnet34’: <function timm.models.resnet.resnet34(pretrained=False, **kwargs)>}`

.Also, just by looking at the source code of this `resnet34`

constructor function, we can see that after setting up some `model_args`

it then calls `create_resnet`

function. Let's see how that looks like:

```
def _create_resnet(variant, pretrained=False, **kwargs):
return build_model_with_cfg(
ResNet, variant, default_cfg=default_cfgs[variant], pretrained=pretrained, **kwargs)
```

So the `_create_resnet`

function instead calls the `build_model_with_cfg`

function passing in a constructor class `ResNet`

, variant name `resnet34`

, a `default_cfg`

and some `**kwargs`

.

Every model inside `timm`

has a default config. This contains the URL for the model pretrained weights, the number of classes to classify, input image size, pooling size and so on.

The default config of `resnet34`

looks like:

```
{'url': 'https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-weights/resnet34-43635321.pth',
'num_classes': 1000,
'input_size': (3, 224, 224),
'pool_size': (7, 7),
'crop_pct': 0.875,
'interpolation': 'bilinear',
'mean': (0.485, 0.456, 0.406),
'std': (0.229, 0.224, 0.225),
'first_conv': 'conv1',
'classifier': 'fc'}
```

This default config get's passed to the `build_model_with_cfg`

function along side the other arguments such as the constructor class and some model arguments.

This `build_model_with_cfg`

function is what's responsible for:

- Actually instantiating the model class to create the model inside
`timm`

- Pruning the model if
`pruned=True`

- Loading the pretrained weights if
`pretrained=True`

- Converting the model to a feature extractor if
`features=True`


After inspecting the source code for this function:

```
def build_model_with_cfg(
model_cls: Callable,
variant: str,
pretrained: bool,
default_cfg: dict,
model_cfg: dict = None,
feature_cfg: dict = None,
pretrained_strict: bool = True,
pretrained_filter_fn: Callable = None,
pretrained_custom_load: bool = False,
**kwargs):
pruned = kwargs.pop('pruned', False)
features = False
feature_cfg = feature_cfg or {}
if kwargs.pop('features_only', False):
features = True
feature_cfg.setdefault('out_indices', (0, 1, 2, 3, 4))
if 'out_indices' in kwargs:
feature_cfg['out_indices'] = kwargs.pop('out_indices')
model = model_cls(**kwargs) if model_cfg is None else model_cls(cfg=model_cfg, **kwargs)
model.default_cfg = deepcopy(default_cfg)
if pruned:
model = adapt_model_from_file(model, variant)
# for classification models, check class attr, then kwargs, then default to 1k, otherwise 0 for feats
num_classes_pretrained = 0 if features else getattr(model, 'num_classes', kwargs.get('num_classes', 1000))
if pretrained:
if pretrained_custom_load:
load_custom_pretrained(model)
else:
load_pretrained(
model,
num_classes=num_classes_pretrained, in_chans=kwargs.get('in_chans', 3),
filter_fn=pretrained_filter_fn, strict=pretrained_strict)
if features:
feature_cls = FeatureListNet
if 'feature_cls' in feature_cfg:
feature_cls = feature_cfg.pop('feature_cls')
if isinstance(feature_cls, str):
feature_cls = feature_cls.lower()
if 'hook' in feature_cls:
feature_cls = FeatureHookNet
else:
assert False, f'Unknown feature class {feature_cls}'
model = feature_cls(model, **feature_cfg)
model.default_cfg = default_cfg_for_features(default_cfg) # add back default_cfg
return model
```

One can see that the model get's created at this point `model = model_cls(**kwargs)`

.

Also, as part of this tutorial we are not going to look inside `pruned`

and `adapt_model_from_file`

function.

We have already understood and looked inside the `load_pretrained`

function [here](https://fastai.github.io/timmdocs/models#My-dataset-doesn't-consist-of-3-channel-images---what-now?).

And we take a deep dive inside the `FeatureListNet`

[here] that is responsible for converting our deep learning model to a Feature Extractor.

That's really it. We have now completely looked at `timm.create_model`

function. The main functions that get called are:

- The model constructor function with is different for each model and set's up model specific arguments. The
`_model_entrypoints`

dictionary contains all the model names and respective constructor functions. `build_with_model_cfg`

function with accepts a model constructor class alongside the model specific arguments set inside the model constructor function.`load_pretrained`

which loads the pretrained weights. This also works when the number of input channels is not equal to 3 as in the case of ImageNet.`FeatureListNet`

class that is responsible for converting any model into a feature extractor.

---

## Source: https://timm.fast.ai/tutorial_splitbn

Split Batch Normalization was first introduced in [Split Batch Normalization: Improving Semi-Supervised Learning under Domain Shift](https://arxiv.org/abs/1904.03515).

From the abstract of the paper:

`Recent work has shown that using unlabeled data in semisupervised learning is not always beneficial and can even hurt generalization, especially when there is a class mismatch between the unlabeled and labeled examples. We investigate this phenomenon for image classification on the CIFAR-10 and the ImageNet datasets, and with many other forms of domain shifts applied (e.g. salt-and-pepper noise). Our main contribution is Split Batch Normalization (Split-BN), a technique to improve SSL when the additional unlabeled data comes from a shifted distribution. We achieve it by using separate batch normalization statistics for unlabeled examples. Due to its simplicity, we recommend it as a standard practice. Finally, we analyse how domain shift affects the SSL training process. In particular, we find that during training the statistics of hidden activations in late layers become markedly different between the unlabeled and the labeled examples.`


In simple words, they propose to compute separately batch normalization statistics for the unsupervised and supervised dataset. That is, have separate BN layers instead of 1 for the whole batch.

You might say that's easy to say but how do we implement in code?

Well, in `timm`

training, you just do:

`python train.py ../imagenette2-320 --aug-splits 3 --split-bn --aa rand-m9-mstd0.5-inc1 --resplit`


And that's it. But what does this command mean?

Running the above command-

- Creates 3 groups of training batches
- The first one is referred to as the original (with minimal or zero augmentation)
- The second one is with random augmentation applied to the first one.
- The third one is again with random augmentation applied to the first one.
2. Converts every Batch Normalization inside the model to Split Batch Normalization Layer.
**Note:**Random augmentations are stochastic. Therefore, the second and the third batch are different from each other.

- Does not apply random erase to the first batch, also referred to as the first augmentation split.

The `SplitBatchNorm2d`

on it's own is few lines of code:

```
class SplitBatchNorm2d(torch.nn.BatchNorm2d):
def __init__(self, num_features, eps=1e-5, momentum=0.1, affine=True,
track_running_stats=True, num_splits=2):
super().__init__(num_features, eps, momentum, affine, track_running_stats)
assert num_splits > 1, 'Should have at least one aux BN layer (num_splits at least 2)'
self.num_splits = num_splits
self.aux_bn = nn.ModuleList([
nn.BatchNorm2d(num_features, eps, momentum, affine, track_running_stats) for _ in range(num_splits - 1)])
def forward(self, input: torch.Tensor):
if self.training: # aux BN only relevant while training
split_size = input.shape[0] // self.num_splits
assert input.shape[0] == split_size * self.num_splits, "batch size must be evenly divisible by num_splits"
split_input = input.split(split_size)
x = [super().forward(split_input[0])]
for i, a in enumerate(self.aux_bn):
x.append(a(split_input[i + 1]))
return torch.cat(x, dim=0)
else:
return super().forward(input)
```

Basically, inside the [Adversarial Examples Improve Image Recognition](https://arxiv.org/abs/1911.09665) paper, the authors refer to this Split Batch Norm as Auxilary batch norm. Therefore, as we can see in code, `self.aux_bn`

is a list of `num_splits-1`

length.

Basically, because we subclass `torch.nn.BatchNorm2d`

, therefore, this SplitBatchNorm2d is in itself an instance of Batch Normalization, therefore the first batch norm layer is the `nn.BatchNorm2d`

itself which can be used to normalize the first augmentation split or the clean batch.

Then, we create `num_splits-1`

number of auxiliary batch norms to normalize the remaining splits in the input batch.

This way, we normalize the input batch `X`

separately depending on the number of splits. This is achieved inside these lines of code:

```
split_input = input.split(split_size)
x = [super().forward(split_input[0])]
for i, a in enumerate(self.aux_bn):
x.append(a(split_input[i + 1]))
return torch.cat(x, dim=0)
```

And that's how `timm`

implements `SplitBatchNorm2d`

in PyTorch :)