---
layout: post
title: "Towards an Ontological Implementation of UAF, Part 5: Keeping the Profile and the Metamodel Aligned"
date: 2026-08-02 06:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [UAF, ontologies, OML, MBSE, systems engineering, enterprise architecture, DoDAF, SysML]
post_image: "/assets/images/blog/ontological-uaf.svg"
image: "/assets/images/blog/ontological-uaf-social.png"
description: "Part 5 of a series reading UAF in light of its own objectives. UAFML is the SysML profile that realizes the platform-neutral DMM. Maintaining two large artifacts in parallel is hard, and a formal rendering shows a few small places where they have drifted, offered as a checklist rather than a critique."
---

This series reads the OMG's Unified Architecture Framework (UAF) in light of its own objectives, using an ontology as the instrument. [Part 4](/towards-an-ontological-implementation-of-uaf-part-4) looked at consistency within the DMM. This part looks at consistency between the two normative documents: the platform-neutral Domain Metamodel (DMM) and the SysML profile, UAFML, that implements it.

## The objective

UAF intends UAFML to be the faithful realization of the DMM: *"the standard implementation of the UAF DMM,"* *"created by mapping the UAF concepts and relationships to corresponding stereotypes,"* with each stereotype *"linkable to the UAF element"* (§6.3). They are meant to stay in step by construction. This matters especially because the DMM has no normative machine-readable form; it is prose and diagrams, so UAFML, which does ship as a machine-readable profile, is what implementers most often build against.

## What the lens shows

Rendering both and lining them up shows a few small places where, as any two large artifacts maintained in parallel will, they have drifted apart:

- **`ArbitraryConnector`.** The DMM figure draws it between `ConceptItem`s; UAFML types its ends as `ConceptRole`. The two pick different endpoints for the same relationship.
- **`UAFElement`'s base.** UAFML bases `UAFElement` on `«Element»`, while a DMM figure attaches SysML `satisfy`/`verify` dependencies to `UAFElement`, and those expect a `NamedElement`. The profile and that figure do not quite line up.
- **A name.** The DMM's `Process` concept appears in UAFML under the name `Activity`; there is no `Process` stereotype, and the chosen name coincides with the UML metaclass it extends.
- **An n-ary relationship.** The DMM draws `Implements` as an n-ary association with each end at `[1]`; UAFML realizes it as a binary dependency with conditional rules. The two shapes are not equivalent.

Related, and worth tightening at some point, is how much work the word *process* does across layers: a Processes aspect, an abstract `Process` element, a concrete `OperationalActivity` (which specializes `Process` but is not named "OperationalProcess"), an "Operational Processes" view, and the UAFML `Activity` stereotype. Prose absorbs this comfortably; a formal model asks each of them to be a distinct, named thing, which turns out to be a helpful forcing function for clarity.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The core idea</span>
When a standard ships as a prose specification and a separate profile, the two are maintained in parallel and will drift a little. That is not a mark against either; it is a reason to render both formally and let a machine check that they still say the same thing.
</aside>

## Why an ontology surfaces this

None of these is visible by reading. `ConceptItem` versus `ConceptRole` is one word in a diagram against one word in an OCL rule, many pages apart. `Element` versus `NamedElement` is a base class in a profile against a dependency in a figure. You see them only when both sides are stated precisely enough to compare, which is what rendering both on OML Code forced. Treating UAFML as a cross-check on the DMM there, the divergences simply fell out: two formal statements of the same fact either unify or they do not.

## The portable lesson

Any standard that is both a conceptual specification and a technology profile carries this maintenance risk, because the profile is what tools implement, so if it drifts from the concepts, the concepts gradually lose ground. The remedy is not to assume the two agree, but to make agreement checkable: formalize both, map one onto the other, and let the mismatches show. Done in that spirit, the result is not a list of complaints but a short, precise reconciliation list, useful to anyone maintaining or implementing the standard.

*Curious how this analysis was done? [Explore OML Code](/oml-code), or [get in touch](/contact.html).*
