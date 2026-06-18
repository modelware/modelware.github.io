---
layout: post
title: "From Hand-Crafted Timelines to Provable Goals: Verifying ConOps with Knowledge Graphs and Formal Methods"
date: 2026-06-17 08:00:00 -0700
author: "Yuta Nakajima"
categories: [insights]
tags: [openCAESAR, OML, FRET, formal methods, LTL, ConOps, MBSE, space mission, JAXA, INCOSE]
post_image: "/assets/images/blog/declarative-conops-vnv.svg"
image: "/assets/images/blog/declarative-conops-vnv-social.png"
description: "In early space mission design, the concept of operations is captured as hand-crafted timelines whose goals and constraints stay implicit. Presented at INCOSE IS 2026, this JAXA methodology pairs an OML knowledge graph with NASA's FRET to make ConOps goals explicit, formal, and continuously verifiable, demonstrated on an Earth-observation mission study."
---

At INCOSE IS 2026 in Yokohama, JAXA presented a methodology for verifying the concept of operations of a space mission while it is still being shaped. This post recaps that talk.

In the earliest phase of a space mission, the concept of operations (ConOps) is where the whole design comes together: when the spacecraft observes, when it fires thrusters, when it downlinks, and how the power budget balances across all of it. Today that ConOps is usually captured as an operational timeline that an engineer crafts by hand and refines, iteration after iteration, as the architecture changes.

That manual loop has a hidden cost. The goals and constraints behind the timeline, the real operator intent, stay implicit. They live in someone's head, not in the model. Every iteration needs a human to re-interpret them, which slows the study down and limits how much of the design space a team can actually explore. As constellations scale and the ConOps grows more complex, hand interpretation stops being viable.

## From procedural to declarative

The shift we are exploring is from *procedural* ConOps modeling to *declarative* ConOps modeling.

Procedural modeling describes how operations unfold: this task, then that task, in sequence. It answers "how," but it never makes the underlying goals or constraints explicit, so it cannot tell you whether a given timeline is actually correct.

Declarative modeling flips that around. You state the high-level mission goals and constraints directly, for example "observation shall be performed during sunlight, for at least 30 minutes" or "battery depth-of-discharge shall stay under 40 percent," and let the operational timeline be verified, and eventually synthesized, against them. It turns out that formal specification and formal verification techniques make this practical.

## Two technologies, one loop

The methodology pairs a semantic knowledge graph with formal methods.

**An ontological knowledge graph, in OML.** Built on [openCAESAR](https://www.opencaesar.io/) and the Ontological Modeling Language, the graph captures abstract, goal-based mission behaviors: goals, operational tasks, and the state variables they constrain. Because it is a logic-based model, a description-logic reasoner can infer relationships that were never stated by hand, such as which state variables affect which others, giving the team a form of automatic state discovery and full semantic traceability from a mission goal down to the states it touches.

**Formal verification, with FRET.** [FRET](https://github.com/NASA-SW-VnV/fret), the Formal Requirements Elicitation Tool from NASA Ames, lets systems engineers author temporal constraints in a controlled natural language, FRETish, that maps automatically to Linear Temporal Logic. Its LTL simulator then checks whether a given operational timeline satisfies the constraints, and flags realizability and consistency problems before they reach the design. Engineers get rigorous formal verification without writing temporal logic by hand.

Put together, the goals captured in OML are elaborated into temporal constraints, the timeline is checked against them, and the verdict, valid or not valid, feeds straight back into the next iteration. The same continuous, machine-checked discipline that has transformed software finally reaches early-stage operational design.

## A worked example: an Earth-observation mission

The talk grounded the idea in an Earth-observation satellite in a 300 km sun-synchronous orbit, where the central challenge is balancing the power budget between observation and orbit maintenance. The mission intent was captured as a small set of declarative goals, for example: observe for at least 30 minutes during sunlight, and keep battery depth-of-discharge under 40 percent.

Those goals became FRETish constraints over a handful of state variables (sun presence, observation mode, battery depth-of-discharge). A few illustrate the style:

- *While SUN, spacecraft shall eventually satisfy OBSERVATION_MODE.*
- *While not SUN, spacecraft shall never satisfy OBSERVATION_MODE.*

That second constraint captures a designer's intent that is easy to leave implicit: the spacecraft must not observe while in eclipse. With the constraints in place, the LTL simulator checks any candidate operational timeline and returns a clear verdict. A timeline that schedules observation into a shadow period comes back **Not Valid**; one that respects the goals comes back **Valid**.

The interesting part is what this enables iteratively. As the team adds constraints and replays timelines, the description-logic reasoner infers the chain of influence between state variables (operational state drives sun exposure, which gates observation mode), turning the LTL simulator into a tool for state discovery and constraint elicitation, not just a pass/fail gate.

## What it adds up to, and what comes next

The contribution is the integration itself: MBSE, semantic technology, and formal methods working as one loop. OML captures abstract, goal-based mission behavior with full traceability; FRET turns that intent into temporal logic and checks it. When mission intent is formal and machine-interpretable rather than implicit and hand-carried, verification stops being a manual review and becomes something you can run continuously as the design evolves, keeping a fast concept study rigorous instead of trading speed for confidence.

The prototype is an early step. The roadmap the talk laid out points toward realizability checking of the full goal set, tighter integration of the LTL simulator with a physics-based state propagator, and ultimately synthesizing ideal timelines directly from goals rather than only checking timelines crafted by hand.

> Presented as "Agile and Continuous Verification and Validation Methodology for Concept of Operations in Space Mission Architecting Using openCAESAR and FRET" by Yuta Nakajima, Tsutomu Kobayashi, and Yutaka Komatsu (Japan Aerospace Exploration Agency, JAXA) at the INCOSE International Symposium 2026, Yokohama.
