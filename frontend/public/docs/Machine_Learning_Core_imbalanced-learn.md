# Imbalanced-learn Documentation
> Scraped on: 2026-03-30 | Root Source: [https://imbalanced-learn.org/stable/](https://imbalanced-learn.org/stable/)



---

## Source: https://imbalanced-learn.org/stable/

# imbalanced-learn documentation[#](#imbalanced-learn-documentation)

**Date**: Dec 21, 2025 **Version**: 0.14.1

**Useful links**:
[Binary Installers](https://pypi.org/project/imbalanced-learn) |
[Source Repository](https://github.com/scikit-learn-contrib/imbalanced-learn) |
[Issues & Ideas](https://github.com/scikit-learn-contrib/imbalanced-learn/issues) |
[Q&A Support](https://gitter.im/scikit-learn-contrib/imbalanced-learn)

Imbalanced-learn (imported as `imblearn`

) is an open source, MIT-licensed
library relying on scikit-learn (imported as `sklearn`

) and provides tools
when dealing with classification with imbalanced classes.

Check out the getting started guides to install `imbalanced-learn`

.
Some extra information to get started with a new contribution is also provided.

The user guide provides in-depth information on the key concepts of
`imbalanced-learn`

with useful background information and explanation.

The reference guide contains a detailed description of
the `imbalanced-learn`

API. To known more about methods parameters.

The gallery of examples is a good place to see `imbalanced-learn`

in action.
Select an example and dive in.

---

## Source: https://imbalanced-learn.org/stable/install.html

# Getting Started[#](#getting-started)

## Prerequisites[#](#prerequisites)

`imbalanced-learn`

requires the following dependencies:

Python (>= 3.10)

NumPy (>= 1.25.2)

SciPy (>= 1.11.4)

Scikit-learn (>= 1.4.2)

Pytest (>= 7.2.2)


Additionally, `imbalanced-learn`

requires the following optional dependencies:

Pandas (>= 2.0.3) for dealing with dataframes

Tensorflow (>= 2.16.1) for dealing with TensorFlow models

Keras (>= 3.3.3) for dealing with Keras models


The examples will requires the following additional dependencies:

Matplotlib (>= 3.7.3)

Seaborn (>= 0.12.2)


## Install[#](#install)

### From PyPi or conda-forge repositories[#](#from-pypi-or-conda-forge-repositories)

imbalanced-learn is currently available on the PyPi’s repositories and you can
install it via `pip`

:

```
pip install imbalanced-learn
```

The package is released also on the conda-forge repositories and you can install
it with `conda`

(or `mamba`

):

```
conda install -c conda-forge imbalanced-learn
```

### Intel optimizations via scikit-learn-intelex[#](#intel-optimizations-via-scikit-learn-intelex)

Imbalanced-learn relies entirely on scikit-learn algorithms. Intel provides an optimized version of scikit-learn for Intel hardwares, called scikit-learn-intelex. Installing scikit-learn-intelex and patching scikit-learn will activate the Intel optimizations.

You can refer to the following
[blog post](https://medium.com/intel-analytics-software/why-pay-more-for-machine-learning-893683bd78e4)
for some benchmarks.

Refer to the following documentation for instructions:

### From source available on GitHub[#](#from-source-available-on-github)

If you prefer, you can clone it and run the setup.py file. Use the following commands to get a copy from Github and install all dependencies:

```
git clone https://github.com/scikit-learn-contrib/imbalanced-learn.git
cd imbalanced-learn
pip install .
```

Be aware that you can install in developer mode with:

```
pip install --no-build-isolation --editable .
```

If you wish to make pull-requests on GitHub, we advise you to install pre-commit:

```
pip install pre-commit
pre-commit install
```

## Test and coverage[#](#test-and-coverage)

You want to test the code before to install:

```
$ make test
```

You wish to test the coverage of your version:

```
$ make coverage
```

You can also use `pytest`

:

```
$ pytest imblearn -v
```

## Contribute[#](#contribute)

You can contribute to this code through Pull Request on [GitHub](https://github.com/scikit-learn-contrib/imbalanced-learn/pulls). Please, make
sure that your code is coming with unit tests to ensure full coverage and
continuous integration in the API.

---

## Source: https://imbalanced-learn.org/stable/user_guide.html

# User Guide[#](#user-guide)

[1. Introduction](introduction.html)[2. Over-sampling](over_sampling.html)[3. Under-sampling](under_sampling.html)[4. Combination of over- and under-sampling](combine.html)[5. Ensemble of samplers](ensemble.html)[6. Miscellaneous samplers](miscellaneous.html)[7. Metrics](metrics.html)[8. Cross validation](model_selection.html)[9. Common pitfalls and recommended practices](common_pitfalls.html)[10. Dataset loading utilities](datasets/index.html)[11. Developer guideline](developers_utils.html)[12. References](zzz_references.html)

---

## Source: https://imbalanced-learn.org/stable/references/index.html

API reference# This is the full API documentation of the imbalanced-learn toolbox. Under-sampling methods Prototype generation ClusterCentroids Prototype selection CondensedNearestNeighbour EditedNearestNeighbours RepeatedEditedNearestNeighbours AllKNN InstanceHardnessThreshold NearMiss NeighbourhoodCleaningRule OneSidedSelection RandomUnderSampler TomekLinks Over-sampling methods Basic over-sampling RandomOverSampler SMOTE algorithms SMOTE SMOTENC SMOTEN ADASYN BorderlineSMOTE KMeansSMOTE SVMSMOTE Combination of over- and under-sampling methods SMOTEENN SMOTEENN Examples using imblearn.combine.SMOTEENN SMOTETomek SMOTETomek Examples using imblearn.combine.SMOTETomek Ensemble methods Boosting algorithms EasyEnsembleClassifier RUSBoostClassifier Bagging algorithms BalancedBaggingClassifier BalancedRandomForestClassifier Batch generator for Keras BalancedBatchGenerator BalancedBatchGenerator Examples using imblearn.keras.BalancedBatchGenerator balanced_batch_generator balanced_batch_generator Batch generator for TensorFlow balanced_batch_generator balanced_batch_generator Miscellaneous FunctionSampler FunctionSampler Examples using imblearn.FunctionSampler Pipeline Pipeline Pipeline Examples using imblearn.pipeline.Pipeline make_pipeline make_pipeline Examples using imblearn.pipeline.make_pipeline Metrics Classification metrics classification_report_imbalanced sensitivity_specificity_support sensitivity_score specificity_score geometric_mean_score macro_averaged_mean_absolute_error make_index_balanced_accuracy Pairwise metrics ValueDifferenceMetric Model selection methods Cross-validation splitters InstanceHardnessCV Datasets make_imbalance make_imbalance Examples using imblearn.datasets.make_imbalance fetch_datasets fetch_datasets Examples using imblearn.datasets.fetch_datasets Utilities Validation checks used in samplers parametrize_with_checks check_neighbors_object check_sampling_strategy check_target_type Testing compatibility of your own sampler parametrize_with_checks

---

## Source: https://imbalanced-learn.org/stable/auto_examples/index.html

# Examples[#](#examples)

General-purpose and introductory examples for the `imbalanced-learn`

toolbox.

# Examples showing API imbalanced-learn usage[#](#examples-showing-api-imbalanced-learn-usage)

Examples that show some details regarding the API of imbalanced-learn.

[How to use sampling_strategy in imbalanced-learn](api/plot_sampling_strategy_usage.html)

# Examples based on real world datasets[#](#examples-based-on-real-world-datasets)

Examples which use real-word dataset.

[Multiclass classification with under-sampling](applications/plot_multi_class_under_sampling.html)

[Example of topic classification in text documents](applications/plot_topic_classication.html)

[Customized sampler to implement an outlier rejections estimator](applications/plot_outlier_rejections.html)

[Benchmark over-sampling methods in a face recognition task](applications/plot_over_sampling_benchmark_lfw.html)

[Porto Seguro: balancing samples in mini-batches with Keras](applications/porto_seguro_keras_under_sampling.html)

[Fitting model on imbalanced datasets and how to fight bias](applications/plot_impact_imbalanced_classes.html)

## Examples using combine class methods[#](#examples-using-combine-class-methods)

Combine methods mixed over- and under-sampling methods. Generally SMOTE is used for over-sampling while some cleaning methods (i.e., ENN and Tomek links) are used to under-sample.

[Compare sampler combining over- and under-sampling](combine/plot_comparison_combine.html)

# Dataset examples[#](#dataset-examples)

Examples concerning the [ imblearn.datasets](../references/datasets.html#module-imblearn.datasets) module.

## Example using ensemble class methods[#](#example-using-ensemble-class-methods)

Under-sampling methods implies that samples of the majority class are lost during the balancing procedure. Ensemble methods offer an alternative to use most of the samples. In fact, an ensemble of balanced sets is created and used to later train any classifier.

[Bagging classifiers using sampler](ensemble/plot_bagging_classifier.html)

[Compare ensemble classifiers using resampling](ensemble/plot_comparison_ensemble_classifier.html)

# Evaluation examples[#](#evaluation-examples)

Examples illustrating how classification using imbalanced dataset can be done.

[Evaluate classification by compiling a report](evaluation/plot_classification_report.html)

[Metrics specific to imbalanced learning](evaluation/plot_metrics.html)

# Model Selection[#](#model-selection)

Examples related to the selection of balancing methods.

[Distribute hard-to-classify datapoints over CV folds](model_selection/plot_instance_hardness_cv.html)

## Example using over-sampling class methods[#](#example-using-over-sampling-class-methods)

Data balancing can be performed by over-sampling such that new samples are generated in the minority class to reach a given balancing ratio.

[Sample generator used in SMOTE-like samplers](over-sampling/plot_illustration_generation_sample.html)

[Effect of the shrinkage factor in random over-sampling](over-sampling/plot_shrinkage_effect.html)

[Compare over-sampling samplers](over-sampling/plot_comparison_over_sampling.html)

## Pipeline examples[#](#pipeline-examples)

Example of how to use the a pipeline to include under-sampling with `scikit-learn`

estimators.

[Usage of pipeline embedding samplers](pipeline/plot_pipeline_classification.html)

## Example using under-sampling class methods[#](#example-using-under-sampling-class-methods)

Under-sampling refers to the process of reducing the number of samples in the majority classes. The implemented methods can be categorized into 2 groups: (i) fixed under-sampling and (ii) cleaning under-sampling.

[Illustration of the definition of a Tomek link](under-sampling/plot_illustration_tomek_links.html)

[Compare under-sampling samplers](under-sampling/plot_comparison_under_sampling.html)

---

## Source: https://imbalanced-learn.org/stable/whats_new.html

# Release history[#](#release-history)

## Version 0.14.1[#](#version-0-14-1)

**December 21, 2025**

### Changelog[#](#changelog)

#### Maintenance[#](#maintenance)

Compatibility with scikit-learn 1.8

[#1158](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1158)by[Guillaume Lemaitre](https://github.com/glemaitre)and[stratakis](https://github.com/stratakis).

## Version 0.14.0[#](#version-0-14-0)

**August 14, 2025**

### Changelog[#](#id1)

#### Bug fixes[#](#bug-fixes)

#### Enhancements[#](#enhancements)

Add

to split data and ensure that samples are distributed in folds based on their instance hardness.`InstanceHardnessCV`

[#1125](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1125)by[Frits Hermans](https://github.com/fritshermans).

#### Compatibility[#](#compatibility)

Compatibility with scikit-learn 1.7

[#1137](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1137),[#1145](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1145),[#1146](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1146)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.13.0[#](#version-0-13-0)

**December 20, 2024**

### Changelog[#](#id2)

#### Bug fixes[#](#id3)

Fix

`get_metadata_routing`

insuch that one can use a sampler with metadata routing.`Pipeline`

[#1115](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1115)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Compatibility[#](#id4)

Compatibility with scikit-learn 1.6

[#1109](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1109)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecations[#](#deprecations)

now uses`Pipeline`

`check_is_fitted`

instead of`check_fitted`

to check if the pipeline is fitted. In 0.15, it will raise an error instead of a warning.[#1109](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1109)by[Guillaume Lemaitre](https://github.com/glemaitre).`algorithm`

parameter inis now deprecated and will be removed in 0.14.`RUSBoostClassifier`

[#1109](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1109)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.12.4[#](#version-0-12-4)

**October 4, 2024**

### Changelog[#](#id5)

#### Compatibility[#](#id6)

Compatibility with NumPy 2.0+

[#1097](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1097)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.12.3[#](#version-0-12-3)

**May 28, 2024**

### Changelog[#](#id7)

#### Compatibility[#](#id8)

Compatibility with scikit-learn 1.5

[#1074](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1074)and[#1084](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1084)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.12.2[#](#version-0-12-2)

**March 31, 2024**

### Changelog[#](#id9)

#### Bug fixes[#](#id10)

Fix the way we check for a specific Python version in the test suite.

[#1075](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1075)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.12.1[#](#version-0-12-1)

**March 31, 2024**

### Changelog[#](#id11)

#### Bug fixes[#](#id12)

Fix a bug in

where`InstanceHardnessThreshold`

`estimator`

could not be a`Pipeline`

object.[#1049](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1049)by[Gonenc Mogol](https://github.com/gmogol).

#### Compatibility[#](#id13)

Do not use

`distutils`

in tests due to deprecation.[#1065](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1065)by[Michael R. Crusoe](https://github.com/mr-c).Fix the scikit-learn import in tests to be compatible with version 1.4.1.post1.

[#1073](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1073)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix test to be compatible with Python 3.13.

[#1073](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1073)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.12.0[#](#version-0-12-0)

**January 24, 2024**

### Changelog[#](#id14)

#### Bug fixes[#](#id15)

Fix a bug in

where the entries of the one-hot encoding should be divided by`SMOTENC`

`sqrt(2)`

and not`2`

, taking into account that they are plugged into an Euclidean distance computation.[#1014](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1014)by[Guillaume Lemaitre](https://github.com/glemaitre).Raise an informative error message when all support vectors are tagged as noise in

.`SVMSMOTE`

[#1016](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1016)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

where the median of standard deviation of the continuous features was only computed on the minority class. Now, we are computing this statistic for each class that is up-sampled.`SMOTENC`

[#1015](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1015)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

such that the case where the median of standard deviation of the continuous features is null is handled in the multiclass case as well.`SMOTENC`

[#1015](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1015)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

version 2 where samples should be generated from the whole dataset and not only from the minority class.`BorderlineSMOTE`

[#1023](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1023)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

where the`NeighbourhoodCleaningRule`

`kind_sel="all"`

was not working as explained in the literature.[#1012](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1012)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

where the`NeighbourhoodCleaningRule`

`threshold_cleaning`

ratio was multiplied on the total number of samples instead of the number of samples in the minority class.[#1012](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1012)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

and`RandomUnderSampler`

where a column containing only NaT was not handled correctly.`RandomOverSampler`

[#1059](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1059)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Compatibility[#](#id16)

now support missing values and monotonic constraints if scikit-learn >= 1.4 is installed.`BalancedRandomForestClassifier`

support metadata routing if scikit-learn >= 1.4 is installed.`Pipeline`

Compatibility with scikit-learn 1.4.

[#1058](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1058)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecations[#](#id17)

Deprecate

`estimator_`

argument in favor of`estimators_`

for the classesand`CondensedNearestNeighbour`

.`OneSidedSelection`

`estimator_`

will be removed in 0.14.[#1011](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1011)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate

`kind_sel`

in`:pr:`1012`

by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancements[#](#id18)

## Version 0.11.0[#](#version-0-11-0)

**July 8, 2023**

### Changelog[#](#id19)

#### Bug fixes[#](#id20)

Fix a bug in

where the parameter`classification_report_imbalanced`

`target_names`

was not taken into account when`output_dict=True`

.[#989](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/989)by[AYY7](https://github.com/AYY7).now handles mix types of data type such as`SMOTENC`

`bool`

and`pd.category`

by delegating the conversion to scikit-learn encoder.[#1002](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1002)by[Guillaume Lemaitre](https://github.com/glemaitre).Handle sparse matrices in

and raise a warning since it requires a conversion to dense matrices.`SMOTEN`

[#1003](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1003)by[Guillaume Lemaitre](https://github.com/glemaitre).Remove spurious warning raised when minority class get over-sampled more than the number of sample in the majority class.

[#1007](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1007)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Compatibility[#](#id21)

Maintenance release for being compatible with scikit-learn >= 1.3.0.

[#999](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/999)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecation[#](#deprecation)

The fitted attribute

`ohe_`

inis deprecated and will be removed in version 0.13. Use`SMOTENC`

`categorical_encoder_`

instead.[#1000](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1000)by[Guillaume Lemaitre](https://github.com/glemaitre).The default of the parameters

`sampling_strategy`

,`bootstrap`

and`replacement`

will change into follow the implementation of the original paper. This changes will take effect in version 0.13.`BalancedRandomForestClassifier`

[#1006](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1006)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancements[#](#id22)

now accepts a parameter`SMOTENC`

`categorical_encoder`

allowing to specify a`OneHotEncoder`

with custom parameters.[#1000](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1000)by[Guillaume Lemaitre](https://github.com/glemaitre).now accepts a parameter`SMOTEN`

`categorical_encoder`

allowing to specify a`OrdinalEncoder`

with custom parameters. A new fitted parameter`categorical_encoder_`

is exposed to access the fitted encoder.[#1001](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1001)by[Guillaume Lemaitre](https://github.com/glemaitre).and`RandomUnderSampler`

(when`RandomOverSampler`

`shrinkage is not None`

) now accept any data types and will not attempt any data conversion.[#1004](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1004)by[Guillaume Lemaitre](https://github.com/glemaitre).now support passing array-like of`SMOTENC`

`str`

when passing the`categorical_features`

parameter.[#1008](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1008)by :user`Guillaume Lemaitre <glemaitre>`.now support automatic categorical inference when`SMOTENC`

`categorical_features`

is set to`"auto"`

.[#1009](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1009)by :user`Guillaume Lemaitre <glemaitre>`.

## Version 0.10.1[#](#version-0-10-1)

**December 28, 2022**

### Changelog[#](#id23)

#### Bug fixes[#](#id24)

Fix a regression in over-sampler where the string

`minority`

was rejected as an unvalid sampling strategy.[#964](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/964)by[Prakhyath Bhandary](https://github.com/Prakhyath07).

## Version 0.10.0[#](#version-0-10-0)

**December 9, 2022**

### Changelog[#](#id25)

#### Bug fixes[#](#id26)

Make sure that

`Substitution`

is working with`python -OO`

that replace`__doc__`

by`None`

.[#953](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/953)bu[Guillaume Lemaitre](https://github.com/glemaitre).

#### Compatibility[#](#id27)

Maintenance release for be compatible with scikit-learn >= 1.0.2.

[#946](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/946),[#947](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/947),[#949](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/949)by[Guillaume Lemaitre](https://github.com/glemaitre).Add support for automatic parameters validation as in scikit-learn >= 1.2.

[#955](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/955)by[Guillaume Lemaitre](https://github.com/glemaitre).Add support for

`feature_names_in_`

as well as`get_feature_names_out`

for all samplers.[#959](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/959)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecation[#](#id28)

The parameter

`n_jobs`

has been deprecated from the classes,`ADASYN`

,`BorderlineSMOTE`

,`SMOTE`

,`SMOTENC`

, and`SMOTEN`

. Instead, pass a nearest neighbors estimator where`SVMSMOTE`

`n_jobs`

is set.[#887](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/887)by[Guillaume Lemaitre](https://github.com/glemaitre).The parameter

`base_estimator`

is deprecated and will be removed in version 0.12. It is impacted the following classes:,`BalancedBaggingClassifier`

,`EasyEnsembleClassifier`

.`RUSBoostClassifier`

[#946](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/946)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancements[#](#id29)

Add support to accept compatible

`NearestNeighbors`

objects by only duck-typing. For instance, it allows to accept cuML instances.[#858](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/858)by[NV-jpt](https://github.com/NV-jpt)and[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.9.1[#](#version-0-9-1)

**May 16, 2022**

### Changelog[#](#id30)

This release provides fixes that make `imbalanced-learn`

works with the
latest release (`1.1.0`

) of `scikit-learn`

.

## Version 0.9.0[#](#version-0-9-0)

**January 11, 2022**

### Changelog[#](#id31)

This release is mainly providing fixes that make `imbalanced-learn`

works
with the latest release (`1.0.2`

) of `scikit-learn`

.

## Version 0.8.1[#](#version-0-8-1)

**September 29, 2020**

### Changelog[#](#id32)

#### Maintenance[#](#id33)

Make

`imbalanced-learn`

compatible with`scikit-learn`

1.0.[#864](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/864)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.8.0[#](#version-0-8-0)

**February 18, 2021**

### Changelog[#](#id34)

#### New features[#](#new-features)

Add the the function

returning the average across class of the MAE. This metric is used in ordinal classification.`imblearn.metrics.macro_averaged_mean_absolute_error`

[#780](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/780)by[Aurélien Massiot](https://github.com/AurelienMassiot).Add the class

to compute pairwise distances between samples containing only categorical values.`imblearn.metrics.pairwise.ValueDifferenceMetric`

[#796](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/796)by[Guillaume Lemaitre](https://github.com/glemaitre).Add the class

to over-sample data only containing categorical features.`imblearn.over_sampling.SMOTEN`

[#802](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/802)by[Guillaume Lemaitre](https://github.com/glemaitre).Add the possibility to pass any type of samplers in

unlocking the implementation of methods based on resampled bagging.`imblearn.ensemble.BalancedBaggingClassifier`

[#808](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/808)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancements[#](#id35)

Add option

`output_dict`

into return a dictionary instead of a string.`imblearn.metrics.classification_report_imbalanced`

[#770](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/770)by[Guillaume Lemaitre](https://github.com/glemaitre).Added an option to generate smoothed bootstrap in

. It is controls by the parameter`imblearn.over_sampling.RandomOverSampler`

`shrinkage`

. This method is also known as Random Over-Sampling Examples (ROSE).[#754](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/754)by[Andrea Lorenzon](https://github.com/andrealorenzon)and[Guillaume Lemaitre](https://github.com/glemaitre).

#### Bug fixes[#](#id36)

Fix a bug in

where`imblearn.under_sampling.ClusterCentroids`

`voting="hard"`

could have lead to select a sample from any class instead of the targeted class.[#769](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/769)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug in

where validation was performed even with`imblearn.FunctionSampler`

`validate=False`

when calling`fit`

.[#790](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/790)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Maintenance[#](#id37)

Remove requirements files in favour of adding the packages in the

`extras_require`

within the`setup.py`

file.[#816](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/816)by[Guillaume Lemaitre](https://github.com/glemaitre).Change the website template to use

`pydata-sphinx-theme`

.[#801](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/801)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecation[#](#id38)

The context manager

`imblearn.utils.testing.warns`

is deprecated in 0.8 and will be removed 1.0.[#815](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/815)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.7.0[#](#version-0-7-0)

**June 9, 2020**

### Changelog[#](#id39)

#### Maintenance[#](#id40)

Ensure that

is working when`imblearn.pipeline.Pipeline`

`memory`

is activated and`joblib==0.11`

.[#687](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/687)by[Christos Aridas](https://github.com/chkoar).Refactor common test to use the dev tools from

`scikit-learn`

0.23.[#710](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/710)by[Guillaume Lemaitre](https://github.com/glemaitre).Remove

`FutureWarning`

issued by`scikit-learn`

0.23.[#710](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/710)by[Guillaume Lemaitre](https://github.com/glemaitre).Impose keywords only argument as in

`scikit-learn`

.[#721](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/721)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Changed models[#](#changed-models)

The following models might give some different results due to changes:

#### Bug fixes[#](#id41)

Change the default value

`min_samples_leaf`

to be consistent with scikit-learn.[#711](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/711)by[zerolfx](https://github.com/zerolfx).Fix a bug due to change in

`scikit-learn`

0.23 in. The function was unusable.`imblearn.metrics.make_index_balanced_accuracy`

[#710](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/710)by[Guillaume Lemaitre](https://github.com/glemaitre).Raise a proper error message when only numerical or categorical features are given in

.`imblearn.over_sampling.SMOTENC`

[#720](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/720)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix a bug when the median of the standard deviation is null in

.`imblearn.over_sampling.SMOTENC`

[#675](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/675)by[bganglia](https://github.com/bganglia).

#### Enhancements[#](#id42)

The classifier implemented in imbalanced-learn,

,`imblearn.ensemble.BalancedBaggingClassifier`

,`imblearn.ensemble.BalancedRandomForestClassifier`

, and`imblearn.ensemble.EasyEnsembleClassifier`

, accept`imblearn.ensemble.RUSBoostClassifier`

`sampling_strategy`

with the same key than in`y`

without the need of encoding`y`

in advance.[#718](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/718)by[Guillaume Lemaitre](https://github.com/glemaitre).Lazy import

`keras`

module when importing`imblearn.keras`

[#719](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/719)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecation[#](#id43)

Deprecation of the parameters

`n_jobs`

insince it was used by`imblearn.under_sampling.ClusterCentroids`

`sklearn.cluster.KMeans`

which deprecated it.[#710](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/710)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecation of passing keyword argument by position similarly to

`scikit-learn`

.[#721](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/721)by[Guillaume lemaitre](https://github.com/glemaitre).

## Version 0.6.2[#](#version-0-6-2)

**February 16, 2020**

This is a bug-fix release to resolve some issues regarding the handling the input and the output format of the arrays.

### Changelog[#](#id44)

Allow column vectors to be passed as targets.

[#673](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/673)by[Christos Aridas](https://github.com/chkoar).Better input/output handling for pandas, numpy and plain lists.

[#681](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/681)by[Christos Aridas](https://github.com/chkoar).

## Version 0.6.1[#](#version-0-6-1)

**December 7, 2019**

This is a bug-fix release to primarily resolve some packaging issues in version 0.6.0. It also includes minor documentation improvements and some bug fixes.

### Changelog[#](#id45)

#### Bug fixes[#](#id46)

Fix a bug in

leading to a wrong number of samples used during fitting due`imblearn.ensemble.BalancedRandomForestClassifier`

`max_samples`

and therefore a bad computation of the OOB score.[#656](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/656)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.6.0[#](#version-0-6-0)

**December 5, 2019**

### Changelog[#](#id47)

#### Changed models[#](#id48)

The following models might give some different sampling due to changes in scikit-learn:

The following samplers will give different results due to change linked to the random state internal usage:

#### Bug fixes[#](#id49)

now take into account the`imblearn.under_sampling.InstanceHardnessThreshold`

`random_state`

and will give deterministic results. In addition,`cross_val_predict`

is used to take advantage of the parallelism.[#599](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/599)by[Shihab Shahriar Khan](https://github.com/Shihab-Shahriar).Fix a bug in

leading to a wrong computation of the OOB score.`imblearn.ensemble.BalancedRandomForestClassifier`

[#656](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/656)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Maintenance[#](#id50)

Update imports from scikit-learn after that some modules have been privatize. The following import have been changed:

`sklearn.ensemble._base._set_random_states`

,`sklearn.ensemble._forest._parallel_build_trees`

,`sklearn.metrics._classification._check_targets`

,`sklearn.metrics._classification._prf_divide`

,`sklearn.utils.Bunch`

,`sklearn.utils._safe_indexing`

,`sklearn.utils._testing.assert_allclose`

,`sklearn.utils._testing.assert_array_equal`

,`sklearn.utils._testing.SkipTest`

.[#617](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/617)by[Guillaume Lemaitre](https://github.com/glemaitre).Synchronize

with`imblearn.pipeline`

`sklearn.pipeline`

.[#620](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/620)by[Guillaume Lemaitre](https://github.com/glemaitre).Synchronize

and add parameters`imblearn.ensemble.BalancedRandomForestClassifier`

`max_samples`

and`ccp_alpha`

.[#621](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/621)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancement[#](#enhancement)

`imblearn.under_sampling.RandomUnderSampling`

,`imblearn.over_sampling.RandomOverSampling`

,accepts Pandas DataFrame in and will output Pandas DataFrame. Similarly, it will accepts Pandas Series in and will output Pandas Series.`imblearn.datasets.make_imbalance`

[#636](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/636)by[Guillaume Lemaitre](https://github.com/glemaitre).accepts a parameter`imblearn.FunctionSampler`

`validate`

allowing to check or not the input`X`

and`y`

.[#637](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/637)by[Guillaume Lemaitre](https://github.com/glemaitre).,`imblearn.under_sampling.RandomUnderSampler`

can resample when non finite values are present in`imblearn.over_sampling.RandomOverSampler`

`X`

.[#643](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/643)by[Guillaume Lemaitre](https://github.com/glemaitre).All samplers will output a Pandas DataFrame if a Pandas DataFrame was given as an input.

[#644](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/644)by[Guillaume Lemaitre](https://github.com/glemaitre).The samples generation in

,`imblearn.over_sampling.ADASYN`

,`imblearn.over_sampling.SMOTE`

,`imblearn.over_sampling.BorderlineSMOTE`

,`imblearn.over_sampling.SVMSMOTE`

,`imblearn.over_sampling.KMeansSMOTE`

is now vectorize with giving an additional speed-up when`imblearn.over_sampling.SMOTENC`

`X`

in sparse.[#596](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/596)and[#649](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/649)by[Matt Eding](https://github.com/MattEding).

#### Deprecation[#](#id51)

The following classes have been removed after 2 deprecation cycles:

`ensemble.BalanceCascade`

and`ensemble.EasyEnsemble`

.[#617](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/617)by[Guillaume Lemaitre](https://github.com/glemaitre).The following functions have been removed after 2 deprecation cycles:

`utils.check_ratio`

.[#617](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/617)by[Guillaume Lemaitre](https://github.com/glemaitre).The parameter

`ratio`

and`return_indices`

has been removed from all samplers.[#617](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/617)by[Guillaume Lemaitre](https://github.com/glemaitre).The parameters

`m_neighbors`

,`out_step`

,`kind`

,`svm_estimator`

have been removed from the.`imblearn.over_sampling.SMOTE`

[#617](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/617)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.5.0[#](#version-0-5-0)

**June 28, 2019**

### Changelog[#](#id52)

#### Changed models[#](#id53)

The following models or function might give different results even if the
same data `X`

and `y`

are the same.

default estimator changed from`imblearn.ensemble.RUSBoostClassifier`

`sklearn.tree.DecisionTreeClassifier`

with full depth to a decision stump (i.e., tree with`max_depth=1`

).

#### Documentation[#](#documentation)

Correct the definition of the ratio when using a

`float`

in sampling strategy for the over-sampling and under-sampling.[#525](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/525)by[Ariel Rossanigo](https://github.com/arielrossanigo).Add

and`imblearn.over_sampling.BorderlineSMOTE`

in the API documenation.`imblearn.over_sampling.SVMSMOTE`

[#530](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/530)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancement[#](#id54)

Add Parallelisation for SMOTEENN and SMOTETomek.

[#547](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/547)by[Michael Hsieh](https://github.com/Microsheep).Add

`imblearn.utils._show_versions`

. Updated the contribution guide and issue template showing how to print system and dependency information from the command line.[#557](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/557)by[Alexander L. Hayes](https://github.com/batflyer).Add

which is an over-sampler clustering points before to apply SMOTE.`imblearn.over_sampling.KMeansSMOTE`

[#435](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/435)by[Stephan Heijl](https://github.com/StephanHeijl).

#### Maintenance[#](#id55)

Make it possible to

`import imblearn`

and access submodule.[#500](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/500)by[Guillaume Lemaitre](https://github.com/glemaitre).Remove support for Python 2, remove deprecation warning from scikit-learn 0.21.

[#576](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/576)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Bug[#](#bug)

Fix wrong usage of

`keras.layers.BatchNormalization`

in`porto_seguro_keras_under_sampling.py`

example. The batch normalization was moved before the activation function and the bias was removed from the dense layer.[#531](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/531)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix bug which converting to COO format sparse when stacking the matrices in

. This bug was only old scipy version.`imblearn.over_sampling.SMOTENC`

[#539](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/539)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix bug in

where None could be the final estimator.`imblearn.pipeline.Pipeline`

[#554](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/554)by[Oliver Rausch](https://github.com/orausch).Fix bug in

and`imblearn.over_sampling.SVMSMOTE`

where the default parameter of`imblearn.over_sampling.BorderlineSMOTE`

`n_neighbors`

was not set properly.[#578](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/578)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix bug by changing the default depth in

to get a decision stump as a weak learner as in the original paper.`imblearn.ensemble.RUSBoostClassifier`

[#545](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/545)by[Christos Aridas](https://github.com/chkoar).Allow to import

`keras`

directly from`tensorflow`

in the.`imblearn.keras`

[#531](https://github.com/scikit-learn-contrib/imbalanced-learn/pull/531)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.4.2[#](#version-0-4-2)

**October 21, 2018**

### Changelog[#](#id56)

#### Bug fixes[#](#id57)

Fix a bug in

in which the the median of the standard deviation instead of half of the median of the standard deviation. By`imblearn.over_sampling.SMOTENC`

[Guillaume Lemaitre](https://github.com/glemaitre)in[#491](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/491).Raise an error when passing target which is not supported, i.e. regression target or multilabel targets. Imbalanced-learn does not support this case. By

[Guillaume Lemaitre](https://github.com/glemaitre)in[#490](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/490).Fix a bug in

in which a sparse matrices were densify during`imblearn.over_sampling.SMOTENC`

`inverse_transform`

. By[Guillaume Lemaitre](https://github.com/glemaitre)in[#495](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/495).Fix a bug in

`imblearn.over_sampling.SMOTE_NC`

in which a the tie breaking was wrongly sampling. By[Guillaume Lemaitre](https://github.com/glemaitre)in[#497](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/497).

## Version 0.4[#](#version-0-4)

**October 12, 2018**

Warning

Version 0.4 is the last version of imbalanced-learn to support Python 2.7 and Python 3.4. Imbalanced-learn 0.5 will require Python 3.5 or higher.

### Highlights[#](#highlights)

This release brings its set of new feature as well as some API changes to strengthen the foundation of imbalanced-learn.

As new feature, 2 new modules [ imblearn.keras](references/keras.html#module-imblearn.keras) and

[have been added in which imbalanced-learn samplers can be used to generate balanced mini-batches.](references/tensorflow.html#module-imblearn.tensorflow)

`imblearn.tensorflow`

The module [ imblearn.ensemble](references/ensemble.html#module-imblearn.ensemble) has been consolidated with new classifier:

[,](references/generated/imblearn.ensemble.BalancedRandomForestClassifier.html#imblearn.ensemble.BalancedRandomForestClassifier)

`imblearn.ensemble.BalancedRandomForestClassifier`

[,](references/generated/imblearn.ensemble.EasyEnsembleClassifier.html#imblearn.ensemble.EasyEnsembleClassifier)

`imblearn.ensemble.EasyEnsembleClassifier`

[.](references/generated/imblearn.ensemble.RUSBoostClassifier.html#imblearn.ensemble.RUSBoostClassifier)

`imblearn.ensemble.RUSBoostClassifier`

Support for string has been added in
[ imblearn.over_sampling.RandomOverSampler](references/generated/imblearn.over_sampling.RandomOverSampler.html#imblearn.over_sampling.RandomOverSampler) and

[. In addition, a new class](references/generated/imblearn.under_sampling.RandomUnderSampler.html#imblearn.under_sampling.RandomUnderSampler)

`imblearn.under_sampling.RandomUnderSampler`

[allows to generate sample with data sets containing both continuous and categorical features.](references/generated/imblearn.over_sampling.SMOTENC.html#imblearn.over_sampling.SMOTENC)

`imblearn.over_sampling.SMOTENC`

The [ imblearn.over_sampling.SMOTE](references/generated/imblearn.over_sampling.SMOTE.html#imblearn.over_sampling.SMOTE) has been simplified and break down
to 2 additional classes:

[and](references/generated/imblearn.over_sampling.SVMSMOTE.html#imblearn.over_sampling.SVMSMOTE)

`imblearn.over_sampling.SVMSMOTE`

[.](references/generated/imblearn.over_sampling.BorderlineSMOTE.html#imblearn.over_sampling.BorderlineSMOTE)

`imblearn.over_sampling.BorderlineSMOTE`

There is also some changes regarding the API:
the parameter `sampling_strategy`

has been introduced to replace the
`ratio`

parameter. In addition, the `return_indices`

argument has been
deprecated and all samplers will exposed a `sample_indices_`

whenever this is
possible.

### Changelog[#](#id58)

#### API[#](#api)

Replace the parameter

`ratio`

by`sampling_strategy`

.[#411](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/411)by[Guillaume Lemaitre](https://github.com/glemaitre).Enable to use a

`float`

with binary classification for`sampling_strategy`

.[#411](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/411)by[Guillaume Lemaitre](https://github.com/glemaitre).Enable to use a

`list`

for the cleaning methods to specify the class to sample.[#411](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/411)by[Guillaume Lemaitre](https://github.com/glemaitre).Replace

`fit_sample`

by`fit_resample`

. An alias is still available for backward compatibility. In addition,`sample`

has been removed to avoid resampling on different set of data.[#462](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/462)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### New features[#](#id59)

Add a

`keras`

and`tensorflow`

modules to create balanced mini-batches generator.[#409](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/409)by[Guillaume Lemaitre](https://github.com/glemaitre).Add

which create a bag of AdaBoost classifier trained on balanced bootstrap samples.`imblearn.ensemble.EasyEnsembleClassifier`

[#455](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/455)by[Guillaume Lemaitre](https://github.com/glemaitre).Add

which balanced each bootstrap provided to each tree of the forest.`imblearn.ensemble.BalancedRandomForestClassifier`

[#459](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/459)by[Guillaume Lemaitre](https://github.com/glemaitre).Add

which applied a random under-sampling stage before each boosting iteration of AdaBoost.`imblearn.ensemble.RUSBoostClassifier`

[#469](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/469)by[Guillaume Lemaitre](https://github.com/glemaitre).Add

`imblern.over_sampling.SMOTENC`

which generate synthetic samples on data set with heterogeneous data type (continuous and categorical features).[#412](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/412)by[Denis Dudnik](https://github.com/ddudnik)and[Guillaume Lemaitre](https://github.com/glemaitre).

#### Enhancement[#](#id60)

Add a documentation node to create a balanced random forest from a balanced bagging classifier.

[#372](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/372)by[Guillaume Lemaitre](https://github.com/glemaitre).Document the metrics to evaluate models on imbalanced dataset.

[#367](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/367)by[Guillaume Lemaitre](https://github.com/glemaitre).Add support for one-vs-all encoded target to support keras.

[#409](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/409)by[Guillaume Lemaitre](https://github.com/glemaitre).Adding specific class for borderline and SVM SMOTE using

`BorderlineSMOTE`

and`SVMSMOTE`

.[#440](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/440)by[Guillaume Lemaitre](https://github.com/glemaitre).Allow

can return indices using the attributes`imblearn.over_sampling.RandomOverSampler`

`return_indices`

.[#439](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/439)by[Hugo Gascon](https://github.com/hgascon)and[Guillaume Lemaitre](https://github.com/glemaitre).Allow

and`imblearn.under_sampling.RandomUnderSampler`

to sample object array containing strings.`imblearn.over_sampling.RandomOverSampler`

[#451](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/451)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Bug fixes[#](#id61)

Fix bug in

for which`metrics.classification_report_imbalanced`

`y_pred`

and`y_true`

where inversed.[#394](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/394)by[@Ole Silvig <klizter>.](https://github.com/Ole Silvig <klizter>.)Fix bug in ADASYN to consider only samples from the current class when generating new samples.

[#354](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/354)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix bug which allow for sorted behavior of

`sampling_strategy`

dictionary and thus to obtain a deterministic results when using the same random state.[#447](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/447)by[Guillaume Lemaitre](https://github.com/glemaitre).Force to clone scikit-learn estimator passed as attributes to samplers.

[#446](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/446)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix bug which was not preserving the dtype of X and y when generating samples.

[#450](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/450)by[Guillaume Lemaitre](https://github.com/glemaitre).Add the option to pass a

`Memory`

object to`make_pipeline`

like inclass.`pipeline.Pipeline`

[#458](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/458)by[Christos Aridas](https://github.com/chkoar).

#### Maintenance[#](#id62)

Remove deprecated parameters in 0.2 -

[#331](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/331)by[Guillaume Lemaitre](https://github.com/glemaitre).Make some modules private.

[#452](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/452)by[Guillaume Lemaitre](https://github.com/glemaitre).Upgrade requirements to scikit-learn 0.20.

[#379](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/379)by[Guillaume Lemaitre](https://github.com/glemaitre).Catch deprecation warning in testing.

[#441](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/441)by[Guillaume Lemaitre](https://github.com/glemaitre).Refactor and impose

`pytest`

style tests.[#470](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/470)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Documentation[#](#id63)

Remove some docstring which are not necessary.

[#454](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/454)by[Guillaume Lemaitre](https://github.com/glemaitre).Fix the documentation of the

`sampling_strategy`

parameters when used as a float.[#480](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/480)by[Guillaume Lemaitre](https://github.com/glemaitre).

#### Deprecation[#](#id64)

Deprecate

`ratio`

in favor of`sampling_strategy`

.[#411](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/411)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate the use of a

`dict`

for cleaning methods. a`list`

should be used.[#411](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/411)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate

`random_state`

in,`imblearn.under_sampling.NearMiss`

`imblearn.under_sampling.EditedNearestNeighbors`

,`imblearn.under_sampling.RepeatedEditedNearestNeighbors`

,,`imblearn.under_sampling.AllKNN`

,`imblearn.under_sampling.NeighbourhoodCleaningRule`

,`imblearn.under_sampling.InstanceHardnessThreshold`

`imblearn.under_sampling.CondensedNearestNeighbours`

.Deprecate

`kind`

,`out_step`

,`svm_estimator`

,`m_neighbors`

in. User should use`imblearn.over_sampling.SMOTE`

and`imblearn.over_sampling.SVMSMOTE`

.`imblearn.over_sampling.BorderlineSMOTE`

[#440](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/440)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate

`imblearn.ensemble.EasyEnsemble`

in favor of meta-estimatorwhich follow the exact algorithm described in the literature.`imblearn.ensemble.EasyEnsembleClassifier`

[#455](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/455)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate

`imblearn.ensemble.BalanceCascade`

.[#472](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/472)by[Guillaume Lemaitre](https://github.com/glemaitre).Deprecate

`return_indices`

in all samplers. Instead, an attribute`sample_indices_`

is created whenever the sampler is selecting a subset of the original samples.[#474](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/474)by[@Guillaume Lemaitre <glemaitre](https://github.com/Guillaume Lemaitre <glemaitre).

## Version 0.3[#](#version-0-3)

**February 22, 2018**

### Changelog[#](#id65)

Pytest is used instead of nosetests.

[#321](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/321)by[Joan Massich](https://github.com/massich).

Added a User Guide and extended some examples.

[#295](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/295)by[Guillaume Lemaitre](https://github.com/glemaitre).

Fixed a bug in

`utils.check_ratio`

such that an error is raised when the number of samples required is negative.[#312](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/312)by[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

version 3. The indices returned were wrong.`under_sampling.NearMiss`

[#312](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/312)by[Guillaume Lemaitre](https://github.com/glemaitre).Fixed bug for

`ensemble.BalanceCascade`

andand`combine.SMOTEENN`

`SMOTETomek`

.[#295](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/295)by[Guillaume Lemaitre](https://github.com/glemaitre).Fixed bug for

`check_ratio`

to be able to pass arguments when`ratio`

is a callable.[#307](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/307)by[Guillaume Lemaitre](https://github.com/glemaitre).

Turn off steps in

using the`pipeline.Pipeline`

`None`

object. By[Christos Aridas](https://github.com/chkoar).Add a fetching function

in order to get some imbalanced datasets useful for benchmarking.`datasets.fetch_datasets`

[#249](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/249)by[Guillaume Lemaitre](https://github.com/glemaitre).

All samplers accepts sparse matrices with defaulting on CSR type.

[#316](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/316)by[Guillaume Lemaitre](https://github.com/glemaitre).take a ratio similarly to other samplers. It supports multiclass.`datasets.make_imbalance`

[#312](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/312)by[Guillaume Lemaitre](https://github.com/glemaitre).All the unit tests have been factorized and a

`utils.check_estimators`

has been derived from scikit-learn. By[Guillaume Lemaitre](https://github.com/glemaitre).Script for automatic build of conda packages and uploading.

[#242](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/242)by[Guillaume Lemaitre](https://github.com/glemaitre)Remove seaborn dependence and improve the examples.

[#264](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/264)by[Guillaume Lemaitre](https://github.com/glemaitre).adapt all classes to multi-class resampling.

[#290](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/290)by[Guillaume Lemaitre](https://github.com/glemaitre)

`__init__`

has been removed from the`base.SamplerMixin`

to create a real mixin class.[#242](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/242)by[Guillaume Lemaitre](https://github.com/glemaitre).creation of a module

`exceptions`

to handle consistant raising of errors.[#242](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/242)by[Guillaume Lemaitre](https://github.com/glemaitre).creation of a module

`utils.validation`

to make checking of recurrent patterns.[#242](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/242)by[Guillaume Lemaitre](https://github.com/glemaitre).move the under-sampling methods in

`prototype_selection`

and`prototype_generation`

submodule to make a clearer dinstinction.[#277](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/277)by[Guillaume Lemaitre](https://github.com/glemaitre).change

`ratio`

such that it can adapt to multiple class problems.[#290](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/290)by[Guillaume Lemaitre](https://github.com/glemaitre).

Deprecation of the use of

`min_c_`

in.`datasets.make_imbalance`

[#312](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/312)by[Guillaume Lemaitre](https://github.com/glemaitre)Deprecation of the use of float in

for the ratio parameter.`datasets.make_imbalance`

[#290](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/290)by[Guillaume Lemaitre](https://github.com/glemaitre).deprecate the use of float as ratio in favor of dictionary, string, or callable.

[#290](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/290)by[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.2[#](#version-0-2)

**January 1, 2017**

### Changelog[#](#id66)

Fixed a bug in

which was not picking the right samples during under sampling for the method 3. By`under_sampling.NearMiss`

[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

`ensemble.EasyEnsemble`

, correction of the`random_state`

generation. By[Guillaume Lemaitre](https://github.com/glemaitre)and[Christos Aridas](https://github.com/chkoar).Fixed a bug in

, add additional stopping criterion to avoid that the minority class become a majority class or that a class disappear. By`under_sampling.RepeatedEditedNearestNeighbours`

[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

, add stopping criteria to avoid that the minority class become a majority class or that a class disappear. By`under_sampling.AllKNN`

[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

`under_sampling.CondensedNeareastNeigbour`

, correction of the list of indices returned. By[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

`ensemble.BalanceCascade`

, solve the issue to obtain a single array if desired. By[Guillaume Lemaitre](https://github.com/glemaitre).Fixed a bug in

, solve to embed`pipeline.Pipeline`

`Pipeline`

in other`Pipeline`

.[#231](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/231)by[Christos Aridas](https://github.com/chkoar).Fixed a bug in

, solve the issue to put to sampler in the same`pipeline.Pipeline`

`Pipeline`

.[#188](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/188)by[Christos Aridas](https://github.com/chkoar).Fixed a bug in

`under_sampling.CondensedNeareastNeigbour`

, correction of the shape of`sel_x`

when only one sample is selected. By[Aliaksei Halachkin](https://github.com/honeyext).Fixed a bug in

, selecting neighbours instead of minority class misclassified samples.`under_sampling.NeighbourhoodCleaningRule`

[#230](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/230)by[Aleksandr Loskutov](https://github.com/loskutyan).Fixed a bug in

, correction of the creation of a new sample so that the new sample lies between the minority sample and the nearest neighbour.`over_sampling.ADASYN`

[#235](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/235)by[Rafael Wampfler](https://github.com/Eichnof).

Added AllKNN under sampling technique. By

[Dayvid Oliveira](https://github.com/dvro).Added a module

`metrics`

implementing some specific scoring function for the problem of balancing.[#204](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/204)by[Guillaume Lemaitre](https://github.com/glemaitre)and[Christos Aridas](https://github.com/chkoar).

Added support for bumpversion. By

[Guillaume Lemaitre](https://github.com/glemaitre).Validate the type of target in binary samplers. A warning is raised for the moment. By

[Guillaume Lemaitre](https://github.com/glemaitre)and[Christos Aridas](https://github.com/chkoar).Change from

`cross_validation`

module to`model_selection`

module for`sklearn`

deprecation cycle. By[Dayvid Oliveira](https://github.com/dvro)and[Christos Aridas](https://github.com/chkoar).

`size_ngh`

has been deprecated in. Use`combine.SMOTEENN`

`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in`under_sampling.EditedNearestNeighbors`

. Use`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in`under_sampling.CondensedNeareastNeigbour`

. Use`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in. Use`under_sampling.OneSidedSelection`

`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in. Use`under_sampling.NeighbourhoodCleaningRule`

`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in. Use`under_sampling.RepeatedEditedNearestNeighbours`

`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).`size_ngh`

has been deprecated in. Use`under_sampling.AllKNN`

`n_neighbors`

instead. By[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).Two base classes

`BaseBinaryclassSampler`

and`BaseMulticlassSampler`

have been created to handle the target type and raise warning in case of abnormality. By[Guillaume Lemaitre](https://github.com/glemaitre)and[Christos Aridas](https://github.com/chkoar).Move

`random_state`

to be assigned in the`SamplerMixin`

initialization. By[Guillaume Lemaitre](https://github.com/glemaitre).Provide estimators instead of parameters in

and`combine.SMOTEENN`

. Therefore, the list of parameters have been deprecated. By`combine.SMOTETomek`

[Guillaume Lemaitre](https://github.com/glemaitre)and[Christos Aridas](https://github.com/chkoar).`k`

has been deprecated in. Use`over_sampling.ADASYN`

`n_neighbors`

instead.[#183](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/183)by[Guillaume Lemaitre](https://github.com/glemaitre).`k`

and`m`

have been deprecated in. Use`over_sampling.SMOTE`

`k_neighbors`

and`m_neighbors`

instead.[#182](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/182)by[Guillaume Lemaitre](https://github.com/glemaitre).`n_neighbors`

accept`KNeighborsMixin`

based object for`under_sampling.EditedNearestNeighbors`

,`under_sampling.CondensedNeareastNeigbour`

,,`under_sampling.NeighbourhoodCleaningRule`

, and`under_sampling.RepeatedEditedNearestNeighbours`

.`under_sampling.AllKNN`

[#109](https://github.com/scikit-learn-contrib/imbalanced-learn/issues/109)by[Guillaume Lemaitre](https://github.com/glemaitre).

Replace some remaining

`UnbalancedDataset`

occurences. By[Francois Magimel](https://github.com/Linkid).Added doctest in the documentation. By

[Guillaume Lemaitre](https://github.com/glemaitre).

## Version 0.1[#](#version-0-1)

**December 26, 2016**

### Changelog[#](#id67)

First release of the stable API. By :user;`Fernando Nogueira <fmfn>`,

[Guillaume Lemaitre](https://github.com/glemaitre),[Christos Aridas](https://github.com/chkoar), and[Dayvid Oliveira](https://github.com/dvro).

- Under-sampling
Random majority under-sampling with replacement

Extraction of majority-minority Tomek links

Under-sampling with Cluster Centroids

NearMiss-(1 & 2 & 3)

Condensend Nearest Neighbour

One-Sided Selection

Neighboorhood Cleaning Rule

Edited Nearest Neighbours

Instance Hardness Threshold

Repeated Edited Nearest Neighbours



- Over-sampling
Random minority over-sampling with replacement

SMOTE - Synthetic Minority Over-sampling Technique

bSMOTE(1 & 2) - Borderline SMOTE of types 1 and 2

SVM SMOTE - Support Vectors SMOTE

ADASYN - Adaptive synthetic sampling approach for imbalanced learning



- Over-sampling followed by under-sampling
SMOTE + Tomek links

SMOTE + ENN



- Ensemble sampling
EasyEnsemble

BalanceCascade

---

## Source: https://imbalanced-learn.org/stable/about.html

# About us[#](#about-us)

## History[#](#history)

### Development lead[#](#development-lead)

The project started in August 2014 by Fernando Nogueira and focused on SMOTE implementation.
Together with Guillaume Lemaitre, Dayvid Victor, and Christos Aridas, additional under-sampling and over-sampling methods have been implemented as well as major changes in the API to be fully compatible with [scikit-learn](http://scikit-learn.org).

## Contributors[#](#contributors)

Refers to GitHub contributors [page](https://github.com/scikit-learn-contrib/imbalanced-learn/graphs/contributors).

## Citing imbalanced-learn[#](#citing-imbalanced-learn)

If you use imbalanced-learn in a scientific publication, we would appreciate citations to the following paper:

```
@article{JMLR:v18:16-365,
author = {Guillaume Lema{{\^i}}tre and Fernando Nogueira and Christos K. Aridas},
title = {Imbalanced-learn: A Python Toolbox to Tackle the Curse of Imbalanced Datasets in Machine Learning},
journal = {Journal of Machine Learning Research},
year = {2017},
volume = {18},
number = {17},
pages = {1-5},
url = {http://jmlr.org/papers/v18/16-365.html}
}
```