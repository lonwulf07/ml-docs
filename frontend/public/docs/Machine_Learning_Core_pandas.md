# Pandas Documentation
> Scraped on: 2026-03-30 | Root Source: [https://pandas.pydata.org/docs/](https://pandas.pydata.org/docs/)



---

## Source: https://pandas.pydata.org/docs/

# pandas documentation[#](#pandas-documentation)

**Date**: Feb 18, 2026 **Version**: 3.0.1

**Download documentation**: [Zipped HTML](pandas.zip)

**Previous versions**: Documentation of previous pandas versions is available at
[pandas.pydata.org](https://pandas.pydata.org/).

**Useful links**:
[Binary Installers](https://pypi.org/project/pandas) |
[Source Repository](https://github.com/pandas-dev/pandas) |
[Issues & Ideas](https://github.com/pandas-dev/pandas/issues) |
[Q&A Support](https://stackoverflow.com/questions/tagged/pandas) |
[Mailing List](https://groups.google.com/g/pydata)

[ pandas](#module-pandas) is an open source, BSD-licensed library providing high-performance,
easy-to-use data structures and data analysis tools for the

[Python](https://www.python.org/)programming language.

New to *pandas*? Check out the getting started guides. They contain an
introduction to *pandas’* main concepts and links to additional tutorials.

The user guide provides in-depth information on the key concepts of pandas with useful background information and explanation.

The reference guide contains a detailed description of the pandas API. The reference describes how the methods work and which parameters can be used. It assumes that you have an understanding of the key concepts.

Saw a typo in the documentation? Want to improve existing functionalities? The contributing guidelines will guide you through the process of improving pandas.

---

## Source: https://pandas.pydata.org/docs/getting_started/index.html

# Getting started[#](#getting-started)

## Installation[#](#installation)

pandas can be installed via conda from [conda-forge](https://anaconda.org/conda-forge/pandas).

pandas can be installed via pip from [PyPI](https://pypi.org/project/pandas).

Installing a specific version? Installing from source? Check the advanced installation page.

## Intro to pandas[#](#intro-to-pandas)

When working with tabular data, such as data stored in spreadsheets or databases, pandas is the right tool for you. pandas will help you
to explore, clean, and process your data. In pandas, a data table is called a [ DataFrame](../reference/api/pandas.DataFrame.html#pandas.DataFrame).

pandas supports the integration with many file formats or data sources out of the box (csv, excel, sql, json, parquet,…). The ability to import data from each of these
data sources is provided by functions with the prefix, `read_*`

. Similarly, the `to_*`

methods are used to store data.

Selecting or filtering specific rows and/or columns? Filtering the data on a particular condition? Methods for slicing, selecting, and extracting the data you need are available in pandas.

pandas provides plotting for your data right out of the box with the power of Matplotlib. Simply pick the plot type (scatter, bar, boxplot,…) corresponding to your data.

There’s no need to loop over all rows of your data table to do calculations. Column data manipulations work elementwise in pandas.
Adding a column to a [ DataFrame](../reference/api/pandas.DataFrame.html#pandas.DataFrame) based on existing data in other columns is straightforward.

Basic statistics (mean, median, min, max, counts…) are easily calculable across data frames. These, or even custom aggregations, can be applied on the entire data set, a sliding window of the data, or grouped by categories. The latter is also known as the split-apply-combine approach.

Multiple tables can be concatenated column wise or row wise with pandas’ database-like join and merge operations.

pandas has great support for time series and has an extensive set of tools for working with dates, times, and time-indexed data.

Data sets often contain more than just numerical data. pandas provides a wide range of functions to clean textual data and extract useful information from it.

## Coming from…[#](#coming-from)

Are you familiar with other software for manipulating tabular data? Learn the pandas-equivalent operations compared to software you already know:

The [R programming language](https://www.r-project.org/) provides a
`data.frame`

data structure as well as packages like
[tidyverse](https://www.tidyverse.org) which use and extend `data.frame`

for convenient data handling functionalities similar to pandas.

Already familiar with `SELECT`

, `GROUP BY`

, `JOIN`

, etc.?
Many SQL manipulations have equivalents in pandas.

The `data set`

included in the [STATA](https://en.wikipedia.org/wiki/Stata)
statistical software suite corresponds to the pandas `DataFrame`

.
Many of the operations known from STATA have an equivalent in pandas.

Users of [Excel](https://en.wikipedia.org/wiki/Microsoft_Excel)
or other spreadsheet programs will find that many of the concepts are
transferable to pandas.

[SAS](https://en.wikipedia.org/wiki/SAS_(software)), the statistical software suite,
uses the `data set`

structure, which closely corresponds pandas’ `DataFrame`

.
Also SAS vectorized operations such as filtering or string processing operations
have similar functions in pandas.

## Tutorials[#](#tutorials)

For a quick overview of pandas functionality, see [10 Minutes to pandas](../user_guide/10min.html#min).

You can also reference the pandas [cheat sheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
for a succinct guide for manipulating data with pandas.

The community produces a wide variety of tutorials available online. Some of the
material is enlisted in the community contributed [Community tutorials](tutorials.html#communitytutorials).

---

## Source: https://pandas.pydata.org/docs/user_guide/index.html

# User Guide[#](#user-guide)

The User Guide covers all of pandas by topic area. Each of the subsections introduces a topic (such as “working with missing data”), and discusses how pandas approaches the problem, with many examples throughout.

Users brand-new to pandas should start with [10 minutes to pandas](10min.html#min).

For a high level summary of the pandas fundamentals, see [Intro to data structures](dsintro.html#dsintro) and [Essential basic functionality](basics.html#basics).

Further information on any specific method can be obtained in the
[API reference](../reference/index.html#api).

## How to read these guides[#](#how-to-read-these-guides)

In these guides you will see input code inside code blocks such as:

```
import pandas as pd
pd.DataFrame({'A': [1, 2, 3]})
```

or:

```
In [1]: import pandas as pd
In [2]: pd.DataFrame({'A': [1, 2, 3]})
Out[2]:
A
0 1
1 2
2 3
```

The first block is a standard python input, while in the second the `In [1]:`

indicates the input is inside a [notebook](https://jupyter.org). In Jupyter Notebooks the last line is printed and plots are shown inline.

For example:

```
In [3]: a = 1
In [4]: a
Out[4]: 1
```

is equivalent to:

```
a = 1
print(a)
```

## Guides[#](#guides)

[10 minutes to pandas](10min.html)[Intro to data structures](dsintro.html)[Essential basic functionality](basics.html)[IO tools (text, CSV, HDF5, …)](io.html)[CSV & text files](io.html#csv-text-files)[JSON](io.html#json)[HTML](io.html#html)[LaTeX](io.html#latex)[XML](io.html#xml)[Excel files](io.html#excel-files)[OpenDocument Spreadsheets](io.html#opendocument-spreadsheets)[Binary Excel (.xlsb) files](io.html#binary-excel-xlsb-files)[Calamine (Excel and ODS files)](io.html#calamine-excel-and-ods-files)[Clipboard](io.html#clipboard)[Pickling](io.html#pickling)[msgpack](io.html#msgpack)[HDF5 (PyTables)](io.html#hdf5-pytables)[Feather](io.html#feather)[Parquet](io.html#parquet)[Iceberg](io.html#iceberg)[ORC](io.html#orc)[SQL queries](io.html#sql-queries)[Google BigQuery](io.html#google-bigquery)[STATA format](io.html#stata-format)[SAS formats](io.html#sas-formats)[SPSS formats](io.html#spss-formats)[Other file formats](io.html#other-file-formats)[Performance considerations](io.html#performance-considerations)

[PyArrow Functionality](pyarrow.html)[Indexing and selecting data](indexing.html)[Different choices for indexing](indexing.html#different-choices-for-indexing)[Basics](indexing.html#basics)[Attribute access](indexing.html#attribute-access)[Slicing ranges](indexing.html#slicing-ranges)[Selection by label](indexing.html#selection-by-label)[Selection by position](indexing.html#selection-by-position)[Selection by callable](indexing.html#selection-by-callable)[Combining positional and label-based indexing](indexing.html#combining-positional-and-label-based-indexing)[Selecting random samples](indexing.html#selecting-random-samples)[Setting with enlargement](indexing.html#setting-with-enlargement)[Fast scalar value getting and setting](indexing.html#fast-scalar-value-getting-and-setting)[Boolean indexing](indexing.html#boolean-indexing)[Indexing with isin](indexing.html#indexing-with-isin)[The](indexing.html#the-where-method-and-masking)`where()`

Method and Masking[Setting with enlargement conditionally using](indexing.html#setting-with-enlargement-conditionally-using-numpy)`numpy()`

[The](indexing.html#the-query-method)`query()`

Method[Duplicate data](indexing.html#duplicate-data)[Dictionary-like](indexing.html#dictionary-like-get-method)`get()`

method[Looking up values by index/column labels](indexing.html#looking-up-values-by-index-column-labels)[Index objects](indexing.html#index-objects)[Set / reset index](indexing.html#set-reset-index)[Series Assignment and Index Alignment](indexing.html#series-assignment-and-index-alignment)

[MultiIndex / advanced indexing](advanced.html)[Copy-on-Write (CoW)](copy_on_write.html)[Merge, join, concatenate and compare](merging.html)[Reshaping and pivot tables](reshaping.html)[Working with text data](text.html)[Working with missing data](missing_data.html)[Duplicate Labels](duplicates.html)[Categorical data](categorical.html)[Nullable integer data type](integer_na.html)[Nullable Boolean data type](boolean.html)[Chart visualization](visualization.html)[Table Visualization](style.html)[Styler Object and Customising the Display](style.html#Styler-Object-and-Customising-the-Display)[Formatting the Display](style.html#Formatting-the-Display)[Styler Object and HTML](style.html#Styler-Object-and-HTML)[Methods to Add Styles](style.html#Methods-to-Add-Styles)[Table Styles](style.html#Table-Styles)[Setting Classes and Linking to External CSS](style.html#Setting-Classes-and-Linking-to-External-CSS)[Styler Functions](style.html#Styler-Functions)[Tooltips and Captions](style.html#Tooltips-and-Captions)[Finer Control with Slicing](style.html#Finer-Control-with-Slicing)[Optimization](style.html#Optimization)[Builtin Styles](style.html#Builtin-Styles)[Sharing styles](style.html#Sharing-styles)[Limitations](style.html#Limitations)[Other Fun and Useful Stuff](style.html#Other-Fun-and-Useful-Stuff)[Export to Excel](style.html#Export-to-Excel)[Export to LaTeX](style.html#Export-to-LaTeX)[More About CSS and HTML](style.html#More-About-CSS-and-HTML)[Extensibility](style.html#Extensibility)

[User-Defined Functions (UDFs)](user_defined_functions.html)[Group by: split-apply-combine](groupby.html)[Windowing operations](window.html)[Time series / date functionality](timeseries.html)[Overview](timeseries.html#overview)[Timestamps vs. time spans](timeseries.html#timestamps-vs-time-spans)[Converting to timestamps](timeseries.html#converting-to-timestamps)[Generating ranges of timestamps](timeseries.html#generating-ranges-of-timestamps)[Timestamp limitations](timeseries.html#timestamp-limitations)[Indexing](timeseries.html#indexing)[Time/date components](timeseries.html#time-date-components)[DateOffset objects](timeseries.html#dateoffset-objects)[Time Series-related instance methods](timeseries.html#time-series-related-instance-methods)[Resampling](timeseries.html#resampling)[Time span representation](timeseries.html#time-span-representation)[Converting between representations](timeseries.html#converting-between-representations)[Representing out-of-bounds spans](timeseries.html#representing-out-of-bounds-spans)[Time zone handling](timeseries.html#time-zone-handling)

[Time deltas](timedeltas.html)[Options and settings](options.html)[Enhancing performance](enhancingperf.html)[Scaling to large datasets](scale.html)[Sparse data structures](sparse.html)[Migration guide for the new string data type (pandas 3.0)](migration-3-strings.html)[Frequently Asked Questions (FAQ)](gotchas.html)[Cookbook](cookbook.html)

---

## Source: https://pandas.pydata.org/docs/reference/index.html

# API reference[#](#api-reference)

This page gives an overview of all public pandas objects, functions and
methods. All classes and functions exposed in `pandas.*`

namespace are public.

The following subpackages are public.

`pandas.errors`

: Custom exception and warnings classes that are raised by pandas.`pandas.plotting`

: Plotting public API.`pandas.testing`

: Functions that are useful for writing tests involving pandas objects.`pandas.api.extensions`

: Functions and classes for extending pandas objects.`pandas.api.indexers`

: Functions and classes for rolling window indexers.`pandas.api.interchange`

: DataFrame interchange protocol.`pandas.api.types`

: Datatype classes and functions.`pandas.api.typing`

: Classes that may be necessary for type-hinting. These are classes that are encountered as intermediate results but should not be instantiated directly by users. These classes are not to be confused with classes from the[pandas-stubs](https://github.com/pandas-dev/pandas-stubs)package which has classes in addition to those that occur in pandas for type-hinting.

In addition, public functions in `pandas.io`

, `pandas.tseries`

, `pandas.util`

submodules
are explicitly mentioned in the documentation. Further APIs in these modules are not guaranteed
to be stable.

Warning

The `pandas.core`

, `pandas.compat`

top-level modules are PRIVATE. Stable functionality in such modules is not guaranteed.

[Input/output](io.html)[General functions](general_functions.html)[Series](series.html)[Constructor](series.html#constructor)[Attributes](series.html#attributes)[Conversion](series.html#conversion)[Indexing, iteration](series.html#indexing-iteration)[Binary operator functions](series.html#binary-operator-functions)[Function application, GroupBy & window](series.html#function-application-groupby-window)[Computations / descriptive stats](series.html#computations-descriptive-stats)[Reindexing / selection / label manipulation](series.html#reindexing-selection-label-manipulation)[Missing data handling](series.html#missing-data-handling)[Reshaping, sorting](series.html#reshaping-sorting)[Combining / comparing / joining / merging](series.html#combining-comparing-joining-merging)[Time Series-related](series.html#time-series-related)[Accessors](series.html#accessors)[Plotting](series.html#plotting)[Serialization / IO / conversion](series.html#serialization-io-conversion)

[DataFrame](frame.html)[Constructor](frame.html#constructor)[Attributes and underlying data](frame.html#attributes-and-underlying-data)[Conversion](frame.html#conversion)[Indexing, iteration](frame.html#indexing-iteration)[Binary operator functions](frame.html#binary-operator-functions)[Function application, GroupBy & window](frame.html#function-application-groupby-window)[Computations / descriptive stats](frame.html#computations-descriptive-stats)[Reindexing / selection / label manipulation](frame.html#reindexing-selection-label-manipulation)[Missing data handling](frame.html#missing-data-handling)[Reshaping, sorting, transposing](frame.html#reshaping-sorting-transposing)[Combining / comparing / joining / merging](frame.html#combining-comparing-joining-merging)[Time Series-related](frame.html#time-series-related)[Flags](frame.html#flags)[Metadata](frame.html#metadata)[Plotting](frame.html#plotting)[Sparse accessor](frame.html#sparse-accessor)[Serialization / IO / conversion](frame.html#serialization-io-conversion)

[pandas arrays, scalars, and data types](arrays.html)[Index objects](indexing.html)[Date offsets](offset_frequency.html)[DateOffset](offset_frequency.html#dateoffset)[BusinessDay](offset_frequency.html#businessday)[BusinessHour](offset_frequency.html#businesshour)[CustomBusinessDay](offset_frequency.html#custombusinessday)[CustomBusinessHour](offset_frequency.html#custombusinesshour)[MonthEnd](offset_frequency.html#monthend)[MonthBegin](offset_frequency.html#monthbegin)[BusinessMonthEnd](offset_frequency.html#businessmonthend)[BusinessMonthBegin](offset_frequency.html#businessmonthbegin)[CustomBusinessMonthEnd](offset_frequency.html#custombusinessmonthend)[CustomBusinessMonthBegin](offset_frequency.html#custombusinessmonthbegin)[SemiMonthEnd](offset_frequency.html#semimonthend)[SemiMonthBegin](offset_frequency.html#semimonthbegin)[Week](offset_frequency.html#week)[WeekOfMonth](offset_frequency.html#weekofmonth)[LastWeekOfMonth](offset_frequency.html#lastweekofmonth)[BQuarterEnd](offset_frequency.html#bquarterend)[BQuarterBegin](offset_frequency.html#bquarterbegin)[QuarterEnd](offset_frequency.html#quarterend)[QuarterBegin](offset_frequency.html#quarterbegin)[BHalfYearEnd](offset_frequency.html#bhalfyearend)[BHalfYearBegin](offset_frequency.html#bhalfyearbegin)[HalfYearEnd](offset_frequency.html#halfyearend)[HalfYearBegin](offset_frequency.html#halfyearbegin)[BYearEnd](offset_frequency.html#byearend)[BYearBegin](offset_frequency.html#byearbegin)[YearEnd](offset_frequency.html#yearend)[YearBegin](offset_frequency.html#yearbegin)[FY5253](offset_frequency.html#fy5253)[FY5253Quarter](offset_frequency.html#fy5253quarter)[Easter](offset_frequency.html#easter)[Tick](offset_frequency.html#tick)[Day](offset_frequency.html#day)[Hour](offset_frequency.html#hour)[Minute](offset_frequency.html#minute)[Second](offset_frequency.html#second)[Milli](offset_frequency.html#milli)[Micro](offset_frequency.html#micro)[Nano](offset_frequency.html#nano)

[Frequencies](offset_frequency.html#frequencies)[Window](window.html)[GroupBy](groupby.html)[Resampling](resampling.html)[Style](style.html)[Plotting](plotting.html)[pandas.plotting.andrews_curves](api/pandas.plotting.andrews_curves.html)[pandas.plotting.autocorrelation_plot](api/pandas.plotting.autocorrelation_plot.html)[pandas.plotting.bootstrap_plot](api/pandas.plotting.bootstrap_plot.html)[pandas.plotting.boxplot](api/pandas.plotting.boxplot.html)[pandas.plotting.deregister_matplotlib_converters](api/pandas.plotting.deregister_matplotlib_converters.html)[pandas.plotting.lag_plot](api/pandas.plotting.lag_plot.html)[pandas.plotting.parallel_coordinates](api/pandas.plotting.parallel_coordinates.html)[pandas.plotting.plot_params](api/pandas.plotting.plot_params.html)[pandas.plotting.radviz](api/pandas.plotting.radviz.html)[pandas.plotting.register_matplotlib_converters](api/pandas.plotting.register_matplotlib_converters.html)[pandas.plotting.scatter_matrix](api/pandas.plotting.scatter_matrix.html)[pandas.plotting.table](api/pandas.plotting.table.html)

[Options and settings](options.html)[Extensions](extensions.html)[pandas.api.extensions.register_extension_dtype](api/pandas.api.extensions.register_extension_dtype.html)[pandas.api.extensions.register_dataframe_accessor](api/pandas.api.extensions.register_dataframe_accessor.html)[pandas.api.extensions.register_series_accessor](api/pandas.api.extensions.register_series_accessor.html)[pandas.api.extensions.register_index_accessor](api/pandas.api.extensions.register_index_accessor.html)[pandas.api.extensions.ExtensionDtype](api/pandas.api.extensions.ExtensionDtype.html)[pandas.api.extensions.ExtensionArray](api/pandas.api.extensions.ExtensionArray.html)[pandas.arrays.NumpyExtensionArray](api/pandas.arrays.NumpyExtensionArray.html)[pandas.api.indexers.check_array_indexer](api/pandas.api.indexers.check_array_indexer.html)

[Testing](testing.html)[Missing values](missing_value.html)[pandas typing aliases](aliases.html)

---

## Source: https://pandas.pydata.org/docs/development/index.html

Development# Contributing to pandas Bug reports and enhancement requests Finding an issue to contribute to Submitting a pull request Tips for a successful pull request Creating a development environment Step 1: install a C compiler Step 2: create an isolated environment Step 3: build and install pandas Contributing to the documentation About the pandas documentation Updating a pandas docstring How to build the pandas documentation Previewing changes Contributing to the code base Code standards Pre-commit Optional dependencies Backwards compatibility Type hints Testing with continuous integration Test-driven development Running the test suite Running the performance test suite Documenting your code pandas maintenance Roles Tasks Issue triage Investigating regressions Closing issues Reviewing pull requests Backporting Cleaning up old issues Cleaning up old pull requests Becoming a pandas maintainer Merging pull requests Release process Internals Indexing Subclassing pandas data structures Copy on write Reference tracking Debugging C extensions Debugging locally Using cygdb for Cython debugging Editor support Extending pandas Registering custom accessors Extension types Subclassing pandas data structures Plotting backends Arithmetic with 3rd party types Developer Storing pandas DataFrame objects in Apache Parquet format Policies Version policy Python support Security policy Contributor community Community meeting New contributor meeting Calendar GitHub issue tracker The developer mailing list Community slack

---

## Source: https://pandas.pydata.org/docs/whatsnew/index.html

# Release notes[#](#release-notes)

This is the list of changes to pandas between each release. For full details,
see the [commit logs](https://github.com/pandas-dev/pandas/commits/). For install and
upgrade instructions, see [Installation](../getting_started/install.html#install).

This is the list of changes to pandas between each release. For full details,
see the [commit logs](https://github.com/pandas-dev/pandas/commits/). For install and
upgrade instructions, see [Installation](../getting_started/install.html#install).

---

## Source: https://pandas.pydata.org/

# pandas

**pandas** is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool,

built on top of the [Python](https://www.python.org) programming language.

##### Getting started

##### Documentation

##### Community

##### With the support of:

The full list of companies supporting *pandas* is available in the [sponsors page](about/sponsors.html).

#### Latest version: 3.0.1

[What's new in 3.0.1](docs/whatsnew/v3.0.1.html)- Release date:

Feb 17, 2026 [Documentation (web)](docs/)[Download source code](https://github.com/pandas-dev/pandas/releases/download/v3.0.1/pandas-3.0.1.tar.gz)