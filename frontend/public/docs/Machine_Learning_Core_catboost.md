# Catboost Documentation
> Scraped on: 2026-03-30 | Root Source: [https://catboost.ai/docs/](https://catboost.ai/docs/)



---

## Source: https://catboost.ai/docs/

Installation
Overview
Python package installation
CatBoost for Apache Spark installation
R package installation
Command-line version binary
Build from source
Key Features
Training parameters
Python package
CatBoost for Apache Spark
R package
Command-line version
Applying models
Objectives and metrics
Model analysis
Data format description
Parameter tuning
Speeding up the training
Data visualization
Algorithm details
FAQ
Educational materials
Development and contributions
Contacts
CatBoost
CatBoost is a machine learning algorithm that uses gradient boosting on decision trees. It is available as an open source library.
Training
Training
Training on GPU
Python train function
Cross-validation
Overfitting detector
Pre-trained data
Categorical features
Text features
Embeddings features
Applying models
Regular prediction
С and C++
Java
Node.js
Rust
Calculate metrics
Staged prediction
Applying the model in ClickHouse
Model analysis
Feature importances
Object importances
Metrics
Implemented metrics
User-defined metrics
Recovery
Recovery
Visualization tools
Jupyter Notebook
TensorBoard
Exporting models
CoreML
Python or C++
JSON
ONNX
PMML
Educational materials
Tutorials
Reference papers
Videos

---

## Source: https://catboost.ai/

CatBoost is a high-performance open source library for gradient boosting on decision trees

# Features

1

Great quality without parameter tuning

Reduce time spent on parameter tuning, because CatBoost provides great results with default parameters

2

Categorical features support

Improve your training results with CatBoost that allows you to use non-numeric factors, instead of having to pre-process your data or spend time and effort turning it to numbers.

3

Fast and scalable GPU version

Train your model on a fast implementation of gradient-boosting algorithm for GPU. Use a multi-card configuration for large datasets.

4

Improved accuracy

Reduce overfitting when constructing your models with a novel gradient-boosting scheme.

5

Fast prediction

Apply your trained model quickly and efficiently even to latency-critical tasks using CatBoost's model applier

# About

CatBoost is an algorithm for **gradient boosting on decision trees**. It is developed by Yandex researchers and engineers, and is used for search, recommendation systems, personal assistant, self-driving cars, weather prediction and many other tasks at Yandex and in other companies, including CERN, Cloudflare, Careem taxi. It is in open-source and can be used by anyone.

---

## Source: https://catboost.ai/docs/en/concepts/installation

Installation
Overview
Python package installation
CatBoost for Apache Spark installation
R package installation
Command-line version binary
Build from source
Key Features
Training parameters
Python package
CatBoost for Apache Spark
R package
Command-line version
Applying models
Objectives and metrics
Model analysis
Data format description
Parameter tuning
Speeding up the training
Data visualization
Algorithm details
FAQ
Educational materials
Development and contributions
Contacts
Installation
Installation
Overview
Installation
Component-specific information:
Python package installation
CatBoost for Apache Spark installation
R package installation
Command-line version binary
Build from source
Was the article helpful?
Yes
No
Next
Overview

---

## Source: https://catboost.ai/docs/en/concepts/parameter-tuning

# Parameter tuning

CatBoost provides a flexible interface for parameter tuning and can be configured to suit different tasks.

This section contains some tips on the possible parameter settings.

One-hot encoding

Warning

Do not use one-hot encoding during preprocessing. This affects both the training speed and the resulting quality.

Sometimes when categorical features don't have a lot of values, one-hot encoding works well.

Usually one-hot encoding does not significantly improve the quality of the model. But if it is required, use the inbuilt parameters instead of preprocessing the dataset.

## Parameters

**Command-line version parameters:** `--one-hot-max-size`


**Python parameters:** `one_hot_max_size`


**R parameters:** `one_hot_max_size`


Description

Use one-hot encoding for all categorical features with a number of different values less than or equal to the given parameter value. Ctrs are not calculated for such features.

**Default value**

The default value depends on various conditions:

-
N/A if training is performed on CPU in Pairwise scoring mode

## Read more about Pairwise scoring

The following loss functions use Pairwise scoring:

- YetiRankPairwise
- PairLogitPairwise
- QueryCrossEntropy

Pairwise scoring is slightly different from regular training on pairs, since pairs are generated only internally during the training for the corresponding metrics. One-hot encoding is not available for these loss functions.

-
255 if training is performed on GPU and the selected Ctr types require target data that is not available during the training

-
10 if training is performed in

[Ranking](en/concepts/loss-functions-ranking)mode -
2 if none of the conditions above is met


Number of trees

It is recommended to check that there is no obvious underfitting or overfitting before tuning any other parameters. In order to do this it is necessary to analyze the metric value on the validation dataset and select the appropriate number of iterations.

This can be done by setting the number of [iterations](en/references/training-parameters/common#iterations) to a large value, using the [overfitting detector](en/concepts/overfitting-detector) parameters and turning the [use best model](en/references/training-parameters/common#use_best_model) options on. In this case the resulting model contains only the first `k`

best iterations, where `k`

is the iteration with the best loss value on the validation dataset.

Also, the metric for choosing the best model may differ from the one used for optimizing the objective value. For example, it is possible to set the optimized function to Logloss and use the AUC function for the overfitting detector. To do so, use the [evaluation metric](en/references/training-parameters/common#eval_metric) parameter.

## Parameters

**Command-line version parameters:** `-i`

, `--iterations`


**Python parameters:** `--iterations`


**R parameters:** `--iterations`


Description

The maximum number of trees that can be built when solving machine learning problems.

When using other parameters that limit the number of iterations, the final number of trees may be less than the number specified in this parameter.

**Command-line version parameters:** `--use-best-model`


**Python parameters:** `--use-best-model`


**R parameters:** `--use-best-model`


Description

If this parameter is set, the number of trees that are saved in the resulting model is defined as follows:

- Build the number of trees defined by the training parameters.
- Use the validation dataset to identify the iteration with the optimal value of the metric specified in
`--eval-metric`

(`--eval-metric`

).

No trees are saved after this iteration.

This option requires a validation dataset to be provided.

**Command-line version parameters:** `--eval-metric`


**Python parameters:** `--eval-metric`


**R parameters:** `--eval-metric`


Description

The metric used for overfitting detection (if enabled) and best model selection (if enabled). Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


Examples:

```
R2
```


```
Quantile:alpha=0.3
```


**Command-line version parameters:** **Overfitting detection settings**

**Command-line version parameters:** `--od-type`


**Python parameters:** `od_type`


**R parameters:** `od_type`


Description

The type of the overfitting detector to use.

Possible values:

- IncToDec
- Iter

**Command-line version parameters:** `--od-pval`


**Python parameters:** `od_pval`


**R parameters:** `od_pval`


Description

The threshold for the IncToDec [overfitting detector](en/concepts/overfitting-detector) type. The training is stopped when the specified value is reached. Requires that a validation dataset was input.

For best results, it is recommended to set a value in the range .

The larger the value, the earlier overfitting is detected.

Alert

Do not use this parameter with the Iter overfitting detector type.

**Command-line version parameters:** `--od-wait`


**Python parameters:** `od_wait`


**R parameters:** `od_wait`


Description

The number of iterations to continue the training after the iteration with the optimal metric value.

The purpose of this parameter differs depending on the selected overfitting detector type:

- IncToDec — Ignore the overfitting detector when the threshold is reached and continue learning for the specified number of iterations after the iteration with the optimal metric value.
- Iter — Consider the model overfitted and stop training after the specified number of iterations since the iteration with the optimal metric value.

Learning rate

This setting is used for reducing the gradient step. It affects the overall time of training: the smaller the value, the more iterations are required for training. Choose the value based on the performance expectations.

By default, the learning rate is defined automatically based on the dataset properties and the number of iterations. The automatically defined value should be close to the optimal one.

Possible ways of adjusting the learning rate depending on the overfitting results:

- There is no overfitting on the last iterations of training (the training does not converge) — increase the learning rate.
- Overfitting is detected — decrease the learning rate.

## Parameters

Tree depth

In most cases, the optimal depth ranges from 4 to 10. Values in the range from 6 to 10 are recommended.

Note

The maximum depth of the trees is limited to 8 for pairwise modes (YetiRank, PairLogitPairwise and QueryCrossEntropy) when the training is performed on GPU.

## Parameters

**Command-line version parameters:** `-n`

, `--depth`


**Python parameters:** `depth`


**R parameters:** `depth`


Description

Depth of the trees. The range of supported values depends on the processing unit type and the type of the selected loss function:

-
CPU — Any integer up to 16.

-
GPU — Any integer up to 8 pairwise modes (YetiRank, PairLogitPairwise and QueryCrossEntropy) and up to 16 for all other loss functions.


L2 regularization

Try different values for the regularizer to find the best possible.

## Parameters

Random strength

Try setting different values for the `random_strength`

parameter.

## Parameters

**Command-line version parameters:** `--random-strength`


**Python parameters:** `random_strength`


**R parameters:** `random_strength`


Description

The amount of randomness to use for scoring splits when the tree structure is selected. Use this parameter to avoid overfitting the model.

The value of this parameter is used when selecting splits. On every iteration each possible split gets a score (for example, the score indicates how much adding this split will improve the loss function for the training dataset). The split with the highest score is selected.

The scores have no randomness. A normally distributed random variable is added to the score of the feature. It has a zero mean and a variance that decreases during the training. The value of this parameter is the multiplier of the variance.

This parameter is not supported for the following loss functions:

- QueryCrossEntropy
- YetiRankPairwise
- PairLogitPairwise

Bagging temperature

Try setting different values for the `bagging_temperature`

parameter

## Parameters

**Command-line version parameters:** `--bagging-temperature`


**Python parameters:** `bagging_temperature`


**R parameters:** `bagging_temperature`


Description

Defines the settings of the Bayesian bootstrap. It is used by default in classification and regression modes.

Use the Bayesian bootstrap to assign random weights to objects.

The weights are sampled from exponential distribution if the value of this parameter is set to 1

. All weights are equal to 1 if the value of this parameter is set to 0

.

Possible values are in the range . The higher the value the more aggressive the bagging is.

This parameter can be used if the selected bootstrap type is Bayesian.

Border count

The number of splits for numerical features.

The default value depends on the processing unit type and other parameters:

- CPU: 254
- GPU in PairLogitPairwise and YetiRankPairwise modes: 32
- GPU in all other modes: 128

The value of this parameter significantly impacts the speed of training on GPU. The smaller the value, the faster the training is performed (refer to the [Number of splits for numerical features](en/concepts/speed-up-training) section for details).

128 splits are enough for many datasets. However, try to set the value of this parameter to 254 when training on GPU if the best possible quality is required.

The value of this parameter does not significantly impact the speed of training on CPU. Try to set it to 254 for the best possible quality.

## Parameters

**Command-line version parameters:** `-x`

, `--border-count`


**Python parameters:** `border_count`


*Alias:*`max_bin`


**R parameters:** `border_count`


Description

Recommended values are up to 255. Larger values slow down the training.

The number of splits for numerical features. Allowed values are integers from 1 to 65535 inclusively.

Internal dataset order

Use this option if the objects in your dataset are given in the required order. In this case, random permutations are not performed during the [Transforming categorical features to numerical features](en/concepts/algorithm-main-stages_cat-to-numberic) and [Choosing the tree structure](en/concepts/algorithm-main-stages_choose-tree-structure) stages.

## Parameters

**Command-line version parameters:** `--has-time`


**Python parameters:** `--has-time`


**R parameters:** `--has-time`


Description

Use the order of objects in the input data (do not perform random permutations during the [Transforming categorical features to numerical features](en/concepts/algorithm-main-stages_cat-to-numberic) and [Choosing the tree structure](en/concepts/algorithm-main-stages_choose-tree-structure) stages).

The Timestamp column type is used to determine the order of objects if specified in the [input data](en/concepts/input-data).

Tree growing policy

By default, CatBoost uses symmetric trees, which are built if the growing policy is set to SymmetricTree.

Such trees are built level by level until the specified depth is reached. On each iteration, all leaves from the last tree level are split with the same condition. The resulting tree structure is always symmetric.

Symmetric trees have a very good prediction speed (roughly 10 times faster than non-symmetric trees) and give better quality in many cases.

However, in some cases, other tree growing strategies can give better results than growing symmetric trees.

Try to analyze the results obtained with different growing trees strategies.

Specifics: Symmetric trees, that are used by default, can be applied much faster (up to 10 times faster).

## Parameters

**Command-line version parameters:** `--grow-policy`


**Python parameters:** `grow_policy`


**R parameters:** `grow_policy`


Description

The tree growing policy. Defines how to perform greedy tree construction.

Possible values:

-
SymmetricTree — A tree is built level by level until the specified depth is reached. On each iteration, all leaves from the last tree level are split with the same condition. The resulting tree structure is always symmetric.

-
Depthwise — A tree is built level by level until the specified depth is reached. On each iteration, all non-terminal leaves from the last tree level are split. Each leaf is split by condition with the best loss improvement.

Note

Models with this growing policy can not be analyzed using the PredictionDiff feature importance and can be exported only to json and cbm.

-
Lossguide — A tree is built leaf by leaf until the specified maximum number of leaves is reached. On each iteration, non-terminal leaf with the best loss improvement is split.

Note

Models with this growing policy can not be analyzed using the PredictionDiff feature importance and can be exported only to json and cbm.


**Command-line version parameters:** `--min-data-in-leaf`


**Python parameters:** `min_data_in_leaf`


*Alias:*`min_child_samples`


**R parameters:** `min_data_in_leaf`


Description

The minimum number of training samples in a leaf. CatBoost does not search for new splits in leaves with samples count less than the specified value.

Can be used only with the Lossguide and Depthwise growing policies.

**Command-line version parameters:** `--max-leaves`


**Python parameters:** `max_leaves`


*Alias:*`num_leaves`


**R parameters:** `max_leaves`


Description

The maximum number of leafs in the resulting tree. Can be used only with the Lossguide growing policy.

Note

It is not recommended to use values greater than 64, since it can significantly slow down the training process.

Golden features

If the dataset has a feature, which is a strong predictor of the result, the pre-quantisation of this feature may decrease the information that the model can get from it. It is recommended to use an increased number of borders (1024) for this feature.

Note

An increased number of borders should not be set for all features. It is recommended to set it for one or two golden features.

| Parameter | Description |
|---|---|
`--per-float-feature-quantization` |
A semicolon separated list of quantization descriptions. Format: `FeatureId[:border_count=BorderCount][:nan_mode=BorderType][:border_type=border_selection_method]` |

Examples:

-
`--per-float-feature-quantization 0:border_count=1024`

In this example, the feature indexed 0 has 1024 borders.

-
`--per-float-feature-quantization 0:border_count=1024;1:border_count=1024`

In this example, features indexed 0 and 1 have 1024 borders.


| Parameter | Description |
|---|---|
`per_float_feature_quantization` |
The quantization description for the specified feature or list of features. Description format for a single feature: `FeatureId[:border_count=BorderCount][:nan_mode=BorderType][:border_type=border_selection_method]` |

Examples:

-
`per_float_feature_quantization='0:border_count=1024'`

In this example, the feature indexed 0 has 1024 borders.

-
`per_float_feature_quantization=['0:border_count=1024', '1:border_count=1024']`

In this example, features indexed 0 and 1 have 1024 borders.


| Parameter | Description |
|---|---|
`per_float_feature_quantization` |
The quantization description for the specified feature or list of features. Description format for a single feature: `FeatureId[:border_count=BorderCount][:nan_mode=BorderType][:border_type=border_selection_method]` |

Examples:

-
`per_float_feature_quantization = '0:border_count=1024')`

In this example, the feature indexed 0 has 1024 borders.

-
`per_float_feature_quantization = c('0:border_count=1024', '1:border_count=1024'`

In this example, features indexed 0 and 1 have 1024 borders.


Methods for hyperparameter search

The Python package provides Grid and Randomized search methods for searching optimal parameter values for training the model with the given dataset.

## Parameters

| Class | Method | Description |
|---|---|---|
|

[grid_search](en/concepts/python-reference_catboost_grid_search)[CatBoost](en/concepts/python-reference_catboost)[randomized_search](en/concepts/python-reference_catboost_randomized_search)[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)[grid_search](en/concepts/python-reference_catboostclassifier_grid_search)[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)[randomized_search](en/concepts/python-reference_catboostclassifier_randomized_search)[CatBoostRegressor](en/concepts/python-reference_catboostregressor)[grid_search](en/concepts/python-reference_catboostregressor_grid_search)[CatBoostRegressor](en/concepts/python-reference_catboostregressor)[randomized_search](en/concepts/python-reference_catboostregressor_randomized_search)Methods for hyperparameter search by optuna

Optuna is a famous hyperparameter optimization framework.

Optuna enables efficient hyperparameter optimization by adopting state-of-the-art algorithms for sampling hyperparameters and pruning efficiently unpromising trials.

Catboost supports to stop unpromising trial of hyperparameter by callbacking after iteration functionality. [Pull Request](https://github.com/catboost/catboost/pull/1697/files#diff-ccca44461ac6b094190f29fec157a227996e226ea483213680dd0a152cd412eaR9679)

The following is an optuna example that demonstrates a pruner for CatBoost. [Example](https://github.com/optuna/optuna-examples/blob/main/catboost/catboost_pruning.py)

---

## Source: https://catboost.ai/docs/en/concepts/speed-up-training

# Speeding up the training

CatBoost provides several settings that can speed up the training.

Note

Certain changes to these parameters can decrease the quality of the resulting model.

Training on GPU

If the dataset is large enough (starting from tens of thousands of objects), training on GPU gives a significant speedup compared to training on CPU. The larger the dataset, the more significant is the speedup. For example, the speedup for training on datasets with millions of objects on Volta GPUs is around 40-50 times.

Iterations and learning rate

By default, CatBoost builds 1000 trees. The number of iterations can be decreased to speed up the training.

When the number of iterations decreases, the learning rate needs to be increased. By default, the value of the learning rate is defined automatically depending on the number of iterations and the input dataset. Changing the number of iterations to a smaller value is a good starting point for optimization.

The default learning rate is close to optimal one, but it can be tuned to get the best possible quality. Look at evaluation metric values on each iteration to tune the learning rate:

- Decrease the learning rate if overfitting is observed.
- Increase the learning rate if there is no overfitting and the error on the evaluation dataset still reduces on the last iteration.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`-i` `--iterations` |
`iterations` Aliases:- `num_boost_round` - `n_estimators` - `num_trees` |
`iterations` |
`-w` `--learning-rate` |
`learning_rate` Alias:`eta` |
`learning_rate` |

Boosting type

By default, the boosting type is set to for small datasets. This prevents overfitting but it is expensive in terms of computation. Try to set the value of this parameter to to speed up the training.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--boosting-type` |
`boosting_type` |
`boosting_type` |

Bootstrap type

By default, the method for sampling the weights of objects is set to . The training is performed faster if the method is set and the value for the sample rate for bagging is smaller than 1.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--bootstrap-type` |
`bootstrap_type` |
`bootstrap_type` |
`--subsample` |
`subsample` |
`subsample` |

One-hot encoding

By default, the maximum number of different values of categorical features for using one-hot encoding depends on various conditions:

- N/A if training is performed on CPU in Pairwise scoring mode

## Read more about Pairwise scoring

The following loss functions use Pairwise scoring:

- YetiRankPairwise
- PairLogitPairwise
- QueryCrossEntropy

Pairwise scoring is slightly different from regular training on pairs, since pairs are generated only internally during the training for the corresponding metrics. One-hot encoding is not available for these loss functions.

- 255 if training is performed on GPU and the selected Ctr types require target data that is not available during the training
- 10 if training is performed in
[Ranking](en/concepts/loss-functions-ranking)mode - 2 if none of the conditions above is met

Statistics are calculated for all other categorical features. This is more time consuming than using one-hot encoding.

Set a larger value for this parameter to speed up the training.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--one-hot-max-size` |
`one_hot_max_size` |
`one_hot_max_size` |

Random subspace method

For datasets with hundreds of features this parameter speeds up the training and usually does not affect the quality. It is not recommended to change the default value of this parameter for datasets with few (10-20) features.

For example, set the parameter to 0.1

. In this case, the training requires roughly 20% more iterations to converge. But each iteration is performed roughly ten times faster. Therefore, the training time is much shorter even though the resulting model contains more trees.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--rsm` |
`rsm` Alias:`colsample_bylevel` |
`rsm` |

Leaf estimation iterations

This parameter defines the rules for calculating leaf values after selecting the tree structures. The default value depends on the training objective and can slow down the training for datasets with a small number of features (for example, 10 features).

Try setting the value to 1

or 5

to speed up the training on datasets with a small number of features.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--leaf-estimation-iterations` |
`leaf_estimation_iterations` |
`leaf_estimation_iterations` |

Number of categorical features to combine

By default, the combinations of categorical features are generated in a greedy way. This slows down the training.

Try turning off the generation of categorical feature combinations or limiting the number of categorical features that can be combined to two to speed up the training.

This parameter can affect the training time only if the dataset contains categorical features.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`--max-ctr-complexity` |
`max_ctr_complexity` |
`max_ctr_complexity` |

Number of splits for numerical features

This parameter defines the number of splits considered for each feature.

The default value depends on the processing unit type and other parameters:

- CPU: 254
- GPU in PairLogitPairwise and YetiRankPairwise modes: 32
- GPU in all other modes: 128

The value of this parameter significantly impacts the speed of training on GPU. The smaller the value, the faster the training is performed.

Try to set the value of this parameter to 32 if training is performed on GPU. In many cases, this does not affect the quality of the model but significantly speeds up the training.

The value of this parameter does not significantly impact the speed of training on CPU. Try to set it to 254 for the best possible quality.

## Parameters

| Command-line version parameters | Python parameters | R parameters |
|---|---|---|
`-x` `--border-count` |
`border_count` Alias:`max_bin` |
`border_count` |

Reusing quantized datasets in Python

By default, the train and test datasets are quantized each time that the boosting is run.

If the dataset and quantization parameters are the same across multiple runs, the total wall clock time can be reduced by saving and reusing the quantized dataset. This optimization is applicable only for datasets without categorical features.

Example:

```
import numpy as np
from catboost import Pool, CatBoostRegressor
train_data = np.random.randint(1, 100, size=(10000, 10))
train_labels = np.random.randint(2, size=(10000))
quantized_dataset_path = 'quantized_dataset.bin'
# save quantized dataset
train_dataset = Pool(train_data, train_labels)
train_dataset.quantize()
train_dataset.save(quantized_dataset_path)
# fit multiple models w/o dataset quantization
quantized_train_dataset = Pool(data='quantized://' + quantized_dataset_path)
model_depth_four = CatBoostRegressor(depth=4)
model_depth_four.fit(quantized_train_dataset)
model_depth_eight = CatBoostRegressor(depth=8)
model_depth_eight.fit(quantized_train_dataset)
```


Using pandas.Categorical type instead of object

Use the pandas.Categorical type instead of the object type to speed up the preprocessing for datasets with categorical features up to 200 times.

---

## Source: https://catboost.ai/docs/en/concepts/faq

# FAQ

[Why is the metric value on the validation dataset sometimes better than the one on the training dataset?](en/concepts/faq#metric-on-validation-vs-train)[Why can metric values on the training dataset that are output during training, be different from ones output when using model predictions?](en/concepts/faq#applying-the-model-to-train-dataset)[How should weights or baseline be specified for the validation dataset?](en/concepts/faq#specify-weights-baseline-for-eval-set)[Why is it forbidden to use float values and nan values for categorical features?](en/concepts/faq#why-float-and-nan-values-are-forbidden-for-cat-features)[Floating point values](en/concepts/faq#floating-point-values)[None categorical feature](en/concepts/faq#none-categorical-feature)[How to use GridSearchCV and RandomSearchCV from sklearn with categorical features?](en/concepts/faq#grid-search-random-search-cv)[How to understand which categorical feature combinations have been selected during the training?](en/concepts/faq#which-cat-feature-combinations-selected-during-training)[How to overcome the Out of memoryerror when training on GPU?](en/concepts/faq#overcome-out-of-memory)[How to reduce the size of the final model?](en/concepts/faq#reduce-the-size-of-the-final-model)[How to get the model with best parameters from the python cv function?](en/concepts/faq#how-to-get-best-parameters-from-the-cv-function)[What are the differences between training on CPU and GPU?](en/concepts/faq#differencies-between-cpu-and-gpu)[Does CatBoost require preprocessing of missing values?](en/concepts/faq#preprocessing-of-missing-values)

Why is the metric value on the validation dataset sometimes better than the one on the training dataset?

This happens because auto-generated numerical features that are based on categorical features are calculated differently for the training and validation datasets:

- Training dataset: the feature is calculated differently for every object in the dataset. For each
*i*-th object the feature is calculated based on data from the first*i-1*objects (the first*i-1*objects in some random permutation). - Validation dataset: the feature is calculated equally for every object in the dataset. For each object the feature is calculated using data from all objects of the training dataset.

When the feature is calculated on data from all objects of the training dataset it uses more information than the feature, that is calculated only on a part of the dataset. For this reason this feature is more powerful. A more powerful feature results in a better loss value.

Thus, the loss value on the validation dataset might be better than the loss value for the training dataset, because the validation dataset has more powerful features.

## Details of the algorithm and the rationale behind this solution

[CatBoost: unbiased boosting with categorical features](https://arxiv.org/abs/1706.09516)

*Liudmila Prokhorenkova, Gleb Gusev, Aleksandr Vorobev, Anna Veronika Dorogush, Andrey Gulin. NeurIPS, 2018*

NeurIPS 2018 paper with explanation of Ordered boosting principles and ordered categorical features statistics.

[CatBoost: gradient boosting with categorical features support](http://learningsys.org/nips17/assets/papers/paper_11.pdf)

*Anna Veronika Dorogush, Vasily Ershov, Andrey Gulin. Workshop on ML Systems at NIPS 2017*

A paper explaining the CatBoost working principles: how it handles categorical features, how it fights overfitting, how GPU training and fast formula applier are implemented.

**Ordered boosting and categorical features processing in CatBoost short overview**

Why can metric values on the training dataset that are output during training, be different from ones output when using model predictions?

This happens because auto-generated numerical features that are based on categorical features are calculated differently when training and applying the model.

During the training the feature is calculated differently for every object in the training dataset. For each *i*-th object the feature is calculated based on data from the first *i-1* objects (the first *i-1* objects in some random permutation). During the prediction the same feature is calculated using data from all objects from the training dataset.

When the feature is calculated on data from all objects of the training dataset it uses more information than the feature, that is calculated only on a part of the dataset. For this reason this feature is more powerful. A more powerful feature results in a better loss value.

Thus, the loss value calculated during for the prediction might be better than the one that is printed out during the training even though the same dataset is used.

## Details of the algorithm and the rationale behind this solution

[CatBoost: unbiased boosting with categorical features](https://arxiv.org/abs/1706.09516)

*Liudmila Prokhorenkova, Gleb Gusev, Aleksandr Vorobev, Anna Veronika Dorogush, Andrey Gulin. NeurIPS, 2018*

NeurIPS 2018 paper with explanation of Ordered boosting principles and ordered categorical features statistics.

[CatBoost: gradient boosting with categorical features support](http://learningsys.org/nips17/assets/papers/paper_11.pdf)

*Anna Veronika Dorogush, Vasily Ershov, Andrey Gulin. Workshop on ML Systems at NIPS 2017*

A paper explaining the CatBoost working principles: how it handles categorical features, how it fights overfitting, how GPU training and fast formula applier are implemented.

**Ordered boosting and categorical features processing in CatBoost short overview**

How should weights or baseline be specified for the validation dataset?

Use the [Pool](en/concepts/python-reference_pool) class.

An example of specifying weights:

```
from catboost import CatBoostClassifier, Pool
train_data = Pool(
data=[[1, 4, 5, 6],
[4, 5, 6, 7],
[30, 40, 50, 60]],
label=[1, 1, -1],
weight=[0.1, 0.2, 0.3]
)
eval_data = Pool(
data=[[1, 4, 5, 6],
[4, 5, 6, 7],
[30, 40, 50, 60]],
label=[1, 0, -1],
weight=[0.7, 0.1, 0.3]
)
model = CatBoostClassifier(iterations=10)
model.fit(X=train_data, eval_set=eval_data)
```


Why is it forbidden to use float values and nan values for categorical features?

The algorithm should work identically regardless of the input data format (file or matrix). If the dataset is read from a file all values of categorical features are treated as strings. To treat it the same way when training from matrix, a unique string representation of each feature value is required. There is no unique string representation for floating point values and for nan values.

Floating point values

If floating point categorical features are allowed the following problem arises.

The feature *f* is categorical and takes values 1

and 2

.

A matrix is used for the training. The column that corresponds to the feature *f* contains values 1.0

and 2.0

.

Each categorical feature value is converted to a string during the training to calculate the corresponding hash value. 1.0

is converted to the string 1.0

, and 2.0

is converted to the string 2.0

.

After the training the prediction is performed on file.

The column with the feature f

contains values 1

and 2

.

During the prediction, the hash value of the string 1

is calculated. This value is not equal to the hash value of the string 1.0

.

Thus, the model doesn't collate this value with the one in the training dataset, therefore the prediction is incorrect.

None categorical feature

The feature *f* is categorical and takes the value None

for some object *Obj*.

A matrix is used for the training. The column that contains the value of the feature *f* for the object *Obj* contains the value None

.

Each categorical feature value is converted to a string during the training to calculate the corresponding hash value. The None

value is converted to the string None

.

After the training the prediction is performed on file. The column with the feature _f _ contains the value N/A

, which would be parsed as None

if it was read to a pandas.DataFrame before the training.

The hash value of the string N/A

is calculated during the prediction. This value is not equal to the hash value of the string None

.

Thus, the model doesn't collate this value with the one in the training dataset, therefore the prediction is incorrect.

Since it is not possible to guarantee that the string representation of floating point and None values are the same when reading data from a file or converting the value to a string in Python or any other language, it is required to use strings instead of floating point and None values.

How to use GridSearchCV and RandomSearchCV from sklearn with categorical features?

Use the `cat_features`

parameter when constructing the model ([CatBoost](en/concepts/python-reference_catboost), [CatBoostRegressor](en/concepts/python-reference_catboostregressor) or [CatBoostClassifier](en/concepts/python-reference_catboostclassifier)).

Example:

```
model = catboost.CatBoostRegressor(cat_features=[0,1,2]) grid_search =
sklearn.model_selection.GridSearchCV(model,
param_grid)
```


How to understand which categorical feature combinations have been selected during the training?

Use the [InternalFeatureImportance](en/concepts/fstr#internal-feature-importance) to familiarize with the resulting combinations. Generate this file from the [command-line](en/concepts/cli-reference_fstr-calc) by setting the `--fstr-type`

parameter to InternalFeatureImportance.

The format of the resulting file is described [here](en/concepts/output-data_feature-analysis_feature-importance).

The default feature importances are calculated in accordance with the following principles:

- Importances of all numerical features are calculated. Some of the numerical features are auto-generated based on categorical features and feature combinations.
- These importances are shared between initial features. If a numerical feature is auto-generated based on a feature combination, then the importance value is shared equally between the combination participants.

The file that is generate in the InternalFeatureImportance mode contains the description of initial numerical features and their importances.

How to overcome the Out of memory

error when training on GPU?

- Set the
`--boosting-type`

for the Command-line version parameter to Plain. It is set to Ordered by default for datasets with less then 50 thousand objects. TheOrdered scheme requires a lot of memory. - Set the
`--max-ctr-complexity`

for the Command-line version parameter to either 1 or 2 if the dataset has categorical features. - Decrease the value of the
`--gpu-ram-part`

for the Command-line version parameter. - Set the
`--gpu-cat-features-storage`

for the Command-line version parameter to CpuPinnedMemory. - Check that the dataset fits in GPU memory. The quantized version of the dataset is loaded into GPU memory. This version is much smaller than the initial dataset. But it can exceed the available memory if the dataset is large enough.
- Decrease the depth value, if it is greater than 10. Each tree contains leaves if the depth is set to , because CatBoost builds full symmetric trees by default. The recommended depth is 6, which works well in most cases. In rare cases it's useful to increase the depth value up to 10.

How to reduce the size of the final model?

If the dataset contains categorical features with many different values, the size of the resulting model may be huge. Try the following approaches to reduce the size of the resulting model:

-
Decrease the

`--max-ctr-complexity`

for the Command-line version to either 1 or 2 -
For training on CPU:

- Increase the value of the
`--model-size-reg`

for the Command-line version parameter. - Set the value of the
`--ctr-leaf-count-limit`

for the Command-line version parameter. The number of different category values is not limited be default.

- Increase the value of the
-
Decrease the value of the

`--iterations`

for the Command-line version parameter and increase the value of the`--learning-rate`

for the Command-line version parameter. -
Remove categorical features that have a small feature importance from the training dataset.


How to get the model with best parameters from the python cv function?

It is not possible. The CatBoost cv function is intended for cross-validation only, it can not be used for tuning parameter.

The dataset is split into *N* folds. *N–1* folds are used for training and one fold is used for model performance estimation. At each iteration, the model is evaluated on all *N* folds independently. The average score with standard deviation is computed for each iteration.

The only parameter that can be selected based on cross-validation is the number of iterations. Select the best iteration based on the information of the cv results and train the final model with this number of iterations.

What are the differences between training on CPU and GPU?

-
The default value of the

`--border-count`

for the Command-line version parameter depends on the processing unit type and other parameters:- CPU: 254
- GPU in PairLogitPairwise and YetiRankPairwise modes: 32
- GPU in all other modes: 128

-
Training on CPU has the

`model_size_reg`

set by default. It decreases the size of models that have categorical features. This option is turned off for training on GPU. -
Training on GPU is non-deterministic, because the order of floating point summations is non-deterministic in this implementation.

-
The following parameters are not supported if training is performed on GPU:

`--ctr-leaf-count-limit`

for the Command-line version,`--monotone-constraints`

for the Command-line version. -
The default value of the

`--leaf-estimation-method`

for the Quantile and MAE loss functions is Exact on CPU and GPU. -
Combinations of categorical features are not supported for the following modes if training is performed on GPU: MultiClass and MultiClassOneVsAll. The default value of the

`--max-ctr-complexity`

for the Command-line version parameter for such cases is set to 1. -
The default values for the following parameters depend on the processing unit type:

`--bootstrap-type`

for the Command-line version:

- When the
`objective`

parameter is QueryCrossEntropy, YetiRankPairwise, PairLogitPairwise and the`bagging_temperature`

parameter is not set: Bernoulli with the`subsample`

parameter set to 0.5 - Not MultiClass and MultiClassOneVsAll,
`task_type`

= CPU and`sampling_unit`

=`Object`

: MVS with the`subsample`

parameter set to 0.8. - Otherwise: Bayesian.

`--boosting-type`

for the Command-line version:

[CPU](en/concepts/faq#cpu)Plain

[GPU](en/concepts/faq#gpu)- Any number of objects, MultiClass or MultiClassOneVsAll mode: Plain
- More than 50 thousand objects, any mode: Plain
- Less than or equal to 50 thousand objects, any mode but MultiClass or MultiClassOneVsAll: Ordered

-
`--model-size-reg`

for the Command-line version:Feature combinations are regularized more aggressively on GPU.

[CPU](en/concepts/faq#cpu1)The cost of a combination is equal to the number of different feature values in this combinations that are present in the training dataset.

[GPU](en/concepts/faq#gpu1)The cost of a combination is equal to number of all possible different values of this combination. For example, if the combination contains two categorical features (c1 and c2), the cost is calculated as , even though many of the values from this combination might not be present in the dataset.

Refer to the

[Model size regularization coefficient](en/references/model-size-reg)section for details on the calculation principles.

Does CatBoost require preprocessing of missing values?

CatBoost can handle missing values internally. None values should be used for missing value representation.

If the dataset is read from a file, missing values can be represented as strings like N/A, NAN, None, empty string and the like.

Refer to the [Missing values processing](en/concepts/algorithm-missing-values-processing) section for details.

---

## Source: https://catboost.ai/docs/en/concepts/development-and-contributions

# Development and contributions

[Build from source](en/concepts/build-from-source)

Run tests

Warning

CatBoost uses [CMake](https://cmake.org/)-based build process since [this commit](https://github.com/catboost/catboost/commit/c5c642ca0b8e093336d0229ac4b14c78db3915bb). Previously `Ya Make`

(Yandex's build system) had been used.

CMake-based build tests

-
C/C++ libraries.

C/C++ libraries contain tests for them in

`ut`

subdirectories in the source tree. For library in`x/y/z`

the corresponding test code will be in`x/y/z/ut`

and the target name will be`x-y-z-ut`

.

So, in order to run the test[run CMake](en/concepts/build-from-source#build-cmake)and then build the corresponding`x-y-z-ut`

target. Building this target will produce an executable`${CMAKE_BUILD_DIR}/x/y/z/x-y-z-ut`

. Run this executable to execute all the tests. -
R package

-
Install additional R packages that are required to run tests:

`caret`

`dplyr`

`jsonlite`

`testthat`


-
Open the

`R-package`

directory from the local copy of the CatBoost repository. -
Run the following command:

`R CMD check .`


To run tests using the devtools package:

-
Install

[devtools](https://github.com/hadley/devtools). -
Run the following command from the R session:

`devtools::test()`


-
-
CLI

-
Install

[pytest](https://pytest.org/),[pandas](https://pypi.org/project/pandas/)and[catboost](https://pypi.org/project/catboost/)(used for reading column description files using`catboost.utils.read_cd`

) packages for the python interpreter you intend to use.

Optionally install[pytest-xdist](https://pytest-xdist.readthedocs.io/en/stable/)and[pytest-randomly](https://github.com/pytest-dev/pytest-randomly)to run tests in parallel (it will be faster). -
[Build](en/concepts/build-from-source#build-cmake)the CLI binary (target`catboost`

for Ninja or another build tool) and a supplementary tool that is used to compare results generated as tests output with the canonical ones (target`limited_precision_dsv_diff`

for Ninja or another build tool). -
Set the following environment variables:

`CMAKE_BINARY_DIR`

to the root for the build directory that has been generated by`CMake`

and where the aformentioned targets have been built.`TEST_OUTPUT_DIR`

to the root for the directory where tests temporary data will be generated.`PORT_SYNC_PATH`

to the path to the directory that will be used for network ports allocation syncronization. The directory will be created if not exists.`HAVE_CUDA`

- set to`1`

if you want to run tests on GPU with`CUDA`

, set to`0`

otherwise.

## Previous requirements

Before revision

[a087975](https://github.com/catboost/catboost/commit/a087975944e63779e060502beba21d6203615446), it was necessary to additionally set`CMAKE_SOURCE_DIR`

to the root of the local copy of the CatBoost repository. -
Open the

`catboost/pytest`

directory from the local copy of the CatBoost repository. -
Run

`python -m pytest`

or (if you use`pytest-xdist`

)`python -m pytest -n <parallel_worker_count>`

or`python -m pytest -n auto`

(in the`auto`

case the number of parallel workers will be equal to the total count of detected CPU cores).

-
-
Python package

Tests will check

`catboost`

module for the`python`

interpreter you run them with, so if you want to test`catboost`

python package built from source[build and install it first](en/installation/python-installation-method-build-from-source#installation).-
Install

[pytest](https://pytest.org/),[pandas](https://pypi.org/project/pandas/),[ipywidgets](https://pypi.org/project/ipywidgets/),[scikit-learn](https://pypi.org/project/scikit-learn/)and[polars](https://pypi.org/project/polars/)packages for the python interpreter you intend to use.

Optionally install[pytest-xdist](https://pytest-xdist.readthedocs.io/en/stable/)and[pytest-randomly](https://github.com/pytest-dev/pytest-randomly)to run tests in parallel (it will be faster). -
[Build](en/concepts/build-from-source#build-cmake)supplementary tools that are used to compare results generated as tests output with the canonical ones (targets`limited_precision_dsv_diff`

,`limited_precision_json_diff`

,`model_comparator`

for Ninja or another build tool). -
Set the following environment variables:

`CMAKE_BINARY_DIR`

to the root for the build directory that has been generated by`CMake`

and where the aformentioned targets have been built.`TEST_OUTPUT_DIR`

to the root for the directory where tests temporary data will be generated.`PORT_SYNC_PATH`

to the path to the directory that will be used for network ports allocation syncronization. The directory will be created if not exists.

## Previous requirements

Before revision

[a087975](https://github.com/catboost/catboost/commit/a087975944e63779e060502beba21d6203615446), it was necessary to additionally set`CMAKE_SOURCE_DIR`

to the root of the local copy of the CatBoost repository. -
Open the

`catboost/python-package/ut/medium`

directory from the local copy of the CatBoost repository. -
Run

`python -m pytest`

or (if you use`pytest-xdist`

)`python -m pytest -n <parallel_worker_count>`

or`python -m pytest -n auto`

(in the`auto`

case the number of parallel workers will be equal to the total count of detected CPU cores).

Warning

Tests on GPU with

`CUDA`

will be run if and only if GPU with CUDA drivers installed is present. -
-
JVM applier

Open the

`catboost/jvm-packages/catboost4j-prediction`

directory from the local copy of the CatBoost repository. Run standard`mvn test`

command.

To run tests on GPU as well add`-DtestOnGPU=1`

command line flag. -
CatBoost for Apache Spark

See

[building CatBoost for Apache Spark from source](en/installation/spark-installation-build-from-source-maven). Use standard`mvn test`

command.

YaMake-based build tests

Warning

The following documentation describes running tests using Ya Make which is applicable only for versions prior to [this commit](https://github.com/catboost/catboost/commit/c5c642ca0b8e093336d0229ac4b14c78db3915bb).

CatBoost provides tests that check the compliance of the canonical data with the resulting data.

The required steps for running these tests depend on the implementation.

-
Execute common tests:

-
Open the

`catboost/pytest`

directory from the local copy of the CatBoost repository. -
Run the following command:


`../../ya make -t -A [-Z]`

`-Z`

— Optional key to replace the canonical files if the code breaks tests intentionally. -
-
Execute tests for the GPU implementation:

-
Open the

`catboost/pytest/cuda_tests`

directory from the local copy of the CatBoost repository. -
Run the following command:


`../../../ya make -DCUDA_ROOT=<path_to_CUDA_SDK> -t -A [-Z]`

-
`path_to_CUDA_SDK`

is the path to directory where CUDA SDK is installed. For example, the typical installation directory for Linux is`/usr/local/cuda-X.Y`

, whereX.Y

is the installed CUDA SDK version. -
`-Z`

— Optional key to replace the canonical files if the code breaks tests intentionally.

-

Use the VCS diff tool to analyze the differences.

-
Execute common tests:

-
Open the

`catboost/python-package/ut/medium`

directory from the local copy of the CatBoost repository. -
Run the following command:


`../../../../ya make -t -A [-Z]`

`-Z`

— Optional key to replace the canonical files if the code breaks tests intentionally. -
-
Execute tests for the GPU implementation:

-
Open the

`catboost/python-package/ut/medium/gpu`

directory from the local copy of the CatBoost repository. -
Run the following command:


`../../../../../ya make -DCUDA_ROOT=<path_to_CUDA_SDK> -t -A [-Z]`

-
`path_to_CUDA_SDK`

is the path to directory where CUDA SDK is installed. For example, the typical installation directory for Linux is`/usr/local/cuda-X.Y`

, whereX.Y

is the installed CUDA SDK version. -
`-Z`

— Optional key to replace the canonical files if the code breaks tests intentionally.

-

Use the VCS diff tool to analyze the differences.

-
Install additional R packages that are required to run tests:

`caret`

`dplyr`

`jsonlite`

`testthat`


-
Open the

`R-package`

directory from the local copy of the CatBoost repository. -
Run the following command:

`R CMD check .`


To run tests using the devtools package:

-
Install

[devtools](https://github.com/hadley/devtools). -
Run the following command from the R session:

`devtools::test()`


Microsoft Visual Studio solution

Warning

Ready Microsoft Visual Studio solution had been provided until [this commit](https://github.com/catboost/catboost/commit/cd63b6c7313a28bcb40cd0674d73e356ad633de4).

For versions after this commit it is recommended [to generate Microsoft Visual Studio solution using the corresponding CMake generator](en/installation/build-native-artifacts#build-cmake-conan-ninja).

A solution for Visual Studio is available in the CatBoost repository:

```
catboost/msvs/arcadia.sln
```


Coding conventions

The following coding conventions must be followed in order to successfully contribute to the CatBoost project:

[C++ style guide](https://github.com/catboost/catboost/blob/master/CPP_STYLE_GUIDE.md)[pep8](https://www.python.org/dev/peps/pep-0008/)for Python

Versioning conventions

Do not change the package version when submitting pull requests. Yandex uses an internal repository for this purpose.

License

By contributing to this project, you agree that your contributions will be licensed under [the Apache 2.0 license](https://github.com/catboost/catboost/blob/master/LICENSE).

---

## Source: https://catboost.ai/docs/en/concepts/contacts

# Contacts

Support

- Ask questions on Stack overflow with the
[catboost tag](https://stackoverflow.com/questions/tagged/catboost). These questions are monitored by the development team. - Join our
[English](https://t.me/catboost_en)and[Russian](https://t.me/catboost_ru)Telegram groups. - Ask questions on
[CatBoost GitHub Discussions Q&A forum](https://github.com/catboost/catboost/discussions/categories/q-a). - Join our Slack community where we have our channel:
`#tool_catboost`

in[http://opendatascience.slack.com](https://opendatascience.slack.com/).

Bug reporting

Use the [catboost/issues](https://github.com/catboost/catboost/issues) page on GitHub for bug reports.

General Constructor

Andrey Gulin

The CatBoost team

### Was the article helpful?

Previous

---

## Source: https://catboost.ai/docs/en/features/training

# Training

CatBoost provides a variety of modes for training a model.

Choose the implementation for more details.

Python package

Classes

[CatBoost](en/concepts/python-reference_catboost)

**Class purpose**

Training and applying models.

**Method**

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Class purpose**

Training and applying models.

**Method**

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Class purpose**

Training and applying models.

**Method**

R package

**Method**

**Purpose**

Train the model using a CatBoost dataset.

Command-line version

**Command**

**Purpose**

Train the model.

### Was the article helpful?

Previous

Next

---

## Source: https://catboost.ai/docs/en/features/training-on-gpu

# Training on GPU

CatBoost supports training on GPUs.

Training on GPU is non-deterministic, because the order of floating point summations is non-deterministic in this implementation.

Choose the implementation for more details on the parameters that are required to start training on GPU.

Python package

The parameters that enable and customize training on GPU are set in the constructors of the following classes:

Parameters

task_type

The processing unit type to use for training.

Possible values:

- CPU
- GPU

devices

IDs of the GPU devices to use for training (indices are zero-based).

Format

`<unit ID>`

for one device (for example,`3`

)`<unit ID1>:<unit ID2>:..:<unit IDN>`

for multiple devices (for example,`devices='0:1:3'`

)`<unit ID1>-<unit IDN>`

for a range of devices (for example,`devices='0-3'`

)

Note

Other training parameters are also available. Some of them are CPU-specific or GPU-specific. See the [Python package training parameters](en/references/training-parameters/) section for more details.

For example, use the following code to train a classification model on GPU:

```
from catboost import CatBoostClassifier
train_data = [[0, 3],
[4, 1],
[8, 1],
[9, 1]]
train_labels = [0, 0, 1, 1]
model = CatBoostClassifier(iterations=1000,
task_type="GPU",
devices='0')
model.fit(train_data,
train_labels,
verbose=False)
```


R package

For the [catboost.train](en/concepts/r-reference_catboost-train) method:

Parameters

task_type

The processing unit type to use for training.

Possible values:

- CPU
- GPU

devices

**Parameters**

IDs of the GPU devices to use for training (indices are zero-based).

Format

`<unit ID>`

for one device (for example,`3`

)`<unit ID1>:<unit ID2>:..:<unit IDN>`

for multiple devices (for example,`devices='0:1:3'`

)`<unit ID1>-<unit IDN>`

for a range of devices (for example,`devices='0-3'`

)

For example, use the following code to train a model on GPU:

```
library(catboost)
dataset = matrix(c(1900,7,
1896,1,
1896,41),
nrow=3,
ncol=2,
byrow = TRUE)
label_values = c(0,1,1)
fit_params <- list(iterations = 100,
loss_function = 'Logloss',
task_type = 'GPU')
pool = catboost.load_pool(dataset, label = label_values)
model <- catboost.train(pool, params = fit_params)
```


Command-line version

For the [catboost fit](en/references/training-parameters/) command:

**Command keys**

--task-type

The processing unit type to use for training.

Possible values:

- CPU
- GPU

--devices

IDs of the GPU devices to use for training (indices are zero-based).

Format

`<unit ID>`

for one device (for example,`3`

)`<unit ID1>:<unit ID2>:..:<unit IDN>`

for multiple devices (for example,`devices='0:1:3'`

)`<unit ID1>-<unit IDN>`

for a range of devices (for example,`devices='0-3'`

)

Train a classification model on GPU:

```
catboost fit --learn-set ../pytest/data/adult/train_small --column-description ../pytest/data/adult/train.cd --task-type GPU
```

---

## Source: https://catboost.ai/docs/en/concepts/python-reference_train

# train

```
train(pool=None,
params=None,
dtrain=None,
logging_level=None,
verbose=None,
iterations=None,
num_boost_round=None,
evals=None,
eval_set=None,
plot=None,
verbose_eval=None,
metric_period=None,
early_stopping_rounds=None,
save_snapshot=None,
snapshot_file=None,
snapshot_interval=None,
init_model=None)
```


Purpose

Train a model.

Note

Training or inference on CUDA-enabled GPUs requires NVIDIA Driver of version 450.80.02 or higher.

Parameters

pool

*Alias*: `dtrain`


Description

The input training dataset.

**Possible types**

catboost.Pool

**Default value**

Required parameter

**Supported processing units**

CPU and GPU

params

Description

The list of [parameters](en/references/training-parameters/) to start training with.

**Possible types**

dict

**Default value**

Required parameter

**Supported processing units**

CPU and GPU

logging_level

Description

The logging level to output to stdout.

Possible values:

-
Silent — Do not output any logging information to stdout.

-
Verbose — Output the following data to stdout:

- optimized metric
- elapsed time of training
- remaining time of training

-
Info — Output additional information and the number of trees.

-
Debug — Output debugging information.


Alert

Should not be used with the `verbose`

parameter.

**Possible types**

string

**Default value**

None (corresponds to the Verbose logging level)

**Supported processing units**

CPU and GPU

verbose

*Alias*: `verbose_eval`


Description

The purpose of this parameter depends on the type of the given value:

-
bool — Defines the logging level:

True

corresponds to the Verbose logging levelFalse

corresponds to the Silent logging level

-
int — Use the Verbose logging level and set the logging period to the value of this parameter.


Alert

Do not use this parameter with the `logging_level`

parameter.

**Possible types**

- bool
- int

**Default value**

1

**Supported processing units**

CPU and GPU

iterations

*Alias*: `num_boost_round`


Description

The maximum number of trees that can be built when solving machine learning problems.

When using other parameters that limit the number of iterations, the final number of trees may be less than the number specified in this parameter.

**Possible types**

int

**Default value**

1000

**Supported processing units**

CPU and GPU

eval_set

*Alias*: `evals`


Description

The validation dataset or datasets used for the following processes:

[overfitting detector](en/concepts/overfitting-detector)- the best iteration selection
- monitoring metrics' changes

**Possible types**

- catboost.Pool
- list of catboost.Pool
- tuple (X, y)
- list of tuples (X, y)
- string (path to the dataset file)
- list of strings (paths to dataset files)

**Default value**

None

**Supported processing units**

CPU and GPU

Note

Only a single validation dataset can be input if the training is performed on GPU

plot

Description

Plot the following information during training:

- the metric values;
- the custom loss values;
- the loss function change during feature selection;
- the time has passed since training started;
- the remaining time until the end of training.

This[option can be used](en/features/visualization_jupyter-notebook)if training is performed in Jupyter notebook.

**Possible types**

bool

**Default value**

False

**Supported processing units**

CPU

metric_period

Description

The frequency of iterations to calculate the values of [objectives and metrics](en/concepts/loss-functions). The value should be a positive integer.

The usage of this parameter speeds up the training.

Note

It is recommended to increase the value of this parameter to maintain training speed if a GPU processing unit type is used.

**Possible types**

int

**Default value**

1

**Supported processing units**

CPU and GPU

early_stopping_rounds

Description

Sets the overfitting detector type to Iter and stops the training after the specified number of iterations since the iteration with the optimal metric value.

**Possible types**

int

**Default value**

False

**Supported processing units**

CPU and GPU

save_snapshot

Description

Enable snapshotting for [restoring the training progress after an interruption](en/features/snapshots). If enabled, the default period for making snapshots is 600 seconds. Use the `snapshot_interval`

parameter to change this period.

Note

This parameter is not supported in the `params`

parameter of the [cv](en/concepts/python-reference_cv) function.

**Possible types**

bool

**Default value**

None

**Supported processing units**

CPU and GPU

snapshot_file

Description

The name of the file to save the training progress information in. This file is used for [recovering training after an interruption](en/features/snapshots).

Depending on whether the specified file exists in the file system:

- Missing — Write information about training progress to the specified file.
- Exists — Load data from the specified file and continue training from where it left off.

Note

This parameter is not supported in the `params`

parameter of the [cv](en/concepts/python-reference_cv) function.

**Possible types**

string

**Default value**

## experiment...

experiment.cbsnapshot

**Supported processing units**

CPU and GPU

snapshot_interval

Description

The interval between saving snapshots in seconds.

The first snapshot is taken after the specified number of seconds since the start of training. Every subsequent snapshot is taken after the specified number of seconds since the previous one. The last snapshot is taken at the end of the training.

Note

This parameter is not supported in the `params`

parameter of the [cv](en/concepts/python-reference_cv) function.

**Possible types**

int

**Default value**

600

**Supported processing units**

CPU and GPU

init_model

Description

The model to continue learning from.

Note

The initial model must have the same problem type as the one being solved in the current training (binary classification, multiclassification or regression/ranking).

**Possible types**

## catboost.CatBoost, catboost.CatBoostClassifier, catboost.CatBoostRegressor

The initial model object:

## string

The path to the input file that contains the initial model.

**Default value**

None (incremental learning is not used)

**Supported processing units**

CPU

---

## Source: https://catboost.ai/docs/en/features/cross-validation

# Cross-validation

CatBoost allows to perform cross-validation on the given dataset.

Choose the implementation for more details.

Python package

Class

**Class purpose**

Perform cross-validation on the dataset.

Command-line version

For the [catboost fit](en/concepts/cli-reference_cross-validation) command:

**Purpose**

Training can be launched in cross-validation mode. In this case, only the training dataset is required. This dataset is split, and the resulting folds are used as the learning and evaluation datasets. If the input dataset contains the GroupId column, all objects from one group are added to the same fold.

Each cross-validation run from the command-line interface launches one training out of N trainings in N-fold cross-validation.

Use one of the following methods to get aggregated N-fold cross-validation results:

- Run the training in cross-validation mode from the command-line interface N times with different validation folds and aggregate results by hand.
- Use the
[cv](en/concepts/python-reference_cv)function of the[Python package](en/concepts/python-quickstart)instead of the command-line version. It returns aggregated results out-of-the-box.

Command keys

--cv

**Key description**

Enable the cross-validation mode and specify the launching parameters.

Format:

```
<cv_type>:<fold_index>;<fold_count>
```


The following cross-validation types (`cv_type`

) are supported:

Classical

Format: `Classical<fold_index>;<fold_count>`


-
`fold_index`

is the index of the fold to exclude from the learning data and use for evaluation (indexing starts from zero). -
`fold_count`

is the number of folds to split the input data into.

All folds, except the one indexed `n`

, are used as the learning dataset. The fold indexed `n`

is used as the validation dataset.

The inequality must be true.

The data is randomly shuffled before splitting.

Inverted

Format: `Inverted<fold_index>;<fold_count>`


`fold_index`

is the index of the fold to use for learning (indexing starts from zero).-
`fold_count`

is the number of folds to split the input data into.

The fold indexed `fold_index`

is used as the learning dataset. All other folds are used as the validation dataset.

The inequality must be true.

The data is randomly shuffled before splitting.

## Example

Split the input dataset into 5 folds, use the one indexed 0 for validation and all others for training:

```
--cv Classical:0;5
```


--cv-rand

**Purpose**

Use this as the seed value for random permutation of the data.

The permutation is performed before splitting the data for cross-validation.

Each seed generates unique data splits.

It must be used with the `--cv`

parameter type set to Classical or Inverted.

---

## Source: https://catboost.ai/docs/en/features/overfitting-detector-desc

# Using the overfitting detector

If overfitting occurs, CatBoost can stop the training earlier than the training parameters dictate. For example, it can be stopped before the specified number of trees are built. This option is set in the starting parameters.

Choose the implementation for more details.

Python package

The following parameters can be set for the corresponding methods and are used when the model is trained.

**Method**

**Parameters**

`od_type`


**Description**

The type of the overfitting detector to use.

Possible values:

- IncToDec
- Iter

**Method**

`od_pval`


**Parameters**

The threshold for the IncToDec [overfitting detector](en/concepts/overfitting-detector) type. The training is stopped when the specified value is reached. Requires that a validation dataset was input.

The value of this parameter must exceed 0

to turn on the overfitting detection.

**Method**

`od_wait`


**Parameters** The number of iterations to continue the training after the iteration with the optimal metric value.

The purpose of this parameter differs depending on the selected overfitting detector type:

- IncToDec — Ignore the overfitting detector when the threshold is reached and continue learning for the specified number of iterations after the iteration with the optimal metric value.
- Iter — Consider the model overfitted and stop training after the specified number of iterations since the iteration with the optimal metric value.

R package

The following parameters can be set for the corresponding methods and are used when the model is trained.

For the [catboost.train](en/concepts/r-reference_catboost-train) method:

od_type

The type of the overfitting detector to use.

Possible values:

- IncToDec
- Iter

od_pval

The threshold for the IncToDec [overfitting detector](en/concepts/overfitting-detector) type. The training is stopped when the specified value is reached. Requires that a validation dataset was input.

The value of this parameter must exceed 0

to turn on the overfitting detection.

od_wait

The number of iterations to continue the training after the iteration with the optimal metric value.

The purpose of this parameter differs depending on the selected overfitting detector type:

- IncToDec — Ignore the overfitting detector when the threshold is reached and continue learning for the specified number of iterations after the iteration with the optimal metric value.
- Iter — Consider the model overfitted and stop training after the specified number of iterations since the iteration with the optimal metric value.

Command-line version

The following command keys can be specified for the corresponding commands and are used when the model is trained.**

For the [catboost fit](en/references/training-parameters/) command:

--od-type

The type of the overfitting detector to use.

Possible values:

- IncToDec
- Iter

--od-pval

The threshold for the IncToDec [overfitting detector](en/concepts/overfitting-detector) type. The training is stopped when the specified value is reached. Requires that a validation dataset was input.

The value of this parameter must exceed 0

to turn on the overfitting detection.

--od-wait

The number of iterations to continue the training after the iteration with the optimal metric value.

The purpose of this parameter differs depending on the selected overfitting detector type:

- IncToDec — Ignore the overfitting detector when the threshold is reached and continue learning for the specified number of iterations after the iteration with the optimal metric value.
- Iter — Consider the model overfitted and stop training after the specified number of iterations since the iteration with the optimal metric value.

---

## Source: https://catboost.ai/docs/en/features/proceed-training

# Pre-trained data

Initial formula values can be set for all input objects in the Python package. The training starts from these values for all input objects instead of starting from zero.

This option is set in the starting parameters.

Сlasses

[Pool](en/concepts/python-reference_pool)

**Method**

–

**Parameters**

`baseline`


**Description**

Array of formula values for all input objects. The training starts from these values for all input objects instead of starting from zero.

[CatBoost](en/concepts/python-reference_catboost)

**Method**

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Method**

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Method**

Refer to [the example](en/concepts/python-usages-examples) for more details.

### Was the article helpful?

Previous

---

## Source: https://catboost.ai/docs/en/features/categorical-features

# Categorical features

Warning

Do not use one-hot encoding during preprocessing. This affects both the training speed and the resulting quality.

CatBoost supports numerical, categorical, text, and embeddings features.

Categorical features are used to build new numeric features based on categorical features and their combinations. See the [Transforming categorical features to numerical features](en/concepts/algorithm-main-stages_cat-to-numberic) section for details.

By default, CatBoost uses one-hot encoding for categorical features with a small amount of different values in most modes. One-hot encoding is not supported if training is performed on CPU in

## Pairwise scoring

The following loss functions use Pairwise scoring:

- YetiRankPairwise
- PairLogitPairwise
- QueryCrossEntropy

Pairwise scoring is slightly different from regular training on pairs, since pairs are generated only internally during the training for the corresponding metrics. One-hot encoding is not supported for these loss functions.

mode. The default threshold for the number of unique values of the feature to be processed as one-hot encoded depends on various conditions, which are described in the table below.

Ctrs are not calculated for features that are used with one-hot encoding.

Some types of Ctrs require target data in the training dataset. Such Ctrs are not calculated if this data is not available. In this, case only one-hot encoded categorical features are used if training is performed on GPU (and the default value of unique values threshold for a categorical feature to be considered one-hot is increased according to this condition) and all categorical features are ignored if training is performed on CPU.

Use the following parameters to change the maximum number of unique values of categorical features for applying one-hot encoding:

**Command-line version parameters:** `--one-hot-max-size`


**Python parameters:** `one_hot_max_size`


**R parameters:** `one_hot_max_size`


Description

Use one-hot encoding for all categorical features with a number of different values less than or equal to the given parameter value. Ctrs are not calculated for such features.

**Default value**

The default value depends on various conditions:

-
N/A if training is performed on CPU in Pairwise scoring mode

## Read more about Pairwise scoring

The following loss functions use Pairwise scoring:

- YetiRankPairwise
- PairLogitPairwise
- QueryCrossEntropy

Pairwise scoring is slightly different from regular training on pairs, since pairs are generated only internally during the training for the corresponding metrics. One-hot encoding is not available for these loss functions.

-
255 if training is performed on GPU and the selected Ctr types require target data that is not available during the training

-
10 if training is performed in

[Ranking](en/concepts/loss-functions-ranking)mode -
2 if none of the conditions above is met

---

## Source: https://catboost.ai/docs/en/features/text-features

# Text features

CatBoost supports numerical, categorical, text, and embeddings features.

Text features are used to build new numeric features. See the [Transforming text features to numerical features](en/concepts/algorithm-main-stages_text-to-numeric) section for details.

Choose the implementation for details on the methods and/or parameters used that are required to start using text features.

Python package

Class / method

Parameters

text_features

A one-dimensional array of text columns indices (specified as integers) or names (specified as strings).

Use only if the `data`

parameter is a two-dimensional feature matrix (has one of the following types: list, numpy.ndarray, pandas.DataFrame, pandas.Series), polars.DataFrame.

If any elements in this array are specified as names instead of indices, names for all columns must be provided. To do this, either use the `feature_names`

parameter of this constructor to explicitly specify them or pass a pandas.DataFrame, polars.DataFrame with column names specified in the `data`

parameter.

Text processing parameters

Supported [training parameters](en/references/training-parameters/):

tokenizers

**Description**

Tokenizers used to preprocess Text type feature columns before creating the dictionary.

Format:

```
[{
'TokenizerId1': <value>,
'option_name_1': <value>,
..
'option_name_N': <value>,}]
```


`TokenizerId`

— The unique name of the tokenizer.`option_name`

— One of the[supported tokenizer options](en/references/tokenizer_options).

Note

This parameter works with `dictionaries`

and `feature_calcers`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
tokenizers = [{
'tokenizerId': 'Space',
'delimiter': ' ',
'separator_type': 'ByDelimiter',
},{
'tokenizerId': 'Sense',
'separator_type': 'BySense',
}]
```


**Possible types**

list of json

**Default value**

–

**Supported processing units**

CPU and GPU

dictionaries

**Description**

Dictionaries used to preprocess Text type feature columns.

Format:

```
[{
'dictionaryId1': <value>,
'option_name_1': <value>,
..
'option_name_N': <value>,}]
```


`DictionaryId`

— The unique name of dictionary.`option_name`

— One of the[supported dictionary options](en/references/dictionaries_options).

Note

This parameter works with `tokenizers`

and `feature_calcers`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
dictionaries = [{
'dictionary_id': 'Unigram',
'max_dictionary_size': '50000',
'gram_order': '1',
},{
'dictionary_id': 'Bigram',
'max_dictionary_size': '50000',
'gram_order': '2',
}]
```


**Possible types**

list of json

**undefined:**

–

**Supported processing units**

CPU and GPU

feature_calcers

**Description**

Feature calcers used to calculate new features based on preprocessed Text type feature columns.

Format:

```
['FeatureCalcerName[:option_name=option_value],
]
```


-
`FeatureCalcerName`

— The required[feature calcer](en/references/text-processing__feature_calcers). -
`option_name`

— Additional options for feature calcers. Refer to the[list of supported calcers](en/references/text-processing__feature_calcers)for details on options available for each of them.

Note

This parameter works with `tokenizers`

and `dictionaries`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
feature_calcers = [
'BoW:top_tokens_count=1000',
'NaiveBayes',
]
```


**Possible types**

list of strings

**Default value**

–

**Supported processing units**

CPU and GPU

text_processing

**Description**

A JSON specification of tokenizers, dictionaries and feature calcers, which determine how text features are converted into a list of float features.

Refer to the description of the following parameters for details on supported values:

`tokenizers`

`dictionaries`

`feature_calcers`


Alert

Do not use this parameter with the following ones:

`tokenizers`

`dictionaries`

`feature_calcers`


**Possible types**

json

**Default value**

**Supported processing units**

CPU and GPU

Additional classes

Additional classes are provided for text processing:

[Tokenizer](en/concepts/python-reference_tokenizer)

**Class purpose:**

Tokenize and process the strings.

[Dictionary](en/concepts/python-reference_dictionary)

**Class purpose:**

Process dictionaries. The text must be [tokenized](en/concepts/python-reference_tokenizer) before working with dictionaries.

Command-line version

For the [Train a model](en/references/training-parameters/) command:

--tokenizers

**Key description:**

Tokenizers used to preprocess Text type feature columns before creating the dictionary.

Format:

```
TokenizerId[:option_name=option_value]
```


`TokenizerId`

— The unique name of the tokenizer.`option_name`

— One of the[supported tokenizer options](en/references/tokenizer_options).

Note

This parameter works with `--dictionaries`

and `--feature-calcers`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
--tokenizers "Space:delimiter= :separator_type=ByDelimiter,Sense:separator_type=BySense"
```


--dictionaries

**Command keys:**

Dictionaries used to preprocess Text type feature columns.

Format:

```
DictionaryId[:option_name=option_value]
```


`DictionaryId`

— The unique name of dictionary.`option_name`

— One of the[supported dictionary options](en/references/dictionaries_options).

Note

This parameter works with `--tokenizers`

and `--feature-calcers`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
--dictionaries "Unigram:gram_order=1:max_dictionary_size=50000,Bigram:gram_order=2:max_dictionary_size=50000"
```


--feature-calcers

**Command keys:**

Feature calcers used to calculate new features based on preprocessed Text type feature columns.

Format:

```
FeatureCalcerName[:option_name=option_value]
```


-
`FeatureCalcerName`

— The required[feature calcer](en/references/text-processing__feature_calcers). -
`option_name`

— Additional options for feature calcers. Refer to the[list of supported calcers](en/references/text-processing__feature_calcers)for details on options available for each of them.

Note

This parameter works with `--tokenizers`

and `--dictionaries`

parameters.

For example, if a single tokenizer, three dictionaries and two feature calcers are given, a total of 6 new groups of features are created for each original text feature ().

## Usage example

```
--feature-calcers BoW:top_tokens_count=1000,NaiveBayes
```


--text-processing

**Command keys:**

A JSON specification of tokenizers, dictionaries and feature calcers, which determine how text features are converted into a list of float features.

Refer to the description of the following parameters for details on supported values:

`--tokenizers`

`--dictionaries`

`--feature-calcers`


Alert

Do not use this parameter with the following ones:

`--tokenizers`

`--dictionaries`

`--feature-calcers`

---

## Source: https://catboost.ai/docs/en/features/embeddings-features

# Embeddings features

CatBoost supports numerical, categorical, text, and embeddings features.

Embedding features are used to build some new numeric features.

At the moment, we support two types of such derived numerical features. The first one uses Linear Discriminant Analysis to make a projection to lower dimension space. The second one uses the nearest neighbor search to calculate the number of close-by embeddings in every class.

We do not use coordinates of embedding features in our models. If you think that they could improve the quality of a model, you can add them as numerical features together with embedding ones.

Even though every vector feature can be used in a model, we optimized performance for:

- Vectors with dimensions in the order of several hundreds.
- Datasets with normally distributed classes.

Choose the implementation for details on the methods and/or parameters used that are required to start using embeddings features.

Python package

Class / method

Parameters

embedding_features

A one-dimensional array of embeddings columns indices (specified as integers) or names (specified as strings).

Use only if the `data`

parameter is a two-dimensional feature matrix (has one of the following types: list, numpy.ndarray, pandas.DataFrame, pandas.Series), polars.DataFrame.

If any elements in this array are specified as names instead of indices, names for all columns must be provided. To do this, either use the `feature_names`

parameter of this constructor to explicitly specify them or pass a pandas.DataFrame, polars.DataFrame with column names specified in the `data`

parameter.

Command-line version binary

Specify `NumVector`

for embedding features' columns in [the column description file](en/concepts/input-data_column-descfile#numvector) when they are present in the input datasets.

---

## Source: https://catboost.ai/docs/en/features/prediction

# Regular prediction

CatBoost provides a variety of modes for regular prediction.

Choose the implementation for more details.

Python package

Classes

[CatBoost](en/concepts/python-reference_catboost)

**Class purpose**

Training and applying models.

**Method**

**Description**

Apply the model to the given dataset.

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Class purpose**

Training and applying models.

**Method**

**Class** [predict_proba](en/concepts/python-reference_catboostclassifier_predict_proba)

**Class purpose**

Apply the model to the given dataset to predict the probability that the object belongs to the given classes.

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Class purpose**

Training and applying models.

**Method**

**Description**

Apply the model to the given dataset.

R package

**Method**

**Purpose**

Apply the model to the given dataset.

Command-line version

**Command**

**Purpose**

Apply the model.

### Was the article helpful?

Previous

---

## Source: https://catboost.ai/docs/en/concepts/c-plus-plus-api

# С and C++

The following methods for applying a trained model are provided:

The C API and all constant methods of the TFullModel class are thread-safe.

### Was the article helpful?

Previous

The following methods for applying a trained model are provided:

The C API and all constant methods of the TFullModel class are thread-safe.

---

## Source: https://catboost.ai/docs/en/concepts/java-package

# Java

Quick start

To apply a previously trained CatBoost model in Java:

-
Install the package using a package manager.

Note that the package contains native code shared libraries inside. The supported platforms are:

Operating system CPU architectures GPU support using [CUDA](https://developer.nvidia.com/cuda-zone)macOS (versions currently supported by Apple) x86_64 and arm64 no Linux (compatible with [manylinux2014 platform tag](https://peps.python.org/pep-0599/))x86_64 and aarch64 yes Windows 10 and 11 x86_64 yes Note

Release binaries for x86_64 CPU architectures are built with SIMD extensions SSE2, SSE3, SSSE3, SSE4 enabled. If you need to run CatBoost on older CPUs that do not support these instruction sets build

[CatBoost artifacts yourself](en/installation/java-installation-build-from-source-maven)Note

This version has CUDA-enabled GPU support out-of-the-box on Linux and Windows.

As of CatBoost 1.2.10, devices with CUDA compute capability >= 3.5 are supported in released packages.

All necessary CUDA libraries are statically linked in the released Linux and Windows binaries, the only installation necessary is the appropriate version of the CUDA driver.

Inference on CUDA-enabled GPUs requires NVIDIA Driver of version 450.80.02 or higher.

Add the following block to the dependencies section of the pom.xml file for Maven:

`<!-- https://mvnrepository.com/artifact/ai.catboost/catboost-prediction --> <dependency> <groupId>ai.catboost</groupId> <artifactId>catboost-prediction</artifactId> <version>source_version</version> </dependency>`

`source_version`

should be set to one of the[main CatBoost releases](https://github.com/catboost/catboost/releases). Available versions can also be checked on the[Maven repository site](https://h.yandex-team.ru/?https%3A%2F%2Fmvnrepository.com%2Fartifact%2Fai.catboost%2Fcatboost-prediction). -
Load the trained model:

`import ai.catboost.CatBoostModel; import ai.catboost.CatBoostPredictions; CatBoostModel model = CatBoostModel.loadModel("model.cbm");`

-
Apply the model:

`CatBoostPredictions prediction = model.predict(new float[]{0.1f, 0.3f, 0.2f}, new String[]{"foo", "bar", "baz"}); // assuming that this is a regression task System.out.print("model value is " + String.valueOf(prediction.get(0, 0));`


Provided classes

| Class | Description |
|---|---|
|

---

## Source: https://catboost.ai/docs/en/concepts/apply-node-js

# CatBoost Model Node package

A Node.js package for applying pretrained CatBoost models.

Installation

Install the package. You have two options:

-
Install from npm registry:

`npm i catboost`

-
Build package from source.

CatBoost source code is stored as a

[Git](https://git-scm.com/)repository on GitHub at[https://github.com/catboost/catboost/](https://github.com/catboost/catboost/). You can obtain a local copy of this Git repository by running the following command from a command line interpreter (you need to have Git command line tools installed):`git clone https://github.com/catboost/catboost.git`

Navigate to

`$PATH_TO_CATBOOST_REPO/catboost/node-package`

directory inside the repo and run:`npm install`

Now you can link this package in your project via:

`npm install $PATH_TO_CATBOOST_REPO/catboost/node-package`


Usage

Apply the pretrained model.

Example with numerical and categorical features (they must be passed in separate arrays containing features of

each type for all samples):

```
catboost = require('catboost');
model = new catboost.Model();
model.loadModel('test_data/adult.cbm');
prediction = model.predict([
[40., 85019., 16., 0., 0., 45.],
[28., 85019., 13., 0., 0., 13.],
],
[
["Private", "Doctorate", "Married-civ-spouce", "Prof-specialty", "Husband", "Asian-Pac-Islander", "Male", "nan"],
["Self-emp-not-inc", "Bachelors", "Married-civ-spouce", "Exec-managerial", "Husband", "White", "Male", "United-States"],
]
);
console.log(prediction);
```

---

## Source: https://catboost.ai/docs/en/concepts/apply-rust

Installation
Overview
Python package installation
CatBoost for Apache Spark installation
R package installation
Command-line version binary
Build from source
Key Features
Training parameters
Python package
CatBoost for Apache Spark
R package
Command-line version
Applying models
Overview
C/C++
Java
CoreML
Node.js
ONNX
Rust
.NET
Applying the model in ClickHouse
PMML
Models exported as code
Objectives and metrics
Model analysis
Data format description
Parameter tuning
Speeding up the training
Data visualization
Algorithm details
FAQ
Educational materials
Development and contributions
Contacts
Rust
Applying models
Rust
Rust
Refer to the
tutorial
in the CatBoost
tutorials repository
for details.
Was the article helpful?
Yes
No
Previous
ONNX
Next
.NET

---

## Source: https://catboost.ai/docs/en/features/eval-metrics

# Calculate metrics

A list of specified metrics can be calculated for the given dataset using the Python package.

Python package

[CatBoost](en/concepts/python-reference_catboost)

**Class purpose**

Training and applying models.

**Method**

**Description**

Calculate the specified metrics for the specified dataset.

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Class purpose**

Training and applying models.

**Method**

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Class purpose**

Training and applying models.

**Method**

### Was the article helpful?

Previous

---

## Source: https://catboost.ai/docs/en/features/staged-prediction

# Staged prediction

CatBoost allows to apply a trained model and calculate the results for each i-th tree of the model taking into consideration only the trees in the range `[0; i)`

.

Choose the implementation for more details.

Python package

Classes

[CatBoost](en/concepts/python-reference_catboost)

**Class purpose**

Training and applying models.

**Method**

**Description**

Apply the model to the given dataset and calculate the results taking into consideration only the trees in the range [0; i).

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Class purpose**

Training and applying models for the regression problems. When using the applying methods only the predicted class is returned. Provides compatibility with the scikit-learn tools.

**Method**

**Description**

Apply the model to the given dataset and calculate the results taking into consideration only the trees in the range [0; i).

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Class purpose**

Training and applying models for the classification problems. Provides compatibility with the scikit-learn tools.

**Methods**

**Description**

Apply the model to the given dataset and calculate the results taking into consideration only the trees in the range [0; i).

**Class purpose**

The same as staged_predict with the difference that the results are probabilities that the object belongs to the positive class.

R package

For the [catboost.staged_predict](en/concepts/r-reference_catboost-staged_predict) method:

**Purpose**

Apply the model to the given dataset and calculate the results for the specified trees only.

Command-line version

For the [catboost calc](en/concepts/cli-reference_calc-model) command:

**Purpose**

Apply the model.

**Command keys**

`--eval-period`


**Key description**

To reduce the number of trees to use when the model is applied or the metrics are calculated, set the step of the trees to use to `eval-period`

.

This parameter defines the step to iterate over the range `[--ntree-start; --ntree-end)`

. For example, let's assume that the following parameter values are set:

`--ntree-start`

is set 0`--ntree-end`

is set to N (the total tree count)`--eval-period`

is set to 2

In this case, the results are returned for the following tree ranges: `[0, 2)`

, `[0, 4)`

, ... , `[0, N)`

.

---

## Source: https://catboost.ai/docs/en/features/catboost-with-clickhouse

# Applying the model in ClickHouse

A CatBoost model can be applied in [ClickHouse](https://clickhouse.com/). See the documentation about [catboostEvaluate function](https://clickhouse.com/docs/sql-reference/functions/other-functions#catboostevaluate).

A [tutorial](https://github.com/ClickHouse/clickhouse-presentations/blob/master/tutorials/catboost_with_clickhouse_en.md) is available in the ClickHouse documentation.

A CatBoost model can be applied in [ClickHouse](https://clickhouse.com/). See the documentation about [catboostEvaluate function](https://clickhouse.com/docs/sql-reference/functions/other-functions#catboostevaluate).

A [tutorial](https://github.com/ClickHouse/clickhouse-presentations/blob/master/tutorials/catboost_with_clickhouse_en.md) is available in the ClickHouse documentation.

---

## Source: https://catboost.ai/docs/en/features/feature-importances-calculation

# Feature importances

CatBoost provides different types of feature importance calculation:

| Feature importance calculation type | Implementations |
|---|---|
| The most important features in the formula | -
-
-
|

[ShapValues](en/concepts/shap-values)[Interaction](en/concepts/feature-interaction#feature-interaction-strength)-

[InternalInteraction](en/concepts/feature-interaction#internal-feature-interaction-strength)Choose the implementation for more details.

Python package

Use one of the following methods:

-
Use the feature_importances_ attribute.

-
Use one of the following methods to calculate the feature importances after model training:


| Class | Description |
|---|---|
|

[get_feature_importance](en/concepts/python-reference_catboost_get_feature_importance)[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)[get_feature_importance](en/concepts/python-reference_catboostclassifier_get_feature_importance)[CatBoostRegressor](en/concepts/python-reference_catboostregressor)[get_feature_importance](en/concepts/python-reference_catboostregressor_get_feature_importance)These methods calculate and return the [feature importances](en/concepts/fstr).

R package

Use one of the following methods:

-
Use the

`feature_importances`

[attribute](en/concepts/r-reference#attributes)to get the feature importances. -
Use one of the following methods to calculate the feature importances after model training:


| Method | Description |
|---|---|
|

[feature importances](en/concepts/fstr)([Feature importance](en/concepts/output-data_feature-analysis_feature-importance)and[Feature interaction strength](en/concepts/output-data_feature-analysis_feature-interaction-strength)).Command-line version

Use the following command to calculate the feature importances during model training:

| Command | Command keys | Key description |
|---|---|---|
|

`--fstr-file`

[regular feature importance](en/concepts/output-data_feature-analysis_feature-importance#per-feature-importance)data (see[Feature importance](en/concepts/fstr)).Set the required file name for further feature importance analysis.

`--fstr-internal-file`

[internal feature importance](en/concepts/output-data_feature-analysis_feature-importance#internal-feature-importance)data (see[Feature importance](en/concepts/fstr)).Set the required file name for further internal feature importance analysis.

Use the following command to calculate the feature importances after model training:

| Command | Purpose |
|---|---|
|

Related information

### Was the article helpful?

Previous

---

## Source: https://catboost.ai/docs/en/features/object-importances-calcution

# Object importances

CatBoost provides the following types of object importances calculation:

Choose the implementation for more details.

Python package

Classes:

[CatBoost](en/concepts/python-reference_catboost)

**Class purpose**

Training and applying models.

**Method**

[CatBoostClassifier](en/concepts/python-reference_catboostclassifier)

**Class purpose**

Training and applying models.

**Method**

[CatBoostRegressor](en/concepts/python-reference_catboostregressor)

**Class purpose**

Training and applying models.

**Method**

R package

**Method**

[catboost.get_object_importance](en/concepts/r-reference_catboost-get_object_importance)

**Purpose**

Calculate the effect of objects from the train dataset on the optimized metric values for the objects from the input dataset:

- Positive values reflect that the optimized metric increases.
- Negative values reflect that the optimized metric decreases.

Command-line version

**Command**

**Purpose**

Calculate the effect of objects from the training dataset on the optimized metric values for the objects from the validation dataset:

- Positive values reflect that the optimized metric increases.
- Negative values reflect that the optimized metric decreases.

The higher the deviation from 0, the bigger the impact that an object has on the optimized metric.

### Was the article helpful?

Previous

Next

---

## Source: https://catboost.ai/docs/en/features/loss-functions-desc

# Implemented metrics

CatBoost provides built-in metrics for various machine learning problems. These functions can be used for model optimization or reference purposes. See the [Objectives and metrics](en/concepts/loss-functions) section for details on the calculation principles.

Choose the implementation for more details.

Python package

The following parameters can be set for the corresponding classes and are used when the model is trained.

Parameters for trained model

Classes:

loss-function

The [metric](en/concepts/loss-functions) to use in training. The specified value also determines the machine learning problem to solve. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


## Supported metrics

-
RMSE

-
Logloss

-
MAE

-
CrossEntropy

-
Quantile

-
LogLinQuantile

-
Lq

-
MultiRMSE

-
MultiClass

-
MultiClassOneVsAll

-
MultiLogloss

-
MultiCrossEntropy

-
MAPE

-
Poisson

-
PairLogit

-
PairLogitPairwise

-
QueryRMSE

-
QuerySoftMax

-
GroupQuantile

-
Tweedie

-
YetiRank

-
YetiRankPairwise

-
StochasticFilter

-
StochasticRank


A custom python object can also be set as the value of this parameter (see an [example](en/concepts/python-usages-examples)).

For example, use the following construction to calculate the value of Quantile with the coefficient :

```
Quantile:alpha=0.1
```


custom_metric

[Metric](en/concepts/loss-functions) values to output during training. These functions are not optimized and are displayed for informational purposes only. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


Examples:

-
Calculate the value of CrossEntropy

`CrossEntropy`

-
Calculate the value of Quantile with the coefficient

`Quantile:alpha=0.1`

-
Calculate the values of Logloss and AUC

`['Logloss', 'AUC']`


Values of all custom metrics for learn and validation datasets are saved to the [Metric](en/concepts/output-data_loss-function) output files (`learn_error.tsv`

and `test_error.tsv`

respectively). The directory for these files is specified in the `--train-dir`

(`train_dir`

) parameter.

Use the [visualization tools](en/features/visualization) to see a live chart with the dynamics of the specified metrics.

use-best-model

If this parameter is set, the number of trees that are saved in the resulting model is defined as follows:

- Build the number of trees defined by the training parameters.
- Use the validation dataset to identify the iteration with the optimal value of the metric specified in
`--eval-metric`

(`--eval-metric`

).

No trees are saved after this iteration.

This option requires a validation dataset to be provided.

eval-metric

The metric used for overfitting detection (if enabled) and best model selection (if enabled). Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


A user-defined function can also be set as the value (see an [example](en/concepts/python-usages-examples)).

Examples:

```
R2
```


The following parameters can be set for the corresponding methods and are used when the model is trained or applied.

Parameters for trained or applied model

The following parameters can be set for the corresponding methods and are used when the model is trained or applied.

Classes:

use_best_model

If this parameter is set, the number of trees that are saved in the resulting model is defined as follows:

- Build the number of trees defined by the training parameters.
- Use the validation dataset to identify the iteration with the optimal value of the metric specified in
`--eval-metric`

(`--eval-metric`

).

No trees are saved after this iteration.

This option requires a validation dataset to be provided.

verbose

Output the measured evaluation metric to stderr.

plot

Plot the following information during training:

- the metric values;
- the custom loss values;
- the loss function change during feature selection;
- the time has passed since training started;
- the remaining time until the end of training.

This[option can be used](en/features/visualization_jupyter-notebook)if training is performed in Jupyter notebook.

R package

The following parameters can be set for the corresponding methods and are used when the model is trained or applied.

Method: [catboost.train](en/concepts/r-reference_catboost-train)

loss_function

**Description**

The [metric](en/concepts/loss-functions) to use in training. The specified value also determines the machine learning problem to solve. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


## Supported metrics

-
RMSE

-
Logloss

-
MAE

-
CrossEntropy

-
Quantile

-
LogLinQuantile

-
Lq

-
MultiRMSE

-
MultiClass

-
MultiClassOneVsAll

-
MultiLogloss

-
MultiCrossEntropy

-
MAPE

-
Poisson

-
PairLogit

-
PairLogitPairwise

-
QueryRMSE

-
QuerySoftMax

-
GroupQuantile

-
Tweedie

-
YetiRank

-
YetiRankPairwise

-
StochasticFilter

-
StochasticRank


For example, use the following construction to calculate the value of Quantile with the coefficient :

```
Quantile:alpha=0.1
```


custom_loss

**Parameters**

[Metric](en/concepts/loss-functions) values to output during training. These functions are not optimized and are displayed for informational purposes only. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


Examples:

-
Calculate the value of CrossEntropy

`c('CrossEntropy')`

Or simply:

`'CrossEntropy'`

-
Calculate the values of Logloss and AUC

`c('Logloss', 'AUC')`

-
Calculate the value of Quantile with the coefficient

`c('Quantilealpha=0.1')`


Values of all custom metrics for learn and validation datasets are saved to the [Metric](en/concepts/output-data_loss-function) output files (`learn_error.tsv`

and `test_error.tsv`

respectively). The directory for these files is specified in the `--train-dir`

(`train_dir`

) parameter.

use-best-model

If this parameter is set, the number of trees that are saved in the resulting model is defined as follows:

- Build the number of trees defined by the training parameters.
- Use the validation dataset to identify the iteration with the optimal value of the metric specified in
`--eval-metric`

(`--eval-metric`

).

No trees are saved after this iteration.

This option requires a validation dataset to be provided.

eval-metric

**Parameters**

The metric used for overfitting detection (if enabled) and best model selection (if enabled). Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


```
Quantile:alpha=0.3
```


Command-line version

The following command keys can be specified for the corresponding commands and are used when the model is trained or applied.

Params for the [catboost fit](en/references/training-parameters/) command:

--loss-function

The [metric](en/concepts/loss-functions) to use in training. The specified value also determines the machine learning problem to solve. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


## Supported metrics

-
RMSE

-
Logloss

-
MAE

-
CrossEntropy

-
Quantile

-
LogLinQuantile

-
Lq

-
MultiRMSE

-
MultiClass

-
MultiClassOneVsAll

-
MultiLogloss

-
MultiCrossEntropy

-
MAPE

-
Poisson

-
PairLogit

-
PairLogitPairwise

-
QueryRMSE

-
QuerySoftMax

-
GroupQuantile

-
Tweedie

-
YetiRank

-
YetiRankPairwise

-
StochasticFilter

-
StochasticRank


For example, use the following construction to calculate the value of Quantile with the coefficient :

```
Quantilealpha=0.1
```


--custom-metric

[Metric](en/concepts/loss-functions) values to output during training. These functions are not optimized and are displayed for informational purposes only. Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric 1>[:<parameter 1>=<value>;..;<parameter N>=<value>],<Metric 2>[:<parameter 1>=<value>;..;<parameter N>=<value>],..,<Metric N>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


Examples:

-
Calculate the value of CrossEntropy

`CrossEntropy`

-
Calculate the value of Quantile with the coefficient

`Quantilealpha=0.1`


Values of all custom metrics for learn and validation datasets are saved to the [Metric](en/concepts/output-data_loss-function) output files (`learn_error.tsv`

and `test_error.tsv`

respectively). The directory for these files is specified in the `--train-dir`

(`train_dir`

) parameter.

--use-best-model

If this parameter is set, the number of trees that are saved in the resulting model is defined as follows:

- Build the number of trees defined by the training parameters.
- Use the validation dataset to identify the iteration with the optimal value of the metric specified in
`--eval-metric`

(`--eval-metric`

).

No trees are saved after this iteration.

This option requires a validation dataset to be provided.

--eval-metric

The metric used for overfitting detection (if enabled) and best model selection (if enabled). Some metrics support optional parameters (see the [Objectives and metrics](en/concepts/loss-functions) section for details on each metric).

Format:

```
<Metric>[:<parameter 1>=<value>;..;<parameter N>=<value>]
```


Examples:

```
R2
```


```
Quantile:alpha=0.3
```


--logging-level

The logging level to output to stdout.

Possible values:

-
Silent — Do not output any logging information to stdout.

-
Verbose — Output the following data to stdout:

- optimized metric
- elapsed time of training
- remaining time of training

-
Info — Output additional information and the number of trees.

-
Debug — Output debugging information.

---

## Source: https://catboost.ai/docs/en/features/custom-loss-functions

# User-defined metrics

A custom Python object can be set as a value for the training metric.

The following parameters can be set for the corresponding classes and are used when the model is trained.

**Class**

**Parameters**

`--loss-function`


**Description**

A custom python object can be set as the value of this parameter (see an [example](en/concepts/python-usages-examples)).

---

## Source: https://catboost.ai/docs/en/features/snapshots

# Recovering training after an interruption

During the training, CatBoost makes snapshots — backup copies of intermediate results. If an unexpected interruption occurs (for instance, the computer accidentally turns off), training can be continued from the saved state. In this case, the completed iterations of building trees don't need to be repeated.

Saving snapshots can be enabled when setting training parameters. Refer to the descriptions below for details. If enabled, the default period for making snapshots is 600 seconds. This period can be changed with training parameters described below.

To restore an interrupted training from a previously saved snapshot, launch the training in the same folder with the same parameters. In this case, CatBoost finds the snapshot and resumes the training from the iteration where it has stopped.

**Method**

**Parameters**

## save_snapshot

`save_snapshot`


Enable snapshotting for [restoring the training progress after an interruption](en/features/snapshots). If enabled, the default period for making snapshots is 600 seconds. Use the `snapshot_interval`

parameter to change this period.

Set this parameter to "True".

## snapshot_file

`snapshot_file`


The name of the file to save the training progress information in. This file is used for [recovering training after an interruption](en/features/snapshots).

Depending on whether the specified file exists in the file system:

- Missing — Write information about training progress to the specified file.
- Exists — Load data from the specified file and continue training from where it left off.

Note

This parameter is not supported in the `params`

parameter of the [cv](en/concepts/python-reference_cv) function.

## snapshot_interval

`snapshot_interval`


The interval between saving snapshots in seconds.

The first snapshot is taken after the specified number of seconds since the start of training. Every subsequent snapshot is taken after the specified number of seconds since the previous one. The last snapshot is taken at the end of the training.

**Method** [catboost.train](en/concepts/r-reference_catboost-train)

**Parameters**

## save_snapshot

`save_snapshot`


Enable snapshotting for [restoring the training progress after an interruption](en/features/snapshots). If enabled, the default period for making snapshots is 600 seconds. Use the `snapshot_interval`

parameter to change this period.

Set this parameter to "True".

## snapshot_file

`snapshot_file`


The name of the file to save the training progress information in. This file is used for [recovering training after an interruption](en/features/snapshots).

Depending on whether the specified file exists in the file system:

- Missing — Write information about training progress to the specified file.
- Exists — Load data from the specified file and continue training from where it left off.

Note

This parameter is not supported in the `params`

parameter of the [cv](en/concepts/python-reference_cv) function.

## snapshot_interval

`snapshot_interval`


The interval between saving snapshots in seconds.

The first snapshot is taken after the specified number of seconds since the start of training. Every subsequent snapshot is taken after the specified number of seconds since the previous one. The last snapshot is taken at the end of the training.

**Command** [catboost fit](en/references/training-parameters/)

**Command keys**

## --snapshot-file

`--snapshot-file`


Settings for [recovering training after an interruption](en/features/snapshots).

Depending on whether the specified file exists in the file system:

- Missing — Write information about training progress to the specified file.
- Exists — Load data from the specified file and continue training from where it left off.

Use this parameter to enable snapshotting.

## --snapshot-interval

`--snapshot-interval`


The interval between saving snapshots in seconds.

The first snapshot is taken after the specified number of seconds since the start of training. Every subsequent snapshot is taken after the specified number of seconds since the previous one. The last snapshot is taken at the end of the training.