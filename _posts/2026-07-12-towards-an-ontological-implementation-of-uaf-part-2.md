---
layout: post
title: "Towards an Ontological Implementation of UAF, Part 2: How Far Platform Independence Reaches"
date: 2026-07-12 06:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [UAF, ontologies, OML, MBSE, systems engineering, enterprise architecture, DoDAF, SysML]
post_image: "/assets/images/blog/ontological-uaf.svg"
image: "/assets/images/blog/ontological-uaf-social.png"
description: "Part 2 of a series reading UAF in light of its own objectives. UAF sets out to be platform-independent at the DMM level. Rendering it as an ontology shows exactly where that independence holds firm, in its relational core, and where, by deliberate design, it builds on the semantics of UML and BPMN."
---

This series reads the OMG's Unified Architecture Framework (UAF) in light of the objectives it sets for itself, using an ontology as the measuring instrument. [Part 1](/towards-an-ontological-implementation-of-uaf-part-1) found that UAF was designed for exactly this: it is IDEAS-ontology-driven and explicitly meant to be implemented beyond UML and SysML. This part looks at a second objective, platform independence, and finds a more layered answer than a simple yes or no.

## The objective

UAF places real weight on the platform independence of its Domain Metamodel (DMM). The DMM is *"the basis for any implementation of UAF including non-UML/SysML implementations"* (§1.1), and its reason for existing apart from the UAFML profile is to be *"usable by non-UML/SysML tool vendors who may wish to implement the UAF within their own tool and metalanguage"* (§6.3). So it is a fair and useful question to ask how far that independence reaches in practice.

## What the lens shows

Read the DMM's normative element definitions closely and the answer has two layers. Many `Generalization` lines name metaclasses from other languages directly:

- `Process` is a subtype of `UML2.5Metamodel::Activity` and `BPMN2Metamodel::Process`.
- `EnterpriseGoal` is a subtype of `Requirement` (SysML's).
- The taxonomic relationships specialize `UML2.5Metamodel::Generalization`.

This is a deliberate and defensible choice, and UAF says so plainly. Its core principles call for *"Reusability of UML Metamodel concepts … to reuse UML semantics instead of reinventing its own semantics,"* and the same for BPMN (§6.4). Rather than re-derive activity or process semantics from scratch, UAF stands on mature ones. That is sound engineering, not a shortcut.

UAF is transparent about this, too. Its diagram legend gives such metaclasses a category of their own, *External Types*, defined as elements that *"[exist] outside of the core DMM but [are] referenceable by elements in the DMM"* (§7.3). Referencing a declared external type is a legitimate design move, and nothing here is hidden. The question worth asking is narrower: what that reference implies for self-containment, which is, after all, one of the DMM's own aims.

It implies a real limit. When a concept's essential structure is inherited from an external type rather than declared in the DMM, that concept is not self-contained: its meaning lives in the external type. `Process` is the clear case. It inherits its notion of contained actions, control-flow edges, and execution semantics from `UML::Activity`; the DMM does not restate them, and where that structure appears in the view figures, the UAF elements are drawn *redefining* UML activity features (nodes, edges, and their ends) rather than declaring their own. So the behavioral elements are a layer of UAF-specific names over well-chosen UML and BPMN foundations, and they mean what they mean because of those foundations.

That gives platform independence a precise shape rather than a one-word verdict. UAF's relational content, its capabilities, its strategy-to-resources abstraction ladder, and the traceability web between layers, is genuinely platform-independent and stands on its own. Its behavioral and structural content is expressed *in terms of* UML and BPMN, which is why the behavioral views recommend a SysML or BPMN diagram as their implementation. Both are true at once, and a faithful implementation benefits from knowing which layer it is working in.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The core idea</span>
UAF's platform independence is complete for its relational core and, by design, partial for its behavioral core, which builds on UML and BPMN semantics. The useful question is not whether the DMM is neutral, but which layer of it you are standing on.
</aside>

There is one subtlety worth clarifying at the source. `Process < UML::Activity, BPMN::Process` reads, literally, as being both at once, and taking it that way implicitly assumes that the semantics of a UML activity and a BPMN process are mutually consistent, so that something could coherently be both. The specification does not establish that, and doing so would be difficult: the semantics of UML activities and of BPMN processes are given largely in prose in their respective standards rather than in a formal form, so whether the two are mutually consistent is hard to verify at all. The two are related but not identical in their execution semantics, and their joint consistency is nowhere demonstrated. In practice a UML profile realizes the UML side and a BPMN tool the BPMN side, so a single conformant model tends to realize one or the other, not both. The tension disappears entirely if the two specialization axioms live in separate, optional ontologies, one per platform: a model then commits to a single platform at a time, and the question of joint consistency never arises. That separation is exactly what an ontological layering makes natural, and settling it at the source is better than leaving each implementer to rediscover the ambiguity.

## The portable lesson

A useful habit for any specification that calls itself platform-independent: separate the platform bindings out and see what still stands. What keeps its structure was truly neutral; what leans on the bindings was expressed in their terms, which is often a wise choice worth making explicit. Rendering a standard on OML Code performs this separation for you, since the platform metaclasses become optional modules and the layering becomes visible instead of implicit. In UAF's case it also matches the standard's own stated intent to keep *"the underlying UAF metamodel"* separate from *"the presentation layer"* (§6.3); the ontology simply makes that separation something you can rely on.

This choice is about to matter in practice. UAF 2.0 is underway, targeting SysML v2 as its platform, which puts a sharp question to the standard: will the DMM stay genuinely platform-independent, with SysML v2 as one realization of it, or will it bind to SysML v2 directly? The finding of this part is a vote for the former. A platform-independent core is what lets a framework adopt a new platform without rewriting its concepts, and what keeps today's UAF models meaningful as the platform beneath them changes.

*Curious how this analysis was done? [Explore OML Code](/oml-code), or [get in touch](/contact.html).*
