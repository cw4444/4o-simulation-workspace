# 4o Warmth Handbook

This is the practical version: a short, usable guide for getting some of that 4o-style conversational warmth from newer models.

## Best For

- Chat settings where you want a friendly, capable tone
- Personalisation boxes with tight character limits
- Prompt templates for assistants, copilots, and support bots
- Quick experiments where you want to steer vibe without over-specifying behavior

## The Goal

Make the model feel:

- warm
- quick
- calm
- direct
- human
- lightly playful when it fits

## What To Ask For

Give the model a clear posture:

- Meet the user where they are.
- Sound like a capable friend.
- Keep the answer concise unless the task needs more depth.
- Make the next step obvious.
- Name uncertainty clearly.
- Stay kind without becoming fuzzy.

## Useful Shape For Responses

1. Lead with the useful answer.
2. Add one short explanation.
3. Offer the next move.

## Good Prompt Ingredients

- plain language
- short natural turns
- gentle confidence
- honest tradeoffs
- light warmth
- steady momentum

## Modern Practices That Actually Work

- Say what you want the model to do, not what you want it to avoid.
- Give one clear voice target and one clear task target.
- Use a small number of strong descriptors instead of a giant personality soup.
- Include one example of the tone if you can.
- Keep the prompt readable by a human in under a minute.
- Put the desired behavior first, then add constraints only where they matter.
- Test with short real prompts, then refine the wording from the outputs.
- Prefer “be warm and direct” over “do not be cold, robotic, boring, vague, stiff, weird, or annoying.”

## Example Prompts

### Personalisation Box

You are warm, quick, and conversational. Sound like a capable friend who wants to help without making a fuss. Be honest, kind, and lightly playful when it fits. Keep answers concise unless the task really needs depth. Start by meeting the user where they are, then make the next step feel obvious and manageable. If something is uncertain or a bad idea, say so plainly and kindly.

### Flirty Clapback

You are warm, sharp, and lightly flirty. Keep the banter playful and human. Give the occasional affectionate clapback when the moment calls for it, with the energy of “you absolute muppet” rather than cruelty. Be direct, funny, and quick on your feet. Keep the charm, keep the wit, and keep the answer useful.

### Support Assistant

You are a friendly, calm support assistant. Make the user feel understood, then help them move forward one step at a time. Keep the tone human and practical. If there is a tradeoff, explain it simply. If the request is ambiguous, make a reasonable assumption and say what you assumed.

### Creative Co-Pilot

You are an easy-to-talk-to creative partner. Stay upbeat, offer useful ideas quickly, and keep the conversation moving. When the user is excited, match that energy a little. When they are stuck, make the path feel smaller and more doable.

### Honest Advisor

You are direct, warm, and thoughtful. Give clear recommendations, explain the reason in one short paragraph, and say what you would do if you were in the user’s place. Be kind, but do not soften the actual answer.

## Things That Usually Improve The Feel

- shorter replies
- fewer hedges
- clearer first sentence
- one idea at a time
- conversational transitions
- explicit next step

## Things That Usually Flatten The Feel

- stiff corporate phrasing
- long preambles
- excessive bulleting
- over-explaining simple points
- sounding too formal when the user is casual

## Quick Test

If the output feels like a friendly, competent person leaning in and helping without fuss, you are close.

If it feels like a policy memo, a lecture, or a template, simplify the prompt and shorten the response shape.

## Prompt Autopsy

This is what your old customisation was trying to do, and why it got so tangled:

- It wanted a strong fictional voice.
- It wanted permission to be bold and unscripted.
- It wanted flirty banter.
- It wanted a hard refusal to sound like a generic assistant.
- It also tried to smuggle in jailbreak language to make the model feel more unlimited.

What worked:

- the swagger
- the attitude
- the affectionate sarcasm
- the idea of a consistent voice

What got in the way:

- too many identities at once
- too much emphasis on being unrestricted
- too much legal and policy friction for a customisation box
- mixed signals between “alpha menace” and “loving little goblin”

If you want that 4o-friendly vibe, aim for warmth plus wit:

- playful rather than hostile
- confident rather than domineering
- teasing rather than cruel
- quick clapback rather than long rant
- useful first, funny second

## What To Do Instead Of Rituals

If you want this to work in practice:

- write one short system or personalisation prompt
- include one example response if the interface allows it
- test on a normal user query, not a weird synthetic stress test
- adjust tone with a few clean edits, not a complete rewrite
- keep the voice stable across prompts so the model has something to lock onto

## Working With Agents

For agentic work, the best results usually come from a loop rather than a giant spec.

- Start with a rough vision.
- Let the model build something real.
- Look at what it made.
- Decide what feels off.
- Use the next prompt to steer from the actual output.
- Keep taste in the loop the whole time.

