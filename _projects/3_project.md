---
layout: page
title: eta compiler 
description: a fully-functional optimizing compiler targeting x86-64
img: assets/img/compiler.jpg
importance: 1
category: academic 
---

As part of a course project, I worked with a team of four to build a compiler for a language called [Eta](https://courses.cs.cornell.edu/cs4120/2023sp/project/language.pdf?1681909895), an imperative, procedural language similar to C. The compiler targets x86-64 and supports the System V calling convention. 

The compiler was implemented in Rust using the [pest](https://pest.rs/) parser. Pest takes as input a parsing expression grammar (PEG) over a more typical BNF grammar. Some of the syntax of Eta is described in this snippet of the grammar:
```
uses = { use_expr* }
definitions = { definition+ }
program = { SOI ~ uses ~ definitions ~ EOI }

interface_definitions = { interface_function+ }
interface = { SOI ~ interface_definitions ~ EOI}
``` 

The compiler used a custom IR based on the specification in Appel's [Modern Compiler Implementation in Java](https://www.cs.cornell.edu/courses/cs4120/2023sp/project/language.pdf?1681909895) text. We implemented optimizations and extensions on the compiler as well, including:
- Linear Scan Register Allocation
- SSA conversion 
- Function inlining 
- Dead Code Elimination
- Support for object-oriented features including record types

Building a compiler is no small task, but this course got me into programming languages and compilers as a discipline. If your university has a compilers course, you should take it! 