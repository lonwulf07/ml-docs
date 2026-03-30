# Scala-lang Documentation
> Scraped on: 2026-03-30 | Root Source: [https://docs.scala-lang.org/](https://docs.scala-lang.org/)



---

## Source: https://docs.scala-lang.org/

# Learn Scala

## First Steps...

[
](/getting-started/install-scala.html)

##### Getting Started

Install Scala on your computer and start writing some Scala code!

[
](/tour/tour-of-scala.html)

##### Tour of Scala

Bite-sized introductions to core language features.

[
](/scala3/book/introduction.html)

##### Scala 3 Book

Learn Scala by reading a series of short lessons.

[
](/toolkit/introduction.html)

##### Scala Toolkit

Sending HTTP requests, writing files, running processes, parsing JSON...

[
](/online-courses.html)

##### Online Courses

MOOCs to learn Scala, for beginners and experienced programmers.

[
](/books.html)

##### Books

Printed and digital books about Scala.

[
](/tutorials.html)

##### Tutorials

Take you by the hand through a series of steps to create Scala applications.

## Returning Users

[
](/api/all.html)

##### API

API documentation for every version of Scala.

[
](/overviews/index.html)

##### Guides & Overviews

In-depth documentation covering many of Scala's features.

[
](/style/index.html)

##### Style Guide

An in-depth guide on how to write idiomatic Scala code.

[
](/cheatsheets/index.html)

##### Cheatsheet

A handy cheatsheet covering the basics of Scala's syntax.

[
](/tutorials/FAQ/index.html)

##### Scala FAQ

Answers to frequently-asked questions about Scala.

[
](https://scala-lang.org/files/archive/spec/2.13/)

##### Language Spec v2.x

Scala 2's formal language specification.

[
](https://scala-lang.org/files/archive/spec/3.4/)

##### Language Spec v3.x

Scala 3's formal language specification.

[
](https://docs.scala-lang.org/scala3/reference)

##### Scala 3 Language Reference

The Scala 3 language reference.

---

## Source: https://docs.scala-lang.org/getting-started/install-scala.html

The instructions below cover both Scala 2 and Scala 3.

*If you are having trouble with setting up Scala, feel free to ask for help in the #scala-users channel of
our Discord.*

## Resources For Newcomers

[
](/tutorials/scala-for-java-programmers.html)

#### Are You Coming From Java?

What you should know to get to speed with Scala after your initial setup.

[
](https://scastie.scala-lang.org/pEBYc5VMT02wAGaDrfLnyw)

#### Scala in the Browser

To start experimenting with Scala right away, use "Scastie" in your browser.

## Install Scala on your computer

Installing Scala means installing various command-line tools such as the Scala compiler and build tools. We recommend using the Scala installer tool “Coursier” that automatically installs all the requirements, but you can still manually install each tool.

### Using the Scala Installer (recommended way)

The Scala installer is a tool named [Coursier](https://get-coursier.io/docs/cli-overview), whose main command is named `cs`

.
It ensures that a JVM and standard Scala tools are installed on your system.
Install it on your system with the following instructions.

You may need to restart your terminal, log out, or reboot in order for the changes to take effect.


Check your setup with the command `scala -version`

, which should output:

```
$ scala -version
Scala code runner version: 1.4.3
Scala version (default): 3.8.2
```


Along with managing JVMs, `cs setup`

also installs useful command-line tools:

| Commands | Description |
|---|---|
`scalac` |
the Scala compiler |
`scala` , `scala-cli` |
|

`sbt`

, `sbtn`

[sbt](https://www.scala-sbt.org/)build tool`amm`

[Ammonite](https://ammonite.io/)is an enhanced REPL`scalafmt`

[Scalafmt](https://scalameta.org/scalafmt/)is the Scala code formatterFor more information about `cs`

, read
[coursier-cli documentation](https://get-coursier.io/docs/cli-overview).


`cs setup`

installs the Scala 3 compiler and runner by default (the`scalac`

and`scala`

commands, respectively). Whether you intend to use Scala 2 or 3, this is usually not an issue because most projects use a build tool that will use the correct version of Scala irrespective of the one installed “globally”. Nevertheless, you can always launch a specific version of Scala using`$ cs launch scala:2.13.18 $ cs launch scalac:2.13.18`

If you prefer Scala 2 to be run by default, you can force that version to be installed with:

`$ cs install scala:2.13.18 scalac:2.13.18`


### …or manually

You only need two tools to compile, run, test, and package a Scala project: Java 8 or 11, and Scala CLI. To install them manually:

- if you don’t have Java 8 or 11 installed, download
Java from
[Oracle Java 8](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html),[Oracle Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html), or[AdoptOpenJDK 8/11](https://adoptopenjdk.net/). Refer to[JDK Compatibility](/overviews/jdk-compatibility/overview.html)for Scala/Java compatibility detail. - Install
[Scala CLI](https://scala-cli.virtuslab.org/install)

## Using the Scala CLI

In a directory of your choice, which we will call `<project-dir>`

, create a file named `hello.scala`

with the following code:

```
//> using scala 3.8.2
@main
def hello(): Unit =
println("Hello, World!")
```


You can define a method with the `def`

keyword and mark it as a “main” method with the `@main`

annotation, designating it as
the entry point in program execution. The method’s type is `Unit`

, which means it does not return a value. `Unit`

can be thought of as an analogue to the `void`

keyword found in other languages. The `println`

method will print the `"Hello, World!"`

string to standard output.

To run the program, execute `scala run hello.scala`

command from a terminal, within the `<project-dir>`

directory. The file will be compiled and executed, with console output
similar to following:

```
$ scala run hello.scala
Compiling project (Scala 3.8.2, JVM (20))
Compiled project (Scala 3.8.2, JVM (20))
Hello, World!
```


### Handling command-line arguments

Rewrite the `hello.scala`

file so that the program greets the person running it.

```
//> using scala 3.8.2
@main
def hello(name: String): Unit =
println(s"Hello, $name!")
```


The `name`

argument is expected to be provided when executing the program, and if it’s not found, the execution will fail.
The `println`

method receives an interpolated string, as indicated by the `s`

letter preceding its content. `$name`

will be substituted by
the content of the `name`

argument.

To pass the arguments when executing the program, put them after `--`

:

```
$ scala run hello.scala -- Gabriel
Compiling project (Scala 3.8.2, JVM (20))
Compiled project (Scala 3.8.2, JVM (20))
Hello, Gabriel!
```


You can read more about [main methods](/scala3/book/methods-main-methods.html) and [string interpolation](/scala3/book/string-interpolation.html) in the Scala Book.

### Adding dependencies

We now write a program that will count the files and directories present in its working directory.
We use the [os-lib](https://github.com/com-lihaoyi/os-lib) library from the [Scala toolkit](/toolkit/introduction.html)
for that purpose. A dependency on the library can be added with the `//> using`

directive. Put the following code in `counter.scala`

.

```
//> using scala 3.8.2
//> using dep "com.lihaoyi::os-lib:0.11.4"
@main
def countFiles(): Unit =
val paths = os.list(os.pwd)
println(paths.length)
```


In the code above, `os.pwd`

returns the current working directory. We pass it to `os.list`

, which returns a sequence
of paths directly within the directory passed as an argument. We use a `val`

to declare an immutable value, in this example storing the
sequence of paths.

Execute the program. The dependency will be automatically downloaded. The execution should result in a similar output:

```
$ scala run counter.scala
Compiling project (Scala 3.8.2, JVM (20))
Compiled project (Scala 3.8.2, JVM (20))
4
```


The printed number should be 4: `hello.scala`

, `counter.scala`

and two hidden directories created automatically when a program is executed:
`.bsp`

containing information about project used by IDEs, and `.scala-build`

containing the results of compilation.

As it turns out, the `os-lib`

library is a part of Scala Toolkit, a collection of libraries recommended for tasks like testing,
operating system interaction or handling JSONs. You can read more about the libraries included in the toolkit [here](/toolkit/introduction.html).
To include the toolkit libraries, use the `//> using toolkit 0.5.0`

directive:

```
//> using scala 3.8.2
//> using toolkit 0.5.0
@main
def countFiles(): Unit =
val paths = os.list(os.pwd)
println(paths.length)
```


This program is identical to the one above. However, other toolkit libraries will also be available to use, should you need them.

### Using the REPL

You can execute code interactively using the REPL provided by the `scala`

command. Execute `scala`

in the console without any arguments.

```
$ scala
Welcome to Scala 3.8.2 (20-ea, Java OpenJDK 64-Bit Server VM).
Type in expressions for evaluation. Or try :help.
scala>
```


Write a line of code to be executed and press enter.

```
scala> println("Hello, World!")
Hello, World!
scala>
```


The result will be printed immediately after executing the line. You can declare values:

```
scala> val i = 1
val i: Int = 1
scala>
```


A new value of type `Int`

has been created. If you provide an expression that can be evaluated, its result will be stored in an automatically created value.

```
scala> i + 3
val res0: Int = 4
scala>
```


You can exit the REPL with `:exit`

.

## Using an IDE

You can read a short summary of Scala IDEs on

[a dedicated page].

Let’s use an IDE to open the code we wrote above. The most popular ones are [IntelliJ](https://www.jetbrains.com/idea/) and
[VSCode](https://scalameta.org/metals/docs/editors/vscode).
They both offer rich IDE features, but you can still use [many other editors](https://scalameta.org/metals/docs/editors/overview.html).

### Prepare the project

First, remove all the using directives, and put them in a single file `project.scala`

in the `<project-dir>`

directory.
This makes it easier to import as a project in an IDE:

```
//> using scala 3.8.2
//> using toolkit 0.5.0
```


Optionally, you can re-initialise the necessary IDE files from within the

`<project-dir>`

directory with the command`scala setup-ide .`

, but these files will already exist if you have previously run the project with the Scala CLI`run`

command.

### Using IntelliJ

- Download and install
[IntelliJ Community Edition](https://www.jetbrains.com/help/idea/installation-guide.html) - Install the Scala plugin by following
[the instructions on how to install IntelliJ plugins](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html) - Open the
`<project-dir>`

directory, which should be imported automatically as a BSP project.

### Using VSCode with Metals

- Download
[VSCode](https://code.visualstudio.com/Download) - Install the Metals extension from
[the Marketplace](https://marketplace.visualstudio.com/items?itemName=scalameta.metals) - Next, open the
`<project-dir>`

directory in VSCode. Metals should activate and begin importing the project automatically.

### Play with the source code

View these three files in your IDE:

*project.scala**hello.scala**counter.scala*

You should notice the benefits of an IDE, such as syntax highlighting, and smart code interactions.
For example you can place the cursor over any part of the code, such as `os.pwd`

in *counter.scala* and documentation for the method will appear.

When you run your project in the next step, the configuration in *project.scala* will be used to run the code in the other source files.

### Run the code

If you’re comfortable using your IDE, you can run the code in *counter.scala* from your IDE.
Attached to the `countFiles`

method should be a prompt button. Click it to run the method. This should run without issue.
The `hello`

method in *hello.scala* needs arguments however, so will require extra configuration via the IDE to provide the argument.

Otherwise, you can run either application from the IDE’s built-in terminal as described in above sections.

## Next steps

Now that you have tasted a little bit of Scala, you can further explore the language itself, consider checking out:

[The Scala Book](/scala3/book/introduction.html)(see the Scala 2 version[here](/overviews/scala-book/introduction.html)), which provides a set of short lessons introducing Scala’s main features.[The Tour of Scala](/tour/tour-of-scala.html)for bite-sized introductions to Scala’s features.[Learning Courses](/online-courses.html), which includes online interactive tutorials and courses.[Our list of some popular Scala books](/books.html).

There are also other tutorials for other build-tools you can use with Scala:

## Getting Help

There are a multitude of mailing lists and real-time chat rooms in case you want to quickly connect with other Scala users. Check out our [community](https://scala-lang.org/community/) page for a list of these resources, and for where to reach out for help.

---

## Source: https://docs.scala-lang.org/getting-started/scala-ides.html

It’s of course possible to write Scala code in any editor and compile and run the code from the command line. But most developers prefer to use an IDE (Integrated Development Environment), especially for coding anything beyond simple exercises.

The following IDEs are available for Scala:

## IntelliJ IDEA + Scala plugin

IntelliJ IDEA is a cross-platform IDE developed by JetBrains that provides a consistent experience for a wide range of programming languages and technologies. It also supports Scala through the IntelliJ Scala Plugin, which is being developed at JetBrains. First, install IntelliJ IDEA Community Edition (unless you don’t already use the Ultimate edition) and then add the IntelliJ Scala Plugin.

IntelliJ IDEA and Scala Plugin will assist you in virtually every part of a Scala software developer’s work. Use it if you like a solid integrated experience, sane default settings, and tested solutions.

For more information, check out our tutorial [Getting Started with Scala in IntelliJ](/getting-started/intellij-track/building-a-scala-project-with-intellij-and-sbt.html)

## Visual Studio Code + Metals

Visual Studio Code, commonly called VS Code, is a source code editor from Microsoft. To add Scala support, you install an extension called Metals.

(Why “Metals”? Because the underlying technologies are Scalameta and LSP ([Language Server Protocol](https://microsoft.github.io/language-server-protocol/)), and “Meta” + “LS” equals “Metals”.)

In contrast to IntelliJ IDEA + Scala Plugin, VS Code + Metals is aimed at people who like to get feedback and code intelligence straight from the compiler, which enables them to also try out experimental Scala features.

## Your favorite editor + Metals

Metals is most commonly used with VS Code, but it’s also available for the following popular editors:

- Emacs
- Vim
- Sublime Text
- Helix

as documented [here](https://scalameta.org/metals/docs/#editor-support).

---

## Source: https://docs.scala-lang.org/tour/tour-of-scala.html

## Welcome to the tour

This tour contains bite-sized introductions to the most frequently used features of Scala. It is intended for newcomers to the language.

This is just a brief tour, not a full language tutorial. If
you want a more detailed guide, consider obtaining [a book](/books.html) or taking
[an online courses](/online-courses.html).

## What is Scala?

Scala is a modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. It seamlessly integrates features of object-oriented and functional languages.

## Scala is object-oriented

Scala is a pure object-oriented language in the sense that [every value is an object](unified-types.html). Types and behaviors of objects are described by [classes](classes.html) and [traits](traits.html). Classes can be extended by subclassing, and by using a flexible [mixin-based composition](mixin-class-composition.html) mechanism as a clean replacement for multiple inheritance.

## Scala is functional

Scala is also a functional language in the sense that [every function is a value](unified-types.html). Scala provides a [lightweight syntax](basics.html#functions) for defining anonymous functions, supports [higher-order functions](higher-order-functions.html), allows functions to be [nested](nested-functions.html), and supports [currying](multiple-parameter-lists.html). Scala’s [case classes](case-classes.html) and its built-in support for [pattern matching](pattern-matching.html) provide the functionality of algebraic types, which are used in many functional languages. [Singleton objects](singleton-objects.html) provide a convenient way to group functions that aren’t members of a class.

## Scala is statically typed

Scala’s expressive type system enforces, at compile-time, that abstractions are used in a safe and coherent manner. In particular, the type system supports:

[Generic classes](generic-classes.html)[Variance annotations](variances.html)[Upper](upper-type-bounds.html)and[lower](lower-type-bounds.html)type bounds[Inner classes](inner-classes.html)and[abstract type members](abstract-type-members.html)as object members[Compound types](compound-types.html)[Explicitly typed self references](self-types.html)[Implicit parameters](implicit-parameters.html)and[conversions](implicit-conversions.html)[Polymorphic methods](polymorphic-methods.html)

[Type inference](type-inference.html) means the user is not required to annotate code with redundant type information. In combination, these features provide a powerful basis for the safe reuse of programming abstractions and for the type-safe extension of software.

## Scala is extensible

In practice, the development of domain-specific applications often requires domain-specific language extensions. Scala provides a unique combination of language mechanisms that make it straightforward to add new language constructs in the form of libraries.

In many cases, this can be done without using meta-programming facilities such as macros. For example:

[Implicit classes](/overviews/core/implicit-classes.html)allow adding extension methods to existing types.[String interpolation](/overviews/core/string-interpolation.html)is user-extensible with custom interpolators.

## Scala interoperates

Scala is designed to interoperate well with the popular Java Runtime Environment (JRE). In particular, the interaction with the mainstream object-oriented Java programming language is as seamless as possible. Newer Java features like SAMs, [lambdas](higher-order-functions.html), [annotations](annotations.html), and [generics](generic-classes.html) have direct analogues in Scala.

Those Scala features without Java analogues, such as [default](default-parameter-values.html) and [named parameters](named-arguments.html), compile as closely to Java as reasonably possible. Scala has the same compilation model (separate compilation, dynamic class loading) as Java and allows access to thousands of existing high-quality libraries.

## Enjoy the tour!

Please continue to the [next page](basics.html) to read more.

---

## Source: https://docs.scala-lang.org/scala3/book/introduction.html

Welcome to the Scala 3 Book.
The goal of this book is to provide an informal introduction to the Scala language.
It touches on all Scala topics, in a relatively light manner.
If at any time while you’re reading this book and want more information on a specific feature, you’ll find links to our [ Reference documentation](https://docs.scala-lang.org/scala3/reference/overview.html), which covers many new features of the Scala language in more detail.

If you are interested in the archived Scala 2 edition of the book, you can[access it here]. We are currently in the process of merging the two books and you can[help us].

Over the course of this book, we hope to demonstrate that Scala is a beautiful, expressive programming language, with a clean, modern syntax, which supports functional programming (FP) and object-oriented programming (OOP), and that provides a safe static type system. Scala’s syntax, grammar, and features have been re-thought, debated in an open process, and updated in 2020 to be clearer and easier to understand than ever before.

The book begins with a whirlwind tour of many of Scala’s features in the [“A Taste of Scala” section](/scala3/book/taste-intro.html).
After that tour, the sections that follow it provide more details on those language features.

## A bit of background

Scala was created by [Martin Odersky](https://en.wikipedia.org/wiki/Martin_Odersky), who studied under [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth), who created Pascal and several other languages. Mr. Odersky is one of the co-designers of Generic Java, and is also known as the “father” of the `javac`

compiler.

### Contributors to this page:

##### Contents

[Introduction](/scala3/book/introduction.html)[Scala Features](/scala3/book/scala-features.html)[Why Scala 3?](/scala3/book/why-scala-3.html)[A Taste of Scala](/scala3/book/taste-intro.html)[Hello, World!](/scala3/book/taste-hello-world.html)[The REPL](/scala3/book/taste-repl.html)[Variables and Data Types](/scala3/book/taste-vars-data-types.html)[Control Structures](/scala3/book/taste-control-structures.html)[Domain Modeling](/scala3/book/taste-modeling.html)[Methods](/scala3/book/taste-methods.html)[First-Class Functions](/scala3/book/taste-functions.html)[Singleton Objects](/scala3/book/taste-objects.html)[Collections](/scala3/book/taste-collections.html)[Contextual Abstractions](/scala3/book/taste-contextual-abstractions.html)[Toplevel Definitions](/scala3/book/taste-toplevel-definitions.html)[Summary](/scala3/book/taste-summary.html)[A First Look at Types](/scala3/book/first-look-at-types.html)[String Interpolation](/scala3/book/string-interpolation.html)[Control Structures](/scala3/book/control-structures.html)[Domain Modeling](/scala3/book/domain-modeling-intro.html)[Tools](/scala3/book/domain-modeling-tools.html)[OOP Modeling](/scala3/book/domain-modeling-oop.html)[FP Modeling](/scala3/book/domain-modeling-fp.html)[Methods](/scala3/book/methods-intro.html)[Method Features](/scala3/book/methods-most.html)[Main Methods in Scala 3](/scala3/book/methods-main-methods.html)[Summary](/scala3/book/methods-summary.html)[Functions](/scala3/book/fun-intro.html)[Anonymous Functions](/scala3/book/fun-anonymous-functions.html)[Function Variables](/scala3/book/fun-function-variables.html)[Partial Functions](/scala3/book/fun-partial-functions.html)[Eta-Expansion](/scala3/book/fun-eta-expansion.html)[Higher-Order Functions](/scala3/book/fun-hofs.html)[Write Your Own map Method](/scala3/book/fun-write-map-function.html)[Creating a Method That Returns a Function](/scala3/book/fun-write-method-returns-function.html)[Summary](/scala3/book/fun-summary.html)[Packaging and Imports](/scala3/book/packaging-imports.html)[Scala Collections](/scala3/book/collections-intro.html)[Collections Types](/scala3/book/collections-classes.html)[Collections Methods](/scala3/book/collections-methods.html)[Summary](/scala3/book/collections-summary.html)[Functional Programming](/scala3/book/fp-intro.html)[What is Functional Programming?](/scala3/book/fp-what-is-fp.html)[Immutable Values](/scala3/book/fp-immutable-values.html)[Pure Functions](/scala3/book/fp-pure-functions.html)[Functions Are Values](/scala3/book/fp-functions-are-values.html)[Functional Error Handling](/scala3/book/fp-functional-error-handling.html)[Summary](/scala3/book/fp-summary.html)[Types and the Type System](/scala3/book/types-introduction.html)[Inferred Types](/scala3/book/types-inferred.html)[Generics](/scala3/book/types-generics.html)[Intersection Types](/scala3/book/types-intersection.html)[Union Types](/scala3/book/types-union.html)[Algebraic Data Types](/scala3/book/types-adts-gadts.html)[Variance](/scala3/book/types-variance.html)[Opaque Types](/scala3/book/types-opaque-types.html)[Structural Types](/scala3/book/types-structural.html)[Dependent Function Types](/scala3/book/types-dependent-function.html)[Other Types](/scala3/book/types-others.html)[Contextual Abstractions](/scala3/book/ca-contextual-abstractions-intro.html)[Extension Methods](/scala3/book/ca-extension-methods.html)[Context Parameters](/scala3/book/ca-context-parameters.html)[Context Bounds](/scala3/book/ca-context-bounds.html)[Given Imports](/scala3/book/ca-given-imports.html)[Type Classes](/scala3/book/ca-type-classes.html)[Multiversal Equality](/scala3/book/ca-multiversal-equality.html)[Implicit Conversions](/scala3/book/ca-implicit-conversions.html)[Summary](/scala3/book/ca-summary.html)[Concurrency](/scala3/book/concurrency.html)[Scala Tools](/scala3/book/scala-tools.html)[Building and Testing Scala Projects with sbt](/scala3/book/tools-sbt.html)[Worksheets](/scala3/book/tools-worksheets.html)[Interacting with Java](/scala3/book/interacting-with-java.html)[Scala for Java Developers](/scala3/book/scala-for-java-devs.html)[Scala for JavaScript Developers](/scala3/book/scala-for-javascript-devs.html)[Scala for Python Developers](/scala3/book/scala-for-python-devs.html)[Where To Go Next](/scala3/book/where-next.html)

---

## Source: https://docs.scala-lang.org/overviews/scala-book/introduction.html

#### Outdated Notice

In these pages, *Scala Book* provides a quick introduction and overview of the Scala programming language. The book is written in an informal style, and consists of more than 50 small lessons. Each lesson is long enough to give you an idea of how the language features in that lesson work, but short enough that you can read it in fifteen minutes or less.

One note before beginning:

- In regards to programming style, most Scala programmers indent their code with two spaces, but we use four spaces because we think it makes the code easier to read, especially in a book format.

To begin reading, click the “next” link, or select the *Prelude: A Taste of Scala* lesson in the table of contents.

### Contributors to this page:

##### Contents

[Introduction](/overviews/scala-book/introduction.html)[Prelude꞉ A Taste of Scala](/overviews/scala-book/prelude-taste-of-scala.html)[Preliminaries](/overviews/scala-book/preliminaries.html)[Scala Features](/overviews/scala-book/scala-features.html)[Hello, World](/overviews/scala-book/hello-world-1.html)[Hello, World - Version 2](/overviews/scala-book/hello-world-2.html)[The Scala REPL](/overviews/scala-book/scala-repl.html)[Two Types of Variables](/overviews/scala-book/two-types-variables.html)[The Type is Optional](/overviews/scala-book/type-is-optional.html)[A Few Built-In Types](/overviews/scala-book/built-in-types.html)[Two Notes About Strings](/overviews/scala-book/two-notes-about-strings.html)[Command-Line I/O](/overviews/scala-book/command-line-io.html)[Control Structures](/overviews/scala-book/control-structures.html)[The if/then/else Construct](/overviews/scala-book/if-then-else-construct.html)[for Loops](/overviews/scala-book/for-loops.html)[for Expressions](/overviews/scala-book/for-expressions.html)[match Expressions](/overviews/scala-book/match-expressions.html)[try/catch/finally Expressions](/overviews/scala-book/try-catch-finally.html)[Scala Classes](/overviews/scala-book/classes.html)[Auxiliary Class Constructors](/overviews/scala-book/classes-aux-constructors.html)[Supplying Default Values for Constructor Parameters](/overviews/scala-book/constructors-default-values.html)[A First Look at Scala Methods](/overviews/scala-book/methods-first-look.html)[Enumerations (and a Complete Pizza Class)](/overviews/scala-book/enumerations-pizza-class.html)[Scala Traits and Abstract Classes](/overviews/scala-book/traits-intro.html)[Using Scala Traits as Interfaces](/overviews/scala-book/traits-interfaces.html)[Using Scala Traits Like Abstract Classes](/overviews/scala-book/traits-abstract-mixins.html)[Abstract Classes](/overviews/scala-book/abstract-classes.html)[Scala Collections](/overviews/scala-book/collections-101.html)[The ArrayBuffer Class](/overviews/scala-book/arraybuffer-examples.html)[The List Class](/overviews/scala-book/list-class.html)[The Vector Class](/overviews/scala-book/vector-class.html)[The Map Class](/overviews/scala-book/map-class.html)[The Set Class](/overviews/scala-book/set-class.html)[Anonymous Functions](/overviews/scala-book/anonymous-functions.html)[Common Sequence Methods](/overviews/scala-book/collections-methods.html)[Common Map Methods](/overviews/scala-book/collections-maps.html)[A Few Miscellaneous Items](/overviews/scala-book/misc.html)[Tuples](/overviews/scala-book/tuples.html)[An OOP Example](/overviews/scala-book/oop-pizza-example.html)[sbt and ScalaTest](/overviews/scala-book/sbt-scalatest-intro.html)[The most used scala build tool (sbt)](/overviews/scala-book/scala-build-tool-sbt.html)[Using ScalaTest with sbt](/overviews/scala-book/sbt-scalatest-tdd.html)[Writing BDD Style Tests with ScalaTest and sbt](/overviews/scala-book/sbt-scalatest-bdd.html)[Functional Programming](/overviews/scala-book/functional-programming.html)[Pure Functions](/overviews/scala-book/pure-functions.html)[Passing Functions Around](/overviews/scala-book/passing-functions-around.html)[No Null Values](/overviews/scala-book/no-null-values.html)[Companion Objects](/overviews/scala-book/companion-objects.html)[Case Classes](/overviews/scala-book/case-classes.html)[Case Objects](/overviews/scala-book/case-objects.html)[Functional Error Handling in Scala](/overviews/scala-book/functional-error-handling.html)[Concurrency](/overviews/scala-book/concurrency-signpost.html)[Scala Futures](/overviews/scala-book/futures.html)[Where To Go Next](/overviews/scala-book/where-next.html)

---

## Source: https://docs.scala-lang.org/online-courses.html

# Online Courses

## Scala Courses on Coursera by EPFL

The [Scala Center](https://scala.epfl.ch) at EPFL offers free online courses of various levels, from beginner to advanced.

For beginners:

[Effective Programming in Scala](https://www.coursera.org/learn/effective-scala): a practical introduction to Scala for professional developers[Functional Programming Principles in Scala](https://www.coursera.org/learn/scala-functional-programming): the foundational course by Martin Odersky, Scala’s creator

More advanced topics:

[Functional Program Design in Scala](https://www.coursera.org/learn/scala-functional-program-design): builds on functional principles with more advanced concepts[Parallel Programming](https://www.coursera.org/learn/scala-parallel-programming)[Big Data Analysis with Scala and Spark](https://www.coursera.org/learn/scala-spark-big-data)[Programming Reactive Systems](https://www.coursera.org/learn/scala-akka-reactive): introduces Akka, actors and reactive streams

All courses are free to audit, with an option to pay for a certificate, to showcase your skills on your resume or LinkedIn.
For more on Scala Center’s online courses, visit [this page](https://docs.scala-lang.org/online-courses.html#learning-platforms).

## Rock the JVM Courses

*As part of a partnership with the Scala Center, Rock the JVM donates 30% of the revenue from any courses purchased through the links in this section to support the Scala Center.*

[Rock the JVM](https://rockthejvm.com?affcode=256201_r93i1xuv) is a learning platform with free and premium courses on the Scala language, and all major libraries and tools in the Scala ecosystem: Typelevel, Zio, Akka/Pekko, Spark, and others.
Its main Scala courses are:

[Scala at Light Speed](https://rockthejvm.com/courses/scala-at-light-speed?affcode=256201_r93i1xuv)(free)[Scala & Functional Programming Essentials](https://rockthejvm.com/courses/scala-essentials?affcode=256201_r93i1xuv)(premium)[Advanced Scala and Functional Programming](https://rockthejvm.com/courses/advanced-scala?affcode=256201_r93i1xuv)(premium)[Scala Macros & Metaprogramming](https://rockthejvm.com/courses/scala-macros-and-metaprogramming?affcode=256201_r93i1xuv)(premium)

Other courses teach how to build full-stack Scala applications, using [Typelevel](https://rockthejvm.com/courses/typelevel-rite-of-passage?affcode=256201_r93i1xuv) or [ZIO](https://rockthejvm.com/courses/zio-rite-of-passage?affcode=256201_r93i1xuv) ecosystems.

Explore more premium [courses](https://rockthejvm.com/courses?affcode=256201_r93i1xuv) or check out [free video tutorials](https://youtube.com/rockthejvm?affcode=256201_r93i1xuv) and [free articles](https://rockthejvm.com/articles?affcode=256201_r93i1xuv).

## EPFL Extension School: Effective Programming in Scala

Subscribing to [Effective programming in Scala](https://www.epfl.ch/education/continuing-education/effective-programming-in-scala/) on the EPFL Extension School offers:

- Regular Q&A sessions and code reviews with experts from the Scala team
- An
[Extension School certificate](https://www.epfl.ch/education/continuing-education/certifications/)upon completion

This course combines video lessons, written content and hands-on exercise focused on practical aspects, including business domain modeling, error handling, data manipulation, and task parallelization.
For more on Scala Center’s online courses, visit [this page](https://docs.scala-lang.org/online-courses.html#learning-platforms).

## Other Online Resources

### Tour of Scala

[Tour of Scala](https://tourofscala.com) is an interactive website that introduces the basics of Scala programming through a series of hands-on lessons.
Each lesson provides code examples and exercises that compiles and runs directly in the browser, making it a quick and accessible way to get started with Scala.

In the [Scala Learning Discord](http://sca.la/learning-community), you can connect with fellow Scala learners and engage with the Tour of Scala community.

### Scala Exercises

[Scala Exercises](https://www.scala-exercises.org/) is a series of lessons and exercises created by [47 Degrees](https://xebia.com/).
It’s a great way to get a brief introduction to Scala while testing your knowledge along the way.
It also covers some libraries of the ecosystem such as cats, doobie, scalacheck etc.

### DevInsideYou

[DevInsideYou](https://youtube.com/devinsideyou) is a YouTube channel with hundreds of hours of free Scala content.

### Visual Scala Reference

[Visual Scala Reference](https://superruzafa.github.io/visual-scala-reference/) is a visual guide to the most common methods of the Scala collections.

### allaboutscala

[allaboutscala](https://allaboutscala.com/) provides detailed tutorials for beginners.

### Dr. Mark C Lewis’s lectures from Trinity University

[Dr. Mark C Lewis](https://www.cs.trinity.edu/~mlewis/) from Trinity University, San Antonio, TX, teaches programming courses using the Scala language. Course videos are available in YouTube for free. Some courses below.

[Introduction to Programming and Problem Solving Using Scala](https://www.youtube.com/playlist?list=PLLMXbkbDbVt9MIJ9DV4ps-_trOzWtphYO)[Object-Orientation, Abstraction, and Data Structures Using Scala](https://www.youtube.com/playlist?list=PLLMXbkbDbVt8JLumqKj-3BlHmEXPIfR42)

You can visit his [YouTube channel](https://www.youtube.com/user/DrMarkCLewis/featured) for more videos.

---

## Source: https://docs.scala-lang.org/scala3/new-in-scala3.html

The exciting new version of Scala 3 brings many improvements and new features. Here we provide you with a quick overview of the most important changes. If you want to dig deeper, there are a few references at your disposal:

- The
[Scala 3 Book](/scala3/book/introduction.html)targets developers new to the Scala language. - The
[Syntax Summary](https://docs.scala-lang.org/scala3/reference/syntax.html)provides you with a formal description of the new syntax. - The
[Language Reference](https://docs.scala-lang.org/scala3/reference/overview.html)gives a detailed description of the changes from Scala 2 to Scala 3. - The
[Migration Guide](/scala3/guides/migration/compatibility-intro.html)provides you with all the information necessary to move from Scala 2 to Scala 3. - The
[Scala 3 Contributing Guide](/scala3/guides/contribution/contribution-intro.html)dives deeper into the compiler, including a guide to fix issues.

## What’s new in Scala 3

Scala 3 is a complete overhaul of the Scala language. At its core, many aspects
of the type-system have been changed to be more principled. While this also
brings exciting new features along (like union types), first and foremost, it
means that the type-system gets (even) less in your way and for instance
[type-inference](https://docs.scala-lang.org/scala3/reference/changed-features/type-inference.html) and overload resolution are much improved.

### New & Shiny: The Syntax

Besides many (minor) cleanups, the Scala 3 syntax offers the following improvements:

- A new “quiet” syntax for control structures like
`if`

,`while`

, and`for`

([new control syntax](https://docs.scala-lang.org/scala3/reference/other-new-features/control-syntax.html)) - The
`new`

keyword is optional (*aka*[creator applications](https://docs.scala-lang.org/scala3/reference/other-new-features/creator-applications.html)) [Optional braces](https://docs.scala-lang.org/scala3/reference/other-new-features/indentation.html)that supports a distraction-free, indentation sensitive style of programming- Change of
[type-level wildcards](https://docs.scala-lang.org/scala3/reference/changed-features/wildcards.html)from`_`

to`?`

. - Implicits (and their syntax) have been
[heavily revised](https://docs.scala-lang.org/scala3/reference/contextual).

### Opinionated: Contextual Abstractions

One underlying core concept of Scala was (and still is to some degree) to
provide users with a small set of powerful features that can be combined to
great (and sometimes even unforeseen) expressivity. For example, the feature of *implicits*
has been used to model contextual abstraction, to express type-level
computation, model type-classes, perform implicit coercions, encode
extension methods, and many more.
Learning from these use cases, Scala 3 takes a slightly different approach
and focuses on **intent** rather than **mechanism**.
Instead of offering one very powerful feature, Scala 3 offers multiple
tailored language features, allowing programmers to directly express their intent:

-
**Abstracting over contextual information**.[Using clauses](https://docs.scala-lang.org/scala3/reference/contextual/using-clauses.html)allow programmers to abstract over information that is available in the calling context and should be passed implicitly. As an improvement over Scala 2 implicits, using clauses can be specified by type, freeing function signatures from term variable names that are never explicitly referred to. -
**Providing Type-class instances**.[Given instances](https://docs.scala-lang.org/scala3/reference/contextual/givens.html)allow programmers to define the*canonical value*of a certain type. This makes programming with type-classes more straightforward without leaking implementation details. -
**Retroactively extending classes**. In Scala 2, extension methods had to be encoded using implicit conversions or implicit classes. In contrast, in Scala 3[extension methods](https://docs.scala-lang.org/scala3/reference/contextual/extension-methods.html)are now directly built into the language, leading to better error messages and improved type inference. -
**Viewing one type as another**. Implicit conversions have been[redesigned](https://docs.scala-lang.org/scala3/reference/contextual/conversions.html)from the ground up as instances of a type-class`Conversion`

. -
**Higher-order contextual abstractions**. The*all-new*feature of[context functions](https://docs.scala-lang.org/scala3/reference/contextual/context-functions.html)makes contextual abstractions a first-class citizen. They are an important tool for library authors and allow to express concise domain specific languages. -
**Actionable feedback from the compiler**. In case an implicit parameter cannot be resolved by the compiler, it now provides[import suggestions](https://www.scala-lang.org/blog/2020/05/05/scala-3-import-suggestions.html)that may fix the problem.

### Say What You Mean: Type System Improvements

Besides greatly improved type inference, the Scala 3 type system also offers many new features, giving you powerful tools to statically express invariants in the types:

-
**Enumerations**.[Enums](https://docs.scala-lang.org/scala3/reference/enums/enums.html)have been redesigned to blend well with case classes and form the new standard to express[algebraic data types](https://docs.scala-lang.org/scala3/reference/enums/adts.html). -
**Opaque Types**. Hide implementation details behind[opaque type aliases](https://docs.scala-lang.org/scala3/reference/other-new-features/opaques.html)without paying for it in performance! Opaque types supersede value classes and allow you to set up an abstraction barrier without causing additional boxing overhead. -
**Intersection and union types**. Basing the type system on new foundations led to the introduction of new type system features: instances of[intersection types](https://docs.scala-lang.org/scala3/reference/new-types/intersection-types.html), like`A & B`

, are instances of*both*`A`

and of`B`

. Instances of[union types](https://docs.scala-lang.org/scala3/reference/new-types/union-types.html), like`A | B`

, are instances of*either*`A`

or`B`

. Both constructs allow programmers to flexibly express type constraints outside the inheritance hierarchy. -
**Dependent function types**. Scala 2 already allowed return types to depend on (value) arguments. In Scala 3 it is now possible to abstract over this pattern and express[dependent function types](https://docs.scala-lang.org/scala3/reference/new-types/dependent-function-types.html). In the type`type F = (e: Entry) => e.Key`

the result type*depends*on the argument! -
**Polymorphic function types**. Like with dependent function types, Scala 2 supported methods that allow type parameters, but did not allow programmers to abstract over those methods. In Scala 3,[polymorphic function types](https://docs.scala-lang.org/scala3/reference/new-types/polymorphic-function-types.html)like`[A] => List[A] => List[A]`

can abstract over functions that take*type arguments*in addition to their value arguments. -
**Type lambdas**. What needed to be expressed using a[compiler plugin](https://github.com/typelevel/kind-projector)in Scala 2 is now a first-class feature in Scala 3: Type lambdas are type level functions that can be passed as (higher-kinded) type arguments without requiring an auxiliary type definition. -
**Match types**. Instead of encoding type-level computation using implicit resolution, Scala 3 offers direct support for[matching on types](https://docs.scala-lang.org/scala3/reference/new-types/match-types.html). Integrating type-level computation into the type checker enables improved error messages and removes the need for complicated encodings.

### Re-envisioned: Object-Oriented Programming

Scala has always been at the frontier between functional programming and object-oriented programming –
and Scala 3 pushes boundaries in both directions! The above-mentioned type system changes and the redesign of contextual abstractions make *functional programming* easier than before.
At the same time, the following novel features enable well-structured *object-oriented designs* and support best practices.

**Pass it on**. Traits move closer to classes and now can also take[parameters](https://docs.scala-lang.org/scala3/reference/other-new-features/trait-parameters.html), making them even more powerful as a tool for modular software decomposition.**Plan for extension**. Extending classes that are not intended for extension is a long-standing problem in object-oriented design. To address this issue,[open classes](https://docs.scala-lang.org/scala3/reference/other-new-features/open-classes.html)require library designers to*explicitly*mark classes as open.**Hide implementation details**. Utility traits that implement behavior sometimes should not be part of inferred types. In Scala 3, those traits can be marked as[transparent](https://docs.scala-lang.org/scala3/reference/other-new-features/transparent-traits.html)hiding the inheritance from the user (in inferred types).**Composition over inheritance**. This phrase is often cited, but tedious to implement. Not so with Scala 3’s[export clauses](https://docs.scala-lang.org/scala3/reference/other-new-features/export.html): symmetric to imports, export clauses allow the user to define aliases for selected members of an object.**No more NPEs (experimental)**. Scala 3 is safer than ever:[explicit null](https://docs.scala-lang.org/scala3/reference/experimental/explicit-nulls.html)moves`null`

out of the type hierarchy, helping you to catch errors statically; additional checks for[safe initialization](https://docs.scala-lang.org/scala3/reference/other-new-features/safe-initialization.html)detect access to uninitialized objects.

### Batteries Included: Metaprogramming

While macros in Scala 2 were an experimental feature only, Scala 3 comes with a powerful arsenal of tools for metaprogramming.
The [macro tutorial](/scala3/guides/macros/index.html) contains detailed information on the different facilities. In particular, Scala 3 offers the following features for metaprogramming:

**Inline**. As the basic starting point, the[inline feature](/scala3/guides/macros/inline.html)allows values and methods to be reduced at compile time. This simple feature already covers many use-cases and at the same time provides the entry point for more advanced features.**Compile-time operations**. The packagecontains additional functionality that can be used to implement inline methods.`scala.compiletime`

**Quoted code blocks**. Scala 3 adds the new feature of[quasi-quotation](/scala3/guides/macros/quotes.html)for code, providing a convenient high-level interface to construct and analyse code. Constructing code for adding one and one is as easy as`'{ 1 + 1 }`

.**Reflection API**. For more advanced use cases[quotes.reflect](/scala3/guides/macros/reflection.html)provides more detailed control to inspect and generate program trees.

If you want to learn more about metaprogramming in Scala 3, we invite you to take our [tutorial](/scala3/guides/macros/index.html).

---

## Source: https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html

Scala 3 is a game changer in terms of compatibility in the Scala ecosystem that will greatly improve the day-to-day experience of every Scala programmer. This new compatibility era starts with the migration.

Moving from Scala 2 to Scala 3 is a big leap forward. Scala 3 is a shiny new compiler, built upon a complete redesign of the core foundations of the language. Yet we claim the migration will not be harder than before, when we moved from Scala 2.12 to Scala 2.13.

It will even be simpler in some respects, thanks to the interoperability between Scala 2.13 and Scala 3.

This chapter details the level of compatibility between the two versions at the different stages of the program. This is where you will find answers to the following questions:

- Is Scala 3 a different language?
- How hard is it to translate a Scala 2.13 project into Scala 3?

- Can we use a Scala 2.13 library in Scala 3?
- Inversely, can we use a Scala 3 library in Scala 2.13?

- Is it safe to deploy a Scala 3 program in a production environment?
- How fast are Scala 3 programs compared to Scala 2.13?

- Will my Scala 2.13 project be affected by the replacement of the Scala 2 macro feature?
- How can I port my Scala 2.13 macro library to Scala 3?

### Contributors to this page:

##### Contents

[Compatibility Reference](/scala3/guides/migration/compatibility-intro.html)[Source Level](/scala3/guides/migration/compatibility-source.html)[Classpath Level](/scala3/guides/migration/compatibility-classpath.html)[Runtime](/scala3/guides/migration/compatibility-runtime.html)[Metaprogramming](/scala3/guides/migration/compatibility-metaprogramming.html)[Tour of the Migration Tools](/scala3/guides/migration/tooling-tour.html)[Scala 2 with -Xsource:3](/scala3/guides/migration/tooling-scala2-xsource3.html)[Scala 3 Migration Mode](/scala3/guides/migration/tooling-migration-mode.html)[Migration Tutorial](/scala3/guides/migration/tutorial-intro.html)[Prerequisites](/scala3/guides/migration/tutorial-prerequisites.html)[Porting an sbt Project (using sbt-scala3-migrate)](/scala3/guides/migration/scala3-migrate.html)[Porting an sbt Project (by hand)](/scala3/guides/migration/tutorial-sbt.html)[Cross-Building a Macro Library](/scala3/guides/migration/tutorial-macro-cross-building.html)[Mixing Scala 2.13 and Scala 3 Macros](/scala3/guides/migration/tutorial-macro-mixing.html)[Scala 3 Syntax Rewriting](/scala3/guides/migration/tooling-syntax-rewriting.html)[Incompatibility Table](/scala3/guides/migration/incompatibility-table.html)[Syntactic Changes](/scala3/guides/migration/incompat-syntactic.html)[Dropped Features](/scala3/guides/migration/incompat-dropped-features.html)[Contextual Abstractions](/scala3/guides/migration/incompat-contextual-abstractions.html)[Other Changed Features](/scala3/guides/migration/incompat-other-changes.html)[Type Checker](/scala3/guides/migration/incompat-type-checker.html)[Type Inference](/scala3/guides/migration/incompat-type-inference.html)[Compiler Options](/scala3/guides/migration/options-intro.html)[Compiler Options Lookup Table](/scala3/guides/migration/options-lookup.html)[New Compiler Options](/scala3/guides/migration/options-new.html)[Scaladoc settings compatibility between Scala2 and Scala3](/scala3/guides/migration/scaladoc-settings-compatibility.html)[Compiler Plugins](/scala3/guides/migration/plugin-intro.html)[Kind Projector Migration](/scala3/guides/migration/plugin-kind-projector.html)[External Resources](/scala3/guides/migration/external-resources.html)

---

## Source: https://docs.scala-lang.org/scala3/scaladoc.html

The new Scala version 3 comes with a completely new implementation of the documentation generator *Scaladoc*, rewritten from scratch.
In this article you can find highlights of new features that are or will be introduced to Scaladoc.
For general reference, visit [Scaladoc manual](/scala3/guides/scaladoc/index.html).

## New features

### Markdown syntax

The biggest change introduced in the new version of Scaladoc is the change of the default language for docstrings. So far Scaladoc only supported Wikidoc syntax.
The new Scaladoc can still parse legacy `Wikidoc`

syntax, however Markdown has been chosen as a primary language for formatting comments.
To switch back to `Wikidoc`

one can pass a global flag before running the `doc`

task or one can define it for specific comments via the `@syntax wiki`

directive.

For more information on how to use the full power of docstings, check out [Scaladoc docstrings](/scala3/guides/scaladoc/docstrings.html)

### Static site

Scaladoc also provides an easy way for creating **static sites** for both documentation and blog posts in the similar way as Jekyll does.
Thanks to this feature, you can store your documentation along-side with the generated Scaladoc API in a very convenient way.

For more information on how to configure the generation of static sites check out [Static documentation](/scala3/guides/scaladoc/static-site.html) chapter

### Blog posts

Blog posts are a specific type of static sites. In the Scaladoc manual you can find additional information about how to work with [blog posts](/scala3/guides/scaladoc/blog.html).

### Social links

Furthermore, Scaladoc provides an easy way to configure your [social media links](/scala3/guides/scaladoc/settings.html#-social-links) e.g. Twitter or Discord.

## Experimental features

The following features are currently (May 2021) not stable to be released with scaladoc, however we are happy to hear your feedback. Each feature has its own thread at scala-lang contributors site, where you can share your opinions.

### Snippet compiling

One of the experimental features of Scaladoc is a compiler for snippets. This tool will allow you to compile snippets that you attach to your docstring
to check that they actually behave as intended, e.g., to properly compile. This feature is very similar to the `tut`

or `mdoc`

tools,
but will be shipped with Scaladoc out of the box for easy setup and integration into your project. Making snippets interactive—e.g., letting users edit and compile them in the browser—is under consideration, though this feature is not in scope at this time.

Showcase:

- Hiding code
- Assert compilation errors
- Snippet includes

For more information see [Guides](/scala3/guides/scaladoc/snippet-compiler.html), or follow this [Scala Contributors thread](https://contributors.scala-lang.org/t/snippet-validation-in-scaladoc-for-scala-3/4976)

### Type-based search

Searching for functions by their symbolic names can be time-consuming. That is why the new scaladoc allows you to search for methods and fields by their types.

So, for a declaration:

```
extension [T](arr: IArray[T]) def span(p: T => Boolean): (IArray[T], IArray[T]) = ...
```


Instead of searching for `span`

we can also search for `IArray[A] => (A => Boolean) => (IArray[A], IArray[A])`

.

To use this feature simply type the signature of the function you are looking for in the scaladoc searchbar. This is how it works:

This feature is provided by the [Inkuire](https://github.com/VirtusLab/Inkuire) search engine, which works for Scala 3 and Kotlin. To be up-to-date with the development of this feature, follow the [Inkuire repository](https://github.com/VirtusLab/Inkuire).

For more information see [Guides](/scala3/guides/scaladoc/search-engine.html)

Note that this feature is still in development, so it can be subject to considerable change.
If you encounter a bug or have an idea for improvement, don’t hesitate to create an issue on [Inkuire](https://github.com/VirtusLab/Inkuire/issues/new) or [scala3](https://github.com/scala/scala3/issues/new).

---

## Source: https://docs.scala-lang.org/scala3/talks.html

This doc page is specific to Scala 3, and may cover new concepts not available in Scala 2. Unless otherwise stated, all the code examples in this page assume you are using Scala 3.

## Let’s Talk About Scala 3 Series

[Let’s Talk About Scala 3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml) is a series
of short (around 15 min) talks about Scala 3. It covers a variety of themes like how to get started, how to take
advantage of the new language features, or how to migrate from Scala 2.

## Talks on Scala 3

-
(ScalaDays 2019, Lausanne)

[A Tour of Scala 3](https://www.youtube.com/watch?v=_Rnrx2lo9cw)by[Martin Odersky](http://x.com/odersky) -
(ScalaDays 2016, Berlin)

[Scala’s Road Ahead](https://www.youtube.com/watch?v=GHzWqJKFCk4)by[Martin Odersky](http://x.com/odersky)[[slides]](http://www.slideshare.net/Odersky/scala-days-nyc-2016) -
(JVMLS 2015)

[Compilers are Databases](https://www.youtube.com/watch?v=WxyyJyB_Ssc)by[Martin Odersky](http://x.com/odersky)[[slides]](http://www.slideshare.net/Odersky/compilers-are-databases) -
(Scala World 2015)

[Dotty: Exploring the future of Scala](https://www.youtube.com/watch?v=aftdOFuVU1o)by[Dmitry Petrashko](http://x.com/darkdimius)[[slides]](https://d-d.me/scalaworld2015/#/). Dmitry covers many of the new features that Dotty brings on the table such as Intersection and Union types, improved lazy val initialization and more. Dmitry also covers dotty internals and in particular the high-level of contextual abstractions of Dotty. You will get to become familiar with many core concepts such as`Denotations`

, their evolution through (compilation) time, their transformations and more.

## Deep Dive with Scala 3

-
(ScalaDays 2019, Lausanne)

[Metaprogramming in Dotty](https://www.youtube.com/watch?v=ZfDS_gJyPTc)by[Nicolas Stucki](https://github.com/nicolasstucki). -
(ScalaDays 2019, Lausanne)

[Future-proofing Scala: the TASTY intermediate representation](https://www.youtube.com/watch?v=zQFjC3zLYwo)by[Guillaume Martres](http://guillaume.martres.me/). -
(Mar 21, 2017)

[Dotty Internals 1: Trees & Symbols](https://www.youtube.com/watch?v=yYd-zuDd3S8)by[Dmitry Petrashko](http://x.com/darkdimius)[[meeting notes]](https://nightly.scala-lang.org/docs/internals/dotty-internals-1-notes.html). This is a recorded meeting between EPFL and Waterloo, where we introduce first notions inside Dotty: Trees and Symbols. -
(Mar 21, 2017)

[Dotty Internals 2: Types](https://www.youtube.com/watch?v=3gmLIYlGbKc)by[Martin Odersky](http://x.com/odersky)and[Dmitry Petrashko](http://x.com/darkdimius). This is a recorded meeting between EPFL and Waterloo, where we introduce how types are represented inside Dotty. -
(Jun 15, 2017)

[Dotty Internals 3: Denotations](https://youtu.be/9iPA7zMRGKY)by[Martin Odersky](http://x.com/odersky)and[Dmitry Petrashko](http://x.com/darkdimius). This is a recorded meeting between EPFL and Waterloo, where we introduce denotations in Dotty. -
(JVM Language Summit)

[How do we make the Dotty compiler fast](https://www.youtube.com/watch?v=9xYoSwnSPz0)by[Dmitry Petrashko](http://x.com/darkdimius).[Dmitry Petrashko](http://x.com/darkdimius)gives a high-level introduction on what was done to make Dotty . -
(Typelevel Summit Oslo, May 2016)

[Dotty and types: the story so far](https://www.youtube.com/watch?v=YIQjfCKDR5A)by Guillaume Martres[[slides]](http://guillaume.martres.me/talks/typelevel-summit-oslo/). Guillaume focused on some practical improvements to the type system that Dotty makes, like the new type parameter inference algorithm that is able to reason about the type safety of more situations than scalac. -
(flatMap(Oslo) 2016)

[AutoSpecialization in Dotty](https://vimeo.com/165928176)by[Dmitry Petrashko](http://x.com/darkdimius)[[slides]](https://d-d.me/talks/flatmap2016/#/). The Dotty Linker analyses your program and its dependencies to apply a new specialization scheme. It builds on our experience from Specialization, Miniboxing and the Valhalla Project, and drastically reduces the size of the emitted bytecode. And, best of all, it’s always enabled, happens behind the scenes without annotations, and results in speedups in excess of 20x. Additionally, it “just works” on Scala collections. -
(ScalaSphere 2016)

[Hacking on Dotty: A live demo](https://www.youtube.com/watch?v=0OOYGeZLHs4)by Guillaume Martres[[slides]](http://guillaume.martres.me/talks/dotty-live-demo/). Guillaume hacks on Dotty: a live demo during which he creates a simple compiler phase to trace method calls at run-time. -
(Scala By the Bay 2016)

[Dotty: what is it and how it works](https://www.youtube.com/watch?v=wCFbYu7xEJA)by Guillaume Martres[[slides]](http://guillaume.martres.me/talks/dotty-tutorial/#/). Guillaume provides a high-level view of the compilation-pipeline of Dotty. -
(ScalaDays 2015, Amsterdam)

[Making your Scala applications smaller and faster with the Dotty linker](https://www.youtube.com/watch?v=xCeI1ArdXM4)by Dmitry Petrashko[[slides]](https://d-d.me/scaladays2015/#/). Dmitry introduces the call-graph analysis algorithm that Dotty implements and the performance benefits we can get in terms of number of methods, bytecode size, JVM code size and the number of objects allocated in the end.

---

## Source: https://docs.scala-lang.org/getting-started/intellij-track/getting-started-with-scala-in-intellij.html

In this tutorial, we’ll see how to build a minimal Scala project using IntelliJ IDE with the Scala plugin. In this guide, IntelliJ will download Scala for you.

## Installation

- Make sure you have the Java 8 JDK (also known as 1.8) or newer:
- run
`javac -version`

on the command line to check the Java version, - if you don’t have version 1.8 or higher,
[install the JDK](https://www.oracle.com/java/technologies/downloads/).

- run
- Next, download and install
[IntelliJ Community Edition](https://www.jetbrains.com/idea/download/). - Then, after starting up IntelliJ, you can download and install the Scala plugin by following the instructions on
[how to install IntelliJ plugins](https://www.jetbrains.com/help/idea/managing-plugins.html)(search for “Scala” in the plugins menu.)

When we create the project, we’ll install the latest version of Scala.
Note: If you want to open an existing Scala project, you can click **Open**
when you start IntelliJ.

## Creating the Project

- Open up IntelliJ and click
**File**=>**New**=>**Project**. - Name the project
**HelloWorld**. - Select
**Scala**from the**Language**list. - Select
**IntelliJ**from the**Build system**list. - Assuming this is your first time creating a Scala project with IntelliJ,
you’ll need to install a Scala SDK. To the right of the Scala SDK field,
click the
**Create**button. - Select the highest version number (e.g. 2.13.18) and click
**Download**. This might take a few minutes but subsequent projects can use the same SDK. - Once the SDK is created, and you’re back to the “New Project” window, click
**Create**.

## Writing code

- On the
**Project**pane on the left, right-click`src`

and select**New**=>**Scala class**. If you don’t see**Scala class**, right-click on**HelloWorld**and click on**Add Framework Support…**, select**Scala**and proceed. If you see**Error: library is not specified**, you can either click download button, or select the library path manually. If you only see**Scala Worksheet**try expanding the`src`

folder and its`main`

subfolder, and right-click on the`scala`

folder. - Name the class
`Hello`

and change the**Kind**to`object`

. - Change the code in the file to the following:

```
object Hello extends App {
println("Hello, World!")
}
```


```
@main def hello(): Unit =
println("Hello, World!")
```


In Scala 3, you can remove the object `Hello`

and define a top-level method
`hello`

instead, which you annotate with `@main`

.

## Running it

- Right click on
`Hello`

in your code and select**Run ‘Hello’**. - You’re done!

- Right click on
`hello`

in your code and select**Run ‘hello’**. - You’re done!

## Experimenting with Scala

A good way to try out code samples is with Scala Worksheets

- In the project pane on the left, right click
`src`

and select**New**=>**Scala Worksheet**. - Name your new Scala worksheet “Mathematician”.
- Enter the following code into the worksheet:

```
def square(x: Int): Int = x * x
square(2)
```


As you change your code, you’ll notice that it gets evaluated in the right pane. If you do not see a right pane, right-click on your Scala worksheet in the Project pane, and click on Evaluate Worksheet.

## Next Steps

Now you know how to create a simple Scala project which can be used for starting to learn the language. In the next tutorial, we’ll introduce an important build tool called sbt which can be used for simple projects and production apps.

---

## Source: https://docs.scala-lang.org/getting-started/sbt-track/getting-started-with-scala-and-sbt-on-the-command-line.html

In this tutorial, you’ll see how to create a Scala project from
a template. You can use this as a starting point for your own
projects. We’ll use [sbt](https://www.scala-sbt.org/1.x/docs/index.html), the de facto build tool for Scala. sbt compiles,
runs, and tests your projects among other related tasks.
We assume you know how to use a terminal.

## Installation

- Make sure you have the Java 8 JDK (also known as 1.8)
- Run
`javac -version`

in the command line and make sure you see`javac 1.8.___`

- If you don’t have version 1.8 or higher,
[install the JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

- Run
- Install sbt

## Create the project

`cd`

to an empty folder.- Run the following command
`sbt new scala/hello-world.g8`

. This pulls the ‘hello-world’ template from GitHub. It will also create a`target`

folder, which you can ignore. - When prompted, name the application
`hello-world`

. This will create a project called “hello-world”. - Let’s take a look at what just got generated:

`cd`

to an empty folder.- Run the following command
`sbt new scala/scala3.g8`

. This pulls the ‘scala3’ template from GitHub. It will also create a`target`

folder, which you can ignore. - When prompted, name the application
`hello-world`

. This will create a project called “hello-world”. - Let’s take a look at what just got generated:

```
- hello-world
- project (sbt uses this to install and manage plugins and dependencies)
- build.properties
- src
- main
- scala (All of your scala code goes here)
- Main.scala (Entry point of program) <-- this is all we need for now
- build.sbt (sbt's build definition file)
```


After you build your project, sbt will create more `target`

directories
for generated files. You can ignore these.

## Running the project

`cd`

into`hello-world`

.- Run
`sbt`

. This will open up the sbt console. - Type
`~run`

. The`~`

is optional and causes sbt to re-run on every file save, allowing for a fast edit/run/debug cycle. sbt will also generate a`target`

directory which you can ignore.

## Modifying the code

- Open the file
`src/main/scala/Main.scala`

in your favorite text editor. - Change “Hello, World!” to “Hello, New York!”
- If you haven’t stopped the sbt command, you should see “Hello, New York!” printed to the console.
- You can continue to make changes and see the results in the console.

## Adding a dependency

Changing gears a bit, let’s look at how to use published libraries to add extra functionality to our apps.

- Open up
`build.sbt`

and add the following line:

```
libraryDependencies += "org.scala-lang.modules" %% "scala-parser-combinators" % "2.1.1"
```


Here, `libraryDependencies`

is a set of dependencies, and by using `+=`

,
we’re adding the [scala-parser-combinators](https://github.com/scala/scala-parser-combinators) dependency to the set of dependencies that sbt will go
and fetch when it starts up. Now, in any Scala file, you can import classes,
objects, etc, from `scala-parser-combinators`

with a regular import.

You can find more published libraries on
[Scaladex](https://index.scala-lang.org/), the Scala library index, where you
can also copy the above dependency information for pasting into your `build.sbt`

file.


Note for Java Libraries:For a regular Java library, you should only use one percent (`%`

) between the organization name and artifact name. Double percent (`%%`

) is a specialisation for Scala libraries. You can learn more about the reason for this in the[sbt documentation].

## Next steps

Continue to the next tutorial in the *getting started with sbt* series, and learn about [testing Scala code with sbt in the command line](testing-scala-with-sbt-on-the-command-line.html).

**or**

- Continue learning Scala interactively online on
[Scala Exercises](https://www.scala-exercises.org/scala_tutorial). - Learn about Scala’s features in bite-sized pieces by stepping through our
[Tour of Scala](/tour/tour-of-scala.html).

---

## Source: https://docs.scala-lang.org/tutorials/scala-for-java-programmers.html

If you are coming to Scala with some Java experience already, this page should give a good overview of the differences, and what to expect when you begin programming with Scala. For best results we suggest to either set up a Scala toolchain on your computer, or try compiling Scala snippets in the browser with Scastie:

[
](/getting-started.html)

#### Getting Started

Install Scala on your computer and start writing some Scala code!

[
](https://scastie.scala-lang.org/pEBYc5VMT02wAGaDrfLnyw)

#### Scala in the Browser

To start experimenting with Scala right away, use "Scastie" in your browser.

## At a Glance: Why Scala?

**Java without Semicolons:** There’s a saying that Scala is Java without semicolons.
There is a lot of a truth to this statement: Scala simplifies much of the noise and boilerplate of Java,
while building upon the same foundation, sharing the same underlying types and runtime.

**Seamless Interop:** Scala can use any Java library out of the box; including the Java standard library!
And pretty much any Java program will work the same in Scala, just by converting the syntax.

**A Scalable Language:** the name Scala comes from Scalable Language. Scala scales not only with hardware
resources and load requirements, but also with the level of programmer’s skill. If you choose, Scala
rewards you with expressive additional features, which when compared to Java, boost developer productivity and
readability of code.

**It Grows with You:** Learning these extras are optional steps to approach at your own pace.
The most fun and effective way to learn, in our opinion, is to ensure you are productive first with what knowledge
you have from Java. And then, learn one thing at a time following the [Scala Book](/scala3/book/introduction.html). Pick the learning pace convenient for you and ensure whatever you are learning is fun.

**TL;DR:** You can start writing Scala as if it were Java with new syntax, then explore from there as you see fit.

## Next Steps

### Compare Java and Scala

The remainder of this tutorial expands upon some of the key differences between Java and Scala,
with further explanations. **If you only want a quick reference** between the two, read
*Scala for Java Developers*, it comes
with many snippets which you can try out in your chosen Scala setup:

### Explore Further

When you finish these guides, we recommend to continue your Scala journey by reading the
*Scala Book* or following a number of *online MOOCs*.

[
](/scala3/book/introduction.html)

#### Scala Book

Learn Scala by reading a series of short lessons.

[
](/online-courses.html)

#### Online Courses

MOOCs to learn Scala, for beginners and experienced programmers.

## Your First Program

### Writing Hello World

As a first example, we will use the standard *Hello World* program. It
is not very fascinating but makes it easy to demonstrate the use of
the Scala tools without knowing too much about the language. Here is
how it looks:

```
object HelloWorld {
def main(args: Array[String]): Unit = {
println("Hello, World!")
}
}
```


The structure of this program should be familiar to Java programmers:
it’s entry-point consists of one method called `main`

which takes the command
line arguments, an array of strings, as a parameter; the body of this
method consists of a single call to the predefined method `println`

with the friendly greeting as argument. The `main`

method does not
return a value. Therefore, its return type is declared as `Unit`

(equivalent to `void`

in Java).

What is less familiar to Java programmers is the `object`

declaration containing the `main`

method. Such a declaration
introduces what is commonly known as a *singleton object*, that
is a class with a single instance. The declaration above thus declares
both a class called `HelloWorld`

and an instance of that class,
also called `HelloWorld`

. This instance is created on demand,
the first time it is used.

Another difference from Java is that the `main`

method is
not declared as `static`

here. This is because static members
(methods or fields) do not exist in Scala. Rather than defining static
members, the Scala programmer declares these members in singleton
objects.

```
@main def HelloWorld(args: String*): Unit =
println("Hello, World!")
```


The structure of this program may not be familiar to Java programmers:
there is no method called `main`

, instead the `HelloWorld`

method is marked
as an entry-point by adding the `@main`

annotation.

program entry-points optionally take parameters, which are populated by the
command line arguments. Here `HelloWorld`

captures all the arguments in
a variable-length sequence of strings called `args`

.

The body of the method consists of a single call to the
predefined method `println`

with the friendly greeting as argument.
The `HelloWorld`

method does not
return a value. Therefore, its return type is declared as `Unit`

(equivalent to `void`

in Java).

Even less familiar to Java programmers is that `HelloWorld`

does not need to be wrapped in a class definition. Scala 3
supports top-level method definitions, which are ideal for
program entry-points.

The method also does not need to be declared as `static`

.
This is because static members (methods or fields) do not exist in Scala.
Instead, top-level methods and fields are members of their enclosing
package, so can be accessed from anywhere in a program.


Implementation detail: so that the JVM can execute the program, the`@main`

annotation generates a class`HelloWorld`

with a static`main`

method which calls the`HelloWorld`

method with the command line arguments. This class is only visible at runtime.

### Running Hello World


Note:The following assumes you are using Scala on the command line

If we save the above program in a file called
`HelloWorld.scala`

, we can run it by issuing the following
command (the greater-than sign `>`

represents the shell prompt
and should not be typed):

```
> scala run HelloWorld.scala
```


The program will be automatically compiled (with compiled classes somewhere in the newly created `.scala-build`

directory)
and executed, producing an output similar to:

```
Compiling project (Scala 3.8.2, JVM (20))
Compiled project (Scala 3.8.2, JVM (20))
Hello, World!
```


#### Compiling From the Command Line

To compile the example, we use `scala compile`

command, which will invoke the Scala compiler, `scalac`

. `scalac`

works like most compilers: it takes a source file as argument, maybe
some options, and produces one or several output files. The outputs
it produces are standard Java class files.

```
> scala compile HelloWorld.scala -d .
```


This will generate a few class files in the current directory (`-d`

option sets the compilation output directory). One of
them will be called `HelloWorld.class`

, and contains a class
which can be directly executed using the `scala`

command, as the
following section shows.

#### Running From the Command Line

Once compiled, the program can be run using the `scala run`

command.
Its usage is very similar to the `java`

command used to run Java
programs, and accepts similar options. The above example can be
executed using the following command, which produces the expected
output:

```
> scala run --main-class HelloWorld -classpath .
Hello, World!
```


## Using Java Libraries

One of Scala’s strengths is that it makes it very easy to interact
with Java code. All classes from the `java.lang`

package are
imported by default, while others need to be imported explicitly.

Let’s look at an example that demonstrates this. We want to obtain and format the current date according to the conventions used in a specific country, say France. (Other regions such as the French-speaking part of Switzerland use the same conventions.)

Java’s class libraries define powerful utility classes, such as
`LocalDate`

and `DateTimeFormatter`

. Since Scala interoperates
seamlessly with Java, there is no need to implement equivalent
classes in the Scala class library; instead, we can import the classes
of the corresponding Java packages:

```
import java.time.format.{DateTimeFormatter, FormatStyle}
import java.time.LocalDate
import java.util.Locale._
object FrenchDate {
def main(args: Array[String]): Unit = {
val now = LocalDate.now
val df = DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG).withLocale(FRANCE)
println(df.format(now))
}
}
```


Scala’s import statement looks very similar to Java’s equivalent,
however, it is more powerful. Multiple classes can be imported from
the same package by enclosing them in curly braces as on the first
line. Another difference is that when importing all the names of a
package or class, in Scala 2 we use the underscore character (`_`

) instead
of the asterisk (`*`

).

```
import java.time.format.{DateTimeFormatter, FormatStyle}
import java.time.LocalDate
import java.util.Locale.*
@main def FrenchDate: Unit =
val now = LocalDate.now
val df = DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG).withLocale(FRANCE)
println(df.format(now))
```


Scala’s import statement looks very similar to Java’s equivalent,
however, it is more powerful. Multiple classes can be imported from
the same package by enclosing them in curly braces as on the first
line. Like with Java, in Scala 3 we use the asterisk (`*`

) to import all
the names of a package or class.

The import statement on the third line therefore imports all members
of the `Locale`

enum. This makes the static field `FRANCE`

directly
visible.

Inside the entry-point method we first create an instance of Java’s
`DateTime`

class, containing today’s date. Next, we
define a date format using the `DateTimeFormatter.ofLocalizedDate`

method,
passing the `LONG`

format style, then further passing the `FRANCE`

locale
that we imported previously. Finally, we print the current date
formatted according to the localized `DateTimeFormatter`

instance.

To conclude this section about integration with Java, it should be noted that it is also possible to inherit from Java classes and implement Java interfaces directly in Scala.

### Sidepoint: Third-Party Libraries

Usually the standard library is not enough. As a Java programmer, you might already know a lot of Java libraries that you’d like to use in Scala. The good news is that, as with Java, Scala’s library ecosystem is built upon Maven coordinates.

**Most Scala projects are built with sbt:** Adding third party libraries is usually managed by a build tool.
Coming from Java you may be familiar with Maven, Gradle and other such tools.
It’s still possible to [use these](/tutorials/scala-with-maven.html) to build Scala projects, however it’s common to use sbt.
See [setup a Scala Project with sbt](/getting-started/sbt-track/getting-started-with-scala-and-sbt-on-the-command-line.html#adding-a-dependency) for a guide on how
to build a project with sbt and add some dependencies.

## Everything is an Object

Scala is a pure object-oriented language in the sense that
*everything* is an object, including numbers or functions. It
differs from Java in that respect, since Java distinguishes
primitive types (such as `boolean`

and `int`

) from reference
types.

### Numbers are objects

Since numbers are objects, they also have methods. And in fact, an arithmetic expression like the following:

```
1 + 2 * 3 / x
```


consists exclusively of method calls, because it is equivalent to the following expression, as we saw in the previous section:

```
1.+(2.*(3)./(x))
```


This also means that `+`

, `*`

, etc. are valid identifiers for fields/methods/etc
in Scala.

### Functions are objects

True to *everything* being an object, in Scala even functions are objects, going beyond Java’s support for
lambda expressions.

Compared to Java, there is very little difference between function objects and methods: you can pass methods as
arguments, store them in variables, and return them from other functions, all without special syntax.
This ability to manipulate functions as values is one of the cornerstones of a very
interesting programming paradigm called *functional programming*.

To demonstrate, consider a timer function which performs some action every second. The action to be performed is supplied by the caller as a function value.

In the following program, the timer function is called
`oncePerSecond`

, and it gets a call-back function as argument.
The type of this function is written `() => Unit`

and is the type
of all functions which take no arguments and return no useful value
(as before, the type `Unit`

is similar to `void`

in Java).

The entry-point of this program calls `oncePerSecond`

by directly passing
the `timeFlies`

method.

In the end this program will infitely print the sentence `time flies like an arrow`

every
second.

```
object Timer {
def oncePerSecond(callback: () => Unit): Unit = {
while (true) { callback(); Thread.sleep(1000) }
}
def timeFlies(): Unit = {
println("time flies like an arrow...")
}
def main(args: Array[String]): Unit = {
oncePerSecond(timeFlies)
}
}
```


```
def oncePerSecond(callback: () => Unit): Unit =
while true do { callback(); Thread.sleep(1000) }
def timeFlies(): Unit =
println("time flies like an arrow...")
@main def Timer: Unit =
oncePerSecond(timeFlies)
```


Note that in order to print the string, we used the predefined method
`println`

instead of using the one from `System.out`

.

#### Anonymous functions

In Scala, lambda expressions are known as anonymous functions. They are useful when functions are so short it is perhaps unneccesary to give them a name.

Here is a revised version of the timer
program, passing an anonymous function to `oncePerSecond`

instead of `timeFlies`

:

```
object TimerAnonymous {
def oncePerSecond(callback: () => Unit): Unit = {
while (true) { callback(); Thread.sleep(1000) }
}
def main(args: Array[String]): Unit = {
oncePerSecond(() =>
println("time flies like an arrow..."))
}
}
```


```
def oncePerSecond(callback: () => Unit): Unit =
while true do { callback(); Thread.sleep(1000) }
@main def TimerAnonymous: Unit =
oncePerSecond(() =>
println("time flies like an arrow..."))
```


The presence of an anonymous function in this example is revealed by
the right arrow (`=>`

), different from Java’s thin arrow (`->`

), which
separates the function’s argument list from its body.
In this example, the argument list is empty, so we put empty parentheses
on the left of the arrow.
The body of the function is the same as the one of `timeFlies`

above.

## Classes

As we have seen above, Scala is an object-oriented language, and as such it has a concept of class. (For the sake of completeness, it should be noted that some object-oriented languages do not have the concept of class, but Scala is not one of them.) Classes in Scala are declared using a syntax which is close to Java’s syntax. One important difference is that classes in Scala can have parameters. This is illustrated in the following definition of complex numbers.

```
class Complex(real: Double, imaginary: Double) {
def re() = real
def im() = imaginary
}
```


This `Complex`

class takes two arguments, which are the real and
imaginary part of the complex number. These arguments must be passed when
creating an instance of class `Complex`

, as follows:

```
new Complex(1.5, 2.3)
```


The class contains two methods, called `re`

and `im`

, which give access to these two parts.

```
class Complex(real: Double, imaginary: Double):
def re() = real
def im() = imaginary
```


This `Complex`

class takes two arguments, which are the real and
imaginary part of the complex number. These arguments must be passed when
creating an instance of class `Complex`

, as follows:

```
new Complex(1.5, 2.3)
```


where `new`

is optional.
The class contains two methods, called `re`

and `im`

, which give access to these two parts.

It should be noted that the return type of these two methods is not
given explicitly. It will be inferred automatically by the compiler,
which looks at the right-hand side of these methods and deduces that
both return a value of type `Double`

.


Important:The inferred result type of a method can change in subtle ways if the implementation changes, which could have a knock-on effect. Hence it is a best practise to put explicit result types for public members of classes.

For local values in methods, it is encouraged to infer result types. Try to experiment by omitting type declarations when they seem to be easy to deduce from the context, and see if the compiler agrees. After some time, the programmer should get a good feeling about when to omit types, and when to specify them explicitly.

### Methods without arguments

A small problem of the methods `re`

and `im`

is that, in
order to call them, one has to put an empty pair of parentheses after
their name, as the following example shows:

```
object ComplexNumbers {
def main(args: Array[String]): Unit = {
val c = new Complex(1.2, 3.4)
println("imaginary part: " + c.im())
}
}
```


```
@main def ComplexNumbers: Unit =
val c = Complex(1.2, 3.4)
println("imaginary part: " + c.im())
```


It would be nicer to be able to access the real and imaginary parts
like if they were fields, without putting the empty pair of
parenthesis. This is perfectly doable in Scala, simply by defining
them as methods *without arguments*. Such methods differ from
methods with zero arguments in that they don’t have parenthesis after
their name, neither in their definition nor in their use. Our
`Complex`

class can be rewritten as follows:

```
class Complex(real: Double, imaginary: Double) {
def re = real
def im = imaginary
}
```


```
class Complex(real: Double, imaginary: Double):
def re = real
def im = imaginary
```


### Inheritance and overriding

All classes in Scala inherit from a super-class. When no super-class
is specified, as in the `Complex`

example of previous section,
`scala.AnyRef`

is implicitly used.

It is possible to override methods inherited from a super-class in
Scala. It is however mandatory to explicitly specify that a method
overrides another one using the `override`

modifier, in order to
avoid accidental overriding. As an example, our `Complex`

class
can be augmented with a redefinition of the `toString`

method
inherited from `Object`

.

```
class Complex(real: Double, imaginary: Double) {
def re = real
def im = imaginary
override def toString() =
"" + re + (if (im >= 0) "+" else "") + im + "i"
}
```


```
class Complex(real: Double, imaginary: Double):
def re = real
def im = imaginary
override def toString() =
"" + re + (if im >= 0 then "+" else "") + im + "i"
```


We can call the overridden `toString`

method as below:

```
object ComplexNumbers {
def main(args: Array[String]): Unit = {
val c = new Complex(1.2, 3.4)
println("Overridden toString(): " + c.toString)
}
}
```


```
@main def ComplexNumbers: Unit =
val c = Complex(1.2, 3.4)
println("Overridden toString(): " + c.toString)
```


## Algebraic Data Types and Pattern Matching

A kind of data structure that often appears in programs is the tree. For example, interpreters and compilers usually represent programs internally as trees; JSON payloads are trees; and several kinds of containers are based on trees, like red-black trees.

We will now examine how such trees are represented and manipulated in
Scala through a small calculator program. The aim of this program is
to manipulate very simple arithmetic expressions composed of sums,
integer constants and variables. Two examples of such expressions are
`1+2`

and `(x+x)+(7+y)`

.

We first have to decide on a representation for such expressions. The most natural one is the tree, where nodes are operations (here, the addition) and leaves are values (here constants or variables).

In Java, before the introduction of records, such a tree would be represented using an abstract super-class for the trees, and one concrete sub-class per node or leaf. In a functional programming language, one would use an algebraic data-type (ADT) for the same purpose.

Scala 2 provides the concept of
*case classes* which is somewhat in between the two. Here is how
they can be used to define the type of the trees for our example:

```
abstract class Tree
object Tree {
case class Sum(left: Tree, right: Tree) extends Tree
case class Var(n: String) extends Tree
case class Const(v: Int) extends Tree
}
```


The fact that classes `Sum`

, `Var`

and `Const`

are
declared as case classes means that they differ from standard classes
in several respects:

- the
`new`

keyword is not mandatory to create instances of these classes (i.e., one can write`Tree.Const(5)`

instead of`new Tree.Const(5)`

), - getter functions are automatically defined for the constructor
parameters (i.e., it is possible to get the value of the
`v`

constructor parameter of some instance`c`

of class`Tree.Const`

just by writing`c.v`

), - default definitions for methods
`equals`

and`hashCode`

are provided, which work on the*structure*of the instances and not on their identity, - a default definition for method
`toString`

is provided, and prints the value in a “source form” (e.g., the tree for expression`x+1`

prints as`Sum(Var(x),Const(1))`

), - instances of these classes can be decomposed through
*pattern matching*as we will see below.

Scala 3 provides the concept of *enums* which can be used like Java’s enum,
but also to implement ADTs. Here is how they can be used to define the type
of the trees for our example:

```
enum Tree:
case Sum(left: Tree, right: Tree)
case Var(n: String)
case Const(v: Int)
```


The cases of the enum `Sum`

, `Var`

and `Const`

are similar to standard classes,
but differ in several respects:

- getter functions are automatically defined for the constructor
parameters (i.e., it is possible to get the value of the
`v`

constructor parameter of some instance`c`

of case`Tree.Const`

just by writing`c.v`

), - default definitions for methods
`equals`

and`hashCode`

are provided, which work on the*structure*of the instances and not on their identity, - a default definition for method
`toString`

is provided, and prints the value in a “source form” (e.g., the tree for expression`x+1`

prints as`Sum(Var(x),Const(1))`

), - instances of these enum cases can be decomposed through
*pattern matching*as we will see below.

Now that we have defined the data-type to represent our arithmetic
expressions, we can start defining operations to manipulate them. We
will start with a function to evaluate an expression in some
*environment*. The aim of the environment is to give values to
variables. For example, the expression `x+1`

evaluated in an
environment which associates the value `5`

to variable `x`

, written
`{ x -> 5 }`

, gives `6`

as result.

We therefore have to find a way to represent environments. We could of
course use some associative data-structure like a hash table, but we
can also directly use functions! An environment is really nothing more
than a function which associates a value to a (variable) name. The
environment `{ x -> 5 }`

given above can be written as
follows in Scala:

```
type Environment = String => Int
val ev: Environment = { case "x" => 5 }
```


This notation defines a function which, when given the string
`"x"`

as argument, returns the integer `5`

, and fails with an
exception otherwise.

Above we defined a *type alias* called `Environment`

which is more
readable than the plain function type `String => Int`

, and makes
future changes easier.

We can now give the definition of the evaluation function. Here is
a brief specification: the value of a `Sum`

is the addition of the
evaluations of its two inner expressions; the value of a `Var`

is obtained
by lookup of its inner name in the environment; and the value of a
`Const`

is its inner value itself. This specification translates exactly into
Scala as follows, using a pattern match on a tree value `t`

:

```
import Tree._
def eval(t: Tree, ev: Environment): Int = t match {
case Sum(left, right) => eval(left, ev) + eval(right, ev)
case Var(n) => ev(n)
case Const(v) => v
}
```


```
import Tree.*
def eval(t: Tree, ev: Environment): Int = t match
case Sum(left, right) => eval(left, ev) + eval(right, ev)
case Var(n) => ev(n)
case Const(v) => v
```


You can understand the precise meaning of the pattern match as follows:

- it first checks if the tree
`t`

is a`Sum`

, and if it is, it binds the left sub-tree to a new variable called`left`

and the right sub-tree to a variable called`right`

, and then proceeds with the evaluation of the expression following the arrow; this expression can (and does) make use of the variables bound by the pattern appearing on the left of the arrow, i.e.,`left`

and`right`

, - if the first check does not succeed, that is, if the tree is not
a
`Sum`

, it goes on and checks if`t`

is a`Var`

; if it is, it binds the name contained in the`Var`

node to a variable`n`

and proceeds with the right-hand expression, - if the second check also fails, that is if
`t`

is neither a`Sum`

nor a`Var`

, it checks if it is a`Const`

, and if it is, it binds the value contained in the`Const`

node to a variable`v`

and proceeds with the right-hand side, - finally, if all checks fail, an exception is raised to signal
the failure of the pattern matching expression; this could happen
here only if more sub-classes of
`Tree`

were declared.

We see that the basic idea of pattern matching is to attempt to match a value to a series of patterns, and as soon as a pattern matches, extract and name various parts of the value, to finally evaluate some code which typically makes use of these named parts.

### Comparison to OOP

A programmer familiar with the object-oriented paradigm
might wonder why define a single function for `eval`

outside
the scope of `Tree`

, and not make `eval`

an abstract method in
`Tree`

, providing overrides in each subclass of `Tree`

.

We could have done it actually, it is a choice to make, which has important implications on extensibility:

- when using method overriding, adding a new operation to
manipulate the tree implies far-reaching changes to the code,
as it requires to add the method in all sub-classes of
`Tree`

, however, adding a new subclass only requires implementing the operations in one place. This design favours a few core operations and many growing subclasses, - when using pattern matching, the situation is reversed: adding a new kind of node requires the modification of all functions which do pattern matching on the tree, to take the new node into account; on the other hand, adding a new operation only requires defining the function in one place. If your data structure has a stable set of nodes, it favours the ADT and pattern matching design.

### Adding a New Operation

To explore pattern matching further, let us define another operation on arithmetic expressions: symbolic derivation. The reader might remember the following rules regarding this operation:

- the derivative of a sum is the sum of the derivatives,
- the derivative of some variable
`v`

is one if`v`

is the variable relative to which the derivation takes place, and zero otherwise, - the derivative of a constant is zero.

These rules can be translated almost literally into Scala code, to obtain the following definition:

```
import Tree._
def derive(t: Tree, v: String): Tree = t match {
case Sum(left, right) => Sum(derive(left, v), derive(right, v))
case Var(n) if v == n => Const(1)
case _ => Const(0)
}
```


```
import Tree.*
def derive(t: Tree, v: String): Tree = t match
case Sum(left, right) => Sum(derive(left, v), derive(right, v))
case Var(n) if v == n => Const(1)
case _ => Const(0)
```


This function introduces two new concepts related to pattern matching.
First of all, the `case`

expression for variables has a
*guard*, an expression following the `if`

keyword. This
guard prevents pattern matching from succeeding unless its expression
is true. Here it is used to make sure that we return the constant `1`

only if the name of the variable being derived is the same as the
derivation variable `v`

. The second new feature of pattern
matching used here is the *wildcard*, written `_`

, which is
a pattern matching any value, without giving it a name.

We did not explore the whole power of pattern matching yet, but we
will stop here in order to keep this document short. We still want to
see how the two functions above perform on a real example. For that
purpose, let’s write a simple `main`

function which performs
several operations on the expression `(x+x)+(7+y)`

: it first computes
its value in the environment `{ x -> 5, y -> 7 }`

, then
computes its derivative relative to `x`

and then `y`

.

```
import Tree._
object Calc {
type Environment = String => Int
def eval(t: Tree, ev: Environment): Int = ...
def derive(t: Tree, v: String): Tree = ...
def main(args: Array[String]): Unit = {
val exp: Tree = Sum(Sum(Var("x"),Var("x")),Sum(Const(7),Var("y")))
val env: Environment = { case "x" => 5 case "y" => 7 }
println("Expression: " + exp)
println("Evaluation with x=5, y=7: " + eval(exp, env))
println("Derivative relative to x:\n " + derive(exp, "x"))
println("Derivative relative to y:\n " + derive(exp, "y"))
}
}
```


```
import Tree.*
@main def Calc: Unit =
val exp: Tree = Sum(Sum(Var("x"),Var("x")),Sum(Const(7),Var("y")))
val env: Environment = { case "x" => 5 case "y" => 7 }
println("Expression: " + exp)
println("Evaluation with x=5, y=7: " + eval(exp, env))
println("Derivative relative to x:\n " + derive(exp, "x"))
println("Derivative relative to y:\n " + derive(exp, "y"))
```


Executing this program, we should get the following output:

```
Expression: Sum(Sum(Var(x),Var(x)),Sum(Const(7),Var(y)))
Evaluation with x=5, y=7: 24
Derivative relative to x:
Sum(Sum(Const(1),Const(1)),Sum(Const(0),Const(0)))
Derivative relative to y:
Sum(Sum(Const(0),Const(0)),Sum(Const(0),Const(1)))
```


By examining the output, we see that the result of the derivative should be simplified before being presented to the user. Defining a basic simplification function using pattern matching is an interesting (but surprisingly tricky) problem, left as an exercise for the reader.

## Traits

Apart from inheriting code from a super-class, a Scala class can also
import code from one or several *traits*.

Maybe the easiest way for a Java programmer to understand what traits are is to view them as interfaces which can also contain code. In Scala, when a class inherits from a trait, it implements that trait’s interface, and inherits all the code contained in the trait.

(Note that since Java 8, Java interfaces can also contain code, either
using the `default`

keyword, or as static methods.)

To see the usefulness of traits, let’s look at a classical example:
ordered objects. It is often useful to be able to compare objects of a
given class among themselves, for example to sort them. In Java,
objects which are comparable implement the `Comparable`

interface. In Scala, we can do a bit better than in Java by defining
our equivalent of `Comparable`

as a trait, which we will call
`Ord`

.

When comparing objects, six different predicates can be useful: smaller, smaller or equal, equal, not equal, greater or equal, and greater. However, defining all of them is fastidious, especially since four out of these six can be expressed using the remaining two. That is, given the equal and smaller predicates (for example), one can express the other ones. In Scala, all these observations can be nicely captured by the following trait declaration:

```
trait Ord {
def < (that: Any): Boolean
def <=(that: Any): Boolean = (this < that) || (this == that)
def > (that: Any): Boolean = !(this <= that)
def >=(that: Any): Boolean = !(this < that)
}
```


```
trait Ord:
def < (that: Any): Boolean
def <=(that: Any): Boolean = (this < that) || (this == that)
def > (that: Any): Boolean = !(this <= that)
def >=(that: Any): Boolean = !(this < that)
```


This definition both creates a new type called `Ord`

, which
plays the same role as Java’s `Comparable`

interface, and
default implementations of three predicates in terms of a fourth,
abstract one. The predicates for equality and inequality do not appear
here since they are by default present in all objects.

The type `Any`

which is used above is the type which is a
super-type of all other types in Scala. It can be seen as a more
general version of Java’s `Object`

type, since it is also a
super-type of basic types like `Int`

, `Float`

, etc.

To make objects of a class comparable, it is therefore sufficient to
define the predicates which test equality and inferiority, and mix in
the `Ord`

class above. As an example, let’s define a
`Date`

class representing dates in the Gregorian calendar. Such
dates are composed of a day, a month and a year, which we will all
represent as integers. We therefore start the definition of the
`Date`

class as follows:

```
class Date(y: Int, m: Int, d: Int) extends Ord {
def year = y
def month = m
def day = d
override def toString(): String = s"$year-$month-$day"
// rest of implementation will go here
}
```


```
class Date(y: Int, m: Int, d: Int) extends Ord:
def year = y
def month = m
def day = d
override def toString(): String = s"$year-$month-$day"
// rest of implementation will go here
end Date
```


The important part here is the `extends Ord`

declaration which
follows the class name and parameters. It declares that the
`Date`

class inherits from the `Ord`

trait.

Then, we redefine the `equals`

method, inherited from
`Object`

, so that it correctly compares dates by comparing their
individual fields. The default implementation of `equals`

is not
usable, because as in Java it compares objects by their identity. We arrive
at the following definition:

```
class Date(y: Int, m: Int, d: Int) extends Ord {
// previous decls here
override def equals(that: Any): Boolean = that match {
case d: Date => d.day == day && d.month == month && d.year == year
case _ => false
}
// rest of implementation will go here
}
```


```
class Date(y: Int, m: Int, d: Int) extends Ord:
// previous decls here
override def equals(that: Any): Boolean = that match
case d: Date => d.day == day && d.month == month && d.year == year
case _ => false
// rest of implementation will go here
end Date
```


While in Java (pre 16) you might use the `instanceof`

operator followed by a cast
(equivalent to calling `that.isInstanceOf[Date]`

and `that.asInstanceOf[Date]`

in Scala);
in Scala it is more idiomatic to use a *type pattern*, shown in the example above which checks if `that`

is an
instance of `Date`

, and binds it to a new variable `d`

, which is then used in the right hand side of the `case`

.

Finally, the last method to define is the `<`

test, as follows. It makes use of another method,
`error`

from the package object `scala.sys`

, which throws an exception with the given error message.

```
class Date(y: Int, m: Int, d: Int) extends Ord {
// previous decls here
def <(that: Any): Boolean = that match {
case d: Date =>
(year < d.year) ||
(year == d.year && (month < d.month ||
(month == d.month && day < d.day)))
case _ => sys.error("cannot compare " + that + " and a Date")
}
}
```


```
class Date(y: Int, m: Int, d: Int) extends Ord:
// previous decls here
def <(that: Any): Boolean = that match
case d: Date =>
(year < d.year) ||
(year == d.year && (month < d.month ||
(month == d.month && day < d.day)))
case _ => sys.error("cannot compare " + that + " and a Date")
end <
end Date
```


This completes the definition of the `Date`

class. Instances of
this class can be seen either as dates or as comparable objects.
Moreover, they all define the six comparison predicates mentioned
above: `equals`

and `<`

because they appear directly in
the definition of the `Date`

class, and the others because they
are inherited from the `Ord`

trait.

Traits are useful in other situations than the one shown here, of course, but discussing their applications in length is outside the scope of this document.

## Genericity

The last characteristic of Scala we will explore in this tutorial is
genericity. Genericity is the ability to write code parametrized by types. For
example, a programmer writing a library for linked lists faces the
problem of deciding which type to give to the elements of the list.
Since this list is meant to be used in many different contexts, it is
not possible to decide that the type of the elements has to be, say,
`Int`

. This would be completely arbitrary and overly
restrictive.

Java programmers resort to using `Object`

, which is the
super-type of all objects. This solution is however far from being
ideal, since it doesn’t work for basic types (`int`

,
`long`

, `float`

, etc.) and it implies that a lot of
dynamic type casts have to be inserted by the programmer.

Scala makes it possible to define generic classes (and methods) to solve this problem. Let us examine this with an example of the simplest container class possible: a reference, which can either be empty or point to an object of some type.

```
class Reference[T] {
private var contents: T = _
def set(value: T): Unit = { contents = value }
def get: T = contents
}
```


The class `Reference`

is parametrized by a type, called `T`

,
which is the type of its element. This type is used in the body of the
class as the type of the `contents`

variable, the argument of
the `set`

method, and the return type of the `get`

method.

The above code sample introduces variables in Scala, which should not
require further explanations. It is however interesting to see that
the initial value given to that variable is `_`

, which represents
a default value. This default value is `0`

for numeric types,
`false`

for the `Boolean`

type, `()`

for the `Unit`

type and `null`

for all object types.

```
import compiletime.uninitialized
class Reference[T]:
private var contents: T = uninitialized
def set(value: T): Unit = contents = value
def get: T = contents
```


The class `Reference`

is parametrized by a type, called `T`

,
which is the type of its element. This type is used in the body of the
class as the type of the `contents`

variable, the argument of
the `set`

method, and the return type of the `get`

method.

The above code sample introduces variables in Scala, which should not
require further explanations. It is however interesting to see that
the initial value given to that variable is `uninitialized`

, which represents
a default value. This default value is `0`

for numeric types,
`false`

for the `Boolean`

type, `()`

for the `Unit`

type and `null`

for all object types.

To use this `Reference`

class, one needs to specify which type to use
for the type parameter `T`

, that is the type of the element
contained by the cell. For example, to create and use a cell holding
an integer, one could write the following:

```
object IntegerReference {
def main(args: Array[String]): Unit = {
val cell = new Reference[Int]
cell.set(13)
println("Reference contains the half of " + (cell.get * 2))
}
}
```


```
@main def IntegerReference: Unit =
val cell = new Reference[Int]
cell.set(13)
println("Reference contains the half of " + (cell.get * 2))
```


As can be seen in that example, it is not necessary to cast the value
returned by the `get`

method before using it as an integer. It
is also not possible to store anything but an integer in that
particular cell, since it was declared as holding an integer.

## Conclusion

This document gave a quick overview of the Scala language and
presented some basic examples. The interested reader can go on, for example, by
reading the * Tour of Scala*, which
contains more explanations and examples, and consult the

*Scala Language Specification*when needed.

---

## Source: https://docs.scala-lang.org/tutorials/scala-on-android.html

By Maciej Gorywoda

## Introduction

The Android platform runs on Android Runtime which is a virtual machine based on JVM and, although not identical, [it’s very similar to it](https://www.baeldung.com/java-jvm-vs-dvm). As a consequence, it is possible to write Android apps in Scala, and in fact it’s possible to do it in more than one way. Here, in this document, we will focus on how to write a modern Android app with Scala that uses GraalVM Native Image and JavaFX. At the end of this tutorial, you will find links to materials discussing other options.

## How to build an Android app with GraalVM Native Image

#### Requirements

We will use Linux. On Windows, it is possible to follow this tutorial and get a working Android app [if you use WSL2](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux). For building, we will use Maven.

Download the latest GraalVM, Community Edition based on Java 11, from [here](https://github.com/graalvm/graalvm-ce-builds/releases). Set it up as your JVM by creating an environment variable `GRAALVM_HOME`

pointing to the GraalVM home directory, by setting the environment variable `JAVA_HOME`

to `${GRAALVM_HOME}`

, and by adding `${GRAALVM_HOME}/bin`

to your `PATH`

. If you are using Bash, add the following lines to your `~/.bash_profile`

:

```
export GRAALVM_HOME=<path to GraalVM home directory>
export JAVA_HOME=$GRAALVM_HOME
export PATH=$GRAALVM_HOME/bin:$PATH
```


When you type in `java -version`

it should display something like this now:

```
> java -version
openjdk version "11.0.10" 2021-01-19
OpenJDK Runtime Environment GraalVM CE 21.0.0 (build 11.0.10+8-jvmci-21.0-b06)
OpenJDK 64-Bit Server VM GraalVM CE 21.0.0 (build 11.0.10+8-jvmci-21.0-b06, mixed mode, sharing)
```


(The GraalVM version may differ)

Type `native-image`

to check if it’s already there on the path. If not, install it with:

```
gu install native-image
```


`gu`

should be available now in your console because of `$GRAALVM_HOME/bin`

in your `PATH`

. Also, [read this](https://www.graalvm.org/reference-manual/native-image/#prerequisites) and install whatever you need.

You will need `adb`

, “Android Debug Bridge”, to connect to your Android device and install the app on it. [Here you can find more on how to do it](https://www.fosslinux.com/25170/how-to-install-and-setup-adb-tools-on-linux.htm).

Make sure your `gcc`

is at least version 6. [You can try following these steps](https://tuxamito.com/wiki/index.php/Installing_newer_GCC_versions_in_Ubuntu). On top of that, you will need some specific C libraries (like GTK) to build the native image, and it varies from one computer to another, so I can’t tell you exactly what to do. But it shouldn’t be a big problem. Just follow error messages saying that you lack something and google how to install them. In my case this was the list:

```
libasound2-dev (for pkgConfig alsa)
libavcodec-dev (for pkgConfig libavcodec)
libavformat-dev (for pkgConfig libavformat)
libavutil-dev (for pkgConfig libavutil)
libfreetype6-dev (for pkgConfig freetype2)
libgl-dev (for pkgConfig gl)
libglib2.0-dev (for pkgConfig gmodule-no-export-2.0)
libglib2.0-dev (for pkgConfig gthread-2.0)
libgtk-3-dev (for pkgConfig gtk+-x11-3.0)
libpango1.0-dev (for pkgConfig pangoft2)
libx11-dev (for pkgConfig x11)
libxtst-dev (for pkgConfig xtst)
```


#### The example app

if you reached this point and everything seems to work, it means you probably should be able to compile and run the example app called [HelloScala](https://github.com/makingthematrix/scalaonandroid/tree/main/helloscala). HelloScala is based on [HelloGluon](https://github.com/gluonhq/gluon-samples/tree/master/HelloGluon) from [Gluon samples](https://github.com/gluonhq/gluon-samples). Gluon is a company that maintains JavaFX and provides libraries that give us a layer of abstraction between our code and the device — be it desktop, Android, or iOS. It has some interesting implications: for example, you will see in the code that we check if we are on the desktop instead of Android, because if yes then we need to provide window size for our app. If we are on Android, we can just let the app’s window take the whole screen. If you decide to write something more complex with this tech stack, you will quickly see that you can use Gluon’s libraries and JavaFX (maybe together with [ScalaFX](https://scalafx.github.io/)) to achieve the same results other developers get by tinkering with Android SDK, while you are writing code that can be easily re-used on other platforms as well.

In the `pom.xml`

of HelloScala you will find a list of plugins and dependencies our example app uses. Let’s take a look at some of them.

- We will use Java 16 and Scala 2.13.
[A tiny Scala library](https://mvnrepository.com/artifact/org.scalameta/svm-subs)which resolves[this problem](https://github.com/scala/bug/issues/11634)in the interaction between Scala 2.13 and GraalVM Native Image.- For the GUI we will use JavaFX 16.
- We will use two Gluon libraries:
[Glisten](https://docs.gluonhq.com/charm/javadoc/6.0.6/com.gluonhq.charm.glisten/module-summary.html)and[Attach](https://gluonhq.com/products/mobile/attach/). Glisten enriches JavaFX with additional functionality specifically designed for mobile applications. Attach is an abstraction layer over the underlying platform. For us, it means we should be able to use it to access everything on Android from the local storage to permissions to push notifications. [scala-maven-plugin](https://github.com/davidB/scala-maven-plugin)lets us use Scala in Maven builds*(well, d’oh)*. Thank you, David![gluonfx-maven-plugin](https://github.com/gluonhq/gluonfx-maven-plugin)lets us compile Gluon dependencies and JavaFX code into a native image. In its configuration you will find the`attachList`

with Gluon Attach modules we need:`device`

,`display`

,`storage`

,`util`

,`statusbar`

, and`lifecycle`

. From those we will use directly only`display`

(to set the dimensions of the app’s windows in case we run the app on a desktop and not in the full-screen mode on a mobile) and`util`

(to check if we run the app on a desktop or a mobile), but the others are needed by these two and by Gluon Glisten.[javafx-maven-plugin](https://github.com/openjfx/javafx-maven-plugin)which is a requirement for gluonfx-maven-plugin.

### The code

[HelloScala](https://github.com/makingthematrix/scalaonandroid/tree/main/helloscala) is just a simple example app — the actual Scala code only sets up a few widgets and displays them. The [ Main](https://github.com/makingthematrix/scalaonandroid/blob/main/helloscala/src/main/scala/helloscala/Main.scala) class extends

`MobileApplication`

from the Glisten library and then construct the main view programmatically, in two methods: `init()`

for creating the widgets, and `postInit(Scene)`

for decorating them. Since we want to test the app on our laptop before we install it on a mobile, we use `postInit`

also to check on which platform the app is being run, and if it’s a desktop, we set the dimensions on the app’s window. In the case of a mobile it’s not necessary — our app will take the whole available space on the screen.Another way to set up and display widgets in JavaFX is to use a WYSIWYG editor called [Scene Builder](https://gluonhq.com/products/scene-builder/) which generates FXML files, a version of XML, that you can then load into your app. You can see how it is done in another example: [HelloFXML](https://github.com/makingthematrix/scalaonandroid/tree/main/HelloFXML). For more complex applications, you will probably mix those two approaches: FXML for more-or-less static views and programmatically set up widgets in places where the UI within one view changes in reaction to events (think, for example, of a scrollable list of incoming messages).

### How to run the app

Building an Android native image takes time, so we want to avoid doing it too often. Even before running the app for the first time, you should invest some time in unit, component, and integration tests, so that if you change something in your app you could still be sure it works correctly even before any manual testing. Then, to check how your GUI looks like and works, use:

```
mvn gluonfx:run
```


If everything looks fine, build the native image… but first, for your desktop:

```
mvn gluonfx:build gluonfx:nativerun
```


After all, we work on a cross-platform solution here. Unless you want to test features of your app that will only work on a mobile device, you can first run it as a standalone desktop application. This will again let you test some layers of the app without actually running it on an Android device. And then, if all looks good, or if you decide to skip this step:

```
mvn -Pandroid gluonfx:build gluonfx:package
```


Successful execution of this command will create an APK file in the` target/client/aarch64-android/gvm`

directory. Connect your Android phone to the computer with a USB cable, give the computer permission to send files to the phone, and type `adb devices`

to check if your phone is recognized. It should display something like this in the console:

```
> adb devices
List of devices attached
16b3a5c8 device
```


Now you should be able to install the app on the connected device with `adb install <path to APK>`

and a moment later you should see a new icon on your device’s main screen. When you click on the icon, it should open approximately the same screen as the desktop version of your app.

Installation might not work for a number of reasons, one of the most popular being that your Android simply does not allow installing apps this way. Go to Settings, find “Developers options”, and there enable “USB debugging” and “Install via USB”.

If everything works, and you see the app’s screen on your device, type `adb logcat | grep GraalCompiled`

to see the log output. Now you can click the button with the magnifying glass icon on the app’s screen, and you should see `"log something from Scala"`

printed to the console. Of course, before you write a more complex app, please look into plugins in the IDE of your choice that can display logs from `adb logcat`

in a better way. For example

Here’s a [screenshot](https://github.com/makingthematrix/scalaonandroid/blob/main/helloscala/helloscala.png) of what the app looks like when you open it.

## Next Steps and Other Useful Reading

If you managed to build one of the example apps and want to code something more complex, there are at least a few ways you can learn how to do it:

-
Take a look at these articles about the history of Scala on Android and a discussion of other ways to write Android apps:

[#1](https://makingthematrix.wordpress.com/2021/03/17/scala-on-android/),[#2](https://www.scalawilliam.com/scala-android-opportunity/). - Read more and experiment with
[JavaFX](https://openjfx.io/). You can start with its official documentation and with[this huge list of tutorials by Jacob Jenkov](http://tutorials.jenkov.com/javafx/index.html). - Install
[Scene Builder](https://gluonhq.com/products/scene-builder/)and learn how to build GUI with it. Apart from the docs, you can find a lot of tutorials about it on YouTube. - Look through
[Gluon’s documentation of Glisten and Attach](https://docs.gluonhq.com/)to learn how to make your app look better on a mobile device, and how to get access to your device’s features. - Download an example from
[Gluon’s list of samples](https://docs.gluonhq.com/)and rewrite it to Scala. And when you do, let me know! - Look into
[ScalaFX](https://scalafx.github.io/)— a more declarative, Scala-idiomatic wrapper over JavaFX. - Download some other examples from
[the “Scala on Android” repository on GitHub](https://github.com/makingthematrix/scalaonandroid). Contact me, if you write an example app of your own and want me to include it. - Join us on the official Scala discord — we have a
[#scala-android channel](https://discord.gg/UuDawpq7)there. - There is also an
[#android channel](https://discord.gg/XHMt6Yq4)on the “Learning Scala” discord. - Finally, if you have any questions,
[you can always find me on X](https://x.com/makingthematrix).

---

## Source: https://docs.scala-lang.org/tutorials/scala-with-maven.html

By Adrian Null

## Introduction

[Maven](https://maven.apache.org) is a build/project management tool. It favours “convention over configuration”; it can greatly simplify builds for “standard” projects and a Maven user can usually understand the structure of another Maven project just by looking at its `pom.xml`

(Project Object Model). Maven is a plugin-based architecture, making it easy to add new libraries and modules to existing projects. For example, adding a new dependency usually involves only 5 extra lines in the `pom.xml`

. These “artifacts” are downloaded from repositories such as [The Central Repository](https://maven.org).

You can also check out the official [example project](https://github.com/scala/scala-module-dependency-sample) which uses the same Scala plugin we will show here.

## Jumping Ahead

If you’re familiar with Maven, you can go ahead with the [Scala Maven Plugin](https://github.com/davidB/scala-maven-plugin).

## The Scala Maven Plugin

We’ll be using the Scala Maven Plugin ([GitHub repo](https://github.com/davidB/scala-maven-plugin), [website](https://davidb.github.io/scala-maven-plugin)) (formerly known as the maven-scala-plugin; renamed to honour the new naming policy where only Maven core plugins are prefixed with “maven”), by far the dominant plugin for Scala projects. *Note: the plugin includes Scala from the Central Repository so there’s no need to install it yourself if you’re compiling with Maven.*

## Getting Maven

### Linux (Debian)

On Debian and Debian-derivatives, Maven is usually available via `apt-get`

. Just do `(sudo) apt-get install maven`

and you’re good to go.

### OSX

OSX prior to 10.9 (Mavericks) comes with Maven 3 built in.
If you don’t have it, you can get it with the package managers [MacPorts](https://macports.org), [Homebrew](https://brew.sh), or [Fink](https://fink.sf.net).
The Scala Maven Plugin requires Maven 3.0+

### Manually (Red Hat Linux, OSX, Windows)

You can download Maven from its [Apache homepage](https://maven.apache.org/download.html). After extracting it (`tar -zxvf apache-maven-X.X.X-bin.tar.gz`

, or use something like [7-zip](https://7-zip.org)) to your directory of choice (on Linux and OSX, Unix-like systems, [I like to put them in /opt/](https://unix.stackexchange.com/questions/63531/). On Windows I would probably put this in

`C:/`

), you need to add Maven to your environment Path variable:- Linux/OSX (option 1): Create a symlink to
`/usr/bin`

, which is already on your Path`ln -s /usr/bin/mvn /opt/apache-maven-X.X.X/bin/mvn`


- Linux/OSX (option 2): Add the Maven
`bin`

folder directly to your path, using your[shell configuration](https://wikipedia.org/wiki/Unix_shell#Configuration_files_for_shells)file (e.g.`~/.bash_profile`

)- Add
`export PATH=$PATH:/opt/apache-maven-X.X.X/bin`

to`.bash_profile`

(or whatever profile for the shell you use) - Example:
`echo "export PATH=$PATH:/opt/apache-maven-X.X.X/bin" >> ~/.bash_profile`


- Add
- Linux/OSX (option 3): Make a
`mvn`

shell script in an existing path location- Example: you have
`$HOME/bin`

in your path - Put the folder you extracted in
`$HOME/bin`

(`mv apache-maven-X.X.X "$HOME/bin/"`

) - Create a file
`mvn`

in`$HOME/bin`

- Add
`"$HOME/bin/apache-maven-X.X.X/bin/mvn" $@`

to it, and`chmod u+x mvn`

to make it executable - This is probably the least intrusive way;
`$HOME/bin`

is usually added to the user’s path by default, and if not, it’s a useful thing to do/have anyways. The shell script simply invokes the Maven location (which is at some other location) and passes on the arguments

- Example: you have
- Windows
- Hit Start. Right click on “My Computer” and go to “Properties”
- This should bring you to “Control Panel -> System and Security -> System”, giving an overview of your computer
- On the left sidebar there should be four options; click on “Advanced system settings” (fourth one)
- Under the “Advanced” tab, hit “Environment Variables…” in the bottom right
- Note: I recommend creating/editing your User variables (top box). You can do the same with System variables though (bottom box)
- Create a new variable called “MAVEN3_HOME”. Point this to your Maven folder (e.g.
`C:\apache-maven-X.X.X`

). Use backslashes to be safe, and do not include a trailing slash - Create a new variable called “MAVEN3_BIN” with this value:
`%MAVEN3_HOME%\bin`

- Edit your Path variable: being careful not to change anything else, append
`;%MAVEN3_BIN%`

to it - You’ll need to restart cmd to see these changes


## Creating Your First Project

The easiest way to create new projects is using an [“archetype”](https://maven.apache.org/archetype/maven-archetype-plugin/). An archetype is a general skeleton structure, or template for a project. Think back to “convention over configuration”; in our case, the Scala Maven Plugin provides an archetype for scala projects.

You run the archetype plugin like this:

```
mvn archetype:generate -DarchetypeGroupId=net.alchim31.maven -DarchetypeArtifactId=scala-archetype-simple
```


If this is your first time, you’ll notice that Maven is downloading many jar files. Maven resolves dependencies and downloads them as needed (and only once). Right now, Maven is downloading its core plugins.

Next, Maven will ask you for a groupId, artifactId, and package. You can read the [guide to naming conventions](https://maven.apache.org/guides/mini/guide-naming-conventions.html), but in short:

- groupId: inverted domain name (e.g. com.my-organization)
- artifactId: project name (e.g. playground-project)
- version: anything you want, but I recommend you read and follow the guidelines for
[Semantic Versioning](https://semver.org)(e.g. 0.0.1) - package: the default is the groupId, but you can change this (e.g. com.my-organization)

The groupId and artifactId together should serve as a globally unique identifier for your project

When it’s done, you should see a new folder named with the artifactId. `cd`

into it and run:

```
mvn package
```


You’ll see Maven downloading dependencies including the Scala library (as mentioned above), [JUnit](https://junit.org), [ScalaTest](https://scalatest.org), and [Specs2](https://specs2.org) (the latter three are test frameworks; the archetype includes an example “Hello world” program, and tests with each of the frameworks).

### Explaining this Archetype

In your project root, you’ll see a `pom.xml`

, `src`

folder, and `target`

folder (target folder only appears after building). *Note: this archetype also includes a .gitignore*

Inside the `src`

folder you’ll see `main`

and `test`

; `main`

includes your application code, and `test`

includes your test suites. Inside each of those you’ll find a `scala`

folder, followed by your package structure (actually, `test/scala`

includes a sample package, but you should replace this with your own package and tests). If you want to mix Scala and Java source code, simply add a `java`

folder inside `main`

or `test`

.

`target`

includes generated/built files, such as `.class`

and `.jar`

files. You can read about `pom.xml`

at the [Maven page](https://maven.apache.org/pom.html).

Example structure:

- pom.xml
- src
- main
- scala
- com/my-package/… *.scala

- java
- com/my-package/… *.java


- scala
- test
- scala
- com/my-package/… *.scala

- java
- com/my-package/… *.java


- scala

- main
- target …

Again, you can read more about the Scala Maven Plugin at its [website](https://davidb.github.io/scala-maven-plugin).

### Creating a Jar

By default, the jar created by the Scala Maven Plugin doesn’t include a `Main-Class`

attribute in the manifest. I had to add the [Maven Assembly Plugin](https://maven.apache.org/plugins/maven-assembly-plugin/) to my `pom.xml`

in order to specify custom attributes in the manifest. You can check the latest version of this plugin at the [project summary](https://maven.apache.org/plugins/maven-assembly-plugin/summary.html) or at [The Central Repository](https://search.maven.org/#search%7Cga%7C1%7Ca%3A%22maven-assembly-plugin%22)

```
<project ...>
<modelVersion>X.X.X</modelVersion>
...
<licenses>
...
</licenses>
<properties>
...
</properties>
<dependencies>
...
</dependencies>
<build>
...
<plugins>
...
<plugin>
<groupId>org.apache.maven.plugins</groupId>
<artifactId>maven-assembly-plugin</artifactId>
<version>2.4</version>
<configuration>
<descriptorRefs>
<descriptorRef>jar-with-dependencies</descriptorRef>
</descriptorRefs>
<archive>
<manifest>
<mainClass>com.your-package.MainClass</mainClass>
</manifest>
</archive>
</configuration>
<executions>
<execution>
<phase>package</phase>
<goals>
<goal>single</goal>
</goals>
</execution>
</executions>
</plugin>
</plugins>
</build>
</project>
```


After adding this, `mvn package`

will also create `[artifactId]-[version]-jar-with-dependencies.jar`

under `target`

. *Note: this will also copy the Scala library into your Jar. This is normal. Be careful that your dependencies use the same version of Scala, or you will quickly end up with a massive Jar.*

### Useful commands

`mvn dependency:copy-dependencies`

: copy all libraries and dependencies to the`target/dependency`

folder`mvn clean`

`mvn package`

: compile, run tests, and create jar

## Adding Dependencies

The first thing I do is look for “Maven” in the project page. For example, Google’s [Guava] page includes [Maven Central links](https://search.maven.org/#artifactdetails%7Ccom.google.guava%7Cguava%7C14.0.1%7Cbundle). As you can see in the previous link, The Central Repository conveniently includes the snippet you have to add to your `pom.xml`

on the left sidebar.

If you can’t find Maven information at the project page, try a Google search for “[project name] maven”. Sometimes, you still won’t find anything. For [scopt](https://github.com/scopt/scopt) (Scala command line option parser), I couldn’t find the latest version from Google. However, [manually searching The Central Repository did](https://search.maven.org/#search%7Cga%7C1%7Cscopt)

Afterwards, running

```
mvn package
```


Will download any new dependencies before packaging

## Other Useful Reading

I’m not going to explain all of Maven in this tutorial (though I hope to add more in the future, because I do feel that the resources are a bit scattered), so here are some useful articles:

[Maven Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)(explanation of goals like clean, package, install)

---

## Source: https://docs.scala-lang.org/toolkit/introduction.html

## What is the Scala Toolkit?

The Scala Toolkit is a set of libraries designed to effectively perform common programming tasks. It includes tools for working with files and processes, parsing JSON, sending HTTP requests, and unit testing.

The Toolkit supports:

- Scala 3 and Scala 2
- JVM, Scala.js, and Scala Native

Use cases for the Toolkit include:

- short-lived programs running on the JVM, to scrape a website, to collect and transform data, or to fetch and process some files,
- frontend scripts that run on the browser and power your websites,
- command-line tools packaged as native binaries for instant startup

[
](/toolkit/testing-intro.html)

#### Tests

Testing code with MUnit.

[
](/toolkit/os-intro.html)

#### Files and Processes

Writing files and running processes with OS-Lib.

[
](/toolkit/json-intro.html)

#### JSON

Parsing JSON and serializing objects to JSON with uPickle.

[
](/toolkit/http-client-intro.html)

#### HTTP Requests

Sending HTTP requests and uploading files with sttp.

[
](/toolkit/web-server-intro.html)

#### Web servers

Building web servers with Cask.

## What are these tutorials?

This series of tutorials focuses on short code examples, to help you get started quickly.

If you need more in-depth information, the tutorials include links to further documentation for all of the libraries in the toolkit.

## How to run the code?

You can follow the tutorials regardless of how you choose to run your Scala code. The tutorials focus on the code itself, not on the process of running it.

Ways to run Scala code include:

- in your
**browser**with[Scastie](https://scastie.scala-lang.org)- pros: zero installation, online sharing
- cons: single-file only, online-only

- interactively in the Scala
**REPL**(Read/Eval/Print Loop)- pros: interactive exploration in the terminal
- cons: doesn’t save your code anywhere

- interactively in a
**worksheet**in your IDE such as[IntelliJ](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html)or[Metals](http://scalameta.org/metals/)- pros: interactive exploration in a GUI
- cons: requires worksheet environment to run

- in
**scripts**, using[Scala CLI](https://scala-cli.virtuslab.com)- pros: terminal-based workflow with little setup
- cons: may not be suitable for large projects

- using a
**build tool**(such as[sbt](https://www.scala-sbt.org)or[mill](https://com-lihaoyi.github.io/mill/))- pros: terminal-based workflow for projects of any size
- cons: requires some additional setup and learning

- using an
**IDE**such as[IntelliJ](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html)or[Metals](http://scalameta.org/metals/)- pros: GUI based workflow for projects of any size
- cons: requires some additional setup and learning


These choices, with their pros and cons, are common to most programing languages. Feel free to use whichever option you’re most comfortable with.

---

## Source: https://docs.scala-lang.org/overviews/index.html

# Guides and Overviews

## Standard Library

Guides and overviews covering the Scala standard library.

Scala's Collection Library.

**Contents**

[Introduction](/overviews/collections-2.13/introduction.html)[Mutable and Immutable Collections](/overviews/collections-2.13/overview.html)[Trait Iterable](/overviews/collections-2.13/trait-iterable.html)[The sequence traits Seq, IndexedSeq, and LinearSeq](/overviews/collections-2.13/seqs.html)[Concrete Immutable Collection Classes](/overviews/collections-2.13/concrete-immutable-collection-classes.html)[Concrete Mutable Collection Classes](/overviews/collections-2.13/concrete-mutable-collection-classes.html)[Arrays](/overviews/collections-2.13/arrays.html)[Strings](/overviews/collections-2.13/strings.html)[Performance Characteristics](/overviews/collections-2.13/performance-characteristics.html)[Equality](/overviews/collections-2.13/equality.html)[Views](/overviews/collections-2.13/views.html)[Iterators](/overviews/collections-2.13/iterators.html)[Creating Collections From Scratch](/overviews/collections-2.13/creating-collections-from-scratch.html)[Conversions Between Java and Scala Collections](/overviews/collections-2.13/conversions-between-java-and-scala-collections.html)

This page describes the main changes for collection users that migrate to Scala 2.13 and shows how to cross-build projects with Scala 2.11 / 2.12 and 2.13.

These pages describe the architecture of the collections framework introduced in Scala 2.13. Compared to the Collections API you will find out more about the internal workings of the framework.

In this document you will learn how the collections framework helps you define your own collections in a few lines of code, while reusing the overwhelming part of collection functionality from the framework.

This guide shows how to write operations that can be applied to any collection type and return the same collection type, and how to write operations that can be parameterized by the type of collection to build.

## Language

Guides and overviews covering features in the Scala language.

Everything you need to know about compatibility and migration to Scala 3.

A detailed tutorial to cover all the features involved in writing macros in Scala 3.

Value classes are a new mechanism in Scala to avoid allocating runtime objects. This is accomplished through the definition of new AnyVal subclasses.

An overview over the TASTy format aimed at end-users of the Scala language.

String Interpolation allows users to embed variable references directly in processed string literals. Here’s an example:

```
val name = "James"
println(s"Hello, $name") // Hello, James
```


In the above, the literal `s"Hello, $name"`

is a processed string literal. This means that the compiler does some additional work to this literal. A processed string literal is denoted by a set of characters preceding the ". String interpolation was introduced by SIP-11, which contains all details of the implementation.
Scala 2.10 introduced a new feature called implicit classes. An implicit class is a class marked with the implicit keyword. This keyword makes the class’ primary constructor available for implicit conversions when the class is in scope.

A light introduction to the Scala language, focused on Scala 2. [Now updated for Scala 3](/scala3/book/introduction.html), we are in the process of merging the two.

## Authoring Libraries

Guides for contributing open source libraries to the Scala ecosystem.

Lists all the tools that library authors should setup to publish and document their libraries.

## Parallel and Concurrent Programming

Complete guides covering some of Scala's libraries for parallel and concurrent programming.

Futures provide a way to reason about performing many operations in parallel– in an efficient and non-blocking way. A Future is a placeholder object for a value that may not yet exist. Generally, the value of the Future is supplied concurrently and can subsequently be used. Composing concurrent tasks in this way tends to result in faster, asynchronous, non-blocking parallel code.

Scala's Parallel Collections Library.

**Contents**

## Compatibility

What works with what (or doesn't).

Which Scala versions work on what JDK versions

When two versions of Scala are binary compatible, it is safe to compile your project on one Scala version and link against another Scala version at run time. Safe run-time linkage (only!) means that the JVM does not throw a (subclass of) LinkageError when executing your program in the mixed scenario, assuming that none arise when compiling and running on the same version of Scala. Concretely, this means you may have external dependencies on your run-time classpath that use a different version of Scala than the one you’re compiling with, as long as they’re binary compatible. In other words, separate compilation on different binary compatible versions does not introduce problems compared to compiling and running everything on the same version of Scala.

A diverse and comprehensive set of libraries is important to any productive software ecosystem. While it is easy to develop and distribute Scala libraries, good library authorship goes beyond just writing code and publishing it. In this guide, we cover the important topic of Binary Compatibility.

We regularly publish 'nightlies' of both Scala 3 and Scala 2 so that users can preview and test the contents of upcoming releases. Here's how to find and use these versions.

## Tools

Reference material on core Scala tools like the Scala REPL and Scaladoc generation.

The Scala REPL is a tool (`scala`

) for evaluating expressions in Scala.

The `scala`

command will execute a source script by wrapping it in a template and then compiling and executing the resulting program

Updates in Scala 3 to Scala’s API documentation generation tool.

Scala's API documentation generation tool.

**Contents**

## Compiler

Guides and overviews covering the Scala compiler: compiler plugins, reflection, and metaprogramming tools such as macros.

Scala's runtime/compile-time reflection framework.

**Contents**

Scala's metaprogramming framework.

**Contents**

Quasiquotes are a convenient way to manipulate Scala syntax trees.

**Contents**

Compiler plugins permit customizing and extending the Scala compiler. This tutorial describes the plugin facility and walks you through how to create a simple plugin.

Various options to control how scalac compiles your code.

A new engine for more user-friendly error messages, printing chains of dependent implicits and colored found/required type diffs.

The compiler can perform various optimizations.

## Legacy

Guides covering features no longer relevant to recent Scala versions (2.12+).

Scala's Collection Library.

**Contents**

[Introduction](/overviews/collections/introduction.html)[Mutable and Immutable Collections](/overviews/collections/overview.html)[Trait Traversable](/overviews/collections/trait-traversable.html)[Trait Iterable](/overviews/collections/trait-iterable.html)[The sequence traits Seq, IndexedSeq, and LinearSeq](/overviews/collections/seqs.html)[Sets](/overviews/collections/sets.html)[Maps](/overviews/collections/maps.html)[Concrete Immutable Collection Classes](/overviews/collections/concrete-immutable-collection-classes.html)[Concrete Mutable Collection Classes](/overviews/collections/concrete-mutable-collection-classes.html)[Arrays](/overviews/collections/arrays.html)[Strings](/overviews/collections/strings.html)[Performance Characteristics](/overviews/collections/performance-characteristics.html)[Equality](/overviews/collections/equality.html)[Views](/overviews/collections/views.html)[Iterators](/overviews/collections/iterators.html)[Creating Collections From Scratch](/overviews/collections/creating-collections-from-scratch.html)[Conversions Between Java and Scala Collections](/overviews/collections/conversions-between-java-and-scala-collections.html)[Migrating from Scala 2.7](/overviews/collections/migrating-from-scala-27.html)

These pages describe the architecture of the Scala collections framework in detail. Compared to the Collections API you will find out more about the internal workings of the framework. You will also learn how this architecture helps you define your own collections in a few lines of code, while reusing the overwhelming part of collection functionality from the framework.

---

## Source: https://docs.scala-lang.org/books.html

# Books

More books about Scala are published every year. This is only a selection of the available titles.

**Updated for Scala 3**

This book is co-authored by the language’s designer, Martin Odersky. It provides depth and clarity on the diverse features of the language. The book provides both an authoritative reference for Scala and a systematic tutorial covering all the features in the language. Once you are familiar with the basics of Scala you will appreciate having this source of invaluable examples and precise explanations of Scala on hand. The book is available from [Artima](https://www.artima.com/shop/programming_in_scala_5ed). Award winning book - [Jolt Productivity award](https://www.drdobbs.com/joltawards/232601431) for Technical Books.

**Updated for Scala 3**

Dean is a well-known member of the Scala community, using Scala recently for streaming data systems at Lightbend and now at Domino Data Lab. This edition covers the new features of Scala 3, with comparisons to Scala 2, both to explain why the changes were made and how they improve Scala, and also to enable developers using mixed Scala 2 and 3 code bases to work effectively. The book is aimed at professional programmers who want a comprehensive, in-depth, yet pragmatic tour of Scala and best practices for using it.

**Updated for Scala 3**

What you get:

- Up to date coverage of Scala 3
- A rapid introduction to Scala for programmers who are competent in another language such as Java, C#, Python, JavaScript, or C++
- Blog-length chunks of information that you can digest quickly
- An organization that you’ll find useful as a quick reference

What you don’t get:

- An introduction into programming or object-oriented design
- Religion about the superiority of one paradigm or another
- Cute or academic examples
- Mind-numbing details about syntax minutiae

**Covers Scala 2.13**

“Hands-on Scala teaches you how to use the Scala programming language in a practical, project-based fashion. This book is designed to quickly teach an existing programmer everything needed to go from “hello world” to building production applications like interactive websites, parallel web crawlers, and distributed systems in Scala. In the process you will learn how to use the Scala language to solve challenging problems in an elegant and intuitive manner.”

**Covers Scala 2 and 3**

“The perfect starting point for your journey into Scala and functional programming. Scala is a multi-style programming language for the JVM that supports both object-oriented and functional programming. Master Scala, and you’ll be well-equipped to match your programming approach to the type of problem you’re dealing with. Packed with examples and exercises, *Get Programming with Scala* is the perfect starting point for developers with some OO knowledge who want to learn Scala and pick up a few FP skills along the way.”

**Free online book**

“The book for new developers who want to learn Scala and have fun. Creative Scala is aimed at developers who have no prior experience in Scala. It is designed to give you a fun introduction to functional programming. We assume you have some very basic familiarity with another programming language but little or no experience with Scala or other functional languages. We’ve chosen what we hope is a fun method to explore functional programming and Scala: computer graphics.”

**Updated for Scala 3**

“Functional programming (FP) is a style of software development emphasizing functions that don’t depend on program state… Functional Programming in Scala is a serious tutorial for programmers looking to learn FP and apply it to the everyday business of coding. The book guides readers from basic techniques to advanced topics in a logical, concise, and clear progression. In it, you’ll find concrete examples and exercises that open up the world of functional programming.”

Forewords by Daniel Spiewak and Martin Odersky.

---

## Source: https://docs.scala-lang.org/tutorials/FAQ/index.html

Frequently asked questions, with *brief* answers and/or links to
longer answers.

This list only includes questions that *actually* come up over and
over again in Scala chat rooms and forums.

## General questions

### Where can I ask Scala questions?

See our [Community page](https://scala-lang.org/community/).

### What’s a good book about Scala?

Our [Books page](https://docs.scala-lang.org/books.html) lists some
especially popular, well-known books.

We don’t have a list of all the Scala books that are out there; there are many.

You can go on the #scala-users room [on
Discord](https://discord.com/invite/scala) or another community forum and
ask for book recommendations. You’ll get more helpful
answers if you provide some information about your background and your
reasons for wanting to learn Scala.

### What’s a good video course about Scala?

Our [Online Courses page](https://docs.scala-lang.org/online-courses.html)
lists some especially popular, well-known courses.

As with books, you can go on the #scala-users room [on
Discord](https://discord.com/invite/scala) or another community forum and
ask for online course recommendations. You’ll get more helpful
answers if you provide some information about your background and your
reasons for wanting to learn Scala.

### Should I learn Scala 2, or Scala 3?

Don’t sweat the decision too much. You can’t go far wrong either way. It isn’t that hard to switch later, in either direction.

Regardless, you should choose Scala 3 unless you have a specific reason to need 2. Scala 3 is the future, and it’s the best version for falling in love with the language and everything it has to offer. Scala 3 has plenty of books, plenty of libraries, and high quality tooling.

That said, many Scala jobs are still Scala 2 jobs. In most cases, the cause of that is simply inertia, especially at large shops. (But it can sometimes be due to availability of specific libraries.)

### Where are Scala jobs advertised?

This is addressed on our [Community page](https://scala-lang.org/community/#scala-jobs).

In short, the only officially sanctioned place is the #jobs channel
[on Discord](https://discord.com/invite/scala).

### Who’s behind Scala?

This is answered [on the Governance page](https://www.scala-lang.org/governance/).

### Can I use the Scala logo?

## Technical questions

### What IDEs are available for Scala?

See [this doc page](https://docs.scala-lang.org/getting-started/scala-ides.html).

### What compiler flags are recommended?

The list of available options is
[here](https://docs.scala-lang.org/overviews/compiler-options/index.html).

What flags people choose varies widely from shop to shop and from
individual to individual. `-Xlint`

is valuable to enable. Some brave
people enable `-Werror`

(formerly `-Xfatal-warnings`

) to make warnings
fatal.

[sbt-tpolecat](https://github.com/typelevel/sbt-tpolecat) is an
opinionated sbt plugin that sets many options automatically, depending
on Scala version; you can see
[here](https://github.com/typelevel/sbt-tpolecat/blob/main/plugin/src/main/scala/io/github/davidgregory084/TpolecatPlugin.scala)
what it sets. Some choices it makes are oriented towards
pure-functional programmers.

### How do I find what some symbol means or does?

A [Stack Overflow answer](https://stackoverflow.com/a/7890032) lays
out what the different kinds of symbol in Scala are and explains the
most commonly used symbols.

Scala allows symbolic method names. So if you see a random-looking
operator like `>=@=>`

in Scala code, it might simply be a method in
some library, rather than having any special meaning in the language
itself.

You can search for symbols on Google. For example, if you want to
know what `<:<`

means, searching for `scala <:<`

works fine. If you
get poor results, try surrounding the symbol with double quotes.

### I want Scala 2.13 (or some other version); why does sbt say it’s using Scala 2.12?

sbt 1.x always uses Scala 2.12 to compile build definitions. Your sbt 1.x build definition is always a Scala 2.12 program.

Regardless, in your `build.sbt`

, you can set `scalaVersion`

to whichever
available distribution you want and your program code will be compiled with that version.

### I want Scala 3. Why does `versionNumberString`

say I’m on 2.13?

To aid migration, Scala 3 currently uses the Scala 2.13 library as-is,
with only minor supplements. That’s why `versionString`

and
`versionNumberString`

report that Scala 2 is in use:

```
Welcome to Scala 3.3.4 (17.0.3, Java OpenJDK 64-Bit Server VM).
Type in expressions for evaluation. Or try :help.
scala> util.Properties.versionNumberString
val res0: String = 2.13.15
```


Note that even the latest Scala 3 version might not use the very latest Scala 2 standard library, since the 3 and 2 release schedules aren’t coordinated.

So how do you ask for the Scala 3 version number? Scala 3 offers
`dotty.tools.dotc.config.Properties.versionNumberString`

, but only if
you have scala3-compiler on the classpath. So that works in the Scala 3
REPL, but won’t work in typical Scala 3 application code.

For an alternative way to detect the Scala 3 version, see
[this gist](https://gist.github.com/romanowski/de14691cab7340134e197419bc48919a).

There is a proposal to provide something easier at [scala/scala3#22144](https://github.com/scala/scala3/issues/22144).

### Why is my (abstract or overridden) `val`

null?

See [this](/tutorials/FAQ/initialization-order.html).

### Which type of collection should I choose?

See the [Scala 2.13 Collections Guide](https://docs.scala-lang.org/overviews/collections-2.13/introduction.html).

### What are context bounds?

It’s syntactic sugar for a context parameter (an `implicit`

parameter in Scala 2, or a `using`

parameter in Scala 3).

More details in this [section of the Scala 3 Book](https://docs.scala-lang.org/scala3/book/ca-context-bounds.html) and this [Stack Overflow answer](https://stackoverflow.com/a/4467012).

### How does `for / yield`

work?

It is syntactic sugar for nested `map`

, `flatMap`

, and `withFilter`

calls.

For an in-depth explanation
see this [Stack Overflow answer](https://stackoverflow.com/a/1059501).

### What is the difference between view, stream and iterator?

### What does `_`

mean?

Many things really, depending on the context.
[This answer on Stack Overflow](https://stackoverflow.com/a/8001065/4111404)
has a good summary of all the meanings it has.

Note that, even if the specific meaning is different,
according to the situation, it usually means *“anything”*.

### Why doesn’t my function literal with `_`

in it work?

Not all function literals (aka lambdas) can be expressed with the `_`

syntax.

Every occurrence of `_`

introduces a new variable. So `_ + _`

means
`(x, y) => x + y`

, not `x => x + x`

. The latter function cannot be
written using the `_`

syntax.

Also, the scope of `_`

is always the smallest enclosing expression.
The scope is determined purely syntactically, during parsing, without
regard to types. So for example, `foo(_ + 1)`

always means ```
foo(x =>
x + 1)
```

; it never means `x => foo(x + 1)`

. The latter function cannot
be written using the `_`

syntax.

See also [SLS 6.23.2](https://scala-lang.org/files/archive/spec/2.13/06-expressions.html#placeholder-syntax-for-anonymous-functions).

### Why couldn’t Scala infer the correct type in my code?

It is difficult to generalize about type inference, because various features of the language affect how your code is construed. There may be several ways to rewrite your code to make the types fall out naturally.

The most straightforward workaround is to supply explicit types in your code.

That may involve specifying an explicit type to a definition, or a type argument to a method.

Type inference is greatly improved in Scala 3. If Scala 2 doesn’t compile your code, it’s worth trying with Scala 3.

Sometimes, using multiple parameter lists helps inference, as explained in [this section of the language tour](https://docs.scala-lang.org/tour/multiple-parameter-lists.html#drive-type-inference).

For common questions about type inference involving `toSet`

, see the discussions on [this ticket](https://github.com/scala/bug/issues/7743) and a related [Q&A](https://stackoverflow.com/questions/5544536/in-scala-2-type-inference-fails-on-set-made-with-toset).

### Can I chain or nest implicit conversions?

Not really, but you can [make it work](https://stackoverflow.com/a/5332804).

However, note that implicit conversions are, in general,
[discouraged](https://contributors.scala-lang.org/t/can-we-wean-scala-off-implicit-conversions/4388).

### Where does Scala look for implicits?

See this [answer on Stack Overflow](https://stackoverflow.com/a/5598107).

### Why do primitive type parameters erase to `Object`

?

So for example, a `List[Int]`

in Scala code will appear to Java as a
`List[Object]`

. The Java type system doesn’t allow primitive types to
appear as type parameters, but couldn’t they appear as their boxed
equivalents, such as `List[java.lang.Integer]`

?

One would hope so, but doing it that way was tried, and it proved impossible.
[This SO question](https://stackoverflow.com/questions/11167430/why-are-primitive-types-such-as-int-erased-to-object-in-scala)
sadly lacks a concise explanation, but it does link to past discussions.

### What’s the difference between methods and functions?

For example, how does a method such as:

```
def square(x: Int): Int = x * x
```


differ from a function value such as:

```
val square: Int => Int = x => x * x
```


For **Scala 2**, there is a [complete answer on Stack Overflow](https://stackoverflow.com/a/2530007/4111404)
and a [summary with practical differences](https://tpolecat.github.io/2014/06/09/methods-functions.html).

In **Scala 3**, the differences are fewer.
[Context functions](https://docs.scala-lang.org/scala3/reference/contextual/context-functions.html)
accept given parameters and
[polymorphic functions](https://docs.scala-lang.org/scala3/reference/new-types/polymorphic-function-types.html)
have type parameters.

It’s standard to use methods most of the time,
except when a function value is actually needed.
[Eta-expansion](https://stackoverflow.com/questions/39445018/what-is-the-eta-expansion-in-scala),
converts methods to functions when needed.
For example, a method such as `map`

expects a function,
but even if you `def square`

as shown above, you can
still `xs.map(square)`

.

### What’s the difference between types and classes?

Types are primarily a compile-time concept. At compile time, every expression is assigned a type by the compiler.

Classes are primarily a runtime concept and are platform-dependent. At runtime on the JVM, every value is either a primitive value or an instance of exactly one class.

Some type information exists only at compile time,
for multiple reasons, most notoriously
[type erasure](https://en.wikipedia.org/wiki/Type_erasure).

For an in-depth treatment of types vs. classes, see the blog post
[“There are more types than classes”](https://typelevel.org/blog/2017/02/13/more-types-than-classes.html).

### Should I declare my parameterless method with or without parentheses?

In other words, should one write `def foo()`

or just `def foo`

?

Answer: by convention, the former is used to indicate that a method has side effects.

For more details, see the Scala Style Guide, [here](https://docs.scala-lang.org/style/naming-conventions.html#parentheses).

### How can a method in a superclass return a value of the “current” type?

Using `this.type`

will only work if you are returning `this`

itself.
`this.type`

means “the singleton type of this instance”. Only `this`

itself has the type `this.type`

; other instances of the same class do
not.

What does work for returning other values of the same type?

Possible solutions include F-bounded polymorphism *(familiar to Java
programmers)*, type members, and the [typeclass
pattern](http://tpolecat.github.io/2013/10/12/typeclass.html).

This [blog post](http://tpolecat.github.io/2015/04/29/f-bounds.html)
argues against F-bounds and in favor of typeclasses;
see also [this Stack Overflow post](https://stackoverflow.com/questions/59813323/advantages-of-f-bounded-polymorphism-over-typeclass-for-return-current-type-prob) for some counterpoint.

### What does `<:<`

mean?

It’s a “type constraint”, and it comes from the standard library,
not from the language itself.
See [this blog post](https://blog.bruchez.name/2015/11/generalized-type-constraints-in-scala.html).

### I dislike requiring callers to wrap optional arguments in `Some(...)`

; is there a better way?

Not really. See [this answer on Stack Overflow](https://stackoverflow.com/a/65256691/4111404).

### Why is `implicit val`

usually recommended over `implicit object`

?

The latter has a singleton type, which is too specific.
See [answer on Stack Overflow](https://stackoverflow.com/a/65258340/4111404).

### I got a `StackOverflowError`

while compiling my code. Is it a compiler bug?

It might be.

To find out, try giving the compiler more stack and see if the error goes away.

It’s possible for the compiler to run out of stack when compiling some kinds of heavily nested code. The JVM’s default stack size is rather small, so this can happen sooner than you might expect.

The stack size can be changed by passing `-Xss...`

at JVM startup, for
example `-Xss16M`

. How to do this depends on what IDE and/or build
tool you are using. For sbt, add it to `.jvmopts`

.

If the stack overflow doesn’t go away no matter how much stack you
give the compiler, then it’s a compiler bug. Please report it on the
[Scala 2 bug tracker](https://github.com/scala/bug/issues) or [Scala 3
bug tracker](https://github.com/scala/scala3/issues), but check
first if it’s a duplicate of an existing ticket.

### I set a setting in sbt but nothing happened. Why?

There could be a lot of reasons. An extremely common one, that almost everyone runs into sooner or later, is that you have a bare setting in a multi-project build.

For example, if you add this to your `build.sbt`

:

```
scalaVersion := "2.13.18"
```


that’s a “bare” setting, and you might expect it to apply build-wide.
But it doesn’t. *It only applies to the root project.*

In many cases one should instead write:

```
ThisBuild / scalaVersion := "2.13.18"
```


Other possibilities include:

- the common settings pattern, where you put shared settings
in a
`val`

, typically named`commonSettings`

, and then`.settings(commonSettings)`

in every project you want to apply to them to. - in interactive usage only,
`set every`


Here’s some further reading:

---

## Source: https://docs.scala-lang.org/scala3/reference

[Edit this page on GitHub](https://github.com/scala/scala3/edit/language-reference-stable/docs/_docs/reference/overview.md)

# Scala 3 Reference

Scala 3 implements many language changes and improvements over Scala 2. In this reference, we discuss design decisions and present important differences compared to Scala 2.

Goals

The language redesign was guided by three main goals:

- Strengthen Scala's foundations. Make the full programming language compatible with the foundational work on the
[DOT calculus](https://infoscience.epfl.ch/record/227176/files/soundness_oopsla16.pdf)and apply the lessons learned from that work. - Make Scala easier and safer to use. Tame powerful constructs such as implicits to provide a gentler learning curve. Remove warts and puzzlers.
- Further improve the consistency and expressiveness of Scala's language constructs.

Corresponding to these goals, the language changes fall into seven categories: (1) Core constructs to strengthen foundations, (2) simplifications and (3) [restrictions](#restrictions), to make the language easier and safer to use, (4) [dropped constructs](#dropped-constructs) to make the language smaller and more regular, (5) [changed constructs](#changes) to remove warts, and increase consistency and usability, (6) [new constructs](#new-constructs) to fill gaps and increase expressiveness, (7) a new, principled approach to metaprogramming that replaces [Scala 2 experimental macros](https://docs.scala-lang.org/overviews/macros/overview.html).

Essential Foundations

These new constructs directly model core features of DOT, higher-kinded types, and the [SI calculus for implicit resolution](https://infoscience.epfl.ch/record/229878/files/simplicitly_1.pdf).

[Intersection types](new-types/intersection-types.html), replacing compound types,[Union types](new-types/union-types.html),[Type lambdas](new-types/type-lambdas.html), replacing encodings using structural types and type projection.[Context functions](contextual/context-functions.html), offering abstraction over given parameters.

Simplifications

These constructs replace existing constructs with the aim of making the language safer and simpler to use, and to promote uniformity in code style.

[Trait parameters](other-new-features/trait-parameters.html)replace[early initializers](dropped-features/early-initializers.html)with a more generally useful construct.[Given instances](contextual/givens.html)replace implicit objects and defs, focussing on intent over mechanism.[Using clauses](contextual/using-clauses.html)replace implicit parameters, avoiding their ambiguities.[Extension methods](contextual/extension-methods.html)replace implicit classes with a clearer and simpler mechanism.[Opaque type aliases](other-new-features/opaques.html)replace most uses of value classes while guaranteeing the absence of boxing.[Top-level definitions](other-new-features/toplevel-definitions.html)replace package objects, dropping syntactic boilerplate.[Export clauses](other-new-features/export.html)provide a simple and general way to express aggregation, which can replace the previous facade pattern of package objects inheriting from classes.[Vararg splices](changed-features/vararg-splices.html)now use the form`xs*`

in function arguments and patterns instead of`xs: _*`

and`xs @ _*`

,[Universal apply methods](other-new-features/creator-applications.html)allow using simple function call syntax instead of`new`

expressions.`new`

expressions stay around as a fallback for the cases where creator applications cannot be used.

With the exception of [early initializers](dropped-features/early-initializers.html) and old-style vararg patterns, all superseded constructs continue to be available in Scala 3.0. The plan is to deprecate and phase them out later.

Value classes (superseded by opaque type aliases) are a special case. There are currently no deprecation plans for value classes, since we might bring them back in a more general form if they are supported natively by the JVM as is planned by [project Valhalla](https://openjdk.java.net/projects/valhalla/).

Restrictions

These constructs are restricted to make the language safer.

[Implicit Conversions](contextual/conversions.html): there is only one way to define implicit conversions instead of many, and potentially surprising implicit conversions require a language import.[Given Imports](contextual/given-imports.html): implicits now require a special form of import, to make the import clearly visible.[Type Projection](dropped-features/type-projection.html): only classes can be used as prefix`C`

of a type projection`C#A`

. Type projection on abstract types is no longer supported since it is unsound.[Multiversal Equality](contextual/multiversal-equality.html): implement an "opt-in" scheme to rule out nonsensical comparisons with`==`

and`!=`

.[infix](changed-features/operators.html): make method application syntax uniform across code bases.

Unrestricted implicit conversions continue to be available in Scala 3.0, but will be deprecated and removed later. Unrestricted versions of the other constructs in the list above are available only under `-source 3.0-migration`

.

Dropped Constructs

These constructs are proposed to be dropped without a new construct replacing them. The motivation for dropping these constructs is to simplify the language and its implementation.

[DelayedInit](dropped-features/delayed-init.html),[Existential types](dropped-features/existential-types.html),[Procedure syntax](dropped-features/procedure-syntax.html),[Class shadowing](dropped-features/class-shadowing.html),[XML literals](dropped-features/xml.html),[Symbol literals](dropped-features/symlits.html),[Auto application](dropped-features/auto-apply.html),[Weak conformance](dropped-features/weak-conformance.html),- Compound types (replaced by
[Intersection types](new-types/intersection-types.html)), [Auto tupling](https://github.com/scala/scala3/pull/4311)(implemented, but not merged).

The date when these constructs are dropped varies. The current status is:

- Not implemented at all:
- DelayedInit, existential types, weak conformance.

- Supported under
`-source 3.0-migration`

:- procedure syntax, class shadowing, symbol literals, auto application, auto tupling in a restricted form.

- Supported in 3.0, to be deprecated and phased out later:
[XML literals](dropped-features/xml.html), compound types.


Changes

These constructs have undergone changes to make them more regular and useful.

[Structural Types](changed-features/structural-types.html): They now allow pluggable implementations, which greatly increases their usefulness. Some usage patterns are restricted compared to the status quo.[Name-based pattern matching](changed-features/pattern-matching.html): The existing undocumented Scala 2 implementation has been codified in a slightly simplified form.[Automatic Eta expansion](changed-features/eta-expansion.html): Eta expansion is now performed universally also in the absence of an expected type. The postfix`_`

operator is thus made redundant. It will be deprecated and dropped after Scala 3.0.[Implicit Resolution](changed-features/implicit-resolution.html): The implicit resolution rules have been cleaned up to make them more useful and less surprising. Implicit scope is restricted to no longer include package prefixes.

Most aspects of old-style implicit resolution are still available under `-source 3.0-migration`

. The other changes in this list are applied unconditionally.

New Constructs

These are additions to the language that make it more powerful or pleasant to use.

[Enums](enums/enums.html)provide concise syntax for enumerations and[algebraic data types](enums/adts.html).[Parameter untupling](other-new-features/parameter-untupling.html)avoids having to use`case`

for tupled parameter destructuring.[Dependent function types](new-types/dependent-function-types.html)generalize dependent methods to dependent function values and types.[Polymorphic function types](new-types/polymorphic-function-types.html)generalize polymorphic methods to polymorphic function values and types.*Current status*: There is a proposal and a merged prototype implementation, but the implementation has not been finalized (it is notably missing type inference support).[Kind polymorphism](other-new-features/kind-polymorphism.html)allows the definition of operators working equally on types and type constructors.make it easier to interoperate with code written in other languages and give more flexibility for avoiding name clashes.`@targetName`

annotations

Metaprogramming

The following constructs together aim to put metaprogramming in Scala on a new basis. So far, metaprogramming was achieved by a combination of macros and libraries such as [Shapeless](https://github.com/milessabin/shapeless) that were in turn based on some key macros. Current Scala 2 macro mechanisms are a thin veneer on top of the current Scala 2 compiler, which makes them fragile and in many cases impossible to port to Scala 3.

It's worth noting that macros were never included in the [Scala 2 language specification](https://scala-lang.org/files/archive/spec/2.13/) and were so far made available only under an `-experimental`

flag. This has not prevented their widespread usage.

To enable porting most uses of macros, we are experimenting with the advanced language constructs listed below. These designs are more provisional than the rest of the proposed language constructs for Scala 3.0. There might still be some changes until the final release. Stabilizing the feature set needed for metaprogramming is our first priority.

[Match Types](new-types/match-types.html)allow computation on types.[Inline](metaprogramming/inline.html)provides by itself a straightforward implementation of some simple macros and is at the same time an essential building block for the implementation of complex macros.[Quotes and Splices](metaprogramming/macros.html)provide a principled way to express macros and staging with a unified set of abstractions.[Type class derivation](contextual/derivation.html)provides an in-language implementation of the`Gen`

macro in Shapeless and other foundational libraries. The new implementation is more robust, efficient and easier to use than the macro.[By-name context parameters](contextual/by-name-context-parameters.html)provide a more robust in-language implementation of the`Lazy`

macro in[Shapeless](https://github.com/milessabin/shapeless).

See Also

[A classification of proposed language features](features-classification.html) is an expanded version of this page that adds the status (i.e. relative importance to be a part of Scala 3, and relative urgency when to decide this) and expected migration cost of each language construct.

---

## Source: https://docs.scala-lang.org/contribute/

Welcome to the guide on contributing to all parts of Scala’s open-source ecosystem!

## Newcomers’ FAQ

If you are reading this page, we welcome you, regardless of your background, to begin contributing to Scala’s open-source ecosystem. We have answered some common questions for you below:

[
](#who-can-contribute-to-open-source)

#### Who can contribute?

Open source is for everyone! If you are reading this you are already a contributor...

[
](#why-should-i-contribute-to-open-source)

#### Why should I contribute?

Giving back to the community has many benefits...

[
](#how-can-i-contribute-to-open-source)

#### How can I contribute?

From friendly documentation to coding a bug-fix, there is lots to do...

[
](#how-do-i-choose-where-to-contribute)

#### Where should I contribute?

If you are already using OSS, or are curious about projects, you can begin right away...

## Ways to start today

### Join the nearest open source spree

The [Scala Center](https://scala.epfl.ch) hosts open source sprees, colocated with other Scala events.
In the spree, regular project maintainers will mentor you to create your first contribution to the project.

[
](https://github.com/scalacenter/sprees)

#### Scala open source sprees

Learn about the next upcoming community spree

[
](https://www.scala-lang.org/events/)

#### Upcoming conferences

See upcoming Scala conferences where you can meet open source maintainers.

### So you want to improve the Scala 3 compiler…

The [Scala 3 compiler](https://github.com/scala/scala3) is an open source project.
If you are curious about contributing but don’t know how to begin, the [Scala Center](https://scala.epfl.ch)
runs the **Scala Compiler Academy** project to onboard and educate new people to the project. You can join the regular
**Compiler Issue Spree**, watch in-depth videos, and read the contributing guide:

[
](https://airtable.com/app94nwzow5R6W1O6/pagvjIzxYnqTTlhwY/form)

#### Join the Compiler Issue Spree

A tri-weekly event where you can get mentored on the compiler. Register for participation here.

[
](https://www.youtube.com/channel/UCIH0OgqE54-KEvYDg4LRhKQ)

#### Compiler Academy videos

In-depth tours of the Scala 3 compiler's internals, aimed to help you get started.

[
](https://github.com/scala/scala3/blob/main/CONTRIBUTING.md)

#### Scala 3 contributing guide

Guide to the Scala 3 Compiler and fixing an issue

#### Which areas are perfect for newcomers?

- Adding new linting options, which help enforce cleaner code.
- Improving the clarity of error messages, so that the user understands better what went wrong.
- Add IDE quick-fix actions to error messages, e.g. PR
[scala/scala3#18314](https://github.com/scala/scala3/pull/18314).

### So you want to write a library…

Read these guides if you are a maintainer of a library, or are thinking of starting a new project:

[
](/overviews/contributors/index.html)

#### Library Authors Guide

Lists all the tools that library authors should setup to publish and document their libraries.

[
](inclusive-language-guide.html)

#### Make Projects more Inclusive

How you can write code and documentation that welcomes all

[
](https://scala-lang.org/conduct)

#### Create a Welcoming Community

Our code of conduct is practical agreement for a healthy community

[
](/overviews/core/binary-compatibility-for-library-authors.html)

#### Binary Compatibility Guide

Evolve your library over time, giving users the confidence to upgrade safely.

### Want to improve Scala itself?

The Scala programming language is an open source project with a very diverse community, where people from all over the world contribute their work, with everyone benefiting from friendly help and advice, and kindly helping others in return.

Read on to learn how to join the Scala community and help everyone make things better.

## Contributing to the Scala project

**What Can I Do?**
That depends on what you want to contribute. Below are some getting started resources for different contribution domains. Please read all the documentation and follow all the links from the topic pages below before attempting to contribute, as many of the questions you have will already be answered.

### Reporting bugs

See our [bug reporting guide](/contribute/bug-reporting-guide.html) to learn
how to efficiently report a bug.

### Contribute

Coordination of contribution efforts takes place on
[Scala Contributors](https://contributors.scala-lang.org/).

[
](/contribute/documentation.html)

#### Documentation

Library API docs, new guides on docs.scala-lang.org, and help with scala-lang.org.

[
](/contribute/guide.html)

#### Bug fixes

Issues with the tools, core libraries and compiler. Also, you can help us by reporting bugs.

[
](/contribute/codereviews.html)

#### Code Reviews

Review pull requests against scala/scala, scala/scala3, scala/scala-lang, scala/docs.scala-lang, and others.

[
](/contribute/corelibs.html)

#### Core Libraries

Update and expand the capabilities of the core (and associated) Scala libraries.

[
](/contribute/tools.html)

#### IDE and Build Tools

Enhance the Scala tools with features for build tools, IDE plug-ins and other related projects.

[
](/contribute/guide.html#larger-changes-new-features)

#### Compiler/Language

Larger language features and compiler enhancements including language specification and SIPs.

### Guidelines

When contributing, please follow:

### Community tickets

All issues can be found in the [Scala bug tracker](https://github.com/scala/bug), or the [Scala 3 issue tracker](https://github.com/scala/scala3/issues). Most issues are labeled
to make it easier to find issues you are interested in.

### Tools and libraries

The Scala ecosystem includes a great many diverse open-source projects
with their own maintainers and community of contributors. Helping out
one of these projects is another way to help Scala. Consider lending
on a hand on a project you’re already using. Or, to find out about
other projects, see the
[Libraries and Tools section](https://scala-lang.org/community/#community-libraries-and-tools)
on our Community page.

### Scala community build

The Scala community build enables the Scala compiler team
to build and test a corpus of
Scala open source projects
against development versions of the Scala compiler and standard
library in order to discover regressions prior to releases.
The build uses Lightbend’s
[dbuild](https://github.com/typesafehub/dbuild) tool,
which leverages [sbt](https://www.scala-sbt.org).

If you’re the maintainer – or just an interested user! – of an
open-source Scala library or tool, please visit the
[community build documentation](https://github.com/scala/community-build/wiki)
for guidelines on what projects are suitable for the community build
and how projects can be added.

## Your questions, answered

### Who can contribute to open source?

**Everyone:**No matter your skills or background, non-technical or otherwise, there is always[some way](#how-can-i-contribute-to-open-source)you can contribute to a project.**Community organisers:**Communities often form around open source projects, perhaps you would like to help grow a community.**Scala learners:**If you are at the start of your Scala journey, once you have a basic understanding of everyday Scala programming, becoming familiar with open source code will show you new techniques, helping you to improve your expertise.**Got a cool idea?**Perhaps you have gained confidence in your skills and are looking to give back to the community, start a new project that fills that perfect niche, or maybe is the life-changing tool everyone never knew they needed.

### Why should I contribute to open source?

**The world is built on OSS:**Open Source Software (OSS) libraries are the flesh on top of the bone structure of the core language itself. They power vast majority of the commercial and non-commercial projects out there alike.**Become more visible:**Contributing is a great way to strengthen your CV. It’s also good from the community standpoint: if you do it consistently, with time, you get to know people, and people get to know you. Such a networking can lead to all sorts of opportunities.**Learn by doing something practical:**Contributing to open source libraries is a great way to learn Scala. A standard practice in open source software is code review – which means you are going to get expert feedback about your code. Learning together with feedback from competent people is much faster than making all the mistakes and figuring them out alone.**Have fun and help out:**Finally, by contributing you improve the projects you are using yourself. Being a part of a maintainer team can be a source of personal satisfaction, and working on an innovative library can be a lot of fun.

The above benefits are something good to achieve regardless of your level of experience.

### How can I contribute to open source?

**Documentation:**Often it is outdated, incomplete, or with mistakes. If you see a way to improve the documentation for a project you are using, you should consider if the project is accepting contributions, in which case you can submit a pull request to include your changes.**Building community:**All projects have users, and users come together to form communities. Managing and growing communities takes coordination and effort.**Issue minimization:**Many of the reported issues found on a project’s issue tracker are hard to reproduce and the reproduction involves a lot of code. However, it is very frequently the case that only a tiny fraction of the reported setup and code is necessary to reproduce the issue. More reproduction code means more work for the maintainer to fix an issue. You can help them considerably by investigating already reported issues in an attempt to make their reproduction as small as possible.**Issue reproduction:**Some reported issues lack reproduction instructions at all! If a maintainer can’t reproduce it, they won’t be able to fix it. Pinning down exact conditions that make an issue manifest is another way to contribute.**Fixing a bug:**If you are comfortable with reproducing an issue, perhaps you would like to trace its origin in code, and even try to build a solution that prevents the issue from occurring.**Adding a feature:**Sometimes projects maintain lists of planned or requested features, and you could assist in bringing those ideas to reality. Although please beware - you should only do this if the core maintainers have already approved the idea for the feature, they are not obligated to accept your additions!**Feel free to ask for help:**While implementing or fixing the feature, it is important to ask for help early when you feel stuck. Even if your code doesn’t work, don’t hesitate to submit a pull request while stating clearly that you need help. More information about the guidelines of good contribution you can find in the[talk by Seth Tisue](https://youtu.be/DTUpSTrnI-0)on how to be a good contributor.**Open-source your own project:**Do you have a pet project you are working on? Is there anything you’re working on at work parts of which are generic enough that you can share them online? Open-sourcing your work is a way to solve a problem for other programmers who may also have it. If you are interested in going open-source, the[Library Author’s Guide](https://docs.scala-lang.org/overviews/contributors/index.html)is an excellent resource on how to get started.

### How do I choose where to contribute?

**Ask yourself, what am I using?**The best project to contribute to is the one that you are using yourself. Take an inventory of your work and hobby projects: what OSS libraries do they use? Have you ever encountered bugs in them? Or have you ever wanted a certain feature implemented? Pick a bug and a feature and commit to fixing or implementing it. Clone the project you are trying to improve, figure out how the tests are written and run there. Write a test for your feature or bug.**Try out an awesome library:**[Scaladex](https://index.scala-lang.org/awesome)is a great place to find new libraries. If you are passionate about contributing but don’t see any attractive opportunities to contribute to projects you are already using, try learning a new Scala library, push it to its limits and see where it can be improved. For best results, spend a lot of time with the library to get a feel of what’s important and what can improve.**Lookout for announcements:**You may want to keep an eye on the Scala Center[LinkedIn](https://www.linkedin.com/company/scala-center/)and[Bluesky](https://bsky.app/profile/scala-lang.org)or[X](https://x.com/scala_lang)to stay up-to-date with the possible contribution opportunities. For example, every year, the Scala Center participates in the Google Summer of Code program where you are paid to work on open source Scala projects over the course of summer.

---

## Source: https://docs.scala-lang.org/style/index.html

This document is intended to outline some basic Scala stylistic guidelines which should be followed with more or less fervency. Wherever possible, this guide attempts to detail why a particular style is encouraged and how it relates to other alternatives. As with all style guides, treat this document as a list of rules to be broken. There are certainly times when alternative styles should be preferred over the ones given here.

[Indentation](indentation.html)[Naming Conventions](naming-conventions.html)[Types](types.html)[Nested Blocks](nested-blocks.html)[Declarations](declarations.html)[Control Structures](control-structures.html)[Method Invocation](method-invocation.html)[Files](files.html)[Scaladoc](scaladoc.html)

### Thanks to

[Daniel Spiewak](https://www.codecommit.com/) and [David Copeland](https://www.naildrivin5.com/) for putting this style guide together, and Simon Ochsenreither for converting it to Markdown.

---

## Source: https://docs.scala-lang.org/cheatsheets/index.html

Scala Cheatsheet

# Scala Cheatsheet

Language

Thanks to [Brendan O’Connor](https://brenocon.com/), this cheatsheet aims to be a quick reference of Scala syntactic constructions. Licensed by Brendan O’Connor under a CC-BY-SA 3.0 license.

| variables | ||
Good
|
Variable. | |
Bad
|
Constant. | |
|
Explicit type. | |
| functions | ||
Good
Bad
|
Define function. Hidden error: without `=` it’s a procedure returning `Unit` ; causes havoc.
|
|
Good
Bad
|
Define function. Syntax error: need types for every arg. |
|
|
Type alias. | |
vs.
|
Call-by-value. Call-by-name (lazy parameters). |
|
|
Anonymous function. | |
vs.
|
Anonymous function: underscore is positionally matched arg. | |
|
Anonymous function: to use an arg twice, have to name it. | |
|
Anonymous function: block style returns last expression. | |
|
Anonymous functions: pipeline style (or parens too). | |
|
Anonymous functions: to pass in multiple blocks, need outer parens. | |
|
Currying, obvious syntax. | |
|
Currying, obvious syntax. | |
|
Currying, sugar syntax. But then: | |
|
Need trailing underscore to get the partial, only for the sugar version. | |
|
Generic type. | |
|
Infix sugar. | |
|
Varargs. | |
| packages | ||
|
Wildcard import. | |
|
Selective import. | |
|
Renaming import. | |
|
Import all from `java.util` except `Date` . |
|
At start of file:
Packaging by scope:
Package singleton:
|
Declare a package. | |
| data structures | ||
|
Tuple literal (`Tuple3` ). |
|
|
Destructuring bind: tuple unpacking via pattern matching. | |
Bad
|
Hidden error: each assigned to the entire tuple. | |
|
List (immutable). | |
|
Paren indexing (
|

`1 :: List(2, 3)`


`1 to 5`


*same as*`1 until 6`


`1 to 10 by 2`


`()`


Equivalent to

`void`

in C and Java.`if (check) happy else sad`


`if (check) happy`


**same as**`if (check) happy else ()`


```
while (x < 5) {
println(x)
x += 1
}
```


```
do {
println(x)
x += 1
} while (x < 5)
```


```
import scala.util.control.Breaks._
breakable {
for (x <- xs) {
if (Math.random < 0.1)
break
}
}
```


[slides](https://www.slideshare.net/Odersky/fosdem-2009-1013261/21)).```
for (x <- xs if x % 2 == 0)
yield x * 10
```


**same as**`xs.filter(_ % 2 == 0).map(_ * 10)`


```
for ((x, y) <- xs zip ys)
yield x * y
```


**same as**```
(xs zip ys) map {
case (x, y) => x * y
}
```


```
for (x <- xs; y <- ys)
yield x * y
```


**same as**```
xs flatMap { x =>
ys map { y =>
x * y
}
}
```


```
for (x <- xs; y <- ys) {
val div = x / y.toFloat
println("%d/%d = %.1f".format(x, y, div))
}
```


[.](https://java.sun.com/javase/6/docs/api/java/util/Formatter.html#syntax)`sprintf`

style```
for (i <- 1 to 5) {
println(i)
}
```


```
for (i <- 1 until 5) {
println(i)
}
```


```
(xs zip ys) map {
case (x, y) => x * y
}
```


Bad

```
(xs zip ys) map {
(x, y) => x * y
}
```


```
val v42 = 42
3 match {
case v42 => println("42")
case _ => println("Not 42")
}
```


`v42`

is interpreted as a name matching any Int value, and “42” is printed.```
val v42 = 42
3 match {
case `v42` => println("42")
case _ => println("Not 42")
}
```


``v42``

with backticks is interpreted as the existing val `v42`

, and “Not 42” is printed.```
val UppercaseVal = 42
3 match {
case UppercaseVal => println("42")
case _ => println("Not 42")
}
```


`UppercaseVal`

is treated as an existing val, rather than a new pattern variable, because it starts with an uppercase letter. Thus, the value contained within `UppercaseVal`

is checked against `3`

, and “Not 42” is printed.`class C(x: R)`


`x`

is only available in class body.`class C(val x: R)`


`var c = new C(4)`


`c.x`


```
class C(var x: R) {
assert(x > 0, "positive please")
var y = x
val readonly = 5
private var secret = 1
def this() = this(42)
}
```


Declare a public member.

Declare a gettable but not settable member.

Declare a private member.

Alternative constructor.

```
new {
...
}
```


`abstract class D { ... }`


`class C extends D { ... }`


`class D(var x: R)`


`class C(x: R) extends D(x)`


`object O extends D { ... }`


`trait T { ... }`


`class C extends T { ... }`


`class C extends D with T { ... }`


Interfaces-with-implementation. No constructor params.

[mixin-able](/tutorials/tour/mixin-class-composition.html).`trait T1; trait T2`


`class C extends T1 with T2`


`class C extends D with T1 with T2`


`class C extends D { override def f = ...}`


`new java.io.File("f")`


`new List[Int]`


Good

`List(1, 2, 3)`


Instead, convention: callable factory shadowing the type.

`classOf[String]`


`x.isInstanceOf[String]`


`x.asInstanceOf[String]`


`x: String`


`Some(42)`


`None`


```
Option(null) == None
Option(obj.unsafeMethod)
```


**but**`Some(null) != None`


`val optStr: Option[String] = None`


**same as**`val optStr = Option.empty[String]`


Factory for empty optional value.

```
val name: Option[String] =
request.getParameter("name")
val upper = name.map {
_.trim
} filter {
_.length != 0
} map {
_.toUpperCase
}
println(upper.getOrElse(""))
```


```
val upper = for {
name <- request.getParameter("name")
trimmed <- Some(name.trim)
if trimmed.length != 0
upper <- Some(trimmed.toUpperCase)
} yield upper
println(upper.getOrElse(""))
```


`option.map(f(_))`


**same as**```
option match {
case Some(x) => Some(f(x))
case None => None
}
```


`option.flatMap(f(_))`


**same as**```
option match {
case Some(x) => f(x)
case None => None
}
```


`optionOfOption.flatten`


**same as**```
optionOfOption match {
case Some(Some(x)) => Some(x)
case _ => None
}
```


`option.foreach(f(_))`


**same as**```
option match {
case Some(x) => f(x)
case None => ()
}
```


`option.fold(y)(f(_))`


**same as**```
option match {
case Some(x) => f(x)
case None => y
}
```


```
option.collect {
case x => ...
}
```


**same as**```
option match {
case Some(x) if f.isDefinedAt(x) => ...
case Some(_) => None
case None => None
}
```


`option.isDefined`


**same as**```
option match {
case Some(_) => true
case None => false
}
```


`true`

if not empty.`option.isEmpty`


**same as**```
option match {
case Some(_) => false
case None => true
}
```


`true`

if empty.`option.nonEmpty`


**same as**```
option match {
case Some(_) => true
case None => false
}
```


`true`

if not empty.`option.size`


**same as**```
option match {
case Some(_) => 1
case None => 0
}
```


`0`

if empty, otherwise `1`

.`option.orElse(Some(y))`


**same as**```
option match {
case Some(x) => Some(x)
case None => Some(y)
}
```


`option.getOrElse(y)`


**same as**```
option match {
case Some(x) => x
case None => y
}
```


`option.get`


**same as**```
option match {
case Some(x) => x
case None => throw new Exception
}
```


`option.orNull`


**same as**```
option match {
case Some(x) => x
case None => null
}
```


`null`

if empty.`option.filter(f)`


**same as**```
option match {
case Some(x) if f(x) => Some(x)
case _ => None
}
```


`option.filterNot(f(_))`


**same as**```
option match {
case Some(x) if !f(x) => Some(x)
case _ => None
}
```


`option.exists(f(_))`


**same as**```
option match {
case Some(x) if f(x) => true
case Some(_) => false
case None => false
}
```


`false`

if empty.`option.forall(f(_))`


**same as**```
option match {
case Some(x) if f(x) => true
case Some(_) => false
case None => true
}
```


`true`

if empty.`option.contains(y)`


**same as**```
option match {
case Some(x) => x == y
case None => false
}
```


`false`

if empty.

---

## Source: https://docs.scala-lang.org/glossary/index.html

##### Glossary from the definitive book on Scala, [Programming in Scala](https://www.artima.com/shop/programming_in_scala).

-
### algebraic data type

A type defined by providing several alternatives, each of which comes with its own constructor. It usually comes with a way to decompose the type through pattern matching. The concept is found in specification languages and functional programming languages. Algebraic data types can be emulated in Scala with case classes.

-
### alternative

A branch of a match expression. It has the form “

`case`

*pattern*=>*expression*.” Another name for alternative is*case*. -
### annotation

An annotation appears in source code and is attached to some part of the syntax. Annotations are computer processable, so you can use them to effectively add an extension to Scala.

-
### anonymous class

An anonymous class is a synthetic subclass generated by the Scala compiler from a new expression in which the class or trait name is followed by curly braces. The curly braces contains the body of the anonymous subclass, which may be empty. However, if the name following new refers to a trait or class that contains abstract members, these must be made concrete inside the curly braces that define the body of the anonymous subclass.

-
### anonymous function

Another name for

[function literal](#function-literal). -
### apply

You can apply a method, function, or closure to arguments, which means you invoke it on those arguments.

-
### argument

When a function is invoked, an argument is passed for each parameter of that function. The parameter is the variable that refers to the argument. The argument is the object passed at invocation time. In addition, applications can take (command line) arguments that show up in the

`Array[String]`

passed to main methods of singleton objects. -
### assign

You can assign an object to a variable. Afterwards, the variable will refer to the object.

-
### auxiliary constructor

Extra constructors defined inside the curly braces of the class definition, which look like method definitions named

`this`

, but with no result type. -
### block

One or more expressions and declarations surrounded by curly braces. When the block evaluates, all of its expressions and declarations are processed in order, and then the block returns the value of the last expression as its own value. Blocks are commonly used as the bodies of functions,

[for expressions](#for-expression),`while`

loops, and any other place where you want to group a number of statements together. More formally, a block is an encapsulation construct for which you can only see side effects and a result value. The curly braces in which you define a class or object do not, therefore, form a block, because fields and methods (which are defined inside those curly braces) are visible from the outside. Such curly braces form a template. -
### bound variable

A bound variable of an expression is a variable that’s both used and defined inside the expression. For instance, in the function literal expression

`(x: Int) => (x, y)`

, both variables`x`

and`y`

are used, but only`x`

is bound, because it is defined in the expression as an`Int`

and the sole argument to the function described by the expression. -
### by-name parameter

A parameter that is marked with a

`=>`

in front of the parameter type, e.g.,`(x: => Int)`

. The argument corresponding to a by-name parameter is evaluated not before the method is invoked, but each time the parameter is referenced by name inside the method. If a parameter is not by-name, it is by-value. -
### by-value parameter

A parameter that is not marked with a

`=>`

in front of the parameter type, e.g.,`(x: Int)`

. The argument corresponding to a by-value parameter is evaluated before the method is invoked. By-value parameters contrast with by-name parameters. -
### class

Defined with the

`class`

keyword, a*class*may either be abstract or concrete, and may be parameterized with types and values when instantiated. In`new Array[String](2)`

, the class being instantiated is`Array`

and the type of the value that results is`Array[String]`

. A class that takes type parameters is called a*type constructor*. A type can be said to have a class as well, as in: the class of type`Array[String]`

is`Array`

. -
### closure

A function object that captures free variables, and is said to be “closed” over the variables visible at the time it is created.

-
### companion class

A class that shares the same name with a singleton object defined in the same source file. The class is the singleton object’s companion class.

-
### companion object

A singleton object that shares the same name with a class defined in the same source file. Companion objects and classes have access to each other’s private members. In addition, any implicit conversions defined in the companion object will be in scope anywhere the class is used.

-
### contravariant

A

*contravariant*annotation can be applied to a type parameter of a class or trait by putting a minus sign (-) before the type parameter. The class or trait then subtypes contravariantly with—in the opposite direction as—the type annotated parameter. For example,`Function1`

is contravariant in its first type parameter, and so`Function1[Any, Any]`

is a subtype of`Function1[String, Any]`

. -
### covariant

A

*covariant*annotation can be applied to a type parameter of a class or trait by putting a plus sign (+) before the type parameter. The class or trait then subtypes covariantly with—in the same direction as—the type annotated parameter. For example,`List`

is covariant in its type parameter, so`List[String]`

is a subtype of`List[Any]`

. -
### currying

A way to write functions with multiple parameter lists. For instance

`def f(x: Int)(y: Int)`

is a curried function with two parameter lists. A curried function is applied by passing several arguments lists, as in:`f(3)(4)`

. However, it is also possible to write a*partial application*of a curried function, such as`f(3)`

. -
### declare

You can

*declare*an abstract field, method, or type, which gives an entity a name but not an implementation. The key difference between declarations and definitions is that definitions establish an implementation for the named entity, declarations do not. -
### define

To

*define*something in a Scala program is to give it a name and an implementation. You can define classes, traits, singleton objects, fields, methods, local functions, local variables,*etc*. Because definitions always involve some kind of implementation, abstract members are declared not defined. -
### direct subclass

A class is a

*direct subclass*of its direct superclass. -
### direct superclass

The class from which a class or trait is immediately derived, the nearest class above it in its inheritance hierarchy. If a class

`Parent`

is mentioned in a class`Child`

’s optional extends clause, then`Parent`

is the direct superclass of`Child`

. If a trait is mentioned in`Child`

’s extends clause, the trait’s direct superclass is the`Child`

’s direct superclass. If`Child`

has no extends clause, then`AnyRef`

is the direct superclass of`Child`

. If a class’s direct superclass takes type parameters, for example class`Child`

extends`Parent[String]`

, the direct superclass of`Child`

is still`Parent`

, not`Parent[String]`

. On the other hand,`Parent[String]`

would be the direct supertype of`Child`

. See[supertype](#supertype)for more discussion of the distinction between class and type. -
### equality

When used without qualification,

*equality*is the relation between values expressed by`==`

. See also[reference equality](#reference-equality). -
### existential type

An existential type includes references to type variables that are unknown. For example,

`Array[T] forSome { type T }`

is an existential type. It is an array of`T`

, where`T`

is some completely unknown type. All that is assumed about`T`

is that it exists at all. This assumption is weak, but it means at least that an`Array[T] forSome { type T }`

is indeed an array and not a banana. -
### expression

Any bit of Scala code that yields a result. You can also say that an expression

*evaluates*to a result or*results*in a value. -
### filter

An

`if`

followed by a boolean expression in a[for expression](#for-expression). In`for(i <- 1 to 10; if i % 2 == 0)`

, the filter is “`if i % 2 == 0`

”. The value to the right of the`if`

is the[filter expression](#filter-expression). Also known as a guard. -
### filter expression

A

*filter expression*is the boolean expression following an`if`

in a[for expression](#for-expression). In`for( i <- 1 to 10 ; if i % 2 == 0)`

,the filter expression is “`i % 2 == 0`

”. -
### first-class function

Scala supports

*first-class functions*, which means you can express functions in function literal syntax, i.e.,`(x: Int) => x + 1`

, and that functions can be represented by objects, which are called[function values](#function-value). -
### for comprehension

A

*for comprehension*is a type of[for expression](#for-expression)that creates a new collection. For each iteration of the`for`

comprehension, the[yield](#yield)clause defines an element of the new collection. For example,`for (i <- (0 until 2); j <- (2 until 4)) yield (i, j)`

returns the collection`Vector((0,2), (0,3), (1,2), (1,3))`

. -
### for expression

A

*for expression*is either a[for loop](#for-loop), which iterates over one or more collections, or a[for comprehension](#for-comprehension), which builds a new collection from the elements of one or more collections. A`for`

expression is built up of[generators](#generator),[filters](#filter), variable definitions, and (in the case of[for comprehensions](#for-comprehension)) a[yield](#yield)clause. -
### for loop

A

*for loop*is a type of[for expression](#for-expression)that loops over one or more collections. Since`for`

loops return unit, they usually produce side-effects. For example,`for (i <- 0 until 100) println(i)`

prints the numbers 0 through 99. -
### free variable

A

*free variable*of an expression is a variable that’s used inside the expression but not defined inside the expression. For instance, in the function literal expression`(x: Int) => (x, y)`

, both variables`x`

and`y`

are used, but only`y`

is a free variable, because it is not defined inside the expression. -
### function

A

*function*can be[invoked](#invoke)with a list of arguments to produce a result. A function has a parameter list, a body, and a result type. Functions that are members of a class, trait, or singleton object are called[methods](#method). Functions defined inside other functions are called[local functions](#local-function). Functions with the result type of`Unit`

are called[procedures](#procedure). Anonymous functions in source code are called[function literals](#function-literal). At run time, function literals are instantiated into objects called[function values](#function-value). -
### function literal

A function with no name in Scala source code, specified with

*function literal*syntax. For example,`(x: Int, y: Int) => x + y`

. -
### function value

A function object that can be invoked just like any other function. A

*function value*’s class extends one of the`FunctionN`

traits (e.g.,`Function0`

,`Function1`

) from package`scala`

, and is usually expressed in source code via[function literal](#function-literal)syntax. A function value is “invoked” when its apply method is called. A function value that captures free variables is a[closure](#closure). -
### functional style

The

*functional style*of programming emphasizes functions and evaluation results and deemphasizes the order in which operations occur. The style is characterized by passing function values into looping methods, immutable data, methods with no side effects. It is the dominant paradigm of languages such as Haskell and Erlang, and contrasts with the[imperative style](#imperative-style). -
### generator

A

*generator*defines a named val and assigns to it a series of values in a[for expression](#for-expression). For example, in`for(i <- 1 to 10)`

, the generator is “`i <- 1 to 10`

”. The value to the right of the`<-`

is the[generator expression](#generator-expression). -
### generator expression

A

*generator expression*generates a series of values in a[for expression](#for-expression). For example, in`for(i <- 1 to 10)`

, the generator expression is “`1 to 10`

”. -
### generic class

A class that takes type parameters. For example, because

`scala.List`

takes a type parameter,`scala.List`

is a*generic class*. -
### generic trait

A trait that takes type parameters. For example, because trait

`scala.collection.Set`

takes a type parameter, it is a*generic trait*. -
### guard

See

[filter](#filter). -
### helper function

A function whose purpose is to provide a service to one or more other functions nearby. Helper functions are often implemented as local functions.

-
### helper method

A

[helper function](#helper-function)that’s a member of a class. Helper methods are often private. -
### immutable

An object is

*immutable*if its value cannot be changed after it is created in any way visible to clients. Objects may or may not be immutable. -
### imperative style

The

*imperative style*of programming emphasizes careful sequencing of operations so that their effects happen in the right order. The style is characterized by iteration with loops, mutating data in place, and methods with side effects. It is the dominant paradigm of languages such as C, C++, C# and Java, and contrasts with the[functional style](#functional-style). -
### initialize

When a variable is defined in Scala source code, you must

*initialize*it with an object. -
### instance

An

*instance*, or class instance, is an object, a concept that exists only at run time. -
### instantiate

To

*instantiate*a class is to make a new object from the class, an action that happens only at run time. -
### invariant

*Invariant*is used in two ways. It can mean a property that always holds true when a data structure is well-formed. For example, it is an invariant of a sorted binary tree that each node is ordered before its right subnode, if it has a right subnode. Invariant is also sometimes used as a synonym for nonvariant: “class`Array`

is invariant in its type parameter.” -
### invoke

You can

*invoke*a method, function, or closure*on*arguments, meaning its body will be executed with the specified arguments. -
### JVM

The

*JVM*is the Java Virtual Machine, or[runtime](#runtime), that hosts a running Scala program. -
### literal

`1`

,`"One"`

, and`(x: Int) => x + 1`

are examples of*literals*. A literal is a shorthand way to describe an object, where the shorthand exactly mirrors the structure of the created object. -
### local function

A

*local function*is a`def`

defined inside a block. To contrast, a`def`

defined as a member of a class, trait, or singleton object is called a[method](#method). -
### local variable

A

*local variable*is a`val`

or`var`

defined inside a block. Although similar to[local variables](#local-variable), parameters to functions are not referred to as local variables, but simply as parameters or “variables” without the “local.” -
### member

A

*member*is any named element of the template of a class, trait, or singleton object. A member may be accessed with the name of its owner, a dot, and its simple name. For example, top-level fields and methods defined in a class are members of that class. A trait defined inside a class is a member of its enclosing class. A type defined with the type keyword in a class is a member of that class. A class is a member of the package in which is it defined. By contrast, a local variable or local function is not a member of its surrounding block. -
### message

Actors communicate with each other by sending each other

*messages*. Sending a message does not interrupt what the receiver is doing. The receiver can wait until it has finished its current activity and its invariants have been reestablished. -
### meta-programming

Meta-programming software is software whose input is itself software. Compilers are meta-programs, as are tools like

`scaladoc`

. Meta-programming software is required in order to do anything with an annotation. -
### method

A

*method*is a function that is a member of some class, trait, or singleton object. -
### mixin

*Mixin*is what a trait is called when it is being used in a mixin composition. In other words, in “`trait Hat`

,”`Hat`

is just a trait, but in “`new Cat extends AnyRef with Hat`

,”`Hat`

can be called a mixin. When used as a verb, “mix in” is two words. For example, you can*mix*traits*in*to classes or other traits. -
### mixin composition

The process of mixing traits into classes or other traits.

*Mixin composition*differs from traditional multiple inheritance in that the type of the super reference is not known at the point the trait is defined, but rather is determined anew each time the trait is mixed into a class or other trait. -
### modifier

A keyword that qualifies a class, trait, field, or method definition in some way. For example, the

`private`

modifier indicates that a class, trait, field, or method being defined is private. -
### multiple definitions

The same expression can be assigned in

*multiple definitions*if you use the syntax`val v1, v2, v3 = exp`

. -
### nonvariant

A type parameter of a class or trait is by default

*nonvariant*. The class or trait then does not subtype when that parameter changes. For example, because class`Array`

is nonvariant in its type parameter,`Array[String]`

is neither a subtype nor a supertype of`Array[Any]`

. -
### operation

In Scala, every

*operation*is a method call. Methods may be invoked in*operator notation*, such as`b + 2`

, and when in that notation,`+`

is an*operator*. -
### parameter

Functions may take zero to many

*parameters*. Each parameter has a name and a type. The distinction between parameters and arguments is that arguments refer to the actual objects passed when a function is invoked. Parameters are the variables that refer to those passed arguments. -
### parameterless function

A function that takes no parameters, which is defined without any empty parentheses. Invocations of parameterless functions may not supply parentheses. This supports the

[uniform access principle](#uniform-access-principle), which enables the`def`

to be changed into a`val`

without requiring a change to client code. -
### parameterless method

A

*parameterless method*is a parameterless function that is a member of a class, trait, or singleton object. -
### parametric field

A field defined as a class parameter.

-
### partially applied function

A function that’s used in an expression and that misses some of its arguments. For instance, if function

`f`

has type`Int => Int => Int`

, then`f`

and`f(1)`

are*partially applied functions*. -
### path-dependent type

A type like

`swiss.cow.Food`

. The`swiss.cow`

part is a path that forms a reference to an object. The meaning of the type is sensitive to the path you use to access it. The types`swiss.cow.Food`

and`fish.Food`

, for example, are different types. -
### pattern

In a

`match`

expression alternative, a*pattern*follows each`case`

keyword and precedes either a*pattern guard*or the`=>`

symbol. -
### pattern guard

In a

`match`

expression alternative, a*pattern guard*can follow a[pattern](#pattern). For example, in “`case x if x % 2 == 0 => x + 1`

”, the pattern guard is “`if x % 2 == 0`

”. A case with a pattern guard will only be selected if the pattern matches and the pattern guard yields true. -
### predicate

A

*predicate*is a function with a`Boolean`

result type. -
### primary constructor

The main constructor of a class, which invokes a superclass constructor, if necessary, initializes fields to passed values, and executes any top-level code defined between the curly braces of the class. Fields are initialized only for value parameters not passed to the superclass constructor, except for any that are not used in the body of the class and can therefore be optimized away.

-
### procedure

A

*procedure*is a function with result type of`Unit`

, which is therefore executed solely for its side effects. -
### reassignable

A variable may or may not be

*reassignable*. A`var`

is reassignable while a`val`

is not. -
### recursive

A function is

*recursive*if it calls itself. If the only place the function calls itself is the last expression of the function, then the function is[tail recursive](#tail-recursive). -
### reference

A

*reference*is the Java abstraction of a pointer, which uniquely identifies an object that resides on the JVM’s heap. Reference type variables hold references to objects, because reference types (instances of`AnyRef`

) are implemented as Java objects that reside on the JVM’s heap. Value type variables, by contrast, may sometimes hold a reference (to a boxed wrapper type) and sometimes not (when the object is being represented as a primitive value). Speaking generally, a Scala variable[refers](#refers)to an object. The term “refers” is more abstract than “holds a reference.” If a variable of type`scala.Int`

is currently represented as a primitive Java`int`

value, then that variable still refers to the`Int`

object, but no reference is involved. -
### reference equality

*Reference equality*means that two references identify the very same Java object. Reference equality can be determined, for reference types only, by calling`eq`

in`AnyRef`

. (In Java programs, reference equality can be determined using`==`

on Java[reference types](#reference-type).) -
### reference type

A

*reference type*is a subclass of`AnyRef`

. Instances of reference types always reside on the JVM’s heap at run time. -
### referential transparency

A property of functions that are independent of temporal context and have no side effects. For a particular input, an invocation of a referentially transparent function can be replaced by its result without changing the program semantics.

-
### refers

A variable in a running Scala program always

*refers*to some object. Even if that variable is assigned to`null`

, it conceptually refers to the`Null`

object. At runtime, an object may be implemented by a Java object or a value of a primitive type, but Scala allows programmers to think at a higher level of abstraction about their code as they imagine it running. See also[reference](#reference). -
### refinement type

A type formed by supplying a base type with a number of members inside curly braces. The members in the curly braces refine the types that are present in the base type. For example, the type of “animal that eats grass” is

`Animal { type SuitableFood = Grass }`

. -
### result

An expression in a Scala program yields a

*result*. The result of every expression in Scala is an object. -
### result type

A method’s

*result type*is the type of the value that results from calling the method. (In Java, this concept is called the return type.) -
### return

A function in a Scala program

*returns*a value. You can call this value the[result](#result)of the function. You can also say the function*results in*the value. The result of every function in Scala is an object. -
### runtime

The Java Virtual Machine, or

[JVM](#jvm), that hosts a running Scala program. Runtime encompasses both the virtual machine, as defined by the Java Virtual Machine Specification, and the runtime libraries of the Java API and the standard Scala API. The phrase at run time (with a space between run and time) means when the program is running, and contrasts with compile time. -
### runtime type

The type of an object at run time. To contrast, a

[static type](#static-type)is the type of an expression at compile time. Most runtime types are simply bare classes with no type parameters. For example, the runtime type of`"Hi"`

is`String`

, and the runtime type of`(x: Int) => x + 1`

is`Function1`

. Runtime types can be tested with`isInstanceOf`

. -
### script

A file containing top level definitions and statements, which can be run directly with

`scala`

without explicitly compiling. A script must end in an expression, not a definition. -
### selector

The value being matched on in a

`match`

expression. For example, in “`s match { case _ => }`

”, the selector is`s`

. -
### self type

A

*self type*of a trait is the assumed type of`this`

, the receiver, to be used within the trait. Any concrete class that mixes in the trait must ensure that its type conforms to the trait’s self type. The most common use of self types is for dividing a large class into several traits (as described in Chapter 29 of[Programming in Scala](https://www.artima.com/shop/programming_in_scala)). -
### semi-structured data

XML data is semi-structured. It is more structured than a flat binary file or text file, but it does not have the full structure of a programming language’s data structures.

-
### serialization

You can

*serialize*an object into a byte stream which can then be saved to a file or transmitted over the network. You can later*deserialize*the byte stream, even on different computer, and obtain an object that is the same as the original serialized object. -
### shadow

A new declaration of a local variable

*shadows*one of the same name in an enclosing scope. -
### signature

*Signature*is short for[type signature](#type-signature). -
### singleton object

An object defined with the object keyword. Each singleton object has one and only one instance. A singleton object that shares its name with a class, and is defined in the same source file as that class, is that class’s

[companion object](#companion-object). The class is its[companion class](#companion-class). A singleton object that doesn’t have a companion class is a[standalone object](#standalone-object). -
### standalone object

A

[singleton object](#singleton-object)that has no[companion class](#companion-class). -
### statement

An expression, definition, or import,

*i.e.*, things that can go into a template or a block in Scala source code. -
### static type

See

[type](#type). -
### structural type

A

[refinement type](#refinement-type)where the refinements are for members not in the base type. For example,`{ def close(): Unit }`

is a structural type, because the base type is`AnyRef`

, and`AnyRef`

does not have a member named`close`

. -
### subclass

A class is a

*subclass*of all of its[superclasses](#superclass)and[supertraits](#supertrait). -
### subtrait

A trait is a

*subtrait*of all of its[supertraits](#supertrait). -
### subtype

The Scala compiler will allow any of a type’s

*subtypes*to be used as a substitute wherever that type is required. For classes and traits that take no type parameters, the subtype relationship mirrors the subclass relationship. For example, if class`Cat`

is a subclass of abstract class`Animal`

, and neither takes type parameters, type`Cat`

is a subtype of type`Animal`

. Likewise, if trait`Apple`

is a subtrait of trait`Fruit`

, and neither takes type parameters, type`Apple`

is a subtype of type`Fruit`

. For classes and traits that take type parameters, however, variance comes into play. For example, because abstract class`List`

is declared to be covariant in its lone type parameter (i.e.,`List`

is declared`List[+A]`

),`List[Cat]`

is a subtype of`List[Animal]`

, and`List[Apple]`

a subtype of`List[Fruit]`

. These subtype relationships exist even though the class of each of these types is`List`

. By contrast, because`Set`

is not declared to be covariant in its type parameter (i.e.,`Set`

is declared`Set[A]`

with no plus sign),`Set[Cat]`

is not a subtype of`Set[Animal]`

. A subtype should correctly implement the contracts of its supertypes, so that the Liskov Substitution Principle applies, but the compiler only verifies this property at the level of type checking. -
### superclass

A class’s

*superclasses*include its direct superclass, its direct superclass’s direct superclass, and so on, all the way up to`Any`

. -
### supertrait

A class’s or trait’s

*supertraits*, if any, include all traits directly mixed into the class or trait or any of its superclasses, plus any supertraits of those traits. -
### supertype

A type is a

*supertype*of all of its subtypes. -
### synthetic class

A synthetic class is generated automatically by the compiler rather than being written by hand by the programmer.

-
### tail recursive

A function is

*tail recursive*if the only place the function calls itself is the last operation of the function. -
### target typing

*Target typing*is a form of type inference that takes into account the type that’s expected. In`nums.filter((x) => x > 0)`

, for example, the Scala compiler infers type of`x`

to be the element type of`nums`

, because the`filter`

method invokes the function on each element of`nums`

. -
### template

A

*template*is the body of a class, trait, or singleton object definition. It defines the type signature, behavior and initial state of the class, trait, or object. -
### trait

A

*trait*, which is defined with the`trait`

keyword, is like an abstract class that cannot take any value parameters and can be “mixed into” classes or other traits via the process known as[mixin composition](#mixin-composition). When a trait is being mixed into a class or trait, it is called a[mixin](#mixin). A trait may be parameterized with one or more types. When parameterized with types, the trait constructs a type. For example,`Set`

is a trait that takes a single type parameter, whereas`Set[Int]`

is a type. Also,`Set`

is said to be “the trait of” type`Set[Int]`

. -
### type

Every variable and expression in a Scala program has a

*type*that is known at compile time. A type restricts the possible values to which a variable can refer, or an expression can produce, at run time. A variable or expression’s type can also be referred to as a*static type*if necessary to differentiate it from an object’s[runtime type](#runtime-type). In other words, “type” by itself means static type. Type is distinct from class because a class that takes type parameters can construct many types. For example,`List`

is a class, but not a type.`List[T]`

is a type with a free type parameter.`List[Int]`

and`List[String]`

are also types (called ground types because they have no free type parameters). A type can have a “[class](#class)” or “[trait](#trait).” For example, the class of type`List[Int]`

is`List`

. The trait of type`Set[String]`

is`Set`

. -
### type constraint

Some

[annotations](#annotation)are*type constraints*, meaning that they add additional limits, or constraints, on what values the type includes. For example,`@positive`

could be a type constraint on the type`Int`

, limiting the type of 32-bit integers down to those that are positive. Type constraints are not checked by the standard Scala compiler, but must instead be checked by an extra tool or by a compiler plugin. -
### type constructor

A class or trait that takes type parameters.

-
### type parameter

A parameter to a generic class or generic method that must be filled in by a type. For example, class

`List`

is defined as “`class List[T] { . . .`

”, and method`identity`

, a member of object`Predef`

, is defined as “`def identity[T](x:T) = x`

”. The`T`

in both cases is a type parameter. -
### type signature

A method’s

*type signature*comprises its name, the number, order, and types of its parameters, if any, and its result type. The type signature of a class, trait, or singleton object comprises its name, the type signatures of all of its members and constructors, and its declared inheritance and mixin relations. -
### uniform access principle

The

*uniform access principle*states that variables and parameterless functions should be accessed using the same syntax. Scala supports this principle by not allowing parentheses to be placed at call sites of parameterless functions. As a result, a parameterless function definition can be changed to a`val`

, or*vice versa*, without affecting client code. -
### unreachable

At the Scala level, objects can become

*unreachable*, at which point the memory they occupy may be reclaimed by the runtime. Unreachable does not necessarily mean unreferenced. Reference types (instances of`AnyRef`

) are implemented as objects that reside on the JVM’s heap. When an instance of a reference type becomes unreachable, it indeed becomes unreferenced, and is available for garbage collection. Value types (instances of`AnyVal`

) are implemented as both primitive type values and as instances of Java wrapper types (such as`java.lang.Integer`

), which reside on the heap. Value type instances can be boxed (converted from a primitive value to a wrapper object) and unboxed (converted from a wrapper object to a primitive value) throughout the lifetime of the variables that refer to them. If a value type instance currently represented as a wrapper object on the JVM’s heap becomes unreachable, it indeed becomes unreferenced, and is available for garbage collection. But if a value type currently represented as a primitive value becomes unreachable, then it does not become unreferenced, because it does not exist as an object on the JVM’s heap at that point of time. The runtime may reclaim memory occupied by unreachable objects, but if an Int, for example, is implemented at run time by a primitive Java int that occupies some memory in the stack frame of an executing method, then the memory for that object is “reclaimed” when the stack frame is popped as the method completes. Memory for reference types, such as`Strings`

, may be reclaimed by the JVM’s garbage collector after they become unreachable. -
### unreferenced

See

[unreachable](#unreachable). -
### value

The result of any computation or expression in Scala is a

*value*, and in Scala, every value is an object. The term value essentially means the image of an object in memory (on the JVM’s heap or stack). -
### value type

A

*value type*is any subclass of`AnyVal`

, such as`Int`

,`Double`

, or`Unit`

. This term has meaning at the level of Scala source code. At runtime, instances of value types that correspond to Java primitive types may be implemented in terms of primitive type values or instances of wrapper types, such as`java.lang.Integer`

. Over the lifetime of a value type instance, the runtime may transform it back and forth between primitive and wrapper types (*i.e.*, to box and unbox it). -
### variable

A named entity that refers to an object. A variable is either a

`val`

or a`var`

. Both`val`

s and`var`

s must be initialized when defined, but only`var`

s can be later reassigned to refer to a different object. -
### variance

A type parameter of a class or trait can be marked with a

*variance*annotation, either[covariant](#covariant)(+) or[contravariant](#contravariant)(-). Such variance annotations indicate how subtyping works for a generic class or trait. For example, the generic class`List`

is covariant in its type parameter, and thus`List[String]`

is a subtype of`List[Any]`

. By default,*i.e.*, absent a`+`

or`-`

annotation, type parameters are[nonvariant](#nonvariant). -
### yield

An expression can

*yield*a result. The`yield`

keyword designates the result of a[for comprehension](#for-comprehension).

---

## Source: https://docs.scala-lang.org/api/all.html

## Latest releases

- Scala 3.8.2
- Scala 3.3.7 LTS
- Scala 2.13.18
- Scala 2.12.21
- Scala 2.11.12
[Scala 2.10.7](https://www.scala-lang.org/api/2.10.7/)

## Nightly builds

- Scala nightly following 3.8.2

## Previous releases

- Scala 3.8.1
- Scala 3.8.0
- Scala 3.7.4
- Scala 3.7.3
- Scala 3.7.2
- Scala 3.7.1
- Scala 3.7.0
- Scala 3.6.4
- Scala 3.6.3
- Scala 3.6.2
- Scala 3.5.2
- Scala 3.5.1
- Scala 3.5.0
- Scala 3.4.3
- Scala 3.4.2
- Scala 3.4.1
- Scala 3.4.0
- Scala 3.3.6 LTS
- Scala 3.3.5 LTS
- Scala 3.3.4 LTS
- Scala 3.3.3 LTS
- Scala 3.3.1 LTS
- Scala 3.3.0 LTS
- Scala 3.2.2
- Scala 3.2.1
- Scala 3.2.0
- Scala 3.1.3
- Scala 3.1.2
- Scala 3.1.1
- Scala 3.1.0
- Scala 3.0.2
- Scala 3.0.1
- Scala 3.0.0
- Scala 2.13.17
- Scala 2.13.16
- Scala 2.13.15
- Scala 2.13.14
- Scala 2.13.13
- Scala 2.13.12
- Scala 2.13.11
- Scala 2.13.10
- Scala 2.13.9
- Scala 2.13.8
- Scala 2.13.7
- Scala 2.13.6
- Scala 2.13.5
- Scala 2.13.4
- Scala 2.13.3
- Scala 2.13.2
- Scala 2.13.1
- Scala 2.13.0
- Scala 2.12.20
- Scala 2.12.19
- Scala 2.12.18
- Scala 2.12.17
- Scala 2.12.16
- Scala 2.12.15
- Scala 2.12.14
- Scala 2.12.13
- Scala 2.12.12
- Scala 2.12.11
- Scala 2.12.10
- Scala 2.12.9
- Scala 2.12.8
- Scala 2.12.7
- Scala 2.12.6
- Scala 2.12.5
- Scala 2.12.4
- Scala 2.12.3
- Scala 2.12.2
- Scala 2.12.1

### Contributors to this page:

---

## Source: https://docs.scala-lang.org/sips/index.html

The **Scala Improvement Process** covers changes to the Scala
language, the Scala compiler, and the core of the Scala standard
library.

## Scala Improvement Process

The *Scala Improvement Process* is a process for submitting
changes to the Scala language. This process aims to evolve Scala
openly and collaboratively.

The process covers the Scala language and compiler and the core of the Scala standard library. (The core is anything that is unlikely to be spun off into a separate module.)

A proposed change requires a design document, called a Scala Improvement Proposal (SIP). The SIP committee meets monthly to discuss, and eventually vote upon, proposals.

A SIP is subject to a [review process](/sips/process-specification.html).
Proposals normally include proposed changes to the
[Scala language specification](https://www.scala-lang.org/files/archive/spec/2.13/).
Before reaching the committee, a proposal normally receives community
discussion and review on the
[Scala Contributors](https://contributors.scala-lang.org/) forum.
Please read the [SIP tutorial](/sips/sip-tutorial.html) or
[the process specification](/sips/process-specification.html) for more
information.

The aim of the Scala Improvement Process is to apply the openness and collaboration that have shaped Scala’s documentation and implementation to the process of evolving the language. The linked documents capture our guidelines, commitments and expectations regarding this process.

Historical note: The SIP replaces the older SID (Scala Improvement Document) process. Completed SID documents remain available in the

[completed section of the SIP list].

---

## Source: https://docs.scala-lang.org/ja/

# Learn Scala

Language

## 最初のステップ

[
](/ja/getting-started/install-scala.html)

##### 入門

あなたのコンピューターに Scala をインストールして、Scala コードを書きはじめよう！

[
](/ja/tour/tour-of-scala.html)

##### Scala ツアー

コア言語機能をひと口大で紹介

[
](/scala3/book/introduction.html)

##### Scala 3 Book

主要な言語仕様のイントロダクションをオンラインブックで読む

[
](/online-courses.html)

##### Online Courses

MOOCs to learn Scala, for beginners and experienced programmers.

[
](/books.html)

##### 書籍（英語のみ）

Printed and digital books about Scala.

[
](/tutorials.html)

##### Tutorials

Take you by the hand through a series of steps to create Scala applications.

## リピーター向け

[
](/api/all.html)

##### API

Scala の全バージョンの API ドキュメント（英語のみ）

[
](/ja/overviews/index.html)

##### Overviews

Scala の多くの機能を網羅する詳細ドキュメント

[
](/style/index.html)

##### スタイルガイド

Scala らしいコードを書くための詳細なガイド（英語のみ）

[
](/ja/cheatsheets/index.html)

##### チートシート

Scala 構文の基礎を網羅する便利なチートシート

[
](/tutorials/FAQ/index.html)

##### Scala よくある質問

Scala 言語機能についてよく聞かれる質問＆回答集（英語のみ）

[
](https://scala-lang.org/files/archive/spec/2.13/)

##### 言語仕様

Scala の形式的言語仕様（英語のみ）

[
](https://docs.scala-lang.org/scala3/reference)

##### Language Reference

Scala 3 の言語仕様

---

## Source: https://docs.scala-lang.org/zh-cn/

# 学习 Scala

Language

## 第一步...

[
](/getting-started.html)

##### 快速开始

在电脑上安装 Scala 然后开始写些 Scala 代码吧！

[
](/zh-cn/tour/tour-of-scala.html)

##### scala之旅

核心语言特性简介

[
](/zh-cn/scala3/book/introduction.html)

##### Scala 3 册子

通过一系列小课程来学习 Scala。

[
](/toolkit/introduction.html)

##### Scala 工具箱

发送 HTTP 请求，写文件，运行进程，解析 JSON...

[
](/online-courses.html)

##### 在线课程

新手和有经验的程序员在 MOOCS 学习 Scala。

[
](/books.html)

##### 书籍

有关 Scala 的印刷和数字化的书籍。

[
](/tutorials.html)

##### 教程

通过一系列步骤，手把手教你创建 Scala 应用。

## 回归用户

[
](/api/all.html)

##### api

各个 Scala 版本的 api 文档

[
](/zh-cn/overviews/index.html)

##### 导引和总览

涵盖 Scala 各种特性的深度分析文档

[
](/style/index.html)

##### 风格引导

深度指导如何写出地道的 Scala 代码

[
](/zh-cn/cheatsheets/index.html)

##### 速查

包含 Scala 基础语法的速查手册

[
](/tutorials/FAQ/index.html)

##### Scala 常见问题

Scala 语言特性的常见问题及答案。

[
](https://scala-lang.org/files/archive/spec/2.13/)

##### 语言规范 v2.x

Scala 2 正式的语言规范。

[
](https://scala-lang.org/files/archive/spec/3.4/)

##### 语言规范 v3.x

Scala 3 正式的语言规范。

[
](https://docs.scala-lang.org/scala3/reference)

##### Scala 3 语言参考

Scala 3 语言参考

---

## Source: https://docs.scala-lang.org/ru/

# Изучаем Scala

## Первые шаги...

[
](/ru/getting-started/install-scala.html)

##### Приступая к работе

Установите Scala на свой компьютер и начните писать код на Scala!

[
](/ru/tour/tour-of-scala.html)

##### Тур по Scala

Вступительный обзор по основным возможностям языка.

[
](/ru/scala3/book/introduction.html)

##### Книга по Scala 3

Изучайте Scala используя серию коротких уроков.

[
](/toolkit/introduction.html)

##### Набор инструментов Scala

Отправка HTTP-запросов, запись файлов, запуск программ, обработка JSON...

[
](/online-courses.html)

##### Онлайн Курсы, Упражнения и Блоги

Обучающие курсы по Scala от новичка до продвинутого уровня.

[
](/books.html)

##### Книги

Напечатанные, а также электронные книги о Scala.

[
](/tutorials.html)

##### Уроки

Пройдемся по серии коротких шагов по созданию Scala приложений.

## Для опытных

[
](/api/all.html)

##### API

Документация по API для каждой версии Scala.

[
](/ru/overviews/index.html)

##### Справочники

Подробные справочники по отдельным разделам языка.

[
](/style/index.html)

##### Стилистика

Детальное руководство по написанию каноничного Scala кода.

[
](/ru/cheatsheets/index.html)

##### Шпаргалка

Краткий справочник, охватывающий основы синтаксиса Scala.

[
](/tutorials/FAQ/index.html)

##### Вопрос-Ответ

Список по наиболее часто задаваемым вопросам с ответами по функционалу Scala.

[
](https://scala-lang.org/files/archive/spec/2.13/)

##### Спецификация v2.x

Официальная спецификация языка Scala 2.

[
](https://scala-lang.org/files/archive/spec/3.4/)

##### Спецификация v3.x

Официальная спецификация языка Scala 3.

[
](https://docs.scala-lang.org/scala3/reference)

##### Справочник по языку Scala 3

Справочник по языку Scala 3.

## Исследуем Scala 3

[
](/scala3/guides/migration/compatibility-intro.html)

##### Руководство по миграции

Руководство, которое поможет вам перейти от Scala 2 к Scala 3.

[
](/ru/scala3/new-in-scala3.html)

##### Новое в Scala 3

Обзор новой функциональности в Scala 3.

[
](/ru/scala3/scaladoc.html)

##### Новая функциональность Scaladoc для Scala 3

Ключевые особенности новой функциональности Scaladoc.

[
](/ru/scala3/talks.html)

##### Выступления

Доступные онлайн выступления о Scala 3.