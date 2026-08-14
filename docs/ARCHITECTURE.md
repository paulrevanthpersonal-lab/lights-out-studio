# Architecture

The game separates deterministic board operations from browser state. `core.js` owns coordinate conversion, cross toggling, solved-state checks, board seeding, and hint selection. `app.js` owns elapsed time, move history, input, rendering, and local best scores.

This makes game rules independently testable and keeps the UI replaceable.
