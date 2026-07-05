---
layout: post
title: "Towards an Ontological Implementation of UAF, Part 1: UAF Was Built for This"
date: 2026-07-05 06:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [UAF, ontologies, OML, MBSE, systems engineering, enterprise architecture, DoDAF, SysML]
post_image: "/assets/images/blog/ontological-uaf.svg"
image: "/assets/images/blog/ontological-uaf-social.png"
description: "Part 1 of a series. Rendering a specification as an ontology is not just a way to implement it; it is a way to understand it. We put the OMG Unified Architecture Framework under that lens, and the first finding, grounded in the spec's own words, is the most telling: UAF was designed to be implemented as an ontology. It says so, and it is built on one."
---

There is a technique the systems-engineering world still underuses: rendering a specification as an ontology, not merely to implement it, but to *understand* it.

An ontology is an unforgiving medium. Every concept must be named and placed. Every relationship must declare what it connects, in which direction, and with what constraints. Every axiom must stay consistent with every other, because a reasoner checks them together and reports the moment they conflict. Nothing can stay vague, nothing can quietly mean two things, and nothing can point at something that isn't there. That strictness is usually described as a cost. It is better understood as an instrument. When you re-express an existing model in an ontology, its true structure is forced into the open, and so are its seams. The act of modeling becomes an act of analysis.

We applied that instrument to a substantial target: the OMG's Unified Architecture Framework (UAF), the standard that unifies the defense architecture frameworks (DoDAF, MODAF, NAF, DNDAF) into a single grid of viewpoints and aspects, used to plan by capability, trace strategy down to fielded resources, and reason about system-of-systems architectures. We rendered the UAF Domain Metamodel (DMM) as a faithful, platform-neutral ontology on [OML Code](/oml-code), our platform for building and analyzing models, where ontological analysis and AI work as complementary capabilities, and used it to cross-check every element and relationship against the normative UAF Modeling Language (UAFML) profile.

The method throughout is the same, and worth stating plainly: take the objectives UAF sets for *itself* (its stated intent, its core principles, its conformance goals) and use the ontological lens to see, faithfully, how well the artifacts line up with them. Two things are worth saying up front. UAF is a major, hard-won achievement, and a consensus standard that unifies several donor frameworks and reflects the input of many contributors, so a document born that way naturally carries some tension between viewpoints. A formal lens does not create those seams; it makes them visible, and sharing what it sees is meant as a service to everyone who relies on the standard. That is enough to fill a short series, one objective at a time, opening with the one that decides whether the lens belongs here at all.

## UAF was designed to be implemented as an ontology

The evidence comes from UAF itself, and it is explicit on two points.

First, the DMM, not the UAFML profile, is the primary artifact, and it is meant to travel beyond UML and SysML. The DMM is *"the basis for any implementation of UAF including non-UML/SysML implementations"* (§1.1). The stated intent is *"to provide a Domain MetaModel usable by non-UML/SysML tool vendors who may wish to implement the UAF within their own tool and metalanguage"* (§6.3). A non-UML implementation is not a workaround the standard tolerates; it is one the standard invites.

Second, and more telling, is where UAF's concepts come from. Its core principles record that the DMM is *"IDEAS Ontology driven"*, built on a simplified version of the International Defence Enterprise Architecture Specification, a formal, ontology-based foundation (§6.4). This is not a passing remark. It reaches all the way down into how the DMM classifies its own elements. The specification's diagram legend states plainly that *"the meaning of the element types in the UAF are based upon concepts put forth in the International Defence Enterprise Architecture Specification (IDEAS)"* (§7.3), and then lists those types:

- *"An **Individual** denotes a single instance of an element"*
- *"A **Type** denotes a set of Individuals"*
- *"A **Tuple** denotes a relationship that exists between elements"*

Those are ontological primitives (individuals, types, and relationships), not UML ones. UAF classifies every box in every diagram as one of them. Take `Exhibits`, the relationship that ties a capability to the thing that provides it: the DMM defines it as *"a tuple that exists between a CapableElement and a Capability"* (Figure 9-92), and gives it an attribute of its own, the environmental conditions under which the capability is met. A tuple like that is more than a link between two things; it is the relationship treated as a first-class object, an instance that stands for the relationship itself so that further statements can be made about it. That is what an ontology calls a *reified* relation, and in OML it maps directly onto a relation entity. There is nothing to translate; the DMM is already speaking the language.

Put those together and the framing shifts entirely. The UAFML profile is one realization of the DMM, expressed in UML; it is not the DMM. Rendering UAF as an ontology is not bolting a foreign paradigm onto a UML standard; it is returning the framework to the foundation it was drawn on, all the way down to its type system.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">The core idea</span>
Rendering a specification as an ontology is a form of analysis: the discipline forces its structure, and its faults, into the open. Applied to UAF, the first thing it reveals is that UAF was built for exactly this: IDEAS-ontology-driven down to its Individual/Type/Tuple element legend, and explicitly meant to be implemented beyond UML and SysML.
</aside>

That is why this series is titled *towards* an ontological implementation rather than merely *an* implementation. The findings ahead are not arguments against UAF; they are what a rigorous lens shows about the distance between what a standard *intends* and how its artifacts are currently *expressed*, a distance ontological analysis is uniquely good at measuring, and closing.

There is a portable lesson here, and it is the real point of this first part. When you want to understand what a modeling standard is *actually* made of, its commitments, its coherence, its fitness for a purpose, try rendering it as an ontology. The discipline answers quickly and unsentimentally: it tells you which concepts are solid, which relationships are underspecified, and where the standard's own words and artifacts have drifted apart. Ontological analysis is not only a way to *build* on a standard; it is one of the sharpest ways to *read* one. That UAF turns out to welcome the exercise, that its own foundation is an ontology, is the bonus. The technique would pay off even on a standard that resisted it.

*Curious how this analysis was done? [Explore OML Code](/oml-code), or [get in touch](/contact.html).*
