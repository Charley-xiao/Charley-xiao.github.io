---
title: "Boston in 3D: A Citywide Object Archive Using Nerfstudio"
year: 2025
summary: "Led a team to build a full pipeline for capturing objects across Boston, reconstructing them with Nerfstudio, and presenting them through an interactive map-based web interface."
role: "Final Project, MIT Blended Learning"
organization: "MIT"
tags: ["3D Vision", "NeRF", "Nerfstudio", "Three.js", "React", "Leaflet", "Interactive Systems", "Project Lead"]
featured: false
teaser: "/images/projects/boston-in-3d-teaser.png"
reportUrl: "#"
repoUrl: "https://github.com/Charley-xiao/NVIDIA_MIT"
paperUrl: "#"
demoUrl: "https://nvidia-mit.vercel.app"
posterUrl: "/slides/boston-in-3d-presentation.pdf"
order: 80
---

This project explores how to turn scattered real-world objects into a **city-scale interactive 3D archive**. Our goal was to capture objects across Boston, reconstruct them into viewable 3D assets, and organize them inside a browser-based map so that users could explore the city through spatially grounded digital objects.

Rather than treating reconstruction as an isolated vision problem, we designed the project as an end-to-end system: **mobile capture, neural reconstruction, web visualization, and geographic interaction**.

## What I did

- Led the project direction and system integration.
- Helped build the pipeline from **PolyCam capture** to **Nerfstudio reconstruction**.
- Developed the interactive website for browsing reconstructed objects across Boston.
- Integrated **3D model viewing** with a **map-based interface**.
- Added routing support so users could navigate between locations.
- Built a mesh-quality analysis script for exported `.obj` assets.

## System overview

The workflow begins by scanning real objects around Boston with **PolyCam**. These captures are then processed in **Nerfstudio**, where models are trained and exported for downstream use. On the frontend, the reconstructed assets are loaded into a web application built with **React** and displayed with **Three.js**. The geographic layer is built with **OpenStreetMap** and **Leaflet**, while **Leaflet Routing Machine** provides route planning between locations.

This design makes the project more than a gallery of 3D objects. It becomes a lightweight interactive archive where reconstruction, visualization, and urban exploration are tied together in a single interface.

## Technical highlights

A distinctive part of the project is that it connects several normally separate pieces of the 3D pipeline:

- **Capture:** PolyCam mobile scanning
- **Reconstruction:** Nerfstudio-based model generation
- **Rendering:** Three.js-based model visualization
- **Mapping:** OpenStreetMap + Leaflet
- **Navigation:** Leaflet Routing Machine
- **Deployment:** Vercel

In addition to the interactive app, the repository includes an automated mesh-analysis script that reports geometric and UV-related quality indicators such as polygon composition, watertightness, UV coverage, UV overlap, aspect ratio statistics, and normal consistency. This gave the project a useful quality-control component rather than treating all exported meshes as equally reliable.

## Main outcome

The final result was a working prototype for a **citywide object archive**: users can browse reconstructed objects on a Boston map, open immersive 3D views, and plan routes between locations. The project shows how neural reconstruction tools can be combined with web graphics and mapping systems to create a more public-facing and interactive use case for 3D vision.

## Interactive map

The figure below should show the main map interface, where reconstructed objects are placed in a geographic context and can be explored through the browser.

## Immersive object view

A second figure should show the object viewer itself. This helps make clear that the project was not only about map visualization, but also about presenting individual reconstructions in a more immersive 3D setting.

## Course context

This project was completed as part of the **MIT AI+X On-Campus Experience** in Winter 2025. The repository credits **Qiwen Xiao, John Yechan Jo, and Wenbo An** as contributors and documents the public demo deployment on Vercel.