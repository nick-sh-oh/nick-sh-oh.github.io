---
layout: post
title: From Markets to Minds - My Personal Journey as a Researcher
date: 2024-12-03
description: My personal journey from studying politics and economics to founding an AI research lab.
tags: PersonalJourney socius Philosophy
categories: article
thumbnail: assets/img/blog/personal_journey/market_event.jpg
featured: true
---

I'm a researcher with an unconventional background - a BSc in Politics and Economics who now focus on researching researches AI systems. Here's my personal journey as a researcher, with its unexpected turns and serendipitous discoveries that shaped my approach to artificial intelligence.

It's 2020, and I'm nestled in a quiet corner on the second floor of the LSE library, surrounded by papers about the 2008 financial crisis. [Prof. Schonhardt-Bailey](https://en.wikipedia.org/wiki/Cheryl_Schonhardt-Bailey)’s GV309 course, *Politics of Money and Finance in Comparative Perspective*, had led me down a fascinating rabbit hole. Until then, most of my Economics courses had been a parade of numbers, graphs, and equations. But GV309 revealed a different story – one of institutions, ideas, and human interests shaping financial decisions. That contrast sparked something in me. The same market event could look entirely different depending on whether you focused on the mathematical models or the human elements driving them. (In hindsight, perhaps I should have enrolled in behavioural economics - it might have shown me this duality sooner.)

<div class="row mt-3">
    <div class="col-12">
        <div style="font-family: 'Courier New', monospace; padding: 0; background-color: #000033;">
            <!-- Header Bar - Always Visible -->
            <div style="border-top: 2px solid #FFB400; border-bottom: 2px solid #FFB400; padding: 10px 0; margin-bottom: 15px; text-align: center;">
                <h5 style="color: #FFB400; margin: 0;">
                    ◄◄ MARKET DUALITY ►►<br/>
                    <small>A Tale of Numbers and Human Nature</small>
                </h5>
            </div>
            
            <!-- The Image - Always Visible -->
            <div class="col-12 mt-3 mt-md-0">
                {% include figure.liquid path="assets/img/blog/personal_journey/market_event.jpg" class="img-fluid w-100 rounded z-depth-1" %}
            </div>

            <!-- Collapsible Technical Details -->
            <details class="mb-3">
                <summary style="color: #FFB400; cursor: pointer; padding: 10px; border-top: 1px solid #FFB400;">
                    caption
                </summary>
                <div style="padding: 20px;">
                    <pre style="color: orange; margin: 0;"><code>{
  "market_model": {
    "left_hemisphere": {
      "type": "<span style="color: #99FF99;">quantitative analytics</span>",
      "components": [
        "<span style="color: #99FF99;">modeling</span>",
        "<span style="color: #99FF99;">graphs</span>",
        "<span style="color: #99FF99;">equations</span>"
      ]
    },
    "right_hemisphere": {
      "type": "<span style="color: #99FF99;">human behaviour</span>",
      "components": [
        "<span style="color: #99FF99;">ideologies</span>",
        "<span style="color: #99FF99;">interests</span>",
        "<span style="color: #99FF99;">institutions</span>"
      ]
    },
    "central_display": "<span style="color: #99FF99;">integrated market visualisation</span>"
  }
}</code></pre>
                    <div style="border-top: 1px solid #FFB400; margin-top: 15px; padding-top: 15px; color: #FFB400;">
                        RENDERING: The split-screen visualisation presents a market event through complementary lenses - mathematical models and formulae on the left mirror institutional and human factors on the right. At the center lies the marketplace itself, bustling with activity, where these two realms of understanding converge to shape market outcomes. This duality represents how markets emerge from the interplay between quantitative precision and human behaviour.
                    </div>
                </div>
            </details>
        </div>
    </div>
</div>

After graduating from LSE, I was offered a role as a Junior NLP Engineer at [Numen Capital](https://numencapital.com/) - a stroke of fortune and timing for someone without a Computer Science degree. Working on the Knowsis research team, I was building NLP pipelines and transformer-based classifiers to analyse market sentiment on ESG. While our classifier boasted an impressive 97% accuracy, what truly fascinated me was a more fundamental question: why did we need sentiment analysis at all? If markets were purely rational, why would sentiment matter? Yet there I was, developing rule-based sentiment analysers and domain-specific dictionaries because market movements weren't just about numbers – they were about human psychology, emotions, and sometimes deeply irrational behaviour. This curiosity about the foundational elements behind market movements would later become one of the founding principles of [socius](https://socius.org/). 

During my time at Numen, I began noticing something curious about how we study sentiment in text. Everyone was rushing to build bigger, more complex models, but they were missing something fundamental: What exactly is sentiment? How do we humans understand and process emotions in the first place? This wasn't just academic curiosity anymore - it was becoming clear that if we're going to build AI systems that understand human emotions, we should first understand how we ourselves process them.

## Building Bridges: From $\hat{Y}$ to $\hat{B}$

This tension between understanding and performance was everywhere in AI development. A % gain in accuracy was celebrated more than building models from robust theories. Coming from a social science background, I was trained to prioritise understanding above all else. The essence was $\hat{B}$: mechanism, mediation, and moderation - we weren't satisfied just knowing that X affected Y; we wanted to unravel the *how* and *why*, to peek inside the black box of causation. Yet the core of deep learning seemed fixated on $\hat{Y}$: optimisation, regularisation, evaluation. As [Rahul, Verhagen and Kirk (2022)](https://link.springer.com/article/10.1007/s00146-022-01540-w) put it, "social scientists have previously had a preoccupation with parsimonious explanation and inferential $\hat{B}$, as opposed to predictive $\hat{Y}$ questions”.

I wanted to close this gap. I wanted to apply principles of social science to AI development. So I started my own lab - originally named rather straightforwardly as 'socialscience ai', before becoming socius. In hindsight, this was such a bold move. Other than having quasi-lab experience in industry, I had neither a PhD in Computer Science nor proper academic lab experience. But looking back, it wasn't that I was at the peak of confidence on the Dunning-Kruger curve - rather, it was more of an ignorant courage. I knew I wasn't fully ready, but at the time, I felt that I needed and wanted to. So in October 2022, I took the first steps toward building socius.

Of course, the first year was the most challenging. It was like doing a PhD with no supervision - teaching myself, guiding myself through the uncharted. I started by diving deep into how researchers had approached sentiment analysis over the years. What fascinated me was how different academic traditions had conceptualised and operationalised sentiment - each dictionary representing years of careful theoretical work and empirical validation. That's how [sentibank](https://github.com/socius-org/sentibank) was born - not just as another sentiment analysis tool, but as an encyclopedic hub bringing together these diverse approaches to understanding human emotion. While not strictly an AI system itself, sentibank represented something profound: an attempt to assist black-box AI models with theoretically-grounded lexicons. These weren't just arbitrary scores; we understood their origins, their theoretical foundations, their why. In many ways, sentibank embodied what would become a core principle at socius: creating AI systems that think in more humanly understandable ways.

## From Market Psychology to Cognitive Science 

During my time studying sentiment, the deeper I delved into human emotion and decision-making, the more I found myself drawn into cognitive science. I became fascinated by how experts make decisions – not the careful, analytical choices we often assume, but the quick, intuitive judgments that come from years of experience.

I still remember the day I first read about System 1 and System 2 thinking. It was like finding a missing puzzle piece. The idea that human thinking isn't just logical or emotional, but a complex dance between intuition and analysis – it explained so much about the questions I had been grappling with.

<div class="row mt-3">
    <div class="col-12">
        <div style="font-family: 'Courier New', monospace; padding: 0; background-color: #000033;">
            <!-- Header Bar - Always Visible -->
            <div style="border-top: 2px solid #FFB400; border-bottom: 2px solid #FFB400; padding: 10px 0; margin-bottom: 15px; text-align: center;">
                <h5 style="color: #FFB400; margin: 0;">
                    ◄◄ THE TWO MINDS ►►<br/>
                    <small>A Portrait of Dual Process Theory</small>
                </h5>
            </div>
            
            <!-- The Image - Always Visible -->
            <div class="col-12 mt-3 mt-md-0">
                {% include figure.liquid path="assets/img/blog/personal_journey/system1:2.jpg" class="img-fluid w-100 rounded z-depth-1" %}
            </div>

            <!-- Collapsible Technical Details -->
            <details class="mb-3">
                <summary style="color: #FFB400; cursor: pointer; padding: 10px; border-top: 1px solid #FFB400;">
                    caption
                </summary>
                <div style="padding: 20px;">
                    <pre style="color: orange; margin: 0;"><code>{
  "cognitive_framework": {
    "processors": {
      "left_unit": "<span style="color: #99FF99;">System-1</span>",
      "right_unit": "<span style="color: #99FF99;">System-2</span>"
    },
    "theorists": "<span style="color: #99FF99;">Daniel Kahneman, Jonathan St B. T. Evans</span>"
  }
}</code></pre>
                    <div style="border-top: 1px solid #FFB400; margin-top: 15px; padding-top: 15px; color: #FFB400;">
                        RENDERING: This portrait depicts the classical distinction between System 1 and System 2 thinking. The mathematical diagrams between the figures emphasise the relationship between intuitive and analytical processing, whilst the unified landscape suggests their operation within a single cognitive framework.
                    </div>
                </div>
            </details>
        </div>
    </div>
</div>


This led to my research collaboration with [Prof. Fernand Gobet](https://en.wikipedia.org/wiki/Fernand_Gobet). Working together on [System 1.5](https://neurips.cc/virtual/2024/104306), we examined how expert cognition could inform AI development. Just as social sciences seek to explain phenomena through multiple levels of analysis, we proposed a framework that mirrors how human experts navigate between intuitive and analytical thinking. This wasn't just about building faster or more accurate systems - it was about creating AI that processes information in ways we can naturally understand and explain, reflecting personal philosophy that AI development must balance theory-driven approaches with multi-scale analysis.

<div class="row mt-3">
    <div class="col-12">
        <div style="font-family: 'Courier New', monospace; padding: 0; background-color: #000033;">
            <!-- Header Bar - Always Visible -->
            <div style="border-top: 2px solid #FFB400; border-bottom: 2px solid #FFB400; padding: 10px 0; margin-bottom: 15px; text-align: center;">
                <h5 style="color: #FFB400; margin: 0;">
                    ◄◄ SYSTEM 1.5 ►►<br/>
                    <small>The Dance of Intuition and Analysis</small>
                </h5>
            </div>
            
            <!-- The Image - Always Visible -->
            <div class="col-12 mt-3 mt-md-0">
                {% include figure.liquid path="assets/img/blog/personal_journey/system1_5.jpg" class="img-fluid w-100 rounded z-depth-1" %}
            </div>

            <!-- Collapsible Technical Details -->
            <details class="mb-3">
                <summary style="color: #FFB400; cursor: pointer; padding: 10px; border-top: 1px solid #FFB400;">
                    caption
                </summary>
                <div style="padding: 20px;">
                    <pre style="color: orange; margin: 0;"><code>{
  "cognitive_interface": {
    "left_entity": {
      "type": "<span style="color: #99FF99;">System 1</span>",
      "attributes": "<span style="color: #99FF99;">rapid response core</span>",
      "signature": "<span style="color: #99FF99;">scarlet energetic stance</span>"
    },
    "mediator": {
      "type": "<span style="color: #99FF99;">System 1.5</span>",
      "function": "<span style="color: #99FF99;">metacognitive regulation</span>"
    },
    "right_entity": {
      "type": "<span style="color: #99FF99;">System 2</span>",
      "attributes": "<span style="color: #99FF99;">analytical processing unit</span>",
      "signature": "<span style="color: #99FF99;">azure contemplative stance</span>"
    }
  }
}</code></pre>
                    <div style="border-top: 1px solid #FFB400; margin-top: 15px; padding-top: 15px; color: #FFB400;">
                        RENDERING: The spiral wave betwixt the figures represents System 1.5's dynamic role in mediating between intuitive System 1 (left, in scarlet) and analytical System 2 (right, in azure). The flowing element symbolises the continuous interplay between swift, instinctive thinking and deliberative reasoning.
                    </div>
                </div>
            </details>
        </div>
    </div>
</div>

The development of System 1.5 sparked an intriguing question: if human experts can provide valid explanations after making intuitive decisions, why do we demand complete mechanical transparency from AI systems? After all, experts across domains routinely make effective decisions while their subsequent explanations often involve post-hoc rationalisation rather than complete, factive accounts of their decision-making processes. This insight led me to develop [Computational Interpretabilism](https://neurips.cc/virtual/2024/99151), a philosophical framework that challenges conventional wisdom about AI interpretability. While many researchers insisted on building inherently transparent systems, I noticed an interesting parallel with human expertise: just as experts often construct valid explanations after making intuitive decisions, perhaps post-hoc interpretability in AI wasn't a weakness, but rather a natural reflection of how understanding emerges from complex systems. This philosophical stance ultimately defends post-hoc explainability in AI systems, challenging the notion that complete mechanistic understanding is necessary for meaningful scientific insight.

Looking back, I can see how each step of this journey was necessary. Understanding market emotions led to studying sentiment, which led to exploring human cognition, which in turn is helping us build more human-centered AI systems. Each piece connected to the next in ways I couldn't have predicted but now seem almost inevitable.

That undergraduate student in the LSE library, puzzling over market crashes and human behaviour, could never have predicted where this journey would lead. But that's the beauty of research driven by genuine curiosity – it takes you places you never expected to go. The questions that drive me today have evolved from those early wonderings but maintain the same core focus on human understanding:
- How can we develop AI systems that learn and explain their knowledge more like humans do?
- How can we bridge the gap between mechanistic and holistic understanding in AI?
- What can cognitive science teach us about building AI systems that process information more naturally and effectively?
- How might we implement theory-driven AI development at scale while maintaining the human element?

There's a peculiar poetry in how life unfolds. What began as a puzzled undergraduate's musings in the LSE library has bloomed into something I never could have sketched out in advance - rather like how the most fascinating AI behaviours emerge from seemingly simple principles. Each step of this journey, from market sentiment to machine cognition, has felt less like following a map and more like reading a compass: knowing roughly where North is, but discovering the actual terrain as you walk. Perhaps that's the real gift of an unconventional path - it teaches you to see connections that others might miss, to find new ways through old problems.

