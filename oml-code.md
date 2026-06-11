---
layout: default
title: OML Code
permalink: /oml-code
header_image: "/assets/images/bg/banner-7.jpg"
description: "An intelligence-centric engineering platform built on Logic · AI · DevOps. Engineering models you can reason on and compute over."
---

<style>
    .oml-card-desc {
        font-size: 15px;
        line-height: 1.6;
    }
    .oml-hero-title-row {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 12px;
        margin-bottom: 8px;
    }
    .oml-hero-title-logo {
        max-height: 72px;
        width: auto;
        max-width: 100%;
    }
    @media (max-width: 767px) {
        .oml-hero-title-logo { max-height: 56px; }
    }
    .oml-capability-head {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    .oml-capability-icon {
        font-size: 24px;
        line-height: 1;
        margin-right: 10px;
        margin-top: 2px;
    }
    .oml-capability-head h5 {
        line-height: 1.3;
        margin-bottom: 0;
        flex: 1 1 auto;
    }
    .oml-capability-num {
        flex: 0 0 auto;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: #0fb9a8;
        margin-left: 8px;
        opacity: 0.85;
    }
    .oml-pillar {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1;
        padding: 5px 11px;
        border-radius: 999px;
        border: 1px solid rgba(16,26,46,0.12);
        background: #f4f8f8;
        white-space: nowrap;
        margin-top: 14px;
        margin-right: 4px;
    }
    .oml-pillar i {
        font-size: 12px;
    }
</style>

<style>
    .oml-hero-tagline {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 24px;
        line-height: 1.4;
        font-weight: 600;
        color: #fff;
        margin: 18px 0 16px;
        max-width: 720px;
    }
    .oml-hero-pills {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 22px;
    }
    .oml-hero-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #6ee7db;
        padding: 8px 18px;
        border-radius: 999px;
        border: 1px solid rgba(15, 185, 168, 0.5);
        background: rgba(15, 185, 168, 0.08);
        white-space: nowrap;
    }
    .oml-hero-pill.purple {
        color: #c4b5fd;
        border-color: rgba(139, 92, 246, 0.55);
        background: rgba(139, 92, 246, 0.1);
    }
    .oml-hero-sub {
        color: rgba(255, 255, 255, 0.65) !important;
        font-size: 17px;
        line-height: 1.7;
        max-width: 680px;
        margin-bottom: 0;
    }
    @media (max-width: 767px) {
        .oml-hero-tagline { font-size: 20px; }
    }
</style>

