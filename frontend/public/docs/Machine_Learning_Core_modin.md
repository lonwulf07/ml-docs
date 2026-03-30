# Modin Documentation
> Scraped on: 2026-03-30 | Root Source: [https://modin.readthedocs.io/en/stable/](https://modin.readthedocs.io/en/stable/)



---

## Source: https://modin.readthedocs.io/en/stable/

**To use Modin, replace the pandas import:**

# Scale your pandas workflow by changing a single line of code[#](#scale-your-pandas-workflow-by-changing-a-single-line-of-code)

Modin uses [Ray](https://github.com/ray-project/ray/), [Dask](https://dask.org/) or [Unidist](https://github.com/modin-project/unidist/) to provide an effortless way to speed up your pandas notebooks,
scripts, and libraries. Unlike other distributed DataFrame libraries, Modin provides
seamless integration and compatibility with existing pandas code. Even using the
DataFrame constructor is identical.

```
import modin.pandas as pd
import numpy as np
frame_data = np.random.randint(0, 100, size=(2**10, 2**8))
df = pd.DataFrame(frame_data)
```

It is not necessary to know in advance the available hardware resources in order to use Modin.
Additionally, it is not necessary to specify how to distribute or place data.
Modin acts as a drop-in replacement for pandas, which means that you can continue using your previous
pandas notebooks, *unchanged*, while experiencing a considerable speedup thanks to Modin, even on a single
machine. Once you’ve changed your import statement, you’re ready to use Modin just like
you would pandas.

# Installation and choosing your compute engine[#](#installation-and-choosing-your-compute-engine)

Modin can be installed from PyPI:

```
pip install modin
```

If you don’t have [Ray](https://github.com/ray-project/ray/), [Dask](https://dask.org/) or [Unidist](https://github.com/modin-project/unidist/) installed, you will need to install Modin with one
of the targets:

```
pip install "modin[ray]" # Install Modin dependencies and Ray to run on Ray
pip install "modin[dask]" # Install Modin dependencies and Dask to run on Dask
pip install "modin[mpi]" # Install Modin dependencies and MPI to run on MPI through unidist
pip install "modin[all]" # Install all of the above
```

Modin will automatically detect which engine you have installed and use that for scheduling computation!

If you want to choose a specific compute engine to run on, you can set the environment
variable `MODIN_ENGINE`

and Modin will do computation with that engine:

```
export MODIN_ENGINE=ray # Modin will use Ray
export MODIN_ENGINE=dask # Modin will use Dask
export MODIN_ENGINE=unidist # Modin will use Unidist
```

If you want to choose the Unidist engine, you should set the additional environment
variable `UNIDIST_BACKEND`

, because currently Modin only supports MPI through unidist:

```
export UNIDIST_BACKEND=mpi # Unidist will use MPI backend
```

This can also be done within a notebook/interpreter before you import Modin:

```
import os
os.environ["MODIN_ENGINE"] = "ray" # Modin will use Ray
os.environ["MODIN_ENGINE"] = "dask" # Modin will use Dask
os.environ["MODIN_ENGINE"] = "unidist" # Modin will use Unidist
os.environ["UNIDIST_BACKEND"] = "mpi" # Unidist will use MPI backend
import modin.pandas as pd
```

# Faster pandas, even on your laptop[#](#faster-pandas-even-on-your-laptop)


The `modin.pandas`

[DataFrame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) is an extremely light-weight parallel DataFrame. Modin
transparently distributes the data and computation so that all you need to do is
continue using the pandas API as you were before installing Modin. Unlike other parallel
DataFrame systems, Modin is an extremely light-weight, robust DataFrame. Because it is so
light-weight, Modin provides speed-ups of up to 4x on a laptop with 4 physical cores.

In pandas, you are only able to use one core at a time when you are doing computation of
any kind. With Modin, you are able to use all of the CPU cores on your machine. Even in
`read_csv`

, we see large gains by efficiently distributing the work across your entire
machine.

```
import modin.pandas as pd
df = pd.read_csv("my_dataset.csv")
```

# Modin is a DataFrame for datasets from 1MB to 1TB+[#](#modin-is-a-dataframe-for-datasets-from-1mb-to-1tb)

We have focused heavily on bridging the solutions between DataFrames for small data (e.g. pandas) and large data. Often data scientists require different tools for doing the same thing on different sizes of data. The DataFrame solutions that exist for 1MB do not scale to 1TB+, and the overheads of the solutions for 1TB+ are too costly for datasets in the 1KB range. With Modin, because of its light-weight, robust, and scalable nature, you get a fast DataFrame at 1MB and 1TB+.

**Modin is currently under active development. Requests and contributions are welcome!**

If you are interested in learning more about Modin, please check out the [Getting Started](getting_started/quickstart.html)
guide then refer to the [Developer Documentation](development/index.html) section,
where you can find system architecture, internal implementation details, and other useful information.
Also check out the [Github](https://github.com/modin-project/modin) to view open issues and make contributions.

---

## Source: https://modin.readthedocs.io/en/stable/getting_started/quickstart.html

# Getting Started[#](#getting-started)

Note

*Estimated Reading Time: 10 minutes*

[here](https://github.com/modin-project/modin/tree/main/examples/quickstart.ipynb).

## Quick Start Guide[#](#quick-start-guide)

To install the most recent stable release for Modin run the following:

```
pip install "modin[all]"
```

For further instructions on how to install Modin with conda or for specific platforms
or engines, see our detailed [installation guide](../getting_started/installation.html).

Modin acts as a drop-in replacement for pandas so you simply have to replace the import of pandas with the import of Modin as follows to speed up your pandas workflows:

```
# import pandas as pd
import modin.pandas as pd
```

## Example: Instant Scalability with No Extra Effort[#](#example-instant-scalability-with-no-extra-effort)

When working on large datasets, pandas becomes painfully slow or [runs out of memory](why_modin/out_of_core.html). Modin automatically scales up your
pandas workflows by parallelizing the dataframe operations, so that you can more
effectively leverage the compute resources available.

For the purpose of demonstration, we will load in modin as `pd`

and pandas as
`pandas`

.

```
import modin.pandas as pd
import pandas
#############################################
### For the purpose of timing comparisons ###
#############################################
import time
import ray
# Look at the Ray documentation with respect to the Ray configuration suited to you most.
ray.init()
#############################################
```

In this toy example, we look at the NYC taxi dataset, which is around 200MB in size. You can download [this dataset](https://modin-datasets.intel.com/testing/yellow_tripdata_2015-01.csv) to run the example locally.

```
# This may take a few minutes to download
import urllib.request
dataset_url = "https://modin-datasets.intel.com/testing/yellow_tripdata_2015-01.csv"
urllib.request.urlretrieve(dataset_url, "taxi.csv")
```

### Faster Data Loading with `read_csv`

[#](#faster-data-loading-with-read-csv)

```
start = time.time()
pandas_df = pandas.read_csv(dataset_url, parse_dates=["tpep_pickup_datetime", "tpep_dropoff_datetime"], quoting=3)
end = time.time()
pandas_duration = end - start
print("Time to read with pandas: {} seconds".format(round(pandas_duration, 3)))
```

By running the same command `read_csv`

with Modin, we generally get around 4X speedup
for loading in the data in parallel.

```
start = time.time()
modin_df = pd.read_csv(dataset_url, parse_dates=["tpep_pickup_datetime", "tpep_dropoff_datetime"], quoting=3)
end = time.time()
modin_duration = end - start
print("Time to read with Modin: {} seconds".format(round(modin_duration, 3)))
print("Modin is {}x faster than pandas at `read_csv`!".format(round(pandas_duration / modin_duration, 2)))
```

### Faster `concat`

across multiple dataframes[#](#faster-concat-across-multiple-dataframes)

Our previous `read_csv`

example operated on a relatively small dataframe. In the
following example, we duplicate the same taxi dataset 100 times and then concatenate
them together, resulting in a dataset around 19GB in size.

```
start = time.time()
big_pandas_df = pandas.concat([pandas_df for _ in range(25)])
end = time.time()
pandas_duration = end - start
print("Time to concat with pandas: {} seconds".format(round(pandas_duration, 3)))
```

```
start = time.time()
big_modin_df = pd.concat([modin_df for _ in range(25)])
end = time.time()
modin_duration = end - start
print("Time to concat with Modin: {} seconds".format(round(modin_duration, 3)))
print("Modin is {}x faster than pandas at `concat`!".format(round(pandas_duration / modin_duration, 2)))
```

Modin speeds up the `concat`

operation by more than 60X, taking less than a second to
create the large dataframe, while pandas took close to a minute.

### Faster `apply`

over a single column[#](#faster-apply-over-a-single-column)

The performance benefits of Modin become apparent when we operate on large
gigabyte-scale datasets. Let’s say we want to round up values
across a single column via the `apply`

operation.

```
start = time.time()
rounded_trip_distance_pandas = big_pandas_df["trip_distance"].apply(round)
end = time.time()
pandas_duration = end - start
print("Time to apply with pandas: {} seconds".format(round(pandas_duration, 3)))
```

```
start = time.time()
rounded_trip_distance_modin = big_modin_df["trip_distance"].apply(round)
end = time.time()
modin_duration = end - start
print("Time to apply with Modin: {} seconds".format(round(modin_duration, 3)))
print("Modin is {}x faster than pandas at `apply` on one column!".format(round(pandas_duration / modin_duration, 2)))
```

Modin is more than 30X faster at applying a single column of data, operating on 130+ million rows in a second.

In short, Modin provides orders of magnitude speed up over pandas for a variety of operations out of the box.

## Summary[#](#summary)

Hopefully, this tutorial demonstrated how Modin delivers significant speedup on pandas operations without the need for any extra effort. Throughout example, we moved from working with 100MBs of data to 20GBs of data all without having to change anything or manually optimize our code to achieve the level of scalable performance that Modin provides.

Note that in this quickstart example, we’ve only shown `read_csv`

, `concat`

,
`apply`

, but these are not the only pandas operations that Modin optimizes for. In
fact, Modin covers [more than 90% of the pandas API](https://github.com/modin-project/modin/blob/main/README.md#pandas-api-coverage), yielding considerable speedups for
many common operations.

---

## Source: https://modin.readthedocs.io/en/stable/usage_guide/index.html

# Usage Guide[#](#usage-guide)

This guide describes both basic and advanced Modin usage, including usage examples, details regarding Modin configuration settings, as well as tips and tricks on how you can further optimize the performance of your workload with Modin.

[Modin Configuration Settings](../flow/modin/config.html)[Modin Usage Examples](examples/index.html)[Advanced Usage](advanced_usage/index.html)[Optimization Notes](optimization_notes/index.html)[Range-partitioning in Modin](optimization_notes/index.html#range-partitioning-in-modin)[Dynamic-partitioning in Modin](optimization_notes/index.html#dynamic-partitioning-in-modin)[Understanding Modin’s partitioning mechanism](optimization_notes/index.html#understanding-modin-s-partitioning-mechanism)[Avoid iterating over Modin DataFrame](optimization_notes/index.html#avoid-iterating-over-modin-dataframe)[Use Modin’s Dataframe Algebra API to implement custom parallel functions](optimization_notes/index.html#use-modin-s-dataframe-algebra-api-to-implement-custom-parallel-functions)[Avoid mixing pandas and Modin DataFrames](optimization_notes/index.html#avoid-mixing-pandas-and-modin-dataframes)[Using pandas to execute queries with Modin’s](optimization_notes/index.html#using-pandas-to-execute-queries-with-modin-s-pandas-backend)`"Pandas"`

backend[Automatic backend switching](optimization_notes/index.html#automatic-backend-switching)[Operation-specific optimizations](optimization_notes/index.html#operation-specific-optimizations)

[Benchmarking Modin](benchmarking.html)[Third Party Library Integrations](integrations.html)

---

## Source: https://modin.readthedocs.io/en/stable/supported_apis/index.html

# Supported APIs[#](#supported-apis)

For your convenience, we have compiled a list of currently implemented APIs and methods available in Modin. This documentation is updated as new methods and APIs are merged into the main branch, and not necessarily correct as of the most recent release.

To view the docs for the most recent release, check that you’re viewing the
[stable version](https://modin.readthedocs.io/en/stable/supported_apis/index.html) of the docs.

In order to install the latest version of Modin, follow the directions found on the
[installation page](../getting_started/installation.html).

## Questions on implementation details[#](#questions-on-implementation-details)

If you have a question about the implementation details or would like more information
about an API or method in Modin, please contact the Modin [developer mailing list](https://groups.google.com/forum/#!forum/modin-dev).

---

## Source: https://modin.readthedocs.io/en/stable/development/index.html

Development# Contributing Getting Started Certificate of Origin CERTIFICATE OF ORIGIN V 1.1 Commit Message formatting General Rules for committers Development Dependencies Code Formatting and Lint Adding a test Running the tests Performance measurement Building documentation Contributing a new execution framework or in-memory format System Architecture High-Level Architectural View System View Subsystem/Container View Component View Data Transformation Query Compiler Automatic Engine Switching and Casting Core Modin Dataframe Core Modin Dataframe API Partition Manager Partitions Execution Engine Storage Format Data Ingress Data Egress Supported Execution Engines and Storage Formats DataFrame Partitioning Index API Base pandas Dataset API Public API DataFrame Module Overview Modin’s pandas.DataFrame API Usage Guide Series Module Overview Modin’s pandas.Series API Usage Guide Module/Class View Partition API in Modin Partition IPs Partition API implementations Ray engine Dask engine Unidist engine How to handle Ray objects that are lower than 100 kB pandas on Ray pandas on Dask Using Modin on Dask locally Using Modin on Dask in a Cluster Conversion between Modin DataFrame and Dask DataFrame pandas on Python pandas on MPI through unidist

---

## Source: https://modin.readthedocs.io/en/stable/ecosystem.html

# Ecosystem[#](#ecosystem)

There is a constantly growing number of users and packages using pandas to address their specific needs in data preparation, analysis and visualization. pandas is being used ubiquitously and is a good choise to handle small-sized data. However, pandas scales poorly and is non-interactive on moderate to large datasets. Modin provides a drop-in replacement API for pandas and scales computation across nodes and CPUs available. What you need to do to switch to Modin is just replace a single line of code.

```
# import pandas as pd
import modin.pandas as pd
```

While most packages can consume a pandas DataFrame and operate it efficiently,
this is not the case with a Modin DataFrame due to its distributed nature.
Thus, some packages may lack support for handling Modin DataFrame(s) correctly and,
moreover, efficiently. Modin implements such methods as `__array__`

, `__dataframe__`

, etc.
to facilitate other libraries to consume a Modin DataFrame. If you feel that a certain library
can operate efficiently with a specific format of data, it is possible to convert a Modin DataFrame
to the format preferred.

## to_pandas[#](#to-pandas)

You can refer to [pandas ecosystem](https://pandas.pydata.org/community/ecosystem.html) page to get more details on
where pandas can be used and what libraries it powers.

```
from modin.pandas.io import to_pandas
pandas_df = to_pandas(modin_df)
```

## to_numpy[#](#to-numpy)

You can refer to [NumPy ecosystem](https://numpy.org) section of NumPy documentation to get more details on
where NumPy can be used and what libraries it powers.

```
from modin.pandas.io import to_numpy
numpy_arr = to_numpy(modin_df)
```

## to_ray[#](#to-ray)

You can refer to [Ray Data](https://docs.ray.io/en/latest/data/data.html) page to get more details on
where Ray Dataset can be used and what libraries it powers.

```
from modin.pandas.io import to_ray
ray_dataset = to_ray(modin_df)
```

## to_dask[#](#to-dask)

You can refer to [Dask DataFrame](https://docs.dask.org/en/stable/dataframe.html) page to get more details on
where Dask DataFrame can be used and what libraries it powers.

```
from modin.pandas.io import to_dask
dask_df = to_dask(modin_df)
```

---

## Source: https://modin.readthedocs.io/en/stable/contact.html

# Contact[#](#contact)

## Slack[#](#slack)

Join our [Slack](https://modin.org/slack.html) community to connect with Modin users and contributors,
discuss, and ask questions about all things Modin-related.

## Mailing List[#](#mailing-list)

General questions, potential contributors, and ideas can be directed to the
[developer mailing list](https://groups.google.com/forum/#!forum/modin-dev). It is an open Google Group, so feel free to join anytime! If
you are unsure about where to ask or post something, the mailing list is a good place to
ask as well.

## Issues[#](#issues)

Bug reports and feature requests can be directed to the [issues](https://github.com/modin-project/modin/issues) page of the Modin
GitHub repo.

---

## Source: https://modin.readthedocs.io/en/stable/_sources/index.rst.txt

.. image:: img/MODIN_ver2_hrz.png
:width: 400px
:alt: modin logo
:align: center
====
.. toctree::
:hidden:
getting_started/quickstart
usage_guide/index
supported_apis/index
development/index
ecosystem
contact
.. raw:: html

**To use Modin, replace the pandas import:**

.. figure:: img/Modin_Pandas_Import.gif
:align: center
Scale your pandas workflow by changing a single line of code
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Modin uses Ray_, Dask_ or Unidist_ to provide an effortless way to speed up your pandas notebooks,
scripts, and libraries. Unlike other distributed DataFrame libraries, Modin provides
seamless integration and compatibility with existing pandas code. Even using the
DataFrame constructor is identical.
.. code-block:: python
import modin.pandas as pd
import numpy as np
frame_data = np.random.randint(0, 100, size=(2**10, 2**8))
df = pd.DataFrame(frame_data)
It is not necessary to know in advance the available hardware resources in order to use Modin.
Additionally, it is not necessary to specify how to distribute or place data.
Modin acts as a drop-in replacement for pandas, which means that you can continue using your previous
pandas notebooks, *unchanged*, while experiencing a considerable speedup thanks to Modin, even on a single
machine. Once you've changed your import statement, you’re ready to use Modin just like
you would pandas.
Installation and choosing your compute engine
"""""""""""""""""""""""""""""""""""""""""""""
Modin can be installed from PyPI:
.. code-block:: bash
pip install modin
If you don't have Ray_, Dask_ or Unidist_ installed, you will need to install Modin with one
of the targets:
.. code-block:: bash
pip install "modin[ray]" # Install Modin dependencies and Ray to run on Ray
pip install "modin[dask]" # Install Modin dependencies and Dask to run on Dask
pip install "modin[mpi]" # Install Modin dependencies and MPI to run on MPI through unidist
pip install "modin[all]" # Install all of the above
Modin will automatically detect which engine you have installed and use that for
scheduling computation!
If you want to choose a specific compute engine to run on, you can set the environment
variable ``MODIN_ENGINE`` and Modin will do computation with that engine:
.. code-block:: bash
export MODIN_ENGINE=ray # Modin will use Ray
export MODIN_ENGINE=dask # Modin will use Dask
export MODIN_ENGINE=unidist # Modin will use Unidist
If you want to choose the Unidist engine, you should set the additional environment
variable ``UNIDIST_BACKEND``, because currently Modin only supports MPI through unidist:
.. code-block:: bash
export UNIDIST_BACKEND=mpi # Unidist will use MPI backend
This can also be done within a notebook/interpreter before you import Modin:
.. code-block:: python
import os
os.environ["MODIN_ENGINE"] = "ray" # Modin will use Ray
os.environ["MODIN_ENGINE"] = "dask" # Modin will use Dask
os.environ["MODIN_ENGINE"] = "unidist" # Modin will use Unidist
os.environ["UNIDIST_BACKEND"] = "mpi" # Unidist will use MPI backend
import modin.pandas as pd
Faster pandas, even on your laptop
""""""""""""""""""""""""""""""""""
.. image:: img/read_csv_benchmark.png
:height: 350px
:width: 300px
:alt: Plot of read_csv
:align: right
The ``modin.pandas`` `DataFrame`_ is an extremely light-weight parallel DataFrame. Modin
transparently distributes the data and computation so that all you need to do is
continue using the pandas API as you were before installing Modin. Unlike other parallel
DataFrame systems, Modin is an extremely light-weight, robust DataFrame. Because it is so
light-weight, Modin provides speed-ups of up to 4x on a laptop with 4 physical cores.
In pandas, you are only able to use one core at a time when you are doing computation of
any kind. With Modin, you are able to use all of the CPU cores on your machine. Even in
``read_csv``, we see large gains by efficiently distributing the work across your entire
machine.
.. code-block:: python
import modin.pandas as pd
df = pd.read_csv("my_dataset.csv")
Modin is a DataFrame for datasets from 1MB to 1TB+
""""""""""""""""""""""""""""""""""""""""""""""""""
We have focused heavily on bridging the solutions between DataFrames for small data
(e.g. pandas) and large data. Often data scientists require different tools for doing
the same thing on different sizes of data. The DataFrame solutions that exist for 1MB do
not scale to 1TB+, and the overheads of the solutions for 1TB+ are too costly for
datasets in the 1KB range. With Modin, because of its light-weight, robust, and scalable
nature, you get a fast DataFrame at 1MB and 1TB+.
**Modin is currently under active development. Requests and contributions are welcome!**
If you are interested in learning more about Modin, please check out the :doc:`Getting Started`
guide then refer to the :doc:`Developer Documentation` section,
where you can find system architecture, internal implementation details, and other useful information.
Also check out the `Github`_ to view open issues and make contributions.
.. _Dataframe: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html
.. _Ray: https://github.com/ray-project/ray/
.. _Dask: https://dask.org/
.. _Unidist: https://github.com/modin-project/unidist/
.. _Github: https://github.com/modin-project/modin