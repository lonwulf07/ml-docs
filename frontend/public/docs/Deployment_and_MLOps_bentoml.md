# Bentoml Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.bentoml.com/](https://www.bentoml.com/)



---

## Source: https://www.bentoml.com/

Trusted by the best AI teams

A complete platform that simplifies inference infrastructure while giving you full control over your deployment.

Deploy popular open-source models with a few clicks.

Unified framework for packaging and deploying models of any architecture, framework, or modality.

A complete platform for managing, monitoring, and optimizing Al model inference.

Intelligent resource management for optimal compute utilization.

Complete control over your infrastructure and deployment environment.

Access to cutting-edge GPU hardware without the procurement hassle.

Build and launch faster than ever - easily run and scale any model with unified deployment across frameworks.

Pre-optimized models for inference with day 1 access to newly released models.

Deploy models of any architecture, framework, or modality with full customization.

`vllm_image=bentoml.images.Image(python_version='3.11').system_packages('curl', 'git').requirements_file('requirements.txt') @bentoml.service( image=vllm_image, resources={'gpu': 1, 'gpu_type': 'nvidia-h100'}, ) class VLLM: model = bentoml.models.HuggingFaceModel("meta-llama/Meta-Llama-3.1-8B-Instruct") def __init__(self) -> None: ... @bentoml.api async def generate( self, prompt: str, max_tokens: typing_extensions.Annotated[ int, annotated_types.Ge(128), annotated_types.Le(MAX_TOKENS) ] = MAX_TOKENS, ) -> typing.AsyncGenerator[str, None]: ...`


A complete platform that simplifies inference infrastructure while giving you full control over your deployment.

Bento’s inference stack is built for easy customization. Tune every layer of your deployment to balance speed, cost, and quality for your use case.

Automatically find the optimal configuration based on your latency, throughput, or cost requirements.

Fine-tune every component to squeeze maximum efficiency from your hardware.

Run large models across multiple GPUs for faster, scalable inference.

Everything developers need to build, ship, and scale AI inference.

Iterate in the cloud as fast as you do locally

From local edits to instant cloud GPU runs in seconds

Unified interface for all LLM providers

One unified API for all LLMs, giving you centralized cost control and optimization

Complete deployment lifecycle management

Version control with rollbacks, plus canary, shadow, and A/B testing for faster, safer releases

Comprehensive monitoring and insights

Track compute and performance, monitor LLM-specific metrics, and stay on top of system health

Enterprise-grade security, compliance, and operational capabilities for mission-critical AI deployments.

Deploy on any cloud or on-premises

Infrastructure you can count on

Dedicated technical experts for your team

Full control over your data

Hear from the teams who have transformed their AI/ML operations with BentoML.

---

## Source: https://www.bentoml.com/contact

Schedule a demo to see how the Bento inference platform takes all the hassle out of AI infrastructure, providing a secure and flexible way for scaling AI inference in production.

Subscribe to our newsletter

Stay updated on AI infrastructure, inference techniques, and performance optimization.

---

## Source: https://www.bentoml.com/blog

Bento Inference Platform

Full control without the complexity. Self-host anywhere. Serve any model. Optimize for performance.

BentoML Open-Source

The most flexible way to serve AI/ML models and custom inference pipelines in production

Log In

Sign Up

Expert how-tos, deep-dive guides, and real-world stories from the Bento team, to help you build and scale AI at blazing speed.

BentoML is joining Modular to build the next generation of AI inference infrastructure.

Read Full Article

Stay updated on AI infrastructure, inference techniques, and performance optimization.

---

## Source: https://www.bentoml.com/llm

# LLM Inference Handbook

*LLM Inference Handbook* is your technical glossary, guidebook, and reference - all in one. It covers everything you need to know about LLM inference, from core concepts and performance metrics (e.g., [Time to First Token and Tokens per Second](/llm/inference-optimization/llm-inference-metrics)), to optimization techniques (e.g., [continuous batching](/llm/inference-optimization/static-dynamic-continuous-batching) and [prefix caching](/llm/inference-optimization/prefix-caching)) and deployment patterns like [BYOC](/llm/infrastructure-and-operations/bring-your-own-cloud) and [on-prem](/llm/infrastructure-and-operations/on-prem-llms).

- Practical guidance for deploying, scaling, and operating LLMs in production.
- Focus on what truly matters, not edge cases or technical noise.
- Boost performance with optimization techniques tailored to your use case.
- Continuously updated with the latest best practices and field-tested insights.

## Motivation[](#motivation)

We wrote this handbook to solve a common problem facing developers: LLM inference knowledge is often fragmented; it’s buried in academic papers, scattered across vendor blogs, hidden in GitHub issues, or tossed around in Discord threads. Worse, much of it assumes you already understand half the stack.

