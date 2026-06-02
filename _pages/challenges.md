---
layout: page
permalink: /challenges/
title: Challenges
description: 
nav: true
nav_order: 3
---


## AI Coach Challenge @ VAR 2026: "Don't Just Watch. Intervene."

The workshop will host two challenges on tasks that are crucial to enable real-world vision-based assistants. These challenges are designed to test both the low-level visual capabilities and higher-level reasoning skills of vision-based assistants.

-  <font color="blue"><b>The winning teams will receive a certificate, a prize and will be invited to present their solution in a contributed talk. The winning team in 2025 received a ASUS Zenbook A14 as a prize.</b></font>
-  <font color="red"><b>Deadline: June 1, 2026 (AoE)</b></font>

<br/>

 **Results: CVPR 2026 - Fitness**
 
| Team             | METEOR↑ | ROUGE-L↑ | BERT↑ | LLM-Acc↑ | T-F-Score↑ |
| :----------------- | :------ | :------- | :---- | :------- | :--------- |
| WICT-FitCoach | **0.296** | **0.194** | **0.891** | **3.556** | 0.652 |
| ISCT_FitCoach | 0.182   | 0.131 | 0.887 | 2.797 |  **0.727**   |
| Anonymous | 0.143   | 0.069 |  0.867 | 2.975    | 0.537      |
{:.table-bordered}

<br/>

**Results: CVPR 2026 - Cooking**
 
| Team             | IC-Acc ↑ | Prec. ↑ | Rec. ↑ | F1 ↑ | BERT ↑ | ROUGE-L ↑ |
| :----------------- | :------ | :------- | :---- | :------- | :--------- |:--------- |
| MR-CAS | **56.2** | **0.42** |  **0.24** | **0.31** | **0.564** | **0.477** |
| Yeeun Choi | 31.4 |  0.17 | 0.25 | 0.20 | 0.450 | 0.336 |
{:.table-bordered}

<br/>
<br/>

### Challenge 1: Fitness

<video autoplay muted loop playsinline controls style="margin:auto; display:block; width:80%">
  <source src="{{ '/assets/video/fitness_competition.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br/>

