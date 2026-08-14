# Interview guide

## Origin

Neon Circuit is a full engineering expansion of my original Lights Out final project. The cross-toggle puzzle remains, while this edition adds three board sizes, deterministic daily seeds, an exact solver, solution-backed hints, score validation, a persisted leaderboard, accessibility state, tests, and responsive design.

## Discussion points

- Why valid-move seeding guarantees a solvable board.
- How first-row enumeration solves an `n × n` Lights Out board without brute-forcing every cell.
- Why game rules are separated from the browser controller.
- How `aria-pressed`, grid roles, and descriptive labels expose state.
- Why local and server leaderboards are clearly distinguished.
- How animation is restrained and reduced-motion aware.
