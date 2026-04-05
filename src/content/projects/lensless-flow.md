<!-- ---
title: "Physics-Guided Conditional Flow Matching for Lensless Imaging"
year: 2026
summary: "A conditional generative approach to diffuser-based lensless reconstruction that improves over ADMM and supervised U-Net baselines, with x-prediction performing best in our study."
role: "Final Project, EECS298"
organization: "UC Irvine"
tags: ["Lensless Imaging", "Flow Matching", "Computational Optics", "PyTorch", "Best Technical Project Award", "Project Lead"]
featured: true
teaser: "/images/projects/lensless-flow-teaser.png"
reportUrl: "/reports/lensless-flow-report.pdf"
repoUrl: "https://github.com/Charley-xiao/lensless-flow"
paperUrl: "#"
demoUrl: "#"
posterUrl: "/slides/lensless-flow-presentation.pdf"
order: 100
---

This project studies **conditional flow matching (CFM)** for diffuser-based lensless image reconstruction. Instead of treating reconstruction as a purely optimization-based inverse problem or a deterministic regression task, the project formulates it as **conditional generation**: given a lensless measurement \(y\), learn a model of plausible images \(x\) conditioned on that measurement.

The goal is to reconstruct high-fidelity images from highly multiplexed diffuser measurements while reducing the structured artifacts often seen in classical iterative methods.

## What I did

- Formulated lensless reconstruction as a conditional generative modeling problem.
- Implemented a physics-guided CFM pipeline in PyTorch.
- Compared two parameterizations: **v-prediction** and **x-prediction with induced velocity**.
- Evaluated against **ADMM** and a **supervised U-Net** baseline.
- Studied the effect of **ODE step budget** and **optional physics guidance** at inference time.

## Key idea

The model learns a continuous-time conditional transport from noise to image, conditioned on the lensless measurement. At inference time, reconstruction is produced by solving an ODE with a Heun solver. A lightweight data-consistency refinement step can optionally be inserted after each solver step using the calibrated forward model.

In practice, this gives a useful middle ground: the method is more expressive than optimization with hand-crafted priors, but still retains a controllable physical refinement mechanism at test time.

## Main findings

On the DiffuserCam MirFlickr benchmark, CFM clearly outperformed both ADMM and the supervised U-Net baseline. The strongest variant was **x-prediction with guidance**, which achieved:

- **SSIM:** 0.81
- **PSNR:** 23.01 dB
- **MSE:** 0.0051

By comparison:

- **ADMM:** SSIM 0.15, PSNR 7.26, MSE 0.1879
- **U-Net:** SSIM 0.76, PSNR 20.67, MSE 0.0086

Overall, CFM produced sharper edges, better textures, and fewer structured artifacts, while physics guidance provided modest but consistent gains under conservative settings.

## Qualitative comparison

The figure below compares the lensless measurement, ground truth, ADMM, U-Net, and the four CFM variants. The main visual pattern is that ADMM suffers from strong structured artifacts, U-Net tends to oversmooth, and CFM produces cleaner reconstructions with better texture preservation.

![Qualitative comparison for lensless reconstruction](/images/projects/lensless-flow-teaser.png)

## Sampling trajectory

The next figure shows how a v-prediction CFM reconstruction evolves as the ODE step budget increases. Most of the global structure appears very early, while later steps mainly refine contrast and texture. This suggests that the method reaches most of its quality within a moderate number of solver steps.

![Evolution of reconstruction across ODE steps](/images/projects/lensless-flow-steps.png)

## Course context

This project was completed as the final project for **EECS298: Computational Optics** at UC Irvine, where it received the **Best Technical Project Award**. -->


This content is temporarily unavailable.