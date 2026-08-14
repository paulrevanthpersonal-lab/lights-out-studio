# Architecture

The game separates deterministic board operations from browser state. `core.js` owns coordinate conversion, cross toggling, seeded generation, solved-state checks, first-row enumeration, exact solution selection, hint selection, and score calculation. `app.js` owns elapsed time, move history, input, rendering, and local fallback state.

`server.js` supplies a UTC daily challenge and persists validated leaderboard entries. It rejects invalid board sizes, names, moves, times, and scores. This makes game rules independently testable, keeps the UI replaceable, and gives the full-stack build a narrow, explainable trust boundary.
