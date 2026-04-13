---
title: "What Lives Here"
year: 2026
summary: "A short note about what this blog is for: paper notes, talk takeaways, experiments, and thoughts that become clearer after writing them down."
tags: ["Meta", "Notes", "Thoughts"]
featured: true
teaser: "/images/placeholders/teaser-placeholder.svg"
reportUrl: ""
repoUrl: ""
paperUrl: ""
demoUrl: ""
posterUrl: ""
order: 100
---

This section is where I keep the kind of writing that does not neatly fit into a project page or a research summary.

Sometimes it will be a reading note on a paper. Sometimes it will be notes from a talk, a half-formed idea, or a small technical observation that is useful to remember later.

I want this space to stay lightweight. The goal is not to make every post polished. The goal is to keep useful thoughts from disappearing.

Over time, this section will collect:

- paper notes
- talk notes
- experiment logs
- short essays
- loose technical thoughts

If you are reading this early, this is the seed of the section rather than the finished archive.

LaTeX test:

$$
\begin{aligned}
    \mathcal{L}(\theta) &= \sum_{i=1}^N \log p_\theta(x_i) \\
    &= \sum_{i=1}^N \log \int p_\theta(x_i, z) dz \\
    &\geq \sum_{i=1}^N \int q(z) \log \frac{p_\theta(x_i, z)}{q(z)} dz \\
    &= \sum_{i=1}^N \left( \int q(z) \log p_\theta(x_i, z) dz - \int q(z) \log q(z) dz \right) \\
    &= \sum_{i=1}^N\left( \int q(z) \log p_\theta(x_i | z) dz + \int q(z) \log p_\theta(z) dz - \int q(z) \log q(z) dz \right) \\
    &= \sum_{i=1}^N\left( \int q(z) \log p_\theta(x_i | z) dz - D_{KL}(q(z) || p_\theta(z)) \right)
\end{aligned}
$$

# H1

## H2

This. *Haha*.