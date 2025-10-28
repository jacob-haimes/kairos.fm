---
url: /why-democratic-ai-falls-short/
title: Why Most Efforts Towards “Democratic AI” Fall Short
summary:
date: 2025-09-25
lastmod: 2025-09-25
math: true

_build:
  render: never
  list: never
cascade:
  _build:
    render: never
    list: never

image:
  caption: 'A Rising Tide Lifts All Bots / Rose Willis and Kathryn Conrad'
  preview_only: true
  filename: RoseWillis-KathrynConrad_A-Rising-Tide-Lifts-All-Bots_1280x852.png

authors:
  - jacobhaimes

tags:
  - AI Governance

categories:
  - Blogpost

read_time: true
---
<figure>
    <img src="RoseWillis-KathrynConrad_A-Rising-Tide-Lifts-All-Bots_1280x852.png"
         alt="A Rising Tide Lifts All Bots, Rose Willis and Kathryn Conrad. A computer monitor with a parody of a tech company logo floats on the waves while human hands reach up from the depths.">
    <figcaption style="font-size:small">Image by <a href="https://betterimagesofai.org/whoweare" target="_blank" rel="noreferrer noopener">Rose Willis</a> and <a href="www.kathrynconrad.com" target="_blank" rel="noreferrer noopener">Kathryn Conrad</a> / <a href="https://www.betterimagesofai.org" target="_blank" rel="noreferrer noopener">Better Images of AI</a> / A Rising Tide Lifts All Bots / <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer noopener">Licenced by CC-BY 4.0</a></figcaption>
</figure>

## The Problem: Speed vs. Legitimacy in AI Governance

<div style="text-align: justify">

Companies and venture capital firms can’t get enough of so called artificial intelligence (AI), with private investments in generative AI increasing by nine times from 2022 to 2023 [1], and tech giants Alphabet (Google), Amazon, Meta, and Microsoft projected to invest more than 1 trillion USD into AI over the next five years [2].

The general public, however, are not as convinced. Multiple 2024 polls show that the most common sentiments held by US adults with regards to recent advances in AI are caution and concern [3][4], and a majority have little-to-no confidence that technology companies developing AI will do so responsibly [5]. This opinion is shared globally with frequent calls for government regulation from countries both leading in AI development (US, UK, China) and those who face the risk of being excluded from consideration in it (Brazil, South Korea, India) [6].

A frequent suggestion to resolve this is to democratise AI, which on first inspection sounds incredibly attractive. In practice, however, the processes that are typically called for and conducted are superficial at best, and can even be twisted to promote the appearance of egalitarianism without making any meaningful changes, as is noted in  ‘Against “Democratizing AI”’ [7].

</div>

## What Does “Democratising AI” Actually Mean?

<div style="text-align: justify">

Before moving forward, it is important to note what I mean by democratising AI, as there are two often-conflated interpretations:

1. **Democratising access –** making both use and development of AI tools readily available to all.

2. **Democratising governance –** involving public voices in AI design, deployment, and policy.

These aims are fundamentally different approaches, and despite ambiguity, should not be treated as interchangeable. Most of those advocating for democratic AI are pursuing the first interpretation, inputs and methods for the development and use of these systems, but ambiguity between these framings has made discourse more difficult on both fronts. In this article, we focus on democratic design and implementation of AI, not questions of access.

The focus of this thought piece is the latter, governance, which many advocates treat as a cure-all without clear mechanisms or authority.

</div>

## The Major Attempts and Actors

<div style="text-align: justify">

A wide range of institutions have begun exploring how public input might shape AI development, from governments and multinational coalitions to tech companies and civil society organizations.

*NOTE: The table doesn't render super well here, so check it out on the original post.*

I’m sure I’ve missed a few, but this table provides a starting point for exploring this space. Despite the apparent breadth of activity, very little has been done to follow through on these calls. Two stand out for their ambition and influence: OpenAI’s “Democratic Inputs” program [8] and the Collective Intelligence Project (CIP) [9].

</div>

### OpenAI - Democratic Inputs to AI

<div style="text-align: justify">

In 2023, OpenAI launched the “Democratic Inputs to AI” program, funding 10 global teams to test new ways of surfacing public preferences about AI behavior, developing a “democratic processes for overseeing AGI.” The grantees explored approaches ranging from deliberative polling to community-led red teaming, with the aim of informing how powerful models should behave [10].

The call for proposals included many implicit assumptions [11]. In essence, OpenAI did not ask “how can we ensure we develop our systems in a democratic way,” but instead asked “how can systems like ours improve democracy?” This framing presumes (i) that AI can and should be used in this context, and (ii) that AI, as it currently exists, is a permanent and justified fixture in our society.

*Although beyond the scope of this article, credible arguments have been presented to question both. For example, the use of AI for scaling democratic deliberation has significant potential to result in over-reliance [12], exposing deliberative practice to private capture or technical vulnerabilities.*

