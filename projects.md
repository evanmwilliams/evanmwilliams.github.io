---
layout: post
title: Projects and Experiences
subtitle: Check out some of my favorite projects and experiences! 
---

<!-- ### Senior Year
* Currently creating a new student taught class centered around many things production for ML Systems. This includes deployment, data drifts, online & active learning, continual training, MLOps tooling and frameworks, etc.
    This is advised/sponsored by Professor Christopher De Sa and Munich RE. -->

### Distributed Game Server
I've spent this year working on a [distributed game server](https://github.com/CornellDataScience/Distributed-Game-Server) built in Rust! 
* This project taught me many valuable skills, such as Rust programming, asynchronous programming with futures, distributed consensus algorithms such as Raft, and CI/CD with GitHub Actions
* On this project, I implemented many of the core components of the Raft consensus algorithm and I also taught my teammates how to use [Rust](https://doc.rust-lang.org/book/), a safe-systems programming language with an emphasis on fearless concurrency 
* We implemented the Snake game to test our distributed consensus algorithm. We chose this because it was simple enough to allow us to focus on distributed systems but also complex enough to stress-test our algorithms 
![snake](/assets/img/snake.png)

### Compiler
Another big project I've been working on is my compiler for [CS 4120: Introduction to Compilers](https://www.cs.cornell.edu/courses/cs4120/2023sp/).
* We're implementing an end-to-end compiler for an imperative programming language called Eta (modeled off of C and Java)
* We have a full lexer, parser, typechecker, intermediate representation, and x86 assembly generator
* We also implemented important optimizations such as register allocation, dead code elimination, copy propagation, and function inlining 
* Our team is implementing the compiler in Rust, notably because it ensures strong performance and works well for compiler development 

<iframe width="560" height="315" src="https://www.youtube.com/embed/BCTxvB-6fAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Multicore System
My final project for ECE 4750 was to build a Quad-core processor with private L1 instruction caches and a shared, banked L1 data cache interconnected through various ring networks implemented at the register-transfer-level and capable running real parallel programs. 
* The lab assignments used an agile hardware development methodology based on the Verilog hardware description language, a Python testing framework, the GitHub repository hosting site, and the GitHub Actions continuous integration service
![multicore](assets/img/multicore.png)