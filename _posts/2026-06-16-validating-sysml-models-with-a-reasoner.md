---
layout: post
title: "The Power of a Reasoner: Validating SysML Models Automatically"
date: 2026-06-16 08:00:00 -0700
author: "Yuta Nakajima"
categories: [insights]
tags: [openCAESAR, OML, SysML, model validation, DL reasoner, MBSE, JAXA]
post_image: "/assets/images/blog/validating-sysml-with-reasoner.svg"
image: "/assets/images/blog/validating-sysml-with-reasoner-social.png"
description: "A SysML tool tells you when a model is malformed, but not when it is well-formed and wrong. Here is how a description-logic reasoner, applied through openCAESAR and OML, validates the semantic correctness of a SysML model against its meta-model, demonstrated on a JAXA satellite study."
---

A SysML modeling tool will dutifully tell you when your model is malformed. What it will not tell you is when your model is perfectly well-formed and still wrong: when two statements quietly contradict each other, when an element is classified in a way the meta-model forbids, or when a relationship connects things that should never be connected. As models grow, and especially as many engineers edit them together, these semantic errors accumulate out of sight, and they tend to surface at the worst possible moment, during integration or review, long after they were introduced.

This is the gap our team set out to close, and the answer turns out to be an old idea from logic applied to a modern engineering problem: a reasoner.

## Well-formed is not the same as correct

Most SysML tooling validates a model at the structural level. It checks that the syntax is legal and that the model conforms to the shape of its meta-model. That is necessary, but it stops short of the question engineers actually care about: is what the model *says* logically consistent? Structural conformance cannot catch a contradiction between two facts that are each individually legal. It cannot tell you that a stated classification is impossible given everything else in the model. It cannot derive the consequences of your assertions and check whether those consequences hold together.

To answer those questions you need formal semantics, and a tool that can compute over them.

## Turning the model into logic

Our approach uses the [openCAESAR](https://www.opencaesar.io/) platform together with the Ontological Modeling Language (OML). The SysML model and the meta-model it must conform to are represented in OML, which maps deterministically to standard OWL 2 Description Logic. Once the model is expressed as a logical theory, an OWL 2 DL reasoner can be turned loose on it.

That reasoner does two things a structural checker cannot:

- **Consistency checking.** It searches for contradictions across the *entire* model at once. If the assertions cannot all be true together, the model is inconsistent, and the reasoner says so, exhaustively and without relying on a human to notice.
- **Inference.** It derives facts that follow logically from what was stated but were never written down, including classifications and relationships implied by the meta-model. Those derived facts are then checked for consistency too, so errors that only emerge from the *combination* of statements come to light.

The result is validation of the model's semantic correctness against its meta-model, not merely its structural conformance to it.

## Proving it on a real model

We applied this to a sample SysML model from the Satellite DX Research Working Group at the Japan Aerospace Exploration Agency (JAXA). The OWL 2 DL reasoner integrated within openCAESAR effectively validated the semantic correctness of that system model against its meta-model: confirming what was consistent, and flagging where the model said something it should not have. The checks were automatic and repeatable, the kind of thing you can run on every change rather than save for a milestone.

## Why this matters

The significance is not that a reasoner is clever. It is that model validation stops being a manual, human-paced activity and becomes something a machine does completely and continuously. On a large, collaborative model, that is the difference between catching a contradiction the moment it is introduced and discovering it months later. A reasoner brings the rigor engineering has always wanted from its models, and it scales in exactly the way human review cannot.

This is the foundation a trustworthy model-based practice rests on: knowledge captured formally enough that software can check it for you.

---

*Read the full paper for the approach, the model, and the experimental results:*

> Y. Nakajima, A. Wada, Y. Komatsu, M. Elaasar, J. S. Jenkins and D. A. Wagner, "Power of a Reasoner: Model Validation for SysML Model using openCAESAR," *2025 ACM/IEEE 28th International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)*, Grand Rapids, MI, USA, 2025, pp. 853–857, doi: [10.1109/MODELS-C68889.2025.00112](https://doi.org/10.1109/MODELS-C68889.2025.00112). [Preprint (PDF)](https://dataverse.jpl.nasa.gov/file.xhtml?fileId=97149).
