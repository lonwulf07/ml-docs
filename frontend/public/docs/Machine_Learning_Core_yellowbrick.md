# Yellowbrick Documentation
> Scraped on: 2026-03-30 | Root Source: [https://yellowbrick.readthedocs.io/](https://yellowbrick.readthedocs.io/)



---

## Source: https://yellowbrick.readthedocs.io/

# Yellowbrick: Machine Learning Visualization[](#yellowbrick-machine-learning-visualization)

Yellowbrick extends the Scikit-Learn API to make model selection and hyperparameter tuning easier. Under the hood, it’s using Matplotlib.

## Recommended Learning Path[](#recommended-learning-path)

Check out the

[Quick Start](quickstart.html), try the[Model Selection Tutorial](tutorial.html), and check out the[Oneliners](oneliners.html).Use Yellowbrick in your work, referencing the

[Visualizers and API](api/index.html)for assistance with specific visualizers and detailed information on optional parameters and customization options.Star us on

[GitHub](https://github.com/DistrictDataLabs/yellowbrick/)and follow us on[Twitter (@scikit_yb)](https://twitter.com/scikit_yb)so that you’ll hear about new visualizers as soon as they’re added.

## Contributing[](#contributing)

Interested in contributing to Yellowbrick? Yellowbrick is a welcoming, inclusive project and we would love to have you.
We follow the [Python Software Foundation Code of Conduct](http://www.python.org/psf/codeofconduct/).

No matter your level of technical skill, you can be helpful. We appreciate bug reports, user testing, feature requests, bug fixes, product enhancements, and documentation improvements.

Check out the [Contributing](contributing/index.html) guide!

If you’ve signed up to do user testing, head over to the [User Testing Instructions](evaluation.html).

Please consider joining the [Google Groups Listserv](https://groups.google.com/forum/#!forum/yellowbrick) listserve so you can respond to questions.

Thank you for your contributions!

## Concepts & API[](#concepts-api)

## Visualizers[](#visualizers)

The primary goal of Yellowbrick is to create a sensical API similar to Scikit-Learn.

Visualizers are the core objects in Yellowbrick.
They are similar to transformers in Scikit-Learn.
Visualizers can wrap a model estimator - similar to how the “ModelCV” (e.g. [RidgeCV](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html), [LassoCV](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html)) methods work.

Some of our most popular visualizers include:

### Feature Visualization[](#feature-visualization)

[Rank Features](api/features/rankd.html): pairwise ranking of features to detect relationships[Parallel Coordinates](api/features/pcoords.html): horizontal visualization of instances[Radial Visualization](api/features/radviz.html): separation of instances around a circular plot[PCA Projection](api/features/pca.html): projection of instances based on principal components[Manifold Visualization](api/features/manifold.html): high dimensional visualization with manifold learning[Joint Plots](api/features/jointplot.html): direct data visualization with feature selection

### Classification Visualization[](#classification-visualization)

[Class Prediction Error](api/classifier/class_prediction_error.html): shows error and support in classification[Classification Report](api/classifier/classification_report.html): visual representation of precision, recall, and F1[ROC/AUC Curves](api/classifier/rocauc.html): receiver operator characteristics and area under the curve[Precision-Recall Curves](api/classifier/prcurve.html): precision vs recall for different probability thresholds[Confusion Matrices](api/classifier/confusion_matrix.html): visual description of class decision making[Discrimination Threshold](api/classifier/threshold.html): find a threshold that best separates binary classes

### Regression Visualization[](#regression-visualization)

[Prediction Error Plot](api/regressor/peplot.html): find model breakdowns along the domain of the target[Residuals Plot](api/regressor/residuals.html): show the difference in residuals of training and test data[Alpha Selection](api/regressor/alphas.html): show how the choice of alpha influences regularization[Cook’s Distance](api/regressor/influence.html): show the influence of instances on linear regression

### Clustering Visualization[](#clustering-visualization)

[K-Elbow Plot](api/cluster/elbow.html): select k using the elbow method and various metrics[Silhouette Plot](api/cluster/silhouette.html): select k by visualizing silhouette coefficient values[Intercluster Distance Maps](api/cluster/icdm.html): show relative distance and size/importance of clusters

### Model Selection Visualization[](#model-selection-visualization)

[Validation Curve](api/model_selection/validation_curve.html): tune a model with respect to a single hyperparameter[Learning Curve](api/model_selection/learning_curve.html): show if a model might benefit from more data or less complexity[Feature Importances](api/model_selection/importances.html): rank features by importance or linear coefficients for a specific model[Recursive Feature Elimination](api/model_selection/rfecv.html): find the best subset of features based on importance

### Target Visualization[](#target-visualization)

[Balanced Binning Reference](api/target/binning.html): generate a histogram with vertical lines showing the recommended value point to bin the data into evenly distributed bins[Class Balance](api/target/class_balance.html): see how the distribution of classes affects the model[Feature Correlation](api/target/feature_correlation.html): display the correlation between features and dependent variables

### Text Visualization[](#text-visualization)

[Term Frequency](api/text/freqdist.html): visualize the frequency distribution of terms in the corpus[t-SNE Corpus Visualization](api/text/tsne.html): use stochastic neighbor embedding to project documents[Dispersion Plot](api/text/dispersion.html): visualize how key terms are dispersed throughout a corpus[UMAP Corpus Visualization](api/text/umap_vis.html): plot similar documents closer together to discover clusters[PosTag Visualization](api/text/postag.html): plot the counts of different parts-of-speech throughout a tagged corpus

… and more! Visualizers are being added all the time. Check the examples (or even the [develop branch](https://github.com/DistrictDataLabs/yellowbrick/tree/develop)). Feel free to contribute your ideas for new Visualizers!

## Getting Help[](#getting-help)

Can’t get someting to work? Here are places you can find help.

The docs (you’re here!).

[Stack Overflow](http://stackoverflow.com/questions/tagged/yellowbrick). If you ask a question, please tag it with “yellowbrick”.The Yellowbrick

[Google Groups Listserv](https://groups.google.com/forum/#!forum/yellowbrick).You can also Tweet or direct message us on Twitter

[@scikit_yb](https://twitter.com/scikit_yb).

## Find a Bug?[](#find-a-bug)

Check if there’s already an open [issue](https://github.com/DistrictDataLabs/yellowbrick/issues/) on the topic. If needed, file an [issue](https://github.com/DistrictDataLabs/yellowbrick/issues/).

## Open Source[](#open-source)

The Yellowbrick [license](https://github.com/DistrictDataLabs/yellowbrick/blob/master/LICENSE.txt) is an open source [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) license. Yellowbrick enjoys a very active developer community; please consider [Contributing](contributing/index.html)!

Yellowbrick is hosted on [GitHub](https://github.com/DistrictDataLabs/yellowbrick/). The [issues](https://github.com/DistrictDataLabs/yellowbrick/issues/) and [pull requests](https://github.com/DistrictDataLabs/yellowbrick/pulls) are tracked there.

## Table of Contents[](#table-of-contents)

[Quick Start](quickstart.html)[Model Selection Tutorial](tutorial.html)[Visualizers and API](api/index.html)[Oneliners](oneliners.html)[Contributing](contributing/index.html)[Effective Matplotlib](matplotlib.html)[Yellowbrick for Teachers](teaching.html)[Gallery](gallery.html)[About](about.html)[Frequently Asked Questions](faq.html)[How can I change the size of a Yellowbrick plot?](faq.html#how-can-i-change-the-size-of-a-yellowbrick-plot)[How can I change the title of a Yellowbrick plot?](faq.html#how-can-i-change-the-title-of-a-yellowbrick-plot)[How can I change the color of a Yellowbrick plot?](faq.html#how-can-i-change-the-color-of-a-yellowbrick-plot)[How can I save a Yellowbrick plot?](faq.html#how-can-i-save-a-yellowbrick-plot)[How can I make overlapping points show up better?](faq.html#how-can-i-make-overlapping-points-show-up-better)[How can I access the sample datasets used in the examples?](faq.html#how-can-i-access-the-sample-datasets-used-in-the-examples)[Can I use Yellowbrick with libraries other than scikit-learn?](faq.html#can-i-use-yellowbrick-with-libraries-other-than-scikit-learn)

[User Testing Instructions](evaluation.html)[Code of Conduct](code_of_conduct.html)[Changelog](changelog.html)[Version 1.5](changelog.html#version-1-5)[Version 1.4](changelog.html#version-1-4)[Version 1.3.post1](changelog.html#version-1-3-post1)[Version 1.3](changelog.html#version-1-3)[Hotfix 1.2.1](changelog.html#hotfix-1-2-1)[Version 1.2](changelog.html#version-1-2)[Version 1.1](changelog.html#version-1-1)[Hotfix 1.0.1](changelog.html#hotfix-1-0-1)[Version 1.0](changelog.html#version-1-0)[Hotfix 0.9.1](changelog.html#hotfix-0-9-1)[Version 0.9](changelog.html#version-0-9)[Version 0.8](changelog.html#version-0-8)[Version 0.7](changelog.html#version-0-7)[Version 0.6](changelog.html#version-0-6)[Version 0.5](changelog.html#version-0-5)[Hotfix 0.4.2](changelog.html#hotfix-0-4-2)[Version 0.4.1](changelog.html#version-0-4-1)[Version 0.4](changelog.html#version-0-4)[Version 0.3.3](changelog.html#version-0-3-3)[Version 0.3.2](changelog.html#version-0-3-2)[Hotfix 0.3.1](changelog.html#hotfix-0-3-1)[Version 0.3](changelog.html#version-0-3)[Version 0.2](changelog.html#version-0-2)[Version 0.1](changelog.html#version-0-1)

[Governance](governance/index.html)