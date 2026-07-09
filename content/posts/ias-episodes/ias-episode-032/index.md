---
url: /intoaisafety/e032/
title: Pretraining Safety w/ Ethan Roland
summary: Ethan Roland from AE Studio discusses his spotlight ICML paper on "Gradient Routing"
date: 2026-07-09
lastmod: 2026-07-09

image:
  caption: 'Into AI Safety Cover Art'
  preview_only: true
  filename: ias_cover_art.jpeg

authors:
  - intoaisafety

tags:
  - Interview
  - Machine Learning
  - AI Governance

categories:
  - Podcast
---

<div style="text-align: justify">
What if the safest AI models weren't built by adding guardrails after training, but by shaping what gets learned in the first place? Ethan Roland, senior alignment researcher at AE Studio and first author on an ICML 2026 spotlight paper, joins Jacob to talk about gradient routing, a technique that routes dangerous capabilities into isolated parts of a model's architecture where they can be locked or removed entirely. They get into the absorption effect, KYC-style access control frameworks, and what it would actually take for frontier labs to adopt this kind of work before it's needed rather than after.

Check out the [video version](https://youtu.be/rsjVgoHFZM4) of this podcast on the Kairos.fm YouTube channel!

{{< transistor src="https://share.transistor.fm/e/8b696221" >}}
<div style="font-size: x-small;font-style: italic;padding-left: 2.25rem;">INTERVIEW RECORDED 2026.05.14; ASIDES RECORDED 2026.06.10; <a href="https://share.transistor.fm/s/8b696221/transcript.txt" target="_blank" rel="noreferrer noopener">TRANSCRIPT</a></div>

## Chapters

<div style="text-align: left; font-family:monospace;"><small>
00:00:00 ❙ Intro<br>
00:06:39 ❙ Inside AE Studio<br>
00:15:26 ❙ China & the Alignment vs. Controllability Framing<br>
00:18:23 ❙ Data Filtering & Gradient Routing (Aside)<br>
00:30:39 ❙ Mixture of Experts Explained (Aside)<br>
00:36:25 ❙ Why Pre-Training Interventions Are Rare<br>
00:42:43 ❙ Ethan's Theory of Change<br>
00:56:17 ❙ Access Control Governance and KYC (Aside)<br>
01:04:47 ❙ The Researcher's Role in Policy Advocacy<br>
01:11:38 ❙ Speed Round<br>
01:27:55 ❙ Outro
</small></div>

## Links
- Ethan's [website](http://ethan-roland.com/)
- Paper [landing page](https://modularpretraining.com/)
- Anthropic's [press release](https://www.anthropic.com/research/off-switch-dual-use) and [blogpost](https://alignment.anthropic.com/2026/modular-pretraining/)

### Relevant Prior Works
- [Preprint](https://arxiv.org/abs/2410.04332) - Gradient Routing: Masking Gradients to Localize Computation in Neural Networks
- [Preprint](https://arxiv.org/abs/2512.05648) - Beyond Data Filtering: Knowledge Localization for Capability Removal in LLMs
- ICLR [paper](https://arxiv.org/abs/2508.06601) and [webpage](https://deepignorance.ai) - Deep Ignorance: Filtering Pretraining Data Builds Tamper-Resistant Safeguards into Open-Weight LLMs
- ICLR [paper](https://arxiv.org/abs/1803.03635) - The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks
- ICLR [paper](https://arxiv.org/abs/2412.01951v2) - Self-Improvement in Language Models:
The Sharpening Mechanism

### CBRN(e)
- Wikipedia [article](https://en.wikipedia.org/wiki/CBRN_defense) - CBRN defense
- NTI [tutorials](https://www.nti.org/news/new-nti-tutorials-edcuate-biological-weapons-and-nuclear-testing/) on bioweapons and nuclear testing

### Other Sources
- Exploring Language Models [substack article](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts) - A Visual Guide to Mixture of Experts (MoE)
- ICLR [paper](https://arxiv.org/abs/1701.06538) - Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer
- Swift [blogpost](https://www.swift.com/risk-and-compliance/know-your-customer-kyc/kyc-process) - The KYC process explained
- FATF [recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html) on KYC

<!-- end of the list -->
</div>
