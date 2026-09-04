---
layout: post
title: "The Case for Neurosymbolic Systems Engineering"
date: 2026-09-04 12:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [neurosymbolic systems engineering, neurosymbolic AI, ontologies, OML, MBSE, systems engineering, automated reasoning, AI]
post_image: "/assets/images/blog/case-for-neurosymbolic-se.svg"
image: "/assets/images/blog/case-for-neurosymbolic-se-social.png"
description: "Formal modeling was never held back by doubt about whether it works, but by what it cost. Cheap viewpoints and generative AI both change that, though only when the ontology acts as a contract between what gets proposed and what a reasoner can verify. That arrangement deserves a name and a test."
---

Formal modeling in systems engineering was never held back by doubt about whether it works. Capture a system in a model with explicit semantics and a reasoner can derive what was never stated, detect what contradicts, and answer questions across knowledge that would otherwise stay scattered across disciplines. We have built systems this way and deployed them on flight programs.

What kept formal modeling a specialist practice was not its value. It was its cost.

The answer was never that everyone had to write ontologies by hand. In practice we built purpose-built viewpoints, interfaces that presented the model in the engineer's own terms so people could review and edit without touching syntax, and those worked. They were also expensive: each one was bespoke development, so a program got viewpoints for the concerns someone had funded and nothing for the rest. Keeping a model current required discipline, asking a question it had not been built to answer meant knowing query languages, and explaining an unfamiliar corner of it took someone fluent in both the domain and the formalism. A model could be extraordinarily capable and still be reachable by only part of the team that depended on it.

Two things change that equation, and they compound. Viewpoints stop being bespoke development and become [declarative artifacts](/oml-code/capabilities/declarative-methodology), so presenting the model in an engineer's terms is configuration rather than a project. And generative AI arrives on top of that, able to draft model content and answer questions about it directly.

The second one alone is not enough, and a general-purpose assistant bolted beside a modeling tool is worse than not enough. In mission-critical engineering it introduces a new problem: content that reads as authoritative, produced faster than any review process was designed to absorb. Speed without accountability is a liability rather than a capability.

What changes the picture is neural AI and symbolic reasoning operating together around a formal engineering model, under a shared contract. We call that practice **Neurosymbolic Systems Engineering**.

## Two very different kinds of intelligence

The two halves are good at genuinely different things, and the distinction is worth stating precisely rather than as a slogan.

The **neural component is interpretive**. It turns an engineer's intent into candidate model content, maps unstructured documents into a model, and explains a complicated dependency in language the person asking will follow. This is judgment under ambiguity, which is what language models are actually good at. It is not, and cannot be, a reliable arbiter of formal truth.

The **symbolic component is exact**. It evaluates consistency, enforces constraints, and computes entailments over asserted knowledge. It has no opinion about linguistic plausibility; it performs precise computation over knowledge that has been explicitly represented.

Neither is sufficient alone. An assistant without a reasoner produces confident content nobody should act on. A reasoner nobody can see into stays behind the specialist bottleneck that kept formal methods out of reach. Connecting them takes more than an API between two tools.

## The ontology is the contract

A language model works by probabilistic interpretation. A reasoner requires formal statements with strict semantics. Something has to stand between them, and that something is the [ontology](/oml-code/capabilities/formal-knowledge-representation).

The ontology defines the concepts, relationships, and constraints through which a neural interpretation becomes a formal engineering statement, and through which a symbolic conclusion becomes feedback that means something. It is the reason the exchange is not merely two systems passing text.

When the assistant proposes that a *Controller* performs a *Function* affecting an *Actuator*, the ontology is what fixes those terms and the constraints governing them. The neural side commits its interpretation to that vocabulary, and having committed, the symbolic side can derive consequences, check compatibility, and surface contradictions. Without the commitment there is nothing to check, and the proposal is just plausible text.

## The model is where the contract is exercised

If the ontology is the contract, the system model is the evolving body of engineering knowledge governed by it.

This is the sharpest way to see how the arrangement differs from retrieval. Retrieval-augmented generation gives an assistant evidence drawn from documents. A formal model gives it something it can be *wrong against*.

When the assistant proposes a change, that proposal becomes a formal assertion. Its implications can be derived mechanically, its compatibility with what is already asserted can be evaluated, and its downstream impact can be traced across the system. The model is not context handed to the AI. It is the medium through which the AI participates in engineering at all.

## Methodology-as-code

For any of this to run in real workflows, the ontology and the model have to be authored, versioned, reviewed, and edited in an environment built for people and machines working on the same artifacts. That is a tooling problem as much as a conceptual one, and it is where [OML Code](/oml-code) is our answer.

