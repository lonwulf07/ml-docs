# Deeplearning4j Documentation
> Scraped on: 2026-03-30 | Root Source: [https://deeplearning4j.konduit.ai/](https://deeplearning4j.konduit.ai/)



---

## Source: https://deeplearning4j.konduit.ai/

# Deeplearning4j Suite Overview

Introduction to core Deeplearning4j concepts.

## Eclipse DeepLearning4J

Eclipse Deeplearning4j is a suite of tools for running deep learning on the JVM. It's the only framework that allows you to train models from java while interoperating with the python ecosystem through a mix of python execution via our cpython bindings, model import support, and interop of other runtimes such as tensorflow-java and onnxruntime.

Consider going to our [Quickstart](/multi-project/tutorials/quickstart) for an overview of where to get started. If you have dependency issues please use our [Required Dependencies](/multi-project/explanation/required-dependencies) guide.

The use cases include importing and retraining models (Pytorch, Tensorflow, Keras) models and deploying in JVM Micro service environments, mobile devices, IoT, and Apache Spark. It is a great compliment to your python environment for running models built in python, deployed to or packaged for other environments.

Deeplearning4j has several submodules including:

**Samediff**: a tensorflow/pytorch like framework for execution of complex graphs. This framework is lower level, but very flexible. It's also the base api for running onnx and tensorflow graphs.**Nd4j**: numpy ++ for java. Contains a mix of numpy operations and tensorflow/pytorch operations.**Libnd4j**: A lightweight, standalone c++ library enable math code to run on different devices. Optimizable for running on a wide variety of devices.**Python4j**: A python script execution framework easing deployment of python scripts in to production.**Apache Spark Integration**: An integration with the Apache Spark framework enabling execution of deep learning pipelines on spark**Datavec**: A data transformation library converting raw input data to tensors suitable for running neural networks on.

## How to use this website

This website follows the [divio framework](https://documentation.divio.com/) layout. This website has several sections of documentation following this layout. Below is an overview of the sections of the site:

**Multi project**contains all cross project documentation such as end to end training and other whole project related documentation. This should be the default entry point for those getting started.**Deeplearning4j**contains all of the documentation related to the core deeplearning4j apis such as the multi layer network and the computation graph. Consider this the high level framework for building neural networks. If you would like something lower level like tensorflow or pytorch, consider using samediff**Samediff**contains all the documentation related to the samediff submodule of ND4j. Samediff is a lower level api for building neural networks similar to pytorch or tensorflow with built in automatic differentiation.**Datavec**contains all the documentation related to our data transformation library datavec.**Python4j**contains all the documentation related to our cpython execution framework python4j.**Libnd4j**contains all the documentation related to our underlying C++ framework libnd4j.**Apache Spark**contains all of the documentation related to our Apache Spark integration.**Concepts/Theory**contains all of the documentation related to general mathematical or computer science theory needed to understand various aspects of the framework.

**Open Source**

The libraries are completely open-source, Apache 2.0 under open governance at the [Eclipse foundation](https://eclipse.org/). The Eclipse Deeplearning4j project welcomes all contributions. See our [community](https://community.konduit.ai/) and our [Contribution guide](https://github.com/eclipse/deeplearning4j/blob/master/CONTRIBUTING.md) to get involved.

**JVM/Python/C++**

Deeplearning4j can either be a compliment to your existing workflows in python and c++ or a standalone library for you to build and deploy models. Use what components you find useful.

Last updated

Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/release-notes

# Release Notes

[1.0.0-M2](/release-notes/1.0.0-m2)

[1.0.0-M2.1](/release-notes/1.0.0-m2.1)

[1.0.0-M1.1](/release-notes/1.0.0-m1.1)

[1.0.0-M1](/release-notes/1.0.0-m1)

[1.0.0-beta7](/release-notes/1.0.0-beta7)

[1.0.0-beta6](/release-notes/1.0.0-beta6)

[1.0.0-beta5](/release-notes/1.0.0-beta5)

[1.0.0-beta4](/release-notes/1.0.0-beta4)

[1.0.0-beta3](/release-notes/1.0.0-beta3)

[1.0.0-beta2](/release-notes/1.0.0-beta2)

[1.0.0-beta](/release-notes/1.0.0-beta)

[1.0.0-alpha](/release-notes/1.0.0-alpha)

[0.9.1](/release-notes/0.9.1)

[0.9.0](/release-notes/0.9.0)

[0.8.0](/release-notes/0.8.0)

[0.7.2](/release-notes/0.7.2)

[0.7.1](/release-notes/0.7.1)

[0.7.0](/release-notes/0.7.0)

[0.6.0](/release-notes/0.6.0)

[0.5.0](/release-notes/0.5.0)

[0.4.0](/release-notes/0.4.0)

[1.00-M2.2](/release-notes/1.00-m2.2)

Last updated

Was this helpful?

Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/multi-project/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Multi-Project
Tutorials
Beginners
chevron-right
Quickstart
chevron-right
Previous
1.00-M2.2
chevron-left
Next
Beginners
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/multi-project/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Multi-Project
How To Guides
Import in to your favorite IDE
chevron-right
Contribute
chevron-right
Developer Docs
chevron-right
Build From Source
chevron-right
Benchmark
chevron-right
Beginners
chevron-right
Previous
Quickstart
chevron-left
Next
Import in to your favorite IDE
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/multi-project/reference

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Multi-Project
Reference
Examples Tour
chevron-right
Core Concepts
chevron-right
Trouble Shooting
chevron-right
Previous
Beginners
chevron-left
Next
Examples Tour
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/multi-project/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Multi-Project
Explanation
Required Dependencies
chevron-right
The core workflow
chevron-right
Configuration
chevron-right
Build Tools
chevron-right
Snapshots
chevron-right
Maven
chevron-right
Previous
Trouble Shooting
chevron-left
Next
Required Dependencies
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/deeplearning4j/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Deeplearning4j
Tutorials
Quick Start
chevron-right
Language Processing
chevron-right
Previous
Maven
chevron-left
Next
Quick Start
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/deeplearning4j/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Deeplearning4j
How To Guides
Custom Layers
chevron-right
Keras Import
chevron-right
Tuning and Training
chevron-right
Previous
Vocabulary Cache
chevron-left
Next
Custom Layers
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/deeplearning4j/reference

# Reference

[Model Zoo](/deeplearning4j/reference/model-zoo)

[Activations](/deeplearning4j/reference/activations)

[Auto Encoders](/deeplearning4j/reference/auto-encoders)

[Computation Graph](/deeplearning4j/reference/computation-graph)

[Convolutional Layers](/deeplearning4j/reference/convolutional-layers)

[DataSet Iterators](/deeplearning4j/reference/dataset-iterators)

[Layers](/deeplearning4j/reference/layers)

[Model Listeners](/deeplearning4j/reference/model-listeners)

[Saving and Loading Models](/deeplearning4j/reference/saving-and-loading-models)

[Multi Layer Network](/deeplearning4j/reference/multi-layer-network)

[Recurrent Layers](/deeplearning4j/reference/recurrent-layers)

[Updaters/Optimizers](/deeplearning4j/reference/updaters-optimizers)

[Vertices](/deeplearning4j/reference/vertices)

[Word2vec/Glove/Doc2Vec](/deeplearning4j/reference/word2vec-glove-doc2vec)

Last updated

Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/deeplearning4j/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Deeplearning4j
Explanation
Previous
Word2vec/Glove/Doc2Vec
chevron-left
Next
Tutorials
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/datavec/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
datavec
Tutorials
Overview
chevron-right
Previous
Explanation
chevron-left
Next
Overview
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/datavec/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
datavec
How To Guides
Previous
Overview
chevron-left
Next
Reference
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/datavec/reference

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
datavec
Reference
Analysis
chevron-right
Conditions
chevron-right
Executors
chevron-right
Filters
chevron-right
Normalization
chevron-right
Operations
chevron-right
Transforms
chevron-right
Readers
chevron-right
Records
chevron-right
Reductions
chevron-right
Schemas
chevron-right
Serialization
chevron-right
Visualization
chevron-right
Previous
How To Guides
chevron-left
Next
Analysis
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/datavec/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
datavec
Explanation
Previous
Visualization
chevron-left
Next
Tutorials
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/nd4j/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Nd4j
Tutorials
Quickstart
chevron-right
Previous
Explanation
chevron-left
Next
Quickstart
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/nd4j/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Nd4j
How To Guides
Other Framework Interop
chevron-right
Matrix Manipulation
chevron-right
Element wise Operations
chevron-right
Basics
chevron-right
Previous
Quickstart
chevron-left
Next
Other Framework Interop
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/nd4j/reference

# Reference

Comprehensive programming guide for ND4J. This user guide is designed to explain (and provide examples for) the main functionality in ND4J.

## Introduction

An NDArray is in essence n-dimensional array: i.e., a rectangular array of numbers, with some number of dimensions.

Some concepts you should be familiar with:

The

*rank*of a NDArray is the number of dimensions. 2d NDArrays have a rank of 2, 3d arrays have a rank of 3, and so on. You can create NDArrays with any arbitrary rank.The

*shape*of an NDArray defines the size of each of the dimensions. Suppose we have a 2d array with 3 rows and 5 columns. This NDArray would have shape`[3,5]`

The

*length*of an NDArray defines the total number of elements in the array. The length is always equal to the product of the values that make up the shape.The

*stride*of an NDArray is defined as the separation (in the underlying data buffer) of contiguous elements in each dimension. Stride is defined per dimension, so a rank N NDArray has N stride values, one for each dimension. Note that most of the time, you don't need to know (or concern yourself with) the stride - just be aware that this is how ND4J operates internally. The next section has an example of strides.The

*data type*of an NDArray refers to the type of data of an NDArray (for example,*float*or*double*precision). Note that this is set globally in ND4J, so all NDArrays should have the same data type. Setting the data type is discussed later in this document.

In terms of indexing there are a few things to know. First, rows are dimension 0, and columns are dimension 1: thus `INDArray.size(0)`

is the number of rows, and `INDArray.size(1)`

is the number of columns. Like normal arrays in most programming languages, indexing is zero-based: thus rows have indexes `0`

to `INDArray.size(0)-1`

, and so on for the other dimensions.

Throughout this document, we'll use the term `NDArray`

to refer to the general concept of an n-dimensional array; the term `INDArray`

refers specifically to the [Java interface](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-api-parent/nd4j-api/src/main/java/org/nd4j/linalg/api/ndarray/INDArray.java) that ND4J defines. In practice, these two terms can be used interchangeably.

### NDArrays: How Are They Stored in Memory?

The next few paragraphs describe some of architecture behind ND4J. Understanding this is not strictly necessary in order to use ND4J, but it may help you to understand what is going on behind the scenes. NDArrays are stored in memory as a single flat array of numbers (or more generally, as a single contiguous block of memory), and hence differs a lot from typical Java multidimensional arrays such as a `float[][]`

or `double[][][]`

.

Physically, the data that backs an INDArray is stored off-heap: that is, it is stored outside of the Java Virtual Machine (JVM). This has numerous benefits, including performance, interoperability with high-performance BLAS libraries, and the ability to avoid some shortcomings of the JVM in high-performance computing (such as issues with Java arrays being limited to 2^31 -1 (2.14 billion) elements due to integer indexing).

In terms of encoding, an NDArray can be encoded in either C (row-major) or Fortran (column-major) order. For more details on row vs. column major order, see [Wikipedia](https://en.wikipedia.org/wiki/Row-major_order). Nd4J may use a combination of C and F order arrays together, at the same time. Most users can just use the default array ordering, but note that it is possible to use a specific ordering for a given array, should the need arise.

The following image shows how a simple 3x3 (2d) NDArray is stored in memory,

In the above array, we have:

`Shape = [3,3]`

(3 rows, 3 columns)`Rank = 2`

(2 dimensions)`Length = 9`

(3x3=9)Stride

C order stride:

`[3,1]`

: the values in consecutive rows are separated in the buffer by 3, and the values consecutive columns are separated in the buffer by 1F order stride:

`[1,3]`

: the values in consecutive rows are separated in the buffer by 1, and the values in consecutive columns are separated in the buffer by 3


A key concept in ND4J is the fact that two NDArrays can actually point to the same underlying data in memory. Usually, we have one NDArray referring to some subset of another array, and this only occurs for certain operations (such as `INDArray.get()`

, `INDArray.transpose()`

, `INDArray.getRow()`

etc. This is a powerful concept, and one that is worth understanding.

There are two primary motivations for this:

There are considerable performance benefits, most notably in avoiding copying arrays

We gain a lot of power in terms of how we can perform operations on our NDArrays


Consider a simple operation like a matrix transpose on a large (10,000 x 10,000) matrix. Using views, we can perform this matrix transpose in constant time without performing any copies (i.e., O(1) in [big O notation](https://en.wikipedia.org/wiki/Big_O_notation)), avoiding the considerable cost copying all of the array elements. Of course, sometimes we *do* want to make a copy - at which point we can use the `INDArray.dup()`

to get a copy. For example, to get a *copy* of a transposed matrix, use `INDArray out = myMatrix.transpose().dup()`

. After this `dup()`

call, there will be no link between the original array `myMatrix`

and the array `out`

(thus, changes to one will not impact the other).

So see how views can be powerful, consider a simple task: adding 1.0 to the first row of a larger array, `myArray`

. We can do this easily, in one line:

`myArray.getRow(0).addi(1.0)`


Let's break down what is happening here. First, the `getRow(0)`

operation returns an INDArray that is a view of the original. Note that both `myArrays`

and `myArray.getRow(0)`

point to the same area in memory:

then, after the addi(1.0) is performed, we have the following situation:

As we can see, changes to the NDArray returned by `myArray.getRow(0)`

will be reflected in the original array `myArray`

; similarly, changes to `myArray`

will be reflected in the row vector.

Two of the most commonly used methods of creating arrays are:

`Nd4j.zeros(int...)`

`Nd4j.ones(int...)`


The shape of the arrays are specified as integers. For example, to create a zero-filled array with 3 rows and 5 columns, use `Nd4j.zeros(3,5)`

.

These can often be combined with other operations to create arrays with other values. For example, to create an array filled with 10s:

`INDArray tens = Nd4j.zeros(3,5).addi(10)`


The above initialization works in two steps: first by allocating a 3x5 array filled with zeros, and then by adding 10 to each value.

Nd4j provides a few methods to generate INDArrays, where the contents are pseudo-random numbers.

To generate uniform random numbers in the range 0 to 1, use `Nd4j.rand(int nRows, int nCols)`

(for 2d arrays), or `Nd4j.rand(int[])`

(for 3 or more dimensions).

Similarly, to generate Gaussian random numbers with mean zero and standard deviation 1, use `Nd4j.randn(int nRows, int nCols)`

or `Nd4j.randn(int[])`

.

For repeatability (i.e., to set Nd4j's random number generator seed) you can use `Nd4j.getRandom().setSeed(long)`


Nd4j provides convenience methods for the creation of arrays from Java float and double arrays.

To create a 1d NDArray from a 1d Java array, use:

Row vector:

`Nd4j.create(float[])`

or`Nd4j.create(double[])`

Column vector:

`Nd4j.create(float[],new int[]{length,1})`

or`Nd4j.create(double[],new int[]{length,1})`


For 2d arrays, use `Nd4j.create(float[][])`

or `Nd4j.create(double[][])`

.

For creating NDArrays from Java primitive arrays with 3 or more dimensions (`double[][][]`

etc), one approach is to use the following:

There are three primary ways of creating arrays from other arrays:

Creating an exact copy of an existing NDArray using

`INDArray.dup()`

Create the array as a subset of an existing NDArray

Combine a number of existing NDArrays to create a new NDArray


For the second case, you can use getRow(), get(), etc. See [Getting and Setting Parts of NDArrays](/nd4j/reference#getset) for details on this.

Two methods for combining NDArrays are `Nd4j.hstack(INDArray...)`

and `Nd4j.vstack(INDArray...)`

.

`hstack`

(horizontal stack) takes as argument a number of matrices that have the same number of rows, and stacks them horizontally to produce a new array. The input NDArrays can have a different number of columns, however.

Example:

Output:

`vstack`

(vertical stack) is the vertical equivalent of hstack. The input arrays must have the same number of columns.

Example:

Output:

`ND4J.concat`

combines arrays along a dimension.

Example:

Output:

`ND4J.pad`

is used to pad an array.

Example:

Output:

One other method that can occasionally be useful is `Nd4j.diag(INDArray in)`

. This method has two uses, depending on the argument `in`

:

If

`in`

in a vector, diag outputs a NxN matrix with the diagonal equal to the array`in`

(where N is the length of`in`

)If

`in`

is a NxN matrix, diag outputs a vector taken from the diagonal of`in`


To create an [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix) of size N, you can use `Nd4j.eye(N)`

.

To create a row vector with elements `[a, a+1, a+2, ..., b]`

you can use the linspace command:

`Nd4j.linspace(a, b, b-a+1)`


Linspace can be combined with a reshape operation to get other shapes. For example, if you want a 2d NDArray with 5 rows and 5 columns, with values 1 to 25 inclusive, you can use the following:

`Nd4j.linspace(1,25,25).reshape(5,5)`


For an INDArray, you can get or set values using the indexes of the element you want to get or set. For a rank N array (i.e., an array with N dimensions) you need N indices.

Note: getting or setting values individually (for example, one at a time in a for loop) is generally a bad idea in terms of performance. When possible, try to use other INDArray methods that operate on a large number of elements at a time.

To get values from a 2d array, you can use: `INDArray.getDouble(int row, int column)`


For arrays of any dimensionality, you can use `INDArray.getDouble(int...)`

. For example, to get the value at index `i,j,k`

use `INDArray.getDouble(i,j,k)`


To set values, use one of the putScalar methods:

`INDArray.putScalar(int[],double)`

`INDArray.putScalar(int[],float)`

`INDArray.putScalar(int[],int)`


Here, the `int[]`

is the index, and the `double/float/int`

is the value to be placed at that index.

Some additional functionality that might be useful in certain circumstances is the `NDIndexIterator`

class. The NDIndexIterator allows you to get the indexes in a defined order (specifially, the C-order traversal order: [0,0,0], [0,0,1], [0,0,2], ..., [0,1,0], ... etc for a rank 3 array).

To iterate over the values in a 2d array, you can use:

In order to get a single row from an INDArray, you can use `INDArray.getRow(int)`

. This will obviously return a row vector. Of note here is that this row is a view: changes to the returned row will impact the original array. This can be quite useful at times (for example: `myArr.getRow(3).addi(1.0)`

to add 1.0 to the third row of a larger array); if you want a copy of a row, use `getRow(int).dup()`

.

Simiarly, to get multiple rows, use `INDArray.getRows(int...)`

. This returns an array with the rows stacked; note however that this will be a copy (not a view) of the original rows, a view is not possible here due to the way NDArrays are stored in memory.

For setting a single row, you can use `myArray.putRow(int rowIdx,INDArray row)`

. This will set the `rowIdx`

th row of `myArray`

to the values contained in the INDArray `row`

.

**Get:**

A more powerful and general method is to use `INDArray.get(NDArrayIndex...)`

. This functionality allows you to get an arbitrary sub-arrays based on certain indexes. This is perhaps best explained by some examples:

To get a single row (and all columns), you can use:

`myArray.get(NDArrayIndex.point(rowIdx), NDArrayIndex.all())`


To get a range of rows (row `a`

(inclusive) to row `b`

(exclusive)) and all columns, you can use:

`myArray.get(NDArrayIndex.interval(a,b), NDArrayIndex.all())`


To get all rows and every second column, you can use:

`myArray.get(NDArrayIndex.all(),NDArrayIndex.interval(0,2,nCols))`


Though the above examples are for 2d arrays only, the NDArrayIndex approach extends to 3 or more dimensions. For 3 dimension, you would provide 3 INDArrayIndex objects instead of just two, as above.

Note that the `NDArrayIndex.interval(...)`

, `.all()`

and `.point(int)`

methods always return views of the underlying arrays. Thus, changes to the arrays returned by `.get()`

will be reflected in the original array.

**Put:**

The same NDArrayIndex approach is also used to put elements to another array: in this case you use the `INDArray.put(INDArrayIndex[], INDArray toPut)`

method. Clearly, the size of the NDArray `toPut`

must match the size implied by the provided indexes.

Also note that `myArray.put(NDArrayIndex[],INDArray other)`

is functionally equivalent to doing `myArray.get(INDArrayIndex...).assign(INDArray other)`

. Again, this is because `.get(INDArrayIndex...)`

returns a view of the underlying array, not a copy.

(Note: ND4J versions 0.4-rc3.8 and earlier returned slightly different results for tensor along dimension, as compared to current versions).

Tensor along dimension is a powerful technique, but can be a little hard to understand at first. The idea behind tensor along dimension (hereafter refered to as TAD) is to get a lower rank sub-array that is a [view](/nd4j/reference#views) of the original array.

The tensor along dimension method takes two arguments:

The

*index*of the tensor to return (in the range of 0 to numTensors-1)The

*dimensions*(1 or more values) along which to execute the TAD operation

The simplest case is a tensor along a single row or column of a 2d array. Consider the following diagram (where dimension 0 (rows) are indexed going down the page, and dimension 1 (columns) are indexed going across the page):

Note that the output of the tensorAlongDimension call with one dimension is a row vector in all cases.

To understand why we get this output: consider the first case in the above diagram. There, we are taking the 0th (first) tensor *along* dimension 0 (dimension 0 being rows); the values (1,5,2) are in a line as we move along dimension 0, hence the output. Similarly, the `tensorAlongDimension(1,1)`

is the second (*index=1*) tensor along dimension 1; values (5,3,5) are in a line as we move along dimension 1.

The TAD operation can also be executed along multiple dimensions. For example, by specifying two dimensions to execute the TAD operation along, we can use it to get a 2d sub-array from a 3d (or 4d, or 5d...) array. Similarly, by specifying 3 dimensions, we can use it to get a 3d from 4d or higher.

There are two things we need to know about the output, for the TAD operation to be useful.

First, we need to the number of tensors that we can get, for a given set of dimensions. To determine this, we can use the "number of tensors along dimensions" method, `INDArray.tensorssAlongDimension(int... dimensions)`

. This method simply returns the number of tensors along the specified dimensions. In the examples above, we have:

`myArray.tensorssAlongDimension(0) = 3`

`myArray.tensorssAlongDimension(1) = 3`

`myArray.tensorssAlongDimension(0,1) = 1`

`myArray.tensorssAlongDimension(1,0) = 1`


(In the latter 2 cases, note that tensor along dimension would give us the same array out as the original array in - i.e., we get a 2d output from a 2d array).

More generally, the *number* of tensors is given by the product of the remaining dimensions, and the *shape* of the tensors is given by the size of the specified dimensions in the original shape.

Here's some examples:

For input shape [a,b,c], tensorssAlongDimension(0) gives b*c tensors, and tensorAlongDimension(i,0) returns tensors of shape [1,a].

For input shape [a,b,c], tensorssAlongDimension(1) gives a*c tensors, and tensorAlongDimension(i,1) returns tensors of shape [1,b].

For input shape [a,b,c], tensorssAlongDimension(0,1) gives c tensors, and tensorAlongDimension(i,0,1) returns tensors of shape [a,b].

For input shape [a,b,c], tensorssAlongDimension(1,2) gives a tensors, and tensorAlongDimension(i,1,2) returns tensors of shape [b,c].

For input shape [a,b,c,d], tensorssAlongDimension(1,2) gives a*d tensors, and tensorAlongDimension(i,1,2) returns tensors of shape [b,c].

For input shape [a,b,c,d], tensorssAlongDimension(0,2,3) gives b tensors, and tensorAlongDimension(i,0,2,3) returns tensors of shape [a,c,d].


[This section: Forthcoming.]

Nd4J has the concept of ops (operations) for many things you might want to do with (or to) an INDArray. For example, ops are used to apply things like tanh operations, or add a scalar, or do element-wise operations.

ND4J defines five types of operations:

Scalar

Transform

Accumulation

Index Accumulation

Broadcast


And two methods of executing each:

Directly on the entire INDArray, or

Along a dimension


Before getting into the specifics of these operations, let's take a moment to consider the difference between *in-place* and *copy* operations.

Many ops have both in-place and copy operations. Suppose we want to add two arrays. Nd4j defines two methods for this: `INDArray.add(INDArray)`

and `INDArray.addi(INDArray)`

. The former (add) is a copy operation; the latter is an in-place operation - the *i* in *addi* means in-place. This convention (*...i* means in-place, no *i* means copy) holds for other ops that are accessible via the INDArray interface.

Suppose we have two INDArrays `x`

and `y`

and we do `INDArray z = x.add(y)`

or `INDArray z = x.addi(y)`

. The results of these operations are shown below.

Note that with the `x.add(y)`

operation, the original array `x`

is not modified. Comparatively, with the in-place version `x.addi(y)`

, the array `x`

is modified. In both versions of the add operation, an INDArray is returned that contains the result. Note however that in the case of the `addi`

operation, the result array us actually just the original array `x`

.

[Scalar ops](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-api-parent/nd4j-api/src/main/java/org/nd4j/linalg/api/ops/impl/scalar) are element-wise operations that also take a scalar (i.e., a number). Examples of scalar ops are add, max, multiply, set and divide operations (see the previous link for a full list).

A number of the methods such as `INDArray.addi(Number)`

and `INDArray.divi(Number)`

actually execute scalar ops behind the scenes, so when available, it is more convenient to use these methods.

To execute a scalar op more directly, you can use for example:

`Nd4j.getExecutioner().execAndReturn(new ScalarAdd(myArray,1.0))`


Note that `myArray`

is modified by this operation. If this is not what you want, use `myArray.dup()`

.

Unlike the remaining ops, scalar ops don't have a sensible interpretation of executing them along a dimension.

Transform ops are operations such as element-wise logarithm, cosine, tanh, rectified linear, etc. Other examples include add, subtract and copy operations. Transform ops are commonly used in an element-wise manner (such as tanh on each element), but this is not always the case - for example, softmax is typically executed along a dimension.

To execute an element-wise tanh operation directly (on the full NDArray) you can use:

`INDArray tanh = Nd4j.getExecutioner().execAndReturn(new Tanh(myArr))`

As with scalar ops mentioned above, transform operations using the above method are *in-place* operations: that is, the NDArray myArr is modified, and the returned array `tanh`

is actually the same object as the input `myArr`

. Again, you can use `myArr.dup()`

if you want a copy.

The [Transforms class](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-api-parent/nd4j-api/src/main/java/org/nd4j/linalg/ops/transforms/Transforms.java) also defines some convenience methods, such as: `INDArray tanh = Transforms.tanh(INDArray in,boolean copy);`

This is equivalent to the method using `Nd4j.getExecutioner()`

above.

When it comes to executing accumulations, there is a key difference between executing the accumulation on the entire NDArray, versus executing along a particular dimension (or dimensions). In the first case (executing on the entire array), only a single value is returned. In the second case (accumulating along a dimension) a new INDArray is returned.

To get the sum of all values in the array:

`double sum = Nd4j.getExecutioner().execAndReturn(new Sum(myArray)).getFinalResult().doubleValue();`


or equivalently (and more conveniently)

`double sum = myArray.sumNumber().doubleValue();`


Accumulation ops can also be executed along a dimension. For example, to get the sum of all values in each column (in each column = along dimension 0, or "for values in each row"), you can use:

`INDArray sumOfColumns = Nd4j.getExecutioner().exec(new Sum(myArray),0);`


or equivalently,

`INDArray sumOfColumns = myArray.sum(0)`


Suppose this was executed on a 3x3 input array. Visually, this sum operation along dimension 0 operation looks like:

Note that here, the input has shape `[3,3]`

(3 rows, 3 columns) and the output has shape `[1,3]`

(i.e., our output is a row vector). Had we instead done the operation along dimension 1, we would get a column vector with shape `[3,1]`

, with values `(12,13,11)`

.

Accumulations along dimensions also generalize to NDArrays with 3 or more dimensions.

[Index accumulation ops](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-api-parent/nd4j-api/src/main/java/org/nd4j/linalg/api/ops/impl/indexaccum) are very similar to accumulation ops. The difference is that they return an integer index, instead of a double values.

Examples of index accumulation ops are IMax (argmax), IMin (argmin) and IAMax (argmax of absolute values).

To get the index of the maximum value in the array:

`int idx = Nd4j.getExecutioner().execAndReturn(new IAMax(myArray)).getFinalResult();`


Index accumulation ops are often most useful when executed along a dimension. For example, to get the index of the maximum value in each column (in each column = along dimension 0), you can use:

`INDArray idxOfMaxInEachColumn = Nd4j.getExecutioner().exec(new IAMax(myArray),0);`


Suppose this was executed on a 3x3 input array. Visually, this argmax/IAMax operation along dimension 0 operation looks like:

As with the accumulation op described above, the output has shape `[1,3]`

. Again, had we instead done the operation along dimension 1, we would get a column vector with shape `[3,1]`

, with values `(1,0,2)`

.

ND4J also defines broadcast and vector operations.

Some of the more useful operations are vector operations, such as addRowVector and muliColumnVector.

Consider for example the operation `x.addRowVector(y)`

where `x`

is a matrix and `y`

is a row vector. In this case, the `addRowVector`

operation adds the row vector `y`

to each row of the matrix `x`

, as shown below.

As with other ops, there are inplace and copy versions. There are also column column versions of these operations, such as `addColumnVector`

, which adds a column vector to each column of the original INDArray.

[This section: Forthcoming.]

[Link: Boolean Indexing Unit Tests](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-tests/src/test/java/org/nd4j/linalg/indexing/BooleanIndexingTest.java)

Workspaces are a feature of ND4J used to improve performance, by means of more efficient memory allocation and management. Specifically, workspaces are designed for cyclical workloads - such as training neural networks - as they allow for off-heap memory reuse (instead of continually allocating and deallocating memory on each iteration of the loop). The net effect is improved performance and reduced memory use.

For more details on workspaces, see the following links:

Sometimes with workspaces, you may encounter an exception such as:

or

**Understanding Scope Panic Exceptions**

In short: these exceptions mean that an INDArray that has been allocated in a workspace is being used incorrectly (for example, a bug or incorrect implementation of some method). This can occur for two reasons:

The INDArray has 'leaked out' of the workspace in which is was defined

The INDArray is used within the correct workspace, but from a previous iteration


In both cases, the underlying off-heap memory that the INDArray points to has been invalidated, and can no longer be used.

An example sequence of events leading to a workspace leak: 1. Workspace W is opened 2. INDArray X is allocated in workspace W 3. Workspace W is closed, and hence the memory for X is no longer valid. 4. INDArray X is used in some operation, resulting in an exception

An example sequence of events, leading to an outdated workspace pointer: 1. Workspace W is opened (iteration 1) 2. INDArray X is allocated in workspace W (iteration 1) 3. Workspace W is closed (iteration 1) 4. Workspace W is opened (iteration 2) 5. INDArray X (from iteration 1) is used in some operation, resulting in an exception

**Workarounds and Fixes for Scope Panic Exceptions**

There are two basic solutions, depending on the cause.

First. if you have implemented some custom code (or are using workspaces manually), this usually indicates a bug in your code. Generally, you have two options: 1. Detach the INDArray from all workspace, using the `INDArray.detach()`

method. The consequence is that the returned array is no longer associated with a workspace, and can be used freely within or outside of any workspace. 2. Don't allocate the array in the workspace in the first place. You can temporarily 'turn off' a workspace using: `try(MemoryWorkspace scopedOut = Nd4j.getWorkspaceManager().scopeOutOfWorkspaces()){ <your code here> }`

. The consequence is that any new arrays (created via Nd4j.create, for example) within the try block will not be associated with a workspace, and can be used outside of a workspace 3. Move/copy the array to a parent workspace, using one of the `INDArray.leverage()`

or `leverageTo(String)`

or `migrate()`

methods. See the Javadoc of these methods for more details.

Second, if you are using workspaces as part of Deeplearning4j and have not implemented any custom functionality (i.e., you have not written your own layer, data pipeline, etc), then (on the off-chance you run into this), this most likely indicates a bug in the underlying library, which usually should be reported via a Github issue. One possible workaround in the mean time is to disable workspaces using the following code:

If the exception is due to an issue in the data pipeline, you can try wrapping your `DataSetIterator`

or `MultiDataSetIterator`

in an `AsyncShieldDataSetIterator`

or `AsyncShieldMultiDataSetIterator`

.

For either cause, a final solution - if you are sure your code is correct - is to try disabling scope panic. *Note that this is NOT recommended and can crash the JVM if a legitimate issue is present*. To do this, use `Nd4j.getExecutioner().setProfilingMode(OpExecutioner.ProfilingMode.DISABLED);`

before executing your code.

ND4J currently allows INDArrays to be backed by either float or double-precision values. The default is single-precision (float). To set the order that ND4J uses for arrays globally to double precision, you can use:

Note that this should be done before using ND4J operations or creating arrays.

Alternatively, you can set the property when launching the JVM:

### Reshaping

[This section: Forthcoming.]

Flattening is the process of taking a or more INDArrays and converting them into a single flat array (a row vector), given some traversal order of the arrays.

Nd4j provides the following methods for this:

Nd4j also provides overloaded toFlattened methods with the default ordering. The order argument must be 'c' or 'f', and defines the order in which values are taken from the arrays: c order results in the arrays being flattened using array indexes in an order like [0,0,0], [0,0,1], etc (for 3d arrays) whereas f order results in values being taken in order [0,0,0], [1,0,0], etc.

### Permute

[This section: Forthcoming.]

### sortRows/sortColumns

[This section: Forthcoming.]

### Directly accessing BLAS operations

[This section: Forthcoming.]

### Serialization

Nd4j provides serialization of INDArrays many formats. Here are some examples for binary and text serialization:

The [nd4j-serde](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-serde) directory provides packages for Aeron, base64, camel-routes, gsom, jackson and kryo.

This section lists the most commonly used operations in ND4J, in a summary form. More details on most of these can be found later in this page.

In this section, assume that `arr`

, `arr1`

etc are INDArrays.

**Creating NDArrays**:

Create a zero-initialized array:

`Nd4j.zeros(nRows, nCols)`

or`Nd4j.zeros(int...)`

Create a one-initialized array:

`Nd4j.ones(nRows, nCols)`

Create a copy (duplicate) of an NDArray:

`arr.dup()`

Create a row/column vector from a

`double[]`

:`myRow = Nd4j.create(myDoubleArr)`

,`myCol = Nd4j.create(myDoubleArr,new int[]{10,1})`

Create a 2d NDArray from a

`double[][]`

:`Nd4j.create(double[][])`

Stacking a set of arrays to make a larger array:

`Nd4j.hstack(INDArray...)`

,`Nd4j.vstack(INDArray...)`

for horizontal and vertical respectivelyUniform random NDArrays:

`Nd4j.rand(int,int)`

,`Nd4j.rand(int[])`

etcNormal(0,1) random NDArrays:

`Nd4j.randn(int,int)`

,`Nd4j.randn(int[])`


**Determining the Size/Dimensions of an INDArray**:

The following methods are defined by the INDArray interface:

Get the number of dimensions:

`rank()`

For 2d NDArrays only:

`rows()`

,`columns()`

Size of the ith dimension:

`size(i)`

Get the size of all dimensions, as an int[]:

`shape()`

Determine the total number of elements in array:

`arr.length()`

See also:

`isMatrix()`

,`isVector()`

,`isRowVector()`

,`isColumnVector()`


**Getting and Setting Single Values**:

Get the value at row i, column j:

`arr.getDouble(i,j)`

Getting a values from a 3+ dimenional array:

`arr.getDouble(int[])`

Set a single value in an array:

`arr.putScalar(int[],double)`


**Scalar operations**: Scalar operations take a double/float/int value and do an operation for each As with element-wise operations, there are in-place and copy operations.

Add a scalar: arr1.add(myDouble)

Substract a scalar: arr1.sub(myDouble)

Multiply by a scalar: arr.mul(myDouble)

Divide by a scalar: arr.div(myDouble)

Reverse subtract (scalar - arr1): arr1.rsub(myDouble)

Reverse divide (scalar / arr1): arr1.rdiv(myDouble)


**Element-Wise Operations**: Note: there are copy (add, mul, etc) and in-place (addi, muli) operations. The former: arr1 is not modified. In the latter: arr1 is modified

Adding:

`arr1.add(arr2)`

Subtract:

`arr.sub(arr2)`

Multiply:

`add1.mul(arr2)`

Divide:

`arr1.div(arr2)`

Assignment (set each value in arr1 to those in arr2):

`arr1.assign(arr2)`


**Reduction Operations (sum, etc)**; Note that these operations operate on the entire array. Call `.doubleValue()`

to get a double out of the returned Number.

Sum of all elements:

`arr.sumNumber()`

Product of all elements:

`arr.prod()`

L1 and L2 norms:

`arr.norm1()`

and`arr.norm2()`

Standard deviation of all elements:

`arr.stdNumber()`


**Linear Algebra Operations**:

Matrix multiplication:

`arr1.mmul(arr2)`

Transpose a matrix:

`transpose()`

Get the diagonal of a matrix:

`Nd4j.diag(INDArray)`

Matrix inverse:

`InvertMatrix.invert(INDArray,boolean)`


**Getting Parts of a Larger NDArray**: Note: all of these methods return

Getting a row (2d NDArrays only):

`getRow(int)`

Getting multiple rows as a matrix (2d only):

`getRows(int...)`

Setting a row (2d NDArrays only):

`putRow(int,INDArray)`

Getting the first 3 rows, all columns:

`Nd4j.create(0).get(NDArrayIndex.interval(0,3),NDArrayIndex.all());`


**Element-Wise Transforms (Tanh, Sigmoid, Sin, Log etc)**:

Using

[Transforms](https://github.com/eclipse/deeplearning4j/tree/master/nd4j/nd4j-backends/nd4j-api-parent/nd4j-api/src/main/java/org/nd4j/linalg/ops/transforms/Transforms.java):`Transforms.sin(INDArray)`

,`Transforms.log(INDArray)`

,`Transforms.sigmoid(INDArray)`

etcDirectly (method 1):

`Nd4j.getExecutioner().execAndReturn(new Tanh(INDArray))`

Directly (method 2)

`Nd4j.getExecutioner().execAndReturn(Nd4j.getOpFactory().createTransform("tanh",INDArray))`


**Q: Does ND4J support sparse arrays?**

At present: no. Support for spase arrays is planned for the future.

**Q: Is it possible to dynamically grow or shrink the size on an INDArray?** In the current version of ND4J, this is not possible. We may add this functionality in the future, however.

There are two possible work-arounds:

Allocate a new array and do a copy (for example, a .put() operation)

Initially, pre-allocate a larger than required NDArray, and then operate on a view of that array. Then, as you need a larger array, get a larger view on the original pre-allocated array.


Last updated

Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/nd4j/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Nd4j
Explanation
Previous
Syntax
chevron-left
Next
Tutorials
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/samediff/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Samediff
Tutorials
Quickstart
chevron-right
Previous
Explanation
chevron-left
Next
Quickstart
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/samediff/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Samediff
How To Guides
Importing Tensorflow
chevron-right
Adding Operations
chevron-right
Previous
Quickstart
chevron-left
Next
Importing Tensorflow
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/samediff/reference

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Samediff
Reference
Operation Namespaces
chevron-right
Variables
chevron-right
Previous
codegen
chevron-left
Next
Operation Namespaces
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/samediff/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Samediff
Explanation
Model Import Framework
chevron-right
Previous
Variables
chevron-left
Next
Model Import Framework
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/libnd4j/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Libnd4j
How To Guides
Building on Windows
chevron-right
Building for raspberry pi or Jetson Nano
chevron-right
Building on ios
chevron-right
How to Add Operations
chevron-right
How to Setup CLion
chevron-right
Previous
Model Import Framework
chevron-left
Next
Building on Windows
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/libnd4j/reference

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Libnd4j
Reference
Understanding graph execution
chevron-right
Overview of working with libnd4j
chevron-right
Helpers Overview (CUDNN, OneDNN,Armcompute)
chevron-right
Previous
How to Setup CLion
chevron-left
Next
Understanding graph execution
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/libnd4j/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Libnd4j
Explanation
Previous
Helpers Overview (CUDNN, OneDNN,Armcompute)
chevron-left
Next
Tutorials
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/python4j/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Python4j
Tutorials
Quickstart
chevron-right
Previous
Explanation
chevron-left
Next
Quickstart
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/python4j/how-to-guides

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Python4j
How To Guides
Write Python Script
chevron-right
Previous
Quickstart
chevron-left
Next
Write Python Script
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/python4j/reference

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Python4j
Reference
Python Types
chevron-right
Python Path
chevron-right
Garbage Collection
chevron-right
Python Script Execution
chevron-right
Previous
Write Python Script
chevron-left
Next
Python Types
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/python4j/explanation

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Python4j
Explanation
Previous
Python Script Execution
chevron-left
Next
Tutorials
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?

---

## Source: https://deeplearning4j.konduit.ai/spark/tutorials

bars
Deeplearning4j
search
circle-xmark
⌘
Ctrl
k
Community Forum
ND4J Javadoc
DL4J Javadoc
More
ellipsis
chevron-down
copy
Copy
chevron-down
Spark
Tutorials
DL4J on Spark Quickstart
chevron-right
Previous
Explanation
chevron-left
Next
DL4J on Spark Quickstart
chevron-right
Last updated
3 years ago
Was this helpful?
Was this helpful?