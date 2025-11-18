---
layout: page
title: computational complexity of matrix multiplication 
description: a survey of complexity theory for matrix multiplication 
img: assets/img/complexity.jpg
importance: 5
category: academic
---

### Survey: Computational Complexity of Matrix Multiplication

This project is a survey of the major ideas behind reducing the computational complexity of matrix multiplication—specifically, the search for the smallest exponent \( \omega \) such that two \( n \times n \) matrices can be multiplied in \( O(n^\omega) \) time. Starting from the classical cubic algorithm, the survey walks through more than fifty years of progress in algebraic complexity theory and tensor-based algorithm design.

We begin with the foundations of **algebraic circuits**, bilinear maps, and tensor rank, which give a unifying way to express and analyze matrix-multiplication algorithms. The survey then covers the landmark advances:

- **Strassen’s Algorithm** – the first breakthrough, reducing \( \omega \) below 3 by expressing \( 2 \times 2 \) multiplication as a rank-7 bilinear algorithm.
- **Bilinear and Tensor Methods** – framing matrix multiplication as a tensor decomposition problem and using rank/border rank to measure complexity.
- **Pan, Bini, and Schönhage** – techniques such as trilinear aggregation, border-rank approximations, and the asymptotic sum inequality push \( \omega \) toward 2.5.
- **Coppersmith–Winograd and the Laser Method** – a transformative approach using structured tensors and degeneration arguments, yielding bounds near \( \omega \approx 2.38 \).

The survey concludes with modern results, including limitations of the laser method, group-theoretic constructions (Cohn–Umans framework), and recent automated discoveries like **AlphaTensor**, which uses reinforcement learning to uncover new algorithms.

Overall, the write-up provides a concise technical overview of how algebraic insights, tensor decompositions, and asymptotic analysis have driven the best known bounds for matrix multiplication for decades.

*You can read the full write-up [here](https://courses.cs.cornell.edu/cs6810/2023fa/Matrix.pdf).*
