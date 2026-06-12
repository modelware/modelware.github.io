---
layout: capability
title: Structured Querying
order: 4
icon: ti-search
pillars: [logic]
excerpt: "Ask real engineering questions with SPARQL, answered over asserted and inferred knowledge."
summary: "Ask your model real engineering questions and get complete answers, covering not just what was asserted but everything the reasoner entailed. Complex questions become simple queries."
image: /assets/images/capabilities/posters/structured-querying.jpg
video: /assets/images/capabilities/structured-querying.mp4
gifs:
  - src: /assets/images/capabilities/structured-querying.mp4
    caption: "Running SPARQL queries over the model: retrieving asserted and entailed knowledge together, with results you can act on."
---

Every program runs on questions. Which interfaces are affected by this requirement change? What is the total mass of this assembly? Which components have no verification coverage? In document-centric engineering, answering these takes days of manual digging. In OML Code, it takes a query.

OML Code uses SPARQL, the W3C standard query language, and applies it to everything the model knows: SELECT to retrieve, ASK to validate, CONSTRUCT to transform, and DESCRIBE to explore. Because queries run over assertions and entailments together, the reasoner does the hard work for you. A mass rollup does not care whether engineers asserted contains or isContainedIn; the inferred knowledge closes the gap, and the query stays simple.

#### What your team gets

- Engineering questions answered in seconds, with results grounded in verified knowledge
- Impact analysis that traces dependencies across the whole model, not one document
- Validation rules expressed as queries and run automatically, on demand or in CI
- Transformations and reports derived from the model instead of maintained by hand

When the model becomes the single source of truth you can interrogate, meetings get shorter and decisions get sharper.

Bring your hardest engineering question to a demo. We like those.
