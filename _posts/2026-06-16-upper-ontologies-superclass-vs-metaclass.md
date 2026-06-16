---
layout: post
title: "Two Kinds of Upper Ontology: Superclass or Metaclass?"
date: 2026-06-16 10:00:00 -0700
author: "Maged Elaasar"
categories: [insights]
tags: [ontologies, upper ontology, foundational ontology, OWL, OML, metaclass, punning, metamodeling]
post_image: "/assets/images/blog/superclass-vs-metaclass.svg"
description: "An upper ontology's classes can be meant to be inherited by your domain classes, or to act as metaclasses that classify them. They look similar but mean very different things, and choosing the wrong one quietly breaks your reasoning. Here is how to tell them apart."
---

Every serious modeling effort eventually adopts an upper ontology: a small, foundational vocabulary of top-level classes that domain ontologies build on so they stay consistent and interoperable. What is far less obvious is that there are two fundamentally different ways an upper ontology's classes can be designed to be used, and they are easy to confuse because they often look almost identical on the page.

In one, the upper classes are meant to be **extended by inheritance**: your domain classes are *subclasses* of them. In the other, the upper classes act as **metaclasses**: your domain classes are *instances* of them. Same upper ontology shape, completely different logical commitment. Picking the wrong one, or worse, mixing them without realizing it, quietly undermines the reasoning you adopted an upper ontology to get. The distinction is worth getting exactly right.

## The same picture, two different meanings

Suppose your upper ontology offers a class and you want to place the domain concept `Dog` under it. There are two things you could mean.

You could mean that **a dog is a kind of that class**. Every individual dog is an instance of `Dog`, and because `Dog` is a subclass of the upper class, every dog is an instance of that class too. The upper class is a **superclass**, and `Dog` *inherits* from it.

Or you could mean that **the concept `Dog` is one of the things that class classifies**. Not the individual dogs, but `Dog` itself, the class, treated as a member of the upper class. For that to make sense the upper class must be a class *whose instances are themselves classes*. That is a **metaclass**, and `Dog` is one of its *instances*.

Both place `Dog` "under" a top-level term. But one is a statement about every dog, and the other is a statement about the idea of doghood. Conflate them and you will draw conclusions the model never actually licensed.

## Superclasses: one hierarchy, classification flows down

An inheritance-style upper ontology puts its classes at the top of a single subsumption hierarchy. The upper classes and your domain classes sit at the *same logical level*, they are all classes, and your domain classes specialize the upper ones. Individuals live one step below.

```
PhysicalObject
  └─ Animal        (subclass of)
       └─ Dog      (subclass of)
            └─ Fido (instance of)
```

The defining property is that **classification flows downward to individuals**. Because `Dog` is a subclass of `PhysicalObject`, the reasoner concludes, with no further input, that Fido is a physical object. Everything lives in one taxonomy, the semantics are clean, and subsumption does the work. This is the model behind foundational ontologies like BFO and the broad family of OBO ontologies in biomedicine: you extend them by declaring your domain classes as subclasses, and the top-level commitments propagate automatically to everything underneath.

The cost is that you cannot easily say anything *about* the concepts themselves. "`Dog` is a natural kind, whereas `Customer` is merely a role something plays" is a claim about the two classes as objects, not about their members, and a pure subsumption hierarchy has nowhere to put it.

## Metaclasses: a level up, classification of the concepts

A metaclass-style upper ontology puts its classes *one level up*. Their instances are not individuals like Fido; their instances are classes like `Dog`. The upper classes classify your domain concepts by what kind of concept each one is.

```
NaturalKind   Role        Phase     ← metaclasses (their instances are classes)
   ▲            ▲
   │ instance   │ instance
  Dog        Customer                ← domain classes (still classify individuals below)
   ▲
   │ instance
  Fido
```

`NaturalKind`, `Role`, and `Phase` describe *what kind of concept* something is, the distinctions at the heart of foundational ontologies in the UFO and OntoUML tradition. Its lightweight OWL realization, **gUFO**, makes the pattern concrete: you classify a domain class such as `Person` as an instance of `gufo:Kind`, `Role`, or `Phase`. Here `Dog` plays two roles at once: it is a class, of which Fido is an instance, and an instance, of the metaclass `NaturalKind`. This buys you genuine two-level metamodeling: you can attach metadata to concepts, distinguish kinds from roles from phases, and reason about the *structure of your vocabulary* without disturbing the instance-level hierarchy at all.

