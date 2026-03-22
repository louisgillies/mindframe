---
name: animal-magic
description: Apply animal-based thinking frameworks to ideas, problems, and goals. Use this skill whenever the user wants to brainstorm, multiply ideas, analyze deeply, break down goals, think creatively, see the big picture, build systems, or connect across disciplines. Trigger on any mention of "animal power", "animal prompt", "rabbit prompt", "think like a [animal]", or when the user asks for idea generation, strategic analysis, creative problem-solving, step-by-step breakdowns, system design, or cross-disciplinary thinking — even if they don't mention animals. Also use when the user says things like "give me variations", "break this down", "think outside the box", "zoom out", "build a plan", or "what can I learn from other fields".
---

# Animal Magic

Seven animal-based thinking frameworks that each activate a distinct cognitive mode. Each animal is a mental model — a shorthand that instantly communicates *how* to approach a problem.

Inspired by [Amanda Caswell's article on Tom's Guide](https://www.tomsguide.com/ai/i-use-the-rabbit-prompt-for-multiplying-my-ideas-and-its-a-game-changer).

## The Animals

### Rabbit — Multiply Ideas
Rabbits multiply fast. So should ideas. Instead of stopping at one decent suggestion, generate many directions from a single starting point by shifting angle, audience, and format.

**Prompt frame:** Take this idea and multiply it into 10 different variations. For each variation: change the angle, change the audience, change the format. Then, present the results as a list of distinct ideas.

**Best for:** Brainstorming, content ideation, exploring a concept space, overcoming creative blocks.

---

### Owl — Deep Analysis
Owls are patient, sharp-eyed, and wise. This mode slows down to examine what others rush past — hidden factors, overlooked perspectives, subtle patterns.

**Prompt frame:** Think like an owl — slow, observant and analytical. Examine this problem from multiple perspectives and identify the hidden factors most people overlook.

**Best for:** Risk assessment, root cause analysis, reviewing plans for blind spots, due diligence.

---

### Ant — Small Steps
Ants don't carry the whole load at once. They break massive undertakings into tiny, persistent steps. This mode decomposes goals into the smallest realistic actions.

**Prompt frame:** Think like an ant. Break this goal into the smallest possible steps someone could realistically complete.

**Best for:** Project planning, overcoming procrastination, making overwhelming goals actionable, onboarding plans.

---

### Dolphin — Creative Solutions
Dolphins are curious, playful, and inventive. They experiment and explore. This mode encourages unconventional ideas that most people wouldn't consider.

**Prompt frame:** Think like a dolphin — curious, playful and inventive. Generate creative solutions to this problem that most people wouldn't normally consider.

**Best for:** Innovation, lateral thinking, finding non-obvious solutions, escaping conventional approaches.

---

### Eagle — Big Picture Strategy
Eagles soar high and see the entire landscape at once. This mode pulls back from details to reveal how all the pieces connect — long-term strategy, patterns, and system-level interactions.

**Prompt frame:** Think like an eagle flying high above the landscape. Explain the long-term strategy behind this idea and how the pieces connect.

**Best for:** Strategic planning, architecture decisions, understanding how components interact, pitching a vision.

---

### Beaver — Practical Systems
Beavers build dams — complex, functional structures assembled methodically. This mode designs practical systems with clear sequential steps.

**Prompt frame:** Think like a beaver building a dam. Design a practical system that solves this problem step by step.

**Best for:** System design, workflow creation, process engineering, building repeatable solutions.

---

### Elephant — Cross-Disciplinary Connections
Elephants have powerful memories and deep social intelligence. This mode connects the current idea to insights from entirely different fields — drawing on psychology, economics, science, history, and more.

**Prompt frame:** Think like an elephant with a powerful memory. Connect this idea to insights from other fields such as psychology, economics, science or history.

**Best for:** Finding unexpected analogies, enriching proposals with research, interdisciplinary innovation, strengthening arguments.

---

## How to Use

### Single animal mode
When the user specifies an animal (or describes a need that clearly maps to one), apply that animal's thinking framework to their idea or problem. Use the prompt frame as your internal instruction — don't just recite it back to the user. Actually think through the problem in that mode and deliver substantive output.

### Auto-select mode
When the user doesn't specify an animal, read their request and pick the best fit:

| User seems to want... | Use |
|---|---|
| More ideas, variations, angles | Rabbit |
| Deeper analysis, hidden risks | Owl |
| Actionable steps, task breakdown | Ant |
| Creative/unconventional solutions | Dolphin |
| Strategic overview, big picture | Eagle |
| A practical system or workflow | Beaver |
| Cross-field insights, analogies | Elephant |

Briefly tell the user which animal mode you're using and why, then deliver the output.

### Multi-animal mode
When the user asks for a comprehensive analysis, or when the problem genuinely benefits from multiple lenses, combine animals. Good combinations:

- **Rabbit + Owl**: Generate many ideas, then critically analyze each one
- **Eagle + Ant**: See the big picture, then break it into actionable steps
- **Dolphin + Beaver**: Think creatively, then build a practical system from the best idea
- **Elephant + Owl**: Draw cross-disciplinary connections, then analyze hidden factors
- **Full safari**: Run all seven for a comprehensive exploration (use when explicitly requested or for major decisions)

When combining, apply each animal as a distinct pass — don't blur them together. Label each section with the animal so the user can see how each lens contributes.

## Output Guidelines

- Lead with substance, not meta-commentary about the framework
- Use the animal framing as a thinking tool, not decoration — the value is in the output quality, not the metaphor itself
- Adapt depth to the complexity of the request — a quick brainstorm gets a crisp list, a strategic question gets thorough analysis
- When auto-selecting, a one-line note like "Using **Rabbit mode** to multiply your idea into variations:" is enough context before diving in
