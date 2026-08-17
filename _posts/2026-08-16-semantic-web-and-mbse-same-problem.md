---
layout: post
title: "The Semantic Web and MBSE Are Solving the Same Problem"
date: 2026-08-16 08:00:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [Semantic Web, ontologies, OML, MBSE, knowledge graphs, OWL, SPARQL, ISWC]
post_image: "/assets/images/blog/semantic-web-and-mbse.svg"
image: "/assets/images/blog/semantic-web-and-mbse-social.png"
description: "Two communities have spent two decades building machinery for the same thing: describing a domain precisely enough that software can reason about it. Two obstacles have kept them apart, and our ISWC 2026 In Use paper is about what it took to remove them."
---

Two communities have spent the better part of two decades building machinery for the same job: describing a domain precisely enough that software can reason about it, and keeping those descriptions consistent as they grow. One calls the artifacts ontologies and knowledge graphs. The other calls them models. They publish in different venues, use different tools, and have shared surprisingly little.

The Semantic Web community brought standards and everything that grows around standards. RDF gives a uniform way to state facts, OWL gives them a formal semantics with reasoners that decide entailment and consistency, SPARQL queries a graph without a schema-specific API, and data from different sources merges because identity is global by construction. Systems engineering brought the opposite balance: languages built for engineers, a discipline of decomposition and traceability, and decades of practice on real programs.

The obvious move is to bring Semantic Web technology into systems engineering. It has been tried for years, and adoption has stayed thin. The interesting question is why.

## Two specific obstacles

In our work on the [Ontological Modeling Language](/oml-code) we came to see it as two concrete problems rather than one vague cultural gap.

The first is the **lack of rigorous semantics for SE models**. A model in a typical MBSE tool means whatever the tool and the local convention say it means. That is enough to draw diagrams and pass reviews, and nowhere near enough to compute over. Without a formal semantics there is no notion of a model being consistent or inconsistent as a matter of logic, only as a matter of opinion, which is why so much MBSE tooling ends up as exports, adapters, and translation layers where meaning quietly degrades.

The second is the **lack of an established methodology for using ontologies in SE**. This one gets less attention and is arguably the bigger barrier. Handing an engineering organization OWL and a reasoner is like handing someone a type system and wishing them luck writing a compiler. What is missing is the practice: how to structure vocabularies, how to separate the description of a discipline from the description of a system, how to organize a workspace so that many engineers can work in it, how to run all of it in a build. Systems engineering also has real requirements on tooling, and those requirements have not historically been what ontology tooling optimizes for.

Neither obstacle is conceptual. Nothing in a systems model resists being written as a graph of typed entities and relations, because that is essentially what it already is. The obstacles are about rigor and about practice, and both had to be addressed before any of the standards could pay off in this field.

## What OML is

OML is an ontology description language that comes from applying ontological modeling principles inside systems engineering rather than importing them from outside it. It gives engineers a textual, modular syntax with the affordances they expect: a workspace that lives in Git, imports and namespaces, review in pull requests, builds in CI. Underneath, it is [a formal knowledge representation](/oml-code/capabilities/formal-knowledge-representation) with an OWL semantics, so an OML model is a knowledge graph in the strict sense rather than by analogy.

That has two consequences worth separating.

[Automated reasoning](/oml-code/capabilities/automated-reasoning) applies directly to engineering models. Consistency checking, classification, and entailment are not features someone implements per tool; they follow from the semantics, and a description-logic reasoner supplies them. A model that contradicts its own vocabulary is caught as a logical fact, not as a lint rule someone remembered to write.

And the Semantic Web ecosystem becomes available downstream. [SPARQL](/oml-code/capabilities/structured-querying) queries an engineering model the way it queries any other graph. Standard reasoners, validators, and triple stores work without a bespoke connector. Integrating with another discipline's data stops being an export-format negotiation and becomes a matter of aligning vocabularies, which is a modeling problem this community already knows how to work on.

The methodology matters as much as the language. Knowing that your models could be ontologies helps nobody on a Tuesday. Knowing how to layer vocabularies, where the boundary between a discipline's concepts and a program's instances belongs, and what the build should check on every commit is what makes the approach survive contact with a real program.

## Where it has been used

The part of the paper we expect the Semantic Web audience to care about most is not the language design, it is the evidence. OML is in use on projects at NASA, JAXA, Leonardo, and in academia. These are not demonstrations built to make a point; they are programs with schedules, and they exercise the language, the methodology, and the tooling together.

That is also why this belongs in the In Use track rather than a research track. The claim is not that the two stacks could be joined in principle. It is that joining them holds up on real engineering work, and that there is now enough practice on both sides for the exchange to run in both directions: ontology practice sharpening how systems get modeled, and hard-won engineering requirements telling the Semantic Web community what production tooling has to survive.

## The paper

**Bridging the Semantic Web and Model-Based Systems Engineering with the Ontological Modeling Language**, written with Bentley Oakes, Eduard Kamburjan, Mohammad Hamdaqa, and Abdelwahab Hamou-Lhadj, has been accepted to the In Use track at [ISWC 2026](https://iswc2026.semanticweb.org/) in Bari, Italy, 25 to 29 October 2026. It walks through the OML principles on a systems engineering example, lays out the methodology and tooling around the language, and reports on where it is being used today.

If you are at ISWC, come find us. If you would rather see it running first, [talk to us](/contact.html).
