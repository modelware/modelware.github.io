---
layout: raise
title: "Bim Hub"
categories: ["Done"]
feature: "/assets/images/raise/bim-hub.png"
---

#### Description

BIM (Building Information Model) is a specification used to capture the multidisciplinary design of a building. In a construction project, a developer creates a BIM of the building they intend to construct and sends it to a permit authority to review it againt the local building code, get feedback, and eventually receive a building permit. This process is currently lengthy and costly for both the developer and the authority. A developer typically waits a long time for the review process to conclude and sometimes, being impatient, starts construction before approval only to undo it later. For an authority, they usually have only limited resources to review a huge backlog of submitted designs, and the review process itself involves many experts from multiple disciplines taking turns reviewing, mostly manually, hence becomes tedious and error prone.

The BimHub project intends to address the problem by developing an enterprise application that faciliates the automated analysis and peer review processes of BIM models. The application can be used by both developers and building authorities to streamline the review process. Developers can get automated feedback on their BIMs before they submit to a authority, and building authorities will get the review process streamlined by performing the bulk of the models analysis automatically leaving the experts to perform a much lighter hence expedient review.

The technical approach involves managing BIM models in Git repositoies, in IFC format exported from BIM tools, and upon change, translating them to [OML](http://www.opencaesar.io/oml/) ontologies, loading them to a semantic graph database, querying them with SPARQL, analyzing them with (discipline-specific) rules, and producing web-based views to support peer review.

The project will build a case study involving analyzing a specific building model against a specific building code.

#### Team
- [Maged Elaasar](/maged-elaasar.html), Ph.D., Modelware (PI)
- [Shawn Sun](https://catalog.csun.edu/academics/cecm/faculty/sun-chuanbing-shawn/), Ph.D., CSUN (Co-I)
- [Binbing Li](https://www.ecs.csun.edu/~bingbing/), Ph.D., CSUN (Co-I)
- [Sumamaya Waseem](https://www.linkedin.com/in/summayah-waseem-7264bb1b4), CSUN (M.Sc. Student)

#### Results

Click on the video below to see a demo:

{% include youtube.html id="mUxFWKNBabc" %}

#### Sponsors

<a href="https://arcs.center/"><img src="https://arcs.center/wp-content/uploads/2021/03/arcs.jpg" alt="ARCS at CSUN" width="300"/></a>