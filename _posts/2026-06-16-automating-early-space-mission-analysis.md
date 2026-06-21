---
layout: post
title: "From Weeks to Hours: Automating Power Balance Analysis in Early Mission Design"
date: 2026-06-16 08:30:00 -0700
author: "Yuta Nakajima"
categories: [insights]
tags: [openCAESAR, OML, SPARQL, MBSE, space mission, workflow orchestration, CI/CD, JAXA]
post_image: "/assets/images/blog/automating-mission-analysis.svg"
image: "/assets/images/blog/automating-mission-analysis-social.png"
description: "Early space mission studies run on 60-day cycles but lean on spreadsheets and slides, and MBSE struggles to keep pace. Here is how openCAESAR orchestrated orbit, scenario, and power analyses into an automated, semantically integrated workflow, cutting timelines from weeks to hours on a JAXA VLEO satellite study."
---

Early space mission design is a race against the clock. A mission study brings multidisciplinary engineers together to explore concepts and converge on a feasible solution, typically inside a 60-day window, through many iterations. But the workflows that support those iterations are still surprisingly analog: information moves by hand, through spreadsheets and presentations, passed between specialists. The pace of the study cycle is so fast that formal Model-Based Systems Engineering often cannot keep up. The SysML model lags behind the decisions, and so it stops being the source of truth.

We took a different route. Instead of asking the model to keep pace with manual analysis, we automated the analysis around a shared, semantic backbone.

## openCAESAR as a workflow orchestrator

The [openCAESAR](https://www.opencaesar.io/) platform served as a workflow orchestration layer that automates multi-domain analysis. For an early mission study, the relevant domains are orbit dynamics, power balance, and mission operation scenarios, each handled by its own specialized tool. Orchestration means these tools no longer exchange information through people; they exchange it through a common model.

That common model is expressed in the Ontological Modeling Language (OML). We built a tailored vocabulary for the domain, with concepts such as *Work Package*, *Component*, *Mass Properties*, and *Power Modes*, and captured the recurring computations as explicit analysis patterns, including mass aggregation and power aggregation. [SPARQL queries](/oml-code/capabilities/structured-querying) pull the right data out of that model for each tool and write the results back into it. The vocabulary gives every tool a single, unambiguous understanding of the system, which is exactly what keeps the data consistent as it flows around the loop.

## The workflow, on autopilot

The three analyses, orbit analysis, operational scenario generation, and power balance analysis, were wired into a single automated pipeline. Once an engineer sets up an operational scenario, a [GitLab CI/CD pipeline](/oml-code/capabilities/devops-integration) takes over: it executes the workflow, cycles through the analysis tools in order, aggregates the power results in OML, and deploys the output as a dashboard. The familiar elements of an early study, the Mass Equipment List (MEL) and the Power Equipment List (PEL), [fall out of the model](/oml-code/capabilities/code-generation) rather than being maintained by hand.

In other words, the same continuous-integration discipline that software teams use to build and test on every commit is applied to engineering analysis: change the scenario, and the whole analysis re-runs itself.

## What changed on a real study

<aside class="axiom-aside axiom-aside-side" markdown="1">
<span class="axiom-aside-label">The headline</span>
A study cycle that ran on spreadsheets and slides went from weeks to hours, and gained rigor instead of trading it away for speed.
</aside>

We applied this to a mission study for a Very Low Earth Orbit (VLEO) satellite at JAXA. The results were striking:

- **Weeks to hours.** Automating the data exchange and analysis eliminated the manual bottlenecks that previously dominated the timeline.
- **Analysis that was previously impractical.** The workflow ran continuous analysis combining operational scenarios across eight orbital periods, something the old manual process could not realistically do.
- **Consistency and exploration.** Because every tool reads from and writes to the same semantic model, the data stays consistent, and engineers can explore far more of the parameter space in the time available.

The study cycle keeps its speed and gains rigor at the same time, rather than trading one for the other.

## Why this matters

The lesson generalizes well beyond power balance. When engineering knowledge is captured in a formal, shared model, integration stops being a human chore and analysis becomes something you can automate end to end and run continuously. That is what lets a fast, iterative design process stay rigorous: the model is no longer documentation that trails the work, it is the live hub the work runs through.

---

*Read the full paper for the vocabulary, the pipeline, and the detailed results:*

> Y. Nakajima, H. Katsumata, D. Tate, Y. Komatsu, A. Levitt, J. S. Jenkins, M. Elaasar, N. F. Rouquette and D. A. Wagner, "openCAESAR Application to Power Balance Analysis in Early Space Mission Formulation," *2025 ACM/IEEE 28th International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)*, Grand Rapids, MI, USA, 2025, pp. 844–852, doi: [10.1109/MODELS-C68889.2025.00111](https://doi.org/10.1109/MODELS-C68889.2025.00111). [Preprint (PDF)](https://dataverse.jpl.nasa.gov/file.xhtml?fileId=97281).