Continuing from CVPR 2025, this challenge focuses on coaching users through a workout session with the right feedback at the right time, to correct mistakes and encourage the user. Details:
- **Evaluation Data:** We base this challenge on the [QEVD](https://www.qualcomm.com/developer/software/qevd-dataset) dataset, as described [here](https://arxiv.org/abs/2407.08101). Specifically, the challenge involves providing timed feedback for a set of evaluation videos. For this challenge, we employ a (private) test set available [here](https://softwarecenter.qualcomm.com/api/download/software/dataset/AIDataset/Qualcomm_Exercise_Video_Dataset/QEVD-FIT-COACH-Competition-CVPR2025/QEVD-FIT-COACH-Competition-CVPR2025.zip). 


- **Training and Validation Data:** For training and validation, please use the data provided in the [QEVD page](https://www.qualcomm.com/developer/software/qevd-dataset).

- **Quick Start:** We provide a quick start guide that implements a Qwen3-VL baseline that is available [here](https://github.com/varworkshop/ai_coach_fitness_2026).


- **Evaluation Metrics:** We will use the METEOR, ROUGE-L,  BERT, LLM-Acc., and T-F-Score as described [here](https://arxiv.org/abs/2407.08101). The code for these metrics is available [here](https://github.com/Qualcomm-AI-research/FitCoach/tree/main/scripts). If you have any questions contact us [here](mailto:var.workshop.cvpr@gmail.com).


- **Participation:**
	- **Leaderboard:** Please email the results [here](mailto:var.workshop.cvpr@gmail.com) as a json file along with the team name. The json file should contain a list of python dicts with the the following fields:
	```
	[{“mini_episode_id”: <str: name of the evaluation video file>,
	“pred_feedbacks”: <List[str]: list of predicted feedbacks>,
	“pred_feedback_timestamps”: <List[float]: list of timestamps corresponding to the predicted feedbacks>}, ...]
	```
	See the quick start guide for more details. Each team will be allowed to make five submissions and we will provide the evaluation results of each submission as soon as possible (within 24 hours). The team can choose the make the result public on the leaderboard below at any time.

	- **Extended Abstract:** The teams submitting to the challenge are also encouraged to submit an extended abstract through [CMT](http://cmt3.research.microsoft.com/VAR2025/). The page limit is a minimum of two pages and a maximum of four pages, excluding references. As subject area please choose "Challenge: Fitness".

	- **Winner:** The winning team will be decided based on the five evaluation metrics described above. The winning team is the one that outperforms others on most metrics. The code of the winning team will be inspected before the workshop.

 <br/>

  **Results: Prior Works**
 
 | Method             | METEOR↑ | ROUGE-L↑ | BERT↑ | LLM-Acc↑ | T-F-Score↑ |
| :----------------- | :------ | :------- | :---- | :------- | :--------- |
| VideoChat2         | 0.104   | 0.048    | 0.846 | 2.145    | 0.555      |
| VideoLLaMA3-7B     | 0.150   | 0.076    | 0.859 | 2.554    | 0.555      |
| Qwen-2-VL-Instruct | **0.185** | 0.089 | 0.861 | 2.851    | 0.555      |
| Qwen-2.5-VL-Instruct | 0.174   | 0.068    | 0.855 | **3.153** | 0.555      |
| [CVPR 2025 Best](https://lucasventura.com/) | 0.156   | 0.101 | **0.861** | 2.087    | 0.535      |
{:.table-bordered}

<br/>
<br/>



### Challenge 2: Cooking

<video autoplay muted loop playsinline controls style="margin:auto; display:block; width:80%">
  <source src="{{ '/assets/video/cooking_competition_2.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br/>

This challenge focuses on coaching users through a recipe with the right feedback at the right time, to correct mistakes. Details:
- **Evaluation Data:** We base this challenge on the [Qualcomm Interactive Cooking Dataset](https://huggingface.co/datasets/qualcomm/qualcomm-interactive-cooking-dataset) (built on top of [CaptainCook4D](https://captaincook4d.github.io/captain-cook/)), as described [here](https://www.arxiv.org/abs/2511.21998) and [here](https://apratimbh.github.io/livecook). Specifically, the challenge involves providing timed feedback for a set of evaluation videos. For this challenge, we employ the test set available in the link provided above. 

- **Evaluation Set:** We will use the main set of the Qualcomm Interactive Cooking Dataset and consider the turn based evaluation scheme described in Section 5.4 [here](https://www.arxiv.org/abs/2511.21998). 


- **Training and Validation Data:** For training and validation, please use the data provided in the [Qualcomm Interactive Cooking Dataset](https://huggingface.co/datasets/qualcomm/qualcomm-interactive-cooking-dataset) page.

- **Quick Start:** We provide a quick start guide that implements a Qwen3-VL baseline that is available [here](https://github.com/varworkshop/ai_coach_cooking_2026). 


- **Evaluation Metrics:** We will use the IC-Acc and Mistake (Precision, Recall and F1) metrics as described [here](https://www.arxiv.org/abs/2511.21998). The code for these metrics is available [here](https://github.com/Qualcomm-AI-research/qualcomm_interactive_cooking_eval). If you have any questions contact us [here](mailto:var.workshop.cvpr@gmail.com).


- **Participation:**
	- **Leaderboard:** Please email the results [here](mailto:var.workshop.cvpr@gmail.com) as a json file along with the team name. The json file should contain a list of python dicts with the the following fields:
	```
	[{“video_id”: <str: name of the evaluation video file>,
	“pred_texts”: <List[str]: list of predicted instructions and feedbacks>,
	“pred_timestamps”: <List[float]: list of timestamps corresponding to the predicted instructions and feedbacks>}, ...]
	```
	The team can choose the make the result public on the leaderboard below at any time.

	- **Extended Abstract:** The teams submitting to the challenge are also encouraged to submit an extended abstract through [CMT](http://cmt3.research.microsoft.com/VAR2025/). The page limit is a minimum of two pages and a maximum of four pages, excluding references. As subject area please choose "Challenge: Cooking".

	- **Winner:** The winning team will be decided based on the (mistake) F1 and IC-Acc scores. We will first sort by (mistake) F1 and then IC-Acc scores. If two teams have the same F1 and IC-Acc scores then we will break ties by sorting by BERT and then ROUGE-L scores.

 **Results: Prior Works**
 
| Method | IC-Acc ↑ | Prec. ↑ | Rec. ↑ | F1 ↑ | BERT ↑ | ROUGE-L ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Videollm-online | 0.03 | 0.02 | **0.98** | 0.04 | 0.332 | 0.248 |
| Qwen2-VL-7B | 6.3 | 0.02 | 0.69 | **0.05** | 0.377 | 0.256 |
| Qwen2.5-VL-7B | 18.9 | **0.18** | 0.01 | 0.02 | 0.299 | 0.219 |
| Gemini-2.5-Flash | **23.1** | 0.01 | 0.22 | 0.02 | *0.410* | *0.342* |
{:.table-bordered}

<br/>
