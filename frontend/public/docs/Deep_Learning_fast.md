# Fast Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.fast.ai/](https://docs.fast.ai/)



---

## Source: https://docs.fast.ai/

# Welcome to fastai

## Installing

You can use fastai without any installation by using [Google Colab](https://colab.research.google.com/). In fact, every page of this documentation is also available as an interactive notebook - click “Open in colab” at the top of any page to open it (be sure to change the Colab runtime to “GPU” to have it run fast!) See the fast.ai documentation on [Using Colab](https://course19.fast.ai/start_colab.html) for more information.

You can install fastai on your own machines with: `pip install fastai`

.

To ensure that you have the best available version of PyTorch on your machine, recommend [installing](https://pytorch.org/get-started/locally/) that first.

If you plan to develop fastai yourself, or want to be on the cutting edge, you can use an editable install (if you do this, you should also use an editable install of [fastcore](https://github.com/fastai/fastcore) to go with it.) First install PyTorch, and then:

```
git clone https://github.com/fastai/fastai
pip install -e "fastai[dev]"
```


## Learning fastai

The best way to get started with fastai (and deep learning) is to read [the book](https://www.amazon.com/Deep-Learning-Coders-fastai-PyTorch/dp/1492045527), and complete [the free course](https://course.fast.ai).

To see what’s possible with fastai, take a look at the [Quick Start](https://docs.fast.ai/quick_start.html), which shows how to use around 5 lines of code to build an image classifier, an image segmentation model, a text sentiment model, a recommendation system, and a tabular model. For each of the applications, the code is much the same.

Read through the [Tutorials](https://docs.fast.ai/tutorial.html) to learn how to train your own models on your own datasets. Use the navigation sidebar to look through the fastai documentation. Every class, function, and method is documented here.

To learn about the design and motivation of the library, read the [peer reviewed paper](https://www.mdpi.com/2078-2489/11/2/108/htm).

## About fastai

fastai is a deep learning library which provides practitioners with high-level components that can quickly and easily provide state-of-the-art results in standard deep learning domains, and provides researchers with low-level components that can be mixed and matched to build new approaches. It aims to do both things without substantial compromises in ease of use, flexibility, or performance. This is possible thanks to a carefully layered architecture, which expresses common underlying patterns of many deep learning and data processing techniques in terms of decoupled abstractions. These abstractions can be expressed concisely and clearly by leveraging the dynamism of the underlying Python language and the flexibility of the PyTorch library. fastai includes:

- A new type dispatch system for Python along with a semantic type hierarchy for tensors
- A GPU-optimized computer vision library which can be extended in pure Python
- An optimizer which refactors out the common functionality of modern optimizers into two basic pieces, allowing optimization algorithms to be implemented in 4–5 lines of code
- A novel 2-way callback system that can access any part of the data, model, or optimizer and change it at any point during training
- A new data block API
- And much more…

fastai is organized around two main design goals: to be approachable and rapidly productive, while also being deeply hackable and configurable. It is built on top of a hierarchy of lower-level APIs which provide composable building blocks. This way, a user wanting to rewrite part of the high-level API or add particular behavior to suit their needs does not have to learn how to use the lowest level.

## Migrating from other libraries

It’s very easy to migrate from plain PyTorch, Ignite, or any other PyTorch-based library, or even to use fastai in conjunction with other libraries. Generally, you’ll be able to use all your existing data processing code, but will be able to reduce the amount of code you require for training, and more easily take advantage of modern best practices. Here are migration guides from some popular libraries to help you on your way:

## Windows Support

Due to python multiprocessing issues on Jupyter and Windows, `num_workers`

of `Dataloader`

is reset to 0 automatically to avoid Jupyter hanging. This makes tasks such as computer vision in Jupyter on Windows many times slower than on Linux. This limitation doesn’t exist if you use fastai from a script.

See [this example](https://github.com/fastai/fastai/blob/master/nbs/examples/dataloader_spawn.py) to fully leverage the fastai API on Windows.

We recommend using Windows Subsystem for Linux (WSL) instead – if you do that, you can use the regular Linux installation approach, and you won’t have any issues with `num_workers`

.

## Tests

To run the tests in parallel, launch:

`nbdev_test`


For all the tests to pass, you’ll need to install the dependencies specified as part of dev_requirements in settings.ini

`pip install -e .[dev]`


Tests are written using `nbdev`

, for example see the documentation for `test_eq`

.

## Contributing

After you clone this repository, make sure you have run `nbdev_install_hooks`

in your terminal. This install Jupyter and git hooks to automatically clean, trust, and fix merge conflicts in notebooks.

After making changes in the repo, you should run `nbdev_prepare`

and make additional and necessary changes in order to pass all the tests.

## Docker Containers

For those interested in official docker containers for this project, they can be found [here](https://github.com/fastai/docker-containers#fastai).

---

## Source: https://docs.fast.ai/index.html

# Welcome to fastai

## Installing

You can use fastai without any installation by using [Google Colab](https://colab.research.google.com/). In fact, every page of this documentation is also available as an interactive notebook - click “Open in colab” at the top of any page to open it (be sure to change the Colab runtime to “GPU” to have it run fast!) See the fast.ai documentation on [Using Colab](https://course19.fast.ai/start_colab.html) for more information.

You can install fastai on your own machines with: `pip install fastai`

.

To ensure that you have the best available version of PyTorch on your machine, recommend [installing](https://pytorch.org/get-started/locally/) that first.

If you plan to develop fastai yourself, or want to be on the cutting edge, you can use an editable install (if you do this, you should also use an editable install of [fastcore](https://github.com/fastai/fastcore) to go with it.) First install PyTorch, and then:

```
git clone https://github.com/fastai/fastai
pip install -e "fastai[dev]"
```


## Learning fastai

The best way to get started with fastai (and deep learning) is to read [the book](https://www.amazon.com/Deep-Learning-Coders-fastai-PyTorch/dp/1492045527), and complete [the free course](https://course.fast.ai).

To see what’s possible with fastai, take a look at the [Quick Start](https://docs.fast.ai/quick_start.html), which shows how to use around 5 lines of code to build an image classifier, an image segmentation model, a text sentiment model, a recommendation system, and a tabular model. For each of the applications, the code is much the same.

Read through the [Tutorials](https://docs.fast.ai/tutorial.html) to learn how to train your own models on your own datasets. Use the navigation sidebar to look through the fastai documentation. Every class, function, and method is documented here.

To learn about the design and motivation of the library, read the [peer reviewed paper](https://www.mdpi.com/2078-2489/11/2/108/htm).

## About fastai

fastai is a deep learning library which provides practitioners with high-level components that can quickly and easily provide state-of-the-art results in standard deep learning domains, and provides researchers with low-level components that can be mixed and matched to build new approaches. It aims to do both things without substantial compromises in ease of use, flexibility, or performance. This is possible thanks to a carefully layered architecture, which expresses common underlying patterns of many deep learning and data processing techniques in terms of decoupled abstractions. These abstractions can be expressed concisely and clearly by leveraging the dynamism of the underlying Python language and the flexibility of the PyTorch library. fastai includes:

- A new type dispatch system for Python along with a semantic type hierarchy for tensors
- A GPU-optimized computer vision library which can be extended in pure Python
- An optimizer which refactors out the common functionality of modern optimizers into two basic pieces, allowing optimization algorithms to be implemented in 4–5 lines of code
- A novel 2-way callback system that can access any part of the data, model, or optimizer and change it at any point during training
- A new data block API
- And much more…

fastai is organized around two main design goals: to be approachable and rapidly productive, while also being deeply hackable and configurable. It is built on top of a hierarchy of lower-level APIs which provide composable building blocks. This way, a user wanting to rewrite part of the high-level API or add particular behavior to suit their needs does not have to learn how to use the lowest level.

## Migrating from other libraries

It’s very easy to migrate from plain PyTorch, Ignite, or any other PyTorch-based library, or even to use fastai in conjunction with other libraries. Generally, you’ll be able to use all your existing data processing code, but will be able to reduce the amount of code you require for training, and more easily take advantage of modern best practices. Here are migration guides from some popular libraries to help you on your way:

## Windows Support

Due to python multiprocessing issues on Jupyter and Windows, `num_workers`

of `Dataloader`

is reset to 0 automatically to avoid Jupyter hanging. This makes tasks such as computer vision in Jupyter on Windows many times slower than on Linux. This limitation doesn’t exist if you use fastai from a script.

See [this example](https://github.com/fastai/fastai/blob/master/nbs/examples/dataloader_spawn.py) to fully leverage the fastai API on Windows.

We recommend using Windows Subsystem for Linux (WSL) instead – if you do that, you can use the regular Linux installation approach, and you won’t have any issues with `num_workers`

.

## Tests

To run the tests in parallel, launch:

`nbdev_test`


For all the tests to pass, you’ll need to install the dependencies specified as part of dev_requirements in settings.ini

`pip install -e .[dev]`


Tests are written using `nbdev`

, for example see the documentation for `test_eq`

.

## Contributing

After you clone this repository, make sure you have run `nbdev_install_hooks`

in your terminal. This install Jupyter and git hooks to automatically clean, trust, and fix merge conflicts in notebooks.

After making changes in the repo, you should run `nbdev_prepare`

and make additional and necessary changes in order to pass all the tests.

## Docker Containers

For those interested in official docker containers for this project, they can be found [here](https://github.com/fastai/docker-containers#fastai).

---

## Source: https://docs.fast.ai/quick_start.html

# Quick start

fastai’s applications all use the same basic steps and code:

- Create appropriate
`DataLoaders`

- Create a
`Learner`

- Call a
*fit*method - Make predictions or view results.

In this quick start, we’ll show these steps for a wide range of different applications and datasets. As you’ll see, the code in each case is extremely similar, despite the very different models and data being used.

## Computer vision classification

The code below does the following things:

- A dataset called the
[Oxford-IIIT Pet Dataset](http://www.robots.ox.ac.uk/~vgg/data/pets/)that contains 7,349 images of cats and dogs from 37 different breeds will be downloaded from the fast.ai datasets collection to the GPU server you are using, and will then be extracted. - A
*pretrained model*that has already been trained on 1.3 million images, using a competition-winning model will be downloaded from the internet. - The pretrained model will be
*fine-tuned*using the latest advances in transfer learning, to create a model that is specially customized for recognizing dogs and cats.

The first two steps only need to be run once. If you run it again, it will use the dataset and model that have already been downloaded, rather than downloading them again.

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.173790 | 0.018827 | 0.005413 | 00:12 |

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.064295 | 0.013404 | 0.005413 | 00:14 |

You can do inference with your model with the `predict`

method:

```
Is this a cat?: True.
Probability it's a cat: 0.999722
```


### Computer vision segmentation

Here is how we can train a segmentation model with fastai, using a subset of the [ Camvid dataset](http://www0.cs.ucl.ac.uk/staff/G.Brostow/papers/Brostow_2009-PRL.pdf):

path = untar_data(URLs.CAMVID_TINY)
dls = SegmentationDataLoaders.from_label_func(
path, bs=8, fnames = get_image_files(path/"images"),
label_func = lambda o: path/'labels'/f'{o.stem}_P{o.suffix}',
codes = np.loadtxt(path/'codes.txt', dtype=str)
)
learn = unet_learner(dls, resnet34)
learn.fine_tune(8)


| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 2.882460 | 2.096923 | 00:03 |

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 1.602270 | 1.543582 | 00:02 |
| 1 | 1.417732 | 1.225782 | 00:02 |
| 2 | 1.307454 | 1.071090 | 00:02 |
| 3 | 1.170338 | 0.884501 | 00:02 |
| 4 | 1.047036 | 0.799820 | 00:02 |
| 5 | 0.947965 | 0.754801 | 00:02 |
| 6 | 0.868178 | 0.728161 | 00:02 |
| 7 | 0.804939 | 0.720942 | 00:02 |

We can visualize how well it achieved its task, by asking the model to color-code each pixel of an image.

Or we can plot the `k`

instances that contributed the most to the validation loss by using the [ SegmentationInterpretation](https://docs.fast.ai/interpret.html#segmentationinterpretation) class.

## Natural language processing

Here is all of the code necessary to train a model that can classify the sentiment of a movie review better than anything that existed in the world just five years ago:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.594912 | 0.407416 | 0.823640 | 01:35 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.268259 | 0.316242 | 0.876000 | 03:03 |
| 1 | 0.184861 | 0.246242 | 0.898080 | 03:10 |
| 2 | 0.136392 | 0.220086 | 0.918200 | 03:16 |
| 3 | 0.106423 | 0.191092 | 0.931360 | 03:15 |

Predictions are done with `predict`

, as for computer vision:

## Tabular

Building models from plain *tabular* data is done using the same basic steps as the previous models. Here is the code necessary to train a model that will predict whether a person is a high-income earner, based on their socioeconomic background:

path = untar_data(URLs.ADULT_SAMPLE)
dls = TabularDataLoaders.from_csv(path/'adult.csv', path=path, y_names="salary",
cat_names = ['workclass', 'education', 'marital-status', 'occupation',
'relationship', 'race'],
cont_names = ['age', 'fnlwgt', 'education-num'],
procs = [Categorify, FillMissing, Normalize])
learn = tabular_learner(dls, metrics=accuracy)
learn.fit_one_cycle(2)


| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.372298 | 0.359698 | 0.829392 | 00:06 |
| 1 | 0.357530 | 0.349440 | 0.837377 | 00:06 |

## Recommendation systems

Recommendation systems are very important, particularly in e-commerce. Companies like Amazon and Netflix try hard to recommend products or movies that users might like. Here’s how to train a model that will predict movies people might like, based on their previous viewing habits, using the [MovieLens dataset](https://doi.org/10.1145/2827872):

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 1.497551 | 1.435720 | 00:00 |

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 1.332337 | 1.351769 | 00:00 |
| 1 | 1.180177 | 1.046801 | 00:00 |
| 2 | 0.913091 | 0.799319 | 00:00 |
| 3 | 0.749806 | 0.731218 | 00:00 |
| 4 | 0.686577 | 0.715372 | 00:00 |
| 5 | 0.665683 | 0.713309 | 00:00 |

We can use the same [ show_results](https://docs.fast.ai/data.core.html#show_results) call we saw earlier to view a few examples of user and movie IDs, actual ratings, and predictions:

---

## Source: https://docs.fast.ai/tutorial.html

# Tutorials

To help you get started

The most important thing to remember is that each page of this documentation comes from a notebook. You can find them in the “nbs” folder in the [main repo](https://github.com/fastai/fastai/tree/master/nbs). For tutorials, you can play around with the code and tweak it to do your own experiments. For the pages documenting the library, you will be able to see the source code and interact with all the tests.

If you are just starting with the library, checkout the beginners tutorials. They cover how to treat each application using the high-level API:

Once you are comfortable enough and want to start digging in the mid-level API, have a look at the intermediate tutorials:

[the data block API](./tutorial.datablock.html)[a base training on Imagenette](./tutorial.imagenette.html)[the mid-level data API in vision](./tutorial.pets.html)[the mid-level data API in text](./tutorial.wikitext.html)

And for even more experienced users that want to customize the library to their needs, check the advanced tutorials:

---

## Source: https://docs.fast.ai/tutorial.vision.html

# Computer vision intro

This tutorial highlights on how to quickly build a [ Learner](https://docs.fast.ai/learner.html#learner) and fine tune a pretrained model on most computer vision tasks.

## Single-label classification

For this task, we will use the [Oxford-IIIT Pet Dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/) that contains images of cats and dogs of 37 different breeds. We will first show how to build a simple cat-vs-dog classifier, then a little bit more advanced model that can classify all breeds.

The dataset can be downloaded and decompressed with this line of code:

It will only do this download once, and return the location of the decompressed archive. We can check what is inside with the `.ls()`

method.

`(#2) [Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images'),Path('/home/jhoward/.fastai/data/oxford-iiit-pet/annotations')]`


We will ignore the annotations folder for now, and focus on the images one. [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files) is a fastai function that helps us grab all the image files (recursively) in one folder.

### Cats vs dogs

To label our data for the cats vs dogs problem, we need to know which filenames are of dog pictures and which ones are of cat pictures. There is an easy way to distinguish: the name of the file begins with a capital for cats, and a lowercased letter for dogs:

```
(Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/basset_hound_181.jpg'),
Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/beagle_128.jpg'))
```


We can then define an easy label function:

To get our data ready for a model, we need to put it in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object. Here we have a function that labels using the file names, so we will use

[. There are other factory methods of](https://docs.fast.ai/vision.data.html#imagedataloaders.from_name_func)

`ImageDataLoaders.from_name_func`

[that could be more suitable for your problem, so make sure to check them all in](https://docs.fast.ai/vision.data.html#imagedataloaders)

`ImageDataLoaders`

`vision.data`

.We have passed to this function the directory we’re working in, the `files`

we grabbed, our `label_func`

and one last piece as `item_tfms`

: this is a `Transform`

applied on all items of our dataset that will resize each image to 224 by 224, by using a random crop on the largest dimension to make it a square, then resizing to 224 by 224. If we didn’t pass this, we would get an error later as it would be impossible to batch the items together.

We can then check if everything looks okay with the [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method (

`True`

is for cat, `False`

is for dog):Then we can create a [ Learner](https://docs.fast.ai/learner.html#learner), which is a fastai object that combines the data and a model for training, and uses transfer learning to fine tune a pretrained model in just two lines of code:

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.150819 | 0.023647 | 0.007442 | 00:09 |

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.046232 | 0.011466 | 0.004736 | 00:10 |

The first line downloaded a model called ResNet34, pretrained on [ImageNet](http://www.image-net.org/), and adapted it to our specific problem. It then fine tuned that model and in a relatively short time, we get a model with an error rate of well under 1%… amazing!

If you want to make a prediction on a new image, you can use `learn.predict`

:

The predict method returns three things: the decoded prediction (here `False`

for dog), the index of the predicted class and the tensor of probabilities of all classes in the order of their indexed labels(in this case, the model is quite confident about the being that of a dog). This method accepts a filename, a PIL image or a tensor directly in this case. We can also have a look at some predictions with the [ show_results](https://docs.fast.ai/data.core.html#show_results) method:

Check out the other applications like text or tabular, or the other problems covered in this tutorial, and you will see they all share a consistent API for gathering the data and look at it, create a [ Learner](https://docs.fast.ai/learner.html#learner), train the model and look at some predictions.

### Classifying breeds

To label our data with the breed name, we will use a regular expression to extract it from the filename. Looking back at a filename, we have:

so the class is everything before the last `_`

followed by some digits. A regular expression that will catch the name is thus:

Since it’s pretty common to use regular expressions to label the data (often, labels are hidden in the file names), there is a factory method to do just that:

Like before, we can then use [ show_batch](https://docs.fast.ai/data.core.html#show_batch) to have a look at our data:

Since classifying the exact breed of cats or dogs amongst 37 different breeds is a harder problem, we will slightly change the definition of our [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) to use data augmentation:

This time we resized to a larger size before batching, and we added `batch_tfms`

. [ aug_transforms](https://docs.fast.ai/vision.augment.html#aug_transforms) is a function that provides a collection of data augmentation transforms with defaults we found that perform well on many datasets. You can customize these transforms by passing appropriate arguments to

[.](https://docs.fast.ai/vision.augment.html#aug_transforms)

`aug_transforms`

We can then create our [ Learner](https://docs.fast.ai/learner.html#learner) exactly as before and train our model.

We used the default learning rate before, but we might want to find the best one possible. For this, we can use the learning rate finder:

It plots the graph of the learning rate finder and gives us two suggestions (minimum divided by 10 and steepest gradient). Let’s use `3e-3`

here. We will also do a bit more epochs:

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 1.270041 | 0.308686 | 0.109608 | 00:16 |

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.468626 | 0.355379 | 0.117050 | 00:21 |
| 1 | 0.418402 | 0.384385 | 0.110961 | 00:20 |
| 2 | 0.267954 | 0.220428 | 0.075778 | 00:21 |
| 3 | 0.143201 | 0.203174 | 0.064953 | 00:20 |

Again, we can have a look at some predictions with [ show_results](https://docs.fast.ai/data.core.html#show_results):

Another thing that is useful is an interpretation object, it can show us where the model made the worse predictions:

### Single-label classification - With the data block API

We can also use the data block API to get our data in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). This is a bit more advanced, so fell free to skip this part if you are not comfortable with learning new API’s just yet.

A datablock is built by giving the fastai library a bunch of informations:

- the types used, through an argument called
`blocks`

: here we have images and categories, so we passand`ImageBlock`

.`CategoryBlock`

- how to get the raw items, here our function
.`get_image_files`

- how to label those items, here with the same regular expression as before.
- how to split those items, here with a random splitter.
- the
`item_tfms`

and`batch_tfms`

like before.

The pets object by itself is empty: it only containes the functions that will help us gather the data. We have to call `dataloaders`

method to get a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). We pass it the source of the data:

Then we can look at some of our pictures with `dls.show_batch()`


## Multi-label classification

For this task, we will use the [Pascal Dataset](http://host.robots.ox.ac.uk/pascal/VOC/) that contains images with different kinds of objects/persons. It’s orginally a dataset for object detection, meaning the task is not only to detect if there is an instance of one class of an image, but to also draw a bounding box around it. Here we will just try to predict all the classes in one given image.

Multi-label classification defers from before in the sense each image does not belong to one category. An image could have a person *and* a horse inside it for instance. Or have none of the categories we study.

As before, we can download the dataset pretty easily:

`(#9) [Path('/home/jhoward/.fastai/data/pascal_2007/valid.json'),Path('/home/jhoward/.fastai/data/pascal_2007/test.json'),Path('/home/jhoward/.fastai/data/pascal_2007/test'),Path('/home/jhoward/.fastai/data/pascal_2007/train.json'),Path('/home/jhoward/.fastai/data/pascal_2007/test.csv'),Path('/home/jhoward/.fastai/data/pascal_2007/models'),Path('/home/jhoward/.fastai/data/pascal_2007/segmentation'),Path('/home/jhoward/.fastai/data/pascal_2007/train.csv'),Path('/home/jhoward/.fastai/data/pascal_2007/train')]`


The information about the labels of each image is in the file named `train.csv`

. We load it using pandas:

| fname | labels | is_valid | |
|---|---|---|---|
| 0 | 000005.jpg | chair | True |
| 1 | 000007.jpg | car | True |
| 2 | 000009.jpg | horse person | True |
| 3 | 000012.jpg | car | False |
| 4 | 000016.jpg | bicycle | True |

### Multi-label classification - Using the high-level API

That’s pretty straightforward: for each filename, we get the different labels (separated by space) and the last column tells if it’s in the validation set or not. To get this in [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) quickly, we have a factory method,

`from_df`

. We can specify the underlying path where all the images are, an additional folder to add between the base path and the filenames (here `train`

), the `valid_col`

to consider for the validation set (if we don’t specify this, we take a random subset), a `label_delim`

to split the labels and, as before, `item_tfms`

and `batch_tfms`

.Note that we don’t have to specify the `fn_col`

and the `label_col`

because they default to the first and second column respectively.

As before, we can then have a look at the data with the [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method.

Training a model is as easy as before: the same functions can be applied and the fastai library will automatically detect that we are in a multi-label problem, thus picking the right loss function. The only difference is in the metric we pass: [ error_rate](https://docs.fast.ai/metrics.html#error_rate) will not work for a multi-label problem, but we can use

`accuracy_thresh`

and [. We can also change the default name for a metric, for instance, we may want to see F1 scores with](https://docs.fast.ai/metrics.html#f1scoremulti)

`F1ScoreMulti`

`macro`

and `samples`

averaging.As before, we can use `learn.lr_find`

to pick a good learning rate:

We can pick the suggested learning rate and fine-tune our pretrained model:

| epoch | train_loss | valid_loss | accuracy_multi | time |
|---|---|---|---|---|
| 0 | 0.437855 | 0.136942 | 0.954801 | 00:17 |

| epoch | train_loss | valid_loss | accuracy_multi | time |
|---|---|---|---|---|
| 0 | 0.156202 | 0.465557 | 0.914801 | 00:20 |
| 1 | 0.179814 | 0.382907 | 0.930040 | 00:20 |
| 2 | 0.157007 | 0.129412 | 0.953924 | 00:20 |
| 3 | 0.125787 | 0.109033 | 0.960856 | 00:19 |

Like before, we can easily have a look at the results:

Or get the predictions on a given image:

```
((#2) ['chair','diningtable'],
TensorImage([False, False, False, False, False, False, False, False, True, False,
True, False, False, False, False, False, False, False, False, False]),
TensorImage([1.6750e-03, 5.3663e-03, 1.6378e-03, 2.2269e-03, 5.8645e-02, 6.3422e-03,
5.6991e-03, 1.3682e-02, 8.6864e-01, 9.7093e-04, 6.4747e-01, 4.1217e-03,
1.2410e-03, 2.9412e-03, 4.7769e-01, 9.9664e-02, 4.5190e-04, 6.3532e-02,
6.4487e-03, 1.6339e-01]))
```


As for the single classification predictions, we get three things. The last one is the prediction of the model on each class (going from 0 to 1). The second to last cooresponds to a one-hot encoded targets (you get `True`

for all predicted classes, the ones that get a probability > 0.5) and the first is the decoded, readable version.

And like before, we can check where the model did its worse:

| target | predicted | probabilities | loss | |
|---|---|---|---|---|
| 0 | car;person;tvmonitor | car | tensor([7.2388e-12, 5.9609e-06, 1.7054e-11, 3.8985e-09, 7.7078e-12, 3.4044e-07,\n 9.9999e-01, 7.2118e-12, 1.0105e-05, 3.1035e-09, 2.3334e-09, 9.1077e-09,\n 1.6201e-09, 1.1083e-08, 1.0809e-02, 2.1072e-07, 9.5961e-16, 5.0478e-07,\n 4.4531e-10, 9.6444e-12]) | 1.494603157043457 |
| 1 | boat | car | tensor([8.3430e-06, 1.9416e-03, 6.9865e-06, 1.2985e-04, 1.6142e-06, 8.2200e-05,\n 9.9698e-01, 1.3143e-06, 1.0047e-03, 4.9794e-05, 1.9155e-05, 4.7409e-05,\n 7.5056e-05, 1.6572e-05, 3.4760e-02, 6.9266e-04, 1.3006e-07, 6.0702e-04,\n 1.5781e-05, 1.9860e-06]) | 0.7395917773246765 |
| 2 | bus;car | car | tensor([2.2509e-11, 1.0772e-05, 6.0177e-11, 4.8728e-09, 1.7920e-11, 4.8695e-07,\n 9.9999e-01, 9.0638e-12, 1.9819e-05, 8.8023e-09, 5.1272e-09, 2.3535e-08,\n 6.0401e-09, 7.2609e-09, 4.4117e-03, 4.8268e-07, 1.2528e-14, 1.2667e-06,\n 8.2282e-10, 1.6300e-11]) | 0.7269787192344666 |
| 3 | chair;diningtable;person | person;train | tensor([1.6638e-03, 2.0881e-02, 4.7525e-03, 2.6422e-02, 6.2972e-04, 4.7170e-02,\n 1.2263e-01, 2.9744e-03, 5.5352e-03, 7.1830e-03, 1.0062e-03, 2.6123e-03,\n 1.8208e-02, 5.9618e-02, 7.6859e-01, 3.3504e-03, 1.1324e-03, 2.3881e-03,\n 6.5440e-01, 1.7040e-03]) | 0.6879587769508362 |
| 4 | boat;chair;diningtable;person | person | tensor([0.0058, 0.0461, 0.0068, 0.1083, 0.0094, 0.0212, 0.4400, 0.0047, 0.0166,\n 0.0054, 0.0030, 0.0258, 0.0020, 0.0800, 0.5880, 0.0147, 0.0026, 0.1440,\n 0.0219, 0.0166]) | 0.6826764941215515 |
| 5 | bicycle;car;person | car | tensor([3.6825e-09, 7.3755e-05, 1.7181e-08, 4.5056e-07, 3.5667e-09, 1.0882e-05,\n 9.9939e-01, 6.0704e-09, 5.7179e-05, 3.8519e-07, 9.3825e-08, 6.1463e-07,\n 3.9191e-07, 2.6800e-06, 3.3091e-02, 3.1972e-06, 2.6873e-11, 1.1967e-05,\n 1.1480e-07, 3.3320e-09]) | 0.6461981534957886 |
| 6 | bottle;cow;person | chair;person;sofa | tensor([5.4520e-04, 4.2805e-03, 2.3828e-03, 1.4127e-03, 4.5856e-02, 3.5540e-03,\n 9.1525e-03, 2.9113e-02, 6.9326e-01, 1.0407e-03, 7.0658e-02, 3.1101e-02,\n 2.4843e-03, 2.9908e-03, 8.8695e-01, 2.2719e-01, 1.0283e-03, 6.0414e-01,\n 1.3598e-03, 5.7382e-02]) | 0.6329519152641296 |
| 7 | chair;dog;person | cat | tensor([3.4073e-05, 1.3574e-03, 7.0516e-04, 1.9189e-04, 6.0819e-03, 4.7242e-05,\n 9.6424e-04, 9.3669e-01, 9.0736e-02, 8.1472e-04, 1.1019e-02, 5.4633e-02,\n 2.6190e-04, 1.4943e-04, 1.2755e-02, 1.7530e-02, 2.2532e-03, 2.2129e-02,\n 1.5532e-04, 6.6390e-03]) | 0.6249645352363586 |
| 8 | car;person;pottedplant | car | tensor([1.3978e-06, 2.1693e-03, 2.2698e-07, 7.5037e-05, 9.4007e-07, 1.2369e-03,\n 9.9919e-01, 1.0879e-07, 3.1837e-04, 1.8340e-05, 7.5422e-06, 2.3891e-05,\n 2.5957e-05, 3.0890e-05, 8.4529e-02, 2.0280e-04, 4.1234e-09, 1.7978e-04,\n 2.3258e-05, 6.0897e-07]) | 0.5489450693130493 |

### Multi-label classification - With the data block API

We can also use the data block API to get our data in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). Like we said before, feel free to skip this part if you are not comfortable with learning new APIs just yet.

Remember how the data is structured in our dataframe:

| fname | labels | is_valid | |
|---|---|---|---|
| 0 | 000005.jpg | chair | True |
| 1 | 000007.jpg | car | True |
| 2 | 000009.jpg | horse person | True |
| 3 | 000012.jpg | car | False |
| 4 | 000016.jpg | bicycle | True |

In this case we build the data block by providing:

- the types used:
and`ImageBlock`

.`MultiCategoryBlock`

- how to get the input items from our dataframe: here we read the column
`fname`

and need to add path/train/ at the beginning to get proper filenames. - how to get the targets from our dataframe: here we read the column
`labels`

and need to split by space. - how to split the items, here by using the column
`is_valid`

. - the
`item_tfms`

and`batch_tfms`

like before.

This block is slightly different than before: we don’t need to pass a function to gather all our items as the dataframe we will give already has them all. However, we do need to preprocess the row of that dataframe to get out inputs, which is why we pass a `get_x`

. It defaults to the fastai function `noop`

, which is why we didn’t need to pass it along before.

Like before, `pascal`

is just a blueprint. We need to pass it the source of our data to be able to get [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders):

Then we can look at some of our pictures with `dls.show_batch()`


## Segmentation

Segmentation is a problem where we have to predict a category for each pixel of the image. For this task, we will use the [Camvid dataset](http://mi.eng.cam.ac.uk/research/projects/VideoRec/CamVid/), a dataset of screenshots from cameras in cars. Each pixel of the image has a label such as “road”, “car” or “pedestrian”.

As usual, we can download the data with our [ untar_data](https://docs.fast.ai/data.external.html#untar_data) function.

`(#3) [Path('/home/jhoward/.fastai/data/camvid_tiny/codes.txt'),Path('/home/jhoward/.fastai/data/camvid_tiny/images'),Path('/home/jhoward/.fastai/data/camvid_tiny/labels')]`


The `images`

folder contains the images, and the corresponding segmentation masks of labels are in the `labels`

folder. The `codes`

file contains the corresponding integer to class (the masks have an int value for each pixel).

```
array(['Animal', 'Archway', 'Bicyclist', 'Bridge', 'Building', 'Car',
'CartLuggagePram', 'Child', 'Column_Pole', 'Fence', 'LaneMkgsDriv',
'LaneMkgsNonDriv', 'Misc_Text', 'MotorcycleScooter', 'OtherMoving',
'ParkingBlock', 'Pedestrian', 'Road', 'RoadShoulder', 'Sidewalk',
'SignSymbol', 'Sky', 'SUVPickupTruck', 'TrafficCone',
'TrafficLight', 'Train', 'Tree', 'Truck_Bus', 'Tunnel',
'VegetationMisc', 'Void', 'Wall'], dtype='<U17')
```


### Segmentation - Using the high-level API

As before, the [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files) function helps us grab all the image filenames:

`Path('/home/jhoward/.fastai/data/camvid_tiny/images/0006R0_f02910.png')`


Let’s have a look in the labels folder:

It seems the segmentation masks have the same base names as the images but with an extra `_P`

, so we can define a label function:

We can then gather our data using [ SegmentationDataLoaders](https://docs.fast.ai/vision.data.html#segmentationdataloaders):

We do not need to pass `item_tfms`

to resize our images here because they already are all of the same size.

As usual, we can have a look at our data with the [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method. In this instance, the fastai library is superimposing the masks with one specific color per pixel:

A traditional CNN won’t work for segmentation, we have to use a special kind of model called a UNet, so we use [ unet_learner](https://docs.fast.ai/vision.learner.html#unet_learner) to define our

[:](https://docs.fast.ai/learner.html#learner)

`Learner`

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 2.802264 | 2.476579 | 00:03 |

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 1.664625 | 1.525224 | 00:03 |
| 1 | 1.440311 | 1.271917 | 00:02 |
| 2 | 1.339473 | 1.123384 | 00:03 |
| 3 | 1.233049 | 0.988725 | 00:03 |
| 4 | 1.110815 | 0.805028 | 00:02 |
| 5 | 1.008600 | 0.815411 | 00:03 |
| 6 | 0.924937 | 0.755052 | 00:02 |
| 7 | 0.857789 | 0.769288 | 00:03 |

And as before, we can get some idea of the predicted results with `show_results`


We can also sort the model’s errors on the validation set using the [ SegmentationInterpretation](https://docs.fast.ai/interpret.html#segmentationinterpretation) class and then plot the instances with the

`k`

highest contributions to the validation loss.### Segmentation - With the data block API

We can also use the data block API to get our data in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). Like it’s been said before, feel free to skip this part if you are not comfortable with learning new APIs just yet.

In this case we build the data block by providing:

- the types used:
and`ImageBlock`

. We provide the`MaskBlock`

`codes`

toas there is no way to guess them from the data.`MaskBlock`

- how to gather our items, here by using
.`get_image_files`

- how to get the targets from our items: by using
`label_func`

. - how to split the items, here randomly.
`batch_tfms`

for data augmentation.

## Points

This section uses the data block API, so if you skipped it before, we recommend you skip this section as well.

We will now look at a task where we want to predict points in a picture. For this, we will use the [Biwi Kinect Head Pose Dataset](https://data.vision.ee.ethz.ch/cvl/gfanelli/head_pose/head_forest.html#db). First thing first, let’s begin by downloading the dataset as usual.

Let’s see what we’ve got!

`(#50) [Path('/home/sgugger/.fastai/data/biwi_head_pose/01.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/18.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/04'),Path('/home/sgugger/.fastai/data/biwi_head_pose/10.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/24'),Path('/home/sgugger/.fastai/data/biwi_head_pose/14.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/20.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/11.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/02.obj'),Path('/home/sgugger/.fastai/data/biwi_head_pose/07')...]`


There are 24 directories numbered from 01 to 24 (they correspond to the different persons photographed) and a corresponding .obj file (we won’t need them here). We’ll take a look inside one of these directories:

`(#1000) [Path('01/frame_00087_pose.txt'),Path('01/frame_00079_pose.txt'),Path('01/frame_00114_pose.txt'),Path('01/frame_00084_rgb.jpg'),Path('01/frame_00433_pose.txt'),Path('01/frame_00323_rgb.jpg'),Path('01/frame_00428_rgb.jpg'),Path('01/frame_00373_pose.txt'),Path('01/frame_00188_rgb.jpg'),Path('01/frame_00354_rgb.jpg')...]`


Inside the subdirectories, we have different frames, each of them come with an image (`\_rgb.jpg`

) and a pose file (`\_pose.txt`

). We can easily get all the image files recursively with [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files), then write a function that converts an image filename to its associated pose file.

`Path('04/frame_00084_pose.txt')`


We can have a look at our first image:

The Biwi dataset web site explains the format of the pose text file associated with each image, which shows the location of the center of the head. The details of this aren’t important for our purposes, so we’ll just show the function we use to extract the head center point:

This function returns the coordinates as a tensor of two items:

We can pass this function to [ DataBlock](https://docs.fast.ai/data.block.html#datablock) as

`get_y`

, since it is responsible for labeling each item. We’ll resize the images to half their input size, just to speed up training a bit.One important point to note is that we should not just use a random splitter. The reason for this is that the same person appears in multiple images in this dataset — but we want to ensure that our model can generalise to people that it hasn’t seen yet. Each folder in the dataset contains the images for one person. Therefore, we can create a splitter function which returns true for just one person, resulting in a validation set containing just that person’s images.

The only other difference to previous data block examples is that the second block is a `PointBlock`

. This is necessary so that fastai knows that the labels represent coordinates; that way, it knows that when doing data augmentation, it should do the same augmentation to these coordinates as it does to the images.

Now that we have assembled our data, we can use the rest of the fastai API as usual. [ vision_learner](https://docs.fast.ai/vision.learner.html#vision_learner) works perfectly in this case, and the library will infer the proper loss function from the data:

Then we can train our model:

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 0.057434 | 0.002171 | 00:31 |

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 0.005320 | 0.005426 | 00:39 |
| 1 | 0.003624 | 0.000698 | 00:39 |
| 2 | 0.002163 | 0.000099 | 00:39 |
| 3 | 0.001325 | 0.000233 | 00:39 |

The loss is the mean squared error, so that means we make on average an error of

percent when predicting our points! And we can look at those results as usual:

---

## Source: https://docs.fast.ai/tutorial.text.html

# Text transfer learning

In this tutorial, we will see how we can train a model to classify text (here based on their sentiment). First we will see how to do this quickly in a few lines of code, then how to get state-of-the art results using the approach of the [ULMFit paper](https://arxiv.org/abs/1801.06146).

We will use the IMDb dataset from the paper [Learning Word Vectors for Sentiment Analysis](https://ai.stanford.edu/~amaas/data/sentiment/), containing a few thousand movie reviews.

## Train a text classifier from a pretrained model

We will try to train a classifier using a pretrained model, a bit like we do in the [vision tutorial](./tutorial.vision.html). To get our data ready, we will first use the high-level API:

## Using the high-level API

We can download the data and decompress it with the following command:

`(#5) [Path('/home/sgugger/.fastai/data/imdb/unsup'),Path('/home/sgugger/.fastai/data/imdb/models'),Path('/home/sgugger/.fastai/data/imdb/train'),Path('/home/sgugger/.fastai/data/imdb/test'),Path('/home/sgugger/.fastai/data/imdb/README')]`


`(#4) [Path('/home/sgugger/.fastai/data/imdb/train/pos'),Path('/home/sgugger/.fastai/data/imdb/train/unsupBow.feat'),Path('/home/sgugger/.fastai/data/imdb/train/labeledBow.feat'),Path('/home/sgugger/.fastai/data/imdb/train/neg')]`


The data follows an ImageNet-style organization, in the train folder, we have two subfolders, `pos`

and `neg`

(for positive reviews and negative reviews). We can gather it by using the [ TextDataLoaders.from_folder](https://docs.fast.ai/text.data.html#textdataloaders.from_folder) method. The only thing we need to specify is the name of the validation folder, which is “test” (and not the default “valid”).

We can then have a look at the data with the [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method:

| text | category | |
|---|---|---|
| 0 | xxbos xxmaj match 1 : xxmaj tag xxmaj team xxmaj table xxmaj match xxmaj bubba xxmaj ray and xxmaj spike xxmaj dudley vs xxmaj eddie xxmaj guerrero and xxmaj chris xxmaj benoit xxmaj bubba xxmaj ray and xxmaj spike xxmaj dudley started things off with a xxmaj tag xxmaj team xxmaj table xxmaj match against xxmaj eddie xxmaj guerrero and xxmaj chris xxmaj benoit . xxmaj according to the rules of the match , both opponents have to go through tables in order to get the win . xxmaj benoit and xxmaj guerrero heated up early on by taking turns hammering first xxmaj spike and then xxmaj bubba xxmaj ray . a xxmaj german xxunk by xxmaj benoit to xxmaj bubba took the wind out of the xxmaj dudley brother . xxmaj spike tried to help his brother , but the referee restrained him while xxmaj benoit and xxmaj guerrero | pos |
| 1 | xxbos xxmaj warning : xxmaj does contain spoilers . \n\n xxmaj open xxmaj your xxmaj eyes \n\n xxmaj if you have not seen this film and plan on doing so , just stop reading here and take my word for it . xxmaj you have to see this film . i have seen it four times so far and i still have n't made up my mind as to what exactly happened in the film . xxmaj that is all i am going to say because if you have not seen this film , then stop reading right now . \n\n xxmaj if you are still reading then i am going to pose some questions to you and maybe if anyone has any answers you can email me and let me know what you think . \n\n i remember my xxmaj grade 11 xxmaj english teacher quite well . xxmaj | pos |
| 2 | xxbos i thought that xxup rotj was clearly the best out of the three xxmaj star xxmaj wars movies . i find it surprising that xxup rotj is considered the weakest installment in the xxmaj trilogy by many who have voted . xxmaj to me it seemed like xxup rotj was the best because it had the most profound plot , the most suspense , surprises , most xxunk the ending ) and definitely the most episodic movie . i personally like the xxmaj empire xxmaj strikes xxmaj back a lot also but i think it is slightly less good than than xxup rotj since it was slower - moving , was not as episodic , and i just did not feel as much suspense or emotion as i did with the third movie . \n\n xxmaj it also seems like to me that after reading these surprising reviews that | pos |
| 3 | xxbos xxup the xxup shop xxup around xxup the xxup corner is one of the sweetest and most feel - good romantic comedies ever made . xxmaj there 's just no getting around that , and it 's hard to actually put one 's feeling for this film into words . xxmaj it 's not one of those films that tries too hard , nor does it come up with the oddest possible scenarios to get the two protagonists together in the end . xxmaj in fact , all its charm is innate , contained within the characters and the setting and the plot … which is highly believable to boot . xxmaj it 's easy to think that such a love story , as beautiful as any other ever told , * could * happen to you … a feeling you do n't often get from other romantic comedies | pos |
| 4 | xxbos xxmaj the premise of this movie has been tickling my imagination for quite some time now . xxmaj we 've all heard or read about it in some kind of con - text . xxmaj what would you do if you were all alone in the world ? xxmaj what would you do if the entire world suddenly disappeared in front of your eyes ? xxmaj in fact , the last part is actually what happens to xxmaj dave and xxmaj andrew , two room - mates living in a run - down house in the middle of a freeway system . xxmaj andrew is a nervous wreck to say the least and xxmaj dave is considered being one of the biggest losers of society . xxmaj that alone is the main reason to why these two guys get so well along , because they simply only have each | pos |
| 5 | xxbos xxrep 3 * xxup spoilers xxrep 3 * xxrep 3 * xxup spoilers xxrep 3 * xxmaj continued … \n\n xxmaj from here on in the whole movie collapses in on itself . xxmaj first we meet a rogue program with the indication we 're gon na get ghosts and vampires and werewolves and the like . xxmaj we get a guy with a retarded accent talking endless garbage , two ' ghosts ' that serve no real purpose and have no character what - so - ever and a bunch of henchmen . xxmaj someone 's told me they 're vampires ( straight out of xxmaj blade 2 ) , but they 're so undefined i did n't realise . \n\n xxmaj the funny accented guy with a ridiculous name suffers the same problem as the xxmaj oracle , only for far longer and far far worse . | neg |
| 6 | xxbos xxmaj i 've rented and watched this movie for the 1st time on xxup dvd without reading any reviews about it . xxmaj so , after 15 minutes of watching xxmaj i 've noticed that something is wrong with this movie ; it 's xxup terrible ! i mean , in the trailers it looked scary and serious ! \n\n i think that xxmaj eli xxmaj roth ( mr . xxmaj director ) thought that if all the characters in this film were stupid , the movie would be funny … ( so stupid , it 's funny … ? xxup wrong ! ) xxmaj he should watch and learn from better horror - comedies such xxunk xxmaj night " , " the xxmaj lost xxmaj boys " and " the xxmaj return xxmaj of the xxmaj living xxmaj dead " ! xxmaj those are funny ! \n\n " | neg |
| 7 | xxbos xxup myra xxup breckinridge is one of those rare films that established its place in film history immediately . xxmaj praise for the film was absolutely nonexistent , even from the people involved in making it . xxmaj this film was loathed from day one . xxmaj while every now and then one will come across some maverick who will praise the film on philosophical grounds ( aggressive feminism or the courage to tackle the issue of xxunk ) , the film has not developed a cult following like some notorious flops do . xxmaj it 's not hailed as a misunderstood masterpiece like xxup scarface , or trotted out to be ridiculed as a camp classic like xxup showgirls . \n\n xxmaj undoubtedly the reason is that the film , though outrageously awful , is not lovable , or even likable . xxup myra xxup breckinridge is just | neg |
| 8 | xxbos xxmaj after reading the previous comments , xxmaj i 'm just glad that i was n't the only person left confused , especially by the last 20 minutes . xxmaj john xxmaj carradine is shown twice walking down into a grave and pulling the lid shut after him . i anxiously awaited some kind of explanation for this odd behavior … naturally i assumed he had something to do with the evil goings - on at the house , but since he got killed off by the first rising corpse ( hereafter referred to as xxmaj zombie # 1 ) , these scenes made absolutely no sense . xxmaj please , if someone out there knows why xxmaj carradine kept climbing down into graves -- let the rest of us in on it ! ! \n\n xxmaj all the action is confined to the last 20 minutes so xxmaj | neg |

We can see that the library automatically processed all the texts to split then in *tokens*, adding some special tokens like:

`xxbos`

to indicate the beginning of a text`xxmaj`

to indicate the next word was capitalized

Then, we can define a [ Learner](https://docs.fast.ai/learner.html#learner) suitable for text classification in one line:

We use the [AWD LSTM](https://arxiv.org/abs/1708.02182) architecture, `drop_mult`

is a parameter that controls the magnitude of all dropouts in that model, and we use [ accuracy](https://docs.fast.ai/metrics.html#accuracy) to track down how well we are doing. We can then fine-tune our pretrained model:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.587251 | 0.386230 | 0.828960 | 01:35 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.307347 | 0.263843 | 0.892800 | 03:03 |
| 1 | 0.215867 | 0.226208 | 0.911800 | 02:55 |
| 2 | 0.155399 | 0.231144 | 0.913960 | 03:12 |
| 3 | 0.129277 | 0.200941 | 0.925920 | 03:01 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.594912 | 0.407416 | 0.823640 | 01:35 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.268259 | 0.316242 | 0.876000 | 03:03 |
| 1 | 0.184861 | 0.246242 | 0.898080 | 03:10 |
| 2 | 0.136392 | 0.220086 | 0.918200 | 03:16 |
| 3 | 0.106423 | 0.191092 | 0.931360 | 03:15 |

Not too bad! To see how well our model is doing, we can use the [ show_results](https://docs.fast.ai/data.core.html#show_results) method:

| text | category | category_ | |
|---|---|---|---|
| 0 | xxbos xxmaj there 's a sign on xxmaj the xxmaj lost xxmaj highway that says : \n\n * major xxup spoilers xxup ahead * \n\n ( but you already knew that , did n't you ? ) \n\n xxmaj since there 's a great deal of people that apparently did not get the point of this movie , xxmaj i 'd like to contribute my interpretation of why the plot makes perfect sense . xxmaj as others have pointed out , one single viewing of this movie is not sufficient . xxmaj if you have the xxup dvd of xxup md , you can " cheat " by looking at xxmaj david xxmaj lynch 's " top 10 xxmaj hints to xxmaj unlocking xxup md " ( but only upon second or third viewing , please . ) ;) \n\n xxmaj first of all , xxmaj mulholland xxmaj drive is | pos | pos |
| 1 | xxbos ( some spoilers included : ) \n\n xxmaj although , many commentators have called this film surreal , the term fits poorly here . xxmaj to quote from xxmaj encyclopedia xxmaj xxunk 's , surreal means : \n\n " fantastic or incongruous imagery " : xxmaj one need n't explain to the unimaginative how many ways a plucky ten - year - old boy at large and seeking his fortune in the driver 's seat of a red xxmaj mustang could be fantastic : those curious might read xxmaj james xxmaj kincaid ; but if you asked said lad how he were incongruous behind the wheel of a sports car , he 'd surely protest , " no way ! " xxmaj what fantasies and incongruities the film offers mostly appear within the first fifteen minutes . xxmaj thereafter we get more iterations of the same , in an | pos | neg |
| 2 | xxbos xxmaj hearkening back to those " good xxmaj old xxmaj days " of 1971 , we can vividly recall when we were treated with a whole xxmaj season of xxmaj charles xxmaj chaplin at the xxmaj cinema . xxmaj that 's what the promotional guy called it when we saw him on somebody 's old talk show . ( we ca n't recall just whose it was ; either xxup merv xxup griffin or xxup woody xxup woodbury , one or the other ! ) xxmaj the guest talked about xxmaj sir xxmaj charles ' career and how his films had been out of circulation ever since the 1952 exclusion of the former " little xxmaj tramp ' from xxmaj los xxmaj xxunk xxmaj xxunk on the grounds of his being an " undesirable xxmaj alien " . ( no xxmaj schultz , he 's xxup not from another | pos | pos |
| 3 | xxbos " buffalo xxmaj bill , xxmaj hero of the xxmaj far xxmaj west " director xxmaj mario xxmaj costa 's unsavory xxmaj spaghetti western " the xxmaj beast " with xxmaj klaus xxmaj kinski could only have been produced in xxmaj europe . xxmaj hollywood would never dared to have made a western about a sexual predator on the prowl as the protagonist of a movie . xxmaj never mind that xxmaj kinski is ideally suited to the role of ' crazy ' xxmaj johnny . xxmaj he plays an individual entirely without sympathy who is ironically dressed from head to toe in a white suit , pants , and hat . xxmaj this low - budget oater has nothing appetizing about it . xxmaj the typically breathtaking xxmaj spanish scenery around xxmaj almeria is nowhere in evidence . xxmaj instead , xxmaj costa and his director of photography | pos | pos |
| 4 | xxbos xxmaj if you 've seen the trailer for this movie , you pretty much know what to expect , because what you see here is what you get . xxmaj and even if you have n't seen the previews , it wo n't take you long to pick up on what you 're in for-- specifically , a good time and plenty of xxunk from this clever satire of ` reality xxup tv ' shows and ` buddy xxmaj cop ' movies , ` showtime , ' directed by xxmaj tom xxmaj dey , starring xxmaj robert xxmaj de xxmaj niro and xxmaj eddie xxmaj murphy . \n\n\t xxmaj mitch xxmaj preston ( de xxmaj niro ) is a detective with the xxup l.a.p.d . , and he 's good at what he does ; but working a case one night , things suddenly go south when another cop | pos | pos |
| 5 | xxbos * xxmaj some spoilers * \n\n xxmaj this movie is sometimes subtitled " life xxmaj everlasting . " xxmaj that 's often taken as reference to the final scene , but more accurately describes how dead and buried this once - estimable series is after this sloppy and illogical send - off . \n\n xxmaj there 's a " hey kids , let 's put on a show air " about this telemovie , which can be endearing in spots . xxmaj some fans will feel like insiders as they enjoy picking out all the various cameo appearances . xxmaj co - writer , co - producer xxmaj tom xxmaj fontana and his pals pack the goings - on with friends and favorites from other shows , as well as real xxmaj baltimore personages . \n\n xxmaj that 's on top of the returns of virtually all the members | neg | neg |
| 6 | xxbos ( caution : several spoilers ) \n\n xxmaj someday , somewhere , there 's going to be a post - apocalyptic movie made that does n't stink . xxmaj unfortunately , xxup the xxup postman is not that movie , though i have to give it credit for trying . \n\n xxmaj kevin xxmaj costner plays somebody credited only as " the xxmaj postman . " xxmaj he 's not actually a postman , just a wanderer with a mule in the wasteland of a western xxmaj america devastated by some unspecified catastrophe . xxmaj he trades with isolated villages by performing xxmaj shakespeare . xxmaj suddenly a pack of bandits called the xxmaj holnists , the self - declared warlords of the xxmaj west , descend upon a village that xxmaj costner 's visiting , and their evil leader xxmaj gen . xxmaj bethlehem ( will xxmaj patton | neg | neg |
| 7 | xxbos xxmaj in a style reminiscent of the best of xxmaj david xxmaj lean , this romantic love story sweeps across the screen with epic proportions equal to the vast desert regions against which it is set . xxmaj it 's a film which purports that one does not choose love , but rather that it 's love that does the choosing , regardless of who , where or when ; and furthermore , that it 's a matter of the heart often contingent upon prevailing conditions and circumstances . xxmaj and thus is the situation in ` the xxmaj english xxmaj patient , ' directed by xxmaj anthony xxmaj minghella , the story of two people who discover passion and true love in the most inopportune of places and times , proving that when it is predestined , love will find a way . \n\n xxmaj it 's xxup | pos | pos |
| 8 | xxbos xxmaj no one is going to mistake xxup the xxup squall for a good movie , but it sure is a memorable one . xxmaj once you 've taken in xxmaj myrna xxmaj loy 's performance as xxmaj nubi the hot - blooded gypsy girl you 're not likely to forget the experience . xxmaj when this film was made the exotically beautiful xxmaj miss xxmaj loy was still being cast as foreign vixens , often xxmaj asian and usually sinister . xxmaj she 's certainly an eyeful here . xxmaj it appears that her skin was darkened and her hair was curled . xxmaj in most scenes she 's barefoot and wearing little more than a skirt and a loose - fitting peasant blouse , while in one scene she wears nothing but a patterned towel . i suppose xxmaj i 'm focusing on xxmaj miss xxmaj loy | neg | neg |

And we can predict on new texts quite easily:

Here we can see the model has considered the review to be positive. The second part of the result is the index of “pos” in our data vocabulary and the last part is the probabilities attributed to each class (99.1% for “pos” and 0.9% for “neg”).

Now it’s your turn! Write your own mini movie review, or copy one from the Internet, and we can see what this model thinks about it.

### Using the data block API

We can also use the data block API to get our data in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). This is a bit more advanced, so feel free to skip this part if you are not comfortable with learning new APIs just yet.

A datablock is built by giving the fastai library a bunch of information:

- the types used, through an argument called
`blocks`

: here we have texts and categories, so we passand`TextBlock`

. To inform the library our texts are files in a folder, we use the`CategoryBlock`

`from_folder`

class method. - how to get the raw items, here our function
.`get_text_files`

- how to label those items, here with the parent folder.
- how to split those items, here with the grandparent folder.

This only gives a blueprint on how to assemble the data. To actually create it, we need to use the `dataloaders`

method:

## The ULMFiT approach

The pretrained model we used in the previous section is called a language model. It was pretrained on Wikipedia on the task of guessing the next word, after reading all the words before. We got great results by directly fine-tuning this language model to a movie review classifier, but with one extra step, we can do even better: the Wikipedia English is slightly different from the IMDb English. So instead of jumping directly to the classifier, we could fine-tune our pretrained language model to the IMDb corpus and *then* use that as the base for our classifier.

One reason, of course, is that it is helpful to understand the foundations of the models that you are using. But there is another very practical reason, which is that you get even better results if you fine tune the (sequence-based) language model prior to fine tuning the classification model. For instance, in the IMDb sentiment analysis task, the dataset includes 50,000 additional movie reviews that do not have any positive or negative labels attached in the unsup folder. We can use all of these reviews to fine tune the pretrained language model — this will result in a language model that is particularly good at predicting the next word of a movie review. In contrast, the pretrained model was trained only on Wikipedia articles.

The whole process is summarized by this picture:

### Fine-tuning a language model on IMDb

We can get our texts in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) suitable for language modeling very easily:

We need to pass something for `valid_pct`

otherwise this method will try to split the data by using the grandparent folder names. By passing `valid_pct=0.1`

, we tell it to get a random 10% of those reviews for the validation set.

We can have a look at our data using [ show_batch](https://docs.fast.ai/data.core.html#show_batch). Here the task is to guess the next word, so we can see the targets have all shifted one word to the right.

| text | text_ | |
|---|---|---|
| 0 | xxbos xxmaj about thirty minutes into the film , i thought this was one of the weakest " xxunk ever because it had the usual beginning ( a murder happening , then xxmaj columbo coming , inspecting everything and interrogating the main suspect ) squared ! xxmaj it was boring because i thought i knew everything already . \n\n xxmaj but then there was a surprising twist that turned this episode into | xxmaj about thirty minutes into the film , i thought this was one of the weakest " xxunk ever because it had the usual beginning ( a murder happening , then xxmaj columbo coming , inspecting everything and interrogating the main suspect ) squared ! xxmaj it was boring because i thought i knew everything already . \n\n xxmaj but then there was a surprising twist that turned this episode into a |
| 1 | yeon . xxmaj these two girls were magical on the screen . i will certainly be looking into their other films . xxmaj xxunk xxmaj jeong - ah is xxunk cheerful and hauntingly evil as the stepmother . xxmaj finally , xxmaj xxunk - su xxmaj kim gives an excellent performance as the weary , broken father . \n\n i truly love this film . xxmaj if you have yet to see | . xxmaj these two girls were magical on the screen . i will certainly be looking into their other films . xxmaj xxunk xxmaj jeong - ah is xxunk cheerful and hauntingly evil as the stepmother . xxmaj finally , xxmaj xxunk - su xxmaj kim gives an excellent performance as the weary , broken father . \n\n i truly love this film . xxmaj if you have yet to see ' |
| 2 | tends to be tedious whenever there are n't any hideous monsters on display . xxmaj luckily the gutsy killings and eerie set designs ( by no less than xxmaj bill xxmaj paxton ! ) compensate for a lot ! a nine - headed expedition is send ( at hyper speed ) to the unexplored regions of space to find out what happened to a previously vanished spaceship and its crew . xxmaj | to be tedious whenever there are n't any hideous monsters on display . xxmaj luckily the gutsy killings and eerie set designs ( by no less than xxmaj bill xxmaj paxton ! ) compensate for a lot ! a nine - headed expedition is send ( at hyper speed ) to the unexplored regions of space to find out what happened to a previously vanished spaceship and its crew . xxmaj bad |
| 3 | movie just sort of meanders around and nothing happens ( i do n't mean in terms of plot - no plot is fine , but no action ? xxmaj come on . ) xxmaj in hindsight , i should have expected this - after all , how much can really happen between 4 teens and a bear ? xxmaj so although special effects , acting , etc are more or less on | just sort of meanders around and nothing happens ( i do n't mean in terms of plot - no plot is fine , but no action ? xxmaj come on . ) xxmaj in hindsight , i should have expected this - after all , how much can really happen between 4 teens and a bear ? xxmaj so although special effects , acting , etc are more or less on par |
| 4 | greetings again from the darkness . xxmaj writer / xxmaj director ( and xxmaj wes xxmaj anderson collaborator ) xxmaj noah xxmaj baumbach presents a semi - autobiographical therapy session where he unleashes the anguish and turmoil that has carried over from his childhood . xxmaj the result is an amazing insight into what many people go through in a desperate attempt to try and make their family work . \n\n xxmaj | again from the darkness . xxmaj writer / xxmaj director ( and xxmaj wes xxmaj anderson collaborator ) xxmaj noah xxmaj baumbach presents a semi - autobiographical therapy session where he unleashes the anguish and turmoil that has carried over from his childhood . xxmaj the result is an amazing insight into what many people go through in a desperate attempt to try and make their family work . \n\n xxmaj the |

Then we have a convenience method to directly grab a [ Learner](https://docs.fast.ai/learner.html#learner) from it, using the

[architecture like before. We use accuracy and perplexity as metrics (the later is the exponential of the loss) and we set a default weight decay of 0.1.](https://docs.fast.ai/text.models.awdlstm.html#awd_lstm)

`AWD_LSTM`

`to_fp16`

puts the [in mixed precision, which is going to help speed up training on GPUs that have Tensor Cores.](https://docs.fast.ai/learner.html#learner)

`Learner`

By default, a pretrained [ Learner](https://docs.fast.ai/learner.html#learner) is in a frozen state, meaning that only the head of the model will train while the body stays frozen. We show you what is behind the fine_tune method here and use a fit_one_cycle method to fit the model:

| epoch | train_loss | valid_loss | accuracy | perplexity | time |
|---|---|---|---|---|---|
| 0 | 4.120048 | 3.912788 | 0.299565 | 50.038246 | 11:39 |

This model takes a while to train, so it’s a good opportunity to talk about saving intermediary results.

You can easily save the state of your model like so:

It will create a file in `learn.path/models/`

named “1epoch.pth”. If you want to load your model on another machine after creating your [ Learner](https://docs.fast.ai/learner.html#learner) the same way, or resume training later, you can load the content of this file with:

We can them fine-tune the model after unfreezing:

| epoch | train_loss | valid_loss | accuracy | perplexity | time |
|---|---|---|---|---|---|
| 0 | 3.893486 | 3.772820 | 0.317104 | 43.502548 | 12:37 |
| 1 | 3.820479 | 3.717197 | 0.323790 | 41.148880 | 12:30 |
| 2 | 3.735622 | 3.659760 | 0.330321 | 38.851997 | 12:09 |
| 3 | 3.677086 | 3.624794 | 0.333960 | 37.516987 | 12:12 |
| 4 | 3.636646 | 3.601300 | 0.337017 | 36.645859 | 12:05 |
| 5 | 3.553636 | 3.584241 | 0.339355 | 36.026001 | 12:04 |
| 6 | 3.507634 | 3.571892 | 0.341353 | 35.583862 | 12:08 |
| 7 | 3.444101 | 3.565988 | 0.342194 | 35.374371 | 12:08 |
| 8 | 3.398597 | 3.566283 | 0.342647 | 35.384815 | 12:11 |
| 9 | 3.375563 | 3.568166 | 0.342528 | 35.451500 | 12:05 |

Once this is done, we save all of our model except the final layer that converts activations to probabilities of picking each token in our vocabulary. The model not including the final layer is called the *encoder*. We can save it with `save_encoder`

:

Jargon: Encoder: The model not including the task-specific final layer(s). It means much the same thing as

bodywhen applied to vision CNNs, but tends to be more used for NLP and generative models.

Before using this to fine-tune a classifier on the reviews, we can use our model to generate random reviews: since it’s trained to guess what the next word of the sentence is, we can use it to write new reviews:

```
i liked this movie because of its story and characters . The story line was very strong , very good for a sci - fi film . The main character , Alucard , was very well developed and brought the whole story
i liked this movie because i like the idea of the premise of the movie , the ( very ) convenient virus ( which , when you have to kill a few people , the " evil " machine has to be used to protect
```


### Training a text classifier

We can gather our data for text classification almost exactly like before:

The main difference is that we have to use the exact same vocabulary as when we were fine-tuning our language model, or the weights learned won’t make any sense. We pass that vocabulary with `text_vocab`

.

Then we can define our text classifier like before:

The difference is that before training it, we load the previous encoder:

The last step is to train with discriminative learning rates and *gradual unfreezing*. In computer vision, we often unfreeze the model all at once, but for NLP classifiers, we find that unfreezing a few layers at a time makes a real difference.

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.347427 | 0.184480 | 0.929320 | 00:33 |

In just one epoch we get the same result as our training in the first section, not too bad! We can pass `-2`

to `freeze_to`

to freeze all except the last two parameter groups:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.247763 | 0.171683 | 0.934640 | 00:37 |

Then we can unfreeze a bit more, and continue training:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.193377 | 0.156696 | 0.941200 | 00:45 |

And finally, the whole model!

---

## Source: https://docs.fast.ai/tutorial.tabular.html

# Tabular training

To illustrate the tabular application, we will use the example of the [Adult dataset](https://archive.ics.uci.edu/ml/datasets/Adult) where we have to predict if a person is earning more or less than $50k per year using some general data.

We can download a sample of this dataset with the usual [ untar_data](https://docs.fast.ai/data.external.html#untar_data) command:

`(#3) [Path('/home/ml1/.fastai/data/adult_sample/models'),Path('/home/ml1/.fastai/data/adult_sample/export.pkl'),Path('/home/ml1/.fastai/data/adult_sample/adult.csv')]`


Then we can have a look at how the data is structured:

| age | workclass | fnlwgt | education | education-num | marital-status | occupation | relationship | race | sex | capital-gain | capital-loss | hours-per-week | native-country | salary | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 49 | Private | 101320 | Assoc-acdm | 12.0 | Married-civ-spouse | NaN | Wife | White | Female | 0 | 1902 | 40 | United-States | >=50k |
| 1 | 44 | Private | 236746 | Masters | 14.0 | Divorced | Exec-managerial | Not-in-family | White | Male | 10520 | 0 | 45 | United-States | >=50k |
| 2 | 38 | Private | 96185 | HS-grad | NaN | Divorced | NaN | Unmarried | Black | Female | 0 | 0 | 32 | United-States | <50k |
| 3 | 38 | Self-emp-inc | 112847 | Prof-school | 15.0 | Married-civ-spouse | Prof-specialty | Husband | Asian-Pac-Islander | Male | 0 | 0 | 40 | United-States | >=50k |
| 4 | 42 | Self-emp-not-inc | 82297 | 7th-8th | NaN | Married-civ-spouse | Other-service | Wife | Black | Female | 0 | 0 | 50 | United-States | <50k |

Some of the columns are continuous (like age) and we will treat them as float numbers we can feed our model directly. Others are categorical (like workclass or education) and we will convert them to a unique index that we will feed to embedding layers. We can specify our categorical and continuous column names, as well as the name of the dependent variable in [ TabularDataLoaders](https://docs.fast.ai/tabular.data.html#tabulardataloaders) factory methods:

The last part is the list of pre-processors we apply to our data:

is going to take every categorical variable and make a map from integer to unique categories, then replace the values by the corresponding index.`Categorify`

will fill the missing values in the continuous variables by the median of existing values (you can choose a specific value if you prefer)`FillMissing`

will normalize the continuous variables (subtract the mean and divide by the std)`Normalize`


To further expose what’s going on below the surface, let’s rewrite this utilizing `fastai`

’s [ TabularPandas](https://docs.fast.ai/tabular.core.html#tabularpandas) class. We will need to make one adjustment, which is defining how we want to split our data. By default the factory method above used a random 80/20 split, so we will do the same:

Once we build our [ TabularPandas](https://docs.fast.ai/tabular.core.html#tabularpandas) object, our data is completely preprocessed as seen below:

| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | |
|---|---|---|---|---|---|---|---|---|---|---|
| 15780 | 2 | 16 | 1 | 5 | 2 | 5 | 1 | 0.984037 | 2.210372 | -0.033692 |
| 17442 | 5 | 12 | 5 | 8 | 2 | 5 | 1 | -1.509555 | -0.319624 | -0.425324 |

Now we can build our [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) again:

Later we will explore why using

[to preprocess will be valuable.]`TabularPandas`


The [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method works like for every other application:

| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | salary | |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | State-gov | Bachelors | Married-civ-spouse | Prof-specialty | Wife | White | False | 41.000000 | 75409.001182 | 13.0 | >=50k |
| 1 | Private | Some-college | Never-married | Craft-repair | Not-in-family | White | False | 24.000000 | 38455.005013 | 10.0 | <50k |
| 2 | Private | Assoc-acdm | Married-civ-spouse | Prof-specialty | Husband | White | False | 48.000000 | 101299.003093 | 12.0 | <50k |
| 3 | Private | HS-grad | Never-married | Other-service | Other-relative | Black | False | 42.000000 | 227465.999281 | 9.0 | <50k |
| 4 | State-gov | Some-college | Never-married | Prof-specialty | Not-in-family | White | False | 20.999999 | 258489.997130 | 10.0 | <50k |
| 5 | Local-gov | 12th | Married-civ-spouse | Tech-support | Husband | White | False | 39.000000 | 207853.000067 | 8.0 | <50k |
| 6 | Private | Assoc-voc | Married-civ-spouse | Sales | Husband | White | False | 36.000000 | 238414.998930 | 11.0 | >=50k |
| 7 | Private | HS-grad | Never-married | Craft-repair | Not-in-family | White | False | 19.000000 | 445727.998937 | 9.0 | <50k |
| 8 | Local-gov | Bachelors | Married-civ-spouse | #na# | Husband | White | True | 59.000000 | 196013.000174 | 10.0 | >=50k |
| 9 | Private | HS-grad | Married-civ-spouse | Prof-specialty | Wife | Black | False | 39.000000 | 147500.000403 | 9.0 | <50k |

We can define a model using the [ tabular_learner](https://docs.fast.ai/tabular.learner.html#tabular_learner) method. When we define our model,

`fastai`

will try to infer the loss function based on our `y_names`

earlier.**Note**: Sometimes with tabular data, your `y`

’s may be encoded (such as 0 and 1). In such a case you should explicitly pass `y_block = CategoryBlock`

in your constructor so `fastai`

won’t presume you are doing regression.

And we can train that model with the `fit_one_cycle`

method (the `fine_tune`

method won’t be useful here since we don’t have a pretrained model).

We can then have a look at some predictions:

| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | salary | salary_pred | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 5.0 | 12.0 | 3.0 | 8.0 | 1.0 | 5.0 | 1.0 | 0.324868 | -1.138177 | -0.424022 | 0.0 | 0.0 |
| 1 | 5.0 | 10.0 | 5.0 | 2.0 | 2.0 | 5.0 | 1.0 | -0.482055 | -1.351911 | 1.148438 | 0.0 | 0.0 |
| 2 | 5.0 | 12.0 | 6.0 | 12.0 | 3.0 | 5.0 | 1.0 | -0.775482 | 0.138709 | -0.424022 | 0.0 | 0.0 |
| 3 | 5.0 | 16.0 | 5.0 | 2.0 | 4.0 | 4.0 | 1.0 | -1.362335 | -0.227515 | -0.030907 | 0.0 | 0.0 |
| 4 | 5.0 | 2.0 | 5.0 | 0.0 | 4.0 | 5.0 | 1.0 | -1.509048 | -0.191191 | -1.210252 | 0.0 | 0.0 |
| 5 | 5.0 | 16.0 | 3.0 | 13.0 | 1.0 | 5.0 | 1.0 | 1.498575 | -0.051096 | -0.030907 | 1.0 | 1.0 |
| 6 | 5.0 | 12.0 | 3.0 | 15.0 | 1.0 | 5.0 | 1.0 | -0.555412 | 0.039167 | -0.424022 | 0.0 | 0.0 |
| 7 | 5.0 | 1.0 | 5.0 | 6.0 | 4.0 | 5.0 | 1.0 | -1.582405 | -1.396391 | -1.603367 | 0.0 | 0.0 |
| 8 | 5.0 | 3.0 | 5.0 | 13.0 | 2.0 | 5.0 | 1.0 | -1.362335 | 0.158354 | -0.817137 | 0.0 | 0.0 |

Or use the predict method on a row:

| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | salary | |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | Private | Assoc-acdm | Married-civ-spouse | #na# | Wife | White | False | 49.0 | 101319.99788 | 12.0 | >=50k |

To get prediction on a new dataframe, you can use the `test_dl`

method of the [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders). That dataframe does not need to have the dependent variable in its column.

Then [ Learner.get_preds](https://docs.fast.ai/learner.html#learner.get_preds) will give you the predictions:

```
(tensor([[0.4995, 0.5005],
[0.4882, 0.5118],
[0.9824, 0.0176],
...,
[0.5324, 0.4676],
[0.7628, 0.2372],
[0.5934, 0.4066]]), None)
```


Since machine learning models can’t magically understand categories it was never trained on, the data should reflect this. If there are different missing values in your test data you should address this before training

`fastai`

with Other Libraries

As mentioned earlier, [ TabularPandas](https://docs.fast.ai/tabular.core.html#tabularpandas) is a powerful and easy preprocessing tool for tabular data. Integration with libraries such as Random Forests and XGBoost requires only one extra step, that the

`.dataloaders`

call did for us. Let’s look at our `to`

again. Its values are stored in a `DataFrame`

like object, where we can extract the `cats`

, `conts,`

`xs`

and `ys`

if we want to:| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | |
|---|---|---|---|---|---|---|---|---|---|---|
| 25387 | 5 | 16 | 3 | 5 | 1 | 5 | 1 | 0.471582 | -1.467756 | -0.030907 |
| 16872 | 1 | 16 | 5 | 1 | 4 | 5 | 1 | -1.215622 | -0.649792 | -0.030907 |
| 25852 | 5 | 16 | 3 | 5 | 1 | 5 | 1 | 1.865358 | -0.218915 | -0.030907 |

Now that everything is encoded, you can then send this off to XGBoost or Random Forests by extracting the train and validation sets and their values:

And now we can directly send this in!

---

## Source: https://docs.fast.ai/tutorial.collab.html

# Collaborative filtering tutorial

This tutorial highlights on how to quickly build a [ Learner](https://docs.fast.ai/learner.html#learner) and train a model on collaborative filtering tasks.

## Training a model

For this tutorial, we will use the [Movielens 100k data dataset](https://grouplens.org/datasets/movielens/100k/). We can download it easily and decompress it with the following function:

The main table is in `u.data`

. Since it’s not a proper csv, we have to specify a few things while opening it: the tab delimiter, the columns we want to keep and their names.

| user | movie | rating | |
|---|---|---|---|
| 0 | 196 | 242 | 3 |
| 1 | 186 | 302 | 3 |
| 2 | 22 | 377 | 1 |
| 3 | 244 | 51 | 2 |
| 4 | 166 | 346 | 1 |

Movie ids are not ideal to look at things, so we load the corresponding movie id to the title that is in the table `u.item`

:

| movie | title | |
|---|---|---|
| 0 | 1 | Toy Story (1995) |
| 1 | 2 | GoldenEye (1995) |
| 2 | 3 | Four Rooms (1995) |
| 3 | 4 | Get Shorty (1995) |
| 4 | 5 | Copycat (1995) |

Next we merge it to our ratings table:

| user | movie | rating | title | |
|---|---|---|---|---|
| 0 | 196 | 242 | 3 | Kolya (1996) |
| 1 | 63 | 242 | 3 | Kolya (1996) |
| 2 | 226 | 242 | 5 | Kolya (1996) |
| 3 | 154 | 242 | 3 | Kolya (1996) |
| 4 | 306 | 242 | 5 | Kolya (1996) |

We can then build a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object from this table. By default, it takes the first column for user, the second column for the item (here our movies) and the third column for the ratings. We need to change the value of

`item_name`

in our case, to use the titles instead of the ids:In all applications, when the data has been assembled in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders), you can have a look at it with the

[method:](https://docs.fast.ai/data.core.html#show_batch)

`show_batch`

| user | title | rating | |
|---|---|---|---|
| 0 | 181 | Substitute, The (1996) | 1 |
| 1 | 189 | Ulee's Gold (1997) | 3 |
| 2 | 6 | L.A. Confidential (1997) | 4 |
| 3 | 849 | Net, The (1995) | 5 |
| 4 | 435 | Blade Runner (1982) | 4 |
| 5 | 718 | My Best Friend's Wedding (1997) | 4 |
| 6 | 279 | I Love Trouble (1994) | 2 |
| 7 | 561 | Clockwork Orange, A (1971) | 4 |
| 8 | 87 | Fish Called Wanda, A (1988) | 5 |
| 9 | 774 | Crow, The (1994) | 3 |

fastai can create and train a collaborative filtering model by using [ collab_learner](https://docs.fast.ai/collab.html#collab_learner):

It uses a simple dot product model with 50 latent factors. To train it using the 1cycle policy, we just run this command:

| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 0.967653 | 0.942309 | 00:10 |
| 1 | 0.843426 | 0.869254 | 00:10 |
| 2 | 0.733788 | 0.823143 | 00:10 |
| 3 | 0.593507 | 0.811050 | 00:10 |
| 4 | 0.480942 | 0.811475 | 00:10 |

Here’s [some benchmarks](https://www.librec.net/release/v1.3/example.html) on the same dataset for the popular Librec system for collaborative filtering. They show best results based on RMSE of 0.91 (scroll down to the 100k dataset), which corresponds to an MSE of `0.91**2 = 0.83`

. So in less than a minute, we got pretty good results!

## Interpretation

Let’s analyze the results of our previous model. We will keep the 1000 most rated movies for this:

```
array(['Star Wars (1977)', 'Contact (1997)', 'Fargo (1996)',
'Return of the Jedi (1983)', 'Liar Liar (1997)',
'English Patient, The (1996)', 'Scream (1996)', 'Toy Story (1995)',
'Air Force One (1997)', 'Independence Day (ID4) (1996)'],
dtype=object)
```


### Movie bias

Our model has learned one bias per movie, a unique number independent of users that can be interpreted as the intrinsic “value” of the movie. We can grab the bias of each movie in our `top_movies`

list with the following command:

Let’s compare those biases with the average ratings:

Now let’s have a look at the movies with the worst bias:

```
[(tensor(-0.3489),
'Children of the Corn: The Gathering (1996)',
1.3157894736842106),
(tensor(-0.3407), 'Leave It to Beaver (1997)', 1.8409090909090908),
(tensor(-0.3304), 'Cable Guy, The (1996)', 2.339622641509434),
(tensor(-0.2763),
'Lawnmower Man 2: Beyond Cyberspace (1996)',
1.7142857142857142),
(tensor(-0.2607), "McHale's Navy (1997)", 2.1884057971014492),
(tensor(-0.2572), 'Grease 2 (1982)', 2.0),
(tensor(-0.2482), 'Kansas City (1996)', 2.260869565217391),
(tensor(-0.2479), 'Crow: City of Angels, The (1996)', 1.9487179487179487),
(tensor(-0.2388), 'Free Willy 3: The Rescue (1997)', 1.7407407407407407),
(tensor(-0.2338), 'Keys to Tulsa (1997)', 2.24),
(tensor(-0.2305), 'Beautician and the Beast, The (1997)', 2.313953488372093),
(tensor(-0.2205), 'Escape from L.A. (1996)', 2.4615384615384617),
(tensor(-0.2192), 'Beverly Hills Ninja (1997)', 2.3125),
(tensor(-0.2179), 'Mortal Kombat: Annihilation (1997)', 1.9534883720930232),
(tensor(-0.2150), 'Thinner (1996)', 2.4489795918367347)]
```


Or the ones with the best bias:

```
[(tensor(0.6052), 'As Good As It Gets (1997)', 4.196428571428571),
(tensor(0.5778), 'Titanic (1997)', 4.2457142857142856),
(tensor(0.5565), 'Shawshank Redemption, The (1994)', 4.445229681978798),
(tensor(0.5460), 'L.A. Confidential (1997)', 4.161616161616162),
(tensor(0.5264), 'Silence of the Lambs, The (1991)', 4.28974358974359),
(tensor(0.5125), 'Star Wars (1977)', 4.3584905660377355),
(tensor(0.4862), "Schindler's List (1993)", 4.466442953020135),
(tensor(0.4851), 'Rear Window (1954)', 4.3875598086124405),
(tensor(0.4671), 'Godfather, The (1972)', 4.283292978208232),
(tensor(0.4668), 'Apt Pupil (1998)', 4.1),
(tensor(0.4614), "One Flew Over the Cuckoo's Nest (1975)", 4.291666666666667),
(tensor(0.4606), 'Good Will Hunting (1997)', 4.262626262626263),
(tensor(0.4572), 'Contact (1997)', 3.8035363457760316),
(tensor(0.4529), 'Close Shave, A (1995)', 4.491071428571429),
(tensor(0.4410), 'Wrong Trousers, The (1993)', 4.466101694915254)]
```


There is certainly a strong correlation!

### Movie weights

Now let’s try to analyze the latent factors our model has learned. We can grab the weights for each movie in `top_movies`

the same way as we did for the bias before.

Let’s try a PCA to reduce the dimensions and see if we can see what the model learned:

Here are the highest score on the first dimension:

```
[(tensor(1.1481), 'Casablanca (1942)'),
(tensor(1.0816), 'Chinatown (1974)'),
(tensor(1.0486), 'Lawrence of Arabia (1962)'),
(tensor(1.0459), 'Wrong Trousers, The (1993)'),
(tensor(1.0282), 'Secrets & Lies (1996)'),
(tensor(1.0245), '12 Angry Men (1957)'),
(tensor(1.0095), 'Some Folks Call It a Sling Blade (1993)'),
(tensor(0.9874), 'Close Shave, A (1995)'),
(tensor(0.9800), 'Wallace & Gromit: The Best of Aardman Animation (1996)'),
(tensor(0.9791), 'Citizen Kane (1941)')]
```


And the worst:

```
[(tensor(-1.2520), 'Home Alone 3 (1997)'),
(tensor(-1.2118), 'Jungle2Jungle (1997)'),
(tensor(-1.1282), 'Stupids, The (1996)'),
(tensor(-1.1229), 'Free Willy 3: The Rescue (1997)'),
(tensor(-1.1161), 'Leave It to Beaver (1997)'),
(tensor(-1.0821), 'Children of the Corn: The Gathering (1996)'),
(tensor(-1.0703), "McHale's Navy (1997)"),
(tensor(-1.0695), 'Bio-Dome (1996)'),
(tensor(-1.0652), 'Batman & Robin (1997)'),
(tensor(-1.0627), 'Cowboy Way, The (1994)')]
```


Same thing for our second dimension:

```
[(tensor(1.1196), 'Braveheart (1995)'),
(tensor(1.0969), 'Raiders of the Lost Ark (1981)'),
(tensor(1.0365), 'Independence Day (ID4) (1996)'),
(tensor(0.9631), 'Titanic (1997)'),
(tensor(0.9450), 'American President, The (1995)'),
(tensor(0.8893), 'Forrest Gump (1994)'),
(tensor(0.8757), 'Hunt for Red October, The (1990)'),
(tensor(0.8638), 'Pretty Woman (1990)'),
(tensor(0.8019), 'Miracle on 34th Street (1994)'),
(tensor(0.7956), 'True Lies (1994)')]
```


```
[(tensor(-0.9231), 'Ready to Wear (Pret-A-Porter) (1994)'),
(tensor(-0.8948), 'Dead Man (1995)'),
(tensor(-0.8816), 'Clockwork Orange, A (1971)'),
(tensor(-0.8697), 'Three Colors: Blue (1993)'),
(tensor(-0.8425), 'Beavis and Butt-head Do America (1996)'),
(tensor(-0.8047), 'Cable Guy, The (1996)'),
(tensor(-0.7832), 'Nosferatu (Nosferatu, eine Symphonie des Grauens) (1922)'),
(tensor(-0.7662), 'Exotica (1994)'),
(tensor(-0.7546), 'Spice World (1997)'),
(tensor(-0.7491), 'Heavenly Creatures (1994)')]
```


And we can even plot the movies according to their scores on those dimensions:

---

## Source: https://docs.fast.ai/tutorial.datablock.html

# Data block tutorial

In this tutorial, we’ll see how to use the data block API on a variety of tasks and how to debug data blocks. The data block API takes its name from the way it’s designed: every bit needed to build the [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object (type of inputs, targets, how to label, split…) is encapsulated in a block, and you can mix and match those blocks

## Building a `DataBlock`

from scratch

`DataBlock`

The rest of this tutorial will give many examples, but let’s first build a [ DataBlock](https://docs.fast.ai/data.block.html#datablock) from scratch on the dogs versus cats problem we saw in the

[vision tutorial](./tutorial.vision.html). First we import everything needed in vision.

The first step is to download and decompress our data (if it’s not already done) and get its location:

And as we saw, all the filenames are in the “images” folder. The [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files) function helps get all the images in subfolders:

Let’s begin with an empty [ DataBlock](https://docs.fast.ai/data.block.html#datablock).

By itself, a [ DataBlock](https://docs.fast.ai/data.block.html#datablock) is just a blue print on how to assemble your data. It does not do anything until you pass it a source. You can choose to then convert that source into a

[or a](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

[by using the](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

[or](https://docs.fast.ai/data.block.html#datablock.datasets)

`DataBlock.datasets`

[method. Since we haven’t done anything to get our data ready for batches, the](https://docs.fast.ai/data.block.html#datablock.dataloaders)

`DataBlock.dataloaders`

`dataloaders`

method will fail here, but we can have a look at how it gets converted in [. This is where we pass the source of our data, here all our filenames:](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

```
(Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/Birman_82.jpg'),
Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/Birman_82.jpg'))
```


By default, the data block API assumes we have an input and a target, which is why we see our filename repeated twice.

The first thing we can do is use a `get_items`

function to actually assemble our items inside the data block:

The difference is that you then pass as a source the folder with the images and not all the filenames:

```
(Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/english_cocker_spaniel_76.jpg'),
Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/english_cocker_spaniel_76.jpg'))
```


Our inputs are ready to be processed as images (since images can be built from filenames), but our target is not. Since we are in a cat versus dog problem, we need to convert that filename to “cat” vs “dog” (or `True`

vs `False`

). Let’s build a function for this:

We can then tell our data block to use it to label our target by passing it as `get_y`

:

```
(Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/staffordshire_bull_terrier_77.jpg'),
'dog')
```


Now that our inputs and targets are ready, we can specify types to tell the data block API that our inputs are images and our targets are categories. Types are represented by blocks in the data block API, here we use [ ImageBlock](https://docs.fast.ai/vision.data.html#imageblock) and

[:](https://docs.fast.ai/data.block.html#categoryblock)

`CategoryBlock`

`(PILImage mode=RGB size=361x500, TensorCategory(1))`


We can see how the [ DataBlock](https://docs.fast.ai/data.block.html#datablock) automatically added the transforms necessary to open the image or how it changed the name “dog” to an index 1 (with a special tensor type TensorCategory(1)). To do this, it created a mapping from categories to the index called “vocab” that we can access this way:

Note that you can mix and match any block for input and targets, which is why the API is named data block API. You can also have more than two blocks (if you have multiple inputs and/or targets), you would just need to pass `n_inp`

to the [ DataBlock](https://docs.fast.ai/data.block.html#datablock) to tell the library how many inputs there are (the rest would be targets) and pass a list of functions to

`get_x`

and/or `get_y`

(to explain how to process each item to be ready for his type). See the object detection below for such an example.The next step is to control how our validation set is created. We do this by passing a `splitter`

to [ DataBlock](https://docs.fast.ai/data.block.html#datablock). For instance, here is how to do a random split.

`(PILImage mode=RGB size=320x480, TensorCategory(0))`


The last step is to specify item transforms and batch transforms (the same way we do it in [ ImageDataLoaders](https://docs.fast.ai/vision.data.html#imagedataloaders) factory methods):

With that resize, we are now able to batch items together and can finally call `dataloaders`

to convert our [ DataBlock](https://docs.fast.ai/data.block.html#datablock) to a

[object:](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

The way we usually build the data block in one go is by answering a list of questions:

- what is the types of your inputs/targets? Here images and categories
- where is your data? Here in filenames in subfolders
- does something need to be applied to inputs? Here no
- does something need to be applied to the target? Here the
`label_func`

function - how to split the data? Here randomly
- do we need to apply something on formed items? Here a resize
- do we need to apply something on formed batches? Here no

This gives us this design:

For two questions that got a no, the corresponding arguments we would pass if the anwser was different would be `get_x`

and `batch_tfms`

.

## Image classification

Let’s begin with examples of image classification problems. There are two kinds of image classification problems: problems with single-label (each image has one given label) or multi-label (each image can have multiple or no labels at all). We will cover those two kinds here.

### MNIST (single label)

[MNIST](http://yann.lecun.com/exdb/mnist/) is a dataset of hand-written digits from 0 to 9. We can very easily load it in the data block API by answering the following questions:

- what are the types of our inputs and targets? Black and white images and labels.
- where is the data? In subfolders.
- how do we know if a sample is in the training or the validation set? By looking at the grandparent folder.
- how do we know the label of an image? By looking at the parent folder.

In terms of the API, those answers translate like this:

Our types become blocks: one for images (using the black and white [ PILImageBW](https://docs.fast.ai/vision.core.html#pilimagebw) class) and one for categories. Searching subfolder for all image filenames is done by the

[function. The split training/validation is done by using a](https://docs.fast.ai/data.transforms.html#get_image_files)

`get_image_files`

[. And the function to get our targets (often called](https://docs.fast.ai/data.transforms.html#grandparentsplitter)

`GrandparentSplitter`

`y`

) is [.](https://docs.fast.ai/data.transforms.html#parent_label)

`parent_label`

To get an idea of the objects the fastai library provides for reading, labelling or splitting, check the `data.transforms`

module.

In itself, a data block is just a blueprint. It does not do anything and does not check for errors. You have to feed it the source of the data to actually gather something. This is done with the `.dataloaders`

method:

If something went wrong in the previous step, or if you’re just curious about what happened under the hood, use the `summary`

method. It will go verbosely step by step, and you will see at which point the process failed.

```
Setting-up type transforms pipelines
Collecting items from /home/jhoward/.fastai/data/mnist_tiny
Found 2856 items
2 datasets of sizes 1418,1398
Setting up Pipeline: PILBase.create
Setting up Pipeline: parent_label -> Categorize -- {'vocab': None, 'sort': True, 'add_na': False}
Building one sample
Pipeline: PILBase.create
starting from
/home/jhoward/.fastai/data/mnist_tiny/mnist_tiny/train/7/7420.png
applying PILBase.create gives
PILImageBW mode=L size=28x28
Pipeline: parent_label -> Categorize -- {'vocab': None, 'sort': True, 'add_na': False}
starting from
/home/jhoward/.fastai/data/mnist_tiny/mnist_tiny/train/7/7420.png
applying parent_label gives
7
applying Categorize -- {'vocab': None, 'sort': True, 'add_na': False} gives
TensorCategory(1)
Final sample: (PILImageBW mode=L size=28x28, TensorCategory(1))
Collecting items from /home/jhoward/.fastai/data/mnist_tiny
Found 2856 items
2 datasets of sizes 1418,1398
Setting up Pipeline: PILBase.create
Setting up Pipeline: parent_label -> Categorize -- {'vocab': None, 'sort': True, 'add_na': False}
Setting up after_item: Pipeline: ToTensor
Setting up before_batch: Pipeline:
Setting up after_batch: Pipeline: IntToFloatTensor -- {'div': 255.0, 'div_mask': 1}
Building one batch
Applying item_tfms to the first sample:
Pipeline: ToTensor
starting from
(PILImageBW mode=L size=28x28, TensorCategory(1))
applying ToTensor gives
(TensorImageBW of size 1x28x28, TensorCategory(1))
Adding the next 3 samples
No before_batch transform to apply
Collating items in a batch
Applying batch_tfms to the batch built
Pipeline: IntToFloatTensor -- {'div': 255.0, 'div_mask': 1}
starting from
(TensorImageBW of size 4x1x28x28, TensorCategory([1, 1, 1, 1], device='cuda:0'))
applying IntToFloatTensor -- {'div': 255.0, 'div_mask': 1} gives
(TensorImageBW of size 4x1x28x28, TensorCategory([1, 1, 1, 1], device='cuda:0'))
```


Let’s go over another example!

### Pets (single label)

The [Oxford IIIT Pets dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/) is a dataset of pictures of dogs and cats, with 37 different breeds. A slight (but very) important difference with MNIST is that images are now not all of the same size. In MNIST they were all 28 by 28 pixels, but here they have different aspect ratios or dimensions. Therefore, we will need to add something to make them all the same size to be able to assemble them together in a batch. We will also see how to add data augmentation.

So let’s go over the same questions as before and add two more:

- what are the types of our inputs and targets? Images and labels.
- where is the data? In subfolders.
- how do we know if a sample is in the training or the validation set? We’ll take a random split.
- how do we know the label of an image? By looking at the parent folder.
- do we want to apply a function to a given sample? Yes, we need to resize everything to a given size.
- do we want to apply a function to a batch after it’s created? Yes, we want data augmentation.

And like for MNIST, we can see how the answers to those questions directly translate in the API. Our types become blocks: one for images and one for categories. Searching subfolder for all image filenames is done by the [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files) function. The split training/validation is done by using a

[. The function to get our targets (often called](https://docs.fast.ai/data.transforms.html#randomsplitter)

`RandomSplitter`

`y`

) is a composition of two transforms: we get the name attribute of our `Path`

filenames, then apply a regular expression to get the class. To compose those two transforms into one, we use a `Pipeline`

.Finally, We apply a resize at the item level and [ aug_transforms()](https://docs.fast.ai/vision.augment.html#aug_transforms) at the batch level.

Now let’s see how we can use the same API for a multi-label problem.

### Pascal (multi-label)

The [Pascal dataset](http://host.robots.ox.ac.uk/pascal/VOC/) is originally an object detection dataset (we have to predict where some objects are in pictures). But it contains lots of pictures with various objects in them, so it gives a great example for a multi-label problem. Let’s download it and have a look at the data:

| fname | labels | is_valid | |
|---|---|---|---|
| 0 | 000005.jpg | chair | True |
| 1 | 000007.jpg | car | True |
| 2 | 000009.jpg | horse person | True |
| 3 | 000012.jpg | car | False |
| 4 | 000016.jpg | bicycle | True |

So it looks like we have one column with filenames, one column with the labels (separated by space) and one column that tells us if the filename should go in the validation set or not.

There are multiple ways to put this in a [ DataBlock](https://docs.fast.ai/data.block.html#datablock), let’s go over them, but first, let’s answer our usual questionnaire:

- what are the types of our inputs and targets? Images and multiple labels.
- where is the data? In a dataframe.
- how do we know if a sample is in the training or the validation set? A column of our dataframe.
- how do we get an image? By looking at the column fname.
- how do we know the label of an image? By looking at the column labels.
- do we want to apply a function to a given sample? Yes, we need to resize everything to a given size.
- do we want to apply a function to a batch after it’s created? Yes, we want data augmentation.

Notice how there is one more question compared to before: we wont have to use a `get_items`

function here because we already have all our data in one place. But we will need to do something to the raw dataframe to get our inputs, read the first column and add the proper folder before the filename. This is what we pass as `get_x`

.

Again, we can see how the answers to the questions directly translate in the API. Our types become blocks: one for images and one for multi-categories. The split is done by a [ ColSplitter](https://docs.fast.ai/data.transforms.html#colsplitter) (it defaults to the column named

`is_valid`

). The function to get our inputs (often called `x`

) is a [on the first column with a prefix, the function to get our targets (often called](https://docs.fast.ai/data.transforms.html#colreader)

`ColReader`

`y`

) is [on the second column, with a space delimiter. We apply a resize at the item level and](https://docs.fast.ai/data.transforms.html#colreader)

`ColReader`

[at the batch level.](https://docs.fast.ai/vision.augment.html#aug_transforms)

`aug_transforms()`

Another way to do this is by directly using functions for `get_x`

and `get_y`

:

Alternatively, we can use the names of the columns as attributes (since rows of a dataframe are pandas series).

The most efficient way (to avoid iterating over the rows of the dataframe, which can take a long time) is to use the `from_columns`

method. It will use `get_items`

to convert the columns into numpy arrays. The drawback is that since we lose the dataframe after extracting the relevant columns, we can’t use a [ ColSplitter](https://docs.fast.ai/data.transforms.html#colsplitter) anymore. Here we used an

[after manually extracting the index of the validation set from the dataframe:](https://docs.fast.ai/data.transforms.html#indexsplitter)

`IndexSplitter`

def _pascal_items(x): return (
f'{pascal_source}/train/'+x.fname, x.labels.str.split())
valid_idx = df[df['is_valid']].index.values
pascal = DataBlock.from_columns(blocks=(ImageBlock, MultiCategoryBlock),
get_items=_pascal_items,
splitter=IndexSplitter(valid_idx),
item_tfms=Resize(224),
batch_tfms=aug_transforms())


## Image localization

There are various problems that fall in the image localization category: image segmentation (which is a task where you have to predict the class of each pixel of an image), coordinate predictions (predict one or several key points on an image) and object detection (draw a box around objects to detect).

Let’s see an example of each of those and how to use the data block API in each case.

### Segmentation

We will use a small subset of the [CamVid dataset](http://mi.eng.cam.ac.uk/research/projects/VideoRec/CamVid/) for our example.

Let’s go over our usual questionnaire:

- what are the types of our inputs and targets? Images and segmentation masks.
- where is the data? In subfolders.
- how do we know if a sample is in the training or the validation set? We’ll take a random split.
- how do we know the label of an image? By looking at a corresponding file in the “labels” folder.
- do we want to apply a function to a batch after it’s created? Yes, we want data augmentation.

The [ MaskBlock](https://docs.fast.ai/vision.data.html#maskblock) is generated with the

`codes`

that give the correpondence between pixel value of the masks and the object they correspond to (like car, road, pedestrian…). The rest should look pretty familiar by now.```
/home/jhoward/mambaforge/lib/python3.9/site-packages/torch/_tensor.py:1142: UserWarning: __floordiv__ is deprecated, and its behavior will change in a future version of pytorch. It currently rounds toward 0 (like the 'trunc' function NOT 'floor'). This results in incorrect rounding for negative values. To keep the current behavior, use torch.div(a, b, rounding_mode='trunc'), or for actual floor division, use torch.div(a, b, rounding_mode='floor').
ret = func(*args, **kwargs)
```


### Points

For this example we will use a small sample of the [BiWi kinect head pose dataset](https://www.kaggle.com/kmader/biwi-kinect-head-pose-database). It contains pictures of people and the task is to predict where the center of their head is. We have saved this small dataet with a dictionary filename to center:

Then we can go over our usual questions:

- what are the types of our inputs and targets? Images and points.
- where is the data? In subfolders.
- how do we know if a sample is in the training or the validation set? We’ll take a random split.
- how do we know the label of an image? By using the
`fn2ctr`

dictionary. - do we want to apply a function to a batch after it’s created? Yes, we want data augmentation.

And we can use it to create a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders):

### Bounding boxes

For this task, we will use a small subset of the [COCO dataset](http://cocodataset.org/#home). It contains pictures with day-to-day objects and the goal is to predict where the objects are by drawing a rectangle around them.

The fastai library comes with a function called [ get_annotations](https://docs.fast.ai/vision.core.html#get_annotations) that will interpret the content of

`train.json`

and give us a dictionary filename to (bounding boxes, labels).Then we can go over our usual questions:

- what are the types of our inputs and targets? Images and bounding boxes.
- where is the data? In subfolders.
- how do we know if a sample is in the training or the validation set? We’ll take a random split.
- how do we know the label of an image? By using the
`img2bbox`

dictionary. - do we want to apply a function to a given sample? Yes, we need to resize everything to a given size.
- do we want to apply a function to a batch after it’s created? Yes, we want data augmentation.

Note that we provide three types, because we have two targets: the bounding boxes and the labels. That’s why we pass `n_inp=1`

at the end, to tell the library where the inputs stop and the targets begin.

This is also why we pass a list to `get_y`

: since we have two targets, we must tell the library how to label for each of them (you can use `noop`

if you don’t want to do anything for one).

## Text

We will show two examples: language modeling and text classification. Note that with the data block API, you can adapt the example before for multi-label to a problem where the inputs are texts.

### Language model

We will use a dataset compose of movie reviews from IMDb. As usual, we can download it in one line of code with [ untar_data](https://docs.fast.ai/data.external.html#untar_data).

| label | text | is_valid | |
|---|---|---|---|
| 0 | negative | Un-bleeping-believable! Meg Ryan doesn't even look her usual pert lovable self in this, which normally makes me forgive her shallow ticky acting schtick. Hard to believe she was the producer on this dog. Plus Kevin Kline: what kind of suicide trip has his career been on? Whoosh... Banzai!!! Finally this was directed by the guy who did Big Chill? Must be a replay of Jonestown - hollywood style. Wooofff! | False |
| 1 | positive | This is a extremely well-made film. The acting, script and camera-work are all first-rate. The music is good, too, though it is mostly early in the film, when things are still relatively cheery. There are no really superstars in the cast, though several faces will be familiar. The entire cast does an excellent job with the script.<br /><br />But it is hard to watch, because there is no good end to a situation like the one presented. It is now fashionable to blame the British for setting Hindus and Muslims against each other, and then cruelly separating them into two countries. There is som... | False |
| 2 | negative | Every once in a long while a movie will come along that will be so awful that I feel compelled to warn people. If I labor all my days and I can save but one soul from watching this movie, how great will be my joy.<br /><br />Where to begin my discussion of pain. For starters, there was a musical montage every five minutes. There was no character development. Every character was a stereotype. We had swearing guy, fat guy who eats donuts, goofy foreign guy, etc. The script felt as if it were being written as the movie was being shot. The production value was so incredibly low that it felt li... | False |
| 3 | positive | Name just says it all. I watched this movie with my dad when it came out and having served in Korea he had great admiration for the man. The disappointing thing about this film is that it only concentrate on a short period of the man's life - interestingly enough the man's entire life would have made such an epic bio-pic that it is staggering to imagine the cost for production.<br /><br />Some posters elude to the flawed characteristics about the man, which are cheap shots. The theme of the movie "Duty, Honor, Country" are not just mere words blathered from the lips of a high-brassed offic... | False |
| 4 | negative | This movie succeeds at being one of the most unique movies you've seen. However this comes from the fact that you can't make heads or tails of this mess. It almost seems as a series of challenges set up to determine whether or not you are willing to walk out of the movie and give up the money you just paid. If you don't want to feel slighted you'll sit through this horrible film and develop a real sense of pity for the actors involved, they've all seen better days, but then you realize they actually got paid quite a bit of money to do this and you'll lose pity for them just like you've alr... | False |

We can see it’s composed of (pretty long!) reviews labeled positive or negative. Let’s go over our usual questions:

- what are the types of our inputs and targets? Texts and we don’t really have targets, since the targets is derived from the inputs.
- where is the data? In a dataframe.
- how do we know if a sample is in the training or the validation set? We have an
`is_valid`

column. - how do we get our inputs? In the
`text`

column.

Since there are no targets here, we only have one block to specify. [ TextBlock](https://docs.fast.ai/text.data.html#textblock)s are a bit special compared to other

[s: to be able to efficiently tokenize all texts during setup, you need to use the class methods](https://docs.fast.ai/data.block.html#transformblock)

`TransformBlock`

`from_folder`

or `from_df`

.Note: the `TestBlock`

tokenization process puts tokenized inputs into a column called `text`

. The [ ColReader](https://docs.fast.ai/data.transforms.html#colreader) for

`get_x`

will always reference `text`

, even if the original text inputs were in a column with another name in the dataframe.We can then get our data into [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) by passing the dataframe to the

`dataloaders`

method:| text | text_ | |
|---|---|---|
| 0 | xxbos xxmaj not sure if it was right or wrong , but i read thru the other comments before watching the xxunk have to say i disagree with most of the negative comments or problems people have had with it . \n\n xxmaj as a first time " lone xxmaj wolf " director / producer , i like to see things that i can xxunk to , not necessarily from the pro | xxmaj not sure if it was right or wrong , but i read thru the other comments before watching the xxunk have to say i disagree with most of the negative comments or problems people have had with it . \n\n xxmaj as a first time " lone xxmaj wolf " director / producer , i like to see things that i can xxunk to , not necessarily from the pro 's |
| 1 | and each and every actor . xxmaj it 's like they all think they 're the main part of the movie and scream " notice xxup me ! " over and over again . xxmaj the bad guy has his bad - guy music going on and says sinister bad - guy - like things , just in case you did n't quite catch on . xxmaj the good guy does brave | each and every actor . xxmaj it 's like they all think they 're the main part of the movie and scream " notice xxup me ! " over and over again . xxmaj the bad guy has his bad - guy music going on and says sinister bad - guy - like things , just in case you did n't quite catch on . xxmaj the good guy does brave and |
| 2 | innocently helps the xxmaj confederate hide . xxmaj later , when he returns to kill her father , the little girl 's xxunk is remembered . a sweet , small story from director xxup xxunk . xxmaj griffith . xxmaj location footage and humanity are xxunk displayed . \n\n▁ xxrep 4 * xxmaj in the xxmaj border xxmaj states ( 6 / 13 / 10 ) xxup xxunk . xxmaj griffith ~ | helps the xxmaj confederate hide . xxmaj later , when he returns to kill her father , the little girl 's xxunk is remembered . a sweet , small story from director xxup xxunk . xxmaj griffith . xxmaj location footage and humanity are xxunk displayed . \n\n▁ xxrep 4 * xxmaj in the xxmaj border xxmaj states ( 6 / 13 / 10 ) xxup xxunk . xxmaj griffith ~ xxmaj |
| 3 | when they real winner should of been xxmaj xxunk xxmaj fiennes for " sunshine " . xxmaj if you have n't seen this movie yet , watch it and you 'll agree . " eyes xxmaj wide xxmaj shut " when released xxunk no nominations . xxmaj and as far as this year goes , well , the bad choices were all over the place ! xxmaj xxunk xxmaj xxunk gets no | they real winner should of been xxmaj xxunk xxmaj fiennes for " sunshine " . xxmaj if you have n't seen this movie yet , watch it and you 'll agree . " eyes xxmaj wide xxmaj shut " when released xxunk no nominations . xxmaj and as far as this year goes , well , the bad choices were all over the place ! xxmaj xxunk xxmaj xxunk gets no " |
| 4 | xxmaj in this case , however , when combined with the moody atmosphere , and the fact that the small town of xxmaj red xxmaj rock seems almost empty of normal daily life , the coincidences and unlikely timing suggest a story that , beyond " xxunk " , is … surreal . xxmaj it 's almost as if fate deliberately xxunk with improbable events so as to force xxmaj michael to | in this case , however , when combined with the moody atmosphere , and the fact that the small town of xxmaj red xxmaj rock seems almost empty of normal daily life , the coincidences and unlikely timing suggest a story that , beyond " xxunk " , is … surreal . xxmaj it 's almost as if fate deliberately xxunk with improbable events so as to force xxmaj michael to come |
| 5 | is not over the top and enough twists and turns to keep you interested until the end . \n\n xxmaj well directed , well acted and a good story . xxbos xxmaj not the worst movie xxmaj i 've seen but definitely not very good either . i myself am a paintball player , used to play airball a lot and going from woods to airball is quite a large change . | not over the top and enough twists and turns to keep you interested until the end . \n\n xxmaj well directed , well acted and a good story . xxbos xxmaj not the worst movie xxmaj i 've seen but definitely not very good either . i myself am a paintball player , used to play airball a lot and going from woods to airball is quite a large change . xxmaj |

### Text classification

For the text classification, let’s go over our usual questions:

- what are the types of our inputs and targets? Texts and categories.
- where is the data? In a dataframe.
- how do we know if a sample is in the training or the validation set? We have an
`is_valid`

column. - how do we get our inputs? In the
`text`

column. - how do we get our targets? In the
`label`

column.

Like in the previous example, we use a class method to build a [ TextBlock](https://docs.fast.ai/text.data.html#textblock). We can pass it the vocabulary of our language model (very useful for the ULMFit approach). We also show the

`seq_len`

argument (which defaults to 72) just because you need to make sure to use the same here and also in your [.](https://docs.fast.ai/text.learner.html#text_classifier_learner)

`text_classifier_learner`

| text | category | |
|---|---|---|
| 0 | xxbos xxmaj raising xxmaj victor xxmaj vargas : a xxmaj review \n\n xxmaj you know , xxmaj raising xxmaj victor xxmaj vargas is like sticking your hands into a big , xxunk bowl of xxunk . xxmaj it 's warm and gooey , but you 're not sure if it feels right . xxmaj try as i might , no matter how warm and gooey xxmaj raising xxmaj victor xxmaj vargas became i was always aware that something did n't quite feel right . xxmaj victor xxmaj vargas suffers from a certain xxunk on the director 's part . xxmaj apparently , the director thought that the ethnic backdrop of a xxmaj latino family on the lower east side , and an xxunk storyline would make the film critic proof . xxmaj he was right , but it did n't fool me . xxmaj raising xxmaj victor xxmaj vargas is | negative |
| 1 | xxbos xxup the xxup shop xxup around xxup the xxup corner is one of the xxunk and most feel - good romantic comedies ever made . xxmaj there 's just no getting around that , and it 's hard to actually put one 's feeling for this film into words . xxmaj it 's not one of those films that tries too hard , nor does it come up with the xxunk possible scenarios to get the two protagonists together in the end . xxmaj in fact , all its charm is xxunk , contained within the characters and the setting and the plot … which is highly believable to xxunk . xxmaj it 's easy to think that such a love story , as beautiful as any other ever told , * could * happen to you … a feeling you do n't often get from other romantic comedies | positive |
| 2 | xxbos xxmaj now that xxmaj che(2008 ) has finished its relatively short xxmaj australian cinema run ( extremely limited xxunk screen in xxmaj xxunk , after xxunk ) , i can xxunk join both xxunk of " at xxmaj the xxmaj movies " in taking xxmaj steven xxmaj soderbergh to task . \n\n xxmaj it 's usually satisfying to watch a film director change his style / subject , but xxmaj soderbergh 's most recent stinker , xxmaj the xxmaj girlfriend xxmaj xxunk ) , was also missing a story , so narrative ( and editing ? ) seem to suddenly be xxmaj soderbergh 's main challenge . xxmaj strange , after 20 - odd years in the business . xxmaj he was probably never much good at narrative , just xxunk it well inside " edgy " projects . \n\n xxmaj none of this excuses him this present , | negative |
| 3 | xxbos xxmaj this film sat on my xxmaj xxunk for weeks before i watched it . i xxunk a self - indulgent xxunk flick about relationships gone bad . i was wrong ; this was an xxunk xxunk into the screwed - up xxunk of xxmaj new xxmaj xxunk . \n\n xxmaj the format is the same as xxmaj max xxmaj xxunk ' " la xxmaj xxunk , " based on a play by xxmaj arthur xxmaj xxunk , who is given an " inspired by " credit . xxmaj it starts from one person , a prostitute , standing on a street corner in xxmaj brooklyn . xxmaj she is picked up by a home contractor , who has sex with her on the hood of a car , but ca n't come . xxmaj he refuses to pay her . xxmaj when he 's off xxunk , she | positive |
| 4 | xxbos i really wanted to love this show . i truly , honestly did . \n\n xxmaj for the first time , gay viewers get their own version of the " the xxmaj bachelor " . xxmaj with the help of his obligatory " hag " xxmaj xxunk , xxmaj james , a good looking , well - to - do thirty - something has the chance of love with 15 suitors ( or " mates " as they are referred to in the show ) . xxmaj the only problem is half of them are straight and xxmaj james does n't know this . xxmaj if xxmaj james picks a gay one , they get a trip to xxmaj new xxmaj zealand , and xxmaj if he picks a straight one , straight guy gets $ 25 , xxrep 3 0 . xxmaj how can this not be fun | negative |
| 5 | xxbos xxmaj many neglect that this is n't just a classic due to the fact that it 's the first 3d game , or even the first xxunk - up . xxmaj it 's also one of the first xxunk games , one of the xxunk definitely the first ) truly claustrophobic games , and just a pretty well - xxunk gaming experience in general . xxmaj with graphics that are terribly dated today , the game xxunk you into the role of xxunk even * think * xxmaj i 'm going to attempt spelling his last name ! ) , an xxmaj american xxup xxunk . caught in an underground bunker . xxmaj you fight and search your way through xxunk in order to achieve different xxunk for the six xxunk , let 's face it , most of them are just an excuse to hand you a weapon | positive |
| 6 | xxbos xxmaj the xxmaj blob starts with one of the most bizarre theme songs ever , xxunk by an uncredited xxmaj burt xxmaj xxunk of all people ! xxmaj you really have to hear it to believe it , xxmaj the xxmaj blob may be worth watching just for this song alone & my user comment summary is just a little taste of the classy lyrics … xxmaj after this xxunk opening credits sequence xxmaj the xxmaj blob introduces us , the viewer that is , to xxmaj steve xxmaj xxunk ( steve mcqueen as xxmaj steven mcqueen ) & his girlfriend xxmaj jane xxmaj martin ( xxunk xxmaj xxunk ) who are xxunk on their own somewhere & witness what looks like a meteorite falling to xxmaj earth in nearby woods . xxmaj an old man ( xxunk xxmaj xxunk as xxmaj xxunk xxmaj xxunk ) who lives in | negative |
| 7 | xxbos xxmaj the year 2005 saw no xxunk than 3 filmed productions of xxup h. xxup g. xxmaj wells ' great novel , " war of the xxmaj worlds " . xxmaj this is perhaps the least well - known and very probably the best of them . xxmaj no other version of xxunk has ever attempted not only to present the story very much as xxmaj wells wrote it , but also to create the atmosphere of the time in which it was supposed to take place : the last year of the 19th xxmaj century , 1900 …▁ using xxmaj wells ' original setting , in and near xxmaj xxunk , xxmaj england . \n\n imdb seems xxunk to what they regard as " spoilers " . xxmaj that might apply with some films , where the ending might actually be a surprise , but with regard to | positive |
| 8 | xxbos xxmaj well , what can i say . \n\n " what the xxmaj xxunk do we xxmaj know " has achieved the nearly impossible - leaving behind such masterpieces of the genre as " the xxmaj xxunk " , " the xxmaj xxunk xxmaj master " , " xxunk " , and so fourth , it will go down in history as the single worst movie i have ever seen in its xxunk . xxmaj and that , ladies and gentlemen , is impressive indeed , for i have seen many a bad movie . \n\n xxmaj this masterpiece of modern cinema consists of two xxunk parts , xxunk between a silly and contrived plot about an extremely annoying photographer , abandoned by her husband and forced to take anti - xxunk to survive , and a bunch of talking heads going on about how quantum physics supposedly xxunk | negative |

## Tabular data

Tabular data doesn’t really use the data block API as it’s relying on another API with [ TabularPandas](https://docs.fast.ai/tabular.core.html#tabularpandas) for efficient preprocessing and batching (there will be some less efficient API that plays nicely with the data block API added in the near future). You can still use different blocks for the targets.

For our example, we will look at a subset of the [adult dataset](https://archive.ics.uci.edu/ml/datasets/adult) which contains some census data and where the task is to predict if someone makes more than 50k or not.

| age | workclass | fnlwgt | education | education-num | marital-status | occupation | relationship | race | sex | capital-gain | capital-loss | hours-per-week | native-country | salary | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 49 | Private | 101320 | Assoc-acdm | 12.0 | Married-civ-spouse | NaN | Wife | White | Female | 0 | 1902 | 40 | United-States | >=50k |
| 1 | 44 | Private | 236746 | Masters | 14.0 | Divorced | Exec-managerial | Not-in-family | White | Male | 10520 | 0 | 45 | United-States | >=50k |
| 2 | 38 | Private | 96185 | HS-grad | NaN | Divorced | NaN | Unmarried | Black | Female | 0 | 0 | 32 | United-States | <50k |
| 3 | 38 | Self-emp-inc | 112847 | Prof-school | 15.0 | Married-civ-spouse | Prof-specialty | Husband | Asian-Pac-Islander | Male | 0 | 0 | 40 | United-States | >=50k |
| 4 | 42 | Self-emp-not-inc | 82297 | 7th-8th | NaN | Married-civ-spouse | Other-service | Wife | Black | Female | 0 | 0 | 50 | United-States | <50k |

In a tabular problem, we need to split the columns between the ones that represent continuous variables (like the age) and the ones that represent categorical variables (like the education):

Standard preprocessing in fastai, use those pre-processors:

[ Categorify](https://docs.fast.ai/tabular.core.html#categorify) will change the categorical columns into indices,

[will fill the missing values in the continuous columns (if any) and add an na categorical column (if necessary).](https://docs.fast.ai/tabular.core.html#fillmissing)

`FillMissing`

[will normalize the continuous columns (subtract the mean and divide by the standard deviation).](https://docs.fast.ai/data.transforms.html#normalize)

`Normalize`

We can still use any splitter to create the splits as we’d like them:

And then everything goes in a [ TabularPandas](https://docs.fast.ai/tabular.core.html#tabularpandas) object:

We put `y_block=CategoryBlock`

just to show you how to customize the block for the targets, but it’s usually inferred from the data, so you don’t need to pass it, normally.

| workclass | education | marital-status | occupation | relationship | race | education-num_na | age | fnlwgt | education-num | salary | |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | Self-emp-not-inc | Prof-school | Never-married | Prof-specialty | Not-in-family | White | False | 34.0 | 204374.999924 | 15.0 | >=50k |
| 1 | Private | Some-college | Never-married | Adm-clerical | Not-in-family | White | False | 62.0 | 141307.999756 | 10.0 | <50k |
| 2 | Private | Assoc-acdm | Never-married | Other-service | Not-in-family | White | False | 23.0 | 152188.999004 | 12.0 | <50k |
| 3 | Private | HS-grad | Divorced | Craft-repair | Unmarried | White | False | 38.0 | 27407.999090 | 9.0 | <50k |
| 4 | Private | Bachelors | Never-married | Prof-specialty | Not-in-family | White | False | 32.0 | 340917.004812 | 13.0 | >=50k |
| 5 | Private | Bachelors | Never-married | Prof-specialty | Not-in-family | White | False | 22.0 | 153515.999598 | 13.0 | <50k |
| 6 | Self-emp-not-inc | Doctorate | Never-married | Prof-specialty | Not-in-family | White | False | 46.0 | 165754.000335 | 16.0 | <50k |
| 7 | Private | Masters | Married-civ-spouse | Prof-specialty | Husband | White | False | 33.0 | 202050.999896 | 14.0 | <50k |
| 8 | Private | Assoc-acdm | Divorced | Sales | Unmarried | White | False | 40.0 | 197919.000079 | 12.0 | <50k |
| 9 | ? | Some-college | Never-married | ? | Own-child | White | False | 18.0 | 264924.000434 | 10.0 | <50k |

---

## Source: https://docs.fast.ai/tutorial.imagenette.html

# Training Imagenette

The fastai library as a layered API as summarized by this graph:

If you are following this tutorial, you are probably already familiar with the applications, here we will see how they are powered by the high-level and mid-level API.

[Imagenette](https://github.com/fastai/imagenette) is a subset of ImageNet with 10 very different classes. It’s great to quickly experiment before trying a fleshed-out technique on the full ImageNet dataset. We will show in this tutorial how to train a model on it, using the usual high-level APIs, then delving inside the fastai library to show you how to use the mid-level APIs we designed. This way you’ll be able to customize your own data collection or training as needed.

## Assemble the data

We will look at several ways to get our data in [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders): first we will use

[factory methods (application layer), then the data block API (high level API) and lastly, how to do the same thing with the mid-level API.](https://docs.fast.ai/vision.data.html#imagedataloaders)

`ImageDataLoaders`

### Loading the data with a factory method

This is the most basic way of assembling the data that we have presented in all the beginner tutorials, so hopefully it should be familiar to you by now.

First, we import everything inside the vision application:

Then we download the dataset and decompress it (if needed) and get its location:

We use [ ImageDataLoaders.from_folder](https://docs.fast.ai/vision.data.html#imagedataloaders.from_folder) to get everything (since our data is organized in an imageNet-style format):

And we can have a look at our data:

### Loading the data with the data block API

And as we saw in previous tutorials, the [ get_image_files](https://docs.fast.ai/data.transforms.html#get_image_files) function helps get all the images in subfolders:

Let’s begin with an empty [ DataBlock](https://docs.fast.ai/data.block.html#datablock).

By itself, a [ DataBlock](https://docs.fast.ai/data.block.html#datablock) is just a blue print on how to assemble your data. It does not do anything until you pass it a source. You can choose to then convert that source into a

[or a](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

[by using the](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

[or](https://docs.fast.ai/data.block.html#datablock.datasets)

`DataBlock.datasets`

[method. Since we haven’t done anything to get our data ready for batches, the](https://docs.fast.ai/data.block.html#datablock.dataloaders)

`DataBlock.dataloaders`

`dataloaders`

method will fail here, but we can have a look at how it gets converted in [. This is where we pass the source of our data, here all of our filenames:](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

```
(Path('/home/jhoward/.fastai/data/imagenette2-160/train/n03425413/n03425413_7416.JPEG'),
Path('/home/jhoward/.fastai/data/imagenette2-160/train/n03425413/n03425413_7416.JPEG'))
```


By default, the data block API assumes we have an input and a target, which is why we see our filename repeated twice.

The first thing we can do is to use a `get_items`

function to actually assemble our items inside the data block:

The difference is that you then pass as a source the folder with the images and not all the filenames:

```
(Path('/home/jhoward/.fastai/data/imagenette2-160/val/n03888257/n03888257_42.JPEG'),
Path('/home/jhoward/.fastai/data/imagenette2-160/val/n03888257/n03888257_42.JPEG'))
```


Our inputs are ready to be processed as images (since images can be built from filenames), but our target is not. We need to convert that filename to a class name. For this, fastai provides [ parent_label](https://docs.fast.ai/data.transforms.html#parent_label):

This is not very readable, so since we can actually make the function we want, let’s convert those obscure labels to something we can read:

We can then tell our data block to use it to label our target by passing it as `get_y`

:

```
(Path('/home/jhoward/.fastai/data/imagenette2-160/train/n03000684/n03000684_8368.JPEG'),
'chain saw')
```


Now that our inputs and targets are ready, we can specify types to tell the data block API that our inputs are images and our targets are categories. Types are represented by blocks in the data block API, here we use [ ImageBlock](https://docs.fast.ai/vision.data.html#imageblock) and

[:](https://docs.fast.ai/data.block.html#categoryblock)

`CategoryBlock`

`(PILImage mode=RGB size=187x160, TensorCategory(0))`


We can see how the [ DataBlock](https://docs.fast.ai/data.block.html#datablock) automatically added the transforms necessary to open the image, or how it changed the name “cassette player” to an index 2 (with a special tensor type). To do this, it created a mapping from categories to the index called “vocab” that we can access this way:

`['English springer', 'French horn', 'cassette player', 'chain saw', 'church', 'garbage truck', 'gas pump', 'golf ball', 'parachute', 'tench']`


Note that you can mix and match any block for input and targets, which is why the API is named data block API. You can also have more than two blocks (if you have multiple inputs and/or targets), you would just need to pass `n_inp`

to the [ DataBlock](https://docs.fast.ai/data.block.html#datablock) to tell the library how many inputs there are (the rest would be targets) and pass a list of functions to

`get_x`

and/or `get_y`

(to explain how to process each item to be ready for its type). See the object detection below for such an example.The next step is to control how our validation set is created. We do this by passing a `splitter`

to [ DataBlock](https://docs.fast.ai/data.block.html#datablock). For instance, here is how we split by grandparent folder.

`(PILImage mode=RGB size=213x160, TensorCategory(5))`


The last step is to specify item transforms and batch transforms (the same way as we do it in [ ImageDataLoaders](https://docs.fast.ai/vision.data.html#imagedataloaders) factory methods):

With that resize, we are now able to batch items together and can finally call `dataloaders`

to convert our [ DataBlock](https://docs.fast.ai/data.block.html#datablock) to a

[object:](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

Another way to compose several functions for `get_y`

is to put them in a `Pipeline`

:

To learn more about the data block API, checkout the [data block tutorial](./tutorial.datablock.html)!

### Loading the data with the mid-level API

Now let’s see how we can load the data with the medium-level API: we will learn about `Transform`

s and [ Datasets](https://docs.fast.ai/data.core.html#datasets). The beginning is the same as before: we download our data and get all our filenames:

Every bit of transformation we apply to our raw items (here the filenames) is called a `Transform`

in fastai. It’s basically a function with a bit of added functionality:

- it can have different behavior depending on the type it receives (this is called type dispatch)
- it will generally be applied on each element of a tuple

This way, when you have a `Transform`

like resize, you can apply it on a tuple (image, label) and it will resize the image but not the categorical label (since there is no implementation of resize for categories). The exact same transform applied on a tuple (image, mask) will resize the image and the target, using bilinear interpolation on the image and nearest neighbor on the mask. This is how the library manages to always apply data augmentation transforms on every computer vision application (segmentation, point localization or object detection).

Additionally, a transform can have:

- a setup executed on the whole set (or the whole training set). This is how
builds it vocabulary automatically.`Categorize`

- a decodes that can undo what the transform does for showing purposes (for instance
will convert back an index into a category).`Categorize`


We won’t delve into those bits of the low level API here, but you can check out the [pets tutorial](tutorial.pets) or the more advanced [siamese tutorial](./tutorial.siamese.html) for more information.

To open an image, we use the `PILImage.create`

transform. It will open the image and make it of the fastai type [ PILImage](https://docs.fast.ai/vision.core.html#pilimage):

In parallel, we have already seen how to get the label of our image, using [ parent_label](https://docs.fast.ai/data.transforms.html#parent_label) and

`lbl_dict`

:To make them proper categories that are mapped to an index before being fed to the model, we need to add the [ Categorize](https://docs.fast.ai/data.transforms.html#categorize) transform. If we want to apply it directly, we need to give it a vocab (so that it knows how to associate a string with an int). We already saw that we can compose several transforms by using a

`Pipeline`

:`TensorCategory(5)`


Now to build our [ Datasets](https://docs.fast.ai/data.core.html#datasets) object, we need to specify:

- our raw items
- the list of transforms that builds our inputs from the raw items
- the list of transforms that builds our targets from the raw items
- the split for training and validation

We have everything apart from the split right now, which we can build this way:

We can then pass all of this information to [ Datasets](https://docs.fast.ai/data.core.html#datasets).

The main difference with what we had before is that we can just pass along [ Categorize](https://docs.fast.ai/data.transforms.html#categorize) without passing it the vocab: it will build it from the training data (which it knows from

`items`

and `splits`

) during its setup phase. Let’s have a look at the first element:We can also use our [ Datasets](https://docs.fast.ai/data.core.html#datasets) object to represent it:

Now if we want to build a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) from this object, we need to add a few transforms that will be applied at the item level. As we saw before, those transforms will be applied separately on the inputs and targets, using the appropriate implementation for each type (which can very well be don’t do anything).

Here we need to:

- resize our images
- convert them to tensors

Additionally we will need to apply a few transforms on the batch level, namely:

- convert the int tensors from images to floats, and divide every pixel by 255
- normalize using the imagenet statistics

Those two bits could be done per item as well, but it’s way more efficient to do it on a full batch.

Note that we have more transforms than in the data block API: there was no need to think of [ ToTensor](https://docs.fast.ai/data.transforms.html#totensor) or

[there. This is because data blocks come with default item transforms and batch transforms when it concerns transforms you will always need with that type.](https://docs.fast.ai/data.transforms.html#inttofloattensor)

`IntToFloatTensor`

When passing those transforms to the `.dataloaders`

method, the corresponding arguments have a slightly different name: the `item_tfms`

are passed to `after_item`

(because they are applied after the item has been formed) and the `batch_tfms`

are passed to `after_batch`

(because they are applied after the batch has been formed).

We can then use the traditional [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method:

## Training

We will start with the usual [ vision_learner](https://docs.fast.ai/vision.learner.html#vision_learner) function we used in the

[vision tutorial](./tutorial.vision.html), we will see how one can build a

[object in fastai. Then we will learn how to customize:](https://docs.fast.ai/learner.html#learner)

`Learner`

- the loss function and how to write one that works fully with fastai,
- the optimizer function and how to use PyTorch optimizers,
- the training loop and how to write a basic
.`Callback`


### Building a `Learner`


`Learner`

The easiest way to build a [ Learner](https://docs.fast.ai/learner.html#learner) for image classification, as we have seen, is to use

[. We can specify that we don’t want a pretrained model by passing](https://docs.fast.ai/vision.learner.html#vision_learner)

`vision_learner`

`pretrained=False`

(here the goal is to train a model from scratch):And we can fit our model as usual:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 2.371458 | 1.981063 | 0.336815 | 00:07 |
| 1 | 2.185702 | 3.057348 | 0.299363 | 00:06 |
| 2 | 1.935795 | 8.318202 | 0.360255 | 00:06 |
| 3 | 1.651643 | 1.327140 | 0.566624 | 00:06 |
| 4 | 1.395742 | 1.297114 | 0.616815 | 00:06 |

That’s a start. But since we are not using a pretrained model, why not use a different architecture? fastai comes with a version of the resnets models that have all the tricks from modern research incorporated. While there is no pretrained model using those at the time of writing this tutorial, we can certainly use them here. For this, we just need to use the [ Learner](https://docs.fast.ai/learner.html#learner) class. It takes our

[and a PyTorch model, at the minimum. Here we can use](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

[and since we have 10 classes, we specify](https://docs.fast.ai/vision.models.xresnet.html#xresnet34)

`xresnet34`

`n_out=10`

:We can find a good learning rate with the learning rate finder:

Then fit our model:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 1.622614 | 1.570121 | 0.493758 | 00:06 |
| 1 | 1.171878 | 1.235382 | 0.593376 | 00:06 |
| 2 | 0.934658 | 0.914801 | 0.705987 | 00:06 |
| 3 | 0.762568 | 0.766841 | 0.754904 | 00:06 |
| 4 | 0.649679 | 0.675186 | 0.784204 | 00:06 |

Wow this is a huge improvement! As we saw in all the application tutorials, we can then look at some results with:

Now let’s see how to customize each bit of the training.

### Changing the loss function

The loss function you pass to a [ Learner](https://docs.fast.ai/learner.html#learner) is expected to take an output and target, then return the loss. It can be any regular PyTorch function and the training loop will work without any problem. What may cause problems is when you use fastai functions like

[,](https://docs.fast.ai/learner.html#learner.get_preds)

`Learner.get_preds`

[or](https://docs.fast.ai/learner.html#learner.predict)

`Learner.predict`

[.](https://docs.fast.ai/learner.html#learner.show_results)

`Learner.show_results`

If you want [ Learner.get_preds](https://docs.fast.ai/learner.html#learner.get_preds) to work with the argument

`with_loss=True`

(which is also used when you run`ClassificationInterpretation.plot_top_losses`

for instance), your loss function will need a `reduction`

attribute (or argument) that you can set to “none” (this is standard for all PyTorch loss functions or classes). With a reduction of “none”, the loss function does not return a single number (like a mean or sum) but something the same size as the target.As for [ Learner.predict](https://docs.fast.ai/learner.html#learner.predict) or

[, they internally rely on two methods your loss function should have:](https://docs.fast.ai/learner.html#learner.show_results)

`Learner.show_results`

- if you have a loss that combines activation and loss function (such as
`nn.CrossEntropyLoss`

), an`activation`

function. - a
`decodes`

function that converts your predictions to the same format your targets are: for instance in the case of`nn.CrossEntropyLoss`

, the`decodes`

function should take the argmax.

As an example, let’s look at how to implement a custom loss function doing label smoothing (this is already in fastai as [ LabelSmoothingCrossEntropy](https://docs.fast.ai/losses.html#labelsmoothingcrossentropy)).

class LabelSmoothingCE(Module):
def __init__(self, eps=0.1, reduction='mean'): self.eps,self.reduction = eps,reduction
def forward(self, output, target):
c = output.size()[-1]
log_preds = F.log_softmax(output, dim=-1)
if self.reduction=='sum': loss = -log_preds.sum()
else:
loss = -log_preds.sum(dim=-1) #We divide by that size at the return line so sum and not mean
if self.reduction=='mean': loss = loss.mean()
return loss*self.eps/c + (1-self.eps) * F.nll_loss(log_preds, target.long(), reduction=self.reduction)
def activation(self, out): return F.softmax(out, dim=-1)
def decodes(self, out): return out.argmax(dim=-1)


We won’t comment on the `forward`

pass that just implements the loss in itself. What is important is to notice how the `reduction`

attribute plays in how the final result is computed.

Then since this loss function combines activation (softmax) with the actual loss, we implement `activation`

that take the softmax of the output. This is what will make [ Learner.get_preds](https://docs.fast.ai/learner.html#learner.get_preds) or

[return the actual predictions instead of the final activations.](https://docs.fast.ai/learner.html#learner.predict)

`Learner.predict`

Lastly, `decodes`

changes the outputs of the model to put them in the same format as the targets (one int for each sample in the batch size) by taking the argmax of the predictions. We can pass this loss function to [ Learner](https://docs.fast.ai/learner.html#learner):

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 1.734130 | 1.663665 | 0.521529 | 00:18 |
| 1 | 1.419407 | 1.358000 | 0.652994 | 00:19 |
| 2 | 1.239973 | 1.292138 | 0.675669 | 00:19 |
| 3 | 1.114046 | 1.093192 | 0.756688 | 00:19 |
| 4 | 1.019760 | 1.061080 | 0.772229 | 00:19 |

It’s not training as well as before because label smoothing is a regularizing technique, so it needs more epochs to really kick in and give better results.

After training our model, we can indeed use `predict`

and [ show_results](https://docs.fast.ai/data.core.html#show_results) and get proper results:

```
('garbage truck',
tensor(5),
tensor([1.5314e-03, 9.6116e-04, 2.7214e-03, 2.6757e-03, 6.4039e-04, 9.8842e-01,
8.1883e-04, 7.5840e-04, 1.0780e-03, 3.9759e-04]))
```


### Changing the optimizer

fastai uses its own class of [ Optimizer](https://docs.fast.ai/optimizer.html#optimizer) built with various callbacks to refactor common functionality and provide a unique naming of hyperparameters playing the same role (like momentum in SGD, which is the same as alpha in RMSProp and beta0 in Adam) which makes it easier to schedule them (such as in

[).](https://docs.fast.ai/callback.schedule.html#learner.fit_one_cycle)

`Learner.fit_one_cycle`

It implements all optimizers supported by PyTorch (and much more) so you should never need to use one coming from PyTorch. Checkout the `optimizer`

module to see all the optimizers natively available.

However in some circumstances, you might need to use an optimizer that is not in fastai (if for instance it’s a new one only implemented in PyTorch). Before learning how to port the code to our internal [ Optimizer](https://docs.fast.ai/optimizer.html#optimizer) (checkout the

`optimizer`

module to discover how), you can use the [class to wrap your PyTorch optimizer and train with it:](https://docs.fast.ai/optimizer.html#optimwrapper)

`OptimWrapper`

We write an optimizer function that expects `param_groups`

, which is a list of list of parameters. Then we pass those to the PyTorch optimizer we want to use.

We can use this function and pass it to the `opt_func`

argument of [ Learner](https://docs.fast.ai/learner.html#learner):

We can then use the usual learning rate finder:

Or `fit_one_cycle`

(and thanks to the wrapper, fastai will properly schedule the beta0 of AdamW).

### Changing the training loop with a `Callback`


`Callback`

The base training loop in fastai is the same as PyTorch’s:

where `model`

, `loss_func`

and `opt`

are all attributes of our [ Learner](https://docs.fast.ai/learner.html#learner). To easily allow you to add new behavior in that training loop without needing to rewrite it yourself (along with all the fastai pieces you might want like mixed precision, 1cycle schedule, distributed training…), you can customize what happens in the training loop by writing a callback.

[ Callback](https://docs.fast.ai/callback.core.html#callback)s will be fully explained in an upcoming tutorial, but the basics are that:

- a
can read every piece of a`Callback`

, hence knowing everything happening in the training loop`Learner`

- a
can change any piece of the`Callback`

, allowing it to alter the behavior of the training loop`Learner`

- a
can even raise special exceptions that will allow breaking points (skipping a step, a validation phase, an epoch or even cancelling training entirely)`Callback`


Here we will write a simple [ Callback](https://docs.fast.ai/callback.core.html#callback) applying

[mixup](https://arxiv.org/abs/1710.09412)to our training (the version we will write is specific to our problem, use fastai’s

[in other settings).](https://docs.fast.ai/callback.mixup.html#mixup)

`MixUp`

Mixup consists in changing the inputs by mixing two different inputs and making a linear combination of them:

Where `t`

is a random number between 0 and 1. Then, if the targets are one-hot encoded, we change the target to be

In practice though, targets are not one-hot encoded in PyTorch, but it’s equivalent to change the part of the loss dealing with `y1`

and `y2`

by

because the loss function used is linear with respect to y.

We just need to use the version with `reduction='none'`

of the loss to do this linear combination, then take the mean.

Here is how we write mixup in a [ Callback](https://docs.fast.ai/callback.core.html#callback):

class Mixup(Callback):
run_valid = False
def __init__(self, alpha=0.4): self.distrib = Beta(tensor(alpha), tensor(alpha))
def before_batch(self):
self.t = self.distrib.sample((self.y.size(0),)).squeeze().to(self.x.device)
shuffle = torch.randperm(self.y.size(0)).to(self.x.device)
x1,self.y1 = self.x[shuffle],self.y[shuffle]
self.learn.xb = (x1 * (1-self.t[:,None,None,None]) + self.x * self.t[:,None,None,None],)
def after_loss(self):
with NoneReduce(self.loss_func) as lf:
loss = lf(self.pred,self.y1) * (1-self.t) + lf(self.pred,self.y) * self.t
self.learn.loss = loss.mean()


We can see we write two events:

`before_batch`

is executed just after drawing a batch and before the model is run on the input. We first draw our random numbers`t`

, following a beta distribution (like advised in the paper) and get a shuffled version of the batch (instead of drawing a second version of the batch, we mix one batch with a shuffled version of itself). Then we set`self.learn.xb`

to the new input, which will be the on fed to the model.`after_loss`

is executed just after the loss is computed and before the backward pass. We replace`self.learn.loss`

by the correct value.is a context manager that temporarily sets the reduction attribute of a loss to ‘none’.`NoneReduce`


Also, we tell the [ Callback](https://docs.fast.ai/callback.core.html#callback) it should not run during the validation phase with

`run_valid=False`

.To pass a [ Callback](https://docs.fast.ai/callback.core.html#callback) to a

[, we use](https://docs.fast.ai/learner.html#learner)

`Learner`

`cbs=`

:Then we can combine this new callback with the learning rate finder:

And combine it with `fit_one_cycle`

:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 3.094243 | 3.560097 | 0.175796 | 00:15 |
| 1 | 2.766956 | 2.633007 | 0.400000 | 00:15 |
| 2 | 2.604495 | 2.454862 | 0.549809 | 00:15 |
| 3 | 2.513580 | 2.335537 | 0.598726 | 00:15 |
| 4 | 2.438728 | 2.277912 | 0.631338 | 00:15 |

Like label smoothing, this is a callback that provides more regularization, so you need to run more epochs before seeing any benefit. Also, our simple implementation does not have all the tricks of the fastai’s implementation, so make sure to check the official one in `callback.mixup`

!

---

## Source: https://docs.fast.ai/tutorial.pets.html

# Mid-tier data API - Pets

`Datasets`

, `Pipeline`

, `TfmdLists`

and `Transform`

in computer vision
## Overview

In this tutorial, we look in depth at the middle level API for collecting data in computer vision. First we will see how to use:

`Transform`

to process the data`Pipeline`

to composes transforms

Those are just functions with added functionality. For dataset processing, we will look in a second part at

to apply one`TfmdLists`

`Pipeline`

of`Tranform`

s on a collection of itemsto apply several`Datasets`

`Pipeline`

of`Transform`

s on a collection of items in parallel and produce tuples

The general rule is to use [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) when your transforms will output the tuple (input,target) and

[when you build separate](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

`Pipeline`

s for each of your input(s)/target(s).After this tutorial, you might be interested by the [siamese tutorial](http://docs.fast.ai/tutorial.siamese.html) that goes even more in depth in the data APIs, showing you how to write your custom types and how to customize the behavior of [ show_batch](https://docs.fast.ai/data.core.html#show_batch) and

[.](https://docs.fast.ai/data.core.html#show_results)

`show_results`

## Processing data

Cleaning and processing data is one of the most time-consuming things in machine learning, which is why fastai tries to help you as much as it can. At its core, preparing the data for your model can be formalized as a sequence of transformations you apply to some raw items. For instance, in a classic image classification problem, we start with filenames. We have to open the corresponding images, resize them, convert them to tensors, maybe apply some kind of data augmentation, before we are ready to batch them. And that’s just for the inputs of our model, for the targets, we need to extract the label of our filename and convert it to an integer.

This process needs to be somewhat reversible, because we often want to inspect our data to double check what we feed the model actually makes sense. That’s why fastai represents all those operations by `Transform`

s, which you can sometimes undo with a `decode`

method.

### Transform

First we’ll have a look at the basic steps using a single MNIST image. We’ll start with a filename, and see step by step how it can be converted in to a labelled image that can be displayed and used for modeling. We use the usual [ untar_data](https://docs.fast.ai/data.external.html#untar_data) to download our dataset (if necessary) and get all the image files:

`Path('/home/jhoward/.fastai/data/mnist_tiny/train/3/9696.png')`


We’ll look at each `Transform`

needed in turn. Here’s how we can open an image file:

Then we can convert it to a `C*H*W`

tensor (for channel x height x width, which is the convention in PyTorch):

`(torch.Size([3, 28, 28]), fastai.torch_core.TensorImage)`


Now that’s done, we can create our labels. First extracting the text label:

And then converting to an int for modeling:

We use `decode`

to reverse transforms for display. Reversing the [ Categorize](https://docs.fast.ai/data.transforms.html#categorize) transform result in a class name we can display:

### Pipeline

We can compose our image steps using `Pipeline`

:

A `Pipeline`

can decode and show an item.

The show method works behind the scenes with types. Transforms will make sure the type of an element they receive is preserved. Here `PILImage.create`

returns a [ PILImage](https://docs.fast.ai/vision.core.html#pilimage), which knows how to show itself.

`tconv`

converts it to a [, which also knows how to show itself.](https://docs.fast.ai/torch_core.html#tensorimage)

`TensorImage`

Those types are also used to enable different behaviors depending on the input received (for instance you don’t do data augmentation the same way on an image, a segmentation mask or a bounding box).

## Loading the pets dataset using only `Transform`


Let’s see how to use `fastai.data`

to process the Pets dataset. If you are used to writing your own PyTorch `Dataset`

s, what will feel more natural is to write everything in one `Transform`

. We use *source* to refer to the underlying source of our data (e.g. a directory on disk, a database connection, a network connection, etc). Then we grab the items.

We’ll use this function to create consistently sized tensors from image files:

Before we can create a `Transform`

, we need a type that knows how to show itself (if we want to use the show method). Here we define a `TitledImage`

:

Let’s check it works:

### Using decodes for showing processed data

To decode data for showing purposes (like de-normalizing an image or converting back an index to its corresponding class), we implement a `decodes`

method inside a `Transform`

.

The `Transform`

opens and resizes the images on one side, label it and convert that label to an index using `o2i`

on the other side. Inside the `decodes`

method, we decode the index using the `vocab`

. The image is left as is (we can’t really show a filename!).

To use this `Transform`

, we need a label function. Here we use a regex on the `name`

attribute of our filenames:

Then we gather all the possible labels, uniqueify them and ask for the two correspondences (vocab and o2i) using `bidir=True`

. We can then use them to build our pet transform.

We can check how it’s applied to a filename:

And we can decode our transformed version and show it:

Note that like `__call__`

and `encodes`

, we implemented a `decodes`

method but we actually call `decode`

on our `Transform`

.

Also note that our `decodes`

method received the two objects (x and y). We said in the previous section `Transform`

dispatch over tuples (for the encoding as well as the decoding) but here it took our two elements as a whole and did not try to decode x and y separately. Why is that? It’s because we pass a list `[x,y]`

to decodes. `Transform`

s dispatch over tuples, but tuples only. And as we saw as well, to prevent a `Transform`

from dispatching over a tuple, we just have to make it an `ItemTransform`

:

### Setting up the internal state with a setups

We can now make our `ItemTransform`

automatically infer its state from the data. This way, when we combine together our `Transform`

with the data, it will automatically get setup without having to do anything. This is very easy to do: just copy the lines we had before to build the categories inside the transform in a `setups`

method:

class PetTfm(ItemTransform):
def setups(self, items):
self.labeller = using_attr(RegexLabeller(pat = r'^(.*)_\d+.jpg$'), 'name')
vals = map(self.labeller, items)
self.vocab,self.o2i = uniqueify(vals, sort=True, bidir=True)
def encodes(self, o): return (resized_image(o), self.o2i[self.labeller(o)])
def decodes(self, x): return TitledImage(x[0],self.vocab[x[1]])


Now we can create our `Transform`

, call its setup, and it will be ready to be used:

And like before, there is no problem to decode it:

### Combining our `Transform`

with data augmentation in a `Pipeline`

.

We can take advantage of fastai’s data augmentation transforms if we give the right type to our elements. Instead of returning a standard `PIL.Image`

, if our transform returns the fastai type [ PILImage](https://docs.fast.ai/vision.core.html#pilimage), we can then use any fastai’s transform with it. Let’s just return a

[for our first element:](https://docs.fast.ai/vision.core.html#pilimage)

`PILImage`

class PetTfm(ItemTransform):
def setups(self, items):
self.labeller = using_attr(RegexLabeller(pat = r'^(.*)_\d+.jpg$'), 'name')
vals = map(self.labeller, items)
self.vocab,self.o2i = uniqueify(vals, sort=True, bidir=True)
def encodes(self, o): return (PILImage.create(o), self.o2i[self.labeller(o)])
def decodes(self, x): return TitledImage(x[0],self.vocab[x[1]])


We can then combine that transform with [ ToTensor](https://docs.fast.ai/data.transforms.html#totensor),

[or](https://docs.fast.ai/vision.augment.html#resize)

`Resize`

[to randomly flip our image in a](https://docs.fast.ai/vision.augment.html#flipitem)

`FlipItem`

`Pipeline`

:Calling `setup`

on a `Pipeline`

will set each transform in order:

To check the setup was done properly, we want to see if we did build the vocab. One cool trick of `Pipeline`

is that when asking for an attribute, it will look through each of its `Transform`

s for that attribute and give you the result (or the list of results if the attribute is in multiple transforms):

```
['Abyssinian',
'Bengal',
'Birman',
'Bombay',
'British_Shorthair',
'Egyptian_Mau',
'Maine_Coon',
'Persian',
'Ragdoll',
'Russian_Blue',
'Siamese',
'Sphynx',
'american_bulldog',
'american_pit_bull_terrier',
'basset_hound',
'beagle',
'boxer',
'chihuahua',
'english_cocker_spaniel',
'english_setter',
'german_shorthaired',
'great_pyrenees',
'havanese',
'japanese_chin',
'keeshond',
'leonberger',
'miniature_pinscher',
'newfoundland',
'pomeranian',
'pug',
'saint_bernard',
'samoyed',
'scottish_terrier',
'shiba_inu',
'staffordshire_bull_terrier',
'wheaten_terrier',
'yorkshire_terrier']
```


Then we can call our pipeline:

We can see [ ToTensor](https://docs.fast.ai/data.transforms.html#totensor) and

[were applied to the first element of our tuple (which was of type](https://docs.fast.ai/vision.augment.html#resize)

`Resize`

[) but not the second. We can even have a look at our element to check the flip was also applied:](https://docs.fast.ai/vision.core.html#pilimage)

`PILImage`

`Pipeline.show`

will call decode on each `Transform`

until it gets a type that knows how to show itself. The library considers a tuple as knowing how to show itself if all its parts have a `show`

method. Here it does not happen before reaching `PetTfm`

since the second part of our tuple is an int. But after decoding the original `PetTfm`

, we get a `TitledImage`

which has a `show`

method.

It’s a good point to note that the `Transform`

s of the `Pipeline`

are sorted by their internal `order`

attribute (with a default of `order=0`

). You can always check the order in which the transforms are in a `Pipeline`

by looking at its representation:

`Pipeline: PetTfm -> FlipItem -- {'p': 1} -> Resize -- {'size': (224, 224), 'method': 'crop', 'pad_mode': 'reflection', 'resamples': (<Resampling.BILINEAR: 2>, <Resampling.NEAREST: 0>), 'p': 1.0} -> ToTensor`


Even if we define `tfms`

with [ Resize](https://docs.fast.ai/vision.augment.html#resize) before

[, we can see they have been reordered because we have:](https://docs.fast.ai/vision.augment.html#flipitem)

`FlipItem`

To customize the order of a `Transform`

, just set `order = ...`

before the `__init__`

(it’s a class attribute). Let’s make `PetTfm`

of order -5 to be sure it’s always run first:

class PetTfm(ItemTransform):
order = -5
def setups(self, items):
self.labeller = using_attr(RegexLabeller(pat = r'^(.*)_\d+.jpg$'), 'name')
vals = map(self.labeller, items)
self.vocab,self.o2i = uniqueify(vals, sort=True, bidir=True)
def encodes(self, o): return (PILImage.create(o), self.o2i[self.labeller(o)])
def decodes(self, x): return TitledImage(x[0],self.vocab[x[1]])


Then we can mess up the order of the transforms in our `Pipeline`

but it will fix itself:

`Pipeline: PetTfm -> FlipItem -- {'p': 1} -> Resize -- {'size': (224, 224), 'method': 'crop', 'pad_mode': 'reflection', 'resamples': (<Resampling.BILINEAR: 2>, <Resampling.NEAREST: 0>), 'p': 1.0} -> ToTensor`


Now that we have a good `Pipeline`

of transforms, let’s add it to a list of filenames to build our dataset. A `Pipeline`

combined with a collection is a [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) in fastai.

`TfmdLists`

and `Datasets`


`TfmdLists`

`Datasets`

The main difference between [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) and

[is the number of](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

`Pipeline`

s you have: [take one](https://docs.fast.ai/data.core.html#tfmdlists)

`TfmdLists`

`Pipeline`

to transform a list (like we currently have) whereas [combines several](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

`Pipeline`

s in parallel to create a tuple from one set of raw items, for instance a tuple (input, target).### One pipeline makes a `TfmdLists`


`TfmdLists`

Creating a [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) just requires a list of items and a list of transforms that will be combined in a

`Pipeline`

:`(torch.Size([3, 224, 224]), 14)`


We did not need to pass anything to `PetTfm`

thanks to our setup method: the `Pipeline`

was automatically setup on the `items`

during the initialization, so `PetTfm`

has created its vocab like before:

```
['Abyssinian',
'Bengal',
'Birman',
'Bombay',
'British_Shorthair',
'Egyptian_Mau',
'Maine_Coon',
'Persian',
'Ragdoll',
'Russian_Blue',
'Siamese',
'Sphynx',
'american_bulldog',
'american_pit_bull_terrier',
'basset_hound',
'beagle',
'boxer',
'chihuahua',
'english_cocker_spaniel',
'english_setter',
'german_shorthaired',
'great_pyrenees',
'havanese',
'japanese_chin',
'keeshond',
'leonberger',
'miniature_pinscher',
'newfoundland',
'pomeranian',
'pug',
'saint_bernard',
'samoyed',
'scottish_terrier',
'shiba_inu',
'staffordshire_bull_terrier',
'wheaten_terrier',
'yorkshire_terrier']
```


We can ask the [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) to show the items we got:

Or we have a shortcut with [ show_at](https://docs.fast.ai/data.core.html#show_at):

### Traning and validation set

[ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) has an ‘s’ in its name because it can represent several transformed lists: your training and validation sets. To use that functionality, we just need to pass

`splits`

to the initialization. `splits`

should be a list of lists of indices (one list per set). To help create splits, we can use all the *splitters*of the fastai library:

```
((#5912) [5643,5317,5806,3460,613,5456,2968,3741,10,4908...],
(#1478) [4512,4290,5770,706,2200,4320,6450,501,1290,6435...])
```


Then your `tls`

get a train and valid attributes (it also had them before, but the valid was empty and the train contained everything).

An interesting thing is that unless you pass `train_setup=False`

, your transforms are setup on the training set only (which is best practices): the `items`

received by `setups`

are just the elements of the training set.

### Getting to `DataLoaders`


`DataLoaders`

From a [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists), getting a

[object is very easy, you just have to call the](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

`dataloaders`

method:And [ show_batch](https://docs.fast.ai/data.core.html#show_batch) will just

*work*:

You can even add augmentation transforms, since we have a proper fastai typed image. Just remember to add the [ IntToFloatTensor](https://docs.fast.ai/data.transforms.html#inttofloattensor) transform that deals with the conversion of int to float (augmentation transforms of fastai on the GPU require float tensors). When calling

`TfmdLists.dataloaders`

, you pass the `batch_tfms`

to `after_batch`

(and potential new `item_tfms`

to `after_item`

):### Using `Datasets`


`Datasets`

[ Datasets](https://docs.fast.ai/data.core.html#datasets) applies a list of list of transforms (or list of

`Pipeline`

s) lazily to items of a collection, creating one output per list of transforms/`Pipeline`

. This makes it easier for us to separate out steps of a process, so that we can re-use them and modify the process more easily. This is what lays the foundation of the data block API: we can easily mix and match types as inputs or outputs as they are associated to certain pipelines of transforms.For instance, let’s write our own `ImageResizer`

transform with two different implementations for images or masks:

class ImageResizer(Transform):
order=1
"Resize image to `size` using `resample`"
def __init__(self, size, resample=BILINEAR):
if not is_listy(size): size=(size,size)
self.size,self.resample = (size[1],size[0]),resample
def encodes(self, o:PILImage): return o.resize(size=self.size, resample=self.resample)
def encodes(self, o:PILMask): return o.resize(size=self.size, resample=NEAREST)


Specifying the type-annotations makes it so that our transform does nothing to things that are neither [ PILImage](https://docs.fast.ai/vision.core.html#pilimage) or

[, and resize images with](https://docs.fast.ai/vision.core.html#pilmask)

`PILMask`

`self.resample`

, masks with the nearest neighbor interpolation. To create a [, we then pass two pipelines of transforms, one for the input and one for the target:](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

We can check that inputs and outputs have the right types:

`(fastai.torch_core.TensorImage, fastai.torch_core.TensorCategory)`


We can decode and show using `dsets`

:

And we can pass our train/validation split like in [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists):

But we are not using the fact that `Transform`

s dispatch over tuples here. `ImageResizer`

, [ ToTensor](https://docs.fast.ai/data.transforms.html#totensor) and

[could be passed as transforms over the tuple. This is done in](https://docs.fast.ai/data.transforms.html#inttofloattensor)

`IntToFloatTensor`

`.dataloaders`

by passing them to `after_item`

. They won’t do anything to the category but will only be applied to the inputs.And we can check it works with [ show_batch](https://docs.fast.ai/data.core.html#show_batch):

If we just wanted to build one [ DataLoader](https://docs.fast.ai/data.load.html#dataloader) from our

[(or the previous](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

[), you can pass it directly to](https://docs.fast.ai/data.core.html#tfmdlists)

`TfmdLists`

[:](https://docs.fast.ai/data.core.html#tfmddl)

`TfmdDL`

### Segmentation

By using the same transforms in `after_item`

but a different kind of targets (here segmentation masks), the targets are automatically processed as they should with the type-dispatch system.

```
/home/jhoward/mambaforge/lib/python3.9/site-packages/torch/_tensor.py:1142: UserWarning: __floordiv__ is deprecated, and its behavior will change in a future version of pytorch. It currently rounds toward 0 (like the 'trunc' function NOT 'floor'). This results in incorrect rounding for negative values. To keep the current behavior, use torch.div(a, b, rounding_mode='trunc'), or for actual floor division, use torch.div(a, b, rounding_mode='floor').
ret = func(*args, **kwargs)
```


## Adding a test dataloader for inference

Let’s take back our pets dataset…

…and imagine we have some new files to classify.

We can create a dataloader that takes those files and applies the same transforms as the validation set with [ DataLoaders.test_dl](https://docs.fast.ai/data.core.html#dataloaders.test_dl):

**Extra:**

You can call `learn.get_preds`

passing this newly created dataloaders to make predictions on our new images!

What is really cool is that after you finished training your model, you can save it with `learn.export`

, this is also going to save all the transforms that need to be applied to your data. In inference time you just need to load your learner with [ load_learner](https://docs.fast.ai/learner.html#load_learner) and you can immediately create a dataloader with

`test_dl`

to use it to generate new predictions!

---

## Source: https://docs.fast.ai/tutorial.medical_imaging.html

# Chest X-ray model

To use `fastai.medical.imaging`

you’ll need to:

To run this tutorial on Google Colab, you’ll need to uncomment the following two lines and run the cell:

## Download and import of X-ray DICOM files

First, we will use the [ untar_data](https://docs.fast.ai/data.external.html#untar_data) function to download the

*siim_small*folder containing a subset (250 DICOM files, ~30MB) of the

[SIIM-ACR Pneumothorax Segmentation](https://doi.org/10.1007/s10278-019-00299-9)[1] dataset. The downloaded

*siim_small*folder will be stored in your

*~/.fastai/data/*directory. The variable

`pneumothorax-source`

will store the absolute path to the *siim_small*folder as soon as the download is complete.

The *siim_small* folder has the following directory/file structure:

## What are DICOMs?

**DICOM**(**D**igital **I**maging and **CO**mmunications in **M**edicine) is the de-facto standard that establishes rules that allow medical images(X-Ray, MRI, CT) and associated information to be exchanged between imaging equipment from different vendors, computers, and hospitals. The DICOM format provides a suitable means that meets health infomation exchange (HIE) standards for transmision of health related data among facilites and HL7 standards which is the messaging standard that enables clinical applications to exchange data

DICOM files typically have a `.dcm`

extension and provides a means of storing data in separate ‘tags’ such as patient information as well as image/pixel data. A DICOM file consists of a header and image data sets packed into a single file. By extracting data from these tags one can access important information regarding the patient demographics, study parameters, etc.

16 bit DICOM images have values ranging from `-32768`

to `32768`

while 8-bit greyscale images store values from `0`

to `255`

. The value ranges in DICOM images are useful as they correlate with the [Hounsfield Scale](https://en.wikipedia.org/wiki/Hounsfield_scale) which is a quantitative scale for describing radiodensity

### Plotting the DICOM data

To analyze our dataset, we load the paths to the DICOM files with the [ get_dicom_files](https://docs.fast.ai/medical.imaging.html#get_dicom_files) function. When calling the function, we append

*train/*to the

`pneumothorax_source`

path to choose the folder where the DICOM files are located. We store the path to each DICOM file in the `items`

list.Next, we split the `items`

list into a train `trn`

and validation `val`

list using the [ RandomSplitter](https://docs.fast.ai/data.transforms.html#randomsplitter) function:

Pydicom is a python package for parsing DICOM files, making it easier to access the `header`

of the DICOM as well as coverting the raw `pixel_data`

into pythonic structures for easier manipulation. `fastai.medical.imaging`

uses `pydicom.dcmread`

to load the DICOM file.

To plot an X-ray, we can select an entry in the `items`

list and load the DICOM file with `dcmread`

.

To view the `header`


```
Dataset.file_meta -------------------------------
(0002, 0000) File Meta Information Group Length UL: 200
(0002, 0001) File Meta Information Version OB: b'\x00\x01'
(0002, 0002) Media Storage SOP Class UID UI: Secondary Capture Image Storage
(0002, 0003) Media Storage SOP Instance UID UI: 1.2.276.0.7230010.3.1.4.8323329.3297.1517875177.149805
(0002, 0010) Transfer Syntax UID UI: JPEG Baseline (Process 1)
(0002, 0012) Implementation Class UID UI: 1.2.276.0.7230010.3.0.3.6.0
(0002, 0013) Implementation Version Name SH: 'OFFIS_DCMTK_360'
-------------------------------------------------
(0008, 0005) Specific Character Set CS: 'ISO_IR 100'
(0008, 0016) SOP Class UID UI: Secondary Capture Image Storage
(0008, 0018) SOP Instance UID UI: 1.2.276.0.7230010.3.1.4.8323329.3297.1517875177.149805
(0008, 0020) Study Date DA: '19010101'
(0008, 0030) Study Time TM: '000000.00'
(0008, 0050) Accession Number SH: ''
(0008, 0060) Modality CS: 'CR'
(0008, 0064) Conversion Type CS: 'WSD'
(0008, 0090) Referring Physician's Name PN: ''
(0008, 103e) Series Description LO: 'view: PA'
(0010, 0010) Patient's Name PN: '6633c659-9249-443e-9851-b83782d1b111'
(0010, 0020) Patient ID LO: '6633c659-9249-443e-9851-b83782d1b111'
(0010, 0030) Patient's Birth Date DA: ''
(0010, 0040) Patient's Sex CS: 'M'
(0010, 1010) Patient's Age AS: '21'
(0018, 0015) Body Part Examined CS: 'CHEST'
(0018, 5101) View Position CS: 'PA'
(0020, 000d) Study Instance UID UI: 1.2.276.0.7230010.3.1.2.8323329.3297.1517875177.149804
(0020, 000e) Series Instance UID UI: 1.2.276.0.7230010.3.1.3.8323329.3297.1517875177.149803
(0020, 0010) Study ID SH: ''
(0020, 0011) Series Number IS: "1"
(0020, 0013) Instance Number IS: "1"
(0020, 0020) Patient Orientation CS: ''
(0028, 0002) Samples per Pixel US: 1
(0028, 0004) Photometric Interpretation CS: 'MONOCHROME2'
(0028, 0010) Rows US: 1024
(0028, 0011) Columns US: 1024
(0028, 0030) Pixel Spacing DS: [0.14300000000000002, 0.14300000000000002]
(0028, 0100) Bits Allocated US: 8
(0028, 0101) Bits Stored US: 8
(0028, 0102) High Bit US: 7
(0028, 0103) Pixel Representation US: 0
(0028, 2110) Lossy Image Compression CS: '01'
(0028, 2114) Lossy Image Compression Method CS: 'ISO_10918_1'
(7fe0, 0010) Pixel Data OB: Array of 161452 elements
```


Explanation of each element is beyond the scope of this tutorial but [this](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.6.3.html#sect_C.7.6.3.1.4) site has some excellent information about each of the entries

Some key pointers on the tag information above:

**Pixel Data**(7fe0 0010) - This is where the raw pixel data is stored. The order of pixels encoded for each image plane is left to right, top to bottom, i.e., the upper left pixel (labeled 1,1) is encoded first**Photometric Interpretation**(0028, 0004) - also known as color space. In this case it is`MONOCHROME2`

where pixel data is represented as a single monochrome image plane where low values=dark, high values=bright. If the colorspace was`MONOCHROME`

then the low values=bright and high values=dark info.**Samples per Pixel**(0028, 0002) - This should be 1 as this image is monochrome. This value would be 3 if the color space was RGB for example**Bits Stored**(0028 0101) - Number of bits stored for each pixel sample. Typical 8 bit images have a pixel range between`0`

and`255`

**Pixel Represenation**(0028 0103) - can either be unsigned(0) or signed(1)**Lossy Image Compression**(0028 2110) -`00`

image has not been subjected to lossy compression.`01`

image has been subjected to lossy compression.**Lossy Image Compression Method**(0028 2114) - states the type of lossy compression used (in this case`ISO_10918_1`

represents JPEG Lossy Compression)**Pixel Data**(7fe0, 0010) - Array of 161452 elements represents the image pixel data that pydicom uses to convert the pixel data into an image.

What does `PixelData`

look like?

`b'\xfe\xff\x00\xe0\x00\x00\x00\x00\xfe\xff\x00\xe0\x9cv\x02\x00\xff\xd8\xff\xdb\x00C\x00\x03\x02\x02\x02\x02\x02\x03\x02\x02\x02\x03\x03\x03\x03\x04\x06\x04\x04\x04\x04\x04\x08\x06\x06\x05\x06\t\x08\n\n\t\x08\t\t\n\x0c\x0f\x0c\n\x0b\x0e\x0b\t\t\n\x11\n\x0e\x0f\x10\x10\x11\x10\n\x0c\x12\x13\x12\x10\x13\x0f\x10\x10\x10\xff\xc0\x00\x0b\x08\x04\x00\x04\x00\x01\x01\x11\x00\xff\xc4\x00\x1d\x00\x00\x02\x03\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x04\x05\x02\x03\x06\x00\x01\x07\x08\t\xff\xc4\x00R\x10\x00\x02\x01\x03\x03\x02\x04\x03\x06\x05\x04\x00\x04\x01\x02\x17\x01\x02\x11\x00\x03!\x04\x121\x05A\x13"Qa\x06q\x81\x142\x91\xa1\xb1\xf0#B\xc1\xd1\xe1\x07\x15R\xf1\x16$3br\x08%4C&cs\x82\x92\xa2'`


Because of the complexity in interpreting `PixelData`

, pydicom provides an easy way to get it in a convenient form: `pixel_array`

which returns a `numpy.ndarray`

containing the pixel data:

```
(array([[ 0, 0, 0, ..., 13, 13, 5],
[ 0, 0, 0, ..., 13, 13, 5],
[ 0, 0, 0, ..., 13, 12, 5],
...,
[ 0, 0, 0, ..., 5, 3, 0],
[ 0, 0, 0, ..., 6, 4, 0],
[ 0, 0, 0, ..., 8, 5, 0]], dtype=uint8),
(1024, 1024))
```


You can then use the `show`

function to view the image

You can also conveniently create a dataframe with all the `tag`

information as columns for all the images in a dataset by using `from_dicoms`


| SpecificCharacterSet | SOPClassUID | SOPInstanceUID | StudyDate | StudyTime | AccessionNumber | Modality | ConversionType | ReferringPhysicianName | SeriesDescription | ... | LossyImageCompression | LossyImageCompressionMethod | fname | MultiPixelSpacing | PixelSpacing1 | img_min | img_max | img_mean | img_std | img_pct_window | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | ISO_IR 100 | 1.2.840.10008.5.1.4.1.1.7 | 1.2.276.0.7230010.3.1.4.8323329.6904.1517875201.850819 | 19010101 | 000000.00 | CR | WSD | view: PA | ... | 01 | ISO_10918_1 | C:\Users\tijme\.fastai\data\siim_small\train\No Pneumothorax\000000.dcm | 1 | 0.168 | 0 | 254 | 160.398039 | 53.854885 | 0.087029 | ||
| 1 | ISO_IR 100 | 1.2.840.10008.5.1.4.1.1.7 | 1.2.276.0.7230010.3.1.4.8323329.11028.1517875229.983789 | 19010101 | 000000.00 | CR | WSD | view: PA | ... | 01 | ISO_10918_1 | C:\Users\tijme\.fastai\data\siim_small\train\No Pneumothorax\000002.dcm | 1 | 0.143 | 0 | 250 | 114.524713 | 70.752315 | 0.326269 | ||
| 2 | ISO_IR 100 | 1.2.840.10008.5.1.4.1.1.7 | 1.2.276.0.7230010.3.1.4.8323329.11444.1517875232.977506 | 19010101 | 000000.00 | CR | WSD | view: PA | ... | 01 | ISO_10918_1 | C:\Users\tijme\.fastai\data\siim_small\train\No Pneumothorax\000005.dcm | 1 | 0.143 | 0 | 246 | 132.218334 | 73.023531 | 0.266901 | ||
| 3 | ISO_IR 100 | 1.2.840.10008.5.1.4.1.1.7 | 1.2.276.0.7230010.3.1.4.8323329.32219.1517875159.70802 | 19010101 | 000000.00 | CR | WSD | view: PA | ... | 01 | ISO_10918_1 | C:\Users\tijme\.fastai\data\siim_small\train\No Pneumothorax\000006.dcm | 1 | 0.171 | 0 | 255 | 153.405355 | 59.543063 | 0.144505 | ||
| 4 | ISO_IR 100 | 1.2.840.10008.5.1.4.1.1.7 | 1.2.276.0.7230010.3.1.4.8323329.32395.1517875160.396775 | 19010101 | 000000.00 | CR | WSD | view: PA | ... | 01 | ISO_10918_1 | C:\Users\tijme\.fastai\data\siim_small\train\No Pneumothorax\000007.dcm | 1 | 0.171 | 0 | 250 | 166.198407 | 50.008985 | 0.053009 |

5 rows × 42 columns

Next, we need to load the labels for the dataset. We import the *labels.csv* file using pandas and print the first five entries. The **file** column shows the relative path to the *.dcm* file and the **label** column indicates whether the chest x-ray has a pneumothorax or not.

| file | label | |
|---|---|---|
| 0 | train/No Pneumothorax/000000.dcm | No Pneumothorax |
| 1 | train/Pneumothorax/000001.dcm | Pneumothorax |
| 2 | train/No Pneumothorax/000002.dcm | No Pneumothorax |
| 3 | train/Pneumothorax/000003.dcm | Pneumothorax |
| 4 | train/Pneumothorax/000004.dcm | Pneumothorax |

Now, we use the [ DataBlock](https://docs.fast.ai/data.block.html#datablock) class to prepare the DICOM data for training.

As we are dealing with DICOM images, we need to use [ PILDicom](https://docs.fast.ai/medical.imaging.html#pildicom) as the

[category. This is so the](https://docs.fast.ai/vision.data.html#imageblock)

`ImageBlock`

[will know how to open the DICOM images. As this is a binary classification task we will use](https://docs.fast.ai/data.block.html#datablock)

`DataBlock`


`CategoryBlock`

Additionally, we plot a first batch with the specified transformations:

## Training

We can then use the [ vision_learner](https://docs.fast.ai/vision.learner.html#vision_learner) function and initiate the training.

Note that if you do not select a loss or optimizer function, fastai will try to choose the best selection for the task. You can check the loss function by calling `loss_func`


And you can do the same for the optimizer by calling `opt_func`


`<function fastai.optimizer.Adam(params, lr, mom=0.9, sqr_mom=0.99, eps=1e-05, wd=0.01, decouple_wd=True)>`


Use `lr_find`

to try to find the best learning rate

When predicting on an image `learn.predict`

returns a tuple (class, class tensor and [probabilities of each class]).In this dataset there are only 2 classes `No Pneumothorax`

and `Pneumothorax`

hence the reason why each probability has 2 values, the first value is the probability whether the image belongs to `class 0`

or `No Pneumothorax`

and the second value is the probability whether the image belongs to `class 1`

or `Pneumothorax`


## Result Evaluation

Medical models are predominantly high impact so it is important to know how good a model is at detecting a certain condition.

This model has an accuracy of 56%. Accuracy can be defined as the number of correctly predicted data points out of all the data points. However in this context we can define accuracy as the probability that the model is correct and the patient has the condition **PLUS** the probability that the model is correct and the patient does not have the condition

There are some other key terms that need to be used when evaluating medical models:

**False Positive & False Negative**

**False Positive**is an error in which a test result improperly indicates presence of a condition, such as a disease (the result is positive), when in reality it is not present**False Negative**is an error in which a test result improperly indicates no presence of a condition (the result is negative), when in reality it is present

**Sensitivity & Specificity**

**Sensitivity or True Positive Rate**is where the model classifies a patient has the disease given the patient actually does have the disease. Sensitivity quantifies the avoidance of false negatives

Example: A new test was tested on 10,000 patients, if the new test has a sensitivity of 90% the test will correctly detect 9,000 (True Positive) patients but will miss 1000 (False Negative) patients that have the condition but were tested as not having the condition

**Specificity or True Negative Rate**is where the model classifies a patient as not having the disease given the patient actually does not have the disease. Specificity quantifies the avoidance of false positives

[Understanding and using sensitivity, specificity and predictive values](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2636062/) is a great paper if you are interested in learning more about understanding sensitivity, specificity and predictive values.

**PPV and NPV**

Most medical testing is evaluated via **PPV** (Positive Predictive Value) or **NPV** (Negative Predictive Value).

**PPV** - if the model predicts a patient has a condition what is the probability that the patient actually has the condition

**NPV** - if the model predicts a patient does not have a condition what is the probability that the patient actually does not have the condition

The ideal value of the PPV, with a perfect test, is 1 (100%), and the worst possible value would be zero

The ideal value of the NPV, with a perfect test, is 1 (100%), and the worst possible value would be zero

**Confusion Matrix**

The confusion matrix is plotted against the `valid`

dataset

You can also reproduce the results interpreted from plot_confusion_matrix like so:

`23 13 12 2`


Note that **Sensitivity = True Positive/(True Positive + False Negative)**

In this case the model has a sensitivity of 40% and hence is only capable of correctly detecting 40% True Positives (i.e. who have Pneumothorax) but will miss 60% of False Negatives (patients that actually have Pneumothorax but were told they did not! Not a good situation to be in).

This is also know as a **Type II error**

**Specificity = True Negative/(False Positive + True Negative)**

The model has a specificity of 63% and hence can correctly detect 63% of the time that a patient does **not** have Pneumothorax but will incorrectly classify that 37% of the patients have Pneumothorax (False Postive) but actually do not.

This is also known as a **Type I error**

**Positive Predictive Value (PPV)**

In this case the model performs poorly in correctly predicting patients with Pneumothorax

**Negative Predictive Value (NPV)**

This model is better at predicting patients with No Pneumothorax

**Calculating Accuracy**

The accuracy of this model as mentioned before was 56% but how was this calculated? We can consider accuracy as:

**accuracy = sensitivity x prevalence + specificity * (1 - prevalence)**

Where **prevalence** is a statistical concept referring to the number of cases of a disease that are present in a particular population at a given time. The prevalence in this case is how many patients in the valid dataset have the condition compared to the total number.

To view the files in the valid dataset you call `dls.valid_ds.cat`


There are 15 Pneumothorax images in the valid set (which has a total of 50 images and can be checked by using `len(dls.valid_ds)`

) so the prevalence here is 15/50 = 0.3

**Citations:**

[1] *Filice R et al. Crowdsourcing pneumothorax annotations using machine learning annotations on the NIH chest X-ray dataset. J Digit Imaging (2019). https://doi.org/10.1007/s10278-019-00299-9*

---

## Source: https://docs.fast.ai/tutorial.transformers.html

# Transformers

In this tutorial, we will see how we can use the fastai library to fine-tune a pretrained transformer model from the [transformers library](https://github.com/huggingface/transformers) by HuggingFace. We will use the mid-level API to gather the data. Even if this tutorial is self contained, it might help to check the [imagenette tutorial](http://docs.fast.ai/tutorial.imagenette.html) to have a second look on the mid-level API (with a gentle introduction using the higher level APIs) in computer vision.

## Importing a transformers pretrained model

First things first, we will need to install the transformers library. If you haven’t done it yet, install the library:

`!pip install -Uq transformers`


Then let’s import what will need: we will fine-tune the GPT2 pretrained model and fine-tune on wikitext-2 here. For this, we need the `GPT2LMHeadModel`

(since we want a language model) and the `GPT2Tokenizer`

to prepare the data.

We can use several versions of this GPT2 model, look at the [transformers documentation](https://huggingface.co/transformers/pretrained_models.html) for more details. Here we will use the basic version (that already takes a lot of space in memory!) You can change the model used by changing the content of `pretrained_weights`

(if it’s not a GPT2 model, you’ll need to change the classes used for the model and the tokenizer of course).

Before we move on to the fine-tuning part, let’s have a look at this `tokenizer`

and this `model`

. The tokenizers in HuggingFace usually do the tokenization and the numericalization in one step (we ignore the padding warning for now):

`[1212, 318, 281, 1672, 286, 2420, 11, 290]`


Like fastai `Transform`

s, the tokenizer has a `decode`

method to give you back a text from ids:

The model can be used to generate predictions (it is pretrained). It has a `generate`

method that expects a batch of prompt, so we feed it our ids and add one batch dimension (there is a padding warning we can ignore as well):

`Setting `pad_token_id` to `eos_token_id`:50256 for open-end generation.`


The predictions, by default, are of length 20:

```
(torch.Size([1, 20]),
tensor([1212, 318, 281, 1672, 286, 2420, 11, 290, 340, 338, 407, 257,
922, 530, 13, 198, 198, 464, 717, 1517]))
```


We can use the decode method (that prefers a numpy array to a tensor):

## Bridging the gap with fastai

Now let’s see how we can use fastai to fine-tune this model on wikitext-2, using all the training utilities (learning rate finder, 1cycle policy etc…). First, we import all the text utilities:

### Preparing the data

Then we download the dataset (if not present), it comes as two csv files:

`(#2) [Path('/home/jhoward/.fastai/data/wikitext-2/test.csv'),Path('/home/jhoward/.fastai/data/wikitext-2/train.csv')]`


Let’s have a look at what those csv files look like:

| 0 | |
|---|---|
| 0 | \n = 2013 – 14 York City F.C. season = \n \n The 2013 – 14 season was the <unk> season of competitive association football and 77th season in the Football League played by York City Football Club , a professional football club based in York , North Yorkshire , England . Their 17th @-@ place finish in 2012 – 13 meant it was their second consecutive season in League Two . The season ran from 1 July 2013 to 30 June 2014 . \n Nigel Worthington , starting his first full season as York manager , made eight permanent summer signings . By the turn of the year York were only above the relegation z... |
| 1 | \n = Big Boy ( song ) = \n \n " Big Boy " <unk> " I 'm A Big Boy Now " was the first single ever recorded by the Jackson 5 , which was released by Steeltown Records in January 1968 . The group played instruments on many of their Steeltown compositions , including " Big Boy " . The song was neither a critical nor commercial success , but the Jackson family were delighted with the outcome nonetheless . \n The Jackson 5 would release a second single with Steeltown Records before moving to Motown Records . The group 's recordings at Steeltown Records were thought to be lost , but they were re... |
| 2 | \n = The Remix ( Lady Gaga album ) = \n \n The Remix is a remix album by American recording artist Lady Gaga . Released in Japan on March 3 , 2010 , it contains remixes of the songs from her first studio album , The Fame ( 2008 ) , and her third extended play , The Fame Monster ( 2009 ) . A revised version of the track list was prepared for release in additional markets , beginning with Mexico on May 3 , 2010 . A number of recording artists have produced the songs , including Pet Shop Boys , Passion Pit and The Sound of Arrows . The remixed versions feature both uptempo and <unk> composit... |
| 3 | \n = New Year 's Eve ( Up All Night ) = \n \n " New Year 's Eve " is the twelfth episode of the first season of the American comedy television series Up All Night . The episode originally aired on NBC in the United States on January 12 , 2012 . It was written by Erica <unk> and was directed by Beth McCarthy @-@ Miller . The episode also featured a guest appearance from Jason Lee as Chris and Reagan 's neighbor and Ava 's boyfriend , Kevin . \n During Reagan ( Christina Applegate ) and Chris 's ( Will <unk> ) first New Year 's Eve game night , Reagan 's competitiveness comes out causing Ch... |
| 4 | \n = Geopyxis carbonaria = \n \n Geopyxis carbonaria is a species of fungus in the genus Geopyxis , family <unk> . First described to science in 1805 , and given its current name in 1889 , the species is commonly known as the charcoal loving elf @-@ cup , dwarf <unk> cup , <unk> <unk> cup , or pixie cup . The small , <unk> @-@ shaped fruitbodies of the fungus are reddish @-@ brown with a whitish fringe and measure up to 2 cm ( 0 @.@ 8 in ) across . They have a short , tapered stalk . Fruitbodies are commonly found on soil where brush has recently been burned , sometimes in great numbers .... |

We gather all texts in one numpy array (since it will be easier to use this way with fastai):

To process this data to train a model, we need to build a `Transform`

that will be applied lazily. In this case we could do the pre-processing once and for all and only use the transform for decoding (we will see how just after), but the fast tokenizer from HuggingFace is, as its name indicates, fast, so it doesn’t really impact performance to do it this way.

In a fastai `Transform`

you can define:

- an
`encodes`

method that is applied when you call the transform (a bit like the`forward`

method in a`nn.Module`

) - a
`decodes`

method that is applied when you call the`decode`

method of the transform, if you need to decode anything for showing purposes (like converting ids to a text here) - a
`setups`

method that sets some inner state of the`Transform`

(not needed here so we skip it)

Two comments on the code above:

- in
`encodes`

we don’t use the`tokenizer.encode`

method since it does some additional preprocessing for the model after tokenizing and numericalizing (the part throwing a warning before). Here we don’t need any post-processing so it’s fine to skip it. - in
`decodes`

we return aobject and not just a plain string. That’s a fastai class that adds a`TitledStr`

`show`

method to the string, which will allow us to use all the fastai show methods.

You can then group your data with this `Transform`

using a [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists). It has an s in its name because it contains the training and validation set. We indicate the indices of the training set and the validation set with

`splits`

(here all the first indices until `len(df_train)`

and then all the remaining indices):`Token indices sequence length is longer than the specified maximum sequence length for this model (4576 > 1024). Running this sequence through the model will result in indexing errors`


We specify `dl_type=LMDataLoader`

for when we will convert this [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) to

[: we will use an](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

[since we have a language modeling problem, not the usual fastai](https://docs.fast.ai/text.data.html#lmdataloader)

`LMDataLoader`

[.](https://docs.fast.ai/data.core.html#tfmddl)

`TfmdDL`

In a [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) you can access the elements of the training or validation set quite easily:

```
(tensor([220, 198, 796, ..., 198, 220, 198]),
tensor([220, 198, 796, ..., 198, 220, 198]))
```


They look the same but only because they begin and end the same way. We can see the shapes are different:

`(torch.Size([4576]), torch.Size([1485]))`


And we can have a look at both decodes using [ show_at](https://docs.fast.ai/data.core.html#show_at):

```
= 2013 – 14 York City F.C. season =
The 2013 – 14 season was the <unk> season of competitive association football and 77th season in the Football League played by York City Football Club, a professional football club based in York, North Yorkshire, England. Their 17th @-@ place finish in 2012 – 13 meant it was their second consecutive season in League Two. The season ran from 1 July 2013 to 30 June 2014.
Nigel Worthington, starting his first full season as York manager, made eight permanent summer signings. By the turn of the year York were only above the relegation zone on goal difference, before a 17 @-@ match unbeaten run saw the team finish in seventh @-@ place in the 24 @-@ team 2013 – 14 Football League Two. This meant York qualified for the play @-@ offs, and they were eliminated in the semi @-@ final by Fleetwood Town. York were knocked out of the 2013 – 14 FA Cup, Football League Cup and Football League Trophy in their opening round matches.
35 players made at least one appearance in nationally organised first @-@ team competition, and there were 12 different <unk>. Defender Ben Davies missed only five of the fifty @-@ two competitive matches played over the season. Wes Fletcher finished as leading scorer with 13 goals, of which 10 came in league competition and three came in the FA Cup. The winner of the <unk> of the Year award, voted for by the club's supporters, was <unk> Oyebanjo.
= = Background and pre @-@ season = =
The 2012 – 13 season was York City's first season back in the Football League, having won the Conference Premier play @-@ offs in 2011 – 12 after <unk> years in the Football Conference. Manager Gary Mills was sacked in March 2013 following an 11 @-@ match run without a victory, and was replaced by former Northern Ireland manager Nigel Worthington. Despite being in the relegation zone with three matches remaining, Worthington led the team to safety from relegation after a 1 – 0 win away to Dagenham & Redbridge on the final day of the season. York finished the season in 17th @-@ place in the 2012 – 13 League Two table.
Following the previous season's conclusion Lee <unk>, Jon <unk>, Chris <unk>, Ben Everson, Scott Kerr, David <unk>, Patrick <unk>, Michael Potts, Jamie Reed and Jason Walker were released by York, while <unk> Blair departed for Fleetwood Town. David McGurk, <unk> Oyebanjo, Danny Parslow, Tom Platt and Chris Smith signed new contracts with the club. New players signed ahead of the start of the season were goalkeeper Chris <unk> on a season @-@ long loan from Blackpool, defender Ben Davies on loan from Preston North End, midfielders Craig Clay from Chesterfield and Lewis Montrose from Gillingham, winger <unk> Puri from St <unk> and strikers Ryan Bowman from Hereford United, Richard Cresswell from Sheffield United, Wes Fletcher from Burnley and Ryan Jarvis from Torquay United. Defender Mike Atkinson and striker Chris Dickinson entered the first @-@ team squad from the youth team after agreeing professional contracts.
York retained the previous season's home and away kits. The home kit comprised red shirts with white sleeves, light blue shorts and white socks. The away kit included light blue shirts with white sleeves, white shorts and light blue socks. <unk> Health continued as shirt sponsors for the second successive season.
= = Review = =
= = = August = = =
York began the season with a 1 – 0 home win over the previous season's play @-@ off finalists, Northampton Town, with <unk> Jarvis scoring the winning goal in the 90th @-@ minute. However, defeat came in York's match against Championship side Burnley in the first round of the League Cup, going down 4 – 0 at home. The team endured their first league defeat of the season in the following game after being beaten 2 – 0 away by Dagenham & Redbridge, the home team scoring in each half. York then held Hartlepool United to a 0 – 0 home draw, before being beaten 3 – 2 away by Bristol Rovers, in which Jarvis scored twice before John @-@ Joe O 'Toole scored the winning goal for the home team in the 67th @-@ minute. Two signings were made shortly before the transfer deadline ; defender George Taft was signed on a one @-@ month loan from Leicester City, while Middlesbrough midfielder Ryan Brobbel joined on a one @-@ month loan. <unk> John <unk>, who had been told he had no future with the club, departed after signing for FC Halifax Town. Jarvis gave York the lead away at Exeter City before Alan <unk> scored in each half to see the home team win 2 – 1.
= = = September = = =
York suffered their first home league defeat of the season after AFC Wimbledon won 2 – 0, with Michael Smith scoring in each half. Former Ipswich Town midfielder Josh Carson, who had a spell on loan with York the previous season, signed a contract until the end of 2013 – 14 and Sheffield United midfielder Elliott <unk> signed on a one @-@ month loan. Brobbel opened the scoring in the second minute of his home debut against Mansfield Town, although the away team went on to score twice to win 2 – 1. York's run of four defeats ended following a 1 – 1 draw away to Wycombe Wanderers, in which McGurk gave York the lead before the home team levelled through Dean Morgan. Taft was sent back to Leicester after he fell behind McGurk, Parslow and Smith in the pecking order for a central defensive berth. York achieved their first win since the opening day of the season after beating Portsmouth 4 – 2 at home, with Fletcher ( 2 ), Montrose and Jarvis scoring.
= = = October = = =
Defender Luke O 'Neill was signed from Burnley on a 28 @-@ day emergency loan. He made his debut in York's 3 – 0 win away at Torquay, which was the team's first successive win of the season. York were knocked out of the Football League Trophy in the second round after being beaten 3 – 0 at home by League One team Rotherham United, before their winning streak in the league was ended with a 3 – 0 defeat away to Newport County. York drew 2 – 2 away to Chesterfield, having taken a two @-@ goal lead through O 'Neill and Jarvis, before the home team fought back through Armand <unk> and Jay O <unk>. The team then hosted Fleetwood Town, and the visitors won 2 – 0 with goals scored in each half by Gareth Evans and <unk> Matt. Scunthorpe United were beaten 4 – 1 at home to end York's three @-@ match run without a win, with all the team's goals coming in the first half from Carson, Fletcher and Brobbel ( 2 ).
= = = November = = =
Bowman scored his first goals for York away to Cheltenham Town, as York twice fought back from behind to draw 2 – 2. York drew 3 – 3 away to Bristol Rovers to earn a first round replay in the FA Cup, taking the lead through Jarvis before Eliot Richards equalised for the home team. Carson scored a 30 yard volley to put York back in the lead, and after Bristol Rovers goals from Matt <unk> and Chris <unk>, Fletcher scored an 86th @-@ minute equaliser for York. Bowman scored with a header from an O 'Neill cross to open the scoring at home to Plymouth Argyle, which was the first goal the visitors had conceded in 500 minutes of action. However, Plymouth equalised 11 minutes later through <unk> <unk> and the match finished a 1 – 1 draw. York were knocked out of the FA Cup after losing 3 – 2 at home to Bristol Rovers in a first round replay ; the visitors were 3 – 0 up by 50 @-@ minutes before Fletcher pulled two back for York with a penalty and a long @-@ range strike.
Defender Keith Lowe, of Cheltenham, and goalkeeper Nick Pope, of Charlton Athletic, were signed on loan until January 2014. They both played in York's first league defeat in four weeks, 2 – 1 away, to Southend United. <unk> <unk> gave Southend the lead early into the match and Bowman equalised for York with a low strike during the second half, before Luke Prosser scored the winning goal for the home side in stoppage time. With Pope preferred in goal, <unk> returned to Blackpool on his own accord, although his loan agreement would stay in place until January 2014. York then drew 0 – 0 away to Morecambe. After Pope was recalled from his loan by Charlton, York signed Wolverhampton Wanderers goalkeeper Aaron McCarey on loan until January 2014. McCarey kept a clean sheet in York's 0 – 0 home draw with Rochdale.
= = = December = = =
Cresswell retired from playing as a result of an eye complaint and a knee injury. York drew 1 – 1 away to Burton Albion, with an own goal scored by Shane <unk> @-@ <unk> giving York the lead in the 64th @-@ minute before the home team equalised eight minutes later through Billy <unk>. Atkinson was released after failing to force himself into the first team and signed for Scarborough Athletic, with whom he had been on loan. York drew 0 – 0 at home with second @-@ placed Oxford United, in which Carson came closest to scoring with a volley that <unk> across the face of the goal. This was followed by another draw after the match away to Accrington Stanley finished 1 – 1, with the home team <unk> 10 minutes after a Fletcher penalty had given York the lead in the 35th @-@ minute. Striker <unk> McDonald, who had been released by Peterborough United, was signed on a contract until the end of the season. York's last match of 2013 was a 2 – 1 defeat away at Bury, a result that ended York's run of consecutive draws at five. The home team were 2 – 0 up by the 19th @-@ minute, before Michael Coulson scored York's goal in the 73rd @-@ minute. This result meant York would begin 2014 in 22nd @-@ position in the table, only out of the relegation zone on goal difference.
= = = January = = =
Jarvis scored the only goal in York's first win since October 2013, a 1 – 0 home victory over Morecambe on New Year's Day. McCarey was recalled by Wolverhampton Wanderers due to an injury to one of their <unk>, while O 'Neill was recalled by Burnley to take part in their FA Cup match. York achieved back @-@ to @-@ back wins for the first time since October 2013 after Dagenham & Redbridge were beaten 3 – 1 at home, with Bowman opening the scoring in the second half before Fletcher scored twice. Adam Reed, who had a spell on loan with York in the previous season, was signed on a contract until the end of the season after parting company with Burton. Davies'loan was extended, while Brobbel and <unk> returned to their parent clubs. Cheltenham club captain Russell Penn, a midfielder, was signed on a two @-@ and @-@ a @-@ half @-@ year contract for an undisclosed fee. Lowe was subsequently signed permanently from Cheltenham on a two @-@ and @-@ a @-@ half @-@ year contract for an undisclosed fee. Having been allowed to leave the club on a free transfer, Ashley Chambers signed for Conference Premier club Cambridge United.
York achieved three successive wins for the first time in 2013 – 14 after beating Northampton 2 – 0 away, with Bowman and Fletcher scoring in three @-@ second half minutes. Defender John McCombe was signed on a two @-@ and @-@ a @-@ half @-@ year contract following his release from Mansfield, before Clay and Jamal <unk> left York by mutual consent. Pope returned to York on loan from Charlton for the remainder of the season. York's run of wins ended with a 0 – 0 draw at home to Bristol Rovers, before their first defeat of the year came after losing 2 – 0 away to Hartlepool. Preston winger Will Hayhurst, a Republic of Ireland under @-@ 21 international, was signed on a one @-@ month loan. York fell to a successive defeat for the first time since September 2013 after being beaten 2 – 0 at home by Chesterfield. Shortly after the match, Smith left the club by mutual consent to pursue first @-@ team football.
= = = February = = =
Fletcher scored a 90th @-@ minute winner for York away to Fleetwood in a 2 – 1 win, a result that ended Fleetwood's five @-@ match unbeaten run. York then drew 0 – 0 at home to fellow mid @-@ table team Cheltenham, before beating Plymouth 4 – 0 away with goals from Fletcher, McCombe ( 2 ) and Carson as the team achieved successive away wins for the first time in 2013 – 14. York went without scoring for a fourth consecutive home match after drawing 0 – 0 with Southend. Having worn the <unk> since an injury to McGurk, Penn was appointed captain for the rest of the season, a position that had earlier been held by Smith and Parslow.
= = = March = = =
York achieved their first home win in five matches after beating Exeter 2 – 1, with first half goals scored by McCombe and Coulson. Hayhurst's loan was extended to the end of the season, having impressed in his six appearances for the club. Coulson scored again with the only goal, a 41st @-@ minute header, in York's 1 – 0 away win over AFC Wimbledon. Bowman scored the only goal with a 32nd @-@ minute penalty as York won 1 – 0 away against Mansfield, in which Fletcher missed the opportunity to extend the lead when his stoppage time penalty was saved by Alan Marriott. York moved one place outside the play @-@ offs with a 2 – 0 home win over Wycombe, courtesy of a second Bowman penalty in as many matches and a Carson goal from the edge of the penalty area. Coulson scored York's only goal in a 1 – 0 away win over struggling Portsmouth with a low volley in the fifth @-@ minute ; this result meant York moved into the play @-@ offs in seventh @-@ place with eight fixtures remaining.
Striker Calvin Andrew, who had been released by Mansfield in January 2014, was signed on a contract for the remainder of the season. He made his debut as a substitute in York's 1 – 0 home win over bottom of the table Torquay, in which Hayhurst scored the only goal in the 11th @-@ minute with an 18 yard shot that <unk> off Aaron <unk>. Middlesbrough winger Brobbel rejoined on loan until the end of the season, following an injury to Carson. York's run of successive wins ended on six matches after a 0 – 0 home draw with Burton, and this result saw York drop out of the play @-@ offs in eighth @-@ place. With the team recording six wins and one draw in March 2014, including six clean sheets, Worthington was named League Two Manager of the Month.
= = = April = = =
Pope made a number of saves as York held league leaders Rochdale to a 0 – 0 away draw, with a point being enough to lift the team back into seventh @-@ place. York were prevented from equalling a club record of eight consecutive clean sheets when Accrington scored a stoppage time equaliser in a 1 – 1 home draw, in which York had taken earlier taken the lead with a Coulson penalty. A 1 – 0 win away win over Oxford, which was decided by a second half Coulson penalty, resulted in York moving one place above their opponents and back into seventh @-@ place. York consolidated their place in a play @-@ off position after beating Bury 1 – 0 at home with a fifth @-@ minute goal scored by Lowe from a Hayhurst corner. The result meant York opened up a five @-@ point lead over eighth @-@ placed Oxford with two fixtures remaining. A place in the League Two play @-@ offs was secured following a 1 – 0 win over Newport at home, in which Coulson scored the only goal in the 77th @-@ minute with a 25 yard free kick. Pope earned a nomination for League Two Player of the Month for April 2014, having conceded only one goal in five matches in that period.
= = = May = = =
The league season concluded with an away match against divisional runners @-@ up Scunthorpe ; having gone two goals down York fought back to draw 2 – 2 with goals scored by Brobbel and Andrew. This result meant York finished the season in seventh @-@ place in League Two, and would thus play fourth @-@ placed Fleetwood in the play @-@ off semi @-@ final on the back of a 17 @-@ match unbeaten run. York lost 1 – 0 to Fleetwood in the first leg at <unk> Crescent ; the goal came from former York player <unk> Blair in the 50th @-@ minute, who scored from close range after Antoni <unk>'s shot was blocked on the line. A 0 – 0 draw away to Fleetwood in the second leg meant York were eliminated 1 – 0 on aggregate, ending the prospect of a second promotion in three seasons. At an awards night held at York Racecourse, Oyebanjo was voted <unk> of the Year for 2013 – 14.
= = Summary and aftermath = =
York mostly occupied the bottom half of the table before the turn of the year, and dropped as low as 23rd in September 2013. During February 2014 the team broke into the top half of the table and with one match left were in sixth @-@ place. York's defensive record was the third best in League Two with 41 goals conceded, bettered only by Southend ( 39 ) and Chesterfield ( 40 ). Davies made the highest number of appearances over the season, appearing in 47 of York's 52 matches. Fletcher was York's top scorer in the league and in all competitions, with 10 league goals and 13 in total. He was the only player to reach double figures, and was followed by Jarvis with nine goals.
After the season ended York released Tom Allan, Andrew, Dickinson, McDonald, Puri and Reed, while McGurk retired from professional football. Bowman and Oyebanjo left to sign for Torquay and Crawley Town respectively while Coulson signed a new contract with the club. York's summer signings included goalkeeper Jason <unk> from Tranmere Rovers, defenders <unk> <unk> from Dagenham, Marvin McCoy from Wycombe and Dave Winfield from Shrewsbury Town, midfielders <unk> <unk> from Mansfield, Anthony <unk> from Southend and Luke <unk> from Shrewsbury and striker Jake Hyde from <unk>.
= = Match details = =
League positions are sourced by <unk>, while the remaining information is referenced individually.
= = = Football League Two = = =
= = = League table ( part ) = = =
= = = FA Cup = = =
= = = League Cup = = =
= = = Football League Trophy = = =
= = = Football League Two play @-@ offs = = =
= = <unk> = =
= = = In = = =
<unk> around club names denote the player's contract with that club had expired before he joined York.
= = = Out = = =
<unk> around club names denote the player joined that club after his York contract expired.
= = = Loan in = = =
= = = Loan out = = =
= = Appearances and goals = =
Source :
Numbers in parentheses denote appearances as substitute.
Players with names struck through and marked left the club during the playing season.
Players with names in italics and marked * were on loan from another club for the whole of their season with York.
Players listed with no appearances have been in the <unk> squad but only as unused <unk>.
Key to positions : <unk> – <unk> ; <unk> – Defender ; <unk> – <unk> ; <unk> – Forward
```


```
= Tropical Storm <unk> ( 2008 ) =
Tropical Storm <unk> was the tenth tropical storm of the 2008 Atlantic hurricane season. <unk> developed out of a strong tropical wave which moved off the African coast on August 31. The wave quickly became organized and was declared Tropical Depression Ten while located 170 mi ( 270 km ) to the south @-@ southeast of the Cape Verde Islands on September 2. The depression was quickly upgraded to Tropical Storm <unk> around noon the same day. Over the next several days, <unk> moved in a general west @-@ northwest direction and reached its peak intensity early on September 3. Strong wind shear, some due to the outflow of Hurricane Ike, and dry air caused the storm to weaken. On September 6, the combination of wind shear, dry air, and cooling waters caused <unk> to weaken into a tropical depression. <unk> deteriorated into a remnant low shortly after as convection continued to dissipate around the storm. The low ultimately dissipated while located 520 mi ( 835 km ) east of <unk> on September 10. However, the remnant moisture led to minor flooding on the island of St. Croix.
= = Meteorological history = =
Tropical Storm <unk> formed as a tropical wave that emerged off the west coast of Africa near the end of August 2008. It tracked south of Cape Verde and slowly developed, and on September 2 the disturbance became Tropical Depression Ten while located south @-@ southeast of the Cape Verde islands. As the depression became more organized, an eye @-@ like feature developed in the upper levels of the system. The depression was upgraded to Tropical Storm <unk> six hours after forming. <unk> was located in an area which was supportive for rapid intensification but was not forecast to intensify quickly.
<unk> continued to intensify throughout the afternoon as the storm became more symmetrical. However, due to the location of the storm, there was a lack of accurate wind speed readings, and the National Hurricane Center was uncertain of its actual intensity. Despite the lack of wind shear around the storm, the center became slightly exposed and ceased further intensification. The storm was also heading into an area where shear was <unk> to significantly increase due to an upper @-@ level trough diving southward. Despite convection being partially removed from the center of <unk>, the storm intensified slightly in the early morning hours on September 3 as thunderstorm activity to the south of the center became more organized. The intensification was forecast to be short in duration as the trough to the north was deepening, causing the wind shear to the west to become stronger.
<unk> reached its peak intensity of 65 mph ( 100 km / h ) around 8 a.m. ( <unk> ) as it continued to become more organized. However, there were indications that it had already begun to weaken. <unk> towards the north was becoming restricted and arc clouds began emanating from the storm, a sign that dry air was entering the system. During the afternoon hours, the structure of <unk> began to rapidly deteriorate as strong wind shear and dry air took their toll. By the late night, the center was almost completely exposed and only a band of convection persisted near the center.
Despite continuing effects from the strong wind shear, a large, deep burst of convection formed in the northern <unk> of <unk>. The center was found to have shifted towards the new convection leading to an increase in intensity. The forecast showed a slight decrease in wind shear as <unk> continued westward and no change in intensity over the 5 @-@ day forecast was predicted. However, the convection decreased once more and the low became completely exposed by the late morning hours and <unk> weakened again. By the afternoon, the center of <unk> was only a <unk> of clouds, devoid of convection. During the overnight hours on September 4 into the morning of September 5, convection associated with <unk> began to <unk> somewhat, mostly to the north of the circulation, due to the strong <unk> wind shear. By mid @-@ morning, <unk> re @-@ intensified slightly due to the redevelopment of some convection. However, the redevelopment was short lived and wind shear again took its toll on <unk> by late morning. The convection around the system became <unk> from the center and <unk> weakened slightly.
The weakening trend continued through the afternoon as the storm was being affected by strong <unk> shear. <unk> became almost fully devoid of any convection by mid @-@ afternoon and the storm weakened to 40 mph ( 65 km / h ), barely holding on to tropical storm status. <unk> regained a small amount of convection in the late night hours, but not enough to still be classified a tropical storm. Due to the lack of convection, <unk> was downgraded to a Tropical Depression at <unk> ( <unk> ) with winds of 35 mph ( 55 km / h ). Since there was no convection around the system, it would have normally been classified a remnant low but, due to the possibility of the storm <unk> over the next several days, it was considered a tropical depression. The next morning, <unk> was downgraded to a remnant low as strong wind shear and dry air caused the demise of the storm. No redevelopment was expected with <unk> as it began to move over colder waters and remain under strong wind shear until it dissipated.
However, the remnant low associated with <unk> began to show signs of redevelopment during the afternoon on September 7. <unk> around the system increased significantly and the low was no longer exposed. On September 8, wind shear took over the system again. <unk> around the remnant low was torn away and the low was exposed once more. The National Hurricane Center did not state the chance of regeneration once the low became exposed. Finally, on September 9, wind shear and dry air led to the remnants of <unk> deteriorating into an open wave. However, on September 10, the remnants of <unk> redeveloped and global models picked up on the reformed system. Once more, the chance of regeneration was possible as the remnants of <unk> headed towards the Bahamas. However, on September 14, dry air and wind shear caused the remnants to dissipate entirely.
= = Impact = =
As <unk> passed to the south of the Cape Verde islands on September 2, outer rain bands produced minor rainfall, totaling around 0 @.@ 55 inches ( 14 mm ). There were no reports of damage or flooding from the rain and overall effects were minor.
Several days after the low dissipated, the remnant moisture from <unk> brought showers and thunderstorms to St. Croix where up to 1 in ( 25 @.@ 4 mm ) of rain fell. The heavy rains led to minor street flooding and some urban flooding. No known damage was caused by the flood.
```


The fastai library expects the data to be assembled in a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object (something that has a training and validation dataloader). We can get one by using the

`dataloaders`

method. We just have to specify a batch size and a sequence length. We’ll train with sequences of size 256 (GPT2 used sequence length 1024, but not everyone has enough GPU RAM for that):Note that you may have to reduce the batch size depending on your GPU RAM.

In fastai, as soon as we have a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders), we can use

[to have a look at the data (here texts for inputs, and the same text shifted by one token to the right for validation):](https://docs.fast.ai/data.core.html#show_batch)

`show_batch`

| text | text_ | |
|---|---|---|
| 0 | \n = Jacqueline Fernandez = \n \n Jacqueline Fernandez ( born 11 August 1985 ) is a Sri Lankan actress, former model, and the winner of the 2006 Miss Universe Sri Lanka pageant. As Miss Universe Sri Lanka she represented her country at the 2006 world Miss Universe pageant. She graduated with a degree in mass communication from the University of Sydney, and worked as a television reporter in Sri Lanka. \n While on a modelling assignment in India in 2009, Fernandez successfully auditioned for <unk> <unk>'s fantasy drama <unk>, which marked her acting debut. Fernandez'breakthrough role was in <unk> <unk>'s psychological thriller Murder 2 ( 2011 ), her first commercial success. This was followed by glamorous roles in the ensemble @-@ comedy Housefull 2 ( 2012 ) and its sequel Housefull 3, and the action thriller Race 2 ( 2013 ), all of which were box @-@ office | \n = Jacqueline Fernandez = \n \n Jacqueline Fernandez ( born 11 August 1985 ) is a Sri Lankan actress, former model, and the winner of the 2006 Miss Universe Sri Lanka pageant. As Miss Universe Sri Lanka she represented her country at the 2006 world Miss Universe pageant. She graduated with a degree in mass communication from the University of Sydney, and worked as a television reporter in Sri Lanka. \n While on a modelling assignment in India in 2009, Fernandez successfully auditioned for <unk> <unk>'s fantasy drama <unk>, which marked her acting debut. Fernandez'breakthrough role was in <unk> <unk>'s psychological thriller Murder 2 ( 2011 ), her first commercial success. This was followed by glamorous roles in the ensemble @-@ comedy Housefull 2 ( 2012 ) and its sequel Housefull 3, and the action thriller Race 2 ( 2013 ), all of which were box @-@ office successes. |
| 1 | small farms in between small residential subdivisions. In the community of Freeland, M @-@ 47 runs near the <unk> International Airport off Freeland Road. North of town, M @-@ 47 leaves Midland Road and becomes a freeway near <unk> Park. The freeway section of M @-@ 47 runs through rural farm land. There is a diamond interchange with <unk> Road before the terminal interchange at US 10. \n As part of its maintenance duties, the Michigan Department of Transportation ( MDOT ) tracks the volume of traffic on the highways it maintains. This number is expressed in terms of annual average daily traffic ( AADT ), a calculation of the average traffic for a segment of roadway on any average day of the year. In 2009, the department measured a peak of 19 @,@ <unk> vehicles daily on the stretch north of <unk> Road. The section south of the | farms in between small residential subdivisions. In the community of Freeland, M @-@ 47 runs near the <unk> International Airport off Freeland Road. North of town, M @-@ 47 leaves Midland Road and becomes a freeway near <unk> Park. The freeway section of M @-@ 47 runs through rural farm land. There is a diamond interchange with <unk> Road before the terminal interchange at US 10. \n As part of its maintenance duties, the Michigan Department of Transportation ( MDOT ) tracks the volume of traffic on the highways it maintains. This number is expressed in terms of annual average daily traffic ( AADT ), a calculation of the average traffic for a segment of roadway on any average day of the year. In 2009, the department measured a peak of 19 @,@ <unk> vehicles daily on the stretch north of <unk> Road. The section south of the US |

Another way to gather the data is to preprocess the texts once and for all and only use the transform to decode the tensors to texts:

Now we change the previous [ Tokenizer](https://docs.fast.ai/text.core.html#tokenizer) like this:

In the `encodes`

method, we still account for the case where we get something that’s not already tokenized, just in case we were to build a dataset with new texts using this transform.

And we can check it still works properly for showing purposes:

| text | text_ | |
|---|---|---|
| 0 | \n = Otra Nota = \n \n Otra Nota ( English : Another Note ) is the debut album by American singer Marc Anthony that was released on January 26, 1993, by RMM Records. Produced by Sergio George, it was the first album by Anthony to record in salsa after starting his career as a freestyle musician. Recording of the album began after Anthony asked RMM president Ralph Mercado to record Juan Gabriel's " Hasta Que Te Conocí " in salsa after hearing it on the radio during a taxi ride. Recorded on a low budget, the album peaked at No. 2 on the Billboard Tropical Albums chart and reached No. 30 on the Billboard Top Latin Albums chart. \n The album was well received by critics who complimented George's production and Anthony's youthful voice. Anthony received two awards for " Best New Artists " at the Billboard Latin | \n = Otra Nota = \n \n Otra Nota ( English : Another Note ) is the debut album by American singer Marc Anthony that was released on January 26, 1993, by RMM Records. Produced by Sergio George, it was the first album by Anthony to record in salsa after starting his career as a freestyle musician. Recording of the album began after Anthony asked RMM president Ralph Mercado to record Juan Gabriel's " Hasta Que Te Conocí " in salsa after hearing it on the radio during a taxi ride. Recorded on a low budget, the album peaked at No. 2 on the Billboard Tropical Albums chart and reached No. 30 on the Billboard Top Latin Albums chart. \n The album was well received by critics who complimented George's production and Anthony's youthful voice. Anthony received two awards for " Best New Artists " at the Billboard Latin Music |
| 1 | reactions and prejudices ", which leaves no room for any further interest. Donoghue complained that Lessing has not made up her mind on whether her characters are " the salt of the earth or its <unk> ". In a review in the Chicago Tribune, Kuehn felt that the work has little impact and is not memorable. He said Lessing's real interest is character development, but complained that the characters are " trivial or two @-@ dimensional or crippled by self @-@ <unk> ". \n The Good Terrorist was shortlisted for the 1985 Booker Prize, and in 1986 won the <unk> Prize and the <unk> Smith Literary Award. In 2007 Lessing was awarded the Nobel Prize in Literature for being " part of both the history of literature and living literature ". In the award ceremony speech by Swedish writer Per <unk>, The Good Terrorist was cited as " an | and prejudices ", which leaves no room for any further interest. Donoghue complained that Lessing has not made up her mind on whether her characters are " the salt of the earth or its <unk> ". In a review in the Chicago Tribune, Kuehn felt that the work has little impact and is not memorable. He said Lessing's real interest is character development, but complained that the characters are " trivial or two @-@ dimensional or crippled by self @-@ <unk> ". \n The Good Terrorist was shortlisted for the 1985 Booker Prize, and in 1986 won the <unk> Prize and the <unk> Smith Literary Award. In 2007 Lessing was awarded the Nobel Prize in Literature for being " part of both the history of literature and living literature ". In the award ceremony speech by Swedish writer Per <unk>, The Good Terrorist was cited as " an in |

### Fine-tuning the model

The HuggingFace model will return a tuple in outputs, with the actual predictions and some additional activations (should we want to use them in some regularization scheme). To work inside the fastai training loop, we will need to drop those using a [ Callback](https://docs.fast.ai/callback.core.html#callback): we use those to alter the behavior of the training loop.

Here we need to write the event `after_pred`

and replace `self.learn.pred`

(which contains the predictions that will be passed to the loss function) by just its first element. In callbacks, there is a shortcut that lets you access any of the underlying [ Learner](https://docs.fast.ai/learner.html#learner) attributes so we can write

`self.pred[0]`

instead of `self.learn.pred[0]`

. That shortcut only works for read access, not write, so we have to write `self.learn.pred`

on the right side (otherwise we would set a `pred`

attribute in the [).](https://docs.fast.ai/callback.core.html#callback)

`Callback`

Of course we could make this a bit more complex and add some penalty to the loss using the other part of the tuple of predictions, like the [ RNNRegularizer](https://docs.fast.ai/callback.rnn.html#rnnregularizer).

Now, we are ready to create our [ Learner](https://docs.fast.ai/learner.html#learner), which is a fastai object grouping data, model and loss function and handles model training or inference. Since we are in a language model setting, we pass perplexity as a metric, and we need to use the callback we just defined. Lastly, we use mixed precision to save every bit of memory we can (and if you have a modern GPU, it will also make training faster):

We can check how good the model is without any fine-tuning step (spoiler alert, it’s pretty good!)

This lists the validation loss and metrics (so 26.6 as perplexity is kind of amazing).

Now that we have a [ Learner](https://docs.fast.ai/learner.html#learner) we can use all the fastai training loop capabilities: learning rate finder, training with 1cycle etc…

The learning rate finder curve suggests picking something between 1e-4 and 1e-3.

| epoch | train_loss | valid_loss | perplexity | time |
|---|---|---|---|---|
| 0 | 2.986238 | 2.721945 | 15.209874 | 04:56 |

Now with just one epoch of fine-tuning and not much regularization, our model did not really improve since it was already amazing. To have a look at some generated texts, let’s take a prompt that looks like a wikipedia article:

| 0 | |
|---|---|
| 0 | \n = Tropical Storm <unk> ( 2008 ) = \n \n Tropical Storm <unk> was the tenth tropical storm of the 2008 Atlantic hurricane season . <unk> developed out of a strong tropical wave which moved off the African coast on August 31 . The wave quickly became organized and was declared Tropical Depression Ten while located 170 mi ( 270 km ) to the south @-@ southeast of the Cape Verde Islands on September 2 . The depression was quickly upgraded to Tropical Storm <unk> around noon the same day . Over the next several days , <unk> moved in a general west @-@ northwest direction and reached its peak... |

Article seems to begin with new line and the title between = signs, so we will mimic that:

The prompt needs to be tokenized and numericalized, so we use the same function as before to do this, before we use the `generate`

method of the model.

`torch.Size([1, 21])`


`Setting `pad_token_id` to `eos_token_id`:50256 for open-end generation.`

---

## Source: https://docs.fast.ai/tutorial.wikitext.html

# Wikitext data tutorial

Using

`Datasets`

, `Pipeline`

, `TfmdLists`

and `Transform`

in text
In this tutorial, we explore the mid-level API for data collection in the text application. We will use the bases introduced in the [pets tutorial](http://docs.fast.ai/tutorial.pets.html) so you should be familiar with `Transform`

, `Pipeline`

, [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists) and

[already.](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

## Data

The dataset comes with the articles in two csv files, so we read it and concatenate them in one dataframe.

| 0 | |
|---|---|
| 0 | \n = 2013 – 14 York City F.C. season = \n \n The 2013 – 14 season was the <unk> season of competitive association football and 77th season in the Football League played by York City Football Club , a professional football club based in York , North Yorkshire , England . Their 17th @-@ place finish in 2012 – 13 meant it was their second consecutive season in League Two . The season ran from 1 July 2013 to 30 June 2014 . \n Nigel Worthington , starting his first full season as York manager , made eight permanent summer signings . By the turn of the year York were only above the relegation z... |
| 1 | \n = Big Boy ( song ) = \n \n " Big Boy " <unk> " I 'm A Big Boy Now " was the first single ever recorded by the Jackson 5 , which was released by Steeltown Records in January 1968 . The group played instruments on many of their Steeltown compositions , including " Big Boy " . The song was neither a critical nor commercial success , but the Jackson family were delighted with the outcome nonetheless . \n The Jackson 5 would release a second single with Steeltown Records before moving to Motown Records . The group 's recordings at Steeltown Records were thought to be lost , but they were re... |
| 2 | \n = The Remix ( Lady Gaga album ) = \n \n The Remix is a remix album by American recording artist Lady Gaga . Released in Japan on March 3 , 2010 , it contains remixes of the songs from her first studio album , The Fame ( 2008 ) , and her third extended play , The Fame Monster ( 2009 ) . A revised version of the track list was prepared for release in additional markets , beginning with Mexico on May 3 , 2010 . A number of recording artists have produced the songs , including Pet Shop Boys , Passion Pit and The Sound of Arrows . The remixed versions feature both uptempo and <unk> composit... |
| 3 | \n = New Year 's Eve ( Up All Night ) = \n \n " New Year 's Eve " is the twelfth episode of the first season of the American comedy television series Up All Night . The episode originally aired on NBC in the United States on January 12 , 2012 . It was written by Erica <unk> and was directed by Beth McCarthy @-@ Miller . The episode also featured a guest appearance from Jason Lee as Chris and Reagan 's neighbor and Ava 's boyfriend , Kevin . \n During Reagan ( Christina Applegate ) and Chris 's ( Will <unk> ) first New Year 's Eve game night , Reagan 's competitiveness comes out causing Ch... |
| 4 | \n = Geopyxis carbonaria = \n \n Geopyxis carbonaria is a species of fungus in the genus Geopyxis , family <unk> . First described to science in 1805 , and given its current name in 1889 , the species is commonly known as the charcoal loving elf @-@ cup , dwarf <unk> cup , <unk> <unk> cup , or pixie cup . The small , <unk> @-@ shaped fruitbodies of the fungus are reddish @-@ brown with a whitish fringe and measure up to 2 cm ( 0 @.@ 8 in ) across . They have a short , tapered stalk . Fruitbodies are commonly found on soil where brush has recently been burned , sometimes in great numbers .... |

We could tokenize it based on spaces to compare (as is usually done) but here we’ll use the standard fastai tokenizer.

```
/home/jhoward/anaconda3/lib/python3.7/site-packages/numpy/core/_asarray.py:83: VisibleDeprecationWarning: Creating an ndarray from ragged nested sequences (which is a list-or-tuple of lists-or-tuples-or ndarrays with different lengths or shapes) is deprecated. If you meant to do this, you must specify 'dtype=object' when creating the ndarray
return array(a, dtype, copy=False, order=order)
```


| text | text_ | |
|---|---|---|
| 0 | xxbos = xxmaj mexico xxmaj city xxmaj metropolitan xxmaj cathedral = \n▁\n▁ xxmaj the xxmaj metropolitan xxmaj cathedral of the xxmaj assumption of the xxmaj most xxmaj blessed xxmaj virgin xxmaj mary into xxmaj heaven ( xxmaj spanish : xxunk xxunk de la xxunk de la xxmaj santísima xxunk xxmaj maría a los xxunk ) is the largest cathedral in the xxmaj americas , and seat of the xxmaj roman xxmaj catholic | = xxmaj mexico xxmaj city xxmaj metropolitan xxmaj cathedral = \n▁\n▁ xxmaj the xxmaj metropolitan xxmaj cathedral of the xxmaj assumption of the xxmaj most xxmaj blessed xxmaj virgin xxmaj mary into xxmaj heaven ( xxmaj spanish : xxunk xxunk de la xxunk de la xxmaj santísima xxunk xxmaj maría a los xxunk ) is the largest cathedral in the xxmaj americas , and seat of the xxmaj roman xxmaj catholic xxmaj |
| 1 | , who had campaigned for a negotiated peace with xxmaj nazi xxmaj germany , was interned by the xxmaj british xxmaj authorities under xxmaj defence xxmaj regulation xxunk , along with most other active fascists in xxmaj britain . xxmaj lady xxmaj mosley was imprisoned a month later . xxmaj max and his brother xxmaj alexander were not included in this internship and as a result were separated from their parents for | who had campaigned for a negotiated peace with xxmaj nazi xxmaj germany , was interned by the xxmaj british xxmaj authorities under xxmaj defence xxmaj regulation xxunk , along with most other active fascists in xxmaj britain . xxmaj lady xxmaj mosley was imprisoned a month later . xxmaj max and his brother xxmaj alexander were not included in this internship and as a result were separated from their parents for the |
| 2 | jewish xxmaj question to the xxmaj jewish xxmaj state : xxmaj an xxmaj essay on the xxmaj theory of xxmaj zionism ( thesis ) , xxmaj princeton xxmaj university . \n▁\n▁ = = = xxmaj articles and chapters = = = \n▁\n▁ " xxunk and the xxmaj palestine xxmaj question : xxmaj the not - so - strange xxmaj case of xxmaj joan xxmaj peter 's ' xxmaj from xxmaj time xxmaj | xxmaj question to the xxmaj jewish xxmaj state : xxmaj an xxmaj essay on the xxmaj theory of xxmaj zionism ( thesis ) , xxmaj princeton xxmaj university . \n▁\n▁ = = = xxmaj articles and chapters = = = \n▁\n▁ " xxunk and the xxmaj palestine xxmaj question : xxmaj the not - so - strange xxmaj case of xxmaj joan xxmaj peter 's ' xxmaj from xxmaj time xxmaj immemorial |

## Model

| epoch | train_loss | valid_loss | accuracy | perplexity | time |
|---|---|---|---|---|---|
| 0 | 5.503713 | 5.095897 | 0.237340 | 163.350342 | 02:07 |

---

## Source: https://docs.fast.ai/tutorial.distributed.html

# Notebook distributed training

`Accelerate`

to launch a training script from your notebook
## Overview

In this tutorial we will see how to use [Accelerate](https://github.com/huggingface/accelerate) to launch a training function on a distributed system, from inside your **notebook**!

To keep it easy, this example will follow training PETs, showcasing how all it takes is 3 new lines of code to be on your way!

## Setting up imports and building the DataLoaders

First, make sure that Accelerate is installed on your system by running:

In your code, along with the normal `from fastai.module.all import *`

imports two new ones need to be added:

The first brings in the [ Learner.distrib_ctx](https://docs.fast.ai/distributed.html#learner.distrib_ctx) context manager. The second brings in Accelerate’s

[notebook_launcher](https://huggingface.co/docs/accelerate/launcher), the key function we will call to run what we want.

We need to setup `Accelerate`

to use all of our GPUs. We can do so quickly with `write_basic_config ()`

:

Since this checks `torch.cuda.device_count`

, you will need to restart your notebook and skip calling this again to continue. It only needs to be ran once! Also if you choose not to use this run `accelerate config`

from the terminal and set `mixed_precision`

to `no`


Next let’s download some data to train on. You don’t need to worry about using [ rank0_first](https://docs.fast.ai/distributed.html#rank0_first), as since we’re in our Jupyter Notebook it will only run on one process like normal:

We wrap the creation of the [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders), our

[, and call to](https://docs.fast.ai/vision.learner.html#vision_learner)

`vision_learner`

`fine_tune`

inside of a `train`

function.It is important to **not** build the [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) outside of the function, as absolutely

*nothing*can be loaded onto CUDA beforehand.

The last addition to the `train`

function needed is to use our context manager before calling `fine_tune`

and setting `in_notebook`

to `True`

:

for this example `sync_bn`

is disabled for compatibility purposes with `torchvision`

’s resnet34

def train(path):
dls = ImageDataLoaders.from_name_func(
path, get_image_files(path), valid_pct=0.2,
label_func=get_y, item_tfms=Resize(224))
learn = vision_learner(dls, resnet34, metrics=error_rate).to_fp16()
with learn.distrib_ctx(sync_bn=False, in_notebook=True):
learn.fine_tune(1)
learn.export("pets")


Finally, just call `notebook_launcher`

, passing in the training function, any arguments as a tuple, and the number of GPUs (processes) to use:

```
Launching training on 2 GPUs.
Training Learner...
```


| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.342019 | 0.228441 | 0.105041 | 00:54 |

| epoch | train_loss | valid_loss | error_rate | time |
|---|---|---|---|---|
| 0 | 0.197188 | 0.141764 | 0.062246 | 00:56 |

Afterwards we can import our exported [ Learner](https://docs.fast.ai/learner.html#learner), save, or anything else we may want to do in our Jupyter Notebook outside of a distributed process

---

## Source: https://docs.fast.ai/tutorial.albumentations.html

# Custom transforms

`Datasets`

, `Pipeline`

, `TfmdLists`

and `Transform`

in computer vision
## Overview

### Creating your own `Transform`


Creating your own `Transform`

is way easier than you think. In fact, each time you have passed a label function to the data block API or to [ ImageDataLoaders.from_name_func](https://docs.fast.ai/vision.data.html#imagedataloaders.from_name_func), you have created a

`Transform`

without knowing it. At its base, a `Transform`

is just a function. Let’s show how you can easily add a transform by implementing one that wraps a data augmentation from the [albumentations library](https://github.com/albumentations-team/albumentations).

First things first, you will need to install the albumentations library. Uncomment the following cell to do so if needed:

Then it’s going to be easier to see the result of the transform on a color image bigger than the mnist one we had before, so let’s load something from the PETS dataset.

We can still open it with `PILIlmage.create`

:

We will show how to wrap one transform, but you can as easily wrap any set of transforms you wrapped in a `Compose`

method. Here let’s do some `ShiftScaleRotate`

:

The albumentations transform work on numpy images, so we just convert our [ PILImage](https://docs.fast.ai/vision.core.html#pilimage) to a numpy array before wrapping it back in

`PILImage.create`

(this function takes filenames as well as arrays or tensors).We can pass this function each time a `Transform`

is expected and the fastai library will automatically do the conversion. That’s because you can directly pass such a function to create a `Transform`

:

If you have some state in your transform, you might want to create a subclass of `Transform`

. In that case, the function you want to apply should be written in the `encodes`

method (the same way you implement `forward`

for PyTorch module):

We also added a type annotation: this will make sure this transform is only applied to [ PILImage](https://docs.fast.ai/vision.core.html#pilimage)s and their subclasses. For any other object, it won’t do anything. You can also write as many

`encodes`

method you want with different type-annotations and the `Transform`

will properly dispatch the objects it receives.This is because in practice, the transform is often applied as an `item_tfms`

(or a `batch_tfms`

) that you pass in the data block API. Those items are a tuple of objects of different types, and the transform may have different behaviors on each part of the tuple.

Let’s check here how this works:

The transform was applied over the tuple `(img, "dog")`

. `img`

is a [ PILImage](https://docs.fast.ai/vision.core.html#pilimage), so it applied the

`encodes`

method we wrote. `"dog"`

is a string, so the transform did nothing to it.Sometimes however, you need your transform to take your tuple as whole: for instance albumentations is applied simultaneously on images and segmentation masks. In this case you need to subclass `ItemTransfrom`

instead of `Transform`

. Let’s see how this works:

We then write a subclass of `ItemTransform`

that can wrap any albumentations augmentation transform, but only for a segmentation problem:

And we can check how it gets applied on the tuple `(img, mask)`

. This means you can pass it as an `item_tfms`

in any segmentation problem.

### Segmentation

By using the same transforms in `after_item`

but a different kind of targets (here segmentation masks), the targets are automatically processed as they should with the type-dispatch system.

class ImageResizer(Transform):
order=1
"Resize image to `size` using `resample`"
def __init__(self, size, resample=BILINEAR):
if not is_listy(size): size=(size,size)
self.size,self.resample = (size[1],size[0]),resample
def encodes(self, o:PILImage): return o.resize(size=self.size, resample=self.resample)
def encodes(self, o:PILMask): return o.resize(size=self.size, resample=NEAREST)


If we want to use the augmentation transform we created before, we just need to add one thing to it: we want it to be applied on the training set only, not the validation set. To do this, we specify it should only be applied on a specific `idx`

of our splits by adding `split_idx=0`

(0 is for the training set, 1 for the validation set):

And we can check how it gets applied on the tuple `(img, mask)`

. This means you can pass it as an `item_tfms`

in any segmentation problem.

### Using different transform pipelines and the `DataBlock API`


It’s very common for us to use different transforms on the training dataset versus the validation dataset. Currently our `AlbumentationsTransform`

will perform the same transform over both, let’s see if we can make it a bit more flexible with what we want.

Let’s try to think of a scenario for our examle:

I want to various data augmentations such as `HueSaturationValue`

or [ Flip](https://docs.fast.ai/vision.augment.html#flip) to operate similar to how fastai will do it, where they only run on the training dataset but not the validation dataset. What do we need to do to our

`AlbumentationsTransform`

?Here is our newly written transform. But what changed?

We added in a `split_idx`

, which is what determines what transforms are run on the validation set and the training set (0 for train, 1 for validation, `None`

for both).

Along with this we set an `order`

to `2`

. What this entails is if we have any fastai transforms that perform a resize operation, those are done first before our new transform. This let’s us know exactly when our transform is going to be applied, and how we can work with it!

Let’s look at an example with some `Composed`

albumentations transforms:

We can define our `ItemTransforms`

with [ Resize](https://docs.fast.ai/vision.augment.html#resize) and our new training augmentations:

Let’s use the higher-level [ DataBlock](https://docs.fast.ai/data.block.html#datablock) API this time:

And take a peek at some data:

We can see that our transforms were successfully only applied to our training data! Great!

Now, what if we wanted special different behaviors applied to **both** the training and validation sets? Let’s see:

class AlbumentationsTransform(RandTransform):
"A transform handler for multiple `Albumentation` transforms"
split_idx,order=None,2
def __init__(self, train_aug, valid_aug): store_attr()
def before_call(self, b, split_idx):
self.idx = split_idx
def encodes(self, img: PILImage):
if self.idx == 0:
aug_img = self.train_aug(image=np.array(img))['image']
else:
aug_img = self.valid_aug(image=np.array(img))['image']
return PILImage.create(aug_img)


So let’s walk through what’s happening here. We changed our `split_idx`

to be `None`

, which allows for us to say when we’re setting our `split_idx`

.

We also inherit from [ RandTransform](https://docs.fast.ai/vision.augment.html#randtransform), which allows for us to set that

`split_idx`

in our `before_call`

.Finally we check to see what the current `split_idx`

*is*. If it’s `0`

, run the trainining augmentation, otherwise run the validation augmentation.

Let’s see an example of a typical training setup:

def get_train_aug(): return albumentations.Compose([
albumentations.RandomResizedCrop(224,224),
albumentations.Transpose(p=0.5),
albumentations.VerticalFlip(p=0.5),
albumentations.ShiftScaleRotate(p=0.5),
albumentations.HueSaturationValue(
hue_shift_limit=0.2,
sat_shift_limit=0.2,
val_shift_limit=0.2,
p=0.5),
albumentations.CoarseDropout(p=0.5),
albumentations.Cutout(p=0.5)
])
def get_valid_aug(): return albumentations.Compose([
albumentations.CenterCrop(224,224, p=1.),
albumentations.Resize(224,224)
], p=1.)


Next we’ll build our new `AlbumentationsTransform`

:

And pass this into our [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders): > Since we declared a resize already in our composed transforms, we do not need any item transforms present here

We can compare our training and validation augmentation again to find that they are indeed different:

And looking at the shapes of the validation [ DataLoader](https://docs.fast.ai/data.load.html#dataloader)’s

`x`

’s we’ll find our `CenterCrop`

was applied as well:We used fastai’s crop first as some padding is needed due to some image sizes being too small.

---

## Source: https://docs.fast.ai/tutorial.siamese.html

# Custom new task - siamese

In this tutorial, we will see how to deal with a new type of task using the middle layer of the fastai library. The example we will use is a Siamese network, that takes two images and determine if they are of the same class or not. In particular we will see:

- how to quickly get
from a standard PyTorch`DataLoaders`

`Datasets`

- how to adapt this in a
`Transform`

to get some of the show features of fastai - how to add some new behavior to
/`show_batch`

for a custom task`show_results`

- how to write a custom
`DataBlock`

- how to create your own model from a pretrained model
- how to pass along a custom
`splitter`

toto take advantage of transfer learning`Learner`


## Preparing the data

To make our data ready for training a model, we need to create a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object in fastai. It is just a wrapper around a training

[and a validation](https://docs.fast.ai/data.load.html#dataloader)

`DataLoader`

[, so if you already have your own PyTorch dataloaders, you can create such an object directly.](https://docs.fast.ai/data.load.html#dataloader)

`DataLoader`

Here we don’t have anything ready yet. Usually, when using PyTorch, the first step is to create a `Dataset`

that is then wrapped inside a [ DataLoader](https://docs.fast.ai/data.load.html#dataloader). We will do this first, then see how to change this

`Dataset`

into a `Transform`

that will let us take advantage of fastai’s functionality for showing a batch or using data augmentation on the GPU. Lastly we will see how we can customize the data block API and create our own new [.](https://docs.fast.ai/data.block.html#transformblock)

`TransformBlock`

### Purely in PyTorch

To begin with, we will only use PyTorch and PIL to create a `Dataset`

and see how to get this inside fastai. The only helper functions from fastai we will use are [ untar_data](https://docs.fast.ai/data.external.html#untar_data) (to download and untar the dataset) and

[(that looks for all images in a folder recursively). Here, we will use the](https://docs.fast.ai/data.transforms.html#get_image_files)

`get_image_files`

[Oxford-IIIT Pet Dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/).

[ untar_data](https://docs.fast.ai/data.external.html#untar_data) returns a

`pathlib.Path`

object with the location of the decompressed dataset, and in this case, all the images are in an images subfolder:`Path('/home/jhoward/.fastai/data/oxford-iiit-pet/images/great_pyrenees_173.jpg')`


We can open the first image with PIL and have a look at it:

Let’s wrap all the standard preprocessing (resize, conversion to tensor, dividing by 255 and reordering of the channels) in one helper function:

We can see the label of our image is in the filename, before the last `_`

and some number. We can then use a regex expression to create a label function:

`'great_pyrenees'`


Now lets gather all unique labels:

So we have 37 different breeds of pets. To create our Siamese datasets, we will need to create tuple of images for inputs and the target will be `True`

if the images are of the same class, `False`

otherwise. It will be useful to have a mapping from class to list of filenames of that class, to quickly pick a random image for any class.

Now we are ready to create our datasets. For the training set, we will go through all our training filenames for the first image, then pick randomly:

- a filename of the same class for the second image (with probability 0.5)
- a filename of a different class for the second image (with probability 0.5)

We will go through that random draw each time we access an item, to have as many samples as possible. For the validation set however, we will fix that random draw once and for all (otherwise we will validate on a different dataset at each epoch).

class SiameseDataset(torch.utils.data.Dataset):
def __init__(self, files, is_valid=False):
self.files,self.is_valid = files,is_valid
if is_valid: self.files2 = [self._draw(f) for f in files]
def __getitem__(self, i):
file1 = self.files[i]
(file2,same) = self.files2[i] if self.is_valid else self._draw(file1)
img1,img2 = open_image(file1),open_image(file2)
return (img1, img2, torch.Tensor([same]).squeeze())
def __len__(self): return len(self.files)
def _draw(self, f):
same = random.random() < 0.5
cls = label_func(f)
if not same: cls = random.choice([l for l in labels if l != cls])
return random.choice(lbl2files[cls]),same


We just need to split our filenames between a training and validation set to use it.

We can then use it to create datasets.

All of the above would be different for your custom problem, the main point is that as soon as you have some `Dataset`

s, you can create a fastai’s [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) with the following factory method:

You can then use this [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object in a

[and start training. Most methods that don’t rely on showing something (e.g.](https://docs.fast.ai/learner.html#learner)

`Learner`

`DataLoaders.show_batch`

and [for instance) should work. For instance, you can get and inspect a batch with:](https://docs.fast.ai/learner.html#learner.show_results)

`Learner.show_results`

If you want to use the GPU, you can just write:

Now, what is a bit annoying is that we have to rewrite everything that is already in fastai if we want to normalize our images, or apply data augmentation. With minimal changes to the code we wrote, we can still access all of that and get all the show method to work as a cherry on the top. Let’s see how.

### Using the mid-level API

When you have a custom dataset like before, you can easily convert it into a fastai `Transform`

by just changing the `__getitem__`

function to `encodes`

. In general, a `Transform`

in fastai calls the `encodes`

method when you apply it on an item (a bit like PyTorch modules call `forward`

when applied on something) so this will transform your python dataset in a function that transforms integer to your data.

If you then return a tuple (or a subclass of a tuple), and use fastai’s semantic type, you can then apply any other fastai’s transform on your data and it will be dispatched properly. Let’s see how that works:

class SiameseTransform(Transform):
def __init__(self, files, is_valid=False):
self.files,self.is_valid = files,is_valid
if is_valid: self.files2 = [self._draw(f) for f in files]
def encodes(self, i):
file1 = self.files[i]
(file2,same) = self.files2[i] if self.is_valid else self._draw(file1)
img1,img2 = open_image(file1),open_image(file2)
return (TensorImage(img1), TensorImage(img2), torch.Tensor([same]).squeeze())
def _draw(self, f):
same = random.random() < 0.5
cls = label_func(f)
if not same: cls = random.choice([l for l in labels if l != cls])
return random.choice(lbl2files[cls]),same


So three things changed:

- the
`__len__`

disappeared, we won’t need it `__getitem___`

became`encodes`

- we return
for our images`TensorImage`


How do we build a dataset with this? We will use [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists). It’s just an object that lazily applies a collection of

`Transform`

s on a list. Here since our transform takes integers, we will pass simple ranges for this list.Then, when we create a [ DataLoader](https://docs.fast.ai/data.load.html#dataloader), we can add any transform we like. fastai replaces the PyTorch

[with its own version that has more hooks (but is fully compatible with PyTorch). The transforms we would like to be applied to items should be passed to](https://docs.fast.ai/data.load.html#dataloader)

`DataLoader`

`after_item`

, the one we would like to be applied on a batch of data should be passed to `after_batch`

.So with little change, we can use fastai normalization and data augmentation. If we are ready to do a bit more additional coding, we can even get the show behavior to work properly.

### Making show work

The show methods in fastai all rely on some types being able to show themselves. Additionally, some transforms that need to be reversed for showing purposes (like changing a category to an index, or normalizing) have a `decodes`

method to undo what their encodes did. In general, fastai will call those decodes method until it arrives at a type that knows how to show itself, then call the show method on this type.

So to make this work, let’s first create a new type with a show method!

class SiameseImage(fastuple):
def show(self, ctx=None, **kwargs):
if len(self) > 2:
img1,img2,similarity = self
else:
img1,img2 = self
similarity = 'Undetermined'
if not isinstance(img1, Tensor):
if img2.size != img1.size: img2 = img2.resize(img1.size)
t1,t2 = tensor(img1),tensor(img2)
t1,t2 = t1.permute(2,0,1),t2.permute(2,0,1)
else: t1,t2 = img1,img2
line = t1.new_zeros(t1.shape[0], t1.shape[1], 10)
return show_image(torch.cat([t1,line,t2], dim=2), title=similarity, ctx=ctx, **kwargs)


There is bit of code in the first part of the test that you can ignore, it’s mostly to make the show method work on PIL Image as well as tensors. The main stuff happens in the last two lines: we create a black line of 10 pixels and show the tensor with our two images concatenated, with the black line in the middle. In general, `ctx`

represents the object where we will show our thing. In this case, it could be a given matplotlib axis.

Let’s see an example:

Note that we used the fastai type [ PILImage](https://docs.fast.ai/vision.core.html#pilimage) instead of a PIL.Image. That is to get access to fastai’s transforms. For instance, we can use

[and](https://docs.fast.ai/vision.augment.html#resize)

`Resize`

[directly on our](https://docs.fast.ai/data.transforms.html#totensor)

`ToTensor`

`SiamesImage`

. Since it subclasses tuple, those transforms are dispatched and applied to the part that make sense (the [s, not the bool).](https://docs.fast.ai/vision.core.html#pilimage)

`PILImage`

Now let’s rewrite a bit our previous transform. Instead of taking integers, we can take files directly for instance. Also, in fastai, splits are usually handled by helper functions that return two lists of integers (the ones in the training set and the ones in the validation set), so let’s adapt a bit the code from before to have the validation images drawn once and for all. We also need to add in the mapping dictionaries from class to list of filenames of that class, separately for the train and valid splits, so that there is total separation between the training and validation sets, i.e. ‘train’ files should only draw samples from train split; ‘valid’ from valid split.

class SiameseTransform(Transform):
def __init__(self, files, splits):
self.splbl2files = [{l: [f for f in files[splits[i]] if label_func(f) == l] for l in labels}
for i in range(2)]
self.valid = {f: self._draw(f,1) for f in files[splits[1]]}
def encodes(self, f):
f2,same = self.valid.get(f, self._draw(f,0))
img1,img2 = PILImage.create(f),PILImage.create(f2)
return SiameseImage(img1, img2, same)
def _draw(self, f, split=0):
same = random.random() < 0.5
cls = label_func(f)
if not same: cls = random.choice(L(l for l in labels if l != cls))
return random.choice(self.splbl2files[split][cls]),same


Then we create our splits using a [ RandomSplitter](https://docs.fast.ai/data.transforms.html#randomsplitter):

And we test that tfm.valid does not contain items from the train split:

And we can pass those splits to [ TfmdLists](https://docs.fast.ai/data.core.html#tfmdlists), which will then create the validation and the training set for us.

We can now use methods like [ show_at](https://docs.fast.ai/data.core.html#show_at):

And we can create a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) like before, by adding our custom transforms for

`after_item`

and `after_batch`

.If we try just now, [ show_batch](https://docs.fast.ai/data.core.html#show_batch) will not quite work: the default behavior relies on some data build using data blocks, and we used one big transform for everything. In consequence, instead of having an input with a certain type and an output of a certain type, we have one big type for the whole data. If we look at a batch, we can see that the fastai library has propagated that type for us through every transform and batching operation:

When we call [ show_batch](https://docs.fast.ai/data.core.html#show_batch), the fastai library will realize the batch as a whole has a show method, so it must know how to show itself. It will send that batch directly to the type-dispatched function

[. The signature of this function is the following:](https://docs.fast.ai/data.core.html#show_batch)

`show_batch`

where the kwargs are specific to the application (here we will have `nrows`

, `ncols`

and `figsize`

for instance). In our case, the batch will be sent as a whole to `x`

and `y`

and `samples`

will be `None`

(those arguments are used when the batch does not have a type that knows how to show itself, see the next section).

To write our custom [ show_batch](https://docs.fast.ai/data.core.html#show_batch) we just need to use the type annotation on

`x`

like this:@dispatch
def show_batch(x:SiameseImage, y, samples, ctxs=None, max_n=6, nrows=None, ncols=2, figsize=None, **kwargs):
if figsize is None: figsize = (ncols*6, max_n//ncols * 3)
if ctxs is None: ctxs = get_grid(min(x[0].shape[0], max_n), nrows=None, ncols=ncols, figsize=figsize)
for i,ctx in enumerate(ctxs): SiameseImage(x[0][i], x[1][i], ['Not similar','Similar'][x[2][i].item()]).show(ctx=ctx)


We will see in the next section that the behavior is different when we have a batch that does not have a show method (which is the case most of the time, only the input and target of the batch have those show methods). In that case, the arguments `y`

and `samples`

are useful. Here, everything is in `x`

, because since the batch knows how to show itself as a whole, it is sent as a whole.

Here, we create a list of matplotlib axis with the utility function [ get_grid](https://docs.fast.ai/vision.data.html#get_grid) then pass it along to all

`SiameseImage.show`

. Let’s see how this looks in practice:```
{__main__.SiameseImage: [fastai.torch_core.TensorImage,
fastai.torch_core.TensorImage,
torch.Tensor]}
```


And we will see in the training section it’s as easy to make a custom [ show_results](https://docs.fast.ai/data.core.html#show_results). Now let’s see how we could have written our own data block.

### Writing your custom data block

The siamese problem is just a particular case of problem with our inputs being a tuple of images and our target being a category. If the type “tuple of images” comes again in other problems with a different target, it might be useful to create a custom block for it, to be able to leverage the power of the data block API.

**NB:** if your problem only has one particular setup and you don’t need the modular aspect for various targets, what we did before is perfectly fine and you should look no further.

Let’s create a type to represent our tuple of two images:

class ImageTuple(fastuple):
@classmethod
def create(cls, fns): return cls(tuple(PILImage.create(f) for f in fns))
def show(self, ctx=None, **kwargs):
t1,t2 = self
if not isinstance(t1, Tensor) or not isinstance(t2, Tensor) or t1.shape != t2.shape: return ctx
line = t1.new_zeros(t1.shape[0], t1.shape[1], 10)
return show_image(torch.cat([t1,line,t2], dim=2), ctx=ctx, **kwargs)


Since it’s a subclass of `fastuple`

, `Transform`

s will be applied over each part of the tuple. For instance [ ToTensor](https://docs.fast.ai/data.transforms.html#totensor) will convert this

`ImageTuple`

to a tuple of [s:](https://docs.fast.ai/torch_core.html#tensorimage)

`TensorImage`

`(fastai.torch_core.TensorImage, fastai.torch_core.TensorImage)`


In the show method, we did not bother with non-tensor elements this time (we could copy and paste the same code as before). Showing assumes we have a resize transform and that we convert the images to tensors in our procesing pipeline:

We can now define a block associated to `ImageTuple`

that we will use in the data block API. A block is basically a set of default transforms, here we specify how to create the `ImageTuple`

and the [ IntToFloatTensor](https://docs.fast.ai/data.transforms.html#inttofloattensor) transform necessary for image preprocessing:

To gather our data with the data block API we will use the following functions:

And we are ready to define our block:

We can check the types of the elements in one batch with the `explode_types`

method. Here we have a tuple with one `ImageTuple`

of two [ TensorImage](https://docs.fast.ai/torch_core.html#tensorimage)s and one

[. The transform properly kept the types of everything even after collating the samples together!](https://docs.fast.ai/torch_core.html#tensorcategory)

`TensorCategory`

```
{tuple: [{__main__.ImageTuple: [fastai.torch_core.TensorImage,
fastai.torch_core.TensorImage]},
fastai.torch_core.TensorCategory]}
```


The [ show_batch](https://docs.fast.ai/data.core.html#show_batch) method here works out of the box. But the whole batch is just a tuple, so doesn’t have a show method. To customize how things are organized, we can extend the a dispatched

[function.](https://docs.fast.ai/data.core.html#show_batch)

`show_batch`

@dispatch
def show_batch(x:ImageTuple, y, samples, ctxs=None, max_n=6, nrows=None, ncols=2, figsize=None, **kwargs):
if figsize is None: figsize = (ncols*6, max_n//ncols * 3)
if ctxs is None: ctxs = get_grid(min(len(samples), max_n), nrows=nrows, ncols=ncols, figsize=figsize)
ctxs = get_show_batch_func(object)(x, y, samples, ctxs=ctxs, max_n=max_n, **kwargs)
return ctxs


As a sidenote, `x`

and `y`

are not actually used (all that needs to be shown is in the `samples`

list). They are only passed along for type-dispatching because they carry the types of our inputs and targets.

We can now have a look:

## Training a model

### The model

We are now at the stage where we can train a model on this data. We will use a very simple approach: take the body of a pretrained model and make the two images pass through it. Then build a head the usual way, with just twice as many features. The model in itself can be written like this:

For our encoder, we use the fastai function [ create_body](https://docs.fast.ai/vision.learner.html#create_body). It takes an architecture and an index where to cut it. By default it will use the pretrained version of the model we pick. If we want to check where fastai usually cuts the model, we can have a look at the

`model_meta`

dictionary:```
{'cut': -2,
'split': <function fastai.vision.learner._resnet_split(m)>,
'stats': ([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])}
```


So we need to cut at -2:

Let’s have a look at the last block of this encoder:

```
Sequential(
(0): BasicBlock(
(conv1): Conv2d(256, 512, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
(bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(relu): ReLU(inplace=True)
(conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
(bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(downsample): Sequential(
(0): Conv2d(256, 512, kernel_size=(1, 1), stride=(2, 2), bias=False)
(1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
)
)
(1): BasicBlock(
(conv1): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
(bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(relu): ReLU(inplace=True)
(conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
(bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
)
(2): BasicBlock(
(conv1): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
(bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(relu): ReLU(inplace=True)
(conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
(bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
)
)
```


It ends up with 512 features, so for our custom head, we will need to multiply this by 4 (i.e. 2*2): 2 because we have two images concatenated, and another 2 because of the fastai concat-pool trick (we concatenate the average pool and the max pool of the features). The [ create_head](https://docs.fast.ai/vision.learner.html#create_head) function will give us the head that is usually used in fastai’s transfer learning models.

We also need to define the number of outputs of our head `n_out`

, in our case it’s 2: One for predicting both images are from the same class, and the other, to predict the contrary.

Let’s have a look at the generated head:

```
Sequential(
(0): AdaptiveConcatPool2d(
(ap): AdaptiveAvgPool2d(output_size=1)
(mp): AdaptiveMaxPool2d(output_size=1)
)
(1): Flatten(full=False)
(2): BatchNorm1d(2048, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(3): Dropout(p=0.25, inplace=False)
(4): Linear(in_features=2048, out_features=512, bias=False)
(5): ReLU(inplace=True)
(6): BatchNorm1d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
(7): Dropout(p=0.5, inplace=False)
(8): Linear(in_features=512, out_features=2, bias=False)
)
```


### Train the model

We are almost ready to train our model. The last piece missing is a custom splitter: in order to use transfer learning efficiently, we will want to freeze the pretrained model at first, and train only the head. A splitter is a function that takes a model and returns lists of parameters. The [ params](https://docs.fast.ai/torch_core.html#params) function is useful to return all parameters of the model, so we can create a simple splitter like so:

Then we use the traditional [ CrossEntropyLossFlat](https://docs.fast.ai/losses.html#crossentropylossflat) loss function from fastai (the same as

`nn.CrossEntropyLoss`

, but flattened). The only thing is, if using the data built by the mid-level API, we have a tensor of bools for our targets, so we need to convert it to integers otherwise PyTorch will throw an error.Let’s grab the data as built by the mid-level API:

class SiameseTransform(Transform):
def __init__(self, files, splits):
self.splbl2files = [{l: [f for f in files[splits[i]] if label_func(f) == l] for l in labels}
for i in range(2)]
self.valid = {f: self._draw(f,1) for f in files[splits[1]]}
def encodes(self, f):
f2,same = self.valid.get(f, self._draw(f,0))
img1,img2 = PILImage.create(f),PILImage.create(f2)
return SiameseImage(img1, img2, int(same))
def _draw(self, f, split=0):
same = random.random() < 0.5
cls = label_func(f)
if not same: cls = random.choice(L(l for l in labels if l != cls))
return random.choice(self.splbl2files[split][cls]),same


Again, test that tfm.valid does not contain items from the train split:

We can then create our [ Learner](https://docs.fast.ai/learner.html#learner):

Since we are not using a convenience function that directly creates the [ Learner](https://docs.fast.ai/learner.html#learner) for us, we need to

`freeze`

it manually:Then we can use the learning rate finder:

Train for a bit the head:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.543907 | 0.378830 | 0.836942 | 00:30 |
| 1 | 0.389485 | 0.263416 | 0.889716 | 00:35 |
| 2 | 0.289101 | 0.199503 | 0.920162 | 00:27 |
| 3 | 0.244186 | 0.176951 | 0.932341 | 00:40 |

Unfreeze and train the full model for a little more:

### Making show_results work

@dispatch
def show_results(x:SiameseImage, y, samples, outs, ctxs=None, max_n=6, nrows=None, ncols=2, figsize=None, **kwargs):
if figsize is None: figsize = (ncols*6, max_n//ncols * 3)
if ctxs is None: ctxs = get_grid(min(x[0].shape[0], max_n), nrows=None, ncols=ncols, figsize=figsize)
for i,ctx in enumerate(ctxs):
title = f'Actual: {["Not similar","Similar"][x[2][i].item()]} \n Prediction: {["Not similar","Similar"][y[2][i].item()]}'
SiameseImage(x[0][i], x[1][i], title).show(ctx=ctx)


### Patch in a `siampredict`

method to `Learner`

, to automatically show images and prediction

`Learner`

@patch
def siampredict(self:Learner, item, rm_type_tfms=None, with_input=False):
res = self.predict(item, rm_type_tfms=None, with_input=False)
if res[0] == tensor(0):
SiameseImage(item[0], item[1], 'Prediction: Not similar').show()
else:
SiameseImage(item[0], item[1], 'Prediction: Similar').show()
return res

---

## Source: https://docs.fast.ai/tutorial.image_sequence.html

# Image sequences

This tutorial uses fastai to process sequences of images. We are going to look at two tasks:

- First we will do video classification on the
[UCF101 dataset](https://www.crcv.ucf.edu/data/UCF101.php). You will learn how to convert the video to individual frames. We will also build a data processing piepline using fastai’s mid level API. - Secondly we will build some simple models and assess our accuracy.
- Finally we will train a SotA transformer based architecture.

## UCF101 Action Recognition

UCF101 is an action recognition data set of realistic action videos, collected from YouTube, having 101 action categories. This data set is an extension of UCF50 data set which has 50 action categories.


*“With 13320 videos from 101 action categories, UCF101 gives the largest diversity in terms of actions and with the presence of large variations in camera motion, object appearance and pose, object scale, viewpoint, cluttered background, illumination conditions, etc, it is the most challenging data set to date. As most of the available action recognition data sets are not realistic and are staged by actors, UCF101 aims to encourage further research into action recognition by learning and exploring new realistic action categories”*

### setup

We have to download the UCF101 dataset from their website. It is a big dataset (6.5GB), if your connection is slow you may want to do this at night or in a terminal (to avoid blocking the notebook). fastai’s [ untar_data](https://docs.fast.ai/data.external.html#untar_data) is not capable of downloading this dataset, so we will use

`wget`

and then unrar the files using `rarfile`

.`fastai`

’s datasets are located inside `~/.fastai/archive`

, we will download UFC101 there.

you can run this command on a terminal to avoid blocking the notebook


Let’s make a function to`unrar`

the downloaded dataset. This function is very similar to [ untar_data](https://docs.fast.ai/data.external.html#untar_data), but handles

`.rar`

files.from rarfile import RarFile
def unrar(fname, dest):
"Extract `fname` to `dest` using `rarfile`"
dest = URLs.path(c_key='data')/fname.name.withsuffix('') if dest is None else dest
print(f'extracting to: {dest}')
if not dest.exists():
fname = str(fname)
if fname.endswith('rar'):
with RarFile(fname, 'r') as myrar:
myrar.extractall(dest.parent)
else:
raise Exception(f'Unrecognized archive: {fname}')
rename_extracted(dest)
return dest


To be consistent, we will extract UCF dataset in `~/.fasta/data`

. This is where fastai stores decompressed datasets.

unraring a large file like this one is very slow.


The file structure of the dataset after extraction is one folder per action:

`(#101) [Path('/home/tcapelle/.fastai/data/UCF101/Hammering'),Path('/home/tcapelle/.fastai/data/UCF101/HandstandPushups'),Path('/home/tcapelle/.fastai/data/UCF101/HorseRace'),Path('/home/tcapelle/.fastai/data/UCF101/FrontCrawl'),Path('/home/tcapelle/.fastai/data/UCF101/LongJump'),Path('/home/tcapelle/.fastai/data/UCF101/GolfSwing'),Path('/home/tcapelle/.fastai/data/UCF101/ApplyEyeMakeup'),Path('/home/tcapelle/.fastai/data/UCF101/UnevenBars'),Path('/home/tcapelle/.fastai/data/UCF101/HeadMassage'),Path('/home/tcapelle/.fastai/data/UCF101/Kayaking')...]`


inside, you will find one video per instance, the videos are in `.avi`

format. We will need to convert each video to a sequence of images to able to work with our fastai vision toolset.

torchvision has a built-in video reader that may be capable of simplifying this task

```
UCF101-frames
├── ApplyEyeMakeup
| |── v_ApplyEyeMakeup_g01_c01.avi
| ├── v_ApplyEyeMakeup_g01_c02.avi
| | ...
├── Hammering
| ├── v_Hammering_g01_c01.avi
| ├── v_Hammering_g01_c02.avi
| ├── v_Hammering_g01_c03.avi
| | ...
...
├── YoYo
├── v_YoYo_g01_c01.avi
...
├── v_YoYo_g25_c03.avi
```


we can grab all videos at one using [ get_files](https://docs.fast.ai/data.transforms.html#get_files) and passing the

`'.avi`

extension`(#4) [Path('/home/tcapelle/.fastai/data/UCF101/Hammering/v_Hammering_g22_c05.avi'),Path('/home/tcapelle/.fastai/data/UCF101/Hammering/v_Hammering_g21_c05.avi'),Path('/home/tcapelle/.fastai/data/UCF101/Hammering/v_Hammering_g03_c03.avi'),Path('/home/tcapelle/.fastai/data/UCF101/Hammering/v_Hammering_g18_c02.avi')]`


We can convert the videos to frames using `av`

:

```
[<PIL.Image.Image image mode=RGB size=320x240>,
<PIL.Image.Image image mode=RGB size=320x240>,
<PIL.Image.Image image mode=RGB size=320x240>,
<PIL.Image.Image image mode=RGB size=320x240>]
```


We have`PIL.Image`

objects, so we can directly show them using fastai’s [ show_images](https://docs.fast.ai/torch_core.html#show_images) method

let’s grab one video path

`Path('/home/tcapelle/.fastai/data/UCF101/Hammering/v_Hammering_g22_c05.avi')`


We want to export all videos to frames, les’t built a function that is capable of exporting one video to frames, and stores the resulting frames on a folder of the same name.

Let’s grab de folder name:

`Path('Hammering/v_Hammering_g22_c05')`


we will also create a new directory for our `frames`

version of UCF. You will need at least 7GB to do this, afterwards you can erase the original UCF101 folder containing the videos.

we will make a function that takes a video path, and extracts the frames to our new `UCF-frames`

dataset with the same folder structure.

def avi2frames(video_path, path_frames=path_frames, force=False):
"Extract frames from avi file to jpgs"
dest_path = path_frames/video_path.relative_to(video_path.parent.parent).with_suffix('')
if not dest_path.exists() or force:
dest_path.mkdir(parents=True, exist_ok=True)
for i, frame in enumerate(extract_frames(video_path)):
frame.save(dest_path/f'{i}.jpg')


`(#161) [Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/63.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/90.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/19.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/111.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/132.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/59.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/46.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/130.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/142.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g22_c05/39.jpg')...]`


Now we can batch process the whole dataset using fastcore’s `parallel`

. This could be slow on a low CPU count machine. On a 12 core machine it takes 4 minutes.

after this you get a folder hierarchy that looks like this

```
UCF101-frames
├── ApplyEyeMakeup
| |── v_ApplyEyeMakeup_g01_c01
| │ ├── 0.jpg
| │ ├── 100.jpg
| │ ├── 101.jpg
| | ...
| ├── v_ApplyEyeMakeup_g01_c02
| │ ├── 0.jpg
| │ ├── 100.jpg
| │ ├── 101.jpg
| | ...
├── Hammering
| ├── v_Hammering_g01_c01
| │ ├── 0.jpg
| │ ├── 1.jpg
| │ ├── 2.jpg
| | ...
| ├── v_Hammering_g01_c02
| │ ├── 0.jpg
| │ ├── 1.jpg
| │ ├── 2.jpg
| | ...
| ├── v_Hammering_g01_c03
| │ ├── 0.jpg
| │ ├── 1.jpg
| │ ├── 2.jpg
| | ...
...
├── YoYo
├── v_YoYo_g01_c01
│ ├── 0.jpg
│ ├── 1.jpg
│ ├── 2.jpg
| ...
├── v_YoYo_g25_c03
├── 0.jpg
├── 1.jpg
├── 2.jpg
...
├── 136.jpg
├── 137.jpg
```


## Data pipeline

we have converted all the videos to images, we are ready to start building our fastai data pieline

`(#3) [Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering'),Path('/home/tcapelle/.fastai/data/UCF101-frames/HandstandPushups'),Path('/home/tcapelle/.fastai/data/UCF101-frames/HorseRace')]`


we have one folder per action category, and inside one folder per instance of the action.

with this function we get individual instances of each action, **these are the image sequences that we need to clasiffy.**. We will build a pipeline that takes as input **instance path**’s.

`(#3) [Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g07_c03'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g13_c07')]`


we have to sort the video frames numerically. We will patch pathlib’s `Path`

class to return a list of files conttaines on a folde sorted numerically. It could be a good idea to modify fastcore’s `ls`

method with an optiional argument `sort_func`

.

`(#187) [Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/0.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/1.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/2.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/3.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/4.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/5.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/6.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/7.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/8.jpg'),Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02/9.jpg')...]`


let’s grab the first 5 frames

We will build a tuple that contains individual frames and that can show themself. We will use the same idea that on the `siamese_tutorial`

. As a video can have many frames, and we don’t want to display them all, the `show`

method will only display the 1st, middle and last images.

class ImageTuple(fastuple):
"A tuple of PILImages"
def show(self, ctx=None, **kwargs):
n = len(self)
img0, img1, img2= self[0], self[n//2], self[n-1]
if not isinstance(img1, Tensor):
t0, t1,t2 = tensor(img0), tensor(img1),tensor(img2)
t0, t1,t2 = t0.permute(2,0,1), t1.permute(2,0,1),t2.permute(2,0,1)
else: t0, t1,t2 = img0, img1,img2
return show_image(torch.cat([t0,t1,t2], dim=2), ctx=ctx, **kwargs)


we will use the mid-level API to create our Dataloader from a transformed list.

class ImageTupleTfm(Transform):
"A wrapper to hold the data on path format"
def __init__(self, seq_len=20):
store_attr()
def encodes(self, path: Path):
"Get a list of images files for folder path"
frames = path.ls_sorted()
n_frames = len(frames)
s = slice(0, min(self.seq_len, n_frames))
return ImageTuple(tuple(PILImage.create(f) for f in frames[s]))


`Path('/home/tcapelle/.fastai/data/UCF101-frames/Hammering/v_Hammering_g14_c02')`


with this setup, we can use the [ parent_label](https://docs.fast.ai/data.transforms.html#parent_label) as our labelleing function

We will use fastai[ Datasets](https://docs.fast.ai/data.core.html#datasets) class, we have to pass a

`list`

of transforms. The first list `[ImageTupleTfm(5)]`

is how we grab the `x`

‘s and the second list `[parent_label, Categorize]]`

is how we grab the `y`

’s.’ So, from each instance path, we grab the first 5 images to construct an `ImageTuple`

and we grad the label of the action from the parent folder using [and the we](https://docs.fast.ai/data.transforms.html#parent_label)

`parent_label`

[the labels.](https://docs.fast.ai/data.transforms.html#categorize)

`Categorize`

refactoring

def get_action_dataloaders(files, bs=8, image_size=64, seq_len=20, val_idxs=None, **kwargs):
"Create a dataloader with `val_idxs` splits"
splits = RandomSplitter()(files) if val_idxs is None else IndexSplitter(val_idxs)(files)
itfm = ImageTupleTfm(seq_len=seq_len)
ds = Datasets(files, tfms=[[itfm], [parent_label, Categorize]], splits=splits)
dls = ds.dataloaders(bs=bs, after_item=[Resize(image_size), ToTensor],
after_batch=[IntToFloatTensor, Normalize.from_stats(*imagenet_stats)], drop_last=True, **kwargs)
return dls


## A Baseline Model

We will make a simple baseline model. It will encode each frame individually using a pretrained resnet. We make use of the [ TimeDistributed](https://docs.fast.ai/layers.html#timedistributed) layer to apply the resnet to each frame identically. This simple model will just average the probabilities of each frame individually. A

`simple_splitter`

function is also provided to avoid destroying the pretrained weights of the encoder.class SimpleModel(Module):
def __init__(self, arch=resnet34, n_out=101):
self.encoder = TimeDistributed(create_body(arch, pretrained=True))
self.head = TimeDistributed(create_head(512, 101))
def forward(self, x):
x = torch.stack(x, dim=1)
return self.head(self.encoder(x)).mean(dim=1)
def simple_splitter(model): return [params(model.encoder), params(model.head)]


We don’t need to put a [ sigmoid](https://docs.fast.ai/layers.html#sigmoid) layer at the end, as the loss function will fuse the Entropy with the sigmoid to get more numerical stability. Our models will output one value per category. you can recover the predicted class using

`torch.sigmoid`

and `argmax`

.It is always a good idea to check what is going inside the model, and what is coming out.

```
type(x) = <class '__main__.ImageTuple'>,
len(x) = 5 ,
x[0].shape = (32, 3, 64, 64),
model(x).shape = torch.Size([32, 101])
```


We are ready to create a Learner. The loss function is not mandatory, as the [ DataLoader](https://docs.fast.ai/data.load.html#dataloader) already has the Binary Cross Entropy because we used a

[transform on the outputs when constructing the](https://docs.fast.ai/tabular.core.html#categorify)

`Categorify`

[.](https://docs.fast.ai/data.core.html#datasets)

`Datasets`

We will make use of the [ MixedPrecision](https://docs.fast.ai/callback.fp16.html#mixedprecision) callback to speed up our training (by calling

`to_fp16`

on the learner object).The [ TimeDistributed](https://docs.fast.ai/layers.html#timedistributed) layer is memory hungry (it pivots the image sequence to the batch dimesion) so if you get OOM errors, try reducing the batchsize.

As this is a classification problem, we will monitor classification [ accuracy](https://docs.fast.ai/metrics.html#accuracy). You can pass the model splitter directly when creating the learner.

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 3.685684 | 3.246746 | 0.295045 | 00:19 |
| 1 | 2.467395 | 2.144252 | 0.477102 | 00:18 |
| 2 | 1.973236 | 1.784474 | 0.545420 | 00:19 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 1.467863 | 1.449896 | 0.626877 | 00:24 |
| 1 | 1.143187 | 1.200496 | 0.679805 | 00:24 |
| 2 | 0.941360 | 1.152383 | 0.696321 | 00:24 |

68% not bad for our simple baseline with only 5 frames.

We can improve our model by passing the outputs of the image encoder to an `nn.LSTM`

to get some inter-frame relation. To do this, we have to get the features of the image encoder, so we have to modify our code and make use of the [ create_body](https://docs.fast.ai/vision.learner.html#create_body) function and add a pooling layer afterwards.

if we check what is the output of the encoder, for each image, we get a feature map of 512.

this is perfect as input for a recurrent layer. Let’s refactor and add a linear layer at the end. We will output the hidden state to a linear layer to compute the probabilities. The idea behind, is that the hidden state encodes the temporal information of the sequence.

class RNNModel(Module):
def __init__(self, arch=resnet34, n_out=101, num_rnn_layers=1):
self.encoder = TimeDistributed(nn.Sequential(create_body(arch, pretrained=True), nn.AdaptiveAvgPool2d(1), Flatten()))
self.rnn = nn.LSTM(512, 512, num_layers=num_rnn_layers, batch_first=True)
self.head = LinBnDrop(num_rnn_layers*512, n_out)
def forward(self, x):
x = torch.stack(x, dim=1)
x = self.encoder(x)
bs = x.shape[0]
_, (h, _) = self.rnn(x)
return self.head(h.view(bs,-1))


let’s make a splitter function to train the encoder and the rest separetely

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 3.081921 | 2.968944 | 0.295796 | 00:19 |

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 1.965607 | 1.890396 | 0.516892 | 00:25 |
| 1 | 1.544786 | 1.648921 | 0.608108 | 00:24 |
| 2 | 1.007738 | 1.157811 | 0.702703 | 00:25 |
| 3 | 0.537038 | 0.885042 | 0.771772 | 00:24 |
| 4 | 0.351384 | 0.849636 | 0.781156 | 00:25 |

this models is harder to train. A good idea would be to add some Dropout. Let’s try increasing the sequence lenght. Another approach would be to use a better layer for this type of task, like the [ConvLSTM](https://paperswithcode.com/method/convlstm) or a Transformer for images that are capable of modelling the spatio-temporal relations in a more sophisticated way. Some ideas:

- Try sampling the frames differently, (randomly spacing, more frames, etc…)

## A Transformer Based models

A quick tour on the new transformer based archs


There are a bunch of transformer based image models that have appeared recently after the introduction of the [Visual Transformer (ViT).](https://github.com/google-research/vision_transformer). We currently have many variants of this architecture with nice implementation in pytorch integrated to [timm](https://github.com/rwightman/pytorch-image-models) and [@lucidrains](https://github.com/lucidrains/vit-pytorch) maintains a repository with all the variants and elegant pytorch implementations.

Recently the image models have been extended to video/image-sequences, hey use the transformer to encode space and time jointly. Here we will train the [TimeSformer](https://arxiv.org/abs/2102.05095) architecture on the action recognition task as it appears to be the easier to train from scratch. We will use [@lucidrains](https://github.com/lucidrains/TimeSformer-pytorch) implementation.

Currently we don’t have access to pretrained models, but loading the `ViT`

weights on some blocks could be possible, but it is not done here.

### Install

First things first, we will need to install the model:

`!pip install -Uq timesformer-pytorch`


### Train

the `TimeSformer`

implementation expects a sequence of images in the form of: `(batch_size, seq_len, c, w, h)`

. We need to wrap the model to stack the image sequence before feeding the forward method

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 4.227850 | 4.114154 | 0.091216 | 00:41 |
| 1 | 3.735752 | 3.694664 | 0.141517 | 00:42 |
| 2 | 3.160729 | 3.085824 | 0.256381 | 00:41 |
| 3 | 2.540461 | 2.478563 | 0.380255 | 00:42 |
| 4 | 1.878038 | 1.880847 | 0.536411 | 00:42 |
| 5 | 1.213030 | 1.442322 | 0.642643 | 00:42 |
| 6 | 0.744001 | 1.153427 | 0.720345 | 00:42 |
| 7 | 0.421604 | 1.041846 | 0.746997 | 00:42 |
| 8 | 0.203065 | 0.959380 | 0.779655 | 00:42 |
| 9 | 0.112700 | 0.902984 | 0.792042 | 00:42 |
| 10 | 0.058495 | 0.871788 | 0.801802 | 00:42 |
| 11 | 0.043413 | 0.868007 | 0.805931 | 00:42 |

---

## Source: https://docs.fast.ai/examples/migrating_pytorch.html

# Pure PyTorch to fastai

We’re going to use the MNIST training code from the official PyTorch examples, slightly reformatted for space, updated from AdaDelta to AdamW, and converted from a script to a module. There’s a lot of code, so we’ve put it into migrating_pytorch.py!

The source script for `migrating_pytorch`

is in the `examples`

subdirectory of this folder if you checked out the `fastai`

repo from git, or can be downloaded from [here](https://github.com/fastai/fastai/blob/master/nbs/examples/migrating_pytorch.py) if you’re using an online viewer such as Colab.

We can entirely replace the custom training loop with fastai’s. That means you can get rid of `train()`

, `test()`

, and the epoch loop in the original code, and replace it all with just this:

Data is automatically moved to the GPU or CPU depending on what’s available, without the need of extra Callbacks or overhead.

fastai supports many schedulers. We recommend fitting with one cycle training:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.130664 | 0.049394 | 0.984200 | 01:16 |

As you can see, migrating from pure PyTorch allows you to remove a lot of code, and doesn’t require you to change any of your existing data pipelines, optimizers, loss functions, models, etc.

Once you’ve made this change, you can then benefit from fastai’s rich set of callbacks, transforms, visualizations, and so forth.

Note that fastai is much more than just a training loop (although we’re only using the training loop in this example) - it is a complete framework including GPU-accelerated transformations, end-to-end inference, integrated applications for vision, text, tabular, and collaborative filtering, and so forth. You can use any part of the framework on its own, or combine them together, as described in the [fastai paper](https://arxiv.org/abs/2002.04688).

---

## Source: https://docs.fast.ai/examples/migrating_pytorch_verbose.html

# Pytorch to fastai details

In this tutorial we will be training MNIST (similar to the shortened tutorial [here](https://docs.fast.ai/migrating_pytorch.html)) from scratch using pure PyTorch and incrementally adding it to the fastai framework. What this entials is using: - PyTorch DataLoaders - PyTorch Model - PyTorch Optimizer

And with fastai we will simply use the Training Loop (or the [ Learner](https://docs.fast.ai/learner.html#learner) class)

In this tutorial also since generally people are more used to explicit exports, we will use explicit exports within the fastai library, but also do understand you can get all of these imports automatically by doing `from fastai.vision.all import *`


Generally it is also recommend you do so because of monkey-patching throughout the library, but this can be avoided as well which will be shown later.


## Data

As mentioned in the title, we will be loading in the dataset simply with the `torchvision`

module.

This includes both loading in the dataset, and preparing it for the DataLoaders (including transforms)

First we will grab our imports:

Next we can define some minimal transforms for converting the raw two-channel images into trainable tensors as well as normalize them:

The mean and standard deviation come from the MNIST dataset


Before finally creating our train and test [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) by downloading the dataset and applying our transforms.

First let’s download a train and test (or validation as it is reffered to in the fastai framework) dataset

Next we’ll define a few hyperparameters to pass to the individual [ DataLoader](https://docs.fast.ai/data.load.html#dataloader)’s as they are being made.

We’ll set a batch size of 256 while training, and 512 during the validation set

We’ll also use a single worker and pin the memory:

Now we have raw PyTorch [ DataLoader](https://docs.fast.ai/data.load.html#dataloader)’s. To use them within the fastai framework all that is left is to wrap it in the fastai

[class, which just takes in any number of](https://docs.fast.ai/data.core.html#dataloaders)

`DataLoaders`

[objects and combines them into one:](https://docs.fast.ai/data.load.html#dataloader)

`DataLoader`

We have now prepared the data for `fastai`

! Next let’s build a basic model to use

## Model

This will be an extremely simplistic 2 layer convolutional neural network with an extra set of layers that mimics fastai’s generated `head`

. In each head includes a [ Flatten](https://docs.fast.ai/layers.html#flatten) layer, which simply just adjusts the shape of the outputs. We will mimic it here

And then our actual model:

## Optimizer

Using native PyTorch optimizers in the fastai framework is made extremely simple thanks to the [ OptimWrapper](https://docs.fast.ai/optimizer.html#optimwrapper) interface.

Simply write a `partial`

function specifying the `opt`

as a torch optimizer.

In our example we will use [ Adam](https://docs.fast.ai/optimizer.html#adam):

And that is all that’s needed to make a working optimizer in the framework. You do not need to declare layer groups or any of the sort, that all occurs in the [ Learner](https://docs.fast.ai/learner.html#learner) class which we will do next!

## Training

Training in the fastai framework revolves around the [ Learner](https://docs.fast.ai/learner.html#learner) class. This class ties everything we declared earlier together and allows for quick training with many different schedulers and

[’s quickly.](https://docs.fast.ai/callback.core.html#callback)

`Callback`

Basic way for import

[is](https://docs.fast.ai/learner.html#learner)

`Learner`

`from fastai.learner import Learner`

Since we are using explicit exports in this tutorial, you will notice that we will import [ Learner](https://docs.fast.ai/learner.html#learner) different way. This is because

[is heavily monkey-patched throughout the library, so to utilize it best we need to get all of the existing patches through importing the module.](https://docs.fast.ai/learner.html#learner)

`Learner`

All `Callbacks`

will still work, regardless of the type of dataloaders. It is recommended to use the `.all`

import when wanting so, this way all callbacks are imported and anything related to the [ Learner](https://docs.fast.ai/learner.html#learner) is imported at once as well

To build the Learner (minimally), we need to pass in the [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders), our model, a loss function, potentially some metrics to use, and an optimizer function.

Let’s import the [ accuracy](https://docs.fast.ai/metrics.html#accuracy) metric from fastai:

We’ll use `nll_loss`

as our loss function as well

And build our [ Learner](https://docs.fast.ai/learner.html#learner):

Now that everything is tied together, let’s train our model with the One-Cycle policy through the `fit_one_cycle`

function. We’ll also use a learning rate of 1e-2 for a single epoch

It would be noted that fastai’s training loop will automatically take care of moving tensors to the proper devices during training, and will use the GPU by default if it is available. When using non-fastai native individual DataLoaders, it will look at the model’s device for what device we want to train with.

To access any of the above parameters, we look in similarly-named properties such as `learn.dls`

, `learn.model`

, `learn.loss_func`

, and so on.

Now let’s train:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.137776 | 0.048324 | 0.983600 | 00:10 |

```
/usr/local/lib/python3.7/dist-packages/torch/nn/functional.py:718: UserWarning: Named tensors and all their associated APIs are an experimental feature and subject to change. Please do not use them for anything important until they are released as stable. (Triggered internally at /pytorch/c10/core/TensorImpl.h:1156.)
return torch.max_pool2d(input, kernel_size, stride, padding, dilation, ceil_mode)
```


Now that we have trained our model, let’s simulate shipping off the model to be used on inference or various prediction methods.

## Exporting and Predicting

To export your trained model, you can either use the `learn.export`

method coupled with [ load_learner](https://docs.fast.ai/learner.html#load_learner) to load it back in, but it should be noted that none of the inference API will work, as we did not train with the fastai data API.

Instead you should save the model weights, and perform raw PyTorch inference.

We will walk through a quick example below.

First let’s save the model weights:

Generally when doing this approach you should also store the source code to build the model as well

[ Learner.save](https://docs.fast.ai/learner.html#learner.save) will save the optimizer state by default as well. When doing so the weights are located in the

`model`

key. We will set this to `false`

for this tutorialYou can see that it showed us the location where our trained weights were stored. Next, let’s load that in as a seperated PyTorch model not tied to the [ Learner](https://docs.fast.ai/learner.html#learner):

Finally, let’s predict on a single image using those `tfms`

we declared earlier.

When predicting in general we preprocess the dataset in the same form as the validation set, and this is how fastai does it as well with their `test_dl`

and [ test_set](https://docs.fast.ai/data.core.html#test_set) methods.

Since the downloaded dataset doesn’t have individual files for us to work with, we will download a set of only 3’s and 7’s from fastai, and predict on one of those images:

`(#3) [Path('/root/.fastai/data/mnist_sample/labels.csv'),Path('/root/.fastai/data/mnist_sample/valid'),Path('/root/.fastai/data/mnist_sample/train')]`


We’ll grab one of the `valid`

images

Open it in Pillow:

Next we will apply the same transforms that we did to our validation set

We’ll set it as a batch of 1:

And then predict with our model:

Let’s look at the predictions:

```
tensor([[-1.6179e+01, -1.0118e+01, -6.2008e+00, -4.2441e-03, -1.9511e+01,
-8.5174e+00, -2.2341e+01, -1.0145e+01, -6.8038e+00, -7.1086e+00]],
device='cuda:0')
```


This isn’t quite what fastai outputs, we need to convert this into a class label to make it similar. To do so, we simply take the argmax of the predictions over the first index.

If we were using fastai DataLoaders, it would use this as an index into a list of class names. Since our labels are 0-9, the argmax *is* our label:

And we can see it correctly predicted a label of 3!

---

## Source: https://docs.fast.ai/examples/migrating_ignite.html

# Ignite with fastai

We’re going to use the MNIST training code from Ignite’s examples directory (as at August 2020), converted to a module.

The source script for `migrating_ignite`

is in the `examples`

subdirectory of this folder if you checked out the `fastai`

repo from git, or can be downloaded from [here](https://github.com/fastai/fastai/blob/master/nbs/examples/migrating_ignite.py) if you’re using an online viewer such as Colab.

To use it in fastai, we first pull the DataLoaders from the module into a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object:

We can now create a [ Learner](https://docs.fast.ai/learner.html#learner) and fit:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.999266 | 0.597913 | 0.856200 | 00:22 |

As you can see, migrating from Ignite allowed us to replace 52 lines of code (in `run()`

) with just 3 lines, and doesn’t require you to change any of your existing data pipelines, optimizers, loss functions, models, etc. Once you’ve made this change, you can then benefit from fastai’s rich set of callbacks, transforms, visualizations, and so forth.

Note that fastai is very different from Ignite, in that it is much more than just a training loop (although we’re only using the training loop in this example) - it is a complete framework including GPU-accelerated transformations, end-to-end inference, integrated applications for vision, text, tabular, and collaborative filtering, and so forth. You can use any part of the framework on its own, or combine them together, as described in the [fastai paper](https://arxiv.org/abs/2002.04688).

---

## Source: https://docs.fast.ai/examples/migrating_lightning.html

# Lightning with fastai

We’re going to use the MNIST training code from Lightning’s ‘Quick Start’ (as at August 2020), converted to a module.

The source script for `migrating_lightning`

is in the `examples`

subdirectory of this folder if you checked out the `fastai`

repo from git, or can be downloaded from [here](https://github.com/fastai/fastai/blob/master/nbs/examples/migrating_lightning.py) if you’re using an online viewer such as Colab.

## Using fastai’s training loop

We can use the Lightning module directly:

To use it in fastai, we first pull the DataLoaders from the module into a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object:

We can now create a [ Learner](https://docs.fast.ai/learner.html#learner) and fit:

| epoch | train_loss | valid_loss | accuracy | time |
|---|---|---|---|---|
| 0 | 0.367197 | 0.333293 | 0.910800 | 00:11 |

As you can see, migrating from Lightning allowed us to reduce the amount of code, and doesn’t require you to change any of your existing data pipelines, optimizers, loss functions, models, etc. Once you’ve made this change, you can then benefit from fastai’s rich set of callbacks, transforms, visualizations, and so forth.

For instance, in the Lightning example, Tensorboard support was defined a special-case “logger”. In fastai, Tensorboard is just another [ Callback](https://docs.fast.ai/callback.core.html#callback) that you can add, with the parameter

`cbs=Tensorboard`

, when you create your [. The callbacks all work together, so you can add an remove any schedulers, loggers, visualizers, and so forth. You don’t have to learn about special types of functionality for each - they are all just plain callbacks.](https://docs.fast.ai/learner.html#learner)

`Learner`

Note that fastai is very different from Lightning, in that it is much more than just a training loop (although we’re only using the training loop in this example) - it is a complete framework including GPU-accelerated transformations, end-to-end inference, integrated applications for vision, text, tabular, and collaborative filtering, and so forth. You can use any part of the framework on its own, or combine them together, as described in the [fastai paper](https://arxiv.org/abs/2002.04688).

### Taking advantage of fastai Data Blocks

One problem in the Lightning example is that it doesn’t actually use a validation set - it’s just using the training set a second time as a validation set.

You might prefer to use fastai’s Data Block API, which makes it really easy to create, visualize, and test your input data processing. Here’s how you can create input data for MNIST, for instance:

Here, we’re telling [ DataBlock](https://docs.fast.ai/data.block.html#datablock) that we have a B&W image input, and a category output, our input items are file names of images, the images are labeled based on the name of the parent folder, and they are split by training vs validation based on the grandparent folder name. It’s important to actually look at your data, so fastai also makes it easy to visualize your inputs and outputs, for instance:

---

## Source: https://docs.fast.ai/examples/migrating_catalyst.html

# Catalyst with fastai

## Catalyst code

We’re going to use the MNIST training code from Catalyst’s README (as at August 2020), converted to a module.

The source script for `migrating_catalyst`

is in the `examples`

subdirectory of this folder if you checked out the `fastai`

repo from git, or can be downloaded from [here](https://github.com/fastai/fastai/blob/master/nbs/examples/migrating_catalyst.py) if you’re using an online viewer such as Colab.

To use it in fastai, we first convert the Catalyst dict into a [ DataLoaders](https://docs.fast.ai/data.core.html#dataloaders) object:

### Using callbacks

In the Catalyst code, a training loop is defined manually, which is where the input tensor is flattened. In fastai, there’s no need to define your own training loop - you can insert your own code into any part of the training process by using a callback, which can even modify data, gradients, the loss function, or anything else in the training loop:

The Catalyst example also modifies the training loop to add metrics, but you can pass these directly to your [ Learner](https://docs.fast.ai/learner.html#learner) in fastai:

You can now fit your model. fastai supports many schedulers. We recommend using 1cycle:

| epoch | train_loss | valid_loss | accuracy | top_k_accuracy | time |
|---|---|---|---|---|---|
| 0 | 0.230145 | 0.292590 | 0.924700 | 0.995000 | 00:13 |

As you can see, migrating from Catalyst allowed us to replace 17 lines of code (in `CustomRunner`

) with just 3 lines, and doesn’t require you to change any of your existing data pipelines, optimizers, loss functions, models, etc. Once you’ve made this change, you can then benefit from fastai’s rich set of callbacks, transforms, visualizations, and so forth.

Note that fastai is very different from Catalyst, in that it is much more than just a training loop (although we’re only using the training loop in this example) - it is a complete framework including GPU-accelerated transformations, end-to-end inference, integrated applications for vision, text, tabular, and collaborative filtering, and so forth. You can use any part of the framework on its own, or combine them together, as described in the [fastai paper](https://arxiv.org/abs/2002.04688).

### Changing the model

Instead of using callbacks, in this case you can also simply change the model. Here we pull the `view()`

out of the training loop, and into the model, using fastai’s [ Flatten](https://docs.fast.ai/layers.html#flatten) layer:

We can now create a [ Learner](https://docs.fast.ai/learner.html#learner) and train without using any callbacks:

---

## Source: https://docs.fast.ai/learner.html

# Learner, Metrics, Callbacks

You probably want to jump directly to the definition of [ Learner](https://docs.fast.ai/learner.html#learner).

## Utils function

### replacing_yield

*Context manager to temporarily replace an attribute*

### mk_metric

*Convert m to an AvgMetric, unless it’s already a Metric*



See the class [ Metric](https://docs.fast.ai/learner.html#metric) below for more information.

### save_model

*Save model to file along with opt (if available, and if with_opt)*




`file`

can be a `Path`

object, a string or an opened file object. `pickle_protocol`

and `torch_save_kwargs`

is passed along to `torch.save`


### load_model

*Load model from file along with opt (if available, and if with_opt)*




`file`

can be a `Path`

object, a string or an opened file object. If a `device`

is passed, the model is loaded on it, otherwise it’s loaded on the CPU.

If `strict`

is `True`

, the file must exactly contain weights for every parameter key in `model`

, if `strict`

is `False`

, only the keys that are in the saved model are loaded in `model`

.

You can pass in other kwargs to `torch.load`

through `torch_load_kwargs`

.

As of PyTorch 2.5 and fastai 2.7.19, [ load_model](https://docs.fast.ai/learner.html#load_model) uses PyTorch’s safe serialization for model loading.

### SkipToEpoch

*Skip training up to epoch*

### Learner

def Learner(
dls:DataLoaders, # [`DataLoaders`](https://docs.fast.ai/data.core.html#dataloaders) containing fastai or PyTorch [`DataLoader`](https://docs.fast.ai/data.load.html#dataloader)s
model:Callable, # PyTorch model for training or inference
loss_func:Callable | None=None, # Loss function. Defaults to `dls` loss
opt_func:Optimizer | OptimWrapper=Adam, # Optimization function for training
lr:float | slice=0.001, # Default learning rate
splitter:Callable=trainable_params, # Split model into parameter groups. Defaults to one parameter group
cbs:Callback | MutableSequence | None=None, # [`Callback`](https://docs.fast.ai/callback.core.html#callback)s to add to [`Learner`](https://docs.fast.ai/learner.html#learner)
metrics:Callable | MutableSequence | None=None, # [`Metric`](https://docs.fast.ai/learner.html#metric)s to calculate on validation set
path:str | Path | None=None, # Parent directory to save, load, and export models. Defaults to `dls` `path`
model_dir:str | Path='models', # Subdirectory to save and load models
wd:float | int | None=None, # Default weight decay
wd_bn_bias:bool=False, # Apply weight decay to normalization and bias parameters
train_bn:bool=True, # Train frozen normalization layers
moms:tuple=(0.95, 0.85, 0.95), # Default momentum for schedulers
default_cbs:bool=True, # Include default [`Callback`](https://docs.fast.ai/callback.core.html#callback)s
):


*Group together a model, some dls and a loss_func to handle training*



`opt_func`

will be used to create an optimizer when [ Learner.fit](https://docs.fast.ai/learner.html#learner.fit) is called, with

`lr`

as a default learning rate. `splitter`

is a function that takes `self.model`

and returns a list of parameter groups (or just one parameter group if there are no different parameter groups). The default is [, which returns all trainable parameters of the model.](https://docs.fast.ai/torch_core.html#trainable_params)

`trainable_params`

`cbs`

is one or a list of [ Callback](https://docs.fast.ai/callback.core.html#callback)s to pass to the

[.](https://docs.fast.ai/learner.html#learner)

`Learner`

[s are used for every tweak of the training loop. Each](https://docs.fast.ai/callback.core.html#callback)

`Callback`

[is registered as an attribute of](https://docs.fast.ai/callback.core.html#callback)

`Callback`

[(with camel case). At creation, all the callbacks in](https://docs.fast.ai/learner.html#learner)

`Learner`

`defaults.callbacks`

([,](https://docs.fast.ai/callback.core.html#trainevalcallback)

`TrainEvalCallback`

[and](https://docs.fast.ai/learner.html#recorder)

`Recorder`

[) are associated to the](https://docs.fast.ai/callback.progress.html#progresscallback)

`ProgressCallback`

[.](https://docs.fast.ai/learner.html#learner)

`Learner`

`metrics`

is an optional list of metrics, that can be either functions or [ Metric](https://docs.fast.ai/learner.html#metric)s (see below).

`path`

and `model_dir`

are used to save and/or load models. Often `path`

will be inferred from `dls`

, but you can override it or pass a `Path`

object to `model_dir`

. Make sure you can write in `path/model_dir`

!

`wd`

is the default weight decay used when training the model; `moms`

, the default momentums used in [ Learner.fit_one_cycle](https://docs.fast.ai/callback.schedule.html#learner.fit_one_cycle).

`wd_bn_bias`

controls if weight decay is applied to [layers and bias.](https://docs.fast.ai/layers.html#batchnorm)

`BatchNorm`

Lastly, `train_bn`

controls if [ BatchNorm](https://docs.fast.ai/layers.html#batchnorm) layers are trained even when they are supposed to be frozen according to the

`splitter`

. Our empirical experiments have shown that it’s the best behavior for those layers in transfer learning.### PyTorch interop

You can use regular PyTorch functionality for most of the arguments of the [ Learner](https://docs.fast.ai/learner.html#learner), although the experience will be smoother with pure fastai objects and you will be able to use the full functionality of the library. The expectation is that the training loop will work smoothly even if you did not use fastai end to end. What you might lose are interpretation objects or showing functionality. The list below explains how to use plain PyTorch objects for all the arguments and what you might lose.

The most important is `opt_func`

. If you are not using a fastai optimizer, you will need to write a function that wraps your PyTorch optimizer in an [ OptimWrapper](https://docs.fast.ai/optimizer.html#optimwrapper). See the

[optimizer module](http://docs.fast.ai/optimizer.html)for more details. This is to ensure the library’s schedulers/freeze API work with your code.

`dls`

is aobject, that you can create from standard PyTorch dataloaders. By doing so, you will lose all showing functionality like`DataLoaders`

/`show_batch`

. You can check the`show_results`

[data block API](http://docs.fast.ai/tutorial.datablock.html)or the[mid-level data API tutorial](http://docs.fast.ai/tutorial.pets.html)to learn how to use fastai to gather your data!`model`

is a standard PyTorch model. You can use anyone you like, just make sure it accepts the number of inputs you have in yourand returns as many outputs as you have targets.`DataLoaders`

`loss_func`

can be any loss function you like. It needs to be one of fastai’s if you want to use`Learn.predict`

or`Learn.get_preds`

, or you will have to implement special methods (see more details after thedocumentation).`BaseLoss`


### Training loop

Now let’s look at the main thing the [ Learner](https://docs.fast.ai/learner.html#learner) class implements: the training loop.

### Learner.fit

*Fit self.model for n_epoch using cbs. Optionally reset_opt.*




Uses `lr`

and `wd`

if they are provided, otherwise use the defaults values given by the `lr`

and `wd`

attributes of [ Learner](https://docs.fast.ai/learner.html#learner).

All the examples use [ synth_learner](https://docs.fast.ai/test_utils.html#synth_learner) which is a simple

[training a linear regression model.](https://docs.fast.ai/learner.html#learner)

`Learner`

#Training a few epochs should make the model better
learn = synth_learner(lr=0.1)
learn(_before_epoch)
learn.model = learn.model.cpu()
xb,yb = learn.dls.one_batch()
init_loss = learn.loss_func(learn.model(xb), yb)
learn.fit(10)
xb,yb = learn.dls.one_batch()
final_loss = learn.loss_func(learn.model(xb), yb)
assert final_loss < init_loss, (final_loss,init_loss)


### Learner.one_batch

*Train or evaluate self.model on batch (xb,yb)*


This is an internal method called by [ Learner.fit](https://docs.fast.ai/learner.html#learner.fit). If passed,

`i`

is the index of this iteration in the epoch. In training mode, this does a full training step on the batch (compute predictions, loss, gradients, update the model parameters and zero the gradients). In validation mode, it stops at the loss computation. Training or validation is controlled internally by the [through the](https://docs.fast.ai/callback.core.html#trainevalcallback)

`TrainEvalCallback`

`training`

attribute.Nothing is returned, but the attributes `x`

, `y`

, `pred`

, `loss`

of the [ Learner](https://docs.fast.ai/learner.html#learner) are set with the proper values:

### Learner.all_batches

*Train or evaluate self.model on all the batches of self.dl*


### Learner.create_opt

*Create an optimizer with default hyper-parameters*

This method is called internally to create the optimizer, the hyper-parameters are then adjusted by what you pass to [ Learner.fit](https://docs.fast.ai/learner.html#learner.fit) or your particular schedulers (see

`callback.schedule`

).`after_create`


`after_create`


### Callback handling

We only describe the basic functionality linked to [ Callback](https://docs.fast.ai/callback.core.html#callback)s here. To learn more about

[s and how to write them, check the](https://docs.fast.ai/callback.core.html#callback)

`Callback`

[callback.core](http://docs.fast.ai/callback.core.html)module documentation.

Let’s first see how the [ Callback](https://docs.fast.ai/callback.core.html#callback)s become attributes of

[:](https://docs.fast.ai/learner.html#learner)

`Learner`

#Test init with callbacks
class TstCallback(Callback):
def batch_begin(self): self.learn.a = self.a + 1
tst_learn = synth_learner()
test_eq(len(tst_learn.cbs), 1)
assert hasattr(tst_learn, ('train_eval'))
tst_learn = synth_learner(cbs=TstCallback())
test_eq(len(tst_learn.cbs), 2)
assert hasattr(tst_learn, ('tst'))


### Learner.__call__

*Call event_name for all Callbacks in self.cbs*



This how the [ Callback](https://docs.fast.ai/callback.core.html#callback)s are called internally. For instance a

[just prints the event names (can be useful for debugging):](https://docs.fast.ai/test_utils.html#verbosecallback)

`VerboseCallback`

### Learner.add_cb

*Add cb to the list of Callback and register self as their learner*



### Learner.add_cbs

*Add cbs to the list of Callback and register self as their learner*



### Learner.added_cbs

### Learner.ordered_cbs

*List of Callbacks, in order, for an event in the training loop*



By order, we mean using the internal ordering of the [ Callback](https://docs.fast.ai/callback.core.html#callback)s (see

`callback.core`

for more information on how it works).`[TrainEvalCallback, TestTrainEvalCallback]`


### Learner.remove_cb

*Add cb from the list of Callback and deregister self as their learner*



`cb`

can simply be the class of the [ Callback](https://docs.fast.ai/callback.core.html#callback) we want to remove (in which case all instances of that callback are removed).

### Learner.remove_cbs

*Remove cbs from the list of Callback and deregister self as their learner*



Elements of `cbs`

can either be types of callbacks or actual callbacks of the [ Learner](https://docs.fast.ai/learner.html#learner).

### Learner.removed_cbs

Elements of `cbs`

can either be types of callbacks or actual callbacks of the [ Learner](https://docs.fast.ai/learner.html#learner).

### Learner.show_training_loop

*Show each step in the training loop*

At each step, callbacks are shown in order, which can help debugging.

```
Start Fit
- before_fit : [TrainEvalCallback]
Start Epoch Loop
- before_epoch : []
Start Train
- before_train : [TrainEvalCallback]
Start Batch Loop
- before_batch : []
- after_pred : []
- after_loss : []
- before_backward: []
- before_step : []
- after_step : []
- after_cancel_batch: []
- after_batch : [TrainEvalCallback]
End Batch Loop
End Train
- after_cancel_train: []
- after_train : []
Start Valid
- before_validate: [TrainEvalCallback]
Start Batch Loop
- **CBs same as train batch**: []
End Batch Loop
End Valid
- after_cancel_validate: []
- after_validate : []
End Epoch Loop
- after_cancel_epoch: []
- after_epoch : []
End Fit
- after_cancel_fit: []
- after_fit : []
```


### before_batch_cb

*Shortcut for creating a Callback on the before_batch event, which takes and returns xb,yb*


In order to change the data passed to your model, you will generally want to hook into the `before_batch`

event, like so:

Since that is so common, we provide the [ before_batch_cb](https://docs.fast.ai/learner.html#before_batch_cb) decorator to make it easier.

### Serializing

### Learner.save

*Save model and optimizer state (if with_opt) to self.path/self.model_dir/file*


`file`

can be a `Path`

, a `string`

or a buffer. `pickle_protocol`

is passed along to `torch.save`

.

### Learner.load

*Load model and optimizer state (if with_opt) from self.path/self.model_dir/file using device*



`file`

can be a `Path`

, a `string`

or a buffer. Use `device`

to load the model/optimizer state on a device different from the one it was saved.

As of PyTorch 2.5 and fastai 2.7.19, [ Learner.load](https://docs.fast.ai/learner.html#learner.load) uses PyTorch’s safe serialization for model loading.

with tempfile.TemporaryDirectory() as d:
learn = synth_learner(path=d)
learn.fit(1)
#Test save created a file
learn.save('tmp')
assert (Path(d)/'models/tmp.pth').exists()
#Test load did load the model
learn1 = synth_learner(path=d)
learn1 = learn1.load('tmp')
test_eq(learn.a, learn1.a)
test_eq(learn.b, learn1.b)
test_eq(learn.opt.state_dict(), learn1.opt.state_dict())


### Learner.export

*Export the content of self without the items and the optimizer state for inference*

The [ Learner](https://docs.fast.ai/learner.html#learner) is saved in

`self.path/fname`

, using `pickle_protocol`

. Note that serialization in Python saves the names of functions, not the code itself. Therefore, any custom code you have for models, data transformation, loss function etc… should be put in a module that you will import in your training environment before exporting, and in your deployment environment before loading it.### load_learner

*Load a Learner object in fname, by default putting it on the cpu*




[ load_learner](https://docs.fast.ai/learner.html#load_learner) uses Python’s insecure

`pickle`

module. Maliciously crafted pickle data can execute arbitrary code when loading. Never use [on untrusted or potentially compromised sources.](https://docs.fast.ai/learner.html#load_learner)

`load_learner`

**Only load files you fully trust**.”

If you only need to load model weights and optimizer state, use the safe [ Learner.load](https://docs.fast.ai/learner.html#learner.load) instead.

[ load_learner](https://docs.fast.ai/learner.html#load_learner) requires all your custom code be in the exact same place as when exporting your

[(the main script, or the module you imported it from).](https://docs.fast.ai/learner.html#learner)

`Learner`

### Learner.to_detach

*Calls to_detach if self.dl provides a .to_detach function otherwise calls global to_detach*





fastai provides [ to_detach](https://docs.fast.ai/torch_core.html#to_detach) which by default detachs tensor gradients, and gathers (calling

[) tensors from all ranks if running in distributed data parallel (DDP) mode.](https://docs.fast.ai/torch_core.html#maybe_gather)

`maybe_gather`

When running in DDP mode all ranks need to have the same batch size, and [ DistributedDL](https://docs.fast.ai/distributed.html#distributeddl) takes care of padding batches as needed; however when gathering all tensors (e.g. for calculating metrics, inference, etc.) we need to discard the padded items.

[provides a method](https://docs.fast.ai/distributed.html#distributeddl)

`DistributedDL`

[that removes padding appropriately.](https://docs.fast.ai/torch_core.html#to_detach)

`to_detach`

Calling the learner’s [ to_detach](https://docs.fast.ai/torch_core.html#to_detach) method will attempt to find a

[method in the learner’s last used](https://docs.fast.ai/torch_core.html#to_detach)

`to_detach`


`DataLoader`

`dl`

and use that one if found, otherwise it will resort to the vanilla [.](https://docs.fast.ai/torch_core.html#to_detach)

`to_detach`

### Metric

*Blueprint for defining a metric*

Metrics can be simple averages (like accuracy) but sometimes their computation is a little bit more complex and can’t be averaged over batches (like precision or recall), which is why we need a special class for them. For simple functions that can be computed as averages over batches, we can use the class [ AvgMetric](https://docs.fast.ai/learner.html#avgmetric), otherwise you’ll need to implement the following methods.

If your `Metric`

has state depending on tensors, don’t forget to store it on the CPU to avoid any potential memory leaks.

### Metric.reset

*Reset inner state to prepare for new computation*

### Metric.accumulate

*Use learn to update the state with new results*

### Metric.value

### Metric.name

### AvgMetric

*Average the values of func taking into account potential different batch sizes*

### AvgLoss

*Average the losses taking into account potential different batch sizes*

### AvgSmoothLoss

*Smooth average of the losses (exponentially weighted with beta)*

### ValueMetric

*Use to include a pre-calculated metric value (for instance calculated in a Callback) and returned by func*



## Recorder –

### Recorder

*Callback that registers statistics (lr, loss and metrics) during training*

By default, metrics are computed on the validation set only, although that can be changed by adjusting `train_metrics`

and `valid_metrics`

. `beta`

is the weight used to compute the exponentially weighted average of the losses (which gives the `smooth_loss`

attribute to [ Learner](https://docs.fast.ai/learner.html#learner)).

The `logger`

attribute of a [ Learner](https://docs.fast.ai/learner.html#learner) determines what happens to those metrics. By default, it just print them:

#Test printed output
def tst_metric(out, targ): return F.mse_loss(out, targ)
learn = synth_learner(n_train=5, metrics=tst_metric, default_cbs=False, cbs=[TrainEvalCallback, Recorder])
# pat = r"[tensor\(\d.\d*\), tensor\(\d.\d*\), tensor\(\d.\d*\), 'dd:dd']"
pat = r"\[\d, \d+.\d+, \d+.\d+, \d+.\d+, '\d\d:\d\d'\]"
test_stdout(lambda: learn.fit(1), pat, regex=True)


### Internals

### Recorder.before_fit

*Prepare state for training*

### Recorder.before_epoch

*Set timer if self.add_time=True*

### Recorder.before_validate

*Reset loss and metrics state*

### Recorder.after_batch

*Update all metrics and records lr and smooth loss in training*

### Recorder.after_epoch

*Store and log the loss/metric values*

### Plotting tools

### Recorder.plot_loss

*Plot the losses from skip_start and onward. Optionally log=True for logarithmic axis, show_epochs=True for indicate epochs and a matplotlib axis ax to plot on.*




### CastToTensor

def CastToTensor(
after_create:NoneType=None, before_fit:NoneType=None, before_epoch:NoneType=None, before_train:NoneType=None,
before_batch:NoneType=None, after_pred:NoneType=None, after_loss:NoneType=None, before_backward:NoneType=None,
after_cancel_backward:NoneType=None, after_backward:NoneType=None, before_step:NoneType=None,
after_cancel_step:NoneType=None, after_step:NoneType=None, after_cancel_batch:NoneType=None,
after_batch:NoneType=None, after_cancel_train:NoneType=None, after_train:NoneType=None,
before_validate:NoneType=None, after_cancel_validate:NoneType=None, after_validate:NoneType=None,
after_cancel_epoch:NoneType=None, after_epoch:NoneType=None, after_cancel_fit:NoneType=None,
after_fit:NoneType=None
):


*Cast Subclassed Tensors to Tensor*

Workaround for bug in PyTorch where subclassed tensors, such as [ TensorBase](https://docs.fast.ai/torch_core.html#tensorbase), train up to ~20% slower than

`Tensor`

when passed to a model. Added to [by default.](https://docs.fast.ai/learner.html#learner)

`Learner`

CastToTensor’s order is right before [ MixedPrecision](https://docs.fast.ai/callback.fp16.html#mixedprecision) so callbacks which make use of fastai’s tensor subclasses still can use them.

If inputs are not a subclassed tensor or tuple of tensors, you may need to cast inputs in `Learner.xb`

and `Learner.yb`

to `Tensor`

via your own callback or in the dataloader before [ Learner](https://docs.fast.ai/learner.html#learner) performs the forward pass.

If the CastToTensor workaround interferes with custom code, it can be removed:

You should verify your inputs are of type `Tensor`

or implement a cast to `Tensor`

via a custom callback or dataloader if CastToTensor is removed.

## Inference functions

### Learner.validate

*Validate on dl with potential new cbs.*


### Learner.get_preds

def get_preds(
ds_idx:int=1, # [`DataLoader`](https://docs.fast.ai/data.load.html#dataloader) to use for predictions if `dl` is None. 0: train. 1: valid
dl:NoneType=None, # [`DataLoader`](https://docs.fast.ai/data.load.html#dataloader) to use for predictions, defaults to `ds_idx=1` if None
with_input:bool=False, # Return inputs with predictions
with_decoded:bool=False, # Return decoded predictions
with_loss:bool=False, # Return per item loss with predictions
act:NoneType=None, # Apply activation to predictions, defaults to `self.loss_func`'s activation
inner:bool=False, # If False, create progress bar, show logger, use temporary `cbs`
reorder:bool=True, # Reorder predictions on dataset indicies, if applicable
cbs:Callback | MutableSequence | None=None, # Temporary [`Callback`](https://docs.fast.ai/callback.core.html#callback)s to apply during prediction
save_preds:Path=None, # Path to save predictions
save_targs:Path=None, # Path to save targets
with_preds:bool=True, # Whether to return predictions
with_targs:bool=True, # Whether to return targets
concat_dim:int=0, # Dimension to concatenate returned tensors
pickle_protocol:int=2, # Pickle protocol used to save predictions and targets
)->tuple:


*Get the predictions and targets on the ds_idx-th dbunchset or dl, optionally with_input and with_loss*




`with_decoded`

will also return the decoded predictions using the `decodes`

function of the loss function (if it exists). For instance, fastai’s `CrossEntropyFlat`

takes the argmax or predictions in its decodes.

Depending on the `loss_func`

attribute of [ Learner](https://docs.fast.ai/learner.html#learner), an activation function will be picked automatically so that the predictions make sense. For instance if the loss is a case of cross-entropy, a softmax will be applied, or if the loss is binary cross entropy with logits, a sigmoid will be applied. If you want to make sure a certain activation function is applied, you can pass it with

`act`

.`save_preds`

and `save_targs`

should be used when your predictions are too big to fit all in memory. Give a `Path`

object that points to a folder where the predictions and targets will be saved.

`concat_dim`

is the batch dimension, where all the tensors will be concatenated.

`inner`

is an internal attribute that tells `get_preds`

it’s called internally, inside another training loop, to avoid recursion errors.

If you want to use the option `with_loss=True`

on a custom loss function, make sure you have implemented a `reduction`

attribute that supports ‘none’

#Test result
learn = synth_learner(n_train=5, metrics=tst_metric)
preds,targs = learn.get_preds()
x,y = learn.dls.valid_ds.tensors
test_eq(targs, y)
test_close(preds, learn.model(x))
preds,targs = learn.get_preds(act = torch.sigmoid)
test_eq(targs, y)
test_close(preds, torch.sigmoid(learn.model(x)))


### Learner.predict

*Prediction on item, fully decoded, loss function decoded and probabilities*

It returns a tuple of three elements with, in reverse order, - the prediction from the model, potentially passed through the activation of the loss function (if it has one) - the decoded prediction, using the potential `decodes`

method from it - the fully decoded prediction, using the transforms used to build the [ Datasets](https://docs.fast.ai/data.core.html#datasets)/


`DataLoaders`

`rm_type_tfms`

is a deprecated argument that should not be used and will be removed in a future version. `with_input`

will add the decoded inputs to the result.

class _FakeLossFunc(Module):
reduction = 'none'
def forward(self, x, y): return F.mse_loss(x,y)
def activation(self, x): return x+1
def decodes(self, x): return 2*x
class _Add1(Transform):
def encodes(self, x): return x+1
def decodes(self, x): return x-1
learn = synth_learner(n_train=5)
dl = TfmdDL(Datasets(torch.arange(50), tfms = [L(), [_Add1()]]))
learn.dls = DataLoaders(dl, dl)
learn.loss_func = _FakeLossFunc()
inp = tensor([2.])
out = learn.model(inp).detach()+1 #applying model + activation
dec = 2*out #decodes from loss function
full_dec = dec-1 #decodes from _Add1
test_eq(learn.predict(inp), [full_dec,dec,out])
test_eq(learn.predict(inp, with_input=True), [inp,full_dec,dec,out])


### Learner.show_results

*Show some predictions on ds_idx-th dataset or dl*


Will show `max_n`

samples (unless the batch size of `ds_idx`

or `dl`

is less than `max_n`

, in which case it will show as many samples) and `shuffle`

the data unless you pass `false`

to that flag. `kwargs`

are application-dependent.

We can’t show an example on our synthetic [ Learner](https://docs.fast.ai/learner.html#learner), but check all the beginners tutorials which will show you how that method works across applications.

The last functions in this section are used internally for inference, but should be less useful to you.

### Learner.no_logging

### Learner.loss_not_reduced

This requires your loss function to either have a `reduction`

attribute or a `reduction`

argument (like all fastai and PyTorch loss functions).

## Transfer learning

### Learner.unfreeze

*Unfreeze the entire model*

### Learner.freeze

*Freeze up to last parameter group*

### Learner.freeze_to

*Freeze parameter groups up to n*

## TTA

### Learner.tta

*Return predictions on the ds_idx dataset or dl using Test Time Augmentation*


In practice, we get the predictions `n`

times with the transforms of the training set and average those. The final predictions are `(1-beta)`

multiplied by this average + `beta`

multiplied by the predictions obtained with the transforms of the dataset. Set `beta`

to `None`

to get a tuple of the predictions and tta results. You can also use the maximum of all predictions instead of an average by setting `use_max=True`

.

If you want to use new transforms, you can pass them with `item_tfms`

and `batch_tfms`

.

---

## Source: https://docs.fast.ai/optimizer.html

add_docs(_BaseOptimizer,
all_params="List of param_groups, parameters, and hypers",
freeze_to="Freeze parameter groups up to `n`",
freeze="Freeze up to last parameter group",
unfreeze="Unfreeze the entire model",
set_hypers="`set_hyper` for all `kwargs`",
set_hyper="Set the value(s) in `v` for hyper-parameter `k`")


# Optimizers

### Optimizer

*Base optimizer class for the fastai library, updating params with cbs*



add_docs(Optimizer,
zero_grad="Standard PyTorch API: Zero all the grad attributes of the parameters",
step="Standard PyTorch API: Update the stats and execute the steppers in on all parameters that have a grad",
state_dict="Return the state of the optimizer in a dictionary",
load_state_dict="Load the content of `sd`",
clear_state="Reset the state of the optimizer")


### Initializing an Optimizer

[ params](https://docs.fast.ai/torch_core.html#params) will be used to create the

`param_groups`

of the optimizer. If it’s a collection (or a generator) of parameters, it will be a `L`

containing one `L`

with all the parameters. To define multiple parameter groups [should be passed as a collection (or a generator) of](https://docs.fast.ai/torch_core.html#params)

`params`

`L`

s.In PyTorch, `model.parameters()`

returns a generator with all the parameters, that you can directly pass to `Optimizer`

.

opt = Optimizer([1,2,3], noop)
test_eq(opt.param_lists, [[1,2,3]])
opt = Optimizer(range(3), noop)
test_eq(opt.param_lists, [[0,1,2]])
opt = Optimizer([[1,2],[3]], noop)
test_eq(opt.param_lists, [[1,2],[3]])
opt = Optimizer(([o,o+1] for o in range(0,4,2)), noop)
test_eq(opt.param_lists, [[0,1],[2,3]])


`cbs`

is a list of functions that will be composed when applying the step. For instance, you can compose a function making the SGD step, with another one applying weight decay. Additionally, each `cb`

can have a `defaults`

attribute that contains hyper-parameters and their default value. Those are all gathered at initialization, and new values can be passed to override those defaults with the `defaults`

kwargs. The steppers will be called by [ Optimizer.step](https://docs.fast.ai/optimizer.html#optimizer.step) (which is the standard PyTorch name), and gradients can be cleared with

[(also a standard PyTorch name).](https://docs.fast.ai/optimizer.html#optimizer.zero_grad)

`Optimizer.zero_grad`

Once the defaults have all been pulled off, they are copied as many times as there are `param_groups`

and stored in `hypers`

. To apply different hyper-parameters to different groups (differential learning rates, or no weight decay for certain layers for instance), you will need to adjust those values after the init.

def tst_arg(p, lr=0, **kwargs): return p
tst_arg.defaults = dict(lr=1e-2)
def tst_arg2(p, lr2=0, **kwargs): return p
tst_arg2.defaults = dict(lr2=1e-3)
def tst_arg3(p, mom=0, **kwargs): return p
tst_arg3.defaults = dict(mom=0.9)
def tst_arg4(p, **kwargs): return p
opt = Optimizer([1,2,3], [tst_arg,tst_arg2, tst_arg3])
test_eq(opt.hypers, [{'lr2': 1e-3, 'mom': 0.9, 'lr': 1e-2}])
opt = Optimizer([1,2,3], tst_arg, lr=0.1)
test_eq(opt.hypers, [{'lr': 0.1}])
opt = Optimizer([[1,2],[3]], tst_arg)
test_eq(opt.hypers, [{'lr': 1e-2}, {'lr': 1e-2}])
opt = Optimizer([[1,2],[3]], tst_arg, lr=0.1)
test_eq(opt.hypers, [{'lr': 0.1}, {'lr': 0.1}])


For each hyper-parameter, you can pass a slice or a collection to set them, if there are multiple parameter groups. A slice will be converted to a log-uniform collection from its beginning to its end, or if it only has an end `e`

, to a collection of as many values as there are parameter groups that are `...,e/10,e/10,e`

.

Setting an hyper-parameter with a collection that has a different number of elements than the optimizer has parameter groups will raise an error.

opt = Optimizer([[1,2],[3]], tst_arg, lr=[0.1,0.2])
test_eq(opt.hypers, [{'lr': 0.1}, {'lr': 0.2}])
opt = Optimizer([[1,2],[3],[4]], tst_arg, lr=slice(1e-2))
test_eq(opt.hypers, [{'lr': 1e-3}, {'lr': 1e-3}, {'lr': 1e-2}])
opt = Optimizer([[1,2],[3],[4]], tst_arg, lr=slice(1e-4,1e-2))
test_eq(opt.hypers, [{'lr': 1e-4}, {'lr': 1e-3}, {'lr': 1e-2}])
test_eq(opt.param_groups, [{'params': [1,2], 'lr': 1e-4}, {'params': [3], 'lr': 1e-3}, {'params': [4], 'lr': 1e-2}])
test_fail(lambda: Optimizer([[1,2],[3],[4]], tst_arg, lr=np.array([0.1,0.2])))


### Basic steppers

To be able to give examples of optimizer steps, we will need some steppers, like the following:

### sgd_step

### weight_decay

*Weight decay as decaying p with lr*wd*


### l2_reg

*L2 regularization as adding wd*p to p.grad*


Weight decay and L2 regularization is the same thing for basic SGD, but for more complex optimizers, they are very different.

### Making the step

### Optimizer.step

This method will loop over all param groups, then all parameters for which `grad`

is not None and call each function in `stepper`

, passing it the parameter `p`

with the hyper-parameters in the corresponding dict in `hypers`

.

### Optimizer.zero_grad

Some of the `Optimizer`

`cbs`

can be functions updating the state associated with a parameter. That state can then be used by any stepper. The best example is a momentum calculation.

def tst_stat(p, **kwargs):
s = kwargs.get('sum', torch.zeros_like(p)) + p.data
return {'sum': s}
tst_stat.defaults = {'mom': 0.9}
#Test Optimizer init
opt = Optimizer([1,2,3], tst_stat)
test_eq(opt.hypers, [{'mom': 0.9}])
opt = Optimizer([1,2,3], tst_stat, mom=0.99)
test_eq(opt.hypers, [{'mom': 0.99}])
#Test stat
x = torch.randn(4,5)
state = tst_stat(x)
assert 'sum' in state
test_eq(x, state['sum'])
state = tst_stat(x, **state)
test_eq(state['sum'], 2*x)


## Statistics

### average_grad

*Keeps track of the avg grads of p in state with mom.*



`dampening=False`

gives the classical formula for momentum in SGD:

`new_val = old_val * mom + grad`


whereas `dampening=True`

makes it an exponential moving average:

`new_val = old_val * mom + grad * (1-mom)`


p = tst_param([1,2,3], [4,5,6])
state = {}
state = average_grad(p, mom=0.9, **state)
test_eq(state['grad_avg'], p.grad)
state = average_grad(p, mom=0.9, **state)
test_eq(state['grad_avg'], p.grad * 1.9)
#Test dampening
state = {}
state = average_grad(p, mom=0.9, dampening=True, **state)
test_eq(state['grad_avg'], 0.1*p.grad)
state = average_grad(p, mom=0.9, dampening=True, **state)
test_close(state['grad_avg'], (0.1*0.9+0.1)*p.grad)


### average_sqr_grad

`dampening=False`

gives the classical formula for momentum in SGD:

`new_val = old_val * mom + grad**2`


whereas `dampening=True`

makes it an exponential moving average:

`new_val = old_val * mom + (grad**2) * (1-mom)`


p = tst_param([1,2,3], [4,5,6])
state = {}
state = average_sqr_grad(p, sqr_mom=0.99, dampening=False, **state)
test_eq(state['sqr_avg'], p.grad.pow(2))
state = average_sqr_grad(p, sqr_mom=0.99, dampening=False, **state)
test_eq(state['sqr_avg'], p.grad.pow(2) * 1.99)
#Test dampening
state = {}
state = average_sqr_grad(p, sqr_mom=0.99, **state)
test_close(state['sqr_avg'], 0.01*p.grad.pow(2))
state = average_sqr_grad(p, sqr_mom=0.99, **state)
test_close(state['sqr_avg'], (0.01*0.99+0.01)*p.grad.pow(2))


### Freezing part of the model

### Optimizer.freeze

### Optimizer.freeze_to

### Optimizer.unfreeze

#Freezing the first layer
params = [tst_params(), tst_params(), tst_params()]
opt = Optimizer(params, sgd_step, lr=0.1)
opt.freeze_to(1)
req_grad = Self.requires_grad()
test_eq(L(params[0]).map(req_grad), [False]*4)
for i in {1,2}: test_eq(L(params[i]).map(req_grad), [True]*4)
#Unfreezing
opt.unfreeze()
for i in range(2): test_eq(L(params[i]).map(req_grad), [True]*4)
#TODO: test warning
# opt.freeze_to(3)


Parameters such as batchnorm weights/bias can be marked to always be in training mode, just put `force_train=true`

in their state.

params = [tst_params(), tst_params(), tst_params()]
opt = Optimizer(params, sgd_step, lr=0.1)
for p in L(params[1])[[1,3]]: opt.state[p] = {'force_train': True}
opt.freeze()
test_eq(L(params[0]).map(req_grad), [False]*4)
test_eq(L(params[1]).map(req_grad), [False, True, False, True])
test_eq(L(params[2]).map(req_grad), [True]*4)


### Serializing

### Optimizer.state_dict

### Optimizer.load_state_dict

p = tst_param([1,2,3], [4,5,6])
opt = Optimizer(p, average_grad)
opt.step()
test_eq(opt.state[p]['grad_avg'], tensor([[4., 5., 6.]]))
sd = opt.state_dict()
p1 = tst_param([10,20,30], [40,50,60])
opt = Optimizer(p1, average_grad, mom=0.99)
test_eq(opt.hypers[0]['mom'], 0.99)
test_eq(opt.state, {})
opt.load_state_dict(sd)
test_eq(opt.hypers[0]['mom'], 0.9)
test_eq(opt.state[p1]['grad_avg'], tensor([[4., 5., 6.]]))


### Optimizer.clear_state

## Optimizers

### SGD with momentum

### momentum_step

*Step for SGD with momentum with lr*

### SGD

*A SGD *

`Optimizer`

Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

#SGD with momentum
params = tst_params()
opt = SGD(params, lr=0.1, mom=0.9)
assert isinstance(opt, Optimizer)
opt.step()
test_close([p.item() for p in params], [i*0.99 for i in range(4)])
opt.step()
test_close([p.item() for p in params], [i*(1 - 0.1 * (0.1 + 0.1*1.9)) for i in range(4)])
for i,p in enumerate(params): test_close(opt.state[p]['grad_avg'].item(), i*0.19)


Test weight decay, notice how we can see that L2 regularization is different from weight decay even for simple SGD with momentum.

params = tst_params()
#Weight decay
opt = SGD(params, lr=0.1, mom=0.9, wd=0.1)
opt.step()
test_close([p.item() for p in params], [i*0.98 for i in range(4)])
#L2 reg
opt = SGD(params, lr=0.1, mom=0.9, wd=0.1, decouple_wd=False)
opt.step()
#TODO: fix cause this formula was wrong
#test_close([p.item() for p in params], [i*0.97 for i in range(4)])


### RMSProp

### rms_prop_step

*Step for RMSProp with momentum with lr*

### RMSProp

def RMSProp(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.0, # Gradient moving average (β1) coefficient
sqr_mom:float=0.99, # Gradient squared moving average (β2) coefficient
eps:float=1e-08, # Added for numerical stability
wd:Real=0.0, # Optional weight decay (true or L2)
decouple_wd:bool=True, # Apply true weight decay or L2 regularization (RMSProp)
)->Optimizer:


*A RMSProp *

`Optimizer`

RMSProp was introduced by Geoffrey Hinton in his [course](http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf). What is named `sqr_mom`

here is the `alpha`

in the course. Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

### Adam

### step_stat

*Register the number of steps done in state for p*


### debias

### adam_step

*Step for Adam with lr on p*


### Adam

def Adam(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.9, # Gradient moving average (β1) coefficient
sqr_mom:float=0.99, # Gradient squared moving average (β2) coefficient
eps:float=1e-05, # Added for numerical stability
wd:Real=0.01, # Optional weight decay (true or L2)
decouple_wd:bool=True, # Apply true weight decay (AdamW) or L2 regularization (Adam)
)->Optimizer:


*A Adam/AdamW *

`Optimizer`

Adam was introduced by Diederik P. Kingma and Jimmy Ba in [Adam: A Method for Stochastic Optimization](https://arxiv.org/abs/1412.6980). For consistency across optimizers, we renamed `beta1`

and `beta2`

in the paper to `mom`

and `sqr_mom`

. Note that our defaults also differ from the paper (0.99 for `sqr_mom`

or `beta2`

, 1e-5 for `eps`

). Those values seem to be better from our experiments in a wide range of situations.

Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

Don’t forget that `eps`

is an hyper-parameter you can change. Some models won’t train without a very high `eps`

like 0.1 (intuitively, the higher `eps`

is, the closer we are to normal SGD). The usual default of 1e-8 is often too extreme in the sense we don’t manage to get as good results as with SGD.

### RAdam

RAdam (for rectified Adam) was introduced by Zhang et al. in [On the Variance of the Adaptive Learning Rate and Beyond](https://arxiv.org/abs/1908.03265) to slightly modify the Adam optimizer to be more stable at the beginning of training (and thus not require a long warmup). They use an estimate of the variance of the moving average of the squared gradients (the term in the denominator of traditional Adam) and rescale this moving average by this term before performing the update.

This version also incorporates [SAdam](https://arxiv.org/abs/1908.00700); set `beta`

to enable this (definition same as in the paper).

### radam_step

*Step for RAdam with lr on p*


### RAdam

def RAdam(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.9, # Gradient moving average (β1) coefficient
sqr_mom:float=0.99, # Gradient squared moving average (β2) coefficient
eps:float=1e-05, # Added for numerical stability
wd:Real=0.0, # Optional weight decay (true or L2)
beta:float=0.0, # Set to enable SAdam
decouple_wd:bool=True, # Apply true weight decay (RAdamW) or L2 regularization (RAdam)
)->Optimizer:


*A RAdam/RAdamW *

`Optimizer`

This is the effective correction reported to the adam step for 500 iterations in RAdam. We can see how it goes from 0 to 1, mimicking the effect of a warm-up.

params = tst_param([1,2,3], [0.1,0.2,0.3])
opt = RAdam(params, lr=0.1)
#The r factor is lower than 5 during the first 5 steps so updates use the average of gradients (all the same)
r_inf = 2/(1-0.99) - 1
for i in range(5):
r = r_inf - 2*(i+1)*0.99**(i+1)/(1-0.99**(i+1))
assert r <= 5
opt.step()
p = tensor([0.95, 1.9, 2.85])
test_close(params[0], p)
#The r factor is greater than 5 for the sixth step so we update with RAdam
r = r_inf - 2*6*0.99**6/(1-0.99**6)
assert r > 5
opt.step()
v = math.sqrt(((r-4) * (r-2) * r_inf)/((r_inf-4)*(r_inf-2)*r))
step = -0.1*0.1*v/(math.sqrt(0.1**2) + 1e-8)
test_close(params[0], p+step)


### QHAdam

QHAdam (for Quasi-Hyperbolic Adam) was introduced by Ma & Yarats in [Quasi-Hyperbolic Momentum and Adam for Deep Learning](https://arxiv.org/abs/1810.06801) as a *“computationally cheap, intuitive to interpret, and simple to implement”* optimizer. Additional code can be found in their [qhoptim repo](https://github.com/facebookresearch/qhoptim). QHAdam is based on QH-Momentum, which introduces the immediate discount factor `nu`

, encapsulating plain SGD (`nu = 0`

) and momentum (`nu = 1`

). QH-Momentum is defined below, where g_t+1 is the update of the moment. An interpretation of QHM is as a nu-weighted average of the momentum update step and the plain SGD update step.

θ_t+1 ← θ_t − lr * [(1 − nu) · ∇L_t(θ_t) + nu · g_t+1]


QHAdam takes the concept behind QHM above and applies it to Adam, replacing both of Adam’s moment estimators with quasi-hyperbolic terms.

The paper’s suggested default parameters are `mom = 0.999`

, `sqr_mom = 0.999`

, `nu_1 = 0.7`

and `and nu_2 = 1.0`

. When training is not stable, it is possible that setting `nu_2 < 1`

can improve stability by imposing a tighter step size bound. Note that QHAdam recovers Adam when `nu_1 = nu_2 = 1.0`

. QHAdam recovers RMSProp (Hinton et al., 2012) when `nu_1 = 0`

and `nu_2 = 1`

, and NAdam (Dozat, 2016) when `nu_1 = mom`

and `nu_2 = 1`

.

Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

### qhadam_step

### QHAdam

def QHAdam(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.999, # Gradient moving average (β1) coefficient
sqr_mom:float=0.999, # Gradient squared moving average (β2) coefficient
nu_1:float=0.7, # QH immediate discount factor
nu_2:float=1.0, # QH momentum discount factor
eps:float=1e-08, # Added for numerical stability
wd:Real=0.0, # Optional weight decay (true or L2)
decouple_wd:bool=True, # Apply true weight decay (QHAdamW) or L2 regularization (QHAdam)
)->Optimizer:


*A QHAdam/QHAdamW *

`Optimizer`

params = tst_param([1,2,3], [0.1,0.2,0.3])
opt = QHAdam(params, lr=0.1)
opt.step()
step = -0.1 * (((1-0.7) * 0.1) + (0.7 * 0.1)) / (
math.sqrt(((1-1.0) * 0.1**2) + (1.0 * 0.1**2)) + 1e-8)
test_close(params[0], tensor([1+step, 2+step, 3+step]))
opt.step()
test_close(params[0], tensor([1+2*step, 2+2*step, 3+2*step]), eps=1e-3)


### LARS/LARC

### larc_layer_lr

*Computes the local lr before weight decay is applied*

### larc_step

*Step for LARC local_lr on p*


### Larc

def Larc(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.9, # Gradient moving average (β1) coefficient
clip:bool=True, # LARC if clip=True, LARS if clip=False
trust_coeff:float=0.02, # Trust coeffiecnet for calculating layerwise LR
eps:float=1e-08, # Added for numerical stability
wd:Real=0.0, # Optional weight decay (true or L2)
decouple_wd:bool=True, # Apply true weight decay or L2 regularization
)->Optimizer:


*A LARC/LARS *

`Optimizer`

The LARS optimizer was first introduced in [Large Batch Training of Convolutional Networks](https://arxiv.org/abs/1708.03888) then refined in its LARC variant (original LARS is with `clip=False`

). A learning rate is computed for each individual layer with a certain `trust_coefficient`

, then clipped to be always less than `lr`

.

Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

params = [tst_param([1,2,3], [0.1,0.2,0.3]), tst_param([1,2,3], [0.01,0.02,0.03])]
opt = Larc(params, lr=0.1)
opt.step()
#First param local lr is 0.02 < lr so it's not clipped
test_close(opt.state[params[0]]['local_lr'], 0.02)
#Second param local lr is 0.2 > lr so it's clipped
test_eq(opt.state[params[1]]['local_lr'], 0.1)
test_close(params[0], tensor([0.998,1.996,2.994]))
test_close(params[1], tensor([0.999,1.998,2.997]))


params = [tst_param([1,2,3], [0.1,0.2,0.3]), tst_param([1,2,3], [0.01,0.02,0.03])]
opt = Larc(params, lr=0.1, clip=False)
opt.step()
#No clipping
test_close(opt.state[params[0]]['local_lr'], 0.02)
test_close(opt.state[params[1]]['local_lr'], 0.2)
test_close(params[0], tensor([0.998,1.996,2.994]))
test_close(params[1], tensor([0.998,1.996,2.994]))


### LAMB

### lamb_step

*Step for LAMB with lr on p*


### Lamb

def Lamb(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.9, # Gradient moving average (β1) coefficient
sqr_mom:float=0.99, # Gradient squared moving average (β2) coefficient
eps:float=1e-05, # Added for numerical stability
wd:Real=0.0, # Optional weight decay (true or L2)
decouple_wd:bool=True, # Apply true weight decay or L2 regularization
)->Optimizer:


*A LAMB *

`Optimizer`

LAMB was introduced in [Large Batch Optimization for Deep Learning: Training BERT in 76 minutes](https://arxiv.org/abs/1904.00962). Intuitively, it’s LARC applied to Adam. As in [ Adam](https://docs.fast.ai/optimizer.html#adam), we renamed

`beta1`

and `beta2`

in the paper to `mom`

and `sqr_mom`

. Note that our defaults also differ from the paper (0.99 for `sqr_mom`

or `beta2`

, 1e-5 for `eps`

). Those values seem to be better from our experiments in a wide range of situations.Optional weight decay of `wd`

is applied, as true weight decay (decay the weights directly) if `decouple_wd=True`

else as L2 regularization (add the decay to the gradients).

Lookahead was introduced by Zhang et al. in [Lookahead Optimizer: k steps forward, 1 step back](https://arxiv.org/abs/1907.08610). It can be run on top of any optimizer and consists in having the final weights of the model be a moving average. In practice, we update our model using the internal optimizer but keep a copy of old weights that and every `k`

steps, we change the weights by a moving average of the *fast weights* (the ones updated by the inner optimizer) with the *slow weights* (the copy of old weights). Those *slow weights* act like a stability mechanism.

### Lookahead

*Wrap opt in a lookahead optimizer*

params = tst_param([1,2,3], [0.1,0.2,0.3])
p,g = params[0].data.clone(),tensor([0.1,0.2,0.3])
opt = Lookahead(SGD(params, lr=0.1))
for k in range(5): opt.step()
#first 5 steps are normal SGD steps
test_close(params[0], p - 0.5*g)
#Since k=6, sixth step is a moving average of the 6 SGD steps with the initial weight
opt.step()
test_close(params[0], p * 0.5 + (p-0.6*g) * 0.5)


### ranger

def ranger(
params:Tensor | Iterable, # Model parameters
lr:float | slice, # Default learning rate
mom:float=0.95, # Gradient moving average (β1) coefficient
wd:Real=0.01, # Optional weight decay (true or L2)
eps:float=1e-06, # Added for numerical stability
k:int=6, # How often to conduct Lookahead step
alpha:float=0.5, # Slow weight moving average coefficient
sqr_mom:float=0.99, # Gradient squared moving average (β2) coefficient
beta:float=0.0, # Set to enable SAdam
decouple_wd:bool=True, # Apply true weight decay (RAdamW) or L2 regularization (RAdam)
)->Lookahead:


*Convenience method for *

`Lookahead`

with `RAdam`

[ OptimWrapper](https://docs.fast.ai/optimizer.html#optimwrapper) provides simple functionality to use existing optimizers constructed with

[.](https://pytorch.org/docs/stable/_modules/torch/optim/optimizer.html#Optimizer)

`torch.optim.Optimizer`

### detuplify_pg

### set_item_pg

### OptimWrapper

def OptimWrapper(
params:Tensor | Iterable=None, # Model parameters. Don't set if using a built optimizer
opt:Callable | torch.optim.Optimizer=None, # A torch optimizer constructor, or an already built optimizer
hp_map:dict=None, # A dictionary converting PyTorch optimizer keys to fastai's [`Optimizer`](https://docs.fast.ai/optimizer.html#optimizer) keys. Defaults to `pytorch_hp_map`
convert_groups:bool=True, # Convert parameter groups from splitter or pass unaltered to `opt`
kwargs:VAR_KEYWORD
):


*A wrapper class for existing PyTorch optimizers*

To use an existing PyTorch optimizer, you can define an optimizer function like this:

Or if you already have a built optimizer, pass in only `opt`

:

When passing a built optimizer to [ Learner](https://docs.fast.ai/learner.html#learner), instead of resetting the optimizer

[will clear the optimizer state if](https://docs.fast.ai/learner.html#learner.fit)

`Learner.fit`

`reset_opt=True`

or when calling [for the first time.](https://docs.fast.ai/learner.html#learner.fit)

`Learner.fit`

To prevent [ Learner](https://docs.fast.ai/learner.html#learner) from clearing the optimizer state when calling

[for the first time, assign the optimizer directly to](https://docs.fast.ai/learner.html#learner.fit)

`Learner.fit`

`Learner.opt`

:

---

## Source: https://docs.fast.ai/metrics.html

# Metrics

## Core metric

This is where the function that converts scikit-learn metrics to fastai metrics is defined. You should skip this section unless you want to know all about the internals of fastai.

### AccumMetric

*Stores predictions and targets on CPU in accumulate to perform final calculations with func.*

`func`

is only applied to the accumulated predictions/targets when the `value`

attribute is asked for (so at the end of a validation/training phase, in use with [ Learner](https://docs.fast.ai/learner.html#learner) and its

[).The signature of](https://docs.fast.ai/learner.html#recorder)

`Recorder`

`func`

should be `inp,targ`

(where `inp`

are the predictions of the model and `targ`

the corresponding labels).For classification problems with single label, predictions need to be transformed with a softmax then an argmax before being compared to the targets. Since a softmax doesn’t change the order of the numbers, we can just apply the argmax. Pass along `dim_argmax`

to have this done by [ AccumMetric](https://docs.fast.ai/metrics.html#accummetric) (usually -1 will work pretty well). If you need to pass to your metrics the probabilities and not the predictions, use

`softmax=True`

.For classification problems with multiple labels, or if your targets are one-hot encoded, predictions may need to pass through a sigmoid (if it wasn’t included in your model) then be compared to a given threshold (to decide between 0 and 1), this is done by [ AccumMetric](https://docs.fast.ai/metrics.html#accummetric) if you pass

`sigmoid=True`

and/or a value for `thresh`

.If you want to use a metric function sklearn.metrics, you will need to convert predictions and labels to numpy arrays with `to_np=True`

. Also, scikit-learn metrics adopt the convention `y_true`

, `y_preds`

which is the opposite from us, so you will need to pass `invert_arg=True`

to make [ AccumMetric](https://docs.fast.ai/metrics.html#accummetric) do the inversion for you.

def _l2_mean(x,y): return torch.sqrt((x.float()-y.float()).pow(2).mean())
#Go through a fake cycle with various batch sizes and computes the value of met
def compute_val(met, x1, x2):
met.reset()
vals = [0,6,15,20]
learn = TstLearner()
for i in range(3):
learn.pred,learn.yb = x1[vals[i]:vals[i+1]],(x2[vals[i]:vals[i+1]],)
met.accumulate(learn)
return met.value


tst = AccumMetric(_l2_mean)
test_close(compute_val(tst, x1, x2), _l2_mean(x1, x2))
test_eq(torch.cat(tst.preds), x1.view(-1))
test_eq(torch.cat(tst.targs), x2.view(-1))
#test argmax
x1,x2 = torch.randn(20,5),torch.randint(0, 5, (20,))
tst = AccumMetric(_l2_mean, dim_argmax=-1)
test_close(compute_val(tst, x1, x2), _l2_mean(x1.argmax(dim=-1), x2))
#test thresh
x1,x2 = torch.randn(20,5),torch.randint(0, 2, (20,5)).bool()
tst = AccumMetric(_l2_mean, thresh=0.5)
test_close(compute_val(tst, x1, x2), _l2_mean((x1 >= 0.5), x2))
#test sigmoid
x1,x2 = torch.randn(20,5),torch.randn(20,5)
tst = AccumMetric(_l2_mean, activation=ActivationType.Sigmoid)
test_close(compute_val(tst, x1, x2), _l2_mean(torch.sigmoid(x1), x2))
#test to_np
x1,x2 = torch.randn(20,5),torch.randn(20,5)
tst = AccumMetric(lambda x,y: isinstance(x, np.ndarray) and isinstance(y, np.ndarray), to_np=True)
assert compute_val(tst, x1, x2)
#test invert_arg
x1,x2 = torch.randn(20,5),torch.randn(20,5)
tst = AccumMetric(lambda x,y: torch.sqrt(x.pow(2).mean()))
test_close(compute_val(tst, x1, x2), torch.sqrt(x1.pow(2).mean()))
tst = AccumMetric(lambda x,y: torch.sqrt(x.pow(2).mean()), invert_arg=True)
test_close(compute_val(tst, x1, x2), torch.sqrt(x2.pow(2).mean()))


### skm_to_fastai

*Convert func from sklearn.metrics to a fastai metric*

This is the quickest way to use a scikit-learn metric in a fastai training loop. `is_class`

indicates if you are in a classification problem or not. In this case:

- leaving
`thresh`

to`None`

indicates it’s a single-label classification problem and predictions will pass through an argmax over`axis`

before being compared to the targets - setting a value for
`thresh`

indicates it’s a multi-label classification problem and predictions will pass through a sigmoid (can be deactivated with`sigmoid=False`

) and be compared to`thresh`

before being compared to the targets

If `is_class=False`

, it indicates you are in a regression problem, and predictions are compared to the targets without being modified. In all cases, `kwargs`

are extra keyword arguments passed to `func`

.

tst_multi = skm_to_fastai(skm.precision_score, thresh=0.2)
x1,x2 = torch.randn(20),torch.randint(0, 2, (20,))
test_close(compute_val(tst_multi, x1, x2), skm.precision_score(x2, torch.sigmoid(x1) >= 0.2))
tst_multi = skm_to_fastai(skm.precision_score, thresh=0.2, activation=ActivationType.No)
x1,x2 = torch.randn(20),torch.randint(0, 2, (20,))
test_close(compute_val(tst_multi, x1, x2), skm.precision_score(x2, x1 >= 0.2))


### optim_metric

*Replace metric f with a version that optimizes argument argname*


## Single-label classification

All functions defined in this section are intended for single-label classification and targets that are not one-hot encoded. For multi-label problems or one-hot encoded targets, use the version suffixed with multi.

Many metrics in fastai are thin wrappers around sklearn functionality. However, sklearn metrics can handle python list strings, amongst other things, whereas fastai metrics work with PyTorch, and thus require tensors. The arguments that are passed to metrics are after all transformations, such as categories being converted to indices, have occurred. This means that when you pass a label of a metric, for instance, that you must pass indices, not strings. This can be converted with `vocab.map_obj`

.

### accuracy

*Compute accuracy with targ when pred is bs * n_classes*


### error_rate

*1 - *

`accuracy`

### top_k_accuracy

*Computes the Top-k accuracy ( targ is in the top k predictions of inp)*



### APScoreBinary

*Average Precision for single-label binary classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html#sklearn.metrics.average_precision_score) for more details.

### BalancedAccuracy

*Balanced Accuracy for single-label binary classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.balanced_accuracy_score.html#sklearn.metrics.balanced_accuracy_score) for more details.

### BrierScore

*Brier score for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.brier_score_loss.html#sklearn.metrics.brier_score_loss) for more details.

### CohenKappa

*Cohen kappa for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html#sklearn.metrics.cohen_kappa_score) for more details.

### F1Score

*F1 score for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html#sklearn.metrics.f1_score) for more details.

### FBeta

*FBeta score with beta for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.fbeta_score.html#sklearn.metrics.fbeta_score) for more details.

### HammingLoss

*Hamming loss for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.hamming_loss.html#sklearn.metrics.hamming_loss) for more details.

### Jaccard

*Jaccard score for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.jaccard_score.html#sklearn.metrics.jaccard_score) for more details.

### Precision

*Precision for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_score.html#sklearn.metrics.precision_score) for more details.

### Recall

*Recall for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.recall_score.html#sklearn.metrics.recall_score) for more details.

### RocAuc

*Area Under the Receiver Operating Characteristic Curve for single-label multiclass classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.roc_auc_score.html#sklearn.metrics.roc_auc_score) for more details.

### RocAucBinary

*Area Under the Receiver Operating Characteristic Curve for single-label binary classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.roc_auc_score.html#sklearn.metrics.roc_auc_score) for more details.

### MatthewsCorrCoef

*Matthews correlation coefficient for single-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.matthews_corrcoef.html#sklearn.metrics.matthews_corrcoef) for more details.

## Multi-label classification

### accuracy_multi

*Compute accuracy when inp and targ are the same size.*


x = torch.randn(4,5)
y = (torch.sigmoid(x) >= 0.5).byte()
test_eq(accuracy_multi(x,y), 1)
test_eq(accuracy_multi(x,1-y), 0)
y1 = change_1h_targ(y, 5)
test_eq(accuracy_multi(x,y1), 0.75)
#Different thresh
y = (torch.sigmoid(x) >= 0.2).byte()
test_eq(accuracy_multi(x,y, thresh=0.2), 1)
test_eq(accuracy_multi(x,1-y, thresh=0.2), 0)
y1 = change_1h_targ(y, 5)
test_eq(accuracy_multi(x,y1, thresh=0.2), 0.75)
#No sigmoid
y = (x >= 0.5).byte()
test_eq(accuracy_multi(x,y, sigmoid=False), 1)
test_eq(accuracy_multi(x,1-y, sigmoid=False), 0)
y1 = change_1h_targ(y, 5)
test_eq(accuracy_multi(x,y1, sigmoid=False), 0.75)


### APScoreMulti

*Average Precision for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html#sklearn.metrics.average_precision_score) for more details.

### BrierScoreMulti

*Brier score for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.brier_score_loss.html#sklearn.metrics.brier_score_loss) for more details.

### F1ScoreMulti

*F1 score for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html#sklearn.metrics.f1_score) for more details.

### FBetaMulti

*FBeta score with beta for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.fbeta_score.html#sklearn.metrics.fbeta_score) for more details.

### HammingLossMulti

*Hamming loss for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.hamming_loss.html#sklearn.metrics.hamming_loss) for more details.

### JaccardMulti

*Jaccard score for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.jaccard_score.html#sklearn.metrics.jaccard_score) for more details.

### MatthewsCorrCoefMulti

*Matthews correlation coefficient for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.matthews_corrcoef.html#sklearn.metrics.matthews_corrcoef) for more details.

### PrecisionMulti

*Precision for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_score.html#sklearn.metrics.precision_score) for more details.

### RecallMulti

*Recall for multi-label classification problems*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.recall_score.html#sklearn.metrics.recall_score) for more details.

### RocAucMulti

*Area Under the Receiver Operating Characteristic Curve for multi-label binary classification problems*

```
/var/folders/ss/34z569j921v58v8n1n_8z7h40000gn/T/ipykernel_38355/1899176771.py:2: UserWarning: Creating a tensor from a list of numpy.ndarrays is extremely slow. Please consider converting the list to a single numpy.ndarray with numpy.array() before converting to a tensor. (Triggered internally at /Users/runner/work/_temp/anaconda/conda-bld/pytorch_1712608632396/work/torch/csrc/utils/tensor_new.cpp:277.)
x,y = torch.tensor([np.arange(start=0, stop=0.2, step=0.04)]*20), torch.tensor([0, 0, 1, 1]).repeat(5)
```


See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.roc_auc_score.html#sklearn.metrics.roc_auc_score) for more details.

## Regression

### mse

*Mean squared error between inp and targ.*


### rmse

*Root mean squared error*

### mae

*Mean absolute error between inp and targ.*


### msle

*Mean squared logarithmic error between inp and targ.*


### exp_rmspe

*Root mean square percentage error of the exponential of predictions and targets*

### ExplainedVariance

*Explained variance between predictions and targets*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.explained_variance_score.html#sklearn.metrics.explained_variance_score) for more details.

### R2Score

*R2 score between predictions and targets*

See the [scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html#sklearn.metrics.r2_score) for more details.

### PearsonCorrCoef

*Pearson correlation coefficient for regression problem*

See the [scipy documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html?highlight=pearson#scipy.stats.pearsonr) for more details.

### SpearmanCorrCoef

*Spearman correlation coefficient for regression problem*

See the [scipy documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html?highlight=spearman#scipy.stats.spearmanr) for more details.

## Segmentation

### foreground_acc

*Computes non-background accuracy for multiclass segmentation*

### Dice

*Dice coefficient metric for binary target in segmentation*

### DiceMulti

*Averaged Dice metric (Macro F1) for multiclass target in segmentation*

The DiceMulti method implements the “Averaged F1: arithmetic mean over harmonic means” described in this publication: https://arxiv.org/pdf/1911.03347.pdf

x1a = torch.ones(20,1,1,1)
x1b = torch.clone(x1a)*0.5
x1c = torch.clone(x1a)*0.3
x1 = torch.cat((x1a,x1b,x1c),dim=1) # Prediction: 20xClass0
x2 = torch.zeros(20,1,1) # Target: 20xClass0
test_eq(compute_val(DiceMulti(), x1, x2), 1.)
x2 = torch.ones(20,1,1) # Target: 20xClass1
test_eq(compute_val(DiceMulti(), x1, x2), 0.)
x2a = torch.zeros(10,1,1)
x2b = torch.ones(5,1,1)
x2c = torch.ones(5,1,1) * 2
x2 = torch.cat((x2a,x2b,x2c),dim=0) # Target: 10xClass0, 5xClass1, 5xClass2
dice1 = (2*10)/(2*10+10) # Dice: 2*TP/(2*TP+FP+FN)
dice2 = 0
dice3 = 0
test_eq(compute_val(DiceMulti(), x1, x2), (dice1+dice2+dice3)/3)


### JaccardCoeff

*Implementation of the Jaccard coefficient that is lighter in RAM*

### JaccardCoeffMulti

*Averaged Jaccard coefficient metric (mIoU) for multiclass target in segmentation*

x1a = torch.ones(20,1,1,1)
x1b = torch.clone(x1a)*0.5
x1c = torch.clone(x1a)*0.3
x1 = torch.cat((x1a,x1b,x1c), dim=1) # Prediction: 20xClass0
x2 = torch.zeros(20,1,1) # Target: 20xClass0
test_eq(compute_val(JaccardCoeffMulti(), x1, x2), 1.)
x2 = torch.ones(20,1,1) # Target: 20xClass1
test_eq(compute_val(JaccardCoeffMulti(), x1, x2), 0.)
x2a = torch.zeros(10,1,1)
x2b = torch.ones(5,1,1)
x2c = torch.ones(5,1,1) * 2
x2 = torch.cat((x2a,x2b,x2c), dim=0) # Target: 10xClass0, 5xClass1, 5xClass2
jcrd1 = 10/(10+10) # Jaccard: TP/(TP+FP+FN)
jcrd2 = 0
jcrd3 = 0
test_eq(compute_val(JaccardCoeffMulti(), x1, x2), (jcrd1+jcrd2+jcrd3)/3)


## NLP

### CorpusBLEUMetric

*Blueprint for defining a metric*

def create_vcb_emb(pred, targ):
# create vocab "embedding" for predictions
vcb_sz = max(torch.unique(torch.cat([pred, targ])))+1
pred_emb=torch.zeros(pred.size()[0], pred.size()[1] ,vcb_sz)
for i,v in enumerate(pred):
pred_emb[i].scatter_(1, v.view(len(v),1),1)
return pred_emb
def compute_bleu_val(met, x1, x2):
met.reset()
learn = TstLearner()
learn.training=False
for i in range(len(x1)):
learn.pred,learn.yb = x1, (x2,)
met.accumulate(learn)
return met.value
targ = torch.tensor([[1,2,3,4,5,6,1,7,8]])
pred = torch.tensor([[1,9,3,4,5,6,1,10,8]])
pred_emb = create_vcb_emb(pred, targ)
test_close(compute_bleu_val(CorpusBLEUMetric(), pred_emb, targ), 0.48549)
targ = torch.tensor([[1,2,3,4,5,6,1,7,8],[1,2,3,4,5,6,1,7,8]])
pred = torch.tensor([[1,9,3,4,5,6,1,10,8],[1,9,3,4,5,6,1,10,8]])
pred_emb = create_vcb_emb(pred, targ)
test_close(compute_bleu_val(CorpusBLEUMetric(), pred_emb, targ), 0.48549)


The BLEU metric was introduced in [this article](https://www.aclweb.org/anthology/P02-1040) to come up with a way to evaluate the performance of translation models. It’s based on the precision of n-grams in your prediction compared to your target. See the [fastai NLP course BLEU notebook](https://github.com/fastai/course-nlp/blob/master/bleu_metric.ipynb) for a more detailed description of BLEU.

The smoothing used in the precision calculation is the same as in [SacreBLEU](https://github.com/mjpost/sacrebleu/blob/32c54cdd0dfd6a9fadd5805f2ea189ac0df63907/sacrebleu/sacrebleu.py#L540-L542), which in turn is “method 3” from the [Chen & Cherry, 2014](https://aclanthology.org/W14-3346/) paper.

### Perplexity

*Perplexity (exponential of cross-entropy loss) for Language Models*

x1,x2 = torch.randn(20,5),torch.randint(0, 5, (20,))
tst = perplexity
tst.reset()
vals = [0,6,15,20]
learn = TstLearner()
for i in range(3):
learn.yb = (x2[vals[i]:vals[i+1]],)
learn.loss = F.cross_entropy(x1[vals[i]:vals[i+1]],x2[vals[i]:vals[i+1]])
tst.accumulate(learn)
test_close(tst.value, torch.exp(F.cross_entropy(x1,x2)))


### LossMetric

*Create a metric from loss_func.attr named nm*


### LossMetrics

*List of LossMetric for each of attrs and nms*

---

## Source: https://docs.fast.ai/interpret.html

# Interpretation of Predictions

### Interpretation

*Interpretation base class, can be inherited for task specific Interpretation classes*

[ Interpretation](https://docs.fast.ai/interpret.html#interpretation) is a helper base class for exploring predictions from trained models. It can be inherited for task specific interpretation classes, such as

[.](https://docs.fast.ai/interpret.html#classificationinterpretation)

`ClassificationInterpretation`

[is memory efficient and should be able to process any sized dataset, provided the hardware could train the same model.](https://docs.fast.ai/interpret.html#interpretation)

`Interpretation`

[ Interpretation](https://docs.fast.ai/interpret.html#interpretation) is memory efficient due to generating inputs, predictions, targets, decoded outputs, and losses for each item on the fly, using batch processing where possible.

### Interpretation.from_learner

*Construct interpretation object from a learner*

### Interpretation.top_losses

`k`

largest(/smallest) losses and indexes, defaulting to all losses.

With the default of `k=None`

, `top_losses`

will return the entire dataset’s losses. `top_losses`

can optionally include the input items for each loss, which is usually a file path or Pandas `DataFrame`

.

### Interpretation.plot_top_losses

*Show k largest(/smallest) preds and losses. Implementation based on type dispatch*

To plot the first 9 top losses:

Then to plot the 7th through 16th top losses:

### Interpretation.show_results

*Show predictions and targets of idxs*

Like [ Learner.show_results](https://docs.fast.ai/learner.html#learner.show_results), except can pass desired index or indicies for item(s) to show results from.

### ClassificationInterpretation

*Interpretation methods for classification models.*

### ClassificationInterpretation.confusion_matrix

*Confusion matrix as an np.ndarray.*

### ClassificationInterpretation.plot_confusion_matrix

def plot_confusion_matrix(
normalize:bool=False, # Whether to normalize occurrences
title:str='Confusion matrix', # Title of plot
cmap:str='Blues', # Colormap from matplotlib
norm_dec:int=2, # Decimal places for normalized occurrences
plot_txt:bool=True, # Display occurrence in matrix
kwargs:VAR_KEYWORD
):


*Plot the confusion matrix, with title and using cmap.*


### ClassificationInterpretation.most_confused

*Sorted descending largest non-diagonal entries of confusion matrix (actual, predicted, # occurrences*

### SegmentationInterpretation

*Interpretation methods for segmentation models.*

---

## Source: https://docs.fast.ai/distributed.html

# Distributed training

When using multiple GPUs, you will most probably want to fit using distributed training.

Example use can be found:

- In the form of a script with
[examples/distrib.py](https://github.com/fastai/fastai/blob/master/nbs/examples/distrib.py) - Across all the App Examples with the
[Notebook Launcher](https://docs.fast.ai/distributed_app_examples.html) - At the bottom of this notebook for more examples with
`notebook_launcher`

.

To use distributed training, there are only three required steps:

- Add
`with learn.distrib_ctx():`

before your`learn.fit`

call - Either config Accelerate yourself by running
`accelerate config`

from the command line, or run:

- Run your training script with
`accelerate launch scriptname.py ...args...`


If you’re using [ untar_data](https://docs.fast.ai/data.external.html#untar_data), or may be downloading or uncompressing data or models as part of your script, you should wrap that code with

[, which forces that step to occur first just once on the master process, prior to the remaining processes running it in parallel. E.g. instead of:](https://docs.fast.ai/distributed.html#rank0_first)

`rank0_first`

…you instead use:

See below for details on the full API and underlying helper functions, if needed – however, note that you will not need anything except the above unless you need to change how the distributed training is implemented.

## Parallel

### DataParallel.reset

*Patch required reset call into DataParallel*


### ParallelTrainer

*Wrap a model DataParallel automatically*

### Learner.to_parallel

*Add *

`ParallelTrainer`

callback to a `Learner`

### Learner.detach_parallel

*Remove *

`ParallelTrainer`

callback from a Learner### parallel_ctx

*A context manager to adapt a learner to train in data parallel mode.*

## Distributed

### Helper functions

### DistributedDataParallel.reset

*Patch required reset call into DistributedDataParallel*


### setup_distrib

*Setup this process to participate in distributed training*

### teardown_distrib

*Free distributed training resources*

### DataLoader

### DistributedDL

*A *

`TfmdDL`

which splits a batch into equal size pieces for each worker### DistributedTrainer

def DistributedTrainer(
sync_bn:bool=True, # Whether to replace all batch norm with `nn.SyncBatchNorm`
device_placement:bool=True, split_batches:bool=<object object at 0x7fb5e5d9d0e0>,
gradient_accumulation_steps:int=1, cpu:bool=False, dataloader_config:DataLoaderConfiguration | None=None,
deepspeed_plugin:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
fsdp_plugin:FullyShardedDataParallelPlugin | None=None,
torch_tp_plugin:TorchTensorParallelPlugin | None=None, # Deprecate later, warning in `post_init`
megatron_lm_plugin:MegatronLMPlugin | None=None, rng_types:list[str | RNGType] | None=None,
project_dir:str | os.PathLike | None=None, project_config:ProjectConfiguration | None=None,
gradient_accumulation_plugin:GradientAccumulationPlugin | None=None,
kwargs_handlers:list[KwargsHandler] | None=None, dynamo_backend:DynamoBackend | str | None=None,
dynamo_plugin:TorchDynamoPlugin | None=None,
deepspeed_plugins:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
parallelism_config:ParallelismConfig | None=None
):


*Wrap model in DistributedDataParallel and dls in *



[DistributedDL](https://docs.fast.ai/distributed.html#distributeddl)


### Learner.to_distributed

def to_distributed(
sync_bn:bool=True, # Whether to replace all batch norm with `nn.SyncBatchNorm`
device_placement:bool=True, split_batches:bool=<object object at 0x7fb5e5d9d0e0>,
gradient_accumulation_steps:int=1, cpu:bool=False, dataloader_config:DataLoaderConfiguration | None=None,
deepspeed_plugin:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
fsdp_plugin:FullyShardedDataParallelPlugin | None=None,
torch_tp_plugin:TorchTensorParallelPlugin | None=None, # Deprecate later, warning in `post_init`
megatron_lm_plugin:MegatronLMPlugin | None=None, rng_types:list[str | RNGType] | None=None,
project_dir:str | os.PathLike | None=None, project_config:ProjectConfiguration | None=None,
gradient_accumulation_plugin:GradientAccumulationPlugin | None=None,
kwargs_handlers:list[KwargsHandler] | None=None, dynamo_backend:DynamoBackend | str | None=None,
dynamo_plugin:TorchDynamoPlugin | None=None,
deepspeed_plugins:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
parallelism_config:ParallelismConfig | None=None
):


*Add AcceleratedTrainer to a learner, and configures an Accelerator*

### Learner.detach_distributed

*Remove *

`DistributedTrainer`

from a learner`distrib_ctx`

context manager

### Learner.distrib_ctx

def distrib_ctx(
sync_bn:bool=True, # Whether to replace all batch norm with `nn.SyncBatchNorm`
in_notebook:bool=False, # Whether we are launching from a notebook or not
device_placement:bool=True, split_batches:bool=<object object at 0x7fb5e5d9d0e0>,
gradient_accumulation_steps:int=1, cpu:bool=False, dataloader_config:DataLoaderConfiguration | None=None,
deepspeed_plugin:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
fsdp_plugin:FullyShardedDataParallelPlugin | None=None,
torch_tp_plugin:TorchTensorParallelPlugin | None=None, # Deprecate later, warning in `post_init`
megatron_lm_plugin:MegatronLMPlugin | None=None, rng_types:list[str | RNGType] | None=None,
project_dir:str | os.PathLike | None=None, project_config:ProjectConfiguration | None=None,
gradient_accumulation_plugin:GradientAccumulationPlugin | None=None,
kwargs_handlers:list[KwargsHandler] | None=None, dynamo_backend:DynamoBackend | str | None=None,
dynamo_plugin:TorchDynamoPlugin | None=None,
deepspeed_plugins:DeepSpeedPlugin | dict[str, DeepSpeedPlugin] | None=None,
parallelism_config:ParallelismConfig | None=None
):


*A context manager to adapt a learner to train in distributed data parallel mode.*

`distrib_ctx`

prepares a learner to train in distributed data parallel mode. It assumes the script/code will either be ran through the command line via `accelerate launch`

or through the `notebook_launcher`

function from Accelerate. It also assumes that `accelerate`

has been configured through either running `write_basic_config()`

or calling `accelerate config`

through the CLI and answering the prompts.

Typical usage:

`with learn.distrib_ctx(): learn.fit(.....)`


It attaches a [ DistributedTrainer](https://docs.fast.ai/distributed.html#distributedtrainer) callback and

[data loader to the learner, then executes](https://docs.fast.ai/distributed.html#distributeddl)

`DistributedDL`

`learn.fit(.....)`

. Upon exiting the context, it removes the [and](https://docs.fast.ai/distributed.html#distributedtrainer)

`DistributedTrainer`

[, and destroys any locally created distributed process group. The process is still attached to the GPU though.](https://docs.fast.ai/distributed.html#distributeddl)

`DistributedDL`

### rank0_first

*Execute func in the Rank-0 process first, then in other ranks in parallel.*

[ rank0_first](https://docs.fast.ai/distributed.html#rank0_first) calls

`f()`

in rank-0 process first, then in parallel on the rest, in distributed training mode. In single process, non-distributed training mode, `f()`

is called only once as expected.One application of [ rank0_first()](https://docs.fast.ai/distributed.html#rank0_first) is to make fresh downloads via

[safe in distributed training scripts launched by](https://docs.fast.ai/data.external.html#untar_data)

`untar_data`

`python -m fastai.launch <script>`

:`path = untar_data(URLs.IMDB)`


becomes:

`path = rank0_first(lambda: untar_data(URLs.IMDB))`


Some learner factory methods may use [ untar_data](https://docs.fast.ai/data.external.html#untar_data) to download pretrained models:

`learn = text_classifier_learner(dls, AWD_LSTM, drop_mult=0.5, metrics=accuracy)`


becomes:

`learn = rank0_first(lambda: text_classifier_learner(dls, AWD_LSTM, drop_mult=0.5, metrics=accuracy))`


Otherwise, multiple processes will download at the same time and corrupt the data.

## Notebook Launcher

Accelerate provides a [notebook_launcher](https://huggingface.co/docs/accelerate/launcher) functionality to let you keep using your Jupyter Notebook as you would, but train in a distributed setup!

First, make sure accelerate is properly configured. You can either run `accelerate config`

from the command line, or have an autofilled configuration setup by running in the first cell of your notebook:

After Accelerate is configured, to utilize the `notebook_launcher`

functionality migrate your training into a function, and pass this to `notebook_launcher`

, such as:

---
from fastai.vision.all import *
from fastai.distributed import *
def train():
set_seed(99, True)
path = untar_data(URLs.PETS)/'images'
dls = ImageDataLoaders.from_name_func(
path, get_image_files(path), valid_pct=0.2,
label_func=lambda x: x[0].isupper(), item_tfms=Resize(224))
learn = vision_learner(dls, resnet34, metrics=error_rate).to_fp16()
with learn.distrib_ctx(in_notebook=True):
learn.fine_tune(1)
---
from accelerate import notebook_launcher
notebook_launcher(train, num_processes=2)
---

---

## Source: https://docs.fast.ai/callback.fp16.html

model = nn.Sequential(nn.Linear(10,30), nn.BatchNorm1d(30), nn.Linear(30,2)).cuda()
model = convert_network(model, torch.float16)
for i,t in enumerate([torch.float16, torch.float32, torch.float16]):
test_eq(model[i].weight.dtype, t)
test_eq(model[i].bias.dtype, t)
model = nn.Sequential(nn.Linear(10,30), BatchNorm(30, ndim=1), nn.Linear(30,2)).cuda()
model = convert_network(model, torch.float16)
for i,t in enumerate([torch.float16, torch.float32, torch.float16]):
test_eq(model[i].weight.dtype, t)
test_eq(model[i].bias.dtype, t)


# Mixed precision training

## A little bit of theory

A very nice and clear introduction to mixed precision training is [this video from NVIDIA](https://on-demand.gputechconf.com/gtc/2019/video/_/S9143/).

### What’s half precision?

In neural nets, all the computations are usually done in single precision, which means all the floats in all the arrays that represent inputs, activations, weights… are 32-bit floats (FP32 in the rest of this post). An idea to reduce memory usage (and avoid those annoying cuda errors) has been to try and do the same thing in half-precision, which means using 16-bits floats (or FP16 in the rest of this post). By definition, they take half the space in RAM, and in theory could allow you to double the size of your model and double your batch size.

Another very nice feature is that NVIDIA developed its latest GPUs (the Volta generation) to take fully advantage of half-precision tensors. Basically, if you give half-precision tensors to those, they’ll stack them so that each core can do more operations at the same time, and theoretically gives an 8x speed-up (sadly, just in theory).

So training at half precision is better for your memory usage, way faster if you have a Volta GPU (still a tiny bit faster if you don’t since the computations are easiest). How do we do it? Super easily in pytorch, we just have to put .half() everywhere: on the inputs of our model and all the parameters. Problem is that you usually won’t see the same accuracy in the end (so it happens sometimes) because half-precision is… well… not as precise ;).

### Problems with half-precision:

To understand the problems with half precision, let’s look briefly at what an FP16 looks like (more information [here](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)).

The sign bit gives us +1 or -1, then we have 5 bits to code an exponent between -14 and 15, while the fraction part has the remaining 10 bits. Compared to FP32, we have a smaller range of possible values (2e-14 to 2e15 roughly, compared to 2e-126 to 2e127 for FP32) but also a smaller *offset*.

For instance, between 1 and 2, the FP16 format only represents the number 1, 1+2e-10, 1+2*2e-10… which means that 1 + 0.0001 = 1 in half precision. That’s what will cause a certain numbers of problems, specifically three that can occur and mess up your training.

The weight update is imprecise: inside your optimizer, you basically do w = w - lr * w.grad for each weight of your network. The problem in performing this operation in half precision is that very often, w.grad is several orders of magnitude below w, and the learning rate is also small. The situation where w=1 and lr*w.grad is 0.0001 (or lower) is therefore very common, but the update doesn’t do anything in those cases.

Your gradients can underflow. In FP16, your gradients can easily be replaced by 0 because they are too low.

Your activations or loss can overflow. The opposite problem from the gradients: it’s easier to hit nan (or infinity) in FP16 precision, and your training might more easily diverge.


### The solution: mixed precision training

To address those three problems, we don’t fully train in FP16 precision. As the name mixed training implies, some of the operations will be done in FP16, others in FP32. This is mainly to take care of the first problem listed above. For the next two there are additional tricks.

The main idea is that we want to do the forward pass and the gradient computation in half precision (to go fast) but the update in single precision (to be more precise). It’s okay if w and grad are both half floats, but when we do the operation w = w - lr * grad, we need to compute it in FP32. That way our 1 + 0.0001 is going to be 1.0001.

This is why we keep a copy of the weights in FP32 (called master model). Then, our training loop will look like:

- compute the output with the FP16 model, then the loss
- back-propagate the gradients in half-precision.
- copy the gradients in FP32 precision
- do the update on the master model (in FP32 precision)
- copy the master model in the FP16 model.

Note that we lose precision during step 5, and that the 1.0001 in one of the weights will go back to 1. But if the next update corresponds to add 0.0001 again, since the optimizer step is done on the master model, the 1.0001 will become 1.0002 and if we eventually go like this up to 1.0005, the FP16 model will be able to tell the difference.

That takes care of problem 1. For the second problem, we use something called gradient scaling: to avoid the gradients getting zeroed by the FP16 precision, we multiply the loss by a scale factor (scale=512 for instance). That way we can push the gradients to the right in the next figure, and have them not become zero.

Of course we don’t want those 512-scaled gradients to be in the weight update, so after converting them into FP32, we can divide them by this scale factor (once they have no risks of becoming 0). This changes the loop to:

- compute the output with the FP16 model, then the loss.
- multiply the loss by scale then back-propagate the gradients in half-precision.
- copy the gradients in FP32 precision then divide them by scale.
- do the update on the master model (in FP32 precision).
- copy the master model in the FP16 model.

For the last problem, the tricks offered by NVIDIA are to leave the batchnorm layers in single precision (they don’t have many weights so it’s not a big memory challenge) and compute the loss in single precision (which means converting the last output of the model in single precision before passing it to the loss).

### Dynamic loss scaling

The only annoying thing with the previous implementation of mixed precision training is that it introduces one new hyper-parameter to tune, the value of the loss scaling. Fortunately for us, there is a way around this. We want the loss scaling to be as high as possible so that our gradients can use the whole range of representation, so let’s first try a really high value. In all likelihood, this will cause our gradients or our loss to overflow, and we will try again with half that big value, and again, until we get to the largest loss scale possible that doesn’t make our gradients overflow.

This value will be perfectly fitted to our model and can continue to be dynamically adjusted as the training goes, if it’s still too high, by just halving it each time we overflow. After a while though, training will converge and gradients will start to get smaller, so we al so need a mechanism to get this dynamic loss scale larger if it’s safe to do so. The strategy used in the Apex library is to multiply the loss scale by 2 each time we had a given number of iterations without overflowing.

### BFloat16 Mixed Precision

BFloat16 (BF16) is 16-bit floating point format developed by Google Brain. BF16 has the same exponent as FP32 leaving 7-bits for the fraction. This gives BF16 the same range as FP32, but significantly less precision.

Since it has same range as FP32, BF16 Mixed Precision training skips the scaling steps. All other Mixed Precision steps remain the same as FP16 Mixed Precision.

BF16 Mixed Precision requires Ampere or newer hardware. Not all PyTorch operations are supported.

To train in BF16 Mixed Precision pass `amp_mode=AMPMode.BF16`

or `amp_mode='bf16'`

to [ MixedPrecision](https://docs.fast.ai/callback.fp16.html#mixedprecision), or use the

[convenience method.](https://docs.fast.ai/callback.fp16.html#learner.to_bf16)

`Learner.to_bf16`

### AMPMode

*Automatic mixed precision modes for ease of completion*

### MixedPrecision

*Mixed precision training using Pytorch’s Automatic Mixed Precision (AMP)*

### Learner.to_fp16

*Set *

`Learner`

to float16 mixed precision using PyTorch AMP### Learner.to_bf16

*Set *

`Learner`

to bfloat16 mixed precision using PyTorch AMP### Learner.to_fp32

*Set *

`Learner`

to float32 precision## Util functions

Before going in the main [ Callback](https://docs.fast.ai/callback.core.html#callback) we will need some helper functions. We use the ones from the

[APEX library](https://github.com/NVIDIA/apex).

### Converting the model to FP16

We will need a function to convert all the layers of the model to FP16 precision except the BatchNorm-like layers (since those need to be done in FP32 precision to be stable). In Apex, the function that does this for us is `convert_network`

. We can use it to put the model in FP16 or back to FP32.

### Creating the master copy of the parameters

From our model parameters (mostly in FP16), we’ll want to create a copy in FP32 (master parameters) that we will use for the step in the optimizer. Optionally, we concatenate all the parameters to do one flat big tensor, which can make that step a little bit faster.

We can’t use the FP16 util function here as it doesn’t handle multiple parameter groups, which is the thing we use to:

- do transfer learning and freeze some layers
- apply discriminative learning rates
- don’t apply weight decay to some layers (like BatchNorm) or the bias terms

### get_master

*Creates fp16 model params given an initialized *

`Optimizer`

, also returning fp32 model params.### Copy the gradients from model params to master params

After the backward pass, all gradients must be copied to the master params before the optimizer step can be done in FP32. The corresponding function in the Apex utils is `model_grads_to_master_grads`

but we need to adapt it to work with param groups.

### to_master_grads

*Move fp16 model gradients to fp32 master gradients*

### Copy the master params to the model params

After the step, we need to copy back the master parameters to the model parameters for the next update. The corresponding function in Apex is `master_params_to_model_params`

.

### to_model_params

*Copy updated fp32 master params to fp16 model params after gradient step.*

### Checking for overflow

For dynamic loss scaling, we need to know when the gradients have gone up to infinity. It’s faster to check it on the sum than to do `torch.isinf(x).any()`

.

### test_overflow

*Tests whether fp16 gradients have overflown.*

Then we can use it in the following function that checks for gradient overflow:

### grad_overflow

*Tests all fp16 parameters in pgs for gradient overflow*

### copy_clone

### ModelToHalf

def ModelToHalf(
after_create:NoneType=None, before_fit:NoneType=None, before_epoch:NoneType=None, before_train:NoneType=None,
before_batch:NoneType=None, after_pred:NoneType=None, after_loss:NoneType=None, before_backward:NoneType=None,
after_cancel_backward:NoneType=None, after_backward:NoneType=None, before_step:NoneType=None,
after_cancel_step:NoneType=None, after_step:NoneType=None, after_cancel_batch:NoneType=None,
after_batch:NoneType=None, after_cancel_train:NoneType=None, after_train:NoneType=None,
before_validate:NoneType=None, after_cancel_validate:NoneType=None, after_validate:NoneType=None,
after_cancel_epoch:NoneType=None, after_epoch:NoneType=None, after_cancel_fit:NoneType=None,
after_fit:NoneType=None
):


*Use with NonNativeMixedPrecision callback (but it needs to run at the very beginning)*

### NonNativeMixedPrecision

def NonNativeMixedPrecision(
loss_scale:int=512, # Non-dynamic loss scale, used to avoid underflow of gradients.
flat_master:bool=False, # Whether to flatten fp32 parameters for performance
dynamic:bool=True, # Whether to automatically determine loss scaling
max_loss_scale:float=16777216.0, # Starting value for dynamic loss scaling
div_factor:float=2.0, # Divide by this on overflow, multiply by this after scale_wait batches
scale_wait:int=500, # Number of batches to wait for increasing loss scale
clip:float=None, # Value to clip gradients at, max_norm, as in `nn.utils.clip_grad_norm_`
):


*Run training in mixed precision*

### Learner.to_non_native_fp16

def to_non_native_fp16(
loss_scale:int=512, # Non-dynamic loss scale, used to avoid underflow of gradients.
flat_master:bool=False, # Whether to flatten fp32 parameters for performance
dynamic:bool=True, # Whether to automatically determine loss scaling
max_loss_scale:float=16777216.0, # Starting value for dynamic loss scaling
div_factor:float=2.0, # Divide by this on overflow, multiply by this after scale_wait batches
scale_wait:int=500, # Number of batches to wait for increasing loss scale
clip:float=None, # Value to clip gradients at, max_norm, as in `nn.utils.clip_grad_norm_`
):


learn = synth_learner(cuda=True)
learn.model = nn.Sequential(nn.Linear(1,1), nn.Linear(1,1)).cuda()
learn.opt_func = partial(SGD, mom=0.)
learn.splitter = lambda m: [list(m[0].parameters()), list(m[1].parameters())]
learn.to_non_native_fp16()
learn.fit(3, cbs=[TestAfterMixedPrecision(), TestBeforeMixedPrecision()])
#Check the model did train
for v1,v2 in zip(learn.recorder.values[0], learn.recorder.values[-1]): assert v2<v1


| epoch | train_loss | valid_loss | time |
|---|---|---|---|
| 0 | 8.358611 | 10.943352 | 00:00 |
| 1 | 8.330508 | 10.722443 | 00:00 |
| 2 | 8.221409 | 10.485508 | 00:00 |

---

## Source: https://docs.fast.ai/callback.channelslast.html

# Channels Last training

With [ MixedPrecision](https://docs.fast.ai/callback.fp16.html#mixedprecision), image models trained in channels last format on Tensor Cores can increase training throughput over contiguous format. PyTorch observed a

[22% improvment](https://pytorch.org/tutorials/intermediate/memory_format_tutorial.html#performance-gains)in ResNet50 training speed using channels last and 8-35% improvement across a selection of models tested on a V100.

Channels last format is compatible with modern GPUs (Volta, Turing, or newer) and modern CPUs (Ice Lake or newer).

Channels last memory format currently is implemented for NCHW Tensors. Not all PyTorch operators have been converted to support channels last. See [(Beta) Channels Last Memory Format in PyTorch](https://pytorch.org/tutorials/intermediate/memory_format_tutorial.html) tutorial for more details.

### ChannelsLast

def ChannelsLast(
after_create:NoneType=None, before_fit:NoneType=None, before_epoch:NoneType=None, before_train:NoneType=None,
before_batch:NoneType=None, after_pred:NoneType=None, after_loss:NoneType=None, before_backward:NoneType=None,
after_cancel_backward:NoneType=None, after_backward:NoneType=None, before_step:NoneType=None,
after_cancel_step:NoneType=None, after_step:NoneType=None, after_cancel_batch:NoneType=None,
after_batch:NoneType=None, after_cancel_train:NoneType=None, after_train:NoneType=None,
before_validate:NoneType=None, after_cancel_validate:NoneType=None, after_validate:NoneType=None,
after_cancel_epoch:NoneType=None, after_epoch:NoneType=None, after_cancel_fit:NoneType=None,
after_fit:NoneType=None
):


*Channels last training using PyTorch’s Channels Last Memory Format (beta)*

When a PyTorch model is set to channels last format, PyTorch will automatically convert any compatible NCHW input tensors to NHWC format. [ ChannelsLast](https://docs.fast.ai/callback.channelslast.html#channelslast) sets the model to channels last format, so no changes to dataloaders or inputs are required.

[ ChannelsLast](https://docs.fast.ai/callback.channelslast.html#channelslast) should work with most convolutional

`timm`

models.However, it is advised to test each model, as supported operations differ across PyTorch versions.

Using [ ChannelsLast](https://docs.fast.ai/callback.channelslast.html#channelslast) with unsupported PyTorch operations can lead to “channel thrashing”, where channels last input is converted to contiguous format in an unsupported PyTorch operation, then back to channels last for execution on the tensor core, back to contiguous when returned to the operation, and finally to channels last for the next layer. Too many unsupported operations in a model can lead to reduced performance.

### Learner.to_channelslast

def to_channelslast(
use_amp:bool=True, # Add [`MixedPrecision`](https://docs.fast.ai/callback.fp16.html#mixedprecision) with `amp_mode`. Recommended for full channels last performance
amp_mode:str | AMPMode=<AMPMode.FP16: 'fp16'>, # Mixed Precision training mode. Supports fp16 and bf16.
init_scale:float=65536.0, growth_factor:float=2.0, backoff_factor:float=0.5, growth_interval:int=2000,
enabled:bool=True
):


*Set Learner and inputs to channels_last format and float16 Mixed Precision by default*



### Learner.to_contiguous

*Set Learner and inputs to contiguous_format (default format), optionally to single precision*