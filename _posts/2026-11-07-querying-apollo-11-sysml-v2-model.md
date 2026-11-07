---
layout: post
title: "Apollo 11 in SysML v2: What a Model Says When You Can Query It"
date: 2026-11-07 06:00:00 -0800
author: "Maged Elaasar"
categories: [insights]
tags: [SysML v2, MBSE, SPARQL, Sysight, systems engineering, requirements, model quality]
post_image: "/assets/images/blog/apollo-11-sysml-v2-sysight.png"
image: "/assets/images/blog/apollo-11-sysml-v2-sysight.png"
description: "We took Airbus's open SysML v2 model of Apollo 11 and queried it with SPARQL using Sysight. The result is a ten-page engineering dashboard, from mission overview to requirements traceability to model quality, computed from the model on every commit."
---

A SysML model is a large amount of engineering knowledge stored in a form that is hard to look at. Diagrams show a slice at a time, and a slice chosen by whoever drew it. The questions systems engineers actually ask cut across those slices: which requirements have nothing satisfying them, how much Δv each maneuver needs and which stage provides it, what a stakeholder need turns into three levels down, how much of the model is documented at all.

To see how far you can get by simply *asking* a model those questions, we took the open SysML v2 model of Apollo 11 published by Airbus and explored it with [Sysight](/sysight), our free SysML v2 tool. The answers became a ten-page engineering dashboard, and every number, table and chart on it is computed from the model.

