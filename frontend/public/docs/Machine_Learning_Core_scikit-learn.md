# Scikit-learn Documentation
> Scraped on: 2026-03-30 | Root Source: [https://scikit-learn.org/stable/user_guide.html](https://scikit-learn.org/stable/user_guide.html)



---

## Source: https://scikit-learn.org/stable/user_guide.html

# User Guide[#](#user-guide)

[1. Supervised learning](supervised_learning.html)[1.1. Linear Models](modules/linear_model.html)[1.1.1. Ordinary Least Squares](modules/linear_model.html#ordinary-least-squares)[1.1.2. Ridge regression and classification](modules/linear_model.html#ridge-regression-and-classification)[1.1.3. Lasso](modules/linear_model.html#lasso)[1.1.4. Multi-task Lasso](modules/linear_model.html#multi-task-lasso)[1.1.5. Elastic-Net](modules/linear_model.html#elastic-net)[1.1.6. Multi-task Elastic-Net](modules/linear_model.html#multi-task-elastic-net)[1.1.7. Least Angle Regression](modules/linear_model.html#least-angle-regression)[1.1.8. LARS Lasso](modules/linear_model.html#lars-lasso)[1.1.9. Orthogonal Matching Pursuit (OMP)](modules/linear_model.html#orthogonal-matching-pursuit-omp)[1.1.10. Bayesian Regression](modules/linear_model.html#bayesian-regression)[1.1.11. Logistic regression](modules/linear_model.html#logistic-regression)[1.1.12. Generalized Linear Models](modules/linear_model.html#generalized-linear-models)[1.1.13. Stochastic Gradient Descent - SGD](modules/linear_model.html#stochastic-gradient-descent-sgd)[1.1.14. Robustness regression: outliers and modeling errors](modules/linear_model.html#robustness-regression-outliers-and-modeling-errors)[1.1.15. Quantile Regression](modules/linear_model.html#quantile-regression)[1.1.16. Polynomial regression: extending linear models with basis functions](modules/linear_model.html#polynomial-regression-extending-linear-models-with-basis-functions)

[1.2. Linear and Quadratic Discriminant Analysis](modules/lda_qda.html)[1.3. Kernel ridge regression](modules/kernel_ridge.html)[1.4. Support Vector Machines](modules/svm.html)[1.5. Stochastic Gradient Descent](modules/sgd.html)[1.6. Nearest Neighbors](modules/neighbors.html)[1.7. Gaussian Processes](modules/gaussian_process.html)[1.8. Cross decomposition](modules/cross_decomposition.html)[1.9. Naive Bayes](modules/naive_bayes.html)[1.10. Decision Trees](modules/tree.html)[1.11. Ensembles: Gradient boosting, random forests, bagging, voting, stacking](modules/ensemble.html)[1.12. Multiclass and multioutput algorithms](modules/multiclass.html)[1.13. Feature selection](modules/feature_selection.html)[1.14. Semi-supervised learning](modules/semi_supervised.html)[1.15. Isotonic regression](modules/isotonic.html)[1.16. Probability calibration](modules/calibration.html)[1.17. Neural network models (supervised)](modules/neural_networks_supervised.html)

[2. Unsupervised learning](unsupervised_learning.html)[2.1. Gaussian mixture models](modules/mixture.html)[2.2. Manifold learning](modules/manifold.html)[2.2.1. Introduction](modules/manifold.html#introduction)[2.2.2. Isomap](modules/manifold.html#isomap)[2.2.3. Locally Linear Embedding](modules/manifold.html#locally-linear-embedding)[2.2.4. Modified Locally Linear Embedding](modules/manifold.html#modified-locally-linear-embedding)[2.2.5. Hessian Eigenmapping](modules/manifold.html#hessian-eigenmapping)[2.2.6. Spectral Embedding](modules/manifold.html#spectral-embedding)[2.2.7. Local Tangent Space Alignment](modules/manifold.html#local-tangent-space-alignment)[2.2.8. Multi-dimensional Scaling (MDS)](modules/manifold.html#multi-dimensional-scaling-mds)[2.2.9. t-distributed Stochastic Neighbor Embedding (t-SNE)](modules/manifold.html#t-distributed-stochastic-neighbor-embedding-t-sne)[2.2.10. Tips on practical use](modules/manifold.html#tips-on-practical-use)

[2.3. Clustering](modules/clustering.html)[2.4. Biclustering](modules/biclustering.html)[2.5. Decomposing signals in components (matrix factorization problems)](modules/decomposition.html)[2.5.1. Principal component analysis (PCA)](modules/decomposition.html#principal-component-analysis-pca)[2.5.2. Kernel Principal Component Analysis (kPCA)](modules/decomposition.html#kernel-principal-component-analysis-kpca)[2.5.3. Truncated singular value decomposition and latent semantic analysis](modules/decomposition.html#truncated-singular-value-decomposition-and-latent-semantic-analysis)[2.5.4. Dictionary Learning](modules/decomposition.html#dictionary-learning)[2.5.5. Factor Analysis](modules/decomposition.html#factor-analysis)[2.5.6. Independent component analysis (ICA)](modules/decomposition.html#independent-component-analysis-ica)[2.5.7. Non-negative matrix factorization (NMF or NNMF)](modules/decomposition.html#non-negative-matrix-factorization-nmf-or-nnmf)[2.5.8. Latent Dirichlet Allocation (LDA)](modules/decomposition.html#latent-dirichlet-allocation-lda)

[2.6. Covariance estimation](modules/covariance.html)[2.7. Novelty and Outlier Detection](modules/outlier_detection.html)[2.8. Density Estimation](modules/density.html)[2.9. Neural network models (unsupervised)](modules/neural_networks_unsupervised.html)

[3. Model selection and evaluation](model_selection.html)[4. Metadata Routing](metadata_routing.html)[5. Inspection](inspection.html)[6. Visualizations](visualizations.html)[7. Dataset transformations](data_transforms.html)[7.1. Pipelines and composite estimators](modules/compose.html)[7.2. Feature extraction](modules/feature_extraction.html)[7.3. Preprocessing data](modules/preprocessing.html)[7.4. Imputation of missing values](modules/impute.html)[7.5. Unsupervised dimensionality reduction](modules/unsupervised_reduction.html)[7.6. Random Projection](modules/random_projection.html)[7.7. Kernel Approximation](modules/kernel_approximation.html)[7.8. Pairwise metrics, Affinities and Kernels](modules/metrics.html)[7.9. Transforming the prediction target (](modules/preprocessing_targets.html)`y`

)

[8. Dataset loading utilities](datasets.html)[9. Computing with scikit-learn](computing.html)[10. Model persistence](model_persistence.html)[11. Common pitfalls and recommended practices](common_pitfalls.html)[12. Dispatching](dispatching.html)[13. Choosing the right estimator](machine_learning_map.html)[14. External Resources, Videos and Talks](presentations.html)

---

## Source: https://scikit-learn.org/stable/index.html

####
[Classification](supervised_learning.html)

Identifying which category an object belongs to.

**Applications:** Spam detection, image recognition.
**Algorithms:**
[Gradient boosting](modules/ensemble.html#histogram-based-gradient-boosting),
[nearest neighbors](modules/neighbors.html#classification),
[random forest](modules/ensemble.html#forest),
[logistic regression](modules/linear_model.html#logistic-regression),
and [more...](supervised_learning.html)

[Examples](auto_examples/classification/index.html)

####
[Regression](supervised_learning.html)

Predicting a continuous-valued attribute associated with an object.

**Applications:** Drug response, stock prices.
**Algorithms:**
[Gradient boosting](modules/ensemble.html#histogram-based-gradient-boosting),
[nearest neighbors](modules/neighbors.html#regression),
[random forest](modules/ensemble.html#forest),
[ridge](modules/linear_model.html#ridge-regression-and-classification),
and [more...](supervised_learning.html)

[Examples](auto_examples/index.html)

####
[Clustering](modules/clustering.html)

Automatic grouping of similar objects into sets.

**Applications:** Customer segmentation, grouping experiment outcomes.
**Algorithms:**
[k-Means](modules/clustering.html#k-means),
[HDBSCAN](modules/clustering.html#hdbscan),
[hierarchical clustering](modules/clustering.html#hierarchical-clustering),
and [more...](modules/clustering.html)

[Examples](auto_examples/cluster/index.html)

####
[Dimensionality reduction](modules/decomposition.html)

Reducing the number of random variables to consider.

**Applications:** Visualization, increased efficiency.
**Algorithms:**
[PCA](modules/decomposition.html#pca),
[feature selection](modules/feature_selection.html#feature-selection),
[non-negative matrix factorization](modules/decomposition.html#nmf),
and [more...](modules/decomposition.html)

[Examples](auto_examples/decomposition/index.html)

####
[Model selection](model_selection.html)

Comparing, validating and choosing parameters and models.

**Applications:** Improved accuracy via parameter tuning.
**Algorithms:**
[Grid search](modules/grid_search.html),
[cross validation](modules/cross_validation.html),
[metrics](modules/model_evaluation.html),
and [more...](model_selection.html)

[Examples](auto_examples/model_selection/index.html)

####
[Preprocessing](modules/preprocessing.html)

Feature extraction and normalization.

**Applications:** Transforming input data such as text for use with machine learning algorithms.
**Algorithms:**
[Preprocessing](modules/preprocessing.html),
[feature extraction](modules/feature_extraction.html),
and [more...](modules/preprocessing.html)

[Examples](auto_examples/preprocessing/index.html)

---

## Source: https://scikit-learn.org/stable/install.html

# Installing scikit-learn[#](#installing-scikit-learn)

There are different ways to install scikit-learn:

[Install the latest official release](#install-official-release). This is the best approach for most users. It will provide a stable version and pre-built packages are available for most platforms.Install the version of scikit-learn provided by your

[operating system or Python distribution](#install-by-distribution). This is a quick option for those who have operating systems or Python distributions that distribute scikit-learn. It might not provide the latest release version.[Install a nightly build](#install-nightly-builds). This is the quickest way to try a new feature that will be shipped in the next release (that is, a feature from a pull-request that was recently merged to the main branch); or to check whether a bug you encountered has been fixed since the last release.[Building the package from source](developers/development_setup.html#setup-development-environment). This is mainly needed by users who wish to contribute to the project, as this allows to install an editable version of the project.

## Installing the latest release[#](#installing-the-latest-release)

Install the 64-bit version of Python 3, for instance from the
[official website](https://www.python.org/downloads/windows/).

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-learn.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python -m venv sklearn-env
sklearn-env\Scripts\activate # activate
pip install -U scikit-learn
```

In order to check your installation, you can use:

```
python -m pip show scikit-learn # show scikit-learn version and location
python -m pip freeze # show all installed packages in the environment
python -c "import sklearn; sklearn.show_versions()"
```

Install conda using the
[conda-forge installers](https://conda-forge.org/download/) (no
administrator permission required). Then run:

```
conda create -n sklearn-env -c conda-forge scikit-learn
conda activate sklearn-env
```

In order to check your installation, you can use:

```
conda list scikit-learn # show scikit-learn version and location
conda list # show all installed packages in the environment
python -c "import sklearn; sklearn.show_versions()"
```

Install Python 3 using [homebrew](https://brew.sh/) (`brew install python`

)
or by manually installing the package from the [official website](https://www.python.org/downloads/macos/).

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-learn.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python -m venv sklearn-env
source sklearn-env/bin/activate # activate
pip install -U scikit-learn
```

In order to check your installation, you can use:

```
python -m pip show scikit-learn # show scikit-learn version and location
python -m pip freeze # show all installed packages in the environment
python -c "import sklearn; sklearn.show_versions()"
```

Install conda using the
[conda-forge installers](https://conda-forge.org/download/) (no
administrator permission required). Then run:

```
conda create -n sklearn-env -c conda-forge scikit-learn
conda activate sklearn-env
```

In order to check your installation, you can use:

```
conda list scikit-learn # show scikit-learn version and location
conda list # show all installed packages in the environment
python -c "import sklearn; sklearn.show_versions()"
```

Python 3 is usually installed by default on most Linux distributions. To check if you have it installed, try:

```
python3 --version
pip3 --version
```

If you don’t have Python 3 installed, please install `python3`

and
`python3-pip`

from your distribution’s package manager.

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-learn.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python3 -m venv sklearn-env
source sklearn-env/bin/activate # activate
pip3 install -U scikit-learn
```

In order to check your installation, you can use:

```
python3 -m pip show scikit-learn # show scikit-learn version and location
python3 -m pip freeze # show all installed packages in the environment
python3 -c "import sklearn; sklearn.show_versions()"
```

Install conda using the
[conda-forge installers](https://conda-forge.org/download/) (no
administrator permission required). Then run:

```
conda create -n sklearn-env -c conda-forge scikit-learn
conda activate sklearn-env
```

In order to check your installation, you can use:

```
conda list scikit-learn # show scikit-learn version and location
conda list # show all installed packages in the environment
python -c "import sklearn; sklearn.show_versions()"
```

Using an isolated environment such as pip venv or conda makes it possible to install a specific version of scikit-learn with pip or conda and its dependencies independently of any previously installed Python packages. In particular under Linux it is discouraged to install pip packages alongside the packages managed by the package manager of the distribution (apt, dnf, pacman…).

Note that you should always remember to activate the environment of your choice prior to running any Python command whenever you start a new terminal session.

If you have not installed NumPy or SciPy yet, you can also install these using
conda or pip. When using pip, please ensure that *binary wheels* are used,
and NumPy and SciPy are not recompiled from source, which can happen when using
particular configurations of operating system and hardware (such as Linux on
a Raspberry Pi).

Scikit-learn plotting capabilities (i.e., functions starting with `plot_`

and classes ending with `Display`

) require Matplotlib. The examples require
Matplotlib and some examples require scikit-image, pandas, or seaborn. The
minimum version of scikit-learn dependencies are listed below along with its
purpose.

Dependency |
Minimum Version |
Purpose |
|---|---|---|
numpy |
1.24.1 |
build, install |
scipy |
1.10.0 |
build, install |
joblib |
1.3.0 |
install |
threadpoolctl |
3.2.0 |
install |
cython |
3.1.2 |
build |
meson-python |
0.17.1 |
build |
matplotlib |
3.6.1 |
benchmark, docs, examples, tests |
scikit-image |
0.22.0 |
docs, examples |
pandas |
1.5.0 |
benchmark, docs, examples, tests |
seaborn |
0.13.0 |
docs, examples |
memory_profiler |
0.57.0 |
benchmark, docs |
pytest |
7.1.2 |
tests |
pytest-cov |
2.9.0 |
tests |
ruff |
0.11.7 |
tests |
mypy |
1.15 |
tests |
pyamg |
5.0.0 |
tests |
polars |
0.20.30 |
docs, tests |
pyarrow |
12.0.0 |
tests |
sphinx |
7.3.7 |
docs |
sphinx-copybutton |
0.5.2 |
docs |
sphinx-gallery |
0.17.1 |
docs |
numpydoc |
1.2.0 |
docs, tests |
Pillow |
10.1.0 |
docs |
pooch |
1.8.0 |
docs, examples, tests |
sphinx-prompt |
1.4.0 |
docs |
sphinxext-opengraph |
0.9.1 |
docs |
plotly |
5.18.0 |
docs, examples |
sphinxcontrib-sass |
0.3.4 |
docs |
sphinx-remove-toctrees |
1.0.0.post1 |
docs |
sphinx-design |
0.6.0 |
docs |
pydata-sphinx-theme |
0.15.3 |
docs |
towncrier |
24.8.0 |
docs |
conda-lock |
3.0.1 |
maintenance |

Warning

Scikit-learn 0.20 was the last version to support Python 2.7 and Python 3.4.

Scikit-learn 0.21 supported Python 3.5—3.7.

Scikit-learn 0.22 supported Python 3.5—3.8.

Scikit-learn 0.23 required Python 3.6—3.8.

Scikit-learn 0.24 required Python 3.6—3.9.

Scikit-learn 1.0 supported Python 3.7—3.10.

Scikit-learn 1.1, 1.2 and 1.3 supported Python 3.8—3.12.

Scikit-learn 1.4 and 1.5 supported Python 3.9—3.12.

Scikit-learn 1.6 supported Python 3.9—3.13.

Scikit-learn 1.7 requires Python 3.10 or newer.

## Third party distributions of scikit-learn[#](#third-party-distributions-of-scikit-learn)

Some third-party distributions provide versions of scikit-learn integrated with their package-management systems.

These can make installation and upgrading much easier for users since the integration includes the ability to automatically install dependencies (numpy, scipy) that scikit-learn requires.

The following is an incomplete list of OS and python distributions that provide their own version of scikit-learn.

### Alpine Linux[#](#alpine-linux)

Alpine Linux’s package is provided through the [official repositories](https://pkgs.alpinelinux.org/packages?name=py3-scikit-learn) as
`py3-scikit-learn`

for Python.
It can be installed by typing the following command:

```
sudo apk add py3-scikit-learn
```

### Arch Linux[#](#arch-linux)

Arch Linux’s package is provided through the [official repositories](https://www.archlinux.org/packages/?q=scikit-learn) as
`python-scikit-learn`

for Python.
It can be installed by typing the following command:

```
sudo pacman -S python-scikit-learn
```

### Debian/Ubuntu[#](#debian-ubuntu)

The Debian/Ubuntu package is split in three different packages called
`python3-sklearn`

(python modules), `python3-sklearn-lib`

(low-level
implementations and bindings), `python-sklearn-doc`

(documentation).
Note that scikit-learn requires Python 3, hence the need to use the `python3-`

suffixed package names.
Packages can be installed using `apt-get`

:

```
sudo apt-get install python3-sklearn python3-sklearn-lib python-sklearn-doc
```

### Fedora[#](#fedora)

The Fedora package is called `python3-scikit-learn`

for the python 3 version,
the only one available in Fedora.
It can be installed using `dnf`

:

```
sudo dnf install python3-scikit-learn
```

### NetBSD[#](#netbsd)

scikit-learn is available via [pkgsrc-wip](http://pkgsrc-wip.sourceforge.net/):
[https://pkgsrc.se/math/py-scikit-learn](https://pkgsrc.se/math/py-scikit-learn)

### MacPorts for Mac OSX[#](#macports-for-mac-osx)

The MacPorts package is named `py<XY>-scikit-learn`

,
where `XY`

denotes the Python version.
It can be installed by typing the following
command:

```
sudo port install py312-scikit-learn
```

### Anaconda and Enthought Deployment Manager for all supported platforms[#](#anaconda-and-enthought-deployment-manager-for-all-supported-platforms)

[Anaconda](https://www.anaconda.com/download) and
[Enthought Deployment Manager](https://assets.enthought.com/downloads/)
both ship with scikit-learn in addition to a large set of scientific
python library for Windows, Mac OSX and Linux.

Anaconda offers scikit-learn as part of its free distribution.

### Intel Extension for Scikit-learn[#](#intel-extension-for-scikit-learn)

Intel maintains an optimized x86_64 package, available in PyPI (via `pip`

),
and in the `main`

, `conda-forge`

and `intel`

conda channels:

```
conda install scikit-learn-intelex
```

This package has an Intel optimized version of many estimators. Whenever an alternative implementation doesn’t exist, scikit-learn implementation is used as a fallback. Those optimized solvers come from the oneDAL C++ library and are optimized for the x86_64 architecture, and are optimized for multi-core Intel CPUs.

Note that those solvers are not enabled by default, please refer to the
[scikit-learn-intelex](https://intel.github.io/scikit-learn-intelex/latest/what-is-patching.html)
documentation for more details on usage scenarios. Direct export example:

```
from sklearnex.neighbors import NearestNeighbors
```

Compatibility with the standard scikit-learn solvers is checked by running the
full scikit-learn test suite via automated continuous integration as reported
on [intel/scikit-learn-intelex](https://github.com/intel/scikit-learn-intelex). If you observe any issue
with `scikit-learn-intelex`

, please report the issue on their
[issue tracker](https://github.com/intel/scikit-learn-intelex/issues).

### WinPython for Windows[#](#winpython-for-windows)

The [WinPython](https://winpython.github.io/) project distributes
scikit-learn as an additional plugin.

## Troubleshooting[#](#troubleshooting)

If you encounter unexpected failures when installing scikit-learn, you may submit
an issue to the [issue tracker](https://github.com/scikit-learn/scikit-learn/issues).
Before that, please also make sure to check the following common issues.

### Error caused by file path length limit on Windows[#](#error-caused-by-file-path-length-limit-on-windows)

It can happen that pip fails to install packages when reaching the default path
size limit of Windows if Python is installed in a nested location such as the
`AppData`

folder structure under the user home directory, for instance:

```
C:\Users\username>C:\Users\username\AppData\Local\Microsoft\WindowsApps\python.exe -m pip install scikit-learn
Collecting scikit-learn
...
Installing collected packages: scikit-learn
ERROR: Could not install packages due to an OSError: [Errno 2] No such file or directory: 'C:\\Users\\username\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.7_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python37\\site-packages\\sklearn\\datasets\\tests\\data\\openml\\292\\api-v1-json-data-list-data_name-australian-limit-2-data_version-1-status-deactivated.json.gz'
```

In this case it is possible to lift that limit in the Windows registry by
using the `regedit`

tool:

Type “regedit” in the Windows start menu to launch

`regedit`

.Go to the

`Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem`

key.Edit the value of the

`LongPathsEnabled`

property of that key and set it to 1.Reinstall scikit-learn (ignoring the previous broken installation):

`pip install --exists-action=i scikit-learn`


## Installing nightly builds[#](#installing-nightly-builds)

The continuous integration servers of the scikit-learn project build, test and upload wheel packages for the most recent Python version on a nightly basis.

You can install the nightly build of scikit-learn using the `scientific-python-nightly-wheels`

index from the PyPI registry of `anaconda.org`

:

```
pip install --pre --extra-index https://pypi.anaconda.org/scientific-python-nightly-wheels/simple scikit-learn
```

Note that first uninstalling scikit-learn might be required to be able to install nightly builds of scikit-learn.

---

## Source: https://scikit-learn.org/stable/api/index.html

# API Reference[#](#api-reference)

This is the class and function reference of scikit-learn. Please refer to the
[full user guide](../user_guide.html#user-guide) for further details, as the raw specifications of
classes and functions may not be enough to give full guidelines on their use. For
reference on concepts repeated across the API, see [Glossary of Common Terms and API Elements](../glossary.html#glossary).

Object |
Description |
|---|---|
Context manager to temporarily change the global scikit-learn configuration. |
|
Retrieve the current scikit-learn configuration. |
|
Set global scikit-learn configuration. |
|
Print useful debugging information. |
|
Base class for all estimators in scikit-learn. |
|
Mixin class for all bicluster estimators in scikit-learn. |
|
Mixin class for transformers that generate their own names by prefixing. |
|
Mixin class for all classifiers in scikit-learn. |
|
Mixin class for all cluster estimators in scikit-learn. |
|
Mixin class for all density estimators in scikit-learn. |
|
Mixin class for all meta estimators in scikit-learn. |
|
Provides |
|
Mixin class for all outlier detection estimators in scikit-learn. |
|
Mixin class for all regression estimators in scikit-learn. |
|
Mixin class for all transformers in scikit-learn. |
|
Construct a new unfitted estimator with the same parameters. |
|
Return True if the given estimator is (probably) a classifier. |
|
Return True if the given estimator is (probably) a clusterer. |
|
Return True if the given estimator is (probably) a regressor. |
|
Return True if the given estimator is (probably) an outlier detector. |
|
Calibrate probabilities using isotonic, sigmoid, or temperature scaling. |
|
Compute true and predicted probabilities for a calibration curve. |
|
Calibration curve (also known as reliability diagram) visualization. |
|
Perform Affinity Propagation Clustering of data. |
|
Agglomerative Clustering. |
|
Implements the BIRCH clustering algorithm. |
|
Bisecting K-Means clustering. |
|
Perform DBSCAN clustering from vector array or distance matrix. |
|
Agglomerate features. |
|
Cluster data using hierarchical density-based clustering. |
|
K-Means clustering. |
|
Mean shift clustering using a flat kernel. |
|
Mini-Batch K-Means clustering. |
|
Estimate clustering structure from vector array. |
|
Spectral biclustering (Kluger, 2003) |
|
Apply clustering to a projection of the normalized Laplacian. |
|
Spectral Co-Clustering algorithm (Dhillon, 2001) |
|
Perform Affinity Propagation Clustering of data. |
|
Perform DBSCAN extraction for an arbitrary epsilon. |
|
Automatically extract clusters according to the Xi-steep method. |
|
Compute the OPTICS reachability graph. |
|
Perform DBSCAN clustering from vector array or distance matrix. |
|
Estimate the bandwidth to use with the mean-shift algorithm. |
|
Perform K-means clustering algorithm. |
|
Init n_clusters seeds according to k-means++. |
|
Perform mean shift clustering of data using a flat kernel. |
|
Apply clustering to a projection of the normalized Laplacian. |
|
Ward clustering based on a Feature matrix. |
|
Applies transformers to columns of an array or pandas DataFrame. |
|
Meta-estimator to regress on a transformed target. |
|
Create a callable to select columns to be used with |
|
Construct a ColumnTransformer from the given transformers. |
|
An object for detecting outliers in a Gaussian distributed dataset. |
|
Maximum likelihood covariance estimator. |
|
Sparse inverse covariance estimation with an l1-penalized estimator. |
|
Sparse inverse covariance w/ cross-validated choice of the l1 penalty. |
|
LedoitWolf Estimator. |
|
Minimum Covariance Determinant (MCD): robust estimator of covariance. |
|
Oracle Approximating Shrinkage Estimator. |
|
Covariance estimator with shrinkage. |
|
Compute the Maximum likelihood covariance estimator. |
|
L1-penalized covariance estimator. |
|
Estimate the shrunk Ledoit-Wolf covariance matrix. |
|
Estimate the shrunk Ledoit-Wolf covariance matrix. |
|
Estimate covariance with the Oracle Approximating Shrinkage. |
|
Calculate covariance matrices shrunk on the diagonal. |
|
Canonical Correlation Analysis, also known as “Mode B” PLS. |
|
Partial Least Squares transformer and regressor. |
|
PLS regression. |
|
Partial Least Square SVD. |
|
Delete all the content of the data home cache. |
|
Dump the dataset in svmlight / libsvm file format. |
|
Load the filenames and data from the 20 newsgroups dataset (classification). |
|
Load and vectorize the 20 newsgroups dataset (classification). |
|
Load the California housing dataset (regression). |
|
Load the covertype dataset (classification). |
|
Fetch a file from the web if not already present in the local folder. |
|
Load the kddcup99 dataset (classification). |
|
Load the Labeled Faces in the Wild (LFW) pairs dataset (classification). |
|
Load the Labeled Faces in the Wild (LFW) people dataset (classification). |
|
Load the Olivetti faces data-set from AT&T (classification). |
|
Fetch dataset from openml by name or dataset id. |
|
Load the RCV1 multilabel dataset (classification). |
|
Loader for species distribution dataset from Phillips et. al. (2006). |
|
Return the path of the scikit-learn data directory. |
|
Load and return the breast cancer Wisconsin dataset (classification). |
|
Load and return the diabetes dataset (regression). |
|
Load and return the digits dataset (classification). |
|
Load text files with categories as subfolder names. |
|
Load and return the iris dataset (classification). |
|
Load and return the physical exercise Linnerud dataset. |
|
Load the numpy array of a single sample image. |
|
Load sample images for image manipulation. |
|
Load datasets in the svmlight / libsvm format into sparse CSR matrix. |
|
Load dataset from multiple files in SVMlight format. |
|
Load and return the wine dataset (classification). |
|
Generate a constant block diagonal structure array for biclustering. |
|
Generate isotropic Gaussian blobs for clustering. |
|
Generate an array with block checkerboard structure for biclustering. |
|
Make a large circle containing a smaller circle in 2d. |
|
Generate a random n-class classification problem. |
|
Generate the “Friedman #1” regression problem. |
|
Generate the “Friedman #2” regression problem. |
|
Generate the “Friedman #3” regression problem. |
|
Generate isotropic Gaussian and label samples by quantile. |
|
Generate data for binary classification used in Hastie et al. 2009, Example 10.2. |
|
Generate a mostly low rank matrix with bell-shaped singular values. |
|
Make two interleaving half circles. |
|
Generate a random multilabel classification problem. |
|
Generate a random regression problem. |
|
Generate an S curve dataset. |
|
Generate a signal as a sparse combination of dictionary elements. |
|
Generate a sparse symmetric definite positive matrix. |
|
Generate a random regression problem with sparse uncorrelated design. |
|
Generate a random symmetric, positive-definite matrix. |
|
Generate a swiss roll dataset. |
|
Dictionary learning. |
|
Factor Analysis (FA). |
|
FastICA: a fast algorithm for Independent Component Analysis. |
|
Incremental principal components analysis (IPCA). |
|
Kernel Principal component analysis (KPCA). |
|
Latent Dirichlet Allocation with online variational Bayes algorithm. |
|
Mini-batch dictionary learning. |
|
Mini-Batch Non-Negative Matrix Factorization (NMF). |
|
Mini-batch Sparse Principal Components Analysis. |
|
Non-Negative Matrix Factorization (NMF). |
|
Principal component analysis (PCA). |
|
Sparse coding. |
|
Sparse Principal Components Analysis (SparsePCA). |
|
Dimensionality reduction using truncated SVD (aka LSA). |
|
Solve a dictionary learning matrix factorization problem. |
|
Solve a dictionary learning matrix factorization problem online. |
|
Perform Fast Independent Component Analysis. |
|
Compute Non-negative Matrix Factorization (NMF). |
|
Sparse coding. |
|
Linear Discriminant Analysis. |
|
Quadratic Discriminant Analysis. |
|
DummyClassifier makes predictions that ignore the input features. |
|
Regressor that makes predictions using simple rules. |
|
An AdaBoost classifier. |
|
An AdaBoost regressor. |
|
A Bagging classifier. |
|
A Bagging regressor. |
|
An extra-trees classifier. |
|
An extra-trees regressor. |
|
Gradient Boosting for classification. |
|
Gradient Boosting for regression. |
|
Histogram-based Gradient Boosting Classification Tree. |
|
Histogram-based Gradient Boosting Regression Tree. |
|
Isolation Forest Algorithm. |
|
A random forest classifier. |
|
A random forest regressor. |
|
An ensemble of totally random trees. |
|
Stack of estimators with a final classifier. |
|
Stack of estimators with a final regressor. |
|
Soft Voting/Majority Rule classifier for unfitted estimators. |
|
Prediction voting regressor for unfitted estimators. |
|
Custom warning to capture convergence problems |
|
Warning used to notify implicit data conversions happening in the code. |
|
Custom warning to notify potential issues with data dimensionality. |
|
Warning used to notify the user of inefficient computation. |
|
Warning class used if there is an error while fitting the estimator. |
|
Warning raised when an estimator is unpickled with an inconsistent version. |
|
Exception class to raise if estimator is used before fitting. |
|
Warning used when the metric is invalid |
|
Warning raised when an estimator check from the common tests fails. |
|
Enables Successive Halving search-estimators |
|
Enables IterativeImputer |
|
Transforms lists of feature-value mappings to vectors. |
|
Implements feature hashing, aka the hashing trick. |
|
Extracts patches from a collection of images. |
|
Reshape a 2D image into a collection of patches. |
|
Graph of the pixel-to-pixel connections. |
|
Graph of the pixel-to-pixel gradient connections. |
|
Reconstruct the image from all of its patches. |
|
Convert a collection of text documents to a matrix of token counts. |
|
Convert a collection of text documents to a matrix of token occurrences. |
|
Transform a count matrix to a normalized tf or tf-idf representation. |
|
Convert a collection of raw documents to a matrix of TF-IDF features. |
|
Univariate feature selector with configurable strategy. |
|
Feature ranking with recursive feature elimination. |
|
Recursive feature elimination with cross-validation to select features. |
|
Filter: Select the p-values for an estimated false discovery rate. |
|
Filter: Select the pvalues below alpha based on a FPR test. |
|
Meta-transformer for selecting features based on importance weights. |
|
Filter: Select the p-values corresponding to Family-wise error rate. |
|
Select features according to the k highest scores. |
|
Select features according to a percentile of the highest scores. |
|
Transformer mixin that performs feature selection given a support mask |
|
Transformer that performs Sequential Feature Selection. |
|
Feature selector that removes all low-variance features. |
|
Compute chi-squared stats between each non-negative feature and class. |
|
Compute the ANOVA F-value for the provided sample. |
|
Univariate linear regression tests returning F-statistic and p-values. |
|
Estimate mutual information for a discrete target variable. |
|
Estimate mutual information for a continuous target variable. |
|
Compute Pearson’s r for each features and the target. |
|
Estimator that wraps a fitted estimator to prevent re-fitting. |
|
Gaussian process classification (GPC) based on Laplace approximation. |
|
Gaussian process regression (GPR). |
|
Kernel which is composed of a set of other kernels. |
|
Constant kernel. |
|
Dot-Product kernel. |
|
Exp-Sine-Squared kernel (aka periodic kernel). |
|
The Exponentiation kernel takes one base kernel and a scalar parameter |
|
A kernel hyperparameter’s specification in form of a namedtuple. |
|
Base class for all kernels. |
|
Matern kernel. |
|
Wrapper for kernels in sklearn.metrics.pairwise. |
|
The |
|
Radial basis function kernel (aka squared-exponential kernel). |
|
Rational Quadratic kernel. |
|
The |
|
White kernel. |
|
Multivariate imputer that estimates each feature from all the others. |
|
Imputation for completing missing values using k-Nearest Neighbors. |
|
Binary indicators for missing values. |
|
Univariate imputer for completing missing values with simple strategies. |
|
Partial dependence of |
|
Permutation importance for feature evaluation |
|
Decisions boundary visualization. |
|
Partial Dependence Plot (PDP) and Individual Conditional Expectation (ICE). |
|
Isotonic regression model. |
|
Determine whether y is monotonically correlated with x. |
|
Solve the isotonic regression model. |
|
Approximate feature map for additive chi2 kernel. |
|
Approximate a kernel map using a subset of the training data. |
|
Polynomial kernel approximation via Tensor Sketch. |
|
Approximate a RBF kernel feature map using random Fourier features. |
|
Approximate feature map for “skewed chi-squared” kernel. |
|
Kernel ridge regression. |
|
Logistic Regression (aka logit, MaxEnt) classifier. |
|
Logistic Regression CV (aka logit, MaxEnt) classifier. |
|
Passive Aggressive Classifier. |
|
Linear perceptron classifier. |
|
Classifier using Ridge regression. |
|
Ridge classifier with built-in cross-validation. |
|
Linear classifiers (SVM, logistic regression, etc.) with SGD training. |
|
Solves linear One-Class SVM using Stochastic Gradient Descent. |
|
Ordinary least squares Linear Regression. |
|
Linear least squares with l2 regularization. |
|
Ridge regression with built-in cross-validation. |
|
Linear model fitted by minimizing a regularized empirical loss with SGD. |
|
Linear regression with combined L1 and L2 priors as regularizer. |
|
Elastic Net model with iterative fitting along a regularization path. |
|
Least Angle Regression model a.k.a. LAR. |
|
Cross-validated Least Angle Regression model. |
|
Linear Model trained with L1 prior as regularizer (aka the Lasso). |
|
Lasso linear model with iterative fitting along a regularization path. |
|
Lasso model fit with Least Angle Regression a.k.a. Lars. |
|
Cross-validated Lasso, using the LARS algorithm. |
|
Lasso model fit with Lars using BIC or AIC for model selection. |
|
Orthogonal Matching Pursuit model (OMP). |
|
Cross-validated Orthogonal Matching Pursuit model (OMP). |
|
Bayesian ARD regression. |
|
Bayesian ridge regression. |
|
Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer. |
|
Multi-task L1/L2 ElasticNet with built-in cross-validation. |
|
Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer. |
|
Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer. |
|
L2-regularized linear regression model that is robust to outliers. |
|
Linear regression model that predicts conditional quantiles. |
|
RANSAC (RANdom SAmple Consensus) algorithm. |
|
Theil-Sen Estimator: robust multivariate regression model. |
|
Generalized Linear Model with a Gamma distribution. |
|
Generalized Linear Model with a Poisson distribution. |
|
Generalized Linear Model with a Tweedie distribution. |
|
Passive Aggressive Regressor. |
|
Compute elastic net path with coordinate descent. |
|
Compute Least Angle Regression or Lasso path using the LARS algorithm. |
|
The lars_path in the sufficient stats mode. |
|
Compute Lasso path with coordinate descent. |
|
Orthogonal Matching Pursuit (OMP). |
|
Gram Orthogonal Matching Pursuit (OMP). |
|
Solve the ridge equation by the method of normal equations. |
|
Classical multidimensional scaling (MDS). |
|
Isomap Embedding. |
|
Locally Linear Embedding. |
|
Multidimensional scaling. |
|
Spectral embedding for non-linear dimensionality reduction. |
|
T-distributed Stochastic Neighbor Embedding. |
|
Perform a Locally Linear Embedding analysis on the data. |
|
Compute multidimensional scaling using the SMACOF algorithm. |
|
Project the sample on the first eigenvectors of the graph Laplacian. |
|
Indicate to what extent the local structure is retained. |
|
Determine scorer from user options. |
|
Get a scorer from string. |
|
Get the names of all available scorers. |
|
Make a scorer from a performance metric or loss function. |
|
Accuracy classification score. |
|
Compute Area Under the Curve (AUC) using the trapezoidal rule. |
|
Compute average precision (AP) from prediction scores. |
|
Compute the balanced accuracy. |
|
Compute the Brier score loss. |
|
Compute binary classification positive and negative likelihood ratios. |
|
Build a text report showing the main classification metrics. |
|
Compute Cohen’s kappa: a statistic that measures inter-annotator agreement. |
|
Compute confusion matrix to evaluate the accuracy of a classification. |
|
Calculate |
|
\(D^2\) score function, fraction of Brier score explained. |
|
\(D^2\) score function, fraction of log loss explained. |
|
Compute Discounted Cumulative Gain. |
|
Compute Detection Error Tradeoff (DET) for different probability thresholds. |
|
Compute the F1 score, also known as balanced F-score or F-measure. |
|
Compute the F-beta score. |
|
Compute the average Hamming loss. |
|
Average hinge loss (non-regularized). |
|
Jaccard similarity coefficient score. |
|
Log loss, aka logistic loss or cross-entropy loss. |
|
Compute the Matthews correlation coefficient (MCC). |
|
Compute a confusion matrix for each class or sample. |
|
Compute Normalized Discounted Cumulative Gain. |
|
Compute precision-recall pairs for different probability thresholds. |
|
Compute precision, recall, F-measure and support for each class. |
|
Compute the precision. |
|
Compute the recall. |
|
Compute Area Under the Receiver Operating Characteristic Curve (ROC AUC) from prediction scores. |
|
Compute Receiver operating characteristic (ROC). |
|
Top-k Accuracy classification score. |
|
Zero-one classification loss. |
|
\(D^2\) regression score function, fraction of absolute error explained. |
|
\(D^2\) regression score function, fraction of pinball loss explained. |
|
\(D^2\) regression score function, fraction of Tweedie deviance explained. |
|
Explained variance regression score function. |
|
The max_error metric calculates the maximum residual error. |
|
Mean absolute error regression loss. |
|
Mean absolute percentage error (MAPE) regression loss. |
|
Mean Gamma deviance regression loss. |
|
Pinball loss for quantile regression. |
|
Mean Poisson deviance regression loss. |
|
Mean squared error regression loss. |
|
Mean squared logarithmic error regression loss. |
|
Mean Tweedie deviance regression loss. |
|
Median absolute error regression loss. |
|
\(R^2\) (coefficient of determination) regression score function. |
|
Root mean squared error regression loss. |
|
Root mean squared logarithmic error regression loss. |
|
Coverage error measure. |
|
Compute ranking-based average precision. |
|
Compute Ranking loss measure. |
|
Adjusted Mutual Information between two clusterings. |
|
Rand index adjusted for chance. |
|
Compute the Calinski and Harabasz score. |
|
Build a contingency matrix describing the relationship between labels. |
|
Pair confusion matrix arising from two clusterings. |
|
Compute completeness metric of a cluster labeling given a ground truth. |
|
Compute the Davies-Bouldin score. |
|
Measure the similarity of two clusterings of a set of points. |
|
Compute the homogeneity and completeness and V-Measure scores at once. |
|
Homogeneity metric of a cluster labeling given a ground truth. |
|
Mutual Information between two clusterings. |
|
Normalized Mutual Information between two clusterings. |
|
Rand index. |
|
Compute the Silhouette Coefficient for each sample. |
|
Compute the mean Silhouette Coefficient of all samples. |
|
V-measure cluster labeling given a ground truth. |
|
The similarity of two sets of biclusters. |
|
Uniform interface for fast distance metric functions. |
|
Compute the additive chi-squared kernel between observations in X and Y. |
|
Compute the exponential chi-squared kernel between X and Y. |
|
Compute cosine distance between samples in X and Y. |
|
Compute cosine similarity between samples in X and Y. |
|
Valid metrics for pairwise_distances. |
|
Compute the distance matrix between each pair from a feature array X and Y. |
|
Compute the Haversine distance between samples in X and Y. |
|
Valid metrics for pairwise_kernels. |
|
Compute the laplacian kernel between X and Y. |
|
Compute the linear kernel between X and Y. |
|
Compute the L1 distances between the vectors in X and Y. |
|
Calculate the euclidean distances in the presence of missing values. |
|
Compute the paired cosine distances between X and Y. |
|
Compute the paired distances between X and Y. |
|
Compute the paired euclidean distances between X and Y. |
|
Compute the paired L1 distances between X and Y. |
|
Compute the kernel between arrays X and optional array Y. |
|
Compute the polynomial kernel between X and Y. |
|
Compute the rbf (gaussian) kernel between X and Y. |
|
Compute the sigmoid kernel between X and Y. |
|
Compute the distance matrix from a feature array X and optional Y. |
|
Compute minimum distances between one point and a set of points. |
|
Compute minimum distances between one point and a set of points. |
|
Generate a distance matrix chunk by chunk with optional reduction. |
|
Confusion Matrix visualization. |
|
Detection Error Tradeoff (DET) curve visualization. |
|
Precision Recall visualization. |
|
Visualization of the prediction error of a regression model. |
|
ROC Curve visualization. |
|
Variational Bayesian estimation of a Gaussian mixture. |
|
Gaussian Mixture. |
|
K-fold iterator variant with non-overlapping groups. |
|
Shuffle-Group(s)-Out cross-validation iterator. |
|
K-Fold cross-validator. |
|
Leave One Group Out cross-validator. |
|
Leave-One-Out cross-validator. |
|
Leave P Group(s) Out cross-validator. |
|
Leave-P-Out cross-validator. |
|
Predefined split cross-validator. |
|
Repeated K-Fold cross validator. |
|
Repeated class-wise stratified K-Fold cross validator. |
|
Random permutation cross-validator. |
|
Class-wise stratified K-Fold iterator variant with non-overlapping groups. |
|
Class-wise stratified K-Fold cross-validator. |
|
Class-wise stratified ShuffleSplit cross-validator. |
|
Time Series cross-validator. |
|
Input checker utility for building a cross-validator. |
|
Split arrays or matrices into random train and test subsets. |
|
Exhaustive search over specified parameter values for an estimator. |
|
Search over specified parameter values with successive halving. |
|
Randomized search on hyper parameters. |
|
Grid of parameters with a discrete number of values for each. |
|
Generator on parameters sampled from given distributions. |
|
Randomized search on hyper parameters. |
|
Binary classifier that manually sets the decision threshold. |
|
Classifier that post-tunes the decision threshold using cross-validation. |
|
Generate cross-validated estimates for each input data point. |
|
Evaluate a score by cross-validation. |
|
Evaluate metric(s) by cross-validation and also record fit/score times. |
|
Learning curve. |
|
Evaluate the significance of a cross-validated score with permutations. |
|
Validation curve. |
|
Learning Curve visualization. |
|
Validation Curve visualization. |
|
One-vs-one multiclass strategy. |
|
One-vs-the-rest (OvR) multiclass strategy. |
|
(Error-Correcting) Output-Code multiclass strategy. |
|
A multi-label model that arranges binary classifiers into a chain. |
|
Multi target classification. |
|
Multi target regression. |
|
A multi-label model that arranges regressions into a chain. |
|
Naive Bayes classifier for multivariate Bernoulli models. |
|
Naive Bayes classifier for categorical features. |
|
The Complement Naive Bayes classifier described in Rennie et al. (2003). |
|
Gaussian Naive Bayes (GaussianNB). |
|
Naive Bayes classifier for multinomial models. |
|
BallTree for fast generalized N-point problems |
|
KDTree for fast generalized N-point problems |
|
Classifier implementing the k-nearest neighbors vote. |
|
Regression based on k-nearest neighbors. |
|
Transform X into a (weighted) graph of k nearest neighbors. |
|
Kernel Density Estimation. |
|
Unsupervised Outlier Detection using the Local Outlier Factor (LOF). |
|
Nearest centroid classifier. |
|
Unsupervised learner for implementing neighbor searches. |
|
Neighborhood Components Analysis. |
|
Classifier implementing a vote among neighbors within a given radius. |
|
Regression based on neighbors within a fixed radius. |
|
Transform X into a (weighted) graph of neighbors nearer than a radius. |
|
Compute the (weighted) graph of k-Neighbors for points in X. |
|
Compute the (weighted) graph of Neighbors for points in X. |
|
Sort a sparse graph such that each row is stored with increasing values. |
|
Bernoulli Restricted Boltzmann Machine (RBM). |
|
Multi-layer Perceptron classifier. |
|
Multi-layer Perceptron regressor. |
|
Concatenates results of multiple transformer objects. |
|
A sequence of data transformers with an optional final predictor. |
|
Construct a |
|
Construct a |
|
Binarize data (set feature values to 0 or 1) according to a threshold. |
|
Constructs a transformer from an arbitrary callable. |
|
Bin continuous data into intervals. |
|
Center an arbitrary kernel matrix \(K\). |
|
Binarize labels in a one-vs-all fashion. |
|
Encode target labels with value between 0 and n_classes-1. |
|
Scale each feature by its maximum absolute value. |
|
Transform features by scaling each feature to a given range. |
|
Transform between iterable of iterables and a multilabel format. |
|
Normalize samples individually to unit norm. |
|
Encode categorical features as a one-hot numeric array. |
|
Encode categorical features as an integer array. |
|
Generate polynomial and interaction features. |
|
Apply a power transform featurewise to make data more Gaussian-like. |
|
Transform features using quantiles information. |
|
Scale features using statistics that are robust to outliers. |
|
Generate univariate B-spline bases for features. |
|
Standardize features by removing the mean and scaling to unit variance. |
|
Target Encoder for regression and classification targets. |
|
Augment dataset with an additional dummy feature. |
|
Boolean thresholding of array-like or scipy.sparse matrix. |
|
Binarize labels in a one-vs-all fashion. |
|
Scale each feature to the [-1, 1] range without breaking the sparsity. |
|
Transform features by scaling each feature to a given range. |
|
Scale input vectors individually to unit norm (vector length). |
|
Parametric, monotonic transformation to make data more Gaussian-like. |
|
Transform features using quantiles information. |
|
Standardize a dataset along any axis. |
|
Standardize a dataset along any axis. |
|
Reduce dimensionality through Gaussian random projection. |
|
Reduce dimensionality through sparse random projection. |
|
Find a ‘safe’ number of components to randomly project to. |
|
Label Propagation classifier. |
|
LabelSpreading model for semi-supervised learning. |
|
Self-training classifier. |
|
Linear Support Vector Classification. |
|
Linear Support Vector Regression. |
|
Nu-Support Vector Classification. |
|
Nu Support Vector Regression. |
|
Unsupervised Outlier Detection. |
|
C-Support Vector Classification. |
|
Epsilon-Support Vector Regression. |
|
Return the lowest bound for |
|
A decision tree classifier. |
|
A decision tree regressor. |
|
An extremely randomized tree classifier. |
|
An extremely randomized tree regressor. |
|
Export a decision tree in DOT format. |
|
Build a text report showing the rules of a decision tree. |
|
Plot a decision tree. |
|
Container object exposing keys as attributes. |
|
Return rows, items or columns of X using indices. |
|
Convert an array-like to an array of floats. |
|
Throw a ValueError if X contains NaN or infinity. |
|
Decorator to mark a function or class as deprecated. |
|
Build a HTML representation of an estimator. |
|
Generator to create slices containing |
|
Generator to create |
|
Make arrays indexable for cross-validation. |
|
Compute the 32bit murmurhash3 of key at seed. |
|
Resample arrays or sparse matrices in a consistent way. |
|
Return a mask which is safe to use on X. |
|
Element wise squaring of array-likes and sparse matrices. |
|
Shuffle arrays or sparse matrices in a consistent way. |
|
Tags for the estimator. |
|
Tags for the input data. |
|
Tags for the target data. |
|
Tags for the classifier. |
|
Tags for the regressor. |
|
Tags for the transformer. |
|
Get estimator tags. |
|
Input validation for standard estimators. |
|
Input validation on an array, list, sparse matrix or similar. |
|
Check that all arrays have consistent first dimensions. |
|
Turn seed into an np.random.RandomState instance. |
|
Validate scalar parameters type and value. |
|
Perform is_fitted validation for estimator. |
|
Check that |
|
Make sure that array is 2D, square and symmetric. |
|
Ravel column or 1d numpy array, else raises an error. |
|
Check whether the estimator’s fit method supports the given parameter. |
|
Validate input data and set or check feature names and counts of the input. |
|
An attribute that is available only if check returns a truthy value. |
|
Estimate class weights for unbalanced datasets. |
|
Estimate sample weights by class for unbalanced datasets. |
|
Check if |
|
Determine the type of data indicated by the target. |
|
Extract an ordered array of unique labels. |
|
Compute density of a sparse vector. |
|
Compute logarithm of determinant of a square matrix. |
|
Compute an orthonormal matrix whose range approximates the range of A. |
|
Compute a truncated randomized SVD. |
|
Dot product that handle the sparse matrix case correctly. |
|
Return an array of the weighted modal (most common) value in the passed array. |
|
Compute incremental mean and variance along an axis on a CSR or CSC matrix. |
|
Inplace column scaling of a CSC/CSR matrix. |
|
Inplace column scaling of a CSR matrix. |
|
Inplace row scaling of a CSR or CSC matrix. |
|
Swap two columns of a CSC/CSR matrix in-place. |
|
Swap two rows of a CSC/CSR matrix in-place. |
|
Compute mean and variance along an axis on a CSR or CSC matrix. |
|
Normalize inplace the rows of a CSR matrix or array by their L1 norm. |
|
Normalize inplace the rows of a CSR matrix or array by their L2 norm. |
|
Return the length of the shortest path from source to all reachable nodes. |
|
Sample integers without replacement. |
|
Find the minimum value of an array over positive values. |
|
Contains the metadata request info of a consumer. |
|
Coordinates metadata routing for a |
|
Stores the mapping between caller and callee methods for a |
|
Get a |
|
Validate and route metadata. |
|
Get a list of all displays from |
|
Get a list of all estimators from |
|
Get a list of all functions from |
|
Check if estimator adheres to scikit-learn conventions. |
|
Pytest specific decorator for parametrizing estimator checks. |
|
Iteratively yield all check callables for an estimator. |
|
Tweak of |
|
Decorator used to capture the arguments of a function. |

---

## Source: https://scikit-learn.org/stable/auto_examples/index.html

# Examples[#](#examples)

This is the gallery of examples that showcase how scikit-learn can be used. Some
examples demonstrate the use of the [API](../api/index.html#api-ref) in general and some
demonstrate specific applications in tutorial form. Also check out our
[user guide](../user_guide.html#user-guide) for more detailed illustrations.

## Release Highlights[#](#release-highlights)

These examples illustrate the main features of the releases of scikit-learn.

[Release Highlights for scikit-learn 1.8](release_highlights/plot_release_highlights_1_8_0.html)

[Release Highlights for scikit-learn 1.7](release_highlights/plot_release_highlights_1_7_0.html)

[Release Highlights for scikit-learn 1.6](release_highlights/plot_release_highlights_1_6_0.html)

[Release Highlights for scikit-learn 1.5](release_highlights/plot_release_highlights_1_5_0.html)

[Release Highlights for scikit-learn 1.4](release_highlights/plot_release_highlights_1_4_0.html)

[Release Highlights for scikit-learn 1.3](release_highlights/plot_release_highlights_1_3_0.html)

[Release Highlights for scikit-learn 1.2](release_highlights/plot_release_highlights_1_2_0.html)

[Release Highlights for scikit-learn 1.1](release_highlights/plot_release_highlights_1_1_0.html)

[Release Highlights for scikit-learn 1.0](release_highlights/plot_release_highlights_1_0_0.html)

[Release Highlights for scikit-learn 0.24](release_highlights/plot_release_highlights_0_24_0.html)

[Release Highlights for scikit-learn 0.23](release_highlights/plot_release_highlights_0_23_0.html)

[Release Highlights for scikit-learn 0.22](release_highlights/plot_release_highlights_0_22_0.html)

## Biclustering[#](#biclustering)

Examples concerning biclustering techniques.

[A demo of the Spectral Biclustering algorithm](bicluster/plot_spectral_biclustering.html)

[A demo of the Spectral Co-Clustering algorithm](bicluster/plot_spectral_coclustering.html)

[Biclustering documents with the Spectral Co-clustering algorithm](bicluster/plot_bicluster_newsgroups.html)

## Calibration[#](#calibration)

Examples illustrating the calibration of predicted probabilities of classifiers.

[Comparison of Calibration of Classifiers](calibration/plot_compare_calibration.html)

[Probability Calibration curves](calibration/plot_calibration_curve.html)

[Probability Calibration for 3-class classification](calibration/plot_calibration_multiclass.html)

[Probability calibration of classifiers](calibration/plot_calibration.html)

## Classification[#](#classification)

General examples about classification algorithms.

[Linear and Quadratic Discriminant Analysis with covariance ellipsoid](classification/plot_lda_qda.html)

[Normal, Ledoit-Wolf and OAS Linear Discriminant Analysis for classification](classification/plot_lda.html)

[Plot classification probability](classification/plot_classification_probability.html)

[Recognizing hand-written digits](classification/plot_digits_classification.html)

## Clustering[#](#clustering)

Examples concerning the [ sklearn.cluster](../api/sklearn.cluster.html#module-sklearn.cluster) module.

[A demo of K-Means clustering on the handwritten digits data](cluster/plot_kmeans_digits.html)

[A demo of structured Ward hierarchical clustering on an image of coins](cluster/plot_coin_ward_segmentation.html)

[A demo of the mean-shift clustering algorithm](cluster/plot_mean_shift.html)

[Adjustment for chance in clustering performance evaluation](cluster/plot_adjusted_for_chance_measures.html)

[Agglomerative clustering with different metrics](cluster/plot_agglomerative_clustering_metrics.html)

[An example of K-Means++ initialization](cluster/plot_kmeans_plusplus.html)

[Bisecting K-Means and Regular K-Means Performance Comparison](cluster/plot_bisect_kmeans.html)

[Compare BIRCH and MiniBatchKMeans](cluster/plot_birch_vs_minibatchkmeans.html)

[Comparing different clustering algorithms on toy datasets](cluster/plot_cluster_comparison.html)

[Comparing different hierarchical linkage methods on toy datasets](cluster/plot_linkage_comparison.html)

[Comparison of the K-Means and MiniBatchKMeans clustering algorithms](cluster/plot_mini_batch_kmeans.html)

[Demo of DBSCAN clustering algorithm](cluster/plot_dbscan.html)

[Demo of HDBSCAN clustering algorithm](cluster/plot_hdbscan.html)

[Demo of OPTICS clustering algorithm](cluster/plot_optics.html)

[Demo of affinity propagation clustering algorithm](cluster/plot_affinity_propagation.html)

[Demonstration of k-means assumptions](cluster/plot_kmeans_assumptions.html)

[Empirical evaluation of the impact of k-means initialization](cluster/plot_kmeans_stability_low_dim_dense.html)

[Feature agglomeration vs. univariate selection](cluster/plot_feature_agglomeration_vs_univariate_selection.html)

[Hierarchical clustering with and without structure](cluster/plot_ward_structured_vs_unstructured.html)

[Online learning of a dictionary of parts of faces](cluster/plot_dict_face_patches.html)

[Plot Hierarchical Clustering Dendrogram](cluster/plot_agglomerative_dendrogram.html)

[Segmenting the picture of greek coins in regions](cluster/plot_coin_segmentation.html)

[Selecting the number of clusters with silhouette analysis on KMeans clustering](cluster/plot_kmeans_silhouette_analysis.html)

[Spectral clustering for image segmentation](cluster/plot_segmentation_toy.html)

[Various Agglomerative Clustering on a 2D embedding of digits](cluster/plot_digits_linkage.html)

## Covariance estimation[#](#covariance-estimation)

Examples concerning the [ sklearn.covariance](../api/sklearn.covariance.html#module-sklearn.covariance) module.

[Robust covariance estimation and Mahalanobis distances relevance](covariance/plot_mahalanobis_distances.html)

[Robust vs Empirical covariance estimate](covariance/plot_robust_vs_empirical_covariance.html)

[Shrinkage covariance estimation: LedoitWolf vs OAS and max-likelihood](covariance/plot_covariance_estimation.html)

[Sparse inverse covariance estimation](covariance/plot_sparse_cov.html)

## Cross decomposition[#](#cross-decomposition)

Examples concerning the [ sklearn.cross_decomposition](../api/sklearn.cross_decomposition.html#module-sklearn.cross_decomposition) module.

[Compare cross decomposition methods](cross_decomposition/plot_compare_cross_decomposition.html)

[Principal Component Regression vs Partial Least Squares Regression](cross_decomposition/plot_pcr_vs_pls.html)

## Dataset examples[#](#dataset-examples)

Examples concerning the [ sklearn.datasets](../api/sklearn.datasets.html#module-sklearn.datasets) module.

[Plot randomly generated multilabel dataset](datasets/plot_random_multilabel_dataset.html)

## Decision Trees[#](#decision-trees)

Examples concerning the [ sklearn.tree](../api/sklearn.tree.html#module-sklearn.tree) module.

[Plot the decision surface of decision trees trained on the iris dataset](tree/plot_iris_dtc.html)

[Post pruning decision trees with cost complexity pruning](tree/plot_cost_complexity_pruning.html)

[Understanding the decision tree structure](tree/plot_unveil_tree_structure.html)

## Decomposition[#](#decomposition)

Examples concerning the [ sklearn.decomposition](../api/sklearn.decomposition.html#module-sklearn.decomposition) module.

[Blind source separation using FastICA](decomposition/plot_ica_blind_source_separation.html)

[Comparison of LDA and PCA 2D projection of Iris dataset](decomposition/plot_pca_vs_lda.html)

[Factor Analysis (with rotation) to visualize patterns](decomposition/plot_varimax_fa.html)

[Image denoising using dictionary learning](decomposition/plot_image_denoising.html)

[Model selection with Probabilistic PCA and Factor Analysis (FA)](decomposition/plot_pca_vs_fa_model_selection.html)

[Principal Component Analysis (PCA) on Iris Dataset](decomposition/plot_pca_iris.html)

[Sparse coding with a precomputed dictionary](decomposition/plot_sparse_coding.html)

## Developing Estimators[#](#developing-estimators)

Examples concerning the development of Custom Estimator.

[__sklearn_is_fitted__ as Developer API](developing_estimators/sklearn_is_fitted.html)

## Ensemble methods[#](#ensemble-methods)

Examples concerning the [ sklearn.ensemble](../api/sklearn.ensemble.html#module-sklearn.ensemble) module.

[Categorical Feature Support in Gradient Boosting](ensemble/plot_gradient_boosting_categorical.html)

[Combine predictors using stacking](ensemble/plot_stack_predictors.html)

[Comparing Random Forests and Histogram Gradient Boosting models](ensemble/plot_forest_hist_grad_boosting_comparison.html)

[Comparing random forests and the multi-output meta estimator](ensemble/plot_random_forest_regression_multioutput.html)

[Decision Tree Regression with AdaBoost](ensemble/plot_adaboost_regression.html)

[Early stopping in Gradient Boosting](ensemble/plot_gradient_boosting_early_stopping.html)

[Feature importances with a forest of trees](ensemble/plot_forest_importances.html)

[Feature transformations with ensembles of trees](ensemble/plot_feature_transformation.html)

[Features in Histogram Gradient Boosting Trees](ensemble/plot_hgbt_regression.html)

[Gradient Boosting Out-of-Bag estimates](ensemble/plot_gradient_boosting_oob.html)

[Gradient Boosting regularization](ensemble/plot_gradient_boosting_regularization.html)

[Hashing feature transformation using Totally Random Trees](ensemble/plot_random_forest_embedding.html)

[Multi-class AdaBoosted Decision Trees](ensemble/plot_adaboost_multiclass.html)

[Plot individual and voting regression predictions](ensemble/plot_voting_regressor.html)

[Plot the decision surfaces of ensembles of trees on the iris dataset](ensemble/plot_forest_iris.html)

[Prediction Intervals for Gradient Boosting Regression](ensemble/plot_gradient_boosting_quantile.html)

[Single estimator versus bagging: bias-variance decomposition](ensemble/plot_bias_variance.html)

[Visualizing the probabilistic predictions of a VotingClassifier](ensemble/plot_voting_decision_regions.html)

## Examples based on real world datasets[#](#examples-based-on-real-world-datasets)

Applications to real world problems with some medium sized datasets or interactive user interface.

[Compressive sensing: tomography reconstruction with L1 prior (Lasso)](applications/plot_tomography_l1_reconstruction.html)

[Faces recognition example using eigenfaces and SVMs](applications/plot_face_recognition.html)

[Image denoising using kernel PCA](applications/plot_digits_denoising.html)

[Lagged features for time series forecasting](applications/plot_time_series_lagged_features.html)

[Out-of-core classification of text documents](applications/plot_out_of_core_classification.html)

[Outlier detection on a real data set](applications/plot_outlier_detection_wine.html)

[Time-related feature engineering](applications/plot_cyclical_feature_engineering.html)

[Topic extraction with Non-negative Matrix Factorization and Latent Dirichlet Allocation](applications/plot_topics_extraction_with_nmf_lda.html)

[Visualizing the stock market structure](applications/plot_stock_market.html)

[Wikipedia principal eigenvector](applications/wikipedia_principal_eigenvector.html)

## Feature Selection[#](#feature-selection)

Examples concerning the [ sklearn.feature_selection](../api/sklearn.feature_selection.html#module-sklearn.feature_selection) module.

[Comparison of F-test and mutual information](feature_selection/plot_f_test_vs_mi.html)

[Model-based and sequential feature selection](feature_selection/plot_select_from_model_diabetes.html)

[Recursive feature elimination with cross-validation](feature_selection/plot_rfe_with_cross_validation.html)

## Frozen Estimators[#](#frozen-estimators)

Examples concerning the [ sklearn.frozen](../api/sklearn.frozen.html#module-sklearn.frozen) module.

[Examples of Using FrozenEstimator](frozen/plot_frozen_examples.html)

## Gaussian Mixture Models[#](#gaussian-mixture-models)

Examples concerning the [ sklearn.mixture](../api/sklearn.mixture.html#module-sklearn.mixture) module.

[Concentration Prior Type Analysis of Variation Bayesian Gaussian Mixture](mixture/plot_concentration_prior.html)

[Density Estimation for a Gaussian mixture](mixture/plot_gmm_pdf.html)

[Gaussian Mixture Model Ellipsoids](mixture/plot_gmm.html)

[Gaussian Mixture Model Selection](mixture/plot_gmm_selection.html)

[Gaussian Mixture Model Sine Curve](mixture/plot_gmm_sin.html)

## Gaussian Process for Machine Learning[#](#gaussian-process-for-machine-learning)

Examples concerning the [ sklearn.gaussian_process](../api/sklearn.gaussian_process.html#module-sklearn.gaussian_process) module.

[Ability of Gaussian process regression (GPR) to estimate data noise-level](gaussian_process/plot_gpr_noisy.html)

[Comparison of kernel ridge and Gaussian process regression](gaussian_process/plot_compare_gpr_krr.html)

[Forecasting of CO2 level on Mona Loa dataset using Gaussian process regression (GPR)](gaussian_process/plot_gpr_co2.html)

[Gaussian Processes regression: basic introductory example](gaussian_process/plot_gpr_noisy_targets.html)

[Gaussian process classification (GPC) on iris dataset](gaussian_process/plot_gpc_iris.html)

[Gaussian processes on discrete data structures](gaussian_process/plot_gpr_on_structured_data.html)

[Illustration of Gaussian process classification (GPC) on the XOR dataset](gaussian_process/plot_gpc_xor.html)

[Illustration of prior and posterior Gaussian process for different kernels](gaussian_process/plot_gpr_prior_posterior.html)

[Iso-probability lines for Gaussian Processes classification (GPC)](gaussian_process/plot_gpc_isoprobability.html)

[Probabilistic predictions with Gaussian process classification (GPC)](gaussian_process/plot_gpc.html)

## Generalized Linear Models[#](#generalized-linear-models)

Examples concerning the [ sklearn.linear_model](../api/sklearn.linear_model.html#module-sklearn.linear_model) module.

[Comparing Linear Bayesian Regressors](linear_model/plot_ard.html)

[Curve Fitting with Bayesian Ridge Regression](linear_model/plot_bayesian_ridge_curvefit.html)

[Decision Boundaries of Multinomial and One-vs-Rest Logistic Regression](linear_model/plot_logistic_multinomial.html)

[Early stopping of Stochastic Gradient Descent](linear_model/plot_sgd_early_stopping.html)

[Fitting an Elastic Net with a precomputed Gram Matrix and Weighted Samples](linear_model/plot_elastic_net_precomputed_gram_matrix_with_weighted_samples.html)

[HuberRegressor vs Ridge on dataset with strong outliers](linear_model/plot_huber_vs_ridge.html)

[Joint feature selection with multi-task Lasso](linear_model/plot_multi_task_lasso_support.html)

[L1 Penalty and Sparsity in Logistic Regression](linear_model/plot_logistic_l1_l2_sparsity.html)

[L1-based models for Sparse Signals](linear_model/plot_lasso_and_elasticnet.html)

[Lasso model selection via information criteria](linear_model/plot_lasso_lars_ic.html)

[Lasso model selection: AIC-BIC / cross-validation](linear_model/plot_lasso_model_selection.html)

[Lasso on dense and sparse data](linear_model/plot_lasso_dense_vs_sparse_data.html)

[Lasso, Lasso-LARS, and Elastic Net paths](linear_model/plot_lasso_lasso_lars_elasticnet_path.html)

[MNIST classification using multinomial logistic + L1](linear_model/plot_sparse_logistic_regression_mnist.html)

[Multiclass sparse logistic regression on 20newgroups](linear_model/plot_sparse_logistic_regression_20newsgroups.html)

[One-Class SVM versus One-Class SVM using Stochastic Gradient Descent](linear_model/plot_sgdocsvm_vs_ocsvm.html)

[Ordinary Least Squares and Ridge Regression](linear_model/plot_ols_ridge.html)

[Plot Ridge coefficients as a function of the regularization](linear_model/plot_ridge_path.html)

[Plot multi-class SGD on the iris dataset](linear_model/plot_sgd_iris.html)

[Poisson regression and non-normal loss](linear_model/plot_poisson_regression_non_normal_loss.html)

[Polynomial and Spline interpolation](linear_model/plot_polynomial_interpolation.html)

[Regularization path of L1- Logistic Regression](linear_model/plot_logistic_path.html)

[Ridge coefficients as a function of the L2 Regularization](linear_model/plot_ridge_coeffs.html)

[Robust linear estimator fitting](linear_model/plot_robust_fit.html)

[Robust linear model estimation using RANSAC](linear_model/plot_ransac.html)

[SGD: Maximum margin separating hyperplane](linear_model/plot_sgd_separating_hyperplane.html)

[Tweedie regression on insurance claims](linear_model/plot_tweedie_regression_insurance_claims.html)

## Inspection[#](#inspection)

Examples related to the [ sklearn.inspection](../api/sklearn.inspection.html#module-sklearn.inspection) module.

[Common pitfalls in the interpretation of coefficients of linear models](inspection/plot_linear_model_coefficient_interpretation.html)

[Failure of Machine Learning to infer causal effects](inspection/plot_causal_interpretation.html)

[Partial Dependence and Individual Conditional Expectation Plots](inspection/plot_partial_dependence.html)

[Permutation Importance vs Random Forest Feature Importance (MDI)](inspection/plot_permutation_importance.html)

[Permutation Importance with Multicollinear or Correlated Features](inspection/plot_permutation_importance_multicollinear.html)

## Kernel Approximation[#](#kernel-approximation)

Examples concerning the [ sklearn.kernel_approximation](../api/sklearn.kernel_approximation.html#module-sklearn.kernel_approximation) module.

[Scalable learning with polynomial kernel approximation](kernel_approximation/plot_scalable_poly_kernels.html)

## Manifold learning[#](#manifold-learning)

Examples concerning the [ sklearn.manifold](../api/sklearn.manifold.html#module-sklearn.manifold) module.

[Comparison of Manifold Learning methods](manifold/plot_compare_methods.html)

[Manifold Learning methods on a severed sphere](manifold/plot_manifold_sphere.html)

[Manifold learning on handwritten digits: Locally Linear Embedding, Isomap…](manifold/plot_lle_digits.html)

[Swiss Roll And Swiss-Hole Reduction](manifold/plot_swissroll.html)

[t-SNE: The effect of various perplexity values on the shape](manifold/plot_t_sne_perplexity.html)

## Miscellaneous[#](#miscellaneous)

Miscellaneous and introductory examples for scikit-learn.

[Advanced Plotting With Partial Dependence](miscellaneous/plot_partial_dependence_visualization_api.html)

[Comparing anomaly detection algorithms for outlier detection on toy datasets](miscellaneous/plot_anomaly_comparison.html)

[Comparison of kernel ridge regression and SVR](miscellaneous/plot_kernel_ridge_regression.html)

[Displaying estimators and complex pipelines](miscellaneous/plot_estimator_representation.html)

[Evaluation of outlier detection estimators](miscellaneous/plot_outlier_detection_bench.html)

[Explicit feature map approximation for RBF kernels](miscellaneous/plot_kernel_approximation.html)

[Face completion with a multi-output estimators](miscellaneous/plot_multioutput_face_completion.html)

[Introducing the set_output API](miscellaneous/plot_set_output.html)

[ROC Curve with Visualization API](miscellaneous/plot_roc_curve_visualization_api.html)

[The Johnson-Lindenstrauss bound for embedding with random projections](miscellaneous/plot_johnson_lindenstrauss_bound.html)

[Visualizations with Display Objects](miscellaneous/plot_display_object_visualization.html)

## Missing Value Imputation[#](#missing-value-imputation)

Examples concerning the [ sklearn.impute](../api/sklearn.impute.html#module-sklearn.impute) module.

[Imputing missing values before building an estimator](impute/plot_missing_values.html)

[Imputing missing values with variants of IterativeImputer](impute/plot_iterative_imputer_variants_comparison.html)

## Model Selection[#](#model-selection)

Examples related to the [ sklearn.model_selection](../api/sklearn.model_selection.html#module-sklearn.model_selection) module.

[Balance model complexity and cross-validated score](model_selection/plot_grid_search_refit_callable.html)

[Class Likelihood Ratios to measure classification performance](model_selection/plot_likelihood_ratios.html)

[Comparing randomized search and grid search for hyperparameter estimation](model_selection/plot_randomized_search.html)

[Comparison between grid search and successive halving](model_selection/plot_successive_halving_heatmap.html)

[Custom refit strategy of a grid search with cross-validation](model_selection/plot_grid_search_digits.html)

[Demonstration of multi-metric evaluation on cross_val_score and GridSearchCV](model_selection/plot_multi_metric_evaluation.html)

[Detection error tradeoff (DET) curve](model_selection/plot_det.html)

[Effect of model regularization on training and test error](model_selection/plot_train_error_vs_test_error.html)

[Evaluate the performance of a classifier with Confusion Matrix](model_selection/plot_confusion_matrix.html)

[Multiclass Receiver Operating Characteristic (ROC)](model_selection/plot_roc.html)

[Nested versus non-nested cross-validation](model_selection/plot_nested_cross_validation_iris.html)

[Plotting Cross-Validated Predictions](model_selection/plot_cv_predict.html)

[Plotting Learning Curves and Checking Models’ Scalability](model_selection/plot_learning_curve.html)

[Post-hoc tuning the cut-off point of decision function](model_selection/plot_tuned_decision_threshold.html)

[Post-tuning the decision threshold for cost-sensitive learning](model_selection/plot_cost_sensitive_learning.html)

[Receiver Operating Characteristic (ROC) with cross validation](model_selection/plot_roc_crossval.html)

[Sample pipeline for text feature extraction and evaluation](model_selection/plot_grid_search_text_feature_extraction.html)

[Statistical comparison of models using grid search](model_selection/plot_grid_search_stats.html)

[Test with permutations the significance of a classification score](model_selection/plot_permutation_tests_for_classification.html)

[Visualizing cross-validation behavior in scikit-learn](model_selection/plot_cv_indices.html)

## Multiclass methods[#](#multiclass-methods)

Examples concerning the [ sklearn.multiclass](../api/sklearn.multiclass.html#module-sklearn.multiclass) module.

[Overview of multiclass training meta-estimators](multiclass/plot_multiclass_overview.html)

## Multioutput methods[#](#multioutput-methods)

Examples concerning the [ sklearn.multioutput](../api/sklearn.multioutput.html#module-sklearn.multioutput) module.

[Multilabel classification using a classifier chain](multioutput/plot_classifier_chain_yeast.html)

## Nearest Neighbors[#](#nearest-neighbors)

Examples concerning the [ sklearn.neighbors](../api/sklearn.neighbors.html#module-sklearn.neighbors) module.

[Approximate nearest neighbors in TSNE](neighbors/approximate_nearest_neighbors.html)

[Comparing Nearest Neighbors with and without Neighborhood Components Analysis](neighbors/plot_nca_classification.html)

[Dimensionality Reduction with Neighborhood Components Analysis](neighbors/plot_nca_dim_reduction.html)

[Kernel Density Estimate of Species Distributions](neighbors/plot_species_kde.html)

[Nearest Centroid Classification](neighbors/plot_nearest_centroid.html)

[Nearest Neighbors Classification](neighbors/plot_classification.html)

[Neighborhood Components Analysis Illustration](neighbors/plot_nca_illustration.html)

[Novelty detection with Local Outlier Factor (LOF)](neighbors/plot_lof_novelty_detection.html)

[Outlier detection with Local Outlier Factor (LOF)](neighbors/plot_lof_outlier_detection.html)

[Simple 1D Kernel Density Estimation](neighbors/plot_kde_1d.html)

## Neural Networks[#](#neural-networks)

Examples concerning the [ sklearn.neural_network](../api/sklearn.neural_network.html#module-sklearn.neural_network) module.

[Compare Stochastic learning strategies for MLPClassifier](neural_networks/plot_mlp_training_curves.html)

[Restricted Boltzmann Machine features for digit classification](neural_networks/plot_rbm_logistic_classification.html)

[Varying regularization in Multi-layer Perceptron](neural_networks/plot_mlp_alpha.html)

[Visualization of MLP weights on MNIST](neural_networks/plot_mnist_filters.html)

## Pipelines and composite estimators[#](#pipelines-and-composite-estimators)

Examples of how to compose transformers and pipelines from other estimators. See the [User Guide](../modules/compose.html#combining-estimators).

[Column Transformer with Heterogeneous Data Sources](compose/plot_column_transformer.html)

[Column Transformer with Mixed Types](compose/plot_column_transformer_mixed_types.html)

[Concatenating multiple feature extraction methods](compose/plot_feature_union.html)

[Effect of transforming the targets in regression model](compose/plot_transformed_target.html)

[Pipelining: chaining a PCA and a logistic regression](compose/plot_digits_pipe.html)

[Selecting dimensionality reduction with Pipeline and GridSearchCV](compose/plot_compare_reduction.html)

## Preprocessing[#](#preprocessing)

Examples concerning the [ sklearn.preprocessing](../api/sklearn.preprocessing.html#module-sklearn.preprocessing) module.

[Compare the effect of different scalers on data with outliers](preprocessing/plot_all_scaling.html)

[Comparing Target Encoder with Other Encoders](preprocessing/plot_target_encoder.html)

[Demonstrating the different strategies of KBinsDiscretizer](preprocessing/plot_discretization_strategies.html)

[Map data to a normal distribution](preprocessing/plot_map_data_to_normal.html)

[Target Encoder’s Internal Cross fitting](preprocessing/plot_target_encoder_cross_val.html)

[Using KBinsDiscretizer to discretize continuous features](preprocessing/plot_discretization.html)

## Semi Supervised Classification[#](#semi-supervised-classification)

Examples concerning the [ sklearn.semi_supervised](../api/sklearn.semi_supervised.html#module-sklearn.semi_supervised) module.

[Decision boundary of semi-supervised classifiers versus SVM on the Iris dataset](semi_supervised/plot_semi_supervised_versus_svm_iris.html)

[Effect of varying threshold for self-training](semi_supervised/plot_self_training_varying_threshold.html)

[Label Propagation circles: Learning a complex structure](semi_supervised/plot_label_propagation_structure.html)

[Label Propagation digits: Active learning](semi_supervised/plot_label_propagation_digits_active_learning.html)

[Label Propagation digits: Demonstrating performance](semi_supervised/plot_label_propagation_digits.html)

[Semi-supervised Classification on a Text Dataset](semi_supervised/plot_semi_supervised_newsgroups.html)

## Support Vector Machines[#](#support-vector-machines)

Examples concerning the [ sklearn.svm](../api/sklearn.svm.html#module-sklearn.svm) module.

[One-class SVM with non-linear kernel (RBF)](svm/plot_oneclass.html)

[Plot classification boundaries with different SVM Kernels](svm/plot_svm_kernels.html)

[Plot different SVM classifiers in the iris dataset](svm/plot_iris_svc.html)

[Plot the support vectors in LinearSVC](svm/plot_linearsvc_support_vectors.html)

[SVM-Anova: SVM with univariate feature selection](svm/plot_svm_anova.html)

[SVM: Maximum margin separating hyperplane](svm/plot_separating_hyperplane.html)

[SVM: Separating hyperplane for unbalanced classes](svm/plot_separating_hyperplane_unbalanced.html)

[Scaling the regularization parameter for SVCs](svm/plot_svm_scale_c.html)

[Support Vector Regression (SVR) using linear and non-linear kernels](svm/plot_svm_regression.html)

## Working with text documents[#](#working-with-text-documents)

Examples concerning the [ sklearn.feature_extraction.text](../api/sklearn.feature_extraction.html#module-sklearn.feature_extraction.text) module.

[Classification of text documents using sparse features](text/plot_document_classification_20newsgroups.html)

[Clustering text documents using k-means](text/plot_document_clustering.html)

[FeatureHasher and DictVectorizer Comparison](text/plot_hashing_vs_dict_vectorizer.html)

---

## Source: https://blog.scikit-learn.org/

##
[Update on array API adoption in scikit-learn
](/updates/update-array-api/)

Author: Lucy Liu Note: this blog post is a cross-post of a Quansight Labs blog post.

Author: Lucy Liu Note: this blog post is a cross-post of a Quansight Labs blog post.

Author: Dea María Léon

Author: Reshama Shaikh , Virgil Chan

Author: Reshama Shaikh

Author: Skolar , Pénélope Gittos

Author: Adrin Jalali

Author: Inessa Pawson , François Goupil

Author: Guillaume Lemaitre , Lucy Liu

Author: Reshama Shaikh , Adam Li

Author: Reshama Shaikh , Yao Xiao

Author: Adrin Jalali

Author: Stefanie Senger , François Goupil

Author: NVIDIA , François Goupil

Author: Reshama Shaikh , François Goupil

Author: Reshama Shaikh , Meekail Zain

Author: Sangam SwadiK

Author: Lysandre Debut , François Goupil

Author: Juan Martín Loyola

Author: Reshama Shaikh

Author: Reshama Shaikh , Norbert Preining

Author: Reshama Shaikh

Author: Reshama Shaikh , Lucy Liu

Author: Reshama Shaikh , Maren Westermann

Author: Reshama Shaikh , Angela Okune

Author: François Goupil

Author: Thomas J. Fan

Author: Julien Jerphanion

Author: François Goupil

Author: Reshama Shaikh , Chiara Marmo

Author: Reshama Shaikh , Juan Martín Loyola

Author: Reshama Shaikh

Author: Reshama Shaikh

Author: Reshama Shaikh

Author: Reshama Shaikh

Author: Andreas Mueller

Author: Reshama Shaikh

Author: Reshama Shaikh

Author: Adrin Jalali

Author: Nicolas Hug

Author: Reshama Shaikh

Author: Reshama Shaikh , Andreas Mueller

---

## Source: https://scikit-learn.org/stable/getting_started.html

# Getting Started[#](#getting-started)

`Scikit-learn`

is an open source machine learning library that supports
supervised and unsupervised learning. It also provides various tools for
model fitting, data preprocessing, model selection, model evaluation,
and many other utilities.

The purpose of this guide is to illustrate some of the main features of
`scikit-learn`

. It assumes basic working knowledge of machine learning
practices (model fitting, predicting, cross-validation, etc.). Please refer to
our [installation instructions](install.html#installation-instructions) to install
`scikit-learn`

, or jump to the [Next steps](#next-steps) section for additional
guidance on using `scikit-learn`

.

## Fitting and predicting: estimator basics[#](#fitting-and-predicting-estimator-basics)

`Scikit-learn`

provides dozens of built-in machine learning algorithms and
models, called [estimators](glossary.html#term-estimators). Each estimator can be fitted to some data
using its [fit](glossary.html#term-fit) method.

Here is a simple example where we fit a
[ RandomForestClassifier](modules/generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier) to some very basic data:

```
>>> from sklearn.ensemble import RandomForestClassifier
>>> clf = RandomForestClassifier(random_state=0)
>>> X = [[ 1, 2, 3], # 2 samples, 3 features
... [11, 12, 13]]
>>> y = [0, 1] # classes of each sample
>>> clf.fit(X, y)
RandomForestClassifier(random_state=0)
```

The [fit](glossary.html#term-fit) method generally accepts 2 inputs:

The samples matrix (or design matrix)

[X](glossary.html#term-X). The size of`X`

is typically`(n_samples, n_features)`

, which means that samples are represented as rows and features are represented as columns.The target values

[y](glossary.html#term-y)which are real numbers for regression tasks, or integers for classification (or any other discrete set of values). For unsupervised learning tasks,`y`

does not need to be specified.`y`

is usually a 1d array where the`i`

th entry corresponds to the target of the`i`

th sample (row) of`X`

.

Both `X`

and `y`

are usually expected to be numpy arrays or equivalent
[array-like](glossary.html#term-array-like) data types, though some estimators work with other
formats such as sparse matrices.

Once the estimator is fitted, it can be used for predicting target values of new data. You don’t need to re-train the estimator:

```
>>> clf.predict(X) # predict classes of the training data
array([0, 1])
>>> clf.predict([[4, 5, 6], [14, 15, 16]]) # predict classes of new data
array([0, 1])
```

You can check [Choosing the right estimator](machine_learning_map.html#ml-map) on how to choose the right model for your use case.

## Transformers and pre-processors[#](#transformers-and-pre-processors)

Machine learning workflows are often composed of different parts. A typical pipeline consists of a pre-processing step that transforms or imputes the data, and a final predictor that predicts target values.

In `scikit-learn`

, pre-processors and transformers follow the same API as
the estimator objects (they actually all inherit from the same
`BaseEstimator`

class). The transformer objects don’t have a
[predict](glossary.html#term-predict) method but rather a [transform](glossary.html#term-transform) method that outputs a
newly transformed sample matrix `X`

:

```
>>> from sklearn.preprocessing import StandardScaler
>>> X = [[0, 15],
... [1, -10]]
>>> # scale data according to computed scaling values
>>> StandardScaler().fit(X).transform(X)
array([[-1., 1.],
[ 1., -1.]])
```

Sometimes, you want to apply different transformations to different features:
the [ColumnTransformer](modules/compose.html#column-transformer) is designed for these
use-cases.

## Pipelines: chaining pre-processors and estimators[#](#pipelines-chaining-pre-processors-and-estimators)

Transformers and estimators (predictors) can be combined together into a
single unifying object: a [ Pipeline](modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline). The pipeline
offers the same API as a regular estimator: it can be fitted and used for
prediction with

`fit`

and `predict`

. As we will see later, using a
pipeline will also prevent you from data leakage, i.e. disclosing some
testing data in your training data.In the following example, we [load the Iris dataset](datasets.html#datasets), split it
into train and test sets, and compute the accuracy score of a pipeline on
the test data:

```
>>> from sklearn.preprocessing import StandardScaler
>>> from sklearn.linear_model import LogisticRegression
>>> from sklearn.pipeline import make_pipeline
>>> from sklearn.datasets import load_iris
>>> from sklearn.model_selection import train_test_split
>>> from sklearn.metrics import accuracy_score
...
>>> # create a pipeline object
>>> pipe = make_pipeline(
... StandardScaler(),
... LogisticRegression()
... )
...
>>> # load the iris dataset and split it into train and test sets
>>> X, y = load_iris(return_X_y=True)
>>> X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
...
>>> # fit the whole pipeline
>>> pipe.fit(X_train, y_train)
Pipeline(steps=[('standardscaler', StandardScaler()),
('logisticregression', LogisticRegression())])
>>> # we can now use it like any other estimator
>>> accuracy_score(pipe.predict(X_test), y_test)
0.97...
```

## Model evaluation[#](#model-evaluation)

Fitting a model to some data does not entail that it will predict well on
unseen data. This needs to be directly evaluated. We have just seen the
[ train_test_split](modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split) helper that splits a
dataset into train and test sets, but

`scikit-learn`

provides many other
tools for model evaluation, in particular for [cross-validation](modules/cross_validation.html#cross-validation).

We here briefly show how to perform a 5-fold cross-validation procedure,
using the [ cross_validate](modules/generated/sklearn.model_selection.cross_validate.html#sklearn.model_selection.cross_validate) helper. Note that
it is also possible to manually iterate over the folds, use different
data splitting strategies, and use custom scoring functions. Please refer to
our

[User Guide](modules/cross_validation.html#cross-validation)for more details:

```
>>> from sklearn.datasets import make_regression
>>> from sklearn.linear_model import LinearRegression
>>> from sklearn.model_selection import cross_validate
...
>>> X, y = make_regression(n_samples=1000, random_state=0)
>>> lr = LinearRegression()
...
>>> result = cross_validate(lr, X, y) # defaults to 5-fold CV
>>> result['test_score'] # r_squared score is high because dataset is easy
array([1., 1., 1., 1., 1.])
```

## Automatic parameter searches[#](#automatic-parameter-searches)

All estimators have parameters (often called hyper-parameters in the
literature) that can be tuned. The generalization power of an estimator
often critically depends on a few parameters. For example a
[ RandomForestRegressor](modules/generated/sklearn.ensemble.RandomForestRegressor.html#sklearn.ensemble.RandomForestRegressor) has a

`n_estimators`

parameter that determines the number of trees in the forest, and a
`max_depth`

parameter that determines the maximum depth of each tree.
Quite often, it is not clear what the exact values of these parameters
should be since they depend on the data at hand.`Scikit-learn`

provides tools to automatically find the best parameter
combinations (via cross-validation). In the following example, we randomly
search over the parameter space of a random forest with a
[ RandomizedSearchCV](modules/generated/sklearn.model_selection.RandomizedSearchCV.html#sklearn.model_selection.RandomizedSearchCV) object. When the search
is over, the

[behaves as a](modules/generated/sklearn.model_selection.RandomizedSearchCV.html#sklearn.model_selection.RandomizedSearchCV)

`RandomizedSearchCV`

[that has been fitted with the best set of parameters. Read more in the](modules/generated/sklearn.ensemble.RandomForestRegressor.html#sklearn.ensemble.RandomForestRegressor)

`RandomForestRegressor`

[User Guide](modules/grid_search.html#grid-search):

```
>>> from sklearn.datasets import make_regression
>>> from sklearn.ensemble import RandomForestRegressor
>>> from sklearn.model_selection import RandomizedSearchCV
>>> from sklearn.model_selection import train_test_split
>>> from scipy.stats import randint
...
>>> # create a synthetic dataset
>>> X, y = make_regression(n_samples=20640,
... n_features=8,
... noise=0.1,
... random_state=0)
>>> X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
...
>>> # define the parameter space that will be searched over
>>> param_distributions = {'n_estimators': randint(1, 5),
... 'max_depth': randint(5, 10)}
...
>>> # now create a searchCV object and fit it to the data
>>> search = RandomizedSearchCV(estimator=RandomForestRegressor(random_state=0),
... n_iter=5,
... param_distributions=param_distributions,
... random_state=0)
>>> search.fit(X_train, y_train)
RandomizedSearchCV(estimator=RandomForestRegressor(random_state=0), n_iter=5,
param_distributions={'max_depth': ...,
'n_estimators': ...},
random_state=0)
>>> search.best_params_
{'max_depth': 9, 'n_estimators': 4}
>>> # the search object now acts like a normal random forest estimator
>>> # with max_depth=9 and n_estimators=4
>>> search.score(X_test, y_test)
0.84...
```

Note

In practice, you almost always want to [search over a pipeline](modules/grid_search.html#composite-grid-search), instead of a single estimator. One of the main
reasons is that if you apply a pre-processing step to the whole dataset
without using a pipeline, and then perform any kind of cross-validation,
you would be breaking the fundamental assumption of independence between
training and testing data. Indeed, since you pre-processed the data
using the whole dataset, some information about the test sets are
available to the train sets. This will lead to over-estimating the
generalization power of the estimator (you can read more in this [Kaggle
post](https://www.kaggle.com/alexisbcook/data-leakage)).

Using a pipeline for cross-validation and searching will largely keep you from this common pitfall.

## Next steps[#](#next-steps)

We have briefly covered estimator fitting and predicting, pre-processing
steps, pipelines, cross-validation tools and automatic hyper-parameter
searches. This guide should give you an overview of some of the main
features of the library, but there is much more to `scikit-learn`

!

Please refer to our [User Guide](user_guide.html#user-guide) for details on all the tools that we
provide. You can also find an exhaustive list of the public API in the
[API Reference](api/index.html#api-ref).

You can also look at our numerous [examples](auto_examples/index.html#general-examples) that
illustrate the use of `scikit-learn`

in many different contexts, or have
a look at the [External Resources, Videos and Talks](presentations.html#external-resources) for learning materials.

---

## Source: https://scikit-learn.org/stable/whats_new.html

# Release History[#](#release-history)

Changelogs and release notes for all scikit-learn releases are linked in this page.

Tip

[Subscribe to scikit-learn releases](https://libraries.io/pypi/scikit-learn)
on libraries.io to be notified when new versions are released.

Changelogs and release notes for all scikit-learn releases are linked in this page.

Tip

[Subscribe to scikit-learn releases](https://libraries.io/pypi/scikit-learn)
on libraries.io to be notified when new versions are released.

---

## Source: https://scikit-learn.org/stable/glossary.html

# Glossary of Common Terms and API Elements[#](#glossary-of-common-terms-and-api-elements)

This glossary hopes to definitively represent the tacit and explicit conventions applied in Scikit-learn and its API, while providing a reference for users and contributors. It aims to describe the concepts and either detail their corresponding API or link to other relevant parts of the documentation which do so. By linking to glossary entries from the API Reference and User Guide, we may minimize redundancy and inconsistency.

We begin by listing general concepts (and any that didn’t fit elsewhere), but
more specific sets of related terms are listed below:
[Class APIs and Estimator Types](#glossary-estimator-types), [Target Types](#glossary-target-types),
[Methods](#glossary-methods), [Parameters](#glossary-parameters),
[Attributes](#glossary-attributes), [Data and sample properties](#glossary-sample-props).

## General Concepts[#](#general-concepts)

- 1d
[#](#term-1d) - 1d array
[#](#term-1d-array) One-dimensional array. A NumPy array whose

`.shape`

has length 1. A vector.- 2d
[#](#term-2d) - 2d array
[#](#term-2d-array) Two-dimensional array. A NumPy array whose

`.shape`

has length 2. Often represents a matrix.- API
[#](#term-API) Refers to both the

*specific*interfaces for estimators implemented in Scikit-learn and the*generalized*conventions across types of estimators as described in this glossary and[overviewed in the contributor documentation](developers/develop.html#api-overview).The specific interfaces that constitute Scikit-learn’s public API are largely documented in

[API Reference](api/index.html#api-ref). However, we less formally consider anything as public API if none of the identifiers required to access it begins with`_`

. We generally try to maintain[backwards compatibility](#term-backwards-compatibility)for all objects in the public API.Private API, including functions, modules and methods beginning

`_`

are not assured to be stable.- array-like
[#](#term-array-like) The most common data format for

*input*to Scikit-learn estimators and functions, array-like is any type object for whichwill produce an array of appropriate shape (usually 1 or 2-dimensional) of appropriate dtype (usually numeric).`numpy.asarray`

This includes:

a numpy array

a list of numbers

a list of length-k lists of numbers for some fixed length k

a

with all columns numeric`pandas.DataFrame`

a numeric

`pandas.Series`


Other array API inputs, but see

[Array API support (experimental)](modules/array_api.html#array-api)for the preferred way of using these:It excludes:

a sparse array

an iterator

a generator


Note that

*output*from scikit-learn estimators and functions (e.g. predictions) should generally be arrays or sparse matrices, or lists thereof (as in multi-output’s`tree.DecisionTreeClassifier`

`predict_proba`

). An estimator where`predict()`

returns a list or a`pandas.Series`

is not valid.- attribute
[#](#term-attribute) - attributes
[#](#term-attributes) We mostly use attribute to refer to how model information is stored on an estimator during fitting. Any public attribute stored on an estimator instance is required to begin with an alphabetic character and end in a single underscore if it is set in

[fit](#term-fit)or[partial_fit](#term-partial_fit). These are what is documented under an estimator’s*Attributes*documentation. The information stored in attributes is usually either: sufficient statistics used for prediction or transformation;[transductive](#term-transductive)outputs such as[labels_](#term-labels_)or[embedding_](#term-embedding_); or diagnostic data, such as[feature_importances_](#term-feature_importances_). Common attributes are listed[below](#glossary-attributes).A public attribute may have the same name as a constructor

[parameter](#term-parameter), with a`_`

appended. This is used to store a validated or estimated version of the user’s input. For example,is constructed with an`decomposition.PCA`

`n_components`

parameter. From this, together with other parameters and the data, PCA estimates the attribute`n_components_`

.Further private attributes used in prediction/transformation/etc. may also be set when fitting. These begin with a single underscore and are not assured to be stable for public access.

A public attribute on an estimator instance that does not end in an underscore should be the stored, unmodified value of an

`__init__`

[parameter](#term-parameter)of the same name. Because of this equivalence, these are documented under an estimator’s*Parameters*documentation.- backwards compatibility
[#](#term-backwards-compatibility) We generally try to maintain backward compatibility (i.e. interfaces and behaviors may be extended but not changed or removed) from release to release but this comes with some exceptions:

- Public API only
The behavior of objects accessed through private identifiers (those beginning

`_`

) may be changed arbitrarily between versions.- As documented
We will generally assume that the users have adhered to the documented parameter types and ranges. If the documentation asks for a list and the user gives a tuple, we do not assure consistent behavior from version to version.

- Deprecation
Behaviors may change following a

[deprecation](#term-deprecation)period (usually two releases long). Warnings are issued using Python’smodule.`warnings`

- Keyword arguments
We may sometimes assume that all optional parameters (other than X and y to

[fit](#term-fit)and similar methods) are passed as keyword arguments only and may be positionally reordered.- Bug fixes and enhancements
Bug fixes and – less often – enhancements may change the behavior of estimators, including the predictions of an estimator trained on the same data and

[random_state](#term-random_state). When this happens, we attempt to note it clearly in the changelog.- Serialization
We make no assurances that pickling an estimator in one version will allow it to be unpickled to an equivalent model in the subsequent version. (For estimators in the sklearn package, we issue a warning when this unpickling is attempted, even if it may happen to work.) See

[Security & Maintainability Limitations](model_persistence.html#persistence-limitations).`utils.estimator_checks.check_estimator`

We provide limited backwards compatibility assurances for the estimator checks: we may add extra requirements on estimators tested with this function, usually when these were informally assumed but not formally tested.


Despite this informal contract with our users, the software is provided as is, as stated in the license. When a release inadvertently introduces changes that are not backward compatible, these are known as software regressions.

- callable
[#](#term-callable) A function, class or an object which implements the

`__call__`

method; anything that returns True when the argument of[callable()](https://docs.python.org/3/library/functions.html#callable).- categorical feature
[#](#term-categorical-feature) A categorical or nominal

[feature](#term-feature)is one that has a finite set of discrete values across the population of data. These are commonly represented as columns of integers or strings. Strings will be rejected by most scikit-learn estimators, and integers will be treated as ordinal or count-valued. For the use with most estimators, categorical variables should be one-hot encoded. Notable exceptions include tree-based models such as random forests and gradient boosting models that often work better and faster with integer-coded categorical variables.helps encoding string-valued categorical features as ordinal integers, and`OrdinalEncoder`

can be used to one-hot encode categorical features. See also`OneHotEncoder`

[Encoding categorical features](modules/preprocessing.html#preprocessing-categorical-features)and the[categorical-encoding](https://github.com/scikit-learn-contrib/category_encoders)package for tools related to encoding categorical features.- clone
[#](#term-clone) - cloned
[#](#term-cloned) To copy an

[estimator instance](#term-estimator-instance)and create a new one with identical[parameters](#term-parameters), but without any fitted[attributes](#term-attributes), using.`clone`

When

`fit`

is called, a[meta-estimator](#term-meta-estimator)usually clones a wrapped estimator instance before fitting the cloned instance. (Exceptions, for legacy reasons, includeand`Pipeline`

.)`FeatureUnion`

If the estimator’s

`random_state`

parameter is an integer (or if the estimator doesn’t have a`random_state`

parameter), an*exact clone*is returned: the clone and the original estimator will give the exact same results. Otherwise,*statistical clone*is returned: the clone might yield different results from the original estimator. More details can be found in[Controlling randomness](common_pitfalls.html#randomness).- common tests
[#](#term-common-tests) This refers to the tests run on almost every estimator class in Scikit-learn to check they comply with basic API conventions. They are available for external use through

or`utils.estimator_checks.check_estimator`

, with most of the implementation in`utils.estimator_checks.parametrize_with_checks`

`sklearn/utils/estimator_checks.py`

.Note: Some exceptions to the common testing regime are currently hard-coded into the library, but we hope to replace this by marking exceptional behaviours on the estimator using semantic

[estimator tags](#term-estimator-tags).- cross-fitting
[#](#term-cross-fitting) - cross fitting
[#](#term-0) A resampling method that iteratively partitions data into mutually exclusive subsets to fit two stages. During the first stage, the mutually exclusive subsets enable predictions or transformations to be computed on data not seen during training. The computed data is then used in the second stage. The objective is to avoid having any overfitting in the first stage introduce bias into the input data distribution of the second stage. For examples of its use, see:

,`TargetEncoder`

,`StackingClassifier`

and`StackingRegressor`

.`CalibratedClassifierCV`

- cross-validation
[#](#term-cross-validation) - cross validation
[#](#term-1) A resampling method that iteratively partitions data into mutually exclusive ‘train’ and ‘test’ subsets so model performance can be evaluated on unseen data. This conserves data as avoids the need to hold out a ‘validation’ dataset and accounts for variability as multiple rounds of cross validation are generally performed. See

[User Guide](modules/cross_validation.html#cross-validation)for more details.- deprecation
[#](#term-deprecation) We use deprecation to slowly violate our

[backwards compatibility](#term-backwards-compatibility)assurances, usually to:change the default value of a parameter; or

remove a parameter, attribute, method, class, etc.


We will ordinarily issue a warning when a deprecated element is used, although there may be limitations to this. For instance, we will raise a warning when someone sets a parameter that has been deprecated, but may not when they access that parameter’s attribute on the estimator instance.

See the

[Contributors’ Guide](developers/contributing.html#contributing-deprecation).- dimensionality
[#](#term-dimensionality) May be used to refer to the number of

[features](#term-features)(i.e.[n_features](#term-n_features)), or columns in a 2d feature matrix. Dimensions are, however, also used to refer to the length of a NumPy array’s shape, distinguishing a 1d array from a 2d matrix.- docstring
[#](#term-docstring) The embedded documentation for a module, class, function, etc., usually in code as a string at the beginning of the object’s definition, and accessible as the object’s

`__doc__`

attribute.We try to adhere to

[PEP257](https://www.python.org/dev/peps/pep-0257/), and follow[NumpyDoc conventions](https://numpydoc.readthedocs.io/en/latest/format.html).- double underscore
[#](#term-double-underscore) - double underscore notation
[#](#term-double-underscore-notation) When specifying parameter names for nested estimators,

`__`

may be used to separate between parent and child in some contexts. The most common use is when setting parameters through a meta-estimator with[set_params](#term-set_params)and hence in specifying a search grid in[parameter search](modules/grid_search.html#grid-search). See[parameter](#term-parameter). It is also used infor passing`pipeline.Pipeline.fit`

[sample properties](#term-sample-properties)to the`fit`

methods of estimators in the pipeline.- dtype
[#](#term-dtype) - data type
[#](#term-data-type) NumPy arrays assume a homogeneous data type throughout, available in the

`.dtype`

attribute of an array (or sparse matrix). We generally assume simple data types for scikit-learn data: float or integer. We may support object or string data types for arrays before encoding or vectorizing. Our estimators do not work with struct arrays, for instance.Our documentation can sometimes give information about the dtype precision, e.g.

`np.int32`

,`np.int64`

, etc. When the precision is provided, it refers to the NumPy dtype. If an arbitrary precision is used, the documentation will refer to dtype`integer`

or`floating`

. Note that in this case, the precision can be platform dependent. The`numeric`

dtype refers to accepting both`integer`

and`floating`

.When it comes to choosing between 64-bit dtype (i.e.

`np.float64`

and`np.int64`

) and 32-bit dtype (i.e.`np.float32`

and`np.int32`

), it boils down to a trade-off between efficiency and precision. The 64-bit types offer more accurate results due to their lower floating-point error, but demand more computational resources, resulting in slower operations and increased memory usage. In contrast, 32-bit types promise enhanced operation speed and reduced memory consumption, but introduce a larger floating-point error. The efficiency improvements are dependent on lower level optimization such as vectorization, single instruction multiple dispatch (SIMD), or cache optimization but crucially on the compatibility of the algorithm in use.Specifically, the choice of precision should account for whether the employed algorithm can effectively leverage

`np.float32`

. Some algorithms, especially certain minimization methods, are exclusively coded for`np.float64`

, meaning that even if`np.float32`

is passed, it triggers an automatic conversion back to`np.float64`

. This not only negates the intended computational savings but also introduces additional overhead, making operations with`np.float32`

unexpectedly slower and more memory-intensive due to this extra conversion step.- duck typing
[#](#term-duck-typing) We try to apply

[duck typing](https://en.wikipedia.org/wiki/Duck_typing)to determine how to handle some input values (e.g. checking whether a given estimator is a classifier). That is, we avoid using`isinstance`

where possible, and rely on the presence or absence of attributes to determine an object’s behaviour. Some nuance is required when following this approach:For some estimators, an attribute may only be available once it is

[fitted](#term-fitted). For instance, we cannot a priori determine if[predict_proba](#term-predict_proba)is available in a grid search where the grid includes alternating between a probabilistic and a non-probabilistic predictor in the final step of the pipeline. In the following, we can only determine if`clf`

is probabilistic after fitting it on some data:>>> from sklearn.model_selection import GridSearchCV >>> from sklearn.linear_model import SGDClassifier >>> clf = GridSearchCV(SGDClassifier(), ... param_grid={'loss': ['log_loss', 'hinge']})

This means that we can only check for duck-typed attributes after fitting, and that we must be careful to make

[meta-estimators](#term-meta-estimators)only present attributes according to the state of the underlying estimator after fitting.Checking if an attribute is present (using

`hasattr`

) is in general just as expensive as getting the attribute (`getattr`

or dot notation). In some cases, getting the attribute may indeed be expensive (e.g. for some implementations of[feature_importances_](#term-feature_importances_), which may suggest this is an API design flaw). So code which does`hasattr`

followed by`getattr`

should be avoided;`getattr`

within a try-except block is preferred.For determining some aspects of an estimator’s expectations or support for some feature, we use

[estimator tags](#term-estimator-tags)instead of duck typing.

- early stopping
[#](#term-early-stopping) This consists in stopping an iterative optimization method before the convergence of the training loss, to avoid over-fitting. This is generally done by monitoring the generalization score on a validation set. When available, it is activated through the parameter

`early_stopping`

or by setting a positive[n_iter_no_change](#term-n_iter_no_change).- estimator instance
[#](#term-estimator-instance) We sometimes use this terminology to distinguish an

[estimator](#term-estimator)class from a constructed instance. For example, in the following,`cls`

is an estimator class, while`est1`

and`est2`

are instances:cls = RandomForestClassifier est1 = cls() est2 = RandomForestClassifier()

- examples
[#](#term-examples) We try to give examples of basic usage for most functions and classes in the API:

as doctests in their docstrings (i.e. within the

`sklearn/`

library code itself).as examples in the

[example gallery](auto_examples/index.html#general-examples)rendered (using[sphinx-gallery](https://sphinx-gallery.readthedocs.io/)) from scripts in the`examples/`

directory, exemplifying key features or parameters of the estimator/function. These should also be referenced from the User Guide.sometimes in the

[User Guide](user_guide.html#user-guide)(built from`doc/`

) alongside a technical description of the estimator.

- experimental
[#](#term-experimental) An experimental tool is already usable but its public API, such as default parameter values or fitted attributes, is still subject to change in future versions without the usual

[deprecation](#term-deprecation)warning policy.- evaluation metric
[#](#term-evaluation-metric) - evaluation metrics
[#](#term-evaluation-metrics) Evaluation metrics give a measure of how well a model performs. We may use this term specifically to refer to the functions in

(disregarding`metrics`

), as distinct from the`pairwise`

[score](#term-score)method and the[scoring](#term-scoring)API used in cross validation. See[Metrics and scoring: quantifying the quality of predictions](modules/model_evaluation.html#model-evaluation).These functions usually accept a ground truth (or the raw data where the metric evaluates clustering without a ground truth) and a prediction, be it the output of

[predict](#term-predict)(`y_pred`

), of[predict_proba](#term-predict_proba)(`y_proba`

), or of an arbitrary score function including[decision_function](#term-decision_function)(`y_score`

). Functions are usually named to end with`_score`

if a greater score indicates a better model, and`_loss`

if a lesser score indicates a better model. This diversity of interface motivates the scoring API.Note that some estimators can calculate metrics that are not included in

and are estimator-specific, notably model likelihoods.`metrics`

Estimator tags describe certain capabilities of an estimator. This would enable some runtime behaviors based on estimator inspection, but it also allows each estimator to be tested for appropriate invariances while being excepted from other

[common tests](#term-common-tests).Some aspects of estimator tags are currently determined through the

[duck typing](#term-duck-typing)of methods like`predict_proba`

and through some special attributes on estimator objects:For more detailed info, see

[Estimator Tags](developers/develop.html#estimator-tags).- feature
[#](#term-feature) - features
[#](#term-features) - feature vector
[#](#term-feature-vector) In the abstract, a feature is a function (in its mathematical sense) mapping a sampled object to a numeric or categorical quantity. “Feature” is also commonly used to refer to these quantities, being the individual elements of a vector representing a sample. In a data matrix, features are represented as columns: each column contains the result of applying a feature function to a set of samples.

Elsewhere features are known as attributes, predictors, regressors, or independent variables.

Nearly all estimators in scikit-learn assume that features are numeric, finite and not missing, even when they have semantically distinct domains and distributions (categorical, ordinal, count-valued, real-valued, interval). See also

[categorical feature](#term-categorical-feature)and[missing values](#term-missing-values).`n_features`

indicates the number of features in a dataset.- fitting
[#](#term-fitting) Calling

[fit](#term-fit)(or[fit_transform](#term-fit_transform),[fit_predict](#term-fit_predict), etc.) on an estimator.- fitted
[#](#term-fitted) The state of an estimator after

[fitting](#term-fitting).There is no conventional procedure for checking if an estimator is fitted. However, an estimator that is not fitted:

should raise

when a prediction method (`exceptions.NotFittedError`

[predict](#term-predict),[transform](#term-transform), etc.) is called. (is used internally for this purpose.)`utils.validation.check_is_fitted`

should not have any

[attributes](#term-attributes)beginning with an alphabetic character and ending with an underscore. (Note that a descriptor for the attribute may still be present on the class, but hasattr should return False)

- function
[#](#term-function) We provide ad hoc function interfaces for many algorithms, while

[estimator](#term-estimator)classes provide a more consistent interface.In particular, Scikit-learn may provide a function interface that fits a model to some data and returns the learnt model parameters, as in

. For transductive models, this also returns the embedding or cluster labels, as in`linear_model.enet_path`

or`manifold.spectral_embedding`

. Many preprocessing transformers also provide a function interface, akin to calling`cluster.dbscan`

[fit_transform](#term-fit_transform), as in. Users should be careful to avoid`preprocessing.maxabs_scale`

[data leakage](#term-data-leakage)when making use of these`fit_transform`

-equivalent functions.We do not have a strict policy about when to or when not to provide function forms of estimators, but maintainers should consider consistency with existing interfaces, and whether providing a function would lead users astray from best practices (as regards data leakage, etc.)

- gallery
[#](#term-gallery) See

[examples](#term-examples).- hyperparameter
[#](#term-hyperparameter) - hyper-parameter
[#](#term-hyper-parameter) See

[parameter](#term-parameter).- impute
[#](#term-impute) - imputation
[#](#term-imputation) Most machine learning algorithms require that their inputs have no

[missing values](#term-missing-values), and will not work if this requirement is violated. Algorithms that attempt to fill in (or impute) missing values are referred to as imputation algorithms.- indexable
[#](#term-indexable) An

[array-like](#term-array-like),[sparse matrix](#term-sparse-matrix), pandas DataFrame or sequence (usually a list).- induction
[#](#term-induction) - inductive
[#](#term-inductive) Inductive (contrasted with

[transductive](#term-transductive)) machine learning builds a model of some data that can then be applied to new instances. Most estimators in Scikit-learn are inductive, having[predict](#term-predict)and/or[transform](#term-transform)methods.- joblib
[#](#term-joblib) A Python library (

[https://joblib.readthedocs.io](https://joblib.readthedocs.io)) used in Scikit-learn to facilitate simple parallelism and caching. Joblib is oriented towards efficiently working with numpy arrays, such as through use of[memory mapping](#term-memory-mapping). See[Parallelism](computing/parallelism.html#parallelism)for more information.- label indicator matrix
[#](#term-label-indicator-matrix) - multilabel indicator matrix
[#](#term-multilabel-indicator-matrix) - multilabel indicator matrices
[#](#term-multilabel-indicator-matrices) The format used to represent multilabel data, where each row of a 2d array or sparse matrix corresponds to a sample, each column corresponds to a class, and each element is 1 if the sample is labeled with the class and 0 if not.

- leakage
[#](#term-leakage) - data leakage
[#](#term-data-leakage) A problem in cross validation where generalization performance can be over-estimated since knowledge of the test data was inadvertently included in training a model. This is a risk, for instance, when applying a

[transformer](#term-transformer)to the entirety of a dataset rather than each training portion in a cross validation split.We aim to provide interfaces (such as

and`pipeline`

) that shield the user from data leakage.`model_selection`

- memmapping
[#](#term-memmapping) - memory map
[#](#term-memory-map) - memory mapping
[#](#term-memory-mapping) A memory efficiency strategy that keeps data on disk rather than copying it into main memory. Memory maps can be created for arrays that can be read, written, or both, using

. When using`numpy.memmap`

[joblib](#term-joblib)to parallelize operations in Scikit-learn, it may automatically memmap large arrays to reduce memory duplication overhead in multiprocessing.- missing values
[#](#term-missing-values) Most Scikit-learn estimators do not work with missing values. When they do (e.g. in

), NaN is the preferred representation of missing values in float arrays. If the array has integer dtype, NaN cannot be represented. For this reason, we support specifying another`impute.SimpleImputer`

`missing_values`

value when[imputation](#term-imputation)or learning can be performed in integer space.[Unlabeled data](#term-unlabeled-data)is a special case of missing values in the[target](#term-target).`n_features`

[#](#term-n_features)The number of

[features](#term-features).`n_outputs`

[#](#term-n_outputs)`n_samples`

[#](#term-n_samples)The number of

[samples](#term-samples).`n_targets`

[#](#term-n_targets)Synonym for

[n_outputs](#term-n_outputs).- narrative docs
[#](#term-narrative-docs) - narrative documentation
[#](#term-narrative-documentation) An alias for

[User Guide](user_guide.html#user-guide), i.e. documentation written in`doc/modules/`

. Unlike the[API reference](api/index.html#api-ref)provided through docstrings, the User Guide aims to:group tools provided by Scikit-learn together thematically or in terms of usage;

motivate why someone would use each particular tool, often through comparison;

provide both intuitive and technical descriptions of tools;

provide or link to

[examples](#term-examples)of using key features of a tool.

- np
[#](#term-np) A shorthand for Numpy due to the conventional import statement:

import numpy as np

- online learning
[#](#term-online-learning) Where a model is iteratively updated by receiving each batch of ground truth

[targets](#term-targets)soon after making predictions on corresponding batch of data. Intrinsically, the model must be usable for prediction after each batch. See[partial_fit](#term-partial_fit).- out-of-core
[#](#term-out-of-core) An efficiency strategy where not all the data is stored in main memory at once, usually by performing learning on batches of data. See

[partial_fit](#term-partial_fit).- outputs
[#](#term-outputs) Individual scalar/categorical variables per sample in the

[target](#term-target). For example, in multilabel classification each possible label corresponds to a binary output. Also called*responses*,*tasks*or*targets*. See[multiclass multioutput](#term-multiclass-multioutput)and[continuous multioutput](#term-continuous-multioutput).- pair
[#](#term-pair) A tuple of length two.

- parameter
[#](#term-parameter) - parameters
[#](#term-parameters) - param
[#](#term-param) - params
[#](#term-params) We mostly use

*parameter*to refer to the aspects of an estimator that can be specified in its construction. For example,`max_depth`

and`random_state`

are parameters of. Parameters to an estimator’s constructor are stored unmodified as attributes on the estimator instance, and conventionally start with an alphabetic character and end with an alphanumeric character. Each estimator’s constructor parameters are described in the estimator’s docstring.`RandomForestClassifier`

We do not use parameters in the statistical sense, where parameters are values that specify a model and can be estimated from data. What we call parameters might be what statisticians call hyperparameters to the model: aspects for configuring model structure that are often not directly learnt from data. However, our parameters are also used to prescribe modeling operations that do not affect the learnt model, such as

[n_jobs](#term-n_jobs)for controlling parallelism.When talking about the parameters of a

[meta-estimator](#term-meta-estimator), we may also be including the parameters of the estimators wrapped by the meta-estimator. Ordinarily, these nested parameters are denoted by using a[double underscore](#term-double-underscore)(`__`

) to separate between the estimator-as-parameter and its parameter. Thus`clf = BaggingClassifier(estimator=DecisionTreeClassifier(max_depth=3))`

has a deep parameter`estimator__max_depth`

with value`3`

, which is accessible with`clf.estimator.max_depth`

or`clf.get_params()['estimator__max_depth']`

.The list of parameters and their current values can be retrieved from an

[estimator instance](#term-estimator-instance)using its[get_params](#term-get_params)method.Between construction and fitting, parameters may be modified using

[set_params](#term-set_params). To enable this, parameters are not ordinarily validated or altered when the estimator is constructed, or when each parameter is set. Parameter validation is performed when[fit](#term-fit)is called.Common parameters are listed

[below](#glossary-parameters).- pairwise metric
[#](#term-pairwise-metric) - pairwise metrics
[#](#term-pairwise-metrics) In its broad sense, a pairwise metric defines a function for measuring similarity or dissimilarity between two samples (with each ordinarily represented as a

[feature vector](#term-feature-vector)). We particularly provide implementations of distance metrics (as well as improper metrics like Cosine Distance) through, and of kernel functions (a constrained class of similarity functions) in`metrics.pairwise_distances`

. These can compute pairwise distance matrices that are symmetric and hence store data redundantly.`metrics.pairwise.pairwise_kernels`

See also

[precomputed](#term-precomputed)and[metric](#term-metric).Note that for most distance metrics, we rely on implementations from

, but may reimplement for efficiency in our context. The`scipy.spatial.distance`

interface is used to implement distance metrics for integration with efficient neighbors search.`metrics.DistanceMetric`

- pd
[#](#term-pd) A shorthand for

[Pandas](https://pandas.pydata.org)due to the conventional import statement:import pandas as pd

- precomputed
[#](#term-precomputed) Where algorithms rely on

[pairwise metrics](#term-pairwise-metrics), and can be computed from pairwise metrics alone, we often allow the user to specify that the[X](#term-X)provided is already in the pairwise (dis)similarity space, rather than in a feature space. That is, when passed to[fit](#term-fit), it is a square, symmetric matrix, with each vector indicating (dis)similarity to every sample, and when passed to prediction/transformation methods, each row corresponds to a testing sample and each column to a training sample.Use of precomputed X is usually indicated by setting a

`metric`

,`affinity`

or`kernel`

parameter to the string ‘precomputed’. If this is the case, then the estimator should set the`pairwise`

estimator tag as True.- rectangular
[#](#term-rectangular) Data that can be represented as a matrix with

[samples](#term-samples)on the first axis and a fixed, finite set of[features](#term-features)on the second is called rectangular.This term excludes samples with non-vectorial structures, such as text, an image of arbitrary size, a time series of arbitrary length, a set of vectors, etc. The purpose of a

[vectorizer](#term-vectorizer)is to produce rectangular forms of such data.- sample
[#](#term-sample) - samples
[#](#term-samples) We usually use this term as a noun to indicate a single feature vector. Elsewhere a sample is called an instance, data point, or observation.

`n_samples`

indicates the number of samples in a dataset, being the number of rows in a data array[X](#term-X). Note that this definition is standard in machine learning and deviates from statistics where it means*a set of individuals or objects collected or selected*.- sample property
[#](#term-sample-property) - sample properties
[#](#term-sample-properties) A sample property is data for each sample (e.g. an array of length n_samples) passed to an estimator method or a similar function, alongside but distinct from the

[features](#term-features)(`X`

) and[target](#term-target)(`y`

). The most prominent example is[sample_weight](#term-sample_weight); see others at[Data and sample properties](#glossary-sample-props).As of version 0.19 we do not have a consistent approach to handling sample properties and their routing in

[meta-estimators](#term-meta-estimators), though a`fit_params`

parameter is often used.- scikit-learn-contrib
[#](#term-scikit-learn-contrib) A venue for publishing Scikit-learn-compatible libraries that are broadly authorized by the core developers and the contrib community, but not maintained by the core developer team. See

[https://scikit-learn-contrib.github.io](https://scikit-learn-contrib.github.io).- scikit-learn enhancement proposals
[#](#term-scikit-learn-enhancement-proposals) - SLEP
[#](#term-SLEP) - SLEPs
[#](#term-SLEPs) Changes to the API principles and changes to dependencies or supported versions happen via a

[SLEP](governance.html#slep)and follows the decision-making process outlined in[Scikit-learn governance and decision-making](governance.html#governance). For all votes, a proposal must have been made public and discussed before the vote. Such a proposal must be a consolidated document, in the form of a “Scikit-Learn Enhancement Proposal” (SLEP), rather than a long discussion on an issue. A SLEP must be submitted as a pull-request to[enhancement proposals](https://scikit-learn-enhancement-proposals.readthedocs.io)using the[SLEP template](https://scikit-learn-enhancement-proposals.readthedocs.io/en/latest/slep_template.html).- semi-supervised
[#](#term-semi-supervised) - semi-supervised learning
[#](#term-semi-supervised-learning) - semisupervised
[#](#term-semisupervised) Learning where the expected prediction (label or ground truth) is only available for some samples provided as training data when

[fitting](#term-fitting)the model. We conventionally apply the label`-1`

to[unlabeled](#term-unlabeled)samples in semi-supervised classification.- sparse matrix
[#](#term-sparse-matrix) - sparse graph
[#](#term-sparse-graph) A representation of two-dimensional numeric data that is more memory efficient than the corresponding dense numpy array where almost all elements are zero. We use the

framework, which provides several underlying sparse data representations, or`scipy.sparse`

*formats*. Some formats are more efficient than others for particular tasks, and when a particular format provides especial benefit, we try to document this fact in Scikit-learn parameter descriptions.Some sparse matrix formats (notably CSR, CSC, COO and LIL) distinguish between

*implicit*and*explicit*zeros. Explicit zeros are stored (i.e. they consume memory in a`data`

array) in the data structure, while implicit zeros correspond to every element not otherwise defined in explicit storage.Two semantics for sparse matrices are used in Scikit-learn:

- matrix semantics
The sparse matrix is interpreted as an array with implicit and explicit zeros being interpreted as the number 0. This is the interpretation most often adopted, e.g. when sparse matrices are used for feature matrices or

[multilabel indicator matrices](#term-multilabel-indicator-matrices).- graph semantics
As with

, explicit zeros are interpreted as the number 0, but implicit zeros indicate a masked or absent value, such as the absence of an edge between two vertices of a graph, where an explicit value indicates an edge’s weight. This interpretation is adopted to represent connectivity in clustering, in representations of nearest neighborhoods (e.g.`scipy.sparse.csgraph`

), and for precomputed distance representation where only distances in the neighborhood of each point are required.`neighbors.kneighbors_graph`


When working with sparse matrices, we assume that it is sparse for a good reason, and avoid writing code that densifies a user-provided sparse matrix, instead maintaining sparsity or raising an error if not possible (i.e. if an estimator does not / cannot support sparse matrices).

- stateless
[#](#term-stateless) An estimator is stateless if it does not store any information that is obtained during

[fit](#term-fit). This information can be either parameters learned during[fit](#term-fit)or statistics computed from the training data. An estimator is stateless if it has no[attributes](#term-attributes)apart from ones set in`__init__`

. Calling[fit](#term-fit)for these estimators will only validate the public[attributes](#term-attributes)passed in`__init__`

.- supervised
[#](#term-supervised) - supervised learning
[#](#term-supervised-learning) Learning where the expected prediction (label or ground truth) is available for each sample when

[fitting](#term-fitting)the model, provided as[y](#term-y). This is the approach taken in a[classifier](#term-classifier)or[regressor](#term-regressor)among other estimators.- target
[#](#term-target) - targets
[#](#term-targets) The

*dependent variable*in[supervised](#term-supervised)(and[semisupervised](#term-semisupervised)) learning, passed as[y](#term-y)to an estimator’s[fit](#term-fit)method. Also known as*dependent variable*,*outcome variable*,*response variable*,*ground truth*or*label*. Scikit-learn works with targets that have minimal structure: a class from a finite set, a finite real-valued number, multiple classes, or multiple numbers. See[Target Types](#glossary-target-types).- transduction
[#](#term-transduction) - transductive
[#](#term-transductive) A transductive (contrasted with

[inductive](#term-inductive)) machine learning method is designed to model a specific dataset, but not to apply that model to unseen data. Examples include,`manifold.TSNE`

and`cluster.AgglomerativeClustering`

.`neighbors.LocalOutlierFactor`

- unlabeled
[#](#term-unlabeled) - unlabeled data
[#](#term-unlabeled-data) Samples with an unknown ground truth when fitting; equivalently,

[missing values](#term-missing-values)in the[target](#term-target). See also[semisupervised](#term-semisupervised)and[unsupervised](#term-unsupervised)learning.- unsupervised
[#](#term-unsupervised) - unsupervised learning
[#](#term-unsupervised-learning) Learning where the expected prediction (label or ground truth) is not available for each sample when

[fitting](#term-fitting)the model, as in[clusterers](#term-clusterers)and[outlier detectors](#term-outlier-detectors). Unsupervised estimators ignore any[y](#term-y)passed to[fit](#term-fit).

## Class APIs and Estimator Types[#](#class-apis-and-estimator-types)

- classifier
[#](#term-classifier) - classifiers
[#](#term-classifiers) A

[supervised](#term-supervised)(or[semi-supervised](#term-semi-supervised))[predictor](#term-predictor)with a finite set of discrete possible output values.A classifier supports modeling some of

[binary](#term-binary),[multiclass](#term-multiclass),[multilabel](#term-multilabel), or[multiclass multioutput](#term-multiclass-multioutput)targets. Within scikit-learn, all classifiers support multi-class classification, defaulting to using a one-vs-rest strategy over the binary classification problem.Classifiers must store a

[classes_](#term-classes_)attribute after fitting, and inherit from, which sets their corresponding`base.ClassifierMixin`

[estimator tags](#term-estimator-tags)correctly.A classifier can be distinguished from other estimators with

.`is_classifier`

A classifier must implement:

It may also be appropriate to implement

[decision_function](#term-decision_function),[predict_proba](#term-predict_proba)and[predict_log_proba](#term-predict_log_proba).- clusterer
[#](#term-clusterer) - clusterers
[#](#term-clusterers) A

[unsupervised](#term-unsupervised)[predictor](#term-predictor)with a finite set of discrete output values.A clusterer usually stores

[labels_](#term-labels_)after fitting, and must do so if it is[transductive](#term-transductive).A clusterer must implement:

- density estimator
[#](#term-density-estimator) An

[unsupervised](#term-unsupervised)estimation of input probability density function. Commonly used techniques are:[Kernel Density Estimation](modules/density.html#kernel-density)- uses a kernel function, controlled by the bandwidth parameter to represent density;[Gaussian mixture](modules/mixture.html#mixture)- uses mixture of Gaussian models to represent density.

- estimator
[#](#term-estimator) - estimators
[#](#term-estimators) An object which manages the estimation and decoding of a model. The model is estimated as a deterministic function of:

[parameters](#term-parameters)provided in object construction or with[set_params](#term-set_params);the global

random state if the estimator’s`numpy.random`

[random_state](#term-random_state)parameter is set to None; andany data or

[sample properties](#term-sample-properties)passed to the most recent call to[fit](#term-fit),[fit_transform](#term-fit_transform)or[fit_predict](#term-fit_predict), or data similarly passed in a sequence of calls to[partial_fit](#term-partial_fit).

The estimated model is stored in public and private

[attributes](#term-attributes)on the estimator instance, facilitating decoding through prediction and transformation methods.Estimators must provide a

[fit](#term-fit)method, and should provide[set_params](#term-set_params)and[get_params](#term-get_params), although these are usually provided by inheritance from.`base.BaseEstimator`

The core functionality of some estimators may also be available as a

[function](#term-function).- feature extractor
[#](#term-feature-extractor) - feature extractors
[#](#term-feature-extractors) A

[transformer](#term-transformer)which takes input where each sample is not represented as an[array-like](#term-array-like)object of fixed length, and produces an[array-like](#term-array-like)object of[features](#term-features)for each sample (and thus a 2-dimensional array-like for a set of samples). In other words, it (lossily) maps a non-rectangular data representation into[rectangular](#term-rectangular)data.Feature extractors must implement at least:

- meta-estimator
[#](#term-meta-estimator) - meta-estimators
[#](#term-meta-estimators) - metaestimator
[#](#term-metaestimator) - metaestimators
[#](#term-metaestimators) An

[estimator](#term-estimator)which takes another estimator as a parameter. Examples include,`pipeline.Pipeline`

,`model_selection.GridSearchCV`

and`feature_selection.SelectFromModel`

.`ensemble.BaggingClassifier`

In a meta-estimator’s

[fit](#term-fit)method, any contained estimators should be[cloned](#term-cloned)before they are fit.An exception to this is that an estimator may explicitly document that it accepts a pre-fitted estimator (e.g. using

`prefit=True`

in). One known issue with this is that the pre-fitted estimator will lose its model if the meta-estimator is cloned. A meta-estimator should have`feature_selection.SelectFromModel`

`fit`

called before prediction, even if all contained estimators are pre-fitted.In cases where a meta-estimator’s primary behaviors (e.g.

[predict](#term-predict)or[transform](#term-transform)implementation) are functions of prediction/transformation methods of the provided*base estimator*(or multiple base estimators), a meta-estimator should provide at least the standard methods provided by the base estimator. It may not be possible to identify which methods are provided by the underlying estimator until the meta-estimator has been[fitted](#term-fitted)(see also[duck typing](#term-duck-typing)), for whichmay help. It should also provide (or modify) the`utils.metaestimators.available_if`

[estimator tags](#term-estimator-tags)and[classes_](#term-classes_)attribute provided by the base estimator.Meta-estimators should be careful to validate data as minimally as possible before passing it to an underlying estimator. This saves computation time, and may, for instance, allow the underlying estimator to easily work with data that is not

[rectangular](#term-rectangular).- outlier detector
[#](#term-outlier-detector) - outlier detectors
[#](#term-outlier-detectors) An

[unsupervised](#term-unsupervised)binary[predictor](#term-predictor)which models the distinction between core and outlying samples.Outlier detectors must implement:

Inductive outlier detectors may also implement

[decision_function](#term-decision_function)to give a normalized inlier score where outliers have score below 0.[score_samples](#term-score_samples)may provide an unnormalized score per sample.- predictor
[#](#term-predictor) - predictors
[#](#term-predictors) An

[estimator](#term-estimator)supporting[predict](#term-predict)and/or[fit_predict](#term-fit_predict). This encompasses[classifier](#term-classifier),[regressor](#term-regressor),[outlier detector](#term-outlier-detector)and[clusterer](#term-clusterer).In statistics, “predictors” refers to

[features](#term-features).- regressor
[#](#term-regressor) - regressors
[#](#term-regressors) A

[supervised](#term-supervised)(or[semi-supervised](#term-semi-supervised))[predictor](#term-predictor)with[continuous](#term-continuous)output values.Regressors inherit from

, which sets their`base.RegressorMixin`

[estimator tags](#term-estimator-tags)correctly.A regressor can be distinguished from other estimators with

.`is_regressor`

A regressor must implement:

- transformer
[#](#term-transformer) - transformers
[#](#term-transformers) An estimator supporting

[transform](#term-transform)and/or[fit_transform](#term-fit_transform). A purely[transductive](#term-transductive)transformer, such as, may not implement`manifold.TSNE`

`transform`

.- vectorizer
[#](#term-vectorizer) - vectorizers
[#](#term-vectorizers) See

[feature extractor](#term-feature-extractor).

There are further APIs specifically related to a small family of estimators, such as:

- cross-validation splitter
[#](#term-cross-validation-splitter) - CV splitter
[#](#term-CV-splitter) - cross-validation generator
[#](#term-cross-validation-generator) A non-estimator family of classes used to split a dataset into a sequence of train and test portions (see

[Cross-validation: evaluating estimator performance](modules/cross_validation.html#cross-validation)), by providing[split](#term-split)and[get_n_splits](#term-get_n_splits)methods. Note that unlike estimators, these do not have[fit](#term-fit)methods and do not provide[set_params](#term-set_params)or[get_params](#term-get_params). Parameter validation may be performed in`__init__`

.- cross-validation estimator
[#](#term-cross-validation-estimator) An estimator that has built-in cross-validation capabilities to automatically select the best hyper-parameters (see the

[User Guide](modules/grid_search.html#grid-search)). Some example of cross-validation estimators areand`ElasticNetCV`

. Cross-validation estimators are named`LogisticRegressionCV`

`EstimatorCV`

and tend to be roughly equivalent to`GridSearchCV(Estimator(), ...)`

. The advantage of using a cross-validation estimator over the canonical[estimator](#term-estimator)class along with[grid search](modules/grid_search.html#grid-search)is that they can take advantage of warm-starting by reusing precomputed results in the previous steps of the cross-validation process. This generally leads to speed improvements. An exception is theclass, which can instead perform efficient Leave-One-Out (LOO) CV. By default, all these estimators, apart from`RidgeCV`

with an LOO-CV, will be refitted on the full training dataset after finding the best combination of hyper-parameters.`RidgeCV`

- scorer
[#](#term-scorer) A non-estimator callable object which evaluates an estimator on given test data, returning a number. Unlike

[evaluation metrics](#term-evaluation-metrics), a greater returned number must correspond with a*better*score. See[The scoring parameter: defining model evaluation rules](modules/model_evaluation.html#scoring-parameter).

Further examples:

`tree.Criterion`


## Metadata Routing[#](#metadata-routing)

- consumer
[#](#term-consumer) An object which consumes

[metadata](#term-metadata). This object is usually an[estimator](#term-estimator), a[scorer](#term-scorer), or a[CV splitter](#term-CV-splitter). Consuming metadata means using it in calculations, e.g. using[sample_weight](#term-sample_weight)to calculate a certain type of score. Being a consumer doesn’t mean that the object always receives a certain metadata, rather it means it can use it if it is provided.- metadata
[#](#term-metadata) Data which is related to the given

[X](#term-X)and[y](#term-y)data, but is not directly a part of the data, e.g.[sample_weight](#term-sample_weight)or[groups](#term-groups), and is passed along to different objects and methods, e.g. to a[scorer](#term-scorer)or a[CV splitter](#term-CV-splitter).- router
[#](#term-router) An object which routes metadata to

[consumers](#term-consumer). This object is usually a[meta-estimator](#term-meta-estimator), e.g.or`Pipeline`

. Some routers can also be a consumer. This happens for example when a meta-estimator uses the given`GridSearchCV`

[groups](#term-groups), and it also passes it along to some of its sub-objects, such as a[CV splitter](#term-CV-splitter).

Please refer to [Metadata Routing User Guide](metadata_routing.html#metadata-routing) for more
information.

## Target Types[#](#target-types)

- binary
[#](#term-binary) A classification problem consisting of two classes. A binary target may be represented as for a

[multiclass](#term-multiclass)problem but with only two labels. A binary decision function is represented as a 1d array.Semantically, one class is often considered the “positive” class. Unless otherwise specified (e.g. using

[pos_label](#term-pos_label)in[evaluation metrics](#term-evaluation-metrics)), we consider the class label with the greater value (numerically or lexicographically) as the positive class: of labels [0, 1], 1 is the positive class; of [1, 2], 2 is the positive class; of [‘no’, ‘yes’], ‘yes’ is the positive class; of [‘no’, ‘YES’], ‘no’ is the positive class. This affects the output of[decision_function](#term-decision_function), for instance.Note that a dataset sampled from a multiclass

`y`

or a continuous`y`

may appear to be binary.will return ‘binary’ for binary input, or a similar array with only a single class present.`type_of_target`

- continuous
[#](#term-continuous) A regression problem where each sample’s target is a finite floating point number represented as a 1-dimensional array of floats (or sometimes ints).

will return ‘continuous’ for continuous input, but if the data is all integers, it will be identified as ‘multiclass’.`type_of_target`

- continuous multioutput
[#](#term-continuous-multioutput) - continuous multi-output
[#](#term-continuous-multi-output) - multioutput continuous
[#](#term-multioutput-continuous) - multi-output continuous
[#](#term-multi-output-continuous) A regression problem where each sample’s target consists of

`n_outputs`

[outputs](#term-outputs), each one a finite floating point number, for a fixed int`n_outputs > 1`

in a particular dataset.Continuous multioutput targets are represented as multiple

[continuous](#term-continuous)targets, horizontally stacked into an array of shape`(n_samples, n_outputs)`

.will return ‘continuous-multioutput’ for continuous multioutput input, but if the data is all integers, it will be identified as ‘multiclass-multioutput’.`type_of_target`

- multiclass
[#](#term-multiclass) - multi-class
[#](#term-multi-class) A classification problem consisting of more than two classes. A multiclass target may be represented as a 1-dimensional array of strings or integers. A 2d column vector of integers (i.e. a single output in

[multioutput](#term-multioutput)terms) is also accepted.We do not officially support other orderable, hashable objects as class labels, even if estimators may happen to work when given classification targets of such type.

For semi-supervised classification,

[unlabeled](#term-unlabeled)samples should have the special label -1 in`y`

.Within scikit-learn, all estimators supporting binary classification also support multiclass classification, using One-vs-Rest by default.

A

helps to canonicalize multiclass targets as integers.`preprocessing.LabelEncoder`

will return ‘multiclass’ for multiclass input. The user may also want to handle ‘binary’ input identically to ‘multiclass’.`type_of_target`

- multiclass multioutput
[#](#term-multiclass-multioutput) - multi-class multi-output
[#](#term-multi-class-multi-output) - multioutput multiclass
[#](#term-multioutput-multiclass) - multi-output multi-class
[#](#term-multi-output-multi-class) A classification problem where each sample’s target consists of

`n_outputs`

[outputs](#term-outputs), each a class label, for a fixed int`n_outputs > 1`

in a particular dataset. Each output has a fixed set of available classes, and each sample is labeled with a class for each output. An output may be binary or multiclass, and in the case where all outputs are binary, the target is[multilabel](#term-multilabel).Multiclass multioutput targets are represented as multiple

[multiclass](#term-multiclass)targets, horizontally stacked into an array of shape`(n_samples, n_outputs)`

.Note: For simplicity, we may not always support string class labels for multiclass multioutput, and integer class labels should be used.

provides estimators which estimate multi-output problems using multiple single-output estimators. This may not fully account for dependencies among the different outputs, which methods natively handling the multioutput case (e.g. decision trees, nearest neighbors, neural networks) may do better.`multioutput`

will return ‘multiclass-multioutput’ for multiclass multioutput input.`type_of_target`

- multilabel
[#](#term-multilabel) - multi-label
[#](#term-multi-label) A

[multiclass multioutput](#term-multiclass-multioutput)target where each output is[binary](#term-binary). This may be represented as a 2d (dense) array or sparse matrix of integers, such that each column is a separate binary target, where positive labels are indicated with 1 and negative labels are usually -1 or 0. Sparse multilabel targets are not supported everywhere that dense multilabel targets are supported.Semantically, a multilabel target can be thought of as a set of labels for each sample. While not used internally,

is provided as a utility to convert from a list of sets representation to a 2d array or sparse matrix. One-hot encoding a multiclass target with`preprocessing.MultiLabelBinarizer`

turns it into a multilabel problem.`preprocessing.LabelBinarizer`

will return ‘multilabel-indicator’ for multilabel input, whether sparse or dense.`type_of_target`

- multioutput
[#](#term-multioutput) - multi-output
[#](#term-multi-output) A target where each sample has multiple classification/regression labels. See

[multiclass multioutput](#term-multiclass-multioutput)and[continuous multioutput](#term-continuous-multioutput). We do not currently support modelling mixed classification and regression targets.

## Methods[#](#methods)

`decision_function`

[#](#term-decision_function)In a fitted

[classifier](#term-classifier)or[outlier detector](#term-outlier-detector), predicts a “soft” score for each sample in relation to each class, rather than the “hard” categorical prediction produced by[predict](#term-predict). Its input is usually only some observed data,[X](#term-X).If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`

Output conventions:

- binary classification
A 1-dimensional array, where values strictly greater than zero indicate the positive class (i.e. the last class in

[classes_](#term-classes_)).- multiclass classification
A 2-dimensional array, where the row-wise arg-maximum is the predicted class. Columns are ordered according to

[classes_](#term-classes_).- multilabel classification
Scikit-learn is inconsistent in its representation of

[multilabel](#term-multilabel)decision functions. It may be represented one of two ways:List of 2d arrays, each array of shape: (

`n_samples`

, 2), like in multiclass multioutput. List is of length`n_labels`

.Single 2d array of shape (

`n_samples`

,`n_labels`

), with each ‘column’ in the array corresponding to the individual binary classification decisions. This is identical to the multiclass classification format, though its semantics differ: it should be interpreted, like in the binary case, by thresholding at 0.

- multioutput classification
A list of 2d arrays, corresponding to each multiclass decision function.

- outlier detection
A 1-dimensional array, where a value greater than or equal to zero indicates an inlier.


`fit`

[#](#term-fit)The

`fit`

method is provided on every estimator. It usually takes some[samples](#term-samples)`X`

,[targets](#term-targets)`y`

if the model is supervised, and potentially other[sample properties](#term-sample-properties)such as[sample_weight](#term-sample_weight). It should:clear any prior

[attributes](#term-attributes)stored on the estimator, unless[warm_start](#term-warm_start)is used;validate and interpret any

[parameters](#term-parameters), ideally raising an error if invalid;validate the input data;

estimate and store model attributes from the estimated parameters and provided data; and

return the now

[fitted](#term-fitted)estimator to facilitate method chaining.

[Target Types](#glossary-target-types)describes possible formats for`y`

.`fit_predict`

[#](#term-fit_predict)Used especially for

[unsupervised](#term-unsupervised),[transductive](#term-transductive)estimators, this fits the model and returns the predictions (similar to[predict](#term-predict)) on the training data. In clusterers, these predictions are also stored in the[labels_](#term-labels_)attribute, and the output of`.fit_predict(X)`

is usually equivalent to`.fit(X).predict(X)`

. The parameters to`fit_predict`

are the same as those to`fit`

.`fit_transform`

[#](#term-fit_transform)A method on

[transformers](#term-transformers)which fits the estimator and returns the transformed training data. It takes parameters as in[fit](#term-fit)and its output should have the same shape as calling`.fit(X, ...).transform(X)`

. There are nonetheless rare cases where`.fit_transform(X, ...)`

and`.fit(X, ...).transform(X)`

do not return the same value, wherein training data needs to be handled differently (due to model blending in stacked ensembles, for instance; such cases should be clearly documented).[Transductive](#term-transductive)transformers may also provide`fit_transform`

but not[transform](#term-transform).One reason to implement

`fit_transform`

is that performing`fit`

and`transform`

separately would be less efficient than together.provides a default implementation, providing a consistent interface across transformers where`base.TransformerMixin`

`fit_transform`

is or is not specialized.In

[inductive](#term-inductive)learning – where the goal is to learn a generalized model that can be applied to new data – users should be careful not to apply`fit_transform`

to the entirety of a dataset (i.e. training and test data together) before further modelling, as this results in[data leakage](#term-data-leakage).`get_feature_names_out`

[#](#term-get_feature_names_out)Primarily for

[feature extractors](#term-feature-extractors), but also used for other transformers to provide string names for each column in the output of the estimator’s[transform](#term-transform)method. It outputs an array of strings and may take an array-like of strings as input, corresponding to the names of input columns from which output column names can be generated. If`input_features`

is not passed in, then the`feature_names_in_`

attribute will be used. If the`feature_names_in_`

attribute is not defined, then the input names are named`[x0, x1, ..., x(n_features_in_ - 1)]`

.`get_n_splits`

[#](#term-get_n_splits)On a

[CV splitter](#term-CV-splitter)(not an estimator), returns the number of elements one would get if iterating through the return value of[split](#term-split)given the same parameters. Takes the same parameters as split.`get_params`

[#](#term-get_params)Gets all

[parameters](#term-parameters), and their values, that can be set using[set_params](#term-set_params). A parameter`deep`

can be used, when set to False to only return those parameters not including`__`

, i.e. not due to indirection via contained estimators.Most estimators adopt the definition from

, which simply adopts the parameters defined for`base.BaseEstimator`

`__init__`

., among others, reimplements`pipeline.Pipeline`

`get_params`

to declare the estimators named in its`steps`

parameters as themselves being parameters.`partial_fit`

[#](#term-partial_fit)Facilitates fitting an estimator in an online fashion. Unlike

`fit`

, repeatedly calling`partial_fit`

does not clear the model, but updates it with the data provided. The portion of data provided to`partial_fit`

may be called a mini-batch. Each mini-batch must be of consistent shape, etc. In iterative estimators,`partial_fit`

often only performs a single iteration.`partial_fit`

may also be used for[out-of-core](#term-out-of-core)learning, although usually limited to the case where learning can be performed online, i.e. the model is usable after each`partial_fit`

and there is no separate processing needed to finalize the model.introduces the convention that calling`cluster.Birch`

`partial_fit(X)`

will produce a model that is not finalized, but the model can be finalized by calling`partial_fit()`

i.e. without passing a further mini-batch.Generally, estimator parameters should not be modified between calls to

`partial_fit`

, although`partial_fit`

should validate them as well as the new mini-batch of data. In contrast,`warm_start`

is used to repeatedly fit the same estimator with the same data but varying parameters.Like

`fit`

,`partial_fit`

should return the estimator object.To clear the model, a new estimator should be constructed, for instance with

.`base.clone`

Note: Using

`partial_fit`

after`fit`

results in undefined behavior.`predict`

[#](#term-predict)Makes a prediction for each sample, usually only taking

[X](#term-X)as input (but see under regressor output conventions below). In a[classifier](#term-classifier)or[regressor](#term-regressor), this prediction is in the same target space used in fitting (e.g. one of {‘red’, ‘amber’, ‘green’} if the`y`

in fitting consisted of these strings). Despite this, even when`y`

passed to[fit](#term-fit)is a list or other array-like, the output of`predict`

should always be an array or sparse matrix. In a[clusterer](#term-clusterer)or[outlier detector](#term-outlier-detector)the prediction is an integer.If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`

Output conventions:

- classifier
An array of shape

`(n_samples,)`

`(n_samples, n_outputs)`

.[Multilabel](#term-multilabel)data may be represented as a sparse matrix if a sparse matrix was used in fitting. Each element should be one of the values in the classifier’s[classes_](#term-classes_)attribute.- clusterer
An array of shape

`(n_samples,)`

where each value is from 0 to`n_clusters - 1`

if the corresponding sample is clustered, and -1 if the sample is not clustered, as in.`cluster.dbscan`

- outlier detector
An array of shape

`(n_samples,)`

where each value is -1 for an outlier and 1 otherwise.- regressor
A numeric array of shape

`(n_samples,)`

, usually float64. Some regressors have extra options in their`predict`

method, allowing them to return standard deviation (`return_std=True`

) or covariance (`return_cov=True`

) relative to the predicted value. In this case, the return value is a tuple of arrays corresponding to (prediction mean, std, cov) as required.

`predict_log_proba`

[#](#term-predict_log_proba)The natural logarithm of the output of

[predict_proba](#term-predict_proba), provided to facilitate numerical stability.`predict_proba`

[#](#term-predict_proba)A method in

[classifiers](#term-classifiers)and[clusterers](#term-clusterers)that can return probability estimates for each class/cluster. Its input is usually only some observed data,[X](#term-X).If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`

Output conventions are like those for

[decision_function](#term-decision_function)except in the[binary](#term-binary)classification case, where one column is output for each class (while`decision_function`

outputs a 1d array). For binary and multiclass predictions, each row should add to 1.Like other methods,

`predict_proba`

should only be present when the estimator can make probabilistic predictions (see[duck typing](#term-duck-typing)). This means that the presence of the method may depend on estimator parameters (e.g. in) or training data (e.g. in`linear_model.SGDClassifier`

) and may only appear after fitting.`model_selection.GridSearchCV`

`score`

[#](#term-score)A method on an estimator, usually a

[predictor](#term-predictor), which evaluates its predictions on a given dataset, and returns a single numerical score. A greater return value should indicate better predictions; accuracy is used for classifiers and R^2 for regressors by default.If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`

Some estimators implement a custom, estimator-specific score function, often the likelihood of the data under the model.

`score_samples`

[#](#term-score_samples)A method that returns a score for each given sample. The exact definition of

*score*varies from one class to another. In the case of density estimation, it can be the log density model on the data, and in the case of outlier detection, it can be the opposite of the outlier factor of the data.If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`

`set_params`

[#](#term-set_params)Available in any estimator, takes keyword arguments corresponding to keys in

[get_params](#term-get_params). Each is provided a new value to assign such that calling`get_params`

after`set_params`

will reflect the changed[parameters](#term-parameters). Most estimators use the implementation in, which handles nested parameters and otherwise sets the parameter as an attribute on the estimator. The method is overridden in`base.BaseEstimator`

and related estimators.`pipeline.Pipeline`

`split`

[#](#term-split)On a

[CV splitter](#term-CV-splitter)(not an estimator), this method accepts parameters ([X](#term-X),[y](#term-y),[groups](#term-groups)), where all may be optional, and returns an iterator over`(train_idx, test_idx)`

pairs. Each of {train,test}_idx is a 1d integer array, with values from 0 from`X.shape[0] - 1`

of any length, such that no values appear in both some`train_idx`

and its corresponding`test_idx`

.`transform`

[#](#term-transform)In a

[transformer](#term-transformer), transforms the input, usually only[X](#term-X), into some transformed space (conventionally notated as[Xt](#term-Xt)). Output is an array or sparse matrix of length[n_samples](#term-n_samples)and with the number of columns fixed after[fitting](#term-fitting).If the estimator was not already

[fitted](#term-fitted), calling this method should raise a.`exceptions.NotFittedError`


## Parameters[#](#parameters)

These common parameter names, specifically used in estimator construction
(see concept [parameter](#term-parameter)), sometimes also appear as parameters of
functions or non-estimator constructors.

`class_weight`

[#](#term-class_weight)Used to specify sample weights when fitting classifiers as a function of the

[target](#term-target)class. Where[sample_weight](#term-sample_weight)is also supported and given, it is multiplied by the`class_weight`

contribution. Similarly, where`class_weight`

is used in a[multioutput](#term-multioutput)(including[multilabel](#term-multilabel)) tasks, the weights are multiplied across outputs (i.e. columns of`y`

).By default, all samples have equal weight such that classes are effectively weighted by their prevalence in the training data. This could be achieved explicitly with

`class_weight={label1: 1, label2: 1, ...}`

for all class labels.More generally,

`class_weight`

is specified as a dict mapping class labels to weights (`{class_label: weight}`

), such that each sample of the named class is given that weight.`class_weight='balanced'`

can be used to give all classes equal weight by giving each sample a weight inversely related to its class’s prevalence in the training data:`n_samples / (n_classes * np.bincount(y))`

. Class weights will be used differently depending on the algorithm: for linear models (such as linear SVM or logistic regression), the class weights will alter the loss function by weighting the loss of each sample by its class weight. For tree-based algorithms, the class weights will be used for reweighting the splitting criterion.**Note**however that this rebalancing does not take the weight of samples in each class into account.For multioutput classification, a list of dicts is used to specify weights for each output. For example, for four-class multilabel classification weights should be

`[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}]`

instead of`[{1:1}, {2:5}, {3:1}, {4:1}]`

.The

`class_weight`

parameter is validated and interpreted with.`utils.class_weight.compute_class_weight`

`cv`

[#](#term-cv)Determines a cross validation splitting strategy, as used in cross-validation based routines.

`cv`

is also available in estimators such asor`multioutput.ClassifierChain`

which use the predictions of one estimator as training data for another, to not overfit the training supervision.`calibration.CalibratedClassifierCV`

Possible inputs for

`cv`

are usually:An integer, specifying the number of folds in K-fold cross validation. K-fold will be stratified over classes if the estimator is a classifier (determined by

) and the`base.is_classifier`

[targets](#term-targets)may represent a binary or multiclass (but not multioutput) classification problem (determined by).`utils.multiclass.type_of_target`

A

[cross-validation splitter](#term-cross-validation-splitter)instance. Refer to the[User Guide](modules/cross_validation.html#cross-validation)for splitters available within Scikit-learn.An iterable yielding train/test splits.


With some exceptions (especially where not using cross validation at all is an option), the default is 5-fold.

`cv`

values are validated and interpreted with.`model_selection.check_cv`

`kernel`

[#](#term-kernel)Specifies the kernel function to be used by Kernel Method algorithms. For example, the estimators

and`svm.SVC`

both have a`gaussian_process.GaussianProcessClassifier`

`kernel`

parameter that takes the name of the kernel to use as string or a callable kernel function used to compute the kernel matrix. For more reference, see the[Kernel Approximation](modules/kernel_approximation.html#kernel-approximation)and the[Gaussian Processes](modules/gaussian_process.html#gaussian-process)user guides.`max_iter`

[#](#term-max_iter)For estimators involving iterative optimization, this determines the maximum number of iterations to be performed in

[fit](#term-fit). If`max_iter`

iterations are run without convergence, ashould be raised. Note that the interpretation of “a single iteration” is inconsistent across estimators: some, but not all, use it to mean a single epoch (i.e. a pass over every sample in the data).`exceptions.ConvergenceWarning`

`memory`

[#](#term-memory)Some estimators make use of

to store partial solutions during fitting. Thus when`joblib.Memory`

`fit`

is called again, those partial solutions have been memoized and can be reused.A

`memory`

parameter can be specified as a string with a path to a directory, or ainstance (or an object with a similar interface, i.e. a`joblib.Memory`

`cache`

method) can be used.`memory`

values are validated and interpreted with.`utils.validation.check_memory`

`metric`

[#](#term-metric)As a parameter, this is the scheme for determining the distance between two data points. See

. In practice, for some algorithms, an improper distance metric (one that does not obey the triangle inequality, such as Cosine Distance) may be used.`metrics.pairwise_distances`

Note: Hierarchical clustering uses

`affinity`

with this meaning.We also use

*metric*to refer to[evaluation metrics](#term-evaluation-metrics), but avoid using this sense as a parameter name.`n_components`

[#](#term-n_components)The number of features which a

[transformer](#term-transformer)should transform the input into. See[components_](#term-components_)for the special case of affine projection.`n_iter_no_change`

[#](#term-n_iter_no_change)Number of iterations with no improvement to wait before stopping the iterative procedure. This is also known as a

*patience*parameter. It is typically used with[early stopping](#term-early-stopping)to avoid stopping too early.`n_jobs`

[#](#term-n_jobs)This parameter is used to specify how many concurrent processes or threads should be used for routines that are parallelized with

[joblib](#term-joblib).`n_jobs`

is an integer, specifying the maximum number of concurrently running workers. If 1 is given, no joblib parallelism is used at all, which is useful for debugging. If set to -1, all CPUs are used. For`n_jobs`

below -1, (n_cpus + 1 + n_jobs) are used. For example with`n_jobs=-2`

, all CPUs but one are used.`n_jobs`

is`None`

by default, which means*unset*; it will generally be interpreted as`n_jobs=1`

, unless the currentbackend context specifies otherwise.`joblib.Parallel`

Note that even if

`n_jobs=1`

, low-level parallelism (via Numpy and OpenMP) might be used in some configuration.For more details on the use of

`joblib`

and its interactions with scikit-learn, please refer to our[parallelism notes](computing/parallelism.html#parallelism).`pos_label`

[#](#term-pos_label)Value with which positive labels must be encoded in binary classification problems in which the positive class is not assumed. This value is typically required to compute asymmetric evaluation metrics such as precision and recall.

`random_state`

[#](#term-random_state)Whenever randomization is part of a Scikit-learn algorithm, a

`random_state`

parameter may be provided to control the random number generator used. Note that the mere presence of`random_state`

doesn’t mean that randomization is always used, as it may be dependent on another parameter, e.g.`shuffle`

, being set.The passed value will have an effect on the reproducibility of the results returned by the function (

[fit](#term-fit),[split](#term-split), or any other function like).`k_means`

`random_state`

’s value may be:- None (default)
Use the global random state instance from

. Calling the function multiple times will reuse the same instance, and will produce different results.`numpy.random`

- An integer
Use a new random number generator seeded by the given integer. Using an int will produce the same results across different calls. However, it may be worthwhile checking that your results are stable across a number of different distinct random seeds. Popular integer random seeds are 0 and

[42](https://en.wikipedia.org/wiki/Answer_to_the_Ultimate_Question_of_Life%2C_the_Universe%2C_and_Everything). Integer values must be in the range`[0, 2**32 - 1]`

.- A
instance`numpy.random.RandomState`

Use the provided random state, only affecting other users of that same random state instance. Calling the function multiple times will reuse the same instance, and will produce different results.


is used internally to validate the input`utils.check_random_state`

`random_state`

and return ainstance.`RandomState`

For more details on how to control the randomness of scikit-learn objects and avoid common pitfalls, you may refer to

[Controlling randomness](common_pitfalls.html#randomness).`scoring`

[#](#term-scoring)Depending on the object, can specify:

the score function to be maximized (usually by

[cross validation](modules/cross_validation.html#cross-validation)),the multiple score functions to be reported,

the score function to be used to check early stopping, or

for visualization related objects, the score function to output or plot


The score function can be a string accepted by

or a callable`metrics.get_scorer`

[scorer](#term-scorer), not to be confused with an[evaluation metric](#term-evaluation-metric), as the latter have a more diverse API.`scoring`

may also be set to None, in which case the estimator’s[score](#term-score)method is used. See[The scoring parameter: defining model evaluation rules](modules/model_evaluation.html#scoring-parameter)in the User Guide.Where multiple metrics can be evaluated,

`scoring`

may be given either as a list of unique strings, a dictionary with names as keys and callables as values or a callable that returns a dictionary. Note that this does*not*specify which score function is to be maximized, and another parameter such as`refit`

may be used for this purpose.The

`scoring`

parameter is validated and interpreted using.`metrics.check_scoring`

`verbose`

[#](#term-verbose)Logging is not handled very consistently in Scikit-learn at present, but when it is provided as an option, the

`verbose`

parameter is usually available to choose no logging (set to False). Any True value should enable some logging, but larger integers (e.g. above 10) may be needed for full verbosity. Verbose logs are usually printed to Standard Output. Estimators should not produce any output on Standard Output with the default`verbose`

setting.`warm_start`

[#](#term-warm_start)When fitting an estimator repeatedly on the same dataset, but for multiple parameter values (such as to find the value maximizing performance as in

[grid search](modules/grid_search.html#grid-search)), it may be possible to reuse aspects of the model learned from the previous parameter value, saving time. When`warm_start`

is true, the existing[fitted](#term-fitted)model[attributes](#term-attributes)are used to initialize the new model in a subsequent call to[fit](#term-fit).Note that this is only applicable for some models and some parameters, and even some orders of parameter values. In general, there is an interaction between

`warm_start`

and the parameter controlling the number of iterations of the estimator.For estimators imported from

,`ensemble`

`warm_start`

will interact with`n_estimators`

or`max_iter`

. For these models, the number of iterations, reported via`len(estimators_)`

or`n_iter_`

, corresponds the total number of estimators/iterations learnt since the initialization of the model. Thus, if a model was already initialized with`N`

estimators, and`fit`

is called with`n_estimators`

or`max_iter`

set to`M`

, the model will train`M - N`

new estimators.Other models, usually using gradient-based solvers, have a different behavior. They all expose a

`max_iter`

parameter. The reported`n_iter_`

corresponds to the number of iterations done during the last call to`fit`

and will be at most`max_iter`

. Thus, we do not consider the state of the estimator since the initialization.[partial_fit](#term-partial_fit)also retains the model between calls, but differs: with`warm_start`

the parameters change and the data is (more-or-less) constant across calls to`fit`

; with`partial_fit`

, the mini-batch of data changes and model parameters stay fixed.There are cases where you want to use

`warm_start`

to fit on different, but closely related data. For example, one may initially fit to a subset of the data, then fine-tune the parameter search on the full dataset. For classification, all data in a sequence of`warm_start`

calls to`fit`

must include samples from each class.

## Attributes[#](#attributes)

See concept [attribute](#term-attribute).

`classes_`

[#](#term-classes_)A list of class labels known to the

[classifier](#term-classifier), mapping each label to a numerical index used in the model representation our output. For instance, the array output from[predict_proba](#term-predict_proba)has columns aligned with`classes_`

. For[multi-output](#term-multi-output)classifiers,`classes_`

should be a list of lists, with one class listing for each output. For each output, the classes should be sorted (numerically, or lexicographically for strings).`classes_`

and the mapping to indices is often managed with.`preprocessing.LabelEncoder`

`components_`

[#](#term-components_)An affine transformation matrix of shape

`(n_components, n_features)`

used in many linear[transformers](#term-transformers)where[n_components](#term-n_components)is the number of output features and[n_features](#term-n_features)is the number of input features.See also

[coef_](#term-coef_)which is a similar attribute for linear predictors.`coef_`

[#](#term-coef_)The weight/coefficient matrix of a generalized linear model

[predictor](#term-predictor), of shape`(n_features,)`

for binary classification and single-output regression,`(n_classes, n_features)`

for multiclass classification and`(n_targets, n_features)`

for multi-output regression. Note this does not include the intercept (or bias) term, which is stored in`intercept_`

.When available,

`feature_importances_`

is not usually provided as well, but can be calculated as the norm of each feature’s entry in`coef_`

.See also

[components_](#term-components_)which is a similar attribute for linear transformers.`embedding_`

[#](#term-embedding_)An embedding of the training data in

[manifold learning](modules/manifold.html#manifold)estimators, with shape`(n_samples, n_components)`

, identical to the output of[fit_transform](#term-fit_transform). See also[labels_](#term-labels_).`n_iter_`

[#](#term-n_iter_)The number of iterations actually performed when fitting an iterative estimator that may stop upon convergence. See also

[max_iter](#term-max_iter).`feature_importances_`

[#](#term-feature_importances_)A vector of shape

`(n_features,)`

available in some[predictors](#term-predictors)to provide a relative measure of the importance of each feature in the predictions of the model.`labels_`

[#](#term-labels_)A vector containing a cluster label for each sample of the training data in

[clusterers](#term-clusterers), identical to the output of[fit_predict](#term-fit_predict). See also[embedding_](#term-embedding_).

## Data and sample properties[#](#data-and-sample-properties)

See concept [sample property](#term-sample-property).

`groups`

[#](#term-groups)Used in cross-validation routines to identify samples that are correlated. Each value is an identifier such that, in a supporting

[CV splitter](#term-CV-splitter), samples from some`groups`

value may not appear in both a training set and its corresponding test set. See[Cross-validation iterators for grouped data](modules/cross_validation.html#group-cv).`sample_weight`

[#](#term-sample_weight)A weight for each data point. Intuitively, if all weights are integers, using them in an estimator or a

[scorer](#term-scorer)is like duplicating each data point as many times as the weight value. Weights can also be specified as floats, and can have the same effect as above, as many estimators and scorers are scale invariant. For example, weights`[1, 2, 3]`

would be equivalent to weights`[0.1, 0.2, 0.3]`

as they differ by a constant factor of 10. Note however that several estimators are not invariant to the scale of weights.`sample_weight`

can be both an argument of the estimator’s[fit](#term-fit)method for model training or a parameter of a[scorer](#term-scorer)for model evaluation. These callables are said to*consume*the sample weights while other components of scikit-learn can*route*the weights to the underlying estimators or scorers (see[Metadata Routing](#glossary-metadata-routing)).Weighting samples can be useful in several contexts. For instance, if the training data is not uniformly sampled from the target population, it can be corrected by weighting the training data points based on the

[inverse probability](https://en.wikipedia.org/wiki/Inverse_probability_weighting)of their selection for training (e.g. inverse propensity weighting).Some model hyper-parameters are expressed in terms of a discrete number of data points in a region of the feature space. When fitting with sample weights, a count of data points is often automatically converted to a sum of their weights, but this is not always the case. Please refer to the model docstring for details.

In classification, weights can also be specified for all samples belonging to a given target class with the

[class_weight](#term-class_weight)estimator[parameter](#term-parameter). If both`sample_weight`

and`class_weight`

are provided, the final weight assigned to a sample is the product of the two.At the time of writing (version 1.8), not all scikit-learn estimators correctly implement the weight-repetition equivalence property. The

[#16298 meta issue](https://github.com/scikit-learn/scikit-learn/issues/16298)tracks ongoing work to detect and fix remaining discrepancies.Furthermore, some estimators have a stochastic fit method. For instance,

depends on a random initialization, bagging models randomly resample from the training data, etc. In this case, the sample weight-repetition equivalence property described above does not hold exactly. However, it should hold at least in expectation over the randomness of the fitting procedure.`cluster.KMeans`

`X`

[#](#term-X)Denotes data that is observed at training and prediction time, used as independent variables in learning. The notation is uppercase to denote that it is ordinarily a matrix (see

[rectangular](#term-rectangular)). When a matrix, each sample may be represented by a[feature](#term-feature)vector, or a vector of[precomputed](#term-precomputed)(dis)similarity with each training sample.`X`

may also not be a matrix, and may require a[feature extractor](#term-feature-extractor)or a[pairwise metric](#term-pairwise-metric)to turn it into one before learning a model.`Xt`

[#](#term-Xt)Shorthand for “transformed

[X](#term-X)”.`y`

[#](#term-y)`Y`

[#](#term-Y)Denotes data that may be observed at training time as the dependent variable in learning, but which is unavailable at prediction time, and is usually the

[target](#term-target)of prediction. The notation may be uppercase to denote that it is a matrix, representing[multi-output](#term-multi-output)targets, for instance; but usually we use`y`

and sometimes do so even when multiple outputs are assumed.

---

## Source: https://scikit-learn.org/dev/developers/index.html

# Developer’s Guide[#](#developer-s-guide)

[Contributing](contributing.html)[Ways to contribute](contributing.html#ways-to-contribute)[Automated Contributions Policy](contributing.html#automated-contributions-policy)[Submitting a bug report or a feature request](contributing.html#submitting-a-bug-report-or-a-feature-request)[Contributing code and documentation](contributing.html#contributing-code-and-documentation)[Documentation](contributing.html#documentation)[Testing and improving test coverage](contributing.html#testing-and-improving-test-coverage)[Monitoring performance](contributing.html#monitoring-performance)[Issue Tracker Tags](contributing.html#issue-tracker-tags)[Maintaining backwards compatibility](contributing.html#maintaining-backwards-compatibility)[Code Review Guidelines](contributing.html#code-review-guidelines)[Reading the existing code base](contributing.html#reading-the-existing-code-base)

[Set up your development environment](development_setup.html)[Crafting a minimal reproducer for scikit-learn](minimal_reproducer.html)[Developing scikit-learn estimators](develop.html)[Developers’ Tips and Tricks](tips.html)[Utilities for Developers](utilities.html)[How to optimize for speed](performance.html)[Cython Best Practices, Conventions and Knowledge](cython.html)[Miscellaneous information / Troubleshooting](misc_info.html)[Bug triaging and issue curation](bug_triaging.html)[Maintainer Information](maintainer.html)[Developing with the Plotting API](plotting.html)

---

## Source: https://scikit-learn.org/stable/faq.html

# Frequently Asked Questions[#](#frequently-asked-questions)

Here we try to give some answers to questions that regularly pop up on the mailing list.

[About the project](#id2)[#](#about-the-project)

[What is the project name (a lot of people get it wrong)?](#id3)[#](#what-is-the-project-name-a-lot-of-people-get-it-wrong)

scikit-learn, but not scikit or SciKit nor sci-kit learn. Also not scikits.learn or scikits-learn, which were previously used.

[How do you pronounce the project name?](#id4)[#](#how-do-you-pronounce-the-project-name)

sy-kit learn. sci stands for science!

[Why scikit?](#id5)[#](#why-scikit)

There are multiple scikits, which are scientific toolboxes built around SciPy.
Apart from scikit-learn, another popular one is [scikit-image](https://scikit-image.org/).

[Do you support PyPy?](#id6)[#](#do-you-support-pypy)

Due to limited maintainer resources and small number of users, using
scikit-learn with [PyPy](https://pypy.org/) (an alternative Python
implementation with a built-in just-in-time compiler) is not officially
supported.

[How can I obtain permission to use the images in scikit-learn for my work?](#id7)[#](#how-can-i-obtain-permission-to-use-the-images-in-scikit-learn-for-my-work)

The images contained in the [scikit-learn repository](https://github.com/scikit-learn/scikit-learn) and the images generated within
the [scikit-learn documentation](https://scikit-learn.org/stable/index.html)
can be used via the [BSD 3-Clause License](https://github.com/scikit-learn/scikit-learn?tab=BSD-3-Clause-1-ov-file) for
your work. Citations of scikit-learn are highly encouraged and appreciated. See
[citing scikit-learn](about.html#citing-scikit-learn).

[Implementation decisions](#id8)[#](#implementation-decisions)

[Why is there no support for deep or reinforcement learning? Will there be such support in the future?](#id9)[#](#why-is-there-no-support-for-deep-or-reinforcement-learning-will-there-be-such-support-in-the-future)

Deep learning and reinforcement learning both require a rich vocabulary to define an architecture, with deep learning additionally requiring GPUs for efficient computing. However, neither of these fit within the design constraints of scikit-learn. As a result, deep learning and reinforcement learning are currently out of scope for what scikit-learn seeks to achieve.

You can find more information about the addition of GPU support at
[Will you add GPU support?](#will-you-add-gpu-support).

Note that scikit-learn currently implements a simple multilayer perceptron
in [ sklearn.neural_network](api/sklearn.neural_network.html#module-sklearn.neural_network). We will only accept bug fixes for this module.
If you want to implement more complex deep learning models, please turn to
popular deep learning frameworks such as

[tensorflow](https://www.tensorflow.org/),

[keras](https://keras.io/), and

[pytorch](https://pytorch.org/).

[Will you add graphical models or sequence prediction to scikit-learn?](#id10)[#](#will-you-add-graphical-models-or-sequence-prediction-to-scikit-learn)

Not in the foreseeable future. scikit-learn tries to provide a unified API for the basic tasks in machine learning, with pipelines and meta-algorithms like grid search to tie everything together. The required concepts, APIs, algorithms and expertise required for structured learning are different from what scikit-learn has to offer. If we started doing arbitrary structured learning, we’d need to redesign the whole package and the project would likely collapse under its own weight.

There are two projects with API similar to scikit-learn that do structured prediction:

[pystruct](https://pystruct.github.io/)handles general structured learning (focuses on SSVMs on arbitrary graph structures with approximate inference; defines the notion of sample as an instance of the graph structure).[seqlearn](https://larsmans.github.io/seqlearn/)handles sequences only (focuses on exact inference; has HMMs, but mostly for the sake of completeness; treats a feature vector as a sample and uses an offset encoding for the dependencies between feature vectors).

[Why did you remove HMMs from scikit-learn?](#id11)[#](#why-did-you-remove-hmms-from-scikit-learn)

See [Will you add graphical models or sequence prediction to scikit-learn?](#adding-graphical-models).

[Will you add GPU support?](#id12)[#](#will-you-add-gpu-support)

Adding GPU support by default would introduce heavy hardware-specific software dependencies and existing algorithms would need to be reimplemented. This would make it both harder for the average user to install scikit-learn and harder for the developers to maintain the code.

However, since 2023, a limited but growing [list of scikit-learn
estimators](modules/array_api.html#array-api-supported) can already run on GPUs if the input data is
provided as a PyTorch or CuPy array and if scikit-learn has been configured to
accept such inputs as explained in [Array API support (experimental)](modules/array_api.html#array-api). This Array API support
allows scikit-learn to run on GPUs without introducing heavy and
hardware-specific software dependencies to the main package.

Most estimators that rely on NumPy for their computationally intensive operations can be considered for Array API support and therefore GPU support.

However, not all scikit-learn estimators are amenable to efficiently running on GPUs via the Array API for fundamental algorithmic reasons. For instance, tree-based models currently implemented with Cython in scikit-learn are fundamentally not array-based algorithms. Other algorithms such as k-means or k-nearest neighbors rely on array-based algorithms but are also implemented in Cython. Cython is used to manually interleave consecutive array operations to avoid introducing performance killing memory access to large intermediate arrays: this low-level algorithmic rewrite is called “kernel fusion” and cannot be expressed via the Array API for the foreseeable future.

Adding efficient GPU support to estimators that cannot be efficiently implemented with the Array API would require designing and adopting a more flexible extension system for scikit-learn. This possibility is being considered in the following GitHub issue (under discussion):

[Why do categorical variables need preprocessing in scikit-learn, compared to other tools?](#id13)[#](#why-do-categorical-variables-need-preprocessing-in-scikit-learn-compared-to-other-tools)

Most of scikit-learn assumes data is in NumPy arrays or SciPy sparse matrices
of a single numeric dtype. These do not explicitly represent categorical
variables at present. Thus, unlike R’s `data.frames`

or [ pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html#pandas.DataFrame),
we require explicit conversion of categorical features to numeric values, as
discussed in

[Encoding categorical features](modules/preprocessing.html#preprocessing-categorical-features). See also

[Column Transformer with Mixed Types](auto_examples/compose/plot_column_transformer_mixed_types.html#sphx-glr-auto-examples-compose-plot-column-transformer-mixed-types-py)for an example of working with heterogeneous (e.g. categorical and numeric) data.

Note that recently, [ HistGradientBoostingClassifier](modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[gained native support for categorical features through the option](modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

`categorical_features="from_dtype"`

. This
option relies on inferring which columns of the data are categorical based on the
[and](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.CategoricalDtype.html#pandas.CategoricalDtype)

`pandas.CategoricalDtype`

`polars.datatypes.Categorical`

dtypes.[Does scikit-learn work natively with various types of dataframes?](#id14)[#](#does-scikit-learn-work-natively-with-various-types-of-dataframes)

Scikit-learn has limited support for [ pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html#pandas.DataFrame) and

`polars.DataFrame`

. Scikit-learn estimators can accept both these dataframe types
as input, and scikit-learn transformers can output dataframes using the `set_output`

API. For more details, refer to
[Introducing the set_output API](auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py).

However, the internal computations in scikit-learn estimators rely on numerical operations that are more efficiently performed on homogeneous data structures such as NumPy arrays or SciPy sparse matrices. As a result, most scikit-learn estimators will internally convert dataframe inputs into these homogeneous data structures. Similarly, dataframe outputs are generated from these homogeneous data structures.

Also note that [ ColumnTransformer](modules/generated/sklearn.compose.ColumnTransformer.html#sklearn.compose.ColumnTransformer) makes it convenient to handle
heterogeneous pandas dataframes by mapping homogeneous subsets of dataframe columns
selected by name or dtype to dedicated scikit-learn transformers. Therefore

[are often used in the first step of scikit-learn pipelines when dealing with heterogeneous dataframes (see](modules/generated/sklearn.compose.ColumnTransformer.html#sklearn.compose.ColumnTransformer)

`ColumnTransformer`

[Pipeline: chaining estimators](modules/compose.html#pipeline)for more details).

See also [Column Transformer with Mixed Types](auto_examples/compose/plot_column_transformer_mixed_types.html#sphx-glr-auto-examples-compose-plot-column-transformer-mixed-types-py)
for an example of working with heterogeneous (e.g. categorical and numeric) data.

[Do you plan to implement transform for target ](#id15)`y`

in a pipeline?[#](#do-you-plan-to-implement-transform-for-target-y-in-a-pipeline)

`y`

in a pipeline?Currently transform only works for features `X`

in a pipeline. There’s a
long-standing discussion about not being able to transform `y`

in a pipeline.
Follow on GitHub issue [#4143](https://github.com/scikit-learn/scikit-learn/issues/4143). Meanwhile, you can check out
[ TransformedTargetRegressor](modules/generated/sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor),

[pipegraph](https://github.com/mcasl/PipeGraph), and

[imbalanced-learn](https://github.com/scikit-learn-contrib/imbalanced-learn). Note that scikit-learn solved for the case where

`y`

has an invertible transformation applied before training
and inverted after prediction. scikit-learn intends to solve for
use cases where `y`

should be transformed at training time
and not at test time, for resampling and similar uses, like at
[imbalanced-learn](https://github.com/scikit-learn-contrib/imbalanced-learn). In general, these use cases can be solved with a custom meta estimator rather than a

[.](modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline)

`Pipeline`

[Why are there so many different estimators for linear models?](#id16)[#](#why-are-there-so-many-different-estimators-for-linear-models)

Usually, there is one classifier and one regressor per model type, e.g.
[ GradientBoostingClassifier](modules/generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[. Both have similar options and both have the parameter](modules/generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

`loss`

, which is especially useful in the regression
case as it enables the estimation of conditional mean as well as conditional
quantiles.For linear models, there are many estimator classes which are very close to each other. Let us have a look at

, no penalty`LinearRegression`

, L2 penalty`Ridge`

, L1 penalty (sparse models)`Lasso`

, L1 + L2 penalty (less sparse models)`ElasticNet`

with`SGDRegressor`

`loss="squared_loss"`


**Maintainer perspective:**
They all do in principle the same and are different only by the penalty they
impose. This, however, has a large impact on the way the underlying
optimization problem is solved. In the end, this amounts to usage of different
methods and tricks from linear algebra. A special case is
[ SGDRegressor](modules/generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor) which
comprises all 4 previous models and is different by the optimization procedure.
A further side effect is that the different estimators favor different data
layouts (

`X`

C-contiguous or F-contiguous, sparse csr or csc). This complexity
of the seemingly simple linear models is the reason for having different
estimator classes for different penalties.**User perspective:**
First, the current design is inspired by the scientific literature where linear
regression models with different regularization/penalty were given different
names, e.g. *ridge regression*. Having different model classes with according
names makes it easier for users to find those regression models.
Secondly, if all the 5 above mentioned linear models were unified into a single
class, there would be parameters with a lot of options like the `solver`

parameter. On top of that, there would be a lot of exclusive interactions
between different parameters. For example, the possible options of the
parameters `solver`

, `precompute`

and `selection`

would depend on the
chosen values of the penalty parameters `alpha`

and `l1_ratio`

.

[Contributing](#id17)[#](#contributing)

[How can I contribute to scikit-learn?](#id18)[#](#how-can-i-contribute-to-scikit-learn)

See [Contributing to pandas](https://pandas.pydata.org/pandas-docs/stable/development/contributing.html#contributing). Before wanting to add a new algorithm, which is
usually a major and lengthy undertaking, it is recommended to start with
[known issues](developers/contributing.html#new-contributors). Please do not contact the contributors
of scikit-learn directly regarding contributing to scikit-learn.

[Why is my pull request not getting any attention?](#id19)[#](#why-is-my-pull-request-not-getting-any-attention)

The scikit-learn review process takes a significant amount of time, and contributors should not be discouraged by a lack of activity or review on their pull request. We care a lot about getting things right the first time, as maintenance and later change comes at a high cost. We rarely release any “experimental” code, so all of our contributions will be subject to high use immediately and should be of the highest quality possible initially.

Beyond that, scikit-learn is limited in its reviewing bandwidth; many of the reviewers and core developers are working on scikit-learn on their own time. If a review of your pull request comes slowly, it is likely because the reviewers are busy. We ask for your understanding and request that you not close your pull request or discontinue your work solely because of this reason.

For tips on how to make your pull request easier to review and more likely to be
reviewed quickly, see [How do I improve my issue or pull request?](#improve-issue-pr).

[How do I improve my issue or pull request?](#id20)[#](#how-do-i-improve-my-issue-or-pull-request)

To help your issue receive attention or improve the likelihood of your pull request being reviewed, you can try:

follow our

[contribution guidelines](developers/contributing.html#contributing), in particular[Automated Contributions Policy](developers/contributing.html#automated-contributions-policy),[How to make a good bug report](developers/contributing.html#filing-bugs),[Stalled pull requests](developers/contributing.html#stalled-pull-request)and[Stalled and Unclaimed Issues](developers/contributing.html#stalled-unclaimed-issues).complete the provided issue and pull request templates, including a clear and concise description of the issue or motivation for the pull request.

ensure the title clearly describes the issue or pull request and does not include an issue number.


For your pull requests specifically, the following will make it easier to review:

ensure your PR satisfies all items in the

[Pull request checklist](developers/contributing.html#pr-checklist).ensure your PR addresses an issue for which there is clear consensus on the solution.

ensure the changes are minimal and directly relevant to the described issue.


[What does the “spam” label for issues or pull requests mean?](#id21)[#](#what-does-the-spam-label-for-issues-or-pull-requests-mean)

The “spam” label is an indication for reviewers that the issue or pull request may not have received sufficient effort or preparation from the author for a productive review. The maintainers are using this label as a way to deal with the increase of low value PRs and issues.

If an issue or PR was labeled as spam and simultaneously closed, the decision is final. A common reason for this happening is when people open a PR for an issue that is still under discussion. Please wait for the discussion to converge before opening a PR.

If your issue or PR was labeled as spam and not closed, see [How do I improve my issue or pull request?](#improve-issue-pr)
for tips on improving your issue or pull request and increasing the likelihood
of the label being removed.

[What are the inclusion criteria for new algorithms?](#id22)[#](#what-are-the-inclusion-criteria-for-new-algorithms)

We only consider well-established algorithms for inclusion. A rule of thumb is at least 3 years since publication, 200+ citations, and wide use and usefulness. A technique that provides a clear-cut improvement (e.g. an enhanced data structure or a more efficient approximation technique) on a widely-used method will also be considered for inclusion.

From the algorithms or techniques that meet the above criteria, only those
which fit well within the current API of scikit-learn, that is a `fit`

,
`predict/transform`

interface and ordinarily having input/output that is a
numpy array or sparse matrix, are accepted.

The contributor should support the importance of the proposed addition with research papers and/or implementations in other similar packages, demonstrate its usefulness via common use-cases/applications and corroborate performance improvements, if any, with benchmarks and/or plots. It is expected that the proposed algorithm should outperform the methods that are already implemented in scikit-learn at least in some areas.

Please do not propose algorithms you (your best friend, colleague or boss) created. scikit-learn is not a good venue for advertising your own work.

Inclusion of a new algorithm speeding up an existing model is easier if:

it does not introduce new hyper-parameters (as it makes the library more future-proof),

it is easy to document clearly when the contribution improves the speed and when it does not, for instance, “when

`n_features >> n_samples`

”,benchmarks clearly show a speed up.


Also, note that your implementation need not be in scikit-learn to be used
together with scikit-learn tools. You can implement your favorite algorithm
in a scikit-learn compatible way, upload it to GitHub and let us know. We
will be happy to list it under [Related Projects](related_projects.html#related-projects). If you already have
a package on GitHub following the scikit-learn API, you may also be
interested to look at [scikit-learn-contrib](https://scikit-learn-contrib.github.io).

[Why are you so selective on what algorithms you include in scikit-learn?](#id23)[#](#why-are-you-so-selective-on-what-algorithms-you-include-in-scikit-learn)

Code comes with maintenance cost, and we need to balance the amount of
code we have with the size of the team (and add to this the fact that
complexity scales non linearly with the number of features).
The package relies on core developers using their free time to
fix bugs, maintain code and review contributions.
Any algorithm that is added needs future attention by the developers,
at which point the original author might long have lost interest.
See also [What are the inclusion criteria for new algorithms?](#new-algorithms-inclusion-criteria). For a great read about
long-term maintenance issues in open-source software, look at
[the Executive Summary of Roads and Bridges](https://www.fordfoundation.org/media/2976/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure.pdf#page=8).

[Using scikit-learn](#id24)[#](#using-scikit-learn)

[How do I get started with scikit-learn?](#id25)[#](#how-do-i-get-started-with-scikit-learn)

If you are new to scikit-learn, or looking to strengthen your understanding,
we highly recommend the **scikit-learn MOOC (Massive Open Online Course)**.

See our [External Resources, Videos and Talks page](presentations.html#external-resources)
for more details.

[What’s the best way to get help on scikit-learn usage?](#id26)[#](#what-s-the-best-way-to-get-help-on-scikit-learn-usage)

General machine learning questions: use

[Cross Validated](https://stats.stackexchange.com/)with the`[machine-learning]`

tag.scikit-learn usage questions: use

[Stack Overflow](https://stackoverflow.com/questions/tagged/scikit-learn)with the`[scikit-learn]`

and`[python]`

tags. You can alternatively use the[mailing list](https://mail.python.org/mailman/listinfo/scikit-learn).

Please make sure to include a minimal reproduction code snippet (ideally shorter
than 10 lines) that highlights your problem on a toy dataset (for instance from
[ sklearn.datasets](api/sklearn.datasets.html#module-sklearn.datasets) or randomly generated with functions of

`numpy.random`

with
a fixed random seed). Please remove any line of code that is not necessary to
reproduce your problem.The problem should be reproducible by simply copy-pasting your code snippet in a Python
shell with scikit-learn installed. Do not forget to include the import statements.
More guidance to write good reproduction code snippets can be found at:
[https://stackoverflow.com/help/mcve](https://stackoverflow.com/help/mcve).

If your problem raises an exception that you do not understand (even after googling it), please make sure to include the full traceback that you obtain when running the reproduction script.

For bug reports or feature requests, please make use of the
[issue tracker on GitHub](https://github.com/scikit-learn/scikit-learn/issues).

Warning

Please do not email any authors directly to ask for assistance, report bugs, or for any other issue related to scikit-learn.

[How should I save, export or deploy estimators for production?](#id27)[#](#how-should-i-save-export-or-deploy-estimators-for-production)

See [Model persistence](model_persistence.html#model-persistence).

[How can I create a bunch object?](#id28)[#](#how-can-i-create-a-bunch-object)

Bunch objects are sometimes used as an output for functions and methods. They
extend dictionaries by enabling values to be accessed by key,
`bunch["value_key"]`

, or by an attribute, `bunch.value_key`

.

They should not be used as an input. Therefore you almost never need to create
a [ Bunch](modules/generated/sklearn.utils.Bunch.html#sklearn.utils.Bunch) object, unless you are extending scikit-learn’s API.

[How can I load my own datasets into a format usable by scikit-learn?](#id29)[#](#how-can-i-load-my-own-datasets-into-a-format-usable-by-scikit-learn)

Generally, scikit-learn works on any numeric data stored as numpy arrays
or scipy sparse matrices. Other types that are convertible to numeric
arrays such as [ pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html#pandas.DataFrame) are also acceptable.

For more information on loading your data files into these usable data
structures, please refer to [loading external datasets](datasets/loading_other_datasets.html#external-datasets).

[How do I deal with string data (or trees, graphs…)?](#id30)[#](#how-do-i-deal-with-string-data-or-trees-graphs)

scikit-learn estimators assume you’ll feed them real-valued feature vectors. This assumption is hard-coded in pretty much all of the library. However, you can feed non-numerical inputs to estimators in several ways.

If you have text documents, you can use a term frequency features; see
[Text feature extraction](modules/feature_extraction.html#text-feature-extraction) for the built-in *text vectorizers*.
For more general feature extraction from any kind of data, see
[Loading features from dicts](modules/feature_extraction.html#dict-feature-extraction) and [Feature hashing](modules/feature_extraction.html#feature-hashing).

Another common case is when you have non-numerical data and a custom distance (or similarity) metric on these data. Examples include strings with edit distance (aka. Levenshtein distance), for instance, DNA or RNA sequences. These can be encoded as numbers, but doing so is painful and error-prone. Working with distance metrics on arbitrary data can be done in two ways.

Firstly, many estimators take precomputed distance/similarity matrices, so if
the dataset is not too large, you can compute distances for all pairs of inputs.
If the dataset is large, you can use feature vectors with only one “feature”,
which is an index into a separate data structure, and supply a custom metric
function that looks up the actual data in this data structure. For instance, to use
[ dbscan](modules/generated/dbscan-function.html#sklearn.cluster.dbscan) with Levenshtein distances:

```
>>> import numpy as np
>>> from leven import levenshtein
>>> from sklearn.cluster import dbscan
>>> data = ["ACCTCCTAGAAG", "ACCTACTAGAAGTT", "GAATATTAGGCCGA"]
>>> def lev_metric(x, y):
... i, j = int(x[0]), int(y[0]) # extract indices
... return levenshtein(data[i], data[j])
...
>>> X = np.arange(len(data)).reshape(-1, 1)
>>> X
array([[0],
[1],
[2]])
>>> # We need to specify algorithm='brute' as the default assumes
>>> # a continuous feature space.
>>> dbscan(X, metric=lev_metric, eps=5, min_samples=2, algorithm='brute')
(array([0, 1]), array([ 0, 0, -1]))
```

Note that the example above uses the third-party edit distance package
[leven](https://pypi.org/project/leven/). Similar tricks can be used,
with some care, for tree kernels, graph kernels, etc.

[Why do I sometimes get a crash/freeze with ](#id31)`n_jobs > 1`

under OSX or Linux?[#](#why-do-i-sometimes-get-a-crash-freeze-with-n-jobs-1-under-osx-or-linux)

`n_jobs > 1`

under OSX or Linux?Several scikit-learn tools such as [ GridSearchCV](modules/generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV) and

[rely internally on Python’s](modules/generated/sklearn.model_selection.cross_val_score.html#sklearn.model_selection.cross_val_score)

`cross_val_score`

[module to parallelize execution onto several Python processes by passing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing)

`multiprocessing`

`n_jobs > 1`

as an argument.The problem is that Python [ multiprocessing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing) does a

`fork`

system call
without following it with an `exec`

system call for performance reasons. Many
libraries like (some versions of) Accelerate or vecLib under OSX, (some versions
of) MKL, the OpenMP runtime of GCC, nvidia’s Cuda (and probably many others),
manage their own internal thread pool. Upon a call to `fork`

, the thread pool
state in the child process is corrupted: the thread pool believes it has many
threads while only the main thread state has been forked. It is possible to
change the libraries to make them detect when a fork happens and reinitialize
the thread pool in that case: we did that for OpenBLAS (merged upstream in
main since 0.2.10) and we contributed a [patch](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=60035)to GCC’s OpenMP runtime (not yet reviewed).

But in the end the real culprit is Python’s [ multiprocessing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing) that does

`fork`

without `exec`

to reduce the overhead of starting and using new
Python processes for parallel computing. Unfortunately this is a violation of
the POSIX standard and therefore some software editors like Apple refuse to
consider the lack of fork-safety in Accelerate and vecLib as a bug.In Python 3.4+ it is now possible to configure [ multiprocessing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing) to
use the

`"forkserver"`

or `"spawn"`

start methods (instead of the default
`"fork"`

) to manage the process pools. To work around this issue when
using scikit-learn, you can set the `JOBLIB_START_METHOD`

environment
variable to `"forkserver"`

. However the user should be aware that using
the `"forkserver"`

method prevents [to call function interactively defined in a shell session.](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel)

`joblib.Parallel`

If you have custom code that uses [ multiprocessing](https://docs.python.org/3/library/multiprocessing.html#module-multiprocessing) directly instead of using
it via

[you can enable the](https://joblib.readthedocs.io/en/latest/index.html#module-joblib)

`joblib`

`"forkserver"`

mode globally for your
program. Insert the following instructions in your main script:```
import multiprocessing
# other imports, custom code, load data, define model...
if __name__ == "__main__":
multiprocessing.set_start_method("forkserver")
# call scikit-learn utils with n_jobs > 1 here
```

You can find more details on the new start methods in the [multiprocessing
documentation](https://docs.python.org/3/library/multiprocessing.html#contexts-and-start-methods).

[Why does my job use more cores than specified with ](#id32)`n_jobs`

?[#](#why-does-my-job-use-more-cores-than-specified-with-n-jobs)

`n_jobs`

?This is because `n_jobs`

only controls the number of jobs for
routines that are parallelized with [ joblib](https://joblib.readthedocs.io/en/latest/index.html#module-joblib), but parallel code can come
from other sources:

some routines may be parallelized with OpenMP (for code written in C or Cython),

scikit-learn relies a lot on numpy, which in turn may rely on numerical libraries like MKL, OpenBLAS or BLIS which can provide parallel implementations.


For more details, please refer to our [notes on parallelism](computing/parallelism.html#parallelism).

[How do I set a ](#id33)`random_state`

for an entire execution?[#](#how-do-i-set-a-random-state-for-an-entire-execution)

`random_state`

for an entire execution?Please refer to [Controlling randomness](common_pitfalls.html#randomness).

---

## Source: https://scikit-learn.org/stable/support.html

# Support[#](#support)

There are several channels to connect with scikit-learn developers for assistance, feedback, or contributions.

**Note**: Communications on all channels should respect our [Code of Conduct](https://github.com/scikit-learn/scikit-learn/blob/main/CODE_OF_CONDUCT.md).

## Mailing Lists[#](#mailing-lists)

**Main Mailing List**: Join the primary discussion platform for scikit-learn at[scikit-learn Mailing List](https://mail.python.org/mailman/listinfo/scikitlearn).**Commit Updates**: Stay informed about repository updates and test failures on the[scikit-learn-commits list](https://lists.sourceforge.net/lists/listinfo/scikit-learn-commits).

## User Questions[#](#user-questions)

If you have questions, this is our general workflow.

**Stack Overflow**: Some scikit-learn developers support users using the[[scikit-learn]](https://stackoverflow.com/questions/tagged/scikit-learn)tag.**General Machine Learning Queries**: For broader machine learning discussions, visit[Stack Exchange](https://stats.stackexchange.com/).

When posting questions:

Please use a descriptive question in the title field (e.g. no “Please help with scikit-learn!” as this is not a question)

Provide detailed context, expected results, and actual observations.

Include code and data snippets (preferably minimalistic scripts, up to ~20 lines).

Describe your data and preprocessing steps, including sample size, feature types (categorical or numerical), and the target for supervised learning tasks (classification type or regression).


**Note**: Avoid asking user questions on the bug tracker to keep
the focus on development.

[GitHub Discussions](https://github.com/scikit-learn/scikit-learn/discussions)Usage questions such as methodological[Stack Overflow](https://stackoverflow.com/questions/tagged/scikit-learn)Programming/user questions with`[scikit-learn]`

tag[GitHub Bug Tracker](https://github.com/scikit-learn/scikit-learn/issues)Bug reports - Please do not ask usage questions on the issue tracker.[Discord Server](https://discord.gg/h9qyrK8Jc8)Current pull requests - Post any specific PR-related questions on your PR, and you can share a link to your PR on this server.

## Bug Tracker[#](#bug-tracker)

Encountered a bug? Report it on our [issue tracker](https://github.com/scikit-learn/scikit-learn/issues)

Include in your report:

Steps or scripts to reproduce the bug.

Expected and observed outcomes.

Python or gdb tracebacks, if applicable.

The ideal bug report contains a

[short reproducible code snippet](developers/minimal_reproducer.html#minimal-reproducer), this way anyone can try to reproduce the bug easily.If your snippet is longer than around 50 lines, please link to a

[gist](https://gist.github.com)or a github repo.

**Tip**: Gists are Git repositories; you can push data files to them using Git.

## Paid support[#](#paid-support)

The following companies (listed in alphabetical order) offer support services related to scikit-learn and have a proven track record of employing long-term maintainers of scikit-learn and related open source projects:

## Gitter[#](#gitter)

**Note**: The scikit-learn Gitter room is no longer an active community.
For live discussions and support, please refer to the other channels
mentioned in this document.

## Documentation Resources[#](#documentation-resources)

This documentation is for 1.8.0. Documentation for other versions can be found [here](https://scikit-learn.org/dev/versions.html), including zip archives which can be
downloaded for offline access.

We no longer provide a PDF version of the documentation, but you can still generate it
locally by following the [building documentation instructions](developers/contributing.html#building-documentation).
The most recent version with a PDF documentation is quite old, 0.23.2 (released
in August 2020), but the PDF is available [here](https://scikit-learn.org/0.23/_downloads/scikit-learn-docs.pdf).

## Social Media#

scikit-learn has presence on various social media platforms to share updates with the community. The platforms are not monitored for user questions.

---

## Source: https://scikit-learn.org/stable/related_projects.html

# Related Projects[#](#related-projects)

Projects implementing the scikit-learn estimator API are encouraged to use
the [scikit-learn-contrib template](https://github.com/scikit-learn-contrib/project-template)
which facilitates best practices for testing and documenting estimators.
The [scikit-learn-contrib GitHub organization](https://github.com/scikit-learn-contrib/scikit-learn-contrib)
also accepts high-quality contributions of repositories conforming to this
template.

Below is a list of sister-projects, extensions and domain specific packages.

## Interoperability and framework enhancements[#](#interoperability-and-framework-enhancements)

These tools adapt scikit-learn for use with other technologies or otherwise enhance the functionality of scikit-learn’s estimators.

**Auto-ML**

[auto-sklearn](https://github.com/automl/auto-sklearn/)An automated machine learning toolkit and a drop-in replacement for a scikit-learn estimator[autoviml](https://github.com/AutoViML/Auto_ViML/)Automatically Build Multiple Machine Learning Models with a Single Line of Code. Designed as a faster way to use scikit-learn models without having to preprocess data.[TPOT](https://github.com/rhiever/tpot)An automated machine learning toolkit that optimizes a series of scikit-learn operators to design a machine learning pipeline, including data and feature preprocessors as well as the estimators. Works as a drop-in replacement for a scikit-learn estimator.[Featuretools](https://github.com/alteryx/featuretools)A framework to perform automated feature engineering. It can be used for transforming temporal and relational datasets into feature matrices for machine learning.[EvalML](https://github.com/alteryx/evalml)An AutoML library which builds, optimizes, and evaluates machine learning pipelines using domain-specific objective functions. It incorporates multiple modeling libraries under one API, and the objects that EvalML creates use an sklearn-compatible API.[MLJAR AutoML](https://github.com/mljar/mljar-supervised)A Python package for AutoML on Tabular Data with Feature Engineering, Hyper-Parameters Tuning, Explanations and Automatic Documentation.

**Experimentation and model registry frameworks**

[MLFlow](https://mlflow.org/)An open source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry.[Neptune](https://neptune.ai/)A metadata store for MLOps, built for teams that run a lot of experiments. It gives you a single place to log, store, display, organize, compare, and query all your model building metadata.[Sacred](https://github.com/IDSIA/Sacred)A tool to help you configure, organize, log and reproduce experiments[Scikit-Learn Laboratory](https://skll.readthedocs.io/en/latest/index.html)A command-line wrapper around scikit-learn that makes it easy to run machine learning experiments with multiple learners and large feature sets.

**Model inspection and visualization**

[dtreeviz](https://github.com/parrt/dtreeviz/)A Python library for decision tree visualization and model interpretation.[model-diagnostics](https://lorentzenchr.github.io/model-diagnostics/)Tools for diagnostics and assessment of (machine learning) models (in Python).[sklearn-evaluation](https://github.com/ploomber/sklearn-evaluation)Machine learning model evaluation made easy: plots, tables, HTML reports, experiment tracking and Jupyter notebook analysis. Visual analysis, model selection, evaluation and diagnostics.[yellowbrick](https://github.com/DistrictDataLabs/yellowbrick)A suite of custom matplotlib visualizers for scikit-learn estimators to support visual feature analysis, model selection, evaluation, and diagnostics.

**Model export for production**

[sklearn-onnx](https://github.com/onnx/sklearn-onnx)Serialization of many Scikit-learn pipelines to[ONNX](https://onnx.ai/)for interchange and prediction.[skops.io](https://skops.readthedocs.io/en/stable/persistence.html)A persistence model more secure than pickle, which can be used instead of pickle in most common cases.[sklearn2pmml](https://github.com/jpmml/sklearn2pmml)Serialization of a wide variety of scikit-learn estimators and transformers into PMML with the help of[JPMML-SkLearn](https://github.com/jpmml/jpmml-sklearn)library.[treelite](https://treelite.readthedocs.io)Compiles tree-based ensemble models into C code for minimizing prediction latency.[emlearn](https://emlearn.org)Implements scikit-learn estimators in C99 for embedded devices and microcontrollers. Supports several classifier, regression and outlier detection models.

**Model throughput**

[Intel(R) Extension for scikit-learn](https://github.com/intel/scikit-learn-intelex)Mostly on high end Intel(R) hardware, accelerates some scikit-learn models for both training and inference under certain circumstances. This project is maintained by Intel(R) and scikit-learn’s maintainers are not involved in the development of this project. Also note that in some cases using the tools and estimators under`scikit-learn-intelex`

would give different results than`scikit-learn`

itself. If you encounter issues while using this project, make sure you report potential issues in their respective repositories.

**Interface to R with genomic applications**

[BiocSklearn](https://bioconductor.org/packages/BiocSklearn)Exposes a small number of dimension reduction facilities as an illustration of the basilisk protocol for interfacing Python with R. Intended as a springboard for more complete interop.

## Other estimators and tasks[#](#other-estimators-and-tasks)

Not everything belongs or is mature enough for the central scikit-learn project. The following are projects providing interfaces similar to scikit-learn for additional learning algorithms, infrastructures and tasks.

**Time series and forecasting**

[aeon](https://github.com/aeon-toolkit/aeon)A scikit-learn compatible toolbox for machine learning with time series (fork of[sktime](https://github.com/sktime/sktime)).[Darts](https://unit8co.github.io/darts/)A Python library for user-friendly forecasting and anomaly detection on time series. It contains a variety of models, from classics such as ARIMA to deep neural networks. The forecasting models can all be used in the same way, using fit() and predict() functions, similar to scikit-learn.[sktime](https://github.com/sktime/sktime)A scikit-learn compatible toolbox for machine learning with time series including time series classification/regression and (supervised/panel) forecasting.[skforecast](https://github.com/JoaquinAmatRodrigo/skforecast)A Python library that eases using scikit-learn regressors as multi-step forecasters. It also works with any regressor compatible with the scikit-learn API.[tslearn](https://github.com/tslearn-team/tslearn)A machine learning library for time series that offers tools for pre-processing and feature extraction as well as dedicated models for clustering, classification and regression.

**Gradient (tree) boosting**

Note scikit-learn own modern gradient boosting estimators
[ HistGradientBoostingClassifier](modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[.](modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

[XGBoost](https://github.com/dmlc/xgboost)XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable.[LightGBM](https://lightgbm.readthedocs.io)LightGBM is a gradient boosting framework that uses tree based learning algorithms. It is designed to be distributed and efficient.

**Structured learning**

[HMMLearn](https://github.com/hmmlearn/hmmlearn)Implementation of hidden markov models that was previously part of scikit-learn.[pomegranate](https://github.com/jmschrei/pomegranate)Probabilistic modelling for Python, with an emphasis on hidden Markov models.

**Deep neural networks etc.**

[skorch](https://github.com/dnouri/skorch)A scikit-learn compatible neural network library that wraps PyTorch.[scikeras](https://github.com/adriangb/scikeras)provides a wrapper around Keras to interface it with scikit-learn. SciKeras is the successor of`tf.keras.wrappers.scikit_learn`

.

**Federated Learning**

[Flower](https://flower.dev/)A friendly federated learning framework with a unified approach that can federate any workload, any ML framework, and any programming language.

**Privacy Preserving Machine Learning**

[Concrete ML](https://github.com/zama-ai/concrete-ml/)A privacy preserving ML framework built on top of[Concrete](https://github.com/zama-ai/concrete), with bindings to traditional ML frameworks, thanks to fully homomorphic encryption. APIs of so-called Concrete ML built-in models are very close to scikit-learn APIs.

**Broad scope**

[mlxtend](https://github.com/rasbt/mlxtend)Includes a number of additional estimators as well as model visualization utilities.[scikit-lego](https://github.com/koaning/scikit-lego)A number of scikit-learn compatible custom transformers, models and metrics, focusing on solving practical industry tasks.

**Other regression and classification**

[gplearn](https://github.com/trevorstephens/gplearn)Genetic Programming for symbolic regression tasks.[scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)Multi-label classification with focus on label space manipulation.

**Decomposition and clustering**

[lda](https://github.com/lda-project/lda/): Fast implementation of latent Dirichlet allocation in Cython which uses[Gibbs sampling](https://en.wikipedia.org/wiki/Gibbs_sampling)to sample from the true posterior distribution. (scikit-learn’simplementation uses`LatentDirichletAllocation`

[variational inference](https://en.wikipedia.org/wiki/Variational_Bayesian_methods)to sample from a tractable approximation of a topic model’s posterior distribution.)[kmodes](https://github.com/nicodv/kmodes)k-modes clustering algorithm for categorical data, and several of its variations.[hdbscan](https://github.com/scikit-learn-contrib/hdbscan)HDBSCAN and Robust Single Linkage clustering algorithms for robust variable density clustering. As of scikit-learn version 1.3.0, there is.`HDBSCAN`


**Pre-processing**

[categorical-encoding](https://github.com/scikit-learn-contrib/categorical-encoding)A library of sklearn compatible categorical variable encoders. As of scikit-learn version 1.3.0, there is.`TargetEncoder`

[skrub](https://skrub-data.org): facilitate learning on dataframes, with sklearn compatible encoders (of categories, dates, strings) and more.[imbalanced-learn](https://github.com/scikit-learn-contrib/imbalanced-learn)Various methods to under- and over-sample datasets.[Feature-engine](https://github.com/solegalli/feature_engine)A library of sklearn compatible transformers for missing data imputation, categorical encoding, variable transformation, discretization, outlier handling and more. Feature-engine allows the application of preprocessing steps to selected groups of variables and it is fully compatible with the Scikit-learn Pipeline.

**Topological Data Analysis**

[giotto-tda](https://github.com/giotto-ai/giotto-tda)A library for[Topological Data Analysis](https://en.wikipedia.org/wiki/Topological_data_analysis)aiming to provide a scikit-learn compatible API. It offers tools to transform data inputs (point clouds, graphs, time series, images) into forms suitable for computations of topological summaries, and components dedicated to extracting sets of scalar features of topological origin, which can be used alongside other feature extraction methods in scikit-learn.

## Statistical learning with Python[#](#statistical-learning-with-python)

Other packages useful for data analysis and machine learning.

[Pandas](https://pandas.pydata.org/)Tools for working with heterogeneous and columnar data, relational queries, time series and basic statistics.[statsmodels](https://www.statsmodels.org)Estimating and analysing statistical models. More focused on statistical tests and less on prediction than scikit-learn.[PyMC](https://www.pymc.io/)Bayesian statistical models and fitting algorithms.[Seaborn](https://stanford.edu/~mwaskom/software/seaborn/)A visualization library based on matplotlib. It provides a high-level interface for drawing attractive statistical graphics.[scikit-survival](https://scikit-survival.readthedocs.io/)A library implementing models to learn from censored time-to-event data (also called survival analysis). Models are fully compatible with scikit-learn.

### Recommendation Engine packages[#](#recommendation-engine-packages)

[implicit](https://github.com/benfred/implicit), Library for implicit feedback datasets.[lightfm](https://github.com/lyst/lightfm)A Python/Cython implementation of a hybrid recommender system.[Surprise Lib](https://surpriselib.com/)Library for explicit feedback datasets.

### Domain specific packages[#](#domain-specific-packages)

[scikit-network](https://scikit-network.readthedocs.io/)Machine learning on graphs.[scikit-image](https://scikit-image.org/)Image processing and computer vision in Python.[Natural language toolkit (nltk)](https://www.nltk.org/)Natural language processing and some machine learning.[gensim](https://radimrehurek.com/gensim/)A library for topic modelling, document indexing and similarity retrieval[NiLearn](https://nilearn.github.io/)Machine learning for neuro-imaging.[AstroML](https://www.astroml.org/)Machine learning for astronomy.

## Translations of scikit-learn documentation[#](#translations-of-scikit-learn-documentation)

Translation’s purpose is to ease reading and understanding in languages
other than English. Its aim is to help people who do not understand English
or have doubts about its interpretation. Additionally, some people prefer
to read documentation in their native language, but please bear in mind that
the only official documentation is the English one [[1]](#f1).

Those translation efforts are community initiatives and we have no control on them. If you want to contribute or report an issue with the translation, please contact the authors of the translation. Some available translations are linked here to improve their dissemination and promote community efforts.

Footnotes

---

## Source: https://scikit-learn.org/stable/roadmap.html

# Roadmap[#](#roadmap)

## Purpose of this document[#](#purpose-of-this-document)

This document lists general directions that core contributors are interested to see developed in scikit-learn. The fact that an item is listed here is in no way a promise that it will happen, as resources are limited. Rather, it is an indication that help is welcomed on this topic.

## Statement of purpose: Scikit-learn in 2018[#](#statement-of-purpose-scikit-learn-in-2018)

Eleven years after the inception of Scikit-learn, much has changed in the world of machine learning. Key changes include:

Computational tools: The exploitation of GPUs, distributed programming frameworks like Scala/Spark, etc.

High-level Python libraries for experimentation, processing and data management: Jupyter notebook, Cython, Pandas, Dask, Numba…

Changes in the focus of machine learning research: artificial intelligence applications (where input structure is key) with deep learning, representation learning, reinforcement learning, domain transfer, etc.


A more subtle change over the last decade is that, due to changing interests in ML, PhD students in machine learning are more likely to contribute to PyTorch, Dask, etc. than to Scikit-learn, so our contributor pool is very different to a decade ago.

Scikit-learn remains very popular in practice for trying out canonical machine learning techniques, particularly for applications in experimental science and in data science. A lot of what we provide is now very mature. But it can be costly to maintain, and we cannot therefore include arbitrary new implementations. Yet Scikit-learn is also essential in defining an API framework for the development of interoperable machine learning components external to the core library.

**Thus our main goals in this era are to**:

continue maintaining a high-quality, well-documented collection of canonical tools for data processing and machine learning within the current scope (i.e. rectangular data largely invariant to column and row order; predicting targets with simple structure)

improve the ease for users to develop and publish external components

improve interoperability with modern data science tools (e.g. Pandas, Dask) and infrastructures (e.g. distributed processing)


Many of the more fine-grained goals can be found under the [API tag](https://github.com/scikit-learn/scikit-learn/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AAPI)
on the issue tracker.

## Architectural / general goals[#](#architectural-general-goals)

The list is numbered not as an indication of the order of priority, but to make referring to specific points easier. Please add new entries only at the bottom. Note that the crossed out entries are already done, and we try to keep the document up to date as we work on these issues.

Improved handling of Pandas DataFrames

document current handling


Improved handling of categorical features

Tree-based models should be able to handle both continuous and categorical features

[#29437](https://github.com/scikit-learn/scikit-learn/issues/29437).Handling mixtures of categorical and continuous variables


Improved handling of missing data

Making sure meta-estimators are lenient towards missing data by implementing a common test.

An amputation sample generator to make parts of a dataset go missing

[#6284](https://github.com/scikit-learn/scikit-learn/issues/6284)

More didactic documentation

More and more options have been added to scikit-learn. As a result, the documentation is crowded which makes it hard for beginners to get the big picture. Some work could be done in prioritizing the information.


Passing around information that is not (X, y): Feature properties

Per-feature handling (e.g. “is this a nominal / ordinal / English language text?”) should also not need to be provided to estimator constructors, ideally, but should be available as metadata alongside X.

[#8480](https://github.com/scikit-learn/scikit-learn/issues/8480)

Passing around information that is not (X, y): Target information

Make it easier for external users to write Scikit-learn-compatible components

More self-sufficient running of scikit-learn-contrib or a similar resource


Support resampling and sample reduction

Allow subsampling of majority classes (in a pipeline?)

[#3855](https://github.com/scikit-learn/scikit-learn/issues/3855)

Better interfaces for interactive development

Improve the HTML visualisations of estimators via the

`estimator_html_repr`

.Include more plotting tools, not just as examples.


Improved tools for model diagnostics and basic inference

work on a unified interface for “feature importance”

better ways to handle validation sets when fitting


Better tools for selecting hyperparameters with transductive estimators

Grid search and cross validation are not applicable to most clustering tasks. Stability-based selection is more relevant.


Better support for manual and automatic pipeline building

Easier way to construct complex pipelines and valid search spaces

[#7608](https://github.com/scikit-learn/scikit-learn/issues/7608)[#5082](https://github.com/scikit-learn/scikit-learn/issues/5082)[#8243](https://github.com/scikit-learn/scikit-learn/issues/8243)provide search ranges for common estimators??

cf.

[searchgrid](https://searchgrid.readthedocs.io/en/latest/)

Improved tracking of fitting

Distributed parallelism

Accept data which complies with

`__array_function__`


A way forward for more out of core

Dask enables easy out-of-core computation. While the Dask model probably cannot be adaptable to all machine-learning algorithms, most machine learning is on smaller data than ETL, hence we can maybe adapt to very large scale while supporting only a fraction of the patterns.


Backwards-compatible de/serialization of some estimators

Currently serialization (with pickle) breaks across versions. While we may not be able to get around other limitations of pickle re security etc, it would be great to offer cross-version safety from version 1.0. Note: Gael and Olivier think that this can cause heavy maintenance burden and we should manage the trade-offs. A possible alternative is presented in the following point.


Documentation and tooling for model lifecycle management

Document good practices for model deployments and lifecycle: before deploying a model: snapshot the code versions (numpy, scipy, scikit-learn, custom code repo), the training script and an alias on how to retrieve historical training data + snapshot a copy of a small validation set + snapshot of the predictions (predicted probabilities for classifiers) on that validation set.

Document and tools to make it easy to manage upgrade of scikit-learn versions:

Try to load the old pickle, if it works, use the validation set prediction snapshot to detect that the serialized model still behaves the same;

If joblib.load / pickle.load does not work, use the versioned control training script + historical training set to retrain the model and use the validation set prediction snapshot to assert that it is possible to recover the previous predictive performance: if this is not the case there is probably a bug in scikit-learn that needs to be reported.



Everything in scikit-learn should probably conform to our API contract. We are still in the process of making decisions on some of these related issues.

(Optional) Improve scikit-learn common tests suite to make sure that (at least for frequently used) models have stable predictions across-versions (to be discussed);

Extend documentation to mention how to deploy models in Python-free environments for instance

[ONNX](https://github.com/onnx/sklearn-onnx). and use the above best practices to assess predictive consistency between scikit-learn and ONNX prediction functions on validation set.Document good practices to detect temporal distribution drift for deployed model and good practices for re-training on fresh data without causing catastrophic predictive performance regressions.

---

## Source: https://scikit-learn.org/stable/governance.html

# Scikit-learn governance and decision-making[#](#scikit-learn-governance-and-decision-making)

The purpose of this document is to formalize the governance process used by the scikit-learn project, to clarify how decisions are made and how the various elements of our community interact. This document establishes a decision-making structure that takes into account feedback from all members of the community and strives to find consensus, while avoiding any deadlocks.

This is a meritocratic, consensus-based community project. Anyone with an interest in the project can join the community, contribute to the project design and participate in the decision making process. This document describes how that participation takes place and how to set about earning merit within the project community.

## Roles And Responsibilities[#](#roles-and-responsibilities)

We distinguish between contributors, core contributors, and the technical committee. A key distinction between them is their voting rights: contributors have no voting rights, whereas the other two groups all have voting rights, as well as permissions to the tools relevant to their roles.

### Contributors[#](#contributors)

Contributors are community members who contribute in concrete ways to the
project. Anyone can become a contributor, and contributions can take many forms
– not only code – as detailed in the [contributors guide](developers/contributing.html#contributing).
There is no process to become a contributor: once somebody contributes to the
project in any way, they are a contributor.

### Core Contributors[#](#core-contributors)

All core contributor members have the same voting rights and right to propose
new members to any of the roles listed below. Their membership is represented
as being an organization member on the scikit-learn [GitHub organization](https://github.com/orgs/scikit-learn/people).

They are also welcome to join our [monthly core contributor meetings](https://github.com/scikit-learn/administrative/tree/master/meeting_notes).

New members can be nominated by any existing member. Once they have been nominated, there will be a vote by the current core contributors. Voting on new members is one of the few activities that takes place on the project’s private mailing list. While it is expected that most votes will be unanimous, a two-thirds majority of the cast votes is enough. The vote needs to be open for at least 1 week.

Core contributors that have not contributed to the project, corresponding to their role, in the past 12 months will be asked if they want to become emeritus members and recant their rights until they become active again. The list of members, active and emeritus (with dates at which they became active) is public on the scikit-learn website. It is the responsibility of the active core contributors to send such a yearly reminder email.

The following teams form the core contributors group:

**Contributor Experience Team**The contributor experience team improves the experience of contributors by helping with the triage of issues and pull requests, as well as noticing any repeating patterns where people might struggle, and to help with improving those aspects of the project.To this end, they have the required permissions on GitHub to label and close issues.

[Their work](developers/bug_triaging.html#bug-triaging)is crucial to improve the communication in the project and limit the crowding of the issue tracker.**Communication Team**Members of the communication team help with outreach and communication for scikit-learn. The goal of the team is to develop public awareness of scikit-learn, of its features and usage, as well as branding.For this, they can operate the scikit-learn accounts on various social networks and produce materials. They also have the required rights to our blog repository and other relevant accounts and platforms.

**Documentation Team**Members of the documentation team engage with the documentation of the project among other things. They might also be involved in other aspects of the project, but their reviews on documentation contributions are considered authoritative, and can merge such contributions.To this end, they have permissions to merge pull requests in scikit-learn’s repository.

**Maintainers Team**Maintainers are community members who have shown that they are dedicated to the continued development of the project through ongoing engagement with the community. They have shown they can be trusted to maintain scikit-learn with care. Being a maintainer allows contributors to more easily carry on with their project related activities by giving them direct access to the project’s repository. Maintainers are expected to review code contributions, merge approved pull requests, cast votes for and against merging a pull-request, and to be involved in deciding major changes to the API.

### Technical Committee[#](#technical-committee)

The Technical Committee (TC) members are maintainers who have additional responsibilities to ensure the smooth running of the project. TC members are expected to participate in strategic planning, and approve changes to the governance model. The purpose of the TC is to ensure a smooth progress from the big-picture perspective. Indeed changes that impact the full project require a synthetic analysis and a consensus that is both explicit and informed. In cases that the core contributor community (which includes the TC members) fails to reach such a consensus in the required time frame, the TC is the entity to resolve the issue. Membership of the TC is by nomination by a core contributor. A nomination will result in discussion which cannot take more than a month and then a vote by the core contributors which will stay open for a week. TC membership votes are subject to a two-third majority of all cast votes as well as a simple majority approval of all the current TC members. TC members who do not actively engage with the TC duties are expected to resign.

The Technical Committee of scikit-learn consists of [Thomas Fan](https://github.com/thomasjpfan), [Alexandre Gramfort](https://github.com/agramfort), [Olivier Grisel](https://github.com/ogrisel), [Adrin Jalali](https://github.com/adrinjalali), [Andreas Müller](https://github.com/amueller), [Joel Nothman](https://github.com/jnothman) and [Gaël Varoquaux](https://github.com/GaelVaroquaux).

## Decision Making Process[#](#decision-making-process)

Decisions about the future of the project are made through discussion with all
members of the community. All non-sensitive project management discussion takes
place on the project contributors’ [mailing list](mailto:scikit-learn%40python.org)
and the [issue tracker](https://github.com/scikit-learn/scikit-learn/issues).
Occasionally, sensitive discussion occurs on a private list.

Scikit-learn uses a “consensus seeking” process for making decisions. The group
tries to find a resolution that has no open objections among core contributors.
At any point during the discussion, any core contributor can call for a vote,
which will conclude one month from the call for the vote. Most votes have to be
backed by a [SLEP](#slep). If no option can gather two thirds of the votes
cast, the decision is escalated to the TC, which in turn will use consensus
seeking with the fallback option of a simple majority vote if no consensus can
be found within a month. This is what we hereafter may refer to as “**the
decision making process**”.

Decisions (in addition to adding core contributors and TC membership as above) are made according to the following rules:

**Minor code and documentation changes**, such as small maintenance changes without modification of code logic, typo fixes, or addition / correction of a sentence, but no change of the`scikit-learn.org`

landing page or the “about” page: Requires +1 by a core contributor, no -1 by a core contributor (lazy consensus), happens on the issue or pull request page. Core contributors are expected to give “reasonable time” to others to give their opinion on the pull request if they’re not confident others would agree.**Code changes and major documentation changes**require +1 by two core contributors, no -1 by a core contributor (lazy consensus), happens on the issue of pull-request page.**Changes to the API principles and changes to dependencies or supported versions**follow the decision-making process outlined above. In particular changes to API principles are backed via a[Enhancement proposals (SLEPs)](#slep). Smaller decisions like supported versions can happen on a GitHub issue or pull request.**Changes to the governance model**follow the process outlined in[SLEP020](https://scikit-learn-enhancement-proposals.readthedocs.io/en/latest/slep020/proposal.html).

If a veto -1 vote is cast on a lazy consensus, the proposer can appeal to the community and maintainers and the change can be approved or rejected using the decision making procedure outlined above.

### Governance Model Changes[#](#governance-model-changes)

Governance model changes occur through an enhancement proposal or a GitHub Pull
Request. An enhancement proposal will go through “**the decision-making process**”
described in the previous section. Alternatively, an author may propose a change
directly to the governance model with a GitHub Pull Request. Logistically, an
author can open a Draft Pull Request for feedback and follow up with a new
revised Pull Request for voting. Once that author is happy with the state of the
Pull Request, they can call for a vote on the public mailing list. During the
one-month voting period, the Pull Request can not change. A Pull Request
Approval will count as a positive vote, and a “Request Changes” review will
count as a negative vote. If two-thirds of the cast votes are positive, then
the governance model change is accepted.

## Enhancement proposals (SLEPs)[#](#enhancement-proposals-sleps)

For all votes, a proposal must have been made public and discussed before the
vote. Such proposal must be a consolidated document, in the form of a
“Scikit-Learn Enhancement Proposal” (SLEP), rather than a long discussion on an
issue. A SLEP must be submitted as a pull-request to [enhancement proposals](https://scikit-learn-enhancement-proposals.readthedocs.io) using the [SLEP
template](https://scikit-learn-enhancement-proposals.readthedocs.io/en/latest/slep_template.html).
[SLEP000](https://scikit-learn-enhancement-proposals.readthedocs.io/en/latest/slep000/proposal.html)
describes the process in more detail.

---

## Source: https://scikit-learn.org/stable/about.html

# About us[#](#about-us)

## History[#](#history)

This project was started in 2007 as a Google Summer of Code project by David Cournapeau. Later that year, Matthieu Brucher started working on this project as part of his thesis.

In 2010 Fabian Pedregosa, Gael Varoquaux, Alexandre Gramfort and Vincent Michel of INRIA took leadership of the project and made the first public release, February the 1st 2010. Since then, several releases have appeared following an approximately 3-month cycle, and a thriving international community has been leading the development. As a result, INRIA holds the copyright over the work done by people who were employed by INRIA at the time of the contribution.

## Governance[#](#governance)

The decision making process and governance structure of scikit-learn, like roles and responsibilities, is laid out in the [governance document](governance.html#governance).

## The people behind scikit-learn[#](#the-people-behind-scikit-learn)

scikit-learn is a community project, developed by a large group of
people, all across the world. A few core contributor teams, listed below, have
central roles, however a more complete list of contributors can be found [on
GitHub](https://github.com/scikit-learn/scikit-learn/graphs/contributors).

### Active Core Contributors[#](#active-core-contributors)

#### Maintainers Team[#](#maintainers-team)

The following people are currently maintainers, in charge of consolidating scikit-learn’s development and maintenance:

Note

Please do not email the authors directly to ask for assistance or report issues.
Instead, please see [What’s the best way to ask questions about scikit-learn](https://scikit-learn.org/stable/faq.html#what-s-the-best-way-to-get-help-on-scikit-learn-usage)
in the FAQ.

See also

How you can [contribute to the project](developers/contributing.html#contributing).

#### Documentation Team[#](#documentation-team)

The following people help with documenting the project:

#### Contributor Experience Team[#](#contributor-experience-team)

The following people are active contributors who also help with
[triaging issues](developers/bug_triaging.html#bug-triaging), PRs, and general
maintenance:

#### Communication Team[#](#communication-team)

The following people help with [communication around scikit-learn](governance.html#communication-team).

### Emeritus Core Contributors[#](#emeritus-core-contributors)

#### Emeritus Maintainers Team[#](#emeritus-maintainers-team)

The following people have been active contributors in the past, but are no longer active in the project:

Mathieu Blondel

Joris Van den Bossche

Matthieu Brucher

Lars Buitinck

David Cournapeau

Noel Dawe

Vincent Dubourg

Edouard Duchesnay

Alexander Fabisch

Virgile Fritsch

Satrajit Ghosh

Angel Soler Gollonet

Chris Gorgolewski

Jaques Grobler

Yaroslav Halchenko

Brian Holt

Nicolas Hug

Arnaud Joly

Thouis (Ray) Jones

Kyle Kastner

Manoj Kumar

Robert Layton

Wei Li

Paolo Losi

Gilles Louppe

Jan Hendrik Metzen

Vincent Michel

Jarrod Millman

Vlad Niculae

Alexandre Passos

Fabian Pedregosa

Peter Prettenhofer

Hanmin Qin

(Venkat) Raghav, Rajagopalan

Jacob Schreiber

杜世橋 Du Shiqiao

Bertrand Thirion

Tom Dupré la Tour

Jake Vanderplas

Nelle Varoquaux

David Warde-Farley

Ron Weiss

Roman Yurchak


#### Emeritus Communication Team[#](#emeritus-communication-team)

The following people have been active in the communication team in the past, but no longer have communication responsibilities:

Reshama Shaikh


#### Emeritus Contributor Experience Team[#](#emeritus-contributor-experience-team)

The following people have been active in the contributor experience team in the past:

Chiara Marmo


## Citing scikit-learn[#](#citing-scikit-learn)

If you use scikit-learn in a scientific publication, we would appreciate citations to the following paper:

[Scikit-learn: Machine Learning in Python](https://jmlr.csail.mit.edu/papers/v12/pedregosa11a.html), Pedregosa
*et al.*, JMLR 12, pp. 2825-2830, 2011.

Bibtex entry:

```
@article{scikit-learn,
title={Scikit-learn: Machine Learning in {P}ython},
author={Pedregosa, F. and Varoquaux, G. and Gramfort, A. and Michel, V.
and Thirion, B. and Grisel, O. and Blondel, M. and Prettenhofer, P.
and Weiss, R. and Dubourg, V. and Vanderplas, J. and Passos, A. and
Cournapeau, D. and Brucher, M. and Perrot, M. and Duchesnay, E.},
journal={Journal of Machine Learning Research},
volume={12},
pages={2825--2830},
year={2011}
}
```

If you want to cite scikit-learn for its API or design, you may also want to consider the following paper:

[API design for machine learning software: experiences from the scikit-learn
project](https://arxiv.org/abs/1309.0238), Buitinck *et al.*, 2013.

Bibtex entry:

```
@inproceedings{sklearn_api,
author = {Lars Buitinck and Gilles Louppe and Mathieu Blondel and
Fabian Pedregosa and Andreas Mueller and Olivier Grisel and
Vlad Niculae and Peter Prettenhofer and Alexandre Gramfort
and Jaques Grobler and Robert Layton and Jake VanderPlas and
Arnaud Joly and Brian Holt and Ga{\"{e}}l Varoquaux},
title = {{API} design for machine learning software: experiences from the scikit-learn
project},
booktitle = {ECML PKDD Workshop: Languages for Data Mining and Machine Learning},
year = {2013},
pages = {108--122},
}
```

## Branding & Logos[#](#branding-logos)

High quality PNG and SVG logos are available in the [doc/logos](https://github.com/scikit-learn/scikit-learn/tree/main/doc/logos)
source directory. The color palette is available in the
[Branding Guide](https://github.com/scikit-learn/blog?tab=readme-ov-file#brand-standards).

## Funding[#](#funding)

Scikit-learn is a community driven project, however institutional and private grants help to assure its sustainability.

The project would like to thank the following funders.

[:probabl.](https://probabl.ai) manages the whole sponsorship program
and employs the full-time core maintainers Adrin Jalali, Arturo Amor,
François Goupil, Guillaume Lemaitre, Jérémie du Boisberranger, Loïc Estève,
Olivier Grisel, and Stefanie Senger.

## Active Sponsors[#](#active-sponsors)

### Founding sponsors[#](#founding-sponsors)

[Inria](https://www.inria.fr) supports scikit-learn through their
sponsorship.

### Gold sponsors[#](#gold-sponsors)

[Chanel](https://www.chanel.com) supports scikit-learn through their
sponsorship.

### Silver sponsors[#](#silver-sponsors)

[BNP Paribas Group](https://group.bnpparibas/) supports scikit-learn
through their sponsorship.

### Bronze sponsors[#](#bronze-sponsors)

[NVIDIA](https://nvidia.com) supports scikit-learn through their sponsorship and employs full-time core maintainer Tim Head.

### Other contributions[#](#other-contributions)

[Microsoft](https://microsoft.com/)funds Andreas Müller since 2020.[Quansight Labs](https://labs.quansight.org)funds Lucy Liu since 2022.[The Chan-Zuckerberg Initiative](https://chanzuckerberg.com/)and[Wellcome Trust](https://wellcome.org/)fund scikit-learn through the[Essential Open Source Software for Science (EOSS)](https://chanzuckerberg.com/eoss/)cycle 6.It supports Lucy Liu and diversity & inclusion initiatives that will be announced in the future.

[Tidelift](https://tidelift.com/)supports the project via their service agreement.

## Past Sponsors[#](#past-sponsors)

[Quansight Labs](https://labs.quansight.org) funded Meekail Zain in 2022 and 2023,
and funded Thomas J. Fan from 2021 to 2023.

[Columbia University](https://columbia.edu/) funded Andreas Müller
(2016-2020).

[The University of Sydney](https://sydney.edu.au/) funded Joel Nothman
(2017-2021).

Andreas Müller received a grant to improve scikit-learn from the
[Alfred P. Sloan Foundation](https://sloan.org) .
This grant supported the position of Nicolas Hug and Thomas J. Fan.

[INRIA](https://www.inria.fr) has provided funding for Fabian Pedregosa
(2010-2012), Jaques Grobler (2012-2013) and Olivier Grisel (2013-2017) to
work on this project full-time. It also hosts coding sprints and other events.

[Paris-Saclay Center for Data Science](http://www.datascience-paris-saclay.fr/)
funded one year for a developer to work on the project full-time (2014-2015), 50%
of the time of Guillaume Lemaitre (2016-2017) and 50% of the time of Joris van den
Bossche (2017-2018).

[NYU Moore-Sloan Data Science Environment](https://cds.nyu.edu/mooresloan/)
funded Andreas Mueller (2014-2016) to work on this project. The Moore-Sloan
Data Science Environment also funds several students to work on the project
part-time.

[Télécom Paristech](https://www.telecom-paristech.fr/) funded Manoj Kumar
(2014), Tom Dupré la Tour (2015), Raghav RV (2015-2017), Thierry Guillemot
(2016-2017) and Albert Thomas (2017) to work on scikit-learn.

[The Labex DigiCosme](https://digicosme.lri.fr) funded Nicolas Goix
(2015-2016), Tom Dupré la Tour (2015-2016 and 2017-2018), Mathurin Massias
(2018-2019) to work part time on scikit-learn during their PhDs. It also
funded a scikit-learn coding sprint in 2015.

[The Chan-Zuckerberg Initiative](https://chanzuckerberg.com/) funded Nicolas
Hug to work full-time on scikit-learn in 2020.

The following students were sponsored by [Google](https://opensource.google/) to work on scikit-learn through
the [Google Summer of Code](https://en.wikipedia.org/wiki/Google_Summer_of_Code)
program.

2007 - David Cournapeau

2011 -

[Vlad Niculae](https://vene.ro/)2012 -

[Vlad Niculae](https://vene.ro/), Immanuel Bayer2013 - Kemal Eren, Nicolas Trésegnie

2014 - Hamzeh Alsalhi, Issam Laradji, Maheshakya Wijewardena, Manoj Kumar

2015 -

[Raghav RV](https://github.com/raghavrv), Wei Xue2016 -

[Nelson Liu](http://nelsonliu.me),[YenChen Lin](https://yenchenlin.me/)

The [NeuroDebian](http://neuro.debian.net) project providing [Debian](https://www.debian.org/) packaging and contributions is supported by
[Dr. James V. Haxby](http://haxbylab.dartmouth.edu/) ([Dartmouth
College](https://pbs.dartmouth.edu/)).

The following organizations funded the scikit-learn consortium at Inria in the past:

### Donations in Kind[#](#donations-in-kind)

The following organizations provide non-financial contributions to the scikit-learn project.

| Company | Contribution |
|---|---|
|

[CircleCI](https://circleci.com/)[GitHub](https://www.github.com)[Microsoft Azure](https://azure.microsoft.com/en-us/)### Coding Sprints[#](#coding-sprints)

The scikit-learn project has a long history of [open source coding sprints](https://blog.scikit-learn.org/events/sprints-value/) with over 50 sprint
events from 2010 to present day. There are scores of sponsors who contributed
to costs which include venue, food, travel, developer time and more. See
[scikit-learn sprints](https://blog.scikit-learn.org/sprints/) for a full
list of events.

## Donating to the project[#](#donating-to-the-project)

If you have found scikit-learn to be useful in your work, research, or company, please consider making a donation to the project commensurate with your resources. There are several options for making donations:

[
Donate via NumFOCUS
](https://numfocus.org/donate-to-scikit-learn)
[
Donate via GitHub Sponsors
](https://github.com/sponsors/scikit-learn)
[
Donate via Benevity
](https://causes.benevity.org/projects/433725)

**Donation Options:**

**NumFOCUS**: Donate via the[NumFOCUS Donations Page](https://numfocus.org/donate-to-scikit-learn), scikit-learn’s fiscal sponsor.**GitHub Sponsors**: Support the project directly through[GitHub Sponsors](https://github.com/sponsors/scikit-learn).**Benevity**: If your company uses scikit-learn, you can also support the project through Benevity, a platform to manage employee donations. It is widely used by hundreds of Fortune 1000 companies to streamline and scale their social impact initiatives. If your company uses Benevity, you are able to make a donation with a company match as high as 100%. Our project ID is[433725](https://causes.benevity.org/projects/433725).

All donations are managed by [NumFOCUS](https://numfocus.org/), a 501(c)(3)
non-profit organization based in Austin, Texas, USA. The NumFOCUS board
consists of [SciPy community members](https://numfocus.org/board.html).
Contributions are tax-deductible to the extent allowed by law.

Notes

Contributions support the maintenance of the project, including development, documentation, infrastructure and coding sprints.

### scikit-learn Swag[#](#scikit-learn-swag)

Official scikit-learn swag is available for purchase at the [NumFOCUS online store](https://numfocus.myspreadshop.com/scikit-learn+logo?idea=6335cad48f3f5268f5f42559).
A portion of the proceeds from each sale goes to support the scikit-learn project.

---

## Source: https://scikit-learn.org/stable/supervised_learning.html

# 1. Supervised learning[#](#supervised-learning)

[1.1. Linear Models](modules/linear_model.html)[1.1.1. Ordinary Least Squares](modules/linear_model.html#ordinary-least-squares)[1.1.2. Ridge regression and classification](modules/linear_model.html#ridge-regression-and-classification)[1.1.3. Lasso](modules/linear_model.html#lasso)[1.1.4. Multi-task Lasso](modules/linear_model.html#multi-task-lasso)[1.1.5. Elastic-Net](modules/linear_model.html#elastic-net)[1.1.6. Multi-task Elastic-Net](modules/linear_model.html#multi-task-elastic-net)[1.1.7. Least Angle Regression](modules/linear_model.html#least-angle-regression)[1.1.8. LARS Lasso](modules/linear_model.html#lars-lasso)[1.1.9. Orthogonal Matching Pursuit (OMP)](modules/linear_model.html#orthogonal-matching-pursuit-omp)[1.1.10. Bayesian Regression](modules/linear_model.html#bayesian-regression)[1.1.11. Logistic regression](modules/linear_model.html#logistic-regression)[1.1.12. Generalized Linear Models](modules/linear_model.html#generalized-linear-models)[1.1.13. Stochastic Gradient Descent - SGD](modules/linear_model.html#stochastic-gradient-descent-sgd)[1.1.14. Robustness regression: outliers and modeling errors](modules/linear_model.html#robustness-regression-outliers-and-modeling-errors)[1.1.15. Quantile Regression](modules/linear_model.html#quantile-regression)[1.1.16. Polynomial regression: extending linear models with basis functions](modules/linear_model.html#polynomial-regression-extending-linear-models-with-basis-functions)

[1.2. Linear and Quadratic Discriminant Analysis](modules/lda_qda.html)[1.3. Kernel ridge regression](modules/kernel_ridge.html)[1.4. Support Vector Machines](modules/svm.html)[1.5. Stochastic Gradient Descent](modules/sgd.html)[1.6. Nearest Neighbors](modules/neighbors.html)[1.7. Gaussian Processes](modules/gaussian_process.html)[1.8. Cross decomposition](modules/cross_decomposition.html)[1.9. Naive Bayes](modules/naive_bayes.html)[1.10. Decision Trees](modules/tree.html)[1.11. Ensembles: Gradient boosting, random forests, bagging, voting, stacking](modules/ensemble.html)[1.12. Multiclass and multioutput algorithms](modules/multiclass.html)[1.13. Feature selection](modules/feature_selection.html)[1.14. Semi-supervised learning](modules/semi_supervised.html)[1.15. Isotonic regression](modules/isotonic.html)[1.16. Probability calibration](modules/calibration.html)[1.17. Neural network models (supervised)](modules/neural_networks_supervised.html)

---

## Source: https://scikit-learn.org/stable/modules/linear_model.html

# 1.1. Linear Models[#](#linear-models)

The following are a set of methods intended for regression in which the target value is expected to be a linear combination of the features. In mathematical notation, if \(\hat{y}\) is the predicted value.

Across the module, we designate the vector \(w = (w_1,
..., w_p)\) as `coef_`

and \(w_0\) as `intercept_`

.

To perform classification with generalized linear models, see
[Logistic regression](#logistic-regression).

## 1.1.1. Ordinary Least Squares[#](#ordinary-least-squares)

[ LinearRegression](generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression) fits a linear model with coefficients
\(w = (w_1, ..., w_p)\) to minimize the residual sum
of squares between the observed targets in the dataset, and the
targets predicted by the linear approximation. Mathematically it
solves a problem of the form:

[ LinearRegression](generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression) takes in its

`fit`

method arguments `X`

, `y`

,
`sample_weight`

and stores the coefficients \(w\) of the linear model in its
`coef_`

and `intercept_`

attributes:```
>>> from sklearn import linear_model
>>> reg = linear_model.LinearRegression()
>>> reg.fit([[0, 0], [1, 1], [2, 2]], [0, 1, 2])
LinearRegression()
>>> reg.coef_
array([0.5, 0.5])
>>> reg.intercept_
0.0
```

The coefficient estimates for Ordinary Least Squares rely on the
independence of the features. When features are correlated and some
columns of the design matrix \(X\) have an approximately linear
dependence, the design matrix becomes close to singular
and as a result, the least-squares estimate becomes highly sensitive
to random errors in the observed target, producing a large
variance. This situation of *multicollinearity* can arise, for
example, when data are collected without an experimental design.

Examples

### 1.1.1.1. Non-Negative Least Squares[#](#non-negative-least-squares)

It is possible to constrain all the coefficients to be non-negative, which may
be useful when they represent some physical or naturally non-negative
quantities (e.g., frequency counts or prices of goods).
[ LinearRegression](generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression) accepts a boolean

`positive`

parameter: when set to `True`

[Non-Negative Least Squares](https://en.wikipedia.org/wiki/Non-negative_least_squares)are then applied.

Examples

### 1.1.1.2. Ordinary Least Squares Complexity[#](#ordinary-least-squares-complexity)

The least squares solution is computed using the singular value
decomposition of \(X\). If \(X\) is a matrix of shape `(n_samples, n_features)`

this method has a cost of
\(O(n_{\text{samples}} n_{\text{features}}^2)\), assuming that
\(n_{\text{samples}} \geq n_{\text{features}}\).

## 1.1.2. Ridge regression and classification[#](#ridge-regression-and-classification)

### 1.1.2.1. Regression[#](#regression)

[ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge) regression addresses some of the problems of

[Ordinary Least Squares](#ordinary-least-squares)by imposing a penalty on the size of the coefficients. The ridge coefficients minimize a penalized residual sum of squares:

The complexity parameter \(\alpha \geq 0\) controls the amount of shrinkage: the larger the value of \(\alpha\), the greater the amount of shrinkage and thus the coefficients become more robust to collinearity.

As with other linear models, [ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge) will take in its

`fit`

method
arrays `X`

, `y`

and will store the coefficients \(w\) of the linear model in
its `coef_`

member:```
>>> from sklearn import linear_model
>>> reg = linear_model.Ridge(alpha=.5)
>>> reg.fit([[0, 0], [0, 0], [1, 1]], [0, .1, 1])
Ridge(alpha=0.5)
>>> reg.coef_
array([0.34545455, 0.34545455])
>>> reg.intercept_
np.float64(0.13636)
```

Note that the class [ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge) allows for the user to specify that the
solver be automatically chosen by setting

`solver="auto"`

. When this option
is specified, [will choose between the](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

`"lbfgs"`

, `"cholesky"`

,
and `"sparse_cg"`

solvers. [will begin checking the conditions shown in the following table from top to bottom. If the condition is true, the corresponding solver is chosen.](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

|
|
‘lbfgs’ |
The |
‘cholesky’ |
The input array X is not sparse. |
‘sparse_cg’ |
None of the above conditions are fulfilled. |

Examples

### 1.1.2.2. Classification[#](#classification)

The [ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge) regressor has a classifier variant:

[. This classifier first converts binary targets to](generated/sklearn.linear_model.RidgeClassifier.html#sklearn.linear_model.RidgeClassifier)

`RidgeClassifier`

`{-1, 1}`

and then treats the problem as a regression task, optimizing the
same objective as above. The predicted class corresponds to the sign of the
regressor’s prediction. For multiclass classification, the problem is
treated as multi-output regression, and the predicted class corresponds to
the output with the highest value.It might seem questionable to use a (penalized) Least Squares loss to fit a
classification model instead of the more traditional logistic or hinge
losses. However, in practice, all those models can lead to similar
cross-validation scores in terms of accuracy or precision/recall, while the
penalized least squares loss used by the [ RidgeClassifier](generated/sklearn.linear_model.RidgeClassifier.html#sklearn.linear_model.RidgeClassifier) allows for
a very different choice of the numerical solvers with distinct computational
performance profiles.

The [ RidgeClassifier](generated/sklearn.linear_model.RidgeClassifier.html#sklearn.linear_model.RidgeClassifier) can be significantly faster than e.g.

[with a high number of classes because it can compute the projection matrix \((X^T X)^{-1} X^T\) only once.](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

This classifier is sometimes referred to as a [Least Squares Support Vector
Machine](https://en.wikipedia.org/wiki/Least-squares_support-vector_machine) with
a linear kernel.

Examples

### 1.1.2.3. Ridge Complexity[#](#ridge-complexity)

This method has the same order of complexity as
[Ordinary Least Squares](#ordinary-least-squares).

### 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation[#](#setting-the-regularization-parameter-leave-one-out-cross-validation)

[ RidgeCV](generated/sklearn.linear_model.RidgeCV.html#sklearn.linear_model.RidgeCV) and

[implement ridge regression/classification with built-in cross-validation of the alpha parameter. They work in the same way as](generated/sklearn.linear_model.RidgeClassifierCV.html#sklearn.linear_model.RidgeClassifierCV)

`RidgeClassifierCV`

[except that it defaults to efficient Leave-One-Out](generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV)

`GridSearchCV`

[cross-validation](../glossary.html#term-cross-validation). When using the default

[cross-validation](../glossary.html#term-cross-validation), alpha cannot be 0 due to the formulation used to calculate Leave-One-Out error. See

[[RL2007]](#rl2007)for details.

Usage example:

```
>>> import numpy as np
>>> from sklearn import linear_model
>>> reg = linear_model.RidgeCV(alphas=np.logspace(-6, 6, 13))
>>> reg.fit([[0, 0], [0, 0], [1, 1]], [0, .1, 1])
RidgeCV(alphas=array([1.e-06, 1.e-05, 1.e-04, 1.e-03, 1.e-02, 1.e-01, 1.e+00, 1.e+01,
1.e+02, 1.e+03, 1.e+04, 1.e+05, 1.e+06]))
>>> reg.alpha_
np.float64(0.01)
```

Specifying the value of the [cv](../glossary.html#term-cv) attribute will trigger the use of
cross-validation with [ GridSearchCV](generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV), for
example

`cv=10`

for 10-fold cross-validation, rather than Leave-One-Out
Cross-Validation.##
References[#](#references)

[RL2007](#id3)]

“Notes on Regularized Least Squares”, Rifkin & Lippert ([technical report](http://cbcl.mit.edu/publications/ps/MIT-CSAIL-TR-2007-025.pdf),
[course slides](https://www.mit.edu/~9.520/spring07/Classes/rlsslides.pdf)).

## 1.1.3. Lasso[#](#lasso)

The [ Lasso](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso) is a linear model that estimates sparse coefficients, i.e., it is
able to set coefficients exactly to zero.
It is useful in some contexts due to its tendency to prefer solutions
with fewer non-zero coefficients, effectively reducing the number of
features upon which the given solution is dependent. For this reason,
Lasso and its variants are fundamental to the field of compressed sensing.
Under certain conditions, it can recover the exact set of non-zero coefficients (see

[Compressive sensing: tomography reconstruction with L1 prior (Lasso)](../auto_examples/applications/plot_tomography_l1_reconstruction.html#sphx-glr-auto-examples-applications-plot-tomography-l1-reconstruction-py)).

Mathematically, it consists of a linear model with an added regularization term. The objective function to minimize is:

The lasso estimate thus solves the least-squares with added penalty \(\alpha ||w||_1\), where \(\alpha\) is a constant and \(||w||_1\) is the \(\ell_1\)-norm of the coefficient vector.

The implementation in the class [ Lasso](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso) uses coordinate descent as
the algorithm to fit the coefficients. See

[Least Angle Regression](#least-angle-regression)for another implementation:

```
>>> from sklearn import linear_model
>>> reg = linear_model.Lasso(alpha=0.1)
>>> reg.fit([[0, 0], [1, 1]], [0, 1])
Lasso(alpha=0.1)
>>> reg.predict([[1, 1]])
array([0.8])
```

The function [ lasso_path](generated/sklearn.linear_model.lasso_path.html#sklearn.linear_model.lasso_path) is useful for lower-level tasks, as it
computes the coefficients along the full path of possible values.

Examples

[Compressive sensing: tomography reconstruction with L1 prior (Lasso)](../auto_examples/applications/plot_tomography_l1_reconstruction.html#sphx-glr-auto-examples-applications-plot-tomography-l1-reconstruction-py)[Common pitfalls in the interpretation of coefficients of linear models](../auto_examples/inspection/plot_linear_model_coefficient_interpretation.html#sphx-glr-auto-examples-inspection-plot-linear-model-coefficient-interpretation-py)

Note

**Feature selection with Lasso**

As the Lasso regression yields sparse models, it can
thus be used to perform feature selection, as detailed in
[L1-based feature selection](feature_selection.html#l1-feature-selection).

##
References[#](#references-2)

The following references explain the origin of the Lasso as well as properties of the Lasso problem and the duality gap computation used for convergence control.

“An Interior-Point Method for Large-Scale L1-Regularized Least Squares,” S. J. Kim, K. Koh, M. Lustig, S. Boyd and D. Gorinevsky, in IEEE Journal of Selected Topics in Signal Processing, 2007 (

[Paper](https://web.stanford.edu/~boyd/papers/pdf/l1_ls.pdf))

### 1.1.3.1. Coordinate Descent with Gap Safe Screening Rules[#](#coordinate-descent-with-gap-safe-screening-rules)

Coordinate descent (CD) is a strategy to solve a minimization problem that considers a single feature \(j\) at a time. This way, the optimization problem is reduced to a 1-dimensional problem which is easier to solve:

with index \(-j\) meaning all features but \(j\). The solution is

with the soft-thresholding function
\(S(z, \alpha) = \operatorname{sign}(z) \max(0, |z|-\alpha)\).
Note that the soft-thresholding function is exactly zero whenever
\(\alpha \geq |z|\).
The CD solver then loops over the features either in a cycle, picking one feature after
the other in the order given by `X`

(`selection="cyclic"`

), or by randomly picking
features (`selection="random"`

).
It stops if the duality gap is smaller than the provided tolerance `tol`

.

##
Mathematical details[#](#mathematical-details)

The duality gap \(G(w, v)\) is an upper bound of the difference between the current primal objective function of the Lasso, \(P(w)\), and its minimum \(P(w^\star)\), i.e. \(G(w, v) \geq P(w) - P(w^\star)\). It is given by \(G(w, v) = P(w) - D(v)\) with dual objective function

subject to \(v \in ||X^Tv||_{\infty} \leq n_{\text{samples}}\alpha\). At optimum, the duality gap is zero, \(G(w^\star, v^\star) = 0\) (a property called strong duality). With (scaled) dual variable \(v = c r\), current residual \(r = y - Xw\) and dual scaling

the stopping criterion is

A clever method to speedup the coordinate descent algorithm is to screen features such that at optimum \(w_j = 0\). Gap safe screening rules are such a tool. Anywhere during the optimization algorithm, they can tell which feature we can safely exclude, i.e., set to zero with certainty.

##
References[#](#references-3)

The first reference explains the coordinate descent solver used in scikit-learn, the others treat gap safe screening rules.

### 1.1.3.2. Setting regularization parameter[#](#setting-regularization-parameter)

The `alpha`

parameter controls the degree of sparsity of the estimated
coefficients.

#### 1.1.3.2.1. Using cross-validation[#](#using-cross-validation)

scikit-learn exposes objects that set the Lasso `alpha`

parameter by
cross-validation: [ LassoCV](generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV) and

[.](generated/sklearn.linear_model.LassoLarsCV.html#sklearn.linear_model.LassoLarsCV)

`LassoLarsCV`

[is based on the](generated/sklearn.linear_model.LassoLarsCV.html#sklearn.linear_model.LassoLarsCV)

`LassoLarsCV`

[Least Angle Regression](#least-angle-regression)algorithm explained below.

For high-dimensional datasets with many collinear features,
[ LassoCV](generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV) is most often preferable. However,

[has the advantage of exploring more relevant values of](generated/sklearn.linear_model.LassoLarsCV.html#sklearn.linear_model.LassoLarsCV)

`LassoLarsCV`

`alpha`

parameter, and
if the number of samples is very small compared to the number of
features, it is often faster than [.](generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV)

`LassoCV`

#### 1.1.3.2.2. Information-criteria based model selection[#](#information-criteria-based-model-selection)

Alternatively, the estimator [ LassoLarsIC](generated/sklearn.linear_model.LassoLarsIC.html#sklearn.linear_model.LassoLarsIC) proposes to use the
Akaike information criterion (AIC) and the Bayes Information criterion (BIC).
It is a computationally cheaper alternative to find the optimal value of alpha
as the regularization path is computed only once instead of k+1 times
when using k-fold cross-validation.

Indeed, these criteria are computed on the in-sample training set. In short, they penalize the over-optimistic scores of the different Lasso models by their flexibility (cf. to “Mathematical details” section below).

However, such criteria need a proper estimation of the degrees of freedom of the solution, are derived for large samples (asymptotic results) and assume the correct model is candidates under investigation. They also tend to break when the problem is badly conditioned (e.g. more features than samples).

Examples

#### 1.1.3.2.3. AIC and BIC criteria[#](#aic-and-bic-criteria)

The definition of AIC (and thus BIC) might differ in the literature. In this section, we give more information regarding the criterion computed in scikit-learn.

##
Mathematical details[#](#mathematical-details-2)

The AIC criterion is defined as:

where \(\hat{L}\) is the maximum likelihood of the model and \(d\) is the number of parameters (as well referred to as degrees of freedom in the previous section).

The definition of BIC replaces the constant \(2\) by \(\log(N)\):

where \(N\) is the number of samples.

For a linear Gaussian model, the maximum log-likelihood is defined as:

where \(\sigma^2\) is an estimate of the noise variance, \(y_i\) and \(\hat{y}_i\) are respectively the true and predicted targets, and \(n\) is the number of samples.

Plugging the maximum log-likelihood in the AIC formula yields:

The first term of the above expression is sometimes discarded since it is a
constant when \(\sigma^2\) is provided. In addition,
it is sometimes stated that the AIC is equivalent to the \(C_p\) statistic
[[12]](#id7). In a strict sense, however, it is equivalent only up to some constant
and a multiplicative factor.

At last, we mentioned above that \(\sigma^2\) is an estimate of the
noise variance. In [ LassoLarsIC](generated/sklearn.linear_model.LassoLarsIC.html#sklearn.linear_model.LassoLarsIC) when the parameter

`noise_variance`

is
not provided (default), the noise variance is estimated via the unbiased
estimator [[13]](#id8)defined as:

where \(p\) is the number of features and \(\hat{y}_i\) is the
predicted target using an ordinary least squares regression. Note, that this
formula is valid only when `n_samples > n_features`

.

References

#### 1.1.3.2.4. Comparison with the regularization parameter of SVM[#](#comparison-with-the-regularization-parameter-of-svm)

The equivalence between `alpha`

and the regularization parameter of SVM,
`C`

is given by `alpha = 1 / C`

or `alpha = 1 / (n_samples * C)`

,
depending on the estimator and the exact objective function optimized by the
model.

## 1.1.4. Multi-task Lasso[#](#multi-task-lasso)

The [ MultiTaskLasso](generated/sklearn.linear_model.MultiTaskLasso.html#sklearn.linear_model.MultiTaskLasso) is a linear model that estimates sparse
coefficients for multiple regression problems jointly:

`y`

is a 2D array,
of shape `(n_samples, n_tasks)`

. The constraint is that the selected
features are the same for all the regression problems, also called tasks.The following figure compares the location of the non-zero entries in the coefficient matrix W obtained with a simple Lasso or a MultiTaskLasso. The Lasso estimates yield scattered non-zeros while the non-zeros of the MultiTaskLasso are full columns.

**Fitting a time-series model, imposing that any active feature be active at all times.**

Examples

##
Mathematical details[#](#mathematical-details-3)

Mathematically, it consists of a linear model trained with a mixed \(\ell_1\) \(\ell_2\)-norm for regularization. The objective function to minimize is:

where \(\text{Fro}\) indicates the Frobenius norm

and \(\ell_1\) \(\ell_2\) reads

The implementation in the class [ MultiTaskLasso](generated/sklearn.linear_model.MultiTaskLasso.html#sklearn.linear_model.MultiTaskLasso) uses
coordinate descent as the algorithm to fit the coefficients.

## 1.1.5. Elastic-Net[#](#elastic-net)

[ ElasticNet](generated/sklearn.linear_model.ElasticNet.html#sklearn.linear_model.ElasticNet) is a linear regression model trained with both
\(\ell_1\) and \(\ell_2\)-norm regularization of the coefficients.
This combination allows for learning a sparse model where few of
the weights are non-zero like

[, while still maintaining the regularization properties of](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso)

`Lasso`

[. We control the convex combination of \(\ell_1\) and \(\ell_2\) using the](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

`l1_ratio`

parameter.Elastic-net is useful when there are multiple features that are correlated with one another. Lasso is likely to pick one of these at random, while elastic-net is likely to pick both.

A practical advantage of trading-off between Lasso and Ridge is that it allows Elastic-Net to inherit some of Ridge’s stability under rotation.

The objective function to minimize is in this case

The class [ ElasticNetCV](generated/sklearn.linear_model.ElasticNetCV.html#sklearn.linear_model.ElasticNetCV) can be used to set the parameters

`alpha`

(\(\alpha\)) and `l1_ratio`

(\(\rho\)) by cross-validation.Examples

##
References[#](#references-4)

The following two references explain the iterations used in the coordinate descent solver of scikit-learn, as well as the duality gap computation used for convergence control.

“Regularization Path For Generalized linear Models by Coordinate Descent”, Friedman, Hastie & Tibshirani, J Stat Softw, 2010 (

[Paper](https://www.jstatsoft.org/article/view/v033i01/v33i01.pdf)).“An Interior-Point Method for Large-Scale L1-Regularized Least Squares,” S. J. Kim, K. Koh, M. Lustig, S. Boyd and D. Gorinevsky, in IEEE Journal of Selected Topics in Signal Processing, 2007 (

[Paper](https://web.stanford.edu/~boyd/papers/pdf/l1_ls.pdf))

## 1.1.6. Multi-task Elastic-Net[#](#multi-task-elastic-net)

The [ MultiTaskElasticNet](generated/sklearn.linear_model.MultiTaskElasticNet.html#sklearn.linear_model.MultiTaskElasticNet) is an elastic-net model that estimates sparse
coefficients for multiple regression problems jointly:

`Y`

is a 2D array
of shape `(n_samples, n_tasks)`

. The constraint is that the selected
features are the same for all the regression problems, also called tasks.Mathematically, it consists of a linear model trained with a mixed \(\ell_1\) \(\ell_2\)-norm and \(\ell_2\)-norm for regularization. The objective function to minimize is:

The implementation in the class [ MultiTaskElasticNet](generated/sklearn.linear_model.MultiTaskElasticNet.html#sklearn.linear_model.MultiTaskElasticNet) uses coordinate descent as
the algorithm to fit the coefficients.

The class [ MultiTaskElasticNetCV](generated/sklearn.linear_model.MultiTaskElasticNetCV.html#sklearn.linear_model.MultiTaskElasticNetCV) can be used to set the parameters

`alpha`

(\(\alpha\)) and `l1_ratio`

(\(\rho\)) by cross-validation.## 1.1.7. Least Angle Regression[#](#least-angle-regression)

Least-angle regression (LARS) is a regression algorithm for high-dimensional data, developed by Bradley Efron, Trevor Hastie, Iain Johnstone and Robert Tibshirani. LARS is similar to forward stepwise regression. At each step, it finds the feature most correlated with the target. When there are multiple features having equal correlation, instead of continuing along the same feature, it proceeds in a direction equiangular between the features.

The advantages of LARS are:

It is numerically efficient in contexts where the number of features is significantly greater than the number of samples.

It is computationally just as fast as forward selection and has the same order of complexity as ordinary least squares.

It produces a full piecewise linear solution path, which is useful in cross-validation or similar attempts to tune the model.

If two features are almost equally correlated with the target, then their coefficients should increase at approximately the same rate. The algorithm thus behaves as intuition would expect, and also is more stable.

It is easily modified to produce solutions for other estimators, like the Lasso.


The disadvantages of the LARS method include:

Because LARS is based upon an iterative refitting of the residuals, it would appear to be especially sensitive to the effects of noise. This problem is discussed in detail by Weisberg in the discussion section of the Efron et al. (2004) Annals of Statistics article.


The LARS model can be used via the estimator [ Lars](generated/sklearn.linear_model.Lars.html#sklearn.linear_model.Lars), or its
low-level implementation

[or](generated/sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path)

`lars_path`

[.](generated/sklearn.linear_model.lars_path_gram.html#sklearn.linear_model.lars_path_gram)

`lars_path_gram`

## 1.1.8. LARS Lasso[#](#lars-lasso)

[ LassoLars](generated/sklearn.linear_model.LassoLars.html#sklearn.linear_model.LassoLars) is a lasso model implemented using the LARS
algorithm, and unlike the implementation based on coordinate descent,
this yields the exact solution, which is piecewise linear as a
function of the norm of its coefficients.

```
>>> from sklearn import linear_model
>>> reg = linear_model.LassoLars(alpha=.1)
>>> reg.fit([[0, 0], [1, 1]], [0, 1])
LassoLars(alpha=0.1)
>>> reg.coef_
array([0.6, 0. ])
```

Examples

The LARS algorithm provides the full path of the coefficients along
the regularization parameter almost for free, thus a common operation
is to retrieve the path with one of the functions [ lars_path](generated/sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path)
or

[.](generated/sklearn.linear_model.lars_path_gram.html#sklearn.linear_model.lars_path_gram)

`lars_path_gram`

##
Mathematical formulation[#](#mathematical-formulation)

The algorithm is similar to forward stepwise regression, but instead of including features at each step, the estimated coefficients are increased in a direction equiangular to each one’s correlations with the residual.

Instead of giving a vector result, the LARS solution consists of a
curve denoting the solution for each value of the \(\ell_1\) norm of the
parameter vector. The full coefficients path is stored in the array
`coef_path_`

of shape `(n_features, max_features + 1)`

. The first
column is always zero.

References

Original Algorithm is detailed in the paper

[Least Angle Regression](https://hastie.su.domains/Papers/LARS/LeastAngle_2002.pdf)by Hastie et al.

## 1.1.9. Orthogonal Matching Pursuit (OMP)[#](#orthogonal-matching-pursuit-omp)

[ OrthogonalMatchingPursuit](generated/sklearn.linear_model.OrthogonalMatchingPursuit.html#sklearn.linear_model.OrthogonalMatchingPursuit) and

[implement the OMP algorithm for approximating the fit of a linear model with constraints imposed on the number of non-zero coefficients (i.e. the \(\ell_0\) pseudo-norm).](generated/sklearn.linear_model.orthogonal_mp.html#sklearn.linear_model.orthogonal_mp)

`orthogonal_mp`

Being a forward feature selection method like [Least Angle Regression](#least-angle-regression),
orthogonal matching pursuit can approximate the optimum solution vector with a
fixed number of non-zero elements:

Alternatively, orthogonal matching pursuit can target a specific error instead of a specific number of non-zero coefficients. This can be expressed as:

OMP is based on a greedy algorithm that includes at each step the atom most highly correlated with the current residual. It is similar to the simpler matching pursuit (MP) method, but better in that at each iteration, the residual is recomputed using an orthogonal projection on the space of the previously chosen dictionary elements.

Examples

##
References[#](#references-5)

[https://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf](https://www.cs.technion.ac.il/~ronrubin/Publications/KSVD-OMP-v2.pdf)[Matching pursuits with time-frequency dictionaries](https://www.di.ens.fr/~mallat/papiers/MallatPursuit93.pdf), S. G. Mallat, Z. Zhang, 1993.

## 1.1.10. Bayesian Regression[#](#bayesian-regression)

Bayesian regression techniques can be used to include regularization parameters in the estimation procedure: the regularization parameter is not set in a hard sense but tuned to the data at hand.

This can be done by introducing [uninformative priors](https://en.wikipedia.org/wiki/Non-informative_prior#Uninformative_priors)
over the hyper parameters of the model.
The \(\ell_{2}\) regularization used in [Ridge regression and classification](#ridge-regression) is
equivalent to finding a maximum a posteriori estimation under a Gaussian prior
over the coefficients \(w\) with precision \(\lambda^{-1}\).
Instead of setting `lambda`

manually, it is possible to treat it as a random
variable to be estimated from the data.

To obtain a fully probabilistic model, the output \(y\) is assumed to be Gaussian distributed around \(X w\):

where \(\alpha\) is again treated as a random variable that is to be estimated from the data.

The advantages of Bayesian Regression are:

It adapts to the data at hand.

It can be used to include regularization parameters in the estimation procedure.


The disadvantages of Bayesian regression include:

Inference of the model can be time consuming.


##
References[#](#references-6)

A good introduction to Bayesian methods is given in

[C. Bishop: Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf).Original Algorithm is detailed in the book

[Bayesian learning for neural networks](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=db869fa192a3222ae4f2d766674a378e47013b1b)by Radford M. Neal.

### 1.1.10.1. Bayesian Ridge Regression[#](#bayesian-ridge-regression)

[ BayesianRidge](generated/sklearn.linear_model.BayesianRidge.html#sklearn.linear_model.BayesianRidge) estimates a probabilistic model of the
regression problem as described above.
The prior for the coefficient \(w\) is given by a spherical Gaussian:

The priors over \(\alpha\) and \(\lambda\) are chosen to be [gamma
distributions](https://en.wikipedia.org/wiki/Gamma_distribution), the
conjugate prior for the precision of the Gaussian. The resulting model is
called *Bayesian Ridge Regression*, and is similar to the classical
[ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge).

The parameters \(w\), \(\alpha\) and \(\lambda\) are estimated
jointly during the fit of the model, the regularization parameters
\(\alpha\) and \(\lambda\) being estimated by maximizing the
*log marginal likelihood*. The scikit-learn implementation
is based on the algorithm described in Appendix A of (Tipping, 2001)
where the update of the parameters \(\alpha\) and \(\lambda\) is done
as suggested in (MacKay, 1992). The initial value of the maximization procedure
can be set with the hyperparameters `alpha_init`

and `lambda_init`

.

There are four more hyperparameters, \(\alpha_1\), \(\alpha_2\),
\(\lambda_1\) and \(\lambda_2\) of the gamma prior distributions over
\(\alpha\) and \(\lambda\). These are usually chosen to be
*non-informative*. By default \(\alpha_1 = \alpha_2 = \lambda_1 = \lambda_2 = 10^{-6}\).

Bayesian Ridge Regression is used for regression:

```
>>> from sklearn import linear_model
>>> X = [[0., 0.], [1., 1.], [2., 2.], [3., 3.]]
>>> Y = [0., 1., 2., 3.]
>>> reg = linear_model.BayesianRidge()
>>> reg.fit(X, Y)
BayesianRidge()
```

After being fitted, the model can then be used to predict new values:

```
>>> reg.predict([[1, 0.]])
array([0.50000013])
```

The coefficients \(w\) of the model can be accessed:

```
>>> reg.coef_
array([0.49999993, 0.49999993])
```

Due to the Bayesian framework, the weights found are slightly different from the
ones found by [Ordinary Least Squares](#ordinary-least-squares). However, Bayesian Ridge Regression
is more robust to ill-posed problems.

Examples

##
References[#](#references-7)

Section 3.3 in Christopher M. Bishop: Pattern Recognition and Machine Learning, 2006

David J. C. MacKay,

[Bayesian Interpolation](https://citeseerx.ist.psu.edu/doc_view/pid/b14c7cc3686e82ba40653c6dff178356a33e5e2c), 1992.Michael E. Tipping,

[Sparse Bayesian Learning and the Relevance Vector Machine](https://www.jmlr.org/papers/volume1/tipping01a/tipping01a.pdf), 2001.

### 1.1.10.2. Automatic Relevance Determination - ARD[#](#automatic-relevance-determination-ard)

The Automatic Relevance Determination (as being implemented in
[ ARDRegression](generated/sklearn.linear_model.ARDRegression.html#sklearn.linear_model.ARDRegression)) is a kind of linear model which is very similar to the

[Bayesian Ridge Regression](#id15), but that leads to sparser coefficients \(w\)

[[1]](#id20)

[[2]](#id21).

[ ARDRegression](generated/sklearn.linear_model.ARDRegression.html#sklearn.linear_model.ARDRegression) poses a different prior over \(w\): it drops
the spherical Gaussian distribution for a centered elliptic Gaussian
distribution. This means each coefficient \(w_{i}\) can itself be drawn from
a Gaussian distribution, centered on zero and with a precision
\(\lambda_{i}\):

with \(A\) being a positive definite diagonal matrix and \(\text{diag}(A) = \lambda = \{\lambda_{1},...,\lambda_{p}\}\).

In contrast to the [Bayesian Ridge Regression](#id15), each coordinate of
\(w_{i}\) has its own standard deviation \(\frac{1}{\lambda_i}\). The
prior over all \(\lambda_i\) is chosen to be the same gamma distribution
given by the hyperparameters \(\lambda_1\) and \(\lambda_2\).

ARD is also known in the literature as *Sparse Bayesian Learning* and *Relevance
Vector Machine* [[3]](#id22) [[4]](#id24).

See [Comparing Linear Bayesian Regressors](../auto_examples/linear_model/plot_ard.html#sphx-glr-auto-examples-linear-model-plot-ard-py) for a worked-out comparison between ARD and [Bayesian Ridge Regression](#id15).

See [L1-based models for Sparse Signals](../auto_examples/linear_model/plot_lasso_and_elasticnet.html#sphx-glr-auto-examples-linear-model-plot-lasso-and-elasticnet-py) for a comparison between various methods - Lasso, ARD and ElasticNet - on correlated data.

References

[1](#id16)]

Christopher M. Bishop: Pattern Recognition and Machine Learning, Chapter 7.2.1

[2](#id17)]

David Wipf and Srikantan Nagarajan: [A New View of Automatic Relevance Determination](https://papers.nips.cc/paper/3372-a-new-view-of-automatic-relevance-determination.pdf)

[3](#id18)]

Michael E. Tipping: [Sparse Bayesian Learning and the Relevance Vector Machine](https://www.jmlr.org/papers/volume1/tipping01a/tipping01a.pdf)

[4](#id19)]

Tristan Fletcher: [Relevance Vector Machines Explained](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=3dc9d625404fdfef6eaccc3babddefe4c176abd4)

## 1.1.11. Logistic regression[#](#logistic-regression)

The logistic regression is implemented in [ LogisticRegression](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression). Despite
its name, it is implemented as a linear model for classification rather than
regression in terms of the scikit-learn/ML nomenclature. The logistic
regression is also known in the literature as logit regression,
maximum-entropy classification (MaxEnt) or the log-linear classifier. In this
model, the probabilities describing the possible outcomes of a single trial
are modeled using a

[logistic function](https://en.wikipedia.org/wiki/Logistic_function).

This implementation can fit binary, One-vs-Rest, or multinomial logistic regression with optional \(\ell_1\), \(\ell_2\) or Elastic-Net regularization.

Note

**Regularization**

Regularization is applied by default, which is common in machine learning but not in statistics. Another advantage of regularization is that it improves numerical stability. No regularization amounts to setting C to a very high value.

Note

**Logistic Regression as a special case of the Generalized Linear Models (GLM)**

Logistic regression is a special case of
[Generalized Linear Models](#generalized-linear-models) with a Binomial / Bernoulli conditional
distribution and a Logit link. The numerical output of the logistic
regression, which is the predicted probability, can be used as a classifier
by applying a threshold (by default 0.5) to it. This is how it is
implemented in scikit-learn, so it expects a categorical target, making
the Logistic Regression a classifier.

Examples

### 1.1.11.1. Binary Case[#](#binary-case)

For notational ease, we assume that the target \(y_i\) takes values in the
set \(\{0, 1\}\) for data point \(i\).
Once fitted, the [ predict_proba](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression.predict_proba)
method of

[predicts the probability of the positive class \(P(y_i=1|X_i)\) as](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

As an optimization problem, binary class logistic regression with regularization term \(r(w)\) minimizes the following cost function:

[#](#regularized-logistic-loss)\[\min_{w} \frac{1}{S}\sum_{i=1}^n s_i \left(-y_i \log(\hat{p}(X_i)) - (1 - y_i) \log(1 - \hat{p}(X_i))\right) + \frac{r(w)}{S C}\,,\]

where \({s_i}\) corresponds to the weights assigned by the user to a specific training sample (the vector \(s\) is formed by element-wise multiplication of the class weights and sample weights), and the sum \(S = \sum_{i=1}^n s_i\).

We currently provide four choices for the regularization or penalty term \(r(w)\)
via the arguments `C`

and `l1_ratio`

:

penalty |
\(r(w)\) |
|---|---|
none ( |
\(0\) |
\(\ell_1\) ( |
\(\|w\|_1\) |
\(\ell_2\) ( |
\(\frac{1}{2}\|w\|_2^2 = \frac{1}{2}w^T w\) |
ElasticNet ( |
\(\frac{1 - \rho}{2}w^T w + \rho \|w\|_1\) |

For ElasticNet, \(\rho\) (which corresponds to the `l1_ratio`

parameter)
controls the strength of \(\ell_1\) regularization vs. \(\ell_2\)
regularization. Elastic-Net is equivalent to \(\ell_1\) when
\(\rho = 1\) and equivalent to \(\ell_2\) when \(\rho=0\).

Note that the scale of the class weights and the sample weights will influence
the optimization problem. For instance, multiplying the sample weights by a
constant \(b>0\) is equivalent to multiplying the (inverse) regularization
strength `C`

by \(b\).

### 1.1.11.2. Multinomial Case[#](#multinomial-case)

The binary case can be extended to \(K\) classes leading to the multinomial
logistic regression, see also [log-linear model](https://en.wikipedia.org/wiki/Multinomial_logistic_regression#As_a_log-linear_model).

Note

It is possible to parameterize a \(K\)-class classification model
using only \(K-1\) weight vectors, leaving one class probability fully
determined by the other class probabilities by leveraging the fact that all
class probabilities must sum to one. We deliberately choose to overparameterize the model
using \(K\) weight vectors for ease of implementation and to preserve the
symmetrical inductive bias regarding ordering of classes, see [[16]](#id38). This effect becomes
especially important when using regularization. The choice of overparameterization can be
detrimental for unpenalized models since then the solution may not be unique, as shown in [[16]](#id38).

##
Mathematical details[#](#mathematical-details-4)

Let \(y_i \in \{1, \ldots, K\}\) be the label (ordinal) encoded target variable for observation \(i\).
Instead of a single coefficient vector, we now have
a matrix of coefficients \(W\) where each row vector \(W_k\) corresponds to class
\(k\). We aim at predicting the class probabilities \(P(y_i=k|X_i)\) via
[ predict_proba](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression.predict_proba) as:

The objective for the optimization becomes

where \([P]\) represents the Iverson bracket which evaluates to \(0\) if \(P\) is false, otherwise it evaluates to \(1\).

Again, \(s_{ik}\) are the weights assigned by the user (multiplication of sample weights and class weights) with their sum \(S = \sum_{i=1}^n \sum_{k=0}^{K-1} s_{ik}\).

We currently provide four choices for the regularization or penalty term \(r(W)\)
via the arguments `C`

and `l1_ratio`

, where \(m\) is the number of features:

penalty |
\(r(W)\) |
|---|---|
none ( |
\(0\) |
\(\ell_1\) ( |
\(\|W\|_{1,1} = \sum_{i=1}^m\sum_{j=1}^{K}|W_{i,j}|\) |
\(\ell_2\) ( |
\(\frac{1}{2}\|W\|_F^2 = \frac{1}{2}\sum_{i=1}^m\sum_{j=1}^{K} W_{i,j}^2\) |
ElasticNet ( |
\(\frac{1 - \rho}{2}\|W\|_F^2 + \rho \|W\|_{1,1}\) |

### 1.1.11.3. Solvers[#](#solvers)

The solvers implemented in the class [ LogisticRegression](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)
are “lbfgs”, “liblinear”, “newton-cg”, “newton-cholesky”, “sag” and “saga”:

The following table summarizes the penalties and multinomial multiclass supported by each solver:

|
|||||||
|
|
|
|
|
|
|
|
L2 penalty |
yes |
yes |
yes |
yes |
yes |
yes |
|
L1 penalty |
no |
yes |
no |
no |
no |
yes |
|
Elastic-Net (L1 + L2) |
no |
no |
no |
no |
no |
yes |
|
No penalty |
yes |
no |
yes |
yes |
yes |
yes |
|
|
|||||||
multinomial multiclass |
yes |
no |
yes |
yes |
yes |
yes |
|
|
|||||||
Penalize the intercept (bad) |
no |
yes |
no |
no |
no |
no |
|
Faster for large datasets |
no |
no |
no |
no |
yes |
yes |
|
Robust to unscaled datasets |
yes |
yes |
yes |
yes |
no |
no |

The “lbfgs” solver is used by default for its robustness. For
`n_samples >> n_features`

, “newton-cholesky” is a good choice and can reach high
precision (tiny `tol`

values). For large datasets
the “saga” solver is usually faster (than “lbfgs”), in particular for low precision
(high `tol`

).
For large dataset, you may also consider using [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier)
with

`loss="log_loss"`

, which might be even faster but requires more tuning.#### 1.1.11.3.1. Differences between solvers[#](#differences-between-solvers)

There might be a difference in the scores obtained between
[ LogisticRegression](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression) with

`solver=liblinear`

or
[and the external liblinear library directly, when](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

`fit_intercept=False`

and the fit `coef_`

(or) the data to be predicted
are zeroes. This is because for the sample(s) with `decision_function`

zero,
[and](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

[predict the negative class, while liblinear predicts the positive class. Note that a model with](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

`fit_intercept=False`

and having many samples with `decision_function`

zero, is likely to be an underfit, bad model and you are advised to set
`fit_intercept=True`

and increase the `intercept_scaling`

.##
Solvers’ details[#](#solvers’-details)

The solver “liblinear” uses a coordinate descent (CD) algorithm, and relies on the excellent C++

[LIBLINEAR library](https://www.csie.ntu.edu.tw/~cjlin/liblinear/), which is shipped with scikit-learn. However, the CD algorithm implemented in liblinear cannot learn a true multinomial (multiclass) model. If you still want to use “liblinear” on multiclass problems, you can use a “one-vs-rest” scheme`OneVsRestClassifier(LogisticRegression(solver="liblinear"))`

, see`:class:`~sklearn.multiclass.OneVsRestClassifier`

. Note that minimizing the multinomial loss is expected to give better calibrated results as compared to a “one-vs-rest” scheme. For \(\ell_1\) regularizationallows to calculate the lower bound for C in order to get a non “null” (all feature weights to zero) model.`sklearn.svm.l1_min_c`

The “lbfgs”, “newton-cg”, “newton-cholesky” and “sag” solvers only support \(\ell_2\) regularization or no regularization, and are found to converge faster for some high-dimensional data. These solvers (and “saga”) learn a true multinomial logistic regression model

[[5]](#id33).The “sag” solver uses Stochastic Average Gradient descent

[[6]](#id34). It is faster than other solvers for large datasets, when both the number of samples and the number of features are large.The “saga” solver

[[7]](#id35)is a variant of “sag” that also supports the non-smooth \(\ell_1\) penalty (`l1_ratio=1`

). This is therefore the solver of choice for sparse multinomial logistic regression. It is also the only solver that supports Elastic-Net (`0 < l1_ratio < 1`

).The “lbfgs” is an optimization algorithm that approximates the Broyden–Fletcher–Goldfarb–Shanno algorithm

[[8]](#id36), which belongs to quasi-Newton methods. As such, it can deal with a wide range of different training data and is therefore the default solver. Its performance, however, suffers on poorly scaled datasets and on datasets with one-hot encoded categorical features with rare categories.The “newton-cholesky” solver is an exact Newton solver that calculates the Hessian matrix and solves the resulting linear system. It is a very good choice for

`n_samples`

>>`n_features`

and can reach high precision (tiny values of`tol`

), but has a few shortcomings: Only \(\ell_2\) regularization is supported. Furthermore, because the Hessian matrix is explicitly computed, the memory usage has a quadratic dependency on`n_features`

as well as on`n_classes`

.

For a comparison of some of these solvers, see [[9]](#id37).

References

[5](#id28)]

Christopher M. Bishop: Pattern Recognition and Machine Learning, Chapter 4.3.4

[6](#id29)]

Mark Schmidt, Nicolas Le Roux, and Francis Bach: [Minimizing Finite Sums with the Stochastic Average Gradient.](https://hal.inria.fr/hal-00860051/document)

[7](#id30)]

Aaron Defazio, Francis Bach, Simon Lacoste-Julien:
[SAGA: A Fast Incremental Gradient Method With Support for
Non-Strongly Convex Composite Objectives.](https://arxiv.org/abs/1407.0202)

[8](#id31)]

[https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm](https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm)

[9](#id32)]

Thomas P. Minka [“A comparison of numerical optimizers for logistic regression”](https://tminka.github.io/papers/logreg/minka-logreg.pdf)

[1](#id26),

[2](#id27))

Note

**Feature selection with sparse logistic regression**

A logistic regression with \(\ell_1\) penalty yields sparse models, and can
thus be used to perform feature selection, as detailed in
[L1-based feature selection](feature_selection.html#l1-feature-selection).

Note

**P-value estimation**

It is possible to obtain the p-values and confidence intervals for
coefficients in cases of regression without penalization. The [statsmodels
package](https://pypi.org/project/statsmodels/) natively supports this.
Within sklearn, one could use bootstrapping instead as well.

[ LogisticRegressionCV](generated/sklearn.linear_model.LogisticRegressionCV.html#sklearn.linear_model.LogisticRegressionCV) implements Logistic Regression with built-in
cross-validation support, to find the optimal

`C`

and `l1_ratio`

parameters
according to the `scoring`

attribute. The “newton-cg”, “sag”, “saga” and
“lbfgs” solvers are found to be faster for high-dimensional dense data, due
to warm-starting (see [Glossary](../glossary.html#term-warm_start)).

## 1.1.12. Generalized Linear Models[#](#generalized-linear-models)

Generalized Linear Models (GLM) extend linear models in two ways
[[10]](#id42). First, the predicted values \(\hat{y}\) are linked to a linear
combination of the input variables \(X\) via an inverse link function
\(h\) as

Secondly, the squared loss function is replaced by the unit deviance
\(d\) of a distribution in the exponential family (or more precisely, a
reproductive exponential dispersion model (EDM) [[11]](#id43)).

The minimization problem becomes:

where \(\alpha\) is the L2 regularization penalty. When sample weights are provided, the average becomes a weighted average.

The following table lists some specific EDMs and their unit deviance :

Distribution |
Target Domain |
Unit Deviance \(d(y, \hat{y})\) |
|---|---|---|
Normal |
\(y \in (-\infty, \infty)\) |
\((y-\hat{y})^2\) |
Bernoulli |
\(y \in \{0, 1\}\) |
\(2({y}\log\frac{y}{\hat{y}}+({1}-{y})\log\frac{{1}-{y}}{{1}-\hat{y}})\) |
Categorical |
\(y \in \{0, 1, ..., k\}\) |
\(2\sum_{i \in \{0, 1, ..., k\}} I(y = i) y_\text{i}\log\frac{I(y = i)}{\hat{I(y = i)}}\) |
Poisson |
\(y \in [0, \infty)\) |
\(2(y\log\frac{y}{\hat{y}}-y+\hat{y})\) |
Gamma |
\(y \in (0, \infty)\) |
\(2(\log\frac{\hat{y}}{y}+\frac{y}{\hat{y}}-1)\) |
Inverse Gaussian |
\(y \in (0, \infty)\) |
\(\frac{(y-\hat{y})^2}{y\hat{y}^2}\) |

The Probability Density Functions (PDF) of these distributions are illustrated in the following figure,

The Bernoulli distribution is a discrete probability distribution modelling a Bernoulli trial - an event that has only two mutually exclusive outcomes. The Categorical distribution is a generalization of the Bernoulli distribution for a categorical random variable. While a random variable in a Bernoulli distribution has two possible outcomes, a Categorical random variable can take on one of K possible categories, with the probability of each category specified separately.

The choice of the distribution depends on the problem at hand:

If the target values \(y\) are counts (non-negative integer valued) or relative frequencies (non-negative), you might use a Poisson distribution with a log-link.

If the target values are positive valued and skewed, you might try a Gamma distribution with a log-link.

If the target values seem to be heavier tailed than a Gamma distribution, you might try an Inverse Gaussian distribution (or even higher variance powers of the Tweedie family).

If the target values \(y\) are probabilities, you can use the Bernoulli distribution. The Bernoulli distribution with a logit link can be used for binary classification. The Categorical distribution with a softmax link can be used for multiclass classification.


##
Examples of use cases[#](#examples-of-use-cases)

Agriculture / weather modeling: number of rain events per year (Poisson), amount of rainfall per event (Gamma), total rainfall per year (Tweedie / Compound Poisson Gamma).

Risk modeling / insurance policy pricing: number of claim events / policyholder per year (Poisson), cost per event (Gamma), total cost per policyholder per year (Tweedie / Compound Poisson Gamma).

Credit Default: probability that a loan can’t be paid back (Bernoulli).

Fraud Detection: probability that a financial transaction like a cash transfer is a fraudulent transaction (Bernoulli).

Predictive maintenance: number of production interruption events per year (Poisson), duration of interruption (Gamma), total interruption time per year (Tweedie / Compound Poisson Gamma).

Medical Drug Testing: probability of curing a patient in a set of trials or probability that a patient will experience side effects (Bernoulli).

News Classification: classification of news articles into three categories namely Business News, Politics and Entertainment news (Categorical).


References

[10](#id40)]

McCullagh, Peter; Nelder, John (1989). Generalized Linear Models, Second Edition. Boca Raton: Chapman and Hall/CRC. ISBN 0-412-31760-5.

[11](#id41)]

Jørgensen, B. (1992). The theory of exponential dispersion models
and analysis of deviance. Monografias de matemática, no. 51. See also
[Exponential dispersion model.](https://en.wikipedia.org/wiki/Exponential_dispersion_model)

### 1.1.12.1. Usage[#](#usage)

[ TweedieRegressor](generated/sklearn.linear_model.TweedieRegressor.html#sklearn.linear_model.TweedieRegressor) implements a generalized linear model for the
Tweedie distribution, that allows to model any of the above mentioned
distributions using the appropriate

`power`

parameter. In particular:`power = 0`

: Normal distribution. Specific estimators such as,`Ridge`

are generally more appropriate in this case.`ElasticNet`

`power = 1`

: Poisson distribution.is exposed for convenience. However, it is strictly equivalent to`PoissonRegressor`

`TweedieRegressor(power=1, link='log')`

.`power = 2`

: Gamma distribution.is exposed for convenience. However, it is strictly equivalent to`GammaRegressor`

`TweedieRegressor(power=2, link='log')`

.`power = 3`

: Inverse Gaussian distribution.

The link function is determined by the `link`

parameter.

Usage example:

```
>>> from sklearn.linear_model import TweedieRegressor
>>> reg = TweedieRegressor(power=1, alpha=0.5, link='log')
>>> reg.fit([[0, 0], [0, 1], [2, 2]], [0, 1, 2])
TweedieRegressor(alpha=0.5, link='log', power=1)
>>> reg.coef_
array([0.2463, 0.4337])
>>> reg.intercept_
np.float64(-0.7638)
```

Examples

##
Practical considerations[#](#practical-considerations)

The feature matrix `X`

should be standardized before fitting. This ensures
that the penalty treats features equally.

Since the linear predictor \(Xw\) can be negative and Poisson,
Gamma and Inverse Gaussian distributions don’t support negative values, it
is necessary to apply an inverse link function that guarantees the
non-negativeness. For example with `link='log'`

, the inverse link function
becomes \(h(Xw)=\exp(Xw)\).

If you want to model a relative frequency, i.e. counts per exposure (time,
volume, …) you can do so by using a Poisson distribution and passing
\(y=\frac{\mathrm{counts}}{\mathrm{exposure}}\) as target values
together with \(\mathrm{exposure}\) as sample weights. For a concrete
example see e.g.
[Tweedie regression on insurance claims](../auto_examples/linear_model/plot_tweedie_regression_insurance_claims.html#sphx-glr-auto-examples-linear-model-plot-tweedie-regression-insurance-claims-py).

When performing cross-validation for the `power`

parameter of
`TweedieRegressor`

, it is advisable to specify an explicit `scoring`

function,
because the default scorer [ TweedieRegressor.score](generated/sklearn.linear_model.TweedieRegressor.html#sklearn.linear_model.TweedieRegressor.score) is a function of

`power`

itself.## 1.1.13. Stochastic Gradient Descent - SGD[#](#stochastic-gradient-descent-sgd)

Stochastic gradient descent is a simple yet very efficient approach
to fit linear models. It is particularly useful when the number of samples
(and the number of features) is very large.
The `partial_fit`

method allows online/out-of-core learning.

The classes [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) and

[provide functionality to fit linear models for classification and regression using different (convex) loss functions and different penalties. E.g., with](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

`loss="log"`

, [fits a logistic regression model, while with](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier)

`SGDClassifier`

`loss="hinge"`

it fits a linear support vector machine (SVM).You can refer to the dedicated [Stochastic Gradient Descent](sgd.html#sgd) documentation section for more details.

### 1.1.13.1. Perceptron[#](#perceptron)

The [ Perceptron](generated/sklearn.linear_model.Perceptron.html#sklearn.linear_model.Perceptron) is another simple classification algorithm suitable for
large scale learning and derives from SGD. By default:

It does not require a learning rate.

It is not regularized (penalized).

It updates its model only on mistakes.


The last characteristic implies that the Perceptron is slightly faster to train than SGD with the hinge loss and that the resulting models are sparser.

In fact, the [ Perceptron](generated/sklearn.linear_model.Perceptron.html#sklearn.linear_model.Perceptron) is a wrapper around the

[class using a perceptron loss and a constant learning rate. Refer to](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier)

`SGDClassifier`

[mathematical section](sgd.html#sgd-mathematical-formulation)of the SGD procedure for more details.

### 1.1.13.2. Passive Aggressive Algorithms[#](#passive-aggressive-algorithms)

The passive-aggressive (PA) algorithms are another family of 2 algorithms (PA-I and
PA-II) for large-scale online learning that derive from SGD. They are similar to the
Perceptron in that they do not require a learning rate. However, contrary to the
Perceptron, they include a regularization parameter `eta0`

(\(C\) in the
reference paper).

For classification,
`SGDClassifier(loss="hinge", penalty=None, learning_rate="pa1", eta0=1.0)`

can
be used for PA-I or with `learning_rate="pa2"`

for PA-II. For regression,
```
SGDRegressor(loss="epsilon_insensitive", penalty=None, learning_rate="pa1",
eta0=1.0)
```

can be used for PA-I or with `learning_rate="pa2"`

for PA-II.

##
References[#](#references-8)

[“Online Passive-Aggressive Algorithms”](http://jmlr.csail.mit.edu/papers/volume7/crammer06a/crammer06a.pdf)K. Crammer, O. Dekel, J. Keshat, S. Shalev-Shwartz, Y. Singer - JMLR 7 (2006)

## 1.1.14. Robustness regression: outliers and modeling errors[#](#robustness-regression-outliers-and-modeling-errors)

Robust regression aims to fit a regression model in the presence of corrupt data: either outliers, or error in the model.

### 1.1.14.1. Different scenario and useful concepts[#](#different-scenario-and-useful-concepts)

There are different things to keep in mind when dealing with data corrupted by outliers:

**Outliers in X or in y**?**Fraction of outliers versus amplitude of error**The number of outlying points matters, but also how much they are outliers.


An important notion of robust fitting is that of breakdown point: the fraction of data that can be outlying for the fit to start missing the inlying data.

Note that in general, robust fitting in high-dimensional setting (large
`n_features`

) is very hard. The robust models here will probably not work
in these settings.

Trade-offs: which estimator ?

Scikit-learn provides 3 robust regression estimators:
[RANSAC](#ransac-regression),
[Theil Sen](#theil-sen-regression) and
[HuberRegressor](#huber-regression).

[HuberRegressor](#huber-regression)should be faster than[RANSAC](#ransac-regression)and[Theil Sen](#theil-sen-regression)unless the number of samples is very large, i.e.`n_samples`

>>`n_features`

. This is because[RANSAC](#ransac-regression)and[Theil Sen](#theil-sen-regression)fit on smaller subsets of the data. However, both[Theil Sen](#theil-sen-regression)and[RANSAC](#ransac-regression)are unlikely to be as robust as[HuberRegressor](#huber-regression)for the default parameters.[RANSAC](#ransac-regression)is faster than[Theil Sen](#theil-sen-regression)and scales much better with the number of samples.[RANSAC](#ransac-regression)will deal better with large outliers in the y direction (most common situation).[Theil Sen](#theil-sen-regression)will cope better with medium-size outliers in the X direction, but this property will disappear in high-dimensional settings.

When in doubt, use [RANSAC](#ransac-regression).

### 1.1.14.2. RANSAC: RANdom SAmple Consensus[#](#ransac-random-sample-consensus)

RANSAC (RANdom SAmple Consensus) fits a model from random subsets of inliers from the complete data set.

RANSAC is a non-deterministic algorithm producing only a reasonable result with
a certain probability, which is dependent on the number of iterations (see
`max_trials`

parameter). It is typically used for linear and non-linear
regression problems and is especially popular in the field of photogrammetric
computer vision.

The algorithm splits the complete input sample data into a set of inliers, which may be subject to noise, and outliers, which are e.g. caused by erroneous measurements or invalid hypotheses about the data. The resulting model is then estimated only from the determined inliers.

Examples

##
Details of the algorithm[#](#details-of-the-algorithm)

Each iteration performs the following steps:

Select

`min_samples`

random samples from the original data and check whether the set of data is valid (see`is_data_valid`

).Fit a model to the random subset (

`estimator.fit`

) and check whether the estimated model is valid (see`is_model_valid`

).Classify all data as inliers or outliers by calculating the residuals to the estimated model (

`estimator.predict(X) - y`

) - all data samples with absolute residuals smaller than or equal to the`residual_threshold`

are considered as inliers.Save fitted model as best model if number of inlier samples is maximal. In case the current estimated model has the same number of inliers, it is only considered as the best model if it has better score.


These steps are performed either a maximum number of times (`max_trials`

) or
until one of the special stop criteria are met (see `stop_n_inliers`

and
`stop_score`

). The final model is estimated using all inlier samples (consensus
set) of the previously determined best model.

The `is_data_valid`

and `is_model_valid`

functions allow to identify and reject
degenerate combinations of random sub-samples. If the estimated model is not
needed for identifying degenerate cases, `is_data_valid`

should be used as it
is called prior to fitting the model and thus leading to better computational
performance.

##
References[#](#references-9)

[“Random Sample Consensus: A Paradigm for Model Fitting with Applications to Image Analysis and Automated Cartography”](https://www.cs.ait.ac.th/~mdailey/cvreadings/Fischler-RANSAC.pdf)Martin A. Fischler and Robert C. Bolles - SRI International (1981)[“Performance Evaluation of RANSAC Family”](http://www.bmva.org/bmvc/2009/Papers/Paper355/Paper355.pdf)Sunglok Choi, Taemin Kim and Wonpil Yu - BMVC (2009)

### 1.1.14.3. Theil-Sen estimator: generalized-median-based estimator[#](#theil-sen-estimator-generalized-median-based-estimator)

The [ TheilSenRegressor](generated/sklearn.linear_model.TheilSenRegressor.html#sklearn.linear_model.TheilSenRegressor) estimator uses a generalization of the median in
multiple dimensions. It is thus robust to multivariate outliers. Note however
that the robustness of the estimator decreases quickly with the dimensionality
of the problem. It loses its robustness properties and becomes no
better than an ordinary least squares in high dimension.

Examples

##
Theoretical considerations[#](#theoretical-considerations)

[ TheilSenRegressor](generated/sklearn.linear_model.TheilSenRegressor.html#sklearn.linear_model.TheilSenRegressor) is comparable to the

[Ordinary Least Squares (OLS)](#ordinary-least-squares)in terms of asymptotic efficiency and as an unbiased estimator. In contrast to OLS, Theil-Sen is a non-parametric method which means it makes no assumption about the underlying distribution of the data. Since Theil-Sen is a median-based estimator, it is more robust against corrupted data aka outliers. In univariate setting, Theil-Sen has a breakdown point of about 29.3% in case of a simple linear regression which means that it can tolerate arbitrary corrupted data of up to 29.3%.

The implementation of [ TheilSenRegressor](generated/sklearn.linear_model.TheilSenRegressor.html#sklearn.linear_model.TheilSenRegressor) in scikit-learn follows a
generalization to a multivariate linear regression model

[[14]](#f1)using the spatial median which is a generalization of the median to multiple dimensions

[[15]](#f2).

In terms of time and space complexity, Theil-Sen scales according to

which makes it infeasible to be applied exhaustively to problems with a large number of samples and features. Therefore, the magnitude of a subpopulation can be chosen to limit the time and space complexity by considering only a random subset of all possible combinations.

References

[14](#id45)]

Xin Dang, Hanxiang Peng, Xueqin Wang and Heping Zhang: [Theil-Sen Estimators in a Multiple Linear Regression Model.](http://home.olemiss.edu/~xdang/papers/MTSE.pdf)

[15](#id46)]

Kärkkäinen and S. Äyrämö:

[On Computation of Spatial Median for Robust Data Mining.](http://users.jyu.fi/~samiayr/pdf/ayramo_eurogen05.pdf)

Also see the [Wikipedia page](https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator)

### 1.1.14.4. Huber Regression[#](#huber-regression)

The [ HuberRegressor](generated/sklearn.linear_model.HuberRegressor.html#sklearn.linear_model.HuberRegressor) is different from

[because it applies a linear loss to samples that are defined as outliers by the](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

`epsilon`

parameter.
A sample is classified as an inlier if the absolute error of that sample is
less than the threshold `epsilon`

. It differs from [and](generated/sklearn.linear_model.TheilSenRegressor.html#sklearn.linear_model.TheilSenRegressor)

`TheilSenRegressor`

[because it does not ignore the effect of the outliers but gives a lesser weight to them.](generated/sklearn.linear_model.RANSACRegressor.html#sklearn.linear_model.RANSACRegressor)

`RANSACRegressor`

Examples

##
Mathematical details[#](#mathematical-details-5)

[ HuberRegressor](generated/sklearn.linear_model.HuberRegressor.html#sklearn.linear_model.HuberRegressor) minimizes

where the loss function is given by

It is advised to set the parameter `epsilon`

to 1.35 to achieve 95%
statistical efficiency.

References

Peter J. Huber, Elvezio M. Ronchetti: Robust Statistics, Concomitant scale estimates, p. 172.


The [ HuberRegressor](generated/sklearn.linear_model.HuberRegressor.html#sklearn.linear_model.HuberRegressor) differs from using

[with loss set to](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

`huber`

in the following ways.is scaling invariant. Once`HuberRegressor`

`epsilon`

is set, scaling`X`

and`y`

down or up by different values would produce the same robustness to outliers as before. as compared towhere`SGDRegressor`

`epsilon`

has to be set again when`X`

and`y`

are scaled.should be more efficient to use on data with small number of samples while`HuberRegressor`

needs a number of passes on the training data to produce the same robustness.`SGDRegressor`


Note that this estimator is different from the [R implementation of Robust
Regression](https://stats.oarc.ucla.edu/r/dae/robust-regression/) because the R
implementation does a weighted least squares implementation with weights given to each
sample on the basis of how much the residual is greater than a certain threshold.

## 1.1.15. Quantile Regression[#](#quantile-regression)

Quantile regression estimates the median or other quantiles of \(y\) conditional on \(X\), while ordinary least squares (OLS) estimates the conditional mean.

Quantile regression may be useful if one is interested in predicting an interval instead of point prediction. Sometimes, prediction intervals are calculated based on the assumption that prediction error is distributed normally with zero mean and constant variance. Quantile regression provides sensible prediction intervals even for errors with non-constant (but predictable) variance or non-normal distribution.

Based on minimizing the pinball loss, conditional quantiles can also be
estimated by models other than linear models. For example,
[ GradientBoostingRegressor](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor) can predict conditional
quantiles if its parameter

`loss`

is set to `"quantile"`

and parameter
`alpha`

is set to the quantile that should be predicted. See the example in
[Prediction Intervals for Gradient Boosting Regression](../auto_examples/ensemble/plot_gradient_boosting_quantile.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-quantile-py).

Most implementations of quantile regression are based on linear programming
problem. The current implementation is based on
[ scipy.optimize.linprog](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog).

Examples

##
Mathematical details[#](#mathematical-details-6)

As a linear model, the [ QuantileRegressor](generated/sklearn.linear_model.QuantileRegressor.html#sklearn.linear_model.QuantileRegressor) gives linear predictions
\(\hat{y}(w, X) = Xw\) for the \(q\)-th quantile, \(q \in (0, 1)\).
The weights or coefficients \(w\) are then found by the following
minimization problem:

This consists of the pinball loss (also known as linear loss),
see also [ mean_pinball_loss](generated/sklearn.metrics.mean_pinball_loss.html#sklearn.metrics.mean_pinball_loss),

and the L1 penalty controlled by parameter `alpha`

, similar to
[ Lasso](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso).

As the pinball loss is only linear in the residuals, quantile regression is
much more robust to outliers than squared error based estimation of the mean.
Somewhat in between is the [ HuberRegressor](generated/sklearn.linear_model.HuberRegressor.html#sklearn.linear_model.HuberRegressor).

##
References[#](#references-10)

Koenker, R., & Bassett Jr, G. (1978).

[Regression quantiles.](https://gib.people.uic.edu/RQ.pdf)Econometrica: journal of the Econometric Society, 33-50.Portnoy, S., & Koenker, R. (1997).

[The Gaussian hare and the Laplacian tortoise: computability of squared-error versus absolute-error estimators. Statistical Science, 12, 279-300](https://doi.org/10.1214/ss/1030037960).Koenker, R. (2005).

[Quantile Regression](https://doi.org/10.1017/CBO9780511754098). Cambridge University Press.

## 1.1.16. Polynomial regression: extending linear models with basis functions[#](#polynomial-regression-extending-linear-models-with-basis-functions)

One common pattern within machine learning is to use linear models trained on nonlinear functions of the data. This approach maintains the generally fast performance of linear methods, while allowing them to fit a much wider range of data.

##
Mathematical details[#](#mathematical-details-7)

For example, a simple linear regression can be extended by constructing
**polynomial features** from the coefficients. In the standard linear
regression case, you might have a model that looks like this for
two-dimensional data:

If we want to fit a paraboloid to the data instead of a plane, we can combine the features in second-order polynomials, so that the model looks like this:

The (sometimes surprising) observation is that this is *still a linear model*:
to see this, imagine creating a new set of features

With this re-labeling of the data, our problem can be written

We see that the resulting *polynomial regression* is in the same class of
linear models we considered above (i.e. the model is linear in \(w\))
and can be solved by the same techniques. By considering linear fits within
a higher-dimensional space built with these basis functions, the model has the
flexibility to fit a much broader range of data.

Here is an example of applying this idea to one-dimensional data, using polynomial features of varying degrees:

This figure is created using the [ PolynomialFeatures](generated/sklearn.preprocessing.PolynomialFeatures.html#sklearn.preprocessing.PolynomialFeatures) transformer, which
transforms an input data matrix into a new data matrix of a given degree.
It can be used as follows:

```
>>> from sklearn.preprocessing import PolynomialFeatures
>>> import numpy as np
>>> X = np.arange(6).reshape(3, 2)
>>> X
array([[0, 1],
[2, 3],
[4, 5]])
>>> poly = PolynomialFeatures(degree=2)
>>> poly.fit_transform(X)
array([[ 1., 0., 1., 0., 0., 1.],
[ 1., 2., 3., 4., 6., 9.],
[ 1., 4., 5., 16., 20., 25.]])
```

The features of `X`

have been transformed from \([x_1, x_2]\) to
\([1, x_1, x_2, x_1^2, x_1 x_2, x_2^2]\), and can now be used within
any linear model.

This sort of preprocessing can be streamlined with the
[Pipeline](compose.html#pipeline) tools. A single object representing a simple
polynomial regression can be created and used as follows:

```
>>> from sklearn.preprocessing import PolynomialFeatures
>>> from sklearn.linear_model import LinearRegression
>>> from sklearn.pipeline import Pipeline
>>> import numpy as np
>>> model = Pipeline([('poly', PolynomialFeatures(degree=3)),
... ('linear', LinearRegression(fit_intercept=False))])
>>> # fit to an order-3 polynomial data
>>> x = np.arange(5)
>>> y = 3 - 2 * x + x ** 2 - x ** 3
>>> model = model.fit(x[:, np.newaxis], y)
>>> model.named_steps['linear'].coef_
array([ 3., -2., 1., -1.])
```

The linear model trained on polynomial features is able to exactly recover the input polynomial coefficients.

In some cases it’s not necessary to include higher powers of any single feature,
but only the so-called *interaction features*
that multiply together at most \(d\) distinct features.
These can be gotten from [ PolynomialFeatures](generated/sklearn.preprocessing.PolynomialFeatures.html#sklearn.preprocessing.PolynomialFeatures) with the setting

`interaction_only=True`

.For example, when dealing with boolean features, \(x_i^n = x_i\) for all \(n\) and is therefore useless; but \(x_i x_j\) represents the conjunction of two booleans. This way, we can solve the XOR problem with a linear classifier:

```
>>> from sklearn.linear_model import Perceptron
>>> from sklearn.preprocessing import PolynomialFeatures
>>> import numpy as np
>>> X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
>>> y = X[:, 0] ^ X[:, 1]
>>> y
array([0, 1, 1, 0])
>>> X = PolynomialFeatures(interaction_only=True).fit_transform(X).astype(int)
>>> X
array([[1, 0, 0, 0],
[1, 0, 1, 0],
[1, 1, 0, 0],
[1, 1, 1, 1]])
>>> clf = Perceptron(fit_intercept=False, max_iter=10, tol=None,
... shuffle=False).fit(X, y)
```

And the classifier “predictions” are perfect:

```
>>> clf.predict(X)
array([0, 1, 1, 0])
>>> clf.score(X, y)
1.0
```

---

## Source: https://scikit-learn.org/stable/modules/lda_qda.html

# 1.2. Linear and Quadratic Discriminant Analysis[#](#linear-and-quadratic-discriminant-analysis)

Linear Discriminant Analysis
([ LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis)) and Quadratic
Discriminant Analysis
(

[) are two classic classifiers, with, as their names suggest, a linear and a quadratic decision surface, respectively.](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`QuadraticDiscriminantAnalysis`

These classifiers are attractive because they have closed-form solutions that can be easily computed, are inherently multiclass, have proven to work well in practice, and have no hyperparameters to tune.

The plot shows decision boundaries for Linear Discriminant Analysis and Quadratic Discriminant Analysis. The bottom row demonstrates that Linear Discriminant Analysis can only learn linear boundaries, while Quadratic Discriminant Analysis can learn quadratic boundaries and is therefore more flexible.

Examples

[Linear and Quadratic Discriminant Analysis with covariance ellipsoid](../auto_examples/classification/plot_lda_qda.html#sphx-glr-auto-examples-classification-plot-lda-qda-py): Comparison of LDA and QDA on synthetic data.

## 1.2.1. Dimensionality reduction using Linear Discriminant Analysis[#](#dimensionality-reduction-using-linear-discriminant-analysis)

[ LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis) can be used to
perform supervised dimensionality reduction, by projecting the input data to a
linear subspace consisting of the directions which maximize the separation
between classes (in a precise sense discussed in the mathematics section
below). The dimension of the output is necessarily less than the number of
classes, so this is in general a rather strong dimensionality reduction, and
only makes sense in a multiclass setting.

This is implemented in the `transform`

method. The desired dimensionality can
be set using the `n_components`

parameter. This parameter has no influence
on the `fit`

and `predict`

methods.

Examples

[Comparison of LDA and PCA 2D projection of Iris dataset](../auto_examples/decomposition/plot_pca_vs_lda.html#sphx-glr-auto-examples-decomposition-plot-pca-vs-lda-py): Comparison of LDA and PCA for dimensionality reduction of the Iris dataset

## 1.2.2. Mathematical formulation of the LDA and QDA classifiers[#](#mathematical-formulation-of-the-lda-and-qda-classifiers)

Both LDA and QDA can be derived from simple probabilistic models which model the class conditional distribution of the data \(P(X|y=k)\) for each class \(k\). Predictions can then be obtained by using Bayes’ rule, for each training sample \(x \in \mathbb{R}^d\):

and we select the class \(k\) which maximizes this posterior probability.

More specifically, for linear and quadratic discriminant analysis, \(P(x|y)\) is modeled as a multivariate Gaussian distribution with density:

where \(d\) is the number of features.

### 1.2.2.1. QDA[#](#qda)

According to the model above, the log of the posterior is:

where the constant term \(Cst\) corresponds to the denominator \(P(x)\), in addition to other constant terms from the Gaussian. The predicted class is the one that maximises this log-posterior.

Note

**Relation with Gaussian Naive Bayes**

If in the QDA model one assumes that the covariance matrices are diagonal,
then the inputs are assumed to be conditionally independent in each class,
and the resulting classifier is equivalent to the Gaussian Naive Bayes
classifier [ naive_bayes.GaussianNB](generated/sklearn.naive_bayes.GaussianNB.html#sklearn.naive_bayes.GaussianNB).

### 1.2.2.2. LDA[#](#lda)

LDA is a special case of QDA, where the Gaussians for each class are assumed to share the same covariance matrix: \(\Sigma_k = \Sigma\) for all \(k\). This reduces the log posterior to:

The term \((x-\mu_k)^T \Sigma^{-1} (x-\mu_k)\) corresponds to the
[Mahalanobis Distance](https://en.wikipedia.org/wiki/Mahalanobis_distance)
between the sample \(x\) and the mean \(\mu_k\). The Mahalanobis
distance tells how close \(x\) is from \(\mu_k\), while also
accounting for the variance of each feature. We can thus interpret LDA as
assigning \(x\) to the class whose mean is the closest in terms of
Mahalanobis distance, while also accounting for the class prior
probabilities.

The log-posterior of LDA can also be written [[3]](#id7) as:

where \(\omega_k = \Sigma^{-1} \mu_k\) and \(\omega_{k0} =
-\frac{1}{2} \mu_k^T\Sigma^{-1}\mu_k + \log P (y = k)\). These quantities
correspond to the `coef_`

and `intercept_`

attributes, respectively.

From the above formula, it is clear that LDA has a linear decision surface.
In the case of QDA, there are no assumptions on the covariance matrices
\(\Sigma_k\) of the Gaussians, leading to quadratic decision surfaces.
See [[1]](#id5) for more details.

## 1.2.3. Mathematical formulation of LDA dimensionality reduction[#](#mathematical-formulation-of-lda-dimensionality-reduction)

First note that the K means \(\mu_k\) are vectors in \(\mathbb{R}^d\), and they lie in an affine subspace \(H\) of dimension at most \(K - 1\) (2 points lie on a line, 3 points lie on a plane, etc.).

As mentioned above, we can interpret LDA as assigning \(x\) to the class
whose mean \(\mu_k\) is the closest in terms of Mahalanobis distance,
while also accounting for the class prior probabilities. Alternatively, LDA
is equivalent to first *sphering* the data so that the covariance matrix is
the identity, and then assigning \(x\) to the closest mean in terms of
Euclidean distance (still accounting for the class priors).

Computing Euclidean distances in this d-dimensional space is equivalent to first projecting the data points into \(H\), and computing the distances there (since the other dimensions will contribute equally to each class in terms of distance). In other words, if \(x\) is closest to \(\mu_k\) in the original space, it will also be the case in \(H\). This shows that, implicit in the LDA classifier, there is a dimensionality reduction by linear projection onto a \(K-1\) dimensional space.

We can reduce the dimension even more, to a chosen \(L\), by projecting
onto the linear subspace \(H_L\) which maximizes the variance of the
\(\mu^*_k\) after projection (in effect, we are doing a form of PCA for the
transformed class means \(\mu^*_k\)). This \(L\) corresponds to the
`n_components`

parameter used in the
[ transform](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis.transform) method. See

[[1]](#id5)for more details.

## 1.2.4. Shrinkage and Covariance Estimator[#](#shrinkage-and-covariance-estimator)

Shrinkage is a form of regularization used to improve the estimation of
covariance matrices in situations where the number of training samples is
small compared to the number of features.
In this scenario, the empirical sample covariance is a poor
estimator, and shrinkage helps improving the generalization performance of
the classifier.
Shrinkage can be used with LDA (or QDA) by setting the `shrinkage`

parameter of
the [ LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis) class
(or

[) to](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`QuadraticDiscriminantAnalysis`

`'auto'`

.
This automatically determines the optimal shrinkage parameter in an analytic
way following the lemma introduced by Ledoit and Wolf [[2]](#id6). Note that currently shrinkage only works when setting the

`solver`

parameter to `'lsqr'`

or `'eigen'`

(only `'eigen'`

is implemented for QDA).The `shrinkage`

parameter can also be manually set between 0 and 1. In
particular, a value of 0 corresponds to no shrinkage (which means the empirical
covariance matrix will be used) and a value of 1 corresponds to complete
shrinkage (which means that the diagonal matrix of variances will be used as
an estimate for the covariance matrix). Setting this parameter to a value
between these two extrema will estimate a shrunk version of the covariance
matrix.

The shrunk Ledoit and Wolf estimator of covariance may not always be the
best choice. For example if the distribution of the data
is normally distributed, the
Oracle Approximating Shrinkage estimator [ sklearn.covariance.OAS](generated/sklearn.covariance.OAS.html#sklearn.covariance.OAS)
yields a smaller Mean Squared Error than the one given by Ledoit and Wolf’s
formula used with

`shrinkage="auto"`

. In LDA and QDA, the data are assumed to be gaussian
conditionally to the class. If these assumptions hold, using LDA and QDA with
the OAS estimator of covariance will yield a better classification
accuracy than if Ledoit and Wolf or the empirical covariance estimator is used.The covariance estimator can be chosen using the `covariance_estimator`

parameter of the [ discriminant_analysis.LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis)
and

[classes. A covariance estimator should have a](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`discriminant_analysis.QuadraticDiscriminantAnalysis`

[fit](../glossary.html#term-fit)method and a

`covariance_`

attribute like all covariance estimators in the
[module.](../api/sklearn.covariance.html#module-sklearn.covariance)

`sklearn.covariance`

Examples

[Normal, Ledoit-Wolf and OAS Linear Discriminant Analysis for classification](../auto_examples/classification/plot_lda.html#sphx-glr-auto-examples-classification-plot-lda-py): Comparison of LDA classifiers with Empirical, Ledoit Wolf and OAS covariance estimator.

## 1.2.5. Estimation algorithms[#](#estimation-algorithms)

Using LDA and QDA requires computing the log-posterior which depends on the class priors \(P(y=k)\), the class means \(\mu_k\), and the covariance matrices.

The ‘svd’ solver is the default solver used for
[ LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis) and

[. It can perform both classification and transform (for LDA). As it does not rely on the calculation of the covariance matrix, the ‘svd’ solver may be preferable in situations where the number of features is large. The ‘svd’ solver cannot be used with shrinkage. For QDA, the use of the SVD solver relies on the fact that the covariance matrix \(\Sigma_k\) is, by definition, equal to \(\frac{1}{n - 1} X_k^TX_k = \frac{1}{n - 1} V S^2 V^T\) where \(V\) comes from the SVD of the (centered) matrix: \(X_k = U S V^T\). It turns out that we can compute the log-posterior above without having to explicitly compute \(\Sigma\): computing \(S\) and \(V\) via the SVD of \(X\) is enough. For LDA, two SVDs are computed: the SVD of the centered input matrix \(X\) and the SVD of the class-wise mean vectors.](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`QuadraticDiscriminantAnalysis`

The `'lsqr'`

solver is an efficient algorithm that only works for
classification. It needs to explicitly compute the covariance matrix
\(\Sigma\), and supports shrinkage and custom covariance estimators.
This solver computes the coefficients
\(\omega_k = \Sigma^{-1}\mu_k\) by solving for \(\Sigma \omega =
\mu_k\), thus avoiding the explicit computation of the inverse
\(\Sigma^{-1}\).

The `'eigen'`

solver for [ LinearDiscriminantAnalysis](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis)
is based on the optimization of the between class scatter to
within class scatter ratio. It can be used for both classification and
transform, and it supports shrinkage.
For

[, the](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`QuadraticDiscriminantAnalysis`

`'eigen'`

solver is based on computing the eigenvalues and eigenvectors of each
class covariance matrix. It allows using shrinkage for classification.
However, the `'eigen'`

solver needs to
compute the covariance matrix, so it might not be suitable for situations with
a high number of features.References

---

## Source: https://scikit-learn.org/stable/modules/kernel_ridge.html

# 1.3. Kernel ridge regression[#](#kernel-ridge-regression)

Kernel ridge regression (KRR) [[M2012]](#m2012) combines [Ridge regression and classification](linear_model.html#ridge-regression)
(linear least squares with \(L_2\)-norm regularization) with the [kernel trick](https://en.wikipedia.org/wiki/Kernel_method). It thus learns a linear
function in the space induced by the respective kernel and the data. For
non-linear kernels, this corresponds to a non-linear function in the original
space.

The form of the model learned by [ KernelRidge](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge) is identical to support
vector regression (

[). However, different loss functions are used: KRR uses squared error loss while support vector regression uses \(\epsilon\)-insensitive loss, both combined with \(L_2\) regularization. In contrast to](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[, fitting](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge)

`KernelRidge`

[, which learns a sparse model for \(\epsilon > 0\), at prediction-time.](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

The following figure compares [ KernelRidge](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge) and

[on an artificial dataset, which consists of a sinusoidal target function and strong noise added to every fifth datapoint. The learned model of](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[and](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge)

`KernelRidge`

[is plotted, where both complexity/regularization and bandwidth of the RBF kernel have been optimized using grid-search. The learned functions are very similar; however, fitting](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[is approximately seven times faster than fitting](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge)

`KernelRidge`

[(both with grid-search). However, prediction of 100,000 target values is more than three times faster with](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[since it has learned a sparse model using only approximately 1/3 of the 100 training datapoints as support vectors.](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

The next figure compares the time for fitting and prediction of
[ KernelRidge](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge) and

[for different sizes of the training set. Fitting](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[is faster than](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge)

`KernelRidge`

[for medium-sized training sets (less than 1000 samples); however, for larger training sets](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[scales better. With regard to prediction time,](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[is faster than](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[for all sizes of the training set because of the learned sparse solution. Note that the degree of sparsity and thus the prediction time depends on the parameters \(\epsilon\) and \(C\) of the](generated/sklearn.kernel_ridge.KernelRidge.html#sklearn.kernel_ridge.KernelRidge)

`KernelRidge`

[; \(\epsilon = 0\) would correspond to a dense model.](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

Examples

References

[M2012](#id1)]

“Machine Learning: A Probabilistic Perspective” Murphy, K. P. - chapter 14.4.3, pp. 492-493, The MIT Press, 2012

---

## Source: https://scikit-learn.org/stable/modules/svm.html

# 1.4. Support Vector Machines[#](#support-vector-machines)

**Support vector machines (SVMs)** are a set of supervised learning
methods used for [classification](#svm-classification),
[regression](#svm-regression) and [outliers detection](#svm-outlier-detection).

The advantages of support vector machines are:

Effective in high dimensional spaces.

Still effective in cases where number of dimensions is greater than the number of samples.

Uses a subset of training points in the decision function (called support vectors), so it is also memory efficient.

Versatile: different

[Kernel functions](#svm-kernels)can be specified for the decision function. Common kernels are provided, but it is also possible to specify custom kernels.

The disadvantages of support vector machines include:

If the number of features is much greater than the number of samples, avoid over-fitting in choosing

[Kernel functions](#svm-kernels)and regularization term is crucial.SVMs do not directly provide probability estimates, these are calculated using an expensive five-fold cross-validation (see

[Scores and probabilities](#scores-probabilities), below).

The support vector machines in scikit-learn support both dense
(`numpy.ndarray`

and convertible to that by `numpy.asarray`

) and
sparse (any `scipy.sparse`

) sample vectors as input. However, to use
an SVM to make predictions for sparse data, it must have been fit on such
data. For optimal performance, use C-ordered `numpy.ndarray`

(dense) or
`scipy.sparse.csr_matrix`

(sparse) with `dtype=float64`

.

## 1.4.1. Classification[#](#classification)

[ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC),

[and](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

[are classes capable of performing binary and multi-class classification on a dataset.](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

[ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC) and

[are similar methods, but accept slightly different sets of parameters and have different mathematical formulations (see section](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

[Mathematical formulation](#svm-mathematical-formulation)). On the other hand,

[is another (faster) implementation of Support Vector Classification for the case of a linear kernel. It also lacks some of the attributes of](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

[and](generated/sklearn.svm.SVC.html#sklearn.svm.SVC)

`SVC`

[, like](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

`support_`

. [uses](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

`squared_hinge`

loss and due to its
implementation in `liblinear`

it also regularizes the intercept, if considered.
This effect can however be reduced by carefully fine tuning its
`intercept_scaling`

parameter, which allows the intercept term to have a
different regularization behavior compared to the other features. The
classification results and score can therefore differ from the other two
classifiers.As other classifiers, [ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC),

[and](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

[take as input two arrays: an array](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

`X`

of shape
`(n_samples, n_features)`

holding the training samples, and an array `y`

of
class labels (strings or integers), of shape `(n_samples)`

:```
>>> from sklearn import svm
>>> X = [[0, 0], [1, 1]]
>>> y = [0, 1]
>>> clf = svm.SVC()
>>> clf.fit(X, y)
SVC()
```

After being fitted, the model can then be used to predict new values:

```
>>> clf.predict([[2., 2.]])
array([1])
```

SVMs decision function (detailed in the [Mathematical formulation](#svm-mathematical-formulation))
depends on some subset of the training data, called the support vectors. Some
properties of these support vectors can be found in attributes
`support_vectors_`

, `support_`

and `n_support_`

:

```
>>> # get support vectors
>>> clf.support_vectors_
array([[0., 0.],
[1., 1.]])
>>> # get indices of support vectors
>>> clf.support_
array([0, 1]...)
>>> # get number of support vectors for each class
>>> clf.n_support_
array([1, 1]...)
```

Examples

### 1.4.1.1. Multi-class classification[#](#multi-class-classification)

[ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC) and

[implement the “one-versus-one” (“ovo”) approach for multi-class classification, which constructs](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

`n_classes * (n_classes - 1) / 2`

classifiers, each trained on data from two classes. Internally, the solver
always uses this “ovo” strategy to train the models. However, by default, the
`decision_function_shape`

parameter is set to `"ovr"`

(“one-vs-rest”), to have
a consistent interface with other classifiers by monotonically transforming the “ovo”
decision function into an “ovr” decision function of shape `(n_samples, n_classes)`

.```
>>> X = [[0], [1], [2], [3]]
>>> Y = [0, 1, 2, 3]
>>> clf = svm.SVC(decision_function_shape='ovo')
>>> clf.fit(X, Y)
SVC(decision_function_shape='ovo')
>>> dec = clf.decision_function([[1]])
>>> dec.shape[1] # 6 classes: 4*3/2 = 6
6
>>> clf.decision_function_shape = "ovr"
>>> dec = clf.decision_function([[1]])
>>> dec.shape[1] # 4 classes
4
```

On the other hand, [ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC) implements a “one-vs-rest” (“ovr”)
multi-class strategy, thus training

`n_classes`

models.```
>>> lin_clf = svm.LinearSVC()
>>> lin_clf.fit(X, Y)
LinearSVC()
>>> dec = lin_clf.decision_function([[1]])
>>> dec.shape[1]
4
```

See [Mathematical formulation](#svm-mathematical-formulation) for a complete description of
the decision function.

##
Details on multi-class strategies[#](#details-on-multi-class-strategies)

Note that the [ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC) also implements an alternative multi-class
strategy, the so-called multi-class SVM formulated by Crammer and Singer

[[16]](#id18), by using the option

`multi_class='crammer_singer'`

. In practice,
one-vs-rest classification is usually preferred, since the results are mostly
similar, but the runtime is significantly less.For “one-vs-rest” [ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC) the attributes

`coef_`

and `intercept_`

have the shape `(n_classes, n_features)`

and `(n_classes,)`

respectively.
Each row of the coefficients corresponds to one of the `n_classes`

“one-vs-rest” classifiers and similar for the intercepts, in the
order of the “one” class.In the case of “one-vs-one” [ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC) and

[, the layout of the attributes is a little more involved. In the case of a linear kernel, the attributes](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

`coef_`

and `intercept_`

have the shape
`(n_classes * (n_classes - 1) / 2, n_features)`

and ```
(n_classes *
(n_classes - 1) / 2)
```

respectively. This is similar to the layout for
[described above, with each row now corresponding to a binary classifier. The order for classes 0 to n is “0 vs 1”, “0 vs 2” , … “0 vs n”, “1 vs 2”, “1 vs 3”, “1 vs n”, . . . “n-1 vs n”.](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

The shape of `dual_coef_`

is `(n_classes-1, n_SV)`

with
a somewhat hard to grasp layout.
The columns correspond to the support vectors involved in any
of the `n_classes * (n_classes - 1) / 2`

“one-vs-one” classifiers.
Each support vector `v`

has a dual coefficient in each of the
`n_classes - 1`

classifiers comparing the class of `v`

against another class.
Note that some, but not all, of these dual coefficients, may be zero.
The `n_classes - 1`

entries in each column are these dual coefficients,
ordered by the opposing class.

This might be clearer with an example: consider a three class problem with
class 0 having three support vectors
\(v^{0}_0, v^{1}_0, v^{2}_0\) and class 1 and 2 having two support vectors
\(v^{0}_1, v^{1}_1\) and \(v^{0}_2, v^{1}_2\) respectively. For each
support vector \(v^{j}_i\), there are two dual coefficients. Let’s call
the coefficient of support vector \(v^{j}_i\) in the classifier between
classes \(i\) and \(k\) \(\alpha^{j}_{i,k}\).
Then `dual_coef_`

looks like this:

\(\alpha^{0}_{0,1}\) |
\(\alpha^{1}_{0,1}\) |
\(\alpha^{2}_{0,1}\) |
\(\alpha^{0}_{1,0}\) |
\(\alpha^{1}_{1,0}\) |
\(\alpha^{0}_{2,0}\) |
\(\alpha^{1}_{2,0}\) |
\(\alpha^{0}_{0,2}\) |
\(\alpha^{1}_{0,2}\) |
\(\alpha^{2}_{0,2}\) |
\(\alpha^{0}_{1,2}\) |
\(\alpha^{1}_{1,2}\) |
\(\alpha^{0}_{2,1}\) |
\(\alpha^{1}_{2,1}\) |
Coefficients for SVs of class 0 |
Coefficients for SVs of class 1 |
Coefficients for SVs of class 2 |

Examples

### 1.4.1.2. Scores and probabilities[#](#scores-and-probabilities)

The `decision_function`

method of [ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC) and

[gives per-class scores for each sample (or a single score per sample in the binary case). When the constructor option](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

`probability`

is set to `True`

,
class membership probability estimates (from the methods `predict_proba`

and
`predict_log_proba`

) are enabled. In the binary case, the probabilities are
calibrated using Platt scaling [[9]](#id11): logistic regression on the SVM’s scores, fit by an additional cross-validation on the training data. In the multiclass case, this is extended as per

[[10]](#id12).

Note

The same probability calibration procedure is available for all estimators
via the [ CalibratedClassifierCV](generated/sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV) (see

[Probability calibration](calibration.html#calibration)). In the case of

[and](generated/sklearn.svm.SVC.html#sklearn.svm.SVC)

`SVC`

[, this procedure is builtin to](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

[libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)which is used under the hood, so it does not rely on scikit-learn’s

[.](generated/sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV)

`CalibratedClassifierCV`

The cross-validation involved in Platt scaling is an expensive operation for large datasets. In addition, the probability estimates may be inconsistent with the scores:

the “argmax” of the scores may not be the argmax of the probabilities

in binary classification, a sample may be labeled by

`predict`

as belonging to the positive class even if the output of`predict_proba`

is less than 0.5; and similarly, it could be labeled as negative even if the output of`predict_proba`

is more than 0.5.

Platt’s method is also known to have theoretical issues.
If confidence scores are required, but these do not have to be probabilities,
then it is advisable to set `probability=False`

and use `decision_function`

instead of `predict_proba`

.

Please note that when `decision_function_shape='ovr'`

and `n_classes > 2`

,
unlike `decision_function`

, the `predict`

method does not try to break ties
by default. You can set `break_ties=True`

for the output of `predict`

to be
the same as `np.argmax(clf.decision_function(...), axis=1)`

, otherwise the
first class among the tied classes will always be returned; but have in mind
that it comes with a computational cost. See
[SVM Tie Breaking Example](../auto_examples/svm/plot_svm_tie_breaking.html#sphx-glr-auto-examples-svm-plot-svm-tie-breaking-py) for an example on
tie breaking.

### 1.4.1.3. Unbalanced problems[#](#unbalanced-problems)

In problems where it is desired to give more importance to certain
classes or certain individual samples, the parameters `class_weight`

and
`sample_weight`

can be used.

[ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC) (but not

[) implements the parameter](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

`class_weight`

in the `fit`

method. It’s a dictionary of the form
`{class_label : value}`

, where value is a floating point number > 0
that sets the parameter `C`

of class `class_label`

to `C * value`

.
The figure below illustrates the decision boundary of an unbalanced problem,
with and without weight correction.[ SVC](generated/sklearn.svm.SVC.html#sklearn.svm.SVC),

[,](generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC)

`NuSVC`

[,](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[,](generated/sklearn.svm.NuSVR.html#sklearn.svm.NuSVR)

`NuSVR`

[,](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

[and](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR)

`LinearSVR`

[implement also weights for individual samples in the](generated/sklearn.svm.OneClassSVM.html#sklearn.svm.OneClassSVM)

`OneClassSVM`

`fit`

method through the `sample_weight`

parameter.
Similar to `class_weight`

, this sets the parameter `C`

for the i-th
example to `C * sample_weight[i]`

, which will encourage the classifier to
get these samples right. The figure below illustrates the effect of sample
weighting on the decision boundary. The size of the circles is proportional
to the sample weights:Examples

## 1.4.2. Regression[#](#regression)

The method of Support Vector Classification can be extended to solve regression problems. This method is called Support Vector Regression.

The model produced by support vector classification (as described above) depends only on a subset of the training data, because the cost function for building the model does not care about training points that lie beyond the margin. Analogously, the model produced by Support Vector Regression depends only on a subset of the training data, because the cost function ignores samples whose prediction is close to their target.

There are three different implementations of Support Vector Regression:
[ SVR](generated/sklearn.svm.SVR.html#sklearn.svm.SVR),

[and](generated/sklearn.svm.NuSVR.html#sklearn.svm.NuSVR)

`NuSVR`

[.](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR)

`LinearSVR`

[provides a faster implementation than](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR)

`LinearSVR`

[but only considers the linear kernel, while](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[implements a slightly different formulation than](generated/sklearn.svm.NuSVR.html#sklearn.svm.NuSVR)

`NuSVR`

[and](generated/sklearn.svm.SVR.html#sklearn.svm.SVR)

`SVR`

[. Due to its implementation in](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR)

`LinearSVR`

`liblinear`

[also regularizes the intercept, if considered. This effect can however be reduced by carefully fine tuning its](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR)

`LinearSVR`

`intercept_scaling`

parameter, which allows the intercept term to have a
different regularization behavior compared to the other features. The
classification results and score can therefore differ from the other two
classifiers. See [Implementation details](#svm-implementation-details)for further details.

As with classification classes, the fit method will take as argument vectors X, y, only that in this case y is expected to have floating point values instead of integer values:

```
>>> from sklearn import svm
>>> X = [[0, 0], [2, 2]]
>>> y = [0.5, 2.5]
>>> regr = svm.SVR()
>>> regr.fit(X, y)
SVR()
>>> regr.predict([[1, 1]])
array([1.5])
```

Examples

## 1.4.3. Density estimation, novelty detection[#](#density-estimation-novelty-detection)

The class [ OneClassSVM](generated/sklearn.svm.OneClassSVM.html#sklearn.svm.OneClassSVM) implements a One-Class SVM which is used in
outlier detection.

See [Novelty and Outlier Detection](outlier_detection.html#outlier-detection) for the description and usage of OneClassSVM.

## 1.4.4. Complexity[#](#complexity)

Support Vector Machines are powerful tools, but their compute and
storage requirements increase rapidly with the number of training
vectors. The core of an SVM is a quadratic programming problem (QP),
separating support vectors from the rest of the training data. The QP
solver used by the [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)-based implementation scales between
\(O(n_{features} \times n_{samples}^2)\) and
\(O(n_{features} \times n_{samples}^3)\) depending on how efficiently
the [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) cache is used in practice (dataset dependent). If the data
is very sparse \(n_{features}\) should be replaced by the average number
of non-zero features in a sample vector.

For the linear case, the algorithm used in
[ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC) by the

[liblinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/)implementation is much more efficient than its

[libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)-based

[counterpart and can scale almost linearly to millions of samples and/or features.](generated/sklearn.svm.SVC.html#sklearn.svm.SVC)

`SVC`

## 1.4.5. Tips on Practical Use[#](#tips-on-practical-use)

**Avoiding data copy**: For,`SVC`

,`SVR`

and`NuSVC`

, if the data passed to certain methods is not C-ordered contiguous and double precision, it will be copied before calling the underlying C implementation. You can check whether a given numpy array is C-contiguous by inspecting its`NuSVR`

`flags`

attribute.For

(and`LinearSVC`

) any input passed as a numpy array will be copied and converted to the`LogisticRegression`

[liblinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/)internal sparse data representation (double precision floats and int32 indices of non-zero components). If you want to fit a large-scale linear classifier without copying a dense numpy C-contiguous double precision array as input, we suggest to use theclass instead. The objective function can be configured to be almost the same as the`SGDClassifier`

model.`LinearSVC`

**Kernel cache size**: For,`SVC`

,`SVR`

and`NuSVC`

, the size of the kernel cache has a strong impact on run times for larger problems. If you have enough RAM available, it is recommended to set`NuSVR`

`cache_size`

to a higher value than the default of 200(MB), such as 500(MB) or 1000(MB).**Setting C**:`C`

is`1`

by default and it’s a reasonable default choice. If you have a lot of noisy observations you should decrease it: decreasing C corresponds to more regularization.and`LinearSVC`

are less sensitive to`LinearSVR`

`C`

when it becomes large, and prediction results stop improving after a certain threshold. Meanwhile, larger`C`

values will take more time to train, sometimes up to 10 times longer, as shown in[[11]](#id13).Support Vector Machine algorithms are not scale invariant, so

**it is highly recommended to scale your data**. For example, scale each attribute on the input vector X to [0,1] or [-1,+1], or standardize it to have mean 0 and variance 1. Note that the*same*scaling must be applied to the test vector to obtain meaningful results. This can be done easily by using a:`Pipeline`

>>> from sklearn.pipeline import make_pipeline >>> from sklearn.preprocessing import StandardScaler >>> from sklearn.svm import SVC >>> clf = make_pipeline(StandardScaler(), SVC())

See section

[Preprocessing data](preprocessing.html#preprocessing)for more details on scaling and normalization.

Regarding the

`shrinking`

parameter, quoting[[12]](#id14):*We found that if the number of iterations is large, then shrinking can shorten the training time. However, if we loosely solve the optimization problem (e.g., by using a large stopping tolerance), the code without using shrinking may be much faster*Parameter

`nu`

in/`NuSVC`

/`OneClassSVM`

approximates the fraction of training errors and support vectors.`NuSVR`

In

, if the data is unbalanced (e.g. many positive and few negative), set`SVC`

`class_weight='balanced'`

and/or try different penalty parameters`C`

.**Randomness of the underlying implementations**: The underlying implementations ofand`SVC`

use a random number generator only to shuffle the data for probability estimation (when`NuSVC`

`probability`

is set to`True`

). This randomness can be controlled with the`random_state`

parameter. If`probability`

is set to`False`

these estimators are not random and`random_state`

has no effect on the results. The underlyingimplementation is similar to the ones of`OneClassSVM`

and`SVC`

. As no probability estimation is provided for`NuSVC`

, it is not random.`OneClassSVM`

The underlying

implementation uses a random number generator to select features when fitting the model with a dual coordinate descent (i.e. when`LinearSVC`

`dual`

is set to`True`

). It is thus not uncommon to have slightly different results for the same input data. If that happens, try with a smaller`tol`

parameter. This randomness can also be controlled with the`random_state`

parameter. When`dual`

is set to`False`

the underlying implementation ofis not random and`LinearSVC`

`random_state`

has no effect on the results.Using L1 penalization as provided by

`LinearSVC(penalty='l1', dual=False)`

yields a sparse solution, i.e. only a subset of feature weights is different from zero and contribute to the decision function. Increasing`C`

yields a more complex model (more features are selected). The`C`

value that yields a “null” model (all weights equal to zero) can be calculated using.`l1_min_c`


## 1.4.6. Kernel functions[#](#kernel-functions)

The *kernel function* can be any of the following:

linear: \(\langle x, x'\rangle\).

polynomial: \((\gamma \langle x, x'\rangle + r)^d\), where \(d\) is specified by parameter

`degree`

, \(r\) by`coef0`

.rbf: \(\exp(-\gamma \|x-x'\|^2)\), where \(\gamma\) is specified by parameter

`gamma`

, must be greater than 0.sigmoid \(\tanh(\gamma \langle x,x'\rangle + r)\), where \(r\) is specified by

`coef0`

.

Different kernels are specified by the `kernel`

parameter:

```
>>> linear_svc = svm.SVC(kernel='linear')
>>> linear_svc.kernel
'linear'
>>> rbf_svc = svm.SVC(kernel='rbf')
>>> rbf_svc.kernel
'rbf'
```

See also [Kernel Approximation](kernel_approximation.html#kernel-approximation) for a solution to use RBF kernels that is much faster and more scalable.

### 1.4.6.1. Parameters of the RBF Kernel[#](#parameters-of-the-rbf-kernel)

When training an SVM with the *Radial Basis Function* (RBF) kernel, two
parameters must be considered: `C`

and `gamma`

. The parameter `C`

,
common to all SVM kernels, trades off misclassification of training examples
against simplicity of the decision surface. A low `C`

makes the decision
surface smooth, while a high `C`

aims at classifying all training examples
correctly. `gamma`

defines how much influence a single training example has.
The larger `gamma`

is, the closer other examples must be to be affected.

Proper choice of `C`

and `gamma`

is critical to the SVM’s performance. One
is advised to use [ GridSearchCV](generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV) with

`C`

and `gamma`

spaced exponentially far apart to choose good values.Examples

### 1.4.6.2. Custom Kernels[#](#custom-kernels)

You can define your own kernels by either giving the kernel as a python function or by precomputing the Gram matrix.

Classifiers with custom kernels behave the same way as any other classifiers, except that:

Field

`support_vectors_`

is now empty, only indices of support vectors are stored in`support_`

A reference (and not a copy) of the first argument in the

`fit()`

method is stored for future reference. If that array changes between the use of`fit()`

and`predict()`

you will have unexpected results.

##
Using Python functions as kernels[#](#using-python-functions-as-kernels)

You can use your own defined kernels by passing a function to the
`kernel`

parameter.

Your kernel must take as arguments two matrices of shape
`(n_samples_1, n_features)`

, `(n_samples_2, n_features)`

and return a kernel matrix of shape `(n_samples_1, n_samples_2)`

.

The following code defines a linear kernel and creates a classifier instance that will use that kernel:

```
>>> import numpy as np
>>> from sklearn import svm
>>> def my_kernel(X, Y):
... return np.dot(X, Y.T)
...
>>> clf = svm.SVC(kernel=my_kernel)
```

##
Using the Gram matrix[#](#using-the-gram-matrix)

You can pass pre-computed kernels by using the `kernel='precomputed'`

option. You should then pass Gram matrix instead of X to the `fit`

and
`predict`

methods. The kernel values between *all* training vectors and the
test vectors must be provided:

```
>>> import numpy as np
>>> from sklearn.datasets import make_classification
>>> from sklearn.model_selection import train_test_split
>>> from sklearn import svm
>>> X, y = make_classification(n_samples=10, random_state=0)
>>> X_train , X_test , y_train, y_test = train_test_split(X, y, random_state=0)
>>> clf = svm.SVC(kernel='precomputed')
>>> # linear kernel computation
>>> gram_train = np.dot(X_train, X_train.T)
>>> clf.fit(gram_train, y_train)
SVC(kernel='precomputed')
>>> # predict on training examples
>>> gram_test = np.dot(X_test, X_train.T)
>>> clf.predict(gram_test)
array([0, 1, 0])
```

Examples

## 1.4.7. Mathematical formulation[#](#mathematical-formulation)

A support vector machine constructs a hyper-plane or set of hyper-planes in a high or infinite dimensional space, which can be used for classification, regression or other tasks. Intuitively, a good separation is achieved by the hyper-plane that has the largest distance to the nearest training data points of any class (so-called functional margin), since in general the larger the margin the lower the generalization error of the classifier. The figure below shows the decision function for a linearly separable problem, with three samples on the margin boundaries, called “support vectors”:

In general, when the problem isn’t linearly separable, the support vectors
are the samples *within* the margin boundaries.

We recommend [[13]](#id15) and [[14]](#id16) as good references for the theory and
practicalities of SVMs.

### 1.4.7.1. SVC[#](#svc)

Given training vectors \(x_i \in \mathbb{R}^p\), i=1,…, n, in two classes, and a vector \(y \in \{1, -1\}^n\), our goal is to find \(w \in \mathbb{R}^p\) and \(b \in \mathbb{R}\) such that the prediction given by \(\text{sign} (w^T\phi(x) + b)\) is correct for most samples.

SVC solves the following primal problem:

Intuitively, we’re trying to maximize the margin (by minimizing
\(||w||^2 = w^Tw\)), while incurring a penalty when a sample is
misclassified or within the margin boundary. Ideally, the value \(y_i
(w^T \phi (x_i) + b)\) would be \(\geq 1\) for all samples, which
indicates a perfect prediction. But problems are usually not always perfectly
separable with a hyperplane, so we allow some samples to be at a distance \(\zeta_i\) from
their correct margin boundary. The penalty term `C`

controls the strength of
this penalty, and as a result, acts as an inverse regularization parameter
(see note below).

The dual problem to the primal is

where \(e\) is the vector of all ones,
and \(Q\) is an \(n\) by \(n\) positive semidefinite matrix,
\(Q_{ij} \equiv y_i y_j K(x_i, x_j)\), where \(K(x_i, x_j) = \phi (x_i)^T \phi (x_j)\)
is the kernel. The terms \(\alpha_i\) are called the dual coefficients,
and they are upper-bounded by \(C\).
This dual representation highlights the fact that training vectors are
implicitly mapped into a higher (maybe infinite)
dimensional space by the function \(\phi\): see [kernel trick](https://en.wikipedia.org/wiki/Kernel_method).

Once the optimization problem is solved, the output of
[decision_function](../glossary.html#term-decision_function) for a given sample \(x\) becomes:

and the predicted class corresponds to its sign. We only need to sum over the support vectors (i.e. the samples that lie within the margin) because the dual coefficients \(\alpha_i\) are zero for the other samples.

These parameters can be accessed through the attributes `dual_coef_`

which holds the product \(y_i \alpha_i\), `support_vectors_`

which
holds the support vectors, and `intercept_`

which holds the independent
term \(b\).

Note

While SVM models derived from [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) and [liblinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/) use `C`

as
regularization parameter, most other estimators use `alpha`

. The exact
equivalence between the amount of regularization of two models depends on
the exact objective function optimized by the model. For example, when the
estimator used is [ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge) regression,
the relation between them is given as \(C = \frac{1}{\alpha}\).

##
LinearSVC[#](#linearsvc)

The primal problem can be equivalently formulated as

where we make use of the [hinge loss](https://en.wikipedia.org/wiki/Hinge_loss). This is the form that is
directly optimized by [ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC), but unlike the dual form, this one
does not involve inner products between samples, so the famous kernel trick
cannot be applied. This is why only the linear kernel is supported by

[(\(\phi\) is the identity function).](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

##
NuSVC[#](#nusvc)

The \(\nu\)-SVC formulation [[15]](#id17) is a reparameterization of the
\(C\)-SVC and therefore mathematically equivalent.

We introduce a new parameter \(\nu\) (instead of \(C\)) which
controls the number of support vectors and *margin errors*:
\(\nu \in (0, 1]\) is an upper bound on the fraction of margin errors and
a lower bound of the fraction of support vectors. A margin error corresponds
to a sample that lies on the wrong side of its margin boundary: it is either
misclassified, or it is correctly classified but does not lie beyond the
margin.

### 1.4.7.2. SVR[#](#svr)

Given training vectors \(x_i \in \mathbb{R}^p\), i=1,…, n, and a vector \(y \in \mathbb{R}^n\) \(\varepsilon\)-SVR solves the following primal problem:

Here, we are penalizing samples whose prediction is at least \(\varepsilon\) away from their true target. These samples penalize the objective by \(\zeta_i\) or \(\zeta_i^*\), depending on whether their predictions lie above or below the \(\varepsilon\) tube.

The dual problem is

where \(e\) is the vector of all ones, \(Q\) is an \(n\) by \(n\) positive semidefinite matrix, \(Q_{ij} \equiv K(x_i, x_j) = \phi (x_i)^T \phi (x_j)\) is the kernel. Here training vectors are implicitly mapped into a higher (maybe infinite) dimensional space by the function \(\phi\).

The prediction is:

These parameters can be accessed through the attributes `dual_coef_`

which holds the difference \(\alpha_i - \alpha_i^*\), `support_vectors_`

which
holds the support vectors, and `intercept_`

which holds the independent
term \(b\)

##
LinearSVR[#](#linearsvr)

The primal problem can be equivalently formulated as

where we make use of the epsilon-insensitive loss, i.e. errors of less than
\(\varepsilon\) are ignored. This is the form that is directly optimized
by [ LinearSVR](generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR).

## 1.4.8. Implementation details[#](#implementation-details)

Internally, we use [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/) [[12]](#id14) and [liblinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/) [[11]](#id13) to handle all
computations. These libraries are wrapped using C and Cython.
For a description of the implementation and details of the algorithms
used, please refer to their respective papers.

References

---

## Source: https://scikit-learn.org/stable/modules/sgd.html

# 1.5. Stochastic Gradient Descent[#](#stochastic-gradient-descent)

**Stochastic Gradient Descent (SGD)** is a simple yet very efficient
approach to fitting linear classifiers and regressors under
convex loss functions such as (linear) [Support Vector Machines](https://en.wikipedia.org/wiki/Support_vector_machine) and [Logistic
Regression](https://en.wikipedia.org/wiki/Logistic_regression).
Even though SGD has been around in the machine learning community for
a long time, it has received a considerable amount of attention just
recently in the context of large-scale learning.

SGD has been successfully applied to large-scale and sparse machine learning problems often encountered in text classification and natural language processing. Given that the data is sparse, the classifiers in this module easily scale to problems with more than \(10^5\) training examples and more than \(10^5\) features.

Strictly speaking, SGD is merely an optimization technique and does not
correspond to a specific family of machine learning models. It is only a
*way* to train a model. Often, an instance of [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) or

[will have an equivalent estimator in the scikit-learn API, potentially using a different optimization technique. For example, using](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

`SGDClassifier(loss='log_loss')`

results in logistic regression,
i.e. a model equivalent to [which is fitted via SGD instead of being fitted by one of the other solvers in](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

[. Similarly,](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

`SGDRegressor(loss='squared_error', penalty='l2')`

and
[solve the same optimization problem, via different means.](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

The advantages of Stochastic Gradient Descent are:

Efficiency.

Ease of implementation (lots of opportunities for code tuning).


The disadvantages of Stochastic Gradient Descent include:

SGD requires a number of hyperparameters such as the regularization parameter and the number of iterations.

SGD is sensitive to feature scaling.


Warning

Make sure you permute (shuffle) your training data before fitting the model
or use `shuffle=True`

to shuffle after each iteration (used by default).
Also, ideally, features should be standardized using e.g.
`make_pipeline(StandardScaler(), SGDClassifier())`

(see [Pipelines](compose.html#combining-estimators)).

## 1.5.1. Classification[#](#classification)

The class [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) implements a plain stochastic gradient
descent learning routine which supports different loss functions and
penalties for classification. Below is the decision boundary of a

[trained with the hinge loss, equivalent to a linear SVM.](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier)

`SGDClassifier`

As other classifiers, SGD has to be fitted with two arrays: an array `X`

of shape (n_samples, n_features) holding the training samples, and an
array `y`

of shape (n_samples,) holding the target values (class labels)
for the training samples:

```
>>> from sklearn.linear_model import SGDClassifier
>>> X = [[0., 0.], [1., 1.]]
>>> y = [0, 1]
>>> clf = SGDClassifier(loss="hinge", penalty="l2", max_iter=5)
>>> clf.fit(X, y)
SGDClassifier(max_iter=5)
```

After being fitted, the model can then be used to predict new values:

```
>>> clf.predict([[2., 2.]])
array([1])
```

SGD fits a linear model to the training data. The `coef_`

attribute holds
the model parameters:

```
>>> clf.coef_
array([[9.9, 9.9]])
```

The `intercept_`

attribute holds the intercept (aka offset or bias):

```
>>> clf.intercept_
array([-9.9])
```

Whether or not the model should use an intercept, i.e. a biased
hyperplane, is controlled by the parameter `fit_intercept`

.

The signed distance to the hyperplane (computed as the dot product between
the coefficients and the input sample, plus the intercept) is given by
[ SGDClassifier.decision_function](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier.decision_function):

```
>>> clf.decision_function([[2., 2.]])
array([29.6])
```

The concrete loss function can be set via the `loss`

parameter. [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) supports the following loss functions:

`loss="hinge"`

: (soft-margin) linear Support Vector Machine,`loss="modified_huber"`

: smoothed hinge loss,`loss="log_loss"`

: logistic regression,and all regression losses below. In this case the target is encoded as \(-1\) or \(1\), and the problem is treated as a regression problem. The predicted class then corresponds to the sign of the predicted target.


Please refer to the [mathematical section below](#sgd-mathematical-formulation) for formulas.
The first two loss functions are lazy, they only update the model
parameters if an example violates the margin constraint, which makes
training very efficient and may result in sparser models (i.e. with more zero
coefficients), even when \(L_2\) penalty is used.

Using `loss="log_loss"`

or `loss="modified_huber"`

enables the
`predict_proba`

method, which gives a vector of probability estimates
\(P(y|x)\) per sample \(x\):

```
>>> clf = SGDClassifier(loss="log_loss", max_iter=5).fit(X, y)
>>> clf.predict_proba([[1., 1.]])
array([[0.00, 0.99]])
```

The concrete penalty can be set via the `penalty`

parameter.
SGD supports the following penalties:

`penalty="l2"`

: \(L_2\) norm penalty on`coef_`

.`penalty="l1"`

: \(L_1\) norm penalty on`coef_`

.`penalty="elasticnet"`

: Convex combination of \(L_2\) and \(L_1\);`(1 - l1_ratio) * L2 + l1_ratio * L1`

.

The default setting is `penalty="l2"`

. The \(L_1\) penalty leads to sparse
solutions, driving most coefficients to zero. The Elastic Net [[11]](#id15) solves
some deficiencies of the \(L_1\) penalty in the presence of highly correlated
attributes. The parameter `l1_ratio`

controls the convex combination
of \(L_1\) and \(L_2\) penalty.

[ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) supports multi-class classification by combining
multiple binary classifiers in a “one versus all” (OVA) scheme. For each
of the \(K\) classes, a binary classifier is learned that discriminates
between that and all other \(K-1\) classes. At testing time, we compute the
confidence score (i.e. the signed distances to the hyperplane) for each
classifier and choose the class with the highest confidence. The Figure
below illustrates the OVA approach on the iris dataset. The dashed
lines represent the three OVA classifiers; the background colors show
the decision surface induced by the three classifiers.

In the case of multi-class classification `coef_`

is a two-dimensional
array of shape (n_classes, n_features) and `intercept_`

is a
one-dimensional array of shape (n_classes,). The \(i\)-th row of `coef_`

holds
the weight vector of the OVA classifier for the \(i\)-th class; classes are
indexed in ascending order (see attribute `classes_`

).
Note that, in principle, since they allow to create a probability model,
`loss="log_loss"`

and `loss="modified_huber"`

are more suitable for
one-vs-all classification.

[ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) supports both weighted classes and weighted
instances via the fit parameters

`class_weight`

and `sample_weight`

. See
the examples below and the docstring of [for further information.](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier.fit)

`SGDClassifier.fit`

[ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) supports averaged SGD (ASGD)

[[10]](#id14). Averaging can be enabled by setting

`average=True`

. ASGD performs the same updates as the
regular SGD (see [Mathematical formulation](#sgd-mathematical-formulation)), but instead of using the last value of the coefficients as the

`coef_`

attribute (i.e. the values
of the last update), `coef_`

is set instead to the **average**value of the coefficients across all updates. The same is done for the

`intercept_`

attribute. When using ASGD the learning rate can be larger and even constant,
leading on some datasets to a speed up in training time.For classification with a logistic loss, another variant of SGD with an
averaging strategy is available with Stochastic Average Gradient (SAG)
algorithm, available as a solver in [ LogisticRegression](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression).

Examples

## 1.5.2. Regression[#](#regression)

The class [ SGDRegressor](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor) implements a plain stochastic gradient
descent learning routine which supports different loss functions and
penalties to fit linear regression models.

[is well suited for regression problems with a large number of training samples (> 10.000), for other problems we recommend](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

[,](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge)

`Ridge`

[, or](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso)

`Lasso`

[.](generated/sklearn.linear_model.ElasticNet.html#sklearn.linear_model.ElasticNet)

`ElasticNet`

The concrete loss function can be set via the `loss`

parameter. [ SGDRegressor](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor) supports the following loss functions:

`loss="squared_error"`

: Ordinary least squares,`loss="huber"`

: Huber loss for robust regression,`loss="epsilon_insensitive"`

: linear Support Vector Regression.

Please refer to the [mathematical section below](#sgd-mathematical-formulation) for formulas.
The Huber and epsilon-insensitive loss functions can be used for
robust regression. The width of the insensitive region has to be
specified via the parameter `epsilon`

. This parameter depends on the
scale of the target variables.

The `penalty`

parameter determines the regularization to be used (see
description above in the classification section).

[ SGDRegressor](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor) also supports averaged SGD

[[10]](#id14)(here again, see description above in the classification section).

For regression with a squared loss and a \(L_2\) penalty, another variant of
SGD with an averaging strategy is available with Stochastic Average
Gradient (SAG) algorithm, available as a solver in [ Ridge](generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge).

Examples

## 1.5.3. Online One-Class SVM[#](#online-one-class-svm)

The class [ sklearn.linear_model.SGDOneClassSVM](generated/sklearn.linear_model.SGDOneClassSVM.html#sklearn.linear_model.SGDOneClassSVM) implements an online
linear version of the One-Class SVM using a stochastic gradient descent.
Combined with kernel approximation techniques,

[can be used to approximate the solution of a kernelized One-Class SVM, implemented in](generated/sklearn.linear_model.SGDOneClassSVM.html#sklearn.linear_model.SGDOneClassSVM)

`sklearn.linear_model.SGDOneClassSVM`

[, with a linear complexity in the number of samples. Note that the complexity of a kernelized One-Class SVM is at best quadratic in the number of samples.](generated/sklearn.svm.OneClassSVM.html#sklearn.svm.OneClassSVM)

`sklearn.svm.OneClassSVM`

[is thus well suited for datasets with a large number of training samples (over 10,000) for which the SGD variant can be several orders of magnitude faster.](generated/sklearn.linear_model.SGDOneClassSVM.html#sklearn.linear_model.SGDOneClassSVM)

`sklearn.linear_model.SGDOneClassSVM`

##
Mathematical details[#](#mathematical-details)

Its implementation is based on the implementation of the stochastic gradient descent. Indeed, the original optimization problem of the One-Class SVM is given by

where \(\nu \in (0, 1]\) is the user-specified parameter controlling the proportion of outliers and the proportion of support vectors. Getting rid of the slack variables \(\xi_i\) this problem is equivalent to

Multiplying by the constant \(\nu\) and introducing the intercept \(b = 1 - \rho\) we obtain the following equivalent optimization problem

This is similar to the optimization problems studied in section
[Mathematical formulation](#sgd-mathematical-formulation) with \(y_i = 1, 1 \leq i \leq n\) and
\(\alpha = \nu/2\), \(L\) being the hinge loss function and \(R\)
being the \(L_2\) norm. We just need to add the term \(b\nu\) in the
optimization loop.

As [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) and

[,](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

[supports averaged SGD. Averaging can be enabled by setting](generated/sklearn.linear_model.SGDOneClassSVM.html#sklearn.linear_model.SGDOneClassSVM)

`SGDOneClassSVM`

`average=True`

.Examples

## 1.5.4. Stochastic Gradient Descent for sparse data[#](#stochastic-gradient-descent-for-sparse-data)

Note

The sparse implementation produces slightly different results
from the dense implementation, due to a shrunk learning rate for the
intercept. See [Implementation details](#implementation-details).

There is built-in support for sparse data given in any matrix in a format
supported by [scipy.sparse](https://docs.scipy.org/doc/scipy/reference/sparse.html). For maximum
efficiency, however, use the CSR
matrix format as defined in [scipy.sparse.csr_matrix](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html).

Examples

## 1.5.5. Complexity[#](#complexity)

The major advantage of SGD is its efficiency, which is basically linear in the number of training examples. If \(X\) is a matrix of size \(n \times p\) (with \(n\) samples and \(p\) features), training has a cost of \(O(k n \bar p)\), where \(k\) is the number of iterations (epochs) and \(\bar p\) is the average number of non-zero attributes per sample.

Recent theoretical results, however, show that the runtime to get some desired optimization accuracy does not increase as the training set size increases.

## 1.5.6. Stopping criterion[#](#stopping-criterion)

The classes [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) and

[provide two criteria to stop the algorithm when a given level of convergence is reached:](generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor)

`SGDRegressor`

With

`early_stopping=True`

, the input data is split into a training set and a validation set. The model is then fitted on the training set, and the stopping criterion is based on the prediction score (using the`score`

method) computed on the validation set. The size of the validation set can be changed with the parameter`validation_fraction`

.With

`early_stopping=False`

, the model is fitted on the entire input data and the stopping criterion is based on the objective function computed on the training data.

In both cases, the criterion is evaluated once by epoch, and the algorithm stops
when the criterion does not improve `n_iter_no_change`

times in a row. The
improvement is evaluated with absolute tolerance `tol`

, and the algorithm
stops in any case after a maximum number of iterations `max_iter`

.

See [Early stopping of Stochastic Gradient Descent](../auto_examples/linear_model/plot_sgd_early_stopping.html#sphx-glr-auto-examples-linear-model-plot-sgd-early-stopping-py) for an
example of the effects of early stopping.

## 1.5.7. Tips on Practical Use[#](#tips-on-practical-use)

Stochastic Gradient Descent is sensitive to feature scaling, so it is highly recommended to scale your data. For example, scale each attribute on the input vector \(X\) to \([0,1]\) or \([-1,1]\), or standardize it to have mean \(0\) and variance \(1\). Note that the

*same*scaling must be applied to the test vector to obtain meaningful results. This can be easily done using:`StandardScaler`

from sklearn.preprocessing import StandardScaler scaler = StandardScaler() scaler.fit(X_train) # Don't cheat - fit only on training data X_train = scaler.transform(X_train) X_test = scaler.transform(X_test) # apply same transformation to test data # Or better yet: use a pipeline! from sklearn.pipeline import make_pipeline est = make_pipeline(StandardScaler(), SGDClassifier()) est.fit(X_train) est.predict(X_test)

If your attributes have an intrinsic scale (e.g. word frequencies or indicator features) scaling is not needed.

Finding a reasonable regularization term \(\alpha\) is best done using automatic hyper-parameter search, e.g.

or`GridSearchCV`

, usually in the range`RandomizedSearchCV`

`10.0**-np.arange(1,7)`

.Empirically, we found that SGD converges after observing approximately \(10^6\) training samples. Thus, a reasonable first guess for the number of iterations is

`max_iter = np.ceil(10**6 / n)`

, where`n`

is the size of the training set.If you apply SGD to features extracted using PCA we found that it is often wise to scale the feature values by some constant

`c`

such that the average \(L_2\) norm of the training data equals one.We found that Averaged SGD works best with a larger number of features and a higher

`eta0`

.

References

[“Efficient BackProp”](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)Y. LeCun, L. Bottou, G. Orr, K. Müller - In Neural Networks: Tricks of the Trade 1998.

## 1.5.8. Mathematical formulation[#](#mathematical-formulation)

We describe here the mathematical details of the SGD procedure. A good
overview with convergence rates can be found in [[12]](#id16).

Given a set of training examples \(\{(x_1, y_1), \ldots, (x_n, y_n)\}\) where \(x_i \in \mathbf{R}^m\) and \(y_i \in \mathbf{R}\) (\(y_i \in \{-1, 1\}\) for classification), our goal is to learn a linear scoring function \(f(x) = w^T x + b\) with model parameters \(w \in \mathbf{R}^m\) and intercept \(b \in \mathbf{R}\). In order to make predictions for binary classification, we simply look at the sign of \(f(x)\). To find the model parameters, we minimize the regularized training error given by

where \(L\) is a loss function that measures model (mis)fit and \(R\) is a regularization term (aka penalty) that penalizes model complexity; \(\alpha > 0\) is a non-negative hyperparameter that controls the regularization strength.

##
Loss functions details[#](#loss-functions-details)

Different choices for \(L\) entail different classifiers or regressors:

Hinge (soft-margin): equivalent to Support Vector Classification. \(L(y_i, f(x_i)) = \max(0, 1 - y_i f(x_i))\).

Perceptron: \(L(y_i, f(x_i)) = \max(0, - y_i f(x_i))\).

Modified Huber: \(L(y_i, f(x_i)) = \max(0, 1 - y_i f(x_i))^2\) if \(y_i f(x_i) > -1\), and \(L(y_i, f(x_i)) = -4 y_i f(x_i)\) otherwise.

Log Loss: equivalent to Logistic Regression. \(L(y_i, f(x_i)) = \log(1 + \exp (-y_i f(x_i)))\).

Squared Error: Linear regression (Ridge or Lasso depending on \(R\)). \(L(y_i, f(x_i)) = \frac{1}{2}(y_i - f(x_i))^2\).

Huber: less sensitive to outliers than least-squares. It is equivalent to least squares when \(|y_i - f(x_i)| \leq \varepsilon\), and \(L(y_i, f(x_i)) = \varepsilon |y_i - f(x_i)| - \frac{1}{2} \varepsilon^2\) otherwise.

Epsilon-Insensitive: (soft-margin) equivalent to Support Vector Regression. \(L(y_i, f(x_i)) = \max(0, |y_i - f(x_i)| - \varepsilon)\).


All of the above loss functions can be regarded as an upper bound on the misclassification error (Zero-one loss) as shown in the Figure below.

Popular choices for the regularization term \(R\) (the `penalty`

parameter) include:

\(L_2\) norm: \(R(w) := \frac{1}{2} \sum_{j=1}^{m} w_j^2 = ||w||_2^2\),

\(L_1\) norm: \(R(w) := \sum_{j=1}^{m} |w_j|\), which leads to sparse solutions.

Elastic Net: \(R(w) := \frac{\rho}{2} \sum_{j=1}^{n} w_j^2 + (1-\rho) \sum_{j=1}^{m} |w_j|\), a convex combination of \(L_2\) and \(L_1\), where \(\rho\) is given by

`1 - l1_ratio`

.

The Figure below shows the contours of the different regularization terms in a 2-dimensional parameter space (\(m=2\)) when \(R(w) = 1\).

### 1.5.8.1. SGD[#](#id5)

Stochastic gradient descent is an optimization method for unconstrained optimization problems. In contrast to (batch) gradient descent, SGD approximates the true gradient of \(E(w,b)\) by considering a single training example at a time.

The class [ SGDClassifier](generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier) implements a first-order SGD learning
routine. The algorithm iterates over the training examples and for each
example updates the model parameters according to the update rule given by

where \(\eta\) is the learning rate which controls the step-size in
the parameter space. The intercept \(b\) is updated similarly but
without regularization (and with additional decay for sparse matrices, as
detailed in [Implementation details](#implementation-details)).

The learning rate \(\eta\) can be either constant or gradually decaying. For
classification, the default learning rate schedule (`learning_rate='optimal'`

)
is given by

where \(t\) is the time step (there are a total of `n_samples * n_iter`

time steps), \(t_0\) is determined based on a heuristic proposed by Léon Bottou
such that the expected initial updates are comparable with the expected
size of the weights (this assumes that the norm of the training samples is
approximately 1). The exact definition can be found in `_init_t`

in `BaseSGD`

.

For regression the default learning rate schedule is inverse scaling
(`learning_rate='invscaling'`

), given by

where \(\eta_0\) and \(power\_t\) are hyperparameters chosen by the
user via `eta0`

and `power_t`

, respectively.

For a constant learning rate use `learning_rate='constant'`

and use `eta0`

to specify the learning rate.

For an adaptively decreasing learning rate, use `learning_rate='adaptive'`

and use `eta0`

to specify the starting learning rate. When the stopping
criterion is reached, the learning rate is divided by 5, and the algorithm
does not stop. The algorithm stops when the learning rate goes below `1e-6`

.

The model parameters can be accessed through the `coef_`

and
`intercept_`

attributes: `coef_`

holds the weights \(w\) and
`intercept_`

holds \(b\).

When using Averaged SGD (with the `average`

parameter), `coef_`

is set to the
average weight across all updates:
`coef_`

\(= \frac{1}{T} \sum_{t=0}^{T-1} w^{(t)}\),
where \(T\) is the total number of updates, found in the `t_`

attribute.

## 1.5.9. Implementation details[#](#implementation-details)

The implementation of SGD is influenced by the `Stochastic Gradient SVM`

of
[[7]](#id10).
Similar to SvmSGD,
the weight vector is represented as the product of a scalar and a vector
which allows an efficient weight update in the case of \(L_2\) regularization.
In the case of sparse input `X`

, the intercept is updated with a
smaller learning rate (multiplied by 0.01) to account for the fact that
it is updated more frequently. Training examples are picked up sequentially
and the learning rate is lowered after each observed example. We adopted the
learning rate schedule from [[8]](#id12).
For multi-class classification, a “one versus all” approach is used.
We use the truncated gradient algorithm proposed in [[9]](#id13)
for \(L_1\) regularization (and the Elastic Net).
The code is written in Cython.

References

---

## Source: https://scikit-learn.org/stable/modules/neighbors.html

# 1.6. Nearest Neighbors[#](#nearest-neighbors)

[ sklearn.neighbors](../api/sklearn.neighbors.html#module-sklearn.neighbors) provides functionality for unsupervised and
supervised neighbors-based learning methods. Unsupervised nearest neighbors
is the foundation of many other learning methods,
notably manifold learning and spectral clustering. Supervised neighbors-based
learning comes in two flavors:

[classification](#classification)for data with discrete labels, and

[regression](#regression)for data with continuous labels.

The principle behind nearest neighbor methods is to find a predefined number
of training samples closest in distance to the new point, and
predict the label from these. The number of samples can be a user-defined
constant (k-nearest neighbor learning), or vary based
on the local density of points (radius-based neighbor learning).
The distance can, in general, be any metric measure: standard Euclidean
distance is the most common choice.
Neighbors-based methods are known as *non-generalizing* machine
learning methods, since they simply “remember” all of its training data
(possibly transformed into a fast indexing structure such as a
[Ball Tree](#ball-tree) or [KD Tree](#kd-tree)).

Despite its simplicity, nearest neighbors has been successful in a large number of classification and regression problems, including handwritten digits and satellite image scenes. Being a non-parametric method, it is often successful in classification situations where the decision boundary is very irregular.

The classes in [ sklearn.neighbors](../api/sklearn.neighbors.html#module-sklearn.neighbors) can handle either NumPy arrays or

`scipy.sparse`

matrices as input. For dense matrices, a large number of
possible distance metrics are supported. For sparse matrices, arbitrary
Minkowski metrics are supported for searches.There are many learning routines which rely on nearest neighbors at their
core. One example is [kernel density estimation](density.html#kernel-density),
discussed in the [density estimation](density.html#density-estimation) section.

## 1.6.1. Unsupervised Nearest Neighbors[#](#unsupervised-nearest-neighbors)

[ NearestNeighbors](generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors) implements unsupervised nearest neighbors learning.
It acts as a uniform interface to three different nearest neighbors
algorithms:

[,](generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree)

`BallTree`

[, and a brute-force algorithm based on routines in](generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree)

`KDTree`

[. The choice of neighbors search algorithm is controlled through the keyword](../api/sklearn.metrics.html#module-sklearn.metrics.pairwise)

`sklearn.metrics.pairwise`

`'algorithm'`

, which must be one of
`['auto', 'ball_tree', 'kd_tree', 'brute']`

. When the default value
`'auto'`

is passed, the algorithm attempts to determine the best approach
from the training data. For a discussion of the strengths and weaknesses
of each option, see [Nearest Neighbor Algorithms](#nearest-neighbor-algorithms).

Warning

Regarding the Nearest Neighbors algorithms, if two neighbors \(k+1\) and \(k\) have identical distances but different labels, the result will depend on the ordering of the training data.

### 1.6.1.1. Finding the Nearest Neighbors[#](#finding-the-nearest-neighbors)

For the simple task of finding the nearest neighbors between two sets of
data, the unsupervised algorithms within [ sklearn.neighbors](../api/sklearn.neighbors.html#module-sklearn.neighbors) can be
used:

```
>>> from sklearn.neighbors import NearestNeighbors
>>> import numpy as np
>>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
>>> nbrs = NearestNeighbors(n_neighbors=2, algorithm='ball_tree').fit(X)
>>> distances, indices = nbrs.kneighbors(X)
>>> indices
array([[0, 1],
[1, 0],
[2, 1],
[3, 4],
[4, 3],
[5, 4]]...)
>>> distances
array([[0. , 1. ],
[0. , 1. ],
[0. , 1.41421356],
[0. , 1. ],
[0. , 1. ],
[0. , 1.41421356]])
```

Because the query set matches the training set, the nearest neighbor of each point is the point itself, at a distance of zero.

It is also possible to efficiently produce a sparse graph showing the connections between neighboring points:

```
>>> nbrs.kneighbors_graph(X).toarray()
array([[1., 1., 0., 0., 0., 0.],
[1., 1., 0., 0., 0., 0.],
[0., 1., 1., 0., 0., 0.],
[0., 0., 0., 1., 1., 0.],
[0., 0., 0., 1., 1., 0.],
[0., 0., 0., 0., 1., 1.]])
```

The dataset is structured such that points nearby in index order are nearby
in parameter space, leading to an approximately block-diagonal matrix of
K-nearest neighbors. Such a sparse graph is useful in a variety of
circumstances which make use of spatial relationships between points for
unsupervised learning: in particular, see [ Isomap](generated/sklearn.manifold.Isomap.html#sklearn.manifold.Isomap),

[, and](generated/sklearn.manifold.LocallyLinearEmbedding.html#sklearn.manifold.LocallyLinearEmbedding)

`LocallyLinearEmbedding`

[.](generated/sklearn.cluster.SpectralClustering.html#sklearn.cluster.SpectralClustering)

`SpectralClustering`

### 1.6.1.2. KDTree and BallTree Classes[#](#kdtree-and-balltree-classes)

Alternatively, one can use the [ KDTree](generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree) or

[classes directly to find nearest neighbors. This is the functionality wrapped by the](generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree)

`BallTree`

[class used above. The Ball Tree and KD Tree have the same interface; we’ll show an example of using the KD Tree here:](generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors)

`NearestNeighbors`

```
>>> from sklearn.neighbors import KDTree
>>> import numpy as np
>>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
>>> kdt = KDTree(X, leaf_size=30, metric='euclidean')
>>> kdt.query(X, k=2, return_distance=False)
array([[0, 1],
[1, 0],
[2, 1],
[3, 4],
[4, 3],
[5, 4]]...)
```

Refer to the [ KDTree](generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree) and

[class documentation for more information on the options available for nearest neighbors searches, including specification of query strategies, distance metrics, etc. For a list of valid metrics use](generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree)

`BallTree`

`KDTree.valid_metrics`

and `BallTree.valid_metrics`

:```
>>> from sklearn.neighbors import KDTree, BallTree
>>> KDTree.valid_metrics
['euclidean', 'l2', 'minkowski', 'p', 'manhattan', 'cityblock', 'l1', 'chebyshev', 'infinity']
>>> BallTree.valid_metrics
['euclidean', 'l2', 'minkowski', 'p', 'manhattan', 'cityblock', 'l1', 'chebyshev', 'infinity', 'seuclidean', 'mahalanobis', 'hamming', 'canberra', 'braycurtis', 'jaccard', 'dice', 'rogerstanimoto', 'russellrao', 'sokalmichener', 'sokalsneath', 'haversine', 'pyfunc']
```

## 1.6.2. Nearest Neighbors Classification[#](#nearest-neighbors-classification)

Neighbors-based classification is a type of *instance-based learning* or
*non-generalizing learning*: it does not attempt to construct a general
internal model, but simply stores instances of the training data.
Classification is computed from a simple majority vote of the nearest
neighbors of each point: a query point is assigned the data class which
has the most representatives within the nearest neighbors of the point.

scikit-learn implements two different nearest neighbors classifiers:
[ KNeighborsClassifier](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier) implements learning based on the \(k\)
nearest neighbors of each query point, where \(k\) is an integer value
specified by the user.

[implements learning based on the number of neighbors within a fixed radius \(r\) of each training point, where \(r\) is a floating-point value specified by the user.](generated/sklearn.neighbors.RadiusNeighborsClassifier.html#sklearn.neighbors.RadiusNeighborsClassifier)

`RadiusNeighborsClassifier`

The \(k\)-neighbors classification in [ KNeighborsClassifier](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier)
is the most commonly used technique. The optimal choice of the value \(k\)
is highly data-dependent: in general a larger \(k\) suppresses the effects
of noise, but makes the classification boundaries less distinct.

In cases where the data is not uniformly sampled, radius-based neighbors
classification in [ RadiusNeighborsClassifier](generated/sklearn.neighbors.RadiusNeighborsClassifier.html#sklearn.neighbors.RadiusNeighborsClassifier) can be a better choice.
The user specifies a fixed radius \(r\), such that points in sparser
neighborhoods use fewer nearest neighbors for the classification. For
high-dimensional parameter spaces, this method becomes less effective due
to the so-called “curse of dimensionality”.

The basic nearest neighbors classification uses uniform weights: that is, the
value assigned to a query point is computed from a simple majority vote of
the nearest neighbors. Under some circumstances, it is better to weight the
neighbors such that nearer neighbors contribute more to the fit. This can
be accomplished through the `weights`

keyword. The default value,
`weights = 'uniform'`

, assigns uniform weights to each neighbor.
`weights = 'distance'`

assigns weights proportional to the inverse of the
distance from the query point. Alternatively, a user-defined function of the
distance can be supplied to compute the weights.

Examples

[Nearest Neighbors Classification](../auto_examples/neighbors/plot_classification.html#sphx-glr-auto-examples-neighbors-plot-classification-py): an example of classification using nearest neighbors.

## 1.6.3. Nearest Neighbors Regression[#](#nearest-neighbors-regression)

Neighbors-based regression can be used in cases where the data labels are continuous rather than discrete variables. The label assigned to a query point is computed based on the mean of the labels of its nearest neighbors.

scikit-learn implements two different neighbors regressors:
[ KNeighborsRegressor](generated/sklearn.neighbors.KNeighborsRegressor.html#sklearn.neighbors.KNeighborsRegressor) implements learning based on the \(k\)
nearest neighbors of each query point, where \(k\) is an integer
value specified by the user.

[implements learning based on the neighbors within a fixed radius \(r\) of the query point, where \(r\) is a floating-point value specified by the user.](generated/sklearn.neighbors.RadiusNeighborsRegressor.html#sklearn.neighbors.RadiusNeighborsRegressor)

`RadiusNeighborsRegressor`

The basic nearest neighbors regression uses uniform weights: that is,
each point in the local neighborhood contributes uniformly to the
classification of a query point. Under some circumstances, it can be
advantageous to weight points such that nearby points contribute more
to the regression than faraway points. This can be accomplished through
the `weights`

keyword. The default value, `weights = 'uniform'`

,
assigns equal weights to all points. `weights = 'distance'`

assigns
weights proportional to the inverse of the distance from the query point.
Alternatively, a user-defined function of the distance can be supplied,
which will be used to compute the weights.

The use of multi-output nearest neighbors for regression is demonstrated in
[Face completion with a multi-output estimators](../auto_examples/miscellaneous/plot_multioutput_face_completion.html#sphx-glr-auto-examples-miscellaneous-plot-multioutput-face-completion-py). In this example, the inputs
X are the pixels of the upper half of faces and the outputs Y are the pixels of
the lower half of those faces.

Examples

[Nearest Neighbors regression](../auto_examples/neighbors/plot_regression.html#sphx-glr-auto-examples-neighbors-plot-regression-py): an example of regression using nearest neighbors.[Face completion with a multi-output estimators](../auto_examples/miscellaneous/plot_multioutput_face_completion.html#sphx-glr-auto-examples-miscellaneous-plot-multioutput-face-completion-py): an example of multi-output regression using nearest neighbors.

## 1.6.4. Nearest Neighbor Algorithms[#](#nearest-neighbor-algorithms)

### 1.6.4.1. Brute Force[#](#brute-force)

Fast computation of nearest neighbors is an active area of research in
machine learning. The most naive neighbor search implementation involves
the brute-force computation of distances between all pairs of points in the
dataset: for \(N\) samples in \(D\) dimensions, this approach scales
as \(O[D N^2]\). Efficient brute-force neighbors searches can be very
competitive for small data samples.
However, as the number of samples \(N\) grows, the brute-force
approach quickly becomes infeasible. In the classes within
[ sklearn.neighbors](../api/sklearn.neighbors.html#module-sklearn.neighbors), brute-force neighbors searches are specified
using the keyword

`algorithm = 'brute'`

, and are computed using the
routines available in [.](../api/sklearn.metrics.html#module-sklearn.metrics.pairwise)

`sklearn.metrics.pairwise`

### 1.6.4.2. K-D Tree[#](#k-d-tree)

To address the computational inefficiencies of the brute-force approach, a
variety of tree-based data structures have been invented. In general, these
structures attempt to reduce the required number of distance calculations
by efficiently encoding aggregate distance information for the sample.
The basic idea is that if point \(A\) is very distant from point
\(B\), and point \(B\) is very close to point \(C\),
then we know that points \(A\) and \(C\)
are very distant, *without having to explicitly calculate their distance*.
In this way, the computational cost of a nearest neighbors search can be
reduced to \(O[D N \log(N)]\) or better. This is a significant
improvement over brute-force for large \(N\).

An early approach to taking advantage of this aggregate information was
the *KD tree* data structure (short for *K-dimensional tree*), which
generalizes two-dimensional *Quad-trees* and 3-dimensional *Oct-trees*
to an arbitrary number of dimensions. The KD tree is a binary tree
structure which recursively partitions the parameter space along the data
axes, dividing it into nested orthotropic regions into which data points
are filed. The construction of a KD tree is very fast: because partitioning
is performed only along the data axes, no \(D\)-dimensional distances
need to be computed. Once constructed, the nearest neighbor of a query
point can be determined with only \(O[\log(N)]\) distance computations.
Though the KD tree approach is very fast for low-dimensional (\(D < 20\))
neighbors searches, it becomes inefficient as \(D\) grows very large:
this is one manifestation of the so-called “curse of dimensionality”.
In scikit-learn, KD tree neighbors searches are specified using the
keyword `algorithm = 'kd_tree'`

, and are computed using the class
[ KDTree](generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree).

##
References[#](#references)

[“Multidimensional binary search trees used for associative searching”](https://dl.acm.org/citation.cfm?doid=361002.361007), Bentley, J.L., Communications of the ACM (1975)

### 1.6.4.3. Ball Tree[#](#ball-tree)

To address the inefficiencies of KD Trees in higher dimensions, the *ball tree*
data structure was developed. Where KD trees partition data along
Cartesian axes, ball trees partition data in a series of nesting
hyper-spheres. This makes tree construction more costly than that of the
KD tree, but results in a data structure which can be very efficient on
highly structured data, even in very high dimensions.

A ball tree recursively divides the data into
nodes defined by a centroid \(C\) and radius \(r\), such that each
point in the node lies within the hyper-sphere defined by \(r\) and
\(C\). The number of candidate points for a neighbor search
is reduced through use of the *triangle inequality*:

With this setup, a single distance calculation between a test point and
the centroid is sufficient to determine a lower and upper bound on the
distance to all points within the node.
Because of the spherical geometry of the ball tree nodes, it can out-perform
a *KD-tree* in high dimensions, though the actual performance is highly
dependent on the structure of the training data.
In scikit-learn, ball-tree-based
neighbors searches are specified using the keyword `algorithm = 'ball_tree'`

,
and are computed using the class [ BallTree](generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree).
Alternatively, the user can work with the

[class directly.](generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree)

`BallTree`

##
References[#](#references-2)

[“Five Balltree Construction Algorithms”](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=17ac002939f8e950ffb32ec4dc8e86bdd8cb5ff1), Omohundro, S.M., International Computer Science Institute Technical Report (1989)

##
Choice of Nearest Neighbors Algorithm[#](#choice-of-nearest-neighbors-algorithm)

The optimal algorithm for a given dataset is a complicated choice, and depends on a number of factors:

number of samples \(N\) (i.e.

`n_samples`

) and dimensionality \(D\) (i.e.`n_features`

).*Brute force*query time grows as \(O[D N]\)*Ball tree*query time grows as approximately \(O[D \log(N)]\)*KD tree*query time changes with \(D\) in a way that is difficult to precisely characterise. For small \(D\) (less than 20 or so) the cost is approximately \(O[D\log(N)]\), and the KD tree query can be very efficient. For larger \(D\), the cost increases to nearly \(O[DN]\), and the overhead due to the tree structure can lead to queries which are slower than brute force.

For small data sets (\(N\) less than 30 or so), \(\log(N)\) is comparable to \(N\), and brute force algorithms can be more efficient than a tree-based approach. Both

and`KDTree`

address this through providing a`BallTree`

*leaf size*parameter: this controls the number of samples at which a query switches to brute-force. This allows both algorithms to approach the efficiency of a brute-force computation for small \(N\).data structure:

*intrinsic dimensionality*of the data and/or*sparsity*of the data. Intrinsic dimensionality refers to the dimension \(d \le D\) of a manifold on which the data lies, which can be linearly or non-linearly embedded in the parameter space. Sparsity refers to the degree to which the data fills the parameter space (this is to be distinguished from the concept as used in “sparse” matrices. The data matrix may have no zero entries, but the**structure**can still be “sparse” in this sense).*Brute force*query time is unchanged by data structure.*Ball tree*and*KD tree*query times can be greatly influenced by data structure. In general, sparser data with a smaller intrinsic dimensionality leads to faster query times. Because the KD tree internal representation is aligned with the parameter axes, it will not generally show as much improvement as ball tree for arbitrarily structured data.

Datasets used in machine learning tend to be very structured, and are very well-suited for tree-based queries.

number of neighbors \(k\) requested for a query point.

*Brute force*query time is largely unaffected by the value of \(k\)*Ball tree*and*KD tree*query time will become slower as \(k\) increases. This is due to two effects: first, a larger \(k\) leads to the necessity to search a larger portion of the parameter space. Second, using \(k > 1\) requires internal queueing of results as the tree is traversed.

As \(k\) becomes large compared to \(N\), the ability to prune branches in a tree-based query is reduced. In this situation, Brute force queries can be more efficient.

number of query points. Both the ball tree and the KD Tree require a construction phase. The cost of this construction becomes negligible when amortized over many queries. If only a small number of queries will be performed, however, the construction can make up a significant fraction of the total cost. If very few query points will be required, brute force is better than a tree-based method.


Currently, `algorithm = 'auto'`

selects `'brute'`

if any of the following
conditions are verified:

input data is sparse

`metric = 'precomputed'`

\(D > 15\)

\(k >= N/2\)

`effective_metric_`

isn’t in the`VALID_METRICS`

list for either`'kd_tree'`

or`'ball_tree'`


Otherwise, it selects the first out of `'kd_tree'`

and `'ball_tree'`

that
has `effective_metric_`

in its `VALID_METRICS`

list. This heuristic is
based on the following assumptions:

the number of query points is at least the same order as the number of training points

`leaf_size`

is close to its default value of`30`

when \(D > 15\), the intrinsic dimensionality of the data is generally too high for tree-based methods


##
Effect of `leaf_size`

[#](#effect-of-leaf_size)

As noted above, for small sample sizes a brute force search can be more
efficient than a tree-based query. This fact is accounted for in the ball
tree and KD tree by internally switching to brute force searches within
leaf nodes. The level of this switch can be specified with the parameter
`leaf_size`

. This parameter choice has many effects:

**construction time**A larger

`leaf_size`

leads to a faster tree construction time, because fewer nodes need to be created**query time**Both a large or small

`leaf_size`

can lead to suboptimal query cost. For`leaf_size`

approaching 1, the overhead involved in traversing nodes can significantly slow query times. For`leaf_size`

approaching the size of the training set, queries become essentially brute force. A good compromise between these is`leaf_size = 30`

, the default value of the parameter.**memory**As

`leaf_size`

increases, the memory required to store a tree structure decreases. This is especially important in the case of ball tree, which stores a \(D\)-dimensional centroid for each node. The required storage space foris approximately`BallTree`

`1 / leaf_size`

times the size of the training set.

`leaf_size`

is not referenced for brute force queries.

##
Valid Metrics for Nearest Neighbor Algorithms[#](#valid-metrics-for-nearest-neighbor-algorithms)

For a list of available metrics, see the documentation of the
[ DistanceMetric](generated/sklearn.metrics.DistanceMetric.html#sklearn.metrics.DistanceMetric) class and the metrics listed in

`sklearn.metrics.pairwise.PAIRWISE_DISTANCE_FUNCTIONS`

. Note that the “cosine”
metric uses [.](generated/sklearn.metrics.pairwise.cosine_distances.html#sklearn.metrics.pairwise.cosine_distances)

`cosine_distances`

A list of valid metrics for any of the above algorithms can be obtained by using their
`valid_metric`

attribute. For example, valid metrics for `KDTree`

can be generated by:

```
>>> from sklearn.neighbors import KDTree
>>> print(sorted(KDTree.valid_metrics))
['chebyshev', 'cityblock', 'euclidean', 'infinity', 'l1', 'l2', 'manhattan', 'minkowski', 'p']
```

## 1.6.5. Nearest Centroid Classifier[#](#nearest-centroid-classifier)

The [ NearestCentroid](generated/sklearn.neighbors.NearestCentroid.html#sklearn.neighbors.NearestCentroid) classifier is a simple algorithm that represents
each class by the centroid of its members. In effect, this makes it
similar to the label updating phase of the

[algorithm. It also has no parameters to choose, making it a good baseline classifier. It does, however, suffer on non-convex classes, as well as when classes have drastically different variances, as equal variance in all dimensions is assumed. See Linear Discriminant Analysis (](generated/sklearn.cluster.KMeans.html#sklearn.cluster.KMeans)

`KMeans`

[) and Quadratic Discriminant Analysis (](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis)

`LinearDiscriminantAnalysis`

[) for more complex methods that do not make this assumption. Usage of the default](generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html#sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis)

`QuadraticDiscriminantAnalysis`

[is simple:](generated/sklearn.neighbors.NearestCentroid.html#sklearn.neighbors.NearestCentroid)

`NearestCentroid`

```
>>> from sklearn.neighbors import NearestCentroid
>>> import numpy as np
>>> X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
>>> y = np.array([1, 1, 1, 2, 2, 2])
>>> clf = NearestCentroid()
>>> clf.fit(X, y)
NearestCentroid()
>>> print(clf.predict([[-0.8, -1]]))
[1]
```

### 1.6.5.1. Nearest Shrunken Centroid[#](#nearest-shrunken-centroid)

The [ NearestCentroid](generated/sklearn.neighbors.NearestCentroid.html#sklearn.neighbors.NearestCentroid) classifier has a

`shrink_threshold`

parameter,
which implements the nearest shrunken centroid classifier. In effect, the value
of each feature for each centroid is divided by the within-class variance of
that feature. The feature values are then reduced by `shrink_threshold`

. Most
notably, if a particular feature value crosses zero, it is set
to zero. In effect, this removes the feature from affecting the classification.
This is useful, for example, for removing noisy features.In the example below, using a small shrink threshold increases the accuracy of the model from 0.81 to 0.82.

Examples

[Nearest Centroid Classification](../auto_examples/neighbors/plot_nearest_centroid.html#sphx-glr-auto-examples-neighbors-plot-nearest-centroid-py): an example of classification using nearest centroid with different shrink thresholds.

## 1.6.6. Nearest Neighbors Transformer[#](#nearest-neighbors-transformer)

Many scikit-learn estimators rely on nearest neighbors: Several classifiers and
regressors such as [ KNeighborsClassifier](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier) and

[, but also some clustering methods such as](generated/sklearn.neighbors.KNeighborsRegressor.html#sklearn.neighbors.KNeighborsRegressor)

`KNeighborsRegressor`

[and](generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN)

`DBSCAN`

[, and some manifold embeddings such as](generated/sklearn.cluster.SpectralClustering.html#sklearn.cluster.SpectralClustering)

`SpectralClustering`

[and](generated/sklearn.manifold.TSNE.html#sklearn.manifold.TSNE)

`TSNE`

[.](generated/sklearn.manifold.Isomap.html#sklearn.manifold.Isomap)

`Isomap`

All these estimators can compute internally the nearest neighbors, but most of
them also accept precomputed nearest neighbors [sparse graph](../glossary.html#term-sparse-graph),
as given by [ kneighbors_graph](generated/sklearn.neighbors.kneighbors_graph.html#sklearn.neighbors.kneighbors_graph) and

[. With mode](generated/sklearn.neighbors.radius_neighbors_graph.html#sklearn.neighbors.radius_neighbors_graph)

`radius_neighbors_graph`

`mode='connectivity'`

, these functions return a binary adjacency sparse graph
as required, for instance, in [. Whereas with](generated/sklearn.cluster.SpectralClustering.html#sklearn.cluster.SpectralClustering)

`SpectralClustering`

`mode='distance'`

, they return a distance sparse graph as required,
for instance, in [. To include these functions in a scikit-learn pipeline, one can also use the corresponding classes](generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN)

`DBSCAN`

[and](generated/sklearn.neighbors.KNeighborsTransformer.html#sklearn.neighbors.KNeighborsTransformer)

`KNeighborsTransformer`

[. The benefits of this sparse graph API are multiple.](generated/sklearn.neighbors.RadiusNeighborsTransformer.html#sklearn.neighbors.RadiusNeighborsTransformer)

`RadiusNeighborsTransformer`

First, the precomputed graph can be reused multiple times, for instance while varying a parameter of the estimator. This can be done manually by the user, or using the caching properties of the scikit-learn pipeline:

```
>>> import tempfile
>>> from sklearn.manifold import Isomap
>>> from sklearn.neighbors import KNeighborsTransformer
>>> from sklearn.pipeline import make_pipeline
>>> from sklearn.datasets import make_regression
>>> cache_path = tempfile.gettempdir() # we use a temporary folder here
>>> X, _ = make_regression(n_samples=50, n_features=25, random_state=0)
>>> estimator = make_pipeline(
... KNeighborsTransformer(mode='distance'),
... Isomap(n_components=3, metric='precomputed'),
... memory=cache_path)
>>> X_embedded = estimator.fit_transform(X)
>>> X_embedded.shape
(50, 3)
```

Second, precomputing the graph can give finer control on the nearest neighbors
estimation, for instance enabling multiprocessing though the parameter
`n_jobs`

, which might not be available in all estimators.

Finally, the precomputation can be performed by custom estimators to use
different implementations, such as approximate nearest neighbors methods, or
implementation with special data types. The precomputed neighbors
[sparse graph](../glossary.html#term-sparse-graph) needs to be formatted as in
[ radius_neighbors_graph](generated/sklearn.neighbors.radius_neighbors_graph.html#sklearn.neighbors.radius_neighbors_graph) output:

a CSR matrix (although COO, CSC or LIL will be accepted).

only explicitly store nearest neighborhoods of each sample with respect to the training data. This should include those at 0 distance from a query point, including the matrix diagonal when computing the nearest neighborhoods between the training data and itself.

each row’s

`data`

should store the distance in increasing order (optional. Unsorted data will be stable-sorted, adding a computational overhead).all values in data should be non-negative.

there should be no duplicate

`indices`

in any row (see[scipy/scipy#5807](https://github.com/scipy/scipy/issues/5807)).if the algorithm being passed the precomputed matrix uses k nearest neighbors (as opposed to radius neighborhood), at least k neighbors must be stored in each row (or k+1, as explained in the following note).


Note

When a specific number of neighbors is queried (using
[ KNeighborsTransformer](generated/sklearn.neighbors.KNeighborsTransformer.html#sklearn.neighbors.KNeighborsTransformer)), the definition of

`n_neighbors`

is ambiguous
since it can either include each training point as its own neighbor, or
exclude them. Neither choice is perfect, since including them leads to a
different number of non-self neighbors during training and testing, while
excluding them leads to a difference between `fit(X).transform(X)`

and
`fit_transform(X)`

, which is against scikit-learn API.
In [we use the definition which includes each training point as its own neighbor in the count of](generated/sklearn.neighbors.KNeighborsTransformer.html#sklearn.neighbors.KNeighborsTransformer)

`KNeighborsTransformer`

`n_neighbors`

. However,
for compatibility reasons with other estimators which use the other
definition, one extra neighbor will be computed when `mode == 'distance'`

.
To maximise compatibility with all estimators, a safe choice is to always
include one extra neighbor in a custom nearest neighbors estimator, since
unnecessary neighbors will be filtered by following estimators.Examples

[Approximate nearest neighbors in TSNE](../auto_examples/neighbors/approximate_nearest_neighbors.html#sphx-glr-auto-examples-neighbors-approximate-nearest-neighbors-py): an example of pipeliningand`KNeighborsTransformer`

. Also proposes two custom nearest neighbors estimators based on external packages.`TSNE`

[Caching nearest neighbors](../auto_examples/neighbors/plot_caching_nearest_neighbors.html#sphx-glr-auto-examples-neighbors-plot-caching-nearest-neighbors-py): an example of pipeliningand`KNeighborsTransformer`

to enable caching of the neighbors graph during a hyper-parameter grid-search.`KNeighborsClassifier`


## 1.6.7. Neighborhood Components Analysis[#](#neighborhood-components-analysis)

Neighborhood Components Analysis (NCA, [ NeighborhoodComponentsAnalysis](generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html#sklearn.neighbors.NeighborhoodComponentsAnalysis))
is a distance metric learning algorithm which aims to improve the accuracy of
nearest neighbors classification compared to the standard Euclidean distance.
The algorithm directly maximizes a stochastic variant of the leave-one-out
k-nearest neighbors (KNN) score on the training set. It can also learn a
low-dimensional linear projection of data that can be used for data
visualization and fast classification.

In the above illustrating figure, we consider some points from a randomly
generated dataset. We focus on the stochastic KNN classification of point no.
3. The thickness of a link between sample 3 and another point is proportional
to their distance, and can be seen as the relative weight (or probability) that
a stochastic nearest neighbor prediction rule would assign to this point. In
the original space, sample 3 has many stochastic neighbors from various
classes, so the right class is not very likely. However, in the projected space
learned by NCA, the only stochastic neighbors with non-negligible weight are
from the same class as sample 3, guaranteeing that the latter will be well
classified. See the [mathematical formulation](#nca-mathematical-formulation)
for more details.

### 1.6.7.1. Classification[#](#id5)

Combined with a nearest neighbors classifier ([ KNeighborsClassifier](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier)),
NCA is attractive for classification because it can naturally handle
multi-class problems without any increase in the model size, and does not
introduce additional parameters that require fine-tuning by the user.

NCA classification has been shown to work well in practice for data sets of varying size and difficulty. In contrast to related methods such as Linear Discriminant Analysis, NCA does not make any assumptions about the class distributions. The nearest neighbor classification can naturally produce highly irregular decision boundaries.

To use this model for classification, one needs to combine a
[ NeighborhoodComponentsAnalysis](generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html#sklearn.neighbors.NeighborhoodComponentsAnalysis) instance that learns the optimal
transformation with a

[instance that performs the classification in the projected space. Here is an example using the two classes:](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier)

`KNeighborsClassifier`

```
>>> from sklearn.neighbors import (NeighborhoodComponentsAnalysis,
... KNeighborsClassifier)
>>> from sklearn.datasets import load_iris
>>> from sklearn.model_selection import train_test_split
>>> from sklearn.pipeline import Pipeline
>>> X, y = load_iris(return_X_y=True)
>>> X_train, X_test, y_train, y_test = train_test_split(X, y,
... stratify=y, test_size=0.7, random_state=42)
>>> nca = NeighborhoodComponentsAnalysis(random_state=42)
>>> knn = KNeighborsClassifier(n_neighbors=3)
>>> nca_pipe = Pipeline([('nca', nca), ('knn', knn)])
>>> nca_pipe.fit(X_train, y_train)
Pipeline(...)
>>> print(nca_pipe.score(X_test, y_test))
0.96190476...
```

The plot shows decision boundaries for Nearest Neighbor Classification and Neighborhood Components Analysis classification on the iris dataset, when training and scoring on only two features, for visualisation purposes.

### 1.6.7.2. Dimensionality reduction[#](#dimensionality-reduction)

NCA can be used to perform supervised dimensionality reduction. The input data
are projected onto a linear subspace consisting of the directions which
minimize the NCA objective. The desired dimensionality can be set using the
parameter `n_components`

. For instance, the following figure shows a
comparison of dimensionality reduction with Principal Component Analysis
([ PCA](generated/sklearn.decomposition.PCA.html#sklearn.decomposition.PCA)), Linear Discriminant Analysis
(

[) and Neighborhood Component Analysis (](generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis)

`LinearDiscriminantAnalysis`

[) on the Digits dataset, a dataset with size \(n_{samples} = 1797\) and \(n_{features} = 64\). The data set is split into a training and a test set of equal size, then standardized. For evaluation the 3-nearest neighbor classification accuracy is computed on the 2-dimensional projected points found by each method. Each data sample belongs to one of 10 classes.](generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html#sklearn.neighbors.NeighborhoodComponentsAnalysis)

`NeighborhoodComponentsAnalysis`

Examples

### 1.6.7.3. Mathematical formulation[#](#mathematical-formulation)

The goal of NCA is to learn an optimal linear transformation matrix of size
`(n_components, n_features)`

, which maximises the sum over all samples
\(i\) of the probability \(p_i\) that \(i\) is correctly
classified, i.e.:

with \(N\) = `n_samples`

and \(p_i\) the probability of sample
\(i\) being correctly classified according to a stochastic nearest
neighbors rule in the learned embedded space:

where \(C_i\) is the set of points in the same class as sample \(i\), and \(p_{i j}\) is the softmax over Euclidean distances in the embedded space:

##
Mahalanobis distance[#](#mahalanobis-distance)

NCA can be seen as learning a (squared) Mahalanobis distance metric:

where \(M = L^T L\) is a symmetric positive semi-definite matrix of size
`(n_features, n_features)`

.

### 1.6.7.4. Implementation[#](#implementation)

This implementation follows what is explained in the original paper [[1]](#id7). For
the optimisation method, it currently uses scipy’s L-BFGS-B with a full
gradient computation at each iteration, to avoid to tune the learning rate and
provide stable learning.

See the examples below and the docstring of
[ NeighborhoodComponentsAnalysis.fit](generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit) for further information.

### 1.6.7.5. Complexity[#](#complexity)

#### 1.6.7.5.1. Training[#](#training)

NCA stores a matrix of pairwise distances, taking `n_samples ** 2`

memory.
Time complexity depends on the number of iterations done by the optimisation
algorithm. However, one can set the maximum number of iterations with the
argument `max_iter`

. For each iteration, time complexity is
`O(n_components x n_samples x min(n_samples, n_features))`

.

#### 1.6.7.5.2. Transform[#](#transform)

Here the `transform`

operation returns \(LX^T\), therefore its time
complexity equals `n_components * n_features * n_samples_test`

. There is no
added space complexity in the operation.

References

---

## Source: https://scikit-learn.org/stable/modules/gaussian_process.html

# 1.7. Gaussian Processes[#](#gaussian-processes)

**Gaussian Processes (GP)** are a nonparametric supervised learning method used
to solve *regression* and *probabilistic classification* problems.

The advantages of Gaussian processes are:

The prediction interpolates the observations (at least for regular kernels).

The prediction is probabilistic (Gaussian) so that one can compute empirical confidence intervals and decide based on those if one should refit (online fitting, adaptive fitting) the prediction in some region of interest.

Versatile: different

[kernels](#gp-kernels)can be specified. Common kernels are provided, but it is also possible to specify custom kernels.

The disadvantages of Gaussian processes include:

Our implementation is not sparse, i.e., they use the whole samples/features information to perform the prediction.

They lose efficiency in high dimensional spaces – namely when the number of features exceeds a few dozens.


## 1.7.1. Gaussian Process Regression (GPR)[#](#gaussian-process-regression-gpr)

The [ GaussianProcessRegressor](generated/sklearn.gaussian_process.GaussianProcessRegressor.html#sklearn.gaussian_process.GaussianProcessRegressor) implements Gaussian processes (GP) for
regression purposes. For this, the prior of the GP needs to be specified. GP
will combine this prior and the likelihood function based on training samples.
It allows to give a probabilistic approach to prediction by giving the mean and
standard deviation as output when predicting.

The prior mean is assumed to be constant and zero (for `normalize_y=False`

) or
the training data’s mean (for `normalize_y=True`

). The prior’s covariance is
specified by passing a [kernel](#gp-kernels) object. The hyperparameters
of the kernel are optimized when fitting the [ GaussianProcessRegressor](generated/sklearn.gaussian_process.GaussianProcessRegressor.html#sklearn.gaussian_process.GaussianProcessRegressor)
by maximizing the log-marginal-likelihood (LML) based on the passed

`optimizer`

. As the LML may have multiple local optima, the optimizer can be
started repeatedly by specifying `n_restarts_optimizer`

. The first run is
always conducted starting from the initial hyperparameter values of the kernel;
subsequent runs are conducted from hyperparameter values that have been chosen
randomly from the range of allowed values. If the initial hyperparameters
should be kept fixed, `None`

can be passed as optimizer.The noise level in the targets can be specified by passing it via the parameter
`alpha`

, either globally as a scalar or per datapoint. Note that a moderate
noise level can also be helpful for dealing with numeric instabilities during
fitting as it is effectively implemented as Tikhonov regularization, i.e., by
adding it to the diagonal of the kernel matrix. An alternative to specifying
the noise level explicitly is to include a
[ WhiteKernel](generated/sklearn.gaussian_process.kernels.WhiteKernel.html#sklearn.gaussian_process.kernels.WhiteKernel) component into the
kernel, which can estimate the global noise level from the data (see example
below). The figure below shows the effect of noisy target handled by setting
the parameter

`alpha`

.The implementation is based on Algorithm 2.1 of [[RW2006]](#rw2006). In addition to
the API of standard scikit-learn estimators, [ GaussianProcessRegressor](generated/sklearn.gaussian_process.GaussianProcessRegressor.html#sklearn.gaussian_process.GaussianProcessRegressor):

allows prediction without prior fitting (based on the GP prior)

provides an additional method

`sample_y(X)`

, which evaluates samples drawn from the GPR (prior or posterior) at given inputsexposes a method

`log_marginal_likelihood(theta)`

, which can be used externally for other ways of selecting hyperparameters, e.g., via Markov chain Monte Carlo.

Examples

## 1.7.2. Gaussian Process Classification (GPC)[#](#gaussian-process-classification-gpc)

The [ GaussianProcessClassifier](generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier) implements Gaussian processes (GP) for
classification purposes, more specifically for probabilistic classification,
where test predictions take the form of class probabilities.
GaussianProcessClassifier places a GP prior on a latent function \(f\),
which is then squashed through a link function \(\pi\) to obtain the probabilistic
classification. The latent function \(f\) is a so-called nuisance function,
whose values are not observed and are not relevant by themselves.
Its purpose is to allow a convenient formulation of the model, and \(f\)
is removed (integrated out) during prediction.

[implements the logistic link function, for which the integral cannot be computed analytically but is easily approximated in the binary case.](generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier)

`GaussianProcessClassifier`

In contrast to the regression setting, the posterior of the latent function
\(f\) is not Gaussian even for a GP prior since a Gaussian likelihood is
inappropriate for discrete class labels. Rather, a non-Gaussian likelihood
corresponding to the logistic link function (logit) is used.
GaussianProcessClassifier approximates the non-Gaussian posterior with a
Gaussian based on the Laplace approximation. More details can be found in
Chapter 3 of [[RW2006]](#rw2006).

The GP prior mean is assumed to be zero. The prior’s
covariance is specified by passing a [kernel](#gp-kernels) object. The
hyperparameters of the kernel are optimized during fitting of
GaussianProcessRegressor by maximizing the log-marginal-likelihood (LML) based
on the passed `optimizer`

. As the LML may have multiple local optima, the
optimizer can be started repeatedly by specifying `n_restarts_optimizer`

. The
first run is always conducted starting from the initial hyperparameter values
of the kernel; subsequent runs are conducted from hyperparameter values
that have been chosen randomly from the range of allowed values.
If the initial hyperparameters should be kept fixed, `None`

can be passed as
optimizer.

In some scenarios, information about the latent function \(f\) is desired
(i.e. the mean \(\bar{f_*}\) and the variance \(\text{Var}[f_*]\) described
in Eqs. (3.21) and (3.24) of [[RW2006]](#rw2006)). The [ GaussianProcessClassifier](generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier)
provides access to these quantities via the

`latent_mean_and_variance`

method.[ GaussianProcessClassifier](generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier) supports multi-class classification
by performing either one-versus-rest or one-versus-one based training and
prediction. In one-versus-rest, one binary Gaussian process classifier is
fitted for each class, which is trained to separate this class from the rest.
In “one_vs_one”, one binary Gaussian process classifier is fitted for each pair
of classes, which is trained to separate these two classes. The predictions of
these binary predictors are combined into multi-class predictions. See the
section on

[multi-class classification](multiclass.html#multiclass)for more details.

In the case of Gaussian process classification, “one_vs_one” might be
computationally cheaper since it has to solve many problems involving only a
subset of the whole training set rather than fewer problems on the whole
dataset. Since Gaussian process classification scales cubically with the size
of the dataset, this might be considerably faster. However, note that
“one_vs_one” does not support predicting probability estimates but only plain
predictions. Moreover, note that [ GaussianProcessClassifier](generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier) does not
(yet) implement a true multi-class Laplace approximation internally, but
as discussed above is based on solving several binary classification tasks
internally, which are combined using one-versus-rest or one-versus-one.

## 1.7.3. GPC examples[#](#gpc-examples)

### 1.7.3.1. Probabilistic predictions with GPC[#](#probabilistic-predictions-with-gpc)

This example illustrates the predicted probability of GPC for an RBF kernel with different choices of the hyperparameters. The first figure shows the predicted probability of GPC with arbitrarily chosen hyperparameters and with the hyperparameters corresponding to the maximum log-marginal-likelihood (LML).

While the hyperparameters chosen by optimizing LML have a considerably larger LML, they perform slightly worse according to the log-loss on test data. The figure shows that this is because they exhibit a steep change of the class probabilities at the class boundaries (which is good) but have predicted probabilities close to 0.5 far away from the class boundaries (which is bad). This undesirable effect is caused by the Laplace approximation used internally by GPC.

The second figure shows the log-marginal-likelihood for different choices of the kernel’s hyperparameters, highlighting the two choices of the hyperparameters used in the first figure by black dots.

### 1.7.3.2. Illustration of GPC on the XOR dataset[#](#illustration-of-gpc-on-the-xor-dataset)

This example illustrates GPC on XOR data. Compared are a stationary, isotropic
kernel ([ RBF](generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF)) and a non-stationary kernel (

[). On this particular dataset, the](generated/sklearn.gaussian_process.kernels.DotProduct.html#sklearn.gaussian_process.kernels.DotProduct)

`DotProduct`

[kernel obtains considerably better results because the class-boundaries are linear and coincide with the coordinate axes. In practice, however, stationary kernels such as](generated/sklearn.gaussian_process.kernels.DotProduct.html#sklearn.gaussian_process.kernels.DotProduct)

`DotProduct`

[often obtain better results.](generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF)

`RBF`

### 1.7.3.3. Gaussian process classification (GPC) on iris dataset[#](#gaussian-process-classification-gpc-on-iris-dataset)

This example illustrates the predicted probability of GPC for an isotropic and anisotropic RBF kernel on a two-dimensional version for the iris dataset. This illustrates the applicability of GPC to non-binary classification. The anisotropic RBF kernel obtains slightly higher log-marginal-likelihood by assigning different length-scales to the two feature dimensions.

## 1.7.4. Kernels for Gaussian Processes[#](#kernels-for-gaussian-processes)

Kernels (also called “covariance functions” in the context of GPs) are a crucial
ingredient of GPs which determine the shape of prior and posterior of the GP.
They encode the assumptions on the function being learned by defining the “similarity”
of two datapoints combined with the assumption that similar datapoints should
have similar target values. Two categories of kernels can be distinguished:
stationary kernels depend only on the distance of two datapoints and not on their
absolute values \(k(x_i, x_j)= k(d(x_i, x_j))\) and are thus invariant to
translations in the input space, while non-stationary kernels
depend also on the specific values of the datapoints. Stationary kernels can further
be subdivided into isotropic and anisotropic kernels, where isotropic kernels are
also invariant to rotations in the input space. For more details, we refer to
Chapter 4 of [[RW2006]](#rw2006). [This example](../auto_examples/gaussian_process/plot_gpr_on_structured_data.html#sphx-glr-auto-examples-gaussian-process-plot-gpr-on-structured-data-py)
shows how to define a custom kernel over discrete data. For guidance on how to best
combine different kernels, we refer to [[Duv2014]](#duv2014).

##
Gaussian Process Kernel API[#](#gaussian-process-kernel-api)

The main usage of a [ Kernel](generated/sklearn.gaussian_process.kernels.Kernel.html#sklearn.gaussian_process.kernels.Kernel) is to compute the GP’s covariance between
datapoints. For this, the method

`__call__`

of the kernel can be called. This
method can either be used to compute the “auto-covariance” of all pairs of
datapoints in a 2d array X, or the “cross-covariance” of all combinations
of datapoints of a 2d array X with datapoints in a 2d array Y. The following
identity holds true for all kernels k (except for the [):](generated/sklearn.gaussian_process.kernels.WhiteKernel.html#sklearn.gaussian_process.kernels.WhiteKernel)

`WhiteKernel`

`k(X) == K(X, Y=X)`

If only the diagonal of the auto-covariance is being used, the method `diag()`

of a kernel can be called, which is more computationally efficient than the
equivalent call to `__call__`

: `np.diag(k(X, X)) == k.diag(X)`


Kernels are parameterized by a vector \(\theta\) of hyperparameters. These
hyperparameters can for instance control length-scales or periodicity of a
kernel (see below). All kernels support computing analytic gradients
of the kernel’s auto-covariance with respect to \(log(\theta)\) via setting
`eval_gradient=True`

in the `__call__`

method.
That is, a `(len(X), len(X), len(theta))`

array is returned where the entry
`[i, j, l]`

contains \(\frac{\partial k_\theta(x_i, x_j)}{\partial log(\theta_l)}\).
This gradient is used by the Gaussian process (both regressor and classifier)
in computing the gradient of the log-marginal-likelihood, which in turn is used
to determine the value of \(\theta\), which maximizes the log-marginal-likelihood,
via gradient ascent. For each hyperparameter, the initial value and the
bounds need to be specified when creating an instance of the kernel. The
current value of \(\theta\) can be get and set via the property
`theta`

of the kernel object. Moreover, the bounds of the hyperparameters can be
accessed by the property `bounds`

of the kernel. Note that both properties
(theta and bounds) return log-transformed values of the internally used values
since those are typically more amenable to gradient-based optimization.
The specification of each hyperparameter is stored in the form of an instance of
[ Hyperparameter](generated/sklearn.gaussian_process.kernels.Hyperparameter.html#sklearn.gaussian_process.kernels.Hyperparameter) in the respective kernel. Note that a kernel using a
hyperparameter with name “x” must have the attributes self.x and self.x_bounds.

The abstract base class for all kernels is [ Kernel](generated/sklearn.gaussian_process.kernels.Kernel.html#sklearn.gaussian_process.kernels.Kernel). Kernel implements a
similar interface as

[, providing the methods](generated/sklearn.base.BaseEstimator.html#sklearn.base.BaseEstimator)

`BaseEstimator`

`get_params()`

, `set_params()`

, and `clone()`

. This allows
setting kernel values also via meta-estimators such as
[or](generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline)

`Pipeline`

[. Note that due to the nested structure of kernels (by applying kernel operators, see below), the names of kernel parameters might become relatively complicated. In general, for a binary kernel operator, parameters of the left operand are prefixed with](generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV)

`GridSearchCV`

`k1__`

and
parameters of the right operand with `k2__`

. An additional convenience method
is `clone_with_theta(theta)`

, which returns a cloned version of the kernel
but with the hyperparameters set to `theta`

. An illustrative example:```
>>> from sklearn.gaussian_process.kernels import ConstantKernel, RBF
>>> kernel = ConstantKernel(constant_value=1.0, constant_value_bounds=(0.0, 10.0)) * RBF(length_scale=0.5, length_scale_bounds=(0.0, 10.0)) + RBF(length_scale=2.0, length_scale_bounds=(0.0, 10.0))
>>> for hyperparameter in kernel.hyperparameters: print(hyperparameter)
Hyperparameter(name='k1__k1__constant_value', value_type='numeric', bounds=array([[ 0., 10.]]), n_elements=1, fixed=False)
Hyperparameter(name='k1__k2__length_scale', value_type='numeric', bounds=array([[ 0., 10.]]), n_elements=1, fixed=False)
Hyperparameter(name='k2__length_scale', value_type='numeric', bounds=array([[ 0., 10.]]), n_elements=1, fixed=False)
>>> params = kernel.get_params()
>>> for key in sorted(params): print("%s : %s" % (key, params[key]))
k1 : 1**2 * RBF(length_scale=0.5)
k1__k1 : 1**2
k1__k1__constant_value : 1.0
k1__k1__constant_value_bounds : (0.0, 10.0)
k1__k2 : RBF(length_scale=0.5)
k1__k2__length_scale : 0.5
k1__k2__length_scale_bounds : (0.0, 10.0)
k2 : RBF(length_scale=2)
k2__length_scale : 2.0
k2__length_scale_bounds : (0.0, 10.0)
>>> print(kernel.theta) # Note: log-transformed
[ 0. -0.69314718 0.69314718]
>>> print(kernel.bounds) # Note: log-transformed
[[ -inf 2.30258509]
[ -inf 2.30258509]
[ -inf 2.30258509]]
```

All Gaussian process kernels are interoperable with [ sklearn.metrics.pairwise](../api/sklearn.metrics.html#module-sklearn.metrics.pairwise)
and vice versa: instances of subclasses of

[can be passed as](generated/sklearn.gaussian_process.kernels.Kernel.html#sklearn.gaussian_process.kernels.Kernel)

`Kernel`

`metric`

to `pairwise_kernels`

from [. Moreover, kernel functions from pairwise can be used as GP kernels by using the wrapper class](../api/sklearn.metrics.html#module-sklearn.metrics.pairwise)

`sklearn.metrics.pairwise`

[. The only caveat is that the gradient of the hyperparameters is not analytic but numeric and all those kernels support only isotropic distances. The parameter](generated/sklearn.gaussian_process.kernels.PairwiseKernel.html#sklearn.gaussian_process.kernels.PairwiseKernel)

`PairwiseKernel`

`gamma`

is considered to be a
hyperparameter and may be optimized. The other kernel parameters are set
directly at initialization and are kept fixed.### 1.7.4.1. Basic kernels[#](#basic-kernels)

The [ ConstantKernel](generated/sklearn.gaussian_process.kernels.ConstantKernel.html#sklearn.gaussian_process.kernels.ConstantKernel) kernel can be used as part of a

[kernel where it scales the magnitude of the other factor (kernel) or as part of a](generated/sklearn.gaussian_process.kernels.Product.html#sklearn.gaussian_process.kernels.Product)

`Product`

[kernel, where it modifies the mean of the Gaussian process. It depends on a parameter \(constant\_value\). It is defined as:](generated/sklearn.gaussian_process.kernels.Sum.html#sklearn.gaussian_process.kernels.Sum)

`Sum`

The main use-case of the [ WhiteKernel](generated/sklearn.gaussian_process.kernels.WhiteKernel.html#sklearn.gaussian_process.kernels.WhiteKernel) kernel is as part of a
sum-kernel where it explains the noise-component of the signal. Tuning its
parameter \(noise\_level\) corresponds to estimating the noise-level.
It is defined as:

### 1.7.4.2. Kernel operators[#](#kernel-operators)

Kernel operators take one or two base kernels and combine them into a new
kernel. The [ Sum](generated/sklearn.gaussian_process.kernels.Sum.html#sklearn.gaussian_process.kernels.Sum) kernel takes two kernels \(k_1\) and \(k_2\)
and combines them via \(k_{sum}(X, Y) = k_1(X, Y) + k_2(X, Y)\).
The

[kernel takes two kernels \(k_1\) and \(k_2\) and combines them via \(k_{product}(X, Y) = k_1(X, Y) * k_2(X, Y)\). The](generated/sklearn.gaussian_process.kernels.Product.html#sklearn.gaussian_process.kernels.Product)

`Product`

[kernel takes one base kernel and a scalar parameter \(p\) and combines them via \(k_{exp}(X, Y) = k(X, Y)^p\). Note that magic methods](generated/sklearn.gaussian_process.kernels.Exponentiation.html#sklearn.gaussian_process.kernels.Exponentiation)

`Exponentiation`

`__add__`

, `__mul___`

and `__pow__`

are
overridden on the Kernel objects, so one can use e.g. `RBF() + RBF()`

as
a shortcut for `Sum(RBF(), RBF())`

.### 1.7.4.3. Radial basis function (RBF) kernel[#](#radial-basis-function-rbf-kernel)

The [ RBF](generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF) kernel is a stationary kernel. It is also known as the “squared
exponential” kernel. It is parameterized by a length-scale parameter \(l>0\), which
can either be a scalar (isotropic variant of the kernel) or a vector with the same
number of dimensions as the inputs \(x\) (anisotropic variant of the kernel).
The kernel is given by:

where \(d(\cdot, \cdot)\) is the Euclidean distance. This kernel is infinitely differentiable, which implies that GPs with this kernel as covariance function have mean square derivatives of all orders, and are thus very smooth. The prior and posterior of a GP resulting from an RBF kernel are shown in the following figure:

### 1.7.4.4. Matérn kernel[#](#matern-kernel)

The [ Matern](generated/sklearn.gaussian_process.kernels.Matern.html#sklearn.gaussian_process.kernels.Matern) kernel is a stationary kernel and a generalization of the

[kernel. It has an additional parameter \(\nu\) which controls the smoothness of the resulting function. It is parameterized by a length-scale parameter \(l>0\), which can either be a scalar (isotropic variant of the kernel) or a vector with the same number of dimensions as the inputs \(x\) (anisotropic variant of the kernel).](generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF)

`RBF`

##
Mathematical implementation of Matérn kernel[#](#mathematical-implementation-of-matérn-kernel)

The kernel is given by:

where \(d(\cdot,\cdot)\) is the Euclidean distance, \(K_\nu(\cdot)\) is a modified Bessel function and \(\Gamma(\cdot)\) is the gamma function. As \(\nu\rightarrow\infty\), the Matérn kernel converges to the RBF kernel. When \(\nu = 1/2\), the Matérn kernel becomes identical to the absolute exponential kernel, i.e.,

In particular, \(\nu = 3/2\):

and \(\nu = 5/2\):

are popular choices for learning functions that are not infinitely differentiable (as assumed by the RBF kernel) but at least once (\(\nu = 3/2\)) or twice differentiable (\(\nu = 5/2\)).

The flexibility of controlling the smoothness of the learned function via \(\nu\) allows adapting to the properties of the true underlying functional relation.

The prior and posterior of a GP resulting from a Matérn kernel are shown in the following figure:

See [[RW2006]](#rw2006), pp84 for further details regarding the
different variants of the Matérn kernel.

### 1.7.4.5. Rational quadratic kernel[#](#rational-quadratic-kernel)

The [ RationalQuadratic](generated/sklearn.gaussian_process.kernels.RationalQuadratic.html#sklearn.gaussian_process.kernels.RationalQuadratic) kernel can be seen as a scale mixture (an infinite sum)
of

[kernels with different characteristic length-scales. It is parameterized by a length-scale parameter \(l>0\) and a scale mixture parameter \(\alpha>0\) Only the isotropic variant where \(l\) is a scalar is supported at the moment. The kernel is given by:](generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF)

`RBF`

The prior and posterior of a GP resulting from a [ RationalQuadratic](generated/sklearn.gaussian_process.kernels.RationalQuadratic.html#sklearn.gaussian_process.kernels.RationalQuadratic) kernel are shown in
the following figure:

### 1.7.4.6. Exp-Sine-Squared kernel[#](#exp-sine-squared-kernel)

The [ ExpSineSquared](generated/sklearn.gaussian_process.kernels.ExpSineSquared.html#sklearn.gaussian_process.kernels.ExpSineSquared) kernel allows modeling periodic functions.
It is parameterized by a length-scale parameter \(l>0\) and a periodicity parameter
\(p>0\). Only the isotropic variant where \(l\) is a scalar is supported at the moment.
The kernel is given by:

The prior and posterior of a GP resulting from an ExpSineSquared kernel are shown in the following figure:

### 1.7.4.7. Dot-Product kernel[#](#dot-product-kernel)

The [ DotProduct](generated/sklearn.gaussian_process.kernels.DotProduct.html#sklearn.gaussian_process.kernels.DotProduct) kernel is non-stationary and can be obtained from linear regression
by putting \(N(0, 1)\) priors on the coefficients of \(x_d (d = 1, . . . , D)\) and
a prior of \(N(0, \sigma_0^2)\) on the bias. The

[kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter \(\sigma_0^2\). For \(\sigma_0^2 = 0\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by](generated/sklearn.gaussian_process.kernels.DotProduct.html#sklearn.gaussian_process.kernels.DotProduct)

`DotProduct`

The [ DotProduct](generated/sklearn.gaussian_process.kernels.DotProduct.html#sklearn.gaussian_process.kernels.DotProduct) kernel is commonly combined with exponentiation. An example with exponent 2 is
shown in the following figure:

---

## Source: https://scikit-learn.org/stable/modules/cross_decomposition.html

# 1.8. Cross decomposition[#](#cross-decomposition)

The cross decomposition module contains **supervised** estimators for
dimensionality reduction and regression, belonging to the “Partial Least
Squares” family.

Cross decomposition algorithms find the fundamental relations between two
matrices (X and Y). They are latent variable approaches to modeling the
covariance structures in these two spaces. They will try to find the
multidimensional direction in the X space that explains the maximum
multidimensional variance direction in the Y space. In other words, PLS
projects both `X`

and `Y`

into a lower-dimensional subspace such that the
covariance between `transformed(X)`

and `transformed(Y)`

is maximal.

PLS draws similarities with [Principal Component Regression](https://en.wikipedia.org/wiki/Principal_component_regression) (PCR), where
the samples are first projected into a lower-dimensional subspace, and the
targets `y`

are predicted using `transformed(X)`

. One issue with PCR is that
the dimensionality reduction is unsupervised, and may lose some important
variables: PCR would keep the features with the most variance, but it’s
possible that features with small variances are relevant for predicting
the target. In a way, PLS allows for the same kind of dimensionality
reduction, but by taking into account the targets `y`

. An illustration of
this fact is given in the following example:
* [Principal Component Regression vs Partial Least Squares Regression](../auto_examples/cross_decomposition/plot_pcr_vs_pls.html#sphx-glr-auto-examples-cross-decomposition-plot-pcr-vs-pls-py).

Apart from CCA, the PLS estimators are particularly suited when the matrix of predictors has more variables than observations, and when there is multicollinearity among the features. By contrast, standard linear regression would fail in these cases unless it is regularized.

Classes included in this module are [ PLSRegression](generated/sklearn.cross_decomposition.PLSRegression.html#sklearn.cross_decomposition.PLSRegression),

[,](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

[and](generated/sklearn.cross_decomposition.CCA.html#sklearn.cross_decomposition.CCA)

`CCA`


`PLSSVD`

## 1.8.1. PLSCanonical[#](#plscanonical)

We here describe the algorithm used in [ PLSCanonical](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical). The other
estimators use variants of this algorithm, and are detailed below.
We recommend section

[[1]](#id6)for more details and comparisons between these algorithms. In

[[1]](#id6),

[corresponds to “PLSW2A”.](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

Given two centered matrices \(X \in \mathbb{R}^{n \times d}\) and
\(Y \in \mathbb{R}^{n \times t}\), and a number of components \(K\),
[ PLSCanonical](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical) proceeds as follows:

Set \(X_1\) to \(X\) and \(Y_1\) to \(Y\). Then, for each \(k \in [1, K]\):

a) compute \(u_k \in \mathbb{R}^d\) and \(v_k \in \mathbb{R}^t\), the first left and right singular vectors of the cross-covariance matrix \(C = X_k^T Y_k\). \(u_k\) and \(v_k\) are called the

*weights*. By definition, \(u_k\) and \(v_k\) are chosen so that they maximize the covariance between the projected \(X_k\) and the projected target, that is \(\text{Cov}(X_k u_k, Y_k v_k)\).b) Project \(X_k\) and \(Y_k\) on the singular vectors to obtain

*scores*: \(\xi_k = X_k u_k\) and \(\omega_k = Y_k v_k\)c) Regress \(X_k\) on \(\xi_k\), i.e. find a vector \(\gamma_k \in \mathbb{R}^d\) such that the rank-1 matrix \(\xi_k \gamma_k^T\) is as close as possible to \(X_k\). Do the same on \(Y_k\) with \(\omega_k\) to obtain \(\delta_k\). The vectors \(\gamma_k\) and \(\delta_k\) are called the

*loadings*.d)

*deflate*\(X_k\) and \(Y_k\), i.e. subtract the rank-1 approximations: \(X_{k+1} = X_k - \xi_k \gamma_k^T\), and \(Y_{k + 1} = Y_k - \omega_k \delta_k^T\).

At the end, we have approximated \(X\) as a sum of rank-1 matrices: \(X = \Xi \Gamma^T\) where \(\Xi \in \mathbb{R}^{n \times K}\) contains the scores in its columns, and \(\Gamma^T \in \mathbb{R}^{K \times d}\) contains the loadings in its rows. Similarly for \(Y\), we have \(Y = \Omega \Delta^T\).

Note that the scores matrices \(\Xi\) and \(\Omega\) correspond to the projections of the training data \(X\) and \(Y\), respectively.

Step *a)* may be performed in two ways: either by computing the whole SVD of
\(C\) and only retaining the singular vectors with the biggest singular
values, or by directly computing the singular vectors using the power method (cf section 11.3 in [[1]](#id6)),
which corresponds to the `'nipals'`

option of the `algorithm`

parameter.

##
Transforming data[#](#transforming-data)

To transform \(X\) into \(\bar{X}\), we need to find a projection
matrix \(P\) such that \(\bar{X} = XP\). We know that for the
training data, \(\Xi = XP\), and \(X = \Xi \Gamma^T\). Setting
\(P = U(\Gamma^T U)^{-1}\) where \(U\) is the matrix with the
\(u_k\) in the columns, we have \(XP = X U(\Gamma^T U)^{-1} = \Xi
(\Gamma^T U) (\Gamma^T U)^{-1} = \Xi\) as desired. The rotation matrix
\(P\) can be accessed from the `x_rotations_`

attribute.

Similarly, \(Y\) can be transformed using the rotation matrix
\(V(\Delta^T V)^{-1}\), accessed via the `y_rotations_`

attribute.

##
Predicting the targets `Y`

[#](#predicting-the-targets-y)

To predict the targets of some data \(X\), we are looking for a coefficient matrix \(\beta \in R^{d \times t}\) such that \(Y = X\beta\).

The idea is to try to predict the transformed targets \(\Omega\) as a function of the transformed samples \(\Xi\), by computing \(\alpha \in \mathbb{R}\) such that \(\Omega = \alpha \Xi\).

Then, we have \(Y = \Omega \Delta^T = \alpha \Xi \Delta^T\), and since \(\Xi\) is the transformed training data we have that \(Y = X \alpha P \Delta^T\), and as a result the coefficient matrix \(\beta = \alpha P \Delta^T\).

\(\beta\) can be accessed through the `coef_`

attribute.

## 1.8.2. PLSSVD[#](#plssvd)

[ PLSSVD](generated/sklearn.cross_decomposition.PLSSVD.html#sklearn.cross_decomposition.PLSSVD) is a simplified version of

[described earlier: instead of iteratively deflating the matrices \(X_k\) and \(Y_k\),](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

[computes the SVD of \(C = X^TY\) only](generated/sklearn.cross_decomposition.PLSSVD.html#sklearn.cross_decomposition.PLSSVD)

`PLSSVD`

*once*, and stores the

`n_components`

singular vectors corresponding to
the biggest singular values in the matrices `U`

and `V`

, corresponding to the
`x_weights_`

and `y_weights_`

attributes. Here, the transformed data is
simply `transformed(X) = XU`

and `transformed(Y) = YV`

.If `n_components == 1`

, [ PLSSVD](generated/sklearn.cross_decomposition.PLSSVD.html#sklearn.cross_decomposition.PLSSVD) and

[are strictly equivalent.](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

## 1.8.3. PLSRegression[#](#plsregression)

The [ PLSRegression](generated/sklearn.cross_decomposition.PLSRegression.html#sklearn.cross_decomposition.PLSRegression) estimator is similar to

[with](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

`algorithm='nipals'`

, with 2 significant
differences:at step a) in the power method to compute \(u_k\) and \(v_k\), \(v_k\) is never normalized.

at step c), the targets \(Y_k\) are approximated using the projection of \(X_k\) (i.e. \(\xi_k\)) instead of the projection of \(Y_k\) (i.e. \(\omega_k\)). In other words, the loadings computation is different. As a result, the deflation in step d) will also be affected.


These two modifications affect the output of `predict`

and `transform`

,
which are not the same as for [ PLSCanonical](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical). Also, while the number
of components is limited by

`min(n_samples, n_features, n_targets)`

in
[, here the limit is the rank of \(X^TX\), i.e.](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

`min(n_samples, n_features)`

.[ PLSRegression](generated/sklearn.cross_decomposition.PLSRegression.html#sklearn.cross_decomposition.PLSRegression) is also known as PLS1 (single targets) and PLS2
(multiple targets). Much like

[,](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso)

`Lasso`

[is a form of regularized linear regression where the number of components controls the strength of the regularization.](generated/sklearn.cross_decomposition.PLSRegression.html#sklearn.cross_decomposition.PLSRegression)

`PLSRegression`

## 1.8.4. Canonical Correlation Analysis[#](#canonical-correlation-analysis)

Canonical Correlation Analysis was developed prior and independently to PLS.
But it turns out that [ CCA](generated/sklearn.cross_decomposition.CCA.html#sklearn.cross_decomposition.CCA) is a special case of PLS, and corresponds
to PLS in “Mode B” in the literature.

[ CCA](generated/sklearn.cross_decomposition.CCA.html#sklearn.cross_decomposition.CCA) differs from

[in the way the weights \(u_k\) and \(v_k\) are computed in the power method of step a). Details can be found in section 10 of](generated/sklearn.cross_decomposition.PLSCanonical.html#sklearn.cross_decomposition.PLSCanonical)

`PLSCanonical`

[[1]](#id6).

Since [ CCA](generated/sklearn.cross_decomposition.CCA.html#sklearn.cross_decomposition.CCA) involves the inversion of \(X_k^TX_k\) and
\(Y_k^TY_k\), this estimator can be unstable if the number of features or
targets is greater than the number of samples.

References

Examples

---

## Source: https://scikit-learn.org/stable/modules/naive_bayes.html

# 1.9. Naive Bayes[#](#naive-bayes)

Naive Bayes methods are a set of supervised learning algorithms based on applying Bayes’ theorem with the “naive” assumption of conditional independence between every pair of features given the value of the class variable. Bayes’ theorem states the following relationship, given class variable \(y\) and dependent feature vector \(x_1\) through \(x_n\), :

Using the naive conditional independence assumption that

for all \(i\), this relationship is simplified to

Since \(P(x_1, \dots, x_n)\) is constant given the input, we can use the following classification rule:

and we can use Maximum A Posteriori (MAP) estimation to estimate \(P(y)\) and \(P(x_i \mid y)\); the former is then the relative frequency of class \(y\) in the training set.

The different naive Bayes classifiers differ mainly by the assumptions they make regarding the distribution of \(P(x_i \mid y)\).

In spite of their apparently over-simplified assumptions, naive Bayes classifiers have worked quite well in many real-world situations, famously document classification and spam filtering. They require a small amount of training data to estimate the necessary parameters. (For theoretical reasons why naive Bayes works well, and on which types of data it does, see the references below.)

Naive Bayes learners and classifiers can be extremely fast compared to more sophisticated methods. The decoupling of the class conditional feature distributions means that each distribution can be independently estimated as a one dimensional distribution. This in turn helps to alleviate problems stemming from the curse of dimensionality.

On the flip side, although naive Bayes is known as a decent classifier,
it is known to be a bad estimator, so the probability outputs from
`predict_proba`

are not to be taken too seriously.

##
References[#](#references)

H. Zhang (2004).

[The optimality of Naive Bayes.](https://www.cs.unb.ca/~hzhang/publications/FLAIRS04ZhangH.pdf)Proc. FLAIRS.

## 1.9.1. Gaussian Naive Bayes[#](#gaussian-naive-bayes)

[ GaussianNB](generated/sklearn.naive_bayes.GaussianNB.html#sklearn.naive_bayes.GaussianNB) implements the Gaussian Naive Bayes algorithm for
classification. The likelihood of the features is assumed to be Gaussian:

The parameters \(\sigma_y\) and \(\mu_y\) are estimated using maximum likelihood.

```
>>> from sklearn.datasets import load_iris
>>> from sklearn.model_selection import train_test_split
>>> from sklearn.naive_bayes import GaussianNB
>>> X, y = load_iris(return_X_y=True)
>>> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0)
>>> gnb = GaussianNB()
>>> y_pred = gnb.fit(X_train, y_train).predict(X_test)
>>> print("Number of mislabeled points out of a total %d points : %d"
... % (X_test.shape[0], (y_test != y_pred).sum()))
Number of mislabeled points out of a total 75 points : 4
```

## 1.9.2. Multinomial Naive Bayes[#](#multinomial-naive-bayes)

[ MultinomialNB](generated/sklearn.naive_bayes.MultinomialNB.html#sklearn.naive_bayes.MultinomialNB) implements the naive Bayes algorithm for multinomially
distributed data, and is one of the two classic naive Bayes variants used in
text classification (where the data are typically represented as word vector
counts, although tf-idf vectors are also known to work well in practice).
The distribution is parametrized by vectors
\(\theta_y = (\theta_{y1},\ldots,\theta_{yn})\)
for each class \(y\), where \(n\) is the number of features
(in text classification, the size of the vocabulary)
and \(\theta_{yi}\) is the probability \(P(x_i \mid y)\)
of feature \(i\) appearing in a sample belonging to class \(y\).

The parameters \(\theta_y\) are estimated by a smoothed version of maximum likelihood, i.e. relative frequency counting:

where \(N_{yi} = \sum_{x \in T} x_i\) is the number of times feature \(i\) appears in all samples of class \(y\) in the training set \(T\), and \(N_{y} = \sum_{i=1}^{n} N_{yi}\) is the total count of all features for class \(y\).

The smoothing priors \(\alpha \ge 0\) account for features not present in the learning samples and prevent zero probabilities in further computations. Setting \(\alpha = 1\) is called Laplace smoothing, while \(\alpha < 1\) is called Lidstone smoothing.

## 1.9.3. Complement Naive Bayes[#](#complement-naive-bayes)

[ ComplementNB](generated/sklearn.naive_bayes.ComplementNB.html#sklearn.naive_bayes.ComplementNB) implements the complement naive Bayes (CNB) algorithm.
CNB is an adaptation of the standard multinomial naive Bayes (MNB) algorithm
that is particularly suited for imbalanced data sets. Specifically, CNB uses
statistics from the

*complement*of each class to compute the model’s weights. The inventors of CNB show empirically that the parameter estimates for CNB are more stable than those for MNB. Further, CNB regularly outperforms MNB (often by a considerable margin) on text classification tasks.

##
Weights calculation[#](#weights-calculation)

The procedure for calculating the weights is as follows:

where the summations are over all documents \(j\) not in class \(c\), \(d_{ij}\) is either the count or tf-idf value of term \(i\) in document \(j\), \(\alpha_i\) is a smoothing hyperparameter like that found in MNB, and \(\alpha = \sum_{i} \alpha_i\). The second normalization addresses the tendency for longer documents to dominate parameter estimates in MNB. The classification rule is:

i.e., a document is assigned to the class that is the *poorest* complement
match.

##
References[#](#references-2)

Rennie, J. D., Shih, L., Teevan, J., & Karger, D. R. (2003).

[Tackling the poor assumptions of naive bayes text classifiers.](https://people.csail.mit.edu/jrennie/papers/icml03-nb.pdf)In ICML (Vol. 3, pp. 616-623).

## 1.9.4. Bernoulli Naive Bayes[#](#bernoulli-naive-bayes)

[ BernoulliNB](generated/sklearn.naive_bayes.BernoulliNB.html#sklearn.naive_bayes.BernoulliNB) implements the naive Bayes training and classification
algorithms for data that is distributed according to multivariate Bernoulli
distributions; i.e., there may be multiple features but each one is assumed
to be a binary-valued (Bernoulli, boolean) variable.
Therefore, this class requires samples to be represented as binary-valued
feature vectors; if handed any other kind of data, a

[instance may binarize its input (depending on the](generated/sklearn.naive_bayes.BernoulliNB.html#sklearn.naive_bayes.BernoulliNB)

`BernoulliNB`

`binarize`

parameter).The decision rule for Bernoulli naive Bayes is based on

which differs from multinomial NB’s rule in that it explicitly penalizes the non-occurrence of a feature \(i\) that is an indicator for class \(y\), where the multinomial variant would simply ignore a non-occurring feature.

In the case of text classification, word occurrence vectors (rather than word
count vectors) may be used to train and use this classifier. [ BernoulliNB](generated/sklearn.naive_bayes.BernoulliNB.html#sklearn.naive_bayes.BernoulliNB)
might perform better on some datasets, especially those with shorter documents.
It is advisable to evaluate both models, if time permits.

##
References[#](#references-3)

C.D. Manning, P. Raghavan and H. Schütze (2008). Introduction to Information Retrieval. Cambridge University Press, pp. 234-265.

A. McCallum and K. Nigam (1998).

[A comparison of event models for Naive Bayes text classification.](https://cdn.aaai.org/Workshops/1998/WS-98-05/WS98-05-007.pdf)Proc. AAAI/ICML-98 Workshop on Learning for Text Categorization, pp. 41-48.V. Metsis, I. Androutsopoulos and G. Paliouras (2006).

[Spam filtering with Naive Bayes – Which Naive Bayes?](https://www2.aueb.gr/users/ion/docs/ceas2006_paper.pdf)3rd Conf. on Email and Anti-Spam (CEAS).

## 1.9.5. Categorical Naive Bayes[#](#categorical-naive-bayes)

[ CategoricalNB](generated/sklearn.naive_bayes.CategoricalNB.html#sklearn.naive_bayes.CategoricalNB) implements the categorical naive Bayes
algorithm for categorically distributed data. It assumes that each feature,
which is described by the index \(i\), has its own categorical
distribution.

For each feature \(i\) in the training set \(X\),
[ CategoricalNB](generated/sklearn.naive_bayes.CategoricalNB.html#sklearn.naive_bayes.CategoricalNB) estimates a categorical distribution for each feature i
of X conditioned on the class y. The index set of the samples is defined as
\(J = \{ 1, \dots, m \}\), with \(m\) as the number of samples.

##
Probability calculation[#](#probability-calculation)

The probability of category \(t\) in feature \(i\) given class \(c\) is estimated as:

where \(N_{tic} = |\{j \in J \mid x_{ij} = t, y_j = c\}|\) is the number of times category \(t\) appears in the samples \(x_{i}\), which belong to class \(c\), \(N_{c} = |\{ j \in J\mid y_j = c\}|\) is the number of samples with class c, \(\alpha\) is a smoothing parameter and \(n_i\) is the number of available categories of feature \(i\).

[ CategoricalNB](generated/sklearn.naive_bayes.CategoricalNB.html#sklearn.naive_bayes.CategoricalNB) assumes that the sample matrix \(X\) is encoded (for
instance with the help of

[) such that all categories for each feature \(i\) are represented with numbers \(0, ..., n_i - 1\) where \(n_i\) is the number of available categories of feature \(i\).](generated/sklearn.preprocessing.OrdinalEncoder.html#sklearn.preprocessing.OrdinalEncoder)

`OrdinalEncoder`

## 1.9.6. Out-of-core naive Bayes model fitting[#](#out-of-core-naive-bayes-model-fitting)

Naive Bayes models can be used to tackle large scale classification problems
for which the full training set might not fit in memory. To handle this case,
[ MultinomialNB](generated/sklearn.naive_bayes.MultinomialNB.html#sklearn.naive_bayes.MultinomialNB),

[, and](generated/sklearn.naive_bayes.BernoulliNB.html#sklearn.naive_bayes.BernoulliNB)

`BernoulliNB`

[expose a](generated/sklearn.naive_bayes.GaussianNB.html#sklearn.naive_bayes.GaussianNB)

`GaussianNB`

`partial_fit`

method that can be used
incrementally as done with other classifiers as demonstrated in
[Out-of-core classification of text documents](../auto_examples/applications/plot_out_of_core_classification.html#sphx-glr-auto-examples-applications-plot-out-of-core-classification-py). All naive Bayes classifiers support sample weighting.

Contrary to the `fit`

method, the first call to `partial_fit`

needs to be
passed the list of all the expected class labels.

For an overview of available strategies in scikit-learn, see also the
[out-of-core learning](../computing/scaling_strategies.html#scaling-strategies) documentation.

Note

The `partial_fit`

method call of naive Bayes models introduces some
computational overhead. It is recommended to use data chunk sizes that are as
large as possible, that is as the available RAM allows.

---

## Source: https://scikit-learn.org/stable/modules/tree.html

# 1.10. Decision Trees[#](#decision-trees)

**Decision Trees (DTs)** are a non-parametric supervised learning method used
for [classification](#tree-classification) and [regression](#tree-regression). The goal is to create a model that predicts the value of a
target variable by learning simple decision rules inferred from the data
features. A tree can be seen as a piecewise constant approximation.

For instance, in the example below, decision trees learn from data to approximate a sine curve with a set of if-then-else decision rules. The deeper the tree, the more complex the decision rules and the fitter the model.

Some advantages of decision trees are:

Simple to understand and to interpret. Trees can be visualized.

Requires little data preparation. Other techniques often require data normalization, dummy variables need to be created and blank values to be removed. Some tree and algorithm combinations support

[missing values](#tree-missing-value-support).The cost of using the tree (i.e., predicting data) is logarithmic in the number of data points used to train the tree.

Able to handle both numerical and categorical data. However, the scikit-learn implementation does not support categorical variables for now. Other techniques are usually specialized in analyzing datasets that have only one type of variable. See

[algorithms](#tree-algorithms)for more information.Able to handle multi-output problems.

Uses a white box model. If a given situation is observable in a model, the explanation for the condition is easily explained by boolean logic. By contrast, in a black box model (e.g., in an artificial neural network), results may be more difficult to interpret.

Possible to validate a model using statistical tests. That makes it possible to account for the reliability of the model.

Performs well even if its assumptions are somewhat violated by the true model from which the data were generated.


The disadvantages of decision trees include:

Decision-tree learners can create over-complex trees that do not generalize the data well. This is called overfitting. Mechanisms such as pruning, setting the minimum number of samples required at a leaf node or setting the maximum depth of the tree are necessary to avoid this problem.

Decision trees can be unstable because small variations in the data might result in a completely different tree being generated. This problem is mitigated by using decision trees within an ensemble.

Predictions of decision trees are neither smooth nor continuous, but piecewise constant approximations as seen in the above figure. Therefore, they are not good at extrapolation.

The problem of learning an optimal decision tree is known to be NP-complete under several aspects of optimality and even for simple concepts. Consequently, practical decision-tree learning algorithms are based on heuristic algorithms such as the greedy algorithm where locally optimal decisions are made at each node. Such algorithms cannot guarantee to return the globally optimal decision tree. This can be mitigated by training multiple trees in an ensemble learner, where the features and samples are randomly sampled with replacement.

There are concepts that are hard to learn because decision trees do not express them easily, such as XOR, parity or multiplexer problems.

Decision tree learners create biased trees if some classes dominate. It is therefore recommended to balance the dataset prior to fitting with the decision tree.


## 1.10.1. Classification[#](#classification)

[ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier) is a class capable of performing multi-class
classification on a dataset.

As with other classifiers, [ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier) takes as input two arrays:
an array X, sparse or dense, of shape

`(n_samples, n_features)`

holding the
training samples, and an array Y of integer values, shape `(n_samples,)`

,
holding the class labels for the training samples:```
>>> from sklearn import tree
>>> X = [[0, 0], [1, 1]]
>>> Y = [0, 1]
>>> clf = tree.DecisionTreeClassifier()
>>> clf = clf.fit(X, Y)
```

After being fitted, the model can then be used to predict the class of samples:

```
>>> clf.predict([[2., 2.]])
array([1])
```

In case that there are multiple classes with the same and highest probability, the classifier will predict the class with the lowest index amongst those classes.

As an alternative to outputting a specific class, the probability of each class can be predicted, which is the fraction of training samples of the class in a leaf:

```
>>> clf.predict_proba([[2., 2.]])
array([[0., 1.]])
```

[ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier) is capable of both binary (where the
labels are [-1, 1]) classification and multiclass (where the labels are
[0, …, K-1]) classification.

Using the Iris dataset, we can construct a tree as follows:

```
>>> from sklearn.datasets import load_iris
>>> from sklearn import tree
>>> iris = load_iris()
>>> X, y = iris.data, iris.target
>>> clf = tree.DecisionTreeClassifier()
>>> clf = clf.fit(X, y)
```

Once trained, you can plot the tree with the [ plot_tree](generated/sklearn.tree.plot_tree.html#sklearn.tree.plot_tree) function:

```
>>> tree.plot_tree(clf)
[...]
```

##
Alternative ways to export trees[#](#alternative-ways-to-export-trees)

We can also export the tree in [Graphviz](https://www.graphviz.org/) format using the [ export_graphviz](generated/sklearn.tree.export_graphviz.html#sklearn.tree.export_graphviz)
exporter. If you use the

[conda](https://conda.io)package manager, the graphviz binaries and the python package can be installed with

`conda install python-graphviz`

.Alternatively binaries for graphviz can be downloaded from the graphviz project homepage,
and the Python wrapper installed from pypi with `pip install graphviz`

.

Below is an example graphviz export of the above tree trained on the entire
iris dataset; the results are saved in an output file `iris.pdf`

:

```
>>> import graphviz
>>> dot_data = tree.export_graphviz(clf, out_file=None)
>>> graph = graphviz.Source(dot_data)
>>> graph.render("iris")
```

The [ export_graphviz](generated/sklearn.tree.export_graphviz.html#sklearn.tree.export_graphviz) exporter also supports a variety of aesthetic
options, including coloring nodes by their class (or value for regression) and
using explicit variable and class names if desired. Jupyter notebooks also
render these plots inline automatically:

```
>>> dot_data = tree.export_graphviz(clf, out_file=None,
... feature_names=iris.feature_names,
... class_names=iris.target_names,
... filled=True, rounded=True,
... special_characters=True)
>>> graph = graphviz.Source(dot_data)
>>> graph
```

Alternatively, the tree can also be exported in textual format with the
function [ export_text](generated/sklearn.tree.export_text.html#sklearn.tree.export_text). This method doesn’t require the installation
of external libraries and is more compact:

```
>>> from sklearn.datasets import load_iris
>>> from sklearn.tree import DecisionTreeClassifier
>>> from sklearn.tree import export_text
>>> iris = load_iris()
>>> decision_tree = DecisionTreeClassifier(random_state=0, max_depth=2)
>>> decision_tree = decision_tree.fit(iris.data, iris.target)
>>> r = export_text(decision_tree, feature_names=iris['feature_names'])
>>> print(r)
|--- petal width (cm) <= 0.80
| |--- class: 0
|--- petal width (cm) > 0.80
| |--- petal width (cm) <= 1.75
| | |--- class: 1
| |--- petal width (cm) > 1.75
| | |--- class: 2
```

Examples

## 1.10.2. Regression[#](#regression)

Decision trees can also be applied to regression problems, using the
[ DecisionTreeRegressor](generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor) class.

As in the classification setting, the fit method will take as argument arrays X and y, only that in this case y is expected to have floating point values instead of integer values:

```
>>> from sklearn import tree
>>> X = [[0, 0], [2, 2]]
>>> y = [0.5, 2.5]
>>> clf = tree.DecisionTreeRegressor()
>>> clf = clf.fit(X, y)
>>> clf.predict([[1, 1]])
array([0.5])
```

Examples

## 1.10.3. Multi-output problems[#](#multi-output-problems)

A multi-output problem is a supervised learning problem with several outputs
to predict, that is when Y is a 2d array of shape `(n_samples, n_outputs)`

.

When there is no correlation between the outputs, a very simple way to solve this kind of problem is to build n independent models, i.e. one for each output, and then to use those models to independently predict each one of the n outputs. However, because it is likely that the output values related to the same input are themselves correlated, an often better way is to build a single model capable of predicting simultaneously all n outputs. First, it requires lower training time since only a single estimator is built. Second, the generalization accuracy of the resulting estimator may often be increased.

With regard to decision trees, this strategy can readily be used to support multi-output problems. This requires the following changes:

Store n output values in leaves, instead of 1;

Use splitting criteria that compute the average reduction across all n outputs.


This module offers support for multi-output problems by implementing this
strategy in both [ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier) and

[. If a decision tree is fit on an output array Y of shape](generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor)

`DecisionTreeRegressor`

`(n_samples, n_outputs)`

then the resulting estimator will:Output n_output values upon

`predict`

;Output a list of n_output arrays of class probabilities upon

`predict_proba`

.

The use of multi-output trees for regression is demonstrated in
[Decision Tree Regression](../auto_examples/tree/plot_tree_regression.html#sphx-glr-auto-examples-tree-plot-tree-regression-py). In this example, the input
X is a single real value and the outputs Y are the sine and cosine of X.

The use of multi-output trees for classification is demonstrated in
[Face completion with a multi-output estimators](../auto_examples/miscellaneous/plot_multioutput_face_completion.html#sphx-glr-auto-examples-miscellaneous-plot-multioutput-face-completion-py). In this example, the inputs
X are the pixels of the upper half of faces and the outputs Y are the pixels of
the lower half of those faces.

Examples

References

M. Dumont et al,

[Fast multi-class image annotation with random subwindows and multiple output randomized trees](http://www.montefiore.ulg.ac.be/services/stochastic/pubs/2009/DMWG09/dumont-visapp09-shortpaper.pdf), International Conference on Computer Vision Theory and Applications 2009

## 1.10.4. Complexity[#](#complexity)

The following table shows the worst-case complexity estimates for a balanced binary tree:

Splitter |
Total training cost |
Total inference cost |
|---|---|---|
“best” |
\(\mathcal{O}(n_{features} \, n^2_{samples} \log(n_{samples}))\) |
\(\mathcal{O}(\log(n_{samples}))\) |
“random” |
\(\mathcal{O}(n_{features} \, n^2_{samples})\) |
\(\mathcal{O}(\log(n_{samples}))\) |

In general, the training cost to construct a balanced binary tree **at each
node** is

The first term is the cost of sorting \(n_{samples}\) repeated for \(n_{features}\). The second term is the linear scan over candidate split points to find the feature that offers the largest reduction in the impurity criterion. The latter is sub-leading for the greedy splitter strategy “best”, and is therefore typically discarded.

Regardless of the splitting strategy, after summing the cost over **all internal
nodes**, the total complexity scales linearly with
\(n_{nodes}=n_{leaves}-1\), which is \(\mathcal{O}(n_{samples})\) in the
worst-case complexity, that is, when the tree is grown until each sample ends up
in its own leaf.

Many implementations such as scikit-learn use efficient caching tricks to keep
track of the general order of indices at each node such that the features do not
need to be re-sorted at each node; hence, the time complexity of these
implementations is just
\(\mathcal{O}(n_{features}n_{samples}\log(n_{samples}))\) [[1]](#id2).

Inference cost is independent of the splitter strategy. It depends only on the tree depth, \(\mathcal{O}(\text{depth})\). In an approximately balanced binary tree, each split halves the data, and then the number of such halvings grows with the depth as powers of two. If this process continues until each sample is isolated in its own leaf, the resulting depth is \(\mathcal{O}(\log(n_{samples}))\).

References

## 1.10.5. Tips on practical use[#](#tips-on-practical-use)

Decision trees tend to overfit on data with a large number of features. Getting the right ratio of samples to number of features is important, since a tree with few samples in high dimensional space is very likely to overfit.

Consider performing dimensionality reduction (

[PCA](decomposition.html#pca),[ICA](decomposition.html#ica), or[Feature selection](feature_selection.html#feature-selection)) beforehand to give your tree a better chance of finding features that are discriminative.[Understanding the decision tree structure](../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py)will help in gaining more insights about how the decision tree makes predictions, which is important for understanding the important features in the data.Visualize your tree as you are training by using the

`export`

function. Use`max_depth=3`

as an initial tree depth to get a feel for how the tree is fitting to your data, and then increase the depth.Remember that the number of samples required to populate the tree doubles for each additional level the tree grows to. Use

`max_depth`

to control the size of the tree to prevent overfitting.Use

`min_samples_split`

or`min_samples_leaf`

to ensure that multiple samples inform every decision in the tree, by controlling which splits will be considered. A very small number will usually mean the tree will overfit, whereas a large number will prevent the tree from learning the data. Try`min_samples_leaf=5`

as an initial value. If the sample size varies greatly, a float number can be used as percentage in these two parameters. While`min_samples_split`

can create arbitrarily small leaves,`min_samples_leaf`

guarantees that each leaf has a minimum size, avoiding low-variance, over-fit leaf nodes in regression problems. For classification with few classes,`min_samples_leaf=1`

is often the best choice.Note that

`min_samples_split`

considers samples directly and independent of`sample_weight`

, if provided (e.g. a node with m weighted samples is still treated as having exactly m samples). Consider`min_weight_fraction_leaf`

or`min_impurity_decrease`

if accounting for sample weights is required at splits.Balance your dataset before training to prevent the tree from being biased toward the classes that are dominant. Class balancing can be done by sampling an equal number of samples from each class, or preferably by normalizing the sum of the sample weights (

`sample_weight`

) for each class to the same value. Also note that weight-based pre-pruning criteria, such as`min_weight_fraction_leaf`

, will then be less biased toward dominant classes than criteria that are not aware of the sample weights, like`min_samples_leaf`

.If the samples are weighted, it will be easier to optimize the tree structure using weight-based pre-pruning criterion such as

`min_weight_fraction_leaf`

, which ensures that leaf nodes contain at least a fraction of the overall sum of the sample weights.All decision trees use

`np.float32`

arrays internally. If training data is not in this format, a copy of the dataset will be made.If the input matrix X is very sparse, it is recommended to convert to sparse

`csc_matrix`

before calling fit and sparse`csr_matrix`

before calling predict. Training time can be orders of magnitude faster for a sparse matrix input compared to a dense matrix when features have zero values in most of the samples.

## 1.10.6. Tree algorithms: ID3, C4.5, C5.0 and CART[#](#tree-algorithms-id3-c4-5-c5-0-and-cart)

What are all the various decision tree algorithms and how do they differ from each other? Which one is implemented in scikit-learn?

##
Various decision tree algorithms[#](#various-decision-tree-algorithms)

[ID3](https://en.wikipedia.org/wiki/ID3_algorithm) (Iterative Dichotomiser 3) was developed in 1986 by Ross Quinlan.
The algorithm creates a multiway tree, finding for each node (i.e. in
a greedy manner) the categorical feature that will yield the largest
information gain for categorical targets. Trees are grown to their
maximum size and then a pruning step is usually applied to improve the
ability of the tree to generalize to unseen data.

C4.5 is the successor to ID3 and removed the restriction that features must be categorical by dynamically defining a discrete attribute (based on numerical variables) that partitions the continuous attribute value into a discrete set of intervals. C4.5 converts the trained trees (i.e. the output of the ID3 algorithm) into sets of if-then rules. The accuracy of each rule is then evaluated to determine the order in which they should be applied. Pruning is done by removing a rule’s precondition if the accuracy of the rule improves without it.

C5.0 is Quinlan’s latest version release under a proprietary license. It uses less memory and builds smaller rulesets than C4.5 while being more accurate.

CART (Classification and Regression Trees) is very similar to C4.5, but it differs in that it supports numerical target variables (regression) and does not compute rule sets. CART constructs binary trees using the feature and threshold that yield the largest information gain at each node.

scikit-learn uses an optimized version of the CART algorithm; however, the scikit-learn implementation does not support categorical variables for now.

## 1.10.7. Mathematical formulation[#](#mathematical-formulation)

Given training vectors \(x_i \in R^n\), i=1,…, l and a label vector \(y \in R^l\), a decision tree recursively partitions the feature space such that the samples with the same labels or similar target values are grouped together.

Let the data at node \(m\) be represented by \(Q_m\) with \(n_m\) samples. For each candidate split \(\theta = (j, t_m)\) consisting of a feature \(j\) and threshold \(t_m\), partition the data into \(Q_m^{left}(\theta)\) and \(Q_m^{right}(\theta)\) subsets

The quality of a candidate split of node \(m\) is then computed using an impurity function or loss function \(H()\), the choice of which depends on the task being solved (classification or regression)

Select the parameters that minimises the impurity

The strategy to choose the split at each node is controlled by the `splitter`

parameter:

With the

**best splitter**(default,`splitter='best'`

), \(\theta^*\) is found by performing a**greedy exhaustive search**over all available features and all possible thresholds \(t_m\) (i.e. midpoints between sorted, distinct feature values), selecting the pair that exactly minimizes \(G(Q_m, \theta)\).With the

**random splitter**(`splitter='random'`

), \(\theta^*\) is found by sampling a**single random candidate threshold**for each available feature. This performs a stochastic approximation of the greedy search, effectively reducing computation time (see[Complexity](#tree-complexity)).

After choosing the optimal split \(\theta^*\) at node \(m\), the same splitting procedure is then applied recursively to each partition \(Q_m^{left}(\theta^*)\) and \(Q_m^{right}(\theta^*)\) until a stopping condition is reached, such as:

the maximum allowable depth is reached (

`max_depth`

);\(n_m\) is smaller than

`min_samples_split`

;the impurity decrease for this split is smaller than

`min_impurity_decrease`

.

See the respective estimator docstring for other stopping conditions.

### 1.10.7.1. Classification criteria[#](#classification-criteria)

If a target is a classification outcome taking on values 0,1,…,K-1, for node \(m\), let

be the proportion of class k observations in node \(m\). If \(m\) is a
terminal node, `predict_proba`

for this region is set to \(p_{mk}\).
Common measures of impurity are the following.

Gini:

Log Loss or Entropy:

##
Shannon entropy[#](#shannon-entropy)

The entropy criterion computes the Shannon entropy of the possible classes. It
takes the class frequencies of the training data points that reached a given
leaf \(m\) as their probability. Using the **Shannon entropy as tree node
splitting criterion is equivalent to minimizing the log loss** (also known as
cross-entropy and multinomial deviance) between the true labels \(y_i\)
and the probabilistic predictions \(T_k(x_i)\) of the tree model \(T\) for class \(k\).

To see this, first recall that the log loss of a tree model \(T\) computed on a dataset \(D\) is defined as follows:

where \(D\) is a training dataset of \(n\) pairs \((x_i, y_i)\).

In a classification tree, the predicted class probabilities within leaf nodes are constant, that is: for all \((x_i, y_i) \in Q_m\), one has: \(T_k(x_i) = p_{mk}\) for each class \(k\).

This property makes it possible to rewrite \(\mathrm{LL}(D, T)\) as the sum of the Shannon entropies computed for each leaf of \(T\) weighted by the number of training data points that reached each leaf:

### 1.10.7.2. Regression criteria[#](#regression-criteria)

If the target is a continuous value, then for node \(m\), common criteria to minimize as for determining locations for future splits are Mean Squared Error (MSE or L2 error), Poisson deviance as well as Mean Absolute Error (MAE or L1 error). MSE and Poisson deviance both set the predicted value of terminal nodes to the learned mean value \(\bar{y}_m\) of the node whereas the MAE sets the predicted value of terminal nodes to the median \(median(y)_m\).

Mean Squared Error:

Mean Poisson deviance:

Setting `criterion="poisson"`

might be a good choice if your target is a count
or a frequency (count per some unit). In any case, \(y >= 0\) is a
necessary condition to use this criterion. For performance reasons the actual
implementation minimizes the half mean poisson deviance, i.e. the mean poisson
deviance divided by 2.

Mean Absolute Error:

Note that it is 3–6× slower to fit than the MSE criterion as of version 1.8.

## 1.10.8. Missing Values Support[#](#missing-values-support)

[ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier),

[have built-in support for missing values using](generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor)

`DecisionTreeRegressor`

`splitter='best'`

, where
the splits are determined in a greedy fashion.
[, and](generated/sklearn.tree.ExtraTreeClassifier.html#sklearn.tree.ExtraTreeClassifier)

`ExtraTreeClassifier`

[have built-in support for missing values for](generated/sklearn.tree.ExtraTreeRegressor.html#sklearn.tree.ExtraTreeRegressor)

`ExtraTreeRegressor`

`splitter='random'`

, where the splits
are determined randomly. For more details on how the splitter differs on
non-missing values, see the [Forest section](ensemble.html#forest).

The criterion supported when there are missing values are
`'gini'`

, `'entropy'`

, or `'log_loss'`

, for classification or
`'squared_error'`

, `'friedman_mse'`

, or `'poisson'`

for regression.

First we will describe how [ DecisionTreeClassifier](generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier),

[handle missing-values in the data.](generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor)

`DecisionTreeRegressor`

For each potential threshold on the non-missing data, the splitter will evaluate the split with all the missing values going to the left node or the right node.

Decisions are made as follows:

By default when predicting, the samples with missing values are classified with the class used in the split found during training:

>>> from sklearn.tree import DecisionTreeClassifier >>> import numpy as np >>> X = np.array([0, 1, 6, np.nan]).reshape(-1, 1) >>> y = [0, 0, 1, 1] >>> tree = DecisionTreeClassifier(random_state=0).fit(X, y) >>> tree.predict(X) array([0, 0, 1, 1])

If the criterion evaluation is the same for both nodes, then the tie for missing value at predict time is broken by going to the right node. The splitter also checks the split where all the missing values go to one child and non-missing values go to the other:

>>> from sklearn.tree import DecisionTreeClassifier >>> import numpy as np >>> X = np.array([np.nan, -1, np.nan, 1]).reshape(-1, 1) >>> y = [0, 0, 1, 1] >>> tree = DecisionTreeClassifier(random_state=0, max_depth=1).fit(X, y) >>> X_test = np.array([np.nan]).reshape(-1, 1) >>> tree.predict(X_test) array([1])

If no missing values are seen during training for a given feature, then during prediction missing values are mapped to the child with the most samples:

>>> from sklearn.tree import DecisionTreeClassifier >>> import numpy as np >>> X = np.array([0, 1, 2, 3]).reshape(-1, 1) >>> y = [0, 1, 1, 1] >>> tree = DecisionTreeClassifier(random_state=0).fit(X, y) >>> X_test = np.array([np.nan]).reshape(-1, 1) >>> tree.predict(X_test) array([1])


[ ExtraTreeClassifier](generated/sklearn.tree.ExtraTreeClassifier.html#sklearn.tree.ExtraTreeClassifier), and

[handle missing values in a slightly different way. When splitting a node, a random threshold will be chosen to split the non-missing values on. Then the non-missing values will be sent to the left and right child based on the randomly selected threshold, while the missing values will also be randomly sent to the left or right child. This is repeated for every feature considered at each split. The best split among these is chosen.](generated/sklearn.tree.ExtraTreeRegressor.html#sklearn.tree.ExtraTreeRegressor)

`ExtraTreeRegressor`

During prediction, the treatment of missing-values is the same as that of the decision tree:

By default when predicting, the samples with missing values are classified with the class used in the split found during training.

If no missing values are seen during training for a given feature, then during prediction missing values are mapped to the child with the most samples.


## 1.10.9. Minimal Cost-Complexity Pruning[#](#minimal-cost-complexity-pruning)

Minimal cost-complexity pruning is an algorithm used to prune a tree to avoid
over-fitting, described in Chapter 3 of [[BRE]](#bre). This algorithm is parameterized
by \(\alpha\ge0\) known as the complexity parameter. The complexity
parameter is used to define the cost-complexity measure, \(R_\alpha(T)\) of
a given tree \(T\):

where \(|\widetilde{T}|\) is the number of terminal nodes in \(T\) and \(R(T)\) is traditionally defined as the total misclassification rate of the terminal nodes. Alternatively, scikit-learn uses the total sample weighted impurity of the terminal nodes for \(R(T)\). As shown above, the impurity of a node depends on the criterion. Minimal cost-complexity pruning finds the subtree of \(T\) that minimizes \(R_\alpha(T)\).

The cost complexity measure of a single node is
\(R_\alpha(t)=R(t)+\alpha\). The branch, \(T_t\), is defined to be a
tree where node \(t\) is its root. In general, the impurity of a node
is greater than the sum of impurities of its terminal nodes,
\(R(T_t)<R(t)\). However, the cost complexity measure of a node,
\(t\), and its branch, \(T_t\), can be equal depending on
\(\alpha\). We define the effective \(\alpha\) of a node to be the
value where they are equal, \(R_\alpha(T_t)=R_\alpha(t)\) or
\(\alpha_{eff}(t)=\frac{R(t)-R(T_t)}{|T|-1}\). A non-terminal node
with the smallest value of \(\alpha_{eff}\) is the weakest link and will
be pruned. This process stops when the pruned tree’s minimal
\(\alpha_{eff}\) is greater than the `ccp_alpha`

parameter.

Examples

References

[BRE](#id5)]

L. Breiman, J. Friedman, R. Olshen, and C. Stone. Classification and Regression Trees. Wadsworth, Belmont, CA, 1984.

J.R. Quinlan. C4. 5: programs for machine learning. Morgan Kaufmann, 1993.

T. Hastie, R. Tibshirani and J. Friedman. Elements of Statistical Learning, Springer, 2009.

---

## Source: https://scikit-learn.org/stable/modules/ensemble.html

# 1.11. Ensembles: Gradient boosting, random forests, bagging, voting, stacking[#](#ensembles-gradient-boosting-random-forests-bagging-voting-stacking)

**Ensemble methods** combine the predictions of several
base estimators built with a given learning algorithm in order to improve
generalizability / robustness over a single estimator.

Two very famous examples of ensemble methods are [gradient-boosted trees](#gradient-boosting) and [random forests](#forest).

More generally, ensemble models can be applied to any base learner beyond
trees, in averaging methods such as [Bagging methods](#bagging),
[model stacking](#stacking), or [Voting](#voting-classifier), or in
boosting, as [AdaBoost](#adaboost).

## 1.11.1. Gradient-boosted trees[#](#gradient-boosted-trees)

[Gradient Tree Boosting](https://en.wikipedia.org/wiki/Gradient_boosting)
or Gradient Boosted Decision Trees (GBDT) is a generalization
of boosting to arbitrary differentiable loss functions, see the seminal work of
[[Friedman2001]](#friedman2001). GBDT is an excellent model for both regression and
classification, in particular for tabular data.

### 1.11.1.1. Histogram-Based Gradient Boosting[#](#histogram-based-gradient-boosting)

Scikit-learn 0.21 introduced two new implementations of
gradient boosted trees, namely [ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier)
and

[, inspired by](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

[LightGBM](https://github.com/Microsoft/LightGBM)(See

[[LightGBM]](#lightgbm)).

These histogram-based estimators can be **orders of magnitude faster**
than [ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[when the number of samples is larger than tens of thousands of samples.](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

They also have built-in support for missing values, which avoids the need for an imputer.

These fast estimators first bin the input samples `X`

into
integer-valued bins (typically 256 bins) which tremendously reduces the
number of splitting points to consider, and allows the algorithm to
leverage integer-based data structures (histograms) instead of relying on
sorted continuous values when building the trees. The API of these
estimators is slightly different, and some of the features from
[ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[are not yet supported, for instance some loss functions.](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

Examples

[Partial Dependence and Individual Conditional Expectation Plots](../auto_examples/inspection/plot_partial_dependence.html#sphx-glr-auto-examples-inspection-plot-partial-dependence-py)[Comparing Random Forests and Histogram Gradient Boosting models](../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py)

#### 1.11.1.1.1. Usage[#](#usage)

Most of the parameters are unchanged from
[ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[. One exception is the](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

`max_iter`

parameter that replaces `n_estimators`

, and
controls the number of iterations of the boosting process:```
>>> from sklearn.ensemble import HistGradientBoostingClassifier
>>> from sklearn.datasets import make_hastie_10_2
>>> X, y = make_hastie_10_2(random_state=0)
>>> X_train, X_test = X[:2000], X[2000:]
>>> y_train, y_test = y[:2000], y[2000:]
>>> clf = HistGradientBoostingClassifier(max_iter=100).fit(X_train, y_train)
>>> clf.score(X_test, y_test)
0.8965
```

Available losses for **regression** are:

‘squared_error’, which is the default loss;

‘absolute_error’, which is less sensitive to outliers than the squared error;

‘gamma’, which is well suited to model strictly positive outcomes;

‘poisson’, which is well suited to model counts and frequencies;

‘quantile’, which allows for estimating a conditional quantile that can later be used to obtain prediction intervals.


For **classification**, ‘log_loss’ is the only option. For binary classification
it uses the binary log loss, also known as binomial deviance or binary
cross-entropy. For `n_classes >= 3`

, it uses the multi-class log loss function,
with multinomial deviance and categorical cross-entropy as alternative names.
The appropriate loss version is selected based on [y](../glossary.html#term-y) passed to
[fit](../glossary.html#term-fit).

The size of the trees can be controlled through the `max_leaf_nodes`

,
`max_depth`

, and `min_samples_leaf`

parameters.

The number of bins used to bin the data is controlled with the `max_bins`

parameter. Using less bins acts as a form of regularization. It is generally
recommended to use as many bins as possible (255), which is the default.

The `l2_regularization`

parameter acts as a regularizer for the loss function,
and corresponds to \(\lambda\) in the following expression (see equation (2)
in [[XGBoost]](#xgboost)):

##
Details on l2 regularization[#](#details-on-l2-regularization)

It is important to notice that the loss term \(l(\hat{y}_i, y_i)\) describes only half of the actual loss function except for the pinball loss and absolute error.

The index \(k\) refers to the k-th tree in the ensemble of trees. In the
case of regression and binary classification, gradient boosting models grow one
tree per iteration, then \(k\) runs up to `max_iter`

. In the case of
multiclass classification problems, the maximal value of the index \(k\) is
`n_classes`

\(\times\) `max_iter`

.

If \(T_k\) denotes the number of leaves in the k-th tree, then \(w_k\)
is a vector of length \(T_k\), which contains the leaf values of the form ```
w
= -sum_gradient / (sum_hessian + l2_regularization)
```

(see equation (5) in
[[XGBoost]](#xgboost)).

The leaf values \(w_k\) are derived by dividing the sum of the gradients of
the loss function by the combined sum of hessians. Adding the regularization to
the denominator penalizes the leaves with small hessians (flat regions),
resulting in smaller updates. Those \(w_k\) values contribute then to the
model’s prediction for a given input that ends up in the corresponding leaf. The
final prediction is the sum of the base prediction and the contributions from
each tree. The result of that sum is then transformed by the inverse link
function depending on the choice of the loss function (see
[Mathematical formulation](#gradient-boosting-formulation)).

Notice that the original paper [[XGBoost]](#xgboost) introduces a term \(\gamma\sum_k
T_k\) that penalizes the number of leaves (making it a smooth version of
`max_leaf_nodes`

) not presented here as it is not implemented in scikit-learn;
whereas \(\lambda\) penalizes the magnitude of the individual tree
predictions before being rescaled by the learning rate, see
[Shrinkage via learning rate](#gradient-boosting-shrinkage).

Note that **early-stopping is enabled by default if the number of samples is
larger than 10,000**. The early-stopping behaviour is controlled via the
`early_stopping`

, `scoring`

, `validation_fraction`

,
`n_iter_no_change`

, and `tol`

parameters. It is possible to early-stop
using an arbitrary [scorer](../glossary.html#term-scorer), or just the training or validation loss.
Note that for technical reasons, using a callable as a scorer is significantly slower
than using the loss. By default, early-stopping is performed if there are at least
10,000 samples in the training set, using the validation loss.

#### 1.11.1.1.2. Missing values support[#](#missing-values-support)

[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[have built-in support for missing values (NaNs).](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently:

```
>>> from sklearn.ensemble import HistGradientBoostingClassifier
>>> import numpy as np
>>> X = np.array([0, 1, 2, np.nan]).reshape(-1, 1)
>>> y = [0, 0, 1, 1]
>>> gbdt = HistGradientBoostingClassifier(min_samples_leaf=1).fit(X, y)
>>> gbdt.predict(X)
array([0, 0, 1, 1])
```

When the missingness pattern is predictive, the splits can be performed on whether the feature value is missing or not:

```
>>> X = np.array([0, np.nan, 1, 2, np.nan]).reshape(-1, 1)
>>> y = [0, 1, 0, 0, 1]
>>> gbdt = HistGradientBoostingClassifier(min_samples_leaf=1,
... max_depth=2,
... learning_rate=1,
... max_iter=1).fit(X, y)
>>> gbdt.predict(X)
array([0, 1, 0, 0, 1])
```

If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

Examples

#### 1.11.1.1.3. Sample weight support[#](#sample-weight-support)

[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[support sample weights during](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

[fit](../glossary.html#term-fit).

The following toy example demonstrates that samples with a sample weight of zero are ignored:

```
>>> X = [[1, 0],
... [1, 0],
... [1, 0],
... [0, 1]]
>>> y = [0, 0, 1, 0]
>>> # ignore the first 2 training samples by setting their weight to 0
>>> sample_weight = [0, 0, 1, 1]
>>> gb = HistGradientBoostingClassifier(min_samples_leaf=1)
>>> gb.fit(X, y, sample_weight=sample_weight)
HistGradientBoostingClassifier(...)
>>> gb.predict([[1, 0]])
array([1])
>>> gb.predict_proba([[1, 0]])[0, 1]
np.float64(0.999)
```

As you can see, the `[1, 0]`

is comfortably classified as `1`

since the first
two samples are ignored due to their sample weights.

Implementation detail: taking sample weights into account amounts to multiplying the gradients (and the hessians) by the sample weights. Note that the binning stage (specifically the quantiles computation) does not take the weights into account.

#### 1.11.1.1.4. Categorical Features Support[#](#categorical-features-support)

[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[have native support for categorical features: they can consider splits on non-ordered, categorical data.](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

For datasets with categorical features, using the native categorical support
is often better than relying on one-hot encoding
([ OneHotEncoder](generated/sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder)), because one-hot encoding
requires more tree depth to achieve equivalent splits. It is also usually
better to rely on the native categorical support rather than to treat
categorical features as continuous (ordinal), which happens for ordinal-encoded
categorical data, since categories are nominal quantities where order does not
matter.

To enable categorical support, a boolean mask can be passed to the
`categorical_features`

parameter, indicating which feature is categorical. In
the following, the first feature will be treated as categorical and the
second feature as numerical:

```
>>> gbdt = HistGradientBoostingClassifier(categorical_features=[True, False])
```

Equivalently, one can pass a list of integers indicating the indices of the categorical features:

```
>>> gbdt = HistGradientBoostingClassifier(categorical_features=[0])
```

When the input is a DataFrame, it is also possible to pass a list of column names:

```
>>> gbdt = HistGradientBoostingClassifier(categorical_features=["site", "manufacturer"])
```

Finally, when the input is a DataFrame we can use
`categorical_features="from_dtype"`

in which case all columns with a categorical
`dtype`

will be treated as categorical features.

The cardinality of each categorical feature must be less than the `max_bins`

parameter. For an example using histogram-based gradient boosting on categorical
features, see
[Categorical Feature Support in Gradient Boosting](../auto_examples/ensemble/plot_gradient_boosting_categorical.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-categorical-py).

If there are missing values during training, the missing values will be treated as a proper category. If there are no missing values during training, then at prediction time, missing values are mapped to the child node that has the most samples (just like for continuous features). When predicting, categories that were not seen during fit time will be treated as missing values.

##
Split finding with categorical features[#](#split-finding-with-categorical-features)

The canonical way of considering categorical splits in a tree is to consider
all of the \(2^{K - 1} - 1\) partitions, where \(K\) is the number of
categories. This can quickly become prohibitive when \(K\) is large.
Fortunately, since gradient boosting trees are always regression trees (even
for classification problems), there exists a faster strategy that can yield
equivalent splits. First, the categories of a feature are sorted according to
the variance of the target, for each category `k`

. Once the categories are
sorted, one can consider *continuous partitions*, i.e. treat the categories
as if they were ordered continuous values (see Fisher [[Fisher1958]](#fisher1958) for a
formal proof). As a result, only \(K - 1\) splits need to be considered
instead of \(2^{K - 1} - 1\). The initial sorting is a
\(\mathcal{O}(K \log(K))\) operation, leading to a total complexity of
\(\mathcal{O}(K \log(K) + K)\), instead of \(\mathcal{O}(2^K)\).

Examples

#### 1.11.1.1.5. Monotonic Constraints[#](#monotonic-constraints)

Depending on the problem at hand, you may have prior knowledge indicating that a given feature should in general have a positive (or negative) effect on the target value. For example, all else being equal, a higher credit score should increase the probability of getting approved for a loan. Monotonic constraints allow you to incorporate such prior knowledge into the model.

For a predictor \(F\) with two features:

a

**monotonic increase constraint**is a constraint of the form:\[x_1 \leq x_1' \implies F(x_1, x_2) \leq F(x_1', x_2)\]a

**monotonic decrease constraint**is a constraint of the form:\[x_1 \leq x_1' \implies F(x_1, x_2) \geq F(x_1', x_2)\]

You can specify a monotonic constraint on each feature using the
`monotonic_cst`

parameter. For each feature, a value of 0 indicates no
constraint, while 1 and -1 indicate a monotonic increase and
monotonic decrease constraint, respectively:

```
>>> from sklearn.ensemble import HistGradientBoostingRegressor
... # monotonic increase, monotonic decrease, and no constraint on the 3 features
>>> gbdt = HistGradientBoostingRegressor(monotonic_cst=[1, -1, 0])
```

In a binary classification context, imposing a monotonic increase (decrease) constraint means that higher values of the feature are supposed to have a positive (negative) effect on the probability of samples to belong to the positive class.

Nevertheless, monotonic constraints only marginally constrain feature effects on the output. For instance, monotonic increase and decrease constraints cannot be used to enforce the following modelling constraint:

Also, monotonic constraints are not supported for multiclass classification.

For a practical implementation of monotonic constraints with the histogram-based
gradient boosting, including how they can improve generalization when domain knowledge
is available, see
[Monotonic Constraints](../auto_examples/ensemble/plot_monotonic_constraints.html#sphx-glr-auto-examples-ensemble-plot-monotonic-constraints-py).

Note

Since categories are unordered quantities, it is not possible to enforce monotonic constraints on categorical features.

Examples

#### 1.11.1.1.6. Interaction constraints[#](#interaction-constraints)

A priori, the histogram gradient boosted trees are allowed to use any feature
to split a node into child nodes. This creates so called interactions between
features, i.e. usage of different features as split along a branch. Sometimes,
one wants to restrict the possible interactions, see [[Mayer2022]](#mayer2022). This can be
done by the parameter `interaction_cst`

, where one can specify the indices
of features that are allowed to interact.
For instance, with 3 features in total, `interaction_cst=[{0}, {1}, {2}]`

forbids all interactions.
The constraints `[{0, 1}, {1, 2}]`

specify two groups of possibly
interacting features. Features 0 and 1 may interact with each other, as well
as features 1 and 2. But note that features 0 and 2 are forbidden to interact.
The following depicts a tree and the possible splits of the tree:

```
1 <- Both constraint groups could be applied from now on
/ \
1 2 <- Left split still fulfills both constraint groups.
/ \ / \ Right split at feature 2 has only group {1, 2} from now on.
```

LightGBM uses the same logic for overlapping groups.

Note that features not listed in `interaction_cst`

are automatically
assigned an interaction group for themselves. With again 3 features, this
means that `[{0}]`

is equivalent to `[{0}, {1, 2}]`

.

Examples

References

[Mayer2022](#id8)]

M. Mayer, S.C. Bourassa, M. Hoesli, and D.F. Scognamiglio.
2022. [Machine Learning Applications to Land and Structure Valuation](https://doi.org/10.3390/jrfm15050193).
Journal of Risk and Financial Management 15, no. 5: 193

#### 1.11.1.1.7. Low-level parallelism[#](#low-level-parallelism)

[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[use OpenMP for parallelization through Cython. For more details on how to control the number of threads, please refer to our](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

[Parallelism](../computing/parallelism.html#parallelism)notes.

The following parts are parallelized:

mapping samples from real values to integer-valued bins (finding the bin thresholds is however sequential)

building histograms is parallelized over features

finding the best split point at a node is parallelized over features

during fit, mapping samples into the left and right children is parallelized over samples

gradient and hessians computations are parallelized over samples

predicting is parallelized over samples


#### 1.11.1.1.8. Why it’s faster[#](#why-it-s-faster)

The bottleneck of a gradient boosting procedure is building the decision
trees. Building a traditional decision tree (as in the other GBDTs
[ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[) requires sorting the samples at each node (for each feature). Sorting is needed so that the potential gain of a split point can be computed efficiently. Splitting a single node has thus a complexity of \(\mathcal{O}(n_\text{features} \times n \log(n))\) where \(n\) is the number of samples at the node.](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[, in contrast, do not require sorting the feature values and instead use a data-structure called a histogram, where the samples are implicitly ordered. Building a histogram has a \(\mathcal{O}(n)\) complexity, so the node splitting procedure has a \(\mathcal{O}(n_\text{features} \times n)\) complexity, much smaller than the previous one. In addition, instead of considering \(n\) split points, we consider only](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

`max_bins`

split points, which might be much
smaller.In order to build histograms, the input data `X`

needs to be binned into
integer-valued bins. This binning procedure does require sorting the feature
values, but it only happens once at the very beginning of the boosting process
(not at each node, like in [ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[).](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

Finally, many parts of the implementation of
[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) and

[are parallelized.](generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor)

`HistGradientBoostingRegressor`

References

[Fisher1958](#id7)]

Fisher, W.D. (1958). [“On Grouping for Maximum Homogeneity”](http://csiss.ncgia.ucsb.edu/SPACE/workshops/2004/SAC/files/fisher.pdf)
Journal of the American Statistical Association, 53, 789-798.

### 1.11.1.2. `GradientBoostingClassifier`

and `GradientBoostingRegressor`

[#](#gradientboostingclassifier-and-gradientboostingregressor)

`GradientBoostingClassifier`

`GradientBoostingRegressor`

The usage and the parameters of [ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) and

[are described below. The 2 most important parameters of these estimators are](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)

`GradientBoostingRegressor`

`n_estimators`

and `learning_rate`

.##
Classification[#](#classification)

[ GradientBoostingClassifier](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier) supports both binary and multi-class
classification.
The following example shows how to fit a gradient boosting classifier
with 100 decision stumps as weak learners:

```
>>> from sklearn.datasets import make_hastie_10_2
>>> from sklearn.ensemble import GradientBoostingClassifier
>>> X, y = make_hastie_10_2(random_state=0)
>>> X_train, X_test = X[:2000], X[2000:]
>>> y_train, y_test = y[:2000], y[2000:]
>>> clf = GradientBoostingClassifier(n_estimators=100, learning_rate=1.0,
... max_depth=1, random_state=0).fit(X_train, y_train)
>>> clf.score(X_test, y_test)
0.913
```

The number of weak learners (i.e. regression trees) is controlled by the
parameter `n_estimators`

; [The size of each tree](#gradient-boosting-tree-size) can be controlled either by setting the tree
depth via `max_depth`

or by setting the number of leaf nodes via
`max_leaf_nodes`

. The `learning_rate`

is a hyper-parameter in the range
(0.0, 1.0] that controls overfitting via [shrinkage](#gradient-boosting-shrinkage) .

Note

Classification with more than 2 classes requires the induction
of `n_classes`

regression trees at each iteration,
thus, the total number of induced trees equals
`n_classes * n_estimators`

. For datasets with a large number
of classes we strongly recommend to use
[ HistGradientBoostingClassifier](generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier) as an alternative to

[.](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier)

`GradientBoostingClassifier`

##
Regression[#](#regression)

[ GradientBoostingRegressor](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor) supports a number of

[different loss functions](#gradient-boosting-loss)for regression which can be specified via the argument

`loss`

; the default loss function for regression is squared error
(`'squared_error'`

).```
>>> import numpy as np
>>> from sklearn.metrics import mean_squared_error
>>> from sklearn.datasets import make_friedman1
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> X, y = make_friedman1(n_samples=1200, random_state=0, noise=1.0)
>>> X_train, X_test = X[:200], X[200:]
>>> y_train, y_test = y[:200], y[200:]
>>> est = GradientBoostingRegressor(
... n_estimators=100, learning_rate=0.1, max_depth=1, random_state=0,
... loss='squared_error'
... ).fit(X_train, y_train)
>>> mean_squared_error(y_test, est.predict(X_test))
5.00
```

The figure below shows the results of applying [ GradientBoostingRegressor](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor)
with least squares loss and 500 base learners to the diabetes dataset
(

[). The plot shows the train and test error at each iteration. The train error at each iteration is stored in the](generated/sklearn.datasets.load_diabetes.html#sklearn.datasets.load_diabetes)

`sklearn.datasets.load_diabetes`

`train_score_`

attribute of the gradient boosting model.
The test error at each iteration can be obtained
via the [method which returns a generator that yields the predictions at each stage. Plots like these can be used to determine the optimal number of trees (i.e.](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor.staged_predict)

`staged_predict`

`n_estimators`

) by early stopping.Examples

#### 1.11.1.2.1. Fitting additional weak-learners[#](#fitting-additional-weak-learners)

Both [ GradientBoostingRegressor](generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor) and

[support](generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier)

`GradientBoostingClassifier`

`warm_start=True`

which allows you to add more estimators to an already
fitted model.```
>>> import numpy as np
>>> from sklearn.metrics import mean_squared_error
>>> from sklearn.datasets import make_friedman1
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> X, y = make_friedman1(n_samples=1200, random_state=0, noise=1.0)
>>> X_train, X_test = X[:200], X[200:]
>>> y_train, y_test = y[:200], y[200:]
>>> est = GradientBoostingRegressor(
... n_estimators=100, learning_rate=0.1, max_depth=1, random_state=0,
... loss='squared_error'
... )
>>> est = est.fit(X_train, y_train) # fit with 100 trees
>>> mean_squared_error(y_test, est.predict(X_test))
5.00
>>> _ = est.set_params(n_estimators=200, warm_start=True) # set warm_start and increase num of trees
>>> _ = est.fit(X_train, y_train) # fit additional 100 trees to est
>>> mean_squared_error(y_test, est.predict(X_test))
3.84
```

#### 1.11.1.2.2. Controlling the tree size[#](#controlling-the-tree-size)

The size of the regression tree base learners defines the level of variable
interactions that can be captured by the gradient boosting model. In general,
a tree of depth `h`

can capture interactions of order `h`

.
There are two ways in which the size of the individual regression trees can
be controlled.

If you specify `max_depth=h`

then complete binary trees
of depth `h`

will be grown. Such trees will have (at most) `2**h`

leaf nodes
and `2**h - 1`

split nodes.

Alternatively, you can control the tree size by specifying the number of
leaf nodes via the parameter `max_leaf_nodes`

. In this case,
trees will be grown using best-first search where nodes with the highest improvement
in impurity will be expanded first.
A tree with `max_leaf_nodes=k`

has `k - 1`

split nodes and thus can
model interactions of up to order `max_leaf_nodes - 1`

.

We found that `max_leaf_nodes=k`

gives comparable results to `max_depth=k-1`

but is significantly faster to train at the expense of a slightly higher
training error.
The parameter `max_leaf_nodes`

corresponds to the variable `J`

in the
chapter on gradient boosting in [[Friedman2001]](#friedman2001) and is related to the parameter
`interaction.depth`

in R’s gbm package where `max_leaf_nodes == interaction.depth + 1`

.

#### 1.11.1.2.3. Mathematical formulation[#](#mathematical-formulation)

We first present GBRT for regression, and then detail the classification case.

##
Regression[#](#regression-2)

GBRT regressors are additive models whose prediction \(\hat{y}_i\) for a given input \(x_i\) is of the following form:

where the \(h_m\) are estimators called *weak learners* in the context
of boosting. Gradient Tree Boosting uses [decision tree regressors](tree.html#tree) of fixed size as weak learners. The constant M corresponds to the
`n_estimators`

parameter.

Similar to other boosting algorithms, a GBRT is built in a greedy fashion:

where the newly added tree \(h_m\) is fitted in order to minimize a sum of losses \(L_m\), given the previous ensemble \(F_{m-1}\):

where \(l(y_i, F(x_i))\) is defined by the `loss`

parameter, detailed
in the next section.

By default, the initial model \(F_{0}\) is chosen as the constant that
minimizes the loss: for a least-squares loss, this is the empirical mean of
the target values. The initial model can also be specified via the `init`

argument.

Using a first-order Taylor approximation, the value of \(l\) can be approximated as follows:

Note

Briefly, a first-order Taylor approximation says that \(l(z) \approx l(a) + (z - a) \frac{\partial l}{\partial z}(a)\). Here, \(z\) corresponds to \(F_{m - 1}(x_i) + h_m(x_i)\), and \(a\) corresponds to \(F_{m-1}(x_i)\)

The quantity \(\left[ \frac{\partial l(y_i, F(x_i))}{\partial F(x_i)} \right]_{F=F_{m - 1}}\) is the derivative of the loss with respect to its second parameter, evaluated at \(F_{m-1}(x)\). It is easy to compute for any given \(F_{m - 1}(x_i)\) in a closed form since the loss is differentiable. We will denote it by \(g_i\).

Removing the constant terms, we have:

This is minimized if \(h(x_i)\) is fitted to predict a value that is
proportional to the negative gradient \(-g_i\). Therefore, at each
iteration, **the estimator** \(h_m\) **is fitted to predict the negative
gradients of the samples**. The gradients are updated at each iteration.
This can be considered as some kind of gradient descent in a functional
space.

Note

For some losses, e.g. `'absolute_error'`

where the gradients
are \(\pm 1\), the values predicted by a fitted \(h_m\) are not
accurate enough: the tree can only output integer values. As a result, the
leaves values of the tree \(h_m\) are modified once the tree is
fitted, such that the leaves values minimize the loss \(L_m\). The
update is loss-dependent: for the absolute error loss, the value of
a leaf is updated to the median of the samples in that leaf.

##
Classification[#](#classification-2)

Gradient boosting for classification is very similar to the regression case. However, the sum of the trees \(F_M(x_i) = \sum_m h_m(x_i)\) is not homogeneous to a prediction: it cannot be a class, since the trees predict continuous values.

The mapping from the value \(F_M(x_i)\) to a class or a probability is loss-dependent. For the log-loss, the probability that \(x_i\) belongs to the positive class is modeled as \(p(y_i = 1 | x_i) = \sigma(F_M(x_i))\) where \(\sigma\) is the sigmoid or expit function.

For multiclass classification, K trees (for K classes) are built at each of the \(M\) iterations. The probability that \(x_i\) belongs to class k is modeled as a softmax of the \(F_{M,k}(x_i)\) values.

Note that even for a classification task, the \(h_m\) sub-estimator is
still a regressor, not a classifier. This is because the sub-estimators are
trained to predict (negative) *gradients*, which are always continuous
quantities.

#### 1.11.1.2.4. Loss Functions[#](#loss-functions)

The following loss functions are supported and can be specified using
the parameter `loss`

:

##
Regression[#](#regression-3)

Squared error (

`'squared_error'`

): The natural choice for regression due to its superior computational properties. The initial model is given by the mean of the target values.Absolute error (

`'absolute_error'`

): A robust loss function for regression. The initial model is given by the median of the target values.Huber (

`'huber'`

): Another robust loss function that combines least squares and least absolute deviation; use`alpha`

to control the sensitivity with regards to outliers (see[[Friedman2001]](#friedman2001)for more details).Quantile (

`'quantile'`

): A loss function for quantile regression. Use`0 < alpha < 1`

to specify the quantile. This loss function can be used to create prediction intervals (see[Prediction Intervals for Gradient Boosting Regression](../auto_examples/ensemble/plot_gradient_boosting_quantile.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-quantile-py)).

##
Classification[#](#classification-3)

Binary log-loss (

`'log-loss'`

): The binomial negative log-likelihood loss function for binary classification. It provides probability estimates. The initial model is given by the log odds-ratio.Multi-class log-loss (

`'log-loss'`

): The multinomial negative log-likelihood loss function for multi-class classification with`n_classes`

mutually exclusive classes. It provides probability estimates. The initial model is given by the prior probability of each class. At each iteration`n_classes`

regression trees have to be constructed which makes GBRT rather inefficient for data sets with a large number of classes.Exponential loss (

`'exponential'`

): The same loss function as. Less robust to mislabeled examples than`AdaBoostClassifier`

`'log-loss'`

; can only be used for binary classification.

#### 1.11.1.2.5. Shrinkage via learning rate[#](#shrinkage-via-learning-rate)

[[Friedman2001]](#friedman2001) proposed a simple regularization strategy that scales
the contribution of each weak learner by a constant factor \(\nu\):

The parameter \(\nu\) is also called the **learning rate** because
it scales the step length of the gradient descent procedure; it can
be set via the `learning_rate`

parameter.

The parameter `learning_rate`

strongly interacts with the parameter
`n_estimators`

, the number of weak learners to fit. Smaller values
of `learning_rate`

require larger numbers of weak learners to maintain
a constant training error. Empirical evidence suggests that small
values of `learning_rate`

favor better test error. [[HTF]](#htf)
recommend to set the learning rate to a small constant
(e.g. `learning_rate <= 0.1`

) and choose `n_estimators`

large enough
that early stopping applies,
see [Early stopping in Gradient Boosting](../auto_examples/ensemble/plot_gradient_boosting_early_stopping.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-early-stopping-py)
for a more detailed discussion of the interaction between
`learning_rate`

and `n_estimators`

see [[R2007]](#r2007).

#### 1.11.1.2.6. Subsampling[#](#subsampling)

[[Friedman2002]](#friedman2002) proposed stochastic gradient boosting, which combines gradient
boosting with bootstrap averaging (bagging). At each iteration
the base classifier is trained on a fraction `subsample`

of
the available training data. The subsample is drawn without replacement.
A typical value of `subsample`

is 0.5.

The figure below illustrates the effect of shrinkage and subsampling on the goodness-of-fit of the model. We can clearly see that shrinkage outperforms no-shrinkage. Subsampling with shrinkage can further increase the accuracy of the model. Subsampling without shrinkage, on the other hand, does poorly.

Another strategy to reduce the variance is by subsampling the features
analogous to the random splits in [ RandomForestClassifier](generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier).
The number of subsampled features can be controlled via the

`max_features`

parameter.Note

Using a small `max_features`

value can significantly decrease the runtime.

Stochastic gradient boosting allows to compute out-of-bag estimates of the
test deviance by computing the improvement in deviance on the examples that are
not included in the bootstrap sample (i.e. the out-of-bag examples).
The improvements are stored in the attribute `oob_improvement_`

.
`oob_improvement_[i]`

holds the improvement in terms of the loss on the OOB samples
if you add the i-th stage to the current predictions.
Out-of-bag estimates can be used for model selection, for example to determine
the optimal number of iterations. OOB estimates are usually very pessimistic thus
we recommend to use cross-validation instead and only use OOB if cross-validation
is too time consuming.

Examples

#### 1.11.1.2.7. Interpretation with feature importance[#](#interpretation-with-feature-importance)

Individual decision trees can be interpreted easily by simply visualizing the tree structure. Gradient boosting models, however, comprise hundreds of regression trees thus they cannot be easily interpreted by visual inspection of the individual trees. Fortunately, a number of techniques have been proposed to summarize and interpret gradient boosting models.

Often features do not contribute equally to predict the target response; in many situations the majority of the features are in fact irrelevant. When interpreting a model, the first question usually is: what are those important features and how do they contribute in predicting the target response?

Individual decision trees intrinsically perform feature selection by selecting
appropriate split points. This information can be used to measure the
importance of each feature; the basic idea is: the more often a
feature is used in the split points of a tree the more important that
feature is. This notion of importance can be extended to decision tree
ensembles by simply averaging the impurity-based feature importance of each tree (see
[Feature importance evaluation](#random-forest-feature-importance) for more details).

The feature importance scores of a fit gradient boosting model can be
accessed via the `feature_importances_`

property:

```
>>> from sklearn.datasets import make_hastie_10_2
>>> from sklearn.ensemble import GradientBoostingClassifier
>>> X, y = make_hastie_10_2(random_state=0)
>>> clf = GradientBoostingClassifier(n_estimators=100, learning_rate=1.0,
... max_depth=1, random_state=0).fit(X, y)
>>> clf.feature_importances_
array([0.107, 0.105, 0.113, 0.0987, 0.0947,
0.107, 0.0916, 0.0972, 0.0958, 0.0906])
```

Note that this computation of feature importance is based on entropy, and it
is distinct from [ sklearn.inspection.permutation_importance](generated/sklearn.inspection.permutation_importance.html#sklearn.inspection.permutation_importance) which is
based on permutation of the features.

Examples

References

[1](#id1),

[2](#id10),

[3](#id11),

[4](#id12))

Friedman, J.H. (2001). [Greedy function approximation: A gradient
boosting machine](https://doi.org/10.1214/aos/1013203451).
Annals of Statistics, 29, 1189-1232.

[Friedman2002](#id15)]

Friedman, J.H. (2002). [Stochastic gradient boosting.](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=48caac2f65bce47f6d27400ae4f60d8395cec2f3).
Computational Statistics & Data Analysis, 38, 367-378.

[R2007](#id14)]

G. Ridgeway (2006). [Generalized Boosted Models: A guide to the gbm
package](https://cran.r-project.org/web/packages/gbm/vignettes/gbm.pdf)

## 1.11.2. Random forests and other randomized tree ensembles[#](#random-forests-and-other-randomized-tree-ensembles)

The [ sklearn.ensemble](../api/sklearn.ensemble.html#module-sklearn.ensemble) module includes two averaging algorithms based
on randomized

[decision trees](tree.html#tree): the RandomForest algorithm and the Extra-Trees method. Both algorithms are perturb-and-combine techniques

[[B1998]](#b1998)specifically designed for trees. This means a diverse set of classifiers is created by introducing randomness in the classifier construction. The prediction of the ensemble is given as the averaged prediction of the individual classifiers.

As other classifiers, forest classifiers have to be fitted with two
arrays: a sparse or dense array X of shape `(n_samples, n_features)`

holding the training samples, and an array Y of shape `(n_samples,)`

holding the target values (class labels) for the training samples:

```
>>> from sklearn.ensemble import RandomForestClassifier
>>> X = [[0, 0], [1, 1]]
>>> Y = [0, 1]
>>> clf = RandomForestClassifier(n_estimators=10)
>>> clf = clf.fit(X, Y)
```

Like [decision trees](tree.html#tree), forests of trees also extend to
[multi-output problems](tree.html#tree-multioutput) (if Y is an array
of shape `(n_samples, n_outputs)`

).

### 1.11.2.1. Random Forests[#](#random-forests)

In random forests (see [ RandomForestClassifier](generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier) and

[classes), each tree in the ensemble is built from a sample drawn with replacement (i.e., a bootstrap sample) from the training set.](generated/sklearn.ensemble.RandomForestRegressor.html#sklearn.ensemble.RandomForestRegressor)

`RandomForestRegressor`

During the construction of each tree in the forest, a random subset of the
features is considered. The size of this subset is controlled by the
`max_features`

parameter; it may include either all input features or a random
subset of them (see the [parameter tuning guidelines](#random-forest-parameters) for more details).

The purpose of these two sources of randomness (bootstrapping the samples and randomly selecting features at each split) is to decrease the variance of the forest estimator. Indeed, individual decision trees typically exhibit high variance and tend to overfit. The injected randomness in forests yield decision trees with somewhat decoupled prediction errors. By taking an average of those predictions, some errors can cancel out. Random forests achieve a reduced variance by combining diverse trees, sometimes at the cost of a slight increase in bias. In practice the variance reduction is often significant hence yielding an overall better model.

When growing each tree in the forest, the “best” split (i.e. equivalent to
passing `splitter="best"`

to the underlying decision trees) is chosen according
to the impurity criterion. See the [CART mathematical formulation](tree.html#tree-mathematical-formulation) for more details.

In contrast to the original publication [[B2001]](#b2001), the scikit-learn
implementation combines classifiers by averaging their probabilistic
prediction, instead of letting each classifier vote for a single class.

A competitive alternative to random forests are
[Histogram-Based Gradient Boosting](#histogram-based-gradient-boosting) (HGBT) models:

Building trees: Random forests typically rely on deep trees (that overfit individually) which uses much computational resources, as they require several splittings and evaluations of candidate splits. Boosting models build shallow trees (that underfit individually) which are faster to fit and predict.

Sequential boosting: In HGBT, the decision trees are built sequentially, where each tree is trained to correct the errors made by the previous ones. This allows them to iteratively improve the model’s performance using relatively few trees. In contrast, random forests use a majority vote to predict the outcome, which can require a larger number of trees to achieve the same level of accuracy.

Efficient binning: HGBT uses an efficient binning algorithm that can handle large datasets with a high number of features. The binning algorithm can pre-process the data to speed up the subsequent tree construction (see

[Why it’s faster](#why-it-s-faster)). In contrast, the scikit-learn implementation of random forests does not use binning and relies on exact splitting, which can be computationally expensive.

Overall, the computational cost of HGBT versus RF depends on the specific characteristics of the dataset and the modeling task. It’s a good idea to try both models and compare their performance and computational efficiency on your specific problem to determine which model is the best fit.

Examples

### 1.11.2.2. Extremely Randomized Trees[#](#extremely-randomized-trees)

In extremely randomized trees (see [ ExtraTreesClassifier](generated/sklearn.ensemble.ExtraTreesClassifier.html#sklearn.ensemble.ExtraTreesClassifier)
and

[classes), randomness goes one step further in the way splits are computed. As in random forests, a random subset of candidate features is used, but instead of looking for the most discriminative thresholds, thresholds are drawn at random for each candidate feature and the best of these randomly-generated thresholds is picked as the splitting rule. This usually allows to reduce the variance of the model a bit more, at the expense of a slightly greater increase in bias:](generated/sklearn.ensemble.ExtraTreesRegressor.html#sklearn.ensemble.ExtraTreesRegressor)

`ExtraTreesRegressor`

```
>>> from sklearn.model_selection import cross_val_score
>>> from sklearn.datasets import make_blobs
>>> from sklearn.ensemble import RandomForestClassifier
>>> from sklearn.ensemble import ExtraTreesClassifier
>>> from sklearn.tree import DecisionTreeClassifier
>>> X, y = make_blobs(n_samples=10000, n_features=10, centers=100,
... random_state=0)
>>> clf = DecisionTreeClassifier(max_depth=None, min_samples_split=2,
... random_state=0)
>>> scores = cross_val_score(clf, X, y, cv=5)
>>> scores.mean()
np.float64(0.98)
>>> clf = RandomForestClassifier(n_estimators=10, max_depth=None,
... min_samples_split=2, random_state=0)
>>> scores = cross_val_score(clf, X, y, cv=5)
>>> scores.mean()
np.float64(0.999)
>>> clf = ExtraTreesClassifier(n_estimators=10, max_depth=None,
... min_samples_split=2, random_state=0)
>>> scores = cross_val_score(clf, X, y, cv=5)
>>> scores.mean() > 0.999
np.True_
```

### 1.11.2.3. Parameters[#](#parameters)

The main parameters to adjust when using these methods is `n_estimators`

and
`max_features`

. The former is the number of trees in the forest. The larger
the better, but also the longer it will take to compute. In addition, note that
results will stop getting significantly better beyond a critical number of
trees. The latter is the size of the random subsets of features to consider
when splitting a node. The lower the greater the reduction of variance, but
also the greater the increase in bias. Empirical good default values are
`max_features=1.0`

or equivalently `max_features=None`

(always considering
all features instead of a random subset) for regression problems, and
`max_features="sqrt"`

(using a random subset of size `sqrt(n_features)`

)
for classification tasks (where `n_features`

is the number of features in
the data). The default value of `max_features=1.0`

is equivalent to bagged
trees and more randomness can be achieved by setting smaller values (e.g. 0.3
is a typical default in the literature). Good results are often achieved when
setting `max_depth=None`

in combination with `min_samples_split=2`

(i.e.,
when fully developing the trees). Bear in mind though that these values are
usually not optimal, and might result in models that consume a lot of RAM.
The best parameter values should always be cross-validated. In addition, note
that in random forests, bootstrap samples are used by default
(`bootstrap=True`

) while the default strategy for extra-trees is to use the
whole dataset (`bootstrap=False`

). When using bootstrap sampling the
generalization error can be estimated on the left out or out-of-bag samples.
This can be enabled by setting `oob_score=True`

.

Note

The size of the model with the default parameters is \(O( M * N * log (N) )\),
where \(M\) is the number of trees and \(N\) is the number of samples.
In order to reduce the size of the model, you can change these parameters:
`min_samples_split`

, `max_leaf_nodes`

, `max_depth`

and `min_samples_leaf`

.

### 1.11.2.4. Parallelization[#](#parallelization)

Finally, this module also features the parallel construction of the trees
and the parallel computation of the predictions through the `n_jobs`

parameter. If `n_jobs=k`

then computations are partitioned into
`k`

jobs, and run on `k`

cores of the machine. If `n_jobs=-1`

then all cores available on the machine are used. Note that because of
inter-process communication overhead, the speedup might not be linear
(i.e., using `k`

jobs will unfortunately not be `k`

times as
fast). Significant speedup can still be achieved though when building
a large number of trees, or when building a single tree requires a fair
amount of time (e.g., on large datasets).

Examples

References

[B2001](#id17)]

Breiman, “Random Forests”, Machine Learning, 45(1), 5-32, 2001.


[B1998](#id16)]

Breiman, “Arcing Classifiers”, Annals of Statistics 1998.


P. Geurts, D. Ernst., and L. Wehenkel, “Extremely randomized trees”, Machine Learning, 63(1), 3-42, 2006.


### 1.11.2.5. Feature importance evaluation[#](#feature-importance-evaluation)

The relative rank (i.e. depth) of a feature used as a decision node in a
tree can be used to assess the relative importance of that feature with
respect to the predictability of the target variable. Features used at
the top of the tree contribute to the final prediction decision of a
larger fraction of the input samples. The **expected fraction of the
samples** they contribute to can thus be used as an estimate of the
**relative importance of the features**. In scikit-learn, the fraction of
samples a feature contributes to is combined with the decrease in impurity
from splitting them to create a normalized estimate of the predictive power
of that feature.

By **averaging** the estimates of predictive ability over several randomized
trees one can **reduce the variance** of such an estimate and use it
for feature selection. This is known as the mean decrease in impurity, or MDI.
Refer to [[L2014]](#l2014) for more information on MDI and feature importance
evaluation with Random Forests.

Warning

The impurity-based feature importances computed on tree-based models suffer
from two flaws that can lead to misleading conclusions. First they are
computed on statistics derived from the training dataset and therefore **do
not necessarily inform us on which features are most important to make good
predictions on held-out dataset**. Secondly, **they favor high cardinality
features**, that is features with many unique values.
[Permutation feature importance](permutation_importance.html#permutation-importance) is an alternative to impurity-based feature
importance that does not suffer from these flaws. These two methods of
obtaining feature importance are explored in:
[Permutation Importance vs Random Forest Feature Importance (MDI)](../auto_examples/inspection/plot_permutation_importance.html#sphx-glr-auto-examples-inspection-plot-permutation-importance-py).

In practice those estimates are stored as an attribute named
`feature_importances_`

on the fitted model. This is an array with shape
`(n_features,)`

whose values are positive and sum to 1.0. The higher
the value, the more important is the contribution of the matching feature
to the prediction function.

Examples

References

[L2014](#id18)]

G. Louppe, [“Understanding Random Forests: From Theory to
Practice”](https://arxiv.org/abs/1407.7502),
PhD Thesis, U. of Liege, 2014.

### 1.11.2.6. Totally Random Trees Embedding[#](#totally-random-trees-embedding)

[ RandomTreesEmbedding](generated/sklearn.ensemble.RandomTreesEmbedding.html#sklearn.ensemble.RandomTreesEmbedding) implements an unsupervised transformation of the
data. Using a forest of completely random trees,

[encodes the data by the indices of the leaves a data point ends up in. This index is then encoded in a one-of-K manner, leading to a high dimensional, sparse binary coding. This coding can be computed very efficiently and can then be used as a basis for other learning tasks. The size and sparsity of the code can be influenced by choosing the number of trees and the maximum depth per tree. For each tree in the ensemble, the coding contains one entry of one. The size of the coding is at most](generated/sklearn.ensemble.RandomTreesEmbedding.html#sklearn.ensemble.RandomTreesEmbedding)

`RandomTreesEmbedding`

```
n_estimators * 2
** max_depth
```

, the maximum number of leaves in the forest.As neighboring data points are more likely to lie within the same leaf of a tree, the transformation performs an implicit, non-parametric density estimation.

Examples

[Manifold learning on handwritten digits: Locally Linear Embedding, Isomap…](../auto_examples/manifold/plot_lle_digits.html#sphx-glr-auto-examples-manifold-plot-lle-digits-py)compares non-linear dimensionality reduction techniques on handwritten digits.[Feature transformations with ensembles of trees](../auto_examples/ensemble/plot_feature_transformation.html#sphx-glr-auto-examples-ensemble-plot-feature-transformation-py)compares supervised and unsupervised tree based feature transformations.

See also

[Manifold learning](manifold.html#manifold) techniques can also be useful to derive non-linear
representations of feature space, also these approaches focus also on
dimensionality reduction.

### 1.11.2.7. Fitting additional trees[#](#fitting-additional-trees)

RandomForest, Extra-Trees and [ RandomTreesEmbedding](generated/sklearn.ensemble.RandomTreesEmbedding.html#sklearn.ensemble.RandomTreesEmbedding) estimators all support

`warm_start=True`

which allows you to add more trees to an already fitted model.```
>>> from sklearn.datasets import make_classification
>>> from sklearn.ensemble import RandomForestClassifier
>>> X, y = make_classification(n_samples=100, random_state=1)
>>> clf = RandomForestClassifier(n_estimators=10)
>>> clf = clf.fit(X, y) # fit with 10 trees
>>> len(clf.estimators_)
10
>>> # set warm_start and increase num of estimators
>>> _ = clf.set_params(n_estimators=20, warm_start=True)
>>> _ = clf.fit(X, y) # fit additional 10 trees
>>> len(clf.estimators_)
20
```

When `random_state`

is also set, the internal random state is also preserved
between `fit`

calls. This means that training a model once with `n`

estimators is
the same as building the model iteratively via multiple `fit`

calls, where the
final number of estimators is equal to `n`

.

```
>>> clf = RandomForestClassifier(n_estimators=20) # set `n_estimators` to 10 + 10
>>> _ = clf.fit(X, y) # fit `estimators_` will be the same as `clf` above
```

Note that this differs from the usual behavior of [random_state](../glossary.html#term-random_state) in that it does
*not* result in the same result across different calls.

## 1.11.3. Bagging meta-estimator[#](#bagging-meta-estimator)

In ensemble algorithms, bagging methods form a class of algorithms which build several instances of a black-box estimator on random subsets of the original training set and then aggregate their individual predictions to form a final prediction. These methods are used as a way to reduce the variance of a base estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it. In many cases, bagging methods constitute a very simple way to improve with respect to a single model, without making it necessary to adapt the underlying base algorithm. As they provide a way to reduce overfitting, bagging methods work best with strong and complex models (e.g., fully developed decision trees), in contrast with boosting methods which usually work best with weak models (e.g., shallow decision trees).

Bagging methods come in many flavours but mostly differ from each other by the way they draw random subsets of the training set:

When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting

[[B1999]](#b1999).When samples are drawn with replacement, then the method is known as Bagging

[[B1996]](#b1996).When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces

[[H1998]](#h1998).Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches

[[LG2012]](#lg2012).

In scikit-learn, bagging methods are offered as a unified
[ BaggingClassifier](generated/sklearn.ensemble.BaggingClassifier.html#sklearn.ensemble.BaggingClassifier) meta-estimator (resp.

[), taking as input a user-specified estimator along with parameters specifying the strategy to draw random subsets. In particular,](generated/sklearn.ensemble.BaggingRegressor.html#sklearn.ensemble.BaggingRegressor)

`BaggingRegressor`

`max_samples`

and `max_features`

control the size of the subsets (in terms of samples and
features), while `bootstrap`

and `bootstrap_features`

control whether
samples and features are drawn with or without replacement. When using a subset
of the available samples the generalization accuracy can be estimated with the
out-of-bag samples by setting `oob_score=True`

. As an example, the
snippet below illustrates how to instantiate a bagging ensemble of
[estimators, each built on random subsets of 50% of the samples and 50% of the features.](generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier)

`KNeighborsClassifier`

```
>>> from sklearn.ensemble import BaggingClassifier
>>> from sklearn.neighbors import KNeighborsClassifier
>>> bagging = BaggingClassifier(KNeighborsClassifier(),
... max_samples=0.5, max_features=0.5)
```

Examples

References

[B1999](#id19)]

L. Breiman, “Pasting small votes for classification in large databases and on-line”, Machine Learning, 36(1), 85-103, 1999.

[B1996](#id20)]

L. Breiman, “Bagging predictors”, Machine Learning, 24(2), 123-140, 1996.

[H1998](#id21)]

T. Ho, “The random subspace method for constructing decision forests”, Pattern Analysis and Machine Intelligence, 20(8), 832-844, 1998.

[LG2012](#id22)]

G. Louppe and P. Geurts, “Ensembles on Random Patches”, Machine Learning and Knowledge Discovery in Databases, 346-361, 2012.

## 1.11.4. Voting Classifier[#](#voting-classifier)

The idea behind the [ VotingClassifier](generated/sklearn.ensemble.VotingClassifier.html#sklearn.ensemble.VotingClassifier) is to combine
conceptually different machine learning classifiers and use a majority vote
or the average predicted probabilities (soft vote) to predict the class labels.
Such a classifier can be useful for a set of equally well performing models
in order to balance out their individual weaknesses.

### 1.11.4.1. Majority Class Labels (Majority/Hard Voting)[#](#majority-class-labels-majority-hard-voting)

In majority voting, the predicted class label for a particular sample is the class label that represents the majority (mode) of the class labels predicted by each individual classifier.

E.g., if the prediction for a given sample is

classifier 1 -> class 1

classifier 2 -> class 1

classifier 3 -> class 2


the VotingClassifier (with `voting='hard'`

) would classify the sample
as “class 1” based on the majority class label.

In the cases of a tie, the [ VotingClassifier](generated/sklearn.ensemble.VotingClassifier.html#sklearn.ensemble.VotingClassifier) will select the class
based on the ascending sort order. E.g., in the following scenario

classifier 1 -> class 2

classifier 2 -> class 1


the class label 1 will be assigned to the sample.

### 1.11.4.2. Usage[#](#id24)

The following example shows how to fit the majority rule classifier:

```
>>> from sklearn import datasets
>>> from sklearn.model_selection import cross_val_score
>>> from sklearn.linear_model import LogisticRegression
>>> from sklearn.naive_bayes import GaussianNB
>>> from sklearn.ensemble import RandomForestClassifier
>>> from sklearn.ensemble import VotingClassifier
>>> iris = datasets.load_iris()
>>> X, y = iris.data[:, 1:3], iris.target
>>> clf1 = LogisticRegression(random_state=1)
>>> clf2 = RandomForestClassifier(n_estimators=50, random_state=1)
>>> clf3 = GaussianNB()
>>> eclf = VotingClassifier(
... estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3)],
... voting='hard')
>>> for clf, label in zip([clf1, clf2, clf3, eclf], ['Logistic Regression', 'Random Forest', 'naive Bayes', 'Ensemble']):
... scores = cross_val_score(clf, X, y, scoring='accuracy', cv=5)
... print("Accuracy: %0.2f (+/- %0.2f) [%s]" % (scores.mean(), scores.std(), label))
Accuracy: 0.95 (+/- 0.04) [Logistic Regression]
Accuracy: 0.94 (+/- 0.04) [Random Forest]
Accuracy: 0.91 (+/- 0.04) [naive Bayes]
Accuracy: 0.95 (+/- 0.04) [Ensemble]
```

### 1.11.4.3. Weighted Average Probabilities (Soft Voting)[#](#weighted-average-probabilities-soft-voting)

In contrast to majority voting (hard voting), soft voting returns the class label as argmax of the sum of predicted probabilities.

Specific weights can be assigned to each classifier via the `weights`

parameter. When weights are provided, the predicted class probabilities
for each classifier are collected, multiplied by the classifier weight,
and averaged. The final class label is then derived from the class label
with the highest average probability.

To illustrate this with a simple example, let’s assume we have 3 classifiers and a 3-class classification problem where we assign equal weights to all classifiers: w1=1, w2=1, w3=1.

The weighted average probabilities for a sample would then be calculated as follows:

classifier |
class 1 |
class 2 |
class 3 |
|---|---|---|---|
classifier 1 |
w1 * 0.2 |
w1 * 0.5 |
w1 * 0.3 |
classifier 2 |
w2 * 0.6 |
w2 * 0.3 |
w2 * 0.1 |
classifier 3 |
w3 * 0.3 |
w3 * 0.4 |
w3 * 0.3 |
weighted average |
0.37 |
0.4 |
0.23 |

Here, the predicted class label is 2, since it has the highest average
predicted probability. See the example on
[Visualizing the probabilistic predictions of a VotingClassifier](../auto_examples/ensemble/plot_voting_decision_regions.html#sphx-glr-auto-examples-ensemble-plot-voting-decision-regions-py) for a
demonstration of how the predicted class label can be obtained from the weighted
average of predicted probabilities.

The following figure illustrates how the decision regions may change when
a soft [ VotingClassifier](generated/sklearn.ensemble.VotingClassifier.html#sklearn.ensemble.VotingClassifier) is trained with weights on three linear
models:

### 1.11.4.4. Usage[#](#id25)

In order to predict the class labels based on the predicted
class-probabilities (scikit-learn estimators in the VotingClassifier
must support `predict_proba`

method):

```
>>> eclf = VotingClassifier(
... estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3)],
... voting='soft'
... )
```

Optionally, weights can be provided for the individual classifiers:

```
>>> eclf = VotingClassifier(
... estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3)],
... voting='soft', weights=[2,5,1]
... )
```

##
Using the `VotingClassifier`

with `GridSearchCV`

[#](#using-the-votingclassifier-with-gridsearchcv)

`VotingClassifier`

`GridSearchCV`

The [ VotingClassifier](generated/sklearn.ensemble.VotingClassifier.html#sklearn.ensemble.VotingClassifier) can also be used together with

[in order to tune the hyperparameters of the individual estimators:](generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV)

`GridSearchCV`

```
>>> from sklearn.model_selection import GridSearchCV
>>> clf1 = LogisticRegression(random_state=1)
>>> clf2 = RandomForestClassifier(random_state=1)
>>> clf3 = GaussianNB()
>>> eclf = VotingClassifier(
... estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3)],
... voting='soft'
... )
>>> params = {'lr__C': [1.0, 100.0], 'rf__n_estimators': [20, 200]}
>>> grid = GridSearchCV(estimator=eclf, param_grid=params, cv=5)
>>> grid = grid.fit(iris.data, iris.target)
```

## 1.11.5. Voting Regressor[#](#voting-regressor)

The idea behind the [ VotingRegressor](generated/sklearn.ensemble.VotingRegressor.html#sklearn.ensemble.VotingRegressor) is to combine conceptually
different machine learning regressors and return the average predicted values.
Such a regressor can be useful for a set of equally well performing models
in order to balance out their individual weaknesses.

### 1.11.5.1. Usage[#](#id27)

The following example shows how to fit the VotingRegressor:

```
>>> from sklearn.datasets import load_diabetes
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> from sklearn.ensemble import RandomForestRegressor
>>> from sklearn.linear_model import LinearRegression
>>> from sklearn.ensemble import VotingRegressor
>>> # Loading some example data
>>> X, y = load_diabetes(return_X_y=True)
>>> # Training classifiers
>>> reg1 = GradientBoostingRegressor(random_state=1)
>>> reg2 = RandomForestRegressor(random_state=1)
>>> reg3 = LinearRegression()
>>> ereg = VotingRegressor(estimators=[('gb', reg1), ('rf', reg2), ('lr', reg3)])
>>> ereg = ereg.fit(X, y)
```

Examples

## 1.11.6. Stacked generalization[#](#stacked-generalization)

Stacked generalization is a method for combining estimators to reduce their
biases [[W1992]](#w1992) [[HTF]](#htf). More precisely, the predictions of each individual
estimator are stacked together and used as input to a final estimator to
compute the prediction. This final estimator is trained through
cross-validation.

The [ StackingClassifier](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier) and

[provide such strategies which can be applied to classification and regression problems.](generated/sklearn.ensemble.StackingRegressor.html#sklearn.ensemble.StackingRegressor)

`StackingRegressor`

The `estimators`

parameter corresponds to the list of the estimators which
are stacked together in parallel on the input data. It should be given as a
list of names and estimators:

```
>>> from sklearn.linear_model import RidgeCV, LassoCV
>>> from sklearn.neighbors import KNeighborsRegressor
>>> estimators = [('ridge', RidgeCV()),
... ('lasso', LassoCV(random_state=42)),
... ('knr', KNeighborsRegressor(n_neighbors=20,
... metric='euclidean'))]
```

The `final_estimator`

will use the predictions of the `estimators`

as input. It
needs to be a classifier or a regressor when using [ StackingClassifier](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier)
or

[, respectively:](generated/sklearn.ensemble.StackingRegressor.html#sklearn.ensemble.StackingRegressor)

`StackingRegressor`

```
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> from sklearn.ensemble import StackingRegressor
>>> final_estimator = GradientBoostingRegressor(
... n_estimators=25, subsample=0.5, min_samples_leaf=25, max_features=1,
... random_state=42)
>>> reg = StackingRegressor(
... estimators=estimators,
... final_estimator=final_estimator)
```

To train the `estimators`

and `final_estimator`

, the `fit`

method needs
to be called on the training data:

```
>>> from sklearn.datasets import load_diabetes
>>> X, y = load_diabetes(return_X_y=True)
>>> from sklearn.model_selection import train_test_split
>>> X_train, X_test, y_train, y_test = train_test_split(X, y,
... random_state=42)
>>> reg.fit(X_train, y_train)
StackingRegressor(...)
```

During training, the `estimators`

are fitted on the whole training data
`X_train`

. They will be used when calling `predict`

or `predict_proba`

. To
generalize and avoid over-fitting, the `final_estimator`

is trained on
out-samples using [ sklearn.model_selection.cross_val_predict](generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict) internally.

For [ StackingClassifier](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier), note that the output of the

`estimators`

is
controlled by the parameter `stack_method`

and it is called by each estimator.
This parameter is either a string, being estimator method names, or `'auto'`

which will automatically identify an available method depending on the
availability, tested in the order of preference: `predict_proba`

,
`decision_function`

and `predict`

.A [ StackingRegressor](generated/sklearn.ensemble.StackingRegressor.html#sklearn.ensemble.StackingRegressor) and

[can be used as any other regressor or classifier, exposing a](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier)

`StackingClassifier`

`predict`

, `predict_proba`

, or
`decision_function`

method, e.g.:```
>>> y_pred = reg.predict(X_test)
>>> from sklearn.metrics import r2_score
>>> print('R2 score: {:.2f}'.format(r2_score(y_test, y_pred)))
R2 score: 0.53
```

Note that it is also possible to get the output of the stacked
`estimators`

using the `transform`

method:

```
>>> reg.transform(X_test[:5])
array([[142, 138, 146],
[179, 182, 151],
[139, 132, 158],
[286, 292, 225],
[126, 124, 164]])
```

In practice, a stacking predictor predicts as good as the best predictor of the base layer and even sometimes outperforms it by combining the different strengths of these predictors. However, training a stacking predictor is computationally expensive.

Note

For [ StackingClassifier](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier), when using

`stack_method_='predict_proba'`

,
the first column is dropped when the problem is a binary classification
problem. Indeed, both probability columns predicted by each estimator are
perfectly collinear.Note

Multiple stacking layers can be achieved by assigning `final_estimator`

to
a [ StackingClassifier](generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier) or

[:](generated/sklearn.ensemble.StackingRegressor.html#sklearn.ensemble.StackingRegressor)

`StackingRegressor`

```
>>> final_layer_rfr = RandomForestRegressor(
... n_estimators=10, max_features=1, max_leaf_nodes=5,random_state=42)
>>> final_layer_gbr = GradientBoostingRegressor(
... n_estimators=10, max_features=1, max_leaf_nodes=5,random_state=42)
>>> final_layer = StackingRegressor(
... estimators=[('rf', final_layer_rfr),
... ('gbrt', final_layer_gbr)],
... final_estimator=RidgeCV()
... )
>>> multi_layer_regressor = StackingRegressor(
... estimators=[('ridge', RidgeCV()),
... ('lasso', LassoCV(random_state=42)),
... ('knr', KNeighborsRegressor(n_neighbors=20,
... metric='euclidean'))],
... final_estimator=final_layer
... )
>>> multi_layer_regressor.fit(X_train, y_train)
StackingRegressor(...)
>>> print('R2 score: {:.2f}'
... .format(multi_layer_regressor.score(X_test, y_test)))
R2 score: 0.53
```

Examples

References

[W1992](#id28)]

Wolpert, David H. “Stacked generalization.” Neural networks 5.2 (1992): 241-259.

## 1.11.7. AdaBoost[#](#adaboost)

The module [ sklearn.ensemble](../api/sklearn.ensemble.html#module-sklearn.ensemble) includes the popular boosting algorithm
AdaBoost, introduced in 1995 by Freund and Schapire

[[FS1995]](#fs1995).

The core principle of AdaBoost is to fit a sequence of weak learners (i.e.,
models that are only slightly better than random guessing, such as small
decision trees) on repeatedly modified versions of the data. The predictions
from all of them are then combined through a weighted majority vote (or sum) to
produce the final prediction. The data modifications at each so-called boosting
iteration consists of applying weights \(w_1\), \(w_2\), …, \(w_N\)
to each of the training samples. Initially, those weights are all set to
\(w_i = 1/N\), so that the first step simply trains a weak learner on the
original data. For each successive iteration, the sample weights are
individually modified and the learning algorithm is reapplied to the reweighted
data. At a given step, those training examples that were incorrectly predicted
by the boosted model induced at the previous step have their weights increased,
whereas the weights are decreased for those that were predicted correctly. As
iterations proceed, examples that are difficult to predict receive
ever-increasing influence. Each subsequent weak learner is thereby forced to
concentrate on the examples that are missed by the previous ones in the sequence
[[HTF]](#htf).

AdaBoost can be used both for classification and regression problems:

For multi-class classification,

implements AdaBoost.SAMME`AdaBoostClassifier`

[[ZZRH2009]](#zzrh2009).For regression,

implements AdaBoost.R2`AdaBoostRegressor`

[[D1997]](#d1997).

### 1.11.7.1. Usage[#](#id35)

The following example shows how to fit an AdaBoost classifier with 100 weak learners:

```
>>> from sklearn.model_selection import cross_val_score
>>> from sklearn.datasets import load_iris
>>> from sklearn.ensemble import AdaBoostClassifier
>>> X, y = load_iris(return_X_y=True)
>>> clf = AdaBoostClassifier(n_estimators=100)
>>> scores = cross_val_score(clf, X, y, cv=5)
>>> scores.mean()
np.float64(0.95)
```

The number of weak learners is controlled by the parameter `n_estimators`

. The
`learning_rate`

parameter controls the contribution of the weak learners in
the final combination. By default, weak learners are decision stumps. Different
weak learners can be specified through the `estimator`

parameter.
The main parameters to tune to obtain good results are `n_estimators`

and
the complexity of the base estimators (e.g., its depth `max_depth`

or
minimum required number of samples to consider a split `min_samples_split`

).

Examples

[Multi-class AdaBoosted Decision Trees](../auto_examples/ensemble/plot_adaboost_multiclass.html#sphx-glr-auto-examples-ensemble-plot-adaboost-multiclass-py)shows the performance of AdaBoost on a multi-class problem.[Two-class AdaBoost](../auto_examples/ensemble/plot_adaboost_twoclass.html#sphx-glr-auto-examples-ensemble-plot-adaboost-twoclass-py)shows the decision boundary and decision function values for a non-linearly separable two-class problem using AdaBoost-SAMME.[Decision Tree Regression with AdaBoost](../auto_examples/ensemble/plot_adaboost_regression.html#sphx-glr-auto-examples-ensemble-plot-adaboost-regression-py)demonstrates regression with the AdaBoost.R2 algorithm.

References

---

## Source: https://scikit-learn.org/stable/modules/multiclass.html

# 1.12. Multiclass and multioutput algorithms[#](#multiclass-and-multioutput-algorithms)

This section of the user guide covers functionality related to multi-learning
problems, including [multiclass](../glossary.html#term-multiclass), [multilabel](../glossary.html#term-multilabel), and
[multioutput](../glossary.html#term-multioutput) classification and regression.

The modules in this section implement [meta-estimators](../glossary.html#term-meta-estimators), which require a
base estimator to be provided in their constructor. Meta-estimators extend the
functionality of the base estimator to support multi-learning problems, which
is accomplished by transforming the multi-learning problem into a set of
simpler problems, then fitting one estimator per problem.

This section covers two modules: [ sklearn.multiclass](../api/sklearn.multiclass.html#module-sklearn.multiclass) and

[. The chart below demonstrates the problem types that each module is responsible for, and the corresponding meta-estimators that each module provides.](../api/sklearn.multioutput.html#module-sklearn.multioutput)

`sklearn.multioutput`

The table below provides a quick reference on the differences between problem types. More detailed explanations can be found in subsequent sections of this guide.

Number of targets |
Target cardinality |
Valid
|
|
|---|---|---|---|
Multiclass classification |
1 |
>2 |
‘multiclass’ |
Multilabel classification |
>1 |
2 (0 or 1) |
‘multilabel-indicator’ |
Multiclass-multioutput classification |
>1 |
>2 |
‘multiclass-multioutput’ |
Multioutput regression |
>1 |
Continuous |
‘continuous-multioutput’ |

Below is a summary of scikit-learn estimators that have multi-learning support built-in, grouped by strategy. You don’t need the meta-estimators provided by this section if you’re using one of these estimators. However, meta-estimators can provide additional strategies beyond what is built-in:

**Inherently multiclass:**(setting multi_class=”crammer_singer”)`svm.LinearSVC`

(with most solvers)`linear_model.LogisticRegression`

(with most solvers)`linear_model.LogisticRegressionCV`


**Multiclass as One-Vs-One:**(setting multi_class = “one_vs_one”)`gaussian_process.GaussianProcessClassifier`


**Multiclass as One-Vs-The-Rest:**(setting multi_class = “one_vs_rest”)`gaussian_process.GaussianProcessClassifier`

(setting multi_class=”ovr”)`svm.LinearSVC`

(most solvers)`linear_model.LogisticRegression`

(most solvers)`linear_model.LogisticRegressionCV`


**Support multilabel:****Support multiclass-multioutput:**

## 1.12.1. Multiclass classification[#](#multiclass-classification)

Warning

All classifiers in scikit-learn do multiclass classification
out-of-the-box. You don’t need to use the [ sklearn.multiclass](../api/sklearn.multiclass.html#module-sklearn.multiclass) module
unless you want to experiment with different multiclass strategies.

**Multiclass classification** is a classification task with more than two
classes. Each sample can only be labeled as one class.

For example, classification using features extracted from a set of images of fruit, where each image may either be of an orange, an apple, or a pear. Each image is one sample and is labeled as one of the 3 possible classes. Multiclass classification makes the assumption that each sample is assigned to one and only one label - one sample cannot, for example, be both a pear and an apple.

While all scikit-learn classifiers are capable of multiclass classification,
the meta-estimators offered by [ sklearn.multiclass](../api/sklearn.multiclass.html#module-sklearn.multiclass)
permit changing the way they handle more than two classes
because this may have an effect on classifier performance
(either in terms of generalization error or required computational resources).

### 1.12.1.1. Target format[#](#target-format)

Valid [multiclass](../glossary.html#term-multiclass) representations for
[ type_of_target](generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target) (

`y`

) are:1d or column vector containing more than two discrete values. An example of a vector

`y`

for 4 samples:>>> import numpy as np >>> y = np.array(['apple', 'pear', 'apple', 'orange']) >>> print(y) ['apple' 'pear' 'apple' 'orange']

Dense or sparse

[binary](../glossary.html#term-binary)matrix of shape`(n_samples, n_classes)`

with a single sample per row, where each column represents one class. An example of both a dense and sparse[binary](../glossary.html#term-binary)matrix`y`

for 4 samples, where the columns, in order, are apple, orange, and pear:>>> import numpy as np >>> from sklearn.preprocessing import LabelBinarizer >>> y = np.array(['apple', 'pear', 'apple', 'orange']) >>> y_dense = LabelBinarizer().fit_transform(y) >>> print(y_dense) [[1 0 0] [0 0 1] [1 0 0] [0 1 0]] >>> from scipy import sparse >>> y_sparse = sparse.csr_matrix(y_dense) >>> print(y_sparse) <Compressed Sparse Row sparse matrix of dtype 'int64' with 4 stored elements and shape (4, 3)> Coords Values (0, 0) 1 (1, 2) 1 (2, 0) 1 (3, 1) 1


For more information about [ LabelBinarizer](generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer),
refer to

[Transforming the prediction target (y)](preprocessing_targets.html#preprocessing-targets).

### 1.12.1.2. OneVsRestClassifier[#](#onevsrestclassifier)

The **one-vs-rest** strategy, also known as **one-vs-all**, is implemented in
[ OneVsRestClassifier](generated/sklearn.multiclass.OneVsRestClassifier.html#sklearn.multiclass.OneVsRestClassifier). The strategy consists in
fitting one classifier per class. For each classifier, the class is fitted
against all the other classes. In addition to its computational efficiency
(only

`n_classes`

classifiers are needed), one advantage of this approach is
its interpretability. Since each class is represented by one and only one
classifier, it is possible to gain knowledge about the class by inspecting its
corresponding classifier. This is the most commonly used strategy and is a fair
default choice.Below is an example of multiclass learning using OvR:

```
>>> from sklearn import datasets
>>> from sklearn.multiclass import OneVsRestClassifier
>>> from sklearn.svm import LinearSVC
>>> X, y = datasets.load_iris(return_X_y=True)
>>> OneVsRestClassifier(LinearSVC(random_state=0)).fit(X, y).predict(X)
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2,
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
```

[ OneVsRestClassifier](generated/sklearn.multiclass.OneVsRestClassifier.html#sklearn.multiclass.OneVsRestClassifier) also supports multilabel
classification. To use this feature, feed the classifier an indicator matrix,
in which cell [i, j] indicates the presence of label j in sample i.

Examples

### 1.12.1.3. OneVsOneClassifier[#](#onevsoneclassifier)

[ OneVsOneClassifier](generated/sklearn.multiclass.OneVsOneClassifier.html#sklearn.multiclass.OneVsOneClassifier) constructs one classifier per
pair of classes. At prediction time, the class which received the most votes
is selected. In the event of a tie (among two classes with an equal number of
votes), it selects the class with the highest aggregate classification
confidence by summing over the pair-wise classification confidence levels
computed by the underlying binary classifiers.

Since it requires to fit `n_classes * (n_classes - 1) / 2`

classifiers,
this method is usually slower than one-vs-the-rest, due to its
O(n_classes^2) complexity. However, this method may be advantageous for
algorithms such as kernel algorithms which don’t scale well with
`n_samples`

. This is because each individual learning problem only involves
a small subset of the data whereas, with one-vs-the-rest, the complete
dataset is used `n_classes`

times. The decision function is the result
of a monotonic transformation of the one-versus-one classification.

Below is an example of multiclass learning using OvO:

```
>>> from sklearn import datasets
>>> from sklearn.multiclass import OneVsOneClassifier
>>> from sklearn.svm import LinearSVC
>>> X, y = datasets.load_iris(return_X_y=True)
>>> OneVsOneClassifier(LinearSVC(random_state=0)).fit(X, y).predict(X)
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
```

References

“Pattern Recognition and Machine Learning. Springer”, Christopher M. Bishop, page 183, (First Edition)


### 1.12.1.4. OutputCodeClassifier[#](#outputcodeclassifier)

Error-Correcting Output Code-based strategies are fairly different from
one-vs-the-rest and one-vs-one. With these strategies, each class is
represented in a Euclidean space, where each dimension can only be 0 or 1.
Another way to put it is that each class is represented by a binary code (an
array of 0 and 1). The matrix which keeps track of the location/code of each
class is called the code book. The code size is the dimensionality of the
aforementioned space. Intuitively, each class should be represented by a code
as unique as possible and a good code book should be designed to optimize
classification accuracy. In this implementation, we simply use a
randomly-generated code book as advocated in [[3]](#id3) although more elaborate
methods may be added in the future.

At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen.

In [ OutputCodeClassifier](generated/sklearn.multiclass.OutputCodeClassifier.html#sklearn.multiclass.OutputCodeClassifier), the

`code_size`

attribute allows the user to control the number of classifiers which will be
used. It is a percentage of the total number of classes.A number between 0 and 1 will require fewer classifiers than
one-vs-the-rest. In theory, `log2(n_classes) / n_classes`

is sufficient to
represent each class unambiguously. However, in practice, it may not lead to
good accuracy since `log2(n_classes)`

is much smaller than `n_classes`

.

A number greater than 1 will require more classifiers than one-vs-the-rest. In this case, some classifiers will in theory correct for the mistakes made by other classifiers, hence the name “error-correcting”. In practice, however, this may not happen as classifier mistakes will typically be correlated. The error-correcting output codes have a similar effect to bagging.

Below is an example of multiclass learning using Output-Codes:

```
>>> from sklearn import datasets
>>> from sklearn.multiclass import OutputCodeClassifier
>>> from sklearn.svm import LinearSVC
>>> X, y = datasets.load_iris(return_X_y=True)
>>> clf = OutputCodeClassifier(LinearSVC(random_state=0), code_size=2, random_state=0)
>>> clf.fit(X, y).predict(X)
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1,
1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2,
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
```

References

“Solving multiclass learning problems via error-correcting output codes”, Dietterich T., Bakiri G., Journal of Artificial Intelligence Research 2, 1995.


“The Elements of Statistical Learning”, Hastie T., Tibshirani R., Friedman J., page 606 (second-edition), 2008.


## 1.12.2. Multilabel classification[#](#multilabel-classification)

**Multilabel classification** (closely related to **multioutput**
**classification**) is a classification task labeling each sample with `m`

labels from `n_classes`

possible classes, where `m`

can be 0 to
`n_classes`

inclusive. This can be thought of as predicting properties of a
sample that are not mutually exclusive. Formally, a binary output is assigned
to each class, for every sample. Positive classes are indicated with 1 and
negative classes with 0 or -1. It is thus comparable to running `n_classes`

binary classification tasks, for example with
[ MultiOutputClassifier](generated/sklearn.multioutput.MultiOutputClassifier.html#sklearn.multioutput.MultiOutputClassifier). This approach treats
each label independently whereas multilabel classifiers

*may*treat the multiple classes simultaneously, accounting for correlated behavior among them.

For example, prediction of the topics relevant to a text document or video. The document or video may be about one of ‘religion’, ‘politics’, ‘finance’ or ‘education’, several of the topic classes or all of the topic classes.

### 1.12.2.1. Target format[#](#id5)

A valid representation of [multilabel](../glossary.html#term-multilabel) `y`

is an either dense or sparse
[binary](../glossary.html#term-binary) matrix of shape `(n_samples, n_classes)`

. Each column
represents a class. The `1`

’s in each row denote the positive classes a
sample has been labeled with. An example of a dense matrix `y`

for 3
samples:

```
>>> y = np.array([[1, 0, 0, 1], [0, 0, 1, 1], [0, 0, 0, 0]])
>>> print(y)
[[1 0 0 1]
[0 0 1 1]
[0 0 0 0]]
```

Dense binary matrices can also be created using
[ MultiLabelBinarizer](generated/sklearn.preprocessing.MultiLabelBinarizer.html#sklearn.preprocessing.MultiLabelBinarizer). For more information,
refer to

[Transforming the prediction target (y)](preprocessing_targets.html#preprocessing-targets).

An example of the same `y`

in sparse matrix form:

```
>>> y_sparse = sparse.csr_matrix(y)
>>> print(y_sparse)
<Compressed Sparse Row sparse matrix of dtype 'int64'
with 4 stored elements and shape (3, 4)>
Coords Values
(0, 0) 1
(0, 3) 1
(1, 2) 1
(1, 3) 1
```

### 1.12.2.2. MultiOutputClassifier[#](#multioutputclassifier)

Multilabel classification support can be added to any classifier with
[ MultiOutputClassifier](generated/sklearn.multioutput.MultiOutputClassifier.html#sklearn.multioutput.MultiOutputClassifier). This strategy consists of
fitting one classifier per target. This allows multiple target variable
classifications. The purpose of this class is to extend estimators
to be able to estimate a series of target functions (f1,f2,f3…,fn)
that are trained on a single X predictor matrix to predict a series
of responses (y1,y2,y3…,yn).

You can find a usage example for
[ MultiOutputClassifier](generated/sklearn.multioutput.MultiOutputClassifier.html#sklearn.multioutput.MultiOutputClassifier)
as part of the section on

[Multiclass-multioutput classification](#multiclass-multioutput-classification)since it is a generalization of multilabel classification to multiclass outputs instead of binary outputs.

### 1.12.2.3. ClassifierChain[#](#classifierchain)

Classifier chains (see [ ClassifierChain](generated/sklearn.multioutput.ClassifierChain.html#sklearn.multioutput.ClassifierChain)) are a way
of combining a number of binary classifiers into a single multi-label model
that is capable of exploiting correlations among targets.

For a multi-label classification problem with N classes, N binary classifiers are assigned an integer between 0 and N-1. These integers define the order of models in the chain. Each classifier is then fit on the available training data plus the true labels of the classes whose models were assigned a lower number.

When predicting, the true labels will not be available. Instead the predictions of each model are passed on to the subsequent models in the chain to be used as features.

Clearly the order of the chain is important. The first model in the chain has no information about the other labels while the last model in the chain has features indicating the presence of all of the other labels. In general one does not know the optimal ordering of the models in the chain so typically many randomly ordered chains are fit and their predictions are averaged together.

References

Jesse Read, Bernhard Pfahringer, Geoff Holmes, Eibe Frank, “Classifier Chains for Multi-label Classification”, 2009.


## 1.12.3. Multiclass-multioutput classification[#](#multiclass-multioutput-classification)

**Multiclass-multioutput classification**
(also known as **multitask classification**) is a
classification task which labels each sample with a set of **non-binary**
properties. Both the number of properties and the number of
classes per property is greater than 2. A single estimator thus
handles several joint classification tasks. This is both a generalization of
the multi*label* classification task, which only considers binary
attributes, as well as a generalization of the multi*class* classification
task, where only one property is considered.

For example, classification of the properties “type of fruit” and “colour” for a set of images of fruit. The property “type of fruit” has the possible classes: “apple”, “pear” and “orange”. The property “colour” has the possible classes: “green”, “red”, “yellow” and “orange”. Each sample is an image of a fruit, a label is output for both properties and each label is one of the possible classes of the corresponding property.

Note that all classifiers handling multiclass-multioutput (also known as multitask classification) tasks, support the multilabel classification task as a special case. Multitask classification is similar to the multioutput classification task with different model formulations. For more information, see the relevant estimator documentation.

Below is an example of multiclass-multioutput classification:

```
>>> from sklearn.datasets import make_classification
>>> from sklearn.multioutput import MultiOutputClassifier
>>> from sklearn.ensemble import RandomForestClassifier
>>> from sklearn.utils import shuffle
>>> import numpy as np
>>> X, y1 = make_classification(n_samples=10, n_features=100,
... n_informative=30, n_classes=3,
... random_state=1)
>>> y2 = shuffle(y1, random_state=1)
>>> y3 = shuffle(y1, random_state=2)
>>> Y = np.vstack((y1, y2, y3)).T
>>> n_samples, n_features = X.shape # 10,100
>>> n_outputs = Y.shape[1] # 3
>>> n_classes = 3
>>> forest = RandomForestClassifier(random_state=1)
>>> multi_target_forest = MultiOutputClassifier(forest, n_jobs=2)
>>> multi_target_forest.fit(X, Y).predict(X)
array([[2, 2, 0],
[1, 2, 1],
[2, 1, 0],
[0, 0, 2],
[0, 2, 1],
[0, 0, 2],
[1, 1, 0],
[1, 1, 1],
[0, 0, 2],
[2, 0, 0]])
```

Warning

At present, no metric in [ sklearn.metrics](../api/sklearn.metrics.html#module-sklearn.metrics)
supports the multiclass-multioutput classification task.

### 1.12.3.1. Target format[#](#id8)

A valid representation of [multioutput](../glossary.html#term-multioutput) `y`

is a dense matrix of shape
`(n_samples, n_classes)`

of class labels. A column wise concatenation of 1d
[multiclass](../glossary.html#term-multiclass) variables. An example of `y`

for 3 samples:

```
>>> y = np.array([['apple', 'green'], ['orange', 'orange'], ['pear', 'green']])
>>> print(y)
[['apple' 'green']
['orange' 'orange']
['pear' 'green']]
```

## 1.12.4. Multioutput regression[#](#multioutput-regression)

**Multioutput regression** predicts multiple numerical properties for each
sample. Each property is a numerical variable and the number of properties
to be predicted for each sample is greater than or equal to 2. Some estimators
that support multioutput regression are faster than just running `n_output`

estimators.

For example, prediction of both wind speed and wind direction, in degrees, using data obtained at a certain location. Each sample would be data obtained at one location and both wind speed and direction would be output for each sample.

The following regressors natively support multioutput regression:

### 1.12.4.1. Target format[#](#id10)

A valid representation of [multioutput](../glossary.html#term-multioutput) `y`

is a dense matrix of shape
`(n_samples, n_output)`

of floats. A column wise concatenation of
[continuous](../glossary.html#term-continuous) variables. An example of `y`

for 3 samples:

```
>>> y = np.array([[31.4, 94], [40.5, 109], [25.0, 30]])
>>> print(y)
[[ 31.4 94. ]
[ 40.5 109. ]
[ 25. 30. ]]
```

### 1.12.4.2. MultiOutputRegressor[#](#multioutputregressor)

Multioutput regression support can be added to any regressor with
[ MultiOutputRegressor](generated/sklearn.multioutput.MultiOutputRegressor.html#sklearn.multioutput.MultiOutputRegressor). This strategy consists of
fitting one regressor per target. Since each target is represented by exactly
one regressor it is possible to gain knowledge about the target by
inspecting its corresponding regressor. As

[fits one regressor per target it can not take advantage of correlations between targets.](generated/sklearn.multioutput.MultiOutputRegressor.html#sklearn.multioutput.MultiOutputRegressor)

`MultiOutputRegressor`

Below is an example of multioutput regression:

```
>>> from sklearn.datasets import make_regression
>>> from sklearn.multioutput import MultiOutputRegressor
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> X, y = make_regression(n_samples=10, n_targets=3, random_state=1)
>>> MultiOutputRegressor(GradientBoostingRegressor(random_state=0)).fit(X, y).predict(X)
array([[-154.75474165, -147.03498585, -50.03812219],
[ 7.12165031, 5.12914884, -81.46081961],
[-187.8948621 , -100.44373091, 13.88978285],
[-141.62745778, 95.02891072, -191.48204257],
[ 97.03260883, 165.34867495, 139.52003279],
[ 123.92529176, 21.25719016, -7.84253 ],
[-122.25193977, -85.16443186, -107.12274212],
[ -30.170388 , -94.80956739, 12.16979946],
[ 140.72667194, 176.50941682, -17.50447799],
[ 149.37967282, -81.15699552, -5.72850319]])
```

### 1.12.4.3. RegressorChain[#](#regressorchain)

Regressor chains (see [ RegressorChain](generated/sklearn.multioutput.RegressorChain.html#sklearn.multioutput.RegressorChain)) is
analogous to

[as a way of combining a number of regressions into a single multi-target model that is capable of exploiting correlations among targets.](generated/sklearn.multioutput.ClassifierChain.html#sklearn.multioutput.ClassifierChain)

`ClassifierChain`

---

## Source: https://scikit-learn.org/stable/modules/feature_selection.html

# 1.13. Feature selection[#](#feature-selection)

The classes in the [ sklearn.feature_selection](../api/sklearn.feature_selection.html#module-sklearn.feature_selection) module can be used
for feature selection/dimensionality reduction on sample sets, either to
improve estimators’ accuracy scores or to boost their performance on very
high-dimensional datasets.

## 1.13.1. Removing features with low variance[#](#removing-features-with-low-variance)

[ VarianceThreshold](generated/sklearn.feature_selection.VarianceThreshold.html#sklearn.feature_selection.VarianceThreshold) is a simple baseline approach to feature selection.
It removes all features whose variance doesn’t meet some threshold.
By default, it removes all zero-variance features,
i.e. features that have the same value in all samples.

As an example, suppose that we have a dataset with boolean features, and we want to remove all features that are either one or zero (on or off) in more than 80% of the samples. Boolean features are Bernoulli random variables, and the variance of such variables is given by

so we can select using the threshold `.8 * (1 - .8)`

:

```
>>> from sklearn.feature_selection import VarianceThreshold
>>> X = [[0, 0, 1], [0, 1, 0], [1, 0, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1]]
>>> sel = VarianceThreshold(threshold=(.8 * (1 - .8)))
>>> sel.fit_transform(X)
array([[0, 1],
[1, 0],
[0, 0],
[1, 1],
[1, 0],
[1, 1]])
```

As expected, `VarianceThreshold`

has removed the first column,
which has a probability \(p = 5/6 > .8\) of containing a zero.

## 1.13.2. Univariate feature selection[#](#univariate-feature-selection)

Univariate feature selection works by selecting the best features based on
univariate statistical tests. It can be seen as a preprocessing step
to an estimator. Scikit-learn exposes feature selection routines
as objects that implement the `transform`

method:

removes all but the \(k\) highest scoring features`SelectKBest`

removes all but a user-specified highest scoring percentage of features`SelectPercentile`

using common univariate statistical tests for each feature: false positive rate

, false discovery rate`SelectFpr`

, or family wise error`SelectFdr`

.`SelectFwe`

allows to perform univariate feature selection with a configurable strategy. This allows to select the best univariate selection strategy with hyper-parameter search estimator.`GenericUnivariateSelect`


For instance, we can use a F-test to retrieve the two best features for a dataset as follows:

```
>>> from sklearn.datasets import load_iris
>>> from sklearn.feature_selection import SelectKBest
>>> from sklearn.feature_selection import f_classif
>>> X, y = load_iris(return_X_y=True)
>>> X.shape
(150, 4)
>>> X_new = SelectKBest(f_classif, k=2).fit_transform(X, y)
>>> X_new.shape
(150, 2)
```

These objects take as input a scoring function that returns univariate scores
and p-values (or only scores for [ SelectKBest](generated/sklearn.feature_selection.SelectKBest.html#sklearn.feature_selection.SelectKBest) and

[):](generated/sklearn.feature_selection.SelectPercentile.html#sklearn.feature_selection.SelectPercentile)

`SelectPercentile`

For regression:

,`r_regression`

,`f_regression`

`mutual_info_regression`

For classification:

,`chi2`

,`f_classif`

`mutual_info_classif`


The methods based on F-test estimate the degree of linear dependency between two random variables. On the other hand, mutual information methods can capture any kind of statistical dependency, but being nonparametric, they require more samples for accurate estimation. Note that the \(\chi^2\)-test should only be applied to non-negative features, such as frequencies.

Warning

Beware not to use a regression scoring function with a classification problem, you will get useless results.

Note

The [ SelectPercentile](generated/sklearn.feature_selection.SelectPercentile.html#sklearn.feature_selection.SelectPercentile) and

[support unsupervised feature selection as well. One needs to provide a](generated/sklearn.feature_selection.SelectKBest.html#sklearn.feature_selection.SelectKBest)

`SelectKBest`

`score_func`

where `y=None`

.
The `score_func`

should use internally `X`

to compute the scores.Examples

## 1.13.3. Recursive feature elimination[#](#recursive-feature-elimination)

Given an external estimator that assigns weights to features (e.g., the
coefficients of a linear model), the goal of recursive feature elimination ([ RFE](generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE))
is to select features by recursively considering smaller and smaller sets of
features. First, the estimator is trained on the initial set of features and
the importance of each feature is obtained either through any specific attribute
(such as

`coef_`

, `feature_importances_`

) or callable. Then, the least important
features are pruned from the current set of features. That procedure is recursively
repeated on the pruned set until the desired number of features to select is
eventually reached.[ RFECV](generated/sklearn.feature_selection.RFECV.html#sklearn.feature_selection.RFECV) performs RFE in a cross-validation loop to find the optimal
number of features. In more details, the number of features selected is tuned
automatically by fitting an

[selector on the different cross-validation splits (provided by the](generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE)

`RFE`

`cv`

parameter). The performance
of the [selector is evaluated using](generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE)

`RFE`

`scorer`

for different numbers
of selected features and aggregated together. Finally, the scores are averaged
across folds and the number of features selected is set to the number of
features that maximize the cross-validation score.Examples

[Recursive feature elimination](../auto_examples/feature_selection/plot_rfe_digits.html#sphx-glr-auto-examples-feature-selection-plot-rfe-digits-py): A recursive feature elimination example showing the relevance of pixels in a digit classification task.[Recursive feature elimination with cross-validation](../auto_examples/feature_selection/plot_rfe_with_cross_validation.html#sphx-glr-auto-examples-feature-selection-plot-rfe-with-cross-validation-py): A recursive feature elimination example with automatic tuning of the number of features selected with cross-validation.

## 1.13.4. Feature selection using SelectFromModel[#](#feature-selection-using-selectfrommodel)

[ SelectFromModel](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel) is a meta-transformer that can be used alongside any
estimator that assigns importance to each feature through a specific attribute (such as

`coef_`

, `feature_importances_`

) or via an `importance_getter`

callable after fitting.
The features are considered unimportant and removed if the corresponding
importance of the feature values is below the provided
`threshold`

parameter. Apart from specifying the threshold numerically,
there are built-in heuristics for finding a threshold using a string argument.
Available heuristics are “mean”, “median” and float multiples of these like
“0.1*mean”. In combination with the `threshold`

criteria, one can use the
`max_features`

parameter to set a limit on the number of features to select.For examples on how it is to be used refer to the sections below.

Examples

### 1.13.4.1. L1-based feature selection[#](#l1-based-feature-selection)

[Linear models](linear_model.html#linear-model) penalized with the L1 norm have
sparse solutions: many of their estimated coefficients are zero. When the goal
is to reduce the dimensionality of the data to use with another classifier,
they can be used along with [ SelectFromModel](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel)
to select the non-zero coefficients. In particular, sparse estimators useful
for this purpose are the

[for regression, and of](generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso)

`Lasso`

[and](generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

`LogisticRegression`

[for classification:](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)

`LinearSVC`

```
>>> from sklearn.svm import LinearSVC
>>> from sklearn.datasets import load_iris
>>> from sklearn.feature_selection import SelectFromModel
>>> X, y = load_iris(return_X_y=True)
>>> X.shape
(150, 4)
>>> lsvc = LinearSVC(C=0.01, penalty="l1", dual=False).fit(X, y)
>>> model = SelectFromModel(lsvc, prefit=True)
>>> X_new = model.transform(X)
>>> X_new.shape
(150, 3)
```

With SVMs and logistic regression, the parameter C controls the sparsity: the smaller C the fewer features selected. With Lasso, the higher the alpha parameter, the fewer features selected.

Examples

##
L1-recovery and compressive sensing[#](#l1-recovery-and-compressive-sensing)

For a good choice of alpha, the [Lasso](linear_model.html#lasso) can fully recover the
exact set of non-zero variables using only few observations, provided
certain specific conditions are met. In particular, the number of
samples should be “sufficiently large”, or L1 models will perform at
random, where “sufficiently large” depends on the number of non-zero
coefficients, the logarithm of the number of features, the amount of
noise, the smallest absolute value of non-zero coefficients, and the
structure of the design matrix X. In addition, the design matrix must
display certain specific properties, such as not being too correlated.
On the use of Lasso for sparse signal recovery, see this example on
compressive sensing:
[Compressive sensing: tomography reconstruction with L1 prior (Lasso)](../auto_examples/applications/plot_tomography_l1_reconstruction.html#sphx-glr-auto-examples-applications-plot-tomography-l1-reconstruction-py).

There is no general rule to select an alpha parameter for recovery of
non-zero coefficients. It can be set by cross-validation
([ LassoCV](generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV) or

[), though this may lead to under-penalized models: including a small number of non-relevant variables is not detrimental to prediction score. BIC (](generated/sklearn.linear_model.LassoLarsCV.html#sklearn.linear_model.LassoLarsCV)

`LassoLarsCV`

[) tends, on the opposite, to set high values of alpha.](generated/sklearn.linear_model.LassoLarsIC.html#sklearn.linear_model.LassoLarsIC)

`LassoLarsIC`

References

Richard G. Baraniuk “Compressive Sensing”, IEEE Signal
Processing Magazine [120] July 2007
[http://users.isr.ist.utl.pt/~aguiar/CS_notes.pdf](http://users.isr.ist.utl.pt/~aguiar/CS_notes.pdf)

### 1.13.4.2. Tree-based feature selection[#](#tree-based-feature-selection)

Tree-based estimators (see the [ sklearn.tree](../api/sklearn.tree.html#module-sklearn.tree) module and forest
of trees in the

[module) can be used to compute impurity-based feature importances, which in turn can be used to discard irrelevant features (when coupled with the](../api/sklearn.ensemble.html#module-sklearn.ensemble)

`sklearn.ensemble`

[meta-transformer):](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel)

`SelectFromModel`

```
>>> from sklearn.ensemble import ExtraTreesClassifier
>>> from sklearn.datasets import load_iris
>>> from sklearn.feature_selection import SelectFromModel
>>> X, y = load_iris(return_X_y=True)
>>> X.shape
(150, 4)
>>> clf = ExtraTreesClassifier(n_estimators=50)
>>> clf = clf.fit(X, y)
>>> clf.feature_importances_
array([ 0.04, 0.05, 0.4, 0.4])
>>> model = SelectFromModel(clf, prefit=True)
>>> X_new = model.transform(X)
>>> X_new.shape
(150, 2)
```

Examples

[Feature importances with a forest of trees](../auto_examples/ensemble/plot_forest_importances.html#sphx-glr-auto-examples-ensemble-plot-forest-importances-py): example on synthetic data showing the recovery of the actually meaningful features.[Permutation Importance vs Random Forest Feature Importance (MDI)](../auto_examples/inspection/plot_permutation_importance.html#sphx-glr-auto-examples-inspection-plot-permutation-importance-py): example discussing the caveats of using impurity-based feature importances as a proxy for feature relevance.

## 1.13.5. Sequential Feature Selection[#](#sequential-feature-selection)

Sequential Feature Selection [[sfs]](#sfs) (SFS) is available in the
[ SequentialFeatureSelector](generated/sklearn.feature_selection.SequentialFeatureSelector.html#sklearn.feature_selection.SequentialFeatureSelector) transformer.
SFS can be either forward or backward:

Forward-SFS is a greedy procedure that iteratively finds the best new feature
to add to the set of selected features. Concretely, we initially start with
zero features and find the one feature that maximizes a cross-validated score
when an estimator is trained on this single feature. Once that first feature
is selected, we repeat the procedure by adding a new feature to the set of
selected features. The procedure stops when the desired number of selected
features is reached, as determined by the `n_features_to_select`

parameter.

Backward-SFS follows the same idea but works in the opposite direction:
instead of starting with no features and greedily adding features, we start
with *all* the features and greedily *remove* features from the set. The
`direction`

parameter controls whether forward or backward SFS is used.

##
Details on Sequential Feature Selection[#](#details-on-sequential-feature-selection)

In general, forward and backward selection do not yield equivalent results. Also, one may be much faster than the other depending on the requested number of selected features: if we have 10 features and ask for 7 selected features, forward selection would need to perform 7 iterations while backward selection would only need to perform 3.

SFS differs from [ RFE](generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE) and

[in that it does not require the underlying model to expose a](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel)

`SelectFromModel`

`coef_`

or `feature_importances_`

attribute. It may however be slower considering that more models need to be
evaluated, compared to the other approaches. For example in backward
selection, the iteration going from `m`

features to `m - 1`

features using k-fold
cross-validation requires fitting `m * k`

models, while
[would require only a single fit, and](generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE)

`RFE`

[always just does a single fit and requires no iterations.](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel)

`SelectFromModel`

References

[sfs](#id4)]

Ferri et al, [Comparative study of techniques for
large-scale feature selection](https://citeseerx.ist.psu.edu/doc_view/pid/5fedabbb3957bbb442802e012d829ee0629a01b6).

Examples

## 1.13.6. Feature selection as part of a pipeline[#](#feature-selection-as-part-of-a-pipeline)

Feature selection is usually used as a pre-processing step before doing
the actual learning. The recommended way to do this in scikit-learn is
to use a [ Pipeline](generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline):

```
clf = Pipeline([
('feature_selection', SelectFromModel(LinearSVC(penalty="l1"))),
('classification', RandomForestClassifier())
])
clf.fit(X, y)
```

In this snippet we make use of a [ LinearSVC](generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC)
coupled with

[to evaluate feature importances and select the most relevant features. Then, a](generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel)

`SelectFromModel`

[is trained on the transformed output, i.e. using only relevant features. You can perform similar operations with the other feature selection methods and also classifiers that provide a way to evaluate feature importances of course. See the](generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier)

`RandomForestClassifier`

[examples for more details.](generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline)

`Pipeline`