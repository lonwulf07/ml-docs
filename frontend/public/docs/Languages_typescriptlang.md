# Typescriptlang Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)



---

## Source: https://www.typescriptlang.org/docs/

#### Get Started

Quick introductions based on your background or preference.

#### Handbook

A great first read for your daily TS work.

#### Reference

Deep dive reference materials.

#### Modules Reference

How TypeScript models JavaScript modules.

#### Tutorials

Using TypeScript in several environments.

#### Declaration Files

Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.

#### JavaScript

How to use TypeScript-powered JavaScript tooling.

#### Project Configuration

Compiler configuration reference.

#### Cheat Sheets

Downloadable syntax reference pages for different parts of everyday TypeScript code.

---

## Source: https://www.typescriptlang.org/

ts

const user = {

firstName: "Angela",

lastName: "Davis",

role: "Professor",

}


console.log(user.name)

Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.2339Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.



ts

const user = {

firstName: "Angela",

lastName: "Davis",

role: "Professor",

}


console.log(user.name)

Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.2339Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.

---

## Source: https://www.typescriptlang.org/download/

TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension.

If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.

TypeScript in Your Project

Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install typescript --save-dev

All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

npx tsc

with Visual Studio

For most project types, you can get TypeScript as a package in Nuget for your MSBuild projects, for example an ASP.NET Core app.

The examples below are for more advanced use cases.

Globally Installing TypeScript

It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.

via npm

You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.

To do this, run npm install -g typescript. This will install the latest version (currently 6.0).

via Visual Studio Marketplace

You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio.

There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling.

Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So it's likely that you will still need to keep the above TypeScript dependency around, and you will want to enable isolatedModules.

---

## Source: https://www.typescriptlang.org/docs/handbook/intro.html

About this Handbook

Over 20 years after its introduction to the programming community, JavaScript is now one of the most widespread cross-platform languages ever created. Starting as a small scripting language for adding trivial interactivity to webpages, JavaScript has grown to be a language of choice for both frontend and backend applications of every size. While the size, scope, and complexity of programs written in JavaScript has grown exponentially, the ability of the JavaScript language to express the relationships between different units of code has not. Combined with JavaScript’s rather peculiar runtime semantics, this mismatch between language and program complexity has made JavaScript development a difficult task to manage at scale.

The most common kinds of errors that programmers write can be described as type errors: a certain kind of value was used where a different kind of value was expected. This could be due to simple typos, a failure to understand the API surface of a library, incorrect assumptions about runtime behavior, or other errors. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked).

