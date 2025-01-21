---
layout: post
title: From Foundation to Foundational - Rethinking AI Model Development
date: 2025-01-22
description: An examination of AI development that advocates for moving beyond mere scaling to embrace theoretical understanding
tags: socius AI
categories: article
thumbnail: assets/img/blog/foundational_ai/two_paths_in_ai.jpg
featured: true
---

Recent years have witnessed an arms race in artificial intelligence development, with each new model boasting more parameters, larger datasets, and broader capabilities than its predecessors. When [Stanford's Institute for Human-Centered Artificial Intelligence](https://hai.stanford.edu/) coined the term ["foundation model"](https://arxiv.org/abs/2108.07258) in 2021, they captured something essential about this approach: **the belief that sufficiently large models, trained on sufficiently large data, could serve as a foundation for almost any downstream task**.

Yet amidst this rush towards scale, we seem to have forgotten something. The difference between a _foundation_ and something truly _foundational_.

A foundation model, by Stanford's definition, is any model that is trained on broad data (generally using self-supervision at scale) that can be adapted to a wide range of downstream tasks. It's a perfectly serviceable definition, yet it speaks volumes about our current priorities in AI development. We've become rather enamoured with what these models can do, whilst paying considerably less attention to how or why they do it.

What I propose instead is the development of what I call **foundational models** - AI systems developed with robust theoretical principles and foundations, accompanied by understanding of both their mechanistic underpinnings and emergent properties.

## Beyond Scale: The Case for Theoretical Rigour in AI

Consider the difference between building a tower and understanding architecture. One can stack bricks higher and higher, achieving impressive heights through sheer scale. But architecture - thoughtful, purposeful architecture - requires understanding of principles such as load-bearing structures, material properties, and aesthetic harmony. Similarly, while foundation models achieve remarkable results through scale and engineering, foundational models would emerge from a deeper wellspring fed by theoretical understanding, systematic investigation of their inner workings, and rigorous validation of their behaviours in the real world.

<div class="row mt-3">
    <div class="col-12">
        <div style="font-family: 'Courier New', monospace; padding: 0; background-color: #000033;">
            <!-- Header Bar - Always Visible -->
            <div style="border-top: 2px solid #FFB400; border-bottom: 2px solid #FFB400; padding: 10px 0; margin-bottom: 15px; text-align: center;">
                <h5 style="color: #FFB400; margin: 0;">
                    ◄◄ SCALE VS UNDERSTANDING ►►<br/>
                    <small>Two Paths in AI Architecture</small>
                </h5>
            </div>
            
            <!-- The Image - Always Visible -->
            <div class="col-12 mt-3 mt-md-0">
                {% include figure.liquid path="assets/img/blog/foundational_ai/two_paths_in_ai.jpg" class="img-fluid w-100 rounded z-depth-1" %}
            </div>

            <!-- Collapsible Technical Details -->
            <details class="mb-3">
                <summary style="color: #FFB400; cursor: pointer; padding: 10px; border-top: 1px solid #FFB400;">
                    Technical Details
                </summary>
                <div style="padding: 20px;">
                    <pre style="color: orange; margin: 0;"><code>{

"architectural_metaphor": {
"scale_driven": {
"type": "<span style="color: #99FF99;">vertical_scaling</span>",
"characteristics": [
"<span style="color: #99FF99;">magnitude</span>",
"<span style="color: #99FF99;">engineering</span>"
]
},
"principle_driven": {
"type": "<span style="color: #99FF99;">theoretical_design</span>",
"principles": [
"<span style="color: #99FF99;">foundations</span>",
"<span style="color: #99FF99;">principles</span>"
]
}
}
}</code></pre>

<div style="border-top: 1px solid #FFB400; margin-top: 15px; padding-top: 15px; color: #FFB400;">
RENDERING: The juxtaposition illustrates two distinct approaches to AI development: the left structure represents scale-driven advancement through computational magnitude, whilst the right edifice exemplifies principle-driven progress through theoretical understanding. The contrast emphasises how architectural wisdom parallels AI development - one path relies on magnitude, the other on mathematical foundations and structural elegance.
</div>
</div>
</details>
</div>
</div>

</div>

This distinction becomes particularly relevant when we examine the current trajectory of AI development. Leading researchers like [Andrej Karpathy note that the current zeitgeist is keeping the transformer, making the models bigger](https://www.youtube.com/watch?v=9uw3F6rndnA), while [Geoffrey Hinton recalls how Ilya Sutskever recognised early on that scaling would be a crucial factor in AI progress](https://www.youtube.com/watch?v=n4IQOBka8bc). While scaling has indeed proven to be a powerful driver of progress, it represents just one dimension of advancement. I contend that other critical factors - like architecture design, training/inferencing dynamics, and theoretical understanding - must play equally important roles in building intelligent systems.

The scale-focused approach might seem intuitive. Larger models with more computation consistently demonstrate superior capabilities. As Sutton compellingly argues in his ['Bitter Lesson'](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), 'general methods that leverage computation are ultimately the most effective, and by a large margin'. While this bitter lesson rightly warns against encoding human domain knowledge into AI systems, it doesn't preclude the need for understanding how these systems learn and process information.

The key point that I would like to emphasise here is that scaling (foundation models) and understanding (foundational models) serve different but complementary purposes: scaling demonstrates what's possible through computation, while understanding enables us to harness and orchestrate these capabilities effectively. This becomes particularly vital as AI systems become more deeply integrated into our lives, where both performance and reliability are essential.

## The Path Forward?

I must re-emphasise that the foundational model approach represents not an opposition to foundation models, but a synthesis of engineering achievement and theoretical understanding. When we observe phenomena like model [grokking](https://arxiv.org/abs/2201.02177), we see both the power of scaled computation and the need for theoretical frameworks to explain sudden comprehension breakthroughs. Mechanistic interpretability has begun to bridge this gap, offering tools for understanding neural networks, while recent editorial [linking language models with linguistic theories](https://www.nature.com/articles/s42256-023-00703-8) suggests new ways to examine and question our understanding of AI capabilities. My research vision isn't to replace foundation models, but to understand them systematically, enabling us to build better systems through insight rather than scale alone - transforming our understanding from knowing _what_ works to knowing _why_ it works.

This shift from foundation to foundational models represents more than a technical evolution - it embodies a philosophical reimagining of artificial intelligence as profound as the transition from alchemy to chemistry, marking the progression from a practice based primarily on empirical experimentation to one grounded in systematic understanding. Just as chemical theory allowed us to predict and explain reactions rather than merely observe them, robust foundations will enable us to predict and explain AI behaviours, moving us beyond mere observation and replication towards true mastery.