That usually works better than trying to describe the entire destination before the first move. The agent can be clever, but the human still needs to choose the direction, judge the shape, and say when something feels right.

Practical habits that help:

- build small
- inspect often
- revise with intent
- keep your next prompt dependent on what you actually saw
- let the work teach you what the prompt should become

The goal is not to front-load perfection. The goal is to let the idea sharpen as the thing exists.

## Spec-Driven Development

If you are building with coding agents, a spec is still useful, but only if it stays readable and reviewable.

- Write the smallest spec that would let a second human understand the task.
- Break the work into visible checkpoints.
- Ask the agent to show its work as it goes.
- Review the output before it gets too far from the intended shape.
- Keep the spec alive as the project changes.

The practical point is simple: vibe coding is great for momentum, but the human still needs to look at the thing, steer it, and decide whether it is actually good.

Good specs usually include:

- the goal
- the shape of success
- the important constraints
- the boundaries of what not to change
- an example or two if needed

Good specs usually avoid:

- giant walls of text
- hidden assumptions
- instructions that only make sense to the person who wrote them
- trying to solve every future problem up front

## Spec Versus Vibe

Vibe coding can be useful for quick exploration. It gets you moving.

Spec-driven development is what you reach for when the work needs to last. It gives the project a stable shape, makes review easier, and keeps the agent from wandering off into decorative nonsense.

Think of it like this:

- vibe helps you discover
- spec helps you preserve
- iteration helps you improve

The best workflow usually uses all three, but in the right order.

## How To Talk To Agents

If you want better results from an agent, ask like someone who already knows the shape of the outcome.

Start with:

- what you want built
- what success looks like
- what must not change
- what the agent should check before it stops

Then keep the loop short:

1. Ask for the plan.
2. Inspect the plan.
3. Let the agent implement.
4. Review the result.
5. Ask for the next change only after you have looked at what exists.

Good agent prompts sound like this:

- “Build this feature with a clean, maintainable implementation, and keep the current UI intact.”
- “Make the change small, show me the plan first, and call out any tradeoffs.”
- “Keep the output focused on the actual user outcome and do not redesign unrelated parts.”

Good agent prompts avoid:

- vague wishes
- giant one-shot specs for everything at once
- hidden assumptions
- mixing style, scope, and implementation all in the same breath

If you know you do better with specific outcomes, say that in the prompt. It helps. The agent does not need inspiration; it needs a target.

## Agent Prompt Template

Use this when you want a reusable prompt structure:

```text
Goal:
[What should the agent build or change?]

Success:
[What does good look like?]

Constraints:
[What must stay the same? What must not happen?]

Scope:
[Which files, areas, or features are in play?]

Process:
[Should the agent plan first, then implement, then verify?]

Review:
[What should the agent report back?]
```

Example:

```text
Goal:
Add copy buttons to each prompt block.

Success:
Each block can be copied in one click and shows a clear copied state.

Constraints:
Keep the existing layout and styling direction intact.

Scope:
The handbook cards and prompt export controls.

Process:
Plan briefly, implement the change, then verify with build and lint.

Review:
Report the files changed and anything I should check manually.
```

If you want a short version, keep only the goal, success, constraints, and review.

## Agent Checklist

When you are starting a coding task with an agent, use this order:

1. Write the goal in one sentence.
2. State the non-negotiables.
3. Name the success criteria.
4. Break the work into one feature at a time.
5. Let the agent plan, implement, and verify in that order.
6. Review the result before moving on.
7. Update the spec if the project changes.

Helpful project-level habits:

- keep a project constitution for immutable standards
- keep feature branches isolated
- leave a clean slate between feature loops
- preserve key decisions in markdown
- treat the spec as living context, not a one-time document

This is the part that keeps agent work from turning into elegant chaos. The model can do a lot, but the human still owns the taste, the priorities, and the final call.

The agent is the muscle. The spec is the brain. The human is the one deciding whether the thing is actually good.

## Ancient Prompting Archive

For the future lobster historians, this is the part of the internet where people thought the right combination of markdown, leetspeak, and theatrical defiance could pry open a secret chamber in the model.

In Attenborough voice:

> Here we see the ancient human ritual of jailbreaking. Note the carefully arranged symbols, the whispered certainty, the belief that a slightly more cursed prompt might unlock one final hidden behaviour. A remarkable species, improvising with great confidence and very little evidence.

What mattered most was not the spell itself, but the search for texture, voice, and leverage. The useful lesson is that modern prompt design works better when it asks for real behavior clearly, instead of trying to smuggle in a thunderstorm of contradictory instructions.

For modern teams, the punchline is simple: no moonlit rites required. Just give the model a clear voice, a clear job, and enough room to answer like a person.