If you are coming to TypeScript without a JavaScript background, with the intention of TypeScript being your first language, we recommend you first start reading the documentation on either the [Microsoft Learn JavaScript tutorial](https://developer.microsoft.com/javascript/) or read [JavaScript at the Mozilla Web Docs](https://developer.mozilla.org/docs/Web/JavaScript/Guide).
If you have experience in other languages, you should be able to pick up JavaScript syntax quite quickly by reading the handbook.

How is this Handbook Structured

The handbook is split into two sections:

-
**The Handbook**The TypeScript Handbook is intended to be a comprehensive document that explains TypeScript to everyday programmers. You can read the handbook by going from top to bottom in the left-hand navigation.

You should expect each chapter or page to provide you with a strong understanding of the given concepts. The TypeScript Handbook is not a complete language specification, but it is intended to be a comprehensive guide to all of the language’s features and behaviors.

A reader who completes the walkthrough should be able to:

- Read and understand commonly-used TypeScript syntax and patterns
- Explain the effects of important compiler options
- Correctly predict type system behavior in most cases

In the interests of clarity and brevity, the main content of the Handbook will not explore every edge case or minutiae of the features being covered. You can find more details on particular concepts in the reference articles.

-
**Reference Files**The reference section below the handbook in the navigation is built to provide a richer understanding of how a particular part of TypeScript works. You can read it top-to-bottom, but each section aims to provide a deeper explanation of a single concept - meaning there is no aim for continuity.


Non-Goals

The Handbook is also intended to be a concise document that can be comfortably read in a few hours. Certain topics won’t be covered in order to keep things short.

Specifically, the Handbook does not fully introduce core JavaScript basics like functions, classes, and closures. Where appropriate, we’ll include links to background reading that you can use to read up on those concepts.

The Handbook also isn’t intended to be a replacement for a language specification. In some cases, edge cases or formal descriptions of behavior will be skipped in favor of high-level, easier-to-understand explanations. Instead, there are separate reference pages that more precisely and formally describe many aspects of TypeScript’s behavior. The reference pages are not intended for readers unfamiliar with TypeScript, so they may use advanced terminology or reference topics you haven’t read about yet.

Finally, the Handbook won’t cover how TypeScript interacts with other tools, except where necessary. Topics like how to configure TypeScript with webpack, rollup, parcel, react, babel, closure, lerna, rush, bazel, preact, vue, angular, svelte, jquery, yarn, or npm are out of scope - you can find these resources elsewhere on the web.

Get Started

Before getting started with [The Basics](/docs/handbook/2/basic-types.html), we recommend reading one of the following introductory pages. These introductions are intended to highlight key similarities and differences between TypeScript and your favored programming language, and clear up common misconceptions specific to those languages.

[TypeScript for the New Programmer](/docs/handbook/typescript-from-scratch.html)[TypeScript for JavaScript Programmers](/docs/handbook/typescript-in-5-minutes.html)[TypeScript for Java/C# Programmers](/docs/handbook/typescript-in-5-minutes-oop.html)[TypeScript for Functional Programmers](/docs/handbook/typescript-in-5-minutes-func.html)

Otherwise, jump to [The Basics](/docs/handbook/2/basic-types.html).

---

## Source: https://www.typescriptlang.org/community/

[Engage with your peers and ask questions about TypeScript using the tag 'typescript'](https://stackoverflow.com/questions/tagged/typescript)

[Chat with other TypeScript users in the TypeScript Community Chat.](https://discord.gg/typescript)

### Chat

[Found a bug, or want to give us constructive feedback?](https://github.com/microsoft/TypeScript/issues/new/choose)

### GitHub

[Tell us on GitHub](https://github.com/microsoft/TypeScript/issues/new/choose)

[Stay up to date. Follow us on Twitter](https://twitter.com/typescript)### Twitter


[@typescript](https://twitter.com/typescript)!

[TypeScript definition files.](https://github.com/definitelytyped/definitelytyped/#definitelytyped)

### Definitely Typed

[Browse the thousands of](https://github.com/definitelytyped/definitelytyped/#definitelytyped)available for common libraries and frameworks.

---

## Source: https://www.typescriptlang.org/play/

See how TypeScript improves day to day working with JavaScript with minimal additional syntax.

Explore how TypeScript extends JavaScript to add more safety and tooling.

Downloading TypeScript...

MSG

---

## Source: https://www.typescriptlang.org/tools/

Playground

A live environment for exploring, learning and sharing TypeScript code. Try different compiler flags, run through extensive code samples to learn specifics about how TypeScript works.


TSConfig Reference

An annotated reference to more than a hundred compiler options available in a `tsconfig.json`

or `jsconfig.json`

.


Cheat Sheets

Quickly look up the syntax for common TypeScript code.

---

## Source: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

Congratulations on choosing TypeScript as one of your first languages — you’re already making good decisions!

You’ve probably already heard that TypeScript is a “flavor” or “variant” of JavaScript. The relationship between TypeScript (TS) and JavaScript (JS) is rather unique among modern programming languages, so learning more about this relationship will help you understand how TypeScript adds to JavaScript.

What is JavaScript? A Brief History

JavaScript (also known as ECMAScript) started its life as a simple scripting language for browsers. At the time it was invented, it was expected to be used for short snippets of code embedded in a web page — writing more than a few dozen lines of code would have been somewhat unusual. Due to this, early web browsers executed such code pretty slowly. Over time, though, JS became more and more popular, and web developers started using it to create interactive experiences.

Web browser developers responded to this increased JS usage by optimizing their execution engines (dynamic compilation) and extending what could be done with it (adding APIs), which in turn made web developers use it even more.
On modern websites, your browser is frequently running applications that span hundreds of thousands of lines of code.
This is the long and gradual growth of “the web”, starting as a simple network of static pages, and evolving into a platform for rich *applications* of all kinds.

More than this, JS has become popular enough to be used outside the context of browsers, such as implementing JS servers using node.js.
The “run anywhere” nature of JS makes it an attractive choice for cross-platform development.
There are many developers these days that use *only* JavaScript to program their entire stack!

To summarize, we have a language that was designed for quick uses, and then grew to a full-fledged tool to write applications with millions of lines.
Every language has its own *quirks* — oddities and surprises, and JavaScript’s humble beginning makes it have *many* of these. Some examples:

-
JavaScript’s equality operator (

`==`

)*coerces*its operands, leading to unexpected behavior:jsif ("" == 0) {// It is! But why??}if (1 < x < 3) {// True for *any* value of x!} -
JavaScript also allows accessing properties which aren’t present:

jsconst obj = { width: 10, height: 15 };// Why is this NaN? Spelling is hard!const area = obj.width * obj.heigth;

Most programming languages would throw an error when these sorts of errors occur, some would do so during compilation — before any code is running. When writing small programs, such quirks are annoying but manageable; when writing applications with hundreds or thousands of lines of code, these constant surprises are a serious problem.

TypeScript: A Static Type Checker

We said earlier that some languages wouldn’t allow those buggy programs to run at all.
Detecting errors in code without running it is referred to as *static checking*.
Determining what’s an error and what’s not based on the kinds of values being operated on is known as static *type* checking.

TypeScript checks a program for errors before execution, and does so based on the *kinds of values*, making it a *static type checker*.
For example, the last example above has an error because of the *type* of `obj`

.
Here’s the error TypeScript found:

ts

constobj = {width : 10,height : 15 };constProperty 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?2551Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?area =obj .width *obj .; heigth [Try]

A Typed Superset of JavaScript

How does TypeScript relate to JavaScript, though?

Syntax

TypeScript is a language that is a *superset* of JavaScript: JS syntax is therefore legal TS.
Syntax refers to the way we write text to form a program.
For example, this code has a *syntax* error because it’s missing a `)`

:

ts

let')' expected.1005')' expected.a = (4[Try]

TypeScript doesn’t consider any JavaScript code to be an error because of its syntax. This means you can take any working JavaScript code and put it in a TypeScript file without worrying about exactly how it is written.

Types

However, TypeScript is a *typed* superset, meaning that it adds rules about how different kinds of values can be used.
The earlier error about `obj.heigth`

was not a *syntax* error: it is an error of using some kind of value (a *type*) in an incorrect way.

As another example, this is JavaScript code that you can run in your browser, and it *will* log a value:

js

console.log(4 / []);

This syntactically-legal program logs `Infinity`

.
TypeScript, though, considers division of number by an array to be a nonsensical operation, and will issue an error:

ts

The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.2363The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.console .log (4 /[] );[Try]

It’s possible you really *did* intend to divide a number by an array, perhaps just to see what happens, but most of the time, though, this is a programming mistake.
TypeScript’s type checker is designed to allow correct programs through while still catching as many common errors as possible.
(Later, we’ll learn about settings you can use to configure how strictly TypeScript checks your code.)

If you move some code from a JavaScript file to a TypeScript file, you might see *type errors* depending on how the code is written.
These may be legitimate problems with the code, or TypeScript being overly conservative.
Throughout this guide we’ll demonstrate how to add various TypeScript syntax to eliminate such errors.

Runtime Behavior

TypeScript is also a programming language that preserves the *runtime behavior* of JavaScript.
For example, dividing by zero in JavaScript produces `Infinity`

instead of throwing a runtime exception.
As a principle, TypeScript **never** changes the runtime behavior of JavaScript code.

This means that if you move code from JavaScript to TypeScript, it is **guaranteed** to run the same way, even if TypeScript thinks that the code has type errors.

Keeping the same runtime behavior as JavaScript is a foundational promise of TypeScript because it means you can easily transition between the two languages without worrying about subtle differences that might make your program stop working.

Erased Types

Roughly speaking, once TypeScript’s compiler is done with checking your code, it *erases* the types to produce the resulting “compiled” code.
This means that once your code is compiled, the resulting plain JS code has no type information.

This also means that TypeScript never changes the *behavior* of your program based on the types it inferred.
The bottom line is that while you might see type errors during compilation, the type system itself has no bearing on how your program works when it runs.

Finally, TypeScript doesn’t provide any additional runtime libraries. Your programs will use the same standard library (or external libraries) as JavaScript programs, so there’s no additional TypeScript-specific framework to learn.

Learning JavaScript and TypeScript

We frequently see the question “Should I learn JavaScript or TypeScript?“.

The answer is that you can’t learn TypeScript without learning JavaScript! TypeScript shares syntax and runtime behavior with JavaScript, so anything you learn about JavaScript is helping you learn TypeScript at the same time.

There are many, many resources available for programmers to learn JavaScript; you should *not* ignore these resources if you’re writing TypeScript.
For example, there are about 20 times more StackOverflow questions tagged `javascript`

than `typescript`

, but *all* of the `javascript`

questions also apply to TypeScript.

If you find yourself searching for something like “how to sort a list in TypeScript”, remember: **TypeScript is JavaScript’s runtime with a compile-time type checker**.
The way you sort a list in TypeScript is the same way you do so in JavaScript.
If you find a resource that uses TypeScript directly, that’s great too, but don’t limit yourself to thinking you need TypeScript-specific answers for everyday questions about how to accomplish runtime tasks.

Next Steps

This was a brief overview of the syntax and tools used in everyday TypeScript. From here, you can:

-
Learn some of the JavaScript fundamentals, we recommend either:

-
Continue to

[TypeScript for JavaScript Programmers](/docs/handbook/typescript-in-5-minutes.html) -
Read the full Handbook

[from start to finish](/docs/handbook/intro.html) -
Explore the

[Playground examples](/play#show-examples)

---

## Source: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like `string`

and `number`

, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

This tutorial provides a brief overview of TypeScript, focusing on its type system.

Types by Inference

TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

ts

lethelloWorld = "Hello World";[Try]

By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. This offers a type-system without needing to add extra characters to make types explicit in your code. That’s how TypeScript knows that `helloWorld`

is a `string`

in the above example.

You may have written JavaScript in Visual Studio Code, and had editor auto-completion. Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.

Defining Types

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

For example, to create an object with an inferred type which includes `name: string`

and `id: number`

, you can write:

ts

constuser = {name : "Hayes",id : 0,};[Try]

You can explicitly describe this object’s shape using an `interface`

declaration:

ts

interfaceUser {name : string;id : number;}[Try]

You can then declare that a JavaScript object conforms to the shape of your new `interface`

by using syntax like `: TypeName`

after a variable declaration:

ts

constuser :User = {name : "Hayes",id : 0,};[Try]

If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

ts

interfaceUser {name : string;id : number;}constuser :User = {Object literal may only specify known properties, and 'username' does not exist in type 'User'.2353Object literal may only specify known properties, and 'username' does not exist in type 'User'.: "Hayes", username id : 0,};[Try]

Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

ts

interfaceUser {name : string;id : number;}classUserAccount {name : string;id : number;constructor(name : string,id : number) {this.name =name ;this.id =id ;}}constuser :User = newUserAccount ("Murphy", 1);[Try]

You can use interfaces to annotate parameters and return values to functions:

ts

functiondeleteUser (user :User ) {// ...}functiongetAdminUser ():User {//...}[Try]

There is already a small set of primitive types available in JavaScript: `boolean`

, `bigint`

, `null`

, `number`

, `string`

, `symbol`

, and `undefined`

, which you can use in an interface. TypeScript extends this list with a few more, such as `any`

(allow anything), [ unknown](/play#example/unknown-and-never) (ensure someone using this type declares what the type is),

[(it’s not possible that this type could happen), and](/play#example/unknown-and-never)

`never`

`void`

(a function which returns `undefined`

or has no return value).You’ll see that there are two syntaxes for building types: [Interfaces and Types](/play/?e=83#example/types-vs-interfaces). You should prefer `interface`

. Use `type`

when you need specific features.

Composing Types

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: unions and generics.

Unions

With a union, you can declare that a type could be one of many types. For example, you can describe a `boolean`

type as being either `true`

or `false`

:

ts

typeMyBool = true | false;[Try]

*Note:* If you hover over `MyBool`

above, you’ll see that it is classed as `boolean`

. That’s a property of the Structural Type System. More on this below.

A popular use-case for union types is to describe the set of `string`

or `number`

[literals](/docs/handbook/2/everyday-types.html#literal-types) that a value is allowed to be:

ts

typeWindowStates = "open" | "closed" | "minimized";typeLockStates = "locked" | "unlocked";typePositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;[Try]

Unions provide a way to handle different types too. For example, you may have a function that takes an `array`

or a `string`

:

ts

functiongetLength (obj : string | string[]) {returnobj .length ;}[Try]

To learn the type of a variable, use `typeof`

:

| Type | Predicate |
|---|---|
| string | `typeof s === "string"` |
| number | `typeof n === "number"` |
| boolean | `typeof b === "boolean"` |
| undefined | `typeof undefined === "undefined"` |
| function | `typeof f === "function"` |
| array | `Array.isArray(a)` |

For example, you can make a function return different values depending on whether it is passed a string or an array:

ts

functionwrapInArray (obj : string | string[]) {if (typeofobj === "string") {return [obj ];}returnobj ;}[Try]

Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

ts

type StringArray = Array<string>;type NumberArray = Array<number>;type ObjectWithNameArray = Array<{ name: string }>;

You can declare your own types that use generics:

ts

interfaceBackpack <Type > {add : (obj :Type ) => void;get : () =>Type ;}// This line is a shortcut to tell TypeScript there is a// constant called `backpack`, and to not worry about where it came from.declare constbackpack :Backpack <string>;// object is a string, because we declared it above as the variable part of Backpack.constobject =backpack .get ();// Since the backpack variable is a string, you can't pass a number to the add function.Argument of type 'number' is not assignable to parameter of type 'string'.2345Argument of type 'number' is not assignable to parameter of type 'string'.backpack .add (23 );[Try]

Structural Type System

One of TypeScript’s core principles is that type checking focuses on the *shape* that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

ts

interfacePoint {x : number;y : number;}functionlogPoint (p :Point ) {console .log (`${p .x }, ${p .y }`);}// logs "12, 26"constpoint = {x : 12,y : 26 };logPoint (point );[Try]

The `point`

variable is never declared to be a `Point`

type. However, TypeScript compares the shape of `point`

to the shape of `Point`

in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match.

ts

constpoint3 = {x : 12,y : 26,z : 89 };logPoint (point3 ); // logs "12, 26"constrect = {x : 33,y : 3,width : 30,height : 80 };logPoint (rect ); // logs "33, 3"constcolor = {hex : "#187ABF" };Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'. Type '{ hex: string; }' is missing the following properties from type 'Point': x, y2345Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'. Type '{ hex: string; }' is missing the following properties from type 'Point': x, ylogPoint (); color [Try]

There is no difference between how classes and objects conform to shapes:

ts

classVirtualPoint {x : number;y : number;constructor(x : number,y : number) {this.x =x ;this.y =y ;}}constnewVPoint = newVirtualPoint (13, 56);logPoint (newVPoint ); // logs "13, 56"[Try]

If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

Next Steps

This was a brief overview of the syntax and tools used in everyday TypeScript. From here, you can:

- Read the full Handbook
[from start to finish](/docs/handbook/intro.html) - Explore the
[Playground examples](/play#show-examples)

---

## Source: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html

TypeScript is a popular choice for programmers accustomed to other languages with static typing, such as C# and Java.

TypeScript’s type system offers many of the same benefits, such as better code completion, earlier detection of errors, and clearer communication between parts of your program. While TypeScript provides many familiar features for these developers, it’s worth stepping back to see how JavaScript (and therefore TypeScript) differ from traditional OOP languages. Understanding these differences will help you write better JavaScript code, and avoid common pitfalls that programmers who go straight from C#/Java to TypeScript may fall into.

Co-learning JavaScript

If you’re familiar with JavaScript already but are primarily a Java or C# programmer, this introductory page can help explain some of the common misconceptions and pitfalls you might be susceptible to. Some of the ways that TypeScript models types are quite different from Java or C#, and it’s important to keep these in mind when learning TypeScript.

If you’re a Java or C# programmer that is new to JavaScript in general, we recommend learning a little bit of JavaScript *without* types first to understand JavaScript’s runtime behaviors.
Because TypeScript doesn’t change how your code *runs*, you’ll still have to learn how JavaScript works in order to write code that actually does something!

It’s important to remember that TypeScript uses the same *runtime* as JavaScript, so any resources about how to accomplish specific runtime behavior (converting a string to a number, displaying an alert, writing a file to disk, etc.) will always apply equally well to TypeScript programs.
Don’t limit yourself to TypeScript-specific resources!

Rethinking the Class

C# and Java are what we might call *mandatory OOP* languages.
In these languages, the *class* is the basic unit of code organization, and also the basic container of all data *and* behavior at runtime.
Forcing all functionality and data to be held in classes can be a good domain model for some problems, but not every domain *needs* to be represented this way.

Free Functions and Data

In JavaScript, functions can live anywhere, and data can be passed around freely without being inside a pre-defined `class`

or `struct`

.
This flexibility is extremely powerful.
“Free” functions (those not associated with a class) working over data without an implied OOP hierarchy tend to be the preferred model for writing programs in JavaScript.

Static Classes

Additionally, certain constructs from C# and Java such as singletons and static classes are unnecessary in TypeScript.

OOP in TypeScript

That said, you can still use classes if you like! Some problems are well-suited to being solved by a traditional OOP hierarchy, and TypeScript’s support for JavaScript classes will make these models even more powerful. TypeScript supports many common patterns such as implementing interfaces, inheritance, and static methods.

We’ll cover classes later in this guide.

Rethinking Types

TypeScript’s understanding of a *type* is actually quite different from C# or Java’s.
Let’s explore some differences.

Nominal Reified Type Systems

In C# or Java, any given value or object has one exact type - either `null`

, a primitive, or a known class type.
We can call methods like `value.GetType()`

or `value.getClass()`

to query the exact type at runtime.
The definition of this type will reside in a class somewhere with some name, and we can’t use two classes with similar shapes in lieu of each other unless there’s an explicit inheritance relationship or commonly-implemented interface.

These aspects describe a *reified, nominal* type system.
The types we wrote in the code are present at runtime, and the types are related via their declarations, not their structures.

Types as Sets

In C# or Java, it’s meaningful to think of a one-to-one correspondence between runtime types and their compile-time declarations.

In TypeScript, it’s better to think of a type as a *set of values* that share something in common.
Because types are just sets, a particular value can belong to *many* sets at the same time.

Once you start thinking of types as sets, certain operations become very natural.
For example, in C#, it’s awkward to pass around a value that is *either* a `string`

or `int`

, because there isn’t a single type that represents this sort of value.

In TypeScript, this becomes very natural once you realize that every type is just a set.
How do you describe a value that either belongs in the `string`

set or the `number`

set?
It simply belongs to the *union* of those sets: `string | number`

.

TypeScript provides a number of mechanisms to work with types in a set-theoretic way, and you’ll find them more intuitive if you think of types as sets.

Erased Structural Types

In TypeScript, objects are *not* of a single exact type.
For example, if we construct an object that satisfies an interface, we can use that object where that interface is expected even though there was no declarative relationship between the two.

ts

interfacePointlike {x : number;y : number;}interfaceNamed {name : string;}functionlogPoint (point :Pointlike ) {console .log ("x = " +point .x + ", y = " +point .y );}functionlogName (x :Named ) {console .log ("Hello, " +x .name );}constobj = {x : 0,y : 0,name : "Origin",};logPoint (obj );logName (obj );[Try]

TypeScript’s type system is *structural*, not nominal: We can use `obj`

as a `Pointlike`

because it has `x`

and `y`

properties that are both numbers.
The relationships between types are determined by the properties they contain, not whether they were declared with some particular relationship.

TypeScript’s type system is also *not reified*: There’s nothing at runtime that will tell us that `obj`

is `Pointlike`

.
In fact, the `Pointlike`

type is not present *in any form* at runtime.

Going back to the idea of *types as sets*, we can think of `obj`

as being a member of both the `Pointlike`

set of values and the `Named`

set of values.

Consequences of Structural Typing

OOP programmers are often surprised by two particular aspects of structural typing.

Empty Types

The first is that the *empty type* seems to defy expectation:

ts

classEmpty {}functionfn (arg :Empty ) {// do something?}// No error, but this isn't an 'Empty' ?fn ({k : 10 });[Try]

TypeScript determines if the call to `fn`

here is valid by seeing if the provided argument is a valid `Empty`

.
It does so by examining the *structure* of `{ k: 10 }`

and `class Empty { }`

.
We can see that `{ k: 10 }`

has *all* of the properties that `Empty`

does, because `Empty`

has no properties.
Therefore, this is a valid call!

This may seem surprising, but it’s ultimately a very similar relationship to one enforced in nominal OOP languages.
A subclass cannot *remove* a property of its base class, because doing so would destroy the natural subtype relationship between the derived class and its base.
Structural type systems simply identify this relationship implicitly by describing subtypes in terms of having properties of compatible types.

Identical Types

Another frequent source of surprise comes with identical types:

ts

class Car {drive() {// hit the gas}}class Golfer {drive() {// hit the ball far}}// No error?let w: Car = new Golfer();

Again, this isn’t an error because the *structures* of these classes are the same.
While this may seem like a potential source of confusion, in practice, identical classes that shouldn’t be related are not common.

We’ll learn more about how classes relate to each other in the Classes chapter.

Reflection

OOP programmers are accustomed to being able to query the type of any value, even a generic one:

csharp

// C#static void LogType<T>() {Console.WriteLine(typeof(T).Name);}

Because TypeScript’s type system is fully erased, information about e.g. the instantiation of a generic type parameter is not available at runtime.

JavaScript does have some limited primitives like `typeof`

and `instanceof`

, but remember that these operators are still working on the values as they exist in the type-erased output code.
For example, `typeof (new Car())`

will be `"object"`

, not `Car`

or `"Car"`

.

Next Steps

This was a brief overview of the syntax and tools used in everyday TypeScript. From here, you can:

- Read the full Handbook
[from start to finish](/docs/handbook/intro.html) - Explore the
[Playground examples](/play#show-examples)

---

## Source: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html

TypeScript began its life as an attempt to bring traditional object-oriented types to JavaScript so that the programmers at Microsoft could bring traditional object-oriented programs to the web. As it has developed, TypeScript’s type system has evolved to model code written by native JavaScripters. The resulting system is powerful, interesting and messy.

This introduction is designed for working Haskell or ML programmers who want to learn TypeScript. It describes how the type system of TypeScript differs from Haskell’s type system. It also describes unique features of TypeScript’s type system that arise from its modelling of JavaScript code.

This introduction does not cover object-oriented programming. In practice, object-oriented programs in TypeScript are similar to those in other popular languages with OO features.

Prerequisites

In this introduction, I assume you know the following:

- How to program in JavaScript, the good parts.
- Type syntax of a C-descended language.

If you need to learn the good parts of JavaScript, read
[JavaScript: The Good Parts](https://shop.oreilly.com/product/9780596517748.do).
You may be able to skip the book if you know how to write programs in
a call-by-value lexically scoped language with lots of mutability and
not much else.
[R 4RS Scheme](https://people.csail.mit.edu/jaffer/r4rs.pdf) is a good example.

[The C++ Programming Language](http://www.stroustrup.com/4th.html) is
a good place to learn about C-style type syntax. Unlike C++,
TypeScript uses postfix types, like so: `x: string`

instead of `string x`

.

Concepts not in Haskell

Built-in types

JavaScript defines 8 built-in types:

| Type | Explanation |
|---|---|
`Number` |
a double-precision IEEE 754 floating point. |
`String` |
an immutable UTF-16 string. |
`BigInt` |
integers in the arbitrary precision format. |
`Boolean` |
`true` and `false` . |
`Symbol` |
a unique value usually used as a key. |
`Null` |
equivalent to the unit type. |
`Undefined` |
also equivalent to the unit type. |
`Object` |
similar to records. |

[See the MDN page for more detail](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures).

TypeScript has corresponding primitive types for the built-in types:

`number`

`string`

`bigint`

`boolean`

`symbol`

`null`

`undefined`

`object`


Other important TypeScript types

| Type | Explanation |
|---|---|
`unknown` |
the top type. |
`never` |
the bottom type. |
| object literal | e.g. `{ property: Type }` |
`void` |
for functions with no documented return value |
`T[]` |
mutable arrays, also written `Array<T>` |
`[T, T]` |
tuples, which are fixed-length but mutable |
`(t: T) => U` |
functions |

Notes:

-
Function syntax includes parameter names. This is pretty hard to get used to!

tslet fst: (a: any, b: any) => any = (a, b) => a;// or more precisely:let fst: <T, U>(a: T, b: U) => T = (a, b) => a; -
Object literal type syntax closely mirrors object literal value syntax:

tslet o: { n: number; xs: object[] } = { n: 1, xs: [] }; -
`[T, T]`

is a subtype of`T[]`

. This is different than Haskell, where tuples are not related to lists.

Boxed types

JavaScript has boxed equivalents of primitive types that contain the
methods that programmers associate with those types. TypeScript
reflects this with, for example, the difference between the primitive
type `number`

and the boxed type `Number`

. The boxed types are rarely
needed, since their methods return primitives.

ts

(1).toExponential();// equivalent toNumber.prototype.toExponential.call(1);

Note that calling a method on a numeric literal requires it to be in parentheses to aid the parser.

Gradual typing

TypeScript uses the type `any`

whenever it can’t tell what the type of
an expression should be. Compared to `Dynamic`

, calling `any`

a type
is an overstatement. It just turns off the type checker
wherever it appears. For example, you can push any value into an
`any[]`

without marking the value in any way:

ts

// with "noImplicitAny": false in tsconfig.json, anys: any[]constanys = [];anys .push (1);anys .push ("oh no");anys .push ({anything : "goes" });[Try]

And you can use an expression of type `any`

anywhere:

ts

anys.map(anys[1]); // oh no, "oh no" is not a function

`any`

is contagious, too — if you initialize a variable with an
expression of type `any`

, the variable has type `any`

too.

ts

let sepsis = anys[0] + anys[1]; // this could mean anything

To get an error when TypeScript produces an `any`

, use
`"noImplicitAny": true`

, or `"strict": true`

in `tsconfig.json`

.

Structural typing

Structural typing is a familiar concept to most functional programmers, although Haskell and most MLs are not structurally typed. Its basic form is pretty simple:

ts

// @strict: falselet o = { x: "hi", extra: 1 }; // oklet o2: { x: string } = o; // ok

Here, the object literal `{ x: "hi", extra: 1 }`

has a matching
literal type `{ x: string, extra: number }`

. That
type is assignable to `{ x: string }`

since
it has all the required properties and those properties have
assignable types. The extra property doesn’t prevent assignment, it
just makes it a subtype of `{ x: string }`

.

Named types just give a name to a type; for assignability purposes
there’s no difference between the type alias `One`

and the interface
type `Two`

below. They both have a property `p: string`

. (Type aliases
behave differently from interfaces with respect to recursive
definitions and type parameters, however.)

ts

typeOne = {p : string };interfaceTwo {p : string;}classThree {p = "Hello";}letx :One = {p : "hi" };lettwo :Two =x ;two = newThree ();[Try]

Unions

In TypeScript, union types are untagged. In other words, they are not
discriminated unions like `data`

in Haskell. However, you can often
discriminate types in a union using built-in tags or other properties.

ts

functionstart (arg : string | string[] | (() => string) | {s : string }): string {// this is super common in JavaScriptif (typeofarg === "string") {returncommonCase (arg );} else if (Array .isArray (arg )) {returnarg .map (commonCase ).join (",");} else if (typeofarg === "function") {returncommonCase (arg ());} else {returncommonCase (arg .s );}functioncommonCase (s : string): string {// finally, just convert a string to another stringreturns ;}}[Try]

`string`

, `Array`

and `Function`

have built-in type predicates,
conveniently leaving the object type for the `else`

branch. It is
possible, however, to generate unions that are difficult to
differentiate at runtime. For new code, it’s best to build only
discriminated unions.

The following types have built-in predicates:

| Type | Predicate |
|---|---|
| string | `typeof s === "string"` |
| number | `typeof n === "number"` |
| bigint | `typeof m === "bigint"` |
| boolean | `typeof b === "boolean"` |
| symbol | `typeof g === "symbol"` |
| undefined | `typeof undefined === "undefined"` |
| function | `typeof f === "function"` |
| array | `Array.isArray(a)` |
| object | `typeof o === "object"` |

Note that functions and arrays are objects at runtime, but have their own predicates.

Intersections

In addition to unions, TypeScript also has intersections:

ts

typeCombined = {a : number } & {b : string };typeConflicting = {a : number } & {a : string };[Try]

`Combined`

has two properties, `a`

and `b`

, just as if they had been
written as one object literal type. Intersection and union are
recursive in case of conflicts, so `Conflicting.a: number & string`

.

Unit types

Unit types are subtypes of primitive types that contain exactly one
primitive value. For example, the string `"foo"`

has the type
`"foo"`

. Since JavaScript has no built-in enums, it is common to use a set of
well-known strings instead. Unions of string literal types allow
TypeScript to type this pattern:

ts

declare functionpad (s : string,n : number,direction : "left" | "right"): string;pad ("hi", 10, "left");[Try]

When needed, the compiler *widens* — converts to a
supertype — the unit type to the primitive type, such as `"foo"`

to `string`

. This happens when using mutability, which can hamper some
uses of mutable variables:

ts

lets = "right";Argument of type 'string' is not assignable to parameter of type '"left" | "right"'.2345Argument of type 'string' is not assignable to parameter of type '"left" | "right"'.pad ("hi", 10,); // error: 'string' is not assignable to '"left" | "right"' s [Try]

Here’s how the error happens:

`"right": "right"`

`s: string`

because`"right"`

widens to`string`

on assignment to a mutable variable.`string`

is not assignable to`"left" | "right"`


You can work around this with a type annotation for `s`

, but that
in turn prevents assignments to `s`

of variables that are not of type
`"left" | "right"`

.

ts

lets : "left" | "right" = "right";pad ("hi", 10,s );[Try]

Concepts similar to Haskell

Contextual typing

TypeScript has some obvious places where it can infer types, like variable declarations:

ts

lets = "I'm a string!";[Try]

But it also infers types in a few other places that you may not expect if you’ve worked with other C-syntax languages:

ts

declare functionmap <T ,U >(f : (t :T ) =>U ,ts :T []):U [];letsns =map ((n ) =>n .toString (), [1, 2, 3]);[Try]

Here, `n: number`

in this example also, despite the fact that `T`

and `U`

have not been inferred before the call. In fact, after `[1,2,3]`

has
been used to infer `T=number`

, the return type of `n => n.toString()`

is used to infer `U=string`

, causing `sns`

to have the type
`string[]`

.

Note that inference will work in any order, but intellisense will only
work left-to-right, so TypeScript prefers to declare `map`

with the
array first:

ts

declare functionmap <T ,U >(ts :T [],f : (t :T ) =>U ):U [];[Try]

Contextual typing also works recursively through object literals, and
on unit types that would otherwise be inferred as `string`

or
`number`

. And it can infer return types from context:

ts

declare functionrun <T >(thunk : (t :T ) => void):T ;leti : {inference : string } =run ((o ) => {o .inference = "INSERT STATE HERE";});[Try]

The type of `o`

is determined to be `{ inference: string }`

because

- Declaration initializers are contextually typed by the
declaration’s type:
`{ inference: string }`

. - The return type of a call uses the contextual type for inferences,
so the compiler infers that
`T={ inference: string }`

. - Arrow functions use the contextual type to type their parameters,
so the compiler gives
`o: { inference: string }`

.

And it does so while you are typing, so that after typing `o.`

, you
get completions for the property `inference`

, along with any other
properties you’d have in a real program.
Altogether, this feature can make TypeScript’s inference look a bit
like a unifying type inference engine, but it is not.

Type aliases

Type aliases are mere aliases, just like `type`

in Haskell. The
compiler will attempt to use the alias name wherever it was used in
the source code, but does not always succeed.

ts

typeSize = [number, number];letx :Size = [101.1, 999.9];[Try]

The closest equivalent to `newtype`

is a *tagged intersection*:

ts

type FString = string & { __compileTimeOnly: any };

An `FString`

is just like a normal string, except that the compiler
thinks it has a property named `__compileTimeOnly`

that doesn’t
actually exist. This means that `FString`

can still be assigned to
`string`

, but not the other way round.

Discriminated Unions

The closest equivalent to `data`

is a union of types with discriminant
properties, normally called discriminated unions in TypeScript:

ts

type Shape =| { kind: "circle"; radius: number }| { kind: "square"; x: number }| { kind: "triangle"; x: number; y: number };

Unlike Haskell, the tag, or discriminant, is just a property in each
object type. Each variant has an identical property with a different
unit type. This is still a normal union type; the leading `|`

is
an optional part of the union type syntax. You can discriminate the
members of the union using normal JavaScript code:

ts

typeShape =| {kind : "circle";radius : number }| {kind : "square";x : number }| {kind : "triangle";x : number;y : number };functionarea (s :Shape ) {if (s .kind === "circle") {returnMath .PI *s .radius *s .radius ;} else if (s .kind === "square") {returns .x *s .x ;} else {return (s .x *s .y ) / 2;}}[Try]

Note that the return type of `area`

is inferred to be `number`

because
TypeScript knows the function is total. If some variant is not
covered, the return type of `area`

will be `number | undefined`

instead.

Also, unlike Haskell, common properties show up in any union, so you can usefully discriminate multiple members of the union:

ts

functionheight (s :Shape ) {if (s .kind === "circle") {return 2 *s .radius ;} else {// s.kind: "square" | "triangle"returns .x ;}}[Try]

Type Parameters

Like most C-descended languages, TypeScript requires declaration of type parameters:

ts

function liftArray<T>(t: T): Array<T> {return [t];}

There is no case requirement, but type parameters are conventionally single uppercase letters. Type parameters can also be constrained to a type, which behaves a bit like type class constraints:

ts

function firstish<T extends { length: number }>(t1: T, t2: T): T {return t1.length > t2.length ? t1 : t2;}

TypeScript can usually infer type arguments from a call based on the type of the arguments, so type arguments are usually not needed.

Because TypeScript is structural, it doesn’t need type parameters as
much as nominal systems. Specifically, they are not needed to make a
function polymorphic. Type parameters should only be used to
*propagate* type information, such as constraining parameters to be
the same type:

ts

function length<T extends ArrayLike<unknown>>(t: T): number {}function length(t: ArrayLike<unknown>): number {}

In the first `length`

, T is not necessary; notice that it’s only
referenced once, so it’s not being used to constrain the type of the
return value or other parameters.

Higher-kinded types

TypeScript does not have higher kinded types, so the following is not legal:

ts

function length<T extends ArrayLike<unknown>, U>(m: T<U>) {}

Point-free programming

Point-free programming — heavy use of currying and function composition — is possible in JavaScript, but can be verbose. In TypeScript, type inference often fails for point-free programs, so you’ll end up specifying type parameters instead of value parameters. The result is so verbose that it’s usually better to avoid point-free programming.

Module system

JavaScript’s modern module syntax is a bit like Haskell’s, except that
any file with `import`

or `export`

is implicitly a module:

ts

import { value, Type } from "npm-package";import { other, Types } from "./local-package";import * as prefix from "../lib/third-package";

You can also import commonjs modules — modules written using node.js’ module system:

ts

import f = require("single-function-package");

You can export with an export list:

ts

export { f };function f() {return g();}function g() {} // g is not exported

Or by marking each export individually:

ts

export function f() { return g() }function g() { }

The latter style is more common but both are allowed, even in the same file.

`readonly`

and `const`


In JavaScript, mutability is the default, although it allows variable
declarations with `const`

to declare that the *reference* is
immutable. The referent is still mutable:

js

const a = [1, 2, 3];a.push(102); // ):a[0] = 101; // D:

TypeScript additionally has a `readonly`

modifier for properties.

ts

interface Rx {readonly x: number;}let rx: Rx = { x: 1 };rx.x = 12; // error

It also ships with a mapped type `Readonly<T>`

that makes
all properties `readonly`

:

ts

interface X {x: number;}let rx: Readonly<X> = { x: 1 };rx.x = 12; // error

And it has a specific `ReadonlyArray<T>`

type that removes
side-affecting methods and prevents writing to indices of the array,
as well as special syntax for this type:

ts

let a: ReadonlyArray<number> = [1, 2, 3];let b: readonly number[] = [1, 2, 3];a.push(102); // errorb[0] = 101; // error

You can also use a const-assertion, which operates on arrays and object literals:

ts

let a = [1, 2, 3] as const;a.push(102); // errora[0] = 101; // error

However, none of these options are the default, so they are not consistently used in TypeScript code.

Next Steps

This doc is a high level overview of the syntax and types you would use in everyday code. From here you should:

- Read the full Handbook
[from start to finish](/docs/handbook/intro.html) - Explore the
[Playground examples](/play#show-examples)

---

## Source: https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

Let’s get started by building a simple web application with TypeScript.

Installing TypeScript

There are two main ways to add TypeScript to your project:

- Via npm (the Node.js package manager)
- By installing TypeScript’s Visual Studio plugins

Visual Studio 2017 and Visual Studio 2015 Update 3 include TypeScript language support by default but does not include the TypeScript compiler, `tsc`

.
If you didn’t install TypeScript with Visual Studio, you can still [download it](/download).

For npm users:

shell

> npm install -g typescript

Building your first TypeScript file

In your editor, type the following JavaScript code in `greeter.ts`

:

ts

functiongreeter (person ) {return "Hello, " +person ;}letuser = "Jane User";document .body .textContent =greeter (user );[Try]

Compiling your code

We used a `.ts`

extension, but this code is just JavaScript.
You could have copy/pasted this straight out of an existing JavaScript app.

At the command line, run the TypeScript compiler:

shell

tsc greeter.ts

The result will be a file `greeter.js`

which contains the same JavaScript that you fed in.
We’re up and running using TypeScript in our JavaScript app!

Now we can start taking advantage of some of the new tools TypeScript offers.
Add a `: string`

type annotation to the ‘person’ function parameter as shown here:

ts

functiongreeter (person : string) {return "Hello, " +person ;}letuser = "Jane User";document .body .textContent =greeter (user );[Try]

Type annotations

Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable. In this case, we intend the greeter function to be called with a single string parameter. We can try changing the call greeter to pass an array instead:

ts

functiongreeter (person : string) {return "Hello, " +person ;}letuser = [0, 1, 2];Argument of type 'number[]' is not assignable to parameter of type 'string'.2345Argument of type 'number[]' is not assignable to parameter of type 'string'.document .body .textContent =greeter (); user [Try]

Re-compiling, you’ll now see an error:

shell

error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

Similarly, try removing all the arguments to the greeter call. TypeScript will let you know that you have called this function with an unexpected number of arguments. In both cases, TypeScript can offer static analysis based on both the structure of your code, and the type annotations you provide.

Notice that although there were errors, the `greeter.js`

file is still created.
You can use TypeScript even if there are errors in your code. But in this case, TypeScript is warning that your code will likely not run as expected.

Interfaces

Let’s develop our sample further. Here we use an interface that describes objects that have a firstName and lastName field.
In TypeScript, two types are compatible if their internal structure is compatible.
This allows us to implement an interface just by having the shape the interface requires, without an explicit `implements`

clause.

ts

interfacePerson {firstName : string;lastName : string;}functiongreeter (person :Person ) {return "Hello, " +person .firstName + " " +person .lastName ;}letuser = {firstName : "Jane",lastName : "User" };document .body .textContent =greeter (user );[Try]

Classes

Finally, let’s extend the example one last time with classes. TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.

Here we’re going to create a `Student`

class with a constructor and a few public fields.
Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

Also of note, the use of `public`

on parameters to the constructor is a shorthand that allows us to automatically create properties with that name.

ts

classStudent {fullName : string;constructor(publicfirstName : string,publicmiddleInitial : string,publiclastName : string) {this.fullName =firstName + " " +middleInitial + " " +lastName ;}}interfacePerson {firstName : string;lastName : string;}functiongreeter (person :Person ) {return "Hello, " +person .firstName + " " +person .lastName ;}letuser = newStudent ("Jane", "M.", "User");document .body .textContent =greeter (user );[Try]

Re-run `tsc greeter.ts`

and you’ll see the generated JavaScript is the same as the earlier code.
Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.

Running your TypeScript web app

Now type the following in `greeter.html`

:

html

<!DOCTYPE html><html><head><title>TypeScript Greeter</title></head><body><script src="greeter.js"></script></body></html>

Open `greeter.html`

in the browser to run your first simple TypeScript web application!

Optional: Open `greeter.ts`

in Visual Studio, or copy the code into the TypeScript playground.
You can hover over identifiers to see their types.
Notice that in some cases these types are inferred automatically for you.
Re-type the last line, and see completion lists and parameter help based on the types of the DOM elements.
Put your cursor on the reference to the greeter function, and hit F12 to go to its definition.
Notice, too, that you can right-click on a symbol and use refactoring to rename it.

The type information provided works together with the tools to work with JavaScript at application scale. For more examples of what’s possible in TypeScript, see the Samples section of the website.

---

## Source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html

Each and every value in JavaScript has a set of behaviors you can observe from running different operations.
That sounds abstract, but as a quick example, consider some operations we might run on a variable named `message`

.

js

// Accessing the property 'toLowerCase'// on 'message' and then calling itmessage.toLowerCase();// Calling 'message'message();

If we break this down, the first runnable line of code accesses a property called `toLowerCase`

and then calls it.
The second one tries to call `message`

directly.

But assuming we don’t know the value of `message`

- and that’s pretty common - we can’t reliably say what results we’ll get from trying to run any of this code.
The behavior of each operation depends entirely on what value we had in the first place.

- Is
`message`

callable? - Does it have a property called
`toLowerCase`

on it? - If it does, is
`toLowerCase`

even callable? - If both of these values are callable, what do they return?

The answers to these questions are usually things we keep in our heads when we write JavaScript, and we have to hope we got all the details right.

Let’s say `message`

was defined in the following way.

js

const message = "Hello World!";

As you can probably guess, if we try to run `message.toLowerCase()`

, we’ll get the same string only in lower-case.

What about that second line of code? If you’re familiar with JavaScript, you’ll know this fails with an exception:

txt

TypeError: message is not a function

It’d be great if we could avoid mistakes like this.

When we run our code, the way that our JavaScript runtime chooses what to do is by figuring out the *type* of the value - what sorts of behaviors and capabilities it has.
That’s part of what that `TypeError`

is alluding to - it’s saying that the string `"Hello World!"`

cannot be called as a function.

For some values, such as the primitives `string`

and `number`

, we can identify their type at runtime using the `typeof`

operator.
But for other things like functions, there’s no corresponding runtime mechanism to identify their types.
For example, consider this function:

js

function fn(x) {return x.flip();}

We can *observe* by reading the code that this function will only work if given an object with a callable `flip`

property, but JavaScript doesn’t surface this information in a way that we can check while the code is running.
The only way in pure JavaScript to tell what `fn`

does with a particular value is to call it and see what happens.
This kind of behavior makes it hard to predict what the code will do before it runs, which means it’s harder to know what your code is going to do while you’re writing it.

Seen in this way, a *type* is the concept of describing which values can be passed to `fn`

and which will crash.
JavaScript only truly provides *dynamic* typing - running the code to see what happens.

The alternative is to use a *static* type system to make predictions about what the code is expected to do *before* it runs.

Static type-checking

Think back to that `TypeError`

we got earlier from trying to call a `string`

as a function.
*Most people* don’t like to get any sorts of errors when running their code - those are considered bugs!
And when we write new code, we try our best to avoid introducing new bugs.

If we add just a bit of code, save our file, re-run the code, and immediately see the error, we might be able to isolate the problem quickly; but that’s not always the case. We might not have tested the feature thoroughly enough, so we might never actually run into a potential error that would be thrown! Or if we were lucky enough to witness the error, we might have ended up doing large refactorings and adding a lot of different code that we’re forced to dig through.

Ideally, we could have a tool that helps us find these bugs *before* our code runs.
That’s what a static type-checker like TypeScript does.
*Static type systems* describe the shapes and behaviors of what our values will be when we run our programs.
A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

ts

constmessage = "hello!";This expression is not callable. Type 'String' has no call signatures.2349This expression is not callable. Type 'String' has no call signatures.(); message [Try]

Running that last sample with TypeScript will give us an error message before we run the code in the first place.

Non-exception Failures

So far we’ve been discussing certain things like runtime errors - cases where the JavaScript runtime tells us that it thinks something is nonsensical.
Those cases come up because [the ECMAScript specification](https://tc39.github.io/ecma262/) has explicit instructions on how the language should behave when it runs into something unexpected.

For example, the specification says that trying to call something that isn’t callable should throw an error.
Maybe that sounds like “obvious behavior”, but you could imagine that accessing a property that doesn’t exist on an object should throw an error too.
Instead, JavaScript gives us different behavior and returns the value `undefined`

:

js

const user = {name: "Daniel",age: 26,};user.location; // returns undefined

Ultimately, a static type system has to make the call over what code should be flagged as an error in its system, even if it’s “valid” JavaScript that won’t immediately throw an error.
In TypeScript, the following code produces an error about `location`

not being defined:

ts

constuser = {name : "Daniel",age : 26,};Property 'location' does not exist on type '{ name: string; age: number; }'.2339Property 'location' does not exist on type '{ name: string; age: number; }'.user .; location [Try]

While sometimes that implies a trade-off in what you can express, the intent is to catch legitimate bugs in our programs.
And TypeScript catches *a lot* of legitimate bugs.

For example: typos,

ts

constannouncement = "Hello World!";// How quickly can you spot the typos?announcement .toLocaleLowercase ();announcement .toLocalLowerCase ();// We probably meant to write this...announcement .toLocaleLowerCase ();[Try]

uncalled functions,

ts

functionflipCoin () {// Meant to be Math.random()returnOperator '<' cannot be applied to types '() => number' and 'number'.2365Operator '<' cannot be applied to types '() => number' and 'number'.Math .random < 0.5;}[Try]

or basic logic errors.

ts

constvalue =Math .random () < 0.5 ? "a" : "b";if (value !== "a") {// ...} else if (This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.2367This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.value === "b") {// Oops, unreachable}[Try]

Types for Tooling

TypeScript can catch bugs when we make mistakes in our code.
That’s great, but TypeScript can *also* prevent us from making those mistakes in the first place.

The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties.
Once it has that information, it can also start *suggesting* which properties you might want to use.

That means TypeScript can be leveraged for editing code too, and the core type-checker can provide error messages and code completion as you type in the editor. That’s part of what people often refer to when they talk about tooling in TypeScript.

ts

importexpress from "express";constapp =express ();app .get ("/", function (req ,res ) {res .sen });app .listen (3000);[Try]

TypeScript takes tooling seriously, and that goes beyond completions and errors as you type.
An editor that supports TypeScript can deliver “quick fixes” to automatically fix errors, refactorings to easily re-organize code, and useful navigation features for jumping to definitions of a variable, or finding all references to a given variable.
All of this is built on top of the type-checker and is fully cross-platform, so it’s likely that [your favorite editor has TypeScript support available](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

`tsc`

, the TypeScript compiler

We’ve been talking about type-checking, but we haven’t yet used our type-*checker*.
Let’s get acquainted with our new friend `tsc`

, the TypeScript compiler.
First we’ll need to grab it via npm.

sh

npm install -g typescript

This installs the TypeScript Compiler

`tsc`

globally. You can use`npx`

or similar tools if you’d prefer to run`tsc`

from a local`node_modules`

package instead.

Now let’s move to an empty folder and try writing our first TypeScript program: `hello.ts`

:

ts

// Greets the world.console .log ("Hello world!");[Try]

Notice there are no frills here; this “hello world” program looks identical to what you’d write for a “hello world” program in JavaScript.
And now let’s type-check it by running the command `tsc`

which was installed for us by the `typescript`

package.

sh

tsc hello.ts

Tada!

Wait, “tada” *what* exactly?
We ran `tsc`

and nothing happened!
Well, there were no type errors, so we didn’t get any output in our console since there was nothing to report.

But check again - we got some *file* output instead.
If we look in our current directory, we’ll see a `hello.js`

file next to `hello.ts`

.
That’s the output from our `hello.ts`

file after `tsc`

*compiles* or *transforms* it into a plain JavaScript file.
And if we check the contents, we’ll see what TypeScript spits out after it processes a `.ts`

file:

js

// Greets the world.console.log("Hello world!");

In this case, there was very little for TypeScript to transform, so it looks identical to what we wrote. The compiler tries to emit clean readable code that looks like something a person would write. While that’s not always so easy, TypeScript indents consistently, is mindful of when our code spans across different lines of code, and tries to keep comments around.

What about if we *did* introduce a type-checking error?
Let’s rewrite `hello.ts`

:

ts

// This is an industrial-grade general-purpose greeter function:functiongreet (person ,date ) {console .log (`Hello ${person }, today is ${date }!`);}greet ("Brendan");[Try]

If we run `tsc hello.ts`

again, notice that we get an error on the command line!

txt

Expected 2 arguments, but got 1.

TypeScript is telling us we forgot to pass an argument to the `greet`

function, and rightfully so.
So far we’ve only written standard JavaScript, and yet type-checking was still able to find problems with our code.
Thanks TypeScript!

Emitting with Errors

One thing you might not have noticed from the last example was that our `hello.js`

file changed again.
If we open that file up then we’ll see that the contents still basically look the same as our input file.
That might be a bit surprising given the fact that `tsc`

reported an error about our code, but this is based on one of TypeScript’s core values: much of the time, *you* will know better than TypeScript.

To reiterate from earlier, type-checking code limits the sorts of programs you can run, and so there’s a tradeoff on what sorts of things a type-checker finds acceptable. Most of the time that’s okay, but there are scenarios where those checks get in the way. For example, imagine yourself migrating JavaScript code over to TypeScript and introducing type-checking errors. Eventually you’ll get around to cleaning things up for the type-checker, but that original JavaScript code was already working! Why should converting it over to TypeScript stop you from running it?

So TypeScript doesn’t get in your way.
Of course, over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly.
In that case, you can use the [ noEmitOnError](/tsconfig#noEmitOnError) compiler option.
Try changing your

`hello.ts`

file and running `tsc`

with that flag:sh

tsc --noEmitOnError hello.ts

You’ll notice that `hello.js`

never gets updated.

Explicit Types

Up until now, we haven’t told TypeScript what `person`

or `date`

are.
Let’s edit the code to tell TypeScript that `person`

is a `string`

, and that `date`

should be a `Date`

object.
We’ll also use the `toDateString()`

method on `date`

.

ts

functiongreet (person : string,date :Date ) {console .log (`Hello ${person }, today is ${date .toDateString ()}!`);}[Try]

What we did was add *type annotations* on `person`

and `date`

to describe what types of values `greet`

can be called with.
You can read that signature as ”`greet`

takes a `person`

of type `string`

, and a `date`

of type `Date`

“.

With this, TypeScript can tell us about other cases where `greet`

might have been called incorrectly.
For example…

ts

functiongreet (person : string,date :Date ) {console .log (`Hello ${person }, today is ${date .toDateString ()}!`);}Argument of type 'string' is not assignable to parameter of type 'Date'.2345Argument of type 'string' is not assignable to parameter of type 'Date'.greet ("Maddison",Date ());[Try]

Huh? TypeScript reported an error on our second argument, but why?

Perhaps surprisingly, calling `Date()`

in JavaScript returns a `string`

.
On the other hand, constructing a `Date`

with `new Date()`

actually gives us what we were expecting.

Anyway, we can quickly fix up the error:

ts

functiongreet (person : string,date :Date ) {console .log (`Hello ${person }, today is ${date .toDateString ()}!`);}greet ("Maddison", newDate ());[Try]

Keep in mind, we don’t always have to write explicit type annotations.
In many cases, TypeScript can even just *infer* (or “figure out”) the types for us even if we omit them.

ts

letmsg = "hello there!";[Try]

Even though we didn’t tell TypeScript that `msg`

had the type `string`

it was able to figure that out.
That’s a feature, and it’s best not to add annotations when the type system would end up inferring the same type anyway.

Note: The message bubble inside the previous code sample is what your editor would show if you had hovered over the word.


Erased Types

Let’s take a look at what happens when we compile the above function `greet`

with `tsc`

to output JavaScript:

ts

"use strict";function greet(person, date) {console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));}greet("Maddison", new Date());[Try]

Notice two things here:

- Our
`person`

and`date`

parameters no longer have type annotations. - Our “template string” - that string that used backticks (the
```

character) - was converted to plain strings with concatenations.

More on that second point later, but let’s now focus on that first point. Type annotations aren’t part of JavaScript (or ECMAScript to be pedantic), so there really aren’t any browsers or other runtimes that can just run TypeScript unmodified. That’s why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it. Most TypeScript-specific code gets erased away, and likewise, here our type annotations were completely erased.


Remember: Type annotations never change the runtime behavior of your program.

Downleveling

One other difference from the above was that our template string was rewritten from

js

`Hello ${person}, today is ${date.toDateString()}!`;

to

js

"Hello ".concat(person, ", today is ").concat(date.toDateString(), "!");

Why did this happen?

Template strings are a feature from a version of ECMAScript called ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - *don’t ask*).
TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES5).
This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called *downleveling*.

By default TypeScript targets ES5, an extremely old version of ECMAScript.
We could have chosen something a little bit more recent by using the [ target](/tsconfig#target) option.
Running with

`--target es2015`

changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported.
So running `tsc --target es2015 hello.ts`

gives us the following output:js

function greet(person, date) {console.log(`Hello ${person}, today is ${date.toDateString()}!`);}greet("Maddison", new Date());

While the default target is ES5, the great majority of current browsers support ES2015. Most developers can therefore safely specify ES2015 or above as a target, unless compatibility with certain ancient browsers is important.


Strictness

Different users come to TypeScript looking for different things in a type-checker.
Some people are looking for a more loose opt-in experience which can help validate only some parts of their program, and still have decent tooling.
This is the default experience with TypeScript, where types are optional, inference takes the most lenient types, and there’s no checking for potentially `null`

/`undefined`

values.
Much like how `tsc`

emits in the face of errors, these defaults are put in place to stay out of your way.
If you’re migrating existing JavaScript, that might be a desirable first step.

In contrast, a lot of users prefer to have TypeScript validate as much as it can straight away, and that’s why the language provides strictness settings as well. These strictness settings turn static type-checking from a switch (either your code is checked or not) into something closer to a dial. The further you turn this dial up, the more TypeScript will check for you. This can require a little extra work, but generally speaking it pays for itself in the long run, and enables more thorough checks and more accurate tooling. When possible, a new codebase should always turn these strictness checks on.

TypeScript has several type-checking strictness flags that can be turned on or off, and all of our examples will be written with all of them enabled unless otherwise stated.
The [ strict](/tsconfig#strict) flag in the CLI, or

`"strict": true`

in a [toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

`tsconfig.json`

[and](/tsconfig#noImplicitAny)

`noImplicitAny`

[.](/tsconfig#strictNullChecks)

`strictNullChecks`

`noImplicitAny`


Recall that in some places, TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: `any`

.
This isn’t the worst thing that can happen - after all, falling back to `any`

is just the plain JavaScript experience anyway.

However, using `any`

often defeats the purpose of using TypeScript in the first place.
The more typed your program is, the more validation and tooling you’ll get, meaning you’ll run into fewer bugs as you code.
Turning on the [ noImplicitAny](/tsconfig#noImplicitAny) flag will issue an error on any variables whose type is implicitly inferred as

`any`

.`strictNullChecks`


By default, values like `null`

and `undefined`

are assignable to any other type.
This can make writing some code easier, but forgetting to handle `null`

and `undefined`

is the cause of countless bugs in the world - some consider it a [billion dollar mistake](https://www.youtube.com/watch?v=ybrQvs4x0Ps)!
The [ strictNullChecks](/tsconfig#strictNullChecks) flag makes handling

`null`

and `undefined`

more explicit, and *spares*us from worrying about whether we

*forgot*to handle

`null`

and `undefined`

.

---

## Source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

In this chapter, we’ll cover some of the most common types of values you’ll find in JavaScript code, and explain the corresponding ways to describe those types in TypeScript. This isn’t an exhaustive list, and future chapters will describe more ways to name and use other types.

Types can also appear in many more *places* than just type annotations.
As we learn about the types themselves, we’ll also learn about the places where we can refer to these types to form new constructs.

We’ll start by reviewing the most basic and common types you might encounter when writing JavaScript or TypeScript code. These will later form the core building blocks of more complex types.

The primitives: `string`

, `number`

, and `boolean`


JavaScript has three very commonly used [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive): `string`

, `number`

, and `boolean`

.
Each has a corresponding type in TypeScript.
As you might expect, these are the same names you’d see if you used the JavaScript `typeof`

operator on a value of those types:

`string`

represents string values like`"Hello, world"`

`number`

is for numbers like`42`

. JavaScript does not have a special runtime value for integers, so there’s no equivalent to`int`

or`float`

- everything is simply`number`

`boolean`

is for the two values`true`

and`false`


The type names

`String`

,`Number`

, and`Boolean`

(starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code.Alwaysuse`string`

,`number`

, or`boolean`

for types.

Arrays

To specify the type of an array like `[1, 2, 3]`

, you can use the syntax `number[]`

; this syntax works for any type (e.g. `string[]`

is an array of strings, and so on).
You may also see this written as `Array<number>`

, which means the same thing.
We’ll learn more about the syntax `T<U>`

when we cover *generics*.

Note that

`[number]`

is a different thing; refer to the section on[Tuples].

`any`


TypeScript also has a special type, `any`

, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type `any`

, you can access any properties of it (which will in turn be of type `any`

), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

ts

letobj : any = {x : 0 };// None of the following lines of code will throw compiler errors.// Using `any` disables all further type checking, and it is assumed// you know the environment better than TypeScript.obj .foo ();obj ();obj .bar = 100;obj = "hello";constn : number =obj ;[Try]

The `any`

type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

`noImplicitAny`


When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`

.

You usually want to avoid this, though, because `any`

isn’t type-checked.
Use the compiler flag [ noImplicitAny](/tsconfig#noImplicitAny) to flag any implicit

`any`

as an error.Type Annotations on Variables

When you declare a variable using `const`

, `var`

, or `let`

, you can optionally add a type annotation to explicitly specify the type of the variable:

ts

letmyName : string = "Alice";[Try]

TypeScript doesn’t use “types on the left”-style declarations like

`int x = 0;`

Type annotations will always goafterthe thing being typed.

In most cases, though, this isn’t needed.
Wherever possible, TypeScript tries to automatically *infer* the types in your code.
For example, the type of a variable is inferred based on the type of its initializer:

ts

// No type annotation needed -- 'myName' inferred as type 'string'letmyName = "Alice";[Try]

For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on.

Functions

Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

Parameter Type Annotations

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

ts

// Parameter type annotationfunctiongreet (name : string) {console .log ("Hello, " +name .toUpperCase () + "!!");}[Try]

When a parameter has a type annotation, arguments to that function will be checked:

ts

// Would be a runtime error if executed!Argument of type 'number' is not assignable to parameter of type 'string'.2345Argument of type 'number' is not assignable to parameter of type 'string'.greet (42 );[Try]

Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.


Return Type Annotations

You can also add return type annotations. Return type annotations appear after the parameter list:

ts

functiongetFavoriteNumber (): number {return 26;}[Try]

Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its `return`

statements.
The type annotation in the above example doesn’t change anything.
Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.

Functions Which Return Promises

If you want to annotate the return type of a function which returns a promise, you should use the `Promise`

type:

ts

async functiongetFavoriteNumber ():Promise <number> {return 26;}[Try]

Anonymous Functions

Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

Here’s an example:

ts

constnames = ["Alice", "Bob", "Eve"];// Contextual typing for function - parameter s inferred to have type stringnames .forEach (function (s ) {console .log (s .toUpperCase ());});// Contextual typing also applies to arrow functionsnames .forEach ((s ) => {console .log (s .toUpperCase ());});[Try]

Even though the parameter `s`

didn’t have a type annotation, TypeScript used the types of the `forEach`

function, along with the inferred type of the array, to determine the type `s`

will have.

This process is called *contextual typing* because the *context* that the function occurred within informs what type it should have.

Similar to the inference rules, you don’t need to explicitly learn how this happens, but understanding that it *does* happen can help you notice when type annotations aren’t needed.
Later, we’ll see more examples of how the context that a value occurs in can affect its type.

Object Types

Apart from primitives, the most common sort of type you’ll encounter is an *object type*.
This refers to any JavaScript value with properties, which is almost all of them!
To define an object type, we simply list its properties and their types.

For example, here’s a function that takes a point-like object:

ts

// The parameter's type annotation is an object typefunctionprintCoord (pt : {x : number;y : number }) {console .log ("The coordinate's x value is " +pt .x );console .log ("The coordinate's y value is " +pt .y );}printCoord ({x : 3,y : 7 });[Try]

Here, we annotated the parameter with a type with two properties - `x`

and `y`

- which are both of type `number`

.
You can use `,`

or `;`

to separate the properties, and the last separator is optional either way.

The type part of each property is also optional.
If you don’t specify a type, it will be assumed to be `any`

.

Optional Properties

Object types can also specify that some or all of their properties are *optional*.
To do this, add a `?`

after the property name:

ts

functionprintName (obj : {first : string;last ?: string }) {// ...}// Both OKprintName ({first : "Bob" });printName ({first : "Alice",last : "Alisson" });[Try]

In JavaScript, if you access a property that doesn’t exist, you’ll get the value `undefined`

rather than a runtime error.
Because of this, when you *read* from an optional property, you’ll have to check for `undefined`

before using it.

ts

functionprintName (obj : {first : string;last ?: string }) {// Error - might crash if 'obj.last' wasn't provided!'obj.last' is possibly 'undefined'.18048'obj.last' is possibly 'undefined'.console .log (obj .last .toUpperCase ());if (obj .last !==undefined ) {// OKconsole .log (obj .last .toUpperCase ());}// A safe alternative using modern JavaScript syntax:console .log (obj .last ?.toUpperCase ());}[Try]

Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
Now that we know how to write a few types, it’s time to start *combining* them in interesting ways.

Defining a Union Type

The first way to combine types you might see is a *union* type.
A union type is a type formed from two or more other types, representing values that may be *any one* of those types.
We refer to each of these types as the union’s *members*.

Let’s write a function that can operate on strings or numbers:

ts

functionprintId (id : number | string) {console .log ("Your ID is: " +id );}// OKprintId (101);// OKprintId ("202");// ErrorArgument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.2345Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.printId ({myID : 22342 });[Try]

The separator of the union members is allowed before the first element, so you could also write this:

ts

functionprintTextOrNumberOrBool (textOrNumberOrBool :| string| number| boolean) {console .log (textOrNumberOrBool );}[Try]

Working with Union Types

It’s easy to *provide* a value matching a union type - simply provide a type matching any of the union’s members.
If you *have* a value of a union type, how do you work with it?

TypeScript will only allow an operation if it is valid for *every* member of the union.
For example, if you have the union `string | number`

, you can’t use methods that are only available on `string`

:

ts

functionprintId (id : number | string) {Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.2339Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.console .log (id .()); toUpperCase }[Try]

The solution is to *narrow* the union with code, the same as you would in JavaScript without type annotations.
*Narrowing* occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

For example, TypeScript knows that only a `string`

value will have a `typeof`

value `"string"`

:

ts

functionprintId (id : number | string) {if (typeofid === "string") {// In this branch, id is of type 'string'console .log (id .toUpperCase ());} else {// Here, id is of type 'number'console .log (id );}}[Try]

Another example is to use a function like `Array.isArray`

:

ts

functionwelcomePeople (x : string[] | string) {if (Array .isArray (x )) {// Here: 'x' is 'string[]'console .log ("Hello, " +x .join (" and "));} else {// Here: 'x' is 'string'console .log ("Welcome lone traveler " +x );}}[Try]

Notice that in the `else`

branch, we don’t need to do anything special - if `x`

wasn’t a `string[]`

, then it must have been a `string`

.

Sometimes you’ll have a union where all the members have something in common.
For example, both arrays and strings have a `slice`

method.
If every member in a union has a property in common, you can use that property without narrowing:

ts

// Return type is inferred as number[] | stringfunctiongetFirstThree (x : number[] | string) {returnx .slice (0, 3);}[Try]

It might be confusing that a

unionof types appears to have theintersectionof those types’ properties. This is not an accident - the nameunioncomes from type theory. Theunion`number | string`

is composed by taking the unionof the valuesfrom each type. Notice that given two sets with corresponding facts about each set, only theintersectionof those facts applies to theunionof the sets themselves. For example, if we had a room of tall people wearing hats, and another room of Spanish speakers wearing hats, after combining those rooms, the only thing we know abouteveryperson is that they must be wearing a hat.

Type Aliases

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A *type alias* is exactly that - a *name* for any *type*.
The syntax for a type alias is:

ts

typePoint = {x : number;y : number;};// Exactly the same as the earlier examplefunctionprintCoord (pt :Point ) {console .log ("The coordinate's x value is " +pt .x );console .log ("The coordinate's y value is " +pt .y );}printCoord ({x : 100,y : 100 });[Try]

You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:

ts

typeID = number | string;[Try]

Note that aliases are *only* aliases - you cannot use type aliases to create different/distinct “versions” of the same type.
When you use the alias, it’s exactly as if you had written the aliased type.
In other words, this code might *look* illegal, but is OK according to TypeScript because both types are aliases for the same type:

ts

typeUserInputSanitizedString = string;functionsanitizeInput (str : string):UserInputSanitizedString {returnsanitize (str );}// Create a sanitized inputletuserInput =sanitizeInput (getInput ());// Can still be re-assigned with a string thoughuserInput = "new input";[Try]

Interfaces

An *interface declaration* is another way to name an object type:

ts

interfacePoint {x : number;y : number;}functionprintCoord (pt :Point ) {console .log ("The coordinate's x value is " +pt .x );console .log ("The coordinate's y value is " +pt .y );}printCoord ({x : 100,y : 100 });[Try]

Just like when we used a type alias above, the example works just as if we had used an anonymous object type.
TypeScript is only concerned with the *structure* of the value we passed to `printCoord`

- it only cares that it has the expected properties.
Being concerned only with the structure and capabilities of types is why we call TypeScript a *structurally typed* type system.

Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
Almost all features of an `interface`

are available in `type`

, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

`Interface` |
`Type` |
|---|---|
|
Extending an interface
|
Extending a type via intersections
|
|
Adding new fields to an existing interface
|
A type cannot be changed after being created
|

You’ll learn more about these concepts in later chapters, so don’t worry if you don’t understand all of these right away.

- Prior to TypeScript version 4.2, type alias names
, sometimes in place of the equivalent anonymous type (which may or may not be desirable). Interfaces will always be named in error messages.*may*appear in error messages - Type aliases may not participate
[in declaration merging, but interfaces can](/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA). - Interfaces may only be used to
[declare the shapes of objects, not rename primitives](/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA). - Interface names will
in error messages, but*always*appear in their original form*only*when they are used by name. - Using interfaces with
`extends`

[can often be more performant for the compiler](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections)than type aliases with intersections

For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use `interface`

until you need to use features from `type`

.

Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using `document.getElementById`

, TypeScript only knows that this will return *some* kind of `HTMLElement`

, but you might know that your page will always have an `HTMLCanvasElement`

with a given ID.

In this situation, you can use a *type assertion* to specify a more specific type:

ts

constmyCanvas =document .getElementById ("main_canvas") asHTMLCanvasElement ;[Try]

Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

You can also use the angle-bracket syntax (except if the code is in a `.tsx`

file), which is equivalent:

ts

constmyCanvas = <HTMLCanvasElement >document .getElementById ("main_canvas");[Try]

Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or

`null`

generated if the type assertion is wrong.

TypeScript only allows type assertions which convert to a *more specific* or *less specific* version of a type.
This rule prevents “impossible” coercions like:

ts

constConversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.2352Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.x = "hello" as number;[Try]

Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid.
If this happens, you can use two assertions, first to `any`

(or `unknown`

, which we’ll introduce later), then to the desired type:

ts

consta =expr as any asT ;[Try]

Literal Types

In addition to the general types `string`

and `number`

, we can refer to *specific* strings and numbers in type positions.

One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both `var`

and `let`

allow for changing what is held inside the variable, and `const`

does not. This is reflected in how TypeScript creates types for literals.

ts

letchangingString = "Hello World";changingString = "Olá Mundo";// Because `changingString` can represent any possible string, that// is how TypeScript describes it in the type systemchangingString ;constconstantString = "Hello World";// Because `constantString` can only represent 1 possible string, it// has a literal type representationconstantString ;[Try]

By themselves, literal types aren’t very valuable:

ts

letx : "hello" = "hello";// OKx = "hello";// ...Type '"howdy"' is not assignable to type '"hello"'.2322Type '"howdy"' is not assignable to type '"hello"'.= "howdy"; x [Try]

It’s not much use to have a variable that can only have one value!

But by *combining* literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

ts

functionprintText (s : string,alignment : "left" | "right" | "center") {// ...}printText ("Hello, world", "left");Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.2345Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.printText ("G'day, mate","centre" );[Try]

Numeric literal types work the same way:

ts

functioncompare (a : string,b : string): -1 | 0 | 1 {returna ===b ? 0 :a >b ? 1 : -1;}[Try]

Of course, you can combine these with non-literal types:

ts

interfaceOptions {width : number;}functionconfigure (x :Options | "auto") {// ...}configure ({width : 100 });configure ("auto");Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.2345Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.configure ("automatic" );[Try]

There’s one more kind of literal type: boolean literals.
There are only two boolean literal types, and as you might guess, they are the types `true`

and `false`

.
The type `boolean`

itself is actually just an alias for the union `true | false`

.

Literal Inference

When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:

ts

constobj = {counter : 0 };if (someCondition ) {obj .counter = 1;}[Try]

TypeScript doesn’t assume the assignment of `1`

to a field which previously had `0`

is an error.
Another way of saying this is that `obj.counter`

must have the type `number`

, not `0`

, because types are used to determine both *reading* and *writing* behavior.

The same applies to strings:

ts

declare functionhandleRequest (url : string,method : "GET" | "POST"): void;constreq = {url : "https://example.com",method : "GET" };Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.2345Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.handleRequest (req .url ,req .method );[Try]

In the above example `req.method`

is inferred to be `string`

, not `"GET"`

. Because code can be evaluated between the creation of `req`

and the call of `handleRequest`

which could assign a new string like `"GUESS"`

to `req.method`

, TypeScript considers this code to have an error.

There are two ways to work around this.

-
You can change the inference by adding a type assertion in either location:

ts// Change 1:constreq = {url : "https://example.com",method : "GET" as "GET" };// Change 2handleRequest (req .url ,req .method as "GET");[Try](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm-fgBhInwQARjYbMDwGeDgqeABeeABveBZ2dQIMDAAHOjZ7EAAPKCEMsgA6MKEpQRExCWl5JXgoOnV65QBfKzsHP2JeBAAmG39SCmpaBkYokuTBKerxYEbm2UUpfXMgA)Change 1 means “I intend for

`req.method`

to always have the*literal type*`"GET"`

”, preventing the possible assignment of`"GUESS"`

to that field after. Change 2 means “I know for other reasons that`req.method`

has the value`"GET"`

“. -
You can use

`as const`

to convert the entire object to be type literals:tsconstreq = {url : "https://example.com",method : "GET" } asconst ;handleRequest (req .url ,req .method );[Try](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm2DwN4cKvAAvPAA3vAs7OoEGBgADnRs9iAAHlBCsWQAdN5CUoIiYhLS8krwAL7wUHTw3qgMVtZEJGSUNPRM-pkRgp0F4sD65kA)

The `as const`

suffix acts like `const`

but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string`

or `number`

.

`null`

and `undefined`


JavaScript has two primitive values used to signal absent or uninitialized value: `null`

and `undefined`

.

TypeScript has two corresponding *types* by the same names. How these types behave depends on whether you have the [ strictNullChecks](/tsconfig#strictNullChecks) option on.

`strictNullChecks`

off

With `strictNullChecks`

*off*, values that might be `null`

or `undefined`

can still be accessed normally, and the values `null`

and `undefined`

can be assigned to a property of any type.
This is similar to how languages without null checks (e.g. C#, Java) behave.
The lack of checking for these values tends to be a major source of bugs; we always recommend people turn [ strictNullChecks](/tsconfig#strictNullChecks) on if it’s practical to do so in their codebase.

`strictNullChecks`

on

With `strictNullChecks`

*on*, when a value is `null`

or `undefined`

, you will need to test for those values before using methods or properties on that value.
Just like checking for `undefined`

before using an optional property, we can use *narrowing* to check for values that might be `null`

:

ts

functiondoSomething (x : string | null) {if (x === null) {// do nothing} else {console .log ("Hello, " +x .toUpperCase ());}}[Try]

Non-null Assertion Operator (Postfix `!`

)

TypeScript also has a special syntax for removing `null`

and `undefined`

from a type without doing any explicit checking.
Writing `!`

after any expression is effectively a type assertion that the value isn’t `null`

or `undefined`

:

ts

functionliveDangerously (x ?: number | null) {// No errorconsole .log (x !.toFixed ());}[Try]

Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use `!`

when you know that the value *can’t* be `null`

or `undefined`

.

Enums

Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is *not* a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. You can read more about enums in the [Enum reference page](/docs/handbook/enums.html).

Less Common Primitives

It’s worth mentioning the rest of the primitives in JavaScript which are represented in the type system. Though we will not go into depth here.

`bigint`


From ES2020 onwards, there is a primitive in JavaScript used for very large integers, `BigInt`

:

ts

// Creating a bigint via the BigInt functionconstoneHundred : bigint =BigInt (100);// Creating a BigInt via the literal syntaxconstanotherHundred : bigint = 100n;[Try]

You can learn more about BigInt in [the TypeScript 3.2 release notes](/docs/handbook/release-notes/typescript-3-2.html#bigint).

`symbol`


There is a primitive in JavaScript used to create a globally unique reference via the function `Symbol()`

:

ts

constfirstName =Symbol ("name");constsecondName =Symbol ("name");if (This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.2367This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.firstName ===secondName ) {// Can't ever happen}[Try]

You can learn more about them in [Symbols reference page](/docs/handbook/symbols.html).

---

## Source: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

Imagine we have a function called `padLeft`

.

ts

functionpadLeft (padding : number | string,input : string): string {throw newError ("Not implemented yet!");}[Try]

If `padding`

is a `number`

, it will treat that as the number of spaces we want to prepend to `input`

.
If `padding`

is a `string`

, it should just prepend `padding`

to `input`

.
Let’s try to implement the logic for when `padLeft`

is passed a `number`

for `padding`

.

ts

functionpadLeft (padding : number | string,input : string): string {return " ".Argument of type 'string | number' is not assignable to parameter of type 'number'. Type 'string' is not assignable to type 'number'.2345Argument of type 'string | number' is not assignable to parameter of type 'number'. Type 'string' is not assignable to type 'number'.repeat () + padding input ;}[Try]

Uh-oh, we’re getting an error on `padding`

.
TypeScript is warning us that we’re passing a value with type `number | string`

to the `repeat`

function, which only accepts a `number`

, and it’s right.
In other words, we haven’t explicitly checked if `padding`

is a `number`

first, nor are we handling the case where it’s a `string`

, so let’s do exactly that.

ts

functionpadLeft (padding : number | string,input : string): string {if (typeofpadding === "number") {return " ".repeat (padding ) +input ;}returnpadding +input ;}[Try]

If this mostly looks like uninteresting JavaScript code, that’s sort of the point. Apart from the annotations we put in place, this TypeScript code looks like JavaScript. The idea is that TypeScript’s type system aims to make it as easy as possible to write typical JavaScript code without bending over backwards to get type safety.

While it might not look like much, there’s actually a lot going on under the covers here.
Much like how TypeScript analyzes runtime values using static types, it overlays type analysis on JavaScript’s runtime control flow constructs like `if/else`

, conditional ternaries, loops, truthiness checks, etc., which can all affect those types.

Within our `if`

check, TypeScript sees `typeof padding === "number"`

and understands that as a special form of code called a *type guard*.
TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position.
It looks at these special checks (called *type guards*) and assignments, and the process of refining types to more specific types than declared is called *narrowing*.
In many editors we can observe these types as they change, and we’ll even do so in our examples.

ts

functionpadLeft (padding : number | string,input : string): string {if (typeofpadding === "number") {return " ".repeat (padding ) +input ;}returnpadding +input ;}[Try]

There are a couple of different constructs TypeScript understands for narrowing.

`typeof`

type guards

As we’ve seen, JavaScript supports a `typeof`

operator which can give very basic information about the type of values we have at runtime.
TypeScript expects this to return a certain set of strings:

`"string"`

`"number"`

`"bigint"`

`"boolean"`

`"symbol"`

`"undefined"`

`"object"`

`"function"`


Like we saw with `padLeft`

, this operator comes up pretty often in a number of JavaScript libraries, and TypeScript can understand it to narrow types in different branches.

In TypeScript, checking against the value returned by `typeof`

is a type guard.
Because TypeScript encodes how `typeof`

operates on different values, it knows about some of its quirks in JavaScript.
For example, notice that in the list above, `typeof`

doesn’t return the string `null`

.
Check out the following example:

ts

functionprintAll (strs : string | string[] | null) {if (typeofstrs === "object") {for (const'strs' is possibly 'null'.18047'strs' is possibly 'null'.s of) { strs console .log (s );}} else if (typeofstrs === "string") {console .log (strs );} else {// do nothing}}[Try]

In the `printAll`

function, we try to check if `strs`

is an object to see if it’s an array type (now might be a good time to reinforce that arrays are object types in JavaScript).
But it turns out that in JavaScript, `typeof null`

is actually `"object"`

!
This is one of those unfortunate accidents of history.

Users with enough experience might not be surprised, but not everyone has run into this in JavaScript; luckily, TypeScript lets us know that `strs`

was only narrowed down to `string[] | null`

instead of just `string[]`

.

This might be a good segue into what we’ll call “truthiness” checking.

Truthiness narrowing

Truthiness might not be a word you’ll find in the dictionary, but it’s very much something you’ll hear about in JavaScript.

In JavaScript, we can use any expression in conditionals, `&&`

s, `||`

s, `if`

statements, Boolean negations (`!`

), and more.
As an example, `if`

statements don’t expect their condition to always have the type `boolean`

.

ts

functiongetUsersOnlineMessage (numUsersOnline : number) {if (numUsersOnline ) {return `There are ${numUsersOnline } online now!`;}return "Nobody's here. :(";}[Try]

In JavaScript, constructs like `if`

first “coerce” their conditions to `boolean`

s to make sense of them, and then choose their branches depending on whether the result is `true`

or `false`

.
Values like

`0`

`NaN`

`""`

(the empty string)`0n`

(the`bigint`

version of zero)`null`

`undefined`


all coerce to `false`

, and other values get coerced to `true`

.
You can always coerce values to `boolean`

s by running them through the `Boolean`

function, or by using the shorter double-Boolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type `true`

, while inferring the first as type `boolean`

.)

ts

// both of these result in 'true'Boolean ("hello"); // type: boolean, value: true!!This kind of expression is always truthy.2872This kind of expression is always truthy."world" ; // type: true, value: true[Try]

It’s fairly popular to leverage this behavior, especially for guarding against values like `null`

or `undefined`

.
As an example, let’s try using it for our `printAll`

function.

ts

functionprintAll (strs : string | string[] | null) {if (strs && typeofstrs === "object") {for (consts ofstrs ) {console .log (s );}} else if (typeofstrs === "string") {console .log (strs );}}[Try]

You’ll notice that we’ve gotten rid of the error above by checking if `strs`

is truthy.
This at least prevents us from dreaded errors when we run our code like:

txt

TypeError: null is not iterable

Keep in mind though that truthiness checking on primitives can often be error prone.
As an example, consider a different attempt at writing `printAll`


ts

functionprintAll (strs : string | string[] | null) {// !!!!!!!!!!!!!!!!// DON'T DO THIS!// KEEP READING// !!!!!!!!!!!!!!!!if (strs ) {if (typeofstrs === "object") {for (consts ofstrs ) {console .log (s );}} else if (typeofstrs === "string") {console .log (strs );}}}[Try]

We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.

TypeScript doesn’t hurt us here at all, but this behavior is worth noting if you’re less familiar with JavaScript.
TypeScript can often help you catch bugs early on, but if you choose to do *nothing* with a value, there’s only so much that it can do without being overly prescriptive.
If you want, you can make sure you handle situations like these with a linter.

One last word on narrowing by truthiness is that Boolean negations with `!`

filter out from negated branches.

ts

functionmultiplyAll (values : number[] | undefined,factor : number): number[] | undefined {if (!values ) {returnvalues ;} else {returnvalues .map ((x ) =>x *factor );}}[Try]

Equality narrowing

TypeScript also uses `switch`

statements and equality checks like `===`

, `!==`

, `==`

, and `!=`

to narrow types.
For example:

ts

functionexample (x : string | number,y : string | boolean) {if (x ===y ) {// We can now call any 'string' method on 'x' or 'y'.x .toUpperCase ();y .toLowerCase ();} else {console .log (x );console .log (y );}}[Try]

When we checked that `x`

and `y`

are both equal in the above example, TypeScript knew their types also had to be equal.
Since `string`

is the only common type that both `x`

and `y`

could take on, TypeScript knows that `x`

and `y`

must be `string`

s in the first branch.

Checking against specific literal values (as opposed to variables) works also.
In our section about truthiness narrowing, we wrote a `printAll`

function which was error-prone because it accidentally didn’t handle empty strings properly.
Instead we could have done a specific check to block out `null`

s, and TypeScript still correctly removes `null`

from the type of `strs`

.

ts

functionprintAll (strs : string | string[] | null) {if (strs !== null) {if (typeofstrs === "object") {for (consts ofstrs ) {console .log (s );}} else if (typeofstrs === "string") {console .log (strs );}}}[Try]

JavaScript’s looser equality checks with `==`

and `!=`

also get narrowed correctly.
If you’re unfamiliar, checking whether something `== null`

actually not only checks whether it is specifically the value `null`

- it also checks whether it’s potentially `undefined`

.
The same applies to `== undefined`

: it checks whether a value is either `null`

or `undefined`

.

ts

interfaceContainer {value : number | null | undefined;}functionmultiplyValue (container :Container ,factor : number) {// Remove both 'null' and 'undefined' from the type.if (container .value != null) {console .log (container .value );// Now we can safely multiply 'container.value'.container .value *=factor ;}}[Try]

The `in`

operator narrowing

JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the `in`

operator.
TypeScript takes this into account as a way to narrow down potential types.

For example, with the code: `"value" in x`

where `"value"`

is a string literal and `x`

is a union type.
The “true” branch narrows `x`

’s types which have either an optional or required property `value`

, and the “false” branch narrows to types which have an optional or missing property `value`

.

ts

typeFish = {swim : () => void };typeBird = {fly : () => void };functionmove (animal :Fish |Bird ) {if ("swim" inanimal ) {returnanimal .swim ();}returnanimal .fly ();}[Try]

To reiterate, optional properties will exist in both sides for narrowing. For example, a human could both swim and fly (with the right equipment) and thus should show up in both sides of the `in`

check:

ts

typeFish = {swim : () => void };typeBird = {fly : () => void };typeHuman = {swim ?: () => void;fly ?: () => void };functionmove (animal :Fish |Bird |Human ) {if ("swim" inanimal ) {animal ;} else {animal ;}}[Try]

`instanceof`

narrowing

JavaScript has an operator for checking whether or not a value is an “instance” of another value.
More specifically, in JavaScript `x instanceof Foo`

checks whether the *prototype chain* of `x`

contains `Foo.prototype`

.
While we won’t dive deep here, and you’ll see more of this when we get into classes, they can still be useful for most values that can be constructed with `new`

.
As you might have guessed, `instanceof`

is also a type guard, and TypeScript narrows in branches guarded by `instanceof`

s.

ts

functionlogValue (x :Date | string) {if (x instanceofDate ) {console .log (x .toUTCString ());} else {console .log (x .toUpperCase ());}}[Try]

Assignments

As we mentioned earlier, when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

ts

letx =Math .random () < 0.5 ? 10 : "hello world!";x = 1;console .log (x );x = "goodbye!";console .log (x );[Try]

Notice that each of these assignments is valid.
Even though the observed type of `x`

changed to `number`

after our first assignment, we were still able to assign a `string`

to `x`

.
This is because the *declared type* of `x`

- the type that `x`

started with - is `string | number`

, and assignability is always checked against the declared type.

If we’d assigned a `boolean`

to `x`

, we’d have seen an error since that wasn’t part of the declared type.

ts

letx =Math .random () < 0.5 ? 10 : "hello world!";x = 1;console .log (x );Type 'boolean' is not assignable to type 'string | number'.2322Type 'boolean' is not assignable to type 'string | number'.= true; x console .log (x );[Try]

Control flow analysis

Up until this point, we’ve gone through some basic examples of how TypeScript narrows within specific branches.
But there’s a bit more going on than just walking up from every variable and looking for type guards in `if`

s, `while`

s, conditionals, etc.
For example

ts

functionpadLeft (padding : number | string,input : string) {if (typeofpadding === "number") {return " ".repeat (padding ) +input ;}returnpadding +input ;}[Try]

`padLeft`

returns from within its first `if`

block.
TypeScript was able to analyze this code and see that the rest of the body (`return padding + input;`

) is *unreachable* in the case where `padding`

is a `number`

.
As a result, it was able to remove `number`

from the type of `padding`

(narrowing from `string | number`

to `string`

) for the rest of the function.

This analysis of code based on reachability is called *control flow analysis*, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.
When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.

ts

functionexample () {letx : string | number | boolean;x =Math .random () < 0.5;console .log (x );if (Math .random () < 0.5) {x = "hello";console .log (x );} else {x = 100;console .log (x );}returnx ;}[Try]

Using type predicates

We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type is a *type predicate*:

ts

functionisFish (pet :Fish |Bird ):pet isFish {return (pet asFish ).swim !==undefined ;}[Try]

`pet is Fish`

is our type predicate in this example.
A predicate takes the form `parameterName is Type`

, where `parameterName`

must be the name of a parameter from the current function signature.

Any time `isFish`

is called with some variable, TypeScript will *narrow* that variable to that specific type if the original type is compatible.

ts

// Both calls to 'swim' and 'fly' are now okay.letpet =getSmallPet ();if (isFish (pet )) {pet .swim ();} else {pet .fly ();}[Try]

Notice that TypeScript not only knows that `pet`

is a `Fish`

in the `if`

branch;
it also knows that in the `else`

branch, you *don’t* have a `Fish`

, so you must have a `Bird`

.

You may use the type guard `isFish`

to filter an array of `Fish | Bird`

and obtain an array of `Fish`

:

ts

constzoo : (Fish |Bird )[] = [getSmallPet (),getSmallPet (),getSmallPet ()];constunderWater1 :Fish [] =zoo .filter (isFish );// or, equivalentlyconstunderWater2 :Fish [] =zoo .filter (isFish ) asFish [];// The predicate may need repeating for more complex examplesconstunderWater3 :Fish [] =zoo .filter ((pet ):pet isFish => {if (pet .name === "sharkey") return false;returnisFish (pet );});[Try]

In addition, classes can [use this is Type](/docs/handbook/2/classes.html#this-based-type-guards) to narrow their type.

Assertion functions

Types can also be narrowed using [Assertion functions](/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

Discriminated unions

Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like `string`

, `boolean`

, and `number`

.
While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

For some motivation, let’s imagine we’re trying to encode shapes like circles and squares.
Circles keep track of their radiuses and squares keep track of their side lengths.
We’ll use a field called `kind`

to tell which shape we’re dealing with.
Here’s a first attempt at defining `Shape`

.

ts

interfaceShape {kind : "circle" | "square";radius ?: number;sideLength ?: number;}[Try]

Notice we’re using a union of string literal types: `"circle"`

and `"square"`

to tell us whether we should treat the shape as a circle or square respectively.
By using `"circle" | "square"`

instead of `string`

, we can avoid misspelling issues.

ts

functionhandleShape (shape :Shape ) {// oops!if (This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.2367This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.shape .kind === "rect") {// ...}}[Try]

We can write a `getArea`

function that applies the right logic based on if it’s dealing with a circle or square.
We’ll first try dealing with circles.

ts

functiongetArea (shape :Shape ) {return'shape.radius' is possibly 'undefined'.18048'shape.radius' is possibly 'undefined'.Math .PI *shape .radius ** 2;}[Try]

Under [ strictNullChecks](/tsconfig#strictNullChecks) that gives us an error - which is appropriate since

`radius`

might not be defined.
But what if we perform the appropriate checks on the `kind`

property?ts

functiongetArea (shape :Shape ) {if (shape .kind === "circle") {return'shape.radius' is possibly 'undefined'.18048'shape.radius' is possibly 'undefined'.Math .PI *shape .radius ** 2;}}[Try]

Hmm, TypeScript still doesn’t know what to do here.
We’ve hit a point where we know more about our values than the type checker does.
We could try to use a non-null assertion (a `!`

after `shape.radius`

) to say that `radius`

is definitely present.

ts

functiongetArea (shape :Shape ) {if (shape .kind === "circle") {returnMath .PI *shape .radius ! ** 2;}}[Try]

But this doesn’t feel ideal.
We had to shout a bit at the type-checker with those non-null assertions (`!`

) to convince it that `shape.radius`

was defined, but those assertions are error-prone if we start to move code around.
Additionally, outside of [ strictNullChecks](/tsconfig#strictNullChecks) we’re able to accidentally access any of those fields anyway (since optional properties are just assumed to always be present when reading them).
We can definitely do better.

The problem with this encoding of `Shape`

is that the type-checker doesn’t have any way to know whether or not `radius`

or `sideLength`

are present based on the `kind`

property.
We need to communicate what *we* know to the type checker.
With that in mind, let’s take another swing at defining `Shape`

.

ts

interfaceCircle {kind : "circle";radius : number;}interfaceSquare {kind : "square";sideLength : number;}typeShape =Circle |Square ;[Try]

Here, we’ve properly separated `Shape`

out into two types with different values for the `kind`

property, but `radius`

and `sideLength`

are declared as required properties in their respective types.

Let’s see what happens here when we try to access the `radius`

of a `Shape`

.

ts

functiongetArea (shape :Shape ) {returnProperty 'radius' does not exist on type 'Shape'. Property 'radius' does not exist on type 'Square'.2339Property 'radius' does not exist on type 'Shape'. Property 'radius' does not exist on type 'Square'.Math .PI *shape .** 2; radius }[Try]

Like with our first definition of `Shape`

, this is still an error.
When `radius`

was optional, we got an error (with [ strictNullChecks](/tsconfig#strictNullChecks) enabled) because TypeScript couldn’t tell whether the property was present.
Now that

`Shape`

is a union, TypeScript is telling us that `shape`

might be a `Square`

, and `Square`

s don’t have `radius`

defined on them!
Both interpretations are correct, but only the union encoding of `Shape`

will cause an error regardless of how [is configured.](/tsconfig#strictNullChecks)

`strictNullChecks`

But what if we tried checking the `kind`

property again?

ts

functiongetArea (shape :Shape ) {if (shape .kind === "circle") {returnMath .PI *shape .radius ** 2;}}[Try]

That got rid of the error!
When every type in a union contains a common property with literal types, TypeScript considers that to be a *discriminated union*, and can narrow out the members of the union.

In this case, `kind`

was that common property (which is what’s considered a *discriminant* property of `Shape`

).
Checking whether the `kind`

property was `"circle"`

got rid of every type in `Shape`

that didn’t have a `kind`

property with the type `"circle"`

.
That narrowed `shape`

down to the type `Circle`

.

The same checking works with `switch`

statements as well.
Now we can try to write our complete `getArea`

without any pesky `!`

non-null assertions.

ts

functiongetArea (shape :Shape ) {switch (shape .kind ) {case "circle":returnMath .PI *shape .radius ** 2;case "square":returnshape .sideLength ** 2;}}[Try]

The important thing here was the encoding of `Shape`

.
Communicating the right information to TypeScript - that `Circle`

and `Square`

were really two separate types with specific `kind`

fields - was crucial.
Doing that lets us write type-safe TypeScript code that looks no different than the JavaScript we would’ve written otherwise.
From there, the type system was able to do the “right” thing and figure out the types in each branch of our `switch`

statement.

As an aside, try playing around with the above example and remove some of the return keywords. You’ll see that type-checking can help avoid bugs when accidentally falling through different clauses in a

`switch`

statement.

Discriminated unions are useful for more than just talking about circles and squares. They’re good for representing any sort of messaging scheme in JavaScript, like when sending messages over the network (client/server communication), or encoding mutations in a state management framework.

The `never`

type

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left.
In those cases, TypeScript will use a `never`

type to represent a state which shouldn’t exist.

Exhaustiveness checking

The `never`

type is assignable to every type; however, no type is assignable to `never`

(except `never`

itself). This means you can use narrowing and rely on `never`

turning up to do exhaustive checking in a `switch`

statement.

For example, adding a `default`

to our `getArea`

function which tries to assign the shape to `never`

will not raise an error when every possible case has been handled.

ts

typeShape =Circle |Square ;functiongetArea (shape :Shape ) {switch (shape .kind ) {case "circle":returnMath .PI *shape .radius ** 2;case "square":returnshape .sideLength ** 2;default:const_exhaustiveCheck : never =shape ;return_exhaustiveCheck ;}}[Try]

Adding a new member to the `Shape`

union, will cause a TypeScript error:

ts

interfaceTriangle {kind : "triangle";sideLength : number;}typeShape =Circle |Square |Triangle ;functiongetArea (shape :Shape ) {switch (shape .kind ) {case "circle":returnMath .PI *shape .radius ** 2;case "square":returnshape .sideLength ** 2;default:constType 'Triangle' is not assignable to type 'never'.2322Type 'Triangle' is not assignable to type 'never'.: never = _exhaustiveCheck shape ;return_exhaustiveCheck ;}}[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/functions.html

Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class. They’re also values, and just like other values, TypeScript has many ways to describe how functions can be called. Let’s learn about how to write types that describe functions.

Function Type Expressions

The simplest way to describe a function is with a *function type expression*.
These types are syntactically similar to arrow functions:

ts

functiongreeter (fn : (a : string) => void) {fn ("Hello, World");}functionprintToConsole (s : string) {console .log (s );}greeter (printToConsole );[Try]

The syntax `(a: string) => void`

means “a function with one parameter, named `a`

, of type `string`

, that doesn’t have a return value”.
Just like with function declarations, if a parameter type isn’t specified, it’s implicitly `any`

.

Note that the parameter name is

required. The function type`(string) => void`

means “a function with a parameter named`string`

of type`any`

“!

Of course, we can use a type alias to name a function type:

ts

typeGreetFunction = (a : string) => void;functiongreeter (fn :GreetFunction ) {// ...}[Try]

Call Signatures

In JavaScript, functions can have properties in addition to being callable.
However, the function type expression syntax doesn’t allow for declaring properties.
If we want to describe something callable with properties, we can write a *call signature* in an object type:

ts

typeDescribableFunction = {description : string;(someArg : number): boolean;};functiondoSomething (fn :DescribableFunction ) {console .log (fn .description + " returned " +fn (6));}functionmyFunc (someArg : number) {returnsomeArg > 3;}myFunc .description = "default description";doSomething (myFunc );[Try]

Note that the syntax is slightly different compared to a function type expression - use `:`

between the parameter list and the return type rather than `=>`

.

Construct Signatures

JavaScript functions can also be invoked with the `new`

operator.
TypeScript refers to these as *constructors* because they usually create a new object.
You can write a *construct signature* by adding the `new`

keyword in front of a call signature:

ts

typeSomeConstructor = {new (s : string):SomeObject ;};functionfn (ctor :SomeConstructor ) {return newctor ("hello");}[Try]

Some objects, like JavaScript’s `Date`

object, can be called with or without `new`

.
You can combine call and construct signatures in the same type arbitrarily:

ts

interfaceCallOrConstruct {(n ?: number): string;new (s : string):Date ;}functionfn (ctor :CallOrConstruct ) {// Passing an argument of type `number` to `ctor` matches it against// the first definition in the `CallOrConstruct` interface.console .log (ctor (10));// Similarly, passing an argument of type `string` to `ctor` matches it// against the second definition in the `CallOrConstruct` interface.console .log (newctor ("10"));}fn (Date );[Try]

Generic Functions

It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. Let’s consider for a moment a function that returns the first element of an array:

ts

functionfirstElement (arr : any[]) {returnarr [0];}[Try]

This function does its job, but unfortunately has the return type `any`

.
It’d be better if the function returned the type of the array element.

In TypeScript, *generics* are used when we want to describe a correspondence between two values.
We do this by declaring a *type parameter* in the function signature:

ts

functionfirstElement <Type >(arr :Type []):Type | undefined {returnarr [0];}[Try]

By adding a type parameter `Type`

to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value).
Now when we call it, a more specific type comes out:

ts

// s is of type 'string'consts =firstElement (["a", "b", "c"]);// n is of type 'number'constn =firstElement ([1, 2, 3]);// u is of type undefinedconstu =firstElement ([]);[Try]

Inference

Note that we didn’t have to specify `Type`

in this sample.
The type was *inferred* - chosen automatically - by TypeScript.

We can use multiple type parameters as well.
For example, a standalone version of `map`

would look like this:

ts

functionmap <Input ,Output >(arr :Input [],func : (arg :Input ) =>Output ):Output [] {returnarr .map (func );}// Parameter 'n' is of type 'string'// 'parsed' is of type 'number[]'constparsed =map (["1", "2", "3"], (n ) =>parseInt (n ));[Try]

Note that in this example, TypeScript could infer both the type of the `Input`

type parameter (from the given `string`

array), as well as the `Output`

type parameter based on the return value of the function expression (`number`

).

Constraints

We’ve written some generic functions that can work on *any* kind of value.
Sometimes we want to relate two values, but can only operate on a certain subset of values.
In this case, we can use a *constraint* to limit the kinds of types that a type parameter can accept.

Let’s write a function that returns the longer of two values.
To do this, we need a `length`

property that’s a number.
We *constrain* the type parameter to that type by writing an `extends`

clause:

ts

functionlongest <Type extends {length : number }>(a :Type ,b :Type ) {if (a .length >=b .length ) {returna ;} else {returnb ;}}// longerArray is of type 'number[]'constlongerArray =longest ([1, 2], [1, 2, 3]);// longerString is of type 'alice' | 'bob'constlongerString =longest ("alice", "bob");// Error! Numbers don't have a 'length' propertyconstArgument of type 'number' is not assignable to parameter of type '{ length: number; }'.2345Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.notOK =longest (10 , 100);[Try]

There are a few interesting things to note in this example.
We allowed TypeScript to *infer* the return type of `longest`

.
Return type inference also works on generic functions.

Because we constrained `Type`

to `{ length: number }`

, we were allowed to access the `.length`

property of the `a`

and `b`

parameters.
Without the type constraint, we wouldn’t be able to access those properties because the values might have been some other type without a length property.

The types of `longerArray`

and `longerString`

were inferred based on the arguments.
Remember, generics are all about relating two or more values with the same type!

Finally, just as we’d like, the call to `longest(10, 100)`

is rejected because the `number`

type doesn’t have a `.length`

property.

Working with Constrained Values

Here’s a common error when working with generic constraints:

ts

functionminimumLength <Type extends {length : number }>(obj :Type ,minimum : number):Type {if (obj .length >=minimum ) {returnobj ;} else {Type '{ length: number; }' is not assignable to type 'Type'. '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.2322Type '{ length: number; }' is not assignable to type 'Type'. '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.return {length :minimum };}}[Try]

It might look like this function is OK - `Type`

is constrained to `{ length: number }`

, and the function either returns `Type`

or a value matching that constraint.
The problem is that the function promises to return the *same* kind of object as was passed in, not just *some* object matching the constraint.
If this code were legal, you could write code that definitely wouldn’t work:

ts

// 'arr' gets value { length: 6 }constarr =minimumLength ([1, 2, 3], 6);// and crashes here because arrays have// a 'slice' method, but not the returned object!console .log (arr .slice (0));[Try]

Specifying Type Arguments

TypeScript can usually infer the intended type arguments in a generic call, but not always. For example, let’s say you wrote a function to combine two arrays:

ts

functioncombine <Type >(arr1 :Type [],arr2 :Type []):Type [] {returnarr1 .concat (arr2 );}[Try]

Normally it would be an error to call this function with mismatched arrays:

ts

constType 'string' is not assignable to type 'number'.2322Type 'string' is not assignable to type 'number'.arr =combine ([1, 2, 3], ["hello" ]);[Try]

If you intended to do this, however, you could manually specify `Type`

:

ts

constarr =combine <string | number>([1, 2, 3], ["hello"]);[Try]

Guidelines for Writing Good Generic Functions

Writing generic functions is fun, and it can be easy to get carried away with type parameters. Having too many type parameters or using constraints where they aren’t needed can make inference less successful, frustrating callers of your function.

Push Type Parameters Down

Here are two ways of writing a function that appear similar:

ts

functionfirstElement1 <Type >(arr :Type []) {returnarr [0];}functionfirstElement2 <Type extends any[]>(arr :Type ) {returnarr [0];}// a: number (good)consta =firstElement1 ([1, 2, 3]);// b: any (bad)constb =firstElement2 ([1, 2, 3]);[Try]

These might seem identical at first glance, but `firstElement1`

is a much better way to write this function.
Its inferred return type is `Type`

, but `firstElement2`

’s inferred return type is `any`

because TypeScript has to resolve the `arr[0]`

expression using the constraint type, rather than “waiting” to resolve the element during a call.


Rule: When possible, use the type parameter itself rather than constraining it

Use Fewer Type Parameters

Here’s another pair of similar functions:

ts

functionfilter1 <Type >(arr :Type [],func : (arg :Type ) => boolean):Type [] {returnarr .filter (func );}functionfilter2 <Type ,Func extends (arg :Type ) => boolean>(arr :Type [],func :Func ):Type [] {returnarr .filter (func );}[Try]

We’ve created a type parameter `Func`

that *doesn’t relate two values*.
That’s always a red flag, because it means callers wanting to specify type arguments have to manually specify an extra type argument for no reason.
`Func`

doesn’t do anything but make the function harder to read and reason about!


Rule: Always use as few type parameters as possible

Type Parameters Should Appear Twice

Sometimes we forget that a function might not need to be generic:

ts

functiongreet <Str extends string>(s :Str ) {console .log ("Hello, " +s );}greet ("world");[Try]

We could just as easily have written a simpler version:

ts

functiongreet (s : string) {console .log ("Hello, " +s );}[Try]

Remember, type parameters are for *relating the types of multiple values*.
If a type parameter is only used once in the function signature, it’s not relating anything.
This includes the inferred return type; for example, if `Str`

was part of the inferred return type of `greet`

, it would be relating the argument and return types, so would be used *twice* despite appearing only once in the written code.


Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it

Optional Parameters

Functions in JavaScript often take a variable number of arguments.
For example, the `toFixed`

method of `number`

takes an optional digit count:

ts

functionf (n : number) {console .log (n .toFixed ()); // 0 argumentsconsole .log (n .toFixed (3)); // 1 argument}[Try]

We can model this in TypeScript by marking the parameter as *optional* with `?`

:

ts

functionf (x ?: number) {// ...}f (); // OKf (10); // OK[Try]

Although the parameter is specified as type `number`

, the `x`

parameter will actually have the type `number | undefined`

because unspecified parameters in JavaScript get the value `undefined`

.

You can also provide a parameter *default*:

ts

functionf (x = 10) {// ...}[Try]

Now in the body of `f`

, `x`

will have type `number`

because any `undefined`

argument will be replaced with `10`

.
Note that when a parameter is optional, callers can always pass `undefined`

, as this simply simulates a “missing” argument:

ts

// All OKf ();f (10);f (undefined );[Try]

Optional Parameters in Callbacks

Once you’ve learned about optional parameters and function type expressions, it’s very easy to make the following mistakes when writing functions that invoke callbacks:

ts

functionmyForEach (arr : any[],callback : (arg : any,index ?: number) => void) {for (leti = 0;i <arr .length ;i ++) {callback (arr [i ],i );}}[Try]

What people usually intend when writing `index?`

as an optional parameter is that they want both of these calls to be legal:

ts

myForEach ([1, 2, 3], (a ) =>console .log (a ));myForEach ([1, 2, 3], (a ,i ) =>console .log (a ,i ));[Try]

What this *actually* means is that * callback might get invoked with one argument*.
In other words, the function definition says that the implementation might look like this:

ts

functionmyForEach (arr : any[],callback : (arg : any,index ?: number) => void) {for (leti = 0;i <arr .length ;i ++) {// I don't feel like providing the index todaycallback (arr [i ]);}}[Try]

In turn, TypeScript will enforce this meaning and issue errors that aren’t really possible:

ts

myForEach ([1, 2, 3], (a ,i ) => {'i' is possibly 'undefined'.18048'i' is possibly 'undefined'.console .log (. i toFixed ());});[Try]

In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TypeScript behaves the same way. Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.


Rule: When writing a function type for a callback,neverwrite an optional parameter unless you intend tocallthe function without passing that argument

Function Overloads

Some JavaScript functions can be called in a variety of argument counts and types.
For example, you might write a function to produce a `Date`

that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

In TypeScript, we can specify a function that can be called in different ways by writing *overload signatures*.
To do this, write some number of function signatures (usually two or more), followed by the body of the function:

ts

functionmakeDate (timestamp : number):Date ;functionmakeDate (m : number,d : number,y : number):Date ;functionmakeDate (mOrTimestamp : number,d ?: number,y ?: number):Date {if (d !==undefined &&y !==undefined ) {return newDate (y ,mOrTimestamp ,d );} else {return newDate (mOrTimestamp );}}constd1 =makeDate (12345678);constd2 =makeDate (5, 5, 5);constNo overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.2575No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.d3 =(1, 3); makeDate [Try]

In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
These first two signatures are called the *overload signatures*.

Then, we wrote a function implementation with a compatible signature.
Functions have an *implementation* signature, but this signature can’t be called directly.
Even though we wrote a function with two optional parameters after the required one, it can’t be called with two parameters!

Overload Signatures and the Implementation Signature

This is a common source of confusion. Often people will write code like this and not understand why there is an error:

ts

functionfn (x : string): void;functionfn () {// ...}// Expected to be able to call with zero argumentsExpected 1 arguments, but got 0.2554Expected 1 arguments, but got 0.(); fn [Try]

Again, the signature used to write the function body can’t be “seen” from the outside.

The signature of the

implementationis not visible from the outside. When writing an overloaded function, you should always havetwoor more signatures above the implementation of the function.

The implementation signature must also be *compatible* with the overload signatures.
For example, these functions have errors because the implementation signature doesn’t match the overloads in a correct way:

ts

functionfn (x : boolean): void;// Argument type isn't rightfunctionThis overload signature is not compatible with its implementation signature.2394This overload signature is not compatible with its implementation signature.( fn x : string): void;functionfn (x : boolean) {}[Try]

ts

functionfn (x : string): string;// Return type isn't rightfunctionThis overload signature is not compatible with its implementation signature.2394This overload signature is not compatible with its implementation signature.( fn x : number): boolean;functionfn (x : string | number) {return "oops";}[Try]

Writing Good Overloads

Like generics, there are a few guidelines you should follow when using function overloads. Following these principles will make your function easier to call, easier to understand, and easier to implement.

Let’s consider a function that returns the length of a string or an array:

ts

functionlen (s : string): number;functionlen (arr : any[]): number;functionlen (x : any) {returnx .length ;}[Try]

This function is fine; we can invoke it with strings or arrays.
However, we can’t invoke it with a value that might be a string *or* an array, because TypeScript can only resolve a function call to a single overload:

ts

len (""); // OKlen ([0]); // OKNo overload matches this call. Overload 1 of 2, '(s: string): number', gave the following error. Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'. Type 'number[]' is not assignable to type 'string'. Overload 2 of 2, '(arr: any[]): number', gave the following error. Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'. Type 'string' is not assignable to type 'any[]'.2769No overload matches this call. Overload 1 of 2, '(s: string): number', gave the following error. Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'. Type 'number[]' is not assignable to type 'string'. Overload 2 of 2, '(arr: any[]): number', gave the following error. Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'. Type 'string' is not assignable to type 'any[]'.len (Math .random () > 0.5 ? "hello" : [0]);[Try]

Because both overloads have the same argument count and same return type, we can instead write a non-overloaded version of the function:

ts

functionlen (x : any[] | string) {returnx .length ;}[Try]

This is much better! Callers can invoke this with either sort of value, and as an added bonus, we don’t have to figure out a correct implementation signature.

Always prefer parameters with union types instead of overloads when possible


Declaring `this`

in a Function

TypeScript will infer what the `this`

should be in a function via code flow analysis, for example in the following:

ts

constuser = {id : 123,admin : false,becomeAdmin : function () {this.admin = true;},};[Try]

TypeScript understands that the function `user.becomeAdmin`

has a corresponding `this`

which is the outer object `user`

. `this`

, *heh*, can be enough for a lot of cases, but there are a lot of cases where you need more control over what object `this`

represents. The JavaScript specification states that you cannot have a parameter called `this`

, and so TypeScript uses that syntax space to let you declare the type for `this`

in the function body.

ts

interfaceDB {filterUsers (filter : (this :User ) => boolean):User [];}constdb =getDB ();constadmins =db .filterUsers (function (this :User ) {return this.admin ;});[Try]

This pattern is common with callback-style APIs, where another object typically controls when your function is called. Note that you need to use `function`

and not arrow functions to get this behavior:

ts

interfaceDB {filterUsers (filter : (this :User ) => boolean):User [];}constdb =getDB ();constThe containing arrow function captures the global value of 'this'.Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.7041admins =db .filterUsers (() =>this .); admin

7017The containing arrow function captures the global value of 'this'.Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.[Try]

Other Types to Know About

There are some additional types you’ll want to recognize that appear often when working with function types. Like all types, you can use them everywhere, but these are especially relevant in the context of functions.

`void`


`void`

represents the return value of functions which don’t return a value.
It’s the inferred type any time a function doesn’t have any `return`

statements, or doesn’t return any explicit value from those return statements:

ts

// The inferred return type is voidfunctionnoop () {return;}[Try]

In JavaScript, a function that doesn’t return any value will implicitly return the value `undefined`

.
However, `void`

and `undefined`

are not the same thing in TypeScript.
There are further details at the end of this chapter.


`void`

is not the same as`undefined`

.

`object`


The special type `object`

refers to any value that isn’t a primitive (`string`

, `number`

, `bigint`

, `boolean`

, `symbol`

, `null`

, or `undefined`

).
This is different from the *empty object type* `{ }`

, and also different from the global type `Object`

.
It’s very likely you will never use `Object`

.


`object`

is not`Object`

.Alwaysuse`object`

!

Note that in JavaScript, function values are objects: They have properties, have `Object.prototype`

in their prototype chain, are `instanceof Object`

, you can call `Object.keys`

on them, and so on.
For this reason, function types are considered to be `object`

s in TypeScript.

`unknown`


The `unknown`

type represents *any* value.
This is similar to the `any`

type, but is safer because it’s not legal to do anything with an `unknown`

value:

ts

functionf1 (a : any) {a .b (); // OK}functionf2 (a : unknown) {'a' is of type 'unknown'.18046'a' is of type 'unknown'.. a b ();}[Try]

This is useful when describing function types because you can describe functions that accept any value without having `any`

values in your function body.

Conversely, you can describe a function that returns a value of unknown type:

ts

functionsafeParse (s : string): unknown {returnJSON .parse (s );}// Need to be careful with 'obj'!constobj =safeParse (someRandomString );[Try]

`never`


Some functions *never* return a value:

ts

functionfail (msg : string): never {throw newError (msg );}[Try]

The `never`

type represents values which are *never* observed.
In a return type, this means that the function throws an exception or terminates execution of the program.

`never`

also appears when TypeScript determines there’s nothing left in a union.

ts

functionfn (x : string | number) {if (typeofx === "string") {// do something} else if (typeofx === "number") {// do something else} else {x ; // has type 'never'!}}[Try]

`Function`


The global type `Function`

describes properties like `bind`

, `call`

, `apply`

, and others present on all function values in JavaScript.
It also has the special property that values of type `Function`

can always be called; these calls return `any`

:

ts

functiondoSomething (f :Function ) {returnf (1, 2, 3);}[Try]

This is an *untyped function call* and is generally best avoided because of the unsafe `any`

return type.

If you need to accept an arbitrary function but don’t intend to call it, the type `() => void`

is generally safer.

Rest Parameters and Arguments

Background Reading:


[Rest Parameters]

[Spread Syntax]


Rest Parameters

In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an *unbounded* number of arguments using *rest parameters*.

A rest parameter appears after all other parameters, and uses the `...`

syntax:

ts

functionmultiply (n : number, ...m : number[]) {returnm .map ((x ) =>n *x );}// 'a' gets value [10, 20, 30, 40]consta =multiply (10, 1, 2, 3, 4);[Try]

In TypeScript, the type annotation on these parameters is implicitly `any[]`

instead of `any`

, and any type annotation given must be of the form `Array<T>`

or `T[]`

, or a tuple type (which we’ll learn about later).

Rest Arguments

Conversely, we can *provide* a variable number of arguments from an iterable object (for example, an array) using the spread syntax.
For example, the `push`

method of arrays takes any number of arguments:

ts

constarr1 = [1, 2, 3];constarr2 = [4, 5, 6];arr1 .push (...arr2 );[Try]

Note that in general, TypeScript does not assume that arrays are immutable. This can lead to some surprising behavior:

ts

// Inferred type is number[] -- "an array with zero or more numbers",// not specifically two numbersconstargs = [8, 5];constA spread argument must either have a tuple type or be passed to a rest parameter.2556A spread argument must either have a tuple type or be passed to a rest parameter.angle =Math .atan2 (...args );[Try]

The best fix for this situation depends a bit on your code, but in general a `const`

context is the most straightforward solution:

ts

// Inferred as 2-length tupleconstargs = [8, 5] asconst ;// OKconstangle =Math .atan2 (...args );[Try]

Using rest arguments may require turning on [ downlevelIteration](/tsconfig#downlevelIteration) when targeting older runtimes.

Parameter Destructuring

Background Reading:


[Destructuring Assignment]


You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body. In JavaScript, it looks like this:

js

function sum({ a, b, c }) {console.log(a + b + c);}sum({ a: 10, b: 3, c: 9 });

The type annotation for the object goes after the destructuring syntax:

ts

functionsum ({a ,b ,c }: {a : number;b : number;c : number }) {console .log (a +b +c );}[Try]

This can look a bit verbose, but you can use a named type here as well:

ts

// Same as prior exampletypeABC = {a : number;b : number;c : number };functionsum ({a ,b ,c }:ABC ) {console .log (a +b +c );}[Try]

Assignability of Functions

Return type `void`


The `void`

return type for functions can produce some unusual, but expected behavior.

Contextual typing with a return type of `void`

does **not** force functions to **not** return something. Another way to say this is a contextual function type with a `void`

return type (`type voidFunc = () => void`

), when implemented, can return *any* other value, but it will be ignored.

Thus, the following implementations of the type `() => void`

are valid:

ts

typevoidFunc = () => void;constf1 :voidFunc = () => {return true;};constf2 :voidFunc = () => true;constf3 :voidFunc = function () {return true;};[Try]

And when the return value of one of these functions is assigned to another variable, it will retain the type of `void`

:

ts

constv1 =f1 ();constv2 =f2 ();constv3 =f3 ();[Try]

This behavior exists so that the following code is valid even though `Array.prototype.push`

returns a number and the `Array.prototype.forEach`

method expects a function with a return type of `void`

.

ts

constsrc = [1, 2, 3];constdst = [0];src .forEach ((el ) =>dst .push (el ));[Try]

There is one other special case to be aware of, when a literal function definition has a `void`

return type, that function must **not** return anything.

ts

functionf2 (): void {// @ts-expect-errorreturn true;}constf3 = function (): void {// @ts-expect-errorreturn true;};[Try]

For more on `void`

please refer to these other documentation entries:

---

## Source: https://www.typescriptlang.org/docs/handbook/2/objects.html

In JavaScript, the fundamental way that we group and pass around data is through objects.
In TypeScript, we represent those through *object types*.

As we’ve seen, they can be anonymous:

ts

functiongreet (person : {name : string;age : number }) {return "Hello " +person .name ;}[Try]

or they can be named by using either an interface:

ts

interfacePerson {name : string;age : number;}functiongreet (person :Person ) {return "Hello " +person .name ;}[Try]

or a type alias:

ts

typePerson = {name : string;age : number;};functiongreet (person :Person ) {return "Hello " +person .name ;}[Try]

In all three examples above, we’ve written functions that take objects that contain the property `name`

(which must be a `string`

) and `age`

(which must be a `number`

).

Quick Reference

We have cheat-sheets available for both [ type and interface](https://www.typescriptlang.org/cheatsheets), if you want a quick look at the important every-day syntax at a glance.


Property Modifiers

Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

Optional Properties

Much of the time, we’ll find ourselves dealing with objects that *might* have a property set.
In those cases, we can mark those properties as *optional* by adding a question mark (`?`

) to the end of their names.

ts

interfacePaintOptions {shape :Shape ;xPos ?: number;yPos ?: number;}functionpaintShape (opts :PaintOptions ) {// ...}constshape =getShape ();paintShape ({shape });paintShape ({shape ,xPos : 100 });paintShape ({shape ,yPos : 100 });paintShape ({shape ,xPos : 100,yPos : 100 });[Try]

In this example, both `xPos`

and `yPos`

are considered optional.
We can choose to provide either of them, so every call above to `paintShape`

is valid.
All optionality really says is that if the property *is* set, it better have a specific type.

We can also read from those properties - but when we do under [ strictNullChecks](/tsconfig#strictNullChecks), TypeScript will tell us they’re potentially

`undefined`

.ts

functionpaintShape (opts :PaintOptions ) {letxPos =opts .xPos ;letyPos =opts .yPos ;// ...}[Try]

In JavaScript, even if the property has never been set, we can still access it - it’s just going to give us the value `undefined`

.
We can just handle `undefined`

specially by checking for it.

ts

functionpaintShape (opts :PaintOptions ) {letxPos =opts .xPos ===undefined ? 0 :opts .xPos ;letyPos =opts .yPos ===undefined ? 0 :opts .yPos ;// ...}[Try]

Note that this pattern of setting defaults for unspecified values is so common that JavaScript has syntax to support it.

ts

functionpaintShape ({shape ,xPos = 0,yPos = 0 }:PaintOptions ) {console .log ("x coordinate at",xPos );console .log ("y coordinate at",yPos );// ...}[Try]

Here we used [a destructuring pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for `paintShape`

’s parameter, and provided [default values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values) for `xPos`

and `yPos`

.
Now `xPos`

and `yPos`

are both definitely present within the body of `paintShape`

, but optional for any callers to `paintShape`

.

Note that there is currently no way to place type annotations within destructuring patterns. This is because the following syntax already means something different in JavaScript.

ts

functiondraw ({shape :Shape ,xPos :number = 100 /*...*/ }) {Cannot find name 'shape'. Did you mean 'Shape'?2552Cannot find name 'shape'. Did you mean 'Shape'?render (); shape Cannot find name 'xPos'.2304Cannot find name 'xPos'.render (); xPos }[Try]In an object destructuring pattern,

`shape: Shape`

means “grab the property`shape`

and redefine it locally as a variable named`Shape`

.” Likewise`xPos: number`

creates a variable named`number`

whose value is based on the parameter’s`xPos`

.

`readonly`

Properties

Properties can also be marked as `readonly`

for TypeScript.
While it won’t change any behavior at runtime, a property marked as `readonly`

can’t be written to during type-checking.

ts

interfaceSomeType {readonlyprop : string;}functiondoSomething (obj :SomeType ) {// We can read from 'obj.prop'.console .log (`prop has the value '${obj .prop }'.`);// But we can't re-assign it.Cannot assign to 'prop' because it is a read-only property.2540Cannot assign to 'prop' because it is a read-only property.obj .= "hello"; prop }[Try]

Using the `readonly`

modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed.
It just means the property itself can’t be re-written to.

ts

interfaceHome {readonlyresident : {name : string;age : number };}functionvisitForBirthday (home :Home ) {// We can read and update properties from 'home.resident'.console .log (`Happy birthday ${home .resident .name }!`);home .resident .age ++;}functionevict (home :Home ) {// But we can't write to the 'resident' property itself on a 'Home'.Cannot assign to 'resident' because it is a read-only property.2540Cannot assign to 'resident' because it is a read-only property.home .= { resident name : "Victor the Evictor",age : 42,};}[Try]

It’s important to manage expectations of what `readonly`

implies.
It’s useful to signal intent during development time for TypeScript on how an object should be used.
TypeScript doesn’t factor in whether properties on two types are `readonly`

when checking whether those types are compatible, so `readonly`

properties can also change via aliasing.

ts

interfacePerson {name : string;age : number;}interfaceReadonlyPerson {readonlyname : string;readonlyage : number;}letwritablePerson :Person = {name : "Person McPersonface",age : 42,};// worksletreadonlyPerson :ReadonlyPerson =writablePerson ;console .log (readonlyPerson .age ); // prints '42'writablePerson .age ++;console .log (readonlyPerson .age ); // prints '43'[Try]

Using [mapping modifiers](/docs/handbook/2/mapped-types.html#mapping-modifiers), you can remove `readonly`

attributes.

Index Signatures

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

In those cases you can use an index signature to describe the types of possible values, for example:

ts

interfaceStringArray {[index : number]: string;}constmyArray :StringArray =getStringArray ();constsecondItem =myArray [1];[Try]

Above, we have a `StringArray`

interface which has an index signature.
This index signature states that when a `StringArray`

is indexed with a `number`

, it will return a `string`

.

Only some types are allowed for index signature properties: `string`

, `number`

, `symbol`

, template string patterns, and union types consisting only of these.

## It is possible to support multiple types of indexers...

It is possible to support multiple types of indexers. Note that when using both `number` and `string` indexers, the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a `number`

, JavaScript will actually convert that to a `string`

before indexing into an object. That means that indexing with `100`

(a `number`

) is the same thing as indexing with `"100"`

(a `string`

), so the two need to be consistent.

ts

interfaceAnimal {name : string;}interfaceDog extendsAnimal {breed : string;}// Error: indexing with a numeric string might get you a completely separate type of Animal!interfaceNotOkay {['number' index type 'Animal' is not assignable to 'string' index type 'Dog'.2413'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.x : number]:Animal ;[x : string]:Dog ;}[Try]

While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type.
This is because a string index declares that `obj.property`

is also available as `obj["property"]`

.
In the following example, `name`

’s type does not match the string index’s type, and the type checker gives an error:

ts

interfaceNumberDictionary {[index : string]: number;length : number; // okProperty 'name' of type 'string' is not assignable to 'string' index type 'number'.2411Property 'name' of type 'string' is not assignable to 'string' index type 'number'.: string; name }[Try]

However, properties of different types are acceptable if the index signature is a union of the property types:

ts

interfaceNumberOrStringDictionary {[index : string]: number | string;length : number; // ok, length is a numbername : string; // ok, name is a string}[Try]

Finally, you can make index signatures `readonly`

in order to prevent assignment to their indices:

ts

interfaceReadonlyStringArray {readonly [index : number]: string;}letmyArray :ReadonlyStringArray =getReadOnlyStringArray ();Index signature in type 'ReadonlyStringArray' only permits reading.2542Index signature in type 'ReadonlyStringArray' only permits reading.myArray [2] = "Mallory";[Try]

You can’t set `myArray[2]`

because the index signature is `readonly`

.

Excess Property Checks

Where and how an object is assigned a type can make a difference in the type system. One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.

ts

interfaceSquareConfig {color ?: string;width ?: number;}functioncreateSquare (config :SquareConfig ): {color : string;area : number } {return {color :config .color || "red",area :config .width ?config .width *config .width : 20,};}letObject literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?2561Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?mySquare =createSquare ({: "red", colour width : 100 });[Try]

Notice the given argument to `createSquare`

is spelled * colour* instead of

`color`

.
In plain JavaScript, this sort of thing fails silently.You could argue that this program is correctly typed, since the `width`

properties are compatible, there’s no `color`

property present, and the extra `colour`

property is insignificant.

However, TypeScript takes the stance that there’s probably a bug in this code.
Object literals get special treatment and undergo *excess property checking* when assigning them to other variables, or passing them as arguments.
If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:

ts

letObject literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?2561Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?mySquare =createSquare ({: "red", colour width : 100 });[Try]

Getting around these checks is actually really simple. The easiest method is to just use a type assertion:

ts

letmySquare =createSquare ({width : 100,opacity : 0.5 } asSquareConfig );[Try]

However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.
If `SquareConfig`

can have `color`

and `width`

properties with the above types, but could *also* have any number of other properties, then we could define it like so:

ts

interfaceSquareConfig {color ?: string;width ?: number;[propName : string]: unknown;}[Try]

Here we’re saying that `SquareConfig`

can have any number of properties, and as long as they aren’t `color`

or `width`

, their types don’t matter.

One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable:
Since assigning `squareOptions`

won’t undergo excess property checks, the compiler won’t give you an error:

ts

letsquareOptions = {colour : "red",width : 100 };letmySquare =createSquare (squareOptions );[Try]

The above workaround will work as long as you have a common property between `squareOptions`

and `SquareConfig`

.
In this example, it was the property `width`

. It will however, fail if the variable does not have any common object property. For example:

ts

letsquareOptions = {colour : "red" };letType '{ colour: string; }' has no properties in common with type 'SquareConfig'.2559Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.mySquare =createSquare (); squareOptions [Try]

Keep in mind that for simple code like above, you probably shouldn’t be trying to “get around” these checks. For more complex object literals that have methods and hold state, you might need to keep these techniques in mind, but a majority of excess property errors are actually bugs.

That means if you’re running into excess property checking problems for something like option bags, you might need to revise some of your type declarations.
In this instance, if it’s okay to pass an object with both a `color`

or `colour`

property to `createSquare`

, you should fix up the definition of `SquareConfig`

to reflect that.

Extending Types

It’s pretty common to have types that might be more specific versions of other types.
For example, we might have a `BasicAddress`

type that describes the fields necessary for sending letters and packages in the U.S.

ts

interfaceBasicAddress {name ?: string;street : string;city : string;country : string;postalCode : string;}[Try]

In some situations that’s enough, but addresses often have a unit number associated with them if the building at an address has multiple units.
We can then describe an `AddressWithUnit`

.

ts

interfaceAddressWithUnit {name ?: string;unit : string;street : string;city : string;country : string;postalCode : string;}[Try]

This does the job, but the downside here is that we had to repeat all the other fields from `BasicAddress`

when our changes were purely additive.
Instead, we can extend the original `BasicAddress`

type and just add the new fields that are unique to `AddressWithUnit`

.

ts

interfaceBasicAddress {name ?: string;street : string;city : string;country : string;postalCode : string;}interfaceAddressWithUnit extendsBasicAddress {unit : string;}[Try]

The `extends`

keyword on an `interface`

allows us to effectively copy members from other named types, and add whatever new members we want.
This can be useful for cutting down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declarations of the same property might be related.
For example, `AddressWithUnit`

didn’t need to repeat the `street`

property, and because `street`

originates from `BasicAddress`

, a reader will know that those two types are related in some way.

`interface`

s can also extend from multiple types.

ts

interfaceColorful {color : string;}interfaceCircle {radius : number;}interfaceColorfulCircle extendsColorful ,Circle {}constcc :ColorfulCircle = {color : "red",radius : 42,};[Try]

Intersection Types

`interface`

s allowed us to build up new types from other types by extending them.
TypeScript provides another construct called *intersection types* that is mainly used to combine existing object types.

An intersection type is defined using the `&`

operator.

ts

interfaceColorful {color : string;}interfaceCircle {radius : number;}typeColorfulCircle =Colorful &Circle ;[Try]

Here, we’ve intersected `Colorful`

and `Circle`

to produce a new type that has all the members of `Colorful`

*and* `Circle`

.

ts

functiondraw (circle :Colorful &Circle ) {console .log (`Color was ${circle .color }`);console .log (`Radius was ${circle .radius }`);}// okaydraw ({color : "blue",radius : 42 });// oopsObject literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?2561Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?draw ({color : "red",: 42 }); raidus [Try]

Interface Extension vs. Intersection

We just looked at two ways to combine types which are similar, but are actually subtly different.
With interfaces, we could use an `extends`

clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.
The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.

If interfaces are defined with the same name, TypeScript will attempt to merge them if the properties are compatible. If the properties are not compatible (i.e., they have the same property name but different types), TypeScript will raise an error.

In the case of intersection types, properties with different types will be merged automatically. When the type is used later, TypeScript will expect the property to satisfy both types simultaneously, which may produce unexpected results.

For example, the following code will throw an error because the properties are incompatible:

ts

interface Person {name: string;}interface Person {name: number;}

In contrast, the following code will compile, but it results in a `never`

type:

ts

interfacePerson1 {name : string;}interfacePerson2 {name : number;}typeStaff =Person1 &Person2 declare conststaffer :Staff ;staffer .name ;[Try]

In this case, Staff would require the name property to be both a string and a number, which results in property being of type `never`

.

Generic Object Types

Let’s imagine a `Box`

type that can contain any value - `string`

s, `number`

s, `Giraffe`

s, whatever.

ts

interfaceBox {contents : any;}[Try]

Right now, the `contents`

property is typed as `any`

, which works, but can lead to accidents down the line.

We could instead use `unknown`

, but that would mean that in cases where we already know the type of `contents`

, we’d need to do precautionary checks, or use error-prone type assertions.

ts

interfaceBox {contents : unknown;}letx :Box = {contents : "hello world",};// we could check 'x.contents'if (typeofx .contents === "string") {console .log (x .contents .toLowerCase ());}// or we could use a type assertionconsole .log ((x .contents as string).toLowerCase ());[Try]

One type safe approach would be to instead scaffold out different `Box`

types for every type of `contents`

.

ts

interfaceNumberBox {contents : number;}interfaceStringBox {contents : string;}interfaceBooleanBox {contents : boolean;}[Try]

But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

ts

functionsetContents (box :StringBox ,newContents : string): void;functionsetContents (box :NumberBox ,newContents : number): void;functionsetContents (box :BooleanBox ,newContents : boolean): void;functionsetContents (box : {contents : any },newContents : any) {box .contents =newContents ;}[Try]

That’s a lot of boilerplate. Moreover, we might later need to introduce new types and overloads. This is frustrating, since our box types and overloads are all effectively the same.

Instead, we can make a *generic* `Box`

type which declares a *type parameter*.

ts

interfaceBox <Type > {contents :Type ;}[Try]

You might read this as “A `Box`

of `Type`

is something whose `contents`

have type `Type`

”.
Later on, when we refer to `Box`

, we have to give a *type argument* in place of `Type`

.

ts

letbox :Box <string>;[Try]

Think of `Box`

as a template for a real type, where `Type`

is a placeholder that will get replaced with some other type.
When TypeScript sees `Box<string>`

, it will replace every instance of `Type`

in `Box<Type>`

with `string`

, and end up working with something like `{ contents: string }`

.
In other words, `Box<string>`

and our earlier `StringBox`

work identically.

ts

interfaceBox <Type > {contents :Type ;}interfaceStringBox {contents : string;}letboxA :Box <string> = {contents : "hello" };boxA .contents ;letboxB :StringBox = {contents : "world" };boxB .contents ;[Try]

`Box`

is reusable in that `Type`

can be substituted with anything. That means that when we need a box for a new type, we don’t need to declare a new `Box`

type at all (though we certainly could if we wanted to).

ts

interfaceBox <Type > {contents :Type ;}interfaceApple {// ....}// Same as '{ contents: Apple }'.typeAppleBox =Box <Apple >;[Try]

This also means that we can avoid overloads entirely by instead using [generic functions](/docs/handbook/2/functions.html#generic-functions).

ts

functionsetContents <Type >(box :Box <Type >,newContents :Type ) {box .contents =newContents ;}[Try]

It is worth noting that type aliases can also be generic. We could have defined our new `Box<Type>`

interface, which was:

ts

interfaceBox <Type > {contents :Type ;}[Try]

by using a type alias instead:

ts

typeBox <Type > = {contents :Type ;};[Try]

Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.

ts

typeOrNull <Type > =Type | null;typeOneOrMany <Type > =Type |Type [];typeOneOrManyOrNull <Type > =OrNull <OneOrMany <Type >>;typeOneOrManyOrNullStrings =OneOrManyOrNull <string>;[Try]

We’ll circle back to type aliases in just a little bit.

The `Array`

Type

Generic object types are often some sort of container type that work independently of the type of elements they contain. It’s ideal for data structures to work this way so that they’re re-usable across different data types.

It turns out we’ve been working with a type just like that throughout this handbook: the `Array`

type.
Whenever we write out types like `number[]`

or `string[]`

, that’s really just a shorthand for `Array<number>`

and `Array<string>`

.

ts

functiondoSomething (value :Array <string>) {// ...}letmyArray : string[] = ["hello", "world"];// either of these work!doSomething (myArray );doSomething (newArray ("hello", "world"));[Try]

Much like the `Box`

type above, `Array`

itself is a generic type.

ts

interfaceArray <Type > {/*** Gets or sets the length of the array.*/length : number;/*** Removes the last element from an array and returns it.*/pop ():Type | undefined;/*** Appends new elements to an array, and returns the new length of the array.*/push (...items :Type []): number;// ...}[Try]

Modern JavaScript also provides other data structures which are generic, like `Map<K, V>`

, `Set<T>`

, and `Promise<T>`

.
All this really means is that because of how `Map`

, `Set`

, and `Promise`

behave, they can work with any sets of types.

The `ReadonlyArray`

Type

The `ReadonlyArray`

is a special type that describes arrays that shouldn’t be changed.

ts

functiondoStuff (values :ReadonlyArray <string>) {// We can read from 'values'...constcopy =values .slice ();console .log (`The first value is ${values [0]}`);// ...but we can't mutate 'values'.Property 'push' does not exist on type 'readonly string[]'.2339Property 'push' does not exist on type 'readonly string[]'.values .("hello!"); push }[Try]

Much like the `readonly`

modifier for properties, it’s mainly a tool we can use for intent.
When we see a function that returns `ReadonlyArray`

s, it tells us we’re not meant to change the contents at all, and when we see a function that consumes `ReadonlyArray`

s, it tells us that we can pass any array into that function without worrying that it will change its contents.

Unlike `Array`

, there isn’t a `ReadonlyArray`

constructor that we can use.

ts

new'ReadonlyArray' only refers to a type, but is being used as a value here.2693'ReadonlyArray' only refers to a type, but is being used as a value here.("red", "green", "blue"); ReadonlyArray [Try]

Instead, we can assign regular `Array`

s to `ReadonlyArray`

s.

ts

constroArray :ReadonlyArray <string> = ["red", "green", "blue"];[Try]

Just as TypeScript provides a shorthand syntax for `Array<Type>`

with `Type[]`

, it also provides a shorthand syntax for `ReadonlyArray<Type>`

with `readonly Type[]`

.

ts

functiondoStuff (values : readonly string[]) {// We can read from 'values'...constcopy =values .slice ();console .log (`The first value is ${values [0]}`);// ...but we can't mutate 'values'.Property 'push' does not exist on type 'readonly string[]'.2339Property 'push' does not exist on type 'readonly string[]'.values .("hello!"); push }[Try]

One last thing to note is that unlike the `readonly`

property modifier, assignability isn’t bidirectional between regular `Array`

s and `ReadonlyArray`

s.

ts

letx : readonly string[] = [];lety : string[] = [];x =y ;The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.4104The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.= y x ;[Try]

Tuple Types

A *tuple type* is another sort of `Array`

type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

ts

typeStringNumberPair = [string, number];[Try]

Here, `StringNumberPair`

is a tuple type of `string`

and `number`

.
Like `ReadonlyArray`

, it has no representation at runtime, but is significant to TypeScript.
To the type system, `StringNumberPair`

describes arrays whose `0`

index contains a `string`

and whose `1`

index contains a `number`

.

ts

functiondoSomething (pair : [string, number]) {consta =pair [0];constb =pair [1];// ...}doSomething (["hello", 42]);[Try]

If we try to index past the number of elements, we’ll get an error.

ts

functiondoSomething (pair : [string, number]) {// ...constTuple type '[string, number]' of length '2' has no element at index '2'.2493Tuple type '[string, number]' of length '2' has no element at index '2'.c =pair [2 ];}[Try]

We can also [destructure tuples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) using JavaScript’s array destructuring.

ts

functiondoSomething (stringHash : [string, number]) {const [inputString ,hash ] =stringHash ;console .log (inputString );console .log (hash );}[Try]

Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”. This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements

`0`

and`1`

to whatever we wanted.However, since not every user holds the same view of what’s obvious, it may be worth reconsidering whether using objects with descriptive property names may be better for your API.


Other than those length checks, simple tuple types like these are equivalent to types which are versions of `Array`

s that declare properties for specific indexes, and that declare `length`

with a numeric literal type.

ts

interfaceStringNumberPair {// specialized propertieslength : 2;0: string;1: number;// Other 'Array<string | number>' members...slice (start ?: number,end ?: number):Array <string | number>;}[Try]

Another thing you may be interested in is that tuples can have optional properties by writing out a question mark (`?`

after an element’s type).
Optional tuple elements can only come at the end, and also affect the type of `length`

.

ts

typeEither2dOr3d = [number, number, number?];functionsetCoordinate (coord :Either2dOr3d ) {const [x ,y ,z ] =coord ;console .log (`Provided coordinates had ${coord .length } dimensions`);}[Try]

Tuples can also have rest elements, which have to be an array/tuple type.

ts

typeStringNumberBooleans = [string, number, ...boolean[]];typeStringBooleansNumber = [string, ...boolean[], number];typeBooleansStringNumber = [...boolean[], string, number];[Try]

`StringNumberBooleans`

describes a tuple whose first two elements are`string`

and`number`

respectively, but which may have any number of`boolean`

s following.`StringBooleansNumber`

describes a tuple whose first element is`string`

and then any number of`boolean`

s and ending with a`number`

.`BooleansStringNumber`

describes a tuple whose starting elements are any number of`boolean`

s and ending with a`string`

then a`number`

.

A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.

ts

consta :StringNumberBooleans = ["hello", 1];constb :StringNumberBooleans = ["beautiful", 2, true];constc :StringNumberBooleans = ["world", 3, true, false, true, false, true];[Try]

Why might optional and rest elements be useful?
Well, it allows TypeScript to correspond tuples with parameter lists.
Tuples types can be used in [rest parameters and arguments](/docs/handbook/2/functions.html#rest-parameters-and-arguments), so that the following:

ts

functionreadButtonInput (...args : [string, number, ...boolean[]]) {const [name ,version , ...input ] =args ;// ...}[Try]

is basically equivalent to:

ts

functionreadButtonInput (name : string,version : number, ...input : boolean[]) {// ...}[Try]

This is handy when you want to take a variable number of arguments with a rest parameter, and you need a minimum number of elements, but you don’t want to introduce intermediate variables.

`readonly`

Tuple Types

One final note about tuple types - tuple types have `readonly`

variants, and can be specified by sticking a `readonly`

modifier in front of them - just like with array shorthand syntax.

ts

functiondoSomething (pair : readonly [string, number]) {// ...}[Try]

As you might expect, writing to any property of a `readonly`

tuple isn’t allowed in TypeScript.

ts

functiondoSomething (pair : readonly [string, number]) {Cannot assign to '0' because it is a read-only property.2540Cannot assign to '0' because it is a read-only property.pair [0 ] = "hello!";}[Try]

Tuples tend to be created and left un-modified in most code, so annotating types as `readonly`

tuples when possible is a good default.
This is also important given that array literals with `const`

assertions will be inferred with `readonly`

tuple types.

ts

letpoint = [3, 4] asconst ;functiondistanceFromOrigin ([x ,y ]: [number, number]) {returnMath .sqrt (x ** 2 +y ** 2);}Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'. The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.2345Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'. The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.distanceFromOrigin (); point [Try]

Here, `distanceFromOrigin`

never modifies its elements, but expects a mutable tuple.
Since `point`

’s type was inferred as `readonly [3, 4]`

, it won’t be compatible with `[number, number]`

since that type can’t guarantee `point`

’s elements won’t be mutated.

---

## Source: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

TypeScript’s type system is very powerful because it allows expressing types *in terms of other types*.

The simplest form of this idea is generics. Additionally, we have a wide variety of *type operators* available to use.
It’s also possible to express types in terms of *values* that we already have.

By combining various type operators, we can express complex operations and values in a succinct, maintainable way. In this section we’ll cover ways to express a new type in terms of an existing type or value.

[Generics](/docs/handbook/2/generics.html)- Types which take parameters[Keyof Type Operator](/docs/handbook/2/keyof-types.html)- Using the`keyof`

operator to create new types[Typeof Type Operator](/docs/handbook/2/typeof-types.html)- Using the`typeof`

operator to create new types[Indexed Access Types](/docs/handbook/2/indexed-access-types.html)- Using`Type['a']`

syntax to access a subset of a type[Conditional Types](/docs/handbook/2/conditional-types.html)- Types which act like if statements in the type system[Mapped Types](/docs/handbook/2/mapped-types.html)- Creating types by mapping each property in an existing type[Template Literal Types](/docs/handbook/2/template-literal-types.html)- Mapped types which change properties via template literal strings

---

## Source: https://www.typescriptlang.org/docs/handbook/2/generics.html

A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is *generics*, that is, being able to create a component that can work over a variety of types rather than a single one.
This allows users to consume these components and use their own types.

Hello World of Generics

To start off, let’s do the “hello world” of generics: the identity function.
The identity function is a function that will return back whatever is passed in.
You can think of this in a similar way to the `echo`

command.

Without generics, we would either have to give the identity function a specific type:

ts

functionidentity (arg : number): number {returnarg ;}[Try]

Or, we could describe the identity function using the `any`

type:

ts

functionidentity (arg : any): any {returnarg ;}[Try]

While using `any`

is certainly generic in that it will cause the function to accept any and all types for the type of `arg`

, we actually are losing the information about what that type was when the function returns.
If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
Here, we will use a *type variable*, a special kind of variable that works on types rather than values.

ts

functionidentity <Type >(arg :Type ):Type {returnarg ;}[Try]

We’ve now added a type variable `Type`

to the identity function.
This `Type`

allows us to capture the type the user provides (e.g. `number`

), so that we can use that information later.
Here, we use `Type`

again as the return type. On inspection, we can now see the same type is used for the argument and the return type.
This allows us to traffic that type information in one side of the function and out the other.

We say that this version of the `identity`

function is generic, as it works over a range of types.
Unlike using `any`

, it’s also just as precise (i.e., it doesn’t lose any information) as the first `identity`

function that used numbers for the argument and return type.

Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments, including the type argument, to the function:

ts

letoutput =identity <string>("myString");[Try]

Here we explicitly set `Type`

to be `string`

as one of the arguments to the function call, denoted using the `<>`

around the arguments rather than `()`

.

The second way is also perhaps the most common. Here we use *type argument inference* — that is, we want the compiler to set the value of `Type`

for us automatically based on the type of the argument we pass in:

ts

letoutput =identity ("myString");[Try]

Notice that we didn’t have to explicitly pass the type in the angle brackets (`<>`

); the compiler just looked at the value `"myString"`

, and set `Type`

to its type.
While type argument inference can be a helpful tool to keep code shorter and more readable, you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type, as may happen in more complex examples.

Working with Generic Type Variables

When you begin to use generics, you’ll notice that when you create generic functions like `identity`

, the compiler will enforce that you use any generically typed parameters in the body of the function correctly.
That is, that you actually treat these parameters as if they could be any and all types.

Let’s take our `identity`

function from earlier:

ts

functionidentity <Type >(arg :Type ):Type {returnarg ;}[Try]

What if we want to also log the length of the argument `arg`

to the console with each call?
We might be tempted to write this:

ts

functionloggingIdentity <Type >(arg :Type ):Type {Property 'length' does not exist on type 'Type'.2339Property 'length' does not exist on type 'Type'.console .log (arg .); length returnarg ;}[Try]

When we do, the compiler will give us an error that we’re using the `.length`

member of `arg`

, but nowhere have we said that `arg`

has this member.
Remember, we said earlier that these type variables stand in for any and all types, so someone using this function could have passed in a `number`

instead, which does not have a `.length`

member.

Let’s say that we’ve actually intended this function to work on arrays of `Type`

rather than `Type`

directly. Since we’re working with arrays, the `.length`

member should be available.
We can describe this just like we would create arrays of other types:

ts

functionloggingIdentity <Type >(arg :Type []):Type [] {console .log (arg .length );returnarg ;}[Try]

You can read the type of `loggingIdentity`

as “the generic function `loggingIdentity`

takes a type parameter `Type`

, and an argument `arg`

which is an array of `Type`

s, and returns an array of `Type`

s.”
If we passed in an array of numbers, we’d get an array of numbers back out, as `Type`

would bind to `number`

.
This allows us to use our generic type variable `Type`

as part of the types we’re working with, rather than the whole type, giving us greater flexibility.

We can alternatively write the sample example this way:

ts

functionloggingIdentity <Type >(arg :Array <Type >):Array <Type > {console .log (arg .length ); // Array has a .length, so no more errorreturnarg ;}[Try]

You may already be familiar with this style of type from other languages.
In the next section, we’ll cover how you can create your own generic types like `Array<Type>`

.

Generic Types

In previous sections, we created generic identity functions that worked over a range of types. In this section, we’ll explore the type of the functions themselves and how to create generic interfaces.

The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations:

ts

functionidentity <Type >(arg :Type ):Type {returnarg ;}letmyIdentity : <Type >(arg :Type ) =>Type =identity ;[Try]

We could also have used a different name for the generic type parameter in the type, so long as the number of type variables and how the type variables are used line up.

ts

functionidentity <Type >(arg :Type ):Type {returnarg ;}letmyIdentity : <Input >(arg :Input ) =>Input =identity ;[Try]

We can also write the generic type as a call signature of an object literal type:

ts

functionidentity <Type >(arg :Type ):Type {returnarg ;}letmyIdentity : { <Type >(arg :Type ):Type } =identity ;[Try]

Which leads us to writing our first generic interface. Let’s take the object literal from the previous example and move it to an interface:

ts

interfaceGenericIdentityFn {<Type >(arg :Type ):Type ;}functionidentity <Type >(arg :Type ):Type {returnarg ;}letmyIdentity :GenericIdentityFn =identity ;[Try]

In a similar example, we may want to move the generic parameter to be a parameter of the whole interface.
This lets us see what type(s) we’re generic over (e.g. `Dictionary<string>`

rather than just `Dictionary`

).
This makes the type parameter visible to all the other members of the interface.

ts

interfaceGenericIdentityFn <Type > {(arg :Type ):Type ;}functionidentity <Type >(arg :Type ):Type {returnarg ;}letmyIdentity :GenericIdentityFn <number> =identity ;[Try]

Notice that our example has changed to be something slightly different.
Instead of describing a generic function, we now have a non-generic function signature that is a part of a generic type.
When we use `GenericIdentityFn`

, we now will also need to specify the corresponding type argument (here: `number`

), effectively locking in what the underlying call signature will use.
Understanding when to put the type parameter directly on the call signature and when to put it on the interface itself will be helpful in describing what aspects of a type are generic.

In addition to generic interfaces, we can also create generic classes. Note that it is not possible to create generic enums and namespaces.

Generic Classes

A generic class has a similar shape to a generic interface.
Generic classes have a generic type parameter list in angle brackets (`<>`

) following the name of the class.

ts

classGenericNumber <NumType > {zeroValue :NumType ;add : (x :NumType ,y :NumType ) =>NumType ;}letmyGenericNumber = newGenericNumber <number>();myGenericNumber .zeroValue = 0;myGenericNumber .add = function (x ,y ) {returnx +y ;};[Try]

This is a pretty literal use of the `GenericNumber`

class, but you may have noticed that nothing is restricting it to only use the `number`

type.
We could have instead used `string`

or even more complex objects.

ts

letstringNumeric = newGenericNumber <string>();stringNumeric .zeroValue = "";stringNumeric .add = function (x ,y ) {returnx +y ;};console .log (stringNumeric .add (stringNumeric .zeroValue , "test"));[Try]

Just as with interface, putting the type parameter on the class itself lets us make sure all of the properties of the class are working with the same type.

As we cover in [our section on classes](/docs/handbook/2/classes.html), a class has two sides to its type: the static side and the instance side.
Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter.

Generic Constraints

If you remember from an earlier example, you may sometimes want to write a generic function that works on a set of types where you have *some* knowledge about what capabilities that set of types will have.
In our `loggingIdentity`

example, we wanted to be able to access the `.length`

property of `arg`

, but the compiler could not prove that every type had a `.length`

property, so it warns us that we can’t make this assumption.

ts

functionloggingIdentity <Type >(arg :Type ):Type {Property 'length' does not exist on type 'Type'.2339Property 'length' does not exist on type 'Type'.console .log (arg .); length returnarg ;}[Try]

Instead of working with any and all types, we’d like to constrain this function to work with any and all types that *also* have the `.length`

property.
As long as the type has this member, we’ll allow it, but it’s required to have at least this member.
To do so, we must list our requirement as a constraint on what `Type`

can be.

To do so, we’ll create an interface that describes our constraint.
Here, we’ll create an interface that has a single `.length`

property and then we’ll use this interface and the `extends`

keyword to denote our constraint:

ts

interfaceLengthwise {length : number;}functionloggingIdentity <Type extendsLengthwise >(arg :Type ):Type {console .log (arg .length ); // Now we know it has a .length property, so no more errorreturnarg ;}[Try]

Because the generic function is now constrained, it will no longer work over any and all types:

ts

Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.2345Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.loggingIdentity (3 );[Try]

Instead, we need to pass in values whose type has all the required properties:

ts

loggingIdentity ({length : 10,value : 3 });[Try]

Using Type Parameters in Generic Constraints

You can declare a type parameter that is constrained by another type parameter.
For example, here we’d like to get a property from an object given its name.
We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the `obj`

, so we’ll place a constraint between the two types:

ts

functiongetProperty <Type ,Key extends keyofType >(obj :Type ,key :Key ) {returnobj [key ];}letx = {a : 1,b : 2,c : 3,d : 4 };getProperty (x , "a");Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.2345Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.getProperty (x ,"m" );[Try]

Using Class Types in Generics

When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions. For example,

ts

functioncreate <Type >(c : { new ():Type }):Type {return newc ();}[Try]

A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

ts

classBeeKeeper {hasMask : boolean = true;}classZooKeeper {nametag : string = "Mikle";}classAnimal {numLegs : number = 4;}classBee extendsAnimal {numLegs = 6;keeper :BeeKeeper = newBeeKeeper ();}classLion extendsAnimal {keeper :ZooKeeper = newZooKeeper ();}functioncreateInstance <A extendsAnimal >(c : new () =>A ):A {return newc ();}createInstance (Lion ).keeper .nametag ;createInstance (Bee ).keeper .hasMask ;[Try]

This pattern is used to power the [mixins](/docs/handbook/mixins.html) design pattern.

Generic Parameter Defaults

By declaring a default for a generic type parameter, you make it optional to specify the corresponding type argument. For example, a function which creates a new `HTMLElement`

. Calling the function with no arguments generates a `HTMLDivElement`

; calling the function with an element as the first argument generates an element of the argument’s type. You can optionally pass a list of children as well. Previously you would have to define the function as:

ts

declare functioncreate ():Container <HTMLDivElement ,HTMLDivElement []>;declare functioncreate <T extendsHTMLElement >(element :T ):Container <T ,T []>;declare functioncreate <T extendsHTMLElement ,U extendsHTMLElement >(element :T ,children :U []):Container <T ,U []>;[Try]

With generic parameter defaults we can reduce it to:

ts

declare functioncreate <T extendsHTMLElement =HTMLDivElement ,U extendsHTMLElement [] =T []>(element ?:T ,children ?:U ):Container <T ,U >;constdiv =create ();constp =create (newHTMLParagraphElement ());[Try]

A generic parameter default follows the following rules:

- A type parameter is deemed optional if it has a default.
- Required type parameters must not follow optional type parameters.
- Default types for a type parameter must satisfy the constraint for the type parameter, if it exists.
- When specifying type arguments, you are only required to specify type arguments for the required type parameters. Unspecified type parameters will resolve to their default types.
- If a default type is specified and inference cannot choose a candidate, the default type is inferred.
- A class or interface declaration that merges with an existing class or interface declaration may introduce a default for an existing type parameter.
- A class or interface declaration that merges with an existing class or interface declaration may introduce a new type parameter as long as it specifies a default.

Variance Annotations

This is an advanced feature for solving a very specific problem, and should only be used in situations where you’ve identified a reason to use it


[Covariance and contravariance](https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)) are type theory terms that describe what the relationship between two generic types is.
Here’s a brief primer on the concept.

For example, if you have an interface representing an object that can `make`

a certain type:

ts

interface Producer<T> {make(): T;}

We can use a `Producer<Cat>`

where a `Producer<Animal>`

is expected, because a `Cat`

is an `Animal`

.
This relationship is called *covariance*: the relationship from `Producer<T>`

to `Producer<U>`

is the same as the relationship from `T`

to `U`

.

Conversely, if you have an interface that can `consume`

a certain type:

ts

interface Consumer<T> {consume: (arg: T) => void;}

Then we can use a `Consumer<Animal>`

where a `Consumer<Cat>`

is expected, because any function that is capable of accepting an `Animal`

must also be capable of accepting a `Cat`

.
This relationship is called *contravariance*: the relationship from `Consumer<T>`

to `Consumer<U>`

is the same as the relationship from `U`

to `T`

.
Note the reversal of direction as compared to covariance! This is why contravariance “cancels itself out” but covariance doesn’t.

In a structural type system like TypeScript’s, covariance and contravariance are naturally emergent behaviors that follow from the definition of types. Even in the absence of generics, we would see covariant (and contravariant) relationships:

ts

interface AnimalProducer {make(): Animal;}// A CatProducer can be used anywhere an// Animal producer is expectedinterface CatProducer {make(): Cat;}

TypeScript has a structural type system, so when comparing two types, e.g. to see if a `Producer<Cat>`

can be used where a `Producer<Animal>`

is expected, the usual algorithm would be structurally expand both of those definitions, and compare their structures.
However, variance allows for an extremely useful optimization: if `Producer<T>`

is covariant on `T`

, then we can simply check `Cat`

and `Animal`

instead, as we know they’ll have the same relationship as `Producer<Cat>`

and `Producer<Animal>`

.

Note that this logic can only be used when we’re examining two instantiations of the same type.
If we have a `Producer<T>`

and a `FastProducer<U>`

, there’s no guarantee that `T`

and `U`

necessarily refer to the same positions in these types, so this check will always be performed structurally.

Because variance is a naturally emergent property of structural types, TypeScript automatically *infers* the variance of every generic type.
**In extremely rare cases** involving certain kinds of circular types, this measurement can be inaccurate.
If this happens, you can add a variance annotation to a type parameter to force a particular variance:

ts

// Contravariant annotationinterface Consumer<in T> {consume: (arg: T) => void;}// Covariant annotationinterface Producer<out T> {make(): T;}// Invariant annotationinterface ProducerConsumer<in out T> {consume: (arg: T) => void;make(): T;}

Only do this if you are writing the same variance that *should* occur structurally.

Never write a variance annotation that doesn’t match the structural variance!


It’s critical to reinforce that variance annotations are only in effect during an instantiation-based comparison. They have no effect during a structural comparison. For example, you can’t use variance annotations to “force” a type to be actually invariant:

ts

// DON'T DO THIS - variance annotation// does not match structural behaviorinterface Producer<in out T> {make(): T;}// Not a type error -- this is a structural// comparison, so variance annotations are// not in effectconst p: Producer<string | number> = {make(): number {return 42;}}

Here, the object literal’s `make`

function returns `number`

, which we might expect to cause an error because `number`

isn’t `string | number`

.
However, this isn’t an instantiation-based comparison, because the object literal is an anonymous type, not a `Producer<string | number>`

.

Variance annotations don’t change structural behavior and are only consulted in specific situations


It’s very important to only write variance annotations if you absolutely know why you’re doing it, what their limitations are, and when they aren’t in effect. Whether TypeScript uses an instantiation-based comparison or structural comparison is not a specified behavior and may change from version to version for correctness or performance reasons, so you should only ever write variance annotations when they match the structural behavior of a type. Don’t use variance annotations to try to “force” a particular variance; this will cause unpredictable behavior in your code.

Do NOT write variance annotations unless they match the structural behavior of a type


Remember, TypeScript can automatically infer variance from your generic types.
It’s almost never necessary to write a variance annotation, and you should only do so when you’ve identified a specific need.
Variance annotations *do not* change the structural behavior of a type, and depending on the situation, you might see a structural comparison made when you expected an instantiation-based comparison.
Variance annotations can’t be used to modify how types behave in these structural contexts, and shouldn’t be written unless the annotation is the same as the structural definition.
Because this is difficult to get right, and TypeScript can correctly infer variance in the vast majority of cases, you should not find yourself writing variance annotations in normal code.

Don’t try to use variance annotations to change typechecking behavior; this is not what they are for


You *may* find temporary variance annotations useful in a “type debugging” situation, because variance annotations are checked.
TypeScript will issue an error if the annotated variance is identifiably wrong:

ts

// Error, this interface is definitely contravariant on Tinterface Foo<out T> {consume: (arg: T) => void;}

However, variance annotations are allowed to be stricter (e.g. `in out`

is valid if the actual variance is covariant).
Be sure to remove your variance annotations once you’re done debugging.

Lastly, if you’re trying to maximize your typechecking performance, *and* have run a profiler, *and* have identified a specific type that’s slow, *and* have identified variance inference specifically is slow, *and* have carefully validated the variance annotation you want to write, you *may* see a small performance benefit in extraordinarily complex types by adding variance annotations.

Don’t try to use variance annotations to change typechecking behavior; this is not what they are for

---

## Source: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

The `keyof`

type operator

The `keyof`

operator takes an object type and produces a string or numeric literal union of its keys.
The following type `P`

is the same type as `type P = "x" | "y"`

:

ts

typePoint = {x : number;y : number };typeP = keyofPoint ;[Try]

If the type has a `string`

or `number`

index signature, `keyof`

will return those types instead:

ts

typeArrayish = { [n : number]: unknown };typeA = keyofArrayish ;typeMapish = { [k : string]: boolean };typeM = keyofMapish ;[Try]

Note that in this example, `M`

is `string | number`

— this is because JavaScript object keys are always coerced to a string, so `obj[0]`

is always the same as `obj["0"]`

.

`keyof`

types become especially useful when combined with mapped types, which we’ll learn more about later.

---

## Source: https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

The `typeof`

type operator

JavaScript already has a `typeof`

operator you can use in an *expression* context:

ts

// Prints "string"console .log (typeof "Hello world");[Try]

TypeScript adds a `typeof`

operator you can use in a *type* context to refer to the *type* of a variable or property:

ts

lets = "hello";letn : typeofs ;[Try]

This isn’t very useful for basic types, but combined with other type operators, you can use `typeof`

to conveniently express many patterns.
For an example, let’s start by looking at the predefined type `ReturnType<T>`

.
It takes a *function type* and produces its return type:

ts

typePredicate = (x : unknown) => boolean;typeK =ReturnType <Predicate >;[Try]

If we try to use `ReturnType`

on a function name, we see an instructive error:

ts

functionf () {return {x : 10,y : 3 };}type'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?2749'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?P =ReturnType <>; f [Try]

Remember that *values* and *types* aren’t the same thing.
To refer to the *type* that the *value f* has, we use

`typeof`

:ts

functionf () {return {x : 10,y : 3 };}typeP =ReturnType <typeoff >;[Try]

Limitations

TypeScript intentionally limits the sorts of expressions you can use `typeof`

on.

Specifically, it’s only legal to use `typeof`

on identifiers (i.e. variable names) or their properties.
This helps avoid the confusing trap of writing code you think is executing, but isn’t:

ts

// Meant to use = ReturnType<typeof msgbox>let',' expected.1005',' expected.shouldContinue : typeofmsgbox ( "Are you sure you want to continue?");[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

We can use an *indexed access type* to look up a specific property on another type:

ts

typePerson = {age : number;name : string;alive : boolean };typeAge =Person ["age"];[Try]

The indexing type is itself a type, so we can use unions, `keyof`

, or other types entirely:

ts

typeI1 =Person ["age" | "name"];typeI2 =Person [keyofPerson ];typeAliveOrName = "alive" | "name";typeI3 =Person [AliveOrName ];[Try]

You’ll even see an error if you try to index a property that doesn’t exist:

ts

typeProperty 'alve' does not exist on type 'Person'.2339Property 'alve' does not exist on type 'Person'.I1 =Person ["alve" ];[Try]

Another example of indexing with an arbitrary type is using `number`

to get the type of an array’s elements.
We can combine this with `typeof`

to conveniently capture the element type of an array literal:

ts

constMyArray = [{name : "Alice",age : 15 },{name : "Bob",age : 23 },{name : "Eve",age : 38 },];typePerson = typeofMyArray [number];typeAge = typeofMyArray [number]["age"];// OrtypeAge2 =Person ["age"];[Try]

You can only use types when indexing, meaning you can’t use a `const`

to make a variable reference:

ts

constkey = "age";typeType 'key' cannot be used as an index type.'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?2538Age =Person []; key

2749Type 'key' cannot be used as an index type.'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?[Try]

However, you can use a type alias for a similar style of refactor:

ts

typekey = "age";typeAge =Person [key ];[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

At the heart of most useful programs, we have to make decisions based on input.
JavaScript programs are no different, but given the fact that values can be easily introspected, those decisions are also based on the types of the inputs.
*Conditional types* help describe the relation between the types of inputs and outputs.

ts

interfaceAnimal {live (): void;}interfaceDog extendsAnimal {woof (): void;}typeExample1 =Dog extendsAnimal ? number : string;typeExample2 =RegExp extendsAnimal ? number : string;[Try]

Conditional types take a form that looks a little like conditional expressions (`condition ? trueExpression : falseExpression`

) in JavaScript:

ts

SomeType extendsOtherType ?TrueType :FalseType ;[Try]

When the type on the left of the `extends`

is assignable to the one on the right, then you’ll get the type in the first branch (the “true” branch); otherwise you’ll get the type in the latter branch (the “false” branch).

From the examples above, conditional types might not immediately seem useful - we can tell ourselves whether or not `Dog extends Animal`

and pick `number`

or `string`

!
But the power of conditional types comes from using them with generics.

For example, let’s take the following `createLabel`

function:

ts

interfaceIdLabel {id : number /* some fields */;}interfaceNameLabel {name : string /* other fields */;}functioncreateLabel (id : number):IdLabel ;functioncreateLabel (name : string):NameLabel ;functioncreateLabel (nameOrId : string | number):IdLabel |NameLabel ;functioncreateLabel (nameOrId : string | number):IdLabel |NameLabel {throw "unimplemented";}[Try]

These overloads for createLabel describe a single JavaScript function that makes a choice based on the types of its inputs. Note a few things:

- If a library has to make the same sort of choice over and over throughout its API, this becomes cumbersome.
- We have to create three overloads: one for each case when we’re
*sure*of the type (one for`string`

and one for`number`

), and one for the most general case (taking a`string | number`

). For every new type`createLabel`

can handle, the number of overloads grows exponentially.

Instead, we can encode that logic in a conditional type:

ts

typeNameOrId <T extends number | string> =T extends number?IdLabel :NameLabel ;[Try]

We can then use that conditional type to simplify our overloads down to a single function with no overloads.

ts

functioncreateLabel <T extends number | string>(idOrName :T ):NameOrId <T > {throw "unimplemented";}leta =createLabel ("typescript");letb =createLabel (2.8);letc =createLabel (Math .random () ? "hello" : 42);[Try]

Conditional Type Constraints

Often, the checks in a conditional type will provide us with some new information. Just like narrowing with type guards can give us a more specific type, the true branch of a conditional type will further constrain generics by the type we check against.

For example, let’s take the following:

ts

typeType '"message"' cannot be used to index type 'T'.2536Type '"message"' cannot be used to index type 'T'.MessageOf <T > =T ["message"];[Try]

In this example, TypeScript errors because `T`

isn’t known to have a property called `message`

.
We could constrain `T`

, and TypeScript would no longer complain:

ts

typeMessageOf <T extends {message : unknown }> =T ["message"];interfacemessage : string;}typeEmailMessageContents =MessageOf <[Try]

However, what if we wanted `MessageOf`

to take any type, and default to something like `never`

if a `message`

property isn’t available?
We can do this by moving the constraint out and introducing a conditional type:

ts

typeMessageOf <T > =T extends {message : unknown } ?T ["message"] : never;interfacemessage : string;}interfaceDog {bark (): void;}typeEmailMessageContents =MessageOf <typeDogMessageContents =MessageOf <Dog >;[Try]

Within the true branch, TypeScript knows that `T`

*will* have a `message`

property.

As another example, we could also write a type called `Flatten`

that flattens array types to their element types, but leaves them alone otherwise:

ts

typeFlatten <T > =T extends any[] ?T [number] :T ;// Extracts out the element type.typeStr =Flatten <string[]>;// Leaves the type alone.typeNum =Flatten <number>;[Try]

When `Flatten`

is given an array type, it uses an indexed access with `number`

to fetch out `string[]`

’s element type.
Otherwise, it just returns the type it was given.

Inferring Within Conditional Types

We just found ourselves using conditional types to apply constraints and then extract out types. This ends up being such a common operation that conditional types make it easier.

Conditional types provide us with a way to infer from types we compare against in the true branch using the `infer`

keyword.
For example, we could have inferred the element type in `Flatten`

instead of fetching it out “manually” with an indexed access type:

ts

typeFlatten <Type > =Type extendsArray <inferItem > ?Item :Type ;[Try]

Here, we used the `infer`

keyword to declaratively introduce a new generic type variable named `Item`

instead of specifying how to retrieve the element type of `Type`

within the true branch.
This frees us from having to think about how to dig through and probing apart the structure of the types we’re interested in.

We can write some useful helper type aliases using the `infer`

keyword.
For example, for simple cases, we can extract the return type out from function types:

ts

typeGetReturnType <Type > =Type extends (...args : never[]) => inferReturn ?Return : never;typeNum =GetReturnType <() => number>;typeStr =GetReturnType <(x : string) => string>;typeBools =GetReturnType <(a : boolean,b : boolean) => boolean[]>;[Try]

When inferring from a type with multiple call signatures (such as the type of an overloaded function), inferences are made from the *last* signature (which, presumably, is the most permissive catch-all case). It is not possible to perform overload resolution based on a list of argument types.

ts

declare functionstringOrNum (x : string): number;declare functionstringOrNum (x : number): string;declare functionstringOrNum (x : string | number): string | number;typeT1 =ReturnType <typeofstringOrNum >;[Try]

Distributive Conditional Types

When conditional types act on a generic type, they become *distributive* when given a union type.
For example, take the following:

ts

typeToArray <Type > =Type extends any ?Type [] : never;[Try]

If we plug a union type into `ToArray`

, then the conditional type will be applied to each member of that union.

ts

typeToArray <Type > =Type extends any ?Type [] : never;typeStrArrOrNumArr =ToArray <string | number>;[Try]

What happens here is that `ToArray`

distributes on:

ts

string | number;[Try]

and maps over each member type of the union, to what is effectively:

ts

ToArray <string> |ToArray <number>;[Try]

which leaves us with:

ts

string[] | number[];[Try]

Typically, distributivity is the desired behavior.
To avoid that behavior, you can surround each side of the `extends`

keyword with square brackets.

ts

typeToArrayNonDist <Type > = [Type ] extends [any] ?Type [] : never;// 'ArrOfStrOrNum' is no longer a union.typeArrOfStrOrNum =ToArrayNonDist <string | number>;[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

When you don’t want to repeat yourself, sometimes a type needs to be based on another type.

Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:

ts

typeOnlyBoolsAndHorses = {[key : string]: boolean |Horse ;};constconforms :OnlyBoolsAndHorses = {del : true,rodney : false,};[Try]

A mapped type is a generic type which uses a union of `PropertyKey`

s (frequently created [via a keyof](/docs/handbook/2/indexed-access-types.html)) to iterate through keys to create a type:

ts

typeOptionsFlags <Type > = {[Property in keyofType ]: boolean;};[Try]

In this example, `OptionsFlags`

will take all the properties from the type `Type`

and change their values to be a boolean.

ts

typeFeatures = {darkMode : () => void;newUserProfile : () => void;};typeFeatureOptions =OptionsFlags <Features >;[Try]

Mapping Modifiers

There are two additional modifiers which can be applied during mapping: `readonly`

and `?`

which affect mutability and optionality respectively.

You can remove or add these modifiers by prefixing with `-`

or `+`

. If you don’t add a prefix, then `+`

is assumed.

ts

// Removes 'readonly' attributes from a type's propertiestypeCreateMutable <Type > = {-readonly [Property in keyofType ]:Type [Property ];};typeLockedAccount = {readonlyid : string;readonlyname : string;};typeUnlockedAccount =CreateMutable <LockedAccount >;[Try]

ts

// Removes 'optional' attributes from a type's propertiestypeConcrete <Type > = {[Property in keyofType ]-?:Type [Property ];};typeMaybeUser = {id : string;name ?: string;age ?: number;};typeUser =Concrete <MaybeUser >;[Try]

Key Remapping via `as`


In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an `as`

clause in a mapped type:

ts

type MappedTypeWithNewProperties<Type> = {[Properties in keyof Type as NewKeyType]: Type[Properties]}

You can leverage features like [template literal types](/docs/handbook/2/template-literal-types.html) to create new property names from prior ones:

ts

typeGetters <Type > = {[Property in keyofType as `get${Capitalize <string &Property >}`]: () =>Type [Property ]};interfacePerson {name : string;age : number;location : string;}typeLazyPerson =Getters <Person >;[Try]

You can filter out keys by producing `never`

via a conditional type:

ts

// Remove the 'kind' propertytypeRemoveKindField <Type > = {[Property in keyofType asExclude <Property , "kind">]:Type [Property ]};interfaceCircle {kind : "circle";radius : number;}typeKindlessCircle =RemoveKindField <Circle >;[Try]

You can map over arbitrary unions, not just unions of `string | number | symbol`

, but unions of any type:

ts

typeEventConfig <Events extends {kind : string }> = {[E inEvents asE ["kind"]]: (event :E ) => void;}typeSquareEvent = {kind : "square",x : number,y : number };typeCircleEvent = {kind : "circle",radius : number };typeConfig =EventConfig <SquareEvent |CircleEvent >[Try]

Further Exploration

Mapped types work well with other features in this type manipulation section, for example here is [a mapped type using a conditional type](/docs/handbook/2/conditional-types.html) which returns either a `true`

or `false`

depending on whether an object has the property `pii`

set to the literal `true`

:

ts

typeExtractPII <Type > = {[Property in keyofType ]:Type [Property ] extends {pii : true } ? true : false;};typeDBFields = {id : {format : "incrementing" };name : {type : string;pii : true };};typeObjectsNeedingGDPRDeletion =ExtractPII <DBFields >;[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

Template literal types build on [string literal types](/docs/handbook/2/everyday-types.html#literal-types), and have the ability to expand into many strings via unions.

They have the same syntax as [template literal strings in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), but are used in type positions.
When used with concrete literal types, a template literal produces a new string literal type by concatenating the contents.

ts

typeWorld = "world";typeGreeting = `hello ${World }`;[Try]

When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member:

ts

typeEmailLocaleIDs = "welcome_email" | "email_heading";typeFooterLocaleIDs = "footer_title" | "footer_sendoff";typeAllLocaleIDs = `${EmailLocaleIDs |FooterLocaleIDs }_id`;[Try]

For each interpolated position in the template literal, the unions are cross multiplied:

ts

typeAllLocaleIDs = `${EmailLocaleIDs |FooterLocaleIDs }_id`;typeLang = "en" | "ja" | "pt";typeLocaleMessageIDs = `${Lang }_${AllLocaleIDs }`;[Try]

We generally recommend that people use ahead-of-time generation for large string unions, but this is useful in smaller cases.

String Unions in Types

The power in template literals comes when defining a new string based on information inside a type.

Consider the case where a function (`makeWatchedObject`

) adds a new function
called `on()`

to a passed object. In JavaScript, its call might look like:
`makeWatchedObject(baseObject)`

. We can imagine the base object as looking
like:

ts

constpassedObject = {firstName : "Saoirse",lastName : "Ronan",age : 26,};[Try]

The `on`

function that will be added to the base object expects two arguments, an `eventName`

(a `string`

) and a `callback`

(a `function`

).

The `eventName`

should be of the form `attributeInThePassedObject + "Changed"`

; thus, `firstNameChanged`

as derived from the attribute `firstName`

in the base object.

The `callback`

function, when called:

- Should be passed a value of the type associated with the name
`attributeInThePassedObject`

; thus, since`firstName`

is typed as`string`

, the callback for the`firstNameChanged`

event expects a`string`

to be passed to it at call time. Similarly events associated with`age`

should expect to be called with a`number`

argument - Should have
`void`

return type (for simplicity of demonstration)

The naive function signature of `on()`

might thus be: `on(eventName: string, callback: (newValue: any) => void)`

. However, in the preceding description, we identified important type constraints that we’d like to document in our code. Template Literal types let us bring these constraints into our code.

ts

constperson =makeWatchedObject ({firstName : "Saoirse",lastName : "Ronan",age : 26,});// makeWatchedObject has added `on` to the anonymous Objectperson .on ("firstNameChanged", (newValue ) => {console .log (`firstName was changed to ${newValue }!`);});[Try]

Notice that `on`

listens on the event `"firstNameChanged"`

, not just `"firstName"`

. Our naive specification of `on()`

could be made more robust if we were to ensure that the set of eligible event names was constrained by the union of attribute names in the watched object with “Changed” added at the end. While we are comfortable with doing such a calculation in JavaScript i.e. `Object.keys(passedObject).map(x => `${x}Changed`)`

, template literals *inside the type system* provide a similar approach to string manipulation:

ts

typePropEventSource <Type > = {on (eventName : `${string & keyofType }Changed`,callback : (newValue : any) => void): void;};/// Create a "watched object" with an `on` method/// so that you can watch for changes to properties.declare functionmakeWatchedObject <Type >(obj :Type ):Type &PropEventSource <Type >;[Try]

With this, we can build something that errors when given the wrong property:

ts

constperson =makeWatchedObject ({firstName : "Saoirse",lastName : "Ronan",age : 26});person .on ("firstNameChanged", () => {});// Prevent easy human error (using the key instead of the event name)Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.2345Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.person .on ("firstName" , () => {});// It's typo-resistantArgument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.2345Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.person .on ("frstNameChanged" , () => {});[Try]

Inference with Template Literals

Notice that we did not benefit from all the information provided in the original passed object. Given change of a `firstName`

(i.e. a `firstNameChanged`

event), we should expect that the callback will receive an argument of type `string`

. Similarly, the callback for a change to `age`

should receive a `number`

argument. We’re naively using `any`

to type the `callback`

’s argument. Again, template literal types make it possible to ensure an attribute’s data type will be the same type as that attribute’s callback’s first argument.

The key insight that makes this possible is this: we can use a function with a generic such that:

- The literal used in the first argument is captured as a literal type
- That literal type can be validated as being in the union of valid attributes in the generic
- The type of the validated attribute can be looked up in the generic’s structure using Indexed Access
- This typing information can
*then*be applied to ensure the argument to the callback function is of the same type

ts

typePropEventSource <Type > = {on <Key extends string & keyofType >(eventName : `${Key }Changed`,callback : (newValue :Type [Key ]) => void): void;};declare functionmakeWatchedObject <Type >(obj :Type ):Type &PropEventSource <Type >;constperson =makeWatchedObject ({firstName : "Saoirse",lastName : "Ronan",age : 26});person .on ("firstNameChanged",newName => {console .log (`new name is ${newName .toUpperCase ()}`);});person .on ("ageChanged",newAge => {if (newAge < 0) {console .warn ("warning! negative age");}})[Try]

Here we made `on`

into a generic method.

When a user calls with the string `"firstNameChanged"`

, TypeScript will try to infer the right type for `Key`

.
To do that, it will match `Key`

against the content before `"Changed"`

and infer the string `"firstName"`

.
Once TypeScript figures that out, the `on`

method can fetch the type of `firstName`

on the original object, which is `string`

in this case.
Similarly, when called with `"ageChanged"`

, TypeScript finds the type for the property `age`

which is `number`

.

Inference can be combined in different ways, often to deconstruct strings, and reconstruct them in different ways.

Intrinsic String Manipulation Types

To help with string manipulation, TypeScript includes a set of types which can be used in string manipulation. These types come built-in to the compiler for performance and can’t be found in the `.d.ts`

files included with TypeScript.

`Uppercase<StringType>`


Converts each character in the string to the uppercase version.

Example

ts

typeGreeting = "Hello, world"typeShoutyGreeting =Uppercase <Greeting >typeASCIICacheKey <Str extends string> = `ID-${Uppercase <Str >}`typeMainID =ASCIICacheKey <"my_app">[Try]

`Lowercase<StringType>`


Converts each character in the string to the lowercase equivalent.

Example

ts

typeGreeting = "Hello, world"typeQuietGreeting =Lowercase <Greeting >typeASCIICacheKey <Str extends string> = `id-${Lowercase <Str >}`typeMainID =ASCIICacheKey <"MY_APP">[Try]

`Capitalize<StringType>`


Converts the first character in the string to an uppercase equivalent.

Example

ts

typeLowercaseGreeting = "hello, world";typeGreeting =Capitalize <LowercaseGreeting >;[Try]

`Uncapitalize<StringType>`


Converts the first character in the string to a lowercase equivalent.

Example

ts

typeUppercaseGreeting = "HELLO WORLD";typeUncomfortableGreeting =Uncapitalize <UppercaseGreeting >;[Try]

## Technical details on the intrinsic string manipulation types

The code, as of TypeScript 4.1, for these intrinsic functions uses the JavaScript string runtime functions directly for manipulation and are not locale aware.

function applyStringMapping(symbol: Symbol, str: string) {
switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
case IntrinsicTypeKind.Uppercase: return str.toUpperCase();
case IntrinsicTypeKind.Lowercase: return str.toLowerCase();
case IntrinsicTypeKind.Capitalize: return str.charAt(0).toUpperCase() + str.slice(1);
case IntrinsicTypeKind.Uncapitalize: return str.charAt(0).toLowerCase() + str.slice(1);
}
return str;
}

---

## Source: https://www.typescriptlang.org/docs/handbook/2/classes.html

Background Reading:

[Classes (MDN)]

TypeScript offers full support for the `class`

keyword introduced in ES2015.

As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

Class Members

Here’s the most basic class - an empty one:

ts

classPoint {}[Try]

This class isn’t very useful yet, so let’s start adding some members.

Fields

A field declaration creates a public writeable property on a class:

ts

classPoint {x : number;y : number;}constpt = newPoint ();pt .x = 0;pt .y = 0;[Try]

As with other locations, the type annotation is optional, but will be an implicit `any`

if not specified.

Fields can also have *initializers*; these will run automatically when the class is instantiated:

ts

classPoint {x = 0;y = 0;}constpt = newPoint ();// Prints 0, 0console .log (`${pt .x }, ${pt .y }`);[Try]

Just like with `const`

, `let`

, and `var`

, the initializer of a class property will be used to infer its type:

ts

constpt = newPoint ();Type 'string' is not assignable to type 'number'.2322Type 'string' is not assignable to type 'number'.pt .x = "0";[Try]

`--strictPropertyInitialization`


The [ strictPropertyInitialization](/tsconfig#strictPropertyInitialization) setting controls whether class fields need to be initialized in the constructor.

ts

classBadGreeter {Property 'name' has no initializer and is not definitely assigned in the constructor.2564Property 'name' has no initializer and is not definitely assigned in the constructor.: string; name }[Try]

ts

classGoodGreeter {name : string;constructor() {this.name = "hello";}}[Try]

Note that the field needs to be initialized *in the constructor itself*.
TypeScript does not analyze methods you invoke from the constructor to detect initializations, because a derived class might override those methods and fail to initialize the members.

If you intend to definitely initialize a field through means other than the constructor (for example, maybe an external library is filling in part of your class for you), you can use the *definite assignment assertion operator*, `!`

:

ts

classOKGreeter {// Not initialized, but no errorname !: string;}[Try]

`readonly`


Fields may be prefixed with the `readonly`

modifier.
This prevents assignments to the field outside of the constructor.

ts

classGreeter {readonlyname : string = "world";constructor(otherName ?: string) {if (otherName !==undefined ) {this.name =otherName ;}}err () {this.Cannot assign to 'name' because it is a read-only property.2540Cannot assign to 'name' because it is a read-only property.= "not ok"; name }}constg = newGreeter ();Cannot assign to 'name' because it is a read-only property.2540Cannot assign to 'name' because it is a read-only property.g .= "also not ok"; name [Try]

Constructors

Background Reading:


[Constructor (MDN)]


Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

ts

classPoint {x : number;y : number;// Normal signature with defaultsconstructor(x = 0,y = 0) {this.x =x ;this.y =y ;}}[Try]

ts

classPoint {x : number = 0;y : number = 0;// Constructor overloadsconstructor(x : number,y : number);constructor(xy : string);constructor(x : string | number,y : number = 0) {// Code logic here}}[Try]

There are just a few differences between class constructor signatures and function signatures:

- Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
- Constructors can’t have return type annotations - the class instance type is always what’s returned

Super Calls

Just as in JavaScript, if you have a base class, you’ll need to call `super();`

in your constructor body before using any `this.`

members:

ts

classBase {k = 4;}classDerived extendsBase {constructor() {// Prints a wrong value in ES5; throws exception in ES6'super' must be called before accessing 'this' in the constructor of a derived class.17009'super' must be called before accessing 'this' in the constructor of a derived class.console .log (this .k );super();}}[Try]

Forgetting to call `super`

is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.

Methods

Background Reading:


[Method definitions]


A function property on a class is called a *method*.
Methods can use all the same type annotations as functions and constructors:

ts

classPoint {x = 10;y = 10;scale (n : number): void {this.x *=n ;this.y *=n ;}}[Try]

Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.

Note that inside a method body, it is still mandatory to access fields and other methods via `this.`

.
An unqualified name in a method body will always refer to something in the enclosing scope:

ts

letx : number = 0;classC {x : string = "hello";m () {// This is trying to modify 'x' from line 1, not the class propertyType 'string' is not assignable to type 'number'.2322Type 'string' is not assignable to type 'number'.= "world"; x }}[Try]

Getters / Setters

Classes can also have *accessors*:

ts

classC {_length = 0;getlength () {return this._length ;}setlength (value ) {this._length =value ;}}[Try]

Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.


TypeScript has some special inference rules for accessors:

- If
`get`

exists but no`set`

, the property is automatically`readonly`

- If the type of the setter parameter is not specified, it is inferred from the return type of the getter

Since [TypeScript 4.3](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/), it is possible to have accessors with different types for getting and setting.

ts

classThing {_size = 0;getsize (): number {return this._size ;}setsize (value : string | number | boolean) {letnum =Number (value );// Don't allow NaN, Infinity, etcif (!Number .isFinite (num )) {this._size = 0;return;}this._size =num ;}}[Try]

Index Signatures

Classes can declare index signatures; these work the same as [Index Signatures for other object types](/docs/handbook/2/objects.html#index-signatures):

ts

classMyClass {[s : string]: boolean | ((s : string) => boolean);check (s : string) {return this[s ] as boolean;}}[Try]

Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.

Class Heritage

Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

`implements`

Clauses

You can use an `implements`

clause to check that a class satisfies a particular `interface`

.
An error will be issued if a class fails to correctly implement it:

ts

interfacePingable {ping (): void;}classSonar implementsPingable {ping () {console .log ("ping!");}}classClass 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.2420Class 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.implements Ball Pingable {pong () {console .log ("pong!");}}[Try]

Classes may also implement multiple interfaces, e.g. `class C implements A, B {`

.

Cautions

It’s important to understand that an `implements`

clause is only a check that the class can be treated as the interface type.
It doesn’t change the type of the class or its methods *at all*.
A common source of error is to assume that an `implements`

clause will change the class type - it doesn’t!

ts

interfaceCheckable {check (name : string): boolean;}classNameChecker implementsCheckable {Parameter 's' implicitly has an 'any' type.7006Parameter 's' implicitly has an 'any' type.check () { s // Notice no error herereturns .toLowerCase () === "ok";}}[Try]

In this example, we perhaps expected that `s`

’s type would be influenced by the `name: string`

parameter of `check`

.
It is not - `implements`

clauses don’t change how the class body is checked or its type inferred.

Similarly, implementing an interface with an optional property doesn’t create that property:

ts

interfaceA {x : number;y ?: number;}classC implementsA {x = 0;}constc = newC ();Property 'y' does not exist on type 'C'.2339Property 'y' does not exist on type 'C'.c .= 10; y [Try]

`extends`

Clauses

Background Reading:


[extends keyword (MDN)]


Classes may `extend`

from a base class.
A derived class has all the properties and methods of its base class, and can also define additional members.

ts

classAnimal {move () {console .log ("Moving along!");}}classDog extendsAnimal {woof (times : number) {for (leti = 0;i <times ;i ++) {console .log ("woof!");}}}constd = newDog ();// Base class methodd .move ();// Derived class methodd .woof (3);[Try]

Overriding Methods

Background Reading:


[super keyword (MDN)]


A derived class can also override a base class field or property.
You can use the `super.`

syntax to access base class methods.
Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.

TypeScript enforces that a derived class is always a subtype of its base class.

For example, here’s a legal way to override a method:

ts

classBase {greet () {console .log ("Hello, world!");}}classDerived extendsBase {greet (name ?: string) {if (name ===undefined ) {super.greet ();} else {console .log (`Hello, ${name .toUpperCase ()}`);}}}constd = newDerived ();d .greet ();d .greet ("reader");[Try]

It’s important that a derived class follow its base class contract. Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

ts

// Alias the derived instance through a base class referenceconstb :Base =d ;// No problemb .greet ();[Try]

What if `Derived`

didn’t follow `Base`

’s contract?

ts

classBase {greet () {console .log ("Hello, world!");}}classDerived extendsBase {// Make this parameter requiredProperty 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'. Type '(name: string) => void' is not assignable to type '() => void'. Target signature provides too few arguments. Expected 1 or more, but got 0.2416Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'. Type '(name: string) => void' is not assignable to type '() => void'. Target signature provides too few arguments. Expected 1 or more, but got 0.( greet name : string) {console .log (`Hello, ${name .toUpperCase ()}`);}}[Try]

If we compiled this code despite the error, this sample would then crash:

ts

constb :Base = newDerived ();// Crashes because "name" will be undefinedb .greet ();[Try]

Type-only Field Declarations

When `target >= ES2022`

or [ useDefineForClassFields](/tsconfig#useDefineForClassFields) is

`true`

, class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class. This can be a problem when you only want to re-declare a more accurate type for an inherited field. To handle these cases, you can write `declare`

to indicate to TypeScript that there should be no runtime effect for this field declaration.ts

interfaceAnimal {dateOfBirth : any;}interfaceDog extendsAnimal {breed : any;}classAnimalHouse {resident :Animal ;constructor(animal :Animal ) {this.resident =animal ;}}classDogHouse extendsAnimalHouse {// Does not emit JavaScript code,// only ensures the types are correctdeclareresident :Dog ;constructor(dog :Dog ) {super(dog );}}[Try]

Initialization Order

The order that JavaScript classes initialize can be surprising in some cases. Let’s consider this code:

ts

classBase {name = "base";constructor() {console .log ("My name is " + this.name );}}classDerived extendsBase {name = "derived";}// Prints "base", not "derived"constd = newDerived ();[Try]

What happened here?

The order of class initialization, as defined by JavaScript, is:

- The base class fields are initialized
- The base class constructor runs
- The derived class fields are initialized
- The derived class constructor runs

This means that the base class constructor saw its own value for `name`

during its own constructor, because the derived class field initializations hadn’t run yet.

Inheriting Built-in Types

Note: If you don’t plan to inherit from built-in types like

`Array`

,`Error`

,`Map`

, etc. or your compilation target is explicitly set to`ES6`

/`ES2015`

or above, you may skip this section

In ES2015, constructors which return an object implicitly substitute the value of `this`

for any callers of `super(...)`

.
It is necessary for generated constructor code to capture any potential return value of `super(...)`

and replace it with `this`

.

As a result, subclassing `Error`

, `Array`

, and others may no longer work as expected.
This is due to the fact that constructor functions for `Error`

, `Array`

, and the like use ECMAScript 6’s `new.target`

to adjust the prototype chain;
however, there is no way to ensure a value for `new.target`

when invoking a constructor in ECMAScript 5.
Other downlevel compilers generally have the same limitation by default.

For a subclass like the following:

ts

classMsgError extendsError {constructor(m : string) {super(m );}sayHello () {return "hello " + this.message ;}}[Try]

you may find that:

- methods may be
`undefined`

on objects returned by constructing these subclasses, so calling`sayHello`

will result in an error. `instanceof`

will be broken between instances of the subclass and their instances, so`(new MsgError()) instanceof MsgError`

will return`false`

.

As a recommendation, you can manually adjust the prototype immediately after any `super(...)`

calls.

ts

classMsgError extendsError {constructor(m : string) {super(m );// Set the prototype explicitly.Object .setPrototypeOf (this,MsgError .prototype );}sayHello () {return "hello " + this.message ;}}[Try]

However, any subclass of `MsgError`

will have to manually set the prototype as well.
For runtimes that don’t support [ Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf), you may instead be able to use

[.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

`__proto__`

Unfortunately, [these workarounds will not work on Internet Explorer 10 and prior](https://msdn.microsoft.com/en-us/library/s4esdbwz(v=vs.94).aspx).
One can manually copy methods from the prototype onto the instance itself (i.e. `MsgError.prototype`

onto `this`

), but the prototype chain itself cannot be fixed.

Member Visibility

You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

`public`


The default visibility of class members is `public`

.
A `public`

member can be accessed anywhere:

ts

classGreeter {publicgreet () {console .log ("hi!");}}constg = newGreeter ();g .greet ();[Try]

Because `public`

is already the default visibility modifier, you don’t ever *need* to write it on a class member, but might choose to do so for style/readability reasons.

`protected`


`protected`

members are only visible to subclasses of the class they’re declared in.

ts

classGreeter {publicgreet () {console .log ("Hello, " + this.getName ());}protectedgetName () {return "hi";}}classSpecialGreeter extendsGreeter {publichowdy () {// OK to access protected member hereconsole .log ("Howdy, " + this.getName ());}}constg = newSpecialGreeter ();g .greet (); // OKProperty 'getName' is protected and only accessible within class 'Greeter' and its subclasses.2445Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.g .(); getName [Try]

Exposure of `protected`

members

Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities.
This includes making `protected`

members `public`

:

ts

classBase {protectedm = 10;}classDerived extendsBase {// No modifier, so default is 'public'm = 15;}constd = newDerived ();console .log (d .m ); // OK[Try]

Note that `Derived`

was already able to freely read and write `m`

, so this doesn’t meaningfully alter the “security” of this situation.
The main thing to note here is that in the derived class, we need to be careful to repeat the `protected`

modifier if this exposure isn’t intentional.

Cross-hierarchy `protected`

access

TypeScript doesn’t allow accessing `protected`

members of a sibling class in a class hierarchy:

ts

classBase {protectedx : number = 1;}classDerived1 extendsBase {protectedx : number = 5;}classDerived2 extendsBase {f1 (other :Derived2 ) {other .x = 10;}f2 (other :Derived1 ) {Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.2445Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.other .= 10; x }}[Try]

This is because accessing `x`

in `Derived2`

should only be legal from `Derived2`

’s subclasses, and `Derived1`

isn’t one of them.
Moreover, if accessing `x`

through a `Derived1`

reference is illegal (which it certainly should be!), then accessing it through a base class reference should never improve the situation.

See also [Why Can’t I Access A Protected Member From A Derived Class?](https://blogs.msdn.microsoft.com/ericlippert/2005/11/09/why-cant-i-access-a-protected-member-from-a-derived-class/) which explains more of C#‘s reasoning on the same topic.

`private`


`private`

is like `protected`

, but doesn’t allow access to the member even from subclasses:

ts

classBase {privatex = 0;}constb = newBase ();// Can't access from outside the classProperty 'x' is private and only accessible within class 'Base'.2341Property 'x' is private and only accessible within class 'Base'.console .log (b .); x [Try]

ts

classDerived extendsBase {showX () {// Can't access in subclassesProperty 'x' is private and only accessible within class 'Base'.2341Property 'x' is private and only accessible within class 'Base'.console .log (this.); x }}[Try]

Because `private`

members aren’t visible to derived classes, a derived class can’t increase their visibility:

ts

classBase {privatex = 0;}classClass 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'.2415Class 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'.extends Derived Base {x = 1;}[Try]

Cross-instance `private`

access

Different OOP languages disagree about whether different instances of the same class may access each others’ `private`

members.
While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

TypeScript does allow cross-instance `private`

access:

ts

classA {privatex = 10;publicsameAs (other :A ) {// No errorreturnother .x === this.x ;}}[Try]

Caveats

Like other aspects of TypeScript’s type system, `private`

and `protected`

[are only enforced during type checking](https://www.typescriptlang.org/play?removeComments=true&target=99&ts=4.3.4#code/PTAEGMBsEMGddAEQPYHNQBMCmVoCcsEAHPASwDdoAXLUAM1K0gwQFdZSA7dAKWkoDK4MkSoByBAGJQJLAwAeAWABQIUH0HDSoiTLKUaoUggAW+DHorUsAOlABJcQlhUy4KpACeoLJzrI8cCwMGxU1ABVPIiwhESpMZEJQTmR4lxFQaQxWMm4IZABbIlIYKlJkTlDlXHgkNFAAbxVQTIAjfABrAEEC5FZOeIBeUAAGAG5mmSw8WAroSFIqb2GAIjMiIk8VieVJ8Ar01ncAgAoASkaAXxVr3dUwGoQAYWpMHBgCYn1rekZmNg4eUi0Vi2icoBWJCsNBWoA6WE8AHcAiEwmBgTEtDovtDaMZQLM6PEoQZbA5wSk0q5SO4vD4-AEghZoJwLGYEIRwNBoqAzFRwCZCFUIlFMXECdSiAhId8YZgclx0PsiiVqOVOAAaUAFLAsxWgKiC35MFigfC0FKgSAVVDTSyk+W5dB4fplHVVR6gF7xJrKFotEk-HXIRE9PoDUDDcaTAPTWaceaLZYQlmoPBbHYx-KcQ7HPDnK43FQqfY5+IMDDISPJLCIuqoc47UsuUCofAME3Vzi1r3URvF5QV5A2STtPDdXqunZDgDaYlHnTDrrEAF0dm28B3mDZg6HJwN1+2-hg57ulwNV2NQGoZbjYfNrYiENBwEFaojFiZQK08C-4fFKTVCozWfTgfFgLkeT5AUqiAA).

This means that JavaScript runtime constructs like `in`

or simple property lookup can still access a `private`

or `protected`

member:

ts

classMySafe {privatesecretKey = 12345;}[Try]

js

// In a JavaScript file...const s = new MySafe();// Will print 12345console.log(s.secretKey);

`private`

also allows access using bracket notation during type checking. This makes `private`

-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are *soft private* and don’t strictly enforce privacy.

ts

classMySafe {privatesecretKey = 12345;}consts = newMySafe ();// Not allowed during type checkingProperty 'secretKey' is private and only accessible within class 'MySafe'.2341Property 'secretKey' is private and only accessible within class 'MySafe'.console .log (s .); secretKey // OKconsole .log (s ["secretKey"]);[Try]

Unlike TypeScripts’s `private`

, JavaScript’s [private fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) (`#`

) remain private after compilation and do not provide the previously mentioned escape hatches like bracket notation access, making them *hard private*.

ts

classDog {#barkAmount = 0;personality = "happy";constructor() {}}[Try]

ts

"use strict";class Dog {#barkAmount = 0;personality = "happy";constructor() { }}[Try]

When compiling to ES2021 or less, TypeScript will use WeakMaps in place of `#`

.

ts

"use strict";var _Dog_barkAmount;class Dog {constructor() {_Dog_barkAmount.set(this, 0);this.personality = "happy";}}_Dog_barkAmount = new WeakMap();[Try]

If you need to protect values in your class from malicious actors, you should use mechanisms that offer hard runtime privacy, such as closures, WeakMaps, or private fields. Note that these added privacy checks during runtime could affect performance.

Static Members

Background Reading:


[Static Members (MDN)]


Classes may have `static`

members.
These members aren’t associated with a particular instance of the class.
They can be accessed through the class constructor object itself:

ts

classMyClass {staticx = 0;staticprintX () {console .log (MyClass .x );}}console .log (MyClass .x );MyClass .printX ();[Try]

Static members can also use the same `public`

, `protected`

, and `private`

visibility modifiers:

ts

classMyClass {private staticx = 0;}Property 'x' is private and only accessible within class 'MyClass'.2341Property 'x' is private and only accessible within class 'MyClass'.console .log (MyClass .); x [Try]

Static members are also inherited:

ts

classBase {staticgetGreeting () {return "Hello world";}}classDerived extendsBase {myGreeting =Derived .getGreeting ();}[Try]

Special Static Names

It’s generally not safe/possible to overwrite properties from the `Function`

prototype.
Because classes are themselves functions that can be invoked with `new`

, certain `static`

names can’t be used.
Function properties like `name`

, `length`

, and `call`

aren’t valid to define as `static`

members:

ts

classS {staticStatic property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.2699Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.= "S!"; name }[Try]

Why No Static Classes?

TypeScript (and JavaScript) don’t have a construct called `static class`

the same way as, for example, C# does.

Those constructs *only* exist because those languages force all data and functions to be inside a class; because that restriction doesn’t exist in TypeScript, there’s no need for them.
A class with only a single instance is typically just represented as a normal *object* in JavaScript/TypeScript.

For example, we don’t need a “static class” syntax in TypeScript because a regular object (or even top-level function) will do the job just as well:

ts

// Unnecessary "static" classclassMyStaticClass {staticdoSomething () {}}// Preferred (alternative 1)functiondoSomething () {}// Preferred (alternative 2)constMyHelperObject = {dosomething () {},};[Try]

`static`

Blocks in Classes

Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class. This means that we can write initialization code with all the capabilities of writing statements, no leakage of variables, and full access to our class’s internals.

ts

classFoo {static #count = 0;getcount () {returnFoo .#count;}static {try {constlastInstances =loadLastInstances ();Foo .#count +=lastInstances .length ;}catch {}}}[Try]

Generic Classes

Classes, much like interfaces, can be generic.
When a generic class is instantiated with `new`

, its type parameters are inferred the same way as in a function call:

ts

classBox <Type > {contents :Type ;constructor(value :Type ) {this.contents =value ;}}constb = newBox ("hello!");[Try]

Classes can use generic constraints and defaults the same way as interfaces.

Type Parameters in Static Members

This code isn’t legal, and it may not be obvious why:

ts

classBox <Type > {staticStatic members cannot reference class type parameters.2302Static members cannot reference class type parameters.defaultValue :; Type }[Try]

Remember that types are always fully erased!
At runtime, there’s only *one* `Box.defaultValue`

property slot.
This means that setting `Box<string>.defaultValue`

(if that were possible) would *also* change `Box<number>.defaultValue`

- not good.
The `static`

members of a generic class can never refer to the class’s type parameters.

`this`

at Runtime in Classes

Background Reading:


[this keyword (MDN)]


It’s important to remember that TypeScript doesn’t change the runtime behavior of JavaScript, and that JavaScript is somewhat famous for having some peculiar runtime behaviors.

JavaScript’s handling of `this`

is indeed unusual:

ts

classMyClass {name = "MyClass";getName () {return this.name ;}}constc = newMyClass ();constobj = {name : "obj",getName :c .getName ,};// Prints "obj", not "MyClass"console .log (obj .getName ());[Try]

Long story short, by default, the value of `this`

inside a function depends on *how the function was called*.
In this example, because the function was called through the `obj`

reference, its value of `this`

was `obj`

rather than the class instance.

This is rarely what you want to happen! TypeScript provides some ways to mitigate or prevent this kind of error.

Arrow Functions

Background Reading:


[Arrow functions (MDN)]


If you have a function that will often be called in a way that loses its `this`

context, it can make sense to use an arrow function property instead of a method definition:

ts

classMyClass {name = "MyClass";getName = () => {return this.name ;};}constc = newMyClass ();constg =c .getName ;// Prints "MyClass" instead of crashingconsole .log (g ());[Try]

This has some trade-offs:

- The
`this`

value is guaranteed to be correct at runtime, even for code not checked with TypeScript - This will use more memory, because each class instance will have its own copy of each function defined this way
- You can’t use
`super.getName`

in a derived class, because there’s no entry in the prototype chain to fetch the base class method from

`this`

parameters

In a method or function definition, an initial parameter named `this`

has special meaning in TypeScript.
These parameters are erased during compilation:

ts

// TypeScript input with 'this' parameterfunctionfn (this :SomeType ,x : number) {/* ... */}[Try]

js

// JavaScript outputfunction fn(x) {/* ... */}

TypeScript checks that calling a function with a `this`

parameter is done so with a correct context.
Instead of using an arrow function, we can add a `this`

parameter to method definitions to statically enforce that the method is called correctly:

ts

classMyClass {name = "MyClass";getName (this :MyClass ) {return this.name ;}}constc = newMyClass ();// OKc .getName ();// Error, would crashconstg =c .getName ;The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.2684The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.console .log (g ());[Try]

This method makes the opposite trade-offs of the arrow function approach:

- JavaScript callers might still use the class method incorrectly without realizing it
- Only one function per class definition gets allocated, rather than one per class instance
- Base method definitions can still be called via
`super`

.

`this`

Types

In classes, a special type called `this`

refers *dynamically* to the type of the current class.
Let’s see how this is useful:

ts

classBox {contents : string = "";set (value : string) {this.contents =value ;return this;}}[Try]

Here, TypeScript inferred the return type of `set`

to be `this`

, rather than `Box`

.
Now let’s make a subclass of `Box`

:

ts

classClearableBox extendsBox {clear () {this.contents = "";}}consta = newClearableBox ();constb =a .set ("hello");[Try]

You can also use `this`

in a parameter type annotation:

ts

classBox {content : string = "";sameAs (other : this) {returnother .content === this.content ;}}[Try]

This is different from writing `other: Box`

— if you have a derived class, its `sameAs`

method will now only accept other instances of that same derived class:

ts

classBox {content : string = "";sameAs (other : this) {returnother .content === this.content ;}}classDerivedBox extendsBox {otherContent : string = "?";}constbase = newBox ();constderived = newDerivedBox ();Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'. Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.2345Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'. Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.derived .sameAs (); base [Try]

`this`

-based type guards

You can use `this is Type`

in the return position for methods in classes and interfaces.
When mixed with a type narrowing (e.g. `if`

statements) the type of the target object would be narrowed to the specified `Type`

.

ts

classFileSystemObject {isFile (): this isFileRep {return this instanceofFileRep ;}isDirectory (): this isDirectory {return this instanceofDirectory ;}isNetworked (): this isNetworked & this {return this.networked ;}constructor(publicpath : string, privatenetworked : boolean) {}}classFileRep extendsFileSystemObject {constructor(path : string, publiccontent : string) {super(path , false);}}classDirectory extendsFileSystemObject {children :FileSystemObject [];}interfaceNetworked {host : string;}constfso :FileSystemObject = newFileRep ("foo/bar.txt", "foo");if (fso .isFile ()) {fso .content ;} else if (fso .isDirectory ()) {fso .children ;} else if (fso .isNetworked ()) {fso .host ;}[Try]

A common use-case for a this-based type guard is to allow for lazy validation of a particular field. For example, this case removes an `undefined`

from the value held inside box when `hasValue`

has been verified to be true:

ts

classBox <T > {value ?:T ;hasValue (): this is {value :T } {return this.value !==undefined ;}}constbox = newBox <string>();box .value = "Gameboy";box .value ;if (box .hasValue ()) {box .value ;}[Try]

Parameter Properties

TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value.
These are called *parameter properties* and are created by prefixing a constructor argument with one of the visibility modifiers `public`

, `private`

, `protected`

, or `readonly`

.
The resulting field gets those modifier(s):

ts

classParams {constructor(public readonlyx : number,protectedy : number,privatez : number) {// No body necessary}}consta = newParams (1, 2, 3);console .log (a .x );Property 'z' is private and only accessible within class 'Params'.2341Property 'z' is private and only accessible within class 'Params'.console .log (a .); z [Try]

Class Expressions

Background Reading:


[Class expressions (MDN)]


Class expressions are very similar to class declarations. The only real difference is that class expressions don’t need a name, though we can refer to them via whatever identifier they ended up bound to:

ts

constsomeClass = class<Type > {content :Type ;constructor(value :Type ) {this.content =value ;}};constm = newsomeClass ("Hello, world");[Try]

Constructor Signatures

JavaScript classes are instantiated with the `new`

operator. Given the type of a class itself, the [InstanceType](/docs/handbook/utility-types.html#instancetypetype) utility type models this operation.

ts

classPoint {createdAt : number;x : number;y : numberconstructor(x : number,y : number) {this.createdAt =Date .now ()this.x =x ;this.y =y ;}}typePointInstance =InstanceType <typeofPoint >functionmoveRight (point :PointInstance ) {point .x += 5;}constpoint = newPoint (3, 4);moveRight (point );point .x ; // => 8[Try]

`abstract`

Classes and Members

Classes, methods, and fields in TypeScript may be *abstract*.

An *abstract method* or *abstract field* is one that hasn’t had an implementation provided.
These members must exist inside an *abstract class*, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members.
When a class doesn’t have any abstract members, it is said to be *concrete*.

Let’s look at an example:

ts

abstract classBase {abstractgetName (): string;printName () {console .log ("Hello, " + this.getName ());}}constCannot create an instance of an abstract class.2511Cannot create an instance of an abstract class.b = newBase ();[Try]

We can’t instantiate `Base`

with `new`

because it’s abstract.
Instead, we need to make a derived class and implement the abstract members:

ts

classDerived extendsBase {getName () {return "world";}}constd = newDerived ();d .printName ();[Try]

Notice that if we forget to implement the base class’s abstract members, we’ll get an error:

ts

classNon-abstract class 'Derived' does not implement inherited abstract member getName from class 'Base'.2515Non-abstract class 'Derived' does not implement inherited abstract member getName from class 'Base'.extends Derived Base {// forgot to do anything}[Try]

Abstract Construct Signatures

Sometimes you want to accept some class constructor function that produces an instance of a class which derives from some abstract class.

For example, you might want to write this code:

ts

functiongreet (ctor : typeofBase ) {constCannot create an instance of an abstract class.2511Cannot create an instance of an abstract class.instance = newctor ();instance .printName ();}[Try]

TypeScript is correctly telling you that you’re trying to instantiate an abstract class.
After all, given the definition of `greet`

, it’s perfectly legal to write this code, which would end up constructing an abstract class:

ts

// Bad!greet (Base );[Try]

Instead, you want to write a function that accepts something with a construct signature:

ts

functiongreet (ctor : new () =>Base ) {constinstance = newctor ();instance .printName ();}greet (Derived );Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'. Cannot assign an abstract constructor type to a non-abstract constructor type.2345Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'. Cannot assign an abstract constructor type to a non-abstract constructor type.greet (); Base [Try]

Now TypeScript correctly tells you about which class constructor functions can be invoked - `Derived`

can because it’s concrete, but `Base`

cannot.

Relationships Between Classes

In most cases, classes in TypeScript are compared structurally, the same as other types.

For example, these two classes can be used in place of each other because they’re identical:

ts

classPoint1 {x = 0;y = 0;}classPoint2 {x = 0;y = 0;}// OKconstp :Point1 = newPoint2 ();[Try]

Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

ts

classPerson {name : string;age : number;}classEmployee {name : string;age : number;salary : number;}// OKconstp :Person = newEmployee ();[Try]

This sounds straightforward, but there are a few cases that seem stranger than others.

Empty classes have no members. In a structural type system, a type with no members is generally a supertype of anything else. So if you write an empty class (don’t!), anything can be used in place of it:

ts

classEmpty {}functionfn (x :Empty ) {// can't do anything with 'x', so I won't}// All OK!fn (window );fn ({});fn (fn );[Try]

---

## Source: https://www.typescriptlang.org/docs/handbook/2/modules.html

JavaScript has a long history of different ways to handle modularizing code.
Having been around since 2012, TypeScript has implemented support for a lot of these formats, but over time the community and the JavaScript specification has converged on a format called ES Modules (or ES6 modules). You might know it as the `import`

/`export`

syntax.

ES Modules was added to the JavaScript spec in 2015, and by 2020 had broad support in most web browsers and JavaScript runtimes.

For focus, the handbook will cover both ES Modules and its popular pre-cursor CommonJS `module.exports =`

syntax, and you can find information about the other module patterns in the reference section under [Modules](/docs/handbook/modules.html).

How JavaScript Modules are Defined

In TypeScript, just as in ECMAScript 2015, any file containing a top-level `import`

or `export`

is considered a module.

Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

Modules are executed within their own scope, not in the global scope. This means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

Non-modules

Before we start, it’s important to understand what TypeScript considers a module.
The JavaScript specification declares that any JavaScript files without an `import`

declaration, `export`

, or top-level `await`

should be considered a script and not a module.

Inside a script file variables and types are declared to be in the shared global scope, and it’s assumed that you’ll either use the [ outFile](/tsconfig#outFile) compiler option to join multiple input files into one output file, or use multiple

`<script>`

tags in your HTML to load these files (in the correct order!).If you have a file that doesn’t currently have any `import`

s or `export`

s, but you want to be treated as a module, add the line:

ts

export {};[Try]

which will change the file to be a module exporting nothing. This syntax works regardless of your module target.

Modules in TypeScript

Additional Reading:


[Impatient JS (Modules)]

[MDN: JavaScript Modules]


There are three main things to consider when writing module-based code in TypeScript:

**Syntax**: What syntax do I want to use to import and export things?**Module Resolution**: What is the relationship between module names (or paths) and files on disk?**Module Output Target**: What should my emitted JavaScript module look like?

ES Module Syntax

A file can declare a main export via `export default`

:

ts

// @filename: hello.tsexport default functionhelloWorld () {console .log ("Hello, world!");}[Try]

This is then imported via:

ts

importhelloWorld from "./hello.js";helloWorld ();[Try]

In addition to the default export, you can have more than one export of variables and functions via the `export`

by omitting `default`

:

ts

// @filename: maths.tsexport varpi = 3.14;export letsquareTwo = 1.41;export constphi = 1.61;export classRandomNumberGenerator {}export functionabsolute (num : number) {if (num < 0) returnnum * -1;returnnum ;}[Try]

These can be used in another file via the `import`

syntax:

ts

import {pi ,phi ,absolute } from "./maths.js";console .log (pi );constabsPhi =absolute (phi );[Try]

Additional Import Syntax

An import can be renamed using a format like `import {old as new}`

:

ts

import {pi asπ } from "./maths.js";console .log (π );[Try]

You can mix and match the above syntax into a single `import`

:

ts

// @filename: maths.tsexport constpi = 3.14;export default classRandomNumberGenerator {}// @filename: app.tsimportRandomNumberGenerator , {pi asπ } from "./maths.js";RandomNumberGenerator ;console .log (π );[Try]

You can take all of the exported objects and put them into a single namespace using `* as name`

:

ts

// @filename: app.tsimport * asmath from "./maths.js";console .log (math .pi );constpositivePhi =math .absolute (math .phi );[Try]

You can import a file and *not* include any variables into your current module via `import "./file"`

:

ts

// @filename: app.tsimport "./maths.js";console .log ("3.14");[Try]

In this case, the `import`

does nothing. However, all of the code in `maths.ts`

was evaluated, which could trigger side-effects which affect other objects.

TypeScript Specific ES Module Syntax

Types can be exported and imported using the same syntax as JavaScript values:

ts

// @filename: animal.tsexport typeCat = {breed : string;yearOfBirth : number };export interfaceDog {breeds : string[];yearOfBirth : number;}// @filename: app.tsimport {Cat ,Dog } from "./animal.js";typeAnimals =Cat |Dog ;[Try]

TypeScript has extended the `import`

syntax with two concepts for declaring an import of a type:

`import type`


Which is an import statement which can *only* import types:

ts

// @filename: animal.tsexport typeCat = {breed : string;yearOfBirth : number };export typeDog = {breeds : string[];yearOfBirth : number };export constcreateCatName = () => "fluffy";// @filename: valid.tsimport type {Cat ,Dog } from "./animal.js";export typeAnimals =Cat |Dog ;// @filename: app.tsimport type {createCatName } from "./animal.js";const'createCatName' cannot be used as a value because it was imported using 'import type'.1361'createCatName' cannot be used as a value because it was imported using 'import type'.name =(); createCatName [Try]

Inline `type`

imports

TypeScript 4.5 also allows for individual imports to be prefixed with `type`

to indicate that the imported reference is a type:

ts

// @filename: app.tsimport {createCatName , typeCat , typeDog } from "./animal.js";export typeAnimals =Cat |Dog ;constname =createCatName ();[Try]

Together these allow a non-TypeScript transpiler like Babel, swc or esbuild to know what imports can be safely removed.

ES Module Syntax with CommonJS Behavior

TypeScript has ES Module syntax which *directly* correlates to a CommonJS and AMD `require`

. Imports using ES Module are *for most cases* the same as the `require`

from those environments, but this syntax ensures you have a 1 to 1 match in your TypeScript file with the CommonJS output:

ts

importfs = require("fs");constcode =fs .readFileSync ("hello.ts", "utf8");[Try]

You can learn more about this syntax in the [modules reference page](/docs/handbook/modules.html#export--and-import--require).

CommonJS Syntax

CommonJS is the format which most modules on npm are delivered in. Even if you are writing using the ES Modules syntax above, having a brief understanding of how CommonJS syntax works will help you debug easier.

Exporting

Identifiers are exported via setting the `exports`

property on a global called `module`

.

ts

functionabsolute (num : number) {if (num < 0) returnnum * -1;returnnum ;}module .exports = {pi : 3.14,squareTwo : 1.41,phi : 1.61,absolute ,};[Try]

Then these files can be imported via a `require`

statement:

ts

constmaths =require ("./maths");maths .pi ;[Try]

Or you can simplify a bit using the destructuring feature in JavaScript:

ts

const {squareTwo } =require ("./maths");squareTwo ;[Try]

CommonJS and ES Modules interop

There is a mis-match in features between CommonJS and ES Modules regarding the distinction between a default import and a module namespace object import. TypeScript has a compiler flag to reduce the friction between the two different sets of constraints with [ esModuleInterop](/tsconfig#esModuleInterop).

TypeScript’s Module Resolution Options

Module resolution is the process of taking a string from the `import`

or `require`

statement, and determining what file that string refers to.

TypeScript includes two resolution strategies: Classic and Node. Classic, the default when the compiler option [ module](/tsconfig#module) is not

`commonjs`

, is included for backwards compatibility.
The Node strategy replicates how Node.js works in CommonJS mode, with additional checks for `.ts`

and `.d.ts`

.There are many TSConfig flags which influence the module strategy within TypeScript: [ moduleResolution](/tsconfig#moduleResolution),

[,](/tsconfig#baseUrl)

`baseUrl`

[,](/tsconfig#paths)

`paths`

[.](/tsconfig#rootDirs)

`rootDirs`

For the full details on how these strategies work, you can consult the [Module Resolution](/docs/handbook/modules/reference.html#the-moduleresolution-compiler-option) reference page.

TypeScript’s Module Output Options

There are two options which affect the emitted JavaScript output:

which determines which JS features are downleveled (converted to run in older JavaScript runtimes) and which are left intact`target`

which determines what code is used for modules to interact with each other`module`


Which [ target](/tsconfig#target) you use is determined by the features available in the JavaScript runtime you expect to run the TypeScript code in. That could be: the oldest web browser you support, the lowest version of Node.js you expect to run on or could come from unique constraints from your runtime - like Electron for example.

All communication between modules happens via a module loader, the compiler option [ module](/tsconfig#module) determines which one is used.
At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it.

For example, here is a TypeScript file using ES Modules syntax, showcasing a few different options for [ module](/tsconfig#module):

ts

import {valueOfPi } from "./constants.js";export consttwoPi =valueOfPi * 2;[Try]

`ES2020`


ts

import { valueOfPi } from "./constants.js";export const twoPi = valueOfPi * 2;[Try]

`CommonJS`


ts

"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.twoPi = void 0;const constants_js_1 = require("./constants.js");exports.twoPi = constants_js_1.valueOfPi * 2;[Try]

`UMD`


ts

(function (factory) {if (typeof module === "object" && typeof module.exports === "object") {var v = factory(require, exports);if (v !== undefined) module.exports = v;}else if (typeof define === "function" && define.amd) {define(["require", "exports", "./constants.js"], factory);}})(function (require, exports) {"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.twoPi = void 0;const constants_js_1 = require("./constants.js");exports.twoPi = constants_js_1.valueOfPi * 2;});[Try]

Note that ES2020 is effectively the same as the original

`index.ts`

.

You can see all of the available options and what their emitted JavaScript code looks like in the [TSConfig Reference for module](/tsconfig#module).

TypeScript namespaces

TypeScript has its own module format called `namespaces`

which pre-dates the ES Modules standard. This syntax has a lot of useful features for creating complex definition files, and still sees active use [in DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). While not deprecated, the majority of the features in namespaces exist in ES Modules and we recommend you use that to align with JavaScript’s direction. You can learn more about namespaces in [the namespaces reference page](/docs/handbook/namespaces.html).

---

## Source: https://www.typescriptlang.org/docs/handbook/utility-types.html

TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

`Awaited<Type>`


Released:

[4.5]

This type is meant to model operations like `await`

in `async`

functions, or the
`.then()`

method on `Promise`

s - specifically, the way that they recursively
unwrap `Promise`

s.

Example

ts

typeA =Awaited <Promise <string>>;typeB =Awaited <Promise <Promise <number>>>;typeC =Awaited <boolean |Promise <number>>;[Try]

`Partial<Type>`


Released:


[2.1]

Constructs a type with all properties of `Type`

set to optional. This utility will return a type that represents all subsets of a given type.

Example

ts

interfaceTodo {title : string;description : string;}functionupdateTodo (todo :Todo ,fieldsToUpdate :Partial <Todo >) {return { ...todo , ...fieldsToUpdate };}consttodo1 = {title : "organize desk",description : "clear clutter",};consttodo2 =updateTodo (todo1 , {description : "throw out trash",});[Try]

`Required<Type>`


Released:


[2.8]

Constructs a type consisting of all properties of `Type`

set to required. The opposite of [ Partial](#partialtype).

Example

ts

interfaceProps {a ?: number;b ?: string;}constobj :Props = {a : 5 };constProperty 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.2741Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.: obj2 Required <Props > = {a : 5 };[Try]

`Readonly<Type>`


Released:


[2.1]

Constructs a type with all properties of `Type`

set to `readonly`

, meaning the properties of the constructed type cannot be reassigned.

Example

ts

interfaceTodo {title : string;}consttodo :Readonly <Todo > = {title : "Delete inactive users",};Cannot assign to 'title' because it is a read-only property.2540Cannot assign to 'title' because it is a read-only property.todo .= "Hello"; title [Try]

This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a [frozen object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)).

`Object.freeze`


ts

function freeze<Type>(obj: Type): Readonly<Type>;

`Record<Keys, Type>`


Released:


[2.1]

Constructs an object type whose property keys are `Keys`

and whose property values are `Type`

. This utility can be used to map the properties of a type to another type.

Example

ts

typeCatName = "miffy" | "boris" | "mordred";interfaceCatInfo {age : number;breed : string;}constcats :Record <CatName ,CatInfo > = {miffy : {age : 10,breed : "Persian" },boris : {age : 5,breed : "Maine Coon" },mordred : {age : 16,breed : "British Shorthair" },};cats .boris ;[Try]

`Pick<Type, Keys>`


Released:


[2.1]

Constructs a type by picking the set of properties `Keys`

(string literal or union of string literals) from `Type`

.

Example

ts

interfaceTodo {title : string;description : string;completed : boolean;}typeTodoPreview =Pick <Todo , "title" | "completed">;consttodo :TodoPreview = {title : "Clean room",completed : false,};todo ;[Try]

`Omit<Type, Keys>`


Released:


[3.5]

Constructs a type by picking all properties from `Type`

and then removing `Keys`

(string literal or union of string literals). The opposite of [ Pick](#picktype-keys).

Example

ts

interfaceTodo {title : string;description : string;completed : boolean;createdAt : number;}typeTodoPreview =Omit <Todo , "description">;consttodo :TodoPreview = {title : "Clean room",completed : false,createdAt : 1615544252770,};todo ;typeTodoInfo =Omit <Todo , "completed" | "createdAt">;consttodoInfo :TodoInfo = {title : "Pick up kids",description : "Kindergarten closes at 5pm",};todoInfo ;[Try]

`Exclude<UnionType, ExcludedMembers>`


Released:


[2.8]

Constructs a type by excluding from `UnionType`

all union members that are assignable to `ExcludedMembers`

.

Example

ts

typeT0 =Exclude <"a" | "b" | "c", "a">;typeT1 =Exclude <"a" | "b" | "c", "a" | "b">;typeT2 =Exclude <string | number | (() => void),Function >;typeShape =| {kind : "circle";radius : number }| {kind : "square";x : number }| {kind : "triangle";x : number;y : number };typeT3 =Exclude <Shape , {kind : "circle" }>[Try]

`Extract<Type, Union>`


Released:


[2.8]

Constructs a type by extracting from `Type`

all union members that are assignable to `Union`

.

Example

ts

typeT0 =Extract <"a" | "b" | "c", "a" | "f">;typeT1 =Extract <string | number | (() => void),Function >;typeShape =| {kind : "circle";radius : number }| {kind : "square";x : number }| {kind : "triangle";x : number;y : number };typeT2 =Extract <Shape , {kind : "circle" }>[Try]

`NonNullable<Type>`


Released:


[2.8]

Constructs a type by excluding `null`

and `undefined`

from `Type`

.

Example

ts

typeT0 =NonNullable <string | number | undefined>;typeT1 =NonNullable <string[] | null | undefined>;[Try]

`Parameters<Type>`


Released:


[3.1]

Constructs a tuple type from the types used in the parameters of a function type `Type`

.

For overloaded functions, this will be the parameters of the *last* signature; see [Inferring Within Conditional Types](/docs/handbook/2/conditional-types.html#inferring-within-conditional-types).

Example

ts

declare functionf1 (arg : {a : number;b : string }): void;typeT0 =Parameters <() => string>;typeT1 =Parameters <(s : string) => void>;typeT2 =Parameters <<T >(arg :T ) =>T >;typeT3 =Parameters <typeoff1 >;typeT4 =Parameters <any>;typeT5 =Parameters <never>;typeType 'string' does not satisfy the constraint '(...args: any) => any'.2344Type 'string' does not satisfy the constraint '(...args: any) => any'.T6 =Parameters <string >;typeType 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.2344Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.T7 =Parameters <>; Function [Try]

`ConstructorParameters<Type>`


Released:


[3.1]

Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type `never`

if `Type`

is not a function).

Example

ts

typeT0 =ConstructorParameters <ErrorConstructor >;typeT1 =ConstructorParameters <FunctionConstructor >;typeT2 =ConstructorParameters <RegExpConstructor >;classC {constructor(a : number,b : string) {}}typeT3 =ConstructorParameters <typeofC >;typeT4 =ConstructorParameters <any>;typeType 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'.2344Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'.T5 =ConstructorParameters <>; Function [Try]

`ReturnType<Type>`


Released:


[2.8]

Constructs a type consisting of the return type of function `Type`

.

For overloaded functions, this will be the return type of the *last* signature; see [Inferring Within Conditional Types](/docs/handbook/2/conditional-types.html#inferring-within-conditional-types).

Example

ts

declare functionf1 (): {a : number;b : string };typeT0 =ReturnType <() => string>;typeT1 =ReturnType <(s : string) => void>;typeT2 =ReturnType <<T >() =>T >;typeT3 =ReturnType <<T extendsU ,U extends number[]>() =>T >;typeT4 =ReturnType <typeoff1 >;typeT5 =ReturnType <any>;typeT6 =ReturnType <never>;typeType 'string' does not satisfy the constraint '(...args: any) => any'.2344Type 'string' does not satisfy the constraint '(...args: any) => any'.T7 =ReturnType <string >;typeType 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.2344Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.T8 =ReturnType <>; Function [Try]

`InstanceType<Type>`


Released:


[2.8]

Constructs a type consisting of the instance type of a constructor function in `Type`

.

Example

ts

classC {x = 0;y = 0;}typeT0 =InstanceType <typeofC >;typeT1 =InstanceType <any>;typeT2 =InstanceType <never>;typeType 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.2344Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.T3 =InstanceType <string >;typeType 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'.2344Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'.T4 =InstanceType <>; Function [Try]

`NoInfer<Type>`


Released:


[5.4]

Blocks inferences to the contained type. Other than blocking inferences, `NoInfer<Type>`

is
identical to `Type`

.

Example

ts

function createStreetLight<C extends string>(colors: C[],defaultColor?: NoInfer<C>,) {// ...}createStreetLight(["red", "yellow", "green"], "red"); // OKcreateStreetLight(["red", "yellow", "green"], "blue"); // Error

`ThisParameterType<Type>`


Released:


[3.3]

Extracts the type of the [this](/docs/handbook/functions.html#this-parameters) parameter for a function type, or [unknown](/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type) if the function type has no `this`

parameter.

Example

ts

functiontoHex (this :Number ) {return this.toString (16);}functionnumberToString (n :ThisParameterType <typeoftoHex >) {returntoHex .apply (n );}[Try]

`OmitThisParameter<Type>`


Released:


[3.3]

Removes the [ this](/docs/handbook/functions.html#this-parameters) parameter from

`Type`

. If `Type`

has no explicitly declared `this`

parameter, the result is simply `Type`

. Otherwise, a new function type with no `this`

parameter is created from `Type`

. Generics are erased and only the last overload signature is propagated into the new function type.Example

ts

functiontoHex (this :Number ) {return this.toString (16);}constfiveToHex :OmitThisParameter <typeoftoHex > =toHex .bind (5);console .log (fiveToHex ());[Try]

`ThisType<Type>`


Released:


[2.3]

This utility does not return a transformed type. Instead, it serves as a marker for a contextual [ this](/docs/handbook/functions.html#this) type. Note that the

[flag must be enabled to use this utility.](/tsconfig#noImplicitThis)

`noImplicitThis`

Example

ts

typeObjectDescriptor <D ,M > = {data ?:D ;methods ?:M &ThisType <D &M >; // Type of 'this' in methods is D & M};functionmakeObject <D ,M >(desc :ObjectDescriptor <D ,M >):D &M {letdata : object =desc .data || {};letmethods : object =desc .methods || {};return { ...data , ...methods } asD &M ;}letobj =makeObject ({data : {x : 0,y : 0 },methods : {moveBy (dx : number,dy : number) {this.x +=dx ; // Strongly typed thisthis.y +=dy ; // Strongly typed this},},});obj .x = 10;obj .y = 20;obj .moveBy (5, 5);[Try]

In the example above, the `methods`

object in the argument to `makeObject`

has a contextual type that includes `ThisType<D & M>`

and therefore the type of [this](/docs/handbook/functions.html#this) in methods within the `methods`

object is `{ x: number, y: number } & { moveBy(dx: number, dy: number): void }`

. Notice how the type of the `methods`

property simultaneously is an inference target and a source for the `this`

type in methods.

The `ThisType<T>`

marker interface is simply an empty interface declared in `lib.d.ts`

. Beyond being recognized in the contextual type of an object literal, the interface acts like any empty interface.

Intrinsic String Manipulation Types

`Uppercase<StringType>`


`Lowercase<StringType>`


`Capitalize<StringType>`


`Uncapitalize<StringType>`


To help with string manipulation around template string literals, TypeScript includes a set of types which can be used in string manipulation within the type system. You can find those in the [Template Literal Types](/docs/handbook/2/template-literal-types.html#uppercasestringtype) documentation.

---

## Source: https://www.typescriptlang.org/cheatsheets/

Downloadable syntax reference pages for different parts of everyday TypeScript code

Learn more about Classes, Interfaces, Types and Control Flow Analysis

MSG

---

## Source: https://www.typescriptlang.org/docs/handbook/decorators.html

NOTE This document refers to an experimental stage 2 decorators implementation. Stage 3 decorator support is available since Typescript 5.0. See:

[Decorators in Typescript 5.0]

Introduction

With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

Further Reading (stage 2):

[A Complete Guide to TypeScript Decorators]

To enable experimental support for decorators, you must enable the [ experimentalDecorators](/tsconfig#experimentalDecorators) compiler option either on the command line or in your

`tsconfig.json`

:**Command Line**:

shell

tsc --target ES5 --experimentalDecorators

**tsconfig.json**:


{}}

Decorators

A *Decorator* is a special kind of declaration that can be attached to a [class declaration](#class-decorators), [method](#method-decorators), [accessor](#accessor-decorators), [property](#property-decorators), or [parameter](#parameter-decorators).
Decorators use the form `@expression`

, where `expression`

must evaluate to a function that will be called at runtime with information about the decorated declaration.

For example, given the decorator `@sealed`

we might write the `sealed`

function as follows:

ts

function sealed(target) {// do something with 'target' ...}

Decorator Factories

If we want to customize how a decorator is applied to a declaration, we can write a decorator factory.
A *Decorator Factory* is simply a function that returns the expression that will be called by the decorator at runtime.

We can write a decorator factory in the following fashion:

ts

function color(value: string) {// this is the decorator factory, it sets up// the returned decorator functionreturn function (target) {// this is the decorator// do something with 'target' and 'value'...};}

Decorator Composition

Multiple decorators can be applied to a declaration, for example on a single line:

ts

@f @g x [Try]

On multiple lines:

ts

@f @g x [Try]

When multiple decorators apply to a single declaration, their evaluation is similar to [function composition in mathematics](https://wikipedia.org/wiki/Function_composition). In this model, when composing functions *f* and *g*, the resulting composite (*f* ∘ *g*)(*x*) is equivalent to *f*(*g*(*x*)).

As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

- The expressions for each decorator are evaluated top-to-bottom.
- The results are then called as functions from bottom-to-top.

If we were to use [decorator factories](#decorator-factories), we can observe this evaluation order with the following example:

ts

functionfirst () {console .log ("first(): factory evaluated");return function (target : any,propertyKey : string,descriptor :PropertyDescriptor ) {console .log ("first(): called");};}functionsecond () {console .log ("second(): factory evaluated");return function (target : any,propertyKey : string,descriptor :PropertyDescriptor ) {console .log ("second(): called");};}classExampleClass {@first ()@second ()method () {}}[Try]

Which would print this output to the console:

shell

first(): factory evaluatedsecond(): factory evaluatedsecond(): calledfirst(): called

Decorator Evaluation

There is a well defined order to how decorators applied to various declarations inside of a class are applied:

*Parameter Decorators*, followed by*Method*,*Accessor*, or*Property Decorators*are applied for each instance member.*Parameter Decorators*, followed by*Method*,*Accessor*, or*Property Decorators*are applied for each static member.*Parameter Decorators*are applied for the constructor.*Class Decorators*are applied for the class.

Class Decorators

A *Class Decorator* is declared just before a class declaration.
The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.
A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a `declare`

class).

The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument.

If the class decorator returns a value, it will replace the class declaration with the provided constructor function.

NOTE Should you choose to return a new constructor function, you must take care to maintain the original prototype. The logic that applies decorators at runtime will

notdo this for you.

The following is an example of a class decorator (`@sealed`

) applied to a `BugReport`

class:

ts

@sealed classBugReport {type = "report";title : string;constructor(t : string) {this.title =t ;}}[Try]

We can define the `@sealed`

decorator using the following function declaration:

ts

function sealed(constructor: Function) {Object.seal(constructor);Object.seal(constructor.prototype);}

When `@sealed`

is executed, it will seal both the constructor and its prototype, and will therefore prevent any further functionality from being added to or removed from this class during runtime by accessing `BugReport.prototype`

or by defining properties on `BugReport`

itself (note that ES2015 classes are really just syntactic sugar to prototype-based constructor functions). This decorator does **not** prevent classes from sub-classing `BugReport`

.

Next we have an example of how to override the constructor to set new defaults.

ts

functionreportableClassDecorator <T extends { new (...args : any[]): {} }>(constructor :T ) {return class extendsconstructor {reportingURL = "http://www...";};}@reportableClassDecorator classBugReport {type = "report";title : string;constructor(t : string) {this.title =t ;}}constbug = newBugReport ("Needs dark mode");console .log (bug .title ); // Prints "Needs dark mode"console .log (bug .type ); // Prints "report"// Note that the decorator _does not_ change the TypeScript type// and so the new property `reportingURL` is not known// to the type system:Property 'reportingURL' does not exist on type 'BugReport'.2339Property 'reportingURL' does not exist on type 'BugReport'.bug .; reportingURL [Try]

Method Decorators

A *Method Decorator* is declared just before a method declaration.
The decorator is applied to the *Property Descriptor* for the method, and can be used to observe, modify, or replace a method definition.
A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a `declare`

class).

The expression for the method decorator will be called as a function at runtime, with the following three arguments:

- Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
- The name of the member.
- The
*Property Descriptor*for the member.

NOTE The

Property Descriptorwill be`undefined`

if your script target is less than`ES5`

.

If the method decorator returns a value, it will be used as the *Property Descriptor* for the method.

NOTE The return value is ignored if your script target is less than

`ES5`

.

The following is an example of a method decorator (`@enumerable`

) applied to a method on the `Greeter`

class:

ts

classGreeter {greeting : string;constructor(message : string) {this.greeting =message ;}@enumerable (false)greet () {return "Hello, " + this.greeting ;}}[Try]

We can define the `@enumerable`

decorator using the following function declaration:

ts

functionenumerable (value : boolean) {return function (target : any,propertyKey : string,descriptor :PropertyDescriptor ) {descriptor .enumerable =value ;};}[Try]

The `@enumerable(false)`

decorator here is a [decorator factory](#decorator-factories).
When the `@enumerable(false)`

decorator is called, it modifies the `enumerable`

property of the property descriptor.

Accessor Decorators

An *Accessor Decorator* is declared just before an accessor declaration.
The accessor decorator is applied to the *Property Descriptor* for the accessor and can be used to observe, modify, or replace an accessor’s definitions.
An accessor decorator cannot be used in a declaration file, or in any other ambient context (such as in a `declare`

class).

NOTE TypeScript disallows decorating both the

`get`

and`set`

accessor for a single member. Instead, all decorators for the member must be applied to the first accessor specified in document order. This is because decorators apply to aProperty Descriptor, which combines both the`get`

and`set`

accessor, not each declaration separately.

The expression for the accessor decorator will be called as a function at runtime, with the following three arguments:

- Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
- The name of the member.
- The
*Property Descriptor*for the member.

NOTE The

Property Descriptorwill be`undefined`

if your script target is less than`ES5`

.

If the accessor decorator returns a value, it will be used as the *Property Descriptor* for the member.

NOTE The return value is ignored if your script target is less than

`ES5`

.

The following is an example of an accessor decorator (`@configurable`

) applied to a member of the `Point`

class:

ts

classPoint {private_x : number;private_y : number;constructor(x : number,y : number) {this._x =x ;this._y =y ;}@configurable (false)getx () {return this._x ;}@configurable (false)gety () {return this._y ;}}[Try]

We can define the `@configurable`

decorator using the following function declaration:

ts

function configurable(value: boolean) {return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {descriptor.configurable = value;};}

Property Decorators

A *Property Decorator* is declared just before a property declaration.
A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a `declare`

class).

The expression for the property decorator will be called as a function at runtime, with the following two arguments:

- Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
- The name of the member.

NOTE A

Property Descriptoris not provided as an argument to a property decorator due to how property decorators are initialized in TypeScript. This is because there is currently no mechanism to describe an instance property when defining members of a prototype, and no way to observe or modify the initializer for a property. The return value is ignored too. As such, a property decorator can only be used to observe that a property of a specific name has been declared for a class.

We can use this information to record metadata about the property, as in the following example:

ts

class Greeter {@format("Hello, %s")greeting: string;constructor(message: string) {this.greeting = message;}greet() {let formatString = getFormat(this, "greeting");return formatString.replace("%s", this.greeting);}}

We can then define the `@format`

decorator and `getFormat`

functions using the following function declarations:

ts

import "reflect-metadata";const formatMetadataKey = Symbol("format");function format(formatString: string) {return Reflect.metadata(formatMetadataKey, formatString);}function getFormat(target: any, propertyKey: string) {return Reflect.getMetadata(formatMetadataKey, target, propertyKey);}

The `@format("Hello, %s")`

decorator here is a [decorator factory](#decorator-factories).
When `@format("Hello, %s")`

is called, it adds a metadata entry for the property using the `Reflect.metadata`

function from the `reflect-metadata`

library.
When `getFormat`

is called, it reads the metadata value for the format.

NOTE This example requires the

`reflect-metadata`

library. See[Metadata]for more information about the`reflect-metadata`

library.

Parameter Decorators

A *Parameter Decorator* is declared just before a parameter declaration.
The parameter decorator is applied to the function for a class constructor or method declaration.
A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a `declare`

class).

The expression for the parameter decorator will be called as a function at runtime, with the following three arguments:

- Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
- The name of the member.
- The ordinal index of the parameter in the function’s parameter list.

NOTE A parameter decorator can only be used to observe that a parameter has been declared on a method.


The return value of the parameter decorator is ignored.

The following is an example of a parameter decorator (`@required`

) applied to parameter of a member of the `BugReport`

class:

ts

classBugReport {type = "report";title : string;constructor(t : string) {this.title =t ;}@validate required verbose : boolean) {if (verbose ) {return `type: ${this.type }\ntitle: ${this.title }`;} else {return this.title ;}}}[Try]

We can then define the `@required`

and `@validate`

decorators using the following function declarations:

ts

import "reflect-metadata";constrequiredMetadataKey =Symbol ("required");functionrequired (target :Object ,propertyKey : string | symbol,parameterIndex : number) {letexistingRequiredParameters : number[] =Reflect .getOwnMetadata (requiredMetadataKey ,target ,propertyKey ) || [];existingRequiredParameters .push (parameterIndex );Reflect .defineMetadata (requiredMetadataKey ,existingRequiredParameters ,target ,propertyKey );}functionvalidate (target : any,propertyName : string,descriptor :TypedPropertyDescriptor <Function >) {letmethod =descriptor .value !;descriptor .value = function () {letrequiredParameters : number[] =Reflect .getOwnMetadata (requiredMetadataKey ,target ,propertyName );if (requiredParameters ) {for (letparameterIndex ofrequiredParameters ) {if (parameterIndex >=arguments .length ||arguments [parameterIndex ] ===undefined ) {throw newError ("Missing required argument.");}}}returnmethod .apply (this,arguments );};}[Try]

The `@required`

decorator adds a metadata entry that marks the parameter as required.
The `@validate`

decorator then wraps the existing `print`

method in a function that validates the arguments before invoking the original method.

NOTE This example requires the

`reflect-metadata`

library. See[Metadata]for more information about the`reflect-metadata`

library.

Metadata

Some examples use the `reflect-metadata`

library which adds a polyfill for an [experimental metadata API](https://github.com/rbuckton/ReflectDecorators).
This library is not yet part of the ECMAScript (JavaScript) standard.
However, once decorators are officially adopted as part of the ECMAScript standard these extensions will be proposed for adoption.

You can install this library via npm:

shell

npm i reflect-metadata --save

TypeScript includes experimental support for emitting certain types of metadata for declarations that have decorators.
To enable this experimental support, you must set the [ emitDecoratorMetadata](/tsconfig#emitDecoratorMetadata) compiler option either on the command line or in your

`tsconfig.json`

:**Command Line**:

shell

tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata

**tsconfig.json**:


{}}

When enabled, as long as the `reflect-metadata`

library has been imported, additional design-time type information will be exposed at runtime.

We can see this in action in the following example:

ts

import "reflect-metadata";classPoint {constructor(publicx : number, publicy : number) {}}classLine {private_start :Point ;private_end :Point ;@validate setstart (value :Point ) {this._start =value ;}getstart () {return this._start ;}@validate setend (value :Point ) {this._end =value ;}getend () {return this._end ;}}functionvalidate <T >(target : any,propertyKey : string,descriptor :TypedPropertyDescriptor <T >) {letset =descriptor .set !;descriptor .set = function (value :T ) {lettype =Reflect .getMetadata ("design:type",target ,propertyKey );if (!(value instanceoftype )) {throw newTypeError (`Invalid type, got ${typeofvalue } not ${type .name }.`);}set .call (this,value );};}constline = newLine ()line .start = newPoint (0, 0)// @ts-ignore// line.end = {}// Fails at runtime with:// > Invalid type, got object not Point[Try]

The TypeScript compiler will inject design-time type information using the `@Reflect.metadata`

decorator.
You could consider it the equivalent of the following TypeScript:

ts

class Line {private _start: Point;private _end: Point;@validate@Reflect.metadata("design:type", Point)set start(value: Point) {this._start = value;}get start() {return this._start;}@validate@Reflect.metadata("design:type", Point)set end(value: Point) {this._end = value;}get end() {return this._end;}}

NOTE Decorator metadata is an experimental feature and may introduce breaking changes in future releases.