## Where punning comes in

This is exactly where the OWL mechanics matter. OWL 2 DL is two-sorted: it keeps the universe of classes and the universe of individuals strictly separated, which is part of what keeps reasoning decidable. A true metaclass, a class that genuinely has other classes as its instances, lives in **OWL Full** (and in RDFS), and it costs you decidability and most off-the-shelf DL reasoners.

OWL 2 DL recovers the metaclass *pattern* without paying that price through **punning**: it lets a single name, `Dog`, be used both as a class and as an individual, and treats the two uses as distinct entities that merely share an IRI. So when you assert that `Dog` is an instance of `NaturalKind`, you are talking about the *individual* named `Dog`, while Fido is still an instance of the *class* named `Dog`. Punning is not the distinction itself; it is the mechanism that lets an upper class act as a metaclass while you stay inside decidable OWL 2 DL.

## The consequence that actually bites

Here is what matters most, and the part people miss:

- With **superclasses**, asserting `Dog ⊑ Animal` *entails facts about every dog*. Say it, and the reasoner now knows Fido is an animal. Consequences propagate downward to individuals.
- With **metaclasses via punning**, asserting `Dog : NaturalKind` entails *nothing whatsoever about any individual dog*. Because punning treats the class `Dog` and the individual `Dog` as separate entities that only share a name, a classification you make at the meta level does not, and cannot, reach the members below.

That asymmetry is the whole decision. If you want a top-level commitment to flow to instances, "everything below `PhysicalObject` is a physical object," the upper classes must be superclasses; using them as metaclasses will silently give you nothing at the instance level. If you want to characterize the concepts themselves without entailing anything about their members, the upper classes must be metaclasses; making them superclasses would force commitments you never intended onto every individual.

| If you want… | The upper classes should be… |
|---|---|
| Classification to propagate to instances; one monotonic subsumption hierarchy | **Superclasses** (extended by inheritance) |
| To characterize the *kinds of concepts* (kind vs. role vs. phase, powertypes, multi-level types) without entailing anything about instances | **Metaclasses** (realized via punning) |

## How to tell which one you are holding

Before you build on any upper ontology, ask one question: **are its top-level terms meant to be your superclasses, or your metaclasses?**

If the documentation tells you to declare your domain concepts as *subclasses* of its classes, and expects those classes to constrain every individual, the upper classes are superclasses. If it tells you to *type* your concepts as instances of its classes, leaning on punning to do so, they are metaclasses. Use inheritance when you mean it, metaclasses when you mean that, and never let a tool blur the two on your behalf, because the reasoner will not warn you when a meta-level statement quietly fails to reach the instances you assumed it would.

## Where OML lands

This is precisely the kind of discipline a real modeling language should make explicit rather than leave to convention. In [OML](/oml-code), specialization is a first-class construct: when you mean inheritance, you say so, and the closed, deterministic semantics make the downward consequences predictable and checkable. Today, when you want to say something *about* a concept rather than its members, OML offers annotations on classes, a deliberate, well-scoped way to attach metadata without pretending it carries instance-level consequences.

The metaclass pattern proper is something we are evaluating, and we do it the way we grow every OML feature: from a concrete use case, not from a desire for expressivity on its own. The use case here is metamodeling, and the question we are working through, with the UFO team, is what analytical value it actually brings to a domain vocabulary that adopts it, using gUFO as the worked example. If classifying concepts as kinds, roles, and phases lets us check a vocabulary for modeling errors, surface structural patterns, and reason about its design, then punning earns its place in the language. That assessment is still in progress, and the point of this article is exactly why we are being careful with it. Metaclasses and inheritance must stay distinct in both the language and the engineer's mind, because the reasoning consequences are not interchangeable.

Upper ontologies are supposed to make large models more coherent. They only deliver on that promise when everyone building on them agrees on which of these two things they are doing.

Want to see how OML makes these modeling commitments explicit and machine-checkable? [Explore OML Code](/oml-code), or [see it in action](/contact.html).
