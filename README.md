# 4o Simulation Workspace

Live demo: [4o-simulation-workspace.vercel.app](https://4o-simulation-workspace.vercel.app/)

A small playground for exploring the conversational warmth, pace, and tone people liked in 4o.

This is a style experiment, not an attempt to rebuild the model.

## Start Here

If you just want to try it:

1. Open the live demo link above.
2. Read the short prompt on the page.
3. Paste any prompts you want to test into the handbook or the short prompt box.
4. Copy the version you want and try it in your own tool.

If you want to run it locally:

```bash
npm install
npm run dev
```

## What’s in here

- `4o-style-sheet.md` for the longer prompt/tone guidance
- `4o-handbook.md` for the practical do-this version
- `4o-short-prompt.md` for a paste-ready personalisation box version
- `4o-prompt-presets.md` for a few quick variants
- A small React app that previews the style and gives you a quick reference

## Why this exists

To help prompt writers and tool builders steer newer models toward:

- friendly momentum
- honest but kind answers
- short, natural turns when possible
- a voice that feels like a capable conversational partner

It also keeps a little archival record of the old jailbreak era, mostly so future agents can laugh, learn, and avoid repeating the curse-spell era.

The handbook also includes modern prompt practices that are meant to be actually usable in normal interfaces: short, clear, behavior-first instructions rather than ritual-grade incantations.

It also includes an agent-work section about the rough-vision-then-iterate loop, since that is usually how the best results happen in real projects.

And it now has a spec-driven development section, because coding agents work best when humans keep a readable spec and review the output as it evolves.

There is also a compact agent checklist that follows the same loop described in the course intro: goal, constraints, success criteria, plan, implement, verify, review, repeat.

The handbook now spells out the vibe/spec distinction too: vibe helps you discover, spec helps you preserve, iteration helps you improve.

It also has a practical section on talking to agents directly, with example prompts that focus on outcomes, constraints, and review.

There is now a reusable agent prompt template too, so you can fill in goal, success, constraints, scope, process, and review without starting from scratch.

## Credit

Built by Codex with inspiration from OpenAI’s 4o-era conversational style.
