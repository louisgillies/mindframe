# Mindframe

Thinking framework skills for Claude Code and other AI agents.

## What's Inside

| Skill | Description | Details |
|-------|-------------|---------|
| Animal Magic | Seven animal-based thinking frameworks for brainstorming, analysis, planning, and creative problem-solving | [skills/animal-magic/SKILL.md](skills/animal-magic/SKILL.md) |

## Animal Magic Quick Reference

| Animal | Mode | Best For |
|--------|------|----------|
| Rabbit | Multiply Ideas | Brainstorming, content ideation |
| Owl | Deep Analysis | Risk assessment, root cause analysis |
| Ant | Small Steps | Project planning, task breakdown |
| Dolphin | Creative Solutions | Innovation, lateral thinking |
| Eagle | Big Picture | Strategic planning, architecture |
| Beaver | Practical Systems | System design, workflows |
| Elephant | Cross-Disciplinary | Analogies, interdisciplinary insight |

## Installation

### Claude Code plugin (recommended)

```
/install github.com/louisgillies/mindframe
```

### npm

```bash
npm install -g mindframe
```

### Manual

Clone the repo and copy the skills into your Claude skills directory:

```bash
git clone https://github.com/louisgillies/mindframe.git
cp -r mindframe/skills/* ~/.claude/skills/
```

## Usage

Invoke any animal mode by describing how you want to think:

```
"Think like a rabbit and give me 10 variations on this headline"
"Analyze this proposal like an owl -- what are the hidden risks?"
"Break this project down like an ant into the smallest possible steps"
```

You can also let the skill auto-select the best animal for your request -- just describe what you need and the framework picks the right mode. For complex problems, ask for multi-animal analysis to run several lenses in sequence (e.g. Eagle for big-picture strategy, then Ant for actionable steps).

## Custom GPT

A ChatGPT GPT version of Animal Magic is available. See [gpt/animal-magic/setup-guide.md](gpt/animal-magic/setup-guide.md) for setup instructions.

## Website

[https://louisgillies.github.io/mindframe](https://louisgillies.github.io/mindframe)

## Adding a New Framework

1. Create `skills/<name>/SKILL.md` with frontmatter containing `name` and `description` fields.
2. Optionally create `gpt/<name>/` with `instructions.md` and `setup-guide.md` for a ChatGPT GPT version.
3. The plugin auto-discovers new skills in the `skills/` directory -- no other config needed.

## Attribution

The Animal Magic framework is inspired by [Amanda Caswell's article on Tom's Guide](https://www.tomsguide.com/ai/i-use-the-rabbit-prompt-for-multiplying-my-ideas-and-its-a-game-changer).

## License

[MIT](LICENSE)
