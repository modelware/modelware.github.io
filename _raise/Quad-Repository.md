---
layout: raise
title: "Quad Repository"
categories: ["Done"]
feature: "/assets/images/projects/quad-repository.png"
---

#### Description

The project aims to develop Quad, a version-controlled RDF repository. Quad will provide the following two features:

1. Offline RDF Repository with Git-like CLI

   Quad will support a git-like CLI for RDF repositories. Quad repositories can be created and manipulated on the file system using a git-like CLI (supporting commands like init, checkout, commit, push, pull, diff, log). In a working set, RDF graphs can be imported and/or modified with SPARQL Update, and queried with SPARQL queries all using CLI commands. When ready, a working dataset can be pushed to a remote quad repository, which can then be cloned by others. Facilities will also be provided to synchronize a git repository containing RDF files with a quad repository.

1. Online RDF Repository with Version-Aware SPARQL Endpoint

   Quad will support a version-aware read-only RDF database server with a SPARQL endpoint. Quad will allow you to query the database with SPARQL at any point in the commit history. There will be several ways to do so including specifying 'AS OF <version>` clause in the SPARQL query, specifying <version> as a parameter in the SPARQL endpoint URL, or by querying the history metadata directly.

#### Team

- [Maged Elaasar](/maged-elaasar.html), Ph.D., Modelware (PI)