There aren’t many resources that bring it all together — like how [inference differs from training](/llm/llm-inference-basics/training-inference-differences), why [goodput matters more than raw throughput](/llm/inference-optimization/llm-inference-metrics#goodput) for meeting SLOs, or how [prefill-decode disaggregation](/llm/inference-optimization/prefill-decode-disaggregation) works in practice.

So we started pulling it all together.

## Who this is for[](#who-this-is-for)

This handbook is for engineers deploying, scaling or operating LLMs in production, whether you're fine-tuning a small open model or running large-scale deployments on your own stack.

If your goal is to make LLM inference faster, cheaper, or more reliable, this handbook is for you.

## How to use this[](#how-to-use-this)

You can read it start-to-finish or treat it like a lookup table. There’s no wrong way to navigate. We’ll keep updating the handbook as the field evolves, because LLM inference is changing fast, and what works today may not be best tomorrow.

## Contributing[](#contributing)

We welcome contributions! If you spot an error, have suggestions for improvements, or want to add new topics, please open an issue or submit a pull request on our [GitHub repository](https://github.com/bentoml/llm-inference-handbook).

### Stay updated with the handbook

Get the latest insights and updates on LLM inference and optimization techniques.

- Monthly insights
- Latest techniques
- Handbook updates

---

## Source: https://www.bentoml.com/customers

Discover how industry leaders and technology pioneers leverage BentoML to streamline their AI deployments, accelerate time-to-market, and reduce infrastructure costs.

Learn how Jabali AI partnered with Bento to stand up a complex generative visual asset pipeline and accelerate iteration, all without hiring a dedicated infrastructure team.

from onboarding to first working prototype

faster development time

Learn how Yext achieved 2x faster time-to-market and reduced compute costs by 80% with BentoML’s unified inference platform.

savings in development time

more models shipped

Neurolabs leverages BentoML’s inference platform to build advanced computer vision pipelines and streamline AI deployment.

faster time-to-market

compute cost reduction

Learn how a consumer lending company streamlined model deployment, reduced infrastructure spend by 90%, and shipped 50% more models with the Bento Inference Platform.

lower compute costs with the Bento Inference Platform’s BYOC deployment

more models shipped through streamlined deployment

BentoML collaborates with top technology, cloud, and AI providers to empower users with scalable AI systems.

---

## Source: https://www.bentoml.com/blog/accelerating-ai-innovation-at-yext-with-bentoml

## Takeaways[#](#takeaways)

**Cutting development time by 70%** by standardizing development processes and team collaboration.
**Reducing compute costs by up to 80%** with BentoML's multi-cloud, multi-region deployment and efficient autoscaling capability.
**Shipping 2x more models** by enabling the Data Science team to self-serve and the Engineering team to work on higher leverage tasks.

“BentoML enables our Data Science and Engineering teams to work independently, without the need for constant coordination. This allows us to build and deploy AI services with incredible efficiency while giving the ML Engineering team the flexibility to refactor when needed. What used to take days, now takes just hours. In the first four months alone, we deployed over 40 models, and now run over 150 in production, thanks to BentoML's standardized platform.”

——— Michael Misiewicz, Director of Data Science at Yext


## Background[#](#background)

[Yext](https://www.yext.com/) is the leading digital presence platform, recognized for revolutionizing how multi-location brands worldwide connect with customers. With one central platform, Yext empowers brands to deliver accurate, consistent information across all digital touchpoints. They implement cutting-edge AI solutions to simplify the management of local listings, webpages, reviews, social media, and more.

Yext uses a diverse set of AI architectures that enhance content creation, information retrieval, recommendations, and optimization for both traditional and AI-powered search engines. These services require deploying a variety of AI models, from state-of-the-art generative models to fine-tuned small language models and classical statistical ML models. This comprehensive approach to creating AI products has helped Yext meet the varied requirements of its offerings while driving enhanced engagement and visibility for its customers.

## Growing pains in scaling AI workloads[#](#growing%20pains%20in%20scaling%20ai%20workloads)

Like many enterprises scaling their AI workloads, Yext encountered common challenges around infrastructure and process coordination. While the team had a strong foundation of innovative AI products, these friction points made it difficult to bring models into production quickly.

**Rigid infrastructure slowed down deployment**. With a range of experimental AI products, Yext needed to bring multiple prototypes into production. However, without a flexible infrastructure and a standardized framework, the team’s iteration speed couldn’t keep up with demand. This resulted in slower progress.
**Productionizing AI models was time-consuming and prone to error.** Managing various AI models required the team to repeatedly build the same instrumentation, optimizations and tooling for each service. This duplication extended development timelines and increased the risk of errors and resource constraints.
**Cross-team dependencies added complexity**. Each new model release required the ML Engineering team to build a new service in the production infrastructure. This added workload slowed down iterations and limited the team’s ability to quickly adapt to changing demands or explore new use cases.

“Bringing new services to production took a lot more time than expected, especially when new infrastructure requirements were involved, which is often the case with AI workloads,” said Misiewicz.

## Transforming AI operations with a flexible and cost-efficient platform[#](#transforming%20ai%20operations%20with%20a%20flexible%20and%20cost-efficient%20platform)

Faced with these challenges, Yext recognized the need for a standardized platform with the flexibility to support its wide array of model-serving use cases.

“Instead of a restrictive, all-encompassing platform, we wanted a solution that would integrate seamlessly with our existing infrastructure and support our preferred workflows. It also needed to be flexible in GPU deployment options,” Misiewicz added.

After evaluation, Yext selected [BentoML](https://www.bentoml.com/) for several key benefits:

**Reducing time spent on infrastructure operations**. [BentoCloud’s BYOC option](https://www.bentoml.com/blog/byoc-to-bentocloud-privacy-flexibility-and-cost-efficiency-in-one-package) combines the benefits of a fully managed platform with the control of a secure, customer-controlled cloud account. This deployment architecture minimized infrastructure demands, allowing the Yext team to focus on high-impact work while benefiting from the latest AI infrastructure innovations.
**Streamlining existing processes with integrations**. BentoML easily integrates with the existing model training and experimentation workflows. This was an important requirement for Yext, as it wanted to avoid overhauling its development process to accommodate a new platform.

“After exploring BentoML, we believed it would be a great fit as it offered the integrations, flexibility and scalability that we wanted from an inference platform,” said Misiewicz.

**Shipping AI products faster with a standardized framework**. BentoML standardizes how teams collaborate and ship models to production. First, BentoML’s primitives make it much easier for data scientists to create AI services with various models using minimal code. Second, the standardized framework reduces the back-and-forth communication required between data scientists and ML engineers. This frees ML engineers from repetitive deployment tasks, allowing them to focus on more critical initiatives and core business development.
**Saving money with a hybrid cloud architecture**. BentoML’s cloud-agnostic approach allows Yext to easily deploy models across various regions to not only comply with local regulations but also optimize for GPU cost and availability. This enables Yext to maximize resource usage while efficiently scaling globally.

Once the decision was made, getting the initial projects up and running was fast and intuitive. The Yext Data Science team quickly adapted to the platform, gradually applying it to various mission-critical ML and GenAI projects. Throughout this transition, the BentoML team worked closely with Yext, utilizing weekly check-ins and daily, direct communication to ensure the success of the projects.

## Faster and more efficient AI products at a global scale[#](#faster%20and%20more%20efficient%20ai%20products%20at%20a%20global%20scale)

Since adopting BentoML, Yext has seen significant operational improvements, including:

**Cutting development time by 70%**. With BentoML’s unified serving framework that standardizes performance optimization and workflow management, models are getting to production in hours rather than days.
**Reducing the reliance on the infrastructure team.** The Data Science team can now push, deploy and scale their models independently using BentoCloud's advanced SDKs which are accessible using Python, CLI or a convenient dashboard.
**Lowering compute costs by up to 80%.** BentoML’s cloud-agnostic approach enables Yext to deploy to regions with the best GPU rates and availability. In addition, efficient auto-scaling and scale-to-zero features ensure no over-provisioning is needed.
**Shipping 2x more models**. Serving a global market requires Yext to provision their products to handle a variety of languages. With BentoCloud they were able to ship 2x the number of models for customers all over the world. In the process of rolling out new language models, Yext was able to deploy over 15 different models in a week. Today, Yext runs over 150 models in production, all powered by BentoCloud’s scalable and efficient infrastructure.

“We are thrilled with the results and the changes BentoML has brought, particularly the time saved in our development and deployment processes,” Misiewicz said. “It bridges the gap between our Data Science and Engineering teams, accelerating our iteration cycle.”

“At BentoML, our goal is to help enterprises lead and succeed with AI,” said Chaoyu Yang, CEO and Founder of BentoML. “We provide fast and scalable infrastructure for model inference and advanced AI applications. It’s exciting to see how well BentoML integrates into Yext’s infrastructure and standardizes its workflow.”

## Conclusion[#](#conclusion)

BentoML has transformed the Yext workflow for developing and deploying AI models by providing a standardized framework that enhances team collaboration. With infrastructure burdens offloaded, the Yext Data Science team can now explore a wider range of AI use cases to expand its business. This shift lays the groundwork for ongoing growth and success in their AI-driven initiatives.

## More resources[#](#more%20resources)

[Learn more about Yext](https://www.yext.com/)
[Sign up for our Inference Platform.](https://console.modular.com/signup?utm_source=bentoml_blog) Build and scale your custom AI systems in production, with any model, on any cloud or on-premises environment.
[Join our community forum](https://forum.modular.com/c/bento/31?utm_source=bentoml_blog) to connect with other builders.
- Have questions?
[Schedule a call with our experts](https://www.modular.com/request-demo?utm_source=bentoml_blog).

---

## Source: https://www.bentoml.com/blog/neurolabs-faster-time-to-market-and-save-cost-with-bentoml

BentoML’s infrastructure gave us the platform we needed to launch our initial product and scale it without hiring any infrastructure engineers. As we grew, features like scale-to-zero and BYOC have saved us a considerable amount of money.

—— Patric Fulop, CTO of Neurolabs


Neurolabs works with leading consumer packaged goods (CPG) companies in the world to streamline the collection of in-store performance data. Using Synthetic Computer Vision (SCV) models, Neurolabs leverages simulated image data to accurately identify products on retail shelves, track compliance, and gather valuable retail insights. This enables brands to optimize retail execution, enhance customer experiences, and ultimately drive revenue growth.

In doing this, they have also built the most comprehensive 3D asset library for product recognition in the industry.

As Neurolabs was transitioning its advanced SCV models to production AI systems, they encountered several challenges in deployment and scaling.

Recognizing these challenges, Neurolabs began searching for an established infrastructure platform that could help transition its AI models to production with speed, reliability and scalability.

“BentoML’s specialized model serving platform proved to be the ideal solution. It complements our expertise in developing advanced Computer Vision pipelines and provides the infrastructure we need to streamline AI deployment,” said Patric Fulop, CTO of Neurolabs.

Key benefits of BentoML to Neurolabs:

**Streamlining AI infrastructure without hiring an infrastructure team**. BentoML equipped Neurolabs with the infrastructure to quickly move prototypes to production, saving on hiring costs and enabling data scientists to focus on optimizing AI models. Setting up the infrastructure was a fast, seamless process where the necessary components were automatically installed in Neurolab’s cloud account to provide the necessary security and data privacy.

**Saving development time with BentoML’s standardized framework**. BentoML makes it easy for Neurolabs to bring custom models online for its diverse client base. It seamlessly integrates with the training and CI/CD workflows, allowing data scientists to frequently train and update models with minimal friction. This leads to a much faster end-to-end deployment cycle and a shorter time to market.

**Purpose built for deploying compound AI systems**. BentoML provides the [essential building blocks to create and connect multiple AI services](https://docs.bentoml.com/en/latest/get-started/model-composition.html). For example, users can run separate services or models on CPU or GPU independently (e.g. isolating data pre-processing tasks from model inference) and configure communication between them as needed.

“The way BentoML helps build compound AI systems provides new insights for how we approach our internal pipelines,” said Calin Cojocaru, AI Engineer at Neurolabs. “We haven’t fully tapped the potential yet, but it’s certainly making us think more about how we will use it moving forward.”

**Cost savings with auto-scaling and scale to zero**. BentoML automatically manages different traffic patterns with no manual intervention needed. It scales workloads to zero during low-traffic periods and achieves fast startup when traffic surges. This helps Neurolabs maintain optimal performance while minimizing infrastructure costs. [Since configuring autoscaling and scaling to zero with BentoML is straightforward](https://docs.bentoml.com/en/latest/scale-with-bentocloud/scaling/autoscaling.html), it also reduces operational overhead and saves significant development time.

Since partnering with BentoML, Neurolabs has a variety of improvements:

“BentoML has helped us smoothly transition to productionizing our AI systems. It not only meets our current needs but also future-proofs us for more advanced use cases,” Fulop added.

Neurolabs expects a significant increase in model usage as it continues to develop and deploy new models to meet the growing demands of clients. As it scales, it plans to explore how BentoML’s support for compound AI can unlock more advanced use cases. With BentoML’s robust infrastructure in place, Neurolabs is well-prepared to manage this growth.

---

## Source: https://www.bentoml.com/blog/tomtom-and-bentoml-are-advancing-location-based-ai-together

**Note**: This blog post is also published on .

[TomTom](https://www.tomtom.com/) stands as a pioneering mapmaker, providing location data and technology to a diverse clientele including drivers, carmakers, businesses, and developers. Its application-ready maps, routing solutions, real-time traffic updates, as well as APIs and SDKs enable dreamers and doers to shape the future of mobility. With its headquarters in Amsterdam, TomTom's global presence is marked by a dedicated team of over 3,800 employees. For more than 30 years, TomTom has been a trusted companion, guiding people through the world with precision and reliability.

Over the past year, the AI industry has witnessed significant advancements in Generative AI (GenAI) technologies. Large Language Models (LLMs) like GPT-4 and open-source alternatives such as Llama2 have made building AI applications more accessible and user-friendly, reducing the need to invest years into developing deep ML skills. This transformation has caught the attention of not only AI experts but also business professionals, emphasizing the unique aspects and potential of using LLMs in contrast to traditional ML projects.

Amid these trends, TomTom has actively engaged with AI advancements. As a company deeply rooted in maps and navigation technologies, its data-centric nature positions it well for AI and ML innovations. This aligns with its mission to provide global real-time maps and navigation services. Specifically, [TomTom's strategic response](https://engineering.tomtom.com/GenAI-journey/) to these developments has included democratizing innovation across teams, prioritizing impactful projects, and establishing a GenAI center of excellence. In addition, TomTom is working with academia and startups for early R&D and cloud providers on foundational models and infrastructure. These have helped TomTom quickly get started and experiment with the latest AI technologies, ensuring it stays at the forefront of the evolving tech landscape.

One of TomTom’s early partners was BentoML, which provides a unified AI application framework that’s helped the mapmaker get experiments off the ground, especially in model serving and deployment. With its end-to-end solution for streamlining the deployment process, BentoML simplifies the transition from a machine learning model to a fully operational AI service, making it a comprehensive tool for modern AI-driven solutions.

Working on AI experiments with BentoML has helped TomTom maintain focus on its core competency in maps and navigation services, while also trying out the latest AI technologies speedily. TomTom selected BentoML as a partner for rapid experimentation and innovation due to the following principal reasons:

For BentoML, the partnership with TomTom represents a significant opportunity. Working with a global leader in navigation technologies validates BentoML’s strong capabilities in LLM serving and deployment in production. It allows the BentoML team to refine the project further for real-world LLM use cases.

TomTom's exploration into LLM-powered services involves addressing various challenges. While starting with Azure OpenAI APIs is fantastic for quickly getting a prototype out the door, you’ll probably want more control to improve upon your prototype.

For example, while LLMs *can* effectively perform tasks like data classification, scaling these services requires more cost-effective and efficient strategies. Therefore, experimenting with different, possibly open-source models, replacing large models with smaller ones, and applying optimizations such as mini-batching techniques become essential.

In some cases, TomTom's approach to improving LLM-powered applications emphasizes using different models for specific tasks. By analyzing the problematic areas of the system — whether in quality, latency or cost — TomTom can replace parts with more suitable alternatives, streamlining its application. However, this requires a glue solution for coordinating the pipeline.

This is where BentoML comes in. It provides a straightforward way to integrate various models, simplifying the process of model composition and inference. BentoML, particularly with its serverless platform [BentoCloud](https://www.bentoml.com/cloud), acts as a cohesive agent in AI apps, enabling developers to focus on core functionalities without getting bogged down by extensive microservice architecture and complex infrastructure.

The collaboration between TomTom and BentoML has yielded fruitful results in the following aspects:

---

## Source: https://www.bentoml.com/blog/a-guide-to-open-source-image-generation-models

[LLMs](https://bentoml.com/llm/) are only one of the important players in today’s rapidly evolving AI world. Equally transformative and innovative are the models designed for visual creation, like text-to-image, image-to-image, and image-to-video models. They have opened up new opportunities for creative expression and visual communication, enabling us to generate beautiful visuals, change backgrounds, inpaint missing parts, replicate compositions, and even turn simple scribbles into professional images.

One of the most mentioned names in this field is Stable Diffusion, which comes with a series of open-source visual generation models, like Stable Diffusion 1.4, XL and 3.5 Large, mostly developed by Stability AI. However, in the expansive universe of AI-driven image generation, they represent merely a part of it and things can get really complicated as you begin to choose the right model for serving and deployment. A quick search on Hugging Face [gives over 90,000 text-to-image models alone](https://huggingface.co/models?pipeline_tag=text-to-image).

In this blog post, we will provide a featured list of open-source models that stand out for their ability in generating creative visuals. After that, we will also answer frequently asked questions to help you navigate this exciting yet complex domain, providing insights into using these models in production.

[Released in November 2025 by Black Forest Labs](https://flux2.io/flux-2-0-is-finally-here/), FLUX.2 marks a major leap from experimental image generation toward true production-grade visual creation.

Currently, FLUX.2 is available through both managed APIs and open-weight checkpoints, covering both enterprise and developer use cases. It provides four variants:

Note that [pro] and [flex] can only be accessed through their playgrounds, APIs and launch partners.

Why should you use FLUX.2:

If you're looking to run FLUX models in production with lower latency and cost, MAX can deliver [~4× faster image generation than torch.compile while maintaining image quality](https://www.modular.com/blog/modular-26-2-state-of-the-art-image-generation-and-upgraded-ai-coding-with-mojo?utm_source=bentoml_blog). It supports sub-second generation at production quality, up to 5.5× lower total cost of ownership on AMD MI355X, and as much as 99% lower cost per image compared to hosted APIs like Nano Banana Pro.

[Stable Diffusion (SD)](https://huggingface.co/models?other=stable-diffusion) has quickly become a household name in generative AI since its launch in 2022. It is capable of generating photorealistic images from both text and image prompts.

You might often hear people use the term “diffusion models” together with Stable Diffusion, which is the base AI technology that powers Stable Diffusion. Simply put, diffusion models generate images by starting with a pattern of random noise and gradually shaping it into a coherent image through a process that reversibly adds and removes noise. This process is computationally intensive but has been optimized in Stable Diffusion with latent space technology.

Latent space is like a compact, simplified map of all the possible images that the model can create. Instead of dealing with every tiny detail of an image (which takes a lot of computing power), the model uses this map to find and create new images more efficiently. It's a bit like sketching out the main ideas of a picture before filling in all the details.

In addition to static images, Stable Diffusion can also produce videos and 3D objects, making it a comprehensive tool for a variety of creative tasks.

Why should you use Stable Diffusion:

**Multiple variants**: Stable Diffusion comes with a variety of popular base models, such as Stable Diffusion 1.4, 1.5, 2.0, and 3.5 (Medium, Large and Turbo), Stable Diffusion XL, Stable Diffusion XL Turbo, and Stable Video Diffusion. They also provide optimized models for [NVIDIA](https://huggingface.co/collections/stabilityai/nvidia-optimized-684937de2f047a43a8b5456b) and [AMD](https://huggingface.co/collections/stabilityai/amd-optimized-67ffb6cf305b5b4bc17c4c34) GPUs respectively.

[According to this evaluation graph](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0#evaluation), the SDXL base model performs significantly better than the previous variants. Nevertheless, I think it is not 100% easy to say which model generates better images than others. This is because the results can impacted by various factors, like prompt, inference steps and LoRA weights. Some models even have more LoRAs available, which is an important factor when choosing the right model. For beginners, I recommend you start with SD 1.5 or SDXL 1.0. They're user-friendly and rich in features, perfect for exploring without getting into the technical details.

**Customization and fine-tuning**: Stable Diffusion base models can be fine-tuned with as little as five images for generating visuals in specific styles or of particular subjects, enhancing the relevance and uniqueness of generated images. One of my favorites is [SDXL-Lightning](https://huggingface.co/ByteDance/SDXL-Lightning), built upon Stable Diffusion XL; it is known for its lightning-fast capability to generate high-quality images in just a few steps (1, 2, 4, and 8 steps).

**Controllable**: Stable Diffusion provides you with extensive control over the image generation process. For example, you can adjust the number of steps the model takes during the diffusion process, set the image size, specify the seed for reproducibility, and tweak the guidance scale to influence the adherence to the input prompt.

**Future potential**: There's vast potential for integration with animation and video AI systems, promising even more expansive creative possibilities.

Points to be cautious about:

**Note**: [See our blog post](https://www.bentoml.com/blog/stable-diffusion-3-text-master-prone-problems) to learn how it performs compared with SD 2 and SDXL and how you can improve its generated images.

Here is a code example of serving Stable Diffusion models with BentoML:

[Deploy Stable DiffusionDeploy Stable Diffusion](https://github.com/bentoml/BentoDiffusion)

[GLM-Image](https://huggingface.co/zai-org/GLM-Image) is an open-source image generation model from Zhipu AI ([Z.ai](http://Z.ai)) that uses a hybrid autoregressive (AR) + diffusion decoder architecture. In general image quality, it’s competitive with mainstream latent diffusion models, but it stands out in two scenarios that many diffusion models still struggle with:

Under the hood, GLM-Image pairs:

Why should you use GLM-Image:

Points to be cautious about:

If you care about typography quality and complex prompts more than raw speed, GLM-Image is one of the most practical options.

Z-Image is a highly efficient open-source image generation model with only 6B parameters. It is designed for fast, high-quality visual generation on both consumer and enterprise GPUs.

The flagship variant, [Z-Image-Turbo](https://huggingface.co/Tongyi-MAI/Z-Image-Turbo), is a distilled version optimized for ultra-fast inference. It achieves sub-second latency on enterprise GPUs and runs comfortably within 16 GB VRAM consumer cards. This makes it one of the most practical open-source image generation models for real-time and large-scale batch workloads.

Z-Image also includes a dedicated image editing variant, Z-Image-Edit, which is fine-tuned for instruction-based image-to-image generation. However, this model has not been released yet.

Why should you use Z-Image-Turbo:

Points to be cautious about:

Developed by the Qwen team at Alibaba, [Qwen-Image](https://huggingface.co/Qwen/Qwen-Image) is the image generation foundation model in the Qwen series. It stands out as a next-generation diffusion model that brings together text-aware visual generation, intelligent editing, and vision understanding. It adopts Apache 2.0, making it an excellent choice for commercial-ready image generation.

[Qwen-Image-2512](https://huggingface.co/Qwen/Qwen-Image-2512) is the latest iteration, with improvements in realism, visual details, and text rendering quality.

Why should you use Qwen-Image:

Note that the image editing version is Qwen-Image-Edit, which is built upon the 20B Qwen-Image model. The latest iteration, [Qwen-Image-Edit-2509](https://huggingface.co/Qwen/Qwen-Image-Edit-2509), further enhances editing consistency and introduces multi-image editing, supporting operations across one to three input images (e.g., “person + product” or “person + scene”). It also adds ControlNet-based conditioning (depth, edge, and keypoint maps) for more structured and controllable results.

If you are working with complex image editing workflows, also take a look at [Qwen-Image-Layered](https://huggingface.co/Qwen/Qwen-Image-Layered). It introduces a layered RGBA representation that decomposes an image into multiple editable layers. This means you can edit them independently in a precise, non-destructive way, including recoloring, resizing, repositioning, object replacement, and clean deletion.

Points to be cautious about:

If you are considering Qwen-Image, I also recommend [Qwen-Image-Lightning](https://github.com/ModelTC/Qwen-Image-Lightning/), a distilled and speed-optimized variant of the base model. It delivers high-quality image generation with a 12 to 25× speed improvement in most scenarios, with no significant loss in visual quality. By reducing inference steps to as few as 4 to 8, Qwen-Image-Lightning is ideal for real-time applications, high-throughput pipelines, and large-scale batch processing.

Developed by Tencent’s Hunyuan team, [HunyuanImage-3.0](https://huggingface.co/tencent/HunyuanImage-3.0) is a native multimodal autoregressive image generation model. Unlike the traditional DiT-style pipelines, it models text and image tokens in a single framework, improving world-knowledge reasoning and prompt adherence. It’s also the **largest open-source image-generation MoE model to date**, with 80B total parameters and 64 experts (~13B active per token).

Why should you use HunyuanImage-3.0:

Points to be cautious about:



Now let’s answer some of the FAQs for open-source image generation models. Questions like “Why should I choose open-source models over proprietary ones” are already [covered in my previous blog post](https://www.bentoml.com/blog/navigating-the-world-of-large-language-models), so they are not listed here.

LoRA, or Low-Rank Adaptation, is an advanced technique designed for fine-tuning machine learning models, including generative models like Stable Diffusion. It works by using a small number of trainable parameters to fine-tune these models on specific tasks or to adapt them to new data. As it significantly reduces the number of parameters that need to be trained, it does not require extensive computational resources.

With LoRA, you can enhance Stable Diffusion models by customizing generated content with specific themes and styles. If you don’t want to create LoRA weights yourself, check out the LoRA resources on [Civitai](https://civitai.com/search/models?sortBy=models_v8&query=lora).

[ComfyUI](https://github.com/comfyanonymous/ComfyUI) is a powerful, node-based interface for creating images with diffusion models. Unlike traditional interfaces, ComfyUI gives users advanced control over the image generation process by allowing them to customize workflows visually, using "nodes" to link different parts of the pipeline. I highly recommend it for anyone who wants more control and precision in their AI artwork. Read this blog post about [ComfyUI custom nodes](https://www.bentoml.com/blog/a-guide-to-comfyui-custom-nodes).

However, sharing ComfyUI workflows with others and deploying them as scalable APIs can be challenging due to missing custom nodes, incorrect model files, or Python dependencies. A simple solution is [comfy-pack](https://github.com/bentoml/comfy-pack). It packages everything you need into a .cpack.zip file for easy sharing. It also allows you to serve and deploy ComfyUI workflows as scalable and secure APIs with just one click.

[Serve ComfyUI workflows as APIsServe ComfyUI workflows as APIs](https://www.bentoml.com/blog/comfy-pack-serving-comfyui-workflows-as-apis)

[A1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui), short for AUTOMATIC1111’s Stable Diffusion Web UI, is one of the most popular open-source interfaces for running Stable Diffusion locally.

It uses a Gradio-based interface, which makes it very beginner-friendly. You can easily switch between common workflows such as text-to-image, image-to-image, and outpainting/inpainting directly from the UI without coding.

Compared to ComfyUI, the biggest advantage of A1111 is simplicity. You can install it, load a model, and start generating AI art in minutes. However, it lacks features for users who need advanced customization.

My suggestion is:

Creating high-quality images with image generation models involves a blend of creativity, precision, and technical understanding. Some key strategies to improve your outcomes:

The short answer is YES.

Copyright concerns are a significant aspect to consider when using image generation models, including not just open-source models but commercial ones. There have been lawsuits against companies behind popular image generation models [like this one](https://www.findlaw.com/legalblogs/federal-courts/judge-trims-copyright-lawsuit-against-ai-model-stable-diffusion/).

Many models are trained on vast datasets that include copyrighted images. This raises questions about the legality of using these images as part of the training process.

Another thing is that determining the copyright ownership of AI-generated images can be complex. If you're planning to use these images commercially, it's important to consider who holds the copyright — the user who inputs the prompt, the creators of the AI model, or neither.

So, what can you do?

At this stage, the best suggestion I can give to someone using these models and the images they create is to stay informed. The legal landscape around AI-generated images is still evolving. Keep abreast of ongoing legal discussions and rulings related to AI and copyright law. Understanding your rights and the legal status of AI-generated images is crucial for using these tools ethically and legally.

Deploying LLMs and image generation models in production requires similar considerations on factors like scalability and observability, but they also have their unique challenges and requirements.

Choosing the right model for image generation requires you to understand their strengths and limitations. Each model brings its unique capabilities to the table, supporting different real-world use cases. Currently, I believe the biggest challenge for image generation models is ethical and copyright concerns. As we embrace the potential of them to augment our creative process, it's equally important to use these tools responsibly and respect copyright laws, privacy rights, and ethical guidelines.

We work to help enterprises build scalable AI systems with production-grade reliability using any model (including the diffusion models mentioned above). Our unified inference platform lets developers bring their custom inference code and libraries to build AI systems 10x faster without the infrastructure complexity. You can scale your application efficiently in your cloud and maintain full control over security and compliance.

To deploy diffusion models, [explore our examples](https://github.com/bentoml/BentoDiffusion) and [sign up for our inference platform](https://console.modular.com/signup?utm_source=bentoml_blog) with enterprise-grade security, scalability and deployment management. Additionally, learn to choose the right [NVIDIA](https://www.bentoml.com/blog/nvidia-data-center-gpus-explained-a100-h200-b200-and-beyond) or [AMD](https://www.bentoml.com/blog/amd-data-center-gpus-mi250x-mi300x-mi350x-and-beyond) GPUs and the right deployment patterns (e.g., [BYOC](https://www.bentoml.com/llm/infrastructure-and-operations/bring-your-own-cloud), [multi-cloud and cross-region](https://www.bentoml.com/llm/infrastructure-and-operations/multi-cloud-and-cross-region-inference), [on-prem and hybrid](https://www.bentoml.com/llm/infrastructure-and-operations/on-prem-llms)) for your use case.

Still have questions? [Schedule a call with our support engineers](https://www.modular.com/request-demo?utm_source=bentoml_blog) or [join our community forum](https://forum.modular.com/c/bento/31?utm_source=bentoml_blog) to get expert guidance.

---

## Source: https://www.bentoml.com/blog/the-best-open-source-small-language-models

When running [open-source LLMs](https://www.bentoml.com/blog/navigating-the-world-of-open-source-large-language-models) in production, you probably hit GPU limits faster than expected.

[VRAM](https://www.bentoml.com/blog/what-is-gpu-memory-and-why-it-matters-for-llm-inference) fills up quickly. The [KV cache](https://bentoml.com/llm/inference-optimization/kv-cache-offloading) grows with every request. Latency spikes as soon as concurrency increases. A model that works fine in a demo actually needs multiple high-end GPUs for production.

For many teams, proprietary models like GPT-5 feel like an easy way out. A simple API call hides the complexity of GPU memory management, batching, and scaling. However, that convenience comes with [trade-offs](https://www.bentoml.com/blog/chatgpt-usage-limits-explained-and-how-to-remove-them): vendor lock-in, limited customization, unpredictable pricing at scale, and ongoing concerns about data privacy.

This tension brings teams back to self-hosting. The good news is that you no longer need large models to get strong results. Over the past year, advances in distillation, training data, and post-training have made small language models far more capable than their parameter counts suggest. Many now deliver solid reasoning, coding, and agentic performance, and fit comfortably on a single GPU.

In this post, we’ll look at the best open-source small language models, and explain when and why they make sense in certain cases. After that, we’ll answer some FAQs teams have when evaluating them for production deployments.

Small language models (SLMs) are best defined by their deployability, not just their parameter count. In practice, the term usually refers to models ranging from a few hundred million to around 10 billion parameters that can run reliably in resource-constrained environments.

Some people might think SLMs are impractical for production. They are faster and cheaper to run, but noticeably weaker at reasoning, coding, and instruction following tasks. In fact, that gap has narrowed significantly with recent advances:

Today, many popular open-source LLM families offer small parameter variants that are strong enough for production use. They power chatbots, agent pipelines, and high-throughput automation workflows where latency, cost, and operational simplicity matter more than sheer model size.

Now, let’s take a look at the top SLMs.

[Qwen3.5-0.8B](https://huggingface.co/Qwen/Qwen3.5-0.8B) is a lightweight multimodal model from Alibaba’s Qwen family, released under the Apache 2.0 license. It combines a 0.8B causal language model with a vision encoder and supports both thinking and non-thinking modes.

Why should you use Qwen3.5-0.8B:

Points to be cautious about:

If you can afford a bit more compute, I also recommend [Qwen3.5-2B](https://huggingface.co/Qwen/Qwen3.5-2B) and [Qwen3.5-4B](https://huggingface.co/Qwen/Qwen3.5-4B). They keep the same multimodal design, and offer comparable or better performance than models like GPT-OSS-120B.

[Gemma-3n-E2B-IT](https://huggingface.co/google/gemma-3n-E2B-it) is an instruction-tuned multimodal small model from Google DeepMind, built for on-device and other low-resource deployments. It accepts text, image, audio, and video inputs and generates text outputs.

While the raw parameter count is around 5B, it uses selective parameter activation, so it can run with a memory footprint closer to a traditional 2B model in many deployments.

The Gemma 3n family is trained on data spanning 140+ languages, which is a big deal if you need multilingual support without jumping to much larger models.

Why should you use Gemma-3n-E2B-IT:

Points to be cautious about:

[Phi-4-mini-instruct](https://huggingface.co/microsoft/Phi-4-mini-instruct) is a lightweight, instruction-tuned model from Microsoft’s Phi-4 family. It is trained on a mix of high-quality synthetic data and carefully filtered public datasets, with a strong emphasis on reasoning-dense content.

With only 3.8B parameters, Phi-4-mini-instruct shows reasoning and multilingual performance comparable to much larger models in the 7B–9B range, such as Llama-3.1-8B-Instruct. It’s a solid choice for teams that want strong instruction following and reasoning without the operational overhead of larger models.

Why should you use Phi-4-mini-instruct:

Points to be cautious about:

**Limited factual knowledge**. Phi-4-mini-instruct doesn’t store large amounts of world knowledge. It may produce inaccurate or outdated facts, especially for knowledge-heavy or long-tail queries. I suggest you pair it with RAG or external tools for production use.

**Language performance varies**. Although it supports multiple languages, performance outside English can be uneven. Non-English or low-resource languages should be carefully benchmarked before deployment.

**Sensitive to prompt format**. Phi-4-mini-instruct performs best with its recommended chat and function-calling formats. Otherwise, it can negatively impact instruction adherence and output quality. For example, you should use the following format for general conversation and instructions:

`<|system|>Insert System Message<|end|><|user|>Insert User Message<|end|><|assistant|>`


[SmolLM3-3B](https://huggingface.co/HuggingFaceTB/SmolLM3-3B) is a fully open instruct and reasoning model from Hugging Face. At the 3B scale, it outperforms Llama-3.2-3B and Qwen2.5-3B, while staying competitive with many 4B-class alternatives (including Qwen3 and Gemma 3) across 12 popular LLM benchmarks.

What also sets SmolLM3 apart is the level of transparency. Hugging Face published the full engineering blueprint of it, including architecture decisions, data mixture, and post-training methodology. If you’re building internal variants or want to understand what actually drives quality at 3B, that matters.

Why should you use SmolLM3-3B:

`/think`

and `/no_think`

, so you can default to fast responses and only pay the reasoning cost when a request is genuinely hard.Points to be cautious about:

[Ministral-3-3B-Instruct-2512](https://huggingface.co/mistralai/Ministral-3-3B-Instruct-2512) is a multimodal SLM developed by Mistral AI. It’s the smallest instruct model in the Ministral 3 family, designed specifically for edge and resource-constrained deployments.

Architecturally, it combines a 3.4B language model with a 0.4B vision encoder, supporting basic visual understanding alongside chat and instruction following. In practice, it can run on a single GPU and fit into roughly 8 GB of VRAM in FP8, or even less with further quantization.

Why should you use Ministral-3-3B-Instruct-2512:

Points to be cautious about:



Now let’s take a look at some FAQs.

There’s no strict cutoff, but in practice, SLMs usually fall in the sub-1B to ~10B parameter range. Models in this range can often run on a single GPU without sharding or complex distributed inference setups.

Yes, for many use cases. Modern SLMs benefit from better training data, distillation, and post-training techniques, making them far more capable than earlier generations. In fact, you don’t need GPT-5.2-level capability for most real-world tasks.

One of their biggest advantages is [fine-tuning](https://www.bentoml.com/llm/getting-started/llm-fine-tuning). Small models are easier and cheaper to fine-tune on proprietary data such as internal documents, domain-specific workflows, or product knowledge. In narrow or specialized tasks, a well fine-tuned small model can [outperform much larger general-purpose models](https://aclanthology.org/2025.acl-long.718.pdf), running faster and at a fraction of the cost.

As a result, SLMs are widely used in production for internal copilots, agent workflows and automation.

Open-source SLMs offer several advantages compared to LLMs, especially in production environments:

For many real-world applications, open-source SLMs provide a better balance of performance, cost, and operational simplicity.

The key differences come down to scale, cost, and operational complexity, which directly affect how and where each type of model makes sense in production.

| Item | Small Language Models (SLMs) | Large Language Models (LLMs) |
|---|---|---|
Typical size | Sub-1B to a few billion parameters | Tens to hundreds of billions of parameters, or even trillion-level |
Hardware requirements | Single GPU, CPU, or on-device in some cases | High-VRAM GPUs, often with multi-GPU setups and distributed inference |
Inference cost | Low and predictable | Higher and scales quickly with usage |
Latency | Fast, suitable for real-time workloads | Higher latency, especially under concurrency |
Reasoning strength | Good for many tasks, weaker on very complex reasoning | Stronger for deep reasoning and long-horizon planning |
Deployment complexity | Simple to deploy and operate | Complex infrastructure and ops overhead |
Use cases | Simple agents, automation, edge, on-device workloads | Frontier reasoning, complex coding, open-ended tasks |

SLMs aren’t a compromise anymore. Used well, they’re often one of the fastest paths to reliable, scalable AI in production.

Why? Today, you’re not building AI products around a single model. You’re building AI systems.

Many production setups combine multiple models with different strengths: SLMs for fast, cost-efficient inference, larger models for harder reasoning, and specialized vision or speech models where needed. In that kind of system, SLMs play a critical role. They’re easier to fine-tune, cheaper to run, and simple to scale, which makes them ideal building blocks for real-world AI workflows.

Trying to build modern AI systems? This is where the Bento Inference Platform comes in. Bento lets you chain multiple models together, route traffic intelligently, and scale each component independently. You can mix SLMs and larger models freely, without locking your architecture to a single model or vendor.

If you’re thinking about running SLMs in production, we’d love to help.

---

## Source: https://www.bentoml.com/blog/chatgpt-usage-limits-explained-and-how-to-remove-them

If you’ve ever been deep in a ChatGPT session and suddenly got this message:

“You’ve hit your usage limit. Please try again later.”

You’re not alone.

Whether you’re using ChatGPT Free or ChatGPT Plus, these usage limits can hit at the worst possible time. They cut off your conversation, downgrade your model, or slow your workflow when you need it most.

In this guide, you’ll learn:

Let’s dive in.

As of March 2026, ChatGPT’s usage limits depend on your subscription tier. Different plans have different rolling message caps that affect how long and complex your conversations can be.

Here is the breakdown:

Plan | Pricing | Message Limits | GPT-5.4 Thinking Access | Notes |
|---|---|---|---|---|
Free | $0 / month | 10 messages every 5 hours | 1 message per day | Auto-downgrade to the Mini version after hitting limit |
Plus | $20 / month | 160 messages every 3 hours | Up to 3,000 messages per week | Auto-downgrade to the Mini version after hitting limit |
Business | $25–30 per user / month | Virtually unlimited | Up to 3,000 messages per week | |
Pro | $200 / month | Virtually unlimited | Virtually unlimited |


Note: “Virtually unlimited” means usage is still subject to OpenAI’s abuse guardrails and fair-use policies.


Behind the scenes, ChatGPT can automatically decide whether to use its Chat mode or the slower but more capable Thinking mode for your query.

All plans currently use GPT-5.3 & 5.4 as the core model family.

Paid tiers — Plus, Business, and Pro — provide a model picker, allowing you to manually choose between:

Each mode has a different maximum context length. It refers to the amount of information the model can remember and reason over in a single conversation. A larger [context window](https://bentoml.com/llm/llm-inference-basics/how-does-llm-inference-work#what-is-a-context-window-and-how-does-it-work-in-llm-inference) means the model can handle longer conversations or maintain richer reasoning chains without losing context.

Mode | Free | Plus / Business | Pro / Enterprise |
|---|---|---|---|
Instant | 16K tokens | 32K tokens | 128K tokens |
Thinking | – | 256K tokens | 400K tokens |

It’s frustrating, but those limits aren’t random, and they’re not just there to push you to upgrade.

Let’s look at what’s really happening behind the scenes.

Running a frontier model like GPT-5.4 isn’t simple.

Every time you send a message, it spins up a network of GPUs that process billions of parameters in real time. Multiply that by hundreds of millions of active users, and you start to see the scale of the problem.

Usage limits help OpenAI balance global demand and prevent GPU overloads that could slow or crash the system.

Every ChatGPT response has a real, measurable cost.

More powerful models, especially the Thinking variant, burn more GPU time than old models ever did.

So those message caps aren’t arbitrary. They’re cost-control levers that keep usage predictable and sustainable.

This is also why the free plan is limited. It gives users access to frontier AI capabilities without draining compute resources or subsidizing unlimited free queries.

If some users could send unlimited messages, they’d dominate available resources. This means other users will experience slow responses or downtime.

Usage limits ensure fair access across all users. This way, more people will have an opportunity to use ChatGPT without slowdowns or outages.

A common error you see is “too many concurrent requests” in ChatGPT. [See this FAQ](#how%20to%20fix%20the%20%E2%80%9Ctoo%20many%20concurrent%20requests%E2%80%9D%20error%20in%20chatgpt) to learn more.

Without restrictions, ChatGPT would quickly become a target for automated abuse, from data scraping to prompt-stuffing bots.

Caps make it harder to weaponize the platform for:



So in short, usage limits are not there to annoy you. They’re there to keep ChatGPT online for everyone.

At its core, ChatGPT is a chat interface built on top of proprietary models like GPT-5.4. While usage limits grab the most attention, they’re far from the only pain.

If you’re an enterprise user or rely on the OpenAI API to build an AI system, you’ll quickly notice a few areas where closed-source models can hold you back.

By contrast, when you self-host an open-source or custom model, you gain full control over performance, privacy, and optimization. There is no throttling or black-box constraint.

Here’s what you need to know.

Let’s start with the obvious one.

The performance of proprietary model APIs can vary hour to hour, and sometimes even prompt to prompt. Specifically, you might notice (especially during high-traffic periods):

That’s because you’re sharing a multi-tenant system with millions of concurrent users. You don’t control when it’s under heavy load or which GPUs your request lands on.

Your latency (and sometimes even model quality) depends on overall system demand. Add rate limiting on top of that, and you get unpredictable throughput and occasional timeouts.

The result? Inconsistent and unstable performance that can ripple straight into your own applications.

If your product depends on proprietary APIs, this uncertainty can frustrate users, break integrations, and erode trust over time.

If you need consistent latency and predictable behavior, self-hosting is the answer. You own the queue, batch size, and hardware. This means your application’s performance no longer depends on external rate limits or sudden policy changes.

Every [prompt](https://www.bentoml.com/llm/getting-started/prompt-engineering) you send to ChatGPT travels through OpenAI’s servers.

While OpenAI provides enterprise-grade security and supports opting out of data retention, for many organizations, especially those in finance, healthcare, or government, that’s still not enough.

You have limited control over:

This is a serious challenge when building AI systems like RAG or AI agents that frequently handle internal documents, customer data, or proprietary research.

In regulated industries, sending that information to a third-party API can raise security, privacy, and compliance risks your organization simply can’t afford.

Self-hosting eliminates these concerns entirely. When you deploy your own model, all prompts, logs, and embeddings stay within your infrastructure. You have full control over data governance and compliance.

GPT models are built for general-purpose chat, not for your unique workload or latency requirements.

Here’s what you can’t do with ChatGPT or the OpenAI API:

When you call the same global API as everyone else, you get the same configuration and decoding behavior.

Think about it: **how can your product gain a competitive edge if it behaves exactly the same as every other app using the same endpoint**?

Self-hosting flips that script.

You can fine-tune open models or deploy custom inference logic for your use cases. These are all optimized for your workload, not someone else’s.

That’s how teams can own their inference stack, which is faster, cheaper, and fully customized.

The per-token pricing model of proprietary APIs works well for rapid experiments, but it quickly breaks down at scale.

High-volume workloads such as code generation, RAG, and multi-turn reasoning can rack up thousands of dollars a month.

And because pricing is metered by tokens, your bill fluctuates with user behavior, not your business planning. A busy week or a sudden traffic spike can easily double your costs overnight.

In other words, your cost curve depends on usage volatility, not infrastructure efficiency.

Self-hosting changes that equation completely.

Instead of paying per token, you mainly pay for GPU compute hours. You decide how to allocate them. Cost becomes predictable and controllable.

With the right configuration, you can:

When you self-host, every optimization you make directly improves your bottom line. You’re not just using AI; you’re engineering efficiency into your infrastructure.

If your team keeps smashing into the limits we just covered, it’s time to take back control.

What you gain by self-hosting:

Learn more about the benefits in [our LLM Inference Handbook](https://bentoml.com/llm/llm-inference-basics/serverless-vs-self-hosted-llm-inference).

Popular open-source choices (2026):

Learn more about the [best open-source LLMs in 2026](https://www.bentoml.com/blog/navigating-the-world-of-open-source-large-language-models).

It’s a fair question and the short answer is:

NOT NECESSARILY.

Proprietary models are closed AI systems owned and operated by enterprises. Their weights and source code are locked, and access comes only through paid APIs or subscriptions.

That doesn’t make them inherently better. It just makes them less transparent and less customizable.

While GPT-5.4 and Opus-4.6 still dominate headline benchmarks, the truth is that open-source models have caught up fast.

Models like DeepSeek-V3.2, Qwen3.5, and Kimi-K2.5 now match and in some cases outperform proprietary ones in real-world inference tasks. You can check the benchmark results in their research papers.

Here are two examples from leading companies:

Guillermo Rauch, CEO of Vercel, shared that [Kimi-K2-Instruct-0905 achieved up to 5× faster speed and 50 % higher accuracy](https://x.com/rauchg/status/1979660103675687157) than frontier proprietary models like GPT-5 and Claude-Sonnet-4.5 in their internal agent benchmarks.

[Airbnb CEO Brian Chesky](https://www.bloomberg.com/news/articles/2025-10-21/airbnb-ceo-brian-chesky-says-chatgpt-integration-not-ready-for-airbnb-app) said they chose Qwen over OpenAI’s models because it’s faster and more cost-efficient for their workloads.

These aren’t isolated examples. They reflect a broader shift across the industry toward open-source inference as performance, cost, and control converge.

Here’s the key insight: You don’t need GPT-5-level capacity for every task.

Many enterprise use cases, such as like summarization, embedding, or document QA, benefit more from smaller, fine-tuned open-source models optimized for their data and domain.

That’s something proprietary APIs simply can’t offer.

You can’t fine-tune them on confidential data without raising privacy, compliance, or IP concerns.

Open-source LLMs move horizontally across industries. They are adaptable, transparent, and ready to optimize for your goals.

AI teams can:

The performance gap between open-source and proprietary AI is almost gone and the control gap has flipped entirely.

So back to the question - are proprietary models more powerful than open-source models?

With open-source inference, you decide how powerful your model becomes.

So, is self-hosting LLMs easy?

Not really.

Self-hosting means you’re not just calling an API. You run, scale, and maintain your own inference stack. That involves GPUs, autoscaling, batching, caching, observability, and everything in between.

It’s powerful, but it’s also complex.

That’s exactly why we built [Bento Inference Platform](https://www.bentoml.com/): to make production-grade LLM inference as easy as using an API, while giving you full control over infrastructure, cost, and performance.

What you can do with Bento:

If you’re ready to move past usage limits and start owning your inference layer, Bento gives you the fastest, most reliable way to get there.

No. In fact, it’s easier than most teams expect.

Modern inference frameworks like vLLM and SGLang all support [OpenAI-compatible APIs](https://www.bentoml.com/llm/llm-inference-basics/openai-compatible-api) out of the box.

That means your existing API calls, including `chat/completions`

and `embeddings`

endpoints, will work without rewriting your entire codebase.

What stays the same:

`openai.ChatCompletion.create`

)What changes:

`api.openai.com`

In other words, switching to self-hosted inference doesn’t mean starting over. You keep your API structure, but gain full control over performance, privacy, and cost.

OpenAI describes Enterprise usage as [“virtually unlimited” for GPT-5.4 under fair use](https://help.openai.com/en/articles/11165333-chatgpt-enterprise-and-edu-models-limits). This means they can throttle or restrict abusive usage per policy/terms.

This error usually appears when you send multiple prompts too quickly. For example, you are running several chats or API calls at the same time.

Here’s how to fix it:

In short, this isn’t a bug; it’s a safeguard. ChatGPT limits simultaneous requests to keep servers stable. Slowing down or staggering requests usually fixes it instantly. If you want to get rid of it permanently, switching to self-hosted models may be a better choice.

You likely hit the rolling window cap. The slot reappears exactly 3 hours after each message that consumed it.

Yes. OpenAI applies rolling, windowed limits to image generation as well. For example, Plus users can typically generate 50 images every 3 hours. Since these limits change frequently, check the latest docs for each image model:

There’s no global counter, but you can:

OpenAI’s GPT-5 lineup provides multiple tiers for different workloads, from lightweight summarization to advanced reasoning and coding agents.

Here’s a full breakdown of GPT-5 pricing (as of October 2025):

Model | Use case | Pricing (per 1M tokens) |
|---|---|---|
GPT-5 | The general-purpose GPT-5 model; great for code generation, AI agents, and multi-turn chatbots | Input: $1.250Cached input: $0.125Output: $10.000 |
GPT-5 Mini | A faster, cheaper version of GPT-5; ideal for structured Q&A, internal assistants, and well-defined tasks | Input: $0.250Cached input: $0.025Output: $2.000 |
GPT-5 Nano | The fastest, cheapest version of GPT-5; ideal for lightweight inference | Input: $0.050Cached input: $0.005Output: $0.400 |
GPT-5 Pro | The smartest and most precise GPT-5 model; ideal for enterprise reasoning workloads | Input: $15.000Cached input: –Output: $120.000 |


If your workloads involve large-scale inference or long conversations, self-hosting open-source models like DeepSeek-V3 or Qwen3 can reduce your per-token cost by 3–5×.

Almost certainly. OpenAI regularly tweaks caps as models and demand evolve. Always check Help Center + the model picker UI/chat input bar.

If you’re hitting usage caps regularly, it might be time to explore self-hosted inference. With Bento, you can deploy GPT-level models without limits, downgrades, or wait time.

---

## Source: https://www.bentoml.com/2024-ai-infra-report

Get exclusive insights from our comprehensive survey of over 250 AI practitioners and decision-makers across industries. The **State of AI Inference Infrastructure Survey Report** dives deep into the current landscape of AI infrastructure, uncovering key trends, challenges, and best practices that can help organizations at any stage of their AI journey.

In this detailed report, you’ll discover:

Don’t miss out on these insights that can give you a competitive edge! Download the full report now and optimize your AI infrastructure strategy for the future.

---

## Source: https://www.bentoml.com/privacy

**ATALAYA TECH, INC.**

**PRIVACY POLICY**

**Last Updated September 9, 2022**

This privacy policy (the “Privacy Policy”) explains how Atalaya Inc. (“Atalaya”, “we”, “us”, or “our”) collects, uses, discloses, and applies the information collected when you use or access our online [website](https://www.bentoml.com/) and any of our related websites, services, and applications that link to this Privacy Policy (the “Services”).


By using the Services or interacting with us, you are agreeing to this Privacy Policy. Please read the following carefully to understand how we collect, use, disclose, and maintain the information that can be associated with, or which relates to you and/or could be used to identify you (“Personal Data”) In addition, this Privacy Policy describes your choices for use, access, and correction of your Personal Data. If you do not agree to be bound by this Privacy Policy, please stop using the Services.


1. Changes to this Privacy Policy. We may change this Privacy Policy from time to time. In the event we make changes, we will notify you by revising the “Last Updated” date at the top of this Privacy Policy. If there are significant changes to this Privacy Policy, we will attempt to notify you directly by email or provide information via our home page prior to such changes becoming effective. We encourage you to review our Privacy Policy whenever you use the Services to stay informed of ways you can protect your privacy.


2. Information We Collect and Receive. We collect Personal Data from you from various sources and through various methods. Below are the types of Personal Data we may collect and from where we may collect it.


2.1 Information You Provided to Us. We collect information that you decide to share with us. At times, we may require you to provide certain information in order to use certain parts of our Services, fulfill your requests, or provide you with certain services.


2.1.1 Account Information. When you create an account, you may provide us with your name, email address, and any other information you choose to upload to your account.


2.1.2 Social Media Data. We have pages on social media services such as YouTube, Instagram, and LinkedIn (“Social Media Pages”). When you interact with our Social Media Pages, we will collect Personal Data that you elect to provide to us, such as your contact details and messages sent. In addition, the companies that host our Social Media Pages may provide us with aggregate information and analytics regarding the use of our Social Media Pages.


2.1.3 Contacting Us. You may interact with us through our Services, including through an online contact form, email, or any other communication mechanism. When using these channels, you typically provide your account information and any other information you choose to provide to us at your option.


2.1.4 Bento Metadata. When you push your Bento, you may choose to annotate the Bento with identifying information.


2.2 Information We Automatically Collect. We automatically collect certain information from you when you use the Services, including internet or other network activity information such as your Internet Protocol (“IP”) address, unique device identifiers, browsing and search history within the Services, and cookies and other technologies.


2.2.1 Log Information. We retain information about you when you access and use the Services. This information can include the following: IP address, timestamps, browser information, Internet Service Provider “ISP”, webpages visited, and the URL of the webpage you visited before navigating to our Services.


2.2.2 Device Information. We monitor user activity in connection with the Services and may collect information about the applications and features you use, websites you visit, as well as types and amount of Services you use.


2.2.3 Crash and Error Information. If the Services crash or return an error, we may collect data to determine the cause of the error using first- or third-party services. The crash or error information collected may include the following: Device IP address, device name, operating system version, application configurations(s), the time and date, and other statistics.


2.2.4 Cookies. Like many online services, we use “cookies” to collect technical information. Cookies are small pieces of information that a website sends to your computer's hard drive while you are viewing the website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) for authentication and session information. We may also use analytics service providers such as Google Analytics to help analyze how people use our Services (“Analytics Companies”). Analytics Companies use cookies and similar technologies to collect information pertaining to how people use our Services, what pages they visit, and what other sites they may have used prior to using our Services. To learn more about how Google Analytics uses your information, please review [Google’s Privacy Policy](https://policies.google.com/technologies/partner-sites).


2.3 Information That Passes Through Our Services. Atalaya customers and prospective customers may use the Services to process customer data, such as training data, that includes Personal Data of individuals with whom Atalaya has no direct relationship. This data will not be stored within the Services, and is governed by the Privacy Policies of the sites and services on which it is hosted.


3. How We Use Your Information.


3.1 We may use your Personal Data for our legitimate interests and the limited purpose of providing the Services and related functionality and services, as described in this Privacy Policy, and as permitted by applicable laws. These purposes include circumstances where it is necessary to provide or fulfill the Services requested by or for you or where you have given us your express consent. We may use your Personal Data as follows:


3.1.1 To provide the information, products, and services you request;


3.1.2 To provide you, if you have an active account, with effective customer service;


3.1.3 To contact you with information and notices related to your use of the Services;


3.1.4 To invite you to participate in surveys and provide feedback to us (in accordance with any privacy preferences you have expressed to us);


3.1.5 To better understand your needs and interests;


3.1.6 To improve our products and services and develop new products and services;


3.1.7 To improve our marketing and promotional efforts;


3.1.8 To improve the content, functionality, and usability of the Services;


3.1.9 To enforce our policies or other agreements;


3.1.10 To promote security; to protect against and prevent fraud, claims, and other liabilities;


3.1.11 To use for any other purpose for which we provide notice at the time of collection; and


3.1.12 To comply with legal obligations and legal process and to protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or other third parties.


3.2 In an effort to understand and serve our users better, we may conduct research on our customer demographics, interests, and behaviors using aggregated and/or de-identified information collected through the Services and from other sources so that such information can no longer be linked to you or your device (“Aggregate/De-Identified Information”).


4. How We Share and Disclose Information.


4.1 Service Providers and Third-Parties. We may share your Personal Data with third-party vendors that perform tasks on our behalf and under our instruction. These third-party vendors may use your Personal Data only in connection with the services they perform on our behalf, and they are bound to protect your Personal Data in a manner consistent with our own policies and practices. In addition, you may choose to use certain features on our website for which we partner with other entities. These features are operated by third parties that are not affiliated with us. These third parties may use your Personal Data in accordance with their own privacy policies. On websites on which these features are offered, the relevant third parties are identified. We strongly suggest you review the third parties’ privacy policies if you use the relevant features.


4.2 Aggregate/De-Identified Data. From time to time, we may share Aggregate/De-Identified Information about use of the Services, such as by publishing a report on usage trends. The sharing of such data is unrestricted.


4.3 Legal Reasons. We may also disclose your Personal Data when we, in good faith, believe disclosure is appropriate to comply with the law, a court order, or a subpoena. We may also disclose your Personal Data to prevent or investigate a possible crime, such as fraud or identity theft, to protect the security of our Services, to enforce or apply our policies or other agreements, or to protect our own rights or property or the rights, property or safety of our users or others. We will attempt to notify our users about legal demands for their Personal Data when appropriate in our judgment unless prohibited by law or court order or when the request is an emergency. We may dispute such demands when we believe, in our discretion, that the requests are overbroad, vague, or lack proper authority.


4.4 Sale, Merger, or Other Business Transfer. As we continue to develop our business, we may buy, merge, or partner with other companies. In such transactions (including in contemplation of such transactions), Personal Data may be among the transferred assets. If a portion or all of our assets are sold or transferred to a third-party, your Personal Data would likely be one of the transferred business assets. If such transfer is subject to additional mandatory restrictions under applicable laws, we will comply with such restrictions.


5. Your Choices.


5.1 If you have registered for an account, you may access, review, update, or delete certain Personal Data that you have provided to us by logging into your account and using available features and functionalities or by contacting us in accordance with the “Contact Us” section below. You may also contact us to delete your account. Please note that we will need to verify that you have the authority to delete the account and certain activity generated prior to deletion may remain stored by us and may be shared with third parties as detailed in this Privacy Policy.


5.2 Most web browsers are set to accept cookies by default. If you prefer, you can usually set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services. In addition to adjusting the appropriate settings in your browser, many advertising companies that may collect information for targeted advertising purposes are also members of the Digital Advertising Alliance or the Network Advertising Initiative. Both of these organizations provide directions on how individuals can opt-out from targeted advertising by their members. You can find more information on these opt-out capabilities on [www.aboutads.info](http://www.aboutads.info) and [www.networkadvertising.org](http://www.networkadvertising.org).


5.3 You may opt out of having cookies placed for purposes of Google Analytics by downloading [this opt-out browser add on](https://tools.google.com/dlpage/gaoptout).


5.4 In certain circumstances providing Personal Data is optional. However, if you choose not to provide Personal Data that is needed to use some features of our Services, you may be unable to use those features. We will tell you what Personal Data that you must provide in order to receive the Services.


5.5 Some browsers offer a “do not track” (“DNT”) option. Since no common industry or legal standard for DNT has been adopted by industry groups, technology companies, or regulators, we do not respond to DNT signals. We will make efforts to continue to monitor developments around DNT browser technology and the implementation of a standard.


6. Retention of Personal Data. We will retain Personal Data required to comply with privacy requests, to manage active accounts, as required by law, in order to resolve disputes, or to enforce our agreements. We will retain the Personal Data we process on behalf of our users as directed by them. We may also retain copies of your Personal Data for disaster recovery purposes, to prevent fraud or future abuse, or for legitimate business purposes.


7. Information Security. The security of your information is important to us. We use reasonable administrative, technical, and physical procedures, practices, and safeguards designed to protect Personal Data we collect from unauthorized access, use, alteration, exfiltration, or destruction. Although we work hard to ensure the integrity and security of our systems, it must be recognized that no information system is 100% secure and, therefore, we cannot guarantee the security of such information. Outages, attacks, human error, system failure, unauthorized use, or other factors may compromise the security of user information at any time.


8. International Users. The Services are hosted in the United States and are intended for and directed to users in the United States. If you are a user accessing the Services from the European Union, Asia, or any other region with laws or regulations governing Personal Data collection, use, and disclosure that differ from United States laws, please be advised that through your continued use of the Services, which are governed by U.S. law, this notice and our other policies that govern your use of the Services, you are transferring your Personal Data to the United States and you consent to that transfer. The Services are not intended to subject us to the laws or jurisdiction of any state, country, or territory other than those of the United States. Your Personal Data may be stored and processed in any country where we have facilities or in which we engage service providers and, by using the Services, you consent to the transfer of information to countries outside of your country of residence, including the United States, which may have different data protection rules than those of your country.


9. Links to Third-Party Websites. The Services may contain links to other websites not operated or controlled by us, including social media services (“Third-Party Websites”). The information that you share with Third-Party Websites will be governed by the specific privacy policies and terms of service of the Third-Party Websites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these websites. Please contact the Third-Party Websites directly for information on their privacy practices and policies.


10. Children’s Information. The Services are directed to individuals at the age of 13 and over. We do not knowingly collect Personal Data from individuals under the age of 13. If we become aware of individuals who have provided us with Personal Data and are under the age of 13, we will take steps to deactivate the account and delete the Personal Data. If you become aware of information from individuals under the age of 13 which has been provided to us, please contact us in accordance with the “Contact Us” section below.


11. Contact Us. If you have any questions or concerns about our Privacy Policy, please contact us via email at [contact@bentoml.com](mailto:contact@bentoml.com).


12. Jurisdiction-Specific Notices. Certain jurisdictions may provide additional rights to individuals with respect to the collection and use of Personal Data that we have collected. For example, you may have the right to request that we: (i) disclose to you any Personal Data that we have about you; (ii) correct or delete Personal Data that we have about you (subject to certain exceptions); or (iii) not disclose or sell your information to a third party (excluding qualified service providers).


12.1.1 Notice at Collection Regarding the Categories of Personal Data Collected. You have the right to receive notice of the categories of Personal Data we collect, and the purposes for which those categories of Personal Data will be used. The categories we use below to describe the information are those enumerated in the CCPA. The following chart describes information we collect when you act as a customer or prospective customer of our products and services or visit our website. The sources of this Data are described in the “Information we collect and receive” section above. We collect this Personal Data for the purposes described in the “How We Use Your Information” section above.

12.1.2 Right to Know and Request Access to and Deletion of Personal Data. You have the right to request access to Personal Data collected about you and information regarding the source of that Personal Data, the purposes for which we collect it, and the third parties and service providers with whom we share it. You also have the right to request in certain circumstances that we delete Personal Data that we have collected directly from you. Please note that any disclosures will only cover the 12-month period preceding the receipt of your request. We may have a reason under the law why we do not have to comply with your request, or why we may comply with it in a more limited way than you anticipated. If we do, we will explain that to you in our response.

12.1.3 How to Submit a Request You may submit a request to exercise your rights to know/access or delete your Personal Data by sending an email to [contact@bentoml.com](mailto:contact@bentoml.com). Upon submission of your request, we will contact you via the email address provided in your request. To help protect your privacy and maintain security, we will take steps to verify your identity before granting you access to the information. In some instances, such as a request for data deletion, we may first verify the request, after which we will check our records for matching information. With all requests, we will aim to complete requests as soon as reasonably practicable and consistent with any applicable laws. You may authorize another individual or a business registered with the California Secretary of State, or designate an authorized agent, to make requests on your behalf through these means.

EEA, Switzerland, or the UK. If you are located in the European Economic Area (EEA), Switzerland, or the UK, you are entitled to certain rights, subject to applicable exceptions, under the GDPR, Swiss, and UK data protection laws. Please note that, in order to verify your identity, we may require you to provide us with information prior to accessing any records containing information about you. We typically will process your information pursuant to the following legal bases: (1) with your consent; (2) as necessary to perform our agreement to provide Services to you; or (3) as necessary for our legitimate interests in providing the Services where those interests do not override your fundamental rights and freedoms related to data privacy. We also may process your information where it is necessary to comply with a legal obligation to which we are subject. To submit a request to exercise your rights, please request via email to [contact@bentoml.com](mailto:contact@bentoml.com). We may have a reason under the law why we do not have to comply with your request, or may comply with it in a more limited way than you anticipated. If we do, we will explain that to you in our response.

Right of Access: You have the right to obtain confirmation as to whether we are processing personal data about you, and if so, request a copy of the personal data.

Right to Correction: You have the right to correct any inaccuracies in the personal data that we hold about you and, where applicable, to complete any incomplete personal data that we hold.

Right to Erasure: You have the right to request that we erase the personal data that we hold about you if one of the conditions in Article 17 of the GDPR applies. The right to erasure does not apply in certain circumstances, including where the processing is necessary for the establishment, exercise, or defense of legal claims.

Right to Restriction of Processing: You have the right to restrict our processing of your personal data if one of the conditions in Article 18 of the GDPR applies.

Right to Data Portability: You have the right to receive personal data concerning you in a structured, common, and machine-readable format or request transmission of the data to a third party, if the conditions in Article 20 of the GDPR are met.

Right to Object: You have the right to object to the processing of your personal data based on our legitimate interests at any time. We will no longer process the data, unless there are compelling legitimate grounds for our processing that override the interests, rights, and freedoms of the data subject, or the processing serves the purpose of asserting, exercising, or defending legal claims. You also have the right to object at any time to the use of your data for direct marketing.

Right to Withdraw Consent: If we are processing your personal data based on your consent, you have the right to withdraw your consent at any time.

Lodging a Complaint: Users that reside in the EEA, Switzerland, or the UK have the right to lodge a complaint about our data collection and processing actions with the supervisory authority concerned.

13. International Transfers. Atalaya is located in the United States. If you use our Services outside of the United States, you understand that we may collect, store, or process your Personal Data in the United States and other countries. The laws in the United States regarding Personal Data may be different from the laws of your jurisdiction or country. Any international transfers, collection, storage, or processing of your Personal Data will comply with safeguards as required by relevant law.