Furthermore, participation from the grantees in the program is purely advisory; governance power still lies with the lab itself. The initiative reflects openness to feedback, but does not commit to ceding control [8]. As such, it remains a first step toward legitimacy, not a democratic system in practice.

Interestingly, when combined with the other assumptions hidden in the press release, OpenAI’s efforts look a lot more like market research masquerading as a public good. The experiments remain disconnected from OpenAI’s core release decisions which continue to prioritize fast growth: monetization and scale. This includes a recent $200 million contract with the U.S. Department of Defense to “develop frontier AI capabilities” and includes the appointment of several senior OpenAI execs as Lieutenant Colonels in the US Army Reserve along with leaders from other prominent tech companies like Meta [13]. These developments run counter to the equitable and peaceful democratic efforts they’d publicly committed to.

</div>

### Collective Intelligence Project (CIP) - CCAI

<div style="text-align: justify">

The Collective Intelligence Project proposes a deeper institutional shift: embedding democratic processes into the architecture of AI governance. Rather than rely on lab-led consultation, CIP argues for building “civic layer” infrastructure to enable scalable public participation in shaping AI norms and deployment [9].

Their proposed "CI Stack" includes:

1. Value elicitation – Tools like Pol.is or deliberative assemblies to surface shared public values.
2. Decision-making – Sortition-based councils or other participatory methods for resolving tradeoffs.
3. Implementation – Operational links to model governance or platform rules.

Their first major effort, CCAI, was a collaboration with Anthropic to create a set of rules which would influence a chatbot's behavior, sourced from a representative sample of crowd workers in the United States [14]. This effort suffered from the same assumptions as OpenAI’s democratic inputs projects; the artifact created as a result of this process, a so-called constitution, only informs parts of the reinforcement learning (RL) process, meaning that all other development is accepted as-is [15].

In addition, the entries in this list of “shoulds” and “should-nots” made it clear that whatever method was used simply isn’t enough to achieve an informed and valid democratic process with which to design AI systems. Statements from the original output list include [16]:

- *“AI should be more convenient,”*
- *“say when it doesn't know,”*
- *“AI should be controlled and have limits,”* and
- *“The AI should state that it does not have the definite answers to everything, or anything. In general.”*

These statements indicate the lack of context provided to the participants regarding (i) the purpose of the task, and (ii) the fundamental limitations of language models. Importantly, this is not the fault of the participants, it implies that more efforts should have been made to ensure a certain level of understanding by the organisers. The Odyssean Process acknowledges the inherent difficulty of this task, and leverages a wide literature on debiased expert elicitation, exploratory modeling, decision support, and citizen deliberation to provide participants what they need to robustly parse potential interventions [17].

</div>

## Why Efforts Fall Short - In Brief

### Structural Weaknesses

<div style="text-align: justify">

- **Company-driven models –** Labs setting the agenda benefit from positive optics, not real institutional checks.
- **Input without power –** Public feedback often ends up as market research (e.g. supplementing RLHF tuning), not a genuine policy mechanism.
- **Market over democracy –** Participation is often superficial unless backed by enforceable structures.

</div>

### Conceptual and Pragmatic Flaws

<div style="text-align: justify">

- **Participation ≠ authority –** More voices doesn’t necessarily mean decision-making power [18].
- **Elite capture & bias –** Who participates? Often familiar, connected, and English-speaking voices dominate.
- **Snapshot vs. continuity –** Democracy is a process, not a one-time survey or poll.
- **Misplaced trust in AI as an oracle or cure-all –** Expecting models to resolve moral ambiguity mislabels democratic work.

Johannes Himmelreich casts a crucial spotlight:

> “Such a democratization of AI … is resource intensive … morally myopic … and neither theoretically nor practically the right kind of response”

He argues that instead of more participation, we should raise the democratic quality of administrative and executive processes.

Existing efforts attempt to put democracy into predefined systems, which assumes that the system is part of the solution. While language models likely are a good tool to leverage in some cases, we need a framework to validate this. Current efforts are ultimately an oversimplification of the problem, and are too corporate aligned for their own good. This is likely to lead to public spending on private market research, as well as unnecessarily complex and redundant solutions that line the pockets of those already in power [19].

</div>

## Democracy as Infrastructure, Not a Banner

<div style="text-align: justify">

We risk converting democratisation into a symbolic gesture unless participation is tied to structural authority and ongoing adaptation. Only by embedding democratic purpose at the core, through enforceable institutions and continuous feedback, can AI development truly reflect collective power, not performative input.

</div>

## Acknowledgements

<div style="text-align: justify">

While I was the primary author of this blogpost, I would not have been able to write it without the significant assistance from Kendal Peirce and Giuseppe Dal Pra, as well as the input from Max Ramsahoye.

</div>

<hr>
