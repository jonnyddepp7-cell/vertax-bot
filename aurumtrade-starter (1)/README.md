# AurumTrade Starter

Full-stack starter: registration/login, server-side sessions, password hashing, SQLite ledger, deposit/withdrawal request queue, and admin review.

## Important
**TEST/MANUAL-REVIEW MODE ONLY.** No bank, payment processor, or blockchain is connected. Admin approval is not proof of external settlement. Do not accept real funds or promise investment returns with this starter. Before a real-money launch, obtain legal/compliance advice and a professional security review, add verified payment/blockchain settlement, audit logs, backups, email verification, password reset, admin MFA, monitoring, and a production database/session store. Static GitHub Pages cannot run this backend.

## Run locally
1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Replace `SESSION_SECRET` with a random secret at least 32 characters long.
4. Set a private `ADMIN_EMAIL` and strong `ADMIN_PASSWORD`.
5. Keep `DEMO_MODE=true`; do not commit `.env`.
6. In this folder run `npm install` then `npm start`.
7. Open http://localhost:3000.

Admin is seeded only when the environment variables are set and the database has no user with that email. The included SQLite database is for development/prototyping only.
