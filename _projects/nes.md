---
layout: page
title: nes emulator 
description: an nes emulator to help me learn rust
img: assets/img/nes.png
importance: 3
category: personal 
---

I built a NES emulator in modern C++, implementing the full 6502 CPU, PPU, and APU subsystems from scratch. The emulator models cycle-accurate CPU execution, scanline-based rendering, sprite/background composition, palette logic, and common cartridge mappers (e.g., MMC1, UxROM). It also includes audio channel emulation to reproduce the original NES sound pipeline. The project is still evolving, but it already runs a variety of commercial ROMs and serves as a fun deep dive into retro console architecture.

Code: https://github.com/evanmwilliams/nes-emulator
