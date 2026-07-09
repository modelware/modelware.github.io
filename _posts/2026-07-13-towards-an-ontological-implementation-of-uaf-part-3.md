---
layout: post
title: "Towards an Ontological Implementation of UAF, Part 3: Views Without Queries"
date: 2026-07-13 06:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [UAF, ontologies, OML, MBSE, systems engineering, enterprise architecture, DoDAF, SysML]
post_image: "/assets/images/blog/ontological-uaf.svg"
image: "/assets/images/blog/ontological-uaf-social.png"
description: "Part 3 of a series holding UAF to its own objectives. UAF exists to support the analysis of complex systems, and its unit of analysis is the view. Yet a UAF view is specified as a static list of element types and a schema diagram, never as a query. UAF describes the analysis it cannot compute."
---

This series reads the OMG's Unified Architecture Framework (UAF) in light of its own stated goals, using an ontology as the instrument. The previous part traced how far the DMM's platform independence actually reaches ([Part 2](/towards-an-ontological-implementation-of-uaf-part-2)). This part takes up the most consequential goal of all, and the finding that, more than any other, motivates an ontological implementation.

## The promise

UAF exists to enable analysis. The specification lists among its capabilities to *"support the analysis, specification, design, and verification of complex systems"* (§1.2). Its unit of analysis is the **view**: a cell of the UAF Grid pairing a stakeholder viewpoint (Strategic, Operational, Resources, and so on) with an aspect (Taxonomy, Connectivity, Traceability, and so on). If you want to know how UAF delivers analysis, you look at how it specifies a view.

## What is actually there

A UAF view specification turns out to be three things, and only three:

1. a prose **Definition** of intent, with its stakeholders and concerns;
2. a flat **list of element types** that may appear; and
3. a **figure**, a fragment of the metamodel drawn as a class diagram.

Take the Operational Processes view. Its element list enumerates `OperationalActivity`, `OperationalPerformer`, `IsCapableToPerform`, `OperationalExchange`, alongside raw `UML2.5Metamodel::Activity`, `ActivityEdge`, `CallBehaviorAction`. Its recommended implementation is *"SysML Activity Diagram, SysML Block Definition Diagram."* And that is the entire specification of the view.

What is absent is any notion of *derivation*. A view specification contains no rule that says "collect every operational activity that supports this capability and show it with its performers", no selection logic, no constraint, no expression that maps a model's instances to a view's contents. This is a structural observation, not a lexical one. The figure is a *schema*, a slice of the metamodel telling you which types are in scope and how they may relate; it is not a pattern definition. A pattern definition would add what the schema omits: the constraints that pin down which instances actually belong, stated precisely enough that a query to retrieve them can be derived from it. UAF gives the schema and stops. (Neither normative document even reaches for the language of derivation, but it is the missing *mechanism*, whether one frames it as a pattern, a constraint, or a query, not a missing keyword, that matters.) At no point does a view specification tell a tool how to compute its contents from an actual model.

This is a real gap, not a stylistic one. A specification of a view can operate at two levels: the *type* level (which kinds of things belong in this view) or the *instance* level (which of my actual elements the view contains, right now, given my model). UAF stops firmly at the first. The step across, from "these types are relevant" to "here are the elements that satisfy this," is left entirely to a human drawing diagrams in a tool. Even UAF's own conformance reflects this: view-specification conformance means a tool can *offer* a version of each view, that is, provide the right diagram type with the right palette, not that it can *compute* the view's content.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The core idea</span>
UAF describes the analysis it cannot compute. Its views are static lists of element types plus a schema diagram, never a derivation, whether a pattern, a constraint, or a query, that a machine could run. The step from "these types are relevant" to "here are the elements that satisfy this" is left to a human with a diagramming tool.
</aside>

## Why an ontology changes this

This is exactly the gap an ontological implementation closes, and it closes it almost for free. The same schema slice UAF draws as a figure, these types related this way, is a short step from a pattern definition: add the constraints that say which instances belong, and you have something a query can be derived from, or that can validate a model directly. Expressed over an ontology, a view specification stops being a palette a person fills in and becomes a projection a machine runs: *return every operational performer connected by an exchange to another performer that supports capability X.* Because that content is relational, it runs over the platform-neutral core we identified in [Part 2](/towards-an-ontological-implementation-of-uaf-part-2), with no UML or BPMN embedding required.

And once views are queries, the things UAF can only gesture at become expressible. Some of its most important relationships are not single links at all but multi-hop paths. How a project delivers a capability, or how a capability traces to the resources that field it, is a chain across several elements. A static list cannot state a path; a query states it in one line.

## The portable lesson

When you evaluate any modeling standard's support for analysis, ask a sharp question: **does it specify its views as vocabularies, or as derivations, the patterns, constraints, and queries that actually produce them from a model?** A list of element types tells you what a view is *about*; only a derivation tells you how to *produce* it. Many standards, UAF included, stop at the vocabulary and leave the real work to a human and a diagram editor. Rendering the standard on OML Code is what turns those descriptions into something a reasoner and a query engine can actually execute, which is to say, it is what finally delivers the analysis the standard promised.

*Curious how this analysis was done? [Explore OML Code](/oml-code), or [get in touch](/contact.html).*
