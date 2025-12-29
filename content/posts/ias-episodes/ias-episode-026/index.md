---
url: /intoaisafety/e026/
title: Sobering up on AI Progress w/ Dr. Sean McGregor
summary: Why AI benchmarks fail, how safety gets measured wrong, and what real evaluation should look like with Dr. Sean McGregor
date: 2025-12-29
lastmod: 2025-12-29

image:
  caption: 'Into AI Safety Cover Art'
  preview_only: true
  filename: intoaisafety-thumbnail_sean-mcgregor_1280x720.jpg

authors:
  - intoaisafety

tags:
  - Interview
  - Narratives & Hype
  - Language Model Evals
  - Research

categories:
  - Podcast
---

<div style="text-align: justify">
Sean McGregor and I discuss about why evaluating AI systems has become so difficult; we cover everything from the breakdown of benchmarking, how incentives shape safety work, and what approaches like BenchRisk (his recent paper at NeurIPS) and AI auditing aim to fix as systems move into the real world. We also talk about his history and journey in AI safety, including his PhD on ML for public policy, how he started the AI Incident Database, and what he's working on now: AVERI, a non-profit for frontier model auditing.<br><br>

{{% callout warning %}}
2025.12.29: AVERI will be officially launching in January of 2026. If you're interested, consider checking out their listings to see if you'd be a good fit; if you do end up applying, let them know you found out about the opportunity from the podcast!
{{% /callout %}}

