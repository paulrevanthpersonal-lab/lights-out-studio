# Interview guide

## Origin

Lights Out Studio is a complete redesign and engineering expansion of my original Lights Out final project. The underlying cross-toggle puzzle remains, while the portfolio edition adds multiple sizes, deterministic solvable generation, unit-tested rules, persistent best scores, accessibility state, hints, session history, and responsive design.

## Discussion points

- Why valid-move seeding guarantees a solvable board.
- Why game rules are separated from the browser controller.
- How `aria-pressed`, grid roles, and descriptive labels expose state.
- Why the sound control is honest UI state and does not pretend audio is implemented.
- How animation is restrained and reduced-motion aware.
