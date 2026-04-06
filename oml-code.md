---
layout: default
title: OML Code
permalink: /oml-code
header_image: "/assets/images/bg/banner-7.jpg"
description: "A framework for rigorous, scalable, and AI-enabled ontological modeling and analysis using Ontological Modeling Language"
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
    }
</style>

<section class="page-title header-padding" style="background-image:url({{ page.header_image | relative_url }});background-size:cover">
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <div>
                    <div class="oml-hero-title-row">
                        <img src="/assets/images/oml-code.png" alt="OML Code" class="oml-hero-title-logo">
                        <h2 class="text-capitalize mb-0 text-lg text-white">{{ page.title }}</h2>
                    </div>
                    <p class="text-white page-subtitle mb-0">{{ page.description }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" style="padding-top: 20px; padding-bottom: 70px;">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center mb-4">
                <h3>Main Components</h3>
            </div>

            <div class="col-lg-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body d-flex align-items-start">
                        <img src="/assets/images/vs-code-ext.png" alt="VS Code Extension" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                        <div>
                            <h5 class="mb-2">VS Code Extension</h5>
                            <p class="mb-0 oml-card-desc">Rich OML authoring with language intelligence, validation, semantic services, and visual model exploration.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body d-flex align-items-start">
                        <img src="/assets/images/cli.png" alt="CLI" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                        <div>
                            <h5 class="mb-2">CLI</h5>
                            <p class="mb-0 oml-card-desc">Production CLI for lint, compile/reason, markdown render, and validation in CI/CD pipelines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row mb-5">
            <div class="col-12 text-center mb-4">
                <h3>Core Capabilities</h3>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-write oml-capability-icon"></i></div>
                            <h5>Intelligent OML Authoring</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Rich editor workflows with validation, guidance, and acceleration for high-velocity ontology engineering.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-light-bulb oml-capability-icon"></i></div>
                            <h5>Semantic Mapping &amp; Interoperability</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Map OML to OWL/RDF and keep models interoperable across engineering tools and enterprise ecosystems.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-check-box oml-capability-icon"></i></div>
                            <h5>Formal Verification &amp; Reasoning</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Continuously verify consistency and constraints with integrated reasoning and SHACL validation.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-search oml-capability-icon"></i></div>
                            <h5>Query-Driven Analytics</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Use query workflows to surface actionable insights and support evidence-based engineering decisions.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-layout oml-capability-icon"></i></div>
                            <h5>Executable Method Notebooks</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Deliver methodology steps as connected, runnable notebooks for guided execution and analysis.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-world oml-capability-icon"></i></div>
                            <h5>DevOps &amp; CI/CD Automation</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Operationalize lint, compile, reason, validate, and publish workflows through repeatable automation pipelines.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-user oml-capability-icon"></i></div>
                            <h5>Collaborative Engineering</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Support asynchronous Git collaboration and synchronous Live Share sessions for mentoring and rapid troubleshooting.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-link oml-capability-icon"></i></div>
                            <h5>Methodology Lifecycle Management</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Select, compose, and evolve methodologies using reusable assets, examples, and organizational patterns.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-desktop oml-capability-icon"></i></div>
                            <h5>Web-Based Modeling Workspace</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Enable secure browser-based modeling for remote work, onboarding, tutorials, and zero-footprint demos.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-comments oml-capability-icon"></i></div>
                            <h5>GenAI Co-Modeling Assistant</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Use natural-language assistance to accelerate authoring, querying, and model exploration tasks.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-export oml-capability-icon"></i></div>
                            <h5>View-Based Data Exchange</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Round-trip modeling views through CSV, JSON, and SVG for integration with external analysis tools.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="oml-capability-head">
                            <div class="text-primary"><i class="ti-agenda oml-capability-icon"></i></div>
                            <h5>Change Intelligence for Reviews</h5>
                        </div>
                        <p class="mb-0 oml-card-desc">Generate AI-assisted change summaries to streamline pull-request reviews and team decision-making.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row align-items-center mb-5">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h3 class="mb-3">From Modeling to Operational Insight</h3>
                <p class="mb-3">OML Code unifies language tooling, semantic analytics, and delivery automation so teams can engineer with clarity at enterprise scale.</p>
                <p class="mb-0">Whether you are defining frameworks, validating model integrity, or publishing model-backed documentation, OML Code provides one coherent environment.</p>
            </div>
            <div class="col-lg-6">
                <div class="bg-light rounded border p-4">
                    <h5 class="mb-3">What Leaders Value</h5>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><i class="ti-check text-primary mr-2"></i> Faster onboarding to formal modeling practices</li>
                        <li class="mb-2"><i class="ti-check text-primary mr-2"></i> Higher confidence through semantic and constraint checks</li>
                        <li class="mb-2"><i class="ti-check text-primary mr-2"></i> Stronger alignment across engineering disciplines</li>
                        <li class="mb-0"><i class="ti-check text-primary mr-2"></i> Production-ready workflows from authoring to DevOps delivery</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="bg-secondary rounded p-5 text-center text-white">
                    <h3 class="text-white mb-3">Experience the OML Code Framework</h3>
                    <p class="mb-4">OML Code is available through enterprise subscription plans. To discuss subscription options, licensing, and onboarding, contact us.</p>
                    <a href="/contact.html" class="btn btn-primary mr-2 mb-2">Ask About Subscription</a>
                    <a href="/marketplace" class="btn btn-outline-light mb-2">Explore Marketplace</a>
                </div>
            </div>
        </div>
    </div>
</section>