<aside class="axiom-aside" markdown="1">
<span class="axiom-aside-label">See it</span>
The model: [airbus/apollo-11-sysml-v2](https://github.com/airbus/apollo-11-sysml-v2). The dashboard: [modelware.io/apollo-11-sysml-v2](https://www.modelware.io/apollo-11-sysml-v2/). The tool: [Sysight](/sysight), free to use.
</aside>

## The model

The Apollo 11 model was built by Philipp Helle and Gerrit Schramm of Airbus Central R&T as a case study of SysML v2 and their five-layer CoSMA framework. It describes the first crewed lunar landing from the mission's purpose down to the Saturn V's engines: about 7,000 model elements, 294 requirements at four levels, 69 functions, 70 hardware types and the mission's 13 phases. Its README is candid that it is a scaffold, incomplete by design, and it invites others to critique and extend it. That openness is what made this exercise possible, and it is worth saying plainly: everything below depends on their work.

It is also a good test case precisely because it is realistic. It is big enough that nobody holds it in their head, and structured enough that the right questions have definite answers.

## From questions to queries

Sysight holds a SysML v2 model as a knowledge graph and answers [SPARQL](https://www.w3.org/TR/sparql11-query/) queries over it. SPARQL is a declarative query language: you describe the pattern you are looking for, and the engine finds every place in the model that matches. You do not write traversal code, and you do not export the model to a spreadsheet first.

Here is the query behind the requirements register, lightly trimmed. It asks for every requirement definition, its identifier and name, and its documentation and rationale where the model has them:

```sparql
SELECT ?req ?id ?name ?text ?rationale WHERE {
  ?req a sysml:RequirementDef ;
       kerml:declaredName ?name ;
       kerml:declaredShortName ?id .
  OPTIONAL { ?req kerml:ownedMember ?doc .
             ?doc a kerml:Doc ; kerml:body ?text }
  OPTIONAL { ?req kerml:ownedMember ?meta .
             ?meta kerml:typedBy/kerml:declaredName "Rationale" ;
                   kerml:ownedFeature/kerml:value ?rationale }
}
```

And here is the end-to-end trace, which starts at one stakeholder need and follows refinement down through capabilities and mission, functional and technical requirements, however many levels that takes:

```sparql
SELECT DISTINCT ?parent ?child WHERE {
  ?need kerml:declaredShortName "SHN-N005" .
  ?need (^kerml:supplier/kerml:client)* ?parent .
  ?parent ^kerml:supplier/kerml:client ?child .
}
```

Two things make queries like these short. First, the queries understand SysML: the endpoint applies the language's own subclass, sub-property and inverse axioms when it answers, so asking for features also finds parts and attributes, and `kerml:specializes+` follows typing, subsetting and redefinition alike. You write the question the simple way, and the semantics of SysML v2 fill in the rest. Second, Sysight extends SPARQL with functions that *evaluate* the model. `eval:value` computes an attribute or expression in the unit you ask for, with dimensions checked, and `eval:verdict` evaluates a requirement's constraints against the element that satisfies it. Computed masses, Δv figures and requirement verdicts come back as columns in the answer, next to the structural facts.

## What came out

The questions grouped naturally into the views a review board would expect, and each group became a page:

- **Mission overview**: the mission statement and goals, 7 stakeholders, 22 needs and the 25 capabilities that answer them.
- **Concept of operations**: the 13 mission phases from preparation to recovery and quarantine, their exit criteria, the trajectory with the Δv placed at each burn, and the 39 operations performed across the phases.
- **Mission timeline**: the flight as flown, with 59 recorded events from launch to splashdown at 191 h 46 min.
- **Functional and physical architecture**: the function breakdown, allocation to logical components, a system block diagram, the component and interface registers, and the as-flown configuration.
- **Technical budgets**: Δv by maneuver, then the propellant that Δv takes by the rocket equation, then dry and gross mass, power and reliability, with the calculations the model itself defines.
- **Requirements and traceability**: the four-level requirements tree, traceability matrices, coverage and gap reports, and an end-to-end trace from a stakeholder need to the hardware that satisfies it.
- **Programmatic resources**: a mission cost estimate.
- **Review notes** and a **model navigator**: a completeness scorecard per layer, an issue register, and the structure of the model's packages and files.

None of these pages is drawn by hand. They are Jupyter notebooks that query the model's Sysight server, and a GitHub Actions workflow re-runs them and republishes the site whenever the model changes. Change the model, and the dashboard follows.

## What the model can tell you about itself

The most interesting page to build was the one about the model itself. Once the model can be queried, quality stops being an impression and becomes a set of measurements.

The completeness scorecard checks each layer against questions such as: are the definitions documented, are the operations refined by functions, are the functions allocated, are the requirements satisfied. Much of it is reassuring. Every stakeholder need is refined by a capability, every requirement has an identifier and documentation, every functional and mission requirement has something satisfying it, and 89% of the model's definitions are documented.

Some of it is instructive. The model contains 272 `satisfy` relationships, and each one says that some operation, function or component satisfies some requirement. Sysight can evaluate a requirement's `require` constraints with the satisfying element bound as its subject. When we asked it to, it could decide none of the 272. Most of the requirements are stated only in prose, with no constraint to evaluate, and where a constraint exists, the actual value it compares is never bound to anything in the design. The thresholds are in the model; the design values they should be checked against are not.

That is not a criticism of a scaffold built to illustrate a framework. It is a precise statement of what the model's satisfy relationships currently are: allocations of responsibility, not evidence of verification. It is also a precise statement of what it would take to turn them into evidence. Bind each actual value to the satisfying element's attribute, and the same query turns 272 allocations into 272 checks that rerun on every commit. Finding that by reading diagrams would take days, and the answer would be out of date by the next merge. Asking for it takes one query.

The review notes page records each such finding with a suggested change and says whether it follows from the language or measures the model against a goal it does not claim. We offer it in the spirit the model's authors asked for, as input upstream.

## Why this matters

Three lessons from the exercise apply well beyond Apollo 11.

**A model is only as useful as the questions you can ask it.** SysML v2 gives us a precise, textual, standard language, which is a large step forward. But a model that can only be viewed through diagrams still keeps most of its value locked in. Queries are how that value gets out, in whatever view a given reader needs.

**Declarative queries are reviewable and reusable.** Each product on the dashboard is a query someone can read, check and challenge. The same queries run in VS Code while you edit, from the command line, in CI and from AI agents, and most of them would work unchanged on another CoSMA model. The engineering knowledge is in the model, and the knowledge of how to look at it is in the queries, versioned alongside.

**Quality becomes something you can measure continuously.** Coverage, traceability gaps and unverifiable requirements are not things to discover at a milestone review. They are queries, so they can fail a build.

This is the same idea that runs through our work on ontology-based engineering in [OML Code](/oml-code), where [querying the model](/oml-code/capabilities/structured-querying) is how engineering products are produced. Sysight brings it to SysML v2 models as they are written today.

## Try it on your model

[Sysight](/sysight) is free to use, at work too, on macOS, Linux and Windows. Install it, open a folder of `.sysml` files in VS Code or run `sysight check` in a terminal, and start asking your model questions. The [Apollo 11 dashboard](https://www.modelware.io/apollo-11-sysml-v2/) shows where those questions can lead.

If you are interested in the notebooks and queries behind the dashboard, or in applying this to your own SysML v2 models, [ask Modelware](/contact?topic=sysight).
