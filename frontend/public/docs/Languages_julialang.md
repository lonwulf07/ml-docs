# Julialang Documentation
> Scraped on: 2026-03-30 | Root Source: [https://julialang.org/learning/](https://julialang.org/learning/)



---

## Source: https://julialang.org/learning/

Do you learn best by watching instructor led videos on programming? Check out the free [Julia video courses on YouTube](https://www.youtube.com/user/JuliaLanguage/playlists), prepared by core Julia developers and community members.

Prefer to learn by doing exercises and getting feedback from a team of welcoming mentors? Check out the Julia Track on [Exercism.org](https://exercism.org/tracks/julia).

Want to just give it a shot and dive right into the Julia documentation? Check out the [getting started guide](https://docs.julialang.org/en/v1/manual/getting-started/).

A growing number of curated Julia courses are freely available on [YouTube](https://www.youtube.com/user/JuliaLanguage).

|

Community members have created a wide range of [written tutorials](tutorials/) covering Julia from beginner to advanced levels. Once you're familiar with the language, [ModernJuliaWorkflows](https://modernjuliaworkflows.github.io/) will teach you the secrets of productive Julia development.

Interested in getting a Julia book? Check out the [amazing books members of our community have written](books/) since Julia was created.

[Pluto.jl](https://plutojl.org/) is a Julia programming environment designed for *learning and teaching*, and it is a great way to get started with Julia programming, packages and visualisation.

Pluto.jl is [easy to install](https://plutojl.org/#install), and you can write interactive documents with no prior experience.

Julia is ready for the classroom. We encourage instructors to participate in the [Julia community](/community/) for questions about Julia or specific packages. This page puts together various resources that instructors and students alike may find useful. See [where Julia is being taught today](classes/).

---

## Source: https://julialang.org/

[JuliaCon Global 2026](https://juliacon.org/2026) is happening this year — visit [juliacon.org/2026](https://juliacon.org/2026) for details.
[Watch JuliaCon 2025 ↓](#juliacon-videos)

Julia was designed for [high performance](/benchmarks/).
Julia programs automatically compile to efficient native code via LLVM, and support [multiple platforms](/downloads/support).

Julia is [dynamically typed](https://docs.julialang.org/en/v1/manual/types/), feels like a scripting language, and has good support for [interactive](https://docs.julialang.org/en/v1/stdlib/REPL/) use, but can also optionally be separately compiled.

[Reproducible environments](https://julialang.github.io/Pkg.jl/v1/environments/) make it possible to recreate the same Julia environment every time, across platforms, with [pre-built binaries](https://binarybuilder.org).

Julia uses [multiple dispatch](https://docs.julialang.org/en/v1/manual/methods/) as a paradigm, making it easy to express many object-oriented and [functional](https://docs.julialang.org/en/v1/manual/functions/) programming patterns. The talk on the [Unreasonable Effectiveness of Multiple Dispatch](https://www.youtube.com/watch?v=kc9HwsxE1OY) explains why it works so well.

Julia provides [asynchronous I/O](https://docs.julialang.org/en/v1/manual/networking-and-streams/), [metaprogramming](https://docs.julialang.org/en/v1/manual/metaprogramming/), [debugging](https://github.com/JuliaDebug/Debugger.jl), [logging](https://docs.julialang.org/en/v1/stdlib/Logging/), [profiling](https://docs.julialang.org/en/v1/manual/profile/), a [package manager](https://docs.julialang.org/en/v1/stdlib/Pkg/index.html), and the ability to [build binaries](https://github.com/JuliaLang/JuliaC.jl).

Julia is an open source project with over 1,000 contributors. It is made available under the [MIT license](https://github.com/JuliaLang/julia/blob/master/LICENSE.md). The [source code](https://github.com/JuliaLang/julia) is available on GitHub. Julia has a [welcoming community](/community/) accessible to all backgrounds.

Julia makes it possible to build complete applications. Write web UIs with [Dash.jl](https://github.com/plotly/Dash.jl) and [Genie.jl](https://github.com/GenieFramework/Genie.jl) or native UIs with [Gtk4.jl](https://github.com/JuliaGtk/Gtk4.jl). Pull data from [a variety of databases](https://juliadatabases.org). Build shared libraries and executables with [PackageCompiler](https://github.com/JuliaLang/PackageCompiler.jl). Deploy on a webserver with [HTTP.jl](https://github.com/JuliaWeb/HTTP.jl) or embedded devices. Powerful shell integration makes it easy to [manage other processes](https://docs.julialang.org/en/v1/manual/running-external-programs/).

Julia has foreign function interfaces for
[C, Fortran](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/),
[C++](https://github.com/JuliaInterop/CxxWrap.jl),
[Python](https://github.com/JuliaPy/PythonCall.jl),
[R](https://github.com/JuliaInterop/RCall.jl),
[Java](https://github.com/JuliaInterop/JavaCall.jl),
[Mathematica](https://github.com/JuliaInterop/MathLink.jl),
[Matlab](https://github.com/JuliaInterop/MATLAB.jl),
and many other languages. Julia can also be embedded in other programs through its [embedding API](https://docs.julialang.org/en/v1/manual/embedding/). Julia's [PackageCompiler](https://github.com/JuliaLang/PackageCompiler.jl) makes it possible to build binaries from Julia programs that can be integrated into larger projects. Python programs can call Julia using [juliacall](https://github.com/JuliaPy/PythonCall.jl). R programs can do the same with [R's JuliaCall](https://cran.r-project.org/web/packages/JuliaCall/index.html), which is demonstrated by [calling MixedModels.jl from R](https://rpubs.com/dmbates/377897). Mathematica supports [calling Julia through its External Evaluation System](https://reference.wolfram.com/language/ref/externalevaluationsystem/Julia.html).

Julia is designed for parallelism, and provides built-in primitives for parallel computing at every level:
[ instruction level parallelism](https://github.com/JuliaSIMD/LoopVectorization.jl),
[multi-threading](https://docs.julialang.org/en/v1/manual/multi-threading/),
[GPU computing](https://juliagpu.org), and
[distributed computing](https://docs.julialang.org/en/v1/manual/distributed-computing/).
[Oceananigans.jl](https://github.com/CliMA/Oceananigans.jl) [achieved breakthrough resolution and energy efficiency in global ocean simulations](https://arxiv.org/abs/2309.06662) running on 768 A100 GPUs.

The Julia compiler can also generate native code for [GPUs](https://juliagpu.org). Packages such as [DistributedArrays.jl](https://github.com/JuliaParallel/DistributedArrays.jl) and [Dagger.jl](https://github.com/JuliaParallel/Dagger.jl) provide higher levels of abstraction for parallelism. MPI style parallelism is also available through [MPI.jl](https://github.com/JuliaParallel/MPI.jl).

The [MLJ.jl](https://github.com/JuliaAI/MLJ.jl) package provides a unified interface to common machine learning algorithms, which include
[generalized linear models](https://github.com/JuliaStats/GLM.jl), [decision trees](https://github.com/dmlc/XGBoost.jl), and [clustering](https://github.com/JuliaStats/Clustering.jl).
[Flux.jl](https://github.com/FluxML/Flux.jl) and [Lux.jl](https://github.com/LuxDL/Lux.jl) are powerful packages for Deep Learning.
Packages such as [Metalhead.jl](https://github.com/FluxML/Metalhead.jl) and [TextAnalysis.jl](https://github.com/JuliaText/TextAnalysis.jl) provide ready to use pre-trained models for common tasks.
[AlphaZero.jl](https://github.com/jonathan-laurent/AlphaZero.jl) provides a high performance implementation of the reinforcement learning algorithms from AlphaZero. [Turing.jl](https://turinglang.org) is a best in class package for probabilistic programming.

Julia is designed from the ground up to be very good at numerical and scientific computing.
This can be seen in the abundance of scientific tooling written in Julia, such as the state-of-the-art differential equations ecosystem [(DifferentialEquations.jl)](https://github.com/SciML/DifferentialEquations.jl), optimization tools ([JuMP.jl](https://github.com/jump-dev/JuMP.jl) and [Optimization.jl](https://github.com/SciML/Optimization.jl)), iterative linear solvers ([Krylov.jl](https://github.com/JuliaSmoothOptimizers/Krylov.jl), [LinearSolve.jl](https://github.com/SciML/LinearSolve.jl)), Fast Fourier transforms [(AbstractFFTs.jl)](https://github.com/JuliaMath/AbstractFFTs.jl), and much more. General purpose simulation frameworks are available for [Scientific Machine Learning](https://sciml.ai), [Quantum computing](https://github.com/QuantumBFS/Yao.jl) and much more.

Julia also offers a number of domain-specific ecosystems, such as in biology [ (BioJulia)](https://github.com/BioJulia), operations research [ (JuMP Dev)](https://jump.dev), image processing [(JuliaImages)](https://juliaimages.github.io/latest/), quantum physics [(QuantumBFS)](https://github.com/QuantumBFS), nonlinear dynamics [ (JuliaDynamics)](https://github.com/JuliaDynamics), quantitative economics [(QuantEcon)](https://github.com/QuantEcon), astronomy [ (JuliaAstro)](https://juliaastro.github.io) and ecology [(EcoJulia)](https://github.com/EcoJulia). With a set of highly enthusiastic developers and maintainers, the scientific ecosystem in Julia continues to grow rapidly.

The Julia data ecosystem provides [DataFrames.jl](https://github.com/JuliaData/DataFrames.jl) to work with datasets, and perform common data manipulations. [CSV.jl](https://github.com/JuliaData/CSV.jl) is a fast multi-threaded package to read CSV files and integration with the Arrow ecosystem is in the works with [Arrow.jl](https://github.com/apache/arrow-julia). Online computations on streaming data can be performed with [OnlineStats.jl](https://github.com/joshday/OnlineStats.jl).
The [Queryverse](https://www.queryverse.org/) provides query, file IO and visualization functionality. In addition to working with tabular data, the [JuliaGraphs](https://juliagraphs.org/) packages make it easy to work with combinatorial data.

Julia can work with almost all databases using [ODBC.jl](https://github.com/JuliaDatabases/ODBC.jl) drivers.

Data visualization has a complicated history. Plotting software makes trade-offs between features and simplicity, speed and beauty, and a static and dynamic interface. Some packages make a display and never change it, while others make updates in real-time.

[Makie.jl](https://github.com/MakieOrg/Makie.jl) is a sophisticated package for complex graphics and animations. [Plots.jl](https://github.com/JuliaPlots/Plots.jl) is a visualization interface and toolset. It provides a common API across various [backends](https://docs.juliaplots.org/latest/backends/), like [GR.jl](https://github.com/jheinen/GR.jl) and [PlotlyJS.jl](https://github.com/JuliaPlots/PlotlyJS.jl). Users who are used to "grammar of graphics" plotting APIs should take a look at [Gadfly.jl](https://github.com/GiovineItalia/Gadfly.jl). For those who do not wish to leave the comfort of the terminal, there is also [UnicodePlots.jl](https://github.com/JuliaPlots/UnicodePlots.jl).

Watch talks from JuliaCon 2025, featuring the latest developments, optimizations, and innovations from the Julia community.

Julia has been downloaded over 100 million times and the Julia community has registered [over 12,000 Julia packages](https://juliahub.com/ui/Packages) for community use.
These include various mathematical libraries, data manipulation tools, and packages for general purpose computing. In addition to these, you can easily use libraries from [Python](https://github.com/JuliaPy/PythonCall.jl), [R](https://github.com/JuliaInterop/RCall.jl), [C/Fortran](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/#Calling-C-and-Fortran-Code-1), and [C++](https://github.com/JuliaInterop/CxxWrap.jl), and [Java](https://github.com/JuliaInterop/JavaCall.jl).
If you do not find what you are looking for, ask on [Discourse](https://discourse.julialang.org), or even better, [contribute one](https://julialang.github.io/Pkg.jl/v1/)!

---

## Source: https://julialang.org/downloads/

This will install the latest stable version of Julia, as well as the [ juliaup](https://github.com/JuliaLang/juliaup) tool. Start Julia from the command-line by typing

`julia`

. See `juliaup --help`

for how to configure installed versions.If you prefer to use manual installation using a GUI-based installer, see the [Manual Downloads](/downloads/manual-downloads/) page.

Julia supports all the major operating systems, but specific versions and architectures have different [tiers of support](/downloads/support).

The following domains are official and used by open source Julia infrastructure for serving content and resources:

`julialang.org`

and all subdomains`julialang.net`

and all subdomainsIf you are using Julia behind a firewall that blocks access to these, you may have trouble downloading and installing Julia packages. If this is the case, please ask your sysadmin to add these domains to the firewall allow list. Traffic can be limited to HTTPS (TCP port 443).

Julia comes with a built-in package manager which downloads and installs packages from the Internet. In doing so, it necessarily reveals your public [IP address](https://en.wikipedia.org/wiki/IP_address) to any server you connect to, and service providers may log your IP address. In Julia versions 1.5 and higher, by default the package manager connects to [https://pkg.julialang.org](https://pkg.julialang.org), a free public service operated by the Julia project to serve open source package resources to Julia users. This service retains IP address logs for up to 31 days.

---

## Source: https://julialang.org/blog/

The Julia blog discusses issues of numerical, technical, distributed and parallel computing, as well as programming language design, and how these issues touch upon the design and implementation of the Julia programming language.
Also see the [JuliaHub company blog](https://juliahub.com/blog/) for another source of information regarding ongoing Julia development.
Blogs from the broader Julia community can be found at [Julia Bloggers](https://www.juliabloggers.com/).

[This Month in Julia World (February 2026)](/blog/2026/03/this-month-in-julia-world/) 2026-03-01

[This Month in Julia World (January 2026)](/blog/2026/02/this-month-in-julia-world/) 2026-02-01

[This Month in Julia World (December 2025)](/blog/2026/01/this-month-in-julia-world/) 2026-01-01

[This Month in Julia World (November 2025)](/blog/2025/12/this-month-in-julia-world/) 2025-12-01

[Launching the Julia Security Working Group](/blog/2025/11/launching-security-wg/) 2025-11-25

[This Month in Julia World (October 2025)](/blog/2025/11/this-month-in-julia-world/) 2025-11-01

[Julia 1.12 Highlights](/blog/2025/10/julia-1.12-highlights/) 2025-10-08

[This Month in Julia World (September 2025)](/blog/2025/10/this-month-in-julia-world/) 2025-10-01

[This Month in Julia World (August 2025)](/blog/2025/09/this-month-in-julia-world/) 2025-09-01

[This Month in Julia World (June and July 2025)](/blog/2025/08/this-month-in-julia-world/) 2025-08-01

[Announcing Google Summer of Code 2025 selected projects](/blog/2025/07/gsoc-projects-announcement/) 2025-07-17

[This Month in Julia World (May 2025)](/blog/2025/06/this-month-in-julia-world/) 2025-06-01

[This Month in Julia World (April 2025)](/blog/2025/05/this-month-in-julia-world/) 2025-05-01

[This Month in Julia World (March 2025)](/blog/2025/04/this-month-in-julia-world/) 2025-04-01

[This Month in Julia World (February 2025)](/blog/2025/03/this-month-in-julia-world/) 2025-03-01

[So, You Want to Start a Julia Workgroup?](/blog/2025/02/starting-workgroups/) 2025-02-10

[This Month in Julia World (January 2025)](/blog/2025/02/this-month-in-julia-world/) 2025-02-01

[The SatelliteToolbox.jl Ecosystem](/blog/2025/01/the-satellite-toolbox-ecosystem/) 2025-01-03

[This Month in Julia World (December 2024)](/blog/2025/01/this-month-in-julia-world/) 2025-01-01

[This Month in Julia World (November 2024)](/blog/2024/12/this-month-in-julia-world/) 2024-12-12

[This Month in Julia World (October 2024)](/blog/2024/11/this-month-in-julia-world/) 2024-11-07

[Julia 1.11 Highlights](/blog/2024/10/julia-1.11-highlights/) 2024-10-08

[This Month in Julia World (September 2024)](/blog/2024/10/this-month-in-julia-world/) 2024-10-05

[JuliaCon Global 2025 and JuliaCon 2024 Wrap-Up](/blog/2024/09/juliacon-2025-announcement/) 2024-09-18

[2024 GSoC and JSoC Fellows Announced](/blog/2024/05/gsoc-2024-fellows/) 2024-05-03

[Julia 1.10 Highlights](/blog/2023/12/julia-1.10-highlights/) 2023-12-27

[PSA: Thread-local state is no longer recommended](/blog/2023/07/PSA-dont-use-threadid/) 2023-07-06

[Julia 1.9 Highlights](/blog/2023/04/julia-1.9-highlights/) 2023-05-09

[Julia 1.8 Highlights](/blog/2022/08/julia-1.8-highlights/) 2022-08-18

[JuliaCon 2022 Highlights](/blog/2022/08/juliacon-highlights-2022/) 2022-08-10

[Doing small network scientific machine learning in Julia 5x faster than PyTorch](/blog/2022/04/simple-chains/) 2022-04-14

[Why We Use Julia, 10 Years Later](/blog/2022/02/10years/) 2022-02-14

[DTable – an early performance assessment of a new distributed table implementation](/blog/2021/12/dtable-performance-assessment/) 2021-12-08

[Julia 1.7 Highlights](/blog/2021/11/julia-1.7-highlights/) 2021-11-30

[Composability in Julia: Implementing Deep Equilibrium Models via Neural ODEs](/blog/2021/10/DEQ/) 2021-10-21

[Julia User & Developer Survey 2021](/blog/2021/08/julia-user-developer-survey/) 2021-08-24

[JuliaCon 2021 Highlights](/blog/2021/08/juliacon-highlights/) 2021-08-20

[Simulation of a swimming dogfish shark](/blog/2021/08/sharks/) 2021-08-12

[Code, docs, and tests: what's in the General registry?](/blog/2021/08/general-survey/) 2021-08-02

[JuliaCon 2021, the largest Julia Programming event in history](/blog/2021/07/juliacon2021/) 2021-07-26

[Google Season of Docs 2020-2021 Wrap-Up](/blog/2021/04/gsod-2020-wrapup/) 2021-04-04

[Julia 1.6 Highlights](/blog/2021/03/julia-1.6-highlights/) 2021-03-24

[Apache Arrow Support in Julia](/blog/2021/01/arrow/) 2021-01-28

[Profiling type-inference](/blog/2021/01/snoopi_deep/) 2021-01-28

[The 2020 Industry Julia Users Contributhon](/blog/2021/01/contributhon/) 2021-01-20

[Tutorial on precompilation](/blog/2021/01/precompile_tutorial/) 2021-01-05

[Using time travel to remotely debug faulty DRAM](/blog/2020/09/rr-memory-magic/) 2020-09-24

[Transitioning Code From Closed To Open: A JuliaCon 2020 Discussion Between Julia Users In Industry](/blog/2020/09/juliacon-2020-open-source-bof-follow-up/) 2020-09-16

[GSoC 2020 Wrap-Up](/blog/2020/09/gsoc-2020-wrapup/) 2020-09-08

[Analyzing sources of compiler latency in Julia: method invalidations](/blog/2020/08/invalidations/) 2020-08-26

[2020 Julia User and Developer Survey](/blog/2020/08/2020-julia-user-and-developer-survey/) 2020-08-24

[JuliaCon 2020 Wrap-up](/blog/2020/08/juliacon-2020-wrapup/) 2020-08-11

[Julia 1.5 Highlights](/blog/2020/08/julia-1.5-highlights/) 2020-08-03

[GSoC and JSoC 2020 Project List](/blog/2020/05/jsoc-gsoc2020/) 2020-05-05

[Julia 1.5 Feature Preview: Time Traveling (Linux) Bug Reporting](/blog/2020/05/rr/) 2020-05-02

[Google's Code-In Contest Wrap up](/blog/2020/02/gci-summary/) 2020-02-10

[Yao.jl - Differentiable Quantum Programming In Julia](/blog/2019/12/yao-differentiable-quantum-programming/) 2019-12-28

[为 Julia 包设计的可靠、可复现的二进制工件系统](/blog/2019/12/artifacts-zh_cn/) 2019-12-18

[Pkg + BinaryBuilder -- The Next Generation](/blog/2019/11/artifacts/) 2019-11-19

[Profiling tool wins and woes](/blog/2019/09/profilers/) 2019-09-16

[Julia夏季会议@Beijing - 本地化奖](/blog/2019/09/julia-workshop-beijing-zh_cn/) 2019-09-07

[Julia Workshop@Beijing and the Julia Localization Prize](/blog/2019/09/julia-workshop-beijing/) 2019-09-07

[Julia的版本发布流程](/blog/2019/09/release-process-zh-cn/) 2019-09-07

[Julia’s Release Process](/blog/2019/08/release-process/) 2019-08-28

[Julia User - Developer Survey 2019](/blog/2019/08/2019-julia-survey/) 2019-08-06

[Julia将支持可组合的多线程并行机制](/blog/2019/07/multithreading-zh-cn/) 2019-07-30

[Announcing composable multi-threaded parallelism in Julia](/blog/2019/07/multithreading/) 2019-07-23

[Hello @DiffEqBot](/blog/2019/06/diffeqbot/) 2019-06-18

[A Summer of Julia 2019](/blog/2019/05/jsoc19/) 2019-05-31

[Beyond machine learning pipelines with MLJ](/blog/2019/05/beyond-ml-pipelines-with-mlj/) 2019-05-02

[DiffEqFlux.jl – Julia 的神經微分方程套件](/blog/2019/04/fluxdiffeq-zh_tw/) 2019-04-04

[A Julia interpreter and debugger](/blog/2019/03/debuggers/) 2019-03-19

[The Julia Project and Its Entities](/blog/2019/02/julia-entities/) 2019-02-12

[GSoC 2018 - Parallel Implementations of Graph Analysis Algorithms](/blog/2019/02/light-graphs/) 2019-02-03

[DiffEqFlux.jl – A Julia Library for Neural Differential Equations](/blog/2019/01/fluxdiffeq/) 2019-01-18

[Building a Language and Compiler for Machine Learning](/blog/2018/12/ml-language-compiler/) 2018-12-03

[How to get started with Julia 1.0's package manager](/blog/2018/09/Pkgtutorial/) 2018-09-12

[A portrait of JuliaCon 2018](/blog/2018/09/juliacon2018/) 2018-09-11

[The Julia Community Prizes, 2018](/blog/2018/09/julia-community-prizes/) 2018-09-04

[GSoC 2018 and Speech Recognition for the Flux Model Zoo: The Conclusion](/blog/2018/08/GSoC2018-speech-recognition/) 2018-08-14

[GSoC 2018: Adding Newer Features and Speeding up Convolutions in Flux](/blog/2018/08/adding-newer-features-and-speeding-up-convolutions-in-flux/) 2018-08-13

[Union-splitting: what it is, and why you should care](/blog/2018/08/union-splitting/) 2018-08-09

[Julia 1.0 Anunciando el release de Julia 1.0 (Spanish)](/blog/2018/08/one-point-zero-es/) 2018-08-08

[Julia 1.0 正式发布 (Simplified Chinese)](/blog/2018/08/one-point-zero-zh_cn/) 2018-08-08

[Julia 1.0 正式發佈 (Traditional Chinese)](/blog/2018/08/one-point-zero-zh_tw/) 2018-08-08

[Announcing the release of Julia 1.0](/blog/2018/08/one-point-zero/) 2018-08-08

[GSoC 2018: Reinforcement Learning and Generative models using Flux](/blog/2018/08/GSoC-Final-Summary/) 2018-08-06

[Writing Iterators in Julia 0.7](/blog/2018/07/iterators-in-julia-0.7/) 2018-07-08

[First-Class Statistical Missing Values Support in Julia 0.7](/blog/2018/06/missing/) 2018-06-19

[Extensible broadcast fusion](/blog/2018/05/extensible-broadcast-fusion/) 2018-05-11

[Tetris coming to Julia language for v1.0](/blog/2018/04/tetris-and-you/) 2018-04-01

[Some π-ography](/blog/2018/03/pifonts/) 2018-03-14

[Julia joins NumFOCUS in Google Summer of Code 2018](/blog/2018/02/gsoc2018-numfocus/) 2018-02-21

[機器學習以及程式語言(Traditional Chinese)](/blog/2017/12/ml-pl-zh_tw/) 2017-12-25

[机器学习与编程语言 (Simplified Chinese)](/blog/2017/12/ml-pl-cn/) 2017-12-20

[On Machine Learning and Programming Languages](/blog/2017/12/ml-pl/) 2017-12-06

[GSoC 2017: Native Julia second order ODE and BVP solvers](/blog/2017/11/gsoc-ode/) 2017-11-01

[NeuralNetDiffEq.jl: A Neural Network solver for ODEs](/blog/2017/10/gsoc-NeuralNetDiffEq/) 2017-10-13

[Command interpolation for dummies](/blog/2017/10/command-interpolation-for-dummies/) 2017-10-05

[GSoC 2017 Project: Hamiltonian Indirect Inference](/blog/2017/09/Hamiltonian-Indirect-Inference/) 2017-09-19

[GSoC 2017: Parallelism in BioJulia](/blog/2017/09/bio-parallel/) 2017-09-07

[GSoC 2017: Efficient Discretizations of PDE Operators](/blog/2017/09/gsoc-derivative_operators/) 2017-09-06

[GSoC 2017 Project: MCMC with flexible numbers of parameters](/blog/2017/09/GSOC-MCMC-with-flexible-numbers-of-parameters/) 2017-09-03

[GSoC 2017 : A Wrapper for the FEniCS Finite Element Toolbox](/blog/2017/09/gsoc-fenics/) 2017-09-01

[GSoC 2017: Documentation Browser for Juno](/blog/2017/08/gsoc-docs-in-juno/) 2017-08-28

[GSoC 2017: Implementing iterative solvers for numerical linear algebra](/blog/2017/08/native-julia-implementations-of-iterative-solvers-for-numerical-linear-algebra/) 2017-08-23

[JuliaCon 2017 on the West Coast](/blog/2017/08/juliacon/) 2017-08-15

[Creating domain-specific languages in Julia using macros](/blog/2017/08/dsl/) 2017-08-09

[Julia 0.6 Release Announcement](/blog/2017/06/julia-0.6-release/) 2017-06-27

[Julia available in Raspbian on the Raspberry Pi](/blog/2017/05/raspberry-pi-julia/) 2017-05-03

[Upgrades to the REPL in Julia 0.6](/blog/2017/04/repl-0.6-highlights/) 2017-04-25

[Knowing where you are: custom array indices in Julia](/blog/2017/04/offset-arrays/) 2017-04-18

[Paper in SIAM Review: Julia - A Fresh Approach to Numerical Computing](/blog/2017/03/julia-fresh-paper/) 2017-03-18

[Technical preview: Native GPU programming with CUDAnative.jl](/blog/2017/03/cudanative/) 2017-03-14

[Some fun with Π in Julia](/blog/2017/03/piday/) 2017-03-14

[More Dots: Syntactic Loop Fusion in Julia](/blog/2017/01/moredots/) 2017-01-21

[Julia 0.5 Highlights](/blog/2016/10/julia-0.5-highlights/) 2016-10-11

[Julia 0.5 Release Announcement](/blog/2016/10/julia-0.5-release/) 2016-10-10

[StructuredQueries.jl - A generic data manipulation framework](/blog/2016/10/StructuredQueries/) 2016-10-03

[A Personal Perspective On JuliaCon 2016](/blog/2016/09/juliacon2016/) 2016-09-21

[BioJulia 2016 - online sequence search, sequence demultiplexing, new readers and much more!](/blog/2016/09/biojulia2016-mid/) 2016-09-10

[Vertex and Edge Metadata](/blog/2016/08/GSoC2016-Graft/) 2016-08-22

[Announcing support for complex-domain linear programs in Convex.jl](/blog/2016/08/announcing-support-for-complex-domain-linear-programs-in-Convex.jl/) 2016-08-17

[An invitation to JuliaCon 2016](/blog/2016/05/juliacon-invitation/) 2016-05-08

[BioJulia Project in 2016](/blog/2016/04/biojulia2016/) 2016-04-30

[Google Summer of Code 2016](/blog/2016/04/gsoc/) 2016-04-14

[Generalizing AbstractArrays: opportunities and challenges](/blog/2016/03/arrays-iteration/) 2016-03-27

[An introduction to ParallelAccelerator.jl](/blog/2016/03/parallelaccelerator/) 2016-03-01

[Multidimensional algorithms and iteration](/blog/2016/02/iteration/) 2016-02-01

[Julia IDE work in Atom](/blog/2016/01/atom-work/) 2016-01-07

[JSoC 2015 project: DataStreams.jl](/blog/2015/10/datastreams/) 2015-10-25

[JSoC 2015 project: Automatic Differentiation in Julia with ForwardDiff.jl](/blog/2015/10/auto-diff-in-julia/) 2015-10-23

[JSoC 2015 project: Interactive Visualizations in Julia with GLVisualize.jl](/blog/2015/10/glvisualize/) 2015-10-22

[JSoC 2015 project: Efficient data structures and algorithms for sequence analysis in BioJulia](/blog/2015/10/biojulia-sequence-analysis/) 2015-10-21

[JSoC 2015 project: Interactive 3D Graphics in the Browser with Compose3D](/blog/2015/10/compose3d-threejs/) 2015-10-20

[JSoC 2015 project: NullableArrays.jl](/blog/2015/10/nullablearrays/) 2015-10-16

[Julia 0.4 Release Announcement](/blog/2015/10/julia-0.4-release/) 2015-10-09

[JuliaCon 2015 Preview - Deep Learning, 3D Printing, Parallel Computing, and so much more](/blog/2015/05/juliacon-preview/) 2015-05-30

[Julia Summer of Code 2015](/blog/2015/05/jsoc-cfp/) 2015-05-23

[Julia 0.3 Release Announcement](/blog/2014/08/julia-0.3-release/) 2014-08-20

[JuliaCon 2014 Opening Session Presentations](/blog/2014/08/juliacon-opening-session/) 2014-08-09

[JuliaCon 2014 Optimization Presentations](/blog/2014/08/juliacon-opt-session/) 2014-08-09

[Fast Numeric Computation in Julia](/blog/2013/09/fast-numeric/) 2013-09-04

[Building GUIs with Julia, Tk, and Cairo, Part I](/blog/2013/05/graphical-user-interfaces-part1/) 2013-05-23

[Building GUIs with Julia, Tk, and Cairo, Part II](/blog/2013/05/graphical-user-interfaces-part2/) 2013-05-23

[Passing Julia Callback Functions to C](/blog/2013/05/callback/) 2013-05-10

[Put This In Your Pipe](/blog/2013/04/put-this-in-your-pipe/) 2013-04-08

[Distributed Numerical Optimization](/blog/2013/04/distributed-numerical-optimization/) 2013-04-05

[Videos from the Julia tutorial at MIT](/blog/2013/03/julia-tutorial-MIT/) 2013-03-30

[Efficient Aggregates in Julia](/blog/2013/03/efficient-aggregates/) 2013-03-05

[Design and implementation of Julia](/blog/2012/08/design-and-implementation-of-julia/) 2012-08-16

[New York Open Stats Meetup](/blog/2012/04/nyc-open-stats-meetup-announcement/) 2012-04-18

[Lang.NEXT Announcement](/blog/2012/03/lang-next-talk-announcement/) 2012-03-24

[Shelling Out Sucks](/blog/2012/03/shelling-out-sucks/) 2012-03-11

[Stanford Talk Announcement](/blog/2012/02/talk-announcement/) 2012-02-27

[为什么我们要创造Julia (Simplified Chinese)](/blog/2012/02/why-we-created-julia-zh_CN/) 2012-02-14

[Why We Created Julia](/blog/2012/02/why-we-created-julia/) 2012-02-14

---

## Source: https://julialang.org/community/

Please take a moment to read the [Julia Community Standards](/community/standards/). We expect that your participation in any Julia related forum, online or offline, respects these standards. The Julia Community is committed to continuing to foster an inclusive and diverse culture. Read more about how we are doing this on our [diversity page](/diversity/).

We use GitHub for the development of Julia itself. There, we host our
[source code](https://github.com/JuliaLang/julia), track
[issues](https://github.com/JuliaLang/julia/issues), and accept
[pull requests](https://github.com/JuliaLang/julia/pulls). For support and questions,
please use Discourse.

The primary online discussion venue for Julia is the [Discourse forum](https://discourse.julialang.org/). Learn more about our Discourse site and what it is best used for [here](discourse/).

The Julia Community has several local communities organizing meetups and other activities. If your community is missing from the map, add it [here](https://github.com/JuliaLang/www.julialang.org/blob/main/_libs/groups.js).

The Julia Community has a shared calendar for all upcoming global events. If you are an event organizer, please [email us](mailto:community@julialang.org)
with the details so it can be added to the calendar. The Julia community also has [local meetups around the world.](https://www.meetup.com/topics/julia/all/)

We conduct the Julia User & Developer Survey right before JuliaCon every year and present the findings at JuliaCon. The survey has now been conducted several years in a row:

The Julia Language is proud to have fostered a diverse assortment of GitHub Organizations over the years. [Find out more about our Ecosystem's GitHub Organizations](organizations).

A working group is a group of people that are interested in working on a common topic. Working groups are informal and have no official authority. [Find out more about Working Groups](working-groups).

In addition to the thousands of individuals who contribute to the Julia project in their personal capacities, we are grateful to a large number of companies and organizations that are supporting the continued growth of the Julia project and ecosystem. [We maintain a list of these on the sponsors page](sponsors).

---

## Source: https://julialang.org/contribute/

Welcome to the Julia Ecosystem Contributor’s Guide and to the community!

The purpose of this guide is **to help you get started** contributing to the Julia ecosystem. It contains information on the [benefits of becoming a Julia contributor](#why_contribute) and the [tools](#tools) you need to get started. Also, you can find the different [contribution pathways](#contribution_pathways) that you can take and how to get [help](#get_help) from the community.

We **welcome** both **technical** and **nontechnical** contributions. Whether you are a **beginner** or a **seasoned developer**, you can always find a way to contribute to the Julia Ecosystem.

You can make a difference to one of the most quickly growing languages and the future of open-source software as a whole. Open source projects rely on contributions from volunteers. Contributions enable both the project and volunteers to grow and develop. No matter how you contribute to the Julia ecosystem, it will be a great experience for you.

Contributing to the Julia ecosystem brings the following benefits:

Become a member of a community that’s excited about open source and sharing knowledge.

Build a track record of public contributions which will help build your career.

Build confidence with Julia.

Gain visibility for your package.

Help others level up their Julia skills.

Before you start contributing to the Julia ecosystem, you need the following tools:

**Julia:** For more information on how to install Julia, see [Download Julia](/downloads/) or watch [Download Julia (in under 2.5 minutes)](https://www.youtube.com/watch?v=t67TGcf4SmM).

**IDE:** You can set one of the following IDEs as well as their extensions for developing in Julia:

**Knowledge of Git and how to create a pull request:** For more information on getting started with Git, see [Making a first Julia pull request](https://kshyatt.github.io/post/firstjuliapr/).

Your **first step** is to identify how you want to start contributing to the Julia ecosystem. For example, you can start by writing a blog post about how you used Julia to solve a problem. Then, you can create a new package or improve one that you have used. You can take multiple paths, some of which might cross.

If you are a **complete beginner** to the Julia language or programming in general, then you can consider going through any of the resources that the community has created to [help you get started](/learning/).

We suggest the following paths as a starting point in your contribution journey:

**Build:** You can write code or documentation:

**Code**

Find an [open issue](https://github.com/JuliaLang/julia/issues).

Report a [security issue](https://github.com/JuliaLang/julia/security/policy).

[Contribute to an existing package](/contribute/opportunities/).

Find a [help wanted](https://github.com/issues?q=is%3Aopen+is%3Aissue+language%3AJulia+label%3A%22help+wanted%22) issue.

Find a [good first](https://github.com/issues?q=is%3Aopen+is%3Aissue+language%3AJulia+label%3A%22good+first+issue%22+) issue.

Find a [hacktoberfest issue](https://juliacommunity.github.io/your-first-julia-pr/).

Make a feature request.

**Documentation**

Create new documents: Write new sections of existing documentation, docstrings, and tutorials.

Improve existing documents: Update outdated documentation, fix typos and broken links.

**Help:** You can help spread the word about the Julia ecosystem:

Read the [Code of Conduct](/community/standards/).

Share a use case.

Write a blog post and submit it to the [Julia Language Blog Aggregator](https://www.juliabloggers.com/julia-bloggers-submit-feed/).

[Ask and answer questions](#ask-and-answer-questions) on Zulip or Discourse.

Engage on [Twitter](https://twitter.com/JuliaLanguage).

Attend a [Julia event](/community/#events).

We are also open to any suggestions or ideas that you might have. You can suggest your ideas to the community. We will do our best to help you bring it to life!

If you are still unsure how to get started, then you can have a look at the following list of ideas for your first contribution.

You can ask or answer questions on [StackOverflow](https://stackoverflow.com/questions/tagged/julia), [Discourse](https://discourse.julialang.org/), and [Zulip](https://julialang.zulipchat.com/). It not only helps to expand your knowledge but to spread the word about the Julia ecosystem.

The following video contains information on how to ask questions on StackOverflow and how this can improve your learning (and understanding):

If you know how to answer a question on StackOverflow or Discourse thats' an immediate chance to help! Search for questions tagged [ [julia]](https://stackoverflow.com/questions/tagged/julia) on StackOverflow or use a more specific term. Moreover, you can join the ´#stackoverflow-feed´ channel on the official

A lot of documentation in the Julia-verse needs to be updated or fixed. You can help clean up documentation by correcting typos, fixing broken links, or replacing the mentions of outdated packages. To search for Julia packages and their README file or documentation, go to the [JuliaHub](https://juliahub.com/ui/Packages) website. Then, click the name of the package to discover its website, GitHub repository, and further details.

Some Julia organizations and packages are looking for help from the community. We have set up a curated list of Julia packages, organizations, and projects which have robust contributor guides. If you are interested in jumping in and contributing, then see the [Organizations and Packages](/contribute/opportunities) section.

The Julia community is more than happy to help you with any questions related to your contribution. You can get help in any of the following channels:

[Julia Zulip](https://julialang.zulipchat.com/): The community uses Zulip for informal communications.

[Official Julia Slack](/slack/): The community also uses the Julia Slack for informal communications. However, bear in mind that messages disappear over time because of the limits of the free version of Slack.

[Julia Discourse forum](https://discourse.julialang.org/): The community discusses Julia development in the Discourse forum. In general, we recommend asking technical questions on Discourse. Questions and answers posted on Discourse remain on the web and public indefinitely.

[Julia FAQ](https://docs.julialang.org/en/v1/manual/faq/): In the Frequently Asked Questions section of the [Julia Documentation](https://docs.julialang.org/en/v1/), you can find answers to the most common questions from Julia beginners.

[StackOverflow](https://stackoverflow.com/questions/tagged/julia): It has a growing number of Julia questions and answers.

If you find this guide helpful, we would be grateful if you would tag us in any contribution on GitHub that this guide helped you make: [ @JuliaContributorBot](https://github.com/JuliaContributorBot) or in any papers this helped you write:

`DOI: 10.13140/RG.2.2.24478.46407`

---

## Source: https://julialang.org/jsoc/

The Julia Seasons of Contributions (JSoC) are the seasonal programs for funding and/or mentoring developers to contribute to the open source ecosystem. Below are the current programs that the Julia Language is participating in.

The Julia organization is a participant in Google Summer of Code. It generally fields a large number of contributors (>20) mentored by open source developers and university professors at leading institutions from all around the world. Contributors who are accepted into this prestigious program are paid a summer stipend to contribute to the open source tooling around Julia and its package ecosystem.

`#jsoc`

channel.You can see previous Summer of Code projects at the [Archive page](/jsoc/archive/) and details around the mentoring process on the [Mentors page](/jsoc/mentors/). Hear from some of our past GSoC contributors:

Semi-quarterly NumFOCUS puts out a call for small development grants. The Julia language organization puts out a call for proposals from the community for grant proposals. There are no restrictions on what the funding can be used for. Code development, documentation work, educational, sustainability, and diversity initiatives, or other types of projects are all eligible.

Since only one application can be put in for the Julia project, an internal selection process is used to determine which proposals will be submitted to NumFOCUS.

Usually, around USD 5,000 - 10,000 is available per proposal. The total allocated funding from NumFOCUS is around USD 20,000 - 50,000 in previous cycles, meaning that not every project will be able to receive a grant. This total amount is adjusted depending on the number and quality of proposals.

Questions about NumFOCUS Small Development Grants? [Check out the NumFOCUS website Small Grants section for more details](https://numfocus.org/programs/small-development-grants)!

The JSoC program admins review contributor applications for all programs, create and submit the organization application for each program, help ensure the programs run smoothly, recruit mentors, make final contributor selections and more.

[Find out more about our program admins](/jsoc/admins/).

For any questions, please consult the program administrators at `jsoc@julialang.org`

. Note that if you are a prospective applicant for one of the programs above, your first step should be to check out the resources for the project you are interested in.

---

## Source: https://docs.julialang.org/en/v1/manual/getting-started/

[Getting Started](#man-getting-started)

Julia installation is straightforward, whether using precompiled binaries or compiling from source. Download and install Julia by following the instructions at [https://julialang.org/install/](https://julialang.org/install/).

If you are coming to Julia from one of the following languages, then you should start by reading the section on noteworthy differences from [MATLAB](../noteworthy-differences/#Noteworthy-differences-from-MATLAB), [R](../noteworthy-differences/#Noteworthy-differences-from-R), [Python](../noteworthy-differences/#Noteworthy-differences-from-Python), [C/C++](../noteworthy-differences/#Noteworthy-differences-from-C/C) or [Common Lisp](../noteworthy-differences/#Noteworthy-differences-from-Common-Lisp). This will help you avoid some common pitfalls since Julia differs from those languages in many subtle ways.

The easiest way to learn and experiment with Julia is by starting an interactive session (also known as a read-eval-print loop or "REPL") by double-clicking the Julia executable or running `julia`

from the command line:

```
$ julia
_
_ _ _(_)_ | Documentation: https://docs.julialang.org
(_) | (_) (_) |
_ _ _| |_ __ _ | Type "?" for help, "]?" for Pkg help.
| | | | | | |/ _` | |
| | |_| | | | (_| | | Version 1.12.5 (2026-02-09)
_/ |\__'_|_|_|\__'_| | Official https://julialang.org release
|__/ |
julia> 1 + 2
3
julia> ans
3
```


To exit the interactive session, type `CTRL-D`

(press the Control/`^`

key together with the `d`

key), or type `exit()`

. When run in interactive mode, `julia`

displays a banner and prompts the user for input. Once the user has entered a complete expression, such as `1 + 2`

, and hits enter, the interactive session evaluates the expression and shows its value. If an expression is entered into an interactive session with a trailing semicolon, its value is not shown. The variable `ans`

is bound to the value of the last evaluated expression whether it is shown or not. The `ans`

variable is only bound in interactive sessions, not when Julia code is run in other ways.

To evaluate expressions written in a source file `file.jl`

, write `include("file.jl")`

.

To run code in a file non-interactively, you can give it as the first argument to the `julia`

command:

`$ julia script.jl`


You can pass additional arguments to Julia, and to your program `script.jl`

. A detailed list of all the available options can be found under [Command-line Interface](../command-line-interface/#cli).

[Resources](#Resources)

A curated list of useful learning resources to help new users get started can be found on the [learning](https://julialang.org/learning/) page of the main Julia website.

You can use the REPL as a learning resource by switching into the help mode. Switch to help mode by pressing `?`

at an empty `julia>`

prompt, before typing anything else. Typing a keyword in help mode will fetch the documentation for it, along with examples. Similarly for most functions or other objects you might encounter!

```
help?> begin
search: begin disable_sigint reenable_sigint
begin
begin...end denotes a block of code.
```


If you already know Julia a bit, you might want to peek ahead at [Performance Tips](../performance-tips/#man-performance-tips) and [Workflow Tips](../workflow-tips/#man-workflow-tips), or check out the comprehensive [ModernJuliaWorkflows](https://modernjuliaworkflows.org/) blog.

---

## Source: https://julialang.org/learning/tutorials/

Have a Julia tutorial you want added to this list? Please [submit a pull request](https://github.com/JuliaLang/www.julialang.org/edit/main/learning/tutorials.md).

[ThinkJulia](https://benlauwens.github.io/ThinkJulia.jl/latest/book.html). A comprehensive introduction to programming using Julia.

[From zero to Julia!](https://techytok.com/from-zero-to-julia/) by [Aurelio Amerio](https://github.com/aurelio-amerio). An expanding series of short tutorials about Julia, starting from the beginner level and going up to deal with the more advanced topics.

[The Julia Express](https://github.com/bkamins/The-Julia-Express) by [Bogumił Kamiński](https://bogumilkaminski.pl). A concise Julia cheatsheet for experienced programmers.

[Introducing Julia wikibook](https://en.wikibooks.org/wiki/Introducing_Julia). A community-maintained wikibook covering the language.

[Julia language: a concise tutorial](https://syl1.gitbook.io/julia-language-a-concise-tutorial/) by Antonello Lobianco. A basic introduction that includes the main packages.

[Julia Programming Tutorial For Beginners](https://www.datacamp.com/tutorial/julia-programming-tutorial-for-beginners) by Bekhruz Tuychiev (DataCamp).

[Zero2Hero intensive workshop](https://www.youtube.com/watch?v=Fi7Pf2NveH0) by [George Datseris](https://github.com/Datseris). An intensive video workshop targeting an audience familiar with programming that wants to transition to Julia.

[Basics of Projects Example](https://github.com/robbyriverside/ModulePlay) by Rob Farrow. Fast start for using Julia Project and associated tools.

[Introduction to Julia for mathematics undergraduates](https://sje30.github.io/catam-julia/). An introduction to Julia, with case studies, suitable for undergraduate students with a mathematics background.

[Julia Programming: A Hands-On Tutorial](https://www.matecdev.com/posts/julia-tutorial-science-engineering.html), and [Numerical Computing in Julia](https://www.matecdev.com/posts/julia-numerical-computing.html) by [Martín D. Maas](https://github.com/mdmaas). Introductory material about Julia, focusing on its use in Science and Engineering.

[Julia Workshop for Physicists](https://github.com/crstnbr/JuliaOulu20) by [Carsten Bauer](https://github.com/crstnbr) (see also [JuliaWorkshop19](https://github.com/crstnbr/JuliaWorkshop19)).

[Practical introduction to Julia for modelling and data analysis in biodiversity and earth sciences](https://github.com/vboussange/WSLJuliaWorkshop2023) by [Victor Boussange](https://vboussange.github.io) and [Mauro Werder](https://maurow.bitbucket.io).

[A Deep Introduction to Julia for Data Science and Scientific Computing](https://ucidatascienceinitiative.github.io/IntroToJulia/) by [Chris Rackauckas](https://chrisrackauckas.com/)

[Programming in Julia (Quantitative Economics)](https://julia.quantecon.org/) - by [Jesse Perla](http://jesseperla.com), [Thomas J. Sargent](http://www.tomsargent.com), and [John Stachurski](https://johnstachurski.net). Along with being a complete textbook with Julia code for macroeconomics, this also is a very good introduction to Julia.

[A Comprehensive Tutorial to Learn Data Science with Julia from Scratch](https://www.analyticsvidhya.com/blog/2017/10/comprehensive-tutorial-learn-data-science-julia-from-scratch/) by [Mohd Sanad Zaki Rizvi](https://www.analyticsvidhya.com/blog/author/mohdsanadzakirizvigmail-com/)

[Programación básica en Julia](https://hedero.webs.upv.es/julia-basico/) and [Claves para programar en Julia](https://hedero.webs.upv.es/julia-claves/) by Helios De Rosario. Two guides in Spanish to get started on Julia.

[Grundlagen der Programmiersprache Julia](http://dx.doi.org/10.13140/RG.2.2.26626.86721) and [Statistik mit Julia](http://dx.doi.org/10.13140/RG.2.2.19915.98086) by Georg Kindermann. Two guides in German to get started on Julia and Statistics with Julia.

---

## Source: https://julialang.org/learning/books/

Have a Julia book you want added to this list? Please [submit a pull request](https://github.com/JuliaLang/www.julialang.org/blob/main/learning/books.md).

Antonello Lobianco. [Julia Quick Syntax Reference, 2nd ed.](https://doi.org/10.1007/979-8-8688-0965-1). Apress, January 2025.

Lee Phillips. [Practical Julia: A Hands-On Introduction for Scientific Minds](https://nostarch.com/practical-julia), No Starch Press, October 2023.

Erik Engheim. [Julia as a Second Language](https://www.manning.com/books/julia-as-a-second-language). Manning Publications, May 2023.

Noel Kalicharan. [Julia - Bit by Bit](https://link.springer.com/book/10.1007/978-3-030-73936-2). Springer, 2021.

Sambit Kumar Dash. [Hands-on Julia Programming](https://in.bpbonline.com/products/hands-on-julia-programming), Bpb Publications, October 2021.

Erik Engheim. [Julia for Beginners](https://leanpub.com/julia-for-beginners), January 2021.

Tanmay Bakshi. [Tanmay Teaches Julia for Beginners: A Springboard to Machine Learning for All Ages](https://www.mheducation.co.uk/tanmay-teaches-julia-for-beginners-a-springboard-to-machine-learning-for-all-ages-9781260456639-emea). McGraw Hill, November 2019.

Ben Lauwens and Allen B. Downey. [Think Julia](https://www.oreilly.com/library/view/think-julia/9781492045021/). O’Reilly Media, June 2019.

Ivo Balbaert. [Julia 1.0 Programming](https://www.packtpub.com/en-us/product/julia-10-programming-9781788999090). Packt Publishing, September 2018.

Anshul Joshi and Rahul Lakhanpal. [Learning Julia](https://www.packtpub.com/en-us/product/learning-julia-9781785883279). Packt Publishing, November 2017.

Sandeep Nagar. [Beginning Julia Programming For Engineers and Scientists](https://doi.org/10.1007/978-1-4842-3171-5). Apress, 2017

Ivo Balbaert, Avik Sengupta, and Malcolm Sherrington. [Julia: High Performance Programming](https://www.oreilly.com/library/view/julia-high-performance/9781787125704/). Packt Publishing, 2016.

Ivo Balbaert. [Getting Started with Julia Programming Language](https://www.packtpub.com/en-us/product/getting-started-with-julia-9781783284795). Packt Publishing, 2015.

Malcolm Sherrington. [Mastering Julia](https://www.packtpub.com/en-us/product/mastering-julia-9781783553310). Packt Publishing, 2015.

Bruce Tate, Ian Dees, Frederic Daoud, and Jack Moffit. [Seven More Languages in Seven Weeks](https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks). The Pragmatic Programmers, December 2014.

Ahan Sengupta [The Little Book of Julia Algorithms](https://www.amazon.com/Little-Book-Julia-Algorithms-programming/dp/1838173609/). SAV Publishing, September 2020.

Tom Kwong. [Hands-on Design Patterns and Best Practices with Julia](https://www.packtpub.com/en-us/product/hands-on-design-patterns-and-best-practices-with-julia-9781838648817). Packt Publishing, January 2020.

Avik Sengupta. [Julia High Performance, 2nd Ed.](https://www.packtpub.com/product/julia-high-performance-second-edition/9781788298117). Packt Publishing, June 2019.

Bogumił Kamiński and Przemysław Szufel. [Julia プログラミングクックブック](https://www.oreilly.co.jp/books/9784873118895/). Japanese translation for Julia 1.2 by Hidemoto Nakada. Orairījapan, Tōkyo, October 2019.

Adrian Salceanu. [Julia Programming Projects](https://www.packtpub.com/en-us/product/julia-programming-projects-9781788292740). Packt Publishing, December 2018.

Bogumił Kamiński and Przemysław Szufel. [Julia 1.0 Programming Cookbook](https://www.packtpub.com/en-us/product/julia-10-programming-cookbook-9781788998369). Packt Publishing, November 2018.

Jalem Raj Rohit. [Julia Cookbook](https://www.packtpub.com/en-us/product/julia-cookbook-9781785882012). Packt Publishing, September 2016.

Avik Sengupta. [Julia High Performance](https://www.packtpub.com/en-us/product/julia-high-performance-9781785880919). Packt Publishing, April 2016.

Bogumił Kamiński. [Julia for Data Analysis](https://www.manning.com/books/julia-for-data-analysis), Manning Publications, December 2022

Diego Javier Zea. [Interactive Visualization and Plotting with Julia](https://www.packtpub.com/en-us/product/interactive-visualization-and-plotting-with-julia-9781801810517). Packt Publishing, August 2022.

Zacharias Voulgaris. [Julia for Machine Learning](https://technicspub.com/julia/). Technics Publications, June 2020.

Günter Faes. [Datenanalyse mit Julia: Einstieg in die Datenanalyse mit der Programmiersprache Julia](https://www.amazon.de/Datenanalyse-mit-Julia-Einstieg-Programmiersprache/dp/3749485089/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Datenanalyse+mit+Julia&qid=1582912563&sr=8-3). Books on Demand, September 2019.

Paul D. McNicholas and Peter Tait. [Data Science with Julia](https://www.crcpress.com/Data-Science-with-Julia/McNicholas-Tait/p/book/9781138499980). Chapman and Hall/CRC, January 2019.

Zacharias Voulgaris. [Julia for Data Science](https://technicspub.com/julia-for-data-science/). Technics Publications, September 2016.

Anshul Joshi. [Julia for Data Science](https://www.packtpub.com/en-us/product/julia-for-data-science-9781785289699). Packt Publishing, 2016.

Bartłomiej Łukaszuk, [Romeo and Julia, where Romeo is Basic Statistics](https://b-lukaszuk.github.io/RJ_BS_eng/), [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), 2023.

Florian Heiss and Daniel Brunner, ["Using Julia for Introductory Econometrics"](http://upfie.net/downloads/PDF/UJfIE_web.pdf), Independently published, May 3, 2023.

Hayden Klok, Yoni Nazarathy. [Statistics with julia: Fundamentals for data science, machine learning and artificial intelligence](https://github.com/h-Klok/StatsWithJuliaBook). Springer, 2021

Stanley H. Chan. [Intro to Probability for Data Science](https://www.amazon.com/Introduction-Probability-Data-Science-Stanley/dp/1607857464/), November 2021. The book is also available freely as HTML and PDF at [probability4datascience.com](https://probability4datascience.com/index.html). Code is in Julia/Python/R/Matlab.

Christopher P. Adams. [Learning Microeconometrics with R](https://www.routledge.com/Learning-Microeconometrics-with-R/Adams/p/book/9780367255381), December 2020; Has [Julia code](https://sites.google.com/view/microeconometricswithr/home?authuser=0) for all [12 chapters](https://sites.google.com/view/microeconometricswithr/table-of-contents?authuser=0).

Giray Ökten. [Probability and Simulation](https://link.springer.com/book/10.1007/978-3-030-56070-6). Springer, June 2020.

James V Lambers, Amber Sumner Mooney, Vivian A Montiforte, and James Quinlan, [Explorations in Numerical Analysis and Machine Learning with Julia](https://www.worldscientific.com/worldscibooks/10.1142/14443#t=aboutBook). World Scientific, October 2025.

Martin Vuk, [Numerical Mathematics with Julia programming language (in Slovenian)](http://zalozba.fri.uni-lj.si/vuk2024.pdf), Založba UL FRI, Ljubljana, 2024. Code examples from the book are available [here](https://gitlab.com/nummat/nummat-knjiga).

Clemens Heitzinger. [Algorithms with JULIA: Optimization, Machine Learning, and Differential Equations Using the JULIA Language](https://link.springer.com/book/10.1007/978-3-031-16560-3). Springer, 2022.

Marilena Mitrouli. [ΑΡΙΘΜΗΤΙΚΗ ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΚΑΙ ΕΠΙΣΤΗΜΟΝΙΚΟΙ ΥΠΟΛΟΓΙΣΜΟΙ (Arithmetical Linear Algebra and Scientific Computations)](https://korfiatisbooks.gr/eshop/product/arithmitiki-grammiki-algevra-kai-epistimonikoi-ypologismoi/), ΕΚΠΑ, December 2022.

Tobin A. Driscoll, Richard J. Braun. [Fundamentals of Numerical Computation: Julia Edition](https://my.siam.org/Store/Product/viewproduct/?ProductId=41831895). SIAM-Society for Industrial and Applied Mathematics, 2022

C. T. Kelley, [Solving Nonlinear Equations with Iterative Methods. Solvers and Examples in Julia](https://my.siam.org/Store/Product/viewproduct/?ProductId=44313635), SIAM, 2022. The book comes with a package [SIAMFANLequations.jl](https://github.com/ctkelley/SIAMFANLEquations.jl) and a set of [Jupyter notebooks](https://github.com/ctkelley/NotebookSIAMFANL).

Bogumił Kamiński and Paweł Prałat. [Train Your Brain - Challenging Yet Elementary Mathematics](https://www.ryerson.ca/train-your-brain/), December 2020; a free on-line [Julia language companion](https://math.ryerson.ca/~pralat/train-your-brain.pdf) is available for download.

Giray Ökten. [First Semester in Numerical Analysis with Julia](https://diginole.lib.fsu.edu/islandora/object/fsu%3A657877). Florida State University Libraries, April 2019.

Stephen Boyd and Lieven Vandenberghe. [Introduction to Applied Linear Algebra](https://web.stanford.edu/~boyd/vmls/). Cambridge University Press, June 2018.

Dominique Orban and Mario Arioli. [Iterative Solution of Symmetric Quasi-definite Linear Systems](https://dx.doi.org/10.1137/1.9781611974737). Society for Industrial and Applied Mathematics, April 2017.

Mykel J. Kochenderfer, Sydney M. Katz, Anthony L. Corso, and Robert J. Moss, [Algorithms for Validation](https://algorithmsbook.com/validation/), Forthcoming.

Mykel J. Kochenderfer, Tim A. Wheeler, and Kyle H. Wray. [Algorithms for Decision Making](https://algorithmsbook.com/), December 2020.

Mykel J. Kochenderfer and Tim A. Wheeler. [Algorithms for Optimization](https://mitpress.mit.edu/books/algorithms-optimization). MIT Press, March 2019.

Changhyun Kwon. [Julia Programming for Operations Research](https://www.chkwon.net/julia/). March 2019.

R. Gökhan Türeci, Hamdi Dağıstanlı, and İlkay Türk Çakır. [Julia Programming for Physics Applications](https://link.springer.com/book/10.1007/978-3-031-84716-5). Springer, May 2025.

Andreas Varga, [Solving Fault Diagnosis Problems - Linear Synthesis Techniques with Julia Code Examples](https://link.springer.com/book/10.1007/978-3-031-35767-1), Vol. 482 of Studies in Systems, Decision and Control, Springer Nature Switzerland, 2024. The computational examples presented in the book use functions of the [FaultDetectionTools.jl](https://github.com/andreasvarga/FaultDetectionTools.jl) and [DescriptorSystems.jl](https://github.com/andreasvarga/DescriptorSystems.jl) packages and are available [here](https://github.com/andreasvarga/FaultDetectionTools.jl/tree/master/Examples).

Adeil Araújo and Meirivâni Oliveira, ["Julia with Physics: An Introduction" in Portuguese](https://www.seduc.ce.gov.br/wp-content/uploads/sites/37/2023/09/Ebook-02-Julia-com-Fisica.pdf), Seduc - CE, September 2023.

Júlio Hoffimann, [Geospatial Data Science with Julia](https://juliaearth.github.io/geospatial-data-science-with-julia), Open Access, 2023.

Ivo Balbaert and Adrian Salceanu. [Web Development with Julia and Genie](https://www.packtpub.com/en-us/product/web-development-with-julia-and-genie-9781801811132). Packt Publishing, November 2022.

George Datseris, Ulrich Parlitz. [Nonlinear Dynamics: A Concise Introduction Interlaced with Code](https://github.com/JuliaDynamics/NonlinearDynamicsTextbook). Springer, 2022

Dmitrijs Cudihins. [Hands-on Computer Vision with Julia](https://www.packtpub.com/en-us/product/hands-on-computer-vision-with-julia-9781788998796). Packt Publishing, June 2018.

---

## Source: https://julialang.org/learning/classes/

Julia is now being used in several universities and online courses. This list is by no means complete or even comprehensive - it is based on submissions made to the website. If you know of other classes using Julia for teaching, please consider submitting a pull request to [update this list](https://github.com/JuliaLang/www.julialang.org/edit/main/learning/classes.md).

[Julia Scientific Programming](https://www.coursera.org/learn/julia-programming) online course, (Dr. Juan H Klopper, Dr. Henri Laurie)

[MIT's Introduction to Computational Thinking (with Julia)](https://computationalthinking.mit.edu/) online course, (Alan Edelman, David P. Sanders & Charles E. Leiserson)

*Courses currently being offered or offered regularly since 2020.*

[Budapest University of Technology and Economics](https://www.bme.hu/)

Applications of Differential Equations and Vector Analysis for Engineers II ([Brigitta Szilágyi](https://sites.google.com/site/brszilagyi/))

[Czech Technical University in Prague](https://www.cvut.cz/en), Czech Republic

Dartmouth College

École Polytechnique Fédérale de Lausanne

[MATH 251(b)](https://teaching.matmat.org/numerical-analysis/), Numerical analysis, Spring 2024

[MATH 500](https://teaching.matmat.org/error-control/), Error control in scientific modelling, since Fall 2023

[Federal University of Paraná](https://www.ufpr.br/) (*Universidade Federal do Paraná*, UFPR)

[CM106/CMI043/CMM204/MNUM7079](https://www.youtube.com/playlist?list=PLOOY0eChA1uyk_01nGJVmcQGvcJq9h6_6), Otimização Não Linear (Prof. Abel Soares Siqueira), 2018, 2020

The George Washington University, USA

Biostatistical Application for Public Health (Postgraduate) ([Assoc Prof Jay Klopper](https://blogs.gwu.edu/juanklopper)), since Fall 2024

Imperial College London

[MATH50003](https://github.com/Imperial-MATH50003), Numerical Analysis ([Sheehan Olver](https://github.com/dlfivefifty)), since 2021

Johns Hopkins University

[EN560.630](https://github.com/cristophermoen/StructuralDynamics), Structural Dynamics (Prof. Cristopher D. Moen), Spring 2020, Fall 2021

Kathmandu University

[AICC202 Introduction to Data Science](https://github.com/rojesh-shikhrakar/KU-AICC202-Intro-to-Data-Science), Foundational Data Science Course (Rojesh Man Shikhrakar), Spring 2023

Korea Advanced Institute of Science and Technology (KAIST)

[IE535](https://www.chkwon.net/teaching/#ie-535-network-theory-and-applications), Network Theory and Applications (Prof. [Changhyun Kwon](https://www.chkwon.net)), Fall 2023

Massachusetts Institute of Technology (MIT)

[18.S097](https://math.mit.edu/academics/iap2023.html#credit) Special Subject in Mathematics: Introduction to Julia for Data Science ([Bogumił Kamiński](http://bogumilkaminski.pl/about/), [Przemysław Szufel](https://szufel.pl/en/), Łukasz Kraiński, Bartosz Witkowski, Sebastian Zając, Mateusz Zawisza), 2023 ([course materials and lecture videos](https://github.com/pszufe/MIT_18.S097_Introduction-to-Julia-for-Data-Science))

[12.805](http://student.mit.edu/catalog/m12c.html#12.805), Data Analysis in Physical Oceanography ([Jake Gebbie](https://github.com/ggebbie) and Tom Farrar), Fall 2022

[18.337 / 6.338](http://courses.csail.mit.edu/18.337/2016/), Numerical Computing with Julia (Prof. [Alan Edelman](https://github.com/alanedelman)), since Fall 2013. [Fall 2015](https://courses.csail.mit.edu/18.337/2015) ([IJulia notebooks](https://github.com/alanedelman/18.337_2015))

National University of Singapore

[EE5311](https://nusmods.com/courses/EE5311/differentiable-and-probabilistic-computing), Differentiable and Probabilistic Computing (Mandar Chitre), since 2024

[Óbuda University](https://www.uni-obuda.hu), [John von Neumann Faculty of Informatics, Institute of Applied Mathematics](https://nik.uni-obuda.hu)

[Intelligent Development Tools (Hungarian)]

[Intelligent Development Tools (English)]

[Fundamental Mathematical Methods (English)]

Oregon State University

CHE 599, Introduction to Data Science for Engineers (taught by [Cory Simon](https://simonensemble.github.io/))

CHE 361, Process Dynamics & Simulation taught by ([Cory Simon](https://simonensemble.github.io/), using [ Controlz.jl](https://github.com/SimonEnsemble/Controlz.jl))

CHE 461, Process Control ([Cory Simon](https://simonensemble.github.io/), using [ Controlz.jl](https://github.com/SimonEnsemble/Controlz.jl))

Pennsylvania State University

[ASTRO 528](https://psuastro528.github.io/), High-Performance Scientific Computing for Astrophysics (Prof. [Eric B. Ford](https://personal.psu.edu/~ebf11)), Spring 2019 - [github repo](https://github.com/PsuAstro528/Spring2019-website-src) & Fall 2021 - [github repo](https://github.com/PsuAstro528/Fall2021-website-src)

[Politecnico di Torino](http://polito.it) (Torino, Italy)

[Algorithms for Optimization, Inference and Learning - AOIL](https://didattica.polito.it/pls/portal30/gap.pkg_guide.viewGap?p_cod_ins=01SPOPF&p_a_acc=2021&p_header=S&p_lang=EN), (Prof. A. Braunstein), since Spring 2018

[Inference in Biological Systems](https://didattica.polito.it/pls/portal30/gap.pkg_guide.viewGap?p_cod_ins=01TYLPF&p_a_acc=2021&p_header=S&p_lang=EN), (Prof. A. Gamba), since Fall 2018

[Stochastic Simulation Methods In Physics](https://didattica.polito.it/pls/portal30/gap.pkg_guide.viewGap?p_cod_ins=01SPNPF&p_a_acc=2021&p_header=S&p_lang=EN), (Prof. A. Pagnani), since Fall 2018

[Mathematics for the engineer](https://gitlab.polytech.unice.fr/MAM/mi2) (Prof. J.-B. Caillau), Spring 2020

Rice University

[CEVE 543](https://jdossgollin.github.io/environmental-data-science/), Environmental Data Science (Prof. [James Doss-Gollin](https://jdossgollin.github.io/)), since Spring 2022

[Ruhr University Bochum](https://www.ruhr-uni-bochum.de/en), Germany

Student Projects about "Building Blocks for Modern Simulation Software" (Prof. [Daniel Balzani](http://www.lkm.rub.de/index.html.en)), since Spring 2020

Introduction to the Finite Element Method (Prof. [Daniel Balzani](http://www.lkm.rub.de/index.html.en)), since Fall 2020

Mechanical Modeling of Materials (Prof. [Daniel Balzani](http://www.lkm.rub.de/index.html.en)), since Spring 2021

[RWTH Aachen University](https://www.rwth-aachen.de/cms/~a/root/?lidx=1), Germany

[Introduction to Programming for Business Analytics](https://www.dpo.rwth-aachen.de/cms/DPO/Studium/Lehre/~puyhc/Introduction-to-Programming-for-Business/?lidx=1), since Fall 2021

SGH Warsaw School of Economics, Poland

234060-0723, Advanced Simulation Modelling ([Przemysław Szufel](https://szufel.pl/en/)), since 2019

223490-0286, Statistical Learning Methods ([Bogumił Kamiński](http://bogumilkaminski.pl/about/)), since 2017

234900-0286, Agent-Based Modeling ([Bogumił Kamiński](http://bogumilkaminski.pl/about/)), since 2017

239420-0553, *Introduction to Deep Learning* module ([Bogumił Kamiński](http://bogumilkaminski.pl/about/)), since 2018

Stanford University

[ENGR108](https://web.stanford.edu/class/engr108/), Introduction to Matrix Methods (Prof Stephen Boyd), since 2021

[AA222/CS361](https://aa222.stanford.edu), Engineering Design Optimization (Prof. Mykel J. Kochenderfer), since 2014

[AA228/CS238](https://aa228.stanford.edu), Decision Making under Uncertainty (Prof. Mykel J. Kochenderfer), since 2014

[AA228V/CS238V](https://aa228v.stanford.edu), Validation of Safety-Critical Systems (Sydney Katz and Prof. Mykel J. Kochenderfer), since 2025

Swiss Federal Institute of Technology (ETHZ)

[101-0250-00L (PDE on GPU)](https://pde-on-gpu.vaw.ethz.ch/), Solving Partial Differential Equations in parallel on GPUs (Dr. [Ludovic Räss](https://github.com/luraess)), Fall 2021, Fall 2022

Tec de Monterrey, Santa Fe Campus, Mexico City

[IN2022](https://samp.itesm.mx/Materias/VistaPreliminarMateria?clave=IN2022&lang=ES), Modelos de Optimización (Prof. [Marzieh Khakifirooz](https://www.linkedin.com/in/marzieh-khakifirooz-a3b85643/)), Spring 2020

Technical University of Delft (TU Delft)

[EE4375](https://github.com/ziolai/finite_element_electrical_engineering), Finite Element Methods for Electrical Engineering Applications (Prof. D. Lahaye)

Technical University of Munich (TUM)

CITHN2006, Numerical Linear Algebra for Computational Science and Information Engineering (Dr. [Nicolas Venkovic](https://venkovic.github.io)), Winter 2024-2025, Summer 2025

TH Köln (University of Applied Sciences), Institute of Automotive Engineering

Introduction to Scientific Computing (Prof. Georg Engelmann), since Fall 2023

Numerical Methods in Engineering (Prof. Georg Engelmann), since Spring 2023

Tokyo Metropolitan University, Tokyo, Japan

L0407, [Exercises in Programming I for Mechanical Systems Engineering](https://github.com/hsugawa8651/mseprogOne) (Hiroharu Sugawara), since 2018, in Japanese

Universidad Adolfo Ibáñez, Chile

DIIIO06, Advanced linear optimization, Spring 2020 (Diego Morán)

Universidad Alberto Hurtado, Chile

[Métodos Cuantitativos, Introducción a la Programación con Julia](https://mauriciotejada.com/programacionjulia), Magister en Economía (Prof. [Mauricio Tejada](https://mauriciotejada.com))

Universidad de Sevilla, Spain

[IAIC-2023](https://www.cs.us.es/cursos/iaic-2023/), Inteligencia Artificial, (Prof. [Pedro Almagro Blanco](https://www.cs.us.es/~palmagro) and Prof. [Fernando Sancho Caparrini](http://www.cs.us.es/~fsancho)), Winter 2023

Universidad del Norte, Barranquilla, Colombia

[ELP 4076](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ELP&crse_numb_in=4076), Ingeniería de Ríos y Costas (Prof. Germán Rivillas)

[ICI 4083](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ICI&crse_numb_in=4083), Hidráulica (Prof. Germán Rivillas)

[ICI 62016](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ICI&crse_numb_in=62016), Hidráulica Marítima (Prof. Germán Rivillas)

[ICI 62017](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ICI&crse_numb_in=62017), Hidrodinámica (Prof. Germán Rivillas)

[ICI 62019](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ICI&crse_numb_in=62019), Ingeniería Costera (Prof. Germán Rivillas)

[ICI 62022](https://pomelo.uninorte.edu.co/pls/prod/bwckctlg.p_disp_course_detail?cat_term_in=202030&subj_code_in=ICI&crse_numb_in=62022), Tópicos Avanzados de Ingeniería Costera (Prof. Germán Rivillas)

Universidad Nacional Autónoma de México

[Risk Theory](https://github.com/aerdely/RiskTheory) (Prof. Arturo Erdely), Fall 2022

Universidad Nacional del Centro de la Provincia de Buenos Aires, Facultad de Ciencias Exactas, Tandil, Argentina.

[Modelización Matemática](https://exa.unicen.edu.ar/matematicas/#asignaturas) (Prof. Pablo A. Lotito), 2020

Universidade de Brasília / Institute of Chemistry - Brazil

IQD0003 - Programming for Chemical Engineers (60 hours - Prof. Alexandre Umpierre), Spring 2022, Spring 2023, Fall 2023

Universidade Nove de Julho (UNINOVE), Brazil

[Ciência de Dados e Computação Científica com Julia](https://storopoli.github.io/Computacao-Cientifica/) ([Jose Storopoli](https://storopoli.io)), since 2021

[Bayesian Statistics](https://github.com/storopoli/Bayesian-Statistics) ([Jose Storopoli](https://storopoli.io)), since 2022

Université Bretagne Sud

ANR2201 - Result Analysis (Prof. Marc Sevaux), since 2018

INOE301 - Scheduling (Dr. Alexandru Olteanu), since 2018

MAOE501 - Advanced Scheduling (Dr. Alexandru Olteanu), since 2018

MTH2151 - Graphs (Prof. Marc Sevaux), since 2019

MTH2153 - Numerical methods 1 (Dr. Bertrand Banos), since 2018

MTH2251 - Mathematical Programming (Prof. Marc Sevaux), since 2018

MTH2254 - Multi-objective optimization (Prof. Xavier Gandibleux), since 2018

MTH2352 - Heuristics and metaheuristics (Prof. Marc Sevaux), since 2019

OADE301 - Decision aiding tools (Dr. Alexandru Olteanu), since 2018

OPCE501 - Combinatorial Optimization (Prof. Marc Sevaux), since 2019

OPE401 - Operations Research (Dr. Alexandru Olteanu), since 2018

ROP2301 - Optimization (Prof. Marc Sevaux), since 2018

UVOE501 - Virtual factory and optimization (Dr. Alexandru Olteanu), since 2018

UNOE401 - Digital factory and optimization (Dr. Alexandru Olteanu), since 2018

Université de Montréal

[BIO6032](https://web.archive.org/web/20230530021551/https://admission.umontreal.ca/cours-et-horaires/cours/bio-6032/), Biologie computationnelle et modélisation (Prof. [Timothée Poisot](https://poisotlab.io/)), since Winter 2021

[BIO3033](https://admission.umontreal.ca/cours-et-horaires/cours/bio-3033/) & [BIO6033](https://admission.umontreal.ca/cours-et-horaires/cours/bio-6033/), Méthodes Quantitatives en Biologie (Prof. [Timothée Poisot](https://poisotlab.io/)), since Fall 2017

[BIO3043](https://admission.umontreal.ca/cours-et-horaires/cours/bio-3043/) & [BIO6037](https://admission.umontreal.ca/cours-et-horaires/cours/bio-6037/), Analyse des Réseaux Écologiques (Prof. [Timothée Poisot](https://poisotlab.io/)), since Fall 2018

University of Basel, Department of Physics

[Classical Mechanics](https://quantumtheory-bruder.physik.unibas.ch/en/) (Prof. Christoph Bruder), Fall 2020

University of British Columbia

[ECON 567](https://faculty.arts.ubc.ca/pschrimpf/565/565.html), Empirical Industrial Organization (Paul Schrimpf), since 2019

University of California, Los Angeles (UCLA)

[EE133A](https://www.seas.ucla.edu/~vandenbe/ee133a.html), Applied Numerical Computing (Prof. L. Vandenberghe), Fall 2021

[Biostat 257](https://ucla-biostat-257-2021spring.github.io), Computational Methods for Biostatistical Research, Spring 2021 (Prof. [Hua Zhou](http://hua-zhou.github.io))

University of Canterbury, Christchurch, New Zealand

DATA201/DATA422 [Data Wrangling](https://www.canterbury.ac.nz/courseinfo/GetCourseDetails.aspx?course=DATA201&occurrence=22S2(C)&year=2022) (Dr. Giulio Valentino Dalla Riva, Dr. Thomas Li), since 2018

DATA419 [Social Networks and Online Communities](https://www.canterbury.ac.nz/courseinfo/GetCourseDetails.aspx?course=DATA419&occurrence=22S1(C)&year=2022) (Dr. Giulio Valentino Dalla Riva), 2018-2022

DATA417 [The Trustworthy Data Scientist](https://www.canterbury.ac.nz/courseinfo/GetCourseDetails.aspx?course=DATA417&occurrence=22S2(C)&year=2022) (Dr. Giulio Valentino Dalla Riva), 2018-2022

University of Central Florida

STA 7722 Statistical Learning Theory, Spring 2019-2022

STA 6714 Data Preparation, Fall 2021-2022

University of Colorado Boulder

University of Engineering and Technology – UTEC, Barranco, Lima, Peru

IN2003 - Operations Research 1: Deterministic models (Prof. Fabien Cornillier), since 2017

University of Florida

COT 5615, Math for Intelligent Systems (Prof. Kejun Huang), 2021

CIS 4390, Abstraction, Composition, and Computation ([Prof. James Fairbanks](https://www.cise.ufl.edu/fairbanks-james/)), Fall 2021

COT 4501, Numerical Analysis: A Computational Approach ([Prof. James Fairbanks](https://www.cise.ufl.edu/fairbanks-james/)), Spring 2022

University of Michigan

University of Oregon

EC607, [Core Macroeconomics III](https://github.com/gionikola/spring2021_core_macro_lab) ([Prof. David Evans](http://econevans.com/))

EC607, [Computational Economics](https://github.com/dgevans/EC-607-Computational-Economics) ([Prof. David Evans](http://econevans.com/))

University of Queensland

[MATH2504](https://my.uq.edu.au/programs-courses/course.html?course_code=MATH2504), Programming of Simulation, Analysis, & Learning Systems (Assoc. Prof. [Yoni Nazarathy](https://smp.uq.edu.au/profile/236/yoni-nazarathy)), since 2021

University of South Florida

ESI 4312, Deterministic Operations Research (Prof. Changhyun Kwon), Fall 2017-Fall 2020

ESI 6410, Optimization in O.R. (Prof. Changhyun Kwon), Spring 2021

[ESI 6491](https://www.chkwon.net/teaching/esi-6491/), Linear Programming and Network Optimization (Prof. Changhyun Kwon), Fall 2015-Fall 2020

[EIN 6945](https://www.chkwon.net/teaching/ein-6935/), Nonlinear Optimization and Game Theory (Prof. [Changhyun Kwon](https://www.chkwon.net/)), Spring 2016, 2018, 2020

University of Southern California

QBIO 577, Computational Molecular Biology Laboratory, [Systems Biology](https://github.com/adamlmaclean/julia-dynsys-resources/) (Prof. [Adam L. MacLean](https://macleanlab.usc.edu/people/adam-maclean/)), since Fall 2019

University of Southern Maine

[COS 374](https://github.com/jamesquinlan/cos374-numerical), Numerical Analysis ([Prof. James Quinlan](https://cs.usm.maine.edu/~james.quinlan/cos374/index.html)), Spring Semesters

University of St. Gallen

[Financial Theory](https://github.com/PaulSoderlind/FinancialTheoryMSc), MSc ([Paul Soderlind](https://github.com/PaulSoderlind))

[Empirical Finance](https://github.com/PaulSoderlind/EmpiricalFinancePhD), PhD ([Paul Soderlind](https://github.com/PaulSoderlind))

University of Vaasa, Finland

University of Washington

[AMATH 586](https://trogdoncourses.github.io/amath-586-2020/), Numerical analysis of time-dependent problems (Prof. [Tom Trogdon](http://faculty.washington.edu/trogdon/)), Spring 2020

Vrije Universiteit Amsterdam

[XM_40017](https://studiegids.vu.nl/en/2023-2024/courses/XM_40017#/), Programming Large-Scale Parallel Systems (Prof. Dr. Ir. [H.E. Bal](https://research.vu.nl/en/persons/he-bal), Dr. [F. Verdugo Rojano](https://research.vu.nl/en/persons/francesc-verdugo-rojano)), Fall 2023

Washington University in St. Louis

[Advanced Scientific Computing (Bio5989)](https://github.com/timholy/AdvancedScientificComputing/tree/main) (Prof. [Tim Holy](https://neuroscience.wustl.edu/people/timothy-holy-phd/)), annual. See [videos](https://www.youtube.com/playlist?list=PL-G47MxHVTewUm5ywggLvmbUCNOD2RbKA) and corresponding [branch](https://github.com/timholy/AdvancedScientificComputing/tree/Fall2021) from the Fall 2021 edition of the course.

*Courses last offered before 2020. These may still contain useful teaching materials.*

AGH University of Science and Technology, Poland

[Signal processing in medical diagnostic systems](https://web.archive.org/web/20200225113052/http://home.agh.edu.pl:80/~pieciak/en/dydaktyka/przetwarzanie-sygnalow-w-systemach-diagnostyki-medycznej) (Tomasz Pieciak), Spring 2015

Arizona State University

MAT 423, Numerical Analysis (Prof. Clemens Heitzinger), Fall 2014

Azad University, Science and Research Branch

CE 3820, Modeling and Evaluation (Dr. Arman Shokrollahi), Fall 2014

Brown University

[CSCI 1810](https://cs.brown.edu/courses/csci1810/), Computational Molecular Biology (Prof. Benjamin J. Raphael), Fall 2014

City University of New York

[MTH 229](https://www.math.csi.cuny.edu/abhijit/229/), Calculus Computer Laboratory (Prof. John Verzani), Spring 2014. Also see the [MTH 229 Projects](https://mth229.github.io) page.

Cornell University

École Polytechnique Fédérale de Lausanne

[CIVIL 557] Decision-aid methodologies in transportation (Mor Kaspi, Virginie Lurkin), Spring 2017

Emory University

Federal Rural University of Rio de Janeiro (UFRRJ)

TM429, Introduction to Recommender Systems (Prof. [Filipe Braida](https://github.com/filipebraida)), Fall 2016, Spring 2017

[Federal University of Alagoas](https://ufal.br) (*Universidade Federal de Alagoas*, UFAL)

COMP272, Distributed Systems ([Prof. André Lage-Freitas](https://sites.google.com/a/ic.ufal.br/andrelage)): 2015, 2016, and 2017

[Federal University of Paraná](https://www.ufpr.br/) (*Universidade Federal do Paraná*, UFPR)

[CM103](https://web.archive.org/web/20200905092341/https://abelsiqueira.github.io/cm103-2019s2/), Laboratório de Matemática Aplicada (Prof. Abel Soares Siqueira), 2016, 2017, 2018, 2019

CMM014, Cálculo Numérico (Prof. Abel Soares Siqueira), 2019

Federal University of Uberlândia, Institute of Physics

[GFM050](https://www.infis.ufu.br/gerson), Física Computacional (Prof. Gerson J. Ferreira), Fall 2016

Hadsel High School, Stokmarknes, Nordland, Norway

[AnsattOversikt](https://www.hadsel.vgs.no/AnsattOversikt.aspx?personid=16964&mid1=15925), [REA3034] Programmering og modellering (Programming and modeling with Julia and Snap), 2018-2019 (High school lecturer Olav A Marschall, M.sc. Computer Science)

IIT Indore

[ApplNLA](https://github.com/ivanslapnicar/GIAN-Applied-NLA-Course), Modern Applications of Numerical Linear Algebra (Prof. [Ivan Slapnicar](http://marjan.fesb.hr/~slap/)), June 2016

Imperial College London

[M3M6 Methods of Mathematical Physics](https://github.com/dlfivefifty/M3M6MethodsOfMathematicalPhysics) ([Sheehan Olver](https://github.com/dlfivefifty)), 2017-2018

Instituto Tecnológico Autónomo de México (ITAM), Mexico City, Mexico

COM 15112 - Parallel and Cloud Computing (Cómputo paralelo y en la nube) (Dr. José Octavio Gutiérrez García)

Iowa State University

[STAT 590F](https://github.com/heike/stat590f), Topics in Statistical Computing: Julia Seminar (Prof. Heike Hofmann), Fall 2014

Massachusetts Institute of Technology (MIT)

[6.251 / 15.081](https://stellar.mit.edu/courseguide/course/6/fa15/6.251/), Introduction to Mathematical Programming (Prof. Dimitris J. Bertsimas), Fall 2015

[18.06](https://web.mit.edu/18.06/www/), Linear Algebra: Fall 2015, Dr. [Alex Townsend](https://github.com/ajt60gaibb); Fall 2014, Prof. Alexander Postnikov; Fall [2013](https://stellar.mit.edu/S/course/18/fa13/18.06), Prof. Alan Edelman

[18.303](https://math.mit.edu/~stevenj/18.303/), Linear Partial Differential Equations: Analysis and Numerics (Prof. [Steven G. Johnson](https://github.com/stevengj)), Fall 2013-2016

[18.085 / 0851](https://math.mit.edu/classes/18.085/2015FA/index.html), Computational Science And Engineering I (Prof. Pedro J. Sáenz)

[18.330](https://homerreid.dyndns.org/teaching/18.330/), Introduction to Numerical Analysis (Dr. Homer Reid), Spring 2013-2015

[18.335](https://math.mit.edu/~stevenj/18.335/), Introduction to Numerical Methods (Prof. Steven G. Johnson), Fall 2013, Spring 2015

[18.338](https://web.mit.edu/18.338/www/), Eigenvalues Of Random Matrices (Prof. Alan Edelman), Spring 2015

[18.S096](https://math.mit.edu/classes/18.S096/iap17/), Performance Computing in a High Level Language (Steven G. Johnson, Alan Edelman, David Sanders, Jeff Bezanson), January 2017

15.093 / 6.255, Optimization Methods (Prof. Dimitris Bertsimas and Dr. Phebe Vayanos), Fall 2014

[15.S60](https://github.com/IainNZ/ORSoftwareTools2014), Software Tools for Operations Research (Iain Dunning), Spring 2014

[15.083](https://stellar.mit.edu/S/course/15/sp14/15.083/), Integer Programming and Combinatorial Optimization (Prof. Juan Pablo Vielma), Spring 2014

Northeastern University, Fall 2016

MTH3300: Applied Probability & Statistics

Pennsylvania State University

[ASTRO 585](https://www.personal.psu.edu/~ebf11/teach/astro585/), Seminar: High-Performance Scientific Computing for Astrophysics (Prof. [Eric B. Ford](https://personal.psu.edu/~ebf11)), Spring 2014 - [github repo](https://github.com/eford/Astro585_2014_Spring) & Fall 2015 - [github repo](https://github.com/eford/Astro585_2015_Fall_Public)

Pontifical Catholic University of Rio de Janeiro (PUC-Rio)

Programming in Julia (Prof. [Thuener Silva](https://github.com/Thuener)), Summer 2017

Linear Optimization (Prof. [Alexandre Street](https://alexandrestreet.wordpress.com/)), Spring 2017

Decision and Risk Analysis (Prof. [Davi Valladão](https://www.ind.puc-rio.br/en/equipe/davi-michel-valladao/)), Fall 2015

Purdue University

[CS51400](https://www.cs.purdue.edu/homes/dgleich/cs514-2016/), Numerical Analysis (Prof. [David Gleich](https://www.cs.purdue.edu/homes/dgleich/)), Spring 2016

Royal Military Academy (Brussels)

ES123, Computer Algorithms and Programming Project (Prof. [Ben Lauwens](https://github.com/BenLauwens)), Spring 2018

ES313, Mathematical modelling and Computer Simulation (Prof. [Ben Lauwens](https://github.com/BenLauwens)), Fall 2018

"Sapienza" University of Rome, Italy

[Operations Research](https://web.archive.org/web/20210224172735/http://www.iasi.cnr.it/~liuzzi/teachita.htm) (Giampaolo Liuzzi), Spring 2015

[Optimization for Complex Systems](https://web.archive.org/web/20210224172735/http://www.iasi.cnr.it/~liuzzi/teachita.htm) (Giampaolo Liuzzi), Spring 2016

[Sciences Po Paris](https://www.sciencespo.fr), [Department of Economics](https://www.sciencespo.fr/department-economics/en), Spring 2016

Southcentral Kentucky Community and Technical College

CIT 120 Computational Thinking (Inst. [Bryan Knowles](https://github.com/snotskie/)), Online, Fall 2017

Stanford University

[EE103](https://stanford.edu/class/ee103/), Introduction to Matrix Methods (Prof. Stephen Boyd), Fall 2014, Fall 2015

[CME 257](https://github.com/icme/cme257-advanced-julia/), Advanced Topics in Scientific Computing with Julia (Mr. [Brad Nelson](https://github.com/bnels)), Fall 2015

[EE266](http://ee266.stanford.edu/), Stochastic Control (Prof. Sanjay Lall), Spring 2016

[TU Dortmund / SFB 823](https://www.statistik.tu-dortmund.de/sfb823.html), Germany

One week introductory course into Julia with applications in statistics and economics ([Tileman Conring](https://www.statistik.tu-dortmund.de/conring.html)), Spring 2018

Universidad Adolfo Ibáñez, Chile

ING747, Integer programming, Fall 2018-2019 (Diego Morán and Rodolfo Carvajal)

Universidad Nacional Autónoma de México

[Física computacional](https://github.com/dpsanders/fisica_computacional) (Prof. David P. Sanders), Fall 2014

Métodos numéricos para sistemas dinámicos (Prof. Luis Benet), Fall 2014

[Métodos numéricos avanzados](https://github.com/dpsanders/MetodosNumericosAvanzados) (Prof. David P. Sanders and Prof. Luis Benet), Spring 2015

[Métodos computacionales para la física estadística](https://github.com/dpsanders/metodos-monte-carlo) (Prof. David P. Sanders), Spring 2015

Universidad Nacional Pedro Ruiz Gallo, Lambayeque, Perú

Julia: el lenguaje del futuro, [Semana de Integración de Ingeniería Electrónica](https://www.slideshare.net/Ownv94/lenguaje-julia-el-lenguaje-del-futuro), (Oscar William Neciosup Vera), Spring 2015

Universidad Veracruzana, México

[Algoritmos Evolutivos y de Inteligencia Colectiva](https://github.com/jmejia8/julia-python) (Jesús A. Mejía-de-Dios), Fall 2019

University at Buffalo

[IE 572](https://www.chkwon.net/teaching/#ie-572-linear-programming/) Linear Programming (Prof. Changhyun Kwon), Fall 2014

University of Antwerp, Faculty of Pharmaceutical, Biomedical, Veterinary Sciences, October 2016

Computational Neuroscience (2070FBDBMW), Master of Biomedical Sciences, of Biochemistry, of Physics (Michele Giugliano)

University of Cologne, Institute for Theoretical Physics

[Computational Physics](https://www.thp.uni-koeln.de/trebst/Lectures/2016-CompPhys.shtml) (Prof. Simon Trebst), Summer 2016

[Computational Physics](https://www.thp.uni-koeln.de/~bulla/cp-ss17.html) (Prof. Ralf Bulla), Summer 2017

[Statistical Physics](https://www.thp.uni-koeln.de/trebst/Lectures/2017-StatPhys.shtml) (Prof. Simon Trebst), Winter 2017

[Computational Many-Body Physics](https://www.thp.uni-koeln.de/trebst/Lectures/2018-CompManyBody.shtml) (Prof. Simon Trebst), Summer 2018

[Advanced Julia Workshop](https://github.com/crstnbr/JuliaWorkshop18) (MSc. Carsten Bauer), Fall 2018

[Computational Physics](https://www.thp.uni-koeln.de/trebst/Lectures/2019-CompPhys.shtml) (Prof. Simon Trebst), Summer 2019

[Advanced Julia Workshop](https://github.com/crstnbr/JuliaWorkshop19) (MSc. Carsten Bauer), Fall 2019

University of Connecticut, Storrs

CHEG 5395, Metaheuristic and Heuristic Methods in Chemical Engineering (Prof. Ranjan Srivastava), Spring 2018

University of Edinburgh

University of Glasgow, School of Mathematics and Statistics

An Introduction to Julia, course of Online Master of Science (MSc) in Data Analytics ([Theodore Papamarkou](https://www.gla.ac.uk/postgraduate/taught/dataanalytics/)), September 2017

University of Oulu

Invited [Advanced Julia Workshop](https://github.com/crstnbr/JuliaOulu20) (MSc. Carsten Bauer, University of Cologne), Spring 2020

University of Sydney

[MATH3076/3976](https://web.archive.org/web/20210308130503/https://www.maths.usyd.edu.au/u/olver/teaching/MATH3976/), Mathematical Computing (Assoc. Prof. Sheehan Olver), Fall 2016

[MATH0462](http://www.tcuvelier.be/teaching-2016-2017-discrete-optimisation), Discrete Optimization (Prof. [Quentin Louveaux](https://people.montefiore.uliege.be/louveaux/)), Fall 2016

[MATH0461](https://www.programmes.uliege.be/cocoon/20192020/cours/MATH0461-2.html), Introduction to Numerical Optimization (Prof. [Quentin Louveaux](https://people.montefiore.uliege.be/louveaux/)), Fall 2016

[MATH0462](https://tcuvelier.be/teaching-2015-2016-discrete-optimisation), Discrete Optimization (Prof. [Quentin Louveaux](https://people.montefiore.uliege.be/louveaux/)), Fall 2015

Université de Montréal

[IFT1575](https://admission.umontreal.ca/cours-et-horaires/cours/IFT-1575/), Modèles de recherche opérationnelle (Prof. [Bernard Gendron](https://www.iro.umontreal.ca/~gendron/)), Fall 2017

[IFT3245](https://admission.umontreal.ca/cours-et-horaires/cours/IFT-3245/), Simulation et modèles (Prof. [Fabian Bastin](https://www.iro.umontreal.ca/~bastin/)), Fall 2017

[IFT3515](https://admission.umontreal.ca/cours-et-horaires/cours/IFT-3515/), Optimisation non linéaire (Prof. [Fabian Bastin](https://www.iro.umontreal.ca/~bastin/)), Winter 2017-2018

[IFT6512](https://admission.umontreal.ca/cours-et-horaires/cours/IFT-6512/), Programmation stochastique (Prof. [Fabian Bastin](https://www.iro.umontreal.ca/~bastin/)), Winter 2018

Université Paul Sabatier, Toulouse

[Optimization in Machine Learning](https://www.irit.fr/cimi-machine-learning/node/15.html), (Prof. Peter Richtarik), Fall 2015

Western University Canada

[CS 2101A](https://www.csd.uwo.ca/~moreno/cs2101a_moreno/index.html), Foundations of Programming for High Performance Computing. (Prof. Marc Moreno Maza), Fall 2013

---

## Source: https://julialang.org/project

The Julia Project as a whole is about bringing usable, scalable technical computing to a greater audience: allowing scientists and researchers to use computation more rapidly and effectively; letting businesses do harder and more interesting analyses more easily and cheaply. Part of that project entails creating a free, open-source language that is as easy to use as possible, so that researchers who are not necessarily professional programmers can easily create and share programs that others will be able to use for free and improve upon. However, a large part of the project is also about creating an ecosystem in which such openness and sharing can take place.

---

## Source: https://julialang.org/about/help

Read the [Getting Started tutorial](https://docs.julialang.org/en/v1/manual/getting-started/).

Do you learn best via programming books? Check out the [full list of Julia Books](/learning/#books).

See the [install page](/install/) for instructions to installing Julia.

Explore the [development repository on GitHub](https://github.com/JuliaLang/julia).

First check the [Julia FAQs](https://docs.julialang.org/en/v1/manual/faq/) section of the docs which includes answers to many common, general Julia questions.

The next best place to go to ask a question is the official [Julia Discourse site](https://discourse.julialang.org).

Stack Overflow has a growing number of [Julia questions and answers](https://stackoverflow.com/questions/tagged/julia).

For realtime help from a person, you should check out our [official chat channels](/community/#chat).

If you think there may be a bug in core Julia, search the [open issues on the core Julia repo](https://github.com/JuliaLang/julia/issues).

If you think you may have found a security vulnerability in Julia, please read the [instructions for reporting security issues](https://github.com/JuliaLang/julia/security/policy).

If you think you have found a problem with this website, please see the [issues section for the website repository](https://github.com/JuliaLang/www.julialang.org/issues).

Check out the [packages page](/packages/) to browse the complete list of all registered Julia Packages.

To learn how to get started, see the [Contributor's Guide](/contribute).

To report a bug in core Julia, use the [Julia issue tracker on GitHub](https://github.com/JuliaLang/julia/issues).

To report a problem with this website, see the [issues section for the website repository](https://github.com/JuliaLang/www.julialang.org).

To contribute a bug fix or other patch to core Julia, see the [Julia Developer's Guide](https://github.com/JuliaLang/julia/blob/master/CONTRIBUTING.md).

To contribute to the official Julia documentation, use the [contributing guide](https://github.com/JuliaLang/julia/blob/master/CONTRIBUTING.md#improving-documentation) to contribute a documentation patch.

To contribute to the official Julia Language website, see the [README for the website repository](https://github.com/JuliaLang/www.julialang.org#readme).

To announce your package to the Julia community, post on the Julia Discourse under the [package announcement](https://discourse.julialang.org/c/package-announcements/60) section.

Contact `contact@julialang.org`

and let us know how we can help!

Contact `community@julialang.org`

and let us know how we can help!

---

## Source: https://julialang.org/governance/

The Julia project is a large collaborative open source endeavor founded by [Jeff Bezanson](https://github.com/JeffBezanson) ([Github](https://github.com/JeffBezanson), [Twitter](https://twitter.com/JeffBezanson)), [Alan Edelman](https://en.wikipedia.org/wiki/Alan_Edelman) ([MIT](https://math.mit.edu/~edelman/)), [Stefan Karpinski](https://en.wikipedia.org/wiki/Stefan_Karpinski) ([Github](https://github.com/StefanKarpinski), [Twitter](https://twitter.com/StefanKarpinski)), and [Viral B. Shah](https://en.wikipedia.org/wiki/Viral_B._Shah) ([Github](https://github.com/ViralBShah), [Twitter](https://twitter.com/Viral_B_Shah)) with the initial release of the Julia programming language. The project now encompasses many individuals, organizations, and groups collaborating across varying platforms and venues. The communal nature of open source makes it difficult to precisely define where the official Julia project ends and the greater community begins, which is advantageous but can make it challenging to understand the governance structures. This page describes some of those structures.

Fundamentally, the project consists of some code and a community of people who work on that code. Some of this code is managed within the [JuliaLang GitHub organization](https://github.com/JuliaLang), with multiple teams working together to develop and maintain the individual repositories. One particularly important team is that of the "committers": these 40-some individuals have commit privileges and work together to maintain the repositories, including [ julia](https://github.com/JuliaLang/julia) itself. This set of people doesn’t really define the project, however, since there are many people who are prolific contributors to the Julia ecosystem but who do not have this “commit bit.” An informal consensus process is used to review and merge pull requests, and a standing meeting — the

A larger set of individuals participates as "triage" members of the JuliaLang GitHub organization; they have permissions to organize and label the issues and pull requests.

One official group of people representing the Julia project does exist: [Julia Stewards](/community/stewards/). This group exists to handle conflict resolution and reports of inappropriate or problematic behavior in the Julia community and ecosystem. The current stewards are: Milan Bouchet-Valat, Simon Byrne, Tim Holy, Katharine Hyatt, Steven Johnson, Stefan Karpinski, and Viral Shah. This group gets (rare) emails about potentially problematic situations and confidentially discusses and decides on what to do about them. The stewards group is not responsible for making any kinds of technical decisions or steering the project in any other way, it just exists to handle complaints and disputes, which fortunately are exceedingly rare.

NumFOCUS is a US 501(c)(3) nonprofit organization promoting open practices in scientific research, data science, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs in these areas. Through NumFOCUS, both [individuals](https://numfocus.org/support) and [corporations](https://numfocus.org/sponsors) have the opportunity to donate to any of NumFOCUS’s fiscally sponsored projects including Julia, NumPy, Jupyter, Pandas, JuMP, rOpenSci, QuantEcon, and [many others](https://numfocus.org/sponsored-projects/). This is possible because these projects have entered into a contractual and legal relationship with NumFOCUS. This means that a set of people serving as the project’s leadership body has signed an agreement stating that they, or their successors, will manage the technical direction and programs of the project within the scope of the organization’s nonprofit status. NumFOCUS is the legal and financial administrator of project funds, disbursing as requested by the project’s leadership body with ultimate oversight by the NumFOCUS board of directors.

Despite what “fiscally sponsored project” may sound like, NumFOCUS does not have a big bag of money that it gives out to projects however it wants to. Rather, it means that NumFOCUS is legally able to accept donations from individuals, companies, private foundations and government entities to be spent on the fiscally sponsored projects. There are [other projects](https://numfocus.org/sponsored-projects/affiliated-projects) affiliated with NumFOCUS that are not fiscally sponsored, including Flux, Conda, Cython, Dask, SciPy, and scikit-learn. These projects can’t receive money through NumFOCUS because they don’t have the same legal relationship.

Julia’s signatories with NumFOCUS are [Tim Holy](https://github.com/timholy), [Steven Johnson](https://github.com/stevengj), [Viral Shah](https://github.com/ViralBShah), [Stefan Karpinski](https://github.com/StefanKarpinski), and [Avik Sengupta](https://github.com/aviks). This set of people was chosen to be trustworthy, independent (not all from any one company or organization), and representative of the open source project. Signatories provide oversight to make sure that funding is being used for legitimate purposes. Avik Sengupta is currently the Julia project representative at NumFOCUS and manages the projects finances. Other members of the Julia community are also actively involved with NumFOCUS in other capacities: Stefan Karpinski is on the [advisory council](https://numfocus.org/community/people#people-advisorycouncil) and [Logan Kilpatrick](https://twitter.com/OfficialLoganK) is a current [board member](https://numfocus.org/community/people#people-directors).

What kind of money goes to Julia through NumFOCUS and how is it spent? When you click on the "Donate to Julia button" on the Julia website, your donation goes to NumFOCUS and is earmarked to be used for the Julia project. This money is used to pay for infrastructure and personnel costs, including website hosting, continuous integration services, and anyone who is working on Julia through NumFOCUS. By far the biggest flow of money through NumFOCUS for Julia is for the annual JuliaCon conference. Money from JuliaCon ticket sales and sponsorships go to NumFOCUS which then pays vendors for services required to make JuliaCon happen and reimburse anyone who has reimbursable conference-related expenses. Excess money (if any) from JuliaCon goes into the same pool as donations. JuliaCon finances are managed by the finance chair and approved by the [JuliaCon organizing committee](https://juliacon.org/2021/committee/) as representatives of the project and community. All money that goes in and out of NumFOCUS is a matter of [public record](https://numfocus.org/legal) since it is a nonprofit.

There are organizations that people sometimes mistakenly believe have some kind of official control over the Julia project. This section details two of them, but please note that neither has any official relationship to the Julia project, nor any governance capacity with respect to the project. Individuals who have some control over the project and happen to belong to these organizations, have that control as individuals and not as members of those organizations and take the separation of those roles quite seriously.

A lot of the early work on the development of core Julia was done at MIT in what is known as [The Julia Lab](https://julia.mit.edu) under the direction of professor Alan Edelman. All of the co-creators of Julia have been part of the lab at some point. In those early days, it wasn't called the Julia Lab yet, it was just an office where some people worked on high performance computing, numerical linear algebra, [random matrix theory](https://en.wikipedia.org/wiki/Random_matrix), and this new programming language called Julia. Since those early days, things have gotten a lot more organized under the leadership (in chronological order) of [Jiahao Chen](https://github.com/jiahao), [Andreas Noack](https://github.com/andreasnoack), [Valentin Churavy](https://github.com/vchuravy), and [Chris Rackauckas](https://github.com/ChrisRackauckas). The Julia Lab remains a steady source of major innovations and contributions to Julia.

There are several other groups at MIT that have made major contributions to Julia over the years besides the Julia Lab. [Steven Johnson](https://en.wikipedia.org/wiki/Steven_G._Johnson), also a [professor at MIT](https://math.mit.edu/~stevenj/), heads up his own group but in his spare time has become one of the most prolific contributors to Julia (currently #10 by commits). The [JuMP](http://jump.dev/) and [Cassette](https://github.com/JuliaLabs/Cassette.jl) projects are primarily developed by current and former members of professor Juan Pablo Vielma’s optimization research group at [MIT Operations Research Center](https://orc.mit.edu/). There are so many research groups at MIT using Julia these days, making major contributions to its ecosystem and to science, that it has become commonplace for Alan to discover that some neighbor of his at [CSAIL](https://www.csail.mit.edu) is using Julia completely unbeknownst to him. So definitely don’t consider this list exhaustive. And of course, there’s incredible work being done on Julia by people at many other universities all around the world.

In 2015, the four co-creators of Julia along with [Keno Fischer](https://en.wikipedia.org/wiki/Keno_Fischer) ([Github](https://github.com/keno), [Twitter](https://twitter.com/KenoFischer)) and [Deepak Vinchhi](https://www.linkedin.com/in/deepakvinchhi/) founded Julia Computing (now [JuliaHub](https://juliahub.com/)), a United States C corporation. JuliaHub provides products, support and services around Julia and [JuliaAcademy](https://juliaacademy.com). The company employs many of the top contributors to Julia itself (half of the top ten contributors by commits) and to major Julia packages, especially for simulation, data science and machine learning. Even though there’s no formal connection between the company and the open source project, JuliaHub is deeply committed to Julia’s success and is proud to sponsor JuliaCon each year as well as drive open source Julia development.

If you have questions about Julia's governance structure, please reach out via email to `contact@julialang.org`

.

---

## Source: https://julialang.org/research/

Research on Julia is carried out at the [Julia Lab at MIT](https://julia.mit.edu) and at many universities worldwide. If you use Julia in your research, we request citing the following paper:

Julia: A Fresh Approach to Numerical Computing. Jeff Bezanson, Alan Edelman, Stefan Karpinski, Viral B. Shah. (2017) SIAM Review, 59: 65–98. doi: [10.1137/141000671](https://dx.doi.org/10.1137/141000671). [pdf](/assets/research/julia-fresh-approach-BEKS.pdf).

Researchers contributing to Julia have been awarded various prizes:

[2025: Julia Community Prizes](https://juliacon.org/2025/prize/): Claire Foster and Stefan Krastanov

[2024: Julia Community Prizes](https://juliacon.org/2024/prize/): Guillaume Dalle, the Makie team (Simon Danisch, Julius Krumbiegel, Frederic Freyer, & Anshul Singhvi) and the JuMP team (Oscar Dowson, Benoît Legat, & Miles Lubin)

[2023: Julia Community Prizes](https://juliacon.org/2023/prize/): Valentin Churavy, William Moses, Ian Butterworth, Kristoffer Carlsson, and Yingbo Ma

[2022: Julia Community Prizes](https://juliacon.org/2022/prize/): Morten Piibeleht, Michael Hatherly, Fredrik Ekre, and Mauro Werder, Frames White, and Shuhei Kadowaki

[2021: Julia Community Prizes](https://juliacon.org/2021/prize/): Bogumił Kamiński & Milan Bouchet-Valat, Fons van der Plas, and Dilum Aluthge

[2020: Julia Community Prizes](https://juliacon.org/2020/prize/): Huda Nassar, Mosè Giordano, and Chris Elrod

[2019: NumFOCUS Awards and New Contributor Recognition](https://numfocus.org/blog/2019-numfocus-awards): Logan Kilpatrick, Mosè Giordano

[2019: IEEE Computer Society Sidney Fernbach Award](https://www.computer.org/press-room/2019-news/2019-ieee-fernbach-award-edelman): Alan Edelman

[2019: Julia Community Prizes](https://juliacon.org/2019/prize.html): Jane Herriman, Mike Innes, and Jacob Quinn

[2019: James H. Wilkinson Prize for Numerical Software](https://sinews.siam.org/Details-Page/january-prize-spotlight-jeff-bezanson-steven-l-brunton-jack-dongarra-stefan-karpinski-and-viral-b-shah): Jeff Bezanson, Stefan Karpinski, and Viral Shah

[2019: Forbes 30 under 30 in Enterprise Technology](https://www.forbes.com/profile/keno-fischer/?list=30under30-enterprise-technology#2388dab7190f): Keno Fischer for Julia

[2018: Inaugural NumFOCUS Awards and New Contributor Recognition](https://numfocus.org/blog/inaugural-numfocus-awards-and-new-contributor-recognition): Pietro Vertechi, Michael Savastio

[2018: Julia Community Prizes](/blog/2018/09/julia-community-prizes/): Tim Besard, Katharine Hyatt, Chris Rackauckas, and Elliot Saba

[2018: DSWeb Software Contest](https://dsweb.siam.org/The-Magazine/Article/winners-of-the-dsweb-2018-software-contest): George Datseris for DynamicalSystems.jl

[2018: Best of Open Source Software (Bossie) Award](https://globenewswire.com/news-release/2018/09/26/1576496/0/en/InfoWorld-Recognizes-Open-Source-Software-Technologies-Driving-Business-Innovation.html): The Julia project

[2016: INFORMS Computing Society Prize](https://connect.informs.org/computing/awards/ics-prize): Miles Lubin, Iain Dunning, and Joey Huchette for JuMP.jl

[2015: IEEE-CS Charles Babbage Award](https://www.computer.org/web/awards/charles-babbage): Alan Edelman

Google Scholar provides a list of papers [citing Julia](https://scholar.google.com/scholar?cites=12373977815425691465&as_sdt=40000005&sciodt=0,22&hl=en).

In order to make Julia packages and projects easy to cite, the community has settled on a standard location and format for bibliographic information. Please add a `CITATION.bib`

file (BibTeX format) in the top-level directory of your package or repo. The key for the bib entry should be <PackageName.jl>-<year>-<letter> (Use a letter if you have multiple citations in same year). For example, see the [CITATION.bib](https://github.com/JuliaLang/julia/blob/master/CITATION.bib) file in the Julia repo.

---

## Source: https://julialang.org/community/sponsors/

In addition to the thousands of individuals who contribute to the Julia project in their personal capacities, we are grateful to a large number of companies and organizations that are supporting the continued growth of the Julia project and ecosystem.

The following organizations have employed Julia core developers whose full-time responsibility is Julia development and maintenance. We are grateful for their commitment to improving the long-term sustainability of the Julia project.

[JuliaHub](https://juliahub.com/) was founded by the creators of the Julia project and continues supporting the ongoing development of Julia by employing a significant number of Julia core developers.

[Relational AI](https://relational.ai/) uses Julia heavily in their product offerings and employs several developers focusing on core Julia development, particularly around improvements to GC and observability.

[MIT's Julia Lab](https://julia.mit.edu/) was the original home of many Julia core developers.

Note that while these organizations are employing Julia core developers, decision making authority within the project rests solely with individual core developers and not their employers. For more information, see the [governance](/governance) page.

As a project, Julia encompasses more than just a repository on GitHub. Providing a seamless user experience to the Julia community requires a significant amount of infrastructure. Running this infrastructure is not cheap and we are grateful to these organizations for providing compute credits, services, hardware and other support essential for keeping Julia running:

[AWS](https://aws.amazon.com) provides a substantial amount of free compute credits every year that powers major parts of our CI and package management infrastructure.

[Fastly](https://www.fastly.com/) provides the Julia project with free CDN services

[Discourse](https://discourse.org/) is providing a 50% discount on the hosting fees for https://discourse.julialang.org/

[MacStadium](https://www.macstadium.com/) is hosting a free M1 Mac mini for CI

[ARM](https://www.arm.com/markets/computing-infrastructure/works-on-arm)/[Equinix](https://deploy.equinix.com/) are providing free access to Aarch64 machines for CI

[IBM](www.ibm.com) and [OSU OSL](https://osuosl.org/) are providing free access to IBM POWER systems for CI

[Microsoft Azure](https://azure.microsoft.com/) is providing free credits improving package server latency to Microsoft Azure customer, most notable GitHub Actions

[JuliaHub](https://juliahub.com/) is maintaining data center space for the project and providing a significant number of CI machines

[MIT's Julia Lab](https://julia.mit.edu/) is maintaining data center for the project space and providing a significant number of CI machines

[NVIDIA](nvidia.com) has provided both JuliaHub and the Julia Lab with a significant number of free GPUs across various generations of NVIDIA products

[Buildkite](https://buildkite.com) provides a free Buildkite account for use in Base Julia CI

[Cloudflare](https://buildkite.com) provides the Julia package servers with free CDN services

A number of organizations and funding agencies are or have provided direct funding for Julia maintenance.

Julia receives individual donations from a larger number of individuals through [GitHub sponsors](https://github.com/sponsors/JuliaLang) and [NumFocus](https://numfocus.org/project/julia)

In addition, there are a large number of organizations funding research primarily conducted in Julia or funding the specific development of certain Julia features. Funding agencies for these efforts include [NSF](https://nsf.gov), [DARPA](https://www.darpa.mil/), [NIH](https://www.nih.gov/), and the [FAA](https://www.faa.gov/). However, they are not listed here, as this list only includes such funding directly dedicated to ongoing Julia maintenance.

The following organizations have previously directly funded Julia development and maintenance:

[Lincoln Laboratory](https://www.ll.mit.edu): [Dr. Jeremy Kepner](https://www.mit.edu/~kepner/) is the founding sponsor of the Julia project.

The annual [JuliaCon conference](https://juliacon.org/) raises money through sponsorship and ticket sales. Excess money after expenses (if any) become part of the general Julia fund at NumFocus, which is used to cover miscellaneous hosting and other expenses of the Julia project.

---

## Source: https://julialang.org/downloads

This will install the latest stable version of Julia, as well as the [ juliaup](https://github.com/JuliaLang/juliaup) tool. Start Julia from the command-line by typing

`julia`

. See `juliaup --help`

for how to configure installed versions.If you prefer to use manual installation using a GUI-based installer, see the [Manual Downloads](/downloads/manual-downloads/) page.

Julia supports all the major operating systems, but specific versions and architectures have different [tiers of support](/downloads/support).

The following domains are official and used by open source Julia infrastructure for serving content and resources:

`julialang.org`

and all subdomains`julialang.net`

and all subdomainsIf you are using Julia behind a firewall that blocks access to these, you may have trouble downloading and installing Julia packages. If this is the case, please ask your sysadmin to add these domains to the firewall allow list. Traffic can be limited to HTTPS (TCP port 443).

Julia comes with a built-in package manager which downloads and installs packages from the Internet. In doing so, it necessarily reveals your public [IP address](https://en.wikipedia.org/wiki/IP_address) to any server you connect to, and service providers may log your IP address. In Julia versions 1.5 and higher, by default the package manager connects to [https://pkg.julialang.org](https://pkg.julialang.org), a free public service operated by the Julia project to serve open source package resources to Julia users. This service retains IP address logs for up to 31 days.

---

## Source: https://julialang.org/downloads/manual-downloads

`juliaup`

to install the official Julia binaries. Users who are unable to use `juliaup`

or require a specific, atypical setup may manually download and install the binaries from this page. If these binaries do not work for you, please [Release notes](https://github.com/JuliaLang/julia/blob/v1.12.5/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.12.5) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.12.5.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.12.5.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|

Almost everyone should be downloading and using the latest stable release of Julia. Great care is taken not to break compatibility with older Julia versions, so older code should continue to work with the latest stable Julia release. You should *only* be using the long-term support (LTS) version of Julia if you work at an organization where implementing or certifying upgrades is prohibitively expensive and there is no need for new language features or packages. See this description of ["Risk Personas"](/blog/2019/08/release-process/#risk_tolerance_personas) for more detail on who should be using what versions of Julia based on their risk tolerance. See this blog post on [Julia's Release Process](/blog/2019/08/release-process/) for more information on different kinds of releases.

[Release notes](https://github.com/JuliaLang/julia/blob/v1.10.11/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.10.11) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.10.11.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.10.11.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|

We're currently testing a prerelease for Julia v1.13, an upcoming minor release in the 1.x series of releases. We encourage developers and interested users to try it out and report any issues they encounter. As a prerelease, it should not be considered production-ready; it's intended to give users a chance to try out 1.13 with their code before the full release.

[Release notes](https://github.com/JuliaLang/julia/blob/v1.13.0-beta3/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.13.0-beta3) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.13.0-beta3.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.13.0-beta3.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|


Julia supports all the major operating systems, but specific versions and architectures have different [tiers of support](/downloads/support).

Please do not use Julia shipped by Linux or BSD package managers. Many Linux/BSD/Unix package managers ship broken and/or significantly out of date versions of Julia. Please use [ juliaup](/downloads) or download the official binaries instead.

**Older Releases** — Older releases of Julia for all platforms are available on the [Older releases page](/downloads/oldreleases/). Only the LTS and Stable releases are maintained.

**Nightly Builds** — Builds of the current unstable development version of Julia are available on the [nightlies page](/downloads/nightlies/). While the name suggests that they are built every night, they are actually built after each commit to master. However, at times due to broken builds or CI infrastructure issues, nightlies may not be produced. These are intended as developer previews into the latest work and are not intended for normal use. Most users are advised to use the current stable release version of Julia.

**Download verification** — All Julia binary releases are cryptographically secured using the traditional methods on each platform. macOS and Windows releases are codesigned with certificates that are verified by the operating system during installation. Linux and source tarballs are signed with GPG using [this key](/assets/juliareleases.asc).

**JSON release feed** — The info above is also available as a [JSON file](https://julialang-s3.julialang.org/bin/versions.json) ([schema](https://julialang-s3.julialang.org/bin/versions-schema.json)). It may take up to two hours after the release of a new version for it to be included in the JSON file.

---

## Source: https://julialang.org/downloads/manual-downloads/

`juliaup`

to install the official Julia binaries. Users who are unable to use `juliaup`

or require a specific, atypical setup may manually download and install the binaries from this page. If these binaries do not work for you, please [Release notes](https://github.com/JuliaLang/julia/blob/v1.12.5/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.12.5) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.12.5.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.12.5.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|

Almost everyone should be downloading and using the latest stable release of Julia. Great care is taken not to break compatibility with older Julia versions, so older code should continue to work with the latest stable Julia release. You should *only* be using the long-term support (LTS) version of Julia if you work at an organization where implementing or certifying upgrades is prohibitively expensive and there is no need for new language features or packages. See this description of ["Risk Personas"](/blog/2019/08/release-process/#risk_tolerance_personas) for more detail on who should be using what versions of Julia based on their risk tolerance. See this blog post on [Julia's Release Process](/blog/2019/08/release-process/) for more information on different kinds of releases.

[Release notes](https://github.com/JuliaLang/julia/blob/v1.10.11/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.10.11) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.10.11.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.10.11.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|

We're currently testing a prerelease for Julia v1.13, an upcoming minor release in the 1.x series of releases. We encourage developers and interested users to try it out and report any issues they encounter. As a prerelease, it should not be considered production-ready; it's intended to give users a chance to try out 1.13 with their code before the full release.

[Release notes](https://github.com/JuliaLang/julia/blob/v1.13.0-beta3/NEWS.md) | [GitHub tag](https://github.com/JuliaLang/julia/releases/tag/v1.13.0-beta3) | [SHA256 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.13.0-beta3.sha256) | [MD5 checksums](https://julialang-s3.julialang.org/bin/checksums/julia-1.13.0-beta3.md5)

| Platform | 64-bit | 32-bit |
|---|---|---|
| Windows
|

| Source |
|
|---|


Julia supports all the major operating systems, but specific versions and architectures have different [tiers of support](/downloads/support).

Please do not use Julia shipped by Linux or BSD package managers. Many Linux/BSD/Unix package managers ship broken and/or significantly out of date versions of Julia. Please use [ juliaup](/downloads) or download the official binaries instead.

**Older Releases** — Older releases of Julia for all platforms are available on the [Older releases page](/downloads/oldreleases/). Only the LTS and Stable releases are maintained.

**Nightly Builds** — Builds of the current unstable development version of Julia are available on the [nightlies page](/downloads/nightlies/). While the name suggests that they are built every night, they are actually built after each commit to master. However, at times due to broken builds or CI infrastructure issues, nightlies may not be produced. These are intended as developer previews into the latest work and are not intended for normal use. Most users are advised to use the current stable release version of Julia.

**Download verification** — All Julia binary releases are cryptographically secured using the traditional methods on each platform. macOS and Windows releases are codesigned with certificates that are verified by the operating system during installation. Linux and source tarballs are signed with GPG using [this key](/assets/juliareleases.asc).

**JSON release feed** — The info above is also available as a [JSON file](https://julialang-s3.julialang.org/bin/versions.json) ([schema](https://julialang-s3.julialang.org/bin/versions-schema.json)). It may take up to two hours after the release of a new version for it to be included in the JSON file.

---

## Source: https://docs.julialang.org/en/v1/

# Julia 1.12 Documentation

Welcome to the documentation for Julia 1.12.

Please read the [release notes](NEWS/) to see what has changed since the last release.

The documentation is also available in PDF format: [julia-1.12.5.pdf](https://raw.githubusercontent.com/JuliaLang/docs.julialang.org/assets/julia-1.12.5.pdf).

[Introduction](#man-introduction)

Scientific computing has traditionally required the highest performance, yet domain experts have largely moved to slower dynamic languages for daily work. We believe there are many good reasons to prefer dynamic languages for these applications, and we do not expect their use to diminish. Fortunately, modern language design and compiler techniques make it possible to mostly eliminate the performance trade-off and provide a single environment productive enough for prototyping and efficient enough for deploying performance-intensive applications. The Julia programming language fills this role: it is a flexible dynamic language, appropriate for scientific and numerical computing, with performance comparable to traditional statically-typed languages.

Because Julia's compiler is different from the interpreters used for languages like Python or R, you may find that Julia's performance is unintuitive at first. If you find that something is slow, we highly recommend reading through the [Performance Tips](manual/performance-tips/#man-performance-tips) section before trying anything else. Once you understand how Julia works, it is easy to write code that is nearly as fast as C.

[Julia Compared to Other Languages](#man-julia-compared-other-languages)

Julia features optional typing, multiple dispatch, and good performance, achieved using type inference and [just-in-time (JIT) compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) (and [optional ahead-of-time compilation](https://github.com/JuliaLang/PackageCompiler.jl)), implemented using [LLVM](https://en.wikipedia.org/wiki/Low_Level_Virtual_Machine). It is multi-paradigm, combining features of imperative, functional, and object-oriented programming. Julia provides ease and expressiveness for high-level numerical computing, in the same way as languages such as R, MATLAB, and Python, but also supports general programming. To achieve this, Julia builds upon the lineage of mathematical programming languages, but also borrows much from popular dynamic languages, including [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), [Perl](https://en.wikipedia.org/wiki/Perl_(programming_language)), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)), and [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)).

The most significant departures of Julia from typical dynamic languages are:

- The core language imposes very little;
[Julia Base and the standard library](base/math/#Base.:--Tuple{Any, Any})are written in Julia itself, including primitive operations like integer arithmetic - A rich language of types for constructing and describing objects, that can also optionally be used to make type declarations
- The ability to define function behavior across many combinations of argument types via
[multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch) - Automatic generation of efficient, specialized code for different argument types
- Good performance, approaching that of statically-compiled languages like C

Although one sometimes speaks of dynamic languages as being "typeless", they are definitely not. Every object, whether primitive or user-defined, has a type. The lack of type declarations in most dynamic languages, however, means that one cannot instruct the compiler about the types of values, and often cannot explicitly talk about types at all. In static languages, on the other hand, while one can – and usually must – annotate types for the compiler, types exist only at compile time and cannot be manipulated or expressed at run time. In Julia, types are themselves run-time objects, and can also be used to convey information to the compiler.

[What Makes Julia, Julia?](#man-what-makes-julia)

While the casual programmer need not explicitly use types or multiple dispatch, they are the core unifying features of Julia: functions are defined on different combinations of argument types, and applied by dispatching to the most specific matching definition. This model is a good fit for mathematical programming, where it is unnatural for the first argument to "own" an operation as in traditional object-oriented dispatch. Operators are just functions with special notation – to extend addition to new user-defined data types, you define new methods for the `+`

function. Existing code then seamlessly applies to the new data types.

Partly because of run-time type inference (augmented by optional type annotations), and partly because of a strong focus on performance from the inception of the project, Julia's computational efficiency exceeds that of other dynamic languages, and even rivals that of statically-compiled languages. For large scale numerical problems, speed always has been, continues to be, and probably always will be crucial: the amount of data being processed has easily kept pace with Moore's Law over the past decades.

[Advantages of Julia](#man-advantages-of-julia)

Julia aims to create an unprecedented combination of ease-of-use, power, and efficiency in a single language. In addition to the above, some advantages of Julia over comparable systems include:

- Free and open source (
[MIT licensed](https://github.com/JuliaLang/julia/blob/master/LICENSE.md)) - User-defined types are as fast and compact as built-ins
- No need to vectorize code for performance; devectorized code is fast
- Designed for parallelism and distributed computation
- Lightweight "green" threading (
[coroutines](https://en.wikipedia.org/wiki/Coroutine)) - Unobtrusive yet powerful type system
- Elegant and extensible conversions and promotions for numeric and other types
- Efficient support for
[Unicode](https://en.wikipedia.org/wiki/Unicode), including but not limited to[UTF-8](https://en.wikipedia.org/wiki/UTF-8) - Call C functions directly (no wrappers or special APIs needed)
- Powerful shell-like capabilities for managing other processes
- Lisp-like macros and other metaprogramming facilities

[Important Links](#man-important-links)

A non-exhaustive list of links that will be useful as you learn and use the Julia programming language:

---

## Source: https://julialang.org/learning/getting-started/

Welcome to the Julia language project! We’re excited that you’re interested in learning Julia and contributing to our project and community. Julia is a new programming language. It is also a general purpose language, which means that you can find a way to build basically any software in it that you could with another language. However, no programming language is the best tool for every problem.

Julia was designed with technical and scientific users in mind. These users often have very large data sets or very complex mathematical problems that they want to solve. This means they want to write code that can run on a computer very quickly, so that they don’t have to wait days or even weeks to get a result. Most of the programming languages that run very fast are also quite a bit trickier to use than some “high level” languages that you might have heard of, like Python or Matlab. For example, C and Fortran are known to be very fast, but they require that the user provides a lot of information to the computer about the program they are writing as they write it. This takes more time and often more programming experience than working in a language like Python.

People used to think that you had to choose between a programming language that did your calculations quickly and one that took less effort to code in. Computer science is still a rapidly evolving field, however, and luckily the creators of modern programming languages are able to learn from all the programming languages of earlier decades. Julia was designed to give you everything – to be relatively easy and quick to write programs in, but also to run code and perform calculations very quickly.

The first thing to do is [install Julia](/install/). The recommended way to install is using the `juliaup`

program, which will install the latest `julia`

for you and help you keep it up to date. You can download and install individual Julia binaries, but `juliaup`

is much easier. We strongly discourage using Julia binaries shipped by various distros–-these are often broken and outdated. Once you install `juliaup`

you will get a `julia`

binary that you can run from a terminal or command prompt, which will leave you in a textual prompt, which is usually called a REPL - Read-Eval-Print-Loop.

You can develop your Julia programs by typing directly in the REPL. Note that the history of everything you type in the REPL is stored, even across restarts. You can access this history using the up-arrow key, or by using ctrl-r for searching.

Even though you can always scroll up to see code you’ve already written in a REPL, this is not a good way to review or save past work once you start writing longer programs. If you want a more graphical environment that also saves your programs, you can use Julia from within your favorite text editor: Visual Studio Code, Vim, Emacs, IntelliJ IDEA. Minimally, a text editor like Vim or Notepad will allow you to create a document where you can write programs but without automatically adding a bunch of formatting information. (Microsoft Word and Apple Pages store a lot more information about your document than just the text you’ve written, and this is bad for writing programs.)

To make coding easier, there are lots of “integrated development environments” (IDEs) out there that offer more than a simple text editor. These IDEs will allow you not only to write and store programs you’ve written, but also to run them, making it easier to test and experiment as you write. If you don’t yet have a favorite editor or IDE, we would suggest using [VS code along with the Julia plugin](https://www.julia-vscode.org/).

When you downloaded Julia using the instructions above, you got the compiler (which converts the Julia code you write into a version your computer can run), and the standard library (also sometimes called *Base*), which contains basic functionality that comes built in. This includes things like arrays and lists, numbers and strings, some basic linear algebra and statistics etc. For most use cases, you will likely need to download and run external libraries, which are known as packages in Julia. A list of publicly available packages is [available here](https://juliahub.com)

Packages are downloaded using a package manager built into the Julia standard library. You can interact with the package manager in a couple of ways. The simplest is to press `]`

(the right square bracket) on your keyboard when you are at the REPL, which will put the REPL into *pkg* mode.

In this mode, you type package management commands directly into the REPL. For example, `add PackageName`

will add a package to your local environment, and `rm PackageName`

will remove it. Using the package manager will also typically manage the package’s dependencies for you; this means the package manager makes sure your computer/environment has everything it needs in order to run the package you want to install. A [video](https://www.youtube.com/watch?v=76KL8aSz0Sg) showing how to use the package manager in more detail can be seen on our youtube channel.

If you have experience programming in another language, you will find that most of your knowledge will be easily transferred to Julia. We have documented some [noteworthy differences](https://docs.julialang.org/en/v1/manual/noteworthy-differences/) from other popular languages: [Matlab](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-MATLAB-1), [R](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-R-1), [Python](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-Python-1) and [C/C++](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-C/C-1)

It is easy to move from using Julia packages to developing them. Most of our contributors started that way. If you are the user of a Julia package, please believe that you have the skills to contribute bug fixes and new features. Chris Rackauckas has created a video that walks you through the process of creating a new package, or contributing code to an existing package. Find it [here on our Youtube channel](https://www.youtube.com/watch?v=QVmU29rCjaA)

Programming is fun and exciting. The Julia programming language is no exception. While it is always best to try to answer a question yourself if you can, feel free to ask someone else more experienced! Take a look at the [Julia Community](/community/) tab on the website to find all the places you can connect and get help in the Julia Community.

---

## Source: https://docs.julialang.org/en/v1/manual/faq/

[Frequently Asked Questions](#Frequently-Asked-Questions)

[General](#General)

[Is Julia named after someone or something?](#Is-Julia-named-after-someone-or-something?)

No.

[Why don't you compile Matlab/Python/R/… code to Julia?](#Why-don't-you-compile-Matlab/Python/R/…-code-to-Julia?)

Since many people are familiar with the syntax of other dynamic languages, and lots of code has already been written in those languages, it is natural to wonder why we didn't just plug a Matlab or Python front-end into a Julia back-end (or “transpile” code to Julia) in order to get all the performance benefits of Julia without requiring programmers to learn a new language. Simple, right?

The basic issue is that there is *nothing special about Julia's compiler*: we use a commonplace compiler (LLVM) with no “secret sauce” that other language developers don't know about. Indeed, Julia's compiler is in many ways much simpler than those of other dynamic languages (e.g. PyPy or LuaJIT). Julia's performance advantage derives almost entirely from its front-end: its language semantics allow a [well-written Julia program](../performance-tips/#man-performance-tips) to *give more opportunities to the compiler* to generate efficient code and memory layouts. If you tried to compile Matlab or Python code to Julia, our compiler would be limited by the semantics of Matlab or Python to producing code no better than that of existing compilers for those languages (and probably worse). The key role of semantics is also why several existing Python compilers (like Numba and Pythran) only attempt to optimize a small subset of the language (e.g. operations on Numpy arrays and scalars), and for this subset they are already doing at least as well as we could for the same semantics. The people working on those projects are incredibly smart and have accomplished amazing things, but retrofitting a compiler onto a language that was designed to be interpreted is a very difficult problem.

Julia's advantage is that good performance is not limited to a small subset of “built-in” types and operations, and one can write high-level type-generic code that works on arbitrary user-defined types while remaining fast and memory-efficient. Types in languages like Python simply don't provide enough information to the compiler for similar capabilities, so as soon as you used those languages as a Julia front-end you would be stuck.

For similar reasons, automated translation to Julia would also typically generate unreadable, slow, non-idiomatic code that would not be a good starting point for a native Julia port from another language.

On the other hand, language *interoperability* is extremely useful: we want to exploit existing high-quality code in other languages from Julia (and vice versa)! The best way to enable this is not a transpiler, but rather via easy inter-language calling facilities. We have worked hard on this, from the built-in `ccall`

intrinsic (to call C and Fortran libraries) to [JuliaInterop](https://github.com/JuliaInterop) packages that connect Julia to Python, Matlab, C++, and more.

[Public API](#man-api)

[How does Julia define its public API?](#How-does-Julia-define-its-public-API?)

Julia's public [API](https://en.wikipedia.org/wiki/API) is the behavior described in documentation of public bindings from `Base`

and the standard libraries. Functions, types, and constants are not part of the public API if they are not public, even if they have docstrings or are described in the documentation. Further, only the documented behavior of public bindings is part of the public API. Undocumented behavior of public bindings is internal.

Public bindings are those marked with either `public foo`

or `export foo`

.

In other words:

- Documented behavior of public bindings is part of the public API.
- Undocumented behavior of public bindings is not part of the public API.
- Documented behavior of private bindings is not part of the public API.
- Undocumented behavior of private bindings is not part of the public API.

You can get a complete list of the public bindings from a module with `names(MyModule)`

.

Package authors are encouraged to define their public API similarly.

Anything in Julia's Public API is covered by [SemVer](https://semver.org/) and therefore will not be removed or receive meaningful breaking changes before Julia 2.0.

[There is a useful undocumented function/type/constant. Can I use it?](#There-is-a-useful-undocumented-function/type/constant.-Can-I-use-it?)

Updating Julia may break your code if you use non-public API. If the code is self-contained, it may be a good idea to copy it into your project. If you want to rely on a complex non-public API, especially when using it from a stable package, it is a good idea to open an [issue](https://github.com/JuliaLang/julia/issues) or [pull request](https://github.com/JuliaLang/julia/pulls) to start a discussion for turning it into a public API. However, we do not discourage the attempt to create packages that expose stable public interfaces while relying on non-public implementation details of Julia and buffering the differences across different Julia versions.

[The documentation is not accurate enough. Can I rely on the existing behavior?](#The-documentation-is-not-accurate-enough.-Can-I-rely-on-the-existing-behavior?)

Please open an [issue](https://github.com/JuliaLang/julia/issues) or [pull request](https://github.com/JuliaLang/julia/pulls) to start a discussion for turning the existing behavior into a public API.

[Sessions and the REPL](#Sessions-and-the-REPL)

[How do I delete an object in memory?](#How-do-I-delete-an-object-in-memory?)

Julia does not have an analog of MATLAB's `clear`

function; once a name is defined in a Julia session (technically, in module `Main`

), it is always present.

If memory usage is your concern, you can always replace objects with ones that consume less memory. For example, if `A`

is a gigabyte-sized array that you no longer need, you can free the memory with `A = nothing`

. The memory will be released the next time the garbage collector runs; you can force this to happen with [ GC.gc()](../../base/base/#Base.GC.gc). Moreover, an attempt to use

`A`

will likely result in an error, because most methods are not defined on type `Nothing`

.[Scripting](#man-scripting)

[How do I check if the current file is being run as the main script?](#How-do-I-check-if-the-current-file-is-being-run-as-the-main-script?)

When a file is run as the main script using `julia file.jl`

one might want to activate extra functionality like command line argument handling. A way to determine that a file is run in this fashion is to check if `abspath(PROGRAM_FILE) == @__FILE__`

is `true`

.

However, it is recommended to not write files that double as a script and as an importable library. If one needs functionality both available as a library and a script, it is better to write is as a library, then import the functionality into a distinct script.

[How do I catch CTRL-C in a script?](#catch-ctrl-c)

Running a Julia script using `julia file.jl`

does not throw [ InterruptException](../../base/base/#Core.InterruptException) when you try to terminate it with CTRL-C (SIGINT). To run a certain code before terminating a Julia script, which may or may not be caused by CTRL-C, use

[. Alternatively, you can use](../../base/base/#Base.atexit)

`atexit`

`julia -e 'include(popfirst!(ARGS))' file.jl`

to execute a script while being able to catch `InterruptException`

in the [block. Note that with this strategy](../../base/base/#try)

`try`

[will not be set.](../../base/constants/#Base.PROGRAM_FILE)

`PROGRAM_FILE`

[How do I pass options to ](#How-do-I-pass-options-to-julia-using-#!/usr/bin/env?)`julia`

using `#!/usr/bin/env`

?

`julia`

using `#!/usr/bin/env`

?Passing options to `julia`

in a so-called shebang line, as in `#!/usr/bin/env julia --startup-file=no`

, will not work on many platforms (BSD, macOS, Linux) where the kernel, unlike the shell, does not split arguments at space characters. The option `env -S`

, which splits a single argument string into multiple arguments at spaces, similar to a shell, offers a simple workaround:

```
#!/usr/bin/env -S julia --color=yes --startup-file=no
@show ARGS # put any Julia code here
```


Option `env -S`

appeared in FreeBSD 6.0 (2005), macOS Sierra (2016) and GNU/Linux coreutils 8.30 (2018).

[Why doesn't ](#Why-doesn't-run-support-*-or-pipes-for-scripting-external-programs?)`run`

support `*`

or pipes for scripting external programs?

`run`

support `*`

or pipes for scripting external programs?Julia's [ run](../../base/base/#Base.run) function launches external programs

*directly*, without invoking an

[operating-system shell](https://en.wikipedia.org/wiki/Shell_(computing))(unlike the

`system("...")`

function in other languages like Python, R, or C). That means that `run`

does not perform wildcard expansion of `*`

(["globbing"](https://en.wikipedia.org/wiki/Glob_(programming))), nor does it interpret

[shell pipelines](https://en.wikipedia.org/wiki/Pipeline_(Unix))like

`|`

or `>`

.You can still do globbing and pipelines using Julia features, however. For example, the built-in [ pipeline](../../base/base/#Base.pipeline-Tuple{Any, Any, Any, Vararg{Any}}) function allows you to chain external programs and files, similar to shell pipes, and the

[Glob.jl package](https://github.com/vtjnash/Glob.jl)implements POSIX-compatible globbing.

You can, of course, run programs through the shell by explicitly passing a shell and a command string to `run`

, e.g. `run(`sh -c "ls > files.txt"`)`

to use the Unix [Bourne shell](https://en.wikipedia.org/wiki/Bourne_shell), but you should generally prefer pure-Julia scripting like `run(pipeline(`ls`, "files.txt"))`

. The reason why we avoid the shell by default is that [shelling out sucks](https://julialang.org/blog/2012/03/shelling-out-sucks/): launching processes via the shell is slow, fragile to quoting of special characters, has poor error handling, and is problematic for portability. (The Python developers came to a [similar conclusion](https://www.python.org/dev/peps/pep-0324/#motivation).)

[Variables and Assignments](#Variables-and-Assignments)

[Why am I getting ](#Why-am-I-getting-UndefVarError-from-a-simple-loop?)`UndefVarError`

from a simple loop?

`UndefVarError`

from a simple loop?You might have something like:

```
x = 0
while x < 10
x += 1
end
```


and notice that it works fine in an interactive environment (like the Julia REPL), but gives `UndefVarError: `x` not defined`

when you try to run it in script or other file. What is going on is that Julia generally requires you to **be explicit about assigning to global variables in a local scope**.

Here, `x`

is a global variable, `while`

defines a [local scope](../variables-and-scoping/#scope-of-variables), and `x += 1`

is an assignment to a global in that local scope.

As mentioned above, Julia (version 1.5 or later) allows you to omit the `global`

keyword for code in the REPL (and many other interactive environments), to simplify exploration (e.g. copy-pasting code from a function to run interactively). However, once you move to code in files, Julia requires a more disciplined approach to global variables. You have least three options:

- Put the code into a function (so that
`x`

is a*local*variable in a function). In general, it is good software engineering to use functions rather than global scripts (search online for "why global variables bad" to see many explanations). In Julia, global variables are also[slow](../performance-tips/#man-performance-tips). - Wrap the code in a
block. (This makes`let`

`x`

a local variable within the`let ... end`

statement, again eliminating the need for`global`

). - Explicitly mark
`x`

as`global`

inside the local scope before assigning to it, e.g. write`global x += 1`

.

More explanation can be found in the manual section [on soft scope](../variables-and-scoping/#on-soft-scope).

[Functions](#Functions)

[I passed an argument ](#I-passed-an-argument-x-to-a-function,-modified-it-inside-that-function,-but-on-the-outside,-the-variable-x-is-still-unchanged.-Why?)`x`

to a function, modified it inside that function, but on the outside, the variable `x`

is still unchanged. Why?

`x`

to a function, modified it inside that function, but on the outside, the variable `x`

is still unchanged. Why?Suppose you call a function like this:

```
julia> x = 10
10
julia> function change_value!(y)
y = 17
end
change_value! (generic function with 1 method)
julia> change_value!(x)
17
julia> x # x is unchanged!
10
```


In Julia, the binding of a variable `x`

cannot be changed by passing `x`

as an argument to a function. When calling `change_value!(x)`

in the above example, `y`

is a newly created variable, bound initially to the value of `x`

, i.e. `10`

; then `y`

is rebound to the constant `17`

, while the variable `x`

of the outer scope is left untouched.

However, if `x`

is bound to an object of type `Array`

(or any other *mutable* type). From within the function, you cannot "unbind" `x`

from this Array, but you *can* change its content. For example:

```
julia> x = [1,2,3]
3-element Vector{Int64}:
1
2
3
julia> function change_array!(A)
A[1] = 5
end
change_array! (generic function with 1 method)
julia> change_array!(x)
5
julia> x
3-element Vector{Int64}:
5
2
3
```


Here we created a function `change_array!`

, that assigns `5`

to the first element of the passed array (bound to `x`

at the call site, and bound to `A`

within the function). Notice that, after the function call, `x`

is still bound to the same array, but the content of that array changed: the variables `A`

and `x`

were distinct bindings referring to the same mutable `Array`

object.

[Can I use ](#Can-I-use-using-or-import-inside-a-function?)`using`

or `import`

inside a function?

`using`

or `import`

inside a function?No, you are not allowed to have a `using`

or `import`

statement inside a function. If you want to import a module but only use its bindings inside a specific function or set of functions, you have two options:

Use

`import`

:`import Foo function bar(...) # ... refer to Foo bindings via Foo.baz ... end`

This loads the module

`Foo`

and defines a variable`Foo`

that refers to the module, but does not import any of the other bindings from the module into the current namespace. You refer to the`Foo`

bindings by their qualified names`Foo.bar`

etc.Wrap your function in a module:

`module Bar export bar using Foo function bar(...) # ... refer to Foo.baz as simply baz .... end end using Bar`

This imports all the bindings from

`Foo`

, but only inside the module`Bar`

.

[What does the ](#What-does-the-...-operator-do?)`...`

operator do?

`...`

operator do?[The two uses of the ](#The-two-uses-of-the-...-operator:-slurping-and-splatting)`...`

operator: slurping and splatting

`...`

operator: slurping and splattingMany newcomers to Julia find the use of `...`

operator confusing. Part of what makes the `...`

operator confusing is that it means two different things depending on context.

`...`

combines many arguments into one argument in function definitions

`...`

combines many arguments into one argument in function definitionsIn the context of function definitions, the `...`

operator is used to combine many different arguments into a single argument. This use of `...`

for combining many different arguments into a single argument is called slurping:

```
julia> function printargs(args...)
println(typeof(args))
for (i, arg) in enumerate(args)
println("Arg #$i = $arg")
end
end
printargs (generic function with 1 method)
julia> printargs(1, 2, 3)
Tuple{Int64, Int64, Int64}
Arg #1 = 1
Arg #2 = 2
Arg #3 = 3
```


If Julia were a language that made more liberal use of ASCII characters, the slurping operator might have been written as `<-...`

instead of `...`

.

`...`

splits one argument into many different arguments in function calls

`...`

splits one argument into many different arguments in function callsIn contrast to the use of the `...`

operator to denote slurping many different arguments into one argument when defining a function, the `...`

operator is also used to cause a single function argument to be split apart into many different arguments when used in the context of a function call. This use of `...`

is called splatting:

```
julia> function threeargs(a, b, c)
println("a = $a::$(typeof(a))")
println("b = $b::$(typeof(b))")
println("c = $c::$(typeof(c))")
end
threeargs (generic function with 1 method)
julia> x = [1, 2, 3]
3-element Vector{Int64}:
1
2
3
julia> threeargs(x...)
a = 1::Int64
b = 2::Int64
c = 3::Int64
```


If Julia were a language that made more liberal use of ASCII characters, the splatting operator might have been written as `...->`

instead of `...`

.

[What is the return value of an assignment?](#What-is-the-return-value-of-an-assignment?)

The operator `=`

always returns the right-hand side, therefore:

```
julia> function threeint()
x::Int = 3.0
x # returns variable x
end
threeint (generic function with 1 method)
julia> function threefloat()
x::Int = 3.0 # returns 3.0
end
threefloat (generic function with 1 method)
julia> threeint()
3
julia> threefloat()
3.0
```


and similarly:

```
julia> function twothreetup()
x, y = [2, 3] # assigns 2 to x and 3 to y
x, y # returns a tuple
end
twothreetup (generic function with 1 method)
julia> function twothreearr()
x, y = [2, 3] # returns an array
end
twothreearr (generic function with 1 method)
julia> twothreetup()
(2, 3)
julia> twothreearr()
2-element Vector{Int64}:
2
3
```


[Types, type declarations, and constructors](#Types,-type-declarations,-and-constructors)

[What does "type-stable" mean?](#man-type-stability)

It means that the type of the output is predictable from the types of the inputs. In particular, it means that the type of the output cannot vary depending on the *values* of the inputs. The following code is *not* type-stable:

```
julia> function unstable(flag::Bool)
if flag
return 1
else
return 1.0
end
end
unstable (generic function with 1 method)
```


It returns either an `Int`

or a [ Float64](../../base/numbers/#Core.Float64) depending on the value of its argument. Since Julia can't predict the return type of this function at compile-time, any computation that uses it must be able to cope with values of both types, which makes it hard to produce fast machine code.

[Why does Julia give a ](#faq-domain-errors)`DomainError`

for certain seemingly-sensible operations?

`DomainError`

for certain seemingly-sensible operations?Certain operations make mathematical sense but result in errors:

```
julia> sqrt(-2.0)
ERROR: DomainError with -2.0:
sqrt was called with a negative real argument but will only return a complex result if called with a complex argument. Try sqrt(Complex(x)).
Stacktrace:
[...]
```


This behavior is an inconvenient consequence of the requirement for type-stability. In the case of [ sqrt](../../base/math/#Base.sqrt-Tuple{Number}), most users want

`sqrt(2.0)`

to give a real number, and would be unhappy if it produced the complex number `1.4142135623730951 + 0.0im`

. One could write the [function to switch to a complex-valued output only when passed a negative number (which is what](../../base/math/#Base.sqrt-Tuple{Number})

`sqrt`

[does in some other languages), but then the result would not be](../../base/math/#Base.sqrt-Tuple{Number})

`sqrt`

[type-stable](#man-type-stability)and the

[function would have poor performance.](../../base/math/#Base.sqrt-Tuple{Number})

`sqrt`

In these and other cases, you can get the result you want by choosing an *input type* that conveys your willingness to accept an *output type* in which the result can be represented:

```
julia> sqrt(-2.0+0im)
0.0 + 1.4142135623730951im
```


[How can I constrain or compute type parameters?](#How-can-I-constrain-or-compute-type-parameters?)

The parameters of a [parametric type](../types/#Parametric-Types) can hold either types or bits values, and the type itself chooses how it makes use of these parameters. For example, `Array{Float64, 2}`

is parameterized by the type `Float64`

to express its element type and the integer value `2`

to express its number of dimensions. When defining your own parametric type, you can use subtype constraints to declare that a certain parameter must be a subtype ([ <:](../../base/base/#Core.:<:)) of some abstract type or a previous type parameter. There is not, however, a dedicated syntax to declare that a parameter must be a

*value*of a given type — that is, you cannot directly declare that a dimensionality-like parameter


`isa`

`Int`

within the `struct`

definition, for example. Similarly, you cannot do computations (including simple things like addition or subtraction) on type parameters. Instead, these sorts of constraints and relationships may be expressed through additional type parameters that are computed and enforced within the type's [constructors](../constructors/#man-constructors).

As an example, consider

```
struct ConstrainedType{T,N,N+1} # NOTE: INVALID SYNTAX
A::Array{T,N}
B::Array{T,N+1}
end
```


where the user would like to enforce that the third type parameter is always the second plus one. This can be implemented with an explicit type parameter that is checked by an [inner constructor method](../constructors/#man-inner-constructor-methods) (where it can be combined with other checks):

```
struct ConstrainedType{T,N,M}
A::Array{T,N}
B::Array{T,M}
function ConstrainedType(A::Array{T,N}, B::Array{T,M}) where {T,N,M}
N + 1 == M || throw(ArgumentError("second argument should have one more axis" ))
new{T,N,M}(A, B)
end
end
```


This check is usually *costless*, as the compiler can elide the check for valid concrete types. If the second argument is also computed, it may be advantageous to provide an [outer constructor method](../constructors/#man-outer-constructor-methods) that performs this calculation:

`ConstrainedType(A) = ConstrainedType(A, compute_B(A))`


[Why does Julia use native machine integer arithmetic?](#faq-integer-arithmetic)

Julia uses machine arithmetic for integer computations. This means that the range of `Int`

values is bounded and wraps around at either end so that adding, subtracting and multiplying integers can overflow or underflow, leading to some results that can be unsettling at first:

```
julia> x = typemax(Int)
9223372036854775807
julia> y = x+1
-9223372036854775808
julia> z = -y
-9223372036854775808
julia> 2*z
0
```


Clearly, this is far from the way mathematical integers behave, and you might think it less than ideal for a high-level programming language to expose this to the user. For numerical work where efficiency and transparency are at a premium, however, the alternatives are worse.

One alternative to consider would be to check each integer operation for overflow and promote results to bigger integer types such as [ Int128](../../base/numbers/#Core.Int128) or

[in the case of overflow. Unfortunately, this introduces major overhead on every integer operation (think incrementing a loop counter) – it requires emitting code to perform run-time overflow checks after arithmetic instructions and branches to handle potential overflows. Worse still, this would cause every computation involving integers to be type-unstable. As we mentioned above,](../../base/numbers/#Base.GMP.BigInt)

`BigInt`

[type-stability is crucial](#man-type-stability)for effective generation of efficient code. If you can't count on the results of integer operations being integers, it's impossible to generate fast, simple code the way C and Fortran compilers do.

A variation on this approach, which avoids the appearance of type instability is to merge the `Int`

and [ BigInt](../../base/numbers/#Base.GMP.BigInt) types into a single hybrid integer type, that internally changes representation when a result no longer fits into the size of a machine integer. While this superficially avoids type-instability at the level of Julia code, it just sweeps the problem under the rug by foisting all of the same difficulties onto the C code implementing this hybrid integer type. This approach

*can*be made to work and can even be made quite fast in many cases, but has several drawbacks. One problem is that the in-memory representation of integers and arrays of integers no longer match the natural representation used by C, Fortran and other languages with native machine integers. Thus, to interoperate with those languages, we would ultimately need to introduce native integer types anyway. Any unbounded representation of integers cannot have a fixed number of bits, and thus cannot be stored inline in an array with fixed-size slots – large integer values will always require separate heap-allocated storage. And of course, no matter how clever a hybrid integer implementation one uses, there are always performance traps – situations where performance degrades unexpectedly. Complex representation, lack of interoperability with C and Fortran, the inability to represent integer arrays without additional heap storage, and unpredictable performance characteristics make even the cleverest hybrid integer implementations a poor choice for high-performance numerical work.

An alternative to using hybrid integers or promoting to BigInts is to use saturating integer arithmetic, where adding to the largest integer value leaves it unchanged and likewise for subtracting from the smallest integer value. This is precisely what Matlab™ does:

```
>> int64(9223372036854775807)
ans =
9223372036854775807
>> int64(9223372036854775807) + 1
ans =
9223372036854775807
>> int64(-9223372036854775808)
ans =
-9223372036854775808
>> int64(-9223372036854775808) - 1
ans =
-9223372036854775808
```


At first blush, this seems reasonable enough since 9223372036854775807 is much closer to 9223372036854775808 than -9223372036854775808 is and integers are still represented with a fixed size in a natural way that is compatible with C and Fortran. Saturated integer arithmetic, however, is deeply problematic. The first and most obvious issue is that this is not the way machine integer arithmetic works, so implementing saturated operations requires emitting instructions after each machine integer operation to check for underflow or overflow and replace the result with [ typemin(Int)](../../base/base/#Base.typemin) or

[as appropriate. This alone expands each integer operation from a single, fast instruction into half a dozen instructions, probably including branches. Ouch. But it gets worse – saturating integer arithmetic isn't associative. Consider this Matlab computation:](../../base/base/#Base.typemax)

`typemax(Int)`

```
>> n = int64(2)^62
4611686018427387904
>> n + (n - 1)
9223372036854775807
>> (n + n) - 1
9223372036854775806
```


This makes it hard to write many basic integer algorithms since a lot of common techniques depend on the fact that machine addition with overflow *is* associative. Consider finding the midpoint between integer values `lo`

and `hi`

in Julia using the expression `(lo + hi) >>> 1`

:

```
julia> n = 2^62
4611686018427387904
julia> (n + 2n) >>> 1
6917529027641081856
```


See? No problem. That's the correct midpoint between 2^62 and 2^63, despite the fact that `n + 2n`

is -4611686018427387904. Now try it in Matlab:

```
>> (n + 2*n)/2
ans =
4611686018427387904
```


Oops. Adding a `>>>`

operator to Matlab wouldn't help, because saturation that occurs when adding `n`

and `2n`

has already destroyed the information necessary to compute the correct midpoint.

Not only is lack of associativity unfortunate for programmers who cannot rely it for techniques like this, but it also defeats almost anything compilers might want to do to optimize integer arithmetic. For example, since Julia integers use normal machine integer arithmetic, LLVM is free to aggressively optimize simple little functions like `f(k) = 5k-1`

. The machine code for this function is just this:

```
julia> code_native(f, Tuple{Int})
.text
Filename: none
pushq %rbp
movq %rsp, %rbp
Source line: 1
leaq -1(%rdi,%rdi,4), %rax
popq %rbp
retq
nopl (%rax,%rax)
```


The actual body of the function is a single `leaq`

instruction, which computes the integer multiply and add at once. This is even more beneficial when `f`

gets inlined into another function:

```
julia> function g(k, n)
for i = 1:n
k = f(k)
end
return k
end
g (generic function with 1 methods)
julia> code_native(g, Tuple{Int,Int})
.text
Filename: none
pushq %rbp
movq %rsp, %rbp
Source line: 2
testq %rsi, %rsi
jle L26
nopl (%rax)
Source line: 3
L16:
leaq -1(%rdi,%rdi,4), %rdi
Source line: 2
decq %rsi
jne L16
Source line: 5
L26:
movq %rdi, %rax
popq %rbp
retq
nop
```


Since the call to `f`

gets inlined, the loop body ends up being just a single `leaq`

instruction. Next, consider what happens if we make the number of loop iterations fixed:

```
julia> function g(k)
for i = 1:10
k = f(k)
end
return k
end
g (generic function with 2 methods)
julia> code_native(g,(Int,))
.text
Filename: none
pushq %rbp
movq %rsp, %rbp
Source line: 3
imulq $9765625, %rdi, %rax # imm = 0x9502F9
addq $-2441406, %rax # imm = 0xFFDABF42
Source line: 5
popq %rbp
retq
nopw %cs:(%rax,%rax)
```


Because the compiler knows that integer addition and multiplication are associative and that multiplication distributes over addition – neither of which is true of saturating arithmetic – it can optimize the entire loop down to just a multiply and an add. Saturated arithmetic completely defeats this kind of optimization since associativity and distributivity can fail at each loop iteration, causing different outcomes depending on which iteration the failure occurs in. The compiler can unroll the loop, but it cannot algebraically reduce multiple operations into fewer equivalent operations.

The most reasonable alternative to having integer arithmetic silently overflow is to do checked arithmetic everywhere, raising errors when adds, subtracts, and multiplies overflow, producing values that are not value-correct. In this [blog post](https://danluu.com/integer-overflow/), Dan Luu analyzes this and finds that rather than the trivial cost that this approach should in theory have, it ends up having a substantial cost due to compilers (LLVM and GCC) not gracefully optimizing around the added overflow checks. If this improves in the future, we could consider defaulting to checked integer arithmetic in Julia, but for now, we have to live with the possibility of overflow.

In the meantime, overflow-safe integer operations can be achieved through the use of external libraries such as [SaferIntegers.jl](https://github.com/JeffreySarnoff/SaferIntegers.jl). Note that, as stated previously, the use of these libraries significantly increases the execution time of code using the checked integer types. However, for limited usage, this is far less of an issue than if it were used for all integer operations. You can follow the status of the discussion [here](https://github.com/JuliaLang/julia/issues/855).

[What are the possible causes of an ](#What-are-the-possible-causes-of-an-UndefVarError-during-remote-execution?)`UndefVarError`

during remote execution?

`UndefVarError`

during remote execution?As the error states, an immediate cause of an `UndefVarError`

on a remote node is that a binding by that name does not exist. Let us explore some of the possible causes.

```
julia> module Foo
foo() = remotecall_fetch(x->x, 2, "Hello")
end
julia> Foo.foo()
ERROR: On worker 2:
UndefVarError: `Foo` not defined in `Main`
Stacktrace:
[...]
```


The closure `x->x`

carries a reference to `Foo`

, and since `Foo`

is unavailable on node 2, an `UndefVarError`

is thrown.

Globals under modules other than `Main`

are not serialized by value to the remote node. Only a reference is sent. Functions which create global bindings (except under `Main`

) may cause an `UndefVarError`

to be thrown later.

```
julia> @everywhere module Foo
function foo()
global gvar = "Hello"
remotecall_fetch(()->gvar, 2)
end
end
julia> Foo.foo()
ERROR: On worker 2:
UndefVarError: `gvar` not defined in `Main.Foo`
Stacktrace:
[...]
```


In the above example, `@everywhere module Foo`

defined `Foo`

on all nodes. However the call to `Foo.foo()`

created a new global binding `gvar`

on the local node, but this was not found on node 2 resulting in an `UndefVarError`

error.

Note that this does not apply to globals created under module `Main`

. Globals under module `Main`

are serialized and new bindings created under `Main`

on the remote node.

```
julia> gvar_self = "Node1"
"Node1"
julia> remotecall_fetch(()->gvar_self, 2)
"Node1"
julia> remotecall_fetch(varinfo, 2)
name size summary
––––––––– –––––––– –––––––
Base Module
Core Module
Main Module
gvar_self 13 bytes String
```


This does not apply to `function`

or `struct`

declarations. However, anonymous functions bound to global variables are serialized as can be seen below.

```
julia> bar() = 1
bar (generic function with 1 method)
julia> remotecall_fetch(bar, 2)
ERROR: On worker 2:
UndefVarError: `#bar` not defined in `Main`
[...]
julia> anon_bar = ()->1
(::#21) (generic function with 1 method)
julia> remotecall_fetch(anon_bar, 2)
1
```


[Troubleshooting "method not matched": parametric type invariance and ](#Troubleshooting-"method-not-matched":-parametric-type-invariance-and-MethodErrors)`MethodError`

s

`MethodError`

s[Why doesn't it work to declare ](#Why-doesn't-it-work-to-declare-foo(bar::Vector{Real})-42-and-then-call-foo([1])?)`foo(bar::Vector{Real}) = 42`

and then call `foo([1])`

?

`foo(bar::Vector{Real}) = 42`

and then call `foo([1])`

?As you'll see if you try this, the result is a `MethodError`

:

```
julia> foo(x::Vector{Real}) = 42
foo (generic function with 1 method)
julia> foo([1])
ERROR: MethodError: no method matching foo(::Vector{Int64})
The function `foo` exists, but no method is defined for this combination of argument types.
Closest candidates are:
foo(!Matched::Vector{Real})
@ Main none:1
Stacktrace:
[...]
```


This is because `Vector{Real}`

is not a supertype of `Vector{Int}`

! You can solve this problem with something like `foo(bar::Vector{T}) where {T<:Real}`

(or the short form `foo(bar::Vector{<:Real})`

if the static parameter `T`

is not needed in the body of the function). The `T`

is a wild card: you first specify that it must be a subtype of Real, then specify the function takes a Vector of with elements of that type.

This same issue goes for any composite type `Comp`

, not just `Vector`

. If `Comp`

has a parameter declared of type `Y`

, then another type `Comp2`

with a parameter of type `X<:Y`

is not a subtype of `Comp`

. This is type-invariance (by contrast, Tuple is type-covariant in its parameters). See [Parametric Composite Types](../types/#man-parametric-composite-types) for more explanation of these.

[Why does Julia use ](#Why-does-Julia-use-*-for-string-concatenation?-Why-not-or-something-else?)`*`

for string concatenation? Why not `+`

or something else?

`*`

for string concatenation? Why not `+`

or something else?The [main argument](../strings/#man-concatenation) against `+`

is that string concatenation is not commutative, while `+`

is generally used as a commutative operator. While the Julia community recognizes that other languages use different operators and `*`

may be unfamiliar for some users, it communicates certain algebraic properties.

Note that you can also use `string(...)`

to concatenate strings (and other values converted to strings); similarly, `repeat`

can be used instead of `^`

to repeat strings. The [interpolation syntax](../strings/#string-interpolation) is also useful for constructing strings.

[Packages and Modules](#Packages-and-Modules)

[What is the difference between "using" and "import"?](#What-is-the-difference-between-"using"-and-"import"?)

There are several differences between `using`

and `import`

(see the [Modules section](https://docs.julialang.org/en/v1/manual/modules/#modules)), but there is an important difference that may not seem intuitive at first glance, and on the surface (i.e. syntax-wise) it may seem very minor. When loading modules with `using`

, you need to say `function Foo.bar(...`

to extend module `Foo`

's function `bar`

with a new method, but with `import Foo.bar`

, you only need to say `function bar(...`

and it automatically extends module `Foo`

's function `bar`

.

The reason this is important enough to have been given separate syntax is that you don't want to accidentally extend a function that you didn't know existed, because that could easily cause a bug. This is most likely to happen with a method that takes a common type like a string or integer, because both you and the other module could define a method to handle such a common type. If you use `import`

, then you'll replace the other module's implementation of `bar(s::AbstractString)`

with your new implementation, which could easily do something completely different (and break all/many future usages of the other functions in module Foo that depend on calling bar).

[Nothingness and missing values](#Nothingness-and-missing-values)

[How does "null", "nothingness" or "missingness" work in Julia?](#faq-nothing)

Unlike many languages (for example, C and Java), Julia objects cannot be "null" by default. When a reference (variable, object field, or array element) is uninitialized, accessing it will immediately throw an error. This situation can be detected using the [ isdefined](../../base/base/#Core.isdefined) or

[functions.](../../base/arrays/#Base.isassigned)

`isassigned`

Some functions are used only for their side effects, and do not need to return a value. In these cases, the convention is to return the value `nothing`

, which is just a singleton object of type `Nothing`

. This is an ordinary type with no fields; there is nothing special about it except for this convention, and that the REPL does not print anything for it. Some language constructs that would not otherwise have a value also yield `nothing`

, for example `if false; end`

.

For situations where a value `x`

of type `T`

exists only sometimes, the `Union{T, Nothing}`

type can be used for function arguments, object fields and array element types as the equivalent of [ Nullable, Option or Maybe](https://en.wikipedia.org/wiki/Nullable_type) in other languages. If the value itself can be



`nothing`

(notably, when `T`

is `Any`

), the `Union{Some{T}, Nothing}`

type is more appropriate since `x == nothing`

then indicates the absence of a value, and `x == Some(nothing)`

indicates the presence of a value equal to `nothing`

. The [function allows unwrapping](../../base/base/#Base.something)

`something`

`Some`

objects and using a default value instead of `nothing`

arguments. Note that the compiler is able to generate efficient code when working with `Union{T, Nothing}`

arguments or fields.To represent missing data in the statistical sense (`NA`

in R or `NULL`

in SQL), use the [ missing](../missing/#missing) object. See the

[section for more details.](../missing/#missing)

`Missing Values`

In some languages, the empty tuple (`()`

) is considered the canonical form of nothingness. However, in julia it is best thought of as just a regular tuple that happens to contain zero values.

The empty (or "bottom") type, written as `Union{}`

(an empty union type), is a type with no values and no subtypes (except itself). You will generally not need to use this type.

[Memory](#Memory)

[Why does ](#Why-does-x-y-allocate-memory-when-x-and-y-are-arrays?)`x += y`

allocate memory when `x`

and `y`

are arrays?

`x += y`

allocate memory when `x`

and `y`

are arrays?In Julia, `x += y`

gets replaced during lowering by `x = x + y`

. For arrays, this has the consequence that, rather than storing the result in the same location in memory as `x`

, it allocates a new array to store the result. If you prefer to mutate `x`

, use `x .+= y`

to update each element individually.

While this behavior might surprise some, the choice is deliberate. The main reason is the presence of immutable objects within Julia, which cannot change their value once created. Indeed, a number is an immutable object; the statements `x = 5; x += 1`

do not modify the meaning of `5`

, they modify the value bound to `x`

. For an immutable, the only way to change the value is to reassign it.

To amplify a bit further, consider the following function:

```
function power_by_squaring(x, n::Int)
ispow2(n) || error("This implementation only works for powers of 2")
while n >= 2
x *= x
n >>= 1
end
x
end
```


After a call like `x = 5; y = power_by_squaring(x, 4)`

, you would get the expected result: `x == 5 && y == 625`

. However, now suppose that `*=`

, when used with matrices, instead mutated the left hand side. There would be two problems:

- For general square matrices,
`A = A*B`

cannot be implemented without temporary storage:`A[1,1]`

gets computed and stored on the left hand side before you're done using it on the right hand side. - Suppose you were willing to allocate a temporary for the computation (which would eliminate most of the point of making
`*=`

work in-place); if you took advantage of the mutability of`x`

, then this function would behave differently for mutable vs. immutable inputs. In particular, for immutable`x`

, after the call you'd have (in general)`y != x`

, but for mutable`x`

you'd have`y == x`

.

Because supporting generic programming is deemed more important than potential performance optimizations that can be achieved by other means (e.g., using broadcasting or explicit loops), operators like `+=`

and `*=`

work by rebinding new values.

[Asynchronous IO and concurrent synchronous writes](#faq-async-io)

[Why do concurrent writes to the same stream result in inter-mixed output?](#Why-do-concurrent-writes-to-the-same-stream-result-in-inter-mixed-output?)

While the streaming I/O API is synchronous, the underlying implementation is fully asynchronous.

Consider the printed output from the following:

```
julia> @sync for i in 1:3
Threads.@spawn write(stdout, string(i), " Foo ", " Bar ")
end
123 Foo Foo Foo Bar Bar Bar
```


This is happening because, while the `write`

call is synchronous, the writing of each argument yields to other tasks while waiting for that part of the I/O to complete.

`print`

and `println`

"lock" the stream during a call. Consequently changing `write`

to `println`

in the above example results in:

```
julia> @sync for i in 1:3
Threads.@spawn println(stdout, string(i), " Foo ", " Bar ")
end
1 Foo Bar
2 Foo Bar
3 Foo Bar
```


You can lock your writes with a `ReentrantLock`

like this:

```
julia> l = ReentrantLock();
julia> @sync for i in 1:3
Threads.@spawn begin
lock(l)
try
write(stdout, string(i), " Foo ", " Bar ")
finally
unlock(l)
end
end
end
1 Foo Bar 2 Foo Bar 3 Foo Bar
```


[Arrays](#Arrays)

[What are the differences between zero-dimensional arrays and scalars?](#faq-array-0dim)

Zero-dimensional arrays are arrays of the form `Array{T,0}`

. They behave similar to scalars, but there are important differences. They deserve a special mention because they are a special case which makes logical sense given the generic definition of arrays, but might be a bit unintuitive at first. The following line defines a zero-dimensional array:

```
julia> A = zeros()
0-dimensional Array{Float64,0}:
0.0
```


In this example, `A`

is a mutable container that contains one element, which can be set by `A[] = 1.0`

and retrieved with `A[]`

. All zero-dimensional arrays have the same size (`size(A) == ()`

), and length (`length(A) == 1`

). In particular, zero-dimensional arrays are not empty. If you find this unintuitive, here are some ideas that might help to understand Julia's definition.

- Zero-dimensional arrays are the "point" to vector's "line" and matrix's "plane". Just as a line has no area (but still represents a set of things), a point has no length or any dimensions at all (but still represents a thing).
- We define
`prod(())`

to be 1, and the total number of elements in an array is the product of the size. The size of a zero-dimensional array is`()`

, and therefore its length is`1`

. - Zero-dimensional arrays don't natively have any dimensions into which you index – they’re just
`A[]`

. We can apply the same "trailing one" rule for them as for all other array dimensionalities, so you can indeed index them as`A[1]`

,`A[1,1]`

, etc; see[Omitted and extra indices](../arrays/#Omitted-and-extra-indices).

It is also important to understand the differences to ordinary scalars. Scalars are not mutable containers (even though they are iterable and define things like `length`

, `getindex`

, *e.g.* `1[] == 1`

). In particular, if `x = 0.0`

is defined as a scalar, it is an error to attempt to change its value via `x[] = 1.0`

. A scalar `x`

can be converted into a zero-dimensional array containing it via `fill(x)`

, and conversely, a zero-dimensional array `a`

can be converted to the contained scalar via `a[]`

. Another difference is that a scalar can participate in linear algebra operations such as `2 * rand(2,2)`

, but the analogous operation with a zero-dimensional array `fill(2) * rand(2,2)`

is an error.

[Why are my Julia benchmarks for linear algebra operations different from other languages?](#Why-are-my-Julia-benchmarks-for-linear-algebra-operations-different-from-other-languages?)

You may find that simple benchmarks of linear algebra building blocks like

```
using BenchmarkTools
A = randn(1000, 1000)
B = randn(1000, 1000)
@btime $A \ $B
@btime $A * $B
```


can be different when compared to other languages like Matlab or R.

Since operations like this are very thin wrappers over the relevant BLAS functions, the reason for the discrepancy is very likely to be

the BLAS library each language is using,

the number of concurrent threads.


Julia compiles and uses its own copy of OpenBLAS, with threads currently capped at `8`

(or the number of your cores).

Modifying OpenBLAS settings or compiling Julia with a different BLAS library, eg [Intel MKL](https://software.intel.com/en-us/mkl), may provide performance improvements. You can use [MKL.jl](https://github.com/JuliaComputing/MKL.jl), a package that makes Julia's linear algebra use Intel MKL BLAS and LAPACK instead of OpenBLAS, or search the discussion forum for suggestions on how to set this up manually. Note that Intel MKL cannot be bundled with Julia, as it is not open source.

[Computing cluster](#Computing-cluster)

[How do I manage precompilation caches in distributed file systems?](#How-do-I-manage-precompilation-caches-in-distributed-file-systems?)

When using Julia in high-performance computing (HPC) facilities with shared filesystems, it is recommended to use a shared depot (via the [ JULIA_DEPOT_PATH](../environment-variables/#JULIA_DEPOT_PATH) environment variable). Since Julia v1.10, multiple Julia processes on functionally similar workers and using the same depot will coordinate via pidfile locks to only spend effort precompiling on one process while the others wait. The precompilation process will indicate when the process is precompiling or waiting for another that is precompiling. If non-interactive the messages are via

`@debug`

.However, due to caching of binary code, the cache rejection since v1.9 is more strict and users may need to set the [ JULIA_CPU_TARGET](../environment-variables/#JULIA_CPU_TARGET) environment variable appropriately to get a single cache that is usable throughout the HPC environment.

[Julia Releases](#Julia-Releases)

[Do I want to use the Stable, LTS, or nightly version of Julia?](#Do-I-want-to-use-the-Stable,-LTS,-or-nightly-version-of-Julia?)

The Stable version of Julia is the latest released version of Julia, this is the version most people will want to run. It has the latest features, including improved performance. The Stable version of Julia is versioned according to [SemVer](https://semver.org/) as v1.x.y. A new minor release of Julia corresponding to a new Stable version is made approximately every 4-5 months after a few weeks of testing as a release candidate. Unlike the LTS version the Stable version will not normally receive bugfixes after another Stable version of Julia has been released. However, upgrading to the next Stable release will always be possible as each release of Julia v1.x will continue to run code written for earlier versions.

You may prefer the LTS (Long Term Support) version of Julia if you are looking for a very stable code base. The current LTS version of Julia is versioned according to SemVer as v1.6.x; this branch will continue to receive bugfixes until a new LTS branch is chosen, at which point the v1.6.x series will no longer received regular bug fixes and all but the most conservative users will be advised to upgrade to the new LTS version series. As a package developer, you may prefer to develop for the LTS version, to maximize the number of users who can use your package. As per SemVer, code written for v1.0 will continue to work for all future LTS and Stable versions. In general, even if targeting the LTS, one can develop and run code in the latest Stable version, to take advantage of the improved performance; so long as one avoids using new features (such as added library functions or new methods).

You may prefer the nightly version of Julia if you want to take advantage of the latest updates to the language, and don't mind if the version available today occasionally doesn't actually work. As the name implies, releases to the nightly version are made roughly every night (depending on build infrastructure stability). In general nightly released are fairly safe to use—your code will not catch on fire. However, they may be occasional regressions and or issues that will not be found until more thorough pre-release testing. You may wish to test against the nightly version to ensure that such regressions that affect your use case are caught before a release is made.

Finally, you may also consider building Julia from source for yourself. This option is mainly for those individuals who are comfortable at the command line, or interested in learning. If this describes you, you may also be interested in reading our [guidelines for contributing](https://github.com/JuliaLang/julia/blob/master/CONTRIBUTING.md).

The [ juliaup install manager](https://julialang.org/install/) has pre-defined channels named

`release`

and `lts`

for the latest stable release and the current LTS release, as well as version-specific channels.[How can I transfer the list of installed packages after updating my version of Julia?](#How-can-I-transfer-the-list-of-installed-packages-after-updating-my-version-of-Julia?)

Each minor version of julia has its own default [environment](https://docs.julialang.org/en/v1/manual/code-loading/#Environments-1). As a result, upon installing a new minor version of Julia, the packages you added using the previous minor version will not be available by default. The environment for a given julia version is defined by the files `Project.toml`

and `Manifest.toml`

in a folder matching the version number in `.julia/environments/`

, for instance, `.julia/environments/v1.3`

.

If you install a new minor version of Julia, say `1.4`

, and want to use in its default environment the same packages as in a previous version (e.g. `1.3`

), you can copy the contents of the file `Project.toml`

from the `1.3`

folder to `1.4`

. Then, in a session of the new Julia version, enter the "package management mode" by typing the key `]`

, and run the command [ instantiate](https://julialang.github.io/Pkg.jl/v1/api/#Pkg.instantiate).

This operation will resolve a set of feasible packages from the copied file that are compatible with the target Julia version, and will install or update them if suitable. If you want to reproduce not only the set of packages, but also the versions you were using in the previous Julia version, you should also copy the `Manifest.toml`

file before running the Pkg command `instantiate`

. However, note that packages may define compatibility constraints that may be affected by changing the version of Julia, so the exact set of versions you had in `1.3`

may not work for `1.4`

.

---

## Source: https://julialang.org/learning/books

Have a Julia book you want added to this list? Please [submit a pull request](https://github.com/JuliaLang/www.julialang.org/blob/main/learning/books.md).

Antonello Lobianco. [Julia Quick Syntax Reference, 2nd ed.](https://doi.org/10.1007/979-8-8688-0965-1). Apress, January 2025.

Lee Phillips. [Practical Julia: A Hands-On Introduction for Scientific Minds](https://nostarch.com/practical-julia), No Starch Press, October 2023.

Erik Engheim. [Julia as a Second Language](https://www.manning.com/books/julia-as-a-second-language). Manning Publications, May 2023.

Noel Kalicharan. [Julia - Bit by Bit](https://link.springer.com/book/10.1007/978-3-030-73936-2). Springer, 2021.

Sambit Kumar Dash. [Hands-on Julia Programming](https://in.bpbonline.com/products/hands-on-julia-programming), Bpb Publications, October 2021.

Erik Engheim. [Julia for Beginners](https://leanpub.com/julia-for-beginners), January 2021.

Tanmay Bakshi. [Tanmay Teaches Julia for Beginners: A Springboard to Machine Learning for All Ages](https://www.mheducation.co.uk/tanmay-teaches-julia-for-beginners-a-springboard-to-machine-learning-for-all-ages-9781260456639-emea). McGraw Hill, November 2019.

Ben Lauwens and Allen B. Downey. [Think Julia](https://www.oreilly.com/library/view/think-julia/9781492045021/). O’Reilly Media, June 2019.

Ivo Balbaert. [Julia 1.0 Programming](https://www.packtpub.com/en-us/product/julia-10-programming-9781788999090). Packt Publishing, September 2018.

Anshul Joshi and Rahul Lakhanpal. [Learning Julia](https://www.packtpub.com/en-us/product/learning-julia-9781785883279). Packt Publishing, November 2017.

Sandeep Nagar. [Beginning Julia Programming For Engineers and Scientists](https://doi.org/10.1007/978-1-4842-3171-5). Apress, 2017

Ivo Balbaert, Avik Sengupta, and Malcolm Sherrington. [Julia: High Performance Programming](https://www.oreilly.com/library/view/julia-high-performance/9781787125704/). Packt Publishing, 2016.

Ivo Balbaert. [Getting Started with Julia Programming Language](https://www.packtpub.com/en-us/product/getting-started-with-julia-9781783284795). Packt Publishing, 2015.

Malcolm Sherrington. [Mastering Julia](https://www.packtpub.com/en-us/product/mastering-julia-9781783553310). Packt Publishing, 2015.

Bruce Tate, Ian Dees, Frederic Daoud, and Jack Moffit. [Seven More Languages in Seven Weeks](https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks). The Pragmatic Programmers, December 2014.

Ahan Sengupta [The Little Book of Julia Algorithms](https://www.amazon.com/Little-Book-Julia-Algorithms-programming/dp/1838173609/). SAV Publishing, September 2020.

Tom Kwong. [Hands-on Design Patterns and Best Practices with Julia](https://www.packtpub.com/en-us/product/hands-on-design-patterns-and-best-practices-with-julia-9781838648817). Packt Publishing, January 2020.

Avik Sengupta. [Julia High Performance, 2nd Ed.](https://www.packtpub.com/product/julia-high-performance-second-edition/9781788298117). Packt Publishing, June 2019.

Bogumił Kamiński and Przemysław Szufel. [Julia プログラミングクックブック](https://www.oreilly.co.jp/books/9784873118895/). Japanese translation for Julia 1.2 by Hidemoto Nakada. Orairījapan, Tōkyo, October 2019.

Adrian Salceanu. [Julia Programming Projects](https://www.packtpub.com/en-us/product/julia-programming-projects-9781788292740). Packt Publishing, December 2018.

Bogumił Kamiński and Przemysław Szufel. [Julia 1.0 Programming Cookbook](https://www.packtpub.com/en-us/product/julia-10-programming-cookbook-9781788998369). Packt Publishing, November 2018.

Jalem Raj Rohit. [Julia Cookbook](https://www.packtpub.com/en-us/product/julia-cookbook-9781785882012). Packt Publishing, September 2016.

Avik Sengupta. [Julia High Performance](https://www.packtpub.com/en-us/product/julia-high-performance-9781785880919). Packt Publishing, April 2016.

Bogumił Kamiński. [Julia for Data Analysis](https://www.manning.com/books/julia-for-data-analysis), Manning Publications, December 2022

Diego Javier Zea. [Interactive Visualization and Plotting with Julia](https://www.packtpub.com/en-us/product/interactive-visualization-and-plotting-with-julia-9781801810517). Packt Publishing, August 2022.

Zacharias Voulgaris. [Julia for Machine Learning](https://technicspub.com/julia/). Technics Publications, June 2020.

Günter Faes. [Datenanalyse mit Julia: Einstieg in die Datenanalyse mit der Programmiersprache Julia](https://www.amazon.de/Datenanalyse-mit-Julia-Einstieg-Programmiersprache/dp/3749485089/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Datenanalyse+mit+Julia&qid=1582912563&sr=8-3). Books on Demand, September 2019.

Paul D. McNicholas and Peter Tait. [Data Science with Julia](https://www.crcpress.com/Data-Science-with-Julia/McNicholas-Tait/p/book/9781138499980). Chapman and Hall/CRC, January 2019.

Zacharias Voulgaris. [Julia for Data Science](https://technicspub.com/julia-for-data-science/). Technics Publications, September 2016.

Anshul Joshi. [Julia for Data Science](https://www.packtpub.com/en-us/product/julia-for-data-science-9781785289699). Packt Publishing, 2016.

Bartłomiej Łukaszuk, [Romeo and Julia, where Romeo is Basic Statistics](https://b-lukaszuk.github.io/RJ_BS_eng/), [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), 2023.

Florian Heiss and Daniel Brunner, ["Using Julia for Introductory Econometrics"](http://upfie.net/downloads/PDF/UJfIE_web.pdf), Independently published, May 3, 2023.

Hayden Klok, Yoni Nazarathy. [Statistics with julia: Fundamentals for data science, machine learning and artificial intelligence](https://github.com/h-Klok/StatsWithJuliaBook). Springer, 2021

Stanley H. Chan. [Intro to Probability for Data Science](https://www.amazon.com/Introduction-Probability-Data-Science-Stanley/dp/1607857464/), November 2021. The book is also available freely as HTML and PDF at [probability4datascience.com](https://probability4datascience.com/index.html). Code is in Julia/Python/R/Matlab.

Christopher P. Adams. [Learning Microeconometrics with R](https://www.routledge.com/Learning-Microeconometrics-with-R/Adams/p/book/9780367255381), December 2020; Has [Julia code](https://sites.google.com/view/microeconometricswithr/home?authuser=0) for all [12 chapters](https://sites.google.com/view/microeconometricswithr/table-of-contents?authuser=0).

Giray Ökten. [Probability and Simulation](https://link.springer.com/book/10.1007/978-3-030-56070-6). Springer, June 2020.

James V Lambers, Amber Sumner Mooney, Vivian A Montiforte, and James Quinlan, [Explorations in Numerical Analysis and Machine Learning with Julia](https://www.worldscientific.com/worldscibooks/10.1142/14443#t=aboutBook). World Scientific, October 2025.

Martin Vuk, [Numerical Mathematics with Julia programming language (in Slovenian)](http://zalozba.fri.uni-lj.si/vuk2024.pdf), Založba UL FRI, Ljubljana, 2024. Code examples from the book are available [here](https://gitlab.com/nummat/nummat-knjiga).

Clemens Heitzinger. [Algorithms with JULIA: Optimization, Machine Learning, and Differential Equations Using the JULIA Language](https://link.springer.com/book/10.1007/978-3-031-16560-3). Springer, 2022.

Marilena Mitrouli. [ΑΡΙΘΜΗΤΙΚΗ ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΚΑΙ ΕΠΙΣΤΗΜΟΝΙΚΟΙ ΥΠΟΛΟΓΙΣΜΟΙ (Arithmetical Linear Algebra and Scientific Computations)](https://korfiatisbooks.gr/eshop/product/arithmitiki-grammiki-algevra-kai-epistimonikoi-ypologismoi/), ΕΚΠΑ, December 2022.

Tobin A. Driscoll, Richard J. Braun. [Fundamentals of Numerical Computation: Julia Edition](https://my.siam.org/Store/Product/viewproduct/?ProductId=41831895). SIAM-Society for Industrial and Applied Mathematics, 2022

C. T. Kelley, [Solving Nonlinear Equations with Iterative Methods. Solvers and Examples in Julia](https://my.siam.org/Store/Product/viewproduct/?ProductId=44313635), SIAM, 2022. The book comes with a package [SIAMFANLequations.jl](https://github.com/ctkelley/SIAMFANLEquations.jl) and a set of [Jupyter notebooks](https://github.com/ctkelley/NotebookSIAMFANL).

Bogumił Kamiński and Paweł Prałat. [Train Your Brain - Challenging Yet Elementary Mathematics](https://www.ryerson.ca/train-your-brain/), December 2020; a free on-line [Julia language companion](https://math.ryerson.ca/~pralat/train-your-brain.pdf) is available for download.

Giray Ökten. [First Semester in Numerical Analysis with Julia](https://diginole.lib.fsu.edu/islandora/object/fsu%3A657877). Florida State University Libraries, April 2019.

Stephen Boyd and Lieven Vandenberghe. [Introduction to Applied Linear Algebra](https://web.stanford.edu/~boyd/vmls/). Cambridge University Press, June 2018.

Dominique Orban and Mario Arioli. [Iterative Solution of Symmetric Quasi-definite Linear Systems](https://dx.doi.org/10.1137/1.9781611974737). Society for Industrial and Applied Mathematics, April 2017.

Mykel J. Kochenderfer, Sydney M. Katz, Anthony L. Corso, and Robert J. Moss, [Algorithms for Validation](https://algorithmsbook.com/validation/), Forthcoming.

Mykel J. Kochenderfer, Tim A. Wheeler, and Kyle H. Wray. [Algorithms for Decision Making](https://algorithmsbook.com/), December 2020.

Mykel J. Kochenderfer and Tim A. Wheeler. [Algorithms for Optimization](https://mitpress.mit.edu/books/algorithms-optimization). MIT Press, March 2019.

Changhyun Kwon. [Julia Programming for Operations Research](https://www.chkwon.net/julia/). March 2019.

R. Gökhan Türeci, Hamdi Dağıstanlı, and İlkay Türk Çakır. [Julia Programming for Physics Applications](https://link.springer.com/book/10.1007/978-3-031-84716-5). Springer, May 2025.

Andreas Varga, [Solving Fault Diagnosis Problems - Linear Synthesis Techniques with Julia Code Examples](https://link.springer.com/book/10.1007/978-3-031-35767-1), Vol. 482 of Studies in Systems, Decision and Control, Springer Nature Switzerland, 2024. The computational examples presented in the book use functions of the [FaultDetectionTools.jl](https://github.com/andreasvarga/FaultDetectionTools.jl) and [DescriptorSystems.jl](https://github.com/andreasvarga/DescriptorSystems.jl) packages and are available [here](https://github.com/andreasvarga/FaultDetectionTools.jl/tree/master/Examples).

Adeil Araújo and Meirivâni Oliveira, ["Julia with Physics: An Introduction" in Portuguese](https://www.seduc.ce.gov.br/wp-content/uploads/sites/37/2023/09/Ebook-02-Julia-com-Fisica.pdf), Seduc - CE, September 2023.

Júlio Hoffimann, [Geospatial Data Science with Julia](https://juliaearth.github.io/geospatial-data-science-with-julia), Open Access, 2023.

Ivo Balbaert and Adrian Salceanu. [Web Development with Julia and Genie](https://www.packtpub.com/en-us/product/web-development-with-julia-and-genie-9781801811132). Packt Publishing, November 2022.

George Datseris, Ulrich Parlitz. [Nonlinear Dynamics: A Concise Introduction Interlaced with Code](https://github.com/JuliaDynamics/NonlinearDynamicsTextbook). Springer, 2022

Dmitrijs Cudihins. [Hands-on Computer Vision with Julia](https://www.packtpub.com/en-us/product/hands-on-computer-vision-with-julia-9781788998796). Packt Publishing, June 2018.

---

## Source: https://julialang.org/community/standards/

The Julia community is committed to maintaining a welcoming, civil and constructive environment. We expect the following standards to be observed and upheld by all participants in any community forum (mailing lists, GitHub, IRC, etc.).

Please do not use overtly sexual language or imagery. Do not attack anyone based on any aspect of personal identity, including gender, sexuality, politics, religion, ethnicity, race, age, or ability. Keep in mind that what you write or say in public forums is read or heard by many people who don't know you personally, so please refrain from making prejudiced or sexual jokes and comments – even ones that you might consider acceptable in private. Ask yourself if a comment or statement might make someone feel unwelcomed or like an outsider.

In particular, do not sexualize the term "Julia" or any other aspects of the project. While "Julia" is a female name in many parts of the world, the programming language is not a person and does not have a gender.

All participants in the Julia community are expected to respect copyright laws and ethical attribution standards. This applies to both code and written materials, such as documentation or blog posts. Materials that violate the law, are plagiaristic, or ethically dubious in some way will be removed from officially-maintained lists of resources.

If you believe one of these standards has been violated, you can either file an issue on an appropriate repository or confidentially contact the [Julia Stewards](/community/stewards/) at [stewards@julialang.org](mailto:stewards@julialang.org). Keep in mind that most mistakes are due to ignorance rather than malice.

Constructive criticism and suggestions are welcome, but high-traffic forums do not generally have the bandwidth for extensive discourse. Consider writing a blog post if you feel that you have enough to say on a particular subject.

We welcome the participation of researchers of all kinds in the Julia community. However, please remember that open source development is a social process and that the participants on the other side of any interaction are (obviously) humans. If you are doing research *on the community or its processes*, you are likely performing Human Subjects Research (HSR) and are expected to abide by the highest standards of ethics and professional practice. Meeting this expectation is your responsibility. In particular, please be aware that Institutional Review Boards (IRBs) or other review committees may not have sufficient context or experience to understand the social processes of an open source community. We consider engaging in unethical research (human subject or otherwise) to be a cause for bans or other sanctions from the community.

The Julia community is built on a foundation of reciprocity and collaboration. Be aware that most community members contribute on a voluntary basis, so ideas and bug reports are ok, but demands are not. Pull requests are always welcomed – see the [guidelines for contributing](https://github.com/JuliaLang/julia/blob/master/CONTRIBUTING.md) to read about how to get started.

If you have a conflict or concern that requires resolution, please contact the [Julia Community Stewards](/community/stewards/).

---

## Source: https://julialang.org/community/stewards/

The spirit of community is crucial to free/open-source development. In the large majority of cases, interactions are naturally constructive, but in rare cases conflict can arise. This document explains the mechanisms for conflict reporting and resolution within the Julia community, to handle violations of the [Julia Community Standards](/community/standards/).

(Our procedures were informed in part by the [Complaint Resolution Policies and Procedures at the Massachusetts Institute of Technology](https://policies.mit.edu/policies-procedures/90-relations-and-responsibilities-within-mit-community/98-complaint-resolution), but are necessarily less formal given the loose nature of the Julia community.)

All members of the Julia community are expected to abide by the community standards and encourage others to do so. To ensure that some group has the obligation and authority to cope with conflicts, a group known as the “Julia Stewards” has been created. The current membership of this group is:

Milan Bouchet-Valat

Simon Byrne

Tim Holy

Katharine Hyatt

Steven G. Johnson

Stefan Karpinski

Viral Shah

As needed, this group can be contacted at [stewards@julialang.org](mailto:stewards@julialang.org). Other than the committee listed above, there are no other recipients of emails sent to this address, and **all communications shall be treated confidentially**.

**No one shall be retaliated against for good-faith participation in a complaint**. In general, violations of the community standards will generate one or more of the following responses from the Stewards:

Informal feedback, privately and/or (for public violations) in the forum where a violation appeared, with the goal of encouraging good-faith contributions and mutual understanding while making offenders aware of the problem and preventing future incidents. Where possible, good intentions of the participants should be assumed.

Gross online violations of community standards may result in immediate deletion of the offending comments, coupled with informal feedback.

For severe cases, especially persistent, disruptive violations despite repeated warnings and other feedback, a formal investigation may be convened by the stewards.

A consensus committee of 3+ disinterested stewards (possibly including non-steward members) shall investigate the complaint, communicating this with both the complainant (if any) and the respondent (alleged violator).

The investigation shall be as confidential as possible, and this expectation shall be communicated to all participants. Identities and testimonies of participants shall, where possible, be known only to the committee.

The committee shall provide a private written report detailing its findings and recommendations to the stewards, complainant, and respondent. If a violation has been found, recommendations may include bans and other alterations of online privileges, or in less severe cases may request apologies and other informal resolutions.

The conclusions of the investigative committee are final and cannot be appealed except in cases of gross misconduct or major factual errors.

The public Julia forums (e.g. [Discourse](https://discourse.julialang.org/)) and GitHub pages (e.g. issues and pull requests) are normally open forums for all good-faith contributors. In extreme cases, repeated violations of the Community Standards may lead to the banning of a contributor from one or more of these public forums. Such total bans are expected to be rare and are not to be undertaken lightly.

Note that:

Long-term bans shall only be undertaken in response to the recommendations of a formal investigation by the Julia stewards as described above. (A temporary ban may be imposed by Julia admins in response to an urgent situation, but shall be followed by a formal investigation if the ban is to continue.)

After a predetermined period, not to exceed six months, the banned individual may request that the ban be lifted, by acknowledging his/her past violations and providing a written plan to avoid such violations in the future. This request will typically be considered by the same committee that recommended the initial ban.

The Julia Stewards were originally chosen for their long term commitment and quality contributions to the Julia community. Stewards currently serve at will and do not have a pre-defined appointment term. If a steward decides to give up their role and move on, the other stewards may seek out an individual whom they know has been a long term contributor to the Julia community. This is a high trust role given the implications mentioned above, which is generally why there is a need for folks to be trusted in the community before they become a steward.

In addition to the stewards seeking out folks to add to the committee, you can also nominate someone (including yourself) to join the committee, even if there is not a vacancy. Nominations are accepted on a rolling basis and will be reviewed if/when the current stewards determine they need to bring on additional support. Nominations are reviewed on the axis of long term commitment and contributions to the Julia community (which need not be technical in nature).

The nomination form can be found here: [Julia Steward Nomination Form](https://forms.gle/7R8X7dpDh4DpWsJ1A)

Please contact the stewards: [stewards@julialang.org](mailto:stewards@julialang.org) if you have questions about this process.

---

## Source: https://julialang.org/diversity/

As a [NumFocus supported project](https://numfocus.org), we abide by their [Code of Conduct and Diversity Statement](https://numfocus.org/code-of-conduct):

NumFOCUS welcomes and encourages participation in our community by people of all backgrounds and identities. We are committed to promoting and sustaining a culture that values mutual respect, tolerance, and learning, and we work together as a community to help each other live out these values. We have created this diversity statement because we believe that a diverse community is stronger, more vibrant, and produces better software and better science. A diverse community where people treat each other with respect has more potential contributors, more sources for ideas, and fewer shared assumptions that might hinder development or research. Although we have phrased the formal diversity statement generically to make it all-inclusive, we recognize that there are specific identities that are impacted by systemic discrimination and marginalization. We welcome all people to participate in the NumFOCUS community regardless of their identity or background.


We believe that maintaining and promoting diversity and inclusion is the only way we can have a strong and vibrant community. We have and will continue to make significant investments in making sure that we relentlessly push towards that goal.

If you have any ideas, feedback, or the like, feel free to send and email to `diversity@julialang.org`

or drop by the [#diversity channel on Slack](/slack/).

**We would like to give a special thank you to all of the Julia Community members working tirelessly on these various Diversity and Inclusion initiates. These individuals are taking time away from their technical work in order to help promote a more inclusive and equitable community, and for that, we are in their debt.**

---

## Source: https://julialang.org/shop/

Download
Docs
Learn
Blog
Community
Contribute
JSoC
Star
Sponsor
Shop Julia Language Items
Red Bubble (Accessories from your favorite Julia orgs - like stickers!)

---

## Source: https://julialang.org/contribute

Welcome to the Julia Ecosystem Contributor’s Guide and to the community!

The purpose of this guide is **to help you get started** contributing to the Julia ecosystem. It contains information on the [benefits of becoming a Julia contributor](#why_contribute) and the [tools](#tools) you need to get started. Also, you can find the different [contribution pathways](#contribution_pathways) that you can take and how to get [help](#get_help) from the community.

We **welcome** both **technical** and **nontechnical** contributions. Whether you are a **beginner** or a **seasoned developer**, you can always find a way to contribute to the Julia Ecosystem.

You can make a difference to one of the most quickly growing languages and the future of open-source software as a whole. Open source projects rely on contributions from volunteers. Contributions enable both the project and volunteers to grow and develop. No matter how you contribute to the Julia ecosystem, it will be a great experience for you.

Contributing to the Julia ecosystem brings the following benefits:

Become a member of a community that’s excited about open source and sharing knowledge.

Build a track record of public contributions which will help build your career.

Build confidence with Julia.

Gain visibility for your package.

Help others level up their Julia skills.

Before you start contributing to the Julia ecosystem, you need the following tools:

**Julia:** For more information on how to install Julia, see [Download Julia](/downloads/) or watch [Download Julia (in under 2.5 minutes)](https://www.youtube.com/watch?v=t67TGcf4SmM).

**IDE:** You can set one of the following IDEs as well as their extensions for developing in Julia:

**Knowledge of Git and how to create a pull request:** For more information on getting started with Git, see [Making a first Julia pull request](https://kshyatt.github.io/post/firstjuliapr/).

Your **first step** is to identify how you want to start contributing to the Julia ecosystem. For example, you can start by writing a blog post about how you used Julia to solve a problem. Then, you can create a new package or improve one that you have used. You can take multiple paths, some of which might cross.

If you are a **complete beginner** to the Julia language or programming in general, then you can consider going through any of the resources that the community has created to [help you get started](/learning/).

We suggest the following paths as a starting point in your contribution journey:

**Build:** You can write code or documentation:

**Code**

Find an [open issue](https://github.com/JuliaLang/julia/issues).

Report a [security issue](https://github.com/JuliaLang/julia/security/policy).

[Contribute to an existing package](/contribute/opportunities/).

Find a [help wanted](https://github.com/issues?q=is%3Aopen+is%3Aissue+language%3AJulia+label%3A%22help+wanted%22) issue.

Find a [good first](https://github.com/issues?q=is%3Aopen+is%3Aissue+language%3AJulia+label%3A%22good+first+issue%22+) issue.

Find a [hacktoberfest issue](https://juliacommunity.github.io/your-first-julia-pr/).

Make a feature request.

**Documentation**

Create new documents: Write new sections of existing documentation, docstrings, and tutorials.

Improve existing documents: Update outdated documentation, fix typos and broken links.

**Help:** You can help spread the word about the Julia ecosystem:

Read the [Code of Conduct](/community/standards/).

Share a use case.

Write a blog post and submit it to the [Julia Language Blog Aggregator](https://www.juliabloggers.com/julia-bloggers-submit-feed/).

[Ask and answer questions](#ask-and-answer-questions) on Zulip or Discourse.

Engage on [Twitter](https://twitter.com/JuliaLanguage).

Attend a [Julia event](/community/#events).

We are also open to any suggestions or ideas that you might have. You can suggest your ideas to the community. We will do our best to help you bring it to life!

If you are still unsure how to get started, then you can have a look at the following list of ideas for your first contribution.

You can ask or answer questions on [StackOverflow](https://stackoverflow.com/questions/tagged/julia), [Discourse](https://discourse.julialang.org/), and [Zulip](https://julialang.zulipchat.com/). It not only helps to expand your knowledge but to spread the word about the Julia ecosystem.

The following video contains information on how to ask questions on StackOverflow and how this can improve your learning (and understanding):

If you know how to answer a question on StackOverflow or Discourse thats' an immediate chance to help! Search for questions tagged [ [julia]](https://stackoverflow.com/questions/tagged/julia) on StackOverflow or use a more specific term. Moreover, you can join the ´#stackoverflow-feed´ channel on the official

A lot of documentation in the Julia-verse needs to be updated or fixed. You can help clean up documentation by correcting typos, fixing broken links, or replacing the mentions of outdated packages. To search for Julia packages and their README file or documentation, go to the [JuliaHub](https://juliahub.com/ui/Packages) website. Then, click the name of the package to discover its website, GitHub repository, and further details.

Some Julia organizations and packages are looking for help from the community. We have set up a curated list of Julia packages, organizations, and projects which have robust contributor guides. If you are interested in jumping in and contributing, then see the [Organizations and Packages](/contribute/opportunities) section.

The Julia community is more than happy to help you with any questions related to your contribution. You can get help in any of the following channels:

[Julia Zulip](https://julialang.zulipchat.com/): The community uses Zulip for informal communications.

[Official Julia Slack](/slack/): The community also uses the Julia Slack for informal communications. However, bear in mind that messages disappear over time because of the limits of the free version of Slack.

[Julia Discourse forum](https://discourse.julialang.org/): The community discusses Julia development in the Discourse forum. In general, we recommend asking technical questions on Discourse. Questions and answers posted on Discourse remain on the web and public indefinitely.

[Julia FAQ](https://docs.julialang.org/en/v1/manual/faq/): In the Frequently Asked Questions section of the [Julia Documentation](https://docs.julialang.org/en/v1/), you can find answers to the most common questions from Julia beginners.

[StackOverflow](https://stackoverflow.com/questions/tagged/julia): It has a growing number of Julia questions and answers.

If you find this guide helpful, we would be grateful if you would tag us in any contribution on GitHub that this guide helped you make: [ @JuliaContributorBot](https://github.com/JuliaContributorBot) or in any papers this helped you write:

`DOI: 10.13140/RG.2.2.24478.46407`

---

## Source: https://docs.julialang.org/en/v1/devdocs/init/

[Initialization of the Julia runtime](#Initialization-of-the-Julia-runtime)

How does the Julia runtime execute `julia -e 'println("Hello World!")'`

?

`main()`


`main()`

Execution starts at [ main() in cli/loader_exe.c](https://github.com/JuliaLang/julia/blob/master/cli/loader_exe.c), which calls


`jl_load_repl()`

in [which loads a few libraries, eventually calling](https://github.com/JuliaLang/julia/blob/master/cli/loader_lib.c)

`cli/loader_lib.c`

[.](https://github.com/JuliaLang/julia/blob/master/src/jlapi.c)

`jl_repl_entrypoint()`

in `src/jlapi.c`

`jl_repl_entrypoint()`

calls [ libsupport_init()](https://github.com/JuliaLang/julia/blob/master/src/support/libsupportinit.c) to set the C library locale and to initialize the "ios" library (see

[and](https://github.com/JuliaLang/julia/blob/master/src/support/ios.c)

`ios_init_stdstreams()`

[Legacy](../stdio/#Legacy-ios.c-library)).

`ios.c`

libraryNext [ jl_parse_opts()](https://github.com/JuliaLang/julia/blob/master/src/jloptions.c) is called to process command line options. Note that

`jl_parse_opts()`

only deals with options that affect code generation or early initialization. Other options are handled later by [.](https://github.com/JuliaLang/julia/blob/master/base/client.jl)

`exec_options()`

in `base/client.jl`

`jl_parse_opts()`

stores command line options in the [global jl_options struct](https://github.com/JuliaLang/julia/blob/master/src/julia.h).

`julia_init()`


`julia_init()`

[ julia_init() in init.c](https://github.com/JuliaLang/julia/blob/master/src/init.c) is called by


`main()`

and calls [.](https://github.com/JuliaLang/julia/blob/master/src/init.c)

`_julia_init()`

in `init.c`

`_julia_init()`

begins by calling `libsupport_init()`

again (it does nothing the second time).

[ restore_signals()](https://github.com/JuliaLang/julia/blob/master/src/signals-unix.c) is called to zero the signal handler mask.

[ jl_resolve_sysimg_location()](https://github.com/JuliaLang/julia/blob/master/src/init.c) searches configured paths for the base system image. See

[Building the Julia system image](../sysimg/#Building-the-Julia-system-image).

[ jl_gc_init()](https://github.com/JuliaLang/julia/blob/master/src/gc.c) sets up allocation pools and lists for weak refs, preserved values and finalization.

[ jl_init_frontend()](https://github.com/JuliaLang/julia/blob/master/src/ast.c) loads and initializes a pre-compiled femtolisp image containing the scanner/parser.

[ jl_init_types()](https://github.com/JuliaLang/julia/blob/master/src/jltypes.c) creates

`jl_datatype_t`

type description objects for the [built-in types defined in](https://github.com/JuliaLang/julia/blob/master/src/julia.h). e.g.

`julia.h`

```
jl_any_type = jl_new_abstracttype(jl_symbol("Any"), core, NULL, jl_emptysvec);
jl_any_type->super = jl_any_type;
jl_type_type = jl_new_abstracttype(jl_symbol("Type"), core, jl_any_type, jl_emptysvec);
jl_int32_type = jl_new_primitivetype(jl_symbol("Int32"), core,
jl_any_type, jl_emptysvec, 32);
```


[ jl_init_tasks()](https://github.com/JuliaLang/julia/blob/master/src/task.c) creates the

`jl_datatype_t* jl_task_type`

object; initializes the global `jl_root_task`

struct; and sets `jl_current_task`

to the root task.[ jl_init_codegen()](https://github.com/JuliaLang/julia/blob/master/src/codegen.cpp) initializes the

[LLVM library](https://llvm.org).

[ jl_init_serializer()](https://github.com/JuliaLang/julia/blob/master/src/staticdata.c) initializes 8-bit serialization tags for builtin

`jl_value_t`

values.If there is no sysimg file (`!jl_options.image_file`

) then the `Core`

and `Main`

modules are created and `boot.jl`

is evaluated:

`jl_core_module = jl_new_module(jl_symbol("Core"), NULL)`

creates the Julia `Core`

module.

[ jl_init_intrinsic_functions()](https://github.com/JuliaLang/julia/blob/master/src/intrinsics.cpp) creates a new Julia module

`Intrinsics`

containing constant `jl_intrinsic_type`

symbols. These define an integer code for each [intrinsic function](https://github.com/JuliaLang/julia/blob/master/src/intrinsics.cpp).

[translates these symbols into LLVM instructions during code generation.](https://github.com/JuliaLang/julia/blob/master/src/intrinsics.cpp)

`emit_intrinsic()`

[ jl_init_primitives()](https://github.com/JuliaLang/julia/blob/master/src/builtins.c) hooks C functions up to Julia function symbols. e.g. the symbol

`Core.:(===)()`

is bound to C function pointer `jl_f_is()`

by calling `add_builtin_func("===", jl_f_is)`

.[ jl_new_main_module()](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c) creates the global "Main" module and sets

`jl_current_task->current_module = jl_main_module`

.Note: `_julia_init()`

[then sets](https://github.com/JuliaLang/julia/blob/master/src/init.c) `jl_root_task->current_module = jl_core_module`

. `jl_root_task`

is an alias of `jl_current_task`

at this point, so the `current_module`

set by `jl_new_main_module()`

above is overwritten.

[ jl_load("boot.jl", sizeof("boot.jl"))](https://github.com/JuliaLang/julia/blob/master/src/init.c) calls

[which repeatedly calls](https://github.com/JuliaLang/julia/blob/master/src/ast.c)

`jl_parse_eval_all`

[to execute](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c)

`jl_toplevel_eval_flex()`

[. <!– TODO – drill down into eval? –>](https://github.com/JuliaLang/julia/blob/master/base/boot.jl)

`boot.jl`

[ jl_get_builtin_hooks()](https://github.com/JuliaLang/julia/blob/master/src/init.c) initializes global C pointers to Julia globals defined in

`boot.jl`

.[ jl_init_box_caches()](https://github.com/JuliaLang/julia/blob/master/src/datatype.c) pre-allocates global boxed integer value objects for values up to 1024. This speeds up allocation of boxed ints later on. e.g.:

```
jl_value_t *jl_box_uint8(uint32_t x)
{
return boxed_uint8_cache[(uint8_t)x];
}
```


[ _julia_init() iterates](https://github.com/JuliaLang/julia/blob/master/src/init.c) over the

`jl_core_module->bindings.table`

looking for `jl_datatype_t`

values and sets the type name's module prefix to `jl_core_module`

.[ jl_add_standard_imports(jl_main_module)](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c) does "using Base" in the "Main" module.

Note: `_julia_init()`

now reverts to `jl_root_task->current_module = jl_main_module`

as it was before being set to `jl_core_module`

above.

Platform specific signal handlers are initialized for `SIGSEGV`

(OSX, Linux), and `SIGFPE`

(Windows).

Other signals (`SIGINFO, SIGBUS, SIGILL, SIGTERM, SIGABRT, SIGQUIT, SIGSYS`

and `SIGPIPE`

) are hooked up to [ sigdie_handler()](https://github.com/JuliaLang/julia/blob/master/src/signals-unix.c) which prints a backtrace.

[ jl_init_restored_module()](https://github.com/JuliaLang/julia/blob/master/src/staticdata.c) calls

[for each deserialized module to run the](https://github.com/JuliaLang/julia/blob/master/src/module.c)

`jl_module_run_initializer()`

`__init__()`

function.Finally [ sigint_handler()](https://github.com/JuliaLang/julia/blob/master/src/signals-unix.c) is hooked up to

`SIGINT`

and calls `jl_throw(jl_interrupt_exception)`

.`_julia_init()`

then returns [back to main() in cli/loader_exe.c](https://github.com/JuliaLang/julia/blob/master/cli/loader_exe.c) and


`main()`

calls `repl_entrypoint(argc, (char**)argv)`

.`repl_entrypoint()`


`repl_entrypoint()`

[ repl_entrypoint()](https://github.com/JuliaLang/julia/blob/master/src/jlapi.c) loads the contents of

`argv[]`

into [.](../../base/constants/#Base.ARGS)

`Base.ARGS`

If a `.jl`

"program" file was supplied on the command line, then [ exec_program()](https://github.com/JuliaLang/julia/blob/master/src/jlapi.c) calls

[which calls](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c)

`jl_load(program,len)`

[which repeatedly calls](https://github.com/JuliaLang/julia/blob/master/src/ast.c)

`jl_parse_eval_all`

[to execute the program.](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c)

`jl_toplevel_eval_flex()`

However, in our example (`julia -e 'println("Hello World!")'`

), [ jl_get_global(jl_base_module, jl_symbol("_start"))](https://github.com/JuliaLang/julia/blob/master/src/module.c) looks up

[and](https://github.com/JuliaLang/julia/blob/master/base/client.jl)

`Base._start`

[executes it.](https://github.com/JuliaLang/julia/blob/master/src/julia.h)

`jl_apply()`

`Base._start`


`Base._start`

[ Base._start](https://github.com/JuliaLang/julia/blob/master/base/client.jl) calls

[which calls](https://github.com/JuliaLang/julia/blob/master/base/client.jl)

`Base.exec_options`

[to create an expression object and](https://github.com/JuliaLang/julia/blob/master/src/ast.c)

`jl_parse_input_line("println("Hello World!")")`

[to execute the parsed expression](#Core.eval)

`Core.eval(Main, ex)`

`ex`

in the module context of `Main`

.`Core.eval`


`Core.eval`

[ Core.eval(Main, ex)](#Core.eval) calls

[, which calls](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c)

`jl_toplevel_eval_in(m, ex)`

[.](https://github.com/JuliaLang/julia/blob/master/src/toplevel.c)

`jl_toplevel_eval_flex`

`jl_toplevel_eval_flex`

implements a simple heuristic to decide whether to compile a given code thunk or run it by interpreter. When given `println("Hello World!")`

, it would usually decide to run the code by interpreter, in which case it calls [, which then calls](https://github.com/JuliaLang/julia/blob/master/src/interpreter.c)

`jl_interpret_toplevel_thunk`

[.](https://github.com/JuliaLang/julia/blob/master/src/interpreter.c)

`eval_body`

The stack dump below shows how the interpreter works its way through various methods of [ Base.println()](../../base/io-network/#Base.println) and

[before arriving at](../../base/io-network/#Base.print)

`Base.print()`

[which does](https://github.com/JuliaLang/julia/blob/master/base/stream.jl)

`write(s::IO, a::Array{T}) where T`

`ccall(jl_uv_write())`

.[ jl_uv_write()](https://github.com/JuliaLang/julia/blob/master/src/jl_uv.c) calls

`uv_write()`

to write "Hello World!" to `JL_STDOUT`

. See [Libuv wrappers for stdio](../stdio/#Libuv-wrappers-for-stdio).:

`Hello World!`


| Stack frame | Source code | Notes |
|---|---|---|
`jl_uv_write()` | `jl_uv.c` | called though
`ccall` |

`julia_write_282942`

`stream.jl`

`write!(s::IO, a::Array{T}) where T`

`julia_print_284639`

`ascii.jl`

`print(io::IO, s::String) = (write(io, s); nothing)`

`jlcall_print_284639`

`jl_apply()`

`julia.h`

`jl_trampoline()`

`builtins.c`

`jl_apply()`

`julia.h`

`jl_apply_generic()`

`gf.c`

`Base.print(Base.TTY, String)`

`jl_apply()`

`julia.h`

`jl_trampoline()`

`builtins.c`

`jl_apply()`

`julia.h`

`jl_apply_generic()`

`gf.c`

`Base.print(Base.TTY, String, Char, Char...)`

`jl_apply()`

`julia.h`

`jl_f_apply()`

`builtins.c`

`jl_apply()`

`julia.h`

`jl_trampoline()`

`builtins.c`

`jl_apply()`

`julia.h`

`jl_apply_generic()`

`gf.c`

`Base.println(Base.TTY, String, String...)`

`jl_apply()`

`julia.h`

`jl_trampoline()`

`builtins.c`

`jl_apply()`

`julia.h`

`jl_apply_generic()`

`gf.c`

`Base.println(String,)`

`jl_apply()`

`julia.h`

`do_call()`

`interpreter.c`

`eval_body()`

`interpreter.c`

`jl_interpret_toplevel_thunk`

`interpreter.c`

`jl_toplevel_eval_flex`

`toplevel.c`

`jl_toplevel_eval_in`

`toplevel.c`

`Core.eval`

`boot.jl`

Since our example has just one function call, which has done its job of printing "Hello World!", the stack now rapidly unwinds back to `main()`

.

`jl_atexit_hook()`


`jl_atexit_hook()`

`main()`

calls [ jl_atexit_hook()](https://github.com/JuliaLang/julia/blob/master/src/init.c). This calls

`Base._atexit`

, then calls [and cleans up libuv handles.](https://github.com/JuliaLang/julia/blob/master/src/gc.c)

`jl_gc_run_all_finalizers()`

`julia_save()`


`julia_save()`

Finally, `main()`

calls [ julia_save()](https://github.com/JuliaLang/julia/blob/master/src/init.c), which if requested on the command line, saves the runtime state to a new system image. See

[and](https://github.com/JuliaLang/julia/blob/master/src/gf.c)

`jl_compile_all()`

[.](https://github.com/JuliaLang/julia/blob/master/src/staticdata.c)

`jl_save_system_image()`