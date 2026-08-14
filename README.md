# Neon Circuit — Lights Out

A tested strategy puzzle evolved from my original Lights Out coursework, with an exact solver, deterministic daily challenges, verified hints, server-backed scores, and a responsive signal-console interface.

**[Play the live demo](https://paulrevanthpersonal-lab.github.io/neon-circuit/)**

![Lights Out desktop game](docs/screenshots/game-desktop.png)

## 1. Overview

Turn every signal off. Selecting a tile toggles itself plus its horizontal and vertical neighbors.

## 2. Project lineage

The original version established the playable grid, timer, move counter, restart flow, and win detection. This edition preserves that foundation while replacing the presentation and expanding architecture, tests, difficulty, hints, persistence, and documentation.

[View the original coursework source at the preserved commit.](https://github.com/MacDevil143/ITC505/tree/f415d5006493f46949c7230174be3ecda8730ce2/final)

## 3. Gameplay

Choose a 4×4, 5×5, or 6×6 board, solve the seeded daily circuit in as few moves as possible, and submit a validated score to the local leaderboard.

## 4. Solvable generation

Boards are generated from deterministic legal moves and then solved by first-row enumeration. Every puzzle shown by the app is verified solvable, the optimal move count is known, and hints come from the computed solution rather than from a lit tile guess.

## 5. Architecture

Pure game rules and the exact solver are isolated from DOM and timing behavior. The Node service owns the daily seed and leaderboard. See [ARCHITECTURE.md](docs/ARCHITECTURE.md) and [API.md](docs/API.md).

## 6. Interface design

The signal-console visual system uses functional typography, instrument readouts, tactile light states, and a chronological move log. See [GAME_DESIGN.md](docs/GAME_DESIGN.md).

## 7. Accessibility

The board exposes grid cells with coordinates and on/off state, controls are keyboard accessible, and reduced-motion preferences are honored.

## 8. Performance

The app has no runtime dependencies. State changes update a small grid, and animation uses transforms and shadows. Device and browser determine actual refresh rate; no universal FPS claim is made.

## 9. Quick start

```bash
npm start
# open http://localhost:4190
```

## 10. Tests

```bash
npm run check
npm test
```

Tests cover cross toggling, solved-state detection, deterministic generation, exact solving, hint validity, score rules, daily challenge delivery, and leaderboard submission.

## 11. Automated screenshots

```bash
./scripts/capture_screenshots.sh
```

## 12. Repository structure

```text
assets/   rules, exact solver, controller, visual system
data/     ignored local score persistence
docs/     architecture, game design, interview guide, screenshots
scripts/  repeatable visual captures
tests/    deterministic rule and API integration tests
server.js daily challenge, leaderboard, and static service
```

## 13. Persistence

Personal bests remain in localStorage. Reviewer names and validated scores are stored only in the ignored local runtime file; no data leaves the machine unless a deployer intentionally adds a remote service.

## 14. Quality automation

GitHub Actions runs the Node test suite for pushes and pull requests with read-only repository permissions.

## 15. Interview walkthrough

Use [INTERVIEW_GUIDE.md](docs/INTERVIEW_GUIDE.md) to discuss the project’s origin, algorithms, trade-offs, and accessibility choices.

## 16. Known boundaries

The sound toggle communicates UI preference only; audio assets are not bundled. The GitHub Pages build uses deterministic local challenges and local scores, while the Node service enables shared local leaderboards.

## 17. Roadmap

- Shareable challenge links
- Signed score submissions and abuse controls
- Optional sound design and haptics
- Automated browser accessibility checks

## 18. License

[MIT](LICENSE)
