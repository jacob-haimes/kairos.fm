---
url: /muckraikers/e009/
title: OpenAI's o1 System Card, Literally Migraine Inducing
summary: A close read of the o1 system card reveals a whole lot of muck.
date: 2024-12-22

image:
  caption: 'muckrAIkers Temporary Cover Art'
  preview_only: true
  filename: muckraikers_cover-art.jpg

authors:
  - muckraikers

tags:
  - '"AI"'
  - Close Read

categories: 
  - Podcast
---

<div style="text-align: justify">
The idea of <i>model cards</i>, which was introduced as a measure to increase transparency and understanding of LLMs, has been perverted into the marketing gimmick characterized by OpenAI's o1 system card. To demonstrate the adversarial stance we believe is necessary to draw meaning from these press-releases-in-disguise, we conduct a close read of the system card. Be warned, there's a lot of muck in this one.

{{< transistor src="https://share.transistor.fm/e/c2ec3a0e" >}}
</div>

## Discussed Figures and Tables

{{< multi-image-quickview folder="o1-system-card" >}}

## Chapters

<div style="text-align: left; font-family:monospace;">
00:00:00 ❙ Intro<br>
00:00:00 ❙ Recorded 2024.12.08<br>
00:00:54 ❙ Actual intro<br>
00:03:00 ❙ System cards vs. academic papers<br>
00:05:36 ❙ Starting off sus<br>
00:08:28 ❙ o1.continued<br>
00:12:23 ❙ Rant #1: figure 1<br>
00:18:27 ❙ A diamond in the rough<br>
00:19:41 ❙ Hiding copyright violations<br>
00:21:29 ❙ Rant #2: Jacob on "hallucinations"<br>
00:25:55 ❙ More ranting and "hallucination" rate comparison<br>
00:31:54 ❙ Fairness, bias, and bad science comms<br>
00:35:41 ❙ System, dev, and user prompt jailbreaking<br>
00:39:28 ❙ Chain-of-thought and Rao-Blackwellization<br>
00:44:43 ❙ "Red-teaming"<br>
00:49:00 ❙ Apollo's bit<br>
00:51:28 ❙ METR's bit<br>
00:59:51 ❙ Pass@???<br>
01:04:45 ❙ SWE Verified<br>
01:05:44 ❙ Appendix bias metrics<br>
01:10:17 ❙ The muck and the meaning
</div>

## Links
- o1 [system card](https://cdn.openai.com/o1-system-card-20241205.pdf)
- OpenAI press release [collection](https://openai.com/12-days/) - 12 Days of OpenAI

### Additional o1 Coverage
- NIST + AISI [report] - US AISI and UK AISI Joint Pre-Deployment Test
- Apollo Research's [paper](https://static1.squarespace.com/static/6593e7097565990e65c886fd/t/67620d38fa0ceb12041ba585/1734479163821/in_context_scheming_paper_v2.pdf) - Frontier Models are Capable of
In-context Scheming
- VentureBeat [article](https://venturebeat.com/ai/openai-launches-full-o1-model-with-34-reduced-error-rate-debuts-chatgpt-pro/) - OpenAI launches full o1 model with image uploads and analysis, debuts ChatGPT Pro
- The Atlantic [article](https://www.theatlantic.com/technology/archive/2024/12/openai-o1-reasoning-models/680906/?gift=iWa_iB9lkw4UuiWbIbrWGdT4_sPi9gCLOZGiikclbz8&utm_source=copy-link&utm_medium=social&utm_campaign=share) - The GPT Era Is Already Ending

### On Data Labelers
- 60 Minutes [article + video](https://www.cbsnews.com/news/labelers-training-ai-say-theyre-overworked-underpaid-and-exploited-60-minutes-transcript/) - Labelers training AI say they're overworked, underpaid and exploited by big American tech companies
- Reflections [article](https://4sonline.org/news_manager.php?page=36940) - The hidden health dangers of data labeling in AI development
- Privacy International [article](https://privacyinternational.org/explainer/5357/humans-ai-loop-data-labelers-behind-some-most-powerful-llms-training-datasets) = Humans in the AI loop: the data labelers behind some of the most powerful LLMs' training datasets

### Chain-of-Thought Papers Cited
- [Paper](https://arxiv.org/abs/2307.13702) - Measuring Faithfulness in Chain-of-Thought Reasoning
- [Paper](https://arxiv.org/abs/2305.04388) - Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting
- [Paper](https://arxiv.org/abs/2406.10625) - On the Hardness of Faithful Chain-of-Thought Reasoning in Large Language Models
- [Paper](https://arxiv.org/abs/2402.04614) - Faithfulness vs. Plausibility: On the (Un)Reliability of Explanations from Large Language Models

### Other Mentioned/Relevant Sources
- Andy Jones [blogpost](https://andrewcharlesjones.github.io/journal/rao-blackwellization.html) - Rao-Blackwellization 
- [Paper](https://arxiv.org/abs/2407.07890) - Training on the Test Task Confounds Evaluation and Emergence
- [Paper](https://arxiv.org/abs/2412.03556) - Best-of-N Jailbreaking
- Research [landing page](https://www.swebench.com) - SWE Bench
- [Code Competition](https://www.kaggle.com/competitions/konwinski-prize) - Konwinski Prize
- Lakera [game](https://gandalf.lakera.ai/do-not-tell) = Gandalf
- Kate Crawford's [Atlas of AI](https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/)
- BlueDot Impact's [course](https://course.aisafetyfundamentals.com/home/intro-to-tai) - Intro to Transformative AI


### Unrelated Developments
- Cruz's [letter](https://www.commerce.senate.gov/services/files/55267EFF-11A8-4BD6-BE1E-61452A3C48E3) to Merrick Garland
- AWS News Blog [article](https://aws.amazon.com/blogs/aws/introducing-amazon-nova-frontier-intelligence-and-industry-leading-price-performance/) - Introducing Amazon Nova foundation models: Frontier intelligence and industry leading price performance
- BleepingComputer [article](https://www.bleepingcomputer.com/news/security/ultralytics-ai-model-hijacked-to-infect-thousands-with-cryptominer/) - Ultralytics AI model hijacked to infect thousands with cryptominer 
- The Register [article](https://www.theregister.com/2024/12/07/microsoft_copilot_vision/) - Microsoft teases Copilot Vision, the AI sidekick that judges your tabs
- Fox Business [article](https://www.foxbusiness.com/technology/openai-ceo-sam-altman-looking-forward-working-trump-admin-says-us-must-build-best-ai-infrastructure) - OpenAI CEO Sam Altman looking forward to working with Trump admin, says US must build best AI infrastructure