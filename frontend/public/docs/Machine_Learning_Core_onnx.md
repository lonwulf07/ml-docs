# Onnx Documentation
> Scraped on: 2026-03-30 | Root Source: [https://onnx.ai/onnx/](https://onnx.ai/onnx/)



---

## Source: https://onnx.ai/onnx/

# ONNX documentation[¶](#onnx-documentation)

[Introduction to ONNX](intro/index.html)[API Reference](api/index.html)[ONNX Operators](operators/index.html)[Technical Details](technical/index.html)[ONNX Repository Documentation](repo-docs/index.html)[Adding New Operator or Function to ONNX](repo-docs/AddNewOp.html)[ONNX Security Assurance Case](repo-docs/AssuranceCase.html)[Broadcasting in ONNX](repo-docs/Broadcasting.html)[A Short Guide on the Differentiability Tag for ONNX Operators](repo-docs/DefineDifferentiability.html)[Dimension Denotation](repo-docs/DimensionDenotation.html)[External Data](repo-docs/ExternalData.html)[Open Neural Network Exchange Intermediate Representation (ONNX IR) Specification](repo-docs/IR.html)[Implementing an ONNX backend](repo-docs/ImplementingAnOnnxBackend.html)[Managing Experimental Operators](repo-docs/ManagingExperimentalOps.html)[Metadata](repo-docs/MetadataProps.html)[ONNX Types](repo-docs/ONNXTypes.html)[ONNX Backend Test](repo-docs/OnnxBackendTest.html)[ONNX Releases](repo-docs/OnnxReleases.html)[Official Release](repo-docs/OnnxReleases.html#official-release)[Operator Conventions](repo-docs/OpConventions.html)[Overview](repo-docs/Overview.html)[Python API Overview](repo-docs/PythonAPIOverview.html)[Verifying ONNX PyPI Releases with Sigstore Attestations](repo-docs/ReleaseVerification.html)[External Data Security](repo-docs/Security.html)[ONNX Shape Inference](repo-docs/ShapeInference.html)[ONNX Textual Syntax](repo-docs/Syntax.html)[Type Denotation](repo-docs/TypeDenotation.html)[ONNX Version Converter](repo-docs/VersionConverter.html)[ONNX Versioning](repo-docs/Versioning.html)

---

## Source: https://onnx.ai/onnx/intro/index.html

# Introduction to ONNX[¶](#introduction-to-onnx)

This documentation describes the ONNX concepts (**Open Neural Network Exchange**).
It shows how it is used with examples in python and finally explains
some of challenges faced when moving to ONNX in production.

This documentation describes the ONNX concepts (**Open Neural Network Exchange**).
It shows how it is used with examples in python and finally explains
some of challenges faced when moving to ONNX in production.

---

## Source: https://onnx.ai/onnx/intro/concepts.html

# ONNX Concepts[¶](#onnx-concepts)

ONNX can be compared to a programming language specialized in mathematical functions. It defines all the necessary operations a machine learning model needs to implement its inference function with this language. A linear regression could be represented in the following way:

```
def onnx_linear_regressor(X):
"ONNX code for a linear regression"
return onnx.Add(onnx.MatMul(X, coefficients), bias)
```

This example is very similar to an expression a developer could
write in Python. It can be also represented as a graph that shows
step-by-step how to transform the features to get a prediction.
That’s why a machine-learning model implemented with ONNX is often
referenced as an **ONNX graph**.

ONNX aims at providing a common language any machine learning framework
can use to describe its models. The first scenario is to make it easier
to deploy a machine learning model in production. An ONNX interpreter
(or **runtime**) can be specifically implemented and optimized for this task
in the environment where it is deployed. With ONNX, it is possible
to build a unique process to deploy a model in production and independent
from the learning framework used to build the model.
*onnx* implements a python runtime that can be used to evaluate
ONNX models and to evaluate ONNX ops. This is intended to clarify the
semantics of ONNX and to help understand and debug ONNX tools
and converters. It is not intended to be used for production and
performance is not a goal (see [onnx.reference](../api/reference.html#l-reference-implementation)).

## Input, Output, Node, Initializer, Attributes[¶](#input-output-node-initializer-attributes)

Building an ONNX graph means implementing a function
with the ONNX language or more precisely the [ONNX Operators](../operators/index.html#l-onnx-operators).
A linear regression would be written this way.
The following lines do not follow python syntax.
It is just a kind of pseudo-code to illustrate the model.

```
Input: float[M,K] x, float[K,N] a, float[N] c
Output: float[M, N] y
r = onnx.MatMul(x, a)
y = onnx.Add(r, c)
```

This code implements a function `f(x, a, c) -> y = x @ a + c`

.
And *x*, *a*, *c* are the **inputs**, *y* is the **output**.
*r* is an intermediate result.
*MatMul* and *Add* are the **nodes**. They also have inputs and outputs.
A node has also a type, one of the operators in
[ONNX Operators](../operators/index.html#l-onnx-operators). This graph was built with the example
in Section [A simple example: a linear regression](python.html#l-onnx-linear-regression-onnx-api).

The graph could also have an **initializer**. When an input
never changes such as the coefficients of the linear regression,
it is most efficient to turn it into a constant stored in the graph.

```
Input: float[M,K] x
Initializer: float[K,N] a, float[N] c
Output: float[M, N] xac
xa = onnx.MatMul(x, a)
xac = onnx.Add(xa, c)
```

Visually, this graph would look like the following image.
The right side describes operator *Add* where the second input
is defined as an initializer. This graph was obtained with this
code [Initializer, default value](python.html#l-onnx-linear-regression-onnx-api-init).

An **attribute** is a fixed parameter of an operator. Operator [Gemm](../operators/onnx__Gemm.html#l-onnx-doc-gemm)
has four attributes, *alpha*, *beta*, *transA*, *transB*. Unless the runtime
allows it through its API, once it has loaded the ONNX graph, these values
cannot be changed and remain frozen for all the predictions.

## Serialization with protobuf[¶](#serialization-with-protobuf)

The deployment of a machine-learned model into production
usually requires replicating the entire ecosystem used to
train the model, most of the time with a *docker*.
Once a model is converted into ONNX, the production environment
only needs a runtime to execute the graph defined with ONNX
operators. This runtime can be developed in any language
suitable for the production application, C, java, python, javascript,
C#, Webassembly, ARM…

But to make that happen, the ONNX graph needs to be saved.
ONNX uses *protobuf* to serialize the graph into
one single block
(see [Parsing and Serialization](https://developers.google.com/protocol-buffers/docs/pythontutorial#parsing-and-serialization)). It aims at optimizing the model size
as much as possible.

## Metadata[¶](#metadata)

Machine learned models are continuously refreshed. It is important to keep track of the model version, the author of the model and how it was trained. ONNX offers the possibility to store additional data in the model itself.

**doc_string**: Human-readable documentation for this model.Markdown is allowed.


**domain**: A reverse-DNS name to indicate the model namespace or domain,for example, ‘org.onnx’


**metadata_props**: Named metadata as dictionary`map<string,string>`

,`(values, keys)`

should be distinct.

**model_author**: A comma-separated list of names,The personal name of the author(s) of the model, and/or their organizations.


**model_license**: The well-known name or URL of the licenseunder which the model is made available.


**model_version**: The version of the model itself, encoded in an integer.**producer_name**: The name of the tool used to generate the model.**producer_version**: The version of the generating tool.**training_info**: An optional extension that containsinformation for training (see

[TrainingInfoProto](../api/classes.html#l-traininginfoproto))


## List of available operators and domains[¶](#list-of-available-operators-and-domains)

The main list is described here: [ONNX Operators](../operators/index.html#l-onnx-operators).
It merges standard matrix operators (Add, Sub, MatMul, Transpose,
Greater, IsNaN, Shape, Reshape…),
reductions (ReduceSum, ReduceMin, …)
image transformations (Conv, MaxPool, …),
deep neural networks layer (RNN, DropOut, …),
activations functions (Relu, Softmax, …).
It covers most of the operations needed to implement
inference functions from standard and deep machine learning.
ONNX does not implement every existing machine learning operator,
the list of operator would be infinite.

The main list of operators is identified with a domain **ai.onnx**.
A **domain** can be defined as a set of operators.
A few operators in this list are dedicated to text but they hardly cover
the needs. The main list is also missing tree based models very
popular in standard machine learning.
These are part of another domain ** ai.onnx.ml**,
it includes tree bases models (TreeEnsemble Regressor, …),
preprocessing (OneHotEncoder, LabelEncoder, …), SVM models
(SVMRegressor, …), imputer (Imputer).

ONNX only defines these two domains. But the library onnx
supports any custom domains and operators
(see [Extensibility](#l-onnx-extensibility)).

## Supported Types[¶](#supported-types)

ONNX specifications are optimized for numerical computation with
tensors. A *tensor* is a multidimensional array. It is defined
by:

a type: the element type, the same for all elements in the tensor

a shape: an array with all dimensions, this array can be empty, a dimension can be null

a contiguous array: it represents all the values


This definition does not include *strides* or the possibility to define
a view of a tensor based on an existing tensor. An ONNX tensor is a dense
full array with no stride.

### Element Type[¶](#element-type)

ONNX was initially developed to help deploying deep learning model.
That’s why the specifications were initially designed for floats (32 bits).
The current version supports all common types. Dictionary
l-onnx-types-mapping gives the correspondence between *ONNX*
and [ numpy](https://numpy.org/doc/stable/reference/index.html#module-numpy).

```
import re
from onnx import TensorProto
reg = re.compile('^[0-9A-Z_]+$')
values = {}
for att in sorted(dir(TensorProto)):
if att in {'DESCRIPTOR'}:
continue
if reg.match(att):
values[getattr(TensorProto, att)] = att
for i, att in sorted(values.items()):
si = str(i)
if len(si) == 1:
si = " " + si
print("%s: onnx.TensorProto.%s" % (si, att))
```

```
1: onnx.TensorProto.FLOAT
2: onnx.TensorProto.UINT8
3: onnx.TensorProto.INT8
4: onnx.TensorProto.UINT16
5: onnx.TensorProto.INT16
6: onnx.TensorProto.INT32
7: onnx.TensorProto.INT64
8: onnx.TensorProto.STRING
9: onnx.TensorProto.BOOL
10: onnx.TensorProto.FLOAT16
11: onnx.TensorProto.DOUBLE
12: onnx.TensorProto.UINT32
13: onnx.TensorProto.UINT64
14: onnx.TensorProto.COMPLEX64
15: onnx.TensorProto.COMPLEX128
16: onnx.TensorProto.BFLOAT16
17: onnx.TensorProto.FLOAT8E4M3FN
18: onnx.TensorProto.FLOAT8E4M3FNUZ
19: onnx.TensorProto.FLOAT8E5M2
20: onnx.TensorProto.FLOAT8E5M2FNUZ
21: onnx.TensorProto.UINT4
22: onnx.TensorProto.INT4
23: onnx.TensorProto.FLOAT4E2M1
24: onnx.TensorProto.FLOAT8E8M0
25: onnx.TensorProto.UINT2
26: onnx.TensorProto.INT2
```

ONNX is strongly typed and its definition does not support implicit cast. ONNX does not allow addition of two tensors or matrices with different types, even if other languages do. That’s why an explicit cast must be inserted in a graph.

### Sparse Tensor[¶](#sparse-tensor)

Sparse tensors are useful to represent arrays having many null coefficients.
ONNX supports 2D sparse tensor. Class [SparseTensorProto](../api/classes.html#l-onnx-sparsetensor-proto)
defines attributes `dims`

, `indices`

(int64) and `values`

.

### Other types[¶](#other-types)

In addition to tensors and sparse tensors, ONNX supports sequences of tensors,
map of tensors, sequences of map of tensors through types
[SequenceProto](../api/classes.html#l-onnx-sequence-proto), [MapProto](../api/classes.html#l-onnx-map-proto). They are rarely used.

## What is an opset version?[¶](#what-is-an-opset-version)

The opset is mapped to the version of the *onnx* package.
It is incremented every time the minor version increases.
Every version brings updated or new operators.

```
import onnx
print(onnx.__version__, " opset=", onnx.defs.onnx_opset_version())
```

```
1.22.0 opset= 27
```

An opset version is also attached to every ONNX graph.
It defines the version of all operators inside the graph.
Operator *Add* was updated in version 6, 7, 13 and 14. If the
graph opset is 15, it means operator *Add* follows specifications
version 14. If the graph opset is 12, then operator *Add* follows
specifications version 7. An operator in a graph follows its most
recent definition below (or equal) the global graph opset.

A graph may include operators from several domains, `ai.onnx`

and
`ai.onnx.ml`

for example. In that case, the graph must define a
global opset for every domain. The rule is applied to every
operators within the same domain.

## Subgraphs, tests and loops[¶](#subgraphs-tests-and-loops)

ONNX implements tests and loops. They all take another ONNX graphs as an attribute. These structures are usually slow and complex. It is better to avoid them if possible.

### If[¶](#if)

Operator [If](../operators/onnx__If.html#l-onnx-doc-if) executes
one of the two graphs depending on the condition evaluation.

```
If(condition) then
execute this ONNX graph (`then_branch`)
else
execute this ONNX graph (`else_branch`)
```

Those two graphs can use any result already computed in the
graph and must produce the exact same number of outputs.
These outputs will be the output of the operator `If`

.

### Scan[¶](#scan)

Operator [Scan](../operators/onnx__Scan.html#l-onnx-doc-scan) implements a loop with a fixed number of iterations.
It loops over the rows (or any other dimension) of the inputs and concatenates
the outputs along the same axis. Let’s see an example which implements
pairwise distances: \(M(i,j) = \lVert X_i - X_j \rVert^2\).

This loop is efficient even if it is still slower than a custom implementation of pairwise distances. It assumes inputs and outputs are tensors and automatically concatenate the outputs of every iteration into single tensors. The previous example only has one but it could have several.

### Loop[¶](#loop)

Operator [Loop](../operators/onnx__Loop.html#l-onnx-doc-loop) implements a for and a while loop. It can do a fixed
number of iterators and/or ends when a condition is not met anymore.
Outputs are processed in two different ways. First one is similar to
loop [Scan](../operators/onnx__Scan.html#l-onnx-doc-scan), outputs are concatenated into tensors (along the first
dimension). This also means that these outputs must have compatible shapes.
Second mechanism concatenates tensors into a sequence of tensors.

## Extensibility[¶](#extensibility)

ONNX defines a list of operators as the standard: [ONNX Operators](../operators/index.html#l-onnx-operators).
However, it is very possible
to define your own operators under this domain or a new one.
*onnxruntime* defines custom operators to improve inference.
Every node has a type, a name,
named inputs and outputs, and attributes. As long as a node is described
under these constraints, a node can be added to any ONNX graph.

Pairwise distances can be implemented with operator Scan. However, a dedicated operator called CDist is proved significantly faster, significantly enough to make the effort to implement a dedicated runtime for it.

## Functions[¶](#functions)

Functions are one way to extend ONNX specifications. Some model requires the same combination of operators. This can be avoided by creating a function itself defined with existing ONNX operators. Once defined, a function behaves like any other operators. It has inputs, outputs and attributes.

There are two advantages of using functions. The first one is to have a shorter code and easier to read. The second one is that any onnxruntime can leverage that information to run predictions faster. The runtime could have a specific implementation for a function not relying on the implementation of the existing operators.

## Shape (and Type) Inference[¶](#shape-and-type-inference)

Knowing the shapes of results is not necessary to execute an ONNX graph but this information can be used to make it faster. If you have the following graph:

```
Add(x, y) -> z
Abs(z) -> w
```

If *x* and *y* have the same shape, then *z* and *w* also have the same
shape. Knowing that, it is possible to reuse the buffer allocated for *z*,
to compute the absolute value *w* inplace. Shape inference helps the
runtime to manage the memory and therefore to be more efficient.

ONNX package can compute in most of the cases the output shape knowing the input shape for every standard operator. It cannot obviously do that for any custom operator outside of the official list.

## Tools[¶](#tools)

[netron](https://netron.app/)
is very useful to help visualize ONNX graphs.
That’s the only one without programming. The first screenshot was
made with this tool.

[onnx2py.py](https://github.com/microsoft/onnxconverter-common/blob/master/onnxconverter_common/onnx2py.py)
creates a python file from an ONNX graph. This script can create
the same graph. It may be modified by a user to change the graph.

[zetane](https://github.com/zetane/viewer)
can load onnx model and show intermediate results
when the model is executed.

---

## Source: https://onnx.ai/onnx/intro/python.html

# ONNX with Python[¶](#onnx-with-python)

Tip

Check out the [ir-py project](https://github.com/onnx/ir-py) for an alternative set of Python APIs for creating and manipulating ONNX models. The ir-py project provides a more modern and ergonomic interface compared to the ONNX Protobuf APIs described here.

Next sections highlight the main functions used to build
an ONNX graph with the [Python API](../api/index.html#l-python-onnx-api)
*onnx* offers.

## A simple example: a linear regression[¶](#a-simple-example-a-linear-regression)

The linear regression is the most simple model
in machine learning described by the following expression
\(Y = XA + B\). We can see it as a function of three
variables \(Y = f(X, A, B)\) decomposed into
`y = Add(MatMul(X, A), B)`

. That’s what we need to represent
with ONNX operators. The first thing is to implement a function
with [ONNX operators](../operators/index.html#l-onnx-operators).
ONNX is strongly typed. Shape and type must be defined for both
input and output of the function. That said, we need four functions
to build the graph among the [Helper functions to make ONNX graph components](../api/helper.html#l-onnx-make-function):

`make_tensor_value_info`

: declares a variable (input or output) given its shape and type`make_node`

: creates a node defined by an operation (an operator type), its inputs and outputs`make_graph`

: a function to create an ONNX graph with the objects created by the two previous functions`make_model`

: a last function which merges the graph and additional metadata

All along the creation, we need to give a name to every input, output of every node of the graph. Input and output of the graph are defined by onnx objects, strings are used to refer to intermediate results. This is how it looks like.

```
# imports
from onnx import TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
# inputs
# 'X' is the name, TensorProto.FLOAT the type, [None, None] the shape
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
# outputs, the shape is left undefined
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
# nodes
# It creates a node defined by the operator type MatMul,
# 'X', 'A' are the inputs of the node, 'XA' the output.
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
# from nodes to graph
# the graph is built from the list of nodes, the list of inputs,
# the list of outputs and a name.
graph = make_graph([node1, node2], # nodes
'lr', # a name
[X, A, B], # inputs
[Y]) # outputs
# onnx graph
# there is no metadata in this case.
onnx_model = make_model(graph)
# Let's check the model is consistent,
# this function is described in section
# Checker and Shape Inference.
check_model(onnx_model)
# the work is done, let's display it...
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
name: "lr"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
```

An empty shape (`None`

) means any shape, a shape defined as `[None, None]`

tells this object is a tensor with two dimensions without any further precision.
The ONNX graph can also be inspected by looking into the fields
of each object of the graph.

```
from onnx import TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
def shape2tuple(shape):
return tuple(getattr(d, 'dim_value', 0) for d in shape.dim)
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
# the list of inputs
print('** inputs **')
print(onnx_model.graph.input)
# in a more nicely format
print('** inputs **')
for obj in onnx_model.graph.input:
print("name=%r dtype=%r shape=%r" % (
obj.name, obj.type.tensor_type.elem_type,
shape2tuple(obj.type.tensor_type.shape)))
# the list of outputs
print('** outputs **')
print(onnx_model.graph.output)
# in a more nicely format
print('** outputs **')
for obj in onnx_model.graph.output:
print("name=%r dtype=%r shape=%r" % (
obj.name, obj.type.tensor_type.elem_type,
shape2tuple(obj.type.tensor_type.shape)))
# the list of nodes
print('** nodes **')
print(onnx_model.graph.node)
# in a more nicely format
print('** nodes **')
for node in onnx_model.graph.node:
print("name=%r type=%r input=%r output=%r" % (
node.name, node.op_type, node.input, node.output))
```

```
** inputs **
[name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
, name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
, name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
]
** inputs **
name='X' dtype=1 shape=(0, 0)
name='A' dtype=1 shape=(0, 0)
name='B' dtype=1 shape=(0, 0)
** outputs **
[name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
]
** outputs **
name='Y' dtype=1 shape=(0,)
** nodes **
[input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
, input: "XA"
input: "B"
output: "Y"
op_type: "Add"
]
** nodes **
name='' type='MatMul' input=['X', 'A'] output=['XA']
name='' type='Add' input=['XA', 'B'] output=['Y']
```

The tensor type is an integer value (=1 for `FLOAT`

). The helper function [ onnx.helper.tensor_dtype_to_np_dtype()](../api/helper.html#onnx.helper.tensor_dtype_to_np_dtype) converts
the integer to its corresponding numpy data type (float32 for 1).

```
from onnx import TensorProto
from onnx.helper import tensor_dtype_to_np_dtype, tensor_dtype_to_string
np_dtype = tensor_dtype_to_np_dtype(TensorProto.FLOAT)
print(f"The converted numpy dtype for {tensor_dtype_to_string(TensorProto.FLOAT)} is {np_dtype}.")
```

```
The converted numpy dtype for TensorProto.FLOAT is float32.
```

## Serialization[¶](#serialization)

ONNX is built on the top of protobuf. It adds the necessary definitions to describe a machine learning model and most of the time, ONNX is used to serialize or deserialize a model. First section addresses this need. Second section introduces the serialization and deserialization of data such as tensors, sparse tensors…

### Model Serialization[¶](#model-serialization)

The model needs to be saved to be deployed.
ONNX is based on protobuf. It minimizes the space needed
to save the graph on disk. Every object (see [Protos](../api/classes.html#l-onnx-classes))
in onnx can be serialized with method `SerializeToString`

. That’s
the case for the whole model.

```
from onnx import TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
def shape2tuple(shape):
return tuple(getattr(d, 'dim_value', 0) for d in shape.dim)
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
# The serialization
with open("linear_regression.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
# display
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
name: "lr"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
```

The graph can be restored with function `load`

:

```
from onnx import load
with open("linear_regression.onnx", "rb") as f:
onnx_model = load(f)
# display
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
name: "lr"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
```

It looks exactly the same. Any model can be serialized this way unless they are bigger than 2 Gb. protobuf is limited to size smaller than this threshold. Next sections will show how to overcome that limit.

### Data Serialization[¶](#data-serialization)

The serialization of tensors usually happens like the following:

```
import numpy
from onnx.numpy_helper import from_array
numpy_tensor = numpy.array([0, 1, 4, 5, 3], dtype=numpy.float32)
print(type(numpy_tensor))
onnx_tensor = from_array(numpy_tensor)
print(type(onnx_tensor))
serialized_tensor = onnx_tensor.SerializeToString()
print(type(serialized_tensor))
with open("saved_tensor.pb", "wb") as f:
f.write(serialized_tensor)
```

```
<class 'numpy.ndarray'>
<class 'onnx.onnx_ml_pb2.TensorProto'>
<class 'bytes'>
```

And the deserialization like:

```
from onnx import TensorProto
from onnx.numpy_helper import to_array
with open("saved_tensor.pb", "rb") as f:
serialized_tensor = f.read()
print(type(serialized_tensor))
onnx_tensor = TensorProto()
onnx_tensor.ParseFromString(serialized_tensor)
print(type(onnx_tensor))
numpy_tensor = to_array(onnx_tensor)
print(numpy_tensor)
```

```
<class 'bytes'>
<class 'onnx.onnx_ml_pb2.TensorProto'>
[0. 1. 4. 5. 3.]
```

The same schema can be used for but not limited to [TensorProto](../api/classes.html#l-tensorproto):

```
import onnx
import pprint
pprint.pprint([p for p in dir(onnx)
if p.endswith('Proto') and p[0] != '_'])
```

```
['AttributeProto',
'DeviceConfigurationProto',
'FunctionProto',
'GraphProto',
'IntIntListEntryProto',
'MapProto',
'ModelProto',
'NodeDeviceConfigurationProto',
'NodeProto',
'OperatorProto',
'OperatorSetIdProto',
'OperatorSetProto',
'OptionalProto',
'SequenceProto',
'ShardedDimProto',
'ShardingSpecProto',
'SimpleShardedDimProto',
'SparseTensorProto',
'StringStringEntryProto',
'TensorProto',
'TensorShapeProto',
'TrainingInfoProto',
'TypeProto',
'ValueInfoProto']
```

This code can be simplified with function *load_tensor_from_string*
(see [Load a Proto](../api/serialization.html#l-onnx-load-data)).

```
from onnx import load_tensor_from_string
with open("saved_tensor.pb", "rb") as f:
serialized = f.read()
proto = load_tensor_from_string(serialized)
print(type(proto))
```

```
<class 'onnx.onnx_ml_pb2.TensorProto'>
```

## Initializer, default value[¶](#initializer-default-value)

The previous model assumed the coefficients of the linear regression
were also input of the model. That’s not very convenient. They should be
part of the model itself as constant or **initializer** to follow
onnx semantic. Next example modifies the previous one to change inputs
`A`

and `B`

into initializers. The package implements two functions to
convert from numpy into onnx and the other way around
(see [array](../api/numpy_helper.html#l-numpy-helper-onnx-array)).

`onnx.numpy_helper.to_array`

: converts from onnx to numpy`onnx.numpy_helper.from_array`

: converts from numpy to onnx

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
# initializers
value = numpy.array([0.5, -0.6], dtype=numpy.float32)
A = numpy_helper.from_array(value, name='A')
value = numpy.array([0.4], dtype=numpy.float32)
C = numpy_helper.from_array(value, name='C')
# the part which does not change
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['AX'])
node2 = make_node('Add', ['AX', 'C'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X], [Y], [A, C])
onnx_model = make_model(graph)
check_model(onnx_model)
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
output: "AX"
op_type: "MatMul"
}
node {
input: "AX"
input: "C"
output: "Y"
op_type: "Add"
}
name: "lr"
initializer {
dims: 2
data_type: 1
name: "A"
raw_data: "\000\000\000?\232\231\031\277"
}
initializer {
dims: 1
data_type: 1
name: "C"
raw_data: "\315\314\314>"
}
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
```

Again, it is possible to go through the onnx structure to check how the initializers look like.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
# initializers
value = numpy.array([0.5, -0.6], dtype=numpy.float32)
A = numpy_helper.from_array(value, name='A')
value = numpy.array([0.4], dtype=numpy.float32)
C = numpy_helper.from_array(value, name='C')
# the part which does not change
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['AX'])
node2 = make_node('Add', ['AX', 'C'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X], [Y], [A, C])
onnx_model = make_model(graph)
check_model(onnx_model)
print('** initializer **')
for init in onnx_model.graph.initializer:
print(init)
```

```
** initializer **
dims: 2
data_type: 1
name: "A"
raw_data: "\000\000\000?\232\231\031\277"
dims: 1
data_type: 1
name: "C"
raw_data: "\315\314\314>"
```

The type is defined as integer as well with the same meaning.
In this second example, there is only one input left.
Input `A`

and `B`

were removed. They could be kept. In that case,
they are optional: every initializer sharing the same name as input
is considered as a default value. It replaces the input if this one
is not given.

## Attributes[¶](#attributes)

Some operators need attributes such as [Transpose](../operators/onnx__Transpose.html#l-onnx-doc-transpose) operator.
Let’s build the graph for expression \(y = XA' + B\) or
`y = Add(MatMul(X, Transpose(A)) + B)`

. Transpose needs an attribute
defining the permutation of axes: `perm=[1, 0]`

. It is added
as a named attribute in function `make_node`

.

```
from onnx import TensorProto
from onnx.helper import (
make_model, make_node, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
# unchanged
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
# added
node_transpose = make_node('Transpose', ['A'], ['tA'], perm=[1, 0])
# unchanged except A is replaced by tA
node1 = make_node('MatMul', ['X', 'tA'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
# node_transpose is added to the list
graph = make_graph([node_transpose, node1, node2],
'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
# the work is done, let's display it...
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "A"
output: "tA"
op_type: "Transpose"
attribute {
name: "perm"
ints: 1
ints: 0
type: INTS
}
}
node {
input: "X"
input: "tA"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
name: "lr"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
```

The whole list of *make* functions is the following. Many of them
are described in section [Helper functions to make ONNX graph components](../api/helper.html#l-onnx-make-function).

```
import onnx
import pprint
pprint.pprint([k for k in dir(onnx.helper)
if k.startswith('make')])
```

```
['make_attribute',
'make_attribute_ref',
'make_empty_tensor_value_info',
'make_function',
'make_graph',
'make_map',
'make_map_type_proto',
'make_model',
'make_model_gen_version',
'make_node',
'make_operatorsetid',
'make_opsetid',
'make_optional',
'make_optional_type_proto',
'make_sequence',
'make_sequence_type_proto',
'make_sparse_tensor',
'make_sparse_tensor_type_proto',
'make_sparse_tensor_value_info',
'make_tensor',
'make_tensor_sequence_value_info',
'make_tensor_type_proto',
'make_tensor_value_info',
'make_training_info',
'make_value_info']
```

## Opset and metadata[¶](#opset-and-metadata)

Let’s load the ONNX file previously created and check what kind of metadata it has.

```
from onnx import load
with open("linear_regression.onnx", "rb") as f:
onnx_model = load(f)
for field in ['doc_string', 'domain', 'functions',
'ir_version', 'metadata_props', 'model_version',
'opset_import', 'producer_name', 'producer_version',
'training_info']:
print(field, getattr(onnx_model, field))
```

```
doc_string
domain
functions []
ir_version 13
metadata_props []
model_version 0
opset_import [version: 27
]
producer_name
producer_version
training_info []
```

Most of them are empty because it was not filled when the ONNX graph was created. Two of them have a value:

```
from onnx import load
with open("linear_regression.onnx", "rb") as f:
onnx_model = load(f)
print("ir_version:", onnx_model.ir_version)
for opset in onnx_model.opset_import:
print("opset domain=%r version=%r" % (opset.domain, opset.version))
```

```
ir_version: 13
opset domain='' version=27
```

`IR`

defined the version of ONNX language.
Opset defines the version of operators being used.
Without any precision, ONNX uses the latest version available
coming from the installed package.
Another one can be used.

```
from onnx import load
with open("linear_regression.onnx", "rb") as f:
onnx_model = load(f)
del onnx_model.opset_import[:]
opset = onnx_model.opset_import.add()
opset.domain = ''
opset.version = 14
for opset in onnx_model.opset_import:
print("opset domain=%r version=%r" % (opset.domain, opset.version))
```

```
opset domain='' version=14
```

Any opset can be used as long as all operators are defined
the way ONNX specifies it. Version 5 of operator *Reshape*
defines the shape as an input and not as an attribute like in
version 1. The opset tells which specifications is followed
while describing the graph.

The other metadata can be used to store any information, to store information about the way the model was generated, a way to distinguish a model from another one with a version number.

```
from onnx import load, helper
with open("linear_regression.onnx", "rb") as f:
onnx_model = load(f)
onnx_model.model_version = 15
onnx_model.producer_name = "something"
onnx_model.producer_version = "some other thing"
onnx_model.doc_string = "documentation about this model"
prop = onnx_model.metadata_props
data = dict(key1="value1", key2="value2")
helper.set_model_props(onnx_model, data)
print(onnx_model)
```

```
ir_version: 13
producer_name: "something"
producer_version: "some other thing"
model_version: 15
doc_string: "documentation about this model"
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
name: "lr"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
version: 27
}
metadata_props {
key: "key1"
value: "value1"
}
metadata_props {
key: "key2"
value: "value2"
}
```

Field `training_info`

can be used to store additional graphs.
See [training_tool_test.py](https://github.com/onnx/onnx/blob/main/onnx/test/training_tool_test.py)
to see how it works.

## Subgraph: test and loops[¶](#subgraph-test-and-loops)

They are usually grouped in a category called *control flow*.
It is usually better to avoid them as they are not as efficient
as the matrix operation are much faster and optimized.

### If[¶](#if)

A test can be implemented with operator [If](../operators/onnx__If.html#l-onnx-doc-if).
It executes one subgraph or another depending on one
boolean. This is not used very often as a function usually
needs the result of many comparisons in a batch.
The following example computes the sum of all floats
in a matrix based on the sign, returns 1 or -1.

```
import numpy
import onnx
from onnx.helper import (
make_node, make_graph, make_model, make_tensor_value_info)
from onnx.numpy_helper import from_array
from onnx.checker import check_model
from onnxruntime import InferenceSession
# initializers
value = numpy.array([0], dtype=numpy.float32)
zero = from_array(value, name='zero')
# Same as before, X is the input, Y is the output.
X = make_tensor_value_info('X', onnx.TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', onnx.TensorProto.FLOAT, [None])
# The node building the condition. The first one
# sum over all axes.
rsum = make_node('ReduceSum', ['X'], ['rsum'])
# The second compares the result to 0.
cond = make_node('Greater', ['rsum', 'zero'], ['cond'])
# Builds the graph is the condition is True.
# Input for then
then_out = make_tensor_value_info(
'then_out', onnx.TensorProto.FLOAT, None)
# The constant to return.
then_cst = from_array(numpy.array([1]).astype(numpy.float32))
# The only node.
then_const_node = make_node(
'Constant', inputs=[],
outputs=['then_out'],
value=then_cst, name='cst1')
# And the graph wrapping these elements.
then_body = make_graph(
[then_const_node], 'then_body', [], [then_out])
# Same process for the else branch.
else_out = make_tensor_value_info(
'else_out', onnx.TensorProto.FLOAT, [5])
else_cst = from_array(numpy.array([-1]).astype(numpy.float32))
else_const_node = make_node(
'Constant', inputs=[],
outputs=['else_out'],
value=else_cst, name='cst2')
else_body = make_graph(
[else_const_node], 'else_body',
[], [else_out])
# Finally the node If taking both graphs as attributes.
if_node = onnx.helper.make_node(
'If', ['cond'], ['Y'],
then_branch=then_body,
else_branch=else_body)
# The final graph.
graph = make_graph([rsum, cond, if_node], 'if', [X], [Y], [zero])
onnx_model = make_model(graph)
check_model(onnx_model)
# Let's freeze the opset.
del onnx_model.opset_import[:]
opset = onnx_model.opset_import.add()
opset.domain = ''
opset.version = 15
onnx_model.ir_version = 8
# Save.
with open("onnx_if_sign.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
# Let's see the output.
sess = InferenceSession(onnx_model.SerializeToString(),
providers=["CPUExecutionProvider"])
x = numpy.ones((3, 2), dtype=numpy.float32)
res = sess.run(None, {'X': x})
# It works.
print("result", res)
print()
# Some display.
print(onnx_model)
```

```
result [array([1.], dtype=float32)]
ir_version: 8
graph {
node {
input: "X"
output: "rsum"
op_type: "ReduceSum"
}
node {
input: "rsum"
input: "zero"
output: "cond"
op_type: "Greater"
}
node {
input: "cond"
output: "Y"
op_type: "If"
attribute {
name: "else_branch"
g {
node {
output: "else_out"
name: "cst2"
op_type: "Constant"
attribute {
name: "value"
t {
dims: 1
data_type: 1
raw_data: "\000\000\200\277"
}
type: TENSOR
}
}
name: "else_body"
output {
name: "else_out"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_value: 5
}
}
}
}
}
}
type: GRAPH
}
attribute {
name: "then_branch"
g {
node {
output: "then_out"
name: "cst1"
op_type: "Constant"
attribute {
name: "value"
t {
dims: 1
data_type: 1
raw_data: "\000\000\200?"
}
type: TENSOR
}
}
name: "then_body"
output {
name: "then_out"
type {
tensor_type {
elem_type: 1
}
}
}
}
type: GRAPH
}
}
name: "if"
initializer {
dims: 1
data_type: 1
name: "zero"
raw_data: "\000\000\000\000"
}
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
domain: ""
version: 15
}
```

The whole is easier to visualize with the following image.

Both else and then branches are very simple.
Node *If* could even be replaced with a node *Where* and
that would be faster. It becomes interesting when both branches
are bigger and skipping one is more efficient.

### Scan[¶](#scan)

[Scan](../operators/onnx__Scan.html#l-onnx-doc-scan) seems quite complex when reading the specifications.
It is useful to loop over one dimension of a tensor and store
the results in a preallocated tensor.

The following example implements a classic nearest neighbors for
a regression problem. The first step consists in computing the
pairwise distances between the input features *X* and the training
set *W*: \(dist(X,W) = (M_{ij}) = (\norm{X_i - W_j}^2)_{ij}\). It is
followed by an operator [TopK](../operators/onnx__TopK.html#l-onnx-doc-topk) which extracts the *k* nearest
neighbors.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor, make_graph,
make_tensor_value_info)
from onnx.checker import check_model
# subgraph
initializers = []
nodes = []
inputs = []
outputs = []
value = make_tensor_value_info('next_in', 1, [None, 4])
inputs.append(value)
value = make_tensor_value_info('next', 1, [None])
inputs.append(value)
value = make_tensor_value_info('next_out', 1, [None, None])
outputs.append(value)
value = make_tensor_value_info('scan_out', 1, [None])
outputs.append(value)
node = make_node(
'Identity', ['next_in'], ['next_out'],
name='cdistd_17_Identity', domain='')
nodes.append(node)
node = make_node(
'Sub', ['next_in', 'next'], ['cdistdf_17_C0'],
name='cdistdf_17_Sub', domain='')
nodes.append(node)
node = make_node(
'ReduceSumSquare', ['cdistdf_17_C0'], ['cdistdf_17_reduced0'],
name='cdistdf_17_ReduceSumSquare', axes=[1], keepdims=0, domain='')
nodes.append(node)
node = make_node(
'Identity', ['cdistdf_17_reduced0'],
['scan_out'], name='cdistdf_17_Identity', domain='')
nodes.append(node)
graph = make_graph(nodes, 'OnnxIdentity',
inputs, outputs, initializers)
# main graph
initializers = []
nodes = []
inputs = []
outputs = []
opsets = {'': 15, 'ai.onnx.ml': 15}
target_opset = 15 # subgraphs
# initializers
list_value = [23.29599822460675, -120.86516699239603, -144.70495899914215, -260.08772982740413,
154.65272105889147, -122.23295157108991, 247.45232560871727, -182.83789715805776,
-132.92727431421793, 147.48710175784703, 88.27761768038069, -14.87785569894749,
111.71487894705504, 301.0518319089629, -29.64235742280055, -113.78493504731911,
-204.41218591022718, 112.26561056133608, 66.04032954135549,
-229.5428380626701, -33.549262642481615, -140.95737409864623, -87.8145187836131,
-90.61397011283958, 57.185488100413366, 56.864151796743855, 77.09054590340892,
-187.72501631246712, -42.779503579806025, -21.642642730674076, -44.58517761667535,
78.56025104939847, -23.92423223842056, 234.9166231927213, -73.73512816431007,
-10.150864499514297, -70.37105466673813, 65.5755688281476, 108.68676290979731, -78.36748960443065]
value = numpy.array(list_value, dtype=numpy.float64).reshape((2, 20))
tensor = numpy_helper.from_array(
value, name='knny_ArrayFeatureExtractorcst')
initializers.append(tensor)
list_value = [1.1394007205963135, -0.6848101019859314, -1.234825849533081, 0.4023416340351105,
0.17742614448070526, 0.46278226375579834, -0.4017809331417084, -1.630198359489441,
-0.5096521973609924, 0.7774903774261475, -0.4380742907524109, -1.2527953386306763,
-1.0485529899597168, 1.950775384902954, -1.420017957687378, -1.7062702178955078,
1.8675580024719238, -0.15135720372200012, -0.9772778749465942, 0.9500884413719177,
-2.5529897212982178, -0.7421650290489197, 0.653618574142456, 0.8644362092018127,
1.5327792167663574, 0.37816253304481506, 1.4693588018417358, 0.154947429895401,
-0.6724604368209839, -1.7262825965881348, -0.35955315828323364, -0.8131462931632996,
-0.8707971572875977, 0.056165341287851334, -0.5788496732711792, -0.3115525245666504,
1.2302906513214111, -0.302302747964859, 1.202379822731018, -0.38732680678367615,
2.269754648208618, -0.18718385696411133, -1.4543657302856445, 0.04575851559638977,
-0.9072983860969543, 0.12898291647434235, 0.05194539576768875, 0.7290905714035034,
1.4940791130065918, -0.8540957570075989, -0.2051582634449005, 0.3130677044391632,
1.764052391052246, 2.2408931255340576, 0.40015721321105957, 0.978738009929657,
0.06651721894741058, -0.3627411723136902, 0.30247190594673157, -0.6343221068382263,
-0.5108051300048828, 0.4283318817615509, -1.18063223361969, -0.02818222902715206,
-1.6138978004455566, 0.38690251111984253, -0.21274028718471527, -0.8954665660858154,
0.7610377073287964, 0.3336743414402008, 0.12167501449584961, 0.44386324286460876,
-0.10321885347366333, 1.4542734622955322, 0.4105985164642334, 0.14404356479644775,
-0.8877857327461243, 0.15634897351264954, -1.980796456336975, -0.34791216254234314]
value = numpy.array(list_value, dtype=numpy.float32).reshape((20, 4))
tensor = numpy_helper.from_array(value, name='Sc_Scancst')
initializers.append(tensor)
value = numpy.array([2], dtype=numpy.int64)
tensor = numpy_helper.from_array(value, name='To_TopKcst')
initializers.append(tensor)
value = numpy.array([2, -1, 2], dtype=numpy.int64)
tensor = numpy_helper.from_array(value, name='knny_Reshapecst')
initializers.append(tensor)
# inputs
value = make_tensor_value_info('input', 1, [None, 4])
inputs.append(value)
# outputs
value = make_tensor_value_info('variable', 1, [None, 2])
outputs.append(value)
# nodes
node = make_node(
'Scan', ['input', 'Sc_Scancst'], ['UU032UU', 'UU033UU'],
name='Sc_Scan', body=graph, num_scan_inputs=1, domain='')
nodes.append(node)
node = make_node(
'Transpose', ['UU033UU'], ['Tr_transposed0'],
name='Tr_Transpose', perm=[1, 0], domain='')
nodes.append(node)
node = make_node(
'Sqrt', ['Tr_transposed0'], ['Sq_Y0'],
name='Sq_Sqrt', domain='')
nodes.append(node)
node = make_node(
'TopK', ['Sq_Y0', 'To_TopKcst'], ['To_Values0', 'To_Indices1'],
name='To_TopK', largest=0, sorted=1, domain='')
nodes.append(node)
node = make_node(
'Flatten', ['To_Indices1'], ['knny_output0'],
name='knny_Flatten', domain='')
nodes.append(node)
node = make_node(
'ArrayFeatureExtractor',
['knny_ArrayFeatureExtractorcst', 'knny_output0'], ['knny_Z0'],
name='knny_ArrayFeatureExtractor', domain='ai.onnx.ml')
nodes.append(node)
node = make_node(
'Reshape', ['knny_Z0', 'knny_Reshapecst'], ['knny_reshaped0'],
name='knny_Reshape', allowzero=0, domain='')
nodes.append(node)
node = make_node(
'Transpose', ['knny_reshaped0'], ['knny_transposed0'],
name='knny_Transpose', perm=[1, 0, 2], domain='')
nodes.append(node)
node = make_node(
'Cast', ['knny_transposed0'], ['Ca_output0'],
name='Ca_Cast', to=TensorProto.FLOAT, domain='')
nodes.append(node)
node = make_node(
'ReduceMean', ['Ca_output0'], ['variable'],
name='Re_ReduceMean', axes=[2], keepdims=0, domain='')
nodes.append(node)
# graph
graph = make_graph(nodes, 'KNN regressor', inputs, outputs, initializers)
# model
onnx_model = make_model(graph)
onnx_model.ir_version = 8
onnx_model.producer_name = 'skl2onnx'
onnx_model.producer_version = ''
onnx_model.domain = 'ai.onnx'
onnx_model.model_version = 0
onnx_model.doc_string = ''
set_model_props(onnx_model, {})
# opsets
del onnx_model.opset_import[:]
for dom, value in opsets.items():
op_set = onnx_model.opset_import.add()
op_set.domain = dom
op_set.version = value
check_model(onnx_model)
with open("knnr.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
print(onnx_model)
```

```
ir_version: 8
producer_name: "skl2onnx"
producer_version: ""
domain: "ai.onnx"
model_version: 0
doc_string: ""
graph {
node {
input: "input"
input: "Sc_Scancst"
output: "UU032UU"
output: "UU033UU"
name: "Sc_Scan"
op_type: "Scan"
attribute {
name: "body"
g {
node {
input: "next_in"
output: "next_out"
name: "cdistd_17_Identity"
op_type: "Identity"
domain: ""
}
node {
input: "next_in"
input: "next"
output: "cdistdf_17_C0"
name: "cdistdf_17_Sub"
op_type: "Sub"
domain: ""
}
node {
input: "cdistdf_17_C0"
output: "cdistdf_17_reduced0"
name: "cdistdf_17_ReduceSumSquare"
op_type: "ReduceSumSquare"
attribute {
name: "axes"
ints: 1
type: INTS
}
attribute {
name: "keepdims"
i: 0
type: INT
}
domain: ""
}
node {
input: "cdistdf_17_reduced0"
output: "scan_out"
name: "cdistdf_17_Identity"
op_type: "Identity"
domain: ""
}
name: "OnnxIdentity"
input {
name: "next_in"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
dim_value: 4
}
}
}
}
}
input {
name: "next"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
output {
name: "next_out"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "scan_out"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
type: GRAPH
}
attribute {
name: "num_scan_inputs"
i: 1
type: INT
}
domain: ""
}
node {
input: "UU033UU"
output: "Tr_transposed0"
name: "Tr_Transpose"
op_type: "Transpose"
attribute {
name: "perm"
ints: 1
ints: 0
type: INTS
}
domain: ""
}
node {
input: "Tr_transposed0"
output: "Sq_Y0"
name: "Sq_Sqrt"
op_type: "Sqrt"
domain: ""
}
node {
input: "Sq_Y0"
input: "To_TopKcst"
output: "To_Values0"
output: "To_Indices1"
name: "To_TopK"
op_type: "TopK"
attribute {
name: "largest"
i: 0
type: INT
}
attribute {
name: "sorted"
i: 1
type: INT
}
domain: ""
}
node {
input: "To_Indices1"
output: "knny_output0"
name: "knny_Flatten"
op_type: "Flatten"
domain: ""
}
node {
input: "knny_ArrayFeatureExtractorcst"
input: "knny_output0"
output: "knny_Z0"
name: "knny_ArrayFeatureExtractor"
op_type: "ArrayFeatureExtractor"
domain: "ai.onnx.ml"
}
node {
input: "knny_Z0"
input: "knny_Reshapecst"
output: "knny_reshaped0"
name: "knny_Reshape"
op_type: "Reshape"
attribute {
name: "allowzero"
i: 0
type: INT
}
domain: ""
}
node {
input: "knny_reshaped0"
output: "knny_transposed0"
name: "knny_Transpose"
op_type: "Transpose"
attribute {
name: "perm"
ints: 1
ints: 0
ints: 2
type: INTS
}
domain: ""
}
node {
input: "knny_transposed0"
output: "Ca_output0"
name: "Ca_Cast"
op_type: "Cast"
attribute {
name: "to"
i: 1
type: INT
}
domain: ""
}
node {
input: "Ca_output0"
output: "variable"
name: "Re_ReduceMean"
op_type: "ReduceMean"
attribute {
name: "axes"
ints: 2
type: INTS
}
attribute {
name: "keepdims"
i: 0
type: INT
}
domain: ""
}
name: "KNN regressor"
initializer {
dims: 2
dims: 20
data_type: 11
name: "knny_ArrayFeatureExtractorcst"
raw_data: ",\\&\212\306K7@\333z`\345^7^\300\304\312,\006\217\026b\300Z9dWgAp\300.+F\027\343Tc@\203\330\264\255\350\216^\300\260\022\216sy\356n@\237h\263\r\320\332f\300\224\277.;\254\235`\300\336\370lV\226ob@\261\201\362|\304\021V@c,[Mv\301-\300\322\214\240\223\300\355[@)\036\262M\324\320r@nE;\211q\244=\300\021n5`<r\\\300\207\211\201\2400\215i\300H\232p\303\377\020\\@\317K[\302\224\202P@&\306\355\355^\261l\300\301/\377<N\306@\300#w\001\317\242\236a\300$fd\023!\364U\300\204\327LIK\247V\300J\211\366\022\276\227L@\262\345\254\206\234nL@f{\013\201\313ES@\234\343hU3wg\300\3370\367\305\306cE\300\336A\347;\204\2445\300f\374\242\031\347JF\300\325\2557\'\333\243S@\331\354\345{\232\3547\300\307o)\372T]m@#\005\000W\014oR\300\'\025\227\034>M$\300\310\252\022\\\277\227Q\300l_\243\036\326dP@\333kk\354\363+[@\223)\036\363\204\227S\300"
}
initializer {
dims: 20
dims: 4
data_type: 1
name: "Sc_Scancst"
raw_data: "\342\327\221?\267O/\277\306\016\236\277\271\377\315>3\2575>\314\361\354>;\266\315\276W\252\320\277\221x\002\277\234\tG?FK\340\276\231[\240\277\3746\206\277\002\263\371?&\303\265\277\020g\332\277$\014\357?b\375\032\276\342.z\277\3778s?/d#\300\207\376=\277\214S\'?\261K]?\0342\304?\205\236\301>\363\023\274?\212\252\036>^&,\277\324\366\334\277Z\027\270\276[*P\277\220\354^\277\241\rf=~/\024\277\320\203\237\276*z\235?m\307\232\276\225\347\231?\263O\306\276\251C\021@ \255?\276\250(\272\277Hm;=\265Dh\277\031\024\004>\262\304T=\256\245:?\374=\277?\005\246Z\277\002\025R\276iJ\240>x\314\341?\313j\017@h\341\314>\223\216z?.:\210=6\271\271\276\231\335\232>\357b\"\277 \304\002\277QN\333>\365\036\227\277k\336\346\2744\224\316\277\026\030\306>\227\330Y\276L=e\277^\323B?]\327\252>\3000\371=\013B\343>hd\323\275\242%\272?\3709\322>(\200\023>\355Ec\277\362\031 >\275\212\375\277\213!\262\276"
}
initializer {
dims: 1
data_type: 7
name: "To_TopKcst"
raw_data: "\002\000\000\000\000\000\000\000"
}
initializer {
dims: 3
data_type: 7
name: "knny_Reshapecst"
raw_data: "\002\000\000\000\000\000\000\000\377\377\377\377\377\377\377\377\002\000\000\000\000\000\000\000"
}
input {
name: "input"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
dim_value: 4
}
}
}
}
}
output {
name: "variable"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
dim_value: 2
}
}
}
}
}
}
opset_import {
domain: ""
version: 15
}
opset_import {
domain: "ai.onnx.ml"
version: 15
}
```

Visually it looks like the following:

The subgraph is executed by operator [Scan](../operators/onnx__Scan.html#l-onnx-doc-scan). In this case,
there is one *scan* input meaning the operator only builds one output.

```
node = make_node(
'Scan', ['X1', 'X2'], ['Y1', 'Y2'],
name='Sc_Scan', body=graph, num_scan_inputs=1, domain='')
```

At the first iteration, the subgraph gets *X1* and the first row of *X2*.
The graph produces two outputs. The first one replaces *X1* in the next iteration,
the second one is store in a container to form *Y2*. At the second iteration,
second input of the subgraph is the second row of *X2*.
Here is a short summary. Green is the first iteration, blue the second.


## Functions[¶](#functions)

As mentioned in previous chapter, functions can be used to shorten the code to build the model and offer more possibilities to the runtime running predictions to be faster if there exists a specific implementation of this function. If it is not the case, the runtime can still use the default implementation based on existing operators.

Function `make_function`

is used to define a function.
It works like a graph with less types. It is more like a
template. This API may evolve. It does not include initializers either.

### A function with no attribute[¶](#a-function-with-no-attribute)

That’s the more simple case. Every input of the function is a dynamic object known at execution time.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info, make_opsetid,
make_function)
from onnx.checker import check_model
new_domain = 'custom'
opset_imports = [make_opsetid("", 14), make_opsetid(new_domain, 1)]
# Let's define a function for a linear regression
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
linear_regression = make_function(
new_domain, # domain name
'LinearRegression', # function name
['X', 'A', 'B'], # input names
['Y'], # output names
[node1, node2], # nodes
opset_imports, # opsets
[]) # attribute names
# Let's use it in a graph.
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
graph = make_graph(
[make_node('LinearRegression', ['X', 'A', 'B'], ['Y1'], domain=new_domain),
make_node('Abs', ['Y1'], ['Y'])],
'example',
[X, A, B], [Y])
onnx_model = make_model(
graph, opset_imports=opset_imports,
functions=[linear_regression]) # functions to add)
check_model(onnx_model)
# the work is done, let's display it...
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
input: "B"
output: "Y1"
op_type: "LinearRegression"
domain: "custom"
}
node {
input: "Y1"
output: "Y"
op_type: "Abs"
}
name: "example"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
domain: ""
version: 14
}
opset_import {
domain: "custom"
version: 1
}
functions {
name: "LinearRegression"
input: "X"
input: "A"
input: "B"
output: "Y"
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
opset_import {
domain: ""
version: 14
}
opset_import {
domain: "custom"
version: 1
}
domain: "custom"
}
```

### A function with attributes[¶](#a-function-with-attributes)

The following functions are equivalent to the previous one except
one input, *B*, was converted into an argument named *bias*.
The code is almost the same except the bias is now a constant.
Inside the function definition, a node *Constant* is created
to insert the argument as a result. It is linked to the argument
with the attribute `ref_attr_name`

.

```
import numpy
from onnx import numpy_helper, TensorProto, AttributeProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info, make_opsetid,
make_function)
from onnx.checker import check_model
new_domain = 'custom'
opset_imports = [make_opsetid("", 14), make_opsetid(new_domain, 1)]
# Let's define a function for a linear regression
# The first step consists in creating a constant
# equal to the input parameter of the function.
cst = make_node('Constant', [], ['B'])
att = AttributeProto()
att.name = "value"
# This line indicates the value comes from the argument
# named 'bias' the function is given.
att.ref_attr_name = "bias"
att.type = AttributeProto.TENSOR
cst.attribute.append(att)
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
linear_regression = make_function(
new_domain, # domain name
'LinearRegression', # function name
['X', 'A'], # input names
['Y'], # output names
[cst, node1, node2], # nodes
opset_imports, # opsets
["bias"]) # attribute names
# Let's use it in a graph.
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
graph = make_graph(
[make_node('LinearRegression', ['X', 'A'], ['Y1'], domain=new_domain,
# bias is now an argument of the function and is defined as a tensor
bias=make_tensor('former_B', TensorProto.FLOAT, [1], [0.67])),
make_node('Abs', ['Y1'], ['Y'])],
'example',
[X, A], [Y])
onnx_model = make_model(
graph, opset_imports=opset_imports,
functions=[linear_regression]) # functions to add)
check_model(onnx_model)
# the work is done, let's display it...
print(onnx_model)
```

```
ir_version: 13
graph {
node {
input: "X"
input: "A"
output: "Y1"
op_type: "LinearRegression"
attribute {
name: "bias"
t {
dims: 1
data_type: 1
float_data: 0.67
name: "former_B"
}
type: TENSOR
}
domain: "custom"
}
node {
input: "Y1"
output: "Y"
op_type: "Abs"
}
name: "example"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
dim {
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
}
}
}
}
}
}
opset_import {
domain: ""
version: 14
}
opset_import {
domain: "custom"
version: 1
}
functions {
name: "LinearRegression"
input: "X"
input: "A"
output: "Y"
attribute: "bias"
node {
output: "B"
op_type: "Constant"
attribute {
name: "value"
type: TENSOR
ref_attr_name: "bias"
}
}
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
}
opset_import {
domain: ""
version: 14
}
opset_import {
domain: "custom"
version: 1
}
domain: "custom"
}
```

## Parsing[¶](#parsing)

Module onnx provides a faster way to define a graph and is lot easier to read. That’s easy to use when the graph is built in a single function, less easy when the graph is built from many different functions converting each piece of a machine learning pipeline.

```
import onnx.parser
from onnx.checker import check_model
input = '''
<
ir_version: 8,
opset_import: [ "" : 15]
>
agraph (float[I,J] X, float[I] A, float[I] B) => (float[I] Y) {
XA = MatMul(X, A)
Y = Add(XA, B)
}
'''
onnx_model = onnx.parser.parse_model(input)
check_model(onnx_model)
print(onnx_model)
```

```
ir_version: 8
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
domain: ""
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
domain: ""
}
name: "agraph"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
dim {
dim_param: "J"
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
}
}
}
}
}
opset_import {
domain: ""
version: 15
}
```

This way is used to create small models but it is rarely used in converting libraries.

## Checker and Shape Inference[¶](#checker-and-shape-inference)

onnx provides a function to check the model is valid. It checks input type or shapes whenever it can detect inconsistency. The following example adds two matrices of different types which is not allowed.

```
import onnx.parser
import onnx.checker
input = '''
<
ir_version: 8,
opset_import: [ "" : 15]
>
agraph (float[I,4] X, float[4,2] A, int[4] B) => (float[I] Y) {
XA = MatMul(X, A)
Y = Add(XA, B)
}
'''
try:
onnx_model = onnx.parser.parse_model(input)
onnx.checker.check_model(onnx_model)
except Exception as e:
print(e)
```

```
b'[ParseError at position (line: 6 column: 44)]\nError context: agraph (float[I,4] X, float[4,2] A, int[4] B) => (float[I] Y) {\nExpected character ) not found.'
```

`check_model`

raises an error due to that inconsistency.
This work for all operators defined in the main domain or the ML domain.
It remains silent for any custom operator not defined in any specification.

Shape inference serves one purpose: estimate the shape and the type of intermediate results. If known, the runtime can estimate the memory consumption beforehand and optimize the computation. It can fuse some operators, it can do the computation inplace…

```
import onnx.parser
from onnx import helper, shape_inference
input = '''
<
ir_version: 8,
opset_import: [ "" : 15]
>
agraph (float[I,4] X, float[4,2] A, float[4] B) => (float[I] Y) {
XA = MatMul(X, A)
Y = Add(XA, B)
}
'''
onnx_model = onnx.parser.parse_model(input)
inferred_model = shape_inference.infer_shapes(onnx_model)
print(inferred_model)
```

```
ir_version: 8
graph {
node {
input: "X"
input: "A"
output: "XA"
op_type: "MatMul"
domain: ""
}
node {
input: "XA"
input: "B"
output: "Y"
op_type: "Add"
domain: ""
}
name: "agraph"
input {
name: "X"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
dim {
dim_value: 4
}
}
}
}
}
input {
name: "A"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_value: 4
}
dim {
dim_value: 2
}
}
}
}
}
input {
name: "B"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_value: 4
}
}
}
}
}
output {
name: "Y"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
}
}
}
}
value_info {
name: "XA"
type {
tensor_type {
elem_type: 1
shape {
dim {
dim_param: "I"
}
dim {
dim_value: 2
}
}
}
}
}
}
opset_import {
domain: ""
version: 15
}
```

There is a new attribute `value_info`

which stores the inferred shapes.
Letter `I`

in `dim_param: "I"`

can be seen as a variable. It depends on the inputs
but the function is able to tell which intermediate result will share
the same dimension.
Shape inference does not work all the time. For example,
a Reshape operator. Shape inference only works if the shape is constant.
If not constant, the shape cannot be easily inferred unless
the following nodes expect specific shape.

## Evaluation and Runtime[¶](#evaluation-and-runtime)

The ONNX standard allows frameworks to export trained models in ONNX format,
and enables inference using any backend that supports the ONNX format.
*onnxruntime* is one efficient option. It is available in many platforms.
It is optimized for fast inference. Its coverage can be tracked on
[ONNX Backend Dashboard](https://onnx.ai/backend-scoreboard/).
*onnx* implements a python runtime useful to help understand a model.
It is not intended to be used for production and performance is not a goal.

### Evaluation of a linear regression[¶](#evaluation-of-a-linear-regression)

Full API is described at [onnx.reference](../api/reference.html#l-reference-implementation).
It takes a model (a *ModelProto*, a filename, …).
Method `run`

returns the outputs for a given set of inputs
specified in a dictionary.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info)
from onnx.checker import check_model
from onnx.reference import ReferenceEvaluator
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
sess = ReferenceEvaluator(onnx_model)
x = numpy.random.randn(4, 2).astype(numpy.float32)
a = numpy.random.randn(2, 1).astype(numpy.float32)
b = numpy.random.randn(1, 1).astype(numpy.float32)
feeds = {'X': x, 'A': a, 'B': b}
print(sess.run(None, feeds))
```

```
[array([[4.971681 ],
[3.8425326],
[1.4585171],
[0.7838845]], dtype=float32)]
```

### Evaluation of a node[¶](#evaluation-of-a-node)

The evaluator can also evaluate a simple node to check how an operator behaves on a specific input.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import make_node
from onnx.reference import ReferenceEvaluator
node = make_node('EyeLike', ['X'], ['Y'])
sess = ReferenceEvaluator(node)
x = numpy.random.randn(4, 2).astype(numpy.float32)
feeds = {'X': x}
print(sess.run(None, feeds))
```

```
[array([[1., 0.],
[0., 1.],
[0., 0.],
[0., 0.]], dtype=float32)]
```

Similar code would also work on *GraphProto* or *FunctionProto*.

### Evaluation Step by Step[¶](#evaluation-step-by-step)

A converting library takes an existing model trained with a machine
learning framework (*pytorch*, *scikit-learn*, …) and
converts the model into an ONNX graph. Complex models usually do not work
on the first try and seeing intermediate results may help to find the
part incorrectly converted. Parameter `verbose`

displays information
about intermediate results.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info)
from onnx.checker import check_model
from onnx.reference import ReferenceEvaluator
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'B'], ['Y'])
graph = make_graph([node1, node2], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
for verbose in [1, 2, 3, 4]:
print()
print(f"------ verbose={verbose}")
print()
sess = ReferenceEvaluator(onnx_model, verbose=verbose)
x = numpy.random.randn(4, 2).astype(numpy.float32)
a = numpy.random.randn(2, 1).astype(numpy.float32)
b = numpy.random.randn(1, 1).astype(numpy.float32)
feeds = {'X': x, 'A': a, 'B': b}
print(sess.run(None, feeds))
```

```
------ verbose=1
[array([[3.1720533 ],
[1.8437471 ],
[0.48061562],
[1.9123135 ]], dtype=float32)]
------ verbose=2
MatMul(X, A) -> XA
Add(XA, B) -> Y
[array([[-0.14756674],
[-0.09594703],
[ 0.50260603],
[ 0.05416308]], dtype=float32)]
------ verbose=3
+I X: float32:(4, 2) in [-1.4049570560455322, 0.7871156334877014]
+I A: float32:(2, 1) in [0.2832511067390442, 2.5246429443359375]
+I B: float32:(1, 1) in [-0.6689530611038208, -0.6689530611038208]
MatMul(X, A) -> XA
+ XA: float32:(4, 1) in [-3.603816270828247, 0.42235130071640015]
Add(XA, B) -> Y
+ Y: float32:(4, 1) in [-4.272769451141357, -0.24660176038742065]
[array([[-4.2727695 ],
[-0.24660176],
[-1.4858252 ],
[-1.9687796 ]], dtype=float32)]
------ verbose=4
+I X: float32:(4, 2):2.195472478866577,0.23999428749084473,0.35451021790504456,0.8846470713615417,0.24058333039283752...
+I A: float32:(2, 1):[-0.6973412036895752, -0.3540216386318207]
+I B: float32:(1, 1):[-0.3919883668422699]
MatMul(X, A) -> XA
+ XA: float32:(4, 1):[-1.6159566640853882, -0.5603988170623779, -0.1855676770210266, 0.5874649286270142]
Add(XA, B) -> Y
+ Y: float32:(4, 1):[-2.0079450607299805, -0.9523872137069702, -0.5775560140609741, 0.19547656178474426]
[array([[-2.007945 ],
[-0.9523872 ],
[-0.577556 ],
[ 0.19547656]], dtype=float32)]
```

### Evaluate a custom node[¶](#evaluate-a-custom-node)

The following example still implements a linear regression
but adds the identity matrix to *A*: \(Y = X(A + I) + B\).

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info)
from onnx.checker import check_model
from onnx.reference import ReferenceEvaluator
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node0 = make_node('EyeLike', ['A'], ['Eye'])
node1 = make_node('Add', ['A', 'Eye'], ['A1'])
node2 = make_node('MatMul', ['X', 'A1'], ['XA1'])
node3 = make_node('Add', ['XA1', 'B'], ['Y'])
graph = make_graph([node0, node1, node2, node3], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph)
check_model(onnx_model)
with open("linear_regression.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
sess = ReferenceEvaluator(onnx_model, verbose=2)
x = numpy.random.randn(4, 2).astype(numpy.float32)
a = numpy.random.randn(2, 2).astype(numpy.float32) / 10
b = numpy.random.randn(1, 2).astype(numpy.float32)
feeds = {'X': x, 'A': a, 'B': b}
print(sess.run(None, feeds))
```

```
EyeLike(A) -> Eye
Add(A, Eye) -> A1
MatMul(X, A1) -> XA1
Add(XA1, B) -> Y
[array([[ 0.44894508, -1.641578 ],
[ 0.53520465, -3.05169 ],
[-0.44268996, -2.2359948 ],
[-1.5092573 , -0.30119324]], dtype=float32)]
```

What if we combine operators *EyeLike* and *Add* into *AddEyeLike* to
make it more efficient. Next example replaces these two operators
by a single one from domain `'optimized'`

.

```
import numpy
from onnx import numpy_helper, TensorProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info, make_opsetid)
from onnx.checker import check_model
X = make_tensor_value_info('X', TensorProto.FLOAT, [None, None])
A = make_tensor_value_info('A', TensorProto.FLOAT, [None, None])
B = make_tensor_value_info('B', TensorProto.FLOAT, [None, None])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, [None])
node01 = make_node('AddEyeLike', ['A'], ['A1'], domain='optimized')
node2 = make_node('MatMul', ['X', 'A1'], ['XA1'])
node3 = make_node('Add', ['XA1', 'B'], ['Y'])
graph = make_graph([node01, node2, node3], 'lr', [X, A, B], [Y])
onnx_model = make_model(graph, opset_imports=[
make_opsetid('', 18), make_opsetid('optimized', 1)
])
check_model(onnx_model)
with open("linear_regression_improved.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
```

We need to evaluate this model is equivalent to the first one. This requires an implementation for this particular node.

```
import numpy
from onnx.reference import ReferenceEvaluator
from onnx.reference.op_run import OpRun
class AddEyeLike(OpRun):
op_domain = "optimized"
def _run(self, X, alpha=1.):
assert len(X.shape) == 2
assert X.shape[0] == X.shape[1]
X = X.copy()
ind = numpy.diag_indices(X.shape[0])
X[ind] += alpha
return (X,)
sess = ReferenceEvaluator("linear_regression_improved.onnx", verbose=2, new_ops=[AddEyeLike])
x = numpy.random.randn(4, 2).astype(numpy.float32)
a = numpy.random.randn(2, 2).astype(numpy.float32) / 10
b = numpy.random.randn(1, 2).astype(numpy.float32)
feeds = {'X': x, 'A': a, 'B': b}
print(sess.run(None, feeds))
# Let's check with the previous model.
sess0 = ReferenceEvaluator("linear_regression.onnx",)
sess1 = ReferenceEvaluator("linear_regression_improved.onnx", new_ops=[AddEyeLike])
y0 = sess0.run(None, feeds)[0]
y1 = sess1.run(None, feeds)[0]
print(y0)
print(y1)
print(f"difference: {numpy.abs(y0 - y1).max()}")
```

```
AddEyeLike(A) -> A1
MatMul(X, A1) -> XA1
Add(XA1, B) -> Y
[array([[-1.4602413, -0.605144 ],
[-1.3192368, 2.0269253],
[ 0.8722413, 1.0121027],
[ 0.5324965, 0.556288 ]], dtype=float32)]
[[-1.4602413 -0.605144 ]
[-1.3192368 2.0269253]
[ 0.8722413 1.0121027]
[ 0.5324965 0.556288 ]]
[[-1.4602413 -0.605144 ]
[-1.3192368 2.0269253]
[ 0.8722413 1.0121027]
[ 0.5324965 0.556288 ]]
difference: 0.0
```

Predictions are the same. Let’s compare the performance on a matrix big enough to see a significant difference.

```
import timeit
import numpy
from onnx.reference import ReferenceEvaluator
from onnx.reference.op_run import OpRun
class AddEyeLike(OpRun):
op_domain = "optimized"
def _run(self, X, alpha=1.):
assert len(X.shape) == 2
assert X.shape[0] == X.shape[1]
X = X.copy()
ind = numpy.diag_indices(X.shape[0])
X[ind] += alpha
return (X,)
sess = ReferenceEvaluator("linear_regression_improved.onnx", verbose=2, new_ops=[AddEyeLike])
x = numpy.random.randn(4, 100).astype(numpy.float32)
a = numpy.random.randn(100, 100).astype(numpy.float32) / 10
b = numpy.random.randn(1, 100).astype(numpy.float32)
feeds = {'X': x, 'A': a, 'B': b}
sess0 = ReferenceEvaluator("linear_regression.onnx")
sess1 = ReferenceEvaluator("linear_regression_improved.onnx", new_ops=[AddEyeLike])
y0 = sess0.run(None, feeds)[0]
y1 = sess1.run(None, feeds)[0]
print(f"difference: {numpy.abs(y0 - y1).max()}")
print(f"time with EyeLike+Add: {timeit.timeit(lambda: sess0.run(None, feeds), number=1000)}")
print(f"time with AddEyeLike: {timeit.timeit(lambda: sess1.run(None, feeds), number=1000)}")
```

```
difference: 0.0
time with EyeLike+Add: 0.08475144299995918
time with AddEyeLike: 0.06845636299999569
```

It seems worth adding an optimized node in this case.
This kind of optimization is usually called *fusion*.
Two consecutive operators are fused into an optimized version of both.
Production usually relies on *onnxruntime* but since
the optimization uses basic matrix operation, it should bring
the same performance gain on any other runtime.

## Implementation details[¶](#implementation-details)

### Python and C++[¶](#python-and-c)

onnx relies on protobuf to define its type.
You would assume that a python object is just a wrapper around
a C pointer on the internal structure. Therefore, it should be
possible to access internal data from a function receiving a python
object of type `ModelProto`

. But it is not. According to
[Protobuf 4, changes](https://developers.google.com/protocol-buffers/docs/news/2022-05-06),
this is no longer possible after version 4 and it is safer to assume the
only way to get a hold on the content is to serialize the model
into bytes, give it to the C function, then deserialize it.
Functions like `check_model`

or
`shape_inference`

are calling `SerializeToString`

then
`ParseFromString`

before checking the model with a C code.

### Attributes and inputs[¶](#attributes-and-inputs)

There is a clear distinction between the two. Inputs are dynamic and
may change at every execution. Attributes never changes and an optimizer
can improve the execution graph assuming it never changes.
Therefore, it is impossible to turn an input into an attribute.
And the operator *Constant* is the only operator changing an
attribute into an input.

### Shape or no shape[¶](#shape-or-no-shape)

onnx usually expects a shape for every input or output assuming the rank (or the number of dimensions) is known. What if we need to create a valid graph for every dimension? This case is still puzzling.

```
import numpy
from onnx import numpy_helper, TensorProto, FunctionProto
from onnx.helper import (
make_model, make_node, set_model_props, make_tensor,
make_graph, make_tensor_value_info, make_opsetid,
make_function)
from onnx.checker import check_model
from onnxruntime import InferenceSession
def create_model(shapes):
new_domain = 'custom'
opset_imports = [make_opsetid("", 14), make_opsetid(new_domain, 1)]
node1 = make_node('MatMul', ['X', 'A'], ['XA'])
node2 = make_node('Add', ['XA', 'A'], ['Y'])
X = make_tensor_value_info('X', TensorProto.FLOAT, shapes['X'])
A = make_tensor_value_info('A', TensorProto.FLOAT, shapes['A'])
Y = make_tensor_value_info('Y', TensorProto.FLOAT, shapes['Y'])
graph = make_graph([node1, node2], 'example', [X, A], [Y])
onnx_model = make_model(graph, opset_imports=opset_imports)
# Let models runnable by onnxruntime with a released ir_version
onnx_model.ir_version = 8
return onnx_model
print("----------- case 1: 2D x 2D -> 2D")
onnx_model = create_model({'X': [None, None], 'A': [None, None], 'Y': [None, None]})
check_model(onnx_model)
sess = InferenceSession(onnx_model.SerializeToString(),
providers=["CPUExecutionProvider"])
res = sess.run(None, {
'X': numpy.random.randn(2, 2).astype(numpy.float32),
'A': numpy.random.randn(2, 2).astype(numpy.float32)})
print(res)
print("----------- case 2: 2D x 1D -> 1D")
onnx_model = create_model({'X': [None, None], 'A': [None], 'Y': [None]})
check_model(onnx_model)
sess = InferenceSession(onnx_model.SerializeToString(),
providers=["CPUExecutionProvider"])
res = sess.run(None, {
'X': numpy.random.randn(2, 2).astype(numpy.float32),
'A': numpy.random.randn(2).astype(numpy.float32)})
print(res)
print("----------- case 3: 2D x 0D -> 0D")
onnx_model = create_model({'X': [None, None], 'A': [], 'Y': []})
check_model(onnx_model)
try:
InferenceSession(onnx_model.SerializeToString(),
providers=["CPUExecutionProvider"])
except Exception as e:
print(e)
print("----------- case 4: 2D x None -> None")
onnx_model = create_model({'X': [None, None], 'A': None, 'Y': None})
try:
check_model(onnx_model)
except Exception as e:
print(type(e), e)
sess = InferenceSession(onnx_model.SerializeToString(),
providers=["CPUExecutionProvider"])
res = sess.run(None, {
'X': numpy.random.randn(2, 2).astype(numpy.float32),
'A': numpy.random.randn(2).astype(numpy.float32)})
print(res)
print("----------- end")
```

```
----------- case 1: 2D x 2D -> 2D
[array([[-1.0758662 , 1.0438238 ],
[ 0.02758372, 0.16975987]], dtype=float32)]
----------- case 2: 2D x 1D -> 1D
[array([ 3.256085 , -1.2845244], dtype=float32)]
----------- case 3: 2D x 0D -> 0D
[ONNXRuntimeError] : 1 : FAIL : Node () Op (MatMul) [ShapeInferenceError] Input tensors of wrong rank (0).
----------- case 4: 2D x None -> None
<class 'onnx.onnx_cpp2py_export.checker.ValidationError'> Field 'shape' of 'type' is required but missing.
[array([ 0.12949902, -0.02424222], dtype=float32)]
----------- end
```

---

## Source: https://onnx.ai/onnx/intro/converters.html

# Converters[¶](#converters)

Using ONNX in production means the prediction function of a model can be implemented with ONNX operators. A runtime must be chosen, one available on the platform the model is deployed. Discrepancies are checked and finally, the latency is measured. The first step of the model conversion can be easy if there exists a converting library for this framework supporting all the pieces of the model. If it is not the case, the missing parts must be implemented in ONNX. That may be very time consuming.

## What is a converting library?[¶](#what-is-a-converting-library)

[sklearn-onnx](https://onnx.ai/sklearn-onnx/) converts
[scikit-learn](https://scikit-learn.org/stable/) models
into ONNX. It rewrites the prediction function of a model,
whatever it is, with ONNX operators using the API introduced
above. It ensures that the predictions are equal or at least
very close to the expected predictions computed with the
original model.

Machine learning libraries usually have their own design.
That’s why there exists a specific converting library for
each of them. Many of them are listed there:
[Converting to ONNX format](https://github.com/onnx/tutorials#converting-to-onnx-format).
Here is a short list:

[sklearn-onnx](https://onnx.ai/sklearn-onnx/): converts models from[scikit-learn](https://scikit-learn.org/stable/),[tensorflow-onnx](https://github.com/onnx/tensorflow-onnx): converts models from[tensorflow](https://www.tensorflow.org/),[onnxmltools](https://github.com/onnx/onnxmltools): converts models from[lightgbm](https://lightgbm.readthedocs.io/),[xgboost](https://xgboost.readthedocs.io/en/stable/),[pyspark](https://spark.apache.org/docs/latest/api/python/),[libsvm](https://github.com/cjlin1/libsvm)[torch.onnx](https://pytorch.org/docs/master/onnx.html): converts model from[pytorch](https://pytorch.org/).

The main challenge for all these libraries is to keep up the rhythm. They must be updated everytime ONNX or the library they support have a new released version. That means three to five new releases per year.

Converting libraries are not compatible among each others.
[tensorflow-onnx](https://github.com/onnx/tensorflow-onnx)
is dedicated to tensorflow and only tensorflow.
The same goes for sklearn-onnx specialized into scikit-learn.

One challenge is customization. It is difficult to support custom pieces in a machine learned model. They have to write the specific converter for this piece. Somehow, it is like implementing twice the prediction function. There is one easy case: deep learning frameworks have their own primitives to ensure the same code can be executed on different environments. As long as a custom layer or a subpart is using pieces of pytorch or tensorflow, there is not much to do. It is a different story for scikit-learn. This package does not have its own addition or multiplication, it relies on numpy or scipy. The user must implement its transformer or predictor with ONNX primitives, whether or not it was implemented with numpy.

## Alternatives[¶](#alternatives)

One alternative for implementing ONNX export capability is to leverage standard protocols such as the [Array API standard](https://data-apis.org/array-api/latest/), which standardizes a common set of array operations. It enables code reuse across libraries like NumPy, JAX, PyTorch, CuPy and more. [ndonnx](https://github.com/Quantco/ndonnx) enables execution with an ONNX backend and instant ONNX export for Array API compliant code. This diminishes the need for dedicated converter library code since the same code used to implement most of a library can reused in ONNX conversion. It also provides a convenient primitive for converter authors looking for a NumPy-like experience when constructing ONNX graphs.

## Opsets[¶](#opsets)

ONNX releases packages with version numbers like
`major.minor.fix`

. Every minor update means the list of operators
is different or the signature has changed. It is also associated to
an opset, version `1.10`

is opset 15, `1.11`

will be opset 16.
Every ONNX graph should define the opset it follows. Changing this
version without updating the operators could make the graph invalid.
If the opset is left unspecified, ONNX will consider that the graph
is valid for the latest opset.

New opsets usually introduce new operators. A same inference function
could be implemented differently, usually in a more efficient way.
However, the runtime the model is running on may not
support newest opsets or at least not in the installed version.
That’s why every converting library offers the
possibility to create an ONNX graph for a specific opset usually called
`target_opset`

. ONNX language describes simple and complex operators.
Changing the opset is similar to upgrading a library. onnx
and onnx runtimes must support backward compatibility.

## Other API[¶](#other-api)

Examples in previous sections show that onnx API is very verbose. It is also difficult to get a whole picture of a graph by reading the code unless it is a small one. Almost every converting library has implemented a different API to create a graph, usually more simple, less verbose than the API of onnx package. All API automate the addition of initializers, hide the creation of a name of every intermediate result, deal with different version for different opset.

### A class Graph with a method add_node[¶](#a-class-graph-with-a-method-add-node)

`tensorflow-onnx`

implements a class graph.
It rewrites tensorflow function with ONNX operator when
ONNX does not have a similar function (see [Erf](https://github.com/onnx/tensorflow-onnx/blob/master/tf2onnx/onnx_opset/math.py#L414).

sklearn-onnx defines two different API. The first one
introduced in that example [Implement a converter](https://onnx.ai/sklearn-onnx/auto_tutorial/plot_jcustom_syntax.html)
follows a similar design that tensorflow-onnx follows.
The following lines are extracted from the converter of a linear
classifier.

```
# initializer
coef = scope.get_unique_variable_name('coef')
model_coef = np.array(
classifier_attrs['coefficients'], dtype=np.float64)
model_coef = model_coef.reshape((number_of_classes, -1)).T
container.add_initializer(
coef, proto_dtype, model_coef.shape, model_coef.ravel().tolist())
intercept = scope.get_unique_variable_name('intercept')
model_intercept = np.array(
classifier_attrs['intercepts'], dtype=np.float64)
model_intercept = model_intercept.reshape((number_of_classes, -1)).T
container.add_initializer(
intercept, proto_dtype, model_intercept.shape,
model_intercept.ravel().tolist())
# add nodes
multiplied = scope.get_unique_variable_name('multiplied')
container.add_node(
'MatMul', [operator.inputs[0].full_name, coef], multiplied,
name=scope.get_unique_operator_name('MatMul'))
# [...]
argmax_output_name = scope.get_unique_variable_name('label')
container.add_node('ArgMax', raw_score_name, argmax_output_name,
name=scope.get_unique_operator_name('ArgMax'),
axis=1)
```

### Operator as function[¶](#operator-as-function)

The second API shown in [Implement a new converter](https://onnx.ai/sklearn-onnx/auto_tutorial/plot_icustom_converter.html)
is more compact and defines
every ONNX operator as composable functions.
The syntax looks like this for [KMeans](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html),
less verbose and easier to read.

```
rs = OnnxReduceSumSquare(
input_name, axes=[1], keepdims=1, op_version=opv)
gemm_out = OnnxMatMul(
input_name, (C.T * (-2)).astype(dtype), op_version=opv)
z = OnnxAdd(rs, gemm_out, op_version=opv)
y2 = OnnxAdd(C2, z, op_version=opv)
ll = OnnxArgMin(y2, axis=1, keepdims=0, output_names=out[:1],
op_version=opv)
y2s = OnnxSqrt(y2, output_names=out[1:], op_version=opv)
```

## Tricks learned from experience[¶](#tricks-learned-from-experience)

### Discrepancies[¶](#discrepancies)

ONNX is strongly typed and optimizes for float32, the most
common type in deep learning. Libraries in standard
machine learning use both float32 and float64. numpy
usually cast to the most generic type, float64. It has no significant
impact when the prediction function is contiguous.
When it is not, the right type must be used. Example
[Issues when switching to float](https://onnx.ai/sklearn-onnx/auto_tutorial/plot_ebegin_float_double.html)
gives more insights on that topic.

Parallelization changes the order of computation. It is usually
not significant but it may explain some weird discrepancies.
`1 + 1e17 - 1e17 = 0`

but `1e17 - 1e17 + 1 = 1`

. High order of
magnitude are rare but not so rare when a model uses the inverse
of a matrix.

### IsolationForest Trick[¶](#isolationforest-trick)

ONNX only implements a [TreeEnsembleRegressor](../operators/onnx_aionnxml_TreeEnsembleRegressor.html#l-onnx-docai-onnx-ml-treeensembleregressor) but
it does not offer the possibility to retrieve any information
about the path the decision followed or statistics to the graph.
The trick is to used one forest to predict the leaf index and map
this leaf index one or multiple times with the information needed.

### Discretization[¶](#discretization)

Looking in which interval a feature falls into. That’s easy to do
with numpy but not so easy to do efficiently with ONNX.
The fastest way is to use a TreeEnsembleRegressor, a binary search,
which outputs the interval index. That’s what this example
implements: [Converter for WOE](https://onnx.ai/sklearn-onnx/auto_tutorial/plot_woe_transformer.html).

### Contribute[¶](#contribute)

[onnx repository](https://github.com/onnx/onnx) must be forked and cloned.

### Build[¶](#build)

The windows build requires conda. The following steps might not be up to date.
Folder [onnx/.github/workflows](https://github.com/onnx/onnx/tree/main/.github/workflows)
contains the latest instructions.

**Windows**

The build is easier with Anaconda. First: create an environment. It must be done only once.

```
conda create --yes --quiet --name py3.9 python=3.9
conda install -n py3.9 -y -c conda-forge numpy libprotobuf=3.16.0
```

Then build the package:

```
git submodule update --init --recursive
set ONNX_BUILD_TESTS=1
set ONNX_ML=$(onnx_ml)
set CMAKE_ARGS=-DONNX_USE_PROTOBUF_SHARED_LIBS=ON -DONNX_USE_LITE_PROTO=ON -DONNX_WERROR=ON
python -m build --wheel
```

The package can now be installed.

**Linux**

After cloning the repository, the following instructions can be run:

```
python -m build --wheel
```

### Build the markdown documentation[¶](#build-the-markdown-documentation)

The package must be built first (see previous section).

```
set ONNX_BUILD_TESTS=1
set ONNX_ML=$(onnx_ml)
set CMAKE_ARGS=-DONNX_USE_PROTOBUF_SHARED_LIBS=ON -DONNX_USE_LITE_PROTO=ON -DONNX_WERROR=ON
python onnx\gen_proto.py -l
python onnx\gen_proto.py -l --ml
pip install -e .
python onnx\backend\test\cmd_tools.py generate-data
python onnx\backend\test\stat_coverage.py
python onnx\defs\gen_doc.py
set ONNX_ML=0
python onnx\defs\gen_doc.py
set ONNX_ML=1
```

### Update an existing operator[¶](#update-an-existing-operator)

All operators are defined in folder
[onnx/onnx/defs](https://github.com/onnx/onnx/tree/main/onnx/defs).
There are two files in every subfolder, one called `defs.cc`

and another one
called `old.cc`

.

`defs.cc`

: contains the most recent definition for every operator`old.cc`

: contains the deprecated version of the operators in previous opset

Updating an operator means copying the definition from `defs.cc`

to `old.cc`

and updating the existing one in `defs.cc`

.

One file following the pattern `onnx/defs/operator_sets*.h`

must be modified. These headers registers the list
of existing operators.

File [onnx/defs/schema.h](https://github.com/onnx/onnx/blob/main/onnx/defs/schema.h)
contains the latest opset version. It must be updated too if one opset
was upgraded.

File [onnx/version_converter/convert.h](https://github.com/onnx/onnx/blob/main/onnx/version_converter/convert.h)
contains rules to apply when converter a node from an opset to the next one.
This file may be updated too.

The package must be compiled and the documentation must be generated again to automatically update the markdown documentation and it must be included in the PR.

Then unit test must be updated.

**Summary**

Modify files

`defs.cc`

,`old.cc`

,`onnx/defs/operator_sets*.h`

,`onnx/defs/schema.h`

Optional: modify file

`onnx/version_converter/convert.h`

Build onnx.

Build the documentation.

Update unit test.


The PR should include the modified files and the modified markdown documentation,
usually a subset of
`docs/docs/Changelog-ml.md`

, `docs/Changelog.md`

,
`docs/Operators-ml.md`

, `docs/Operators.md`

,
`docs/TestCoverage-ml.md`

, `docs/TestCoverage.md`

.

---

## Source: https://onnx.ai/onnx/api/index.html

# API Reference[¶](#api-reference)

Tip

The [ir-py project](https://github.com/onnx/ir-py) provides alternative Pythonic APIs for creating and manipulating ONNX models without interaction with Protobuf.

## Versioning[¶](#versioning)

The following example shows how to retrieve onnx version,
the onnx opset, the IR version. Every new major release increments the opset version
(see [Opset Version](defs.html#l-api-opset-version)).

```
from onnx import __version__, IR_VERSION
from onnx.defs import onnx_opset_version
print(f"onnx.__version__={__version__!r}, opset={onnx_opset_version()}, IR_VERSION={IR_VERSION}")
```

```
onnx.__version__='1.22.0', opset=27, IR_VERSION=13
```

The intermediate representation (IR) specification is the abstract model for graphs and operators and the concrete format that represents them. Adding a structure, modifying one them increases the IR version.

The opset version increases when an operator is added or removed or modified. A higher opset means a longer list of operators and more options to implement an ONNX functions. An operator is usually modified because it supports more input and output type, or an attribute becomes an input.

## Data Structures[¶](#data-structures)

Every ONNX object is defined based on a [protobuf message](https://googleapis.dev/python/protobuf/latest/google/protobuf/message.html)
and has a name ended with suffix `Proto`

. For example, [NodeProto](classes.html#l-nodeproto) defines
an operator, [TensorProto](classes.html#l-tensorproto) defines a tensor. Next page lists all of them.

## Functions[¶](#functions)

An ONNX model can be directly from the classes described in previous section but it is faster to create and verify a model with the following helpers.

---

## Source: https://onnx.ai/onnx/api/classes.html

# Protos[¶](#protos)

This structures are defined with protobuf in files `onnx/*.proto`

.
It is recommended to use function in module [onnx.helper](helper.html#l-mod-onnx-helper)
to create them instead of directly instantiated them.
Every structure can be printed with function `print`

and is rendered
as a json string.

## AttributeProto[¶](#attributeproto)

This class is used to define an attribute of an operator
defined itself by a NodeProto. It is
a named attribute containing either singular float, integer, string, graph,
and tensor values, or repeated float, integer, string, graph, and tensor values.
An AttributeProto MUST contain the name field, and *only one* of the
following content fields, effectively enforcing a C/C++ union equivalent.

-
*class*onnx.AttributeProto[¶](#onnx.AttributeProto)

## FunctionProto[¶](#functionproto)

This defines a function. It is not a model but can be used to define custom operators used in a model.

-
*class*onnx.FunctionProto[¶](#onnx.FunctionProto)

## GraphProto[¶](#graphproto)

This defines a graph or a set of nodes called from a loop or a test
for example.
A graph defines the computational logic of a model and is comprised of a parameterized
list of nodes that form a directed acyclic graph based on their inputs and outputs.
This is the equivalent of the *network* or *graph* in many deep learning
frameworks.

-
*class*onnx.GraphProto[¶](#onnx.GraphProto)

## MapProto[¶](#mapproto)

This defines a map or a dictionary. It specifies an associative table, defined by keys and values. MapProto is formed with a repeated field of keys (of type INT8, INT16, INT32, INT64, UINT8, UINT16, UINT32, UINT64, or STRING) and values (of type TENSOR, SPARSE_TENSOR, SEQUENCE, or MAP). Key types and value types have to remain the same throughout the instantiation of the MapProto.

-
*class*onnx.MapProto[¶](#onnx.MapProto)

## ModelProto[¶](#modelproto)

This defines a model. That is the type every converting library returns after converting a machine learned model. ModelProto is a top-level file/container format for bundling a ML model and associating its computation graph with metadata. The semantics of the model are described by the associated GraphProto’s.

-
*class*onnx.ModelProto[¶](#onnx.ModelProto)

## NodeProto[¶](#nodeproto)

This defines an operator. A model is a combination of
mathematical functions, each of them represented as an onnx operator,
stored in a NodeProto.
Computation graphs are made up of a DAG of nodes, which represent what is
commonly called a *layer* or *pipeline stage* in machine learning frameworks.
For example, it can be a node of type *Conv* that takes in an image, a filter
tensor and a bias tensor, and produces the convolved output.

-
*class*onnx.NodeProto[¶](#onnx.NodeProto)

## OperatorProto[¶](#operatorproto)

This class is rarely used by users. An OperatorProto represents the immutable specification of the signature and semantics of an operator. Operators are declared as part of an OperatorSet, which also defines the domain name for the set. Operators are uniquely identified by a three part identifier (domain, op_type, since_version) where

*domain*is the domain of an operator set that contains this operator specification.*op_type*is the name of the operator as referenced by a NodeProto.op_type*since_version*is the version of the operator set that this operator was initially declared in.

-
*class*onnx.OperatorProto[¶](#onnx.OperatorProto)

## OperatorSetIdProto[¶](#operatorsetidproto)

This is the type of attribute `opset_import`

of class ModelProto.
This attribute specifies the versions of operators used in the model.
Every operator or node belongs to a domain. All operators for the same
domain share the same version.

-
*class*onnx.OperatorSetIdProto[¶](#onnx.OperatorSetIdProto)

## OperatorSetProto[¶](#operatorsetproto)

An OperatorSetProto represents an immutable set of immutable operator specifications. The domain of the set (OperatorSetProto.domain) is a reverse-DNS name that disambiguates operator sets defined by independent entities. The version of the set (opset_version) is a monotonically increasing integer that indicates changes to the membership of the operator set. Operator sets are uniquely identified by a two part identifier (domain, opset_version) Like ModelProto, OperatorSetProto is intended as a top-level file/wire format, and thus has the standard format headers in addition to the operator set information.

-
*class*onnx.OperatorSetProto[¶](#onnx.OperatorSetProto)

## OptionalProto[¶](#optionalproto)

Some input or output of a model are optional. This class must be used in this case. An instance of class OptionalProto may contain or not an instance of type TensorProto, SparseTensorProto, SequenceProto, MapProto and OptionalProto.

-
*class*onnx.OptionalProto[¶](#onnx.OptionalProto)

## SequenceProto[¶](#sequenceproto)

This defines a dense, ordered, collection of elements that are of homogeneous types.
Sequences can be made out of tensors, maps, or sequences.
If a sequence is made out of tensors, the tensors must have the same element
type (i.e. int32). In some cases, the tensors in a sequence can have different
shapes. Whether the tensors can have different shapes or not depends on the
type/shape associated with the corresponding `ValueInfo`

. For example,
`Sequence<Tensor<float, [M,N]>`

means that all tensors have same shape. However,
`Sequence<Tensor<float, [omitted,omitted]>`

means they can have different
shapes (all of rank 2), where *omitted* means the corresponding dimension has
no symbolic/constant value. Finally, `Sequence<Tensor<float, omitted>>`

means
that the different tensors can have different ranks, when the *shape* itself
is omitted from the tensor-type. For a more complete description, refer to
[Static tensor shapes](https://github.com/onnx/onnx/blob/main/docs/IR.md#static-tensor-shapes).

-
*class*onnx.SequenceProto[¶](#onnx.SequenceProto)

## SparseTensorProto[¶](#sparsetensorproto)

This defines a sparse tensor.
The sequence of non-default values are encoded as a tensor of shape `[NNZ]`

.
The default-value is zero for numeric tensors, and empty-string for string tensors.
values must have a non-empty name present which serves as a name for SparseTensorProto
when used in sparse_initializer list.

-
*class*onnx.SparseTensorProto[¶](#onnx.SparseTensorProto)

## StringStringEntryProto[¶](#stringstringentryproto)

This is equivalent to a pair of strings. This is used to store metadata in ModelProto.

-
*class*onnx.StringStringEntryProto[¶](#onnx.StringStringEntryProto)

## TensorProto[¶](#tensorproto)

This defines a tensor. A tensor is fully described with a shape (see ShapeProto), the element type (see TypeProto), and the elements themselves. All available types are listed in l-mod-onnx-mapping.

## TensorShapeProto[¶](#tensorshapeproto)

This defines the shape of a tensor or a sparse tensor. It is a list of dimensions. A dimension can be either an integer value or a symbolic variable. A symbolic variable represents an unknown dimension.

## TrainingInfoProto[¶](#traininginfoproto)

TrainingInfoProto stores information for training a model.
In particular, this defines two functionalities: an initialization-step
and a training-algorithm-step. Initialization resets the model
back to its original state as if no training has been performed.
Training algorithm improves the model based on input data.
The semantics of the initialization-step is that the initializers
in ModelProto.graph and in TrainingInfoProto.algorithm are first
initialized as specified by the initializers in the graph, and then
updated by the *initialization_binding* in every instance in
ModelProto.training_info.
The field *algorithm* defines a computation graph which represents a
training algorithm’s step. After the execution of a
TrainingInfoProto.algorithm, the initializers specified by *update_binding*
may be immediately updated. If the targeted training algorithm contains
consecutive update steps (such as block coordinate descent methods),
the user needs to create a TrainingInfoProto for each step.

-
*class*onnx.TrainingInfoProto[¶](#onnx.TrainingInfoProto)

## TypeProto[¶](#typeproto)

This defines a type of a tensor which consists in an element type and a shape (ShapeProto).

## ValueInfoProto[¶](#valueinfoproto)

This defines a input or output type of a GraphProto. It contains a name, a type (TypeProto), and a documentation string.

-
*class*onnx.ValueInfoProto[¶](#onnx.ValueInfoProto)

---

## Source: https://onnx.ai/onnx/api/serialization.html

# Serialization[¶](#serialization)

## Save a model and any Proto class[¶](#save-a-model-and-any-proto-class)

This ONNX graph needs to be serialized into one contiguous
memory buffer. Method `SerializeToString`

is available
in every ONNX objects.

```
with open("model.onnx", "wb") as f:
f.write(onnx_model.SerializeToString())
```

This method has the following signature.

-
*class*onnx.ModelProto[¶](#onnx.ModelProto) -
SerializeToString()
[¶](#onnx.ModelProto.SerializeToString) Serializes the message to a string, only for initialized messages.


-
SerializeToString()

Every Proto class implements method `SerializeToString`

.
Therefore the following code works with any class described
in page [Protos](classes.html#l-onnx-classes).

```
with open("proto.pb", "wb") as f:
f.write(proto.SerializeToString())
```

Next example shows how to save a [NodeProto](classes.html#l-nodeproto).

```
from onnx import NodeProto
node = NodeProto()
node.name = "example-type-proto"
node.op_type = "Add"
node.input.extend(["X", "Y"])
node.output.extend(["Z"])
with open("node.pb", "wb") as f:
f.write(node.SerializeToString())
```

## Load a model[¶](#load-a-model)

Following function only automates the loading of a class
[ModelProto](classes.html#l-modelproto). Next sections shows how to restore
any other proto class.

-
onnx.load(
*f:*,[IO](https://docs.python.org/3/library/typing.html#typing.IO)[[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)] |[str](https://docs.python.org/3/library/stdtypes.html#str)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)*format:*,[Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['protobuf', 'textproto', 'onnxtxt', 'json'] |[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*load_external_data:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[ModelProto](#onnx.ModelProto)[¶](#onnx.load) Loads a serialized ModelProto into memory.

- Parameters:
**f**– can be a file-like object (has “read” function) or a string/PathLike containing a file name**format**– The serialization format. When it is not specified, it is inferred from the file extension when`f`

is a path. If not specified _and_`f`

is not a path, ‘protobuf’ is used. The encoding is assumed to be “utf-8” when the format is a text format.**load_external_data**– Whether to load the external data. Set to True if the data is under the same directory of the model. If not, users need to call`load_external_data_for_model()`

with directory to load external data from.

- Returns:
Loaded in-memory ModelProto.



```
from onnx import load
onnx_model = load("model.onnx")
```

Or:

```
from onnx import load
with open("model.onnx", "rb") as f:
onnx_model = load(f)
```

Next function does the same from a bytes array.

-
onnx.load_model_from_string(
*s:*,[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)|[str](https://docs.python.org/3/library/stdtypes.html#str)*format:*)[Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['protobuf', 'textproto', 'onnxtxt', 'json'] |[str](https://docs.python.org/3/library/stdtypes.html#str)= 'protobuf'[ModelProto](#onnx.ModelProto)[[source]](../_modules/onnx.html#load_model_from_string)[¶](#onnx.load_model_from_string) Loads a binary string (bytes) that contains serialized ModelProto.

- Parameters:
**s**– a string, which contains serialized ModelProto**format**– The serialization format. When it is not specified, it is inferred from the file extension when`f`

is a path. If not specified _and_`f`

is not a path, ‘protobuf’ is used. The encoding is assumed to be “utf-8” when the format is a text format.

- Returns:
Loaded in-memory ModelProto.



## Load a Proto[¶](#load-a-proto)

Proto means here any type containing data including a model, a tensor,
a sparse tensor, any class listed in page [Protos](classes.html#l-onnx-classes).
The user must know the type of the data he needs to restore
and then call method `ParseFromString`

.
[protobuf](https://developers.google.com/protocol-buffers)
does not store any information about the class
of the saved data. Therefore, this class must be known before
restoring an object.

Next example shows how to restore a [NodeProto](classes.html#l-nodeproto).

```
from onnx import NodeProto
tp2 = NodeProto()
with open("node.pb", "rb") as f:
content = f.read()
tp2.ParseFromString(content)
print(tp2)
```

```
input: "X"
input: "Y"
output: "Z"
name: "example-type-proto"
op_type: "Add"
```

A shortcut exists for [TensorProto](classes.html#l-tensorproto):

-
onnx.load_tensor_from_string(
*s:*,[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)*format:*)[Literal](https://docs.python.org/3/library/typing.html#typing.Literal)['protobuf', 'textproto', 'onnxtxt', 'json'] |[str](https://docs.python.org/3/library/stdtypes.html#str)= 'protobuf'[TensorProto](classes.html#onnx.TensorProto)[[source]](../_modules/onnx.html#load_tensor_from_string)[¶](#onnx.load_tensor_from_string) Loads a binary string (bytes) that contains serialized TensorProto.

- Parameters:
**s**– a string, which contains serialized TensorProto**format**– The serialization format. When it is not specified, it is inferred from the file extension when`f`

is a path. If not specified _and_`f`

is not a path, ‘protobuf’ is used. The encoding is assumed to be “utf-8” when the format is a text format.

- Returns:
Loaded in-memory TensorProto.

---

## Source: https://onnx.ai/onnx/api/backend.html

# onnx.backend[¶](#onnx-backend)

## Backend[¶](#backend)

-
*class*onnx.backend.base.Backend[[source]](../_modules/onnx/backend/base.html#Backend)[¶](#onnx.backend.base.Backend) Backend is the entity that will take an ONNX model with inputs, perform a computation, and then return the output.

For one-off execution, users can use run_node and run_model to obtain results quickly.

For repeated execution, users should use prepare, in which the Backend does all of the preparation work for executing the model repeatedly (e.g., loading initializers), and returns a BackendRep handle.

-
*classmethod*run_node(*node:*,[NodeProto](classes.html#onnx.NodeProto)*inputs: Any*,*device:*,[str](https://docs.python.org/3/library/stdtypes.html#str)= 'CPU'*outputs_info:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[numpy.dtype](https://numpy.org/doc/stable/reference/generated/numpy.dtype.html#numpy.dtype),[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), ...]]] |[None](https://docs.python.org/3/library/constants.html#None)= None***kwargs:*)[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str), Any][tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Any, ...] |[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/backend/base.html#Backend.run_node)[¶](#onnx.backend.base.Backend.run_node) Simple run one operator and return the results.

- Parameters:
**node**– The node proto.**inputs**– Inputs to the node.**device**– The device to run on.**outputs_info**– a list of tuples, which contains the element type and shape of each output. First element of the tuple is the dtype, and the second element is the shape. More use case can be found in[https://github.com/onnx/onnx/blob/main/onnx/backend/test/runner/__init__.py](https://github.com/onnx/onnx/blob/main/onnx/backend/test/runner/__init__.py)**kwargs**– Other keyword arguments.



-

---

## Source: https://onnx.ai/onnx/api/checker.html

# onnx.checker[¶](#onnx-checker)

## CheckerContext[¶](#checkercontext)

-
onnx.checker.DEFAULT_CONTEXT
[¶](#onnx.checker.DEFAULT_CONTEXT) alias of <onnx.onnx_cpp2py_export.checker.CheckerContext object>


## The `onnx.checker`

module[¶](#module-onnx.checker)

Graph utilities for checking whether an ONNX proto message is legal.

-
onnx.checker.check_attribute(
*attr: ~onnx.onnx_ml_pb2.AttributeProto*,*ctx: ~onnx.onnx_cpp2py_export.checker.CheckerContext = <onnx.onnx_cpp2py_export.checker.CheckerContext object>*,*lexical_scope_ctx: ~onnx.onnx_cpp2py_export.checker.LexicalScopeContext = <onnx.onnx_cpp2py_export.checker.LexicalScopeContext object>*)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_attribute)[¶](#onnx.checker.check_attribute)

-
onnx.checker.check_function(
*function: ~onnx.onnx_ml_pb2.FunctionProto*,*ctx: ~onnx.onnx_cpp2py_export.checker.CheckerContext | None = None*,*lexical_scope_ctx: ~onnx.onnx_cpp2py_export.checker.LexicalScopeContext = <onnx.onnx_cpp2py_export.checker.LexicalScopeContext object>*)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_function)[¶](#onnx.checker.check_function)

-
onnx.checker.check_graph(
*graph: ~onnx.onnx_ml_pb2.GraphProto*,*ctx: ~onnx.onnx_cpp2py_export.checker.CheckerContext = <onnx.onnx_cpp2py_export.checker.CheckerContext object>*,*lexical_scope_ctx: ~onnx.onnx_cpp2py_export.checker.LexicalScopeContext = <onnx.onnx_cpp2py_export.checker.LexicalScopeContext object>*)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_graph)[¶](#onnx.checker.check_graph)

-
onnx.checker.check_model(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)|[str](https://docs.python.org/3/library/stdtypes.html#str)|[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)*full_check:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*skip_opset_compatibility_check:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*check_custom_domain:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_model)[¶](#onnx.checker.check_model) Check the consistency of a model.

An exception will be raised if the model’s ir_version is not set properly or is higher than checker’s ir_version, or if the model has duplicate keys in metadata_props.

If IR version >= 3, the model must specify opset_import. If IR version < 3, the model cannot have any opset_import specified.

- Parameters:
**model**– Model to check. If model is a path, the function checks model path first. If the model bytes size is larger than 2GB, function should be called using model path.**full_check**– If True, the function also runs shape inference check.**skip_opset_compatibility_check**– If True, the function skips the check for opset compatibility.**check_custom_domain**– If True, the function will check all domains. Otherwise only check built-in domains.



-
onnx.checker.check_node(
*node: ~onnx.onnx_ml_pb2.NodeProto*,*ctx: ~onnx.onnx_cpp2py_export.checker.CheckerContext = <onnx.onnx_cpp2py_export.checker.CheckerContext object>*,*lexical_scope_ctx: ~onnx.onnx_cpp2py_export.checker.LexicalScopeContext = <onnx.onnx_cpp2py_export.checker.LexicalScopeContext object>*)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_node)[¶](#onnx.checker.check_node)

-
onnx.checker.check_sparse_tensor(
*sparse: ~onnx.onnx_ml_pb2.SparseTensorProto*,*ctx: ~onnx.onnx_cpp2py_export.checker.CheckerContext = <onnx.onnx_cpp2py_export.checker.CheckerContext object>*)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/checker.html#check_sparse_tensor)[¶](#onnx.checker.check_sparse_tensor)

---

## Source: https://onnx.ai/onnx/api/compose.html

# onnx.compose[¶](#onnx-compose)

|
Combines two ONNX graphs into a single one. |
|
Combines two ONNX models into a single one. |

## merge_graphs[¶](#merge-graphs)

-
onnx.compose.merge_graphs(
*g1:*,[GraphProto](classes.html#onnx.GraphProto)*g2:*,[GraphProto](classes.html#onnx.GraphProto)*io_map:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)]]*inputs:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None*outputs:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None*prefix1:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*prefix2:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*doc_string:*)[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None[GraphProto](classes.html#onnx.GraphProto)[[source]](../_modules/onnx/compose.html#merge_graphs)[¶](#onnx.compose.merge_graphs) Combines two ONNX graphs into a single one.

The combined graph is defined by connecting the specified set of outputs/inputs. Those inputs/outputs not specified in the io_map argument will remain as inputs/outputs of the combined graph.

- Parameters:
**g1**() – First graph*GraphProto***g2**() – Second graph*GraphProto***io_map**(*list**of**pairs**of**string*) – The pairs of names [(out0, in0), (out1, in1), …] representing outputs of the first graph and inputs of the second to be connected**inputs**(*list**of**string*) – Optional list of inputs to be included in the combined graph By default, all inputs not present in the`io_map`

argument will be included in the combined model**outputs**(*list**of**string*) – Optional list of outputs to be included in the combined graph By default, all outputs not present in the`io_map`

argument will be included in the combined model**prefix1**(*string*) – Optional prefix to be added to all names in g1**prefix2**(*string*) – Optional prefix to be added to all names in g2**name**(*string*) – Optional name for the combined graph By default, the name is g1.name and g2.name concatenated with an underscore delimiter**doc_string**(*string*) – Optional docstring for the combined graph If not provided, a default docstring with the concatenation of g1 and g2 docstrings is used

- Returns:
GraphProto



## merge_models[¶](#merge-models)

-
onnx.compose.merge_models(
*m1:*,[ModelProto](serialization.html#onnx.ModelProto)*m2:*,[ModelProto](serialization.html#onnx.ModelProto)*io_map:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)]]*inputs:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None*outputs:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None*prefix1:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*prefix2:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*producer_name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= 'onnx.compose.merge_models'*producer_version:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= '1.0'*domain:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= ''*model_version:*)[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= 1[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/compose.html#merge_models)[¶](#onnx.compose.merge_models) Combines two ONNX models into a single one.

The combined model is defined by connecting the specified set of outputs/inputs. Those inputs/outputs not specified in the io_map argument will remain as inputs/outputs of the combined model.

Both models should have the same IR version, and same operator sets imported.

- Parameters:
**m1**() – First model*ModelProto***m2**() – Second model*ModelProto***io_map**(*list**of**pairs**of**string*) – The pairs of names [(out0, in0), (out1, in1), …] representing outputs of the first graph and inputs of the second to be connected**inputs**(*list**of**string*) – Optional list of inputs to be included in the combined graph By default, all inputs not present in the`io_map`

argument will be included in the combined model**outputs**(*list**of**string*) – Optional list of outputs to be included in the combined graph By default, all outputs not present in the`io_map`

argument will be included in the combined model**prefix1**(*string*) – Optional prefix to be added to all names in m1**prefix2**(*string*) – Optional prefix to be added to all names in m2**name**(*string*) – Optional name for the combined graph By default, the name is g1.name and g2.name concatenated with an underscore delimiter**doc_string**(*string*) – Optional docstring for the combined graph If not provided, a default docstring with the concatenation of g1 and g2 docstrings is used**producer_name**(*string*) – Optional producer name for the combined model. Default: ‘onnx.compose’**producer_version**(*string*) – Optional producer version for the combined model. Default: “1.0”**domain**(*string*) – Optional domain of the combined model. Default: “”**model_version**() – Optional version of the graph encoded. Default: 1*int*

- Returns:
ModelProto



## prefix[¶](#prefix)

-
onnx.compose.add_prefix_graph(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)*prefix:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*rename_nodes:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_edges:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_inputs:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_outputs:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_initializers:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_value_infos:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*inplace:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= False*name_map:*)[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None[GraphProto](classes.html#onnx.GraphProto)[[source]](../_modules/onnx/compose.html#add_prefix_graph)[¶](#onnx.compose.add_prefix_graph) Adds a prefix to names of elements in a graph: nodes, edges, inputs, outputs, initializers, sparse initializer, value infos.

It can be used as a utility before merging graphs that have overlapping names. Empty names are not prefixed.

- Parameters:
**graph**() – Graph*GraphProto***prefix**() – Prefix to be added to each name in the graph*str***rename_nodes**() – Whether to prefix node names*bool***rename_edges**() – Whether to prefix node edge names*bool***rename_inputs**() – Whether to prefix input names*bool***rename_outputs**() – Whether to prefix output names*bool***rename_initializers**() – Whether to prefix initializer and sparse initializer names*bool***rename_value_infos**() – Whether to prefix value info names*bool***inplace**() – If True, mutates the graph directly. Otherwise, a copy will be created*bool***name_map**– (Dict): shared name_map in subgraph

- Returns:
GraphProto



-
onnx.compose.add_prefix(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*prefix:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*rename_nodes:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_edges:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_inputs:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_outputs:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_initializers:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_value_infos:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*rename_functions:*,[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= True*inplace:*)[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/compose.html#add_prefix)[¶](#onnx.compose.add_prefix) Adds a prefix to names of elements in a graph: nodes, edges, inputs, outputs, initializers, sparse initializer, value infos, and local functions.

It can be used as a utility before merging graphs that have overlapping names. Empty names are not _prefixed.

- Parameters:
**model**() – Model*ModelProto***prefix**() – Prefix to be added to each name in the graph*str***rename_nodes**() – Whether to prefix node names*bool***rename_edges**() – Whether to prefix node edge names*bool***rename_inputs**() – Whether to prefix input names*bool***rename_outputs**() – Whether to prefix output names*bool***rename_initializers**() – Whether to prefix initializer and sparse initializer names*bool***rename_value_infos**() – Whether to prefix value info nanes*bool***rename_functions**() – Whether to prefix local function names*bool***inplace**() – If True, mutates the model directly. Otherwise, a copy will be created*bool*

- Returns:
ModelProto



## dimension[¶](#dimension)

-
onnx.compose.expand_out_dim(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*dim_idx:*,[int](https://docs.python.org/3/library/functions.html#int)*inplace:*)[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/compose.html#expand_out_dim)[¶](#onnx.compose.expand_out_dim) Inserts an extra dimension with extent 1 to each output in the graph.

Inserts an Unsqueeze node for each output. It can be used as a utility before merging graphs, for example when the second one expects a batch dimension.

- Parameters:
**model**() – Model*ModelProto***dim_idx**() – Index of the dimension to be inserted. A negative value means counting dimensions from the back.*int***inplace**() – If True, mutates the model directly. Otherwise, a copy will be created*bool*

- Returns:
ModelProto



-
onnx.compose.expand_out_dim_graph(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)*dim_idx:*,[int](https://docs.python.org/3/library/functions.html#int)*inplace:*)[bool](https://docs.python.org/3/library/functions.html#bool)|[None](https://docs.python.org/3/library/constants.html#None)= False[GraphProto](classes.html#onnx.GraphProto)[[source]](../_modules/onnx/compose.html#expand_out_dim_graph)[¶](#onnx.compose.expand_out_dim_graph) Inserts an extra dimension with extent 1 to each output in the graph.

Inserts an Unsqueeze node for each output. It can be used as a utility before merging graphs, for example when the second one expects a batch dimension.

- Parameters:
**graph**() – Graph*GraphProto***dim_idx**() – Index of the dimension to be inserted. A negative value means counting dimensions from the back.*int***inplace**() – If True, mutates the model directly. Otherwise, a copy will be created*bool*

- Returns:
GraphProto

---

## Source: https://onnx.ai/onnx/api/defs.html

# onnx.defs[¶](#onnx-defs)

## Opset Version[¶](#opset-version)

## Operators and Functions Schemas[¶](#operators-and-functions-schemas)

-
onnx.defs.has()
[¶](#onnx.defs.has) has_schema(op_type: str, domain: str = ‘’) -> bool has_schema(op_type: str, max_inclusive_version: int, domain: str = ‘’) -> bool


-
onnx.defs.get_schema(
*op_type:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*max_inclusive_version:*,[int](https://docs.python.org/3/library/functions.html#int)*domain:*)[str](https://docs.python.org/3/library/stdtypes.html#str)= ''[onnx.onnx_cpp2py_export.defs.OpSchema](#onnx.defs.OpSchema)[¶](#onnx.defs.get_schema) -
onnx.defs.get_schema(
*op_type:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*domain:*)[str](https://docs.python.org/3/library/stdtypes.html#str)= ''[onnx.onnx_cpp2py_export.defs.OpSchema](#onnx.defs.OpSchema) Return the schema of the operator

*op_type*and for a specific version.

-
onnx.defs.get_all_schemas()
[list](https://docs.python.org/3/library/stdtypes.html#list)[[onnx.onnx_cpp2py_export.defs.OpSchema](#onnx.defs.OpSchema)][¶](#onnx.defs.get_all_schemas) Return the schema of all existing operators for the latest version.


-
onnx.defs.get_all_schemas_with_history()
[list](https://docs.python.org/3/library/stdtypes.html#list)[[onnx.onnx_cpp2py_export.defs.OpSchema](#onnx.defs.OpSchema)][¶](#onnx.defs.get_all_schemas_with_history) Return the schema of all existing operators and all versions.


## class `OpSchema`

[¶](#class-opschema)

-
*class*onnx.defs.OpSchema[¶](#onnx.defs.OpSchema) Schema of an operator.

-
*class*AttrType(*value*)[¶](#onnx.defs.OpSchema.AttrType) -
FLOAT
*= 1*[¶](#onnx.defs.OpSchema.AttrType.FLOAT)

-
FLOATS
*= 6*[¶](#onnx.defs.OpSchema.AttrType.FLOATS)

-
GRAPH
*= 5*[¶](#onnx.defs.OpSchema.AttrType.GRAPH)

-
GRAPHS
*= 10*[¶](#onnx.defs.OpSchema.AttrType.GRAPHS)

-
INT
*= 2*[¶](#onnx.defs.OpSchema.AttrType.INT)

-
INTS
*= 7*[¶](#onnx.defs.OpSchema.AttrType.INTS)

-
SPARSE_TENSOR
*= 11*[¶](#onnx.defs.OpSchema.AttrType.SPARSE_TENSOR)

-
SPARSE_TENSORS
*= 12*[¶](#onnx.defs.OpSchema.AttrType.SPARSE_TENSORS)

-
STRING
*= 3*[¶](#onnx.defs.OpSchema.AttrType.STRING)

-
STRINGS
*= 8*[¶](#onnx.defs.OpSchema.AttrType.STRINGS)

-
TENSOR
*= 4*[¶](#onnx.defs.OpSchema.AttrType.TENSOR)

-
TENSORS
*= 9*[¶](#onnx.defs.OpSchema.AttrType.TENSORS)

-
TYPE_PROTO
*= 13*[¶](#onnx.defs.OpSchema.AttrType.TYPE_PROTO)

-
TYPE_PROTOS
*= 14*[¶](#onnx.defs.OpSchema.AttrType.TYPE_PROTOS)

-
FLOAT

-
*class*Attribute[¶](#onnx.defs.OpSchema.Attribute) -
*property*default_value[¶](#onnx.defs.OpSchema.Attribute.default_value)

-
*property*description[¶](#onnx.defs.OpSchema.Attribute.description) (self) -> str


-
*property*name[¶](#onnx.defs.OpSchema.Attribute.name) (self) -> str


-
*property*required[¶](#onnx.defs.OpSchema.Attribute.required) (self) -> bool


-
*property*type[¶](#onnx.defs.OpSchema.Attribute.type) (self) -> onnx.onnx_cpp2py_export.defs.OpSchema.AttrType


-

-
*class*FormalParameter[¶](#onnx.defs.OpSchema.FormalParameter) -
*property*description[¶](#onnx.defs.OpSchema.FormalParameter.description) (self) -> str


-
*property*differentiation_category[¶](#onnx.defs.OpSchema.FormalParameter.differentiation_category) (self) -> onnx.onnx_cpp2py_export.defs.OpSchema.DifferentiationCategory


-
*property*is_homogeneous[¶](#onnx.defs.OpSchema.FormalParameter.is_homogeneous) (self) -> bool


-
*property*min_arity[¶](#onnx.defs.OpSchema.FormalParameter.min_arity) (self) -> int


-
*property*name[¶](#onnx.defs.OpSchema.FormalParameter.name) (self) -> str


-
*property*option[¶](#onnx.defs.OpSchema.FormalParameter.option) (self) -> onnx.onnx_cpp2py_export.defs.OpSchema.FormalParameterOption


-
*property*type_str[¶](#onnx.defs.OpSchema.FormalParameter.type_str) (self) -> str


-
*property*types[¶](#onnx.defs.OpSchema.FormalParameter.types) (self) -> set[str]


-

-
*class*TypeConstraintParam[¶](#onnx.defs.OpSchema.TypeConstraintParam) -
*property*allowed_type_strs[¶](#onnx.defs.OpSchema.TypeConstraintParam.allowed_type_strs) (self) -> list[str]


-
*property*description[¶](#onnx.defs.OpSchema.TypeConstraintParam.description) (self) -> str


-
*property*type_param_str[¶](#onnx.defs.OpSchema.TypeConstraintParam.type_param_str) (self) -> str


-

-
*property*all_function_opset_versions[¶](#onnx.defs.OpSchema.all_function_opset_versions) (self) -> list[int]


-
*property*attributes[¶](#onnx.defs.OpSchema.attributes) (self) -> dict[str, onnx.onnx_cpp2py_export.defs.OpSchema.Attribute]


-
*property*context_dependent_function_opset_versions[¶](#onnx.defs.OpSchema.context_dependent_function_opset_versions) (self) -> list[int]


-
*property*deprecated[¶](#onnx.defs.OpSchema.deprecated) (self) -> bool


-
*property*doc[¶](#onnx.defs.OpSchema.doc) (self) -> str


-
*property*domain[¶](#onnx.defs.OpSchema.domain) (self) -> str


-
*property*file[¶](#onnx.defs.OpSchema.file) (self) -> str


-
*property*function_body[¶](#onnx.defs.OpSchema.function_body)

-
*property*function_opset_versions[¶](#onnx.defs.OpSchema.function_opset_versions) (self) -> list[int]


-
get_context_dependent_function
[¶](#onnx.defs.OpSchema.get_context_dependent_function)

-
get_context_dependent_function_with_opset_version
[¶](#onnx.defs.OpSchema.get_context_dependent_function_with_opset_version)

-
get_function_with_opset_version
[¶](#onnx.defs.OpSchema.get_function_with_opset_version)

-
get_type_and_shape_inference_function
[¶](#onnx.defs.OpSchema.get_type_and_shape_inference_function)

-
*property*has_context_dependent_function[¶](#onnx.defs.OpSchema.has_context_dependent_function) (self) -> bool


-
*property*has_data_propagation_function[¶](#onnx.defs.OpSchema.has_data_propagation_function) (self) -> bool


-
*property*has_function[¶](#onnx.defs.OpSchema.has_function) (self) -> bool


-
*property*has_type_and_shape_inference_function[¶](#onnx.defs.OpSchema.has_type_and_shape_inference_function) (self) -> bool


-
*property*inputs[¶](#onnx.defs.OpSchema.inputs) (self) -> list[onnx.onnx_cpp2py_export.defs.OpSchema.FormalParameter]


-
is_infinite
*= <nanobind.nb_func object>*[¶](#onnx.defs.OpSchema.is_infinite)

-
*property*line[¶](#onnx.defs.OpSchema.line) (self) -> int


-
*property*max_input[¶](#onnx.defs.OpSchema.max_input) (self) -> int


-
*property*max_output[¶](#onnx.defs.OpSchema.max_output) (self) -> int


-
*property*min_input[¶](#onnx.defs.OpSchema.min_input) (self) -> int


-
*property*min_output[¶](#onnx.defs.OpSchema.min_output) (self) -> int


-
*property*name[¶](#onnx.defs.OpSchema.name) (self) -> str


-
*property*node_determinism[¶](#onnx.defs.OpSchema.node_determinism) (self) -> onnx.onnx_cpp2py_export.defs.OpSchema.NodeDeterminism


-
*property*non_deterministic[¶](#onnx.defs.OpSchema.non_deterministic) Check if the operator is non-deterministic.


-
*property*outputs[¶](#onnx.defs.OpSchema.outputs) (self) -> list[onnx.onnx_cpp2py_export.defs.OpSchema.FormalParameter]


-
set_type_and_shape_inference_function
[¶](#onnx.defs.OpSchema.set_type_and_shape_inference_function)

-
*property*since_version[¶](#onnx.defs.OpSchema.since_version) (self) -> int


-
*property*support_level[¶](#onnx.defs.OpSchema.support_level) (self) -> onnx.onnx_cpp2py_export.defs.OpSchema.SupportType


-
*property*type_constraints[¶](#onnx.defs.OpSchema.type_constraints) (self) -> list[onnx.onnx_cpp2py_export.defs.OpSchema.TypeConstraintParam]


-

## Exceptions[¶](#exceptions)

-
*class*onnx.defs.SchemaError[¶](#onnx.defs.SchemaError)

## Constants[¶](#constants)

Domains officially supported in onnx package.

```
from onnx.defs import (
ONNX_DOMAIN,
ONNX_ML_DOMAIN,
AI_ONNX_PREVIEW_TRAINING_DOMAIN,
)
print(f"ONNX_DOMAIN={ONNX_DOMAIN!r}")
print(f"ONNX_ML_DOMAIN={ONNX_ML_DOMAIN!r}")
print(f"AI_ONNX_PREVIEW_TRAINING_DOMAIN={AI_ONNX_PREVIEW_TRAINING_DOMAIN!r}")
```

```
ONNX_DOMAIN=''
ONNX_ML_DOMAIN='ai.onnx.ml'
AI_ONNX_PREVIEW_TRAINING_DOMAIN='ai.onnx.preview.training'
```

---

## Source: https://onnx.ai/onnx/api/external_data_helper.html

# onnx.external_data_helper[¶](#onnx-external-data-helper)

## convert_model_from_external_data[¶](#convert-model-from-external-data)

-
onnx.external_data_helper.convert_model_from_external_data(
*model:*)[ModelProto](serialization.html#onnx.ModelProto)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#convert_model_from_external_data)[¶](#onnx.external_data_helper.convert_model_from_external_data) Call to set all tensors which use external data as embedded data. save_model saves all the tensors data as embedded data after calling this function.

- Parameters:
**model**() – Model to be converted.*ModelProto*


## convert_model_to_external_data[¶](#convert-model-to-external-data)

-
onnx.external_data_helper.convert_model_to_external_data(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*all_tensors_to_one_file:*,[bool](https://docs.python.org/3/library/functions.html#bool)= True*location:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*size_threshold:*,[int](https://docs.python.org/3/library/functions.html#int)= 1024*convert_attribute:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#convert_model_to_external_data)[¶](#onnx.external_data_helper.convert_model_to_external_data) Call to set all tensors with raw data as external data. This call should precede ‘save_model’. ‘save_model’ saves all the tensors data as external data after calling this function.

- Parameters:
**model**() – Model to be converted.*ModelProto***all_tensors_to_one_file**() – If true, save all tensors to one external file specified by location. If false, save each tensor to a file named with the tensor name.*bool***location**– specify the external file relative to the model that all tensors to save to. Path is relative to the model path. If not specified, will use the model name.**size_threshold**– Threshold for size of data. Only when tensor’s data is >= the size_threshold it will be converted to external data. To convert every tensor with raw data to external data set size_threshold=0.**convert_attribute**() – If true, convert all tensors to external data If false, convert only non-attribute tensors to external data*bool*

- Raises:
– If location is not a relative path.**ValueError**– If a file already exists in location.**FileExistsError**



## ExternalDataInfo[¶](#externaldatainfo)

-
*class*onnx.external_data_helper.ExternalDataInfo(*tensor:*)[TensorProto](classes.html#onnx.TensorProto)[[source]](../_modules/onnx/external_data_helper.html#ExternalDataInfo)[¶](#onnx.external_data_helper.ExternalDataInfo)

## load_external_data_for_model[¶](#load-external-data-for-model)

-
onnx.external_data_helper.load_external_data_for_model(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*base_dir:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#load_external_data_for_model)[¶](#onnx.external_data_helper.load_external_data_for_model) Loads external tensors into model

- Parameters:
**model**– ModelProto to load external data to**base_dir**– directory that contains external data



## load_external_data_for_tensor[¶](#load-external-data-for-tensor)

-
onnx.external_data_helper.load_external_data_for_tensor(
*tensor:*,[TensorProto](classes.html#onnx.TensorProto)*base_dir:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#load_external_data_for_tensor)[¶](#onnx.external_data_helper.load_external_data_for_tensor) Loads data from an external file for tensor. Ideally TensorProto should not hold any raw data but if it does it will be ignored.

- Parameters:
**tensor**– a TensorProto object.**base_dir**– directory that contains the external data.



## remove_external_data_field[¶](#remove-external-data-field)

-
onnx.external_data_helper.remove_external_data_field(
*tensor:*,[TensorProto](classes.html#onnx.TensorProto)*field_key:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#remove_external_data_field)[¶](#onnx.external_data_helper.remove_external_data_field) Removes a field from a Tensor’s external_data key-value store.

Modifies tensor object in place.

- Parameters:
**tensor**() – Tensor object from which value will be removed*TensorProto***field_key**(*string*) – The key of the field to be removed



## save_external_data[¶](#save-external-data)

-
onnx.external_data_helper.save_external_data(
*tensor:*,[TensorProto](classes.html#onnx.TensorProto)*base_path:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/external_data_helper.html#save_external_data)[¶](#onnx.external_data_helper.save_external_data) Writes tensor data to an external file according to information in the external_data field. The function checks the external is a valid name and located in folder base_path.

- Parameters:
**tensor**() – Tensor object to be serialized*TensorProto***base_path**– System path of a folder where tensor data is to be stored

- Raises:
– If the external file is invalid.**ValueError**


## set_external_data[¶](#set-external-data)

## uses_external_data[¶](#uses-external-data)

-
onnx.external_data_helper.uses_external_data(
*tensor:*)[TensorProto](classes.html#onnx.TensorProto)[bool](https://docs.python.org/3/library/functions.html#bool)[[source]](../_modules/onnx/external_data_helper.html#uses_external_data)[¶](#onnx.external_data_helper.uses_external_data) Returns true if the tensor stores data in an external location.


## write_external_data_tensors[¶](#write-external-data-tensors)

-
onnx.external_data_helper.write_external_data_tensors(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*filepath:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/external_data_helper.html#write_external_data_tensors)[¶](#onnx.external_data_helper.write_external_data_tensors) Serializes data for all the tensors which have data location set to TensorProto.External.

Note: This function also strips basepath information from all tensors’ external_data fields.

- Parameters:
**model**() – Model object which is the source of tensors to serialize.*ModelProto***filepath**– System path to the directory which should be treated as base path for external data.

- Returns:
The modified model object.

- Return type:

---

## Source: https://onnx.ai/onnx/api/helper.html

# onnx.helper[¶](#onnx-helper)

## Helper functions to make ONNX graph components[¶](#helper-functions-to-make-onnx-graph-components)

All functions used to create an ONNX graph.

-
onnx.helper.make_attribute(
*key:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*value:*,[Any](https://docs.python.org/3/library/typing.html#typing.Any)*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*attr_type:*)[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None[AttributeProto](classes.html#onnx.AttributeProto)[[source]](../_modules/onnx/helper.html#make_attribute)[¶](#onnx.helper.make_attribute) Makes an AttributeProto based on the value type.


-
onnx.helper.make_attribute_ref(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*attr_type: AttributeProto.AttributeType*,*doc_string:*)[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None[AttributeProto](classes.html#onnx.AttributeProto)[[source]](../_modules/onnx/helper.html#make_attribute_ref)[¶](#onnx.helper.make_attribute_ref) Make an AttributeProto holding a reference to the parent function’s attribute of given name and type.


-
onnx.helper.make_empty_tensor_value_info(
*name:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[ValueInfoProto](classes.html#onnx.ValueInfoProto)[[source]](../_modules/onnx/helper.html#make_empty_tensor_value_info)[¶](#onnx.helper.make_empty_tensor_value_info)

-
onnx.helper.make_function(
*domain:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*fname:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*inputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*outputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*nodes:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[NodeProto](classes.html#onnx.NodeProto)]*opset_imports:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[OperatorSetIdProto](classes.html#onnx.OperatorSetIdProto)]*attributes:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None*attribute_protos:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[AttributeProto](classes.html#onnx.AttributeProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*overload:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*value_info:*)[Sequence](classes.html#onnx.TypeProto.Sequence)[[ValueInfoProto](classes.html#onnx.ValueInfoProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None[FunctionProto](classes.html#onnx.FunctionProto)[[source]](../_modules/onnx/helper.html#make_function)[¶](#onnx.helper.make_function)

-
onnx.helper.make_graph(
*nodes:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[NodeProto](classes.html#onnx.NodeProto)]*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*inputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[ValueInfoProto](classes.html#onnx.ValueInfoProto)]*outputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[ValueInfoProto](classes.html#onnx.ValueInfoProto)]*initializer:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[TensorProto](classes.html#onnx.TensorProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*value_info:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[ValueInfoProto](classes.html#onnx.ValueInfoProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*sparse_initializer:*)[Sequence](classes.html#onnx.TypeProto.Sequence)[[onnx.SparseTensorProto](classes.html#onnx.SparseTensorProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None[GraphProto](classes.html#onnx.GraphProto)[[source]](../_modules/onnx/helper.html#make_graph)[¶](#onnx.helper.make_graph) Construct a GraphProto

- Parameters:
**nodes**– list of NodeProto**name**(*string*) – graph name**inputs**– list of ValueInfoProto**outputs**– list of ValueInfoProto**initializer**– list of TensorProto**doc_string**(*string*) – graph documentation**value_info**– list of ValueInfoProto**sparse_initializer**– list of onnx.SparseTensorProto

- Returns:
GraphProto



-
onnx.helper.make_map(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*key_type:*,[int](https://docs.python.org/3/library/functions.html#int)*keys:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*values:*)[SequenceProto](classes.html#onnx.SequenceProto)[MapProto](classes.html#onnx.MapProto)[[source]](../_modules/onnx/helper.html#make_map)[¶](#onnx.helper.make_map) Make a Map with specified key-value pair arguments.

Criteria for conversion: - Keys and Values must have the same number of elements - Every key in keys must be of the same type - Every value in values must be of the same type


-
onnx.helper.make_map_type_proto(
*key_type:*,[int](https://docs.python.org/3/library/functions.html#int)*value_type:*)[TypeProto](classes.html#onnx.TypeProto)[TypeProto](classes.html#onnx.TypeProto)[[source]](../_modules/onnx/helper.html#make_map_type_proto)[¶](#onnx.helper.make_map_type_proto) Makes a map TypeProto.


-
onnx.helper.make_model(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/helper.html#make_model)[¶](#onnx.helper.make_model) Construct a ModelProto

- Parameters:
**graph**() –*GraphProto**make_graph*returns****kwargs**– any attribute to add to the returned instance

- Returns:
ModelProto



-
onnx.helper.make_node(
*op_type:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*inputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*outputs:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*domain:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*overload:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None***kwargs: Any*)[NodeProto](classes.html#onnx.NodeProto)[[source]](../_modules/onnx/helper.html#make_node)[¶](#onnx.helper.make_node) Construct a NodeProto.

- Parameters:
**op_type**(*string*) – The name of the operator to construct**inputs**(*list**of**string*) – list of input names**outputs**(*list**of**string*) – list of output names**name**(*string**,**default None*) – optional unique identifier for NodeProto**doc_string**(*string**,**default None*) – optional documentation string for NodeProto**domain**(*string**,**default None*) – optional domain for NodeProto. If it’s None, we will just use default domain (which is empty)**overload**(*string**,**default None*) – optional field, used to resolve calls to model-local functions****kwargs**() – the attributes of the node. The acceptable values are documented in*dict*.`make_attribute()`


- Returns:
NodeProto



-
onnx.helper.make_operatorsetid(
*domain:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*version:*)[int](https://docs.python.org/3/library/functions.html#int)[OperatorSetIdProto](classes.html#onnx.OperatorSetIdProto)[[source]](../_modules/onnx/helper.html#make_operatorsetid)[¶](#onnx.helper.make_operatorsetid) Construct an OperatorSetIdProto.

- Parameters:
**domain**(*string*) – The domain of the operator set id**version**(*integer*) – Version of operator set id

- Returns:
OperatorSetIdProto



-
onnx.helper.make_opsetid(
*domain:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*version:*)[int](https://docs.python.org/3/library/functions.html#int)[OperatorSetIdProto](classes.html#onnx.OperatorSetIdProto)[[source]](../_modules/onnx/helper.html#make_opsetid)[¶](#onnx.helper.make_opsetid) Construct an OperatorSetIdProto.

- Parameters:
**domain**(*string*) – The domain of the operator set id**version**(*integer*) – Version of operator set id

- Returns:
OperatorSetIdProto



-
onnx.helper.make_model_gen_version(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/helper.html#make_model_gen_version)[¶](#onnx.helper.make_model_gen_version)

-
onnx.helper.make_optional(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*elem_type: OptionalProto.DataType*,*value: google.protobuf.message.Message |*)[None](https://docs.python.org/3/library/constants.html#None)[OptionalProto](classes.html#onnx.OptionalProto)[[source]](../_modules/onnx/helper.html#make_optional)[¶](#onnx.helper.make_optional) Make an Optional with specified value arguments.


-
onnx.helper.make_optional_type_proto(
*inner_type_proto:*)[TypeProto](classes.html#onnx.TypeProto)[TypeProto](classes.html#onnx.TypeProto)[[source]](../_modules/onnx/helper.html#make_optional_type_proto)[¶](#onnx.helper.make_optional_type_proto) Makes an optional TypeProto.


-
onnx.helper.make_sequence(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*elem_type: SequenceProto.DataType*,*values:*)[Sequence](classes.html#onnx.TypeProto.Sequence)[Any][SequenceProto](classes.html#onnx.SequenceProto)[[source]](../_modules/onnx/helper.html#make_sequence)[¶](#onnx.helper.make_sequence) Make a Sequence with specified value arguments.


-
onnx.helper.make_sequence_type_proto(
*inner_type_proto:*)[TypeProto](classes.html#onnx.TypeProto)[TypeProto](classes.html#onnx.TypeProto)[[source]](../_modules/onnx/helper.html#make_sequence_type_proto)[¶](#onnx.helper.make_sequence_type_proto) Makes a sequence TypeProto.


-
onnx.helper.make_sparse_tensor(
*values:*,[TensorProto](classes.html#onnx.TensorProto)*indices:*,[TensorProto](classes.html#onnx.TensorProto)*dims:*)[Sequence](classes.html#onnx.TypeProto.Sequence)[[int](https://docs.python.org/3/library/functions.html#int)][onnx.SparseTensorProto](classes.html#onnx.SparseTensorProto)[[source]](../_modules/onnx/helper.html#make_sparse_tensor)[¶](#onnx.helper.make_sparse_tensor) Construct a SparseTensorProto

- Parameters:
**values**() – the values*TensorProto***indices**() – the indices*TensorProto***dims**– the shape

- Returns:
SparseTensorProto



-
onnx.helper.make_sparse_tensor_type_proto(
*elem_type:*,[int](https://docs.python.org/3/library/functions.html#int)*shape:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)|[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)] |[None](https://docs.python.org/3/library/constants.html#None)*shape_denotation:*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None[TypeProto](classes.html#onnx.TypeProto)[[source]](../_modules/onnx/helper.html#make_sparse_tensor_type_proto)[¶](#onnx.helper.make_sparse_tensor_type_proto) Makes a SparseTensor TypeProto based on the data type and shape.


-
onnx.helper.make_sparse_tensor_value_info(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*elem_type:*,[int](https://docs.python.org/3/library/functions.html#int)*shape:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)|[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)] |[None](https://docs.python.org/3/library/constants.html#None)*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)= ''*shape_denotation:*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None[ValueInfoProto](classes.html#onnx.ValueInfoProto)[[source]](../_modules/onnx/helper.html#make_sparse_tensor_value_info)[¶](#onnx.helper.make_sparse_tensor_value_info) Makes a SparseTensor ValueInfoProto based on the data type and shape.


-
onnx.helper.make_tensor(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*data_type:*,[int](https://docs.python.org/3/library/functions.html#int)*dims:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[int](https://docs.python.org/3/library/functions.html#int)]*vals:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[int](https://docs.python.org/3/library/functions.html#int)|[float](https://docs.python.org/3/library/functions.html#float)] |[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)| np.ndarray*raw:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[TensorProto](classes.html#onnx.TensorProto)[[source]](../_modules/onnx/helper.html#make_tensor)[¶](#onnx.helper.make_tensor) Make a TensorProto with specified arguments. If raw is False, this function will choose the corresponding proto field to store the values based on data_type. If raw is True, use “raw_data” proto field to store the values, and values should be of type bytes in this case.

- Parameters:
**name**– tensor name**data_type**– a value such as onnx.TensorProto.FLOAT**dims**– shape**vals**– values**raw**– if True, vals contains the serialized content of the tensor, otherwise, vals should be a list of values of the type defined by`data_type`

.

- Returns:
TensorProto



-
onnx.helper.make_tensor_sequence_value_info(
*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*elem_type:*,[int](https://docs.python.org/3/library/functions.html#int)*shape:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)|[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)] |[None](https://docs.python.org/3/library/constants.html#None)*doc_string:*,[str](https://docs.python.org/3/library/stdtypes.html#str)= ''*elem_shape_denotation:*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None[ValueInfoProto](classes.html#onnx.ValueInfoProto)[[source]](../_modules/onnx/helper.html#make_tensor_sequence_value_info)[¶](#onnx.helper.make_tensor_sequence_value_info) Makes a Sequence[Tensors] ValueInfoProto based on the data type and shape.


-
onnx.helper.make_tensor_type_proto(
*elem_type:*,[int](https://docs.python.org/3/library/functions.html#int)*shape:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[str](https://docs.python.org/3/library/stdtypes.html#str)|[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)] |[None](https://docs.python.org/3/library/constants.html#None)*shape_denotation:*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)] |[None](https://docs.python.org/3/library/constants.html#None)= None[TypeProto](classes.html#onnx.TypeProto)[[source]](../_modules/onnx/helper.html#make_tensor_type_proto)[¶](#onnx.helper.make_tensor_type_proto) Makes a Tensor TypeProto based on the data type and shape.


-
onnx.helper.make_training_info(
*algorithm:*,[GraphProto](classes.html#onnx.GraphProto)*algorithm_bindings:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)]]*initialization:*,[GraphProto](classes.html#onnx.GraphProto)|[None](https://docs.python.org/3/library/constants.html#None)*initialization_bindings:*)[list](https://docs.python.org/3/library/stdtypes.html#list)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)]] |[None](https://docs.python.org/3/library/constants.html#None)[TrainingInfoProto](classes.html#onnx.TrainingInfoProto)[[source]](../_modules/onnx/helper.html#make_training_info)[¶](#onnx.helper.make_training_info)

## Type Mappings[¶](#type-mappings)

-
onnx.helper.get_all_tensor_dtypes() KeysView[
[int](https://docs.python.org/3/library/functions.html#int)][[source]](../_modules/onnx/helper.html#get_all_tensor_dtypes)[¶](#onnx.helper.get_all_tensor_dtypes) Get all tensor types from TensorProto.

- Returns:
all tensor types from TensorProto



-
onnx.helper.np_dtype_to_tensor_dtype(
*np_dtype: np.dtype*) TensorProto.DataType[[source]](../_modules/onnx/helper.html#np_dtype_to_tensor_dtype)[¶](#onnx.helper.np_dtype_to_tensor_dtype) Convert a numpy’s dtype to corresponding tensor type. It can be used while converting numpy arrays to tensors.

- Parameters:
**np_dtype**– numpy’s data_type- Returns:
TensorsProto’s data_type



-
onnx.helper.tensor_dtype_to_field(
*tensor_dtype:*)[int](https://docs.python.org/3/library/functions.html#int)[str](https://docs.python.org/3/library/stdtypes.html#str)[[source]](../_modules/onnx/helper.html#tensor_dtype_to_field)[¶](#onnx.helper.tensor_dtype_to_field) Convert a TensorProto’s data_type to corresponding field name for storage. It can be used while making tensors.

- Parameters:
**tensor_dtype**– TensorProto’s data_type- Returns:
field name



-
onnx.helper.tensor_dtype_to_np_dtype(
*tensor_dtype:*)[int](https://docs.python.org/3/library/functions.html#int)[dtype](https://numpy.org/doc/stable/reference/generated/numpy.dtype.html#numpy.dtype)[[source]](../_modules/onnx/helper.html#tensor_dtype_to_np_dtype)[¶](#onnx.helper.tensor_dtype_to_np_dtype) Convert a TensorProto’s data_type to corresponding numpy dtype. It can be used while making tensor.

- Parameters:
**tensor_dtype**– TensorProto’s data_type- Returns:
numpy’s data_type



## Tools[¶](#tools)

-
onnx.helper.find_min_ir_version_for(
*opsetidlist:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[OperatorSetIdProto](classes.html#onnx.OperatorSetIdProto)]*ignore_unknown:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[int](https://docs.python.org/3/library/functions.html#int)[[source]](../_modules/onnx/helper.html#find_min_ir_version_for)[¶](#onnx.helper.find_min_ir_version_for) Given list of opset ids, determine minimum IR version required.

- Parameters:
**opsetidlist**– A sequence of OperatorSetIdProto.**ignore_unknown**– If True, ignore unknown domain and return default minimum version for that domain.

- Returns:
The minimum IR version required (integer)



## Other functions[¶](#other-functions)

|
|
|
|
|
|
|
|
|
|
|
|
|
Display a GraphProto as a string. |
|
|
|
|
|
|
|

---

## Source: https://onnx.ai/onnx/api/inliner.html

# onnx.inliner[¶](#onnx-inliner)

## inline_local_functions[¶](#inline-local-functions)

-
onnx.inliner.inline_local_functions(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*convert_version:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/inliner.html#inline_local_functions)[¶](#onnx.inliner.inline_local_functions) Inline model-local functions in given model.

- Parameters:
**model**– an ONNX ModelProto**convert_version**– if true, try to apply automatic version-conversion to functions requiring a different (ONNX) opset version from the model.

- Returns:
ModelProto with all calls to model-local functions inlined (recursively)



## inline_selected_functions[¶](#inline-selected-functions)

-
onnx.inliner.inline_selected_functions(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*function_ids:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[str](https://docs.python.org/3/library/stdtypes.html#str),[str](https://docs.python.org/3/library/stdtypes.html#str)]]*exclude:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*inline_schema_functions:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/inliner.html#inline_selected_functions)[¶](#onnx.inliner.inline_selected_functions) Inline selected functions in given model.

- Parameters:
**model**– an ONNX ModelProto**function_ids**– list of functions to include/exclude when inlining. Each element is a tuple of (function domain, function name).**exclude**– if true, inlines all functions except those specified in function_ids. if false, inlines all functions specified in function_ids.**inline_schema_functions**– if true, inlines schema-defined functions as well as model-local functions. Otherwise, only model-local functions are inlined.

- Returns:
ModelProto with all calls to model-local functions inlined (recursively)

---

## Source: https://onnx.ai/onnx/api/model_container.html

# onnx.model_container[¶](#onnx-model-container)

## ModelContainer[¶](#modelcontainer)

-
*class*onnx.model_container.ModelContainer[[source]](../_modules/onnx/model_container.html#ModelContainer)[¶](#onnx.model_container.ModelContainer) Implements an API to store large tensors outside the main ModelProto, it avoids copying large initializers when defining the model and these initializers are never serialized through protobuf. No tensor is stored on disk until the user explicitly saves the model.

-
enumerate_graph_protos() Iterable[
[onnx.GraphProto](classes.html#onnx.GraphProto)][[source]](../_modules/onnx/model_container.html#ModelContainer.enumerate_graph_protos)[¶](#onnx.model_container.ModelContainer.enumerate_graph_protos) Enumerates all GraphProtos in a model.


-
is_in_memory_external_initializer(
*name:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[bool](https://docs.python.org/3/library/functions.html#bool)[[source]](../_modules/onnx/model_container.html#ModelContainer.is_in_memory_external_initializer)[¶](#onnx.model_container.ModelContainer.is_in_memory_external_initializer) Tells if an initializer name is an external initializer stored in memory. The name must start with ‘#’ in that case.


-
load(
*file_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*load_large_initializers:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[[source]](../_modules/onnx/model_container.html#ModelContainer.load)[¶](#onnx.model_container.ModelContainer.load) Load the large model.

- Parameters:
**file_path**– model file**load_large_initializers**– loads the large initializers, if not done, the model is incomplete but it can be used to look into the model without executing it and method`_load_large_initializers()`

can be used to load them later



-
save(
*file_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*all_tensors_to_one_file:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/model_container.html#ModelContainer.save)[¶](#onnx.model_container.ModelContainer.save) Save the large model. The function returns a ModelProto, the current one if the model did not need any modification, a modified copy of it if it required changes such as giving file names to every external tensor.

- Parameters:
**file_path**– model file**all_tensors_to_one_file**– saves all large tensors in one file or one file per lerge tensor

- Returns:
the saved ModelProto



-
enumerate_graph_protos() Iterable[

## make_large_model[¶](#make-large-model)

-
onnx.model_container.make_large_model(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)*large_initializers:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)] |[None](https://docs.python.org/3/library/constants.html#None)= None***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[ModelContainer](#onnx.model_container.ModelContainer)[[source]](../_modules/onnx/model_container.html#make_large_model)[¶](#onnx.model_container.make_large_model) Construct a ModelContainer

C API and Python API of protobuf do not operate without serializing the protos. This function uses the Python API of ModelContainer.

- Parameters:
**graph**–*make_graph*returns**large_initializers**– dictionary name: large tensor, large tensor is any python object supporting the DLPack protocol, the ownership the tensor is transferred to the ModelContainer, the tensor must define method tobytes like numpy tensors****kwargs**– any attribute to add to the returned instance

- Returns:
ModelContainer



## make_large_tensor_proto[¶](#make-large-tensor-proto)

-
onnx.model_container.make_large_tensor_proto(
*location:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*tensor_name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)*tensor_type:*,[int](https://docs.python.org/3/library/functions.html#int)*shape:*)[tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int), ...][TensorProto](classes.html#onnx.TensorProto)[[source]](../_modules/onnx/model_container.html#make_large_tensor_proto)[¶](#onnx.model_container.make_large_tensor_proto) Create an external tensor.

- Parameters:
**location**– unique identifier (not necessary a path)**tensor_name**– tensor name in the graph**tensor_type**– onnx type**shape**– shape the of the initializer

- Returns:
the created tensor

---

## Source: https://onnx.ai/onnx/api/numpy_helper.html

# onnx.numpy_helper[¶](#onnx-numpy-helper)

|
Converts an array into a TensorProto including |
|
Converts a Python dictionary into a map def. |
|
Converts a list into a sequence def. |
|
Converts an optional value into a Optional def. |
|
Converts a tensor def object to a numpy array. |
|
Converts a map def to a Python dictionary. |
|
Converts a sequence def to a Python list. |
|
Converts an optional def to a Python optional. |

## array[¶](#array)

-
onnx.numpy_helper.from_array(
*array:*,[ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)*/*,*name:*)[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None[TensorProto](classes.html#onnx.TensorProto)[[source]](../_modules/onnx/numpy_helper.html#from_array)[¶](#onnx.numpy_helper.from_array) Converts an array into a TensorProto including

- Parameters:
**array**– a numpy array.**name**– (optional) the name of the tensor.

- Returns:
the converted tensor def.

- Return type:


-
onnx.numpy_helper.to_array(
*tensor:*,[TensorProto](classes.html#onnx.TensorProto)*base_dir:*)[str](https://docs.python.org/3/library/stdtypes.html#str)= ''[ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray)[[source]](../_modules/onnx/numpy_helper.html#to_array)[¶](#onnx.numpy_helper.to_array) Converts a tensor def object to a numpy array.

This function uses ml_dtypes if the dtype is not a native numpy dtype.

- Parameters:
**tensor**– a TensorProto object.**base_dir**– if external tensor exists, base_dir can help to find the path to it

- Returns:
the converted array.

- Return type:
arr



Arrays with data types not supported natively by NumPy will be return with `ml_dtypes`

dtypes.

## sequence[¶](#sequence)

-
onnx.numpy_helper.to_list(
*sequence:*)[SequenceProto](classes.html#onnx.SequenceProto)[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)][[source]](../_modules/onnx/numpy_helper.html#to_list)[¶](#onnx.numpy_helper.to_list) Converts a sequence def to a Python list.

- Parameters:
**sequence**– a SequenceProto object.- Returns:
the converted list.

- Return type:


-
onnx.numpy_helper.from_list(
*lst:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*dtype:*)[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None[SequenceProto](classes.html#onnx.SequenceProto)[[source]](../_modules/onnx/numpy_helper.html#from_list)[¶](#onnx.numpy_helper.from_list) Converts a list into a sequence def.

- Parameters:
**lst**– a Python list**name**– (optional) the name of the sequence.**dtype**– (optional) type of element in the input list, used for specifying sequence values when converting an empty list.

- Returns:
the converted sequence def.

- Return type:


## dictionary[¶](#dictionary)

## optional[¶](#optional)

-
onnx.numpy_helper.to_optional(
*optional:*)[OptionalProto](classes.html#onnx.OptionalProto)[Any](https://docs.python.org/3/library/typing.html#typing.Any)|[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/numpy_helper.html#to_optional)[¶](#onnx.numpy_helper.to_optional) Converts an optional def to a Python optional.

- Parameters:
**optional**– an OptionalProto object.- Returns:
the converted optional.

- Return type:
opt



-
onnx.numpy_helper.from_optional(
*opt:*,[Any](https://docs.python.org/3/library/typing.html#typing.Any)|[None](https://docs.python.org/3/library/constants.html#None)*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*dtype:*)[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None[OptionalProto](classes.html#onnx.OptionalProto)[[source]](../_modules/onnx/numpy_helper.html#from_optional)[¶](#onnx.numpy_helper.from_optional) Converts an optional value into a Optional def.

- Parameters:
**opt**– a Python optional**name**– (optional) the name of the optional.**dtype**– (optional) type of element in the input, used for specifying optional values when converting empty none. dtype must be a valid OptionalProto.DataType value

- Returns:
the converted optional def.

- Return type:
optional

---

## Source: https://onnx.ai/onnx/api/parser.html

# onnx.parser[¶](#onnx-parser)

## parse_node[¶](#parse-node)

## parse_function[¶](#parse-function)

-
onnx.parser.parse_function(
*function_text:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[FunctionProto](classes.html#onnx.FunctionProto)[[source]](../_modules/onnx/parser.html#parse_function)[¶](#onnx.parser.parse_function) Parse a string to build a FunctionProto.

- Parameters:
**function_text**(*string*) – formatted string- Returns:
FunctionProto



## parse_graph[¶](#parse-graph)

-
onnx.parser.parse_graph(
*graph_text:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[GraphProto](classes.html#onnx.GraphProto)[[source]](../_modules/onnx/parser.html#parse_graph)[¶](#onnx.parser.parse_graph) Parse a string to build a GraphProto.

- Parameters:
**graph_text**(*string*) – formatted string- Returns:
GraphProto



## parse_model[¶](#parse-model)

-
onnx.parser.parse_model(
*model_text:*)[str](https://docs.python.org/3/library/stdtypes.html#str)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/parser.html#parse_model)[¶](#onnx.parser.parse_model) Parse a string to build a ModelProto.

- Parameters:
**model_text**(*string*) – formatted string- Returns:
ModelProto

---

## Source: https://onnx.ai/onnx/api/printer.html

onnx.printer¶ to_text¶ onnx.printer.to_text(proto: ModelProto | FunctionProto | GraphProto) → str[source]¶

---

## Source: https://onnx.ai/onnx/api/reference.html

# onnx.reference[¶](#onnx-reference)

## DefaultNone[¶](#defaultnone)

## ReferenceEvaluator[¶](#referenceevaluator)

-
*class*onnx.reference.ReferenceEvaluator(*proto:*,[Any](https://docs.python.org/3/library/typing.html#typing.Any)*opsets:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[int](https://docs.python.org/3/library/functions.html#int)] |[None](https://docs.python.org/3/library/constants.html#None)= None*functions:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[ReferenceEvaluator](#onnx.reference.ReferenceEvaluator)|[FunctionProto](classes.html#onnx.FunctionProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*verbose:*,[int](https://docs.python.org/3/library/functions.html#int)= 0*new_ops:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[type](https://docs.python.org/3/library/functions.html#type)[[OpRun](#onnx.reference.op_run.OpRun)]] |[None](https://docs.python.org/3/library/constants.html#None)= None*optimized:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[[source]](../_modules/onnx/reference/reference_evaluator.html#ReferenceEvaluator)[¶](#onnx.reference.ReferenceEvaluator) Computes the outputs of an ONNX proto (ModelProto, FunctionProto, GraphProto, NodeProto).

This is a pure python implementation of ONNX specifications. Mismatches may remain between the official specifications and the implementation here. In the case of such a mismatch, the official spec overrides this implementation.

- Parameters:
**proto**–,`onnx.ModelProto`

,`onnx.GraphProto`

,`onnx.FunctionProto`

, filename or bytes`onnx.NodeProto`

**verbose**– display intermediate results on the standard output during the execution**opsets**– if*proto*is an instance of*GraphProto*, opsets must be defined by a dictionary of**functions**– known onnx functions**new_ops**– this runtime can be used to test the implementations of new operators,*new_ops*is a list of classes derived from, every class must define the static attribute domain, there may be multiple implementations for the same operator, the first one in the list is used.`OpRun`

**optimized**– some operators have two implementations, a naive one corresponding to definition of the mathematical definition of the operator, another one more efficient. This is the case for operator Conv. The naive version is ten times slower than the optimized one using a decomposition into*Conv = im2col + Gemm*. If True, all optimized kernels are added in new_ops and are used instead of the inner implementation if list*new_ops*does not already contain one.


The class maps every node to its associated implementation. When a subgraph of a function is met, it uses this class to execute the subgraph or the function. Next example shows how to run ReferenceEvaluator with an onnx model stored in file model.onnx.

import numpy as np from onnx.reference import ReferenceEvaluator X = np.array(...) sess = ReferenceEvaluator("model.onnx") results = sess.run(None, {"X": X}) print(results[0]) # display the first result

Parameter

*verbose*may be used to show intermediate results.import numpy as np from onnx.reference import ReferenceEvaluator X = np.array(...) sess = ReferenceEvaluator("model.onnx", verbose=1) results = sess.run(None, {"X": X}) print(results[0]) # display the first result

The class can use any implementation available in folder

[ops](https://github.com/onnx/onnx/tree/main/onnx/reference/ops). Adding an implementation requires two changes. The first one is the implementation itself. Any existing node can be used as a template. The second is one line in file[_op_list.py](https://github.com/onnx/onnx/tree/main/onnx/reference/ops/_op_list.py)to import the file and let the reference evaluator know it exists.This class can also be used to test an implementation of a custom operator. Let’s assume this new operator is InvAlpha from domain custom. The implementation must take place in a class inheriting from

. It must also define attribute op_domain. Here is an example which computes \(\\frac{1}{X + \\alpha}\).`OpRun`

from onnx.reference.op_run import OpRun class InvAlpha(OpRun): op_domain = "custom" def _run(self, x, alpha=None): # None must be the default value, it is automatically # replaced by class OpRun with either the default value # specified in the NodeProto or an attribute value defined # in a `FunctionProto`. return (1 / (x + alpha),)

alpha is an attribute. It can be defined by the onnx node or be defined by the function using this node. It is safe to assume that attributes are known at the same time as the input. Class ReferenceEvaluator must know about this new implementation and this can be done by specified argument

*new_ops*.sess = ReferenceEvaluator(onnx_model, new_ops=[InvAlpha]) got = sess.run(None, {"X": x})[0]

A specific node can be simply evaluated.

import numpy as np from onnx.reference.ops._op_list import Celu x = np.array([[0, 1], [-1, 2]], dtype=np.float32) y = Celu.eval(x, alpha=0.5) print(y)

[[ 0. 1. ] [-0.43233237 2. ]]

This can also be expressed as:

import numpy as np from onnx.reference.ops import load_op Celu = load_op("", "Celu") # domain is "" x = np.array([[0, 1], [-1, 2]], dtype=np.float32) y = Celu.eval(x, alpha=0.5) print(y)

[[ 0. 1. ] [-0.43233237 2. ]]

It is possible to overwrite an existing operator. The class name must be the same. The domain does not have to be specified for the default domain. However, by default, class OpRun will load the most recent for this operator. It can be explicitly specified by adding static attribute op_schema of type

.`OpSchema`

from onnx.reference.op_run.op_conv import Conv as _Conv class Conv(_Conv): op_schema = instance_of_OpSchema() def _run(self, ...): ... An operator may be different in a later opset. In that case, a new implementation needs to be registered. `Pad_11`, `Pad_18`. `Pad_11` is the implementation chose for opset in [11, 17]. `Pad_18` is selected for any greater opset. Both classes must be imported into file `_op_list.py` to register their existence to the runtime. An operator may have a reference implementation such as `CastLike` and still be defined as a function. By default, the reference implementation is used. This behavior can be changed by adding a class to the list of overwritten operators. It must inherit from :class:`OpRunExpand`. :: from onnx.reference.op_run import OpRunExpand class CastLike(OpRunExpand): op_domain = "" ref = ReferenceEvaluator(model, new_ops=[CastLike]) # ... This mechanism is used in unit test to check the function implementation a schema may define.

-
*property*input_names[¶](#onnx.reference.ReferenceEvaluator.input_names) Returns the input names.


-
*property*opsets[¶](#onnx.reference.ReferenceEvaluator.opsets) Returns the opsets.


-
*property*output_names[¶](#onnx.reference.ReferenceEvaluator.output_names) Returns the output names.


-
run(
*output_names*,*feed_inputs:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*attributes:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)] |[None](https://docs.python.org/3/library/constants.html#None)= None*intermediate:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)] |[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)][[source]](../_modules/onnx/reference/reference_evaluator.html#ReferenceEvaluator.run)[¶](#onnx.reference.ReferenceEvaluator.run) Executes the onnx model.

- Parameters:
**output_names**– requested outputs by names, None for all**feed_inputs**– dictionary { input name: input value }**attributes**– attributes value if the instance runs a FunctionProto**intermediate**– if True, the function returns all the results, final ones and intermediates one in a same dictionary, if False, only the final results are returned in a list

- Returns:
list of requested outputs if intermediate is False, named results in a dictionary otherwise




## OpFunction[¶](#opfunction)

-
*class*onnx.reference.op_run.OpFunction(*onnx_node:*,[NodeProto](classes.html#onnx.NodeProto)*run_params:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)] |[None](https://docs.python.org/3/library/constants.html#None)*impl:*,[Any](https://docs.python.org/3/library/typing.html#typing.Any)|[None](https://docs.python.org/3/library/constants.html#None)= None*attributes:*)[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)] |[None](https://docs.python.org/3/library/constants.html#None)= None[[source]](../_modules/onnx/reference/op_run.html#OpFunction)[¶](#onnx.reference.op_run.OpFunction) Runs a custom function.

-
*classmethod*create(*n_inputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*verbose:*,[int](https://docs.python.org/3/library/functions.html#int)= 0***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[¶](#onnx.reference.op_run.OpFunction.create) Instantiates this class based on the given information.

- Parameters:
**n_inputs**– number of inputs (default is defined by the operator schema)**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto



-
*classmethod*eval(**args:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*verbose:*,[int](https://docs.python.org/3/library/functions.html#int)= 0***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[¶](#onnx.reference.op_run.OpFunction.eval) Evaluates this operator.

- Parameters:
***args**– inputs**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto



-
*static*implicit_inputs(*graph:*)[GraphProto](classes.html#onnx.GraphProto)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)][¶](#onnx.reference.op_run.OpFunction.implicit_inputs) Returns all variables not registered as inputs and not produced by an node inside the graph. This inputs are part of the context existing in the graph calling this one.


-
*classmethod*make_node(*n_inputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[NodeProto](classes.html#onnx.NodeProto)[¶](#onnx.reference.op_run.OpFunction.make_node) Creates an ONNX node for this class based on the given information.

- Parameters:
**n_inputs**– number of inputs (default is defined by the operator schema)**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto


Method

creates an onnx node returned by method`eval`

.`make_node`

import numpy as np from onnx.reference.ops._op_list import Celu onnx_node = Celu.make_node(alpha=0.5) print(onnx_node)

input: "x0" output: "y0" op_type: "Celu" attribute { name: "alpha" f: 0.5 type: FLOAT }


-
need_context()
[bool](https://docs.python.org/3/library/functions.html#bool)[¶](#onnx.reference.op_run.OpFunction.need_context) Tells the runtime if this node needs the context (all the results produced so far) as it may silently access one of them (operator Scan, If, Loop). The default answer is False.


-
run(
**args*,*linked_attributes=None*,*context=None*)[¶](#onnx.reference.op_run.OpFunction.run) Calls method

`_run`

, catches exceptions, displays a longer error message.- Parameters:
***args**– inputs**linked_attributes**– used if this has an attribute linked to the attribute of the function it belongs to**context**– if this node is part of the subgraph, context is a dictionary with the values this node may use

- Returns:
tuple of results



-

## OpRun[¶](#oprun)

-
*class*onnx.reference.op_run.OpRun(*onnx_node:*,[NodeProto](classes.html#onnx.NodeProto)*run_params:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*schema:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)|[None](https://docs.python.org/3/library/constants.html#None)= None[[source]](../_modules/onnx/reference/op_run.html#OpRun)[¶](#onnx.reference.op_run.OpRun) Ancestor to all operators in this subfolder.

- Parameters:
**onnx_node**– onnx node**run_params**– additional parameters such as verbose, opsets (it can be more than one if the operator has a subgraph), log for a logging function**schema**– operator schema


-
*classmethod*create(*n_inputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*verbose:*,[int](https://docs.python.org/3/library/functions.html#int)= 0***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[[source]](../_modules/onnx/reference/op_run.html#OpRun.create)[¶](#onnx.reference.op_run.OpRun.create) Instantiates this class based on the given information.

- Parameters:
**n_inputs**– number of inputs (default is defined by the operator schema)**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto



-
*classmethod*eval(**args:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*verbose:*,[int](https://docs.python.org/3/library/functions.html#int)= 0***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[[source]](../_modules/onnx/reference/op_run.html#OpRun.eval)[¶](#onnx.reference.op_run.OpRun.eval) Evaluates this operator.

- Parameters:
***args**– inputs**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto



-
*static*implicit_inputs(*graph:*)[GraphProto](classes.html#onnx.GraphProto)[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)][[source]](../_modules/onnx/reference/op_run.html#OpRun.implicit_inputs)[¶](#onnx.reference.op_run.OpRun.implicit_inputs) Returns all variables not registered as inputs and not produced by an node inside the graph. This inputs are part of the context existing in the graph calling this one.


-
*classmethod*make_node(*n_inputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*n_outputs:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[NodeProto](classes.html#onnx.NodeProto)[[source]](../_modules/onnx/reference/op_run.html#OpRun.make_node)[¶](#onnx.reference.op_run.OpRun.make_node) Creates an ONNX node for this class based on the given information.

- Parameters:
**n_inputs**– number of inputs (default is defined by the operator schema)**n_outputs**– number of outputs (default is defined by the operator schema)**verbose**– verbosity****kwargs**– node attributes

- Returns:
NodeProto


Method

creates an onnx node returned by method`eval`

.`make_node`

import numpy as np from onnx.reference.ops._op_list import Celu onnx_node = Celu.make_node(alpha=0.5) print(onnx_node)

input: "x0" output: "y0" op_type: "Celu" attribute { name: "alpha" f: 0.5 type: FLOAT }


-
need_context()
[bool](https://docs.python.org/3/library/functions.html#bool)[[source]](../_modules/onnx/reference/op_run.html#OpRun.need_context)[¶](#onnx.reference.op_run.OpRun.need_context) Tells the runtime if this node needs the context (all the results produced so far) as it may silently access one of them (operator Scan, If, Loop). The default answer is False.


-
run(
**args*,*linked_attributes=None*,*context=None*)[[source]](../_modules/onnx/reference/op_run.html#OpRun.run)[¶](#onnx.reference.op_run.OpRun.run) Calls method

`_run`

, catches exceptions, displays a longer error message.- Parameters:
***args**– inputs**linked_attributes**– used if this has an attribute linked to the attribute of the function it belongs to**context**– if this node is part of the subgraph, context is a dictionary with the values this node may use

- Returns:
tuple of results

---

## Source: https://onnx.ai/onnx/api/shape_inference.html

# onnx.shape_inference[¶](#onnx-shape-inference)

## infer_shapes[¶](#infer-shapes)

-
onnx.shape_inference.infer_shapes(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)|[bytes](https://docs.python.org/3/library/stdtypes.html#bytes)*check_type:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*strict_mode:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*data_prop:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/shape_inference.html#infer_shapes)[¶](#onnx.shape_inference.infer_shapes) Apply shape inference to the provided ModelProto.

Inferred shapes are added to the value_info field of the graph.

If the inferred values conflict with values already provided in the graph, that means that the provided values are invalid (or there is a bug in shape inference), and the result is unspecified.

- Parameters:
**model**– ModelProto.**check_type**– Checks the type-equality for input and output.**strict_mode**– Stricter shape inference, it will throw errors if any; Otherwise, simply stop if any error.**data_prop**– Enables data propagation for limited operators to perform shape computation.

- Returns:
(ModelProto) model with inferred shape information



## infer_shapes_path[¶](#infer-shapes-path)

-
onnx.shape_inference.infer_shapes_path(
*model_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)*output_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)= ''*check_type:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*strict_mode:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*data_prop:*)[bool](https://docs.python.org/3/library/functions.html#bool)= False[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/shape_inference.html#infer_shapes_path)[¶](#onnx.shape_inference.infer_shapes_path) Take model path for shape_inference.

This function is the same as

`infer_shape()`

but supports >2GB models. The function outputs the inferred model to the output_path. The original model path is used if not specified.

## infer_node_outputs[¶](#infer-node-outputs)

-
onnx.shape_inference.infer_node_outputs(
*schema:*,[OpSchema](defs.html#onnx.defs.OpSchema)*node:*,[NodeProto](classes.html#onnx.NodeProto)*input_types:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[TypeProto](classes.html#onnx.TypeProto)]*input_data:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[TensorProto](classes.html#onnx.TensorProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*input_sparse_data:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[SparseTensorProto](classes.html#onnx.SparseTensorProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*opset_imports:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[OperatorSetIdProto](classes.html#onnx.OperatorSetIdProto)] |[None](https://docs.python.org/3/library/constants.html#None)= None*ir_version:*)[int](https://docs.python.org/3/library/functions.html#int)= 13[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[TypeProto](classes.html#onnx.TypeProto)][[source]](../_modules/onnx/shape_inference.html#infer_node_outputs)[¶](#onnx.shape_inference.infer_node_outputs)

## infer_function_output_types[¶](#infer-function-output-types)

-
onnx.shape_inference.infer_function_output_types(
*function:*,[FunctionProto](classes.html#onnx.FunctionProto)*input_types:*,[Sequence](classes.html#onnx.TypeProto.Sequence)[[TypeProto](classes.html#onnx.TypeProto)]*attributes:*)[Sequence](classes.html#onnx.TypeProto.Sequence)[[AttributeProto](classes.html#onnx.AttributeProto)][list](https://docs.python.org/3/library/stdtypes.html#list)[[TypeProto](classes.html#onnx.TypeProto)][[source]](../_modules/onnx/shape_inference.html#infer_function_output_types)[¶](#onnx.shape_inference.infer_function_output_types) Apply type-and-shape-inference to given function body, with given input types and given input attribute values.

---

## Source: https://onnx.ai/onnx/api/tools.html

# onnx.tools[¶](#onnx-tools)

## net_drawer[¶](#net-drawer)

-
onnx.tools.net_drawer.GetPydotGraph(
*graph:*,[GraphProto](classes.html#onnx.GraphProto)*name:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[None](https://docs.python.org/3/library/constants.html#None)= None*rankdir:*,[str](https://docs.python.org/3/library/stdtypes.html#str)= 'LR'*node_producer:*,[Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[[[NodeProto](classes.html#onnx.NodeProto),[int](https://docs.python.org/3/library/functions.html#int)], Node] |[None](https://docs.python.org/3/library/constants.html#None)= None*embed_docstring:*) Dot[bool](https://docs.python.org/3/library/functions.html#bool)= False[[source]](../_modules/onnx/tools/net_drawer.html#GetPydotGraph)[¶](#onnx.tools.net_drawer.GetPydotGraph)

-
onnx.tools.net_drawer.GetOpNodeProducer(
*embed_docstring:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False***kwargs:*)[Any](https://docs.python.org/3/library/typing.html#typing.Any)[Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[[[NodeProto](classes.html#onnx.NodeProto),[int](https://docs.python.org/3/library/functions.html#int)], Node][[source]](../_modules/onnx/tools/net_drawer.html#GetOpNodeProducer)[¶](#onnx.tools.net_drawer.GetOpNodeProducer)

```
from onnx.tools.net_drawer import GetPydotGraph, GetOpNodeProducer
pydot_graph = GetPydotGraph(
model_onnx.graph, # model_onnx is a ModelProto instance
name=model_onnx.graph.name,
rankdir="TP",
node_producer=GetOpNodeProducer("docstring"))
pydot_graph.write_dot("graph.dot")
```

## update_inputs_outputs_dims[¶](#update-inputs-outputs-dims)

-
onnx.tools.update_model_dims.update_inputs_outputs_dims(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*input_dims:*,[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]]*output_dims:*)[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[str](https://docs.python.org/3/library/stdtypes.html#str),[list](https://docs.python.org/3/library/stdtypes.html#list)[[Any](https://docs.python.org/3/library/typing.html#typing.Any)]][ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/tools/update_model_dims.html#update_inputs_outputs_dims)[¶](#onnx.tools.update_model_dims.update_inputs_outputs_dims) This function updates the dimension sizes of the model’s inputs and outputs to the values provided in input_dims and output_dims. if the dim value provided is negative, a unique dim_param will be set for that dimension.

Example. if we have the following shape for inputs and outputs:

shape(input_1) = (‘b’, 3, ‘w’, ‘h’)

shape(input_2) = (‘b’, 4)

shape(output) = (‘b’, ‘d’, 5)


The parameters can be provided as:

input_dims = { "input_1": ['b', 3, 'w', 'h'], "input_2": ['b', 4], } output_dims = { "output": ['b', -1, 5] }

Putting it together:

model = onnx.load('model.onnx') updated_model = update_inputs_outputs_dims(model, input_dims, output_dims) onnx.save(updated_model, 'model.onnx')


## replace_initializer_by_constant_of_shape[¶](#replace-initializer-by-constant-of-shape)

-
onnx.tools.replace_constants.replace_initializer_by_constant_of_shape(
*onx:*,[FunctionProto](classes.html#onnx.FunctionProto)|[GraphProto](classes.html#onnx.GraphProto)|[ModelProto](serialization.html#onnx.ModelProto)*threshold:*,[int](https://docs.python.org/3/library/functions.html#int)= 128*ir_version:*,[int](https://docs.python.org/3/library/functions.html#int)|[None](https://docs.python.org/3/library/constants.html#None)= None*use_range:*,[bool](https://docs.python.org/3/library/functions.html#bool)= False*value_constant_of_shape:*)[float](https://docs.python.org/3/library/functions.html#float)= 0.5[[source]](../_modules/onnx/tools/replace_constants.html#replace_initializer_by_constant_of_shape)[¶](#onnx.tools.replace_constants.replace_initializer_by_constant_of_shape) Replace initializers or constant node by nodes

*ConstantOfShape*to reduce the size.This reduce the cost to write a unit test about a specific graph structure.

- Parameters:
**onx**– ModelProto**threshold**– every initializer under this threshold is not impacted**ir_version**– initializer must be specified as input for ir_version <= 3, this must be specified if onx is`FunctionProto`

or`GraphProto`

**use_range**– if uses operator*Range*instead of*ConstantOfShape*to avoid constant tensors**value_constant_of_shape**– value to use as a value for all nodes*ConstantOfShape*, a high value may produce nan or inf predictions

- Returns:
onx, modified ModelProto


The function is designed so that the function can be reapplied on a modified model and either replace

*ConstantOfShape*with*Range*operators, either replace the fill value for every*ConstantOfShape*.

---

## Source: https://onnx.ai/onnx/api/utils.html

# onnx.utils[¶](#onnx-utils)

## Extractor[¶](#extractor)

-
*class*onnx.utils.Extractor(*model:*)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/utils.html#Extractor)[¶](#onnx.utils.Extractor)

## extract_model[¶](#extract-model)

-
onnx.utils.extract_model(
*input_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)*output_path:*,[str](https://docs.python.org/3/library/stdtypes.html#str)|[PathLike](https://docs.python.org/3/library/os.html#os.PathLike)*input_names:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*output_names:*,[list](https://docs.python.org/3/library/stdtypes.html#list)[[str](https://docs.python.org/3/library/stdtypes.html#str)]*check_model:*,[bool](https://docs.python.org/3/library/functions.html#bool)= True*infer_shapes:*)[bool](https://docs.python.org/3/library/functions.html#bool)= True[None](https://docs.python.org/3/library/constants.html#None)[[source]](../_modules/onnx/utils.html#extract_model)[¶](#onnx.utils.extract_model) Extracts sub-model from an ONNX model.

The sub-model is defined by the names of the input and output tensors

*exactly*.Note: For control-flow operators, e.g. If and Loop, the _boundary of

[sub-model_](#id1), which is defined by the input and output tensors, should not _cut[through_](#id3)the subgraph that is connected to the _main[graph_](#id5)as attributes of these operators.Note: When the extracted model size is larger than 2GB, the extra data will be saved in “output_path.data”.

- Parameters:
**input_path**(*str**|*) – The path to original ONNX model.*os.PathLike***output_path**(*str**|*) – The path to save the extracted ONNX model.*os.PathLike***input_names**(*list**of**string*) – The names of the input tensors that to be extracted.**output_names**(*list**of**string*) – The names of the output tensors that to be extracted.**check_model**() – Whether to run model checker on the original model and the extracted model.*bool***infer_shapes**() – Whether to infer the shapes of the original model.*bool*

---

## Source: https://onnx.ai/onnx/api/version_converter.html

# onnx.version_converter[¶](#onnx-version-converter)

## convert_version[¶](#convert-version)

-
onnx.version_converter.convert_version(
*model:*,[ModelProto](serialization.html#onnx.ModelProto)*target_version:*)[int](https://docs.python.org/3/library/functions.html#int)[ModelProto](serialization.html#onnx.ModelProto)[[source]](../_modules/onnx/version_converter.html#convert_version)[¶](#onnx.version_converter.convert_version) Convert opset version of the ModelProto.

- Parameters:
**model**– Model.**target_version**– Target opset version.

- Returns:
Converted model.

- Raises:
**RuntimeError when some necessary conversion is not supported.**–

---

## Source: https://onnx.ai/onnx/operators/index.html

[Abs](onnx__Abs.html#l-onnx-doc-abs)
|
[13](onnx__Abs.html#l-onnx-op-abs-13), [6](onnx__Abs.html#l-onnx-op-abs-6), [1](onnx__Abs.html#l-onnx-op-abs-1)
|
[13/6](text_diff_Abs_6_13.html#l-onnx-op-abs-d6-13), [13/1](text_diff_Abs_1_13.html#l-onnx-op-abs-d1-13), [6/1](text_diff_Abs_1_6.html#l-onnx-op-abs-d1-6)
|
[Acos](onnx__Acos.html#l-onnx-doc-acos)
|
[22](onnx__Acos.html#l-onnx-op-acos-22), [7](onnx__Acos.html#l-onnx-op-acos-7)
|
[22/7](text_diff_Acos_7_22.html#l-onnx-op-acos-d7-22)
|
[Acosh](onnx__Acosh.html#l-onnx-doc-acosh)
|
[22](onnx__Acosh.html#l-onnx-op-acosh-22), [9](onnx__Acosh.html#l-onnx-op-acosh-9)
|
[22/9](text_diff_Acosh_9_22.html#l-onnx-op-acosh-d9-22)
|
[Add](onnx__Add.html#l-onnx-doc-add)
|
[14](onnx__Add.html#l-onnx-op-add-14), [13](onnx__Add.html#l-onnx-op-add-13), [7](onnx__Add.html#l-onnx-op-add-7), [6](onnx__Add.html#l-onnx-op-add-6), [1](onnx__Add.html#l-onnx-op-add-1)
|
[14/13](text_diff_Add_13_14.html#l-onnx-op-add-d13-14), [14/7](text_diff_Add_7_14.html#l-onnx-op-add-d7-14), [13/7](text_diff_Add_7_13.html#l-onnx-op-add-d7-13), [14/6](text_diff_Add_6_14.html#l-onnx-op-add-d6-14), [13/6](text_diff_Add_6_13.html#l-onnx-op-add-d6-13), [7/6](text_diff_Add_6_7.html#l-onnx-op-add-d6-7), [14/1](text_diff_Add_1_14.html#l-onnx-op-add-d1-14), [13/1](text_diff_Add_1_13.html#l-onnx-op-add-d1-13), [7/1](text_diff_Add_1_7.html#l-onnx-op-add-d1-7), [6/1](text_diff_Add_1_6.html#l-onnx-op-add-d1-6)
|
[AffineGrid](onnx__AffineGrid.html#l-onnx-doc-affinegrid)
|
[20](onnx__AffineGrid.html#l-onnx-op-affinegrid-20)
|
|
[And](onnx__And.html#l-onnx-doc-and)
|
[7](onnx__And.html#l-onnx-op-and-7), [1](onnx__And.html#l-onnx-op-and-1)
|
[7/1](text_diff_And_1_7.html#l-onnx-op-and-d1-7)
|
[ArgMax](onnx__ArgMax.html#l-onnx-doc-argmax)
|
[13](onnx__ArgMax.html#l-onnx-op-argmax-13), [12](onnx__ArgMax.html#l-onnx-op-argmax-12), [11](onnx__ArgMax.html#l-onnx-op-argmax-11), [1](onnx__ArgMax.html#l-onnx-op-argmax-1)
|
[13/12](text_diff_ArgMax_12_13.html#l-onnx-op-argmax-d12-13), [13/11](text_diff_ArgMax_11_13.html#l-onnx-op-argmax-d11-13), [12/11](text_diff_ArgMax_11_12.html#l-onnx-op-argmax-d11-12), [13/1](text_diff_ArgMax_1_13.html#l-onnx-op-argmax-d1-13), [12/1](text_diff_ArgMax_1_12.html#l-onnx-op-argmax-d1-12), [11/1](text_diff_ArgMax_1_11.html#l-onnx-op-argmax-d1-11)
|
[ArgMin](onnx__ArgMin.html#l-onnx-doc-argmin)
|
[13](onnx__ArgMin.html#l-onnx-op-argmin-13), [12](onnx__ArgMin.html#l-onnx-op-argmin-12), [11](onnx__ArgMin.html#l-onnx-op-argmin-11), [1](onnx__ArgMin.html#l-onnx-op-argmin-1)
|
[13/12](text_diff_ArgMin_12_13.html#l-onnx-op-argmin-d12-13), [13/11](text_diff_ArgMin_11_13.html#l-onnx-op-argmin-d11-13), [12/11](text_diff_ArgMin_11_12.html#l-onnx-op-argmin-d11-12), [13/1](text_diff_ArgMin_1_13.html#l-onnx-op-argmin-d1-13), [12/1](text_diff_ArgMin_1_12.html#l-onnx-op-argmin-d1-12), [11/1](text_diff_ArgMin_1_11.html#l-onnx-op-argmin-d1-11)
|
[Asin](onnx__Asin.html#l-onnx-doc-asin)
|
[22](onnx__Asin.html#l-onnx-op-asin-22), [7](onnx__Asin.html#l-onnx-op-asin-7)
|
[22/7](text_diff_Asin_7_22.html#l-onnx-op-asin-d7-22)
|
[Asinh](onnx__Asinh.html#l-onnx-doc-asinh)
|
[22](onnx__Asinh.html#l-onnx-op-asinh-22), [9](onnx__Asinh.html#l-onnx-op-asinh-9)
|
[22/9](text_diff_Asinh_9_22.html#l-onnx-op-asinh-d9-22)
|
[Atan](onnx__Atan.html#l-onnx-doc-atan)
|
[22](onnx__Atan.html#l-onnx-op-atan-22), [7](onnx__Atan.html#l-onnx-op-atan-7)
|
[22/7](text_diff_Atan_7_22.html#l-onnx-op-atan-d7-22)
|
[Atanh](onnx__Atanh.html#l-onnx-doc-atanh)
|
[22](onnx__Atanh.html#l-onnx-op-atanh-22), [9](onnx__Atanh.html#l-onnx-op-atanh-9)
|
[22/9](text_diff_Atanh_9_22.html#l-onnx-op-atanh-d9-22)
|
[Attention](onnx__Attention.html#l-onnx-doc-attention)
|
[24](onnx__Attention.html#l-onnx-op-attention-24), [23](onnx__Attention.html#l-onnx-op-attention-23)
|
[24/23](text_diff_Attention_23_24.html#l-onnx-op-attention-d23-24)
|
[AveragePool](onnx__AveragePool.html#l-onnx-doc-averagepool)
|
[22](onnx__AveragePool.html#l-onnx-op-averagepool-22), [19](onnx__AveragePool.html#l-onnx-op-averagepool-19), [11](onnx__AveragePool.html#l-onnx-op-averagepool-11), [10](onnx__AveragePool.html#l-onnx-op-averagepool-10), [7](onnx__AveragePool.html#l-onnx-op-averagepool-7), [1](onnx__AveragePool.html#l-onnx-op-averagepool-1)
|
[22/19](text_diff_AveragePool_19_22.html#l-onnx-op-averagepool-d19-22), [22/11](text_diff_AveragePool_11_22.html#l-onnx-op-averagepool-d11-22), [19/11](text_diff_AveragePool_11_19.html#l-onnx-op-averagepool-d11-19), [22/10](text_diff_AveragePool_10_22.html#l-onnx-op-averagepool-d10-22), [19/10](text_diff_AveragePool_10_19.html#l-onnx-op-averagepool-d10-19), [11/10](text_diff_AveragePool_10_11.html#l-onnx-op-averagepool-d10-11), [22/7](text_diff_AveragePool_7_22.html#l-onnx-op-averagepool-d7-22), [19/7](text_diff_AveragePool_7_19.html#l-onnx-op-averagepool-d7-19), [11/7](text_diff_AveragePool_7_11.html#l-onnx-op-averagepool-d7-11), [10/7](text_diff_AveragePool_7_10.html#l-onnx-op-averagepool-d7-10), [22/1](text_diff_AveragePool_1_22.html#l-onnx-op-averagepool-d1-22), [19/1](text_diff_AveragePool_1_19.html#l-onnx-op-averagepool-d1-19), [11/1](text_diff_AveragePool_1_11.html#l-onnx-op-averagepool-d1-11), [10/1](text_diff_AveragePool_1_10.html#l-onnx-op-averagepool-d1-10), [7/1](text_diff_AveragePool_1_7.html#l-onnx-op-averagepool-d1-7)
|
[BatchNormalization](onnx__BatchNormalization.html#l-onnx-doc-batchnormalization)
|
[15](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-15), [14](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-14), [9](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-9), [7](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-7), [6](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-6), [1](onnx__BatchNormalization.html#l-onnx-op-batchnormalization-1)
|
[15/14](text_diff_BatchNormalization_14_15.html#l-onnx-op-batchnormalization-d14-15), [15/9](text_diff_BatchNormalization_9_15.html#l-onnx-op-batchnormalization-d9-15), [14/9](text_diff_BatchNormalization_9_14.html#l-onnx-op-batchnormalization-d9-14), [15/7](text_diff_BatchNormalization_7_15.html#l-onnx-op-batchnormalization-d7-15), [14/7](text_diff_BatchNormalization_7_14.html#l-onnx-op-batchnormalization-d7-14), [9/7](text_diff_BatchNormalization_7_9.html#l-onnx-op-batchnormalization-d7-9), [15/6](text_diff_BatchNormalization_6_15.html#l-onnx-op-batchnormalization-d6-15), [14/6](text_diff_BatchNormalization_6_14.html#l-onnx-op-batchnormalization-d6-14), [9/6](text_diff_BatchNormalization_6_9.html#l-onnx-op-batchnormalization-d6-9), [7/6](text_diff_BatchNormalization_6_7.html#l-onnx-op-batchnormalization-d6-7), [15/1](text_diff_BatchNormalization_1_15.html#l-onnx-op-batchnormalization-d1-15), [14/1](text_diff_BatchNormalization_1_14.html#l-onnx-op-batchnormalization-d1-14), [9/1](text_diff_BatchNormalization_1_9.html#l-onnx-op-batchnormalization-d1-9), [7/1](text_diff_BatchNormalization_1_7.html#l-onnx-op-batchnormalization-d1-7), [6/1](text_diff_BatchNormalization_1_6.html#l-onnx-op-batchnormalization-d1-6)
|
[Bernoulli](onnx__Bernoulli.html#l-onnx-doc-bernoulli)
|
[22](onnx__Bernoulli.html#l-onnx-op-bernoulli-22), [15](onnx__Bernoulli.html#l-onnx-op-bernoulli-15)
|
[22/15](text_diff_Bernoulli_15_22.html#l-onnx-op-bernoulli-d15-22)
|
[BitCast](onnx__BitCast.html#l-onnx-doc-bitcast)
|
[26](onnx__BitCast.html#l-onnx-op-bitcast-26)
|
|
[BitShift](onnx__BitShift.html#l-onnx-doc-bitshift)
|
[11](onnx__BitShift.html#l-onnx-op-bitshift-11)
|
|
[BitwiseAnd](onnx__BitwiseAnd.html#l-onnx-doc-bitwiseand)
|
[18](onnx__BitwiseAnd.html#l-onnx-op-bitwiseand-18)
|
|
[BitwiseNot](onnx__BitwiseNot.html#l-onnx-doc-bitwisenot)
|
[18](onnx__BitwiseNot.html#l-onnx-op-bitwisenot-18)
|
|
[BitwiseOr](onnx__BitwiseOr.html#l-onnx-doc-bitwiseor)
|
[18](onnx__BitwiseOr.html#l-onnx-op-bitwiseor-18)
|
|
[BitwiseXor](onnx__BitwiseXor.html#l-onnx-doc-bitwisexor)
|
[18](onnx__BitwiseXor.html#l-onnx-op-bitwisexor-18)
|
|
[BlackmanWindow](onnx__BlackmanWindow.html#l-onnx-doc-blackmanwindow)
|
[17](onnx__BlackmanWindow.html#l-onnx-op-blackmanwindow-17)
|
|
[Cast](onnx__Cast.html#l-onnx-doc-cast)
|
[25](onnx__Cast.html#l-onnx-op-cast-25), [24](onnx__Cast.html#l-onnx-op-cast-24), [23](onnx__Cast.html#l-onnx-op-cast-23), [21](onnx__Cast.html#l-onnx-op-cast-21), [19](onnx__Cast.html#l-onnx-op-cast-19), [13](onnx__Cast.html#l-onnx-op-cast-13), [9](onnx__Cast.html#l-onnx-op-cast-9), [6](onnx__Cast.html#l-onnx-op-cast-6), [1](onnx__Cast.html#l-onnx-op-cast-1)
|
[25/24](text_diff_Cast_24_25.html#l-onnx-op-cast-d24-25), [25/23](text_diff_Cast_23_25.html#l-onnx-op-cast-d23-25), [24/23](text_diff_Cast_23_24.html#l-onnx-op-cast-d23-24), [25/21](text_diff_Cast_21_25.html#l-onnx-op-cast-d21-25), [24/21](text_diff_Cast_21_24.html#l-onnx-op-cast-d21-24), [23/21](text_diff_Cast_21_23.html#l-onnx-op-cast-d21-23), [25/19](text_diff_Cast_19_25.html#l-onnx-op-cast-d19-25), [24/19](text_diff_Cast_19_24.html#l-onnx-op-cast-d19-24), [23/19](text_diff_Cast_19_23.html#l-onnx-op-cast-d19-23), [21/19](text_diff_Cast_19_21.html#l-onnx-op-cast-d19-21), [25/13](text_diff_Cast_13_25.html#l-onnx-op-cast-d13-25), [24/13](text_diff_Cast_13_24.html#l-onnx-op-cast-d13-24), [23/13](text_diff_Cast_13_23.html#l-onnx-op-cast-d13-23), [21/13](text_diff_Cast_13_21.html#l-onnx-op-cast-d13-21), [19/13](text_diff_Cast_13_19.html#l-onnx-op-cast-d13-19), [25/9](text_diff_Cast_9_25.html#l-onnx-op-cast-d9-25), [24/9](text_diff_Cast_9_24.html#l-onnx-op-cast-d9-24), [23/9](text_diff_Cast_9_23.html#l-onnx-op-cast-d9-23), [21/9](text_diff_Cast_9_21.html#l-onnx-op-cast-d9-21), [19/9](text_diff_Cast_9_19.html#l-onnx-op-cast-d9-19), [13/9](text_diff_Cast_9_13.html#l-onnx-op-cast-d9-13), [25/6](text_diff_Cast_6_25.html#l-onnx-op-cast-d6-25), [24/6](text_diff_Cast_6_24.html#l-onnx-op-cast-d6-24), [23/6](text_diff_Cast_6_23.html#l-onnx-op-cast-d6-23), [21/6](text_diff_Cast_6_21.html#l-onnx-op-cast-d6-21), [19/6](text_diff_Cast_6_19.html#l-onnx-op-cast-d6-19), [13/6](text_diff_Cast_6_13.html#l-onnx-op-cast-d6-13), [9/6](text_diff_Cast_6_9.html#l-onnx-op-cast-d6-9), [25/1](text_diff_Cast_1_25.html#l-onnx-op-cast-d1-25), [24/1](text_diff_Cast_1_24.html#l-onnx-op-cast-d1-24), [23/1](text_diff_Cast_1_23.html#l-onnx-op-cast-d1-23), [21/1](text_diff_Cast_1_21.html#l-onnx-op-cast-d1-21), [19/1](text_diff_Cast_1_19.html#l-onnx-op-cast-d1-19), [13/1](text_diff_Cast_1_13.html#l-onnx-op-cast-d1-13), [9/1](text_diff_Cast_1_9.html#l-onnx-op-cast-d1-9), [6/1](text_diff_Cast_1_6.html#l-onnx-op-cast-d1-6)
|
[CastLike](onnx__CastLike.html#l-onnx-doc-castlike)
|
[25](onnx__CastLike.html#l-onnx-op-castlike-25), [24](onnx__CastLike.html#l-onnx-op-castlike-24), [23](onnx__CastLike.html#l-onnx-op-castlike-23), [21](onnx__CastLike.html#l-onnx-op-castlike-21), [19](onnx__CastLike.html#l-onnx-op-castlike-19), [15](onnx__CastLike.html#l-onnx-op-castlike-15)
|
[25/24](text_diff_CastLike_24_25.html#l-onnx-op-castlike-d24-25), [25/23](text_diff_CastLike_23_25.html#l-onnx-op-castlike-d23-25), [24/23](text_diff_CastLike_23_24.html#l-onnx-op-castlike-d23-24), [25/21](text_diff_CastLike_21_25.html#l-onnx-op-castlike-d21-25), [24/21](text_diff_CastLike_21_24.html#l-onnx-op-castlike-d21-24), [23/21](text_diff_CastLike_21_23.html#l-onnx-op-castlike-d21-23), [25/19](text_diff_CastLike_19_25.html#l-onnx-op-castlike-d19-25), [24/19](text_diff_CastLike_19_24.html#l-onnx-op-castlike-d19-24), [23/19](text_diff_CastLike_19_23.html#l-onnx-op-castlike-d19-23), [21/19](text_diff_CastLike_19_21.html#l-onnx-op-castlike-d19-21), [25/15](text_diff_CastLike_15_25.html#l-onnx-op-castlike-d15-25), [24/15](text_diff_CastLike_15_24.html#l-onnx-op-castlike-d15-24), [23/15](text_diff_CastLike_15_23.html#l-onnx-op-castlike-d15-23), [21/15](text_diff_CastLike_15_21.html#l-onnx-op-castlike-d15-21), [19/15](text_diff_CastLike_15_19.html#l-onnx-op-castlike-d15-19)
|
[Ceil](onnx__Ceil.html#l-onnx-doc-ceil)
|
[13](onnx__Ceil.html#l-onnx-op-ceil-13), [6](onnx__Ceil.html#l-onnx-op-ceil-6), [1](onnx__Ceil.html#l-onnx-op-ceil-1)
|
[13/6](text_diff_Ceil_6_13.html#l-onnx-op-ceil-d6-13), [13/1](text_diff_Ceil_1_13.html#l-onnx-op-ceil-d1-13), [6/1](text_diff_Ceil_1_6.html#l-onnx-op-ceil-d1-6)
|
[Celu](onnx__Celu.html#l-onnx-doc-celu)
|
[12](onnx__Celu.html#l-onnx-op-celu-12)
|
|
[CenterCropPad](onnx__CenterCropPad.html#l-onnx-doc-centercroppad)
|
[18](onnx__CenterCropPad.html#l-onnx-op-centercroppad-18)
|
|
[Clip](onnx__Clip.html#l-onnx-doc-clip)
|
[13](onnx__Clip.html#l-onnx-op-clip-13), [12](onnx__Clip.html#l-onnx-op-clip-12), [11](onnx__Clip.html#l-onnx-op-clip-11), [6](onnx__Clip.html#l-onnx-op-clip-6), [1](onnx__Clip.html#l-onnx-op-clip-1)
|
[13/12](text_diff_Clip_12_13.html#l-onnx-op-clip-d12-13), [13/11](text_diff_Clip_11_13.html#l-onnx-op-clip-d11-13), [12/11](text_diff_Clip_11_12.html#l-onnx-op-clip-d11-12), [13/6](text_diff_Clip_6_13.html#l-onnx-op-clip-d6-13), [12/6](text_diff_Clip_6_12.html#l-onnx-op-clip-d6-12), [11/6](text_diff_Clip_6_11.html#l-onnx-op-clip-d6-11), [13/1](text_diff_Clip_1_13.html#l-onnx-op-clip-d1-13), [12/1](text_diff_Clip_1_12.html#l-onnx-op-clip-d1-12), [11/1](text_diff_Clip_1_11.html#l-onnx-op-clip-d1-11), [6/1](text_diff_Clip_1_6.html#l-onnx-op-clip-d1-6)
|
[Col2Im](onnx__Col2Im.html#l-onnx-doc-col2im)
|
[18](onnx__Col2Im.html#l-onnx-op-col2im-18)
|
|
[Compress](onnx__Compress.html#l-onnx-doc-compress)
|
[11](onnx__Compress.html#l-onnx-op-compress-11), [9](onnx__Compress.html#l-onnx-op-compress-9)
|
[11/9](text_diff_Compress_9_11.html#l-onnx-op-compress-d9-11)
|
[Concat](onnx__Concat.html#l-onnx-doc-concat)
|
[13](onnx__Concat.html#l-onnx-op-concat-13), [11](onnx__Concat.html#l-onnx-op-concat-11), [4](onnx__Concat.html#l-onnx-op-concat-4), [1](onnx__Concat.html#l-onnx-op-concat-1)
|
[13/11](text_diff_Concat_11_13.html#l-onnx-op-concat-d11-13), [13/4](text_diff_Concat_4_13.html#l-onnx-op-concat-d4-13), [11/4](text_diff_Concat_4_11.html#l-onnx-op-concat-d4-11), [13/1](text_diff_Concat_1_13.html#l-onnx-op-concat-d1-13), [11/1](text_diff_Concat_1_11.html#l-onnx-op-concat-d1-11), [4/1](text_diff_Concat_1_4.html#l-onnx-op-concat-d1-4)
|
[ConcatFromSequence](onnx__ConcatFromSequence.html#l-onnx-doc-concatfromsequence)
|
[11](onnx__ConcatFromSequence.html#l-onnx-op-concatfromsequence-11)
|
|
[Constant](onnx__Constant.html#l-onnx-doc-constant)
|
[25](onnx__Constant.html#l-onnx-op-constant-25), [24](onnx__Constant.html#l-onnx-op-constant-24), [23](onnx__Constant.html#l-onnx-op-constant-23), [21](onnx__Constant.html#l-onnx-op-constant-21), [19](onnx__Constant.html#l-onnx-op-constant-19), [13](onnx__Constant.html#l-onnx-op-constant-13), [12](onnx__Constant.html#l-onnx-op-constant-12), [11](onnx__Constant.html#l-onnx-op-constant-11), [9](onnx__Constant.html#l-onnx-op-constant-9), [1](onnx__Constant.html#l-onnx-op-constant-1)
|
[25/24](text_diff_Constant_24_25.html#l-onnx-op-constant-d24-25), [25/23](text_diff_Constant_23_25.html#l-onnx-op-constant-d23-25), [24/23](text_diff_Constant_23_24.html#l-onnx-op-constant-d23-24), [25/21](text_diff_Constant_21_25.html#l-onnx-op-constant-d21-25), [24/21](text_diff_Constant_21_24.html#l-onnx-op-constant-d21-24), [23/21](text_diff_Constant_21_23.html#l-onnx-op-constant-d21-23), [25/19](text_diff_Constant_19_25.html#l-onnx-op-constant-d19-25), [24/19](text_diff_Constant_19_24.html#l-onnx-op-constant-d19-24), [23/19](text_diff_Constant_19_23.html#l-onnx-op-constant-d19-23), [21/19](text_diff_Constant_19_21.html#l-onnx-op-constant-d19-21), [25/13](text_diff_Constant_13_25.html#l-onnx-op-constant-d13-25), [24/13](text_diff_Constant_13_24.html#l-onnx-op-constant-d13-24), [23/13](text_diff_Constant_13_23.html#l-onnx-op-constant-d13-23), [21/13](text_diff_Constant_13_21.html#l-onnx-op-constant-d13-21), [19/13](text_diff_Constant_13_19.html#l-onnx-op-constant-d13-19), [25/12](text_diff_Constant_12_25.html#l-onnx-op-constant-d12-25), [24/12](text_diff_Constant_12_24.html#l-onnx-op-constant-d12-24), [23/12](text_diff_Constant_12_23.html#l-onnx-op-constant-d12-23), [21/12](text_diff_Constant_12_21.html#l-onnx-op-constant-d12-21), [19/12](text_diff_Constant_12_19.html#l-onnx-op-constant-d12-19), [13/12](text_diff_Constant_12_13.html#l-onnx-op-constant-d12-13), [25/11](text_diff_Constant_11_25.html#l-onnx-op-constant-d11-25), [24/11](text_diff_Constant_11_24.html#l-onnx-op-constant-d11-24), [23/11](text_diff_Constant_11_23.html#l-onnx-op-constant-d11-23), [21/11](text_diff_Constant_11_21.html#l-onnx-op-constant-d11-21), [19/11](text_diff_Constant_11_19.html#l-onnx-op-constant-d11-19), [13/11](text_diff_Constant_11_13.html#l-onnx-op-constant-d11-13), [12/11](text_diff_Constant_11_12.html#l-onnx-op-constant-d11-12), [25/9](text_diff_Constant_9_25.html#l-onnx-op-constant-d9-25), [24/9](text_diff_Constant_9_24.html#l-onnx-op-constant-d9-24), [23/9](text_diff_Constant_9_23.html#l-onnx-op-constant-d9-23), [21/9](text_diff_Constant_9_21.html#l-onnx-op-constant-d9-21), [19/9](text_diff_Constant_9_19.html#l-onnx-op-constant-d9-19), [13/9](text_diff_Constant_9_13.html#l-onnx-op-constant-d9-13), [12/9](text_diff_Constant_9_12.html#l-onnx-op-constant-d9-12), [11/9](text_diff_Constant_9_11.html#l-onnx-op-constant-d9-11), [25/1](text_diff_Constant_1_25.html#l-onnx-op-constant-d1-25), [24/1](text_diff_Constant_1_24.html#l-onnx-op-constant-d1-24), [23/1](text_diff_Constant_1_23.html#l-onnx-op-constant-d1-23), [21/1](text_diff_Constant_1_21.html#l-onnx-op-constant-d1-21), [19/1](text_diff_Constant_1_19.html#l-onnx-op-constant-d1-19), [13/1](text_diff_Constant_1_13.html#l-onnx-op-constant-d1-13), [12/1](text_diff_Constant_1_12.html#l-onnx-op-constant-d1-12), [11/1](text_diff_Constant_1_11.html#l-onnx-op-constant-d1-11), [9/1](text_diff_Constant_1_9.html#l-onnx-op-constant-d1-9)
|
[ConstantOfShape](onnx__ConstantOfShape.html#l-onnx-doc-constantofshape)
|
[25](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-25), [24](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-24), [23](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-23), [21](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-21), [20](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-20), [9](onnx__ConstantOfShape.html#l-onnx-op-constantofshape-9)
|
[25/24](text_diff_ConstantOfShape_24_25.html#l-onnx-op-constantofshape-d24-25), [25/23](text_diff_ConstantOfShape_23_25.html#l-onnx-op-constantofshape-d23-25), [24/23](text_diff_ConstantOfShape_23_24.html#l-onnx-op-constantofshape-d23-24), [25/21](text_diff_ConstantOfShape_21_25.html#l-onnx-op-constantofshape-d21-25), [24/21](text_diff_ConstantOfShape_21_24.html#l-onnx-op-constantofshape-d21-24), [23/21](text_diff_ConstantOfShape_21_23.html#l-onnx-op-constantofshape-d21-23), [25/20](text_diff_ConstantOfShape_20_25.html#l-onnx-op-constantofshape-d20-25), [24/20](text_diff_ConstantOfShape_20_24.html#l-onnx-op-constantofshape-d20-24), [23/20](text_diff_ConstantOfShape_20_23.html#l-onnx-op-constantofshape-d20-23), [21/20](text_diff_ConstantOfShape_20_21.html#l-onnx-op-constantofshape-d20-21), [25/9](text_diff_ConstantOfShape_9_25.html#l-onnx-op-constantofshape-d9-25), [24/9](text_diff_ConstantOfShape_9_24.html#l-onnx-op-constantofshape-d9-24), [23/9](text_diff_ConstantOfShape_9_23.html#l-onnx-op-constantofshape-d9-23), [21/9](text_diff_ConstantOfShape_9_21.html#l-onnx-op-constantofshape-d9-21), [20/9](text_diff_ConstantOfShape_9_20.html#l-onnx-op-constantofshape-d9-20)
|
[Conv](onnx__Conv.html#l-onnx-doc-conv)
|
[22](onnx__Conv.html#l-onnx-op-conv-22), [11](onnx__Conv.html#l-onnx-op-conv-11), [1](onnx__Conv.html#l-onnx-op-conv-1)
|
[22/11](text_diff_Conv_11_22.html#l-onnx-op-conv-d11-22), [22/1](text_diff_Conv_1_22.html#l-onnx-op-conv-d1-22), [11/1](text_diff_Conv_1_11.html#l-onnx-op-conv-d1-11)
|
[ConvInteger](onnx__ConvInteger.html#l-onnx-doc-convinteger)
|
[10](onnx__ConvInteger.html#l-onnx-op-convinteger-10)
|
|
[ConvTranspose](onnx__ConvTranspose.html#l-onnx-doc-convtranspose)
|
[22](onnx__ConvTranspose.html#l-onnx-op-convtranspose-22), [11](onnx__ConvTranspose.html#l-onnx-op-convtranspose-11), [1](onnx__ConvTranspose.html#l-onnx-op-convtranspose-1)
|
[22/11](text_diff_ConvTranspose_11_22.html#l-onnx-op-convtranspose-d11-22), [22/1](text_diff_ConvTranspose_1_22.html#l-onnx-op-convtranspose-d1-22), [11/1](text_diff_ConvTranspose_1_11.html#l-onnx-op-convtranspose-d1-11)
|
[Cos](onnx__Cos.html#l-onnx-doc-cos)
|
[22](onnx__Cos.html#l-onnx-op-cos-22), [7](onnx__Cos.html#l-onnx-op-cos-7)
|
[22/7](text_diff_Cos_7_22.html#l-onnx-op-cos-d7-22)
|
[Cosh](onnx__Cosh.html#l-onnx-doc-cosh)
|
[22](onnx__Cosh.html#l-onnx-op-cosh-22), [9](onnx__Cosh.html#l-onnx-op-cosh-9)
|
[22/9](text_diff_Cosh_9_22.html#l-onnx-op-cosh-d9-22)
|
[CumProd](onnx__CumProd.html#l-onnx-doc-cumprod)
|
[26](onnx__CumProd.html#l-onnx-op-cumprod-26)
|
|
[CumSum](onnx__CumSum.html#l-onnx-doc-cumsum)
|
[14](onnx__CumSum.html#l-onnx-op-cumsum-14), [11](onnx__CumSum.html#l-onnx-op-cumsum-11)
|
[14/11](text_diff_CumSum_11_14.html#l-onnx-op-cumsum-d11-14)
|
[DFT](onnx__DFT.html#l-onnx-doc-dft)
|
[20](onnx__DFT.html#l-onnx-op-dft-20), [17](onnx__DFT.html#l-onnx-op-dft-17)
|
[20/17](text_diff_DFT_17_20.html#l-onnx-op-dft-d17-20)
|
[DeformConv](onnx__DeformConv.html#l-onnx-doc-deformconv)
|
[22](onnx__DeformConv.html#l-onnx-op-deformconv-22), [19](onnx__DeformConv.html#l-onnx-op-deformconv-19)
|
[22/19](text_diff_DeformConv_19_22.html#l-onnx-op-deformconv-d19-22)
|
[DepthToSpace](onnx__DepthToSpace.html#l-onnx-doc-depthtospace)
|
[13](onnx__DepthToSpace.html#l-onnx-op-depthtospace-13), [11](onnx__DepthToSpace.html#l-onnx-op-depthtospace-11), [1](onnx__DepthToSpace.html#l-onnx-op-depthtospace-1)
|
[13/11](text_diff_DepthToSpace_11_13.html#l-onnx-op-depthtospace-d11-13), [13/1](text_diff_DepthToSpace_1_13.html#l-onnx-op-depthtospace-d1-13), [11/1](text_diff_DepthToSpace_1_11.html#l-onnx-op-depthtospace-d1-11)
|
[DequantizeLinear](onnx__DequantizeLinear.html#l-onnx-doc-dequantizelinear)
|
[25](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-25), [24](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-24), [23](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-23), [21](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-21), [19](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-19), [13](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-13), [10](onnx__DequantizeLinear.html#l-onnx-op-dequantizelinear-10)
|
[25/24](text_diff_DequantizeLinear_24_25.html#l-onnx-op-dequantizelinear-d24-25), [25/23](text_diff_DequantizeLinear_23_25.html#l-onnx-op-dequantizelinear-d23-25), [24/23](text_diff_DequantizeLinear_23_24.html#l-onnx-op-dequantizelinear-d23-24), [25/21](text_diff_DequantizeLinear_21_25.html#l-onnx-op-dequantizelinear-d21-25), [24/21](text_diff_DequantizeLinear_21_24.html#l-onnx-op-dequantizelinear-d21-24), [23/21](text_diff_DequantizeLinear_21_23.html#l-onnx-op-dequantizelinear-d21-23), [25/19](text_diff_DequantizeLinear_19_25.html#l-onnx-op-dequantizelinear-d19-25), [24/19](text_diff_DequantizeLinear_19_24.html#l-onnx-op-dequantizelinear-d19-24), [23/19](text_diff_DequantizeLinear_19_23.html#l-onnx-op-dequantizelinear-d19-23), [21/19](text_diff_DequantizeLinear_19_21.html#l-onnx-op-dequantizelinear-d19-21), [25/13](text_diff_DequantizeLinear_13_25.html#l-onnx-op-dequantizelinear-d13-25), [24/13](text_diff_DequantizeLinear_13_24.html#l-onnx-op-dequantizelinear-d13-24), [23/13](text_diff_DequantizeLinear_13_23.html#l-onnx-op-dequantizelinear-d13-23), [21/13](text_diff_DequantizeLinear_13_21.html#l-onnx-op-dequantizelinear-d13-21), [19/13](text_diff_DequantizeLinear_13_19.html#l-onnx-op-dequantizelinear-d13-19), [25/10](text_diff_DequantizeLinear_10_25.html#l-onnx-op-dequantizelinear-d10-25), [24/10](text_diff_DequantizeLinear_10_24.html#l-onnx-op-dequantizelinear-d10-24), [23/10](text_diff_DequantizeLinear_10_23.html#l-onnx-op-dequantizelinear-d10-23), [21/10](text_diff_DequantizeLinear_10_21.html#l-onnx-op-dequantizelinear-d10-21), [19/10](text_diff_DequantizeLinear_10_19.html#l-onnx-op-dequantizelinear-d10-19), [13/10](text_diff_DequantizeLinear_10_13.html#l-onnx-op-dequantizelinear-d10-13)
|
[Det](onnx__Det.html#l-onnx-doc-det)
|
[22](onnx__Det.html#l-onnx-op-det-22), [11](onnx__Det.html#l-onnx-op-det-11)
|
[22/11](text_diff_Det_11_22.html#l-onnx-op-det-d11-22)
|
[Div](onnx__Div.html#l-onnx-doc-div)
|
[14](onnx__Div.html#l-onnx-op-div-14), [13](onnx__Div.html#l-onnx-op-div-13), [7](onnx__Div.html#l-onnx-op-div-7), [6](onnx__Div.html#l-onnx-op-div-6), [1](onnx__Div.html#l-onnx-op-div-1)
|
[14/13](text_diff_Div_13_14.html#l-onnx-op-div-d13-14), [14/7](text_diff_Div_7_14.html#l-onnx-op-div-d7-14), [13/7](text_diff_Div_7_13.html#l-onnx-op-div-d7-13), [14/6](text_diff_Div_6_14.html#l-onnx-op-div-d6-14), [13/6](text_diff_Div_6_13.html#l-onnx-op-div-d6-13), [7/6](text_diff_Div_6_7.html#l-onnx-op-div-d6-7), [14/1](text_diff_Div_1_14.html#l-onnx-op-div-d1-14), [13/1](text_diff_Div_1_13.html#l-onnx-op-div-d1-13), [7/1](text_diff_Div_1_7.html#l-onnx-op-div-d1-7), [6/1](text_diff_Div_1_6.html#l-onnx-op-div-d1-6)
|
[Dropout](onnx__Dropout.html#l-onnx-doc-dropout)
|
[22](onnx__Dropout.html#l-onnx-op-dropout-22), [13](onnx__Dropout.html#l-onnx-op-dropout-13), [12](onnx__Dropout.html#l-onnx-op-dropout-12), [10](onnx__Dropout.html#l-onnx-op-dropout-10), [7](onnx__Dropout.html#l-onnx-op-dropout-7), [6](onnx__Dropout.html#l-onnx-op-dropout-6), [1](onnx__Dropout.html#l-onnx-op-dropout-1)
|
[22/13](text_diff_Dropout_13_22.html#l-onnx-op-dropout-d13-22), [22/12](text_diff_Dropout_12_22.html#l-onnx-op-dropout-d12-22), [13/12](text_diff_Dropout_12_13.html#l-onnx-op-dropout-d12-13), [22/10](text_diff_Dropout_10_22.html#l-onnx-op-dropout-d10-22), [13/10](text_diff_Dropout_10_13.html#l-onnx-op-dropout-d10-13), [12/10](text_diff_Dropout_10_12.html#l-onnx-op-dropout-d10-12), [22/7](text_diff_Dropout_7_22.html#l-onnx-op-dropout-d7-22), [13/7](text_diff_Dropout_7_13.html#l-onnx-op-dropout-d7-13), [12/7](text_diff_Dropout_7_12.html#l-onnx-op-dropout-d7-12), [10/7](text_diff_Dropout_7_10.html#l-onnx-op-dropout-d7-10), [22/6](text_diff_Dropout_6_22.html#l-onnx-op-dropout-d6-22), [13/6](text_diff_Dropout_6_13.html#l-onnx-op-dropout-d6-13), [12/6](text_diff_Dropout_6_12.html#l-onnx-op-dropout-d6-12), [10/6](text_diff_Dropout_6_10.html#l-onnx-op-dropout-d6-10), [7/6](text_diff_Dropout_6_7.html#l-onnx-op-dropout-d6-7), [22/1](text_diff_Dropout_1_22.html#l-onnx-op-dropout-d1-22), [13/1](text_diff_Dropout_1_13.html#l-onnx-op-dropout-d1-13), [12/1](text_diff_Dropout_1_12.html#l-onnx-op-dropout-d1-12), [10/1](text_diff_Dropout_1_10.html#l-onnx-op-dropout-d1-10), [7/1](text_diff_Dropout_1_7.html#l-onnx-op-dropout-d1-7), [6/1](text_diff_Dropout_1_6.html#l-onnx-op-dropout-d1-6)
|
[DynamicQuantizeLinear](onnx__DynamicQuantizeLinear.html#l-onnx-doc-dynamicquantizelinear)
|
[11](onnx__DynamicQuantizeLinear.html#l-onnx-op-dynamicquantizelinear-11)
|
|
[Einsum](onnx__Einsum.html#l-onnx-doc-einsum)
|
[12](onnx__Einsum.html#l-onnx-op-einsum-12)
|
|
[Elu](onnx__Elu.html#l-onnx-doc-elu)
|
[22](onnx__Elu.html#l-onnx-op-elu-22), [6](onnx__Elu.html#l-onnx-op-elu-6), [1](onnx__Elu.html#l-onnx-op-elu-1)
|
[22/6](text_diff_Elu_6_22.html#l-onnx-op-elu-d6-22), [22/1](text_diff_Elu_1_22.html#l-onnx-op-elu-d1-22), [6/1](text_diff_Elu_1_6.html#l-onnx-op-elu-d1-6)
|
[Equal](onnx__Equal.html#l-onnx-doc-equal)
|
[19](onnx__Equal.html#l-onnx-op-equal-19), [13](onnx__Equal.html#l-onnx-op-equal-13), [11](onnx__Equal.html#l-onnx-op-equal-11), [7](onnx__Equal.html#l-onnx-op-equal-7), [1](onnx__Equal.html#l-onnx-op-equal-1)
|
[19/13](text_diff_Equal_13_19.html#l-onnx-op-equal-d13-19), [19/11](text_diff_Equal_11_19.html#l-onnx-op-equal-d11-19), [13/11](text_diff_Equal_11_13.html#l-onnx-op-equal-d11-13), [19/7](text_diff_Equal_7_19.html#l-onnx-op-equal-d7-19), [13/7](text_diff_Equal_7_13.html#l-onnx-op-equal-d7-13), [11/7](text_diff_Equal_7_11.html#l-onnx-op-equal-d7-11), [19/1](text_diff_Equal_1_19.html#l-onnx-op-equal-d1-19), [13/1](text_diff_Equal_1_13.html#l-onnx-op-equal-d1-13), [11/1](text_diff_Equal_1_11.html#l-onnx-op-equal-d1-11), [7/1](text_diff_Equal_1_7.html#l-onnx-op-equal-d1-7)
|
[Erf](onnx__Erf.html#l-onnx-doc-erf)
|
[13](onnx__Erf.html#l-onnx-op-erf-13), [9](onnx__Erf.html#l-onnx-op-erf-9)
|
[13/9](text_diff_Erf_9_13.html#l-onnx-op-erf-d9-13)
|
[Exp](onnx__Exp.html#l-onnx-doc-exp)
|
[13](onnx__Exp.html#l-onnx-op-exp-13), [6](onnx__Exp.html#l-onnx-op-exp-6), [1](onnx__Exp.html#l-onnx-op-exp-1)
|
[13/6](text_diff_Exp_6_13.html#l-onnx-op-exp-d6-13), [13/1](text_diff_Exp_1_13.html#l-onnx-op-exp-d1-13), [6/1](text_diff_Exp_1_6.html#l-onnx-op-exp-d1-6)
|
[Expand](onnx__Expand.html#l-onnx-doc-expand)
|
[13](onnx__Expand.html#l-onnx-op-expand-13), [8](onnx__Expand.html#l-onnx-op-expand-8)
|
[13/8](text_diff_Expand_8_13.html#l-onnx-op-expand-d8-13)
|
[EyeLike](onnx__EyeLike.html#l-onnx-doc-eyelike)
|
[22](onnx__EyeLike.html#l-onnx-op-eyelike-22), [9](onnx__EyeLike.html#l-onnx-op-eyelike-9)
|
[22/9](text_diff_EyeLike_9_22.html#l-onnx-op-eyelike-d9-22)
|
[Flatten](onnx__Flatten.html#l-onnx-doc-flatten)
|
[25](onnx__Flatten.html#l-onnx-op-flatten-25), [24](onnx__Flatten.html#l-onnx-op-flatten-24), [23](onnx__Flatten.html#l-onnx-op-flatten-23), [21](onnx__Flatten.html#l-onnx-op-flatten-21), [13](onnx__Flatten.html#l-onnx-op-flatten-13), [11](onnx__Flatten.html#l-onnx-op-flatten-11), [9](onnx__Flatten.html#l-onnx-op-flatten-9), [1](onnx__Flatten.html#l-onnx-op-flatten-1)
|
[25/24](text_diff_Flatten_24_25.html#l-onnx-op-flatten-d24-25), [25/23](text_diff_Flatten_23_25.html#l-onnx-op-flatten-d23-25), [24/23](text_diff_Flatten_23_24.html#l-onnx-op-flatten-d23-24), [25/21](text_diff_Flatten_21_25.html#l-onnx-op-flatten-d21-25), [24/21](text_diff_Flatten_21_24.html#l-onnx-op-flatten-d21-24), [23/21](text_diff_Flatten_21_23.html#l-onnx-op-flatten-d21-23), [25/13](text_diff_Flatten_13_25.html#l-onnx-op-flatten-d13-25), [24/13](text_diff_Flatten_13_24.html#l-onnx-op-flatten-d13-24), [23/13](text_diff_Flatten_13_23.html#l-onnx-op-flatten-d13-23), [21/13](text_diff_Flatten_13_21.html#l-onnx-op-flatten-d13-21), [25/11](text_diff_Flatten_11_25.html#l-onnx-op-flatten-d11-25), [24/11](text_diff_Flatten_11_24.html#l-onnx-op-flatten-d11-24), [23/11](text_diff_Flatten_11_23.html#l-onnx-op-flatten-d11-23), [21/11](text_diff_Flatten_11_21.html#l-onnx-op-flatten-d11-21), [13/11](text_diff_Flatten_11_13.html#l-onnx-op-flatten-d11-13), [25/9](text_diff_Flatten_9_25.html#l-onnx-op-flatten-d9-25), [24/9](text_diff_Flatten_9_24.html#l-onnx-op-flatten-d9-24), [23/9](text_diff_Flatten_9_23.html#l-onnx-op-flatten-d9-23), [21/9](text_diff_Flatten_9_21.html#l-onnx-op-flatten-d9-21), [13/9](text_diff_Flatten_9_13.html#l-onnx-op-flatten-d9-13), [11/9](text_diff_Flatten_9_11.html#l-onnx-op-flatten-d9-11), [25/1](text_diff_Flatten_1_25.html#l-onnx-op-flatten-d1-25), [24/1](text_diff_Flatten_1_24.html#l-onnx-op-flatten-d1-24), [23/1](text_diff_Flatten_1_23.html#l-onnx-op-flatten-d1-23), [21/1](text_diff_Flatten_1_21.html#l-onnx-op-flatten-d1-21), [13/1](text_diff_Flatten_1_13.html#l-onnx-op-flatten-d1-13), [11/1](text_diff_Flatten_1_11.html#l-onnx-op-flatten-d1-11), [9/1](text_diff_Flatten_1_9.html#l-onnx-op-flatten-d1-9)
|
[Floor](onnx__Floor.html#l-onnx-doc-floor)
|
[13](onnx__Floor.html#l-onnx-op-floor-13), [6](onnx__Floor.html#l-onnx-op-floor-6), [1](onnx__Floor.html#l-onnx-op-floor-1)
|
[13/6](text_diff_Floor_6_13.html#l-onnx-op-floor-d6-13), [13/1](text_diff_Floor_1_13.html#l-onnx-op-floor-d1-13), [6/1](text_diff_Floor_1_6.html#l-onnx-op-floor-d1-6)
|
[GRU](onnx__GRU.html#l-onnx-doc-gru)
|
[22](onnx__GRU.html#l-onnx-op-gru-22), [14](onnx__GRU.html#l-onnx-op-gru-14), [7](onnx__GRU.html#l-onnx-op-gru-7), [3](onnx__GRU.html#l-onnx-op-gru-3), [1](onnx__GRU.html#l-onnx-op-gru-1)
|
[22/14](text_diff_GRU_14_22.html#l-onnx-op-gru-d14-22), [22/7](text_diff_GRU_7_22.html#l-onnx-op-gru-d7-22), [14/7](text_diff_GRU_7_14.html#l-onnx-op-gru-d7-14), [22/3](text_diff_GRU_3_22.html#l-onnx-op-gru-d3-22), [14/3](text_diff_GRU_3_14.html#l-onnx-op-gru-d3-14), [7/3](text_diff_GRU_3_7.html#l-onnx-op-gru-d3-7), [22/1](text_diff_GRU_1_22.html#l-onnx-op-gru-d1-22), [14/1](text_diff_GRU_1_14.html#l-onnx-op-gru-d1-14), [7/1](text_diff_GRU_1_7.html#l-onnx-op-gru-d1-7), [3/1](text_diff_GRU_1_3.html#l-onnx-op-gru-d1-3)
|
[Gather](onnx__Gather.html#l-onnx-doc-gather)
|
[13](onnx__Gather.html#l-onnx-op-gather-13), [11](onnx__Gather.html#l-onnx-op-gather-11), [1](onnx__Gather.html#l-onnx-op-gather-1)
|
[13/11](text_diff_Gather_11_13.html#l-onnx-op-gather-d11-13), [13/1](text_diff_Gather_1_13.html#l-onnx-op-gather-d1-13), [11/1](text_diff_Gather_1_11.html#l-onnx-op-gather-d1-11)
|
[GatherElements](onnx__GatherElements.html#l-onnx-doc-gatherelements)
|
[13](onnx__GatherElements.html#l-onnx-op-gatherelements-13), [11](onnx__GatherElements.html#l-onnx-op-gatherelements-11)
|
[13/11](text_diff_GatherElements_11_13.html#l-onnx-op-gatherelements-d11-13)
|
[GatherND](onnx__GatherND.html#l-onnx-doc-gathernd)
|
[13](onnx__GatherND.html#l-onnx-op-gathernd-13), [12](onnx__GatherND.html#l-onnx-op-gathernd-12), [11](onnx__GatherND.html#l-onnx-op-gathernd-11)
|
[13/12](text_diff_GatherND_12_13.html#l-onnx-op-gathernd-d12-13), [13/11](text_diff_GatherND_11_13.html#l-onnx-op-gathernd-d11-13), [12/11](text_diff_GatherND_11_12.html#l-onnx-op-gathernd-d11-12)
|
[Gelu](onnx__Gelu.html#l-onnx-doc-gelu)
|
[20](onnx__Gelu.html#l-onnx-op-gelu-20)
|
|
[Gemm](onnx__Gemm.html#l-onnx-doc-gemm)
|
[13](onnx__Gemm.html#l-onnx-op-gemm-13), [11](onnx__Gemm.html#l-onnx-op-gemm-11), [9](onnx__Gemm.html#l-onnx-op-gemm-9), [7](onnx__Gemm.html#l-onnx-op-gemm-7), [6](onnx__Gemm.html#l-onnx-op-gemm-6), [1](onnx__Gemm.html#l-onnx-op-gemm-1)
|
[13/11](text_diff_Gemm_11_13.html#l-onnx-op-gemm-d11-13), [13/9](text_diff_Gemm_9_13.html#l-onnx-op-gemm-d9-13), [11/9](text_diff_Gemm_9_11.html#l-onnx-op-gemm-d9-11), [13/7](text_diff_Gemm_7_13.html#l-onnx-op-gemm-d7-13), [11/7](text_diff_Gemm_7_11.html#l-onnx-op-gemm-d7-11), [9/7](text_diff_Gemm_7_9.html#l-onnx-op-gemm-d7-9), [13/6](text_diff_Gemm_6_13.html#l-onnx-op-gemm-d6-13), [11/6](text_diff_Gemm_6_11.html#l-onnx-op-gemm-d6-11), [9/6](text_diff_Gemm_6_9.html#l-onnx-op-gemm-d6-9), [7/6](text_diff_Gemm_6_7.html#l-onnx-op-gemm-d6-7), [13/1](text_diff_Gemm_1_13.html#l-onnx-op-gemm-d1-13), [11/1](text_diff_Gemm_1_11.html#l-onnx-op-gemm-d1-11), [9/1](text_diff_Gemm_1_9.html#l-onnx-op-gemm-d1-9), [7/1](text_diff_Gemm_1_7.html#l-onnx-op-gemm-d1-7), [6/1](text_diff_Gemm_1_6.html#l-onnx-op-gemm-d1-6)
|
[GlobalAveragePool](onnx__GlobalAveragePool.html#l-onnx-doc-globalaveragepool)
|
[22](onnx__GlobalAveragePool.html#l-onnx-op-globalaveragepool-22), [1](onnx__GlobalAveragePool.html#l-onnx-op-globalaveragepool-1)
|
[22/1](text_diff_GlobalAveragePool_1_22.html#l-onnx-op-globalaveragepool-d1-22)
|
[GlobalLpPool](onnx__GlobalLpPool.html#l-onnx-doc-globallppool)
|
[22](onnx__GlobalLpPool.html#l-onnx-op-globallppool-22), [2](onnx__GlobalLpPool.html#l-onnx-op-globallppool-2), [1](onnx__GlobalLpPool.html#l-onnx-op-globallppool-1)
|
[22/2](text_diff_GlobalLpPool_2_22.html#l-onnx-op-globallppool-d2-22), [22/1](text_diff_GlobalLpPool_1_22.html#l-onnx-op-globallppool-d1-22), [2/1](text_diff_GlobalLpPool_1_2.html#l-onnx-op-globallppool-d1-2)
|
[GlobalMaxPool](onnx__GlobalMaxPool.html#l-onnx-doc-globalmaxpool)
|
[22](onnx__GlobalMaxPool.html#l-onnx-op-globalmaxpool-22), [1](onnx__GlobalMaxPool.html#l-onnx-op-globalmaxpool-1)
|
[22/1](text_diff_GlobalMaxPool_1_22.html#l-onnx-op-globalmaxpool-d1-22)
|
[Greater](onnx__Greater.html#l-onnx-doc-greater)
|
[13](onnx__Greater.html#l-onnx-op-greater-13), [9](onnx__Greater.html#l-onnx-op-greater-9), [7](onnx__Greater.html#l-onnx-op-greater-7), [1](onnx__Greater.html#l-onnx-op-greater-1)
|
[13/9](text_diff_Greater_9_13.html#l-onnx-op-greater-d9-13), [13/7](text_diff_Greater_7_13.html#l-onnx-op-greater-d7-13), [9/7](text_diff_Greater_7_9.html#l-onnx-op-greater-d7-9), [13/1](text_diff_Greater_1_13.html#l-onnx-op-greater-d1-13), [9/1](text_diff_Greater_1_9.html#l-onnx-op-greater-d1-9), [7/1](text_diff_Greater_1_7.html#l-onnx-op-greater-d1-7)
|
[GreaterOrEqual](onnx__GreaterOrEqual.html#l-onnx-doc-greaterorequal)
|
[16](onnx__GreaterOrEqual.html#l-onnx-op-greaterorequal-16), [12](onnx__GreaterOrEqual.html#l-onnx-op-greaterorequal-12)
|
[16/12](text_diff_GreaterOrEqual_12_16.html#l-onnx-op-greaterorequal-d12-16)
|
[GridSample](onnx__GridSample.html#l-onnx-doc-gridsample)
|
[22](onnx__GridSample.html#l-onnx-op-gridsample-22), [20](onnx__GridSample.html#l-onnx-op-gridsample-20), [16](onnx__GridSample.html#l-onnx-op-gridsample-16)
|
[22/20](text_diff_GridSample_20_22.html#l-onnx-op-gridsample-d20-22), [22/16](text_diff_GridSample_16_22.html#l-onnx-op-gridsample-d16-22), [20/16](text_diff_GridSample_16_20.html#l-onnx-op-gridsample-d16-20)
|
[GroupNormalization](onnx__GroupNormalization.html#l-onnx-doc-groupnormalization)
|
[21](onnx__GroupNormalization.html#l-onnx-op-groupnormalization-21), [18](onnx__GroupNormalization.html#l-onnx-op-groupnormalization-18)
|
[21/18](text_diff_GroupNormalization_18_21.html#l-onnx-op-groupnormalization-d18-21)
|
[HammingWindow](onnx__HammingWindow.html#l-onnx-doc-hammingwindow)
|
[17](onnx__HammingWindow.html#l-onnx-op-hammingwindow-17)
|
|
[HannWindow](onnx__HannWindow.html#l-onnx-doc-hannwindow)
|
[17](onnx__HannWindow.html#l-onnx-op-hannwindow-17)
|
|
[HardSigmoid](onnx__HardSigmoid.html#l-onnx-doc-hardsigmoid)
|
[22](onnx__HardSigmoid.html#l-onnx-op-hardsigmoid-22), [6](onnx__HardSigmoid.html#l-onnx-op-hardsigmoid-6), [1](onnx__HardSigmoid.html#l-onnx-op-hardsigmoid-1)
|
[22/6](text_diff_HardSigmoid_6_22.html#l-onnx-op-hardsigmoid-d6-22), [22/1](text_diff_HardSigmoid_1_22.html#l-onnx-op-hardsigmoid-d1-22), [6/1](text_diff_HardSigmoid_1_6.html#l-onnx-op-hardsigmoid-d1-6)
|
[HardSwish](onnx__HardSwish.html#l-onnx-doc-hardswish)
|
[22](onnx__HardSwish.html#l-onnx-op-hardswish-22), [14](onnx__HardSwish.html#l-onnx-op-hardswish-14)
|
[22/14](text_diff_HardSwish_14_22.html#l-onnx-op-hardswish-d14-22)
|
[Hardmax](onnx__Hardmax.html#l-onnx-doc-hardmax)
|
[13](onnx__Hardmax.html#l-onnx-op-hardmax-13), [11](onnx__Hardmax.html#l-onnx-op-hardmax-11), [1](onnx__Hardmax.html#l-onnx-op-hardmax-1)
|
[13/11](text_diff_Hardmax_11_13.html#l-onnx-op-hardmax-d11-13), [13/1](text_diff_Hardmax_1_13.html#l-onnx-op-hardmax-d1-13), [11/1](text_diff_Hardmax_1_11.html#l-onnx-op-hardmax-d1-11)
|
[Identity](onnx__Identity.html#l-onnx-doc-identity)
|
[25](onnx__Identity.html#l-onnx-op-identity-25), [24](onnx__Identity.html#l-onnx-op-identity-24), [23](onnx__Identity.html#l-onnx-op-identity-23), [21](onnx__Identity.html#l-onnx-op-identity-21), [19](onnx__Identity.html#l-onnx-op-identity-19), [16](onnx__Identity.html#l-onnx-op-identity-16), [14](onnx__Identity.html#l-onnx-op-identity-14), [13](onnx__Identity.html#l-onnx-op-identity-13), [1](onnx__Identity.html#l-onnx-op-identity-1)
|
[25/24](text_diff_Identity_24_25.html#l-onnx-op-identity-d24-25), [25/23](text_diff_Identity_23_25.html#l-onnx-op-identity-d23-25), [24/23](text_diff_Identity_23_24.html#l-onnx-op-identity-d23-24), [25/21](text_diff_Identity_21_25.html#l-onnx-op-identity-d21-25), [24/21](text_diff_Identity_21_24.html#l-onnx-op-identity-d21-24), [23/21](text_diff_Identity_21_23.html#l-onnx-op-identity-d21-23), [25/19](text_diff_Identity_19_25.html#l-onnx-op-identity-d19-25), [24/19](text_diff_Identity_19_24.html#l-onnx-op-identity-d19-24), [23/19](text_diff_Identity_19_23.html#l-onnx-op-identity-d19-23), [21/19](text_diff_Identity_19_21.html#l-onnx-op-identity-d19-21), [25/16](text_diff_Identity_16_25.html#l-onnx-op-identity-d16-25), [24/16](text_diff_Identity_16_24.html#l-onnx-op-identity-d16-24), [23/16](text_diff_Identity_16_23.html#l-onnx-op-identity-d16-23), [21/16](text_diff_Identity_16_21.html#l-onnx-op-identity-d16-21), [19/16](text_diff_Identity_16_19.html#l-onnx-op-identity-d16-19), [25/14](text_diff_Identity_14_25.html#l-onnx-op-identity-d14-25), [24/14](text_diff_Identity_14_24.html#l-onnx-op-identity-d14-24), [23/14](text_diff_Identity_14_23.html#l-onnx-op-identity-d14-23), [21/14](text_diff_Identity_14_21.html#l-onnx-op-identity-d14-21), [19/14](text_diff_Identity_14_19.html#l-onnx-op-identity-d14-19), [16/14](text_diff_Identity_14_16.html#l-onnx-op-identity-d14-16), [25/13](text_diff_Identity_13_25.html#l-onnx-op-identity-d13-25), [24/13](text_diff_Identity_13_24.html#l-onnx-op-identity-d13-24), [23/13](text_diff_Identity_13_23.html#l-onnx-op-identity-d13-23), [21/13](text_diff_Identity_13_21.html#l-onnx-op-identity-d13-21), [19/13](text_diff_Identity_13_19.html#l-onnx-op-identity-d13-19), [16/13](text_diff_Identity_13_16.html#l-onnx-op-identity-d13-16), [14/13](text_diff_Identity_13_14.html#l-onnx-op-identity-d13-14), [25/1](text_diff_Identity_1_25.html#l-onnx-op-identity-d1-25), [24/1](text_diff_Identity_1_24.html#l-onnx-op-identity-d1-24), [23/1](text_diff_Identity_1_23.html#l-onnx-op-identity-d1-23), [21/1](text_diff_Identity_1_21.html#l-onnx-op-identity-d1-21), [19/1](text_diff_Identity_1_19.html#l-onnx-op-identity-d1-19), [16/1](text_diff_Identity_1_16.html#l-onnx-op-identity-d1-16), [14/1](text_diff_Identity_1_14.html#l-onnx-op-identity-d1-14), [13/1](text_diff_Identity_1_13.html#l-onnx-op-identity-d1-13)
|
[If](onnx__If.html#l-onnx-doc-if)
|
[25](onnx__If.html#l-onnx-op-if-25), [24](onnx__If.html#l-onnx-op-if-24), [23](onnx__If.html#l-onnx-op-if-23), [21](onnx__If.html#l-onnx-op-if-21), [19](onnx__If.html#l-onnx-op-if-19), [16](onnx__If.html#l-onnx-op-if-16), [13](onnx__If.html#l-onnx-op-if-13), [11](onnx__If.html#l-onnx-op-if-11), [1](onnx__If.html#l-onnx-op-if-1)
|
[25/24](text_diff_If_24_25.html#l-onnx-op-if-d24-25), [25/23](text_diff_If_23_25.html#l-onnx-op-if-d23-25), [24/23](text_diff_If_23_24.html#l-onnx-op-if-d23-24), [25/21](text_diff_If_21_25.html#l-onnx-op-if-d21-25), [24/21](text_diff_If_21_24.html#l-onnx-op-if-d21-24), [23/21](text_diff_If_21_23.html#l-onnx-op-if-d21-23), [25/19](text_diff_If_19_25.html#l-onnx-op-if-d19-25), [24/19](text_diff_If_19_24.html#l-onnx-op-if-d19-24), [23/19](text_diff_If_19_23.html#l-onnx-op-if-d19-23), [21/19](text_diff_If_19_21.html#l-onnx-op-if-d19-21), [25/16](text_diff_If_16_25.html#l-onnx-op-if-d16-25), [24/16](text_diff_If_16_24.html#l-onnx-op-if-d16-24), [23/16](text_diff_If_16_23.html#l-onnx-op-if-d16-23), [21/16](text_diff_If_16_21.html#l-onnx-op-if-d16-21), [19/16](text_diff_If_16_19.html#l-onnx-op-if-d16-19), [25/13](text_diff_If_13_25.html#l-onnx-op-if-d13-25), [24/13](text_diff_If_13_24.html#l-onnx-op-if-d13-24), [23/13](text_diff_If_13_23.html#l-onnx-op-if-d13-23), [21/13](text_diff_If_13_21.html#l-onnx-op-if-d13-21), [19/13](text_diff_If_13_19.html#l-onnx-op-if-d13-19), [16/13](text_diff_If_13_16.html#l-onnx-op-if-d13-16), [25/11](text_diff_If_11_25.html#l-onnx-op-if-d11-25), [24/11](text_diff_If_11_24.html#l-onnx-op-if-d11-24), [23/11](text_diff_If_11_23.html#l-onnx-op-if-d11-23), [21/11](text_diff_If_11_21.html#l-onnx-op-if-d11-21), [19/11](text_diff_If_11_19.html#l-onnx-op-if-d11-19), [16/11](text_diff_If_11_16.html#l-onnx-op-if-d11-16), [13/11](text_diff_If_11_13.html#l-onnx-op-if-d11-13), [25/1](text_diff_If_1_25.html#l-onnx-op-if-d1-25), [24/1](text_diff_If_1_24.html#l-onnx-op-if-d1-24), [23/1](text_diff_If_1_23.html#l-onnx-op-if-d1-23), [21/1](text_diff_If_1_21.html#l-onnx-op-if-d1-21), [19/1](text_diff_If_1_19.html#l-onnx-op-if-d1-19), [16/1](text_diff_If_1_16.html#l-onnx-op-if-d1-16), [13/1](text_diff_If_1_13.html#l-onnx-op-if-d1-13), [11/1](text_diff_If_1_11.html#l-onnx-op-if-d1-11)
|
[ImageDecoder](onnx__ImageDecoder.html#l-onnx-doc-imagedecoder)
|
[20](onnx__ImageDecoder.html#l-onnx-op-imagedecoder-20)
|
|
[InstanceNormalization](onnx__InstanceNormalization.html#l-onnx-doc-instancenormalization)
|
[22](onnx__InstanceNormalization.html#l-onnx-op-instancenormalization-22), [6](onnx__InstanceNormalization.html#l-onnx-op-instancenormalization-6), [1](onnx__InstanceNormalization.html#l-onnx-op-instancenormalization-1)
|
[22/6](text_diff_InstanceNormalization_6_22.html#l-onnx-op-instancenormalization-d6-22), [22/1](text_diff_InstanceNormalization_1_22.html#l-onnx-op-instancenormalization-d1-22), [6/1](text_diff_InstanceNormalization_1_6.html#l-onnx-op-instancenormalization-d1-6)
|
[IsInf](onnx__IsInf.html#l-onnx-doc-isinf)
|
[20](onnx__IsInf.html#l-onnx-op-isinf-20), [10](onnx__IsInf.html#l-onnx-op-isinf-10)
|
[20/10](text_diff_IsInf_10_20.html#l-onnx-op-isinf-d10-20)
|
[IsNaN](onnx__IsNaN.html#l-onnx-doc-isnan)
|
[20](onnx__IsNaN.html#l-onnx-op-isnan-20), [13](onnx__IsNaN.html#l-onnx-op-isnan-13), [9](onnx__IsNaN.html#l-onnx-op-isnan-9)
|
[20/13](text_diff_IsNaN_13_20.html#l-onnx-op-isnan-d13-20), [20/9](text_diff_IsNaN_9_20.html#l-onnx-op-isnan-d9-20), [13/9](text_diff_IsNaN_9_13.html#l-onnx-op-isnan-d9-13)
|
[LRN](onnx__LRN.html#l-onnx-doc-lrn)
|
[13](onnx__LRN.html#l-onnx-op-lrn-13), [1](onnx__LRN.html#l-onnx-op-lrn-1)
|
[13/1](text_diff_LRN_1_13.html#l-onnx-op-lrn-d1-13)
|
[LSTM](onnx__LSTM.html#l-onnx-doc-lstm)
|
[22](onnx__LSTM.html#l-onnx-op-lstm-22), [14](onnx__LSTM.html#l-onnx-op-lstm-14), [7](onnx__LSTM.html#l-onnx-op-lstm-7), [1](onnx__LSTM.html#l-onnx-op-lstm-1)
|
[22/14](text_diff_LSTM_14_22.html#l-onnx-op-lstm-d14-22), [22/7](text_diff_LSTM_7_22.html#l-onnx-op-lstm-d7-22), [14/7](text_diff_LSTM_7_14.html#l-onnx-op-lstm-d7-14), [22/1](text_diff_LSTM_1_22.html#l-onnx-op-lstm-d1-22), [14/1](text_diff_LSTM_1_14.html#l-onnx-op-lstm-d1-14), [7/1](text_diff_LSTM_1_7.html#l-onnx-op-lstm-d1-7)
|
[LayerNormalization](onnx__LayerNormalization.html#l-onnx-doc-layernormalization)
|
[17](onnx__LayerNormalization.html#l-onnx-op-layernormalization-17)
|
|
[LeakyRelu](onnx__LeakyRelu.html#l-onnx-doc-leakyrelu)
|
[16](onnx__LeakyRelu.html#l-onnx-op-leakyrelu-16), [6](onnx__LeakyRelu.html#l-onnx-op-leakyrelu-6), [1](onnx__LeakyRelu.html#l-onnx-op-leakyrelu-1)
|
[16/6](text_diff_LeakyRelu_6_16.html#l-onnx-op-leakyrelu-d6-16), [16/1](text_diff_LeakyRelu_1_16.html#l-onnx-op-leakyrelu-d1-16), [6/1](text_diff_LeakyRelu_1_6.html#l-onnx-op-leakyrelu-d1-6)
|
[Less](onnx__Less.html#l-onnx-doc-less)
|
[13](onnx__Less.html#l-onnx-op-less-13), [9](onnx__Less.html#l-onnx-op-less-9), [7](onnx__Less.html#l-onnx-op-less-7), [1](onnx__Less.html#l-onnx-op-less-1)
|
[13/9](text_diff_Less_9_13.html#l-onnx-op-less-d9-13), [13/7](text_diff_Less_7_13.html#l-onnx-op-less-d7-13), [9/7](text_diff_Less_7_9.html#l-onnx-op-less-d7-9), [13/1](text_diff_Less_1_13.html#l-onnx-op-less-d1-13), [9/1](text_diff_Less_1_9.html#l-onnx-op-less-d1-9), [7/1](text_diff_Less_1_7.html#l-onnx-op-less-d1-7)
|
[LessOrEqual](onnx__LessOrEqual.html#l-onnx-doc-lessorequal)
|
[16](onnx__LessOrEqual.html#l-onnx-op-lessorequal-16), [12](onnx__LessOrEqual.html#l-onnx-op-lessorequal-12)
|
[16/12](text_diff_LessOrEqual_12_16.html#l-onnx-op-lessorequal-d12-16)
|
[Log](onnx__Log.html#l-onnx-doc-log)
|
[13](onnx__Log.html#l-onnx-op-log-13), [6](onnx__Log.html#l-onnx-op-log-6), [1](onnx__Log.html#l-onnx-op-log-1)
|
[13/6](text_diff_Log_6_13.html#l-onnx-op-log-d6-13), [13/1](text_diff_Log_1_13.html#l-onnx-op-log-d1-13), [6/1](text_diff_Log_1_6.html#l-onnx-op-log-d1-6)
|
[LogSoftmax](onnx__LogSoftmax.html#l-onnx-doc-logsoftmax)
|
[13](onnx__LogSoftmax.html#l-onnx-op-logsoftmax-13), [11](onnx__LogSoftmax.html#l-onnx-op-logsoftmax-11), [1](onnx__LogSoftmax.html#l-onnx-op-logsoftmax-1)
|
[13/11](text_diff_LogSoftmax_11_13.html#l-onnx-op-logsoftmax-d11-13), [13/1](text_diff_LogSoftmax_1_13.html#l-onnx-op-logsoftmax-d1-13), [11/1](text_diff_LogSoftmax_1_11.html#l-onnx-op-logsoftmax-d1-11)
|
[Loop](onnx__Loop.html#l-onnx-doc-loop)
|
[25](onnx__Loop.html#l-onnx-op-loop-25), [24](onnx__Loop.html#l-onnx-op-loop-24), [23](onnx__Loop.html#l-onnx-op-loop-23), [21](onnx__Loop.html#l-onnx-op-loop-21), [19](onnx__Loop.html#l-onnx-op-loop-19), [16](onnx__Loop.html#l-onnx-op-loop-16), [13](onnx__Loop.html#l-onnx-op-loop-13), [11](onnx__Loop.html#l-onnx-op-loop-11), [1](onnx__Loop.html#l-onnx-op-loop-1)
|
[25/24](text_diff_Loop_24_25.html#l-onnx-op-loop-d24-25), [25/23](text_diff_Loop_23_25.html#l-onnx-op-loop-d23-25), [24/23](text_diff_Loop_23_24.html#l-onnx-op-loop-d23-24), [25/21](text_diff_Loop_21_25.html#l-onnx-op-loop-d21-25), [24/21](text_diff_Loop_21_24.html#l-onnx-op-loop-d21-24), [23/21](text_diff_Loop_21_23.html#l-onnx-op-loop-d21-23), [25/19](text_diff_Loop_19_25.html#l-onnx-op-loop-d19-25), [24/19](text_diff_Loop_19_24.html#l-onnx-op-loop-d19-24), [23/19](text_diff_Loop_19_23.html#l-onnx-op-loop-d19-23), [21/19](text_diff_Loop_19_21.html#l-onnx-op-loop-d19-21), [25/16](text_diff_Loop_16_25.html#l-onnx-op-loop-d16-25), [24/16](text_diff_Loop_16_24.html#l-onnx-op-loop-d16-24), [23/16](text_diff_Loop_16_23.html#l-onnx-op-loop-d16-23), [21/16](text_diff_Loop_16_21.html#l-onnx-op-loop-d16-21), [19/16](text_diff_Loop_16_19.html#l-onnx-op-loop-d16-19), [25/13](text_diff_Loop_13_25.html#l-onnx-op-loop-d13-25), [24/13](text_diff_Loop_13_24.html#l-onnx-op-loop-d13-24), [23/13](text_diff_Loop_13_23.html#l-onnx-op-loop-d13-23), [21/13](text_diff_Loop_13_21.html#l-onnx-op-loop-d13-21), [19/13](text_diff_Loop_13_19.html#l-onnx-op-loop-d13-19), [16/13](text_diff_Loop_13_16.html#l-onnx-op-loop-d13-16), [25/11](text_diff_Loop_11_25.html#l-onnx-op-loop-d11-25), [24/11](text_diff_Loop_11_24.html#l-onnx-op-loop-d11-24), [23/11](text_diff_Loop_11_23.html#l-onnx-op-loop-d11-23), [21/11](text_diff_Loop_11_21.html#l-onnx-op-loop-d11-21), [19/11](text_diff_Loop_11_19.html#l-onnx-op-loop-d11-19), [16/11](text_diff_Loop_11_16.html#l-onnx-op-loop-d11-16), [13/11](text_diff_Loop_11_13.html#l-onnx-op-loop-d11-13), [25/1](text_diff_Loop_1_25.html#l-onnx-op-loop-d1-25), [24/1](text_diff_Loop_1_24.html#l-onnx-op-loop-d1-24), [23/1](text_diff_Loop_1_23.html#l-onnx-op-loop-d1-23), [21/1](text_diff_Loop_1_21.html#l-onnx-op-loop-d1-21), [19/1](text_diff_Loop_1_19.html#l-onnx-op-loop-d1-19), [16/1](text_diff_Loop_1_16.html#l-onnx-op-loop-d1-16), [13/1](text_diff_Loop_1_13.html#l-onnx-op-loop-d1-13), [11/1](text_diff_Loop_1_11.html#l-onnx-op-loop-d1-11)
|
[LpNormalization](onnx__LpNormalization.html#l-onnx-doc-lpnormalization)
|
[22](onnx__LpNormalization.html#l-onnx-op-lpnormalization-22), [1](onnx__LpNormalization.html#l-onnx-op-lpnormalization-1)
|
[22/1](text_diff_LpNormalization_1_22.html#l-onnx-op-lpnormalization-d1-22)
|
[LpPool](onnx__LpPool.html#l-onnx-doc-lppool)
|
[22](onnx__LpPool.html#l-onnx-op-lppool-22), [18](onnx__LpPool.html#l-onnx-op-lppool-18), [11](onnx__LpPool.html#l-onnx-op-lppool-11), [2](onnx__LpPool.html#l-onnx-op-lppool-2), [1](onnx__LpPool.html#l-onnx-op-lppool-1)
|
[22/18](text_diff_LpPool_18_22.html#l-onnx-op-lppool-d18-22), [22/11](text_diff_LpPool_11_22.html#l-onnx-op-lppool-d11-22), [18/11](text_diff_LpPool_11_18.html#l-onnx-op-lppool-d11-18), [22/2](text_diff_LpPool_2_22.html#l-onnx-op-lppool-d2-22), [18/2](text_diff_LpPool_2_18.html#l-onnx-op-lppool-d2-18), [11/2](text_diff_LpPool_2_11.html#l-onnx-op-lppool-d2-11), [22/1](text_diff_LpPool_1_22.html#l-onnx-op-lppool-d1-22), [18/1](text_diff_LpPool_1_18.html#l-onnx-op-lppool-d1-18), [11/1](text_diff_LpPool_1_11.html#l-onnx-op-lppool-d1-11), [2/1](text_diff_LpPool_1_2.html#l-onnx-op-lppool-d1-2)
|
[MatMul](onnx__MatMul.html#l-onnx-doc-matmul)
|
[13](onnx__MatMul.html#l-onnx-op-matmul-13), [9](onnx__MatMul.html#l-onnx-op-matmul-9), [1](onnx__MatMul.html#l-onnx-op-matmul-1)
|
[13/9](text_diff_MatMul_9_13.html#l-onnx-op-matmul-d9-13), [13/1](text_diff_MatMul_1_13.html#l-onnx-op-matmul-d1-13), [9/1](text_diff_MatMul_1_9.html#l-onnx-op-matmul-d1-9)
|
[MatMulInteger](onnx__MatMulInteger.html#l-onnx-doc-matmulinteger)
|
[10](onnx__MatMulInteger.html#l-onnx-op-matmulinteger-10)
|
|
[Max](onnx__Max.html#l-onnx-doc-max)
|
[13](onnx__Max.html#l-onnx-op-max-13), [12](onnx__Max.html#l-onnx-op-max-12), [8](onnx__Max.html#l-onnx-op-max-8), [6](onnx__Max.html#l-onnx-op-max-6), [1](onnx__Max.html#l-onnx-op-max-1)
|
[13/12](text_diff_Max_12_13.html#l-onnx-op-max-d12-13), [13/8](text_diff_Max_8_13.html#l-onnx-op-max-d8-13), [12/8](text_diff_Max_8_12.html#l-onnx-op-max-d8-12), [13/6](text_diff_Max_6_13.html#l-onnx-op-max-d6-13), [12/6](text_diff_Max_6_12.html#l-onnx-op-max-d6-12), [8/6](text_diff_Max_6_8.html#l-onnx-op-max-d6-8), [13/1](text_diff_Max_1_13.html#l-onnx-op-max-d1-13), [12/1](text_diff_Max_1_12.html#l-onnx-op-max-d1-12), [8/1](text_diff_Max_1_8.html#l-onnx-op-max-d1-8), [6/1](text_diff_Max_1_6.html#l-onnx-op-max-d1-6)
|
[MaxPool](onnx__MaxPool.html#l-onnx-doc-maxpool)
|
[22](onnx__MaxPool.html#l-onnx-op-maxpool-22), [12](onnx__MaxPool.html#l-onnx-op-maxpool-12), [11](onnx__MaxPool.html#l-onnx-op-maxpool-11), [10](onnx__MaxPool.html#l-onnx-op-maxpool-10), [8](onnx__MaxPool.html#l-onnx-op-maxpool-8), [1](onnx__MaxPool.html#l-onnx-op-maxpool-1)
|
[22/12](text_diff_MaxPool_12_22.html#l-onnx-op-maxpool-d12-22), [22/11](text_diff_MaxPool_11_22.html#l-onnx-op-maxpool-d11-22), [12/11](text_diff_MaxPool_11_12.html#l-onnx-op-maxpool-d11-12), [22/10](text_diff_MaxPool_10_22.html#l-onnx-op-maxpool-d10-22), [12/10](text_diff_MaxPool_10_12.html#l-onnx-op-maxpool-d10-12), [11/10](text_diff_MaxPool_10_11.html#l-onnx-op-maxpool-d10-11), [22/8](text_diff_MaxPool_8_22.html#l-onnx-op-maxpool-d8-22), [12/8](text_diff_MaxPool_8_12.html#l-onnx-op-maxpool-d8-12), [11/8](text_diff_MaxPool_8_11.html#l-onnx-op-maxpool-d8-11), [10/8](text_diff_MaxPool_8_10.html#l-onnx-op-maxpool-d8-10), [22/1](text_diff_MaxPool_1_22.html#l-onnx-op-maxpool-d1-22), [12/1](text_diff_MaxPool_1_12.html#l-onnx-op-maxpool-d1-12), [11/1](text_diff_MaxPool_1_11.html#l-onnx-op-maxpool-d1-11), [10/1](text_diff_MaxPool_1_10.html#l-onnx-op-maxpool-d1-10), [8/1](text_diff_MaxPool_1_8.html#l-onnx-op-maxpool-d1-8)
|
[MaxRoiPool](onnx__MaxRoiPool.html#l-onnx-doc-maxroipool)
|
[22](onnx__MaxRoiPool.html#l-onnx-op-maxroipool-22), [1](onnx__MaxRoiPool.html#l-onnx-op-maxroipool-1)
|
[22/1](text_diff_MaxRoiPool_1_22.html#l-onnx-op-maxroipool-d1-22)
|
[MaxUnpool](onnx__MaxUnpool.html#l-onnx-doc-maxunpool)
|
[22](onnx__MaxUnpool.html#l-onnx-op-maxunpool-22), [11](onnx__MaxUnpool.html#l-onnx-op-maxunpool-11), [9](onnx__MaxUnpool.html#l-onnx-op-maxunpool-9)
|
[22/11](text_diff_MaxUnpool_11_22.html#l-onnx-op-maxunpool-d11-22), [22/9](text_diff_MaxUnpool_9_22.html#l-onnx-op-maxunpool-d9-22), [11/9](text_diff_MaxUnpool_9_11.html#l-onnx-op-maxunpool-d9-11)
|
[Mean](onnx__Mean.html#l-onnx-doc-mean)
|
[13](onnx__Mean.html#l-onnx-op-mean-13), [8](onnx__Mean.html#l-onnx-op-mean-8), [6](onnx__Mean.html#l-onnx-op-mean-6), [1](onnx__Mean.html#l-onnx-op-mean-1)
|
[13/8](text_diff_Mean_8_13.html#l-onnx-op-mean-d8-13), [13/6](text_diff_Mean_6_13.html#l-onnx-op-mean-d6-13), [8/6](text_diff_Mean_6_8.html#l-onnx-op-mean-d6-8), [13/1](text_diff_Mean_1_13.html#l-onnx-op-mean-d1-13), [8/1](text_diff_Mean_1_8.html#l-onnx-op-mean-d1-8), [6/1](text_diff_Mean_1_6.html#l-onnx-op-mean-d1-6)
|
[MeanVarianceNormalization](onnx__MeanVarianceNormalization.html#l-onnx-doc-meanvariancenormalization)
|
[13](onnx__MeanVarianceNormalization.html#l-onnx-op-meanvariancenormalization-13), [9](onnx__MeanVarianceNormalization.html#l-onnx-op-meanvariancenormalization-9)
|
[13/9](text_diff_MeanVarianceNormalization_9_13.html#l-onnx-op-meanvariancenormalization-d9-13)
|
[MelWeightMatrix](onnx__MelWeightMatrix.html#l-onnx-doc-melweightmatrix)
|
[17](onnx__MelWeightMatrix.html#l-onnx-op-melweightmatrix-17)
|
|
[Min](onnx__Min.html#l-onnx-doc-min)
|
[13](onnx__Min.html#l-onnx-op-min-13), [12](onnx__Min.html#l-onnx-op-min-12), [8](onnx__Min.html#l-onnx-op-min-8), [6](onnx__Min.html#l-onnx-op-min-6), [1](onnx__Min.html#l-onnx-op-min-1)
|
[13/12](text_diff_Min_12_13.html#l-onnx-op-min-d12-13), [13/8](text_diff_Min_8_13.html#l-onnx-op-min-d8-13), [12/8](text_diff_Min_8_12.html#l-onnx-op-min-d8-12), [13/6](text_diff_Min_6_13.html#l-onnx-op-min-d6-13), [12/6](text_diff_Min_6_12.html#l-onnx-op-min-d6-12), [8/6](text_diff_Min_6_8.html#l-onnx-op-min-d6-8), [13/1](text_diff_Min_1_13.html#l-onnx-op-min-d1-13), [12/1](text_diff_Min_1_12.html#l-onnx-op-min-d1-12), [8/1](text_diff_Min_1_8.html#l-onnx-op-min-d1-8), [6/1](text_diff_Min_1_6.html#l-onnx-op-min-d1-6)
|
[Mish](onnx__Mish.html#l-onnx-doc-mish)
|
[22](onnx__Mish.html#l-onnx-op-mish-22), [18](onnx__Mish.html#l-onnx-op-mish-18)
|
[22/18](text_diff_Mish_18_22.html#l-onnx-op-mish-d18-22)
|
[Mod](onnx__Mod.html#l-onnx-doc-mod)
|
[13](onnx__Mod.html#l-onnx-op-mod-13), [10](onnx__Mod.html#l-onnx-op-mod-10)
|
[13/10](text_diff_Mod_10_13.html#l-onnx-op-mod-d10-13)
|
[Mul](onnx__Mul.html#l-onnx-doc-mul)
|
[14](onnx__Mul.html#l-onnx-op-mul-14), [13](onnx__Mul.html#l-onnx-op-mul-13), [7](onnx__Mul.html#l-onnx-op-mul-7), [6](onnx__Mul.html#l-onnx-op-mul-6), [1](onnx__Mul.html#l-onnx-op-mul-1)
|
[14/13](text_diff_Mul_13_14.html#l-onnx-op-mul-d13-14), [14/7](text_diff_Mul_7_14.html#l-onnx-op-mul-d7-14), [13/7](text_diff_Mul_7_13.html#l-onnx-op-mul-d7-13), [14/6](text_diff_Mul_6_14.html#l-onnx-op-mul-d6-14), [13/6](text_diff_Mul_6_13.html#l-onnx-op-mul-d6-13), [7/6](text_diff_Mul_6_7.html#l-onnx-op-mul-d6-7), [14/1](text_diff_Mul_1_14.html#l-onnx-op-mul-d1-14), [13/1](text_diff_Mul_1_13.html#l-onnx-op-mul-d1-13), [7/1](text_diff_Mul_1_7.html#l-onnx-op-mul-d1-7), [6/1](text_diff_Mul_1_6.html#l-onnx-op-mul-d1-6)
|
[Multinomial](onnx__Multinomial.html#l-onnx-doc-multinomial)
|
[22](onnx__Multinomial.html#l-onnx-op-multinomial-22), [7](onnx__Multinomial.html#l-onnx-op-multinomial-7)
|
[22/7](text_diff_Multinomial_7_22.html#l-onnx-op-multinomial-d7-22)
|
[Neg](onnx__Neg.html#l-onnx-doc-neg)
|
[13](onnx__Neg.html#l-onnx-op-neg-13), [6](onnx__Neg.html#l-onnx-op-neg-6), [1](onnx__Neg.html#l-onnx-op-neg-1)
|
[13/6](text_diff_Neg_6_13.html#l-onnx-op-neg-d6-13), [13/1](text_diff_Neg_1_13.html#l-onnx-op-neg-d1-13), [6/1](text_diff_Neg_1_6.html#l-onnx-op-neg-d1-6)
|
[NegativeLogLikelihoodLoss](onnx__NegativeLogLikelihoodLoss.html#l-onnx-doc-negativeloglikelihoodloss)
|
[22](onnx__NegativeLogLikelihoodLoss.html#l-onnx-op-negativeloglikelihoodloss-22), [13](onnx__NegativeLogLikelihoodLoss.html#l-onnx-op-negativeloglikelihoodloss-13), [12](onnx__NegativeLogLikelihoodLoss.html#l-onnx-op-negativeloglikelihoodloss-12)
|
[22/13](text_diff_NegativeLogLikelihoodLoss_13_22.html#l-onnx-op-negativeloglikelihoodloss-d13-22), [22/12](text_diff_NegativeLogLikelihoodLoss_12_22.html#l-onnx-op-negativeloglikelihoodloss-d12-22), [13/12](text_diff_NegativeLogLikelihoodLoss_12_13.html#l-onnx-op-negativeloglikelihoodloss-d12-13)
|
[NonMaxSuppression](onnx__NonMaxSuppression.html#l-onnx-doc-nonmaxsuppression)
|
[11](onnx__NonMaxSuppression.html#l-onnx-op-nonmaxsuppression-11), [10](onnx__NonMaxSuppression.html#l-onnx-op-nonmaxsuppression-10)
|
[11/10](text_diff_NonMaxSuppression_10_11.html#l-onnx-op-nonmaxsuppression-d10-11)
|
[NonZero](onnx__NonZero.html#l-onnx-doc-nonzero)
|
[13](onnx__NonZero.html#l-onnx-op-nonzero-13), [9](onnx__NonZero.html#l-onnx-op-nonzero-9)
|
[13/9](text_diff_NonZero_9_13.html#l-onnx-op-nonzero-d9-13)
|
[Not](onnx__Not.html#l-onnx-doc-not)
|
[1](onnx__Not.html#l-onnx-op-not-1)
|
|
[OneHot](onnx__OneHot.html#l-onnx-doc-onehot)
|
[11](onnx__OneHot.html#l-onnx-op-onehot-11), [9](onnx__OneHot.html#l-onnx-op-onehot-9)
|
[11/9](text_diff_OneHot_9_11.html#l-onnx-op-onehot-d9-11)
|
[Optional](onnx__Optional.html#l-onnx-doc-optional)
|
[15](onnx__Optional.html#l-onnx-op-optional-15)
|
|
[OptionalGetElement](onnx__OptionalGetElement.html#l-onnx-doc-optionalgetelement)
|
[18](onnx__OptionalGetElement.html#l-onnx-op-optionalgetelement-18), [15](onnx__OptionalGetElement.html#l-onnx-op-optionalgetelement-15)
|
[18/15](text_diff_OptionalGetElement_15_18.html#l-onnx-op-optionalgetelement-d15-18)
|
[OptionalHasElement](onnx__OptionalHasElement.html#l-onnx-doc-optionalhaselement)
|
[18](onnx__OptionalHasElement.html#l-onnx-op-optionalhaselement-18), [15](onnx__OptionalHasElement.html#l-onnx-op-optionalhaselement-15)
|
[18/15](text_diff_OptionalHasElement_15_18.html#l-onnx-op-optionalhaselement-d15-18)
|
[Or](onnx__Or.html#l-onnx-doc-or)
|
[7](onnx__Or.html#l-onnx-op-or-7), [1](onnx__Or.html#l-onnx-op-or-1)
|
[7/1](text_diff_Or_1_7.html#l-onnx-op-or-d1-7)
|
[PRelu](onnx__PRelu.html#l-onnx-doc-prelu)
|
[16](onnx__PRelu.html#l-onnx-op-prelu-16), [9](onnx__PRelu.html#l-onnx-op-prelu-9), [7](onnx__PRelu.html#l-onnx-op-prelu-7), [6](onnx__PRelu.html#l-onnx-op-prelu-6), [1](onnx__PRelu.html#l-onnx-op-prelu-1)
|
[16/9](text_diff_PRelu_9_16.html#l-onnx-op-prelu-d9-16), [16/7](text_diff_PRelu_7_16.html#l-onnx-op-prelu-d7-16), [9/7](text_diff_PRelu_7_9.html#l-onnx-op-prelu-d7-9), [16/6](text_diff_PRelu_6_16.html#l-onnx-op-prelu-d6-16), [9/6](text_diff_PRelu_6_9.html#l-onnx-op-prelu-d6-9), [7/6](text_diff_PRelu_6_7.html#l-onnx-op-prelu-d6-7), [16/1](text_diff_PRelu_1_16.html#l-onnx-op-prelu-d1-16), [9/1](text_diff_PRelu_1_9.html#l-onnx-op-prelu-d1-9), [7/1](text_diff_PRelu_1_7.html#l-onnx-op-prelu-d1-7), [6/1](text_diff_PRelu_1_6.html#l-onnx-op-prelu-d1-6)
|
[Pad](onnx__Pad.html#l-onnx-doc-pad)
|
[25](onnx__Pad.html#l-onnx-op-pad-25), [24](onnx__Pad.html#l-onnx-op-pad-24), [23](onnx__Pad.html#l-onnx-op-pad-23), [21](onnx__Pad.html#l-onnx-op-pad-21), [19](onnx__Pad.html#l-onnx-op-pad-19), [18](onnx__Pad.html#l-onnx-op-pad-18), [13](onnx__Pad.html#l-onnx-op-pad-13), [11](onnx__Pad.html#l-onnx-op-pad-11), [2](onnx__Pad.html#l-onnx-op-pad-2), [1](onnx__Pad.html#l-onnx-op-pad-1)
|
[25/24](text_diff_Pad_24_25.html#l-onnx-op-pad-d24-25), [25/23](text_diff_Pad_23_25.html#l-onnx-op-pad-d23-25), [24/23](text_diff_Pad_23_24.html#l-onnx-op-pad-d23-24), [25/21](text_diff_Pad_21_25.html#l-onnx-op-pad-d21-25), [24/21](text_diff_Pad_21_24.html#l-onnx-op-pad-d21-24), [23/21](text_diff_Pad_21_23.html#l-onnx-op-pad-d21-23), [25/19](text_diff_Pad_19_25.html#l-onnx-op-pad-d19-25), [24/19](text_diff_Pad_19_24.html#l-onnx-op-pad-d19-24), [23/19](text_diff_Pad_19_23.html#l-onnx-op-pad-d19-23), [21/19](text_diff_Pad_19_21.html#l-onnx-op-pad-d19-21), [25/18](text_diff_Pad_18_25.html#l-onnx-op-pad-d18-25), [24/18](text_diff_Pad_18_24.html#l-onnx-op-pad-d18-24), [23/18](text_diff_Pad_18_23.html#l-onnx-op-pad-d18-23), [21/18](text_diff_Pad_18_21.html#l-onnx-op-pad-d18-21), [19/18](text_diff_Pad_18_19.html#l-onnx-op-pad-d18-19), [25/13](text_diff_Pad_13_25.html#l-onnx-op-pad-d13-25), [24/13](text_diff_Pad_13_24.html#l-onnx-op-pad-d13-24), [23/13](text_diff_Pad_13_23.html#l-onnx-op-pad-d13-23), [21/13](text_diff_Pad_13_21.html#l-onnx-op-pad-d13-21), [19/13](text_diff_Pad_13_19.html#l-onnx-op-pad-d13-19), [18/13](text_diff_Pad_13_18.html#l-onnx-op-pad-d13-18), [25/11](text_diff_Pad_11_25.html#l-onnx-op-pad-d11-25), [24/11](text_diff_Pad_11_24.html#l-onnx-op-pad-d11-24), [23/11](text_diff_Pad_11_23.html#l-onnx-op-pad-d11-23), [21/11](text_diff_Pad_11_21.html#l-onnx-op-pad-d11-21), [19/11](text_diff_Pad_11_19.html#l-onnx-op-pad-d11-19), [18/11](text_diff_Pad_11_18.html#l-onnx-op-pad-d11-18), [13/11](text_diff_Pad_11_13.html#l-onnx-op-pad-d11-13), [25/2](text_diff_Pad_2_25.html#l-onnx-op-pad-d2-25), [24/2](text_diff_Pad_2_24.html#l-onnx-op-pad-d2-24), [23/2](text_diff_Pad_2_23.html#l-onnx-op-pad-d2-23), [21/2](text_diff_Pad_2_21.html#l-onnx-op-pad-d2-21), [19/2](text_diff_Pad_2_19.html#l-onnx-op-pad-d2-19), [18/2](text_diff_Pad_2_18.html#l-onnx-op-pad-d2-18), [13/2](text_diff_Pad_2_13.html#l-onnx-op-pad-d2-13), [11/2](text_diff_Pad_2_11.html#l-onnx-op-pad-d2-11), [25/1](text_diff_Pad_1_25.html#l-onnx-op-pad-d1-25), [24/1](text_diff_Pad_1_24.html#l-onnx-op-pad-d1-24), [23/1](text_diff_Pad_1_23.html#l-onnx-op-pad-d1-23), [21/1](text_diff_Pad_1_21.html#l-onnx-op-pad-d1-21), [19/1](text_diff_Pad_1_19.html#l-onnx-op-pad-d1-19), [18/1](text_diff_Pad_1_18.html#l-onnx-op-pad-d1-18), [13/1](text_diff_Pad_1_13.html#l-onnx-op-pad-d1-13), [11/1](text_diff_Pad_1_11.html#l-onnx-op-pad-d1-11), [2/1](text_diff_Pad_1_2.html#l-onnx-op-pad-d1-2)
|
[Pow](onnx__Pow.html#l-onnx-doc-pow)
|
[15](onnx__Pow.html#l-onnx-op-pow-15), [13](onnx__Pow.html#l-onnx-op-pow-13), [12](onnx__Pow.html#l-onnx-op-pow-12), [7](onnx__Pow.html#l-onnx-op-pow-7), [1](onnx__Pow.html#l-onnx-op-pow-1)
|
[15/13](text_diff_Pow_13_15.html#l-onnx-op-pow-d13-15), [15/12](text_diff_Pow_12_15.html#l-onnx-op-pow-d12-15), [13/12](text_diff_Pow_12_13.html#l-onnx-op-pow-d12-13), [15/7](text_diff_Pow_7_15.html#l-onnx-op-pow-d7-15), [13/7](text_diff_Pow_7_13.html#l-onnx-op-pow-d7-13), [12/7](text_diff_Pow_7_12.html#l-onnx-op-pow-d7-12), [15/1](text_diff_Pow_1_15.html#l-onnx-op-pow-d1-15), [13/1](text_diff_Pow_1_13.html#l-onnx-op-pow-d1-13), [12/1](text_diff_Pow_1_12.html#l-onnx-op-pow-d1-12), [7/1](text_diff_Pow_1_7.html#l-onnx-op-pow-d1-7)
|
[QLinearConv](onnx__QLinearConv.html#l-onnx-doc-qlinearconv)
|
[10](onnx__QLinearConv.html#l-onnx-op-qlinearconv-10)
|
|
[QLinearMatMul](onnx__QLinearMatMul.html#l-onnx-doc-qlinearmatmul)
|
[21](onnx__QLinearMatMul.html#l-onnx-op-qlinearmatmul-21), [10](onnx__QLinearMatMul.html#l-onnx-op-qlinearmatmul-10)
|
[21/10](text_diff_QLinearMatMul_10_21.html#l-onnx-op-qlinearmatmul-d10-21)
|
[QuantizeLinear](onnx__QuantizeLinear.html#l-onnx-doc-quantizelinear)
|
[25](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-25), [24](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-24), [23](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-23), [21](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-21), [19](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-19), [13](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-13), [10](onnx__QuantizeLinear.html#l-onnx-op-quantizelinear-10)
|
[25/24](text_diff_QuantizeLinear_24_25.html#l-onnx-op-quantizelinear-d24-25), [25/23](text_diff_QuantizeLinear_23_25.html#l-onnx-op-quantizelinear-d23-25), [24/23](text_diff_QuantizeLinear_23_24.html#l-onnx-op-quantizelinear-d23-24), [25/21](text_diff_QuantizeLinear_21_25.html#l-onnx-op-quantizelinear-d21-25), [24/21](text_diff_QuantizeLinear_21_24.html#l-onnx-op-quantizelinear-d21-24), [23/21](text_diff_QuantizeLinear_21_23.html#l-onnx-op-quantizelinear-d21-23), [25/19](text_diff_QuantizeLinear_19_25.html#l-onnx-op-quantizelinear-d19-25), [24/19](text_diff_QuantizeLinear_19_24.html#l-onnx-op-quantizelinear-d19-24), [23/19](text_diff_QuantizeLinear_19_23.html#l-onnx-op-quantizelinear-d19-23), [21/19](text_diff_QuantizeLinear_19_21.html#l-onnx-op-quantizelinear-d19-21), [25/13](text_diff_QuantizeLinear_13_25.html#l-onnx-op-quantizelinear-d13-25), [24/13](text_diff_QuantizeLinear_13_24.html#l-onnx-op-quantizelinear-d13-24), [23/13](text_diff_QuantizeLinear_13_23.html#l-onnx-op-quantizelinear-d13-23), [21/13](text_diff_QuantizeLinear_13_21.html#l-onnx-op-quantizelinear-d13-21), [19/13](text_diff_QuantizeLinear_13_19.html#l-onnx-op-quantizelinear-d13-19), [25/10](text_diff_QuantizeLinear_10_25.html#l-onnx-op-quantizelinear-d10-25), [24/10](text_diff_QuantizeLinear_10_24.html#l-onnx-op-quantizelinear-d10-24), [23/10](text_diff_QuantizeLinear_10_23.html#l-onnx-op-quantizelinear-d10-23), [21/10](text_diff_QuantizeLinear_10_21.html#l-onnx-op-quantizelinear-d10-21), [19/10](text_diff_QuantizeLinear_10_19.html#l-onnx-op-quantizelinear-d10-19), [13/10](text_diff_QuantizeLinear_10_13.html#l-onnx-op-quantizelinear-d10-13)
|
[RMSNormalization](onnx__RMSNormalization.html#l-onnx-doc-rmsnormalization)
|
[23](onnx__RMSNormalization.html#l-onnx-op-rmsnormalization-23)
|
|
[RNN](onnx__RNN.html#l-onnx-doc-rnn)
|
[22](onnx__RNN.html#l-onnx-op-rnn-22), [14](onnx__RNN.html#l-onnx-op-rnn-14), [7](onnx__RNN.html#l-onnx-op-rnn-7), [1](onnx__RNN.html#l-onnx-op-rnn-1)
|
[22/14](text_diff_RNN_14_22.html#l-onnx-op-rnn-d14-22), [22/7](text_diff_RNN_7_22.html#l-onnx-op-rnn-d7-22), [14/7](text_diff_RNN_7_14.html#l-onnx-op-rnn-d7-14), [22/1](text_diff_RNN_1_22.html#l-onnx-op-rnn-d1-22), [14/1](text_diff_RNN_1_14.html#l-onnx-op-rnn-d1-14), [7/1](text_diff_RNN_1_7.html#l-onnx-op-rnn-d1-7)
|
[RandomNormal](onnx__RandomNormal.html#l-onnx-doc-randomnormal)
|
[22](onnx__RandomNormal.html#l-onnx-op-randomnormal-22), [1](onnx__RandomNormal.html#l-onnx-op-randomnormal-1)
|
[22/1](text_diff_RandomNormal_1_22.html#l-onnx-op-randomnormal-d1-22)
|
[RandomNormalLike](onnx__RandomNormalLike.html#l-onnx-doc-randomnormallike)
|
[22](onnx__RandomNormalLike.html#l-onnx-op-randomnormallike-22), [1](onnx__RandomNormalLike.html#l-onnx-op-randomnormallike-1)
|
[22/1](text_diff_RandomNormalLike_1_22.html#l-onnx-op-randomnormallike-d1-22)
|
[RandomUniform](onnx__RandomUniform.html#l-onnx-doc-randomuniform)
|
[22](onnx__RandomUniform.html#l-onnx-op-randomuniform-22), [1](onnx__RandomUniform.html#l-onnx-op-randomuniform-1)
|
[22/1](text_diff_RandomUniform_1_22.html#l-onnx-op-randomuniform-d1-22)
|
[RandomUniformLike](onnx__RandomUniformLike.html#l-onnx-doc-randomuniformlike)
|
[22](onnx__RandomUniformLike.html#l-onnx-op-randomuniformlike-22), [1](onnx__RandomUniformLike.html#l-onnx-op-randomuniformlike-1)
|
[22/1](text_diff_RandomUniformLike_1_22.html#l-onnx-op-randomuniformlike-d1-22)
|
[Range](onnx__Range.html#l-onnx-doc-range)
|
[11](onnx__Range.html#l-onnx-op-range-11)
|
|
[Reciprocal](onnx__Reciprocal.html#l-onnx-doc-reciprocal)
|
[13](onnx__Reciprocal.html#l-onnx-op-reciprocal-13), [6](onnx__Reciprocal.html#l-onnx-op-reciprocal-6), [1](onnx__Reciprocal.html#l-onnx-op-reciprocal-1)
|
[13/6](text_diff_Reciprocal_6_13.html#l-onnx-op-reciprocal-d6-13), [13/1](text_diff_Reciprocal_1_13.html#l-onnx-op-reciprocal-d1-13), [6/1](text_diff_Reciprocal_1_6.html#l-onnx-op-reciprocal-d1-6)
|
[ReduceL1](onnx__ReduceL1.html#l-onnx-doc-reducel1)
|
[18](onnx__ReduceL1.html#l-onnx-op-reducel1-18), [13](onnx__ReduceL1.html#l-onnx-op-reducel1-13), [11](onnx__ReduceL1.html#l-onnx-op-reducel1-11), [1](onnx__ReduceL1.html#l-onnx-op-reducel1-1)
|
[18/13](text_diff_ReduceL1_13_18.html#l-onnx-op-reducel1-d13-18), [18/11](text_diff_ReduceL1_11_18.html#l-onnx-op-reducel1-d11-18), [13/11](text_diff_ReduceL1_11_13.html#l-onnx-op-reducel1-d11-13), [18/1](text_diff_ReduceL1_1_18.html#l-onnx-op-reducel1-d1-18), [13/1](text_diff_ReduceL1_1_13.html#l-onnx-op-reducel1-d1-13), [11/1](text_diff_ReduceL1_1_11.html#l-onnx-op-reducel1-d1-11)
|
[ReduceL2](onnx__ReduceL2.html#l-onnx-doc-reducel2)
|
[18](onnx__ReduceL2.html#l-onnx-op-reducel2-18), [13](onnx__ReduceL2.html#l-onnx-op-reducel2-13), [11](onnx__ReduceL2.html#l-onnx-op-reducel2-11), [1](onnx__ReduceL2.html#l-onnx-op-reducel2-1)
|
[18/13](text_diff_ReduceL2_13_18.html#l-onnx-op-reducel2-d13-18), [18/11](text_diff_ReduceL2_11_18.html#l-onnx-op-reducel2-d11-18), [13/11](text_diff_ReduceL2_11_13.html#l-onnx-op-reducel2-d11-13), [18/1](text_diff_ReduceL2_1_18.html#l-onnx-op-reducel2-d1-18), [13/1](text_diff_ReduceL2_1_13.html#l-onnx-op-reducel2-d1-13), [11/1](text_diff_ReduceL2_1_11.html#l-onnx-op-reducel2-d1-11)
|
[ReduceLogSum](onnx__ReduceLogSum.html#l-onnx-doc-reducelogsum)
|
[18](onnx__ReduceLogSum.html#l-onnx-op-reducelogsum-18), [13](onnx__ReduceLogSum.html#l-onnx-op-reducelogsum-13), [11](onnx__ReduceLogSum.html#l-onnx-op-reducelogsum-11), [1](onnx__ReduceLogSum.html#l-onnx-op-reducelogsum-1)
|
[18/13](text_diff_ReduceLogSum_13_18.html#l-onnx-op-reducelogsum-d13-18), [18/11](text_diff_ReduceLogSum_11_18.html#l-onnx-op-reducelogsum-d11-18), [13/11](text_diff_ReduceLogSum_11_13.html#l-onnx-op-reducelogsum-d11-13), [18/1](text_diff_ReduceLogSum_1_18.html#l-onnx-op-reducelogsum-d1-18), [13/1](text_diff_ReduceLogSum_1_13.html#l-onnx-op-reducelogsum-d1-13), [11/1](text_diff_ReduceLogSum_1_11.html#l-onnx-op-reducelogsum-d1-11)
|
[ReduceLogSumExp](onnx__ReduceLogSumExp.html#l-onnx-doc-reducelogsumexp)
|
[18](onnx__ReduceLogSumExp.html#l-onnx-op-reducelogsumexp-18), [13](onnx__ReduceLogSumExp.html#l-onnx-op-reducelogsumexp-13), [11](onnx__ReduceLogSumExp.html#l-onnx-op-reducelogsumexp-11), [1](onnx__ReduceLogSumExp.html#l-onnx-op-reducelogsumexp-1)
|
[18/13](text_diff_ReduceLogSumExp_13_18.html#l-onnx-op-reducelogsumexp-d13-18), [18/11](text_diff_ReduceLogSumExp_11_18.html#l-onnx-op-reducelogsumexp-d11-18), [13/11](text_diff_ReduceLogSumExp_11_13.html#l-onnx-op-reducelogsumexp-d11-13), [18/1](text_diff_ReduceLogSumExp_1_18.html#l-onnx-op-reducelogsumexp-d1-18), [13/1](text_diff_ReduceLogSumExp_1_13.html#l-onnx-op-reducelogsumexp-d1-13), [11/1](text_diff_ReduceLogSumExp_1_11.html#l-onnx-op-reducelogsumexp-d1-11)
|
[ReduceMax](onnx__ReduceMax.html#l-onnx-doc-reducemax)
|
[20](onnx__ReduceMax.html#l-onnx-op-reducemax-20), [18](onnx__ReduceMax.html#l-onnx-op-reducemax-18), [13](onnx__ReduceMax.html#l-onnx-op-reducemax-13), [12](onnx__ReduceMax.html#l-onnx-op-reducemax-12), [11](onnx__ReduceMax.html#l-onnx-op-reducemax-11), [1](onnx__ReduceMax.html#l-onnx-op-reducemax-1)
|
[20/18](text_diff_ReduceMax_18_20.html#l-onnx-op-reducemax-d18-20), [20/13](text_diff_ReduceMax_13_20.html#l-onnx-op-reducemax-d13-20), [18/13](text_diff_ReduceMax_13_18.html#l-onnx-op-reducemax-d13-18), [20/12](text_diff_ReduceMax_12_20.html#l-onnx-op-reducemax-d12-20), [18/12](text_diff_ReduceMax_12_18.html#l-onnx-op-reducemax-d12-18), [13/12](text_diff_ReduceMax_12_13.html#l-onnx-op-reducemax-d12-13), [20/11](text_diff_ReduceMax_11_20.html#l-onnx-op-reducemax-d11-20), [18/11](text_diff_ReduceMax_11_18.html#l-onnx-op-reducemax-d11-18), [13/11](text_diff_ReduceMax_11_13.html#l-onnx-op-reducemax-d11-13), [12/11](text_diff_ReduceMax_11_12.html#l-onnx-op-reducemax-d11-12), [20/1](text_diff_ReduceMax_1_20.html#l-onnx-op-reducemax-d1-20), [18/1](text_diff_ReduceMax_1_18.html#l-onnx-op-reducemax-d1-18), [13/1](text_diff_ReduceMax_1_13.html#l-onnx-op-reducemax-d1-13), [12/1](text_diff_ReduceMax_1_12.html#l-onnx-op-reducemax-d1-12), [11/1](text_diff_ReduceMax_1_11.html#l-onnx-op-reducemax-d1-11)
|
[ReduceMean](onnx__ReduceMean.html#l-onnx-doc-reducemean)
|
[18](onnx__ReduceMean.html#l-onnx-op-reducemean-18), [13](onnx__ReduceMean.html#l-onnx-op-reducemean-13), [11](onnx__ReduceMean.html#l-onnx-op-reducemean-11), [1](onnx__ReduceMean.html#l-onnx-op-reducemean-1)
|
[18/13](text_diff_ReduceMean_13_18.html#l-onnx-op-reducemean-d13-18), [18/11](text_diff_ReduceMean_11_18.html#l-onnx-op-reducemean-d11-18), [13/11](text_diff_ReduceMean_11_13.html#l-onnx-op-reducemean-d11-13), [18/1](text_diff_ReduceMean_1_18.html#l-onnx-op-reducemean-d1-18), [13/1](text_diff_ReduceMean_1_13.html#l-onnx-op-reducemean-d1-13), [11/1](text_diff_ReduceMean_1_11.html#l-onnx-op-reducemean-d1-11)
|
[ReduceMin](onnx__ReduceMin.html#l-onnx-doc-reducemin)
|
[20](onnx__ReduceMin.html#l-onnx-op-reducemin-20), [18](onnx__ReduceMin.html#l-onnx-op-reducemin-18), [13](onnx__ReduceMin.html#l-onnx-op-reducemin-13), [12](onnx__ReduceMin.html#l-onnx-op-reducemin-12), [11](onnx__ReduceMin.html#l-onnx-op-reducemin-11), [1](onnx__ReduceMin.html#l-onnx-op-reducemin-1)
|
[20/18](text_diff_ReduceMin_18_20.html#l-onnx-op-reducemin-d18-20), [20/13](text_diff_ReduceMin_13_20.html#l-onnx-op-reducemin-d13-20), [18/13](text_diff_ReduceMin_13_18.html#l-onnx-op-reducemin-d13-18), [20/12](text_diff_ReduceMin_12_20.html#l-onnx-op-reducemin-d12-20), [18/12](text_diff_ReduceMin_12_18.html#l-onnx-op-reducemin-d12-18), [13/12](text_diff_ReduceMin_12_13.html#l-onnx-op-reducemin-d12-13), [20/11](text_diff_ReduceMin_11_20.html#l-onnx-op-reducemin-d11-20), [18/11](text_diff_ReduceMin_11_18.html#l-onnx-op-reducemin-d11-18), [13/11](text_diff_ReduceMin_11_13.html#l-onnx-op-reducemin-d11-13), [12/11](text_diff_ReduceMin_11_12.html#l-onnx-op-reducemin-d11-12), [20/1](text_diff_ReduceMin_1_20.html#l-onnx-op-reducemin-d1-20), [18/1](text_diff_ReduceMin_1_18.html#l-onnx-op-reducemin-d1-18), [13/1](text_diff_ReduceMin_1_13.html#l-onnx-op-reducemin-d1-13), [12/1](text_diff_ReduceMin_1_12.html#l-onnx-op-reducemin-d1-12), [11/1](text_diff_ReduceMin_1_11.html#l-onnx-op-reducemin-d1-11)
|
[ReduceProd](onnx__ReduceProd.html#l-onnx-doc-reduceprod)
|
[18](onnx__ReduceProd.html#l-onnx-op-reduceprod-18), [13](onnx__ReduceProd.html#l-onnx-op-reduceprod-13), [11](onnx__ReduceProd.html#l-onnx-op-reduceprod-11), [1](onnx__ReduceProd.html#l-onnx-op-reduceprod-1)
|
[18/13](text_diff_ReduceProd_13_18.html#l-onnx-op-reduceprod-d13-18), [18/11](text_diff_ReduceProd_11_18.html#l-onnx-op-reduceprod-d11-18), [13/11](text_diff_ReduceProd_11_13.html#l-onnx-op-reduceprod-d11-13), [18/1](text_diff_ReduceProd_1_18.html#l-onnx-op-reduceprod-d1-18), [13/1](text_diff_ReduceProd_1_13.html#l-onnx-op-reduceprod-d1-13), [11/1](text_diff_ReduceProd_1_11.html#l-onnx-op-reduceprod-d1-11)
|
[ReduceSum](onnx__ReduceSum.html#l-onnx-doc-reducesum)
|
[13](onnx__ReduceSum.html#l-onnx-op-reducesum-13), [11](onnx__ReduceSum.html#l-onnx-op-reducesum-11), [1](onnx__ReduceSum.html#l-onnx-op-reducesum-1)
|
[13/11](text_diff_ReduceSum_11_13.html#l-onnx-op-reducesum-d11-13), [13/1](text_diff_ReduceSum_1_13.html#l-onnx-op-reducesum-d1-13), [11/1](text_diff_ReduceSum_1_11.html#l-onnx-op-reducesum-d1-11)
|
[ReduceSumSquare](onnx__ReduceSumSquare.html#l-onnx-doc-reducesumsquare)
|
[18](onnx__ReduceSumSquare.html#l-onnx-op-reducesumsquare-18), [13](onnx__ReduceSumSquare.html#l-onnx-op-reducesumsquare-13), [11](onnx__ReduceSumSquare.html#l-onnx-op-reducesumsquare-11), [1](onnx__ReduceSumSquare.html#l-onnx-op-reducesumsquare-1)
|
[18/13](text_diff_ReduceSumSquare_13_18.html#l-onnx-op-reducesumsquare-d13-18), [18/11](text_diff_ReduceSumSquare_11_18.html#l-onnx-op-reducesumsquare-d11-18), [13/11](text_diff_ReduceSumSquare_11_13.html#l-onnx-op-reducesumsquare-d11-13), [18/1](text_diff_ReduceSumSquare_1_18.html#l-onnx-op-reducesumsquare-d1-18), [13/1](text_diff_ReduceSumSquare_1_13.html#l-onnx-op-reducesumsquare-d1-13), [11/1](text_diff_ReduceSumSquare_1_11.html#l-onnx-op-reducesumsquare-d1-11)
|
[RegexFullMatch](onnx__RegexFullMatch.html#l-onnx-doc-regexfullmatch)
|
[20](onnx__RegexFullMatch.html#l-onnx-op-regexfullmatch-20)
|
|
[Relu](onnx__Relu.html#l-onnx-doc-relu)
|
[14](onnx__Relu.html#l-onnx-op-relu-14), [13](onnx__Relu.html#l-onnx-op-relu-13), [6](onnx__Relu.html#l-onnx-op-relu-6), [1](onnx__Relu.html#l-onnx-op-relu-1)
|
[14/13](text_diff_Relu_13_14.html#l-onnx-op-relu-d13-14), [14/6](text_diff_Relu_6_14.html#l-onnx-op-relu-d6-14), [13/6](text_diff_Relu_6_13.html#l-onnx-op-relu-d6-13), [14/1](text_diff_Relu_1_14.html#l-onnx-op-relu-d1-14), [13/1](text_diff_Relu_1_13.html#l-onnx-op-relu-d1-13), [6/1](text_diff_Relu_1_6.html#l-onnx-op-relu-d1-6)
|
[Reshape](onnx__Reshape.html#l-onnx-doc-reshape)
|
[25](onnx__Reshape.html#l-onnx-op-reshape-25), [24](onnx__Reshape.html#l-onnx-op-reshape-24), [23](onnx__Reshape.html#l-onnx-op-reshape-23), [21](onnx__Reshape.html#l-onnx-op-reshape-21), [19](onnx__Reshape.html#l-onnx-op-reshape-19), [14](onnx__Reshape.html#l-onnx-op-reshape-14), [13](onnx__Reshape.html#l-onnx-op-reshape-13), [5](onnx__Reshape.html#l-onnx-op-reshape-5), [1](onnx__Reshape.html#l-onnx-op-reshape-1)
|
[25/24](text_diff_Reshape_24_25.html#l-onnx-op-reshape-d24-25), [25/23](text_diff_Reshape_23_25.html#l-onnx-op-reshape-d23-25), [24/23](text_diff_Reshape_23_24.html#l-onnx-op-reshape-d23-24), [25/21](text_diff_Reshape_21_25.html#l-onnx-op-reshape-d21-25), [24/21](text_diff_Reshape_21_24.html#l-onnx-op-reshape-d21-24), [23/21](text_diff_Reshape_21_23.html#l-onnx-op-reshape-d21-23), [25/19](text_diff_Reshape_19_25.html#l-onnx-op-reshape-d19-25), [24/19](text_diff_Reshape_19_24.html#l-onnx-op-reshape-d19-24), [23/19](text_diff_Reshape_19_23.html#l-onnx-op-reshape-d19-23), [21/19](text_diff_Reshape_19_21.html#l-onnx-op-reshape-d19-21), [25/14](text_diff_Reshape_14_25.html#l-onnx-op-reshape-d14-25), [24/14](text_diff_Reshape_14_24.html#l-onnx-op-reshape-d14-24), [23/14](text_diff_Reshape_14_23.html#l-onnx-op-reshape-d14-23), [21/14](text_diff_Reshape_14_21.html#l-onnx-op-reshape-d14-21), [19/14](text_diff_Reshape_14_19.html#l-onnx-op-reshape-d14-19), [25/13](text_diff_Reshape_13_25.html#l-onnx-op-reshape-d13-25), [24/13](text_diff_Reshape_13_24.html#l-onnx-op-reshape-d13-24), [23/13](text_diff_Reshape_13_23.html#l-onnx-op-reshape-d13-23), [21/13](text_diff_Reshape_13_21.html#l-onnx-op-reshape-d13-21), [19/13](text_diff_Reshape_13_19.html#l-onnx-op-reshape-d13-19), [14/13](text_diff_Reshape_13_14.html#l-onnx-op-reshape-d13-14), [25/5](text_diff_Reshape_5_25.html#l-onnx-op-reshape-d5-25), [24/5](text_diff_Reshape_5_24.html#l-onnx-op-reshape-d5-24), [23/5](text_diff_Reshape_5_23.html#l-onnx-op-reshape-d5-23), [21/5](text_diff_Reshape_5_21.html#l-onnx-op-reshape-d5-21), [19/5](text_diff_Reshape_5_19.html#l-onnx-op-reshape-d5-19), [14/5](text_diff_Reshape_5_14.html#l-onnx-op-reshape-d5-14), [13/5](text_diff_Reshape_5_13.html#l-onnx-op-reshape-d5-13), [25/1](text_diff_Reshape_1_25.html#l-onnx-op-reshape-d1-25), [24/1](text_diff_Reshape_1_24.html#l-onnx-op-reshape-d1-24), [23/1](text_diff_Reshape_1_23.html#l-onnx-op-reshape-d1-23), [21/1](text_diff_Reshape_1_21.html#l-onnx-op-reshape-d1-21), [19/1](text_diff_Reshape_1_19.html#l-onnx-op-reshape-d1-19), [14/1](text_diff_Reshape_1_14.html#l-onnx-op-reshape-d1-14), [13/1](text_diff_Reshape_1_13.html#l-onnx-op-reshape-d1-13), [5/1](text_diff_Reshape_1_5.html#l-onnx-op-reshape-d1-5)
|
[Resize](onnx__Resize.html#l-onnx-doc-resize)
|
[19](onnx__Resize.html#l-onnx-op-resize-19), [18](onnx__Resize.html#l-onnx-op-resize-18), [13](onnx__Resize.html#l-onnx-op-resize-13), [11](onnx__Resize.html#l-onnx-op-resize-11), [10](onnx__Resize.html#l-onnx-op-resize-10)
|
[19/18](text_diff_Resize_18_19.html#l-onnx-op-resize-d18-19), [19/13](text_diff_Resize_13_19.html#l-onnx-op-resize-d13-19), [18/13](text_diff_Resize_13_18.html#l-onnx-op-resize-d13-18), [19/11](text_diff_Resize_11_19.html#l-onnx-op-resize-d11-19), [18/11](text_diff_Resize_11_18.html#l-onnx-op-resize-d11-18), [13/11](text_diff_Resize_11_13.html#l-onnx-op-resize-d11-13), [19/10](text_diff_Resize_10_19.html#l-onnx-op-resize-d10-19), [18/10](text_diff_Resize_10_18.html#l-onnx-op-resize-d10-18), [13/10](text_diff_Resize_10_13.html#l-onnx-op-resize-d10-13), [11/10](text_diff_Resize_10_11.html#l-onnx-op-resize-d10-11)
|
[ReverseSequence](onnx__ReverseSequence.html#l-onnx-doc-reversesequence)
|
[10](onnx__ReverseSequence.html#l-onnx-op-reversesequence-10)
|
|
[RoiAlign](onnx__RoiAlign.html#l-onnx-doc-roialign)
|
[22](onnx__RoiAlign.html#l-onnx-op-roialign-22), [16](onnx__RoiAlign.html#l-onnx-op-roialign-16), [10](onnx__RoiAlign.html#l-onnx-op-roialign-10)
|
[22/16](text_diff_RoiAlign_16_22.html#l-onnx-op-roialign-d16-22), [22/10](text_diff_RoiAlign_10_22.html#l-onnx-op-roialign-d10-22), [16/10](text_diff_RoiAlign_10_16.html#l-onnx-op-roialign-d10-16)
|
[RotaryEmbedding](onnx__RotaryEmbedding.html#l-onnx-doc-rotaryembedding)
|
[23](onnx__RotaryEmbedding.html#l-onnx-op-rotaryembedding-23)
|
|
[Round](onnx__Round.html#l-onnx-doc-round)
|
[22](onnx__Round.html#l-onnx-op-round-22), [11](onnx__Round.html#l-onnx-op-round-11)
|
[22/11](text_diff_Round_11_22.html#l-onnx-op-round-d11-22)
|
[STFT](onnx__STFT.html#l-onnx-doc-stft)
|
[17](onnx__STFT.html#l-onnx-op-stft-17)
|
|
[Scan](onnx__Scan.html#l-onnx-doc-scan)
|
[25](onnx__Scan.html#l-onnx-op-scan-25), [24](onnx__Scan.html#l-onnx-op-scan-24), [23](onnx__Scan.html#l-onnx-op-scan-23), [21](onnx__Scan.html#l-onnx-op-scan-21), [19](onnx__Scan.html#l-onnx-op-scan-19), [16](onnx__Scan.html#l-onnx-op-scan-16), [11](onnx__Scan.html#l-onnx-op-scan-11), [9](onnx__Scan.html#l-onnx-op-scan-9), [8](onnx__Scan.html#l-onnx-op-scan-8)
|
[25/24](text_diff_Scan_24_25.html#l-onnx-op-scan-d24-25), [25/23](text_diff_Scan_23_25.html#l-onnx-op-scan-d23-25), [24/23](text_diff_Scan_23_24.html#l-onnx-op-scan-d23-24), [25/21](text_diff_Scan_21_25.html#l-onnx-op-scan-d21-25), [24/21](text_diff_Scan_21_24.html#l-onnx-op-scan-d21-24), [23/21](text_diff_Scan_21_23.html#l-onnx-op-scan-d21-23), [25/19](text_diff_Scan_19_25.html#l-onnx-op-scan-d19-25), [24/19](text_diff_Scan_19_24.html#l-onnx-op-scan-d19-24), [23/19](text_diff_Scan_19_23.html#l-onnx-op-scan-d19-23), [21/19](text_diff_Scan_19_21.html#l-onnx-op-scan-d19-21), [25/16](text_diff_Scan_16_25.html#l-onnx-op-scan-d16-25), [24/16](text_diff_Scan_16_24.html#l-onnx-op-scan-d16-24), [23/16](text_diff_Scan_16_23.html#l-onnx-op-scan-d16-23), [21/16](text_diff_Scan_16_21.html#l-onnx-op-scan-d16-21), [19/16](text_diff_Scan_16_19.html#l-onnx-op-scan-d16-19), [25/11](text_diff_Scan_11_25.html#l-onnx-op-scan-d11-25), [24/11](text_diff_Scan_11_24.html#l-onnx-op-scan-d11-24), [23/11](text_diff_Scan_11_23.html#l-onnx-op-scan-d11-23), [21/11](text_diff_Scan_11_21.html#l-onnx-op-scan-d11-21), [19/11](text_diff_Scan_11_19.html#l-onnx-op-scan-d11-19), [16/11](text_diff_Scan_11_16.html#l-onnx-op-scan-d11-16), [25/9](text_diff_Scan_9_25.html#l-onnx-op-scan-d9-25), [24/9](text_diff_Scan_9_24.html#l-onnx-op-scan-d9-24), [23/9](text_diff_Scan_9_23.html#l-onnx-op-scan-d9-23), [21/9](text_diff_Scan_9_21.html#l-onnx-op-scan-d9-21), [19/9](text_diff_Scan_9_19.html#l-onnx-op-scan-d9-19), [16/9](text_diff_Scan_9_16.html#l-onnx-op-scan-d9-16), [11/9](text_diff_Scan_9_11.html#l-onnx-op-scan-d9-11), [25/8](text_diff_Scan_8_25.html#l-onnx-op-scan-d8-25), [24/8](text_diff_Scan_8_24.html#l-onnx-op-scan-d8-24), [23/8](text_diff_Scan_8_23.html#l-onnx-op-scan-d8-23), [21/8](text_diff_Scan_8_21.html#l-onnx-op-scan-d8-21), [19/8](text_diff_Scan_8_19.html#l-onnx-op-scan-d8-19), [16/8](text_diff_Scan_8_16.html#l-onnx-op-scan-d8-16), [11/8](text_diff_Scan_8_11.html#l-onnx-op-scan-d8-11), [9/8](text_diff_Scan_8_9.html#l-onnx-op-scan-d8-9)
|
[Scatter](onnx__Scatter.html#l-onnx-doc-scatter)
|
[11](onnx__Scatter.html#l-onnx-op-scatter-11), [9](onnx__Scatter.html#l-onnx-op-scatter-9)
|
[11/9](text_diff_Scatter_9_11.html#l-onnx-op-scatter-d9-11)
|
[ScatterElements](onnx__ScatterElements.html#l-onnx-doc-scatterelements)
|
[18](onnx__ScatterElements.html#l-onnx-op-scatterelements-18), [16](onnx__ScatterElements.html#l-onnx-op-scatterelements-16), [13](onnx__ScatterElements.html#l-onnx-op-scatterelements-13), [11](onnx__ScatterElements.html#l-onnx-op-scatterelements-11)
|
[18/16](text_diff_ScatterElements_16_18.html#l-onnx-op-scatterelements-d16-18), [18/13](text_diff_ScatterElements_13_18.html#l-onnx-op-scatterelements-d13-18), [16/13](text_diff_ScatterElements_13_16.html#l-onnx-op-scatterelements-d13-16), [18/11](text_diff_ScatterElements_11_18.html#l-onnx-op-scatterelements-d11-18), [16/11](text_diff_ScatterElements_11_16.html#l-onnx-op-scatterelements-d11-16), [13/11](text_diff_ScatterElements_11_13.html#l-onnx-op-scatterelements-d11-13)
|
[ScatterND](onnx__ScatterND.html#l-onnx-doc-scatternd)
|
[18](onnx__ScatterND.html#l-onnx-op-scatternd-18), [16](onnx__ScatterND.html#l-onnx-op-scatternd-16), [13](onnx__ScatterND.html#l-onnx-op-scatternd-13), [11](onnx__ScatterND.html#l-onnx-op-scatternd-11)
|
[18/16](text_diff_ScatterND_16_18.html#l-onnx-op-scatternd-d16-18), [18/13](text_diff_ScatterND_13_18.html#l-onnx-op-scatternd-d13-18), [16/13](text_diff_ScatterND_13_16.html#l-onnx-op-scatternd-d13-16), [18/11](text_diff_ScatterND_11_18.html#l-onnx-op-scatternd-d11-18), [16/11](text_diff_ScatterND_11_16.html#l-onnx-op-scatternd-d11-16), [13/11](text_diff_ScatterND_11_13.html#l-onnx-op-scatternd-d11-13)
|
[Selu](onnx__Selu.html#l-onnx-doc-selu)
|
[22](onnx__Selu.html#l-onnx-op-selu-22), [6](onnx__Selu.html#l-onnx-op-selu-6), [1](onnx__Selu.html#l-onnx-op-selu-1)
|
[22/6](text_diff_Selu_6_22.html#l-onnx-op-selu-d6-22), [22/1](text_diff_Selu_1_22.html#l-onnx-op-selu-d1-22), [6/1](text_diff_Selu_1_6.html#l-onnx-op-selu-d1-6)
|
[SequenceAt](onnx__SequenceAt.html#l-onnx-doc-sequenceat)
|
[11](onnx__SequenceAt.html#l-onnx-op-sequenceat-11)
|
|
[SequenceConstruct](onnx__SequenceConstruct.html#l-onnx-doc-sequenceconstruct)
|
[11](onnx__SequenceConstruct.html#l-onnx-op-sequenceconstruct-11)
|
|
[SequenceEmpty](onnx__SequenceEmpty.html#l-onnx-doc-sequenceempty)
|
[11](onnx__SequenceEmpty.html#l-onnx-op-sequenceempty-11)
|
|
[SequenceErase](onnx__SequenceErase.html#l-onnx-doc-sequenceerase)
|
[11](onnx__SequenceErase.html#l-onnx-op-sequenceerase-11)
|
|
[SequenceInsert](onnx__SequenceInsert.html#l-onnx-doc-sequenceinsert)
|
[11](onnx__SequenceInsert.html#l-onnx-op-sequenceinsert-11)
|
|
[SequenceLength](onnx__SequenceLength.html#l-onnx-doc-sequencelength)
|
[11](onnx__SequenceLength.html#l-onnx-op-sequencelength-11)
|
|
[SequenceMap](onnx__SequenceMap.html#l-onnx-doc-sequencemap)
|
[17](onnx__SequenceMap.html#l-onnx-op-sequencemap-17)
|
|
[Shape](onnx__Shape.html#l-onnx-doc-shape)
|
[25](onnx__Shape.html#l-onnx-op-shape-25), [24](onnx__Shape.html#l-onnx-op-shape-24), [23](onnx__Shape.html#l-onnx-op-shape-23), [21](onnx__Shape.html#l-onnx-op-shape-21), [19](onnx__Shape.html#l-onnx-op-shape-19), [15](onnx__Shape.html#l-onnx-op-shape-15), [13](onnx__Shape.html#l-onnx-op-shape-13), [1](onnx__Shape.html#l-onnx-op-shape-1)
|
[25/24](text_diff_Shape_24_25.html#l-onnx-op-shape-d24-25), [25/23](text_diff_Shape_23_25.html#l-onnx-op-shape-d23-25), [24/23](text_diff_Shape_23_24.html#l-onnx-op-shape-d23-24), [25/21](text_diff_Shape_21_25.html#l-onnx-op-shape-d21-25), [24/21](text_diff_Shape_21_24.html#l-onnx-op-shape-d21-24), [23/21](text_diff_Shape_21_23.html#l-onnx-op-shape-d21-23), [25/19](text_diff_Shape_19_25.html#l-onnx-op-shape-d19-25), [24/19](text_diff_Shape_19_24.html#l-onnx-op-shape-d19-24), [23/19](text_diff_Shape_19_23.html#l-onnx-op-shape-d19-23), [21/19](text_diff_Shape_19_21.html#l-onnx-op-shape-d19-21), [25/15](text_diff_Shape_15_25.html#l-onnx-op-shape-d15-25), [24/15](text_diff_Shape_15_24.html#l-onnx-op-shape-d15-24), [23/15](text_diff_Shape_15_23.html#l-onnx-op-shape-d15-23), [21/15](text_diff_Shape_15_21.html#l-onnx-op-shape-d15-21), [19/15](text_diff_Shape_15_19.html#l-onnx-op-shape-d15-19), [25/13](text_diff_Shape_13_25.html#l-onnx-op-shape-d13-25), [24/13](text_diff_Shape_13_24.html#l-onnx-op-shape-d13-24), [23/13](text_diff_Shape_13_23.html#l-onnx-op-shape-d13-23), [21/13](text_diff_Shape_13_21.html#l-onnx-op-shape-d13-21), [19/13](text_diff_Shape_13_19.html#l-onnx-op-shape-d13-19), [15/13](text_diff_Shape_13_15.html#l-onnx-op-shape-d13-15), [25/1](text_diff_Shape_1_25.html#l-onnx-op-shape-d1-25), [24/1](text_diff_Shape_1_24.html#l-onnx-op-shape-d1-24), [23/1](text_diff_Shape_1_23.html#l-onnx-op-shape-d1-23), [21/1](text_diff_Shape_1_21.html#l-onnx-op-shape-d1-21), [19/1](text_diff_Shape_1_19.html#l-onnx-op-shape-d1-19), [15/1](text_diff_Shape_1_15.html#l-onnx-op-shape-d1-15), [13/1](text_diff_Shape_1_13.html#l-onnx-op-shape-d1-13)
|
[Shrink](onnx__Shrink.html#l-onnx-doc-shrink)
|
[9](onnx__Shrink.html#l-onnx-op-shrink-9)
|
|
[Sigmoid](onnx__Sigmoid.html#l-onnx-doc-sigmoid)
|
[13](onnx__Sigmoid.html#l-onnx-op-sigmoid-13), [6](onnx__Sigmoid.html#l-onnx-op-sigmoid-6), [1](onnx__Sigmoid.html#l-onnx-op-sigmoid-1)
|
[13/6](text_diff_Sigmoid_6_13.html#l-onnx-op-sigmoid-d6-13), [13/1](text_diff_Sigmoid_1_13.html#l-onnx-op-sigmoid-d1-13), [6/1](text_diff_Sigmoid_1_6.html#l-onnx-op-sigmoid-d1-6)
|
[Sign](onnx__Sign.html#l-onnx-doc-sign)
|
[13](onnx__Sign.html#l-onnx-op-sign-13), [9](onnx__Sign.html#l-onnx-op-sign-9)
|
[13/9](text_diff_Sign_9_13.html#l-onnx-op-sign-d9-13)
|
[Sin](onnx__Sin.html#l-onnx-doc-sin)
|
[22](onnx__Sin.html#l-onnx-op-sin-22), [7](onnx__Sin.html#l-onnx-op-sin-7)
|
[22/7](text_diff_Sin_7_22.html#l-onnx-op-sin-d7-22)
|
[Sinh](onnx__Sinh.html#l-onnx-doc-sinh)
|
[22](onnx__Sinh.html#l-onnx-op-sinh-22), [9](onnx__Sinh.html#l-onnx-op-sinh-9)
|
[22/9](text_diff_Sinh_9_22.html#l-onnx-op-sinh-d9-22)
|
[Size](onnx__Size.html#l-onnx-doc-size)
|
[25](onnx__Size.html#l-onnx-op-size-25), [24](onnx__Size.html#l-onnx-op-size-24), [23](onnx__Size.html#l-onnx-op-size-23), [21](onnx__Size.html#l-onnx-op-size-21), [19](onnx__Size.html#l-onnx-op-size-19), [13](onnx__Size.html#l-onnx-op-size-13), [1](onnx__Size.html#l-onnx-op-size-1)
|
[25/24](text_diff_Size_24_25.html#l-onnx-op-size-d24-25), [25/23](text_diff_Size_23_25.html#l-onnx-op-size-d23-25), [24/23](text_diff_Size_23_24.html#l-onnx-op-size-d23-24), [25/21](text_diff_Size_21_25.html#l-onnx-op-size-d21-25), [24/21](text_diff_Size_21_24.html#l-onnx-op-size-d21-24), [23/21](text_diff_Size_21_23.html#l-onnx-op-size-d21-23), [25/19](text_diff_Size_19_25.html#l-onnx-op-size-d19-25), [24/19](text_diff_Size_19_24.html#l-onnx-op-size-d19-24), [23/19](text_diff_Size_19_23.html#l-onnx-op-size-d19-23), [21/19](text_diff_Size_19_21.html#l-onnx-op-size-d19-21), [25/13](text_diff_Size_13_25.html#l-onnx-op-size-d13-25), [24/13](text_diff_Size_13_24.html#l-onnx-op-size-d13-24), [23/13](text_diff_Size_13_23.html#l-onnx-op-size-d13-23), [21/13](text_diff_Size_13_21.html#l-onnx-op-size-d13-21), [19/13](text_diff_Size_13_19.html#l-onnx-op-size-d13-19), [25/1](text_diff_Size_1_25.html#l-onnx-op-size-d1-25), [24/1](text_diff_Size_1_24.html#l-onnx-op-size-d1-24), [23/1](text_diff_Size_1_23.html#l-onnx-op-size-d1-23), [21/1](text_diff_Size_1_21.html#l-onnx-op-size-d1-21), [19/1](text_diff_Size_1_19.html#l-onnx-op-size-d1-19), [13/1](text_diff_Size_1_13.html#l-onnx-op-size-d1-13)
|
[Slice](onnx__Slice.html#l-onnx-doc-slice)
|
[13](onnx__Slice.html#l-onnx-op-slice-13), [11](onnx__Slice.html#l-onnx-op-slice-11), [10](onnx__Slice.html#l-onnx-op-slice-10), [1](onnx__Slice.html#l-onnx-op-slice-1)
|
[13/11](text_diff_Slice_11_13.html#l-onnx-op-slice-d11-13), [13/10](text_diff_Slice_10_13.html#l-onnx-op-slice-d10-13), [11/10](text_diff_Slice_10_11.html#l-onnx-op-slice-d10-11), [13/1](text_diff_Slice_1_13.html#l-onnx-op-slice-d1-13), [11/1](text_diff_Slice_1_11.html#l-onnx-op-slice-d1-11), [10/1](text_diff_Slice_1_10.html#l-onnx-op-slice-d1-10)
|
[Softmax](onnx__Softmax.html#l-onnx-doc-softmax)
|
[13](onnx__Softmax.html#l-onnx-op-softmax-13), [11](onnx__Softmax.html#l-onnx-op-softmax-11), [1](onnx__Softmax.html#l-onnx-op-softmax-1)
|
[13/11](text_diff_Softmax_11_13.html#l-onnx-op-softmax-d11-13), [13/1](text_diff_Softmax_1_13.html#l-onnx-op-softmax-d1-13), [11/1](text_diff_Softmax_1_11.html#l-onnx-op-softmax-d1-11)
|
[SoftmaxCrossEntropyLoss](onnx__SoftmaxCrossEntropyLoss.html#l-onnx-doc-softmaxcrossentropyloss)
|
[13](onnx__SoftmaxCrossEntropyLoss.html#l-onnx-op-softmaxcrossentropyloss-13), [12](onnx__SoftmaxCrossEntropyLoss.html#l-onnx-op-softmaxcrossentropyloss-12)
|
[13/12](text_diff_SoftmaxCrossEntropyLoss_12_13.html#l-onnx-op-softmaxcrossentropyloss-d12-13)
|
[Softplus](onnx__Softplus.html#l-onnx-doc-softplus)
|
[22](onnx__Softplus.html#l-onnx-op-softplus-22), [1](onnx__Softplus.html#l-onnx-op-softplus-1)
|
[22/1](text_diff_Softplus_1_22.html#l-onnx-op-softplus-d1-22)
|
[Softsign](onnx__Softsign.html#l-onnx-doc-softsign)
|
[22](onnx__Softsign.html#l-onnx-op-softsign-22), [1](onnx__Softsign.html#l-onnx-op-softsign-1)
|
[22/1](text_diff_Softsign_1_22.html#l-onnx-op-softsign-d1-22)
|
[SpaceToDepth](onnx__SpaceToDepth.html#l-onnx-doc-spacetodepth)
|
[13](onnx__SpaceToDepth.html#l-onnx-op-spacetodepth-13), [1](onnx__SpaceToDepth.html#l-onnx-op-spacetodepth-1)
|
[13/1](text_diff_SpaceToDepth_1_13.html#l-onnx-op-spacetodepth-d1-13)
|
[Split](onnx__Split.html#l-onnx-doc-split)
|
[18](onnx__Split.html#l-onnx-op-split-18), [13](onnx__Split.html#l-onnx-op-split-13), [11](onnx__Split.html#l-onnx-op-split-11), [2](onnx__Split.html#l-onnx-op-split-2), [1](onnx__Split.html#l-onnx-op-split-1)
|
[18/13](text_diff_Split_13_18.html#l-onnx-op-split-d13-18), [18/11](text_diff_Split_11_18.html#l-onnx-op-split-d11-18), [13/11](text_diff_Split_11_13.html#l-onnx-op-split-d11-13), [18/2](text_diff_Split_2_18.html#l-onnx-op-split-d2-18), [13/2](text_diff_Split_2_13.html#l-onnx-op-split-d2-13), [11/2](text_diff_Split_2_11.html#l-onnx-op-split-d2-11), [18/1](text_diff_Split_1_18.html#l-onnx-op-split-d1-18), [13/1](text_diff_Split_1_13.html#l-onnx-op-split-d1-13), [11/1](text_diff_Split_1_11.html#l-onnx-op-split-d1-11), [2/1](text_diff_Split_1_2.html#l-onnx-op-split-d1-2)
|
[SplitToSequence](onnx__SplitToSequence.html#l-onnx-doc-splittosequence)
|
[24](onnx__SplitToSequence.html#l-onnx-op-splittosequence-24), [11](onnx__SplitToSequence.html#l-onnx-op-splittosequence-11)
|
[24/11](text_diff_SplitToSequence_11_24.html#l-onnx-op-splittosequence-d11-24)
|
[Sqrt](onnx__Sqrt.html#l-onnx-doc-sqrt)
|
[13](onnx__Sqrt.html#l-onnx-op-sqrt-13), [6](onnx__Sqrt.html#l-onnx-op-sqrt-6), [1](onnx__Sqrt.html#l-onnx-op-sqrt-1)
|
[13/6](text_diff_Sqrt_6_13.html#l-onnx-op-sqrt-d6-13), [13/1](text_diff_Sqrt_1_13.html#l-onnx-op-sqrt-d1-13), [6/1](text_diff_Sqrt_1_6.html#l-onnx-op-sqrt-d1-6)
|
[Squeeze](onnx__Squeeze.html#l-onnx-doc-squeeze)
|
[25](onnx__Squeeze.html#l-onnx-op-squeeze-25), [24](onnx__Squeeze.html#l-onnx-op-squeeze-24), [23](onnx__Squeeze.html#l-onnx-op-squeeze-23), [21](onnx__Squeeze.html#l-onnx-op-squeeze-21), [13](onnx__Squeeze.html#l-onnx-op-squeeze-13), [11](onnx__Squeeze.html#l-onnx-op-squeeze-11), [1](onnx__Squeeze.html#l-onnx-op-squeeze-1)
|
[25/24](text_diff_Squeeze_24_25.html#l-onnx-op-squeeze-d24-25), [25/23](text_diff_Squeeze_23_25.html#l-onnx-op-squeeze-d23-25), [24/23](text_diff_Squeeze_23_24.html#l-onnx-op-squeeze-d23-24), [25/21](text_diff_Squeeze_21_25.html#l-onnx-op-squeeze-d21-25), [24/21](text_diff_Squeeze_21_24.html#l-onnx-op-squeeze-d21-24), [23/21](text_diff_Squeeze_21_23.html#l-onnx-op-squeeze-d21-23), [25/13](text_diff_Squeeze_13_25.html#l-onnx-op-squeeze-d13-25), [24/13](text_diff_Squeeze_13_24.html#l-onnx-op-squeeze-d13-24), [23/13](text_diff_Squeeze_13_23.html#l-onnx-op-squeeze-d13-23), [21/13](text_diff_Squeeze_13_21.html#l-onnx-op-squeeze-d13-21), [25/11](text_diff_Squeeze_11_25.html#l-onnx-op-squeeze-d11-25), [24/11](text_diff_Squeeze_11_24.html#l-onnx-op-squeeze-d11-24), [23/11](text_diff_Squeeze_11_23.html#l-onnx-op-squeeze-d11-23), [21/11](text_diff_Squeeze_11_21.html#l-onnx-op-squeeze-d11-21), [13/11](text_diff_Squeeze_11_13.html#l-onnx-op-squeeze-d11-13), [25/1](text_diff_Squeeze_1_25.html#l-onnx-op-squeeze-d1-25), [24/1](text_diff_Squeeze_1_24.html#l-onnx-op-squeeze-d1-24), [23/1](text_diff_Squeeze_1_23.html#l-onnx-op-squeeze-d1-23), [21/1](text_diff_Squeeze_1_21.html#l-onnx-op-squeeze-d1-21), [13/1](text_diff_Squeeze_1_13.html#l-onnx-op-squeeze-d1-13), [11/1](text_diff_Squeeze_1_11.html#l-onnx-op-squeeze-d1-11)
|
[StringConcat](onnx__StringConcat.html#l-onnx-doc-stringconcat)
|
[20](onnx__StringConcat.html#l-onnx-op-stringconcat-20)
|
|
[StringNormalizer](onnx__StringNormalizer.html#l-onnx-doc-stringnormalizer)
|
[10](onnx__StringNormalizer.html#l-onnx-op-stringnormalizer-10)
|
|
[StringSplit](onnx__StringSplit.html#l-onnx-doc-stringsplit)
|
[20](onnx__StringSplit.html#l-onnx-op-stringsplit-20)
|
|
[Sub](onnx__Sub.html#l-onnx-doc-sub)
|
[14](onnx__Sub.html#l-onnx-op-sub-14), [13](onnx__Sub.html#l-onnx-op-sub-13), [7](onnx__Sub.html#l-onnx-op-sub-7), [6](onnx__Sub.html#l-onnx-op-sub-6), [1](onnx__Sub.html#l-onnx-op-sub-1)
|
[14/13](text_diff_Sub_13_14.html#l-onnx-op-sub-d13-14), [14/7](text_diff_Sub_7_14.html#l-onnx-op-sub-d7-14), [13/7](text_diff_Sub_7_13.html#l-onnx-op-sub-d7-13), [14/6](text_diff_Sub_6_14.html#l-onnx-op-sub-d6-14), [13/6](text_diff_Sub_6_13.html#l-onnx-op-sub-d6-13), [7/6](text_diff_Sub_6_7.html#l-onnx-op-sub-d6-7), [14/1](text_diff_Sub_1_14.html#l-onnx-op-sub-d1-14), [13/1](text_diff_Sub_1_13.html#l-onnx-op-sub-d1-13), [7/1](text_diff_Sub_1_7.html#l-onnx-op-sub-d1-7), [6/1](text_diff_Sub_1_6.html#l-onnx-op-sub-d1-6)
|
[Sum](onnx__Sum.html#l-onnx-doc-sum)
|
[13](onnx__Sum.html#l-onnx-op-sum-13), [8](onnx__Sum.html#l-onnx-op-sum-8), [6](onnx__Sum.html#l-onnx-op-sum-6), [1](onnx__Sum.html#l-onnx-op-sum-1)
|
[13/8](text_diff_Sum_8_13.html#l-onnx-op-sum-d8-13), [13/6](text_diff_Sum_6_13.html#l-onnx-op-sum-d6-13), [8/6](text_diff_Sum_6_8.html#l-onnx-op-sum-d6-8), [13/1](text_diff_Sum_1_13.html#l-onnx-op-sum-d1-13), [8/1](text_diff_Sum_1_8.html#l-onnx-op-sum-d1-8), [6/1](text_diff_Sum_1_6.html#l-onnx-op-sum-d1-6)
|
[Swish](onnx__Swish.html#l-onnx-doc-swish)
|
[24](onnx__Swish.html#l-onnx-op-swish-24)
|
|
[Tan](onnx__Tan.html#l-onnx-doc-tan)
|
[22](onnx__Tan.html#l-onnx-op-tan-22), [7](onnx__Tan.html#l-onnx-op-tan-7)
|
[22/7](text_diff_Tan_7_22.html#l-onnx-op-tan-d7-22)
|
[Tanh](onnx__Tanh.html#l-onnx-doc-tanh)
|
[13](onnx__Tanh.html#l-onnx-op-tanh-13), [6](onnx__Tanh.html#l-onnx-op-tanh-6), [1](onnx__Tanh.html#l-onnx-op-tanh-1)
|
[13/6](text_diff_Tanh_6_13.html#l-onnx-op-tanh-d6-13), [13/1](text_diff_Tanh_1_13.html#l-onnx-op-tanh-d1-13), [6/1](text_diff_Tanh_1_6.html#l-onnx-op-tanh-d1-6)
|
[TensorScatter](onnx__TensorScatter.html#l-onnx-doc-tensorscatter)
|
[24](onnx__TensorScatter.html#l-onnx-op-tensorscatter-24)
|
|
[TfIdfVectorizer](onnx__TfIdfVectorizer.html#l-onnx-doc-tfidfvectorizer)
|
[9](onnx__TfIdfVectorizer.html#l-onnx-op-tfidfvectorizer-9)
|
|
[ThresholdedRelu](onnx__ThresholdedRelu.html#l-onnx-doc-thresholdedrelu)
|
[22](onnx__ThresholdedRelu.html#l-onnx-op-thresholdedrelu-22), [10](onnx__ThresholdedRelu.html#l-onnx-op-thresholdedrelu-10)
|
[22/10](text_diff_ThresholdedRelu_10_22.html#l-onnx-op-thresholdedrelu-d10-22)
|
[Tile](onnx__Tile.html#l-onnx-doc-tile)
|
[13](onnx__Tile.html#l-onnx-op-tile-13), [6](onnx__Tile.html#l-onnx-op-tile-6), [1](onnx__Tile.html#l-onnx-op-tile-1)
|
[13/6](text_diff_Tile_6_13.html#l-onnx-op-tile-d6-13), [13/1](text_diff_Tile_1_13.html#l-onnx-op-tile-d1-13), [6/1](text_diff_Tile_1_6.html#l-onnx-op-tile-d1-6)
|
[TopK](onnx__TopK.html#l-onnx-doc-topk)
|
[24](onnx__TopK.html#l-onnx-op-topk-24), [11](onnx__TopK.html#l-onnx-op-topk-11), [10](onnx__TopK.html#l-onnx-op-topk-10), [1](onnx__TopK.html#l-onnx-op-topk-1)
|
[24/11](text_diff_TopK_11_24.html#l-onnx-op-topk-d11-24), [24/10](text_diff_TopK_10_24.html#l-onnx-op-topk-d10-24), [11/10](text_diff_TopK_10_11.html#l-onnx-op-topk-d10-11), [24/1](text_diff_TopK_1_24.html#l-onnx-op-topk-d1-24), [11/1](text_diff_TopK_1_11.html#l-onnx-op-topk-d1-11), [10/1](text_diff_TopK_1_10.html#l-onnx-op-topk-d1-10)
|
[Transpose](onnx__Transpose.html#l-onnx-doc-transpose)
|
[25](onnx__Transpose.html#l-onnx-op-transpose-25), [24](onnx__Transpose.html#l-onnx-op-transpose-24), [23](onnx__Transpose.html#l-onnx-op-transpose-23), [21](onnx__Transpose.html#l-onnx-op-transpose-21), [13](onnx__Transpose.html#l-onnx-op-transpose-13), [1](onnx__Transpose.html#l-onnx-op-transpose-1)
|
[25/24](text_diff_Transpose_24_25.html#l-onnx-op-transpose-d24-25), [25/23](text_diff_Transpose_23_25.html#l-onnx-op-transpose-d23-25), [24/23](text_diff_Transpose_23_24.html#l-onnx-op-transpose-d23-24), [25/21](text_diff_Transpose_21_25.html#l-onnx-op-transpose-d21-25), [24/21](text_diff_Transpose_21_24.html#l-onnx-op-transpose-d21-24), [23/21](text_diff_Transpose_21_23.html#l-onnx-op-transpose-d21-23), [25/13](text_diff_Transpose_13_25.html#l-onnx-op-transpose-d13-25), [24/13](text_diff_Transpose_13_24.html#l-onnx-op-transpose-d13-24), [23/13](text_diff_Transpose_13_23.html#l-onnx-op-transpose-d13-23), [21/13](text_diff_Transpose_13_21.html#l-onnx-op-transpose-d13-21), [25/1](text_diff_Transpose_1_25.html#l-onnx-op-transpose-d1-25), [24/1](text_diff_Transpose_1_24.html#l-onnx-op-transpose-d1-24), [23/1](text_diff_Transpose_1_23.html#l-onnx-op-transpose-d1-23), [21/1](text_diff_Transpose_1_21.html#l-onnx-op-transpose-d1-21), [13/1](text_diff_Transpose_1_13.html#l-onnx-op-transpose-d1-13)
|
[Trilu](onnx__Trilu.html#l-onnx-doc-trilu)
|
[14](onnx__Trilu.html#l-onnx-op-trilu-14)
|
|
[Unique](onnx__Unique.html#l-onnx-doc-unique)
|
[11](onnx__Unique.html#l-onnx-op-unique-11)
|
|
[Unsqueeze](onnx__Unsqueeze.html#l-onnx-doc-unsqueeze)
|
[25](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-25), [24](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-24), [23](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-23), [21](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-21), [13](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-13), [11](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-11), [1](onnx__Unsqueeze.html#l-onnx-op-unsqueeze-1)
|
[25/24](text_diff_Unsqueeze_24_25.html#l-onnx-op-unsqueeze-d24-25), [25/23](text_diff_Unsqueeze_23_25.html#l-onnx-op-unsqueeze-d23-25), [24/23](text_diff_Unsqueeze_23_24.html#l-onnx-op-unsqueeze-d23-24), [25/21](text_diff_Unsqueeze_21_25.html#l-onnx-op-unsqueeze-d21-25), [24/21](text_diff_Unsqueeze_21_24.html#l-onnx-op-unsqueeze-d21-24), [23/21](text_diff_Unsqueeze_21_23.html#l-onnx-op-unsqueeze-d21-23), [25/13](text_diff_Unsqueeze_13_25.html#l-onnx-op-unsqueeze-d13-25), [24/13](text_diff_Unsqueeze_13_24.html#l-onnx-op-unsqueeze-d13-24), [23/13](text_diff_Unsqueeze_13_23.html#l-onnx-op-unsqueeze-d13-23), [21/13](text_diff_Unsqueeze_13_21.html#l-onnx-op-unsqueeze-d13-21), [25/11](text_diff_Unsqueeze_11_25.html#l-onnx-op-unsqueeze-d11-25), [24/11](text_diff_Unsqueeze_11_24.html#l-onnx-op-unsqueeze-d11-24), [23/11](text_diff_Unsqueeze_11_23.html#l-onnx-op-unsqueeze-d11-23), [21/11](text_diff_Unsqueeze_11_21.html#l-onnx-op-unsqueeze-d11-21), [13/11](text_diff_Unsqueeze_11_13.html#l-onnx-op-unsqueeze-d11-13), [25/1](text_diff_Unsqueeze_1_25.html#l-onnx-op-unsqueeze-d1-25), [24/1](text_diff_Unsqueeze_1_24.html#l-onnx-op-unsqueeze-d1-24), [23/1](text_diff_Unsqueeze_1_23.html#l-onnx-op-unsqueeze-d1-23), [21/1](text_diff_Unsqueeze_1_21.html#l-onnx-op-unsqueeze-d1-21), [13/1](text_diff_Unsqueeze_1_13.html#l-onnx-op-unsqueeze-d1-13), [11/1](text_diff_Unsqueeze_1_11.html#l-onnx-op-unsqueeze-d1-11)
|
[Upsample](onnx__Upsample.html#l-onnx-doc-upsample)
|
[10](onnx__Upsample.html#l-onnx-op-upsample-10), [9](onnx__Upsample.html#l-onnx-op-upsample-9), [7](onnx__Upsample.html#l-onnx-op-upsample-7), [1](onnx__Upsample.html#l-onnx-op-upsample-1)
|
[10/9](text_diff_Upsample_9_10.html#l-onnx-op-upsample-d9-10), [10/7](text_diff_Upsample_7_10.html#l-onnx-op-upsample-d7-10), [9/7](text_diff_Upsample_7_9.html#l-onnx-op-upsample-d7-9), [10/1](text_diff_Upsample_1_10.html#l-onnx-op-upsample-d1-10), [9/1](text_diff_Upsample_1_9.html#l-onnx-op-upsample-d1-9), [7/1](text_diff_Upsample_1_7.html#l-onnx-op-upsample-d1-7)
|
[Where](onnx__Where.html#l-onnx-doc-where)
|
[16](onnx__Where.html#l-onnx-op-where-16), [9](onnx__Where.html#l-onnx-op-where-9)
|
[16/9](text_diff_Where_9_16.html#l-onnx-op-where-d9-16)
|
[Xor](onnx__Xor.html#l-onnx-doc-xor)
|
[7](onnx__Xor.html#l-onnx-op-xor-7), [1](onnx__Xor.html#l-onnx-op-xor-1)
|
[7/1](text_diff_Xor_1_7.html#l-onnx-op-xor-d1-7)
|

---

## Source: https://onnx.ai/onnx/expect_onnxruntime.html

# Sample operator test code[¶](#sample-operator-test-code)

Many examples from the documentation end by calling
function `expect`

to check a runtime returns the expected
outputs for the given example. Here is one implementation
based on [onnxruntime](https://onnxruntime.ai/).

```
from typing import Any, Sequence
import numpy as np
import onnx
import onnxruntime
def expect(
node: onnx.NodeProto,
inputs: Sequence[np.ndarray],
outputs: Sequence[np.ndarray],
name: str,
**kwargs: Any,
) -> None:
# Builds the model
present_inputs = [x for x in node.input if (x != "")]
present_outputs = [x for x in node.output if (x != "")]
input_type_protos = [None] * len(inputs)
if "input_type_protos" in kwargs:
input_type_protos = kwargs["input_type_protos"]
del kwargs["input_type_protos"]
output_type_protos = [None] * len(outputs)
if "output_type_protos" in kwargs:
output_type_protos = kwargs["output_type_protos"]
del kwargs["output_type_protos"]
inputs_vi = [
_extract_value_info(arr, arr_name, input_type)
for arr, arr_name, input_type in zip(inputs, present_inputs, input_type_protos)
]
outputs_vi = [
_extract_value_info(arr, arr_name, output_type)
for arr, arr_name, output_type in zip(
outputs, present_outputs, output_type_protos
)
]
graph = onnx.helper.make_graph(
nodes=[node], name=name, inputs=inputs_vi, outputs=outputs_vi
)
kwargs["producer_name"] = "backend-test"
if "opset_imports" not in kwargs:
# To make sure the model will be produced with the same opset_version after opset changes
# By default, it uses since_version as opset_version for produced models
produce_opset_version = onnx.defs.get_schema(
node.op_type, domain=node.domain
).since_version
kwargs["opset_imports"] = [
onnx.helper.make_operatorsetid(node.domain, produce_opset_version)
]
model = onnx.helper.make_model_gen_version(graph, **kwargs)
# Checking the produces are the expected ones.
sess = onnxruntime.InferenceSession(model.SerializeToString(),
providers=["CPUExecutionProvider"])
feeds = {name: value for name, value in zip(node.input, inputs)}
results = sess.run(None, feeds)
for expected, output in zip(outputs, results):
assert_allclose(expected, output)
```

---

## Source: https://onnx.ai/onnx/operators/onnx__Abs.html

# Abs[¶](#abs)

## Abs - 13[¶](#abs-13)

### Version[¶](#version)

**name**:[Abs (GitHub)](https://github.com/onnx/onnx/blob/main/docs/Operators.md#Abs)**domain**:`main`

**since_version**:`13`

**function**:`False`

**support_level**:`SupportType.COMMON`

**shape inference**:`True`


This version of the operator has been available
**since version 13**.

### Summary[¶](#summary)

Absolute takes one input data (Tensor

### Inputs[¶](#inputs)

**X**(heterogeneous) -**T**:Input tensor


### Outputs[¶](#outputs)

**Y**(heterogeneous) -**T**:Output tensor


### Type Constraints[¶](#type-constraints)

**T**in (`tensor(bfloat16)`

,`tensor(double)`

,`tensor(float)`

,`tensor(float16)`

,`tensor(int16)`

,`tensor(int32)`

,`tensor(int64)`

,`tensor(int8)`

,`tensor(uint16)`

,`tensor(uint32)`

,`tensor(uint64)`

,`tensor(uint8)`

):Constrain input and output types to all numeric tensors.


## Abs - 6[¶](#abs-6)

### Version[¶](#id1)

**name**:[Abs (GitHub)](https://github.com/onnx/onnx/blob/main/docs/Operators.md#Abs)**domain**:`main`

**since_version**:`6`

**function**:`False`

**support_level**:`SupportType.COMMON`

**shape inference**:`True`


This version of the operator has been available
**since version 6**.

### Summary[¶](#id2)

Absolute takes one input data (Tensor

### Inputs[¶](#id3)

**X**(heterogeneous) -**T**:Input tensor


### Outputs[¶](#id4)

**Y**(heterogeneous) -**T**:Output tensor


### Type Constraints[¶](#id5)

**T**in (`tensor(double)`

,`tensor(float)`

,`tensor(float16)`

,`tensor(int16)`

,`tensor(int32)`

,`tensor(int64)`

,`tensor(int8)`

,`tensor(uint16)`

,`tensor(uint32)`

,`tensor(uint64)`

,`tensor(uint8)`

):Constrain input and output types to all numeric tensors.


## Abs - 1[¶](#abs-1)

### Version[¶](#id6)

**name**:[Abs (GitHub)](https://github.com/onnx/onnx/blob/main/docs/Operators.md#Abs)**domain**:`main`

**since_version**:`1`

**function**:`False`

**support_level**:`SupportType.COMMON`

**shape inference**:`False`


This version of the operator has been available
**since version 1**.

### Summary[¶](#id7)

Absolute takes one input data (Tensor

### Attributes[¶](#attributes)

**consumed_inputs - INTS**:legacy optimization attribute.


### Inputs[¶](#id8)

**X**(heterogeneous) -**T**:Input tensor


### Outputs[¶](#id9)

**Y**(heterogeneous) -**T**:Output tensor


### Type Constraints[¶](#id10)

**T**in (`tensor(double)`

,`tensor(float)`

,`tensor(float16)`

):Constrain input and output types to float tensors.

---

## Source: https://onnx.ai/onnx/operators/text_diff_Abs_6_13.html

# Abs - 6 vs 13[¶](#abs-6-vs-13)

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.

---

## Source: https://onnx.ai/onnx/operators/text_diff_Abs_1_13.html

# Abs - 1 vs 13[¶](#abs-1-vs-13)

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.

---

## Source: https://onnx.ai/onnx/operators/text_diff_Abs_1_6.html

# Abs - 1 vs 6[¶](#abs-1-vs-6)

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.

Next section compares an older to a newer version of the same operator after both definition are converted into markdown text. Green means an addition to the newer version, red means a deletion. Anything else is unchanged.