As part of my effort to make this whole podcasting thing more sustainable, I have created a Kairos.fm [Patreon](https://www.patreon.com/cw/Kairosfm) which includes an extended version of this episode. Supporting gets you access to these extended cuts, as well as other perks in development.

{{< transistor src="https://share.transistor.fm/e/8b720c1c" >}}
<div style="font-size: x-small;font-style: italic;padding-left: 2.25rem;">INTERVIEW RECORDED 2025.11.25; ASIDES RECORDED 2025.12.20; <a href="https://share.transistor.fm/s/8b720c1c/transcript.txt" target="_blank" rel="noreferrer noopener">TRANSCRIPT</a></div>

## Chapters

<div style="text-align: left; font-family:monospace;">
00:00:00 ❙ Intro<br>
00:02:36 ❙ What's broken about benchmarking<br>
00:03:41 ❙ Sean’s wild PhD<br>
00:14:28 ❙ The phantom internship<br>
00:19:25 ❙ Sean's journey<br>
00:22:25 ❙ Market-vs-regulatory modes and AIID<br>
00:32:13 ❙ Drunk on AI progress<br>
00:38:34 ❙ BenchRisk<br>
00:43:20 ❙ Moral hazards and Master Hand<br>
00:50:34 ❙ Liability, Section 230, and open source<br>
00:59:20 ❙ AVERI<br>
01:11:30 ❙ Closing thoughts & outro
</div>

## Links
* Sean McGregor's [website](https://seanbmcgregor.com)
* AVERI [website](https://www.averi.org)

### BenchRisk
* BenchRisk [website](https://benchrisk.ai)
* NeurIPS [paper](https://arxiv.org/abs/2510.21460) - Risk Management for Mitigating Benchmark Failure Modes: BenchRisk
* NeurIPS [paper](https://arxiv.org/abs/2111.15366) - AI and the Everything in the Whole Wide World Benchmark
* CACM [paper](https://arxiv.org/abs/1803.09010) - Datasheets for Datasets

### AIID
* AI Incident Database [website](https://incidentdatabase.ai)
* IAAI [paper](https://arxiv.org/abs/2011.08512) - Preventing Repeated Real World AI Failures by Cataloging Incidents: The AI Incident Database
* [Preprint](https://arxiv.org/pdf/2409.16425) - Lessons for Editors of AI Incidents from the AI Incident Database
* AIAAIC [website](https://www.aiaaic.org/home) (another incident tracker)

### Hot AI Summer
* CACM [article](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf) - A Few Useful Things to Know About Machine Learning
* CACM [article](https://cacm.acm.org/opinion/how-the-ai-boom-went-bust/) - How the AI Boom Went Bust
* Undergraduate [Thesis](https://www.researchgate.net/publication/333039347_Analyzing_the_Prospect_of_an_Approaching_AI_Winter) - Analyzing the Prospect of an Approaching AI Winter
* Tech Genies [article](https://techgenies.com/ai-history-the-first-summer-and-winter-of-ai/) - AI History: The First Summer and Winter of AI
* CACM [article](https://cacm.acm.org/opinion/there-was-no-first-ai-winter/) - There Was No ‘First AI Winter’

### Measuring Generalization
* Neural Computation [article](https://www.researchgate.net/publication/2755783_The_Lack_of_A_Priori_Distinctions_Between_Learning_Algorithms/link/54242c890cf238c6ea6e973c/download) - The Lack of A Priori Distinctions Between Learning Algorithms
* ICLR [paper](https://arxiv.org/abs/1611.03530) - Understanding deep learning requires rethinking generalization
* ICML [paper](https://arxiv.org/abs/2305.01034v2) - Model-agnostic Measure of Generalization Difficulty
* Radiology Artificial Intelligence [article](https://pmc.ncbi.nlm.nih.gov/articles/PMC9885377/) - Generalizability of Machine Learning Models: Quantitative Evaluation of Three Methodological Pitfalls
* [Preprint](https://arxiv.org/abs/2410.01769v2) - Quantifying Generalization Complexity for Large Language Models

### Insurers Exclude AI
* Financial Times [article](https://www.ft.com/content/abfe9741-f438-4ed6-a673-075ec177dc62) - Insurers retreat from AI cover as risk of multibillion-dollar claims mount
* Tom's Hardware [article](https://www.tomshardware.com/tech-industry/artificial-intelligence/insurers-move-to-limit-ai-liability-as-multi-billion-dollar-risks-emerge) - Major insurers move to avoid liability for AI lawsuits as multi-billion dollar risks emerge — Recent public incidents have lead to costly repercussions
* Insurance Newsnet [article](https://insurancenewsnet.com/oarticle/insurers-scale-back-ai-coverage-amid-fears-of-billion-dollar-claims) - Insurers Scale Back AI Coverage Amid Fears of Billion-Dollar Claims
* Insurance Business [article](https://www.insurancebusinessmag.com/us/news/technology/insurances-gen-ai-reckoning-has-come-559985.aspx) - Insurance’s gen AI reckoning has come

### Section 230
* Section 230 [overview](https://www.congress.gov/crs-product/R46751)
* Legal [sidebar](https://www.congress.gov/crs-product/LSB11097) - Section 230 Immunity and Generative Artificial Intelligence
* Bad Internet Bills [website](https://www.badinternetbills.com)
* TechDirt [article](https://www.techdirt.com/2025/12/17/section-230-faces-repeal-support-the-coverage-thats-been-getting-it-right-all-along/) - Section 230 Faces Repeal. Support The Coverage That’s Been Getting It Right All Along.
* Privacy Guides [video](https://www.privacyguides.org/videos/2025/12/16/taylor-lorenz-on-kosa-the-screen-act-and-repealing-section-230/) - Dissecting Bad Internet Bills with Taylor Lorenz: KOSA, SCREEN Act, Section 230
* Journal of Technology in Behavioral Health [article](https://pmc.ncbi.nlm.nih.gov/articles/PMC7785056/) - Social Media and Mental Health: Benefits, Risks, and Opportunities for Research and Practice
* Time [article](https://time.com/7337866/big-tech-social-media-regulation/) - Lawmakers Unveil New Bills to Curb Big Tech’s Power and Profit
* House Hearing [transcript](https://www.techpolicy.press/transcript-house-hearing-on-legislative-solutions-to-protect-children-and-teens-online/) - Legislative Solutions to Protect Children and Teens Online

### Relevant Kairos.fm Episodes
* Into AI Safety [episode](https://kairos.fm/intoaisafety/e023/) - Growing BlueDot's Impact w/ Li-Lian Ang
* muckrAIkers [episode](https://kairos.fm/muckraikers/e010/) - NeurIPS 2024 Wrapped 🌯

### Other Links
* Encyclopedia of Life [website](https://eol.org)
* IBM Watson AI XPRIZE [website](https://www.xprize.org/competitions/artificial-intelligence)
* ML Commons [website](https://mlcommons.org)
* Wikipedia [article](https://en.wikipedia.org/wiki/Enron_scandal)

<!-- end of the list -->
</div>
