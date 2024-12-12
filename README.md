# baris.e125.github.io
E125 Ethics Final Assignment Website

# Ethics in Engineering

Welcome to the **Ethics in Engineering** website! This project explores key ethical dilemmas faced by engineers, the responsibilities they have to society, and how they navigate difficult decisions.  
*Created by Baris Oktay*
<link rel="stylesheet" href="styles.css">
<script src="scripts.js"></script>
---

## Table of Contents
1. [Introduction](#introduction)
2. [Common Ethical Dilemma Scenarios](#common-ethical-dilemma-scenarios)
3. [My Personal Code of Ethics](#my-personal-code-of-ethics)
4. [Educational Resources](#educational-resources)
5. [Reflection & Learning](#reflection--learning)
6. [Contact & About Me](#contact--about-me)

---

## Introduction

Ethics in engineering is not just about following regulations; it’s about making decisions that protect the public and contribute to the greater good. As engineers, our work impacts everything from safety to the environment, and we must make decisions that are both technically sound and ethically responsible.  

In this project, we’ll explore **ethical decision-making** using real-world scenarios and the development of a **personal ethical code** that guides how we approach these decisions.

---

## Common Ethical Dilemma Scenarios
You can click on the option buttons after each scenario to reveal the course of action.
### Scenario 1: The Trolley Problem
<div class="scenario-bg trolley-bg">
  <p> Perhaps the most famous </p>
</div>
Perhaps the most famous ethical dilemma, in this scenario, you must choose whether to divert a runaway trolley to a track that will kill one person or keep it on the track that will kill five people. This scenario explores **utilitarianism** versus **deontological ethics**, posing the question of whether it is acceptable to sacrifice one life to save many.

<button onclick="revealOption('option11')">Option 1: Divert the trolley</button>
<button onclick="revealOption('option12')">Option 2: Do nothing</button>

<div id="option11" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to divert the trolley to the track with one person, saving 5 people but killing 1. This is the utilitarianism approach.</p>
</div>

<div id="option12" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to do nothing, keeping the trolley on its current track, causing the death of five people. This is the deontological approach. </p>
</div>

**Reflection:**  
This scenario highlights the ethical tension between saving the most lives and the moral implications of actively choosing who lives or dies. As engineers, we often face similar decisions where the **public good** must be weighed against individual safety or rights.

### Scenario 2: Bribery at Work

Let's say you are a civil engineer overseeing the construction of a building. A contractor offers you a bribe to use cheaper, unsafe materials for the ground floor columns. If you refuse, you’ll be fired.
<button onclick="revealOption('option21')">Option 1: Accept the bribe</button>
<button onclick="revealOption('option22')">Option 2: Refuse the bribe</button>

<div id="option21" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to accept the bribe and compromise safety for financial gain.</p>
</div>

<div id="option22" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to refuse the bribe, risking your job but upholding safety standards, possibly saving hundreds of lives.</p>
</div>

**Reflection:**  
This scenario emphasizes the importance of **integrity** and the duty engineers have to prioritize safety and public well-being over personal gain.
### Scenario 3: Autonomous Vehicle Decision-Making

You are working as a software engineer for a company that develops autonomous vehicles. The vehicle's software encounters a situation where the car must decide between hitting a pedestrian who suddenly appears in front of the car or swerving to avoid them, which could result in the death of the passenger.

<button onclick="revealOption('option31')">Option 1: Prioritize the passenger</button>
<button onclick="revealOption('option32')">Option 2: Prioritize the pedestrian</button>

<div id="option31" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to prioritize the passenger, even if it means hitting the pedestrian.</p>
</div>

<div id="option32" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to prioritize the pedestrian, potentially sacrificing the passenger’s safety.</p>
</div>

**Reflection:**  
This scenario explores the **moral responsibility** of engineers who create systems that affect human lives. Should the car prioritize human life in a more general sense, or should the passengers' safety always be the priority? This raises questions about **algorithmic bias** and the trade-offs in autonomous decision-making.

### Scenario 4: Environmental Impact vs. Profit

You are an engineer at a company that manufactures a product that has become increasingly popular. However, the production process is harmful to the environment, emitting large amounts of greenhouse gases and creating toxic waste. Management asks you to oversee a new project to increase production to meet demand, knowing that it will lead to greater environmental damage.

<button onclick="revealOption('option41')">Option 1: Proceed with the project</button>
<button onclick="revealOption('option42')">Option 2: Stop the project</button>

<div id="option41" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to ignore the environmental consequences to ensure the company’s profitability and market share.</p>
</div>

<div id="option42" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to advocate for a more sustainable, but costly, production method that would reduce emissions and waste, possibly leading to lower profits.</p>
</div>

**Reflection:**  
This scenario highlights the **balance between economic gain and environmental sustainability**. Engineers often face the challenge of designing solutions that benefit society while minimizing harm to the environment. The ethical question is whether **profit** should ever outweigh **environmental responsibility**.

### Scenario 5: Whistleblowing on Unsafe Designs

You are an engineer working on the design of a large infrastructure project (e.g., a bridge). During the testing phase, you realize that certain structural components of the design are unsafe and could lead to a collapse under certain conditions. The project is behind schedule and your manager pressures you to approve the design for construction, downplaying the risks.

<button onclick="revealOption('option51')">Option 1:  Approve the design</button>
<button onclick="revealOption('option52')">Option 2: Blow the whistle</button>

<div id="option51" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to approve the design and keep quiet, hoping that the risks are unlikely to occur or will be addressed later.</p>
</div>

<div id="option52" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to blow the whistle on the unsafe design, potentially delaying the project and causing financial losses to the company.</p>
</div>

**Reflection:**  
This scenario explores the ethics of **whistleblowing** and whether engineers should prioritize safety, even when doing so may cause financial harm or reputational damage to the company. Should an engineer ever **compromise safety** for financial or professional gain?

### Scenario 6: Artificial Intelligence and Job Displacement
 
As a data scientist, you are working on an AI project designed to automate tasks that are currently done by human workers, such as customer service or data entry. The AI could dramatically reduce costs for the company, but it will also lead to job losses for many employees. Management is pressuring you to complete the project quickly.

<button onclick="revealOption('option61')">Option 1:  Implement the AI</button>
<button onclick="revealOption('option62')">Option 2: Delay the project</button>

<div id="option61" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to implement the AI, which will improve efficiency but result in widespread job losses..</p>
</div>

<div id="option62" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to halt or delay the project to investigate alternatives that would reduce job displacement, even if it means less profit for the company.</p>
</div>


**Reflection:**  
This scenario examines the ethics of **automation** and **job displacement**. As AI and automation technologies become more prevalent, engineers must consider the broader **social and economic impact** of their work. Should the focus be solely on **profit and efficiency**, or should engineers take a more **human-centered** approach to technology?

### Scenario 7: Data Privacy and User Consent

As a software engineer working for a company that develops mobile apps, you discover that your app is collecting more personal data than it needs, and some of this data is being shared with third-party advertisers. The app’s privacy policy is vague, and users are not fully informed about how their data is being used.

<button onclick="revealOption('option71')">Option 1: Keep the same policy</button>
<button onclick="revealOption('option72')">Option 2: Revise the policy</button>

<div id="option71" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to keep the data collection practices as they are to increase ad revenue, even if it means users’ privacy is compromised.</p>
</div>

<div id="option72" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to revise the app’s privacy policy and limit the data collection, even though it could decrease the company’s ad revenue. </p>
</div>

**Reflection:**  
This scenario delves into the ethics of **data privacy** and **user consent**. As engineers and developers, there’s an ethical responsibility to respect users’ privacy, even when it may conflict with business goals like revenue generation. What is the **ethical limit** of data collection, and how much **transparency** should companies provide to users?

### Scenario 8: Social Responsibility and Technological Advancements

You work as an engineer at a technology company that is developing a new social media platform. The platform has the potential to revolutionize communication, but it also has serious concerns related to mental health, privacy, and addiction. The company wants to push forward with the launch to capitalize on its success.

<button onclick="revealOption('option81')">Option 1: Develop the platform</button>
<button onclick="revealOption('option82')">Option 2: Advocate for changes</button>

<div id="option81" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to develop the platform as planned, focusing on growth and profit, despite its potential harmful effects on users. </p>
</div>

<div id="option82" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to advocate for changes in the platform’s design to mitigate potential risks, even though it might delay the launch and reduce profits. </p>
</div>


**Reflection:**  
This scenario raises questions about the **social responsibility** of engineers in designing technologies that directly affect society. While technological progress offers great potential, it also comes with risks. How much responsibility do engineers have for the **long-term societal impact** of the technologies they create?

### Scenario 9: Engineer’s Role in Addressing Climate Change

You are an engineer working for a company that specializes in manufacturing electric cars. Your company has the opportunity to scale up production, but the demand for raw materials like lithium and cobalt, which are crucial for batteries, is increasing. The environmental impact of mining these materials is significant, but scaling production is seen as a key part of addressing climate change by promoting electric vehicles.

<button onclick="revealOption('option91')">Option 1: Continue scaling production</button>
<button onclick="revealOption('option92')">Option 2: Delay production and possibly lose your job</button>

<div id="option91" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to continue scaling production to meet demand, even though it might harm the environment. </p>
</div>

<div id="option92" class="options" style="display:none; margin-top: 10px;">
  <p>You chose to propose new sustainable approaches, even though it might delay production and be costly. </p>
</div>

**Reflection:**  
This scenario explores the intersection of **environmental responsibility** and **technological innovation**. Engineers must consider the long-term environmental impact of the resources they use and how their work contributes to larger global challenges, like **climate change**.

---

## My Personal Code of Ethics

As an engineer, my ethical code serves as a guide for how I will make decisions that balance **technical expertise** with a commitment to **public good**. Below is a summary of the ethical principles that I aim to uphold in my career:

- **Integrity**: Always prioritize honesty, transparency, and accountability in my work.
- **Public Safety**: Never compromise on safety, even if it means personal or professional loss.
- **Sustainability**: Strive to create solutions that are environmentally sustainable and socially responsible.
- **Inclusivity**: Ensure that my work benefits people from all walks of life, particularly underserved communities.
- **Ethical Advocacy**: Stand up for ethical practices, even if it means challenging authority or popular opinion.

---


## Educational Resources

### Recommended Books & Articles

- **Ethics in Engineering** by Mike W. Martin and Roland Schinzinger – A fundamental resource on ethical theories and how they apply to engineering practice.
- **The Ethical Engineer** by C.M. Rayner – Discusses case studies of real-world engineering ethical dilemmas.
- **IEEE Code of Ethics** – A guideline for ethical practice for engineers in the technology industry.
- **The Belmont Report** – A foundational document that addresses ethical principles in research, including engineering.

### Online Resources

- [IEEE Ethics Resources](https://www.ieee.org/about/ethics.html)  
- [ASCE Code of Ethics](https://www.asce.org/ethics/)  
- [Engineering Ethics Course - Coursera](https://www.coursera.org/learn/engineering-ethics)

---

## Reflection & Learning

Throughout this project, I have learned that engineering ethics is not just about following codes of conduct; it’s about making thoughtful, responsible decisions that affect both the public and the environment. Some of the key takeaways include:

- **Ethical decision-making** requires not just technical knowledge but a deep understanding of social responsibility.
- Engineers must often balance **personal values** with **societal needs** and **corporate pressures**.
- The importance of having a **personal code of ethics** that guides everyday decisions in the workplace.

By applying these principles, I hope to contribute to a future where engineering innovations are made with integrity and for the greater good.

---

## Contact & About Me

Hello! I am Baris, an aspiring engineer with a passion for computer architecture and power electronics technology. I created this website as part of my assignment for Engin-125 at UC Berkeley, where I explore the intersection of **engineering** and **ethical decision-making**.  

Feel free to reach out to me for questions, feedback, or just a discussion about ethics in engineering.

- **GitHub**: (https://github.com/KBaris23)
---

## License

This project is licensed under the **MIT License**. You can use, modify, and distribute the code with attribution.


To clone the repository attached to this website:
   ```bash
   git clone https://github.com/username/repository-name.git
