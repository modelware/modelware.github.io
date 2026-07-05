---
layout: post
title: "Towards an Ontological Implementation of UAF, Part 4: Keeping a Large Specification Consistent"
date: 2026-07-26 06:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [UAF, ontologies, OML, MBSE, systems engineering, enterprise architecture, DoDAF, SysML]
post_image: "/assets/images/blog/ontological-uaf.svg"
image: "/assets/images/blog/ontological-uaf-social.png"
description: "Part 4 of a series reading UAF in light of its own objectives. Any specification told across prose, diagrams, and a profile accumulates small inconsistencies; keeping them aligned is one of the hardest parts of maintaining a standard. A formal rendering catches them automatically, which makes it a natural ally for the people who maintain UAF."
---

This series reads the OMG's Unified Architecture Framework (UAF) in light of its own objectives, using an ontology as the instrument. The previous part examined how UAF specifies its views for analysis ([Part 3](/towards-an-ontological-implementation-of-uaf-part-3)). This one takes up a challenge every large standard faces, and that UAF takes seriously: keeping the specification consistent with itself.

## The objective

UAF aims for a disciplined, model-driven pipeline. Its philosophy section describes the specification as *"generated from the UML model used to describe the UAF DMM and UAFML,"* with *"the UML tool automatically maintain[ing] consistency"* and *"traceability between the UAF and the UAFML"* (§6.3). The aspiration is a single source of truth, machine-kept. It is exactly the right aspiration, and a genuinely hard one to sustain across a document this large.

## What the lens shows

The difficulty is that a single element is described in several places. Its supertypes appear in the clause-9 metamodel text. Its relationships are redrawn in the clause-8 view figures. Its name is re-listed in each view that uses it. And UAFML states it again as a stereotype. The delivered DMM, though, is prose and figures; there is no normative machine-readable form of it for a tool to check those restatements against. (The one machine-readable artifact that ships is the UAFML profile, not the DMM.) Any document that says the same thing in several hand-touched places will, over revisions, accumulate small divergences, and UAF has a few of the familiar, easy-to-miss kind:

- **A reference to a retired element.** UAF 1.3 replaced `EnterpriseMission` with a `Mission`/`ActualMission` family, and a view content list still names the old element.
- **Generalizations that read as carried over.** `ProcessParameter` lists `Activity` and `CallBehaviorAction` among its supertypes, which look carried over from the neighboring `ProcessUsage`, where they naturally belong.
- **A supertype whose qualifier was lost.** `EnterpriseGoal` lists `Requirement` as a generalization; the `SysML::` qualifier that would resolve the name appears to have dropped, leaving it unresolved within the DMM.
- **Text and figure that differ.** For a few elements the prose names one supertype and the diagram draws another, as with `ActualResponsibleResource`.

These are minor and individually trivial to fix, and it is worth being clear about what they are and are not. They are not evidence that UAF is unusually inconsistent, it is not; every large, multi-artifact standard carries a handful, the more so one that unifies several donor frameworks and the perspectives of many contributors, and finding them by reading is nearly impossible. They are simply the kind of thing a formal model notices for free.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The core idea</span>
Any specification that states the same fact in prose, in figures, and in a profile has several places for those statements to drift, and over revisions a few will. This is not a failing peculiar to UAF; it is the nature of large hand-maintained documents, and it is precisely what a formal model is good at catching.
</aside>

## Why an ontology helps here

We did not go looking for these; they surfaced on their own, because OML Code will not let them pass. Every generalization must resolve to a declared class, so an unresolved `Requirement` is caught at load time. Every element a view cites must exist, so a retired `EnterpriseMission` cannot be referenced. A supertype stated one way in text and another in a figure becomes two statements a reasoner compares immediately.

That is why rendering a standard formally is worth doing even when consistency is already a goal: it turns consistency from something people sustain by vigilance into something a tool checks by construction. Used this way, the ontology is an ally to the maintainers rather than a critic. It hands them a short, precise list of what to reconcile, of the sort any working group is glad to have.

## The portable lesson

When you gauge how maintainable a specification is, look at how many places state each fact, and how they are kept in step. Redundancy across prose, diagrams, and a profile is less a flaw than a standing maintenance burden, and the durable way to carry it is to generate the restatements from one source and let a formalism reject unresolved references. UAF already aims for that pipeline. An ontological rendering is a practical way to get closer to it, and to give the working group a running consistency check along the way.

*Curious how this analysis was done? [Explore OML Code](/oml-code), or [get in touch](/contact.html).*
