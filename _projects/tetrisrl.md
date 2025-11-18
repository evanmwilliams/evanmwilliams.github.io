---
layout: page
title: tetris rl 
description: an implementation of an RL agent for tetris 
img: assets/img/tetris.png
importance: 1
category: personal
---

### Tetris Reinforcement Learning Agent

We developed an open-source reinforcement-learning agent for the classic game **Tetris**, implemented in Python and available on GitHub [here](https://github.com/dhan0779/TetrisRL)

The project implements a RL framework that learns to play Tetris by interacting with a custom game environment and optimizing a policy that maximizes long-term score. Key features include:

- A game environment that simulates Tetris gameplay, piece drops, line clears, and scoring.  
- A reinforcement-learning loop (e.g., Deep Q-Learning or policy gradients) where the agent receives observations (board state + next piece) and selects actions (rotate/move/hard-drop) to optimize future reward (cleared lines, survival time).  
- Training dashboards and evaluation scripts that demonstrate the agent’s learning curve over time, metrics such as lines cleared, survival time, and average drop height.  
- Modular code structure to facilitate reinforcement-learning experimentation: different network architectures, reward shaping schemes, state‐representation options (e.g., board heights, aggregate bumpiness, holes), and training hyper-parameters.