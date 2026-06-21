---
layout: post
title: "What the Reasoner Knows That You Did Not Write Down"
date: 2026-06-21 07:00:00 -0700
author: "Maged Elaasar"
categories: [insights]
tags: [DL reasoner, entailments, OML, OWL, MBSE, systems engineering, model analysis]
post_image: "/assets/images/blog/dl-reasoner-entailments.svg"
image: "/assets/images/blog/dl-reasoner-entailments-social.png"
description: "A model says more than it states. A description-logic reasoner computes the difference, the entailments, and that quiet capability is what turns a system model from documentation into something you can actually analyze."
---

Every model says more than it states. The interesting question in model-based systems engineering (MBSE) is not what you wrote down, but what necessarily follows from it. A description-logic (DL) reasoner is the tool that computes that difference, and once you see what it does, it is hard to go back to treating a model as a pile of carefully drawn boxes.

## Entailments: the facts you never typed

<aside class="axiom-aside axiom-aside-side" markdown="1">
<span class="axiom-aside-label">The idea in one line</span>
An entailment is a fact you never wrote but cannot avoid: the logical consequence of everything you did write.
</aside>

A DL reasoner takes the facts you assert, combines them with the rules of your vocabulary, and derives every additional fact that must be true as a consequence. Those derived facts are called *entailments*. They were never written down, yet they are as certain as the statements you did write, because they follow by logic alone.

A small example makes the idea concrete. Suppose your vocabulary says every *Spacecraft* has exactly one *primary power source*, and that a *primary power source* must be a *Generator*. You then assert that a particular satellite's primary power source is its solar array, and, elsewhere, that its solar array is a *Sensor*. You never stated a contradiction. No single line is wrong. But the reasoner entails that the solar array is a *Generator* (forced by the vocabulary) and also knows it is a *Sensor*, and if those two classes are declared disjoint, it reports the model inconsistent. You asserted three innocent facts; the reasoner found the fourth one that breaks them.

<figure class="post-figure">
  <img src="/assets/images/blog/entailment-worked-example.svg" alt="A satellite's solar array is asserted to be a Sensor and to be the primary power source; the vocabulary entails it must also be a Generator, which is disjoint from Sensor, making the model inconsistent.">
  <figcaption>Three asserted facts (solid) force a fourth by entailment (dashed). Because <em>Generator</em> and <em>Sensor</em> are disjoint, the implied fact collides with one you stated, and the reasoner reports the model inconsistent.</figcaption>
</figure>

That is the heart of it. Entailments matter because **the errors that hurt most are rarely in what you stated. They are in what your statements jointly imply.** A human reviewer can check each fact in isolation and approve all of them, while the contradiction lives only in their combination, invisible until something downstream fails.

## What analysis a reasoner can actually do

Computing entailments is not a single trick; it is a foundation that several distinct kinds of analysis stand on. The four that earn their keep in practice:

- **Consistency checking.** The reasoner asks whether all your facts can be true at once. If they cannot, the model contains a contradiction, and it is flagged across the *entire* model, not just the region a person happened to be reviewing. This is the difference between "the model is well-formed" and "the model could describe a real system."

- **Classification.** Given an element's properties, the reasoner determines every class it must belong to, even classes you never tagged it with. Define *CriticalComponent* as anything whose failure propagates to a top-level function, and the reasoner will tell you which components are critical, derived from the model rather than hand-labeled. The labels stay correct as the model changes, because they are recomputed, not maintained.

- **Inference of relationships.** Properties that are transitive, symmetric, or chained let the reasoner complete the graph. State that A is *contained in* B and B in C, and the reasoner knows A is contained in C without you drawing the line. Connectivity, allocation, and traceability webs fill themselves in.

- **Satisfiability and entailment queries.** You can ask whether a class could ever have a member ("can a component be both a *PowerSource* and a *Load*?"), or whether a specific fact is entailed ("does this model imply every requirement is allocated?"). These turn a model into something you [interrogate](/oml-code/capabilities/structured-querying), not just read.

Crucially, all of this is *complete and sound*: a DL reasoner finds every entailment that follows and never asserts one that does not. It is exhaustive in a way no review meeting can be.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">Why it beats review</span>
A reviewer checks the facts they happen to look at. A reasoner checks every fact, and every consequence of every combination of facts, on every run. The errors that survive review are precisely the ones that live between statements, which is exactly where the reasoner looks.
</aside>

## Why a practitioner should care

The payoff is not philosophical. It is a change in what your model is *for*.

Without a reasoner, a system model is documentation: a faithful, structured record of decisions that humans must read, interpret, and cross-check. Its correctness depends entirely on the diligence of the people reviewing it, and that diligence does not scale. Models grow, teams edit in parallel, and the number of fact-combinations that could conflict grows faster than anyone can track.

With a reasoner, the model becomes *analyzable*. Consistency is checked on every change, the way a compiler checks code on every build. Classifications and traceability stay current automatically instead of drifting from the day they were drawn. Questions that used to require a careful manual study become a query you run in microseconds and rerun whenever the model moves. The rigor stops being aspirational and starts being mechanical.

There is also a quieter benefit: entailments let you say less and mean more. Because the reasoner derives consequences, you assert the essential facts and the vocabulary's rules, and let the machine compute the rest. The model stays smaller, the redundancy that humans introduce (and then fail to keep in sync) disappears, and the single source of truth is genuinely single.

This is exactly why [OML maps to OWL 2 DL](/why-oml-and-not-just-owl): the modeling layer gives engineers the right abstractions, and the logical foundation underneath makes [automated reasoning](/oml-code/capabilities/automated-reasoning) applicable to everything they build. Capturing knowledge formally is only half the value. The other half is that, once it is formal, software can tell you what you committed to without realizing it.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The takeaway</span>
A model you can only read tells you what you wrote. A model a reasoner can analyze tells you what you meant.
</aside>

---

*For a worked application of these ideas to a real system model, see [Validating SysML Models Automatically](/validating-sysml-models-with-a-reasoner), and to understand the language underneath, [Why OML and Not Just OWL?](/why-oml-and-not-just-owl)*
