---
layout: page
title: risc-v simulator (work in progress!) 
description: a step towards a risc-v simulator written in modern cpp 
img: assets/img/rv.avif
importance: 2
category: personal
---

RV64Sim is an open-source, modern C++ simulator for the 64-bit RISC‑V architecture. The project is designed to provide a clean, extensible, and high-performance platform for education, architecture exploration, and hardware-software co-design.

Key features under development include:
- A modular semantic model for RV64 base instructions and standard extensions (such as “M”, “A”, “F”, “D”).
- Cycle-accurate or performance-mode simulation of the pipeline, caches, and memory hierarchy.
- Support for ELF-formatted binaries, efficient tracing/debugging infrastructure, and interactive execution modes.
- Integration hooks for architectural experiments (e.g., custom accelerators, memory models) and instrumentation for research.

Source code is available at: https://github.com/evanmwilliams/rv64sim