<section class="page-title bg-blue" style="padding: 200px 0 110px;">
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <div>
                    <div class="oml-hero-title-row">
                        <img src="/assets/images/oml-code.png" alt="OML Code" class="oml-hero-title-logo">
                        <h2 class="text-capitalize mb-0 text-lg text-white">{{ page.title }}</h2>
                    </div>
                    <p class="oml-hero-tagline">An <span class="gradient-text">intelligence-centric</span> engineering platform</p>
                    <div class="oml-hero-pills">
                        <span class="oml-hero-pill"><i class="ti-shield"></i> Logic</span>
                        <span class="oml-hero-pill purple"><i class="ti-bolt"></i> AI</span>
                        <span class="oml-hero-pill"><i class="ti-infinite"></i> DevOps</span>
                    </div>
                    <p class="oml-hero-sub">Engineering models you can reason on and compute over: knowledge captured formally, verified logically, exploited by AI, and operationalized with DevOps.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" style="padding-top: 50px; padding-bottom: 70px;">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center mb-4">
                <span class="eyebrow">Desktop &middot; Browser &middot; Cloud</span>
                <h3>Main Components</h3>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="card border-0 shadow-sm h-100 platform-card">
                    <div class="card-body d-flex align-items-start">
                        <img src="/assets/images/vs-code-ext.png" alt="VS Code Extension" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                        <div>
                            <h5 class="mb-2">VS Code Extension</h5>
                            <p class="mb-0 oml-card-desc">Rich OML authoring with language intelligence, validation, semantic services, and visual model exploration, on desktop or in the browser.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="card border-0 shadow-sm h-100 platform-card">
                    <div class="card-body d-flex align-items-start">
                        <img src="/assets/images/cli.png" alt="CLI" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                        <div>
                            <h5 class="mb-2">CLI</h5>
                            <p class="mb-0 oml-card-desc">Production CLI for lint, reason, query, render, and validation. The engine of automated CI/CD model pipelines.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-4">
                <div class="card border-0 shadow-sm h-100 platform-card">
                    <div class="card-body d-flex align-items-start">
                        <img src="/assets/images/mcp.svg" alt="MCP Server" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                        <div>
                            <h5 class="mb-2">MCP Server</h5>
                            <p class="mb-0 oml-card-desc">OML MCP server exposing modeling, reasoning, and query tools to AI assistants and agentic workflows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <div class="text-center mb-5">
                <span class="eyebrow">The Architecture</span>
                <h3>Nine Capabilities of an Intelligence-Centric Platform</h3>
                <p class="text-muted mb-0">Everything systems engineers need to create, trust, exploit, and operationalize engineering knowledge.</p>
            </div>

            <div class="row">
                <!-- 01 Formal Knowledge Representation -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-write oml-capability-icon"></i></div>
                                <h5>Formal Knowledge Representation</h5>
                                <span class="oml-capability-num">01</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Express knowledge in OML (Ontological Modeling Language): vocabularies define your DSLs, descriptions define your system models. Full SE expressivity, model-as-code textual syntax with synced graphical notation, compiling to W3C open standards.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-shield"></i> Logic</span></div>
                        </div>
                    </div>
                </div>

                <!-- 02 Flexible Capture -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-pencil-alt oml-capability-icon"></i></div>
                                <h5>Flexible Capture</h5>
                                <span class="oml-capability-num">02</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Capture information the way you work: a rich textual editor, form-based user interfaces, file import, or a GenAI prompt. Every modality lands in the same formal model.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-shield"></i> Logic</span><span class="oml-pillar text-purple"><i class="ti-bolt"></i> AI</span></div>
                        </div>
                    </div>
                </div>

                <!-- 03 Automated Reasoning -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-check-box oml-capability-icon"></i></div>
                                <h5>Automated Reasoning</h5>
                                <span class="oml-capability-num">03</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Trust your model. Live, incremental entailment derivation infers what your model implies; on-demand consistency checking finds contradictions and explains exactly which statements cause them.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-shield"></i> Logic</span></div>
                        </div>
                    </div>
                </div>

                <!-- 04 Structured Querying -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-search oml-capability-icon"></i></div>
                                <h5>Structured Querying</h5>
                                <span class="oml-capability-num">04</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Retrieve what is asserted <em>and</em> what is entailed with SPARQL: SELECT for queries, ASK for validation, CONSTRUCT for transformation, DESCRIBE for exploration. Reasoning makes complex queries simple.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-shield"></i> Logic</span></div>
                        </div>
                    </div>
                </div>

                <!-- 05 Declarative Methodology -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-map-alt oml-capability-icon"></i></div>
                                <h5>Declarative Methodology</h5>
                                <span class="oml-capability-num">05</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Be guided by a method: vocabularies, patterns, visualizations, and analyses defined declaratively, adaptable, and evolvable. Communicate informally too, with documents and mind maps linked to model information.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-shield"></i> Logic</span></div>
                        </div>
                    </div>
                </div>

                <!-- 06 AI Integration -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-purple"><i class="ti-comments oml-capability-icon"></i></div>
                                <h5>AI Integration</h5>
                                <span class="oml-capability-num">06</span>
                            </div>
                            <p class="mb-0 oml-card-desc">An AI agent with perfect knowledge of OML: it queries assertions and entailments, updates the model following your methodology, and validates and reasons on it, with proprietary or open-source LLMs.</p>
                            <div class="mt-auto"><span class="oml-pillar text-purple"><i class="ti-bolt"></i> AI</span></div>
                        </div>
                    </div>
                </div>

                <!-- 07 Code Generation -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-export oml-capability-icon"></i></div>
                                <h5>Code Generation</h5>
                                <span class="oml-capability-num">07</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Generate canonical artifacts with fully declarative generators: extract information, project it, instantiate text templates. Generators are themselves models: componentizable, extensible, and queryable.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-infinite"></i> DevOps</span></div>
                        </div>
                    </div>
                </div>

                <!-- 08 Collaboration Support -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-user oml-capability-icon"></i></div>
                                <h5>Collaboration Support</h5>
                                <span class="oml-capability-num">08</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Collaborate versioned (pull → edit → push) or live (edit concurrently). Review changes with text-based or viewpoint-based model diffs.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-infinite"></i> DevOps</span></div>
                        </div>
                    </div>
                </div>

                <!-- 09 DevOps Integration -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="text-teal"><i class="ti-world oml-capability-icon"></i></div>
                                <h5>DevOps Integration</h5>
                                <span class="oml-capability-num">09</span>
                            </div>
                            <p class="mb-0 oml-card-desc">Git-native version control with baselines and cross-repo federation. CI on every commit (lint → validate → reason → analyze) and CD with semantic version tags, publishing packages and gate products to your project portals.</p>
                            <div class="mt-auto"><span class="oml-pillar text-teal"><i class="ti-infinite"></i> DevOps</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row align-items-center mb-5">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <span class="eyebrow">Why It Matters</span>
                <h3 class="mb-3">From Information Capture to Engineering Intelligence</h3>
                <p class="mb-3">Complexity has outgrown documents: engineering artifacts disagree, the impact of change is invisible, knowledge is trapped in individuals, and rework is the norm. Interface errors caught late cost 10&ndash;100&times; more to fix.</p>
                <p class="mb-0">OML Code closes the gap. AI needs structured, queryable knowledge to be trustworthy, and a formal model is exactly what it requires. Build your intelligence-centric SE methodology on top of OML Code.</p>
            </div>
            <div class="col-lg-6">
                <div class="bg-light rounded border p-4">
                    <h5 class="mb-3">What Teams Gain</h5>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><i class="ti-check text-teal mr-2"></i> Models they can <strong>create</strong> efficiently, consistently, and accessibly</li>
                        <li class="mb-2"><i class="ti-check text-teal mr-2"></i> Models they can <strong>trust</strong>: verified correct and consistent by reasoning</li>
                        <li class="mb-2"><i class="ti-check text-teal mr-2"></i> Models they can <strong>exploit</strong>: querying, impact analysis, reuse, AI augmentation</li>
                        <li class="mb-0"><i class="ti-check text-teal mr-2"></i> Models they can <strong>operationalize</strong>: collaboration, DevOps, lifecycle continuity</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="bg-blue rounded p-5 text-center text-white">
                    <h3 class="text-white mb-3">Experience the OML Code Platform</h3>
                    <p class="mb-4 text-white-50">The future of MBSE is not just creating models. It is enabling knowledge to ground engineering intelligence. OML Code is available through enterprise subscription plans.</p>
                    <a href="/contact.html" class="btn btn-primary mr-2 mb-2">Request a Demo</a>
                    <a href="/marketplace" class="btn btn-outline-light mb-2">Explore Marketplace</a>
                </div>
            </div>
        </div>
    </div>
</section>
