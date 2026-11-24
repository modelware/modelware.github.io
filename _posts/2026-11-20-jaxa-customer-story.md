---
layout: post
title: "How JAXA Turns Engineering Know-How into Reusable Knowledge Graphs with OML Code"
date: 2026-11-20 07:00:00 -0800
author: "Maged Elaasar"
categories: [customer story]
tags: [customer story, JAXA, OML Code, OML, openCAESAR, knowledge graphs, digital engineering, space mission]
post_image: "/assets/images/blog/automating-mission-analysis.svg"
image: "/assets/images/blog/automating-mission-analysis-social.jpg"
description: "JAXA's Mission Design Unit uses OML Code to capture the knowledge built up in its engineering processes as reusable semantic knowledge graphs, then analyzes, infers, and verifies with a reasoner across the system lifecycle."
---

Every engineering organization accumulates knowledge it cannot afford to lose: how its missions are studied, which checks matter, how a change in one place reaches everything else. The question is whether that knowledge stays with the people who hold it, or becomes something the whole organization, and its software, can use. The Mission Design Unit in JAXA's Research and Development Directorate has chosen the second path, with OML Code.

## What JAXA is doing

JAXA's Mission Design Unit represents the knowledge and experience accumulated in JAXA's engineering processes as reusable semantic knowledge graphs, written in the Ontological Modeling Language (OML) on openCAESAR, the open-source platform that OML Code builds on. A [reasoner based on Description Logic](/oml-code/capabilities/automated-reasoning) then analyzes, infers, and verifies over those graphs. The stated aim is to solve engineering problems across the entire system lifecycle.

The team is applying it to:

- Streamlining design and analysis workflows that span multiple disciplines in mission studies
- Supporting design exploration and trade studies in early mission formulation
- Impact analysis that supports the first investigation when a change or an anomaly occurs in a flight project
- Efficient [querying](/oml-code/capabilities/structured-querying) of large system models

JAXA expects the approach to enable rapid, iterative verification and validation, and to improve traceability.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">Our view</span>
Impact analysis is where a knowledge graph pays for itself. When something changes on a flight project, the first question is what it touches, and a model that a reasoner can traverse answers that question directly, instead of leaving it to whoever happens to remember.
</aside>

## Making operations verifiable

JAXA is also extending the approach to concepts of operations. The team uses OML to model mission goals, operational tasks, and state variables as a knowledge graph, which gives traceability between them and lets logical inference derive the dependencies between state variables automatically. Paired with FRET, NASA Ames Research Center's tool for eliciting formal requirements, the constraints become linear temporal logic that can be checked for consistency and feasibility, and used to verify operational timelines.

The case studies are an Earth observation satellite mission and a rendezvous and docking mission between two spacecraft. JAXA's next step is technology that generates operation plans themselves.

## Why it matters

What stands out in JAXA's work is not any single analysis, but the pattern underneath them. The knowledge is captured once, formally, and then put to work many times: to explore designs, to run trade studies, to trace the impact of a change, to verify that an operations timeline meets its goals. Each new use draws on the same graph rather than starting from scratch.

That is what digital transformation in engineering looks like when it works. Rigor comes from formal semantics that a reasoner can check. Automation comes from analyses that run over the model instead of over people's inboxes. Agility comes from being able to ask a new question of the knowledge you already have. And because the knowledge lives in the model rather than in individual heads, it stays with the organization.

---

*Source: JAXA Research and Development Directorate, [Systems Engineering (SE) Technology](https://www.kenkai.jaxa.jp/ug/mds_se/) (in Japanese).*
