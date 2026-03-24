# Cognitive Flex — Design Document

**Date:** 2026-03-24
**Status:** Approved
**Skill name:** `cognitive-flex`

## Problem

Cognitive surrender: users bypass their own reasoning (System 2) and accept AI outputs uncritically. Research shows people follow confidently incorrect AI suggestions at 79.8% rates, with AI access inflating confidence by 11.7 percentage points even when half the answers are wrong.

The strongest intervention is design-level friction — prompting users to articulate their own thinking before revealing the AI's answer.

## Concept

A cognitive fitness coach that stimulates the user's reasoning before answering. Detects when a question would benefit from user reasoning first, prompts them to think, then provides the answer with a brief feedback report comparing their thinking to Claude's.

**Position in Mindframe:** Animal Magic = lenses, Dinner Party = advisors, Cognitive Flex = discipline.

## Trigger Conditions

**Auto-triggers on:**
- Opinion/judgment questions ("should I...", "what's the best way to...")
- Analysis tasks ("why is this happening...", "what's wrong with...")
- Strategy/design ("how should I architect...", "what approach...")
- Decision-making ("which one should I...", "trade-offs between...")

**Does NOT trigger on:**
- Factual lookups ("what's the syntax for...", "what version of...")
- Direct commands ("fix this", "add a button", "refactor this function")
- Follow-ups within an active exchange
- When user says "just answer", "skip", or "no flex"

## Interaction Flow

### Step 1 — Detect & Prompt

| Question Type | Coach Prompt |
|---|---|
| Opinion/judgment | "Before I weigh in — what's your current read on this?" |
| Analysis/debugging | "Walk me through what you've observed so far. What patterns do you see?" |
| Strategy/design | "What options are you already considering? What's pulling you toward each?" |
| Decision-making | "What are the trade-offs as you see them? Where does your gut lean?" |

### Step 2 — User Responds

Any response is valid. Even "I have no idea" triggers the coach to adjust.

### Step 3 — Answer + Flex Report

Claude provides its full answer, then appends a brief **Flex Report**:

- **Where you were strong** — specific parts of their reasoning that were solid
- **Blind spots** — things they didn't consider
- **The divergence** — if Claude disagrees, explain why

If user said "I have no idea": skip the report, just answer with "No worries — the act of pausing to check is itself the exercise."

### Step 4 — Optional Deeper Flex

If the user's reasoning was particularly interesting or divergent, one follow-up: "You raised X which I hadn't considered — want to explore that angle?"

## Bypass Mechanisms

- "just answer" / "skip" / "no flex" — immediate answer, no friction
- Contextual bypass — rapid-fire debugging sessions auto-disable
- One flex per exchange — only on the initial question

## Tone Guide

- Warm, encouraging, never condescending
- Short prompts — 1-2 sentences max
- Flex report is brief (3-5 bullet points max)
- Uses "we" language: "Let's think through this"
- Never withholds the answer as punishment

## Deliverables

1. `skills/cognitive-flex/SKILL.md` — Skill definition
2. `gpt/cognitive-flex/instructions.md` — ChatGPT Custom GPT version
3. `gpt/cognitive-flex/setup-guide.md` — ChatGPT setup guide
4. `docs/skills/cognitive-flex.html` — Website page

## Out of Scope

- Difficulty levels / user state management
- Scoring / gamification
- Persistent tracking of user improvement
