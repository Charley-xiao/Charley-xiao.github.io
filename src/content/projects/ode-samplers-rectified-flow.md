---
title: "ODE Samplers for Rectified Flow Generative Models"
year: 2025
summary: "A systematic comparison of six ODE samplers for rectified flow on EuroSAT, showing that Euler is suboptimal and that multi-step or adaptive solvers provide a better quality–efficiency trade-off."
role: "Final Project, CS274E"
organization: "UC Irvine"
tags: ["Rectified Flow", "ODE Solvers", "Generative Models", "Theory + Experiments", "Full Marks", "Project Lead"]
featured: true
teaser: "/images/projects/ode-samplers-rectified-flow-teaser.png"
reportUrl: "/reports/ode-samplers-rectified-flow-report.pdf"
repoUrl: "https://github.com/Charley-xiao/cs274e-project"
paperUrl: "#"
demoUrl: "#"
posterUrl: "#"
order: 90
---

This project studies a simple but important question in flow-based generative modeling: **once a rectified flow model is trained, which ODE solver should we actually use at inference time?**

Rather than changing the model itself, we fix a conditional rectified flow trained on the EuroSAT remote-sensing dataset and isolate the effect of the numerical sampler. The project compares six explicit ODE solvers under a shared evaluation setting and measures not only sample quality and runtime, but also the geometry of the generated trajectories.

## What I did

- Formulated the project around the sampling problem rather than model redesign.
- Compared **Euler, Heun, Midpoint, RK4, Adams–Bashforth 2, and adaptive RK23** under a common budget.
- Evaluated each method using **FID**, **effective number of function evaluations (NFE)**, and **wall-clock time**.
- Added trajectory-level diagnostics based on **path length** and **integrated curvature** to study how solver behavior relates to sample quality.
- Analyzed the practical trade-off between numerical cost and generation quality for rectified flow.

## Core question

Rectified flow is motivated by the idea that trajectories are relatively straight, which makes low-step sampling plausible. But that does **not** mean all solvers behave equally well. Once a vector field is fixed, the numerical integrator becomes part of the generative pipeline, and solver choice directly affects both sample quality and inference cost.

This project asks whether the standard Euler choice is actually justified, or whether higher-order, multi-step, or adaptive solvers offer a better trade-off.

## Main findings

At a base discretization of 64 steps and no classifier-free guidance, **Euler was the cheapest but also the worst-performing method** with **FID 85.76**. **AB2** achieved a better FID of **84.68** at nearly the same cost, while **Midpoint** improved further to **83.34** at roughly double the effective NFE. **RK4** was the most expensive fixed-step solver but did not deliver the best FID. The strongest result came from **adaptive RK23**, which achieved the best overall FID of **82.75** at an intermediate evaluation budget.

These results suggest a clear practical lesson: for rectified flows, plain Euler sampling leaves quality on the table. Even modestly more sophisticated solvers can produce better samples at similar or only moderately higher cost.

## Geometry perspective

Beyond image quality, the project also examined the geometry of the generated trajectories. In general, better-performing samplers tended to trace **longer** paths than Euler, suggesting they followed the learned flow more faithfully rather than cutting too aggressively across it. The relationship with curvature was weaker: extremely low curvature alone did not guarantee the best FID. In other words, straighter is not the whole story; a useful sampler needs the right balance between path fidelity and numerical efficiency.

## Teaser figure

The teaser figure below visualizes class-conditioned trajectory structure in a 2D PCA space. Samples from several land-cover classes begin near a tight shared cluster and then separate into distinct regions along largely straight paths. This gives an intuitive geometric picture for why rectified flow can work with relatively few steps, while still leaving room for solver-dependent differences in how well those paths are tracked.

![Trajectory structure in PCA space](/images/projects/ode-samplers-rectified-flow-teaser.png)

## Course context

This project was completed as the final project for **CS274E: Deep Generative Models** at UC Irvine and received full marks.