The paradigm is *methodology-as-code*: your engineering method captured as a [declarative artifact](/oml-code/capabilities/declarative-methodology) rather than as a document nobody reads, with vocabularies, patterns, viewpoints, and analyses expressed in a form both an engineer and a machine can act on. It gives the neural component the structured context it needs to propose something valid, and gives the reasoner the precise input it needs to evaluate it. We flagged this direction at the close of our [UAF series](/towards-an-ontological-implementation-of-uaf-part-6), and it has been the through-line of the work since.

Methodology-as-code defines the contract. Viewpoints are how people work inside it. Neural AI lowers what it costs to participate. Symbolic reasoning enforces the consequences.

## Closing the loop in practice

An engineer asks: *what breaks if we double the power output on the primary payload bus?*

The assistant interprets the question through the ontology, resolving which bus is meant, which power constraints apply, and which components sit downstream. That interpretation is submitted to the model as a formal proposal rather than as prose. The [reasoner](/oml-code/capabilities/automated-reasoning) then derives the implicit dependencies and finds that the increased current violates a thermal dissipation constraint on an adjacent flight controller.

That failure returns to the assistant, which renders it in terms the engineer can act on: doubling power exceeds the thermal rating on Flight Controller B by 12%, so either the heat sink is upgraded or the power is re-routed. The engineer weighs the trade-off and decides.

The engineer does not have to take any of that on faith. The affected part of the model is there in the viewpoint for that concern, showing the power budget and the thermal margins in engineering terms, with the reasoner's inferences visible alongside what was asserted. If the fix is a heat sink change, it can be made right there. Reviewing a proposed change works the same way: a [diff expressed through the viewpoint](/oml-code/capabilities/collaboration-support) rather than as lines of syntax, so the question is whether the engineering is right rather than whether the text parses.

Every participant matters in that exchange. Without the ontology the question could not be resolved into anything checkable. Without the reasoner the thermal violation would have gone unmentioned. Without the assistant the engineer would have had to know how to ask the question formally to begin with. Without viewpoints there would be nowhere to see or correct the answer except the source text. And without the engineer, nothing decides which trade-off is acceptable.

## Four criteria

The risk with any new term is that it becomes another loose label for AI in engineering. So, four criteria, all of them required.

1. **Formal engineering knowledge.** System knowledge carries explicit, machine-interpretable semantics defined by an ontology, not prose and not diagrams whose meaning lives in the reader's head.
2. **A symbolic reasoner in the loop.** The system mechanically derives consequences and evaluates consistency. Syntax and schema checking are not this: well-formedness is not consistency, and the gap between them is where the expensive errors live.
3. **Ontological participation.** The neural component reads, interprets, and proposes strictly through the ontology's vocabulary, rather than emitting content alongside the engineering work.
4. **A closed feedback loop.** Symbolic results, whether entailments, constraint failures, or query output, shape what the neural component does next rather than acting as a pass/fail filter at the end of a pipeline.

The fourth is the one most systems fail. Generate-then-validate is a pipeline: the assistant writes, a checker approves or rejects, and nothing informs the next attempt. That is worth having, and it is not this, because the symbolic half is behaving as a filter rather than as a participant.

These are written so they can be turned on us. If OML Code does not satisfy all four, the criteria are specific enough to show it.

## A different engineering relationship

Three things become true that were not true of either half by itself.

**Formal modeling becomes broadly accessible.** Engineers work through [viewpoints built for their concerns](/oml-code/capabilities/flexible-capture) and express intent in their own language, with the assistant handling translation into the formal representation. Authoring the ontology as text remains fully supported, and for configuration management it is the artifact that matters, a versioned, diffable, reviewable file. It is simply no longer the path most of the team takes to get work done. The barrier was never the value of the model; it was the expertise required to touch it.

**AI output becomes mechanically challengeable.** Generated content is governed by formal semantics, which makes the assistant's fallibility observable instead of latent. A model can contradict a claim; a document collection can only fail to support it.

**The reasoner gets a second job.** It has always verified what people authored. It now also disciplines what a machine proposes, continuously, at a volume no review process would keep up with.

Put neural AI and a symbolic reasoner next to each other and you have two useful tools. Give them a shared ontological contract around an evolving formal model, and the way complex systems get engineered changes.

One note on the name. We write the phrase out rather than abbreviating it, partly because the obvious initialisms are already taken in neighboring fields and partly because dropping either half of the compound hides the thing being claimed.
