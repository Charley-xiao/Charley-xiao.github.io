---
title: "GalaGuide"
year: 2024
summary: "Built a cross-platform desktop application for campus events and reservations, combining event discovery, booking, chat, forums, maps, calendars, and AI-assisted features in a unified system."
role: "Final Project, CS304"
organization: "SUSTech"
tags: ["Software Engineering", "Desktop App", "Electron", "Vue", "Ktor", "Campus Systems", "Reservation System"]
featured: false
teaser: "/images/projects/galaguide-teaser.png"
reportUrl: "#"
repoUrl: "https://github.com/sustech-cs304/galaguide"
paperUrl: "#"
demoUrl: "#"
posterUrl: "#"
order: 60
---

This project explores how to unify several everyday campus workflows into one application. Instead of treating event discovery, reservations, communication, and scheduling as separate tools, **GalaGuide** brings them together in a single cross-platform desktop system for campus users.

The project was built as a full-stack software engineering effort, with a frontend based on **Electron and Vue**, a backend based on **Ktor**, and an additional AI component maintained separately in the repository.

## What I did

- Helped design and build a cross-platform campus productivity application.
- Worked on an integrated system for **event management** and **reservations**.
- Contributed to a product that combined backend services, desktop frontend development, and AI-assisted features.
- Participated in a team software engineering workflow with production-style repository structure and contribution practices.

## System overview

GalaGuide is designed as a campus companion rather than a single-purpose tool. Its core modules include:

- **Event management**, with recommendations, search, registration, notifications, and step-by-step participation guidance.
- **Reservation management**, designed for both personal and group use.
- **Live chat**, including group chat and real-time message updates.
- **Forum features**, including posting, replying, voting, search, and filtering.
- **AI assistant** features, including recommendations, chat interaction, and voice support.
- **Interactive map** functionality, including event locations, navigation, and location tracking.
- **Calendar** support for managing upcoming events and reservations. :contentReference[oaicite:4]{index=4}

What makes the project strong for a portfolio is that it is clearly a **system integration project**. It is not just a frontend mockup and not just a backend API. It combines interface design, application logic, real-time communication, assistant-style features, and campus-specific workflows in one product.

## Technical highlights

A notable part of the repository is its multi-component architecture. The codebase is split into a frontend, backend, and AI module, which reflects a more realistic software engineering structure than a single monolithic student project. The frontend is launched through Electron, the backend runs through Gradle/Ktor, and the AI module is installed and served separately in Python. :contentReference[oaicite:6]{index=6}

This makes the project a good example of:
- desktop application engineering,
- multi-service coordination,
- feature-rich product design,
- and team-based software development.

## Main outcome

The final result was a working prototype of a **campus event and reservation manager** that aimed to support the full user journey: discovering activities, signing up, reserving shared resources, navigating to locations, discussing events with others, and keeping track of commitments through a calendar-style workflow.

## Course context

GalaGuide was originally developed as a team project for **CS304 Software Engineering** at **Southern University of Science and Technology (SUSTech)** in **Spring 2024**. The repository credits five team members, including you, and presents the project as an open-source MIT-licensed prototype.