# API contract

- `GET /api/challenge?size=5` returns the current UTC date, deterministic seed, board, and optimal move count.
- `GET /api/leaderboard?size=5` returns the best validated entries for one board size.
- `POST /api/scores` validates player name, board size, move count, elapsed seconds, and computed score before persistence.

Scores are stored in an ignored local JSON file. The service is intentionally small; a public competitive deployment would add authenticated identities, challenge signatures, rate limiting, replay protection, and a transactional database.
