---
layout: page
permalink: /challenges/
title: Challenges
description: 
nav: true
nav_order: 4
---

The workshop will host two challenges on tasks that are crucial to enable real-world vision-based assistants. These challenges are designed to test both the low-level visual capabilities and higher-level reasoning skills of vision-based assistants.

-  <font color="blue"><b>The winning teams will receive a prize and are invited to present their solution in a contributed talk.</b></font>
-  <font color="red"><b>Deadline: June 6, 2025</b></font>

<br/>

### Challenge 1: Interactive Feedback Generation

![]({{ "/assets/img/teaser_var_competition_1.jpeg" | relative_url }}){:style="margin:auto; display:block;width:80%"}

This challenge focuses on assisting users through a workout session with interactive feedback. Details:
- **Evaluation Data:** We base this challenge on the [QEVD](https://www.qualcomm.com/developer/software/qevd-dataset) dataset, as described [here](https://arxiv.org/abs/2407.08101). Specifically, the challenge involves providing timed feedback for a set of evaluation videos. For this challenge, we employ a (private) test set available [here](https://softwarecenter.qualcomm.com/api/download/software/dataset/AIDataset/Qualcomm_Exercise_Video_Dataset/QEVD-FIT-COACH-Competition-CVPR2025/QEVD-FIT-COACH-Competition-CVPR2025.zip). 


- **Training and Validation Data:** For training and validation, please use the data provided in the [QEVD page](https://www.qualcomm.com/developer/software/qevd-dataset).  


- **Evaluation Metrics:** We will use the METEOR, ROUGE-L,  BERT, LLM-Acc., and T-F-Score as described [here](https://arxiv.org/abs/2407.08101). The code for these metrics is available [here](https://github.com/Qualcomm-AI-research/FitCoach/tree/main/scripts). If you have any questions contact us [here](mailto:var.workshop.cvpr@gmail.com).


- **Participation:**
	- **Leaderboard:** Please email the results [here](mailto:var.workshop.cvpr@gmail.com) as a json file along with the team name. The json file should contain a list of python dicts with the the following fields:
	```
	[{“video_file”: <str: name of the evaluation video file>,
	“feedbacks”: <List[str]: list of predicted feedbacks>,
	“feedback_timestamps”: <List[float]: list of timestamps corresponding to the predicted feedbacks>}, ...]
	```
	Each team will be allowed to make five submissions and we will provide the evaluation results of each submission as soon as possible.

	- **Extended Abstract:** The teams submitting to the challenge are also encouraged to submit an extended abstract through [CMT](http://cmt3.research.microsoft.com/VAR2025/). The page limit is a minimum of two pages and a maximum of four pages, excluding references. As subject area please choose "Challenge -> Interactive Feedback Generation".

	- **Winner:** The winning team will be decided based on the five evaluation metrics described above. The winning team is the one that outperforms others on most metrics. The code of the winning team will be inspected before the workshop. The winner will receive a prize along with a contributed talk at the workshop.

 **Results: Open Source Models**
 
| Method             | METEOR↑ | ROUGE-L↑ | BERT↑ | LLM-Acc↑ | T-F-Score↑ |
| :----------------- | :------ | :------- | :---- | :------- | :--------- |
| VideoChat2         | 0.104   | 0.048    | 0.846 | 2.145    | 0.555      |
| VideoLLaMA3-7B     | 0.150   | 0.076    | 0.859 | 2.554    | 0.555      |
| Qwen-2-VL-Instruct | **0.185** | **0.089** | **0.861** | 2.851    | 0.555      |
| Qwen-2.5-VL-Instruct | 0.174   | 0.068    | 0.855 | **3.153** | 0.555      |
{:.table-bordered}

<br/>**Results: Best Challenge Submission**

| Team        | METEOR↑ | ROUGE-L↑ | BERT↑ | LLM-Acc↑ | T-F-Score↑ |
| :------------ | :------ | :------- | :---- | :------- | :--------- |
| [Lucas Ventura](https://lucasventura.com/) | 0.156   | **0.101** | **0.861** | 2.087    | 0.535      |
{:.table-bordered}

<br/>

### Challenge 2: Interactive Question Answering

![]({{ "/assets/img/teaser_var_competition_2.jpeg" | relative_url }}){:style="margin:auto; display:block;width:100%"}

This challenge tests the ability of vision-based assistants to converse face-to-face with a human user. This challenge requires models not only to have robust audio-visual perception but also requires reasoning about scenes and events that are unfolding live in front of the camera.  Details:
- **Evaluation Data:** We base this challenge on the QIVD dataset, as described [here](https://arxiv.org/pdf/2503.19356). Specifically, the challenge involves providing (timely) answers to question posed by users in the videos [here](https://softwarecenter.qualcomm.com/api/download/software/dataset/AIDataset/QIVD/videos.zip). The evaluation will be performed based on predicted answers and the associated timestamps. Note that, the questions are not provided and thus need to be infered from the audio associated with each video.


- **Training and Validation Data:** We provide a set of in-context examples [here](https://softwarecenter.qualcomm.com/api/download/software/dataset/AIDataset/QIVD/annotations_contest.zip).


- **Evaluation Metrics:** We will use the Correctness, BERT, METEOR, BLEU and ROUGE-L scores described [here](https://arxiv.org/pdf/2503.19356). If you have any questions contact us [here](mailto:var.workshop.cvpr@gmail.com).


- **Participation:**
	- **Leaderboard:** Please email the results [here](mailto:var.workshop.cvpr@gmail.com) as a json file along with the team name. The json file should contain a list of python dicts with the the following fields (see [here](https://softwarecenter.qualcomm.com/api/download/software/dataset/AIDataset/QIVD/annotations_contest.zip) for an example):
	```
	[{“video”: <str: name of the evaluation video file>,
	“answer”: <str: the predicted answet>,
	“timestamp”: <float: the predicted timestamp assoicated with the answer>}, ...]
	```
	Each team will be allowed to make five submissions and we will provide the evaluation results of each submission as soon as possible.

	- **Extended Abstract:** The teams submitting to the challenge are also encouraged to submit an extended abstract through [CMT](http://cmt3.research.microsoft.com/VAR2025/). The page limit is a minimum of two pages and a maximum of four pages, excluding references. As subject area please choose "Challenge -> Interactive Question Answering".

	- **Winner:** The winning team will be decided based on the five evaluation metrics described above. The winning team is the one that outperforms others on most metrics. The code of the winning team will be inspected before the workshop. The winner will receive a prize along with a contributed talk at the workshop.

**Results: Open Source Models**

| Method          | Corr↑   | BERT↑   | METEOR↑ | BLEU↑   | ROUGE-L↑ | T-Diff↓ |
| :-------------- | :------ | :------ | :------ | :------ | :------- | :------ |
| VideoLLaMA      | 33.52   | 89.50   | 39.06   | 7.62    | 30.84    | 1.14    |
| VideoLLaMA2-7B  | 44.31   | 91.18   | **47.20** | 13.93   | 40.63    | 1.14    |
| VideoLLaMA2-72B | 47.69   | **91.42** | 46.58   | **14.03** | **41.70** | 1.14    |
| VideoLLaMA3-7B  | 52.31   | 90.92   | 45.20   | 11.21   | 40.54    | 1.14    |
| Qwen2.5-VL-7B   | **53.55** | 87.17   | 34.95   | 3.88    | 26.52    | 1.14    |
{:.table-bordered}

<br/>**Results: Best Challenge Submission**

| Team   | Corr↑ | BERT↑ | METEOR↑ | BLEU↑ | ROUGE-L↑ | T-Diff↓ |
| :------- | :---- | :---- | :------ | :---- | :------- | :------ |
| HNU-VPAI* | 54.27 | 92.49 | 48.24   | 14.61 | 45.20    | 1.09    |
{:.table-bordered}

*Zhiyu Wang, Puhong Duan, Wang Liu, Bin Sun, Xudong Kang, Shutao Li — Hunan University, Weikang Yu — Helmholtz-Zentrum Dresden-Rossendorf (HZDR) and Technical University of Munich (TUM)
