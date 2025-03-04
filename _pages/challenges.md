---
layout: page
permalink: /challenges/
title: Challenges
description: 
nav: true
nav_order: 3
---

The workshop will host two challenges on tasks that are crucial to enable real-world vision-based assistants. These challenges are designed to test both the low-level visual capabilities and higher-level reasoning skills of vision-based assistants.

<font color="red">**The winning teams will receive a prize along with a contributed talk at the workshop.**</font>

### Challenge 1: Interactive Feedback Generation

![]({{ "/assets/img/teaser_var_competition_1.jpeg" | relative_url }}){:style="margin:auto; display:block;width:100%"}

This challenge focuses on assisting users through a workout session with interactive feedback. Details:
- **Evaluation Data:** We base this challenge on the [QEVD](https://www.qualcomm.com/developer/software/qevd-dataset) dataset, as described [here](https://arxiv.org/abs/2407.08101). Specifically, the challenge involves providing timed feedback for a set of evaluation videos. For this challenge, we employ a (private) test set available <font color="red">[soon]</font>. 


- **Training and Validation Data:** For training and validation, please use the data provided in the [QEVD page](https://www.qualcomm.com/developer/software/qevd-dataset).  


- **Evaluation Metrics:** We will use the METEOR, ROUGE-L,  BERT, LLM-Acc., and T-F-Score as described [here](https://arxiv.org/abs/2407.08101). These code for these metrics is available [here](https://github.com/Qualcomm-AI-research/FitCoach/tree/main/scripts). If you have any questions contact us [here](mailto:var.workshop.cvpr@gmail.com).


- **Participation:**

	- **Leaderboard:** Please email the results [here](mailto:var.workshop.cvpr@gmail.com) as a json file along with the team name. The json file should contain a list of python dicts with the the following fields:
	```
	[{“video_file”: <String: name of the evaluation video file>,
	“feedbacks”: <List[String]: list of predicted feedbacks>,
	“Feedback_timestamps”: <List[float]: list of timestamps corresponding to the predicted feedbacks>}, ...]
	```
	Each team will be allowed to make five submissions and we will provide the evaluation results of each submission as soon as possible.


	- **Extended Abstract:** The teams submitting to the challenge are also encouraged to submit an extended abstract through [CMT](http://cmt3.research.microsoft.com/VAR2025/). The page limit is a minimum of two pages and a maximum of four pages, excluding references. As subject area please choose "Challenge -> Interactive Feedback Generation".



- **Winner:** The winning team will be decided based on the five evaluation metrics described above. The winning team is the one that outperforms others on most metrics. The winner will receive a prize along with a contributed talk at the workshop.


### Challenge 2: Interactive Question Answering
This challenge tests the ability of vision-based assistants to answer questions asked by a user in a face-to-face setup. 

**Details:** <font color="red">[Coming soon!]</font>


