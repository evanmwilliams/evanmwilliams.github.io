---
layout: page
title: visualizing the mandelbrot set 
description: experiments with high performance computing and visualizations of the mandelbrot set 
img: assets/img/mandelbrot.jpg
importance: 6
category: academic
---

### Parallel Mandelbrot Set Generation

For this project, we built a high-performance Mandelbrot set generator and visualization pipeline using **Serial C++**, **OpenMP**, and **UPC++**, and evaluated our implementations on **Perlmutter**, a DOE supercomputer. The goal was to explore how different shared-memory and PGAS programming models handle an “embarrassingly parallel” computation—pixel-wise iteration of the Mandelbrot recurrence—and a more coordination-heavy stage: **histogram coloring**.

![wack-mandelbrot](../assets/img/mandelbrot-colored.jpg)

Our pipeline consists of two major components:

- **Escape-time computation:** For every pixel in the output image, we compute how many iterations of \( z \leftarrow z^2 + c \) are required before the magnitude exceeds 2. This stage parallelizes perfectly, since each pixel is fully independent.
- **Histogram coloring:** A multi-pass algorithm that builds a global histogram of iteration counts, prefixes it, and maps each pixel’s iteration depth to a normalized hue. Unlike escape-time computation, histogram coloring requires aggregation across the full image, making parallelization significantly less trivial.

We implemented and compared three variants:

- **Serial C++:** A baseline implementation of the escape-time algorithm and histogram coloring.
- **OpenMP:** Multithreaded parallelization of both the escape-time loop and the histogram passes. The embarrassingly-parallel first phase scales extremely well, while global reductions in histogram coloring introduce some synchronization cost.
- **UPC++:** A distributed PGAS version that partitions work across ranks and uses futures, reductions, and RPCs to aggregate histogram data. Despite communication overhead, UPC++ achieves the **fastest runtimes overall**, though it does not scale strongly with additional nodes due to global synchronization requirements.

Across all image sizes, OpenMP beats the serial version by up to **5×**, while UPC++ delivers the strongest absolute performance. The project highlights the trade-offs between shared-memory vs. PGAS programming models, especially when global reductions limit scalability.

**Source Code:**: https://github.com/evanmwilliams/mandelbrot