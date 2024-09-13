---
title: "Open Source AI is a lie, but it doesn't have to be"
summary: Big Tech is attempting to redefine "Open Source" to their advantage; at the very least, we should know about it.
date: 2024-04-30
lastmod: 2024-06-18

image:
  caption: 'Plant / Alan Warburton'
  preview_only: true
  filename: Alan-Warburton_Plant_1280x720.jpg

authors:
  - jacobhaimes

tags:
  - Machine Learning
  - Definitions
  - AISC

categories: 
  - Blogpost

read_time: true
---
<figure>
    <img src="Alan-Warburton_Plant_1280x720.jpg"
         alt="Plant, Alan Warburton">
    <figcaption style="font-size:small">Image by <a href="https://alanwarburton.co.uk/" target="_blank" rel="noreferrer noopener">Alan Warburton</a> / © BBC / <a href="https://www.betterimagesofai.org" target="_blank" rel="noreferrer noopener">Better Images of AI</a> / Plant / <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer noopener">Licenced by CC-BY 4.0</a></figcaption>
</figure>

<i>NOTE: This post was updated to include two additional models which meet the criteria for being considered Open Source AI.</i>

## Brief: What is Open Source

As advanced machine learning systems become increasingly widespread, the question of how to make them safe is also gaining attention. Within this debate, the term “open source” is frequently brought up. Some [claim](https://arxiv.org/abs/2311.09227) that open sourcing models will potentially increase the likelihood of societal risks, while others insist that open sourcing is the only way to ensure the development and deployment of these “artificial intelligence,” or “AI,” systems goes well. <b>Despite this idea of “open source” being a central debate of “AI” governance, there are very few groups that have released cutting edge “AI” which can be considered Open Source.</b>

The term _Open Source_ was first used to describe software in 1998, and was coined by [Christine Peterson](https://opensource.com/article/18/2/coining-term-open-source-software) to describe the principles that would guide the development of the [Netscape](https://en.wikipedia.org/wiki/Netscape) web browser. Soon after, the [Open Source Initiative](https://opensource.org) was founded with the intent to preserve the meaning of Open Source. The group wrote the [Open Source Definition](https://opensource.org/osd) (OSD), and even made an unsuccessful attempt to obtain a trademark for the term.

The OSD isn’t very long, but here’s an even shorter version of the definition: the program must include source code,[^1] and the license for the software cannot restrict who uses it, what it is used for, or how it is used; it cannot constrain the manner in which the software is distributed, and it cannot prohibit modification of the software.

Quickly, Open Source garnered massive support, and either directly produced or significantly contributed towards many of the software advances that have been seen since then. Some well-known Open Source projects are the coding languages [Python](https://www.python.org/about/) and [PHP](https://www.php.net/manual/en/intro-whatis.php), the browsers [Mozilla](https://www.mozilla.org/en-US/MPL/) [Firefox](https://www.mozilla.org/en-US/about/legal/terms/firefox/) and [Chromium](https://www.chromium.org/chromium-projects/) (which Google Chrome is built on top of), the database management system [MySQL](https://www.mysql.com/products/community/), the version control system [Git](https://git-scm.com), and the [Linux](https://opensource.com/resources/linux) operating system.

Open Source gained traction because it is practically valuable to many different stakeholders. In general, these attributes can be broadly summarized by saying that open source projects…
- facilitate rapid scientific progress,
- improve functionality and reliability,
- increase security and safety through transparency, and
- promote user control, inclusivity, and autonomy.

Importantly, each of these items is highly dependent on meaningful access. <b>That is to say, if the software were difficult to investigate, modify, or repurpose, these traits would not be as prevalent.</b>

Because Open Source projects have continually demonstrated these characteristics over the past quarter century, the label of Open Source is strongly associated with these characteristics as well.

## Open Source AI

Advanced machine learning models, often referred to as “AI,” cannot be fully described by source code, in practice. Instead, models are defined with three components: architecture, training process, and weights.

Architecture refers to the structure of the neural network that a model uses as its foundation, and it can be described with source code. This architecture itself, however, is not enough information for meaningful transparency and reproducibility. As the term “machine learning” suggests, a process is conducted for the model to learn information; it is called the training process.

Although the training process, in theory, can be wholly defined by source code, this is generally not practical, because doing so would require releasing (1) the methods used to train the model, (2) all data used to train the model, and (3) so called “training checkpoints” which are snapshots of the state of the model at various points in the training process. At this point, cutting-edge models are being trained on a massive scale, with the [“[m]edian projected year in which most publicly available high-quality human-generated text will be used in a training run”](https://epochai.org/trends#data-trends-section) being 2024. For context, the largest training run consisting of only textual input that has already occurred was approximately 44,640 Gigabytes.[^2] It simply isn’t possible to store such a large volume of data for every model separately, but without doing so, independent verification of training data is practically impossible.

Finally, we get to the weights. When applied to the correct architecture, weights are functionally similar to an executable file or machine code. For traditional programs, the executable file is what the computer uses to know what to do, but such a file is not human-readable in a practical sense. Along the same lines, weights determine the methods that a model uses to produce its output, but the weights themselves are not yet fully understood. The field of Mechanistic Interpretability is making progress on this task, but right now we do not know how to comprehensively understand why a model behaves in a given manner. In other words, model weights, which in turn prescribe model behavior, cannot be described by source code.

All this is to say that “AI” models don’t fit nicely into the preexisting Open Source Definition (OSD). The Open Source Institute recognized this, and began working towards an Open Source AI Definition (OSAID), in [late 2022](https://deepdive.opensource.org/wp-content/uploads/2023/02/Deep-Dive-AI-final-report.pdf) – for context, that was just before the public [launch](https://openai.com/blog/chatgpt) of ChatGPT. This definition is still a work in progress, with the first version scheduled to be published in [October](https://opensource.org/deepdive#see_all_we_achieved_in_2023) of 2024. This means that, formally, there isn’t yet a definition for the term “Open Source AI.”

To many, this may come as a shock, because the idea of open source AI is not only commonplace, but a controversial subject when it comes to regulation. This discrepancy points towards a number of questions:

### What is Open Source AI?

<figure>
    <img src="wrong-hole.jpg"
         alt="Wrong Hole, xkalibolg">
    <figcaption style="font-size:small">Meme by xkalibolg / <a href="https://www.viz.com/junji-ito">Junji Ito</a>, <a href="https://junjiitomanga.fandom.com/wiki/The_Enigma_of_Amigara_Fault">“The Enigma of Amigara Fault”</a></figcaption>
</figure>

Although we can’t say what it is definitively, because the OSAID isn’t published yet, we can use the [working version](https://hackmd.io/@opensourceinitiative) as a starting point.[^3] First, let’s take OpenAI’s recent addition to the GPT family, GPT-4, as an example. GPT-4 is not open source – virtually no artifacts other than the [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774) are publicly available. Meta’s Llama3 model is also not open source, despite the Chief AI Scientist at the company, Yann LeCun, frequently proclaiming [that](https://twitter.com/ylecun/status/1629189925089296386) [it](https://twitter.com/ylecun/status/1748285439016886764) [is](https://twitter.com/ylecun/status/1748337952005001657). In fact, Stefano Maffuli, the Executive Director of the OSI, authored a [post](https://opensource.org/blog/metas-llama-2-license-is-not-open-source) explicitly calling this misnomer out. Llama3 is licensed with a custom agreement written by Meta, explicitly for the purpose of licensing the model.[^4] The [license](https://llama.meta.com/llama3/license/) explicitly prohibits its use for some users[^5] and restricts how the model can be used. Google Deepmind’s Gemma model is [licensed](https://ai.google.dev/gemma/terms) in a [similar manner](https://ai.google.dev/gemma/prohibited_use_policy), meaning that it isn’t Open Source either.

Mistral’s models are also not open source, but in a slightly more nuanced manner. Instead of releasing all artifacts describing their models, Mistral licensed the model weights using the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license, which meets the requirements for a license to be [Open Source](https://opensource.org/license/apache-2-0). Unfortunately, however, no other artifacts were released. As a result, Mistral’s models can be used as-is by anyone, but the transparency that should go hand-in-hand with Open Source is no longer present.

As a final example, [BLOOMZ](https://huggingface.co/bigscience/bloomz), a model developed by BigScience Workshop is also not Open Source. The model is licensed under the [Responsible AI License (RAIL) License](https://bigscience.huggingface.co/blog/the-bigscience-rail-license),[^6] which does impose some restrictions on the use of the model. While these restrictions are not necessarily a bad thing to have, they do prevent the model from obtaining the official Open Source label.

Based on the current OSAID, the following models can be considered Open Source AI:

| Model Name | Group |
| :-------------------------: | :-------------------------: |
| [Amber](https://huggingface.co/LLM360/Amber) | [LLM360](https://www.llm360.ai/) |
| [Crystal](https://huggingface.co/LLM360/CrystalCoder) | [LLM360](https://www.llm360.ai/) |
| [OLMo](https://allenai.org/olmo) | [Allen Institute for AI](https://allenai.org/) |
| [OpenELM](https://machinelearning.apple.com/research/openelm) | [Apple](https://machinelearning.apple.com/) |
| [Pythia](https://github.com/EleutherAI/pythia) | [EleutherAI](https://www.eleuther.ai/) |

### Wait… why are groups saying that their models are open source when they aren’t?

As stated previously, Open Source is strongly associated with increased fairness, inclusivity, safety, and security. Tech companies like Meta and Mistral want to use this to their advantage; by calling their models “open source,” they inflate the perception of their work as a public good without much cost to themselves.

For example, the founder of Mistral stated [multiple](https://youtu.be/yXN5xSXJ1Is?t=1831) [times](https://youtu.be/EMOFRDOMIiU?t=550) that the company’s competitive advantage is the data that they use to train models, and how they filter and generate that data. Although the weights of their models are made public, very little information is given regarding the data that was used to train the model. By tagging these models as “open source” without sharing any meaningful information about training data, the company gets to appear populist without sacrificing its competitive advantage. This behavior devalues the meaning of the Open Source label, and exploits the open source community for free labor.

It’s more than just public relations benefits too, both companies [lobbied](https://verfassungsblog.de/bigtechs-efforts-to-derail-the-ai-act/) for reduced regulations for so called “open source” models, and their efforts seems to be [working](https://www.washingtonpost.com/technology/2023/12/08/ai-act-regulation-eu/).[^7]

### Ok, so what do people mean when they refer to “open source” AI, at the time I am writing this article (April 2024)?

Regrettably, the answer to this question is not perfectly clear. Everyone is assuredly referring to some selection of models that meets certain criteria along this spectrum of openness, but where the line is drawn is up for interpretation. Of course, this has made meaningful discussion about the issue much more difficult.

### What do we do about it?

Short answer: understand how corporations are using this ambiguity to their advantage, stop calling models like Llama3, Mixtral, and Gemma open source, and call the companies out on their influence campaign.

Longer answer: even though we shouldn’t be calling these models Open Source, they are substantially more transparent than the fully closed models of OpenAI or Anthropic. To clarify this space, I propose the following naming convention:

<b>Open Source</b> models – The OSAID is currently being drafted by the Open Source Initiative in a transparent manner, so the working OSAID can be used for the purposes of defining truly open source models. Currently, the only models that fall into this category are Amber and Crystal from the LLM360 group, OLMo from the Allen Institute for AI, OpenELM from Apple Inc., and Pythia from EleutherAI. The paper “Opening up ChatGPT: tracking openness of instruction-tuned LLMs” provides a very useful [online table](https://opening-up-chatgpt.github.io)[^8] with information on many chat models, and is a useful tool for understanding the manner in which the models are actually transparent.

<b>Shared Weights</b> models – Describes all AI models which released their weights in some low-barrier capacity. Most current models claiming to be open source fall into this category.

<b>Open Release</b> models – Encompasses both Open Source AI, as defined by OSAID,  and Shared Weights Models. This term can be useful when discussing security concerns.

<b>Closed Source</b> models – For completeness, we will also explicitly define Closed Source models. These include models referred to as “black box” or “API” access; while people can use the models, the only individuals who can run the model are its owners. Queries can be screened and monitored. Sending queries through the API typically costs money.

<figure>
    <img src="open-diagram_3_small.png"
         alt="AI Openness Diagram, Jacob Haimes">
    <figcaption style="font-size:small">Original diagram by <a href="https://jacob-haimes.github.io">Jacob Haimes</a> / © Kairos.fm / AI Openness Diagram / CC-BY-SA 4.0 / created using <a href="https://tikz.dev">Tikz</a> and <a href="https://www.gimp.org">GIMP</a></figcaption>
</figure>

It is important to note, I am not saying that Shared Weights models are a negative net contribution to society. In fact, I think that the release of currently available Shared Weights models has significantly advanced the field of AI safety. This article is <i>not about the pros and cons of open source</i>, I will leave that for future work.

## Acknowledgements
A special thank you to Brian Penny, Dr. Peter Park and Giuseppe Dal Pra for reviewing the article and providing their input.


[^1]:The source code of a program is the file, written in a human-readable coding language, that defines how that program operates. To create an executable file, (aka. a binary file), the source code is compiled into machine code.

[^2]:How I got that number: Epoch says that the largest amount of data used to train a single model is approximately 9 trillion words; they also say that the Common Crawl dataset has 100 trillion words. Wikipedia reports the most recent version of the Common Crawl to be 454 Tebibytes = 464,896 Gigabytes.<br>🠖 454 TiB * .09 = 44640.17 GB

[^3]: It is worth noting that the OSAID leans heavily on the [Model Openness Framework](https://arxiv.org/abs/2403.13784) which was published by White et al. in March of 2024. The group that conducted this research is called the [Generative AI Commons](https://genaicommons.org), and is funded through the Linux Foundation. The Model Openness Framework already has a domain registered for their pending tool, [isitopen.ai](https://isitopen.ai).

[^4]:This is also an issue, but it is far less pressing, and more just annoying.

[^5]:Namely, the license prohibits Llama3’s use by Meta’s competitors, and anyone who might make a significant amount of money off of it.

[^6]:Yes, I know the title has the word license in it twice, that’s how it’s written, don’t @ me.

[^7]:Although I am by no means a legal expert, I believe that the special provisions made for Open Source models are described entirely in the EU AI Act recital 104.

[^8]:It is important to note that this table is only for <i>instruction-tuned LLMs, meaning that base models which were not instruction-tuned do not appear on the list.</i> The paper which accompanied this table, “Opening up ChatGPT: Tracking openness, transparency, and accountability in instruction-tuned text generators” was released as a preprint in mid 2023, and published for the Conversational User Interfaces conference in December of 2023. It does appear to have been updated since the conference, as OLMo now appears on this list. I am not sure how frequently it is updated.
