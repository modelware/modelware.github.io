---
layout: default
title: OML Code
permalink: /oml-code
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
    .oml-cap-title-link {
        color: inherit;
    }
    .oml-cap-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 14px;
        margin-top: 16px;
        border-top: 1px solid #eef1f5;
    }
    .oml-foot-pillars span {
        display: inline-flex;
        align-items: center;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #8c97a5;
        margin-right: 12px;
        white-space: nowrap;
    }
    .oml-dot {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 6px;
    }
    .oml-dot.teal { background: #0fb9a8; }
    .oml-dot.purple { background: #8b5cf6; }
    .oml-cap-more {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 12.5px;
        font-weight: 600;
        color: #0fb9a8;
        white-space: nowrap;
        margin-left: 12px;
    }
    .oml-cap-more i {
        font-size: 10px;
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
                        <img src="/assets/images/oml-code-icon.svg" alt="OML Code" class="oml-hero-title-logo">
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
        <div class="row mb-5" id="components">
            <div class="col-12 text-center mb-4">
                <span class="eyebrow">Desktop &middot; Browser &middot; Cloud</span>
                <h3>Main Components</h3>
            </div>

            {% assign comps = site.components | sort: "order" %}
            {% for comp in comps %}
            <div class="col-lg-4 mb-4">
                <div class="card border-0 shadow-sm h-100 platform-card">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-start">
                            <img src="{{ comp.icon | relative_url }}" alt="{{ comp.title }}" style="width: 64px; height: 64px; object-fit: contain;" class="mr-3">
                            <div>
                                <h5 class="mb-2"><a href="{{ comp.url | relative_url }}" class="oml-cap-title-link">{{ comp.title }}</a></h5>
                                <p class="mb-0 oml-card-desc">{{ comp.excerpt | default: comp.summary }}</p>
                            </div>
                        </div>
                        <div class="mt-auto oml-cap-foot">
                            <span class="oml-foot-pillars"><span>{{ comp.tags | join: " &middot; " }}</span></span>
                            <a href="{{ comp.url | relative_url }}" class="oml-cap-more stretched-link">Learn more <i class="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>

        <div class="mb-5" id="capabilities">
            <div class="text-center mb-5">
                <span class="eyebrow">The Platform</span>
                <h3>Capabilities of an Intelligence-Centric Platform</h3>
                <p class="text-muted mb-0">Everything systems engineers need to create, trust, exploit, and operationalize engineering knowledge.<br>Open any capability to see it in action, live product demos included.</p>
            </div>

            <div class="row">
                {% assign caps = site.capabilities | sort: "order" %}
                {% for cap in caps %}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card border-0 shadow-sm h-100 platform-card">
                        <div class="card-body d-flex flex-column">
                            <div class="oml-capability-head">
                                <div class="{% if cap.pillars contains 'ai' and cap.pillars.size == 1 %}text-purple{% else %}text-teal{% endif %}"><i class="{{ cap.icon }} oml-capability-icon"></i></div>
                                <h5><a href="{{ cap.url | relative_url }}" class="oml-cap-title-link">{{ cap.title }}</a></h5>
                                <span class="oml-capability-num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
                            </div>
                            <p class="mb-0 oml-card-desc">{{ cap.excerpt | default: cap.summary }}</p>
                            <div class="mt-auto oml-cap-foot">
                                <span class="oml-foot-pillars">
                                    {% for pillar in cap.pillars %}
                                        {% if pillar == "logic" %}<span><i class="oml-dot teal"></i>Logic</span>{% endif %}
                                        {% if pillar == "ai" %}<span><i class="oml-dot purple"></i>AI</span>{% endif %}
                                        {% if pillar == "devops" %}<span><i class="oml-dot teal"></i>DevOps</span>{% endif %}
                                    {% endfor %}
                                </span>
                                <a href="{{ cap.url | relative_url }}" class="oml-cap-more stretched-link">See it in action <i class="ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
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
