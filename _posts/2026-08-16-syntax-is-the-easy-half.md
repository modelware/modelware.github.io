---
layout: post
title: "Syntax Is the Easy Half"
date: 2026-08-16 09:30:00 +0300
author: "Maged Elaasar"
categories: [insights]
tags: [AI, LLM, MCP, SHACL, modeling languages, OML, MBSE, methodology, MDE Intelligence]
post_image: "/assets/images/blog/syntax-is-the-easy-half.svg"
image: "/assets/images/blog/syntax-is-the-easy-half-social.png"
description: "An assistant that has read little of your modeling language will still produce something that parses. Our MDE Intelligence 2026 paper measures the harder property, method compliance, and finds that deterministic scaffolding matters most exactly where generation is least reliable."
---

Ask a general-purpose assistant for a Python function and you get code shaped by millions of examples of how Python is actually written. Ask it for a model in a language used by a few thousand engineers worldwide and you get something that looks like the language. It parses. It uses the right keywords. And it is often wrong in a way no grammar can catch.

Most engineering modeling languages are low-resource in this sense: too little public text for a model to have absorbed how they are used. Our paper at MDE Intelligence 2026 is about how to evaluate AI assistance in that setting, and what an architecture has to do to earn a good score.

## Two kinds of wrong

The first kind is syntactic. The output does not parse, invents a keyword, or breaks the type rules. This is annoying but cheap: a parser catches it immediately, the assistant can be handed the error, and the loop converges.

The second kind is methodological. The output parses cleanly and is entirely valid as far as the language is concerned, yet it is not how anyone in this discipline builds a model. A concept is introduced where an existing one from the shared vocabulary should have been reused. A relationship is asserted where the method says it must be derived. Structure appears in a place the method prescribes differently.

Nothing flags any of it. The model is well-formed and wrong, and the cost lands later, when someone runs an analysis over it or tries to merge it with a neighbouring model. This second kind is the expensive one, and scarcity of training data produces exactly it: the assistant has seen enough of the language to imitate its surface, nowhere near enough to have internalized its practice.

So the interesting question is not whether an assistant can produce parseable output. It is whether the output complies with the method, and whether anyone is measuring that.

## Making the method something a machine can check

Our answer starts by declining to trust the model with the keys.

The architecture keeps the LLM as an **intent interpreter**. It reads what the engineer wants and decides what should happen, but it does not write the model. Every model manipulation is routed through validated [MCP](/oml-code/components/mcp-server) tools that expose the same write operations the OML IDE uses. The assistant cannot produce a malformed edit, because it is not producing edits at all; it is calling operations that were already correct before it arrived. Syntax stops being a thing you evaluate and becomes a thing the architecture guarantees.

That leaves the methodological half, and this is where the [declarative methodology](/oml-code/capabilities/declarative-methodology) does the work. We instantiated the study on Sierra, a systems engineering methodology defined as a DSL within [OML](/oml-code). It is worth pausing on that relationship: OML functions as a meta-language for building ontological schemas, roughly the way Django sits atop a general-purpose language. Sierra's constraints are then encoded as a SHACL shape catalog, so "follows the method" becomes a property that can be evaluated the same way every time, rather than a reviewer's sense that this is not how we do things.

## Measuring it honestly

Evaluation is grounded in the publicly available FireForce VI aerospace case study, with tasks derived directly from its documentation across three difficulty tiers: from granular single-relation assertions at one end, to open-ended whole-description modeling from raw domain text at the other. Every task runs with and without tool augmentation, and with and without workspace example files, with a frontier-model baseline on the hardest tier.

We report three numbers: syntax accuracy, method compliance, and API cost. The middle one is the argument. Method compliance is a critical but underexplored dimension of MDE intelligence evaluation, and a field that measures only syntactic validity will keep declaring victory on the easy half of the problem. Cost belongs in the table too, because an approach that is only affordable in a paper is not an approach.

## What we found

Tool augmentation helps most at the higher difficulty levels.

That result is worth stating carefully, because the naive expectation runs the other way: you might assume scaffolding is training wheels that matter most for simple tasks and get in the way of sophisticated ones. The opposite holds. On a single-relation assertion, a capable model often gets there unaided. On open-ended modeling from raw domain text, where the search space is large and there is no local signal telling the model it has drifted from the method, deterministic scaffolding is what keeps the output usable.

Put the other way around: **deterministic scaffolding matters most precisely where probabilistic generation is least reliable**. That is a useful design principle well beyond this study. The instinct to reach for a bigger model on the hard tasks is often worse value than the instinct to give the model firmer ground to stand on, in the form of validated tools and machine-checkable rules.

It also suggests that a low-resource language does not have to stay information-poor. It lacks examples, but it can be rich in explicit structure, and explicit structure is something the architecture can enforce and the evaluation can measure. Scarcity of data is partly compensable by density of specification, which is the whole bet behind [AI integration](/oml-code/capabilities/ai-integration) in OML Code.

The complementary question, whether to teach the model the language rather than scaffold around it, is one we took up separately at CSER 2026 in *Large Language Models for Systems and Ontological Modeling: Fine-tuning and Evaluation*, which weighs fine-tuning for a small modeling language against using a general-purpose model. Both papers are on our [publications page](/research/publications/).

## The paper

**Beyond Syntax: Method-Compliant AI Assistance for Low-Resource Modeling Languages**, written with Sokhna Amar and Sambit Bhattacharya, has been accepted at [MDE Intelligence 2026](https://mde-intelligence.github.io/), the 8th Workshop on Artificial Intelligence and Model-driven Engineering, co-located with [MODELS 2026](https://conf.researchr.org/home/models-2026) in Málaga this October. Fittingly, this year's workshop theme is assessing the performance of MDE intelligence approaches, which is precisely the question the work takes up: once you accept that parsing is not the bar, what is, and how do you measure it?

Details are on the [news page](/news/mdei2026). If you are working on the same problem, or living with the second kind of wrong, [we would like to hear about it](/contact.html).
