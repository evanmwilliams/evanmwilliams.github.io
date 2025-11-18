---
layout: page
title: compiling pytorch models to calyx 
description: an end-to-end compilation pipeline from pytorch to synthesizable hardware
img: assets/img/calyx.svg
importance: 1
category: academic 
---

## Overview

I worked with a collaborator to build a complete pipeline that compiles a simple feed-forward neural network written in PyTorch into Calyx, then emits Verilog for execution on FPGA hardware. Our network consisted of one hidden layer and a ReLU activation. We used Allo to lower PyTorch → MLIR, CIRCT to lower MLIR → Calyx, and then used Vivado on FPGA to run the result.

## Key Challenges & Solutions

Neither Calyx nor CIRCT originally supported floating-point arithmetic or global memories. We integrated the HardFloat library (via Chisel) and developed JSON support in CIRCT so that data for external memories could be expressed and consumed properly.

We used Morty (a Rust tool) to stitch together Verilog dependencies and integrate external modules with the Calyx backend.

We needed to flatten multi-dimensional memory accesses and nested loops in MLIR so that downstream translations could work (even though Calyx itself actually supports nested arrays).

Running the FPGA flow (Vivado + Fud) revealed tooling pain points—poor documentation, confusing error messages—so integration required custom patches and tweaks to the generated Calyx.

## Outcomes & Next Steps

We successfully demonstrated proof-of-concept: compiling a PyTorch model down through the stack into Calyx and hardware. The next steps include: merging Morty integration and floating-point support upstream into Calyx; packaging the pipeline into a smoother end-to-end flow; supporting larger ML models (CNNs, RNNs, transformers) and conducting detailed benchmarking against software baselines

## More Information
Check out more discussions [here](https://github.com/orgs/calyxir/discussions/2056)! We are currently submitting some of this to a workshop as well - stay tuned! 