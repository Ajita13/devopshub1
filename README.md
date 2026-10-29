# DevOpsHub CI/CD Management Platform

Production-grade, end-to-end full-stack CI/CD orchestration and monitoring platform built with **React 19**, **Node.js/Express 5**, **Prisma ORM (SQLite/PostgreSQL)**, and **Socket.IO** real-time WebSocket telemetry.

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────┐
│               Frontend (React 19 + Vite)              │
│  - React Router v7 & Protected Routes (RBAC)           │
│  - Lucide Icons & Recharts (Live Telemetry Graphs)    │
│  - Central API Client (Auto-Refresh on 401)            │
│  - Socket.IO Client (Auto-Reconnect & Status Badge)    │
└───────────────▲────────────────────────▲───────────────┘
                │ REST API               │ WebSocket
                ▼                        ▼
┌────────────────────────────────────────────────────────┐
│             Backend (Node.js & Express 5)              │
│  - Helmet Security, Rate Limiter, CORS                 │
│  - JWT Auth (Access + Refresh Tokens in httpOnly)      │
│  - Input Validation (Zod Schemas)                      │
│  - Socket.IO Real-Time Engine (User-Isolated Rooms)    │
└───────────────────────▲────────────────────────────────┘
                        │ Prisma ORM
                        ▼
┌────────────────────────────────────────────────────────┐
│      ACID Relational Database (SQLite / Postgres)      │
│  - Strict Foreign-Key User Isolation                   │
│  - Pipelines, Builds, Deployments, Activities, Logs    │
└────────────────────────────────────────────────────────┘
```

---

## Features

- **Authentication & Security**:
  - Secure signup and login with bcrypt password hashing (10 salt rounds).
  - Dual-token JWT architecture (Short-lived access tokens + 7-day refresh tokens stored in DB and secure httpOnly cookies).
  - Role-Based Access Control (`user` and `admin`) on backend endpoints and frontend views.
  - Zod schema input validation, Helmet headers, express-rate-limit, and SQL-injection/XSS protection.
- **Database & Data Isolation**:
  - Prisma ORM with SQLite database (`backend/prisma/dev.db`) — zero external database daemon required for local startup.
  - Strict user isolation: every user's pipelines, builds, deployments, and logs are partitioned by `userId`.
  - Admin seed script (`npm run seed`) creating the administrator account.
- **Real-Time Telemetry (Socket.IO)**:
  - WebSocket handshakes authenticated with JWT tokens.
  - Sockets join user-isolated rooms (`user_${userId}`).
  - Instant live updates across all dashboard widgets, stat counters, and tables without page refresh.
  - Real-time build console logs streaming step-by-step.
  - Connection status indicator (`Connected` with pulsing green dot / `Reconnecting`).
- **Zero Mock / Placeholder Data**:
  - Every counter, percentage, chart, and list is calculated directly from database records.
  - Brand-new accounts see genuine zero/empty states with quick action buttons.

---

## Default Admin Credentials

An administrator account can be created using the seed script:

- **Email**: `admin@devopshub.io`
- **Password**: `AdminPassword123!`
- **Role**: `admin`

*(On the login page, you can also click "Click to autofill Admin Account" for instant local testing).*

---

## Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Default |
|---|---|---|
| `PORT` | API server port | `5000` |
| `NODE_ENV` | Environment mode (`development` / `production`) | `development` |
| `DATABASE_URL` | Prisma SQLite or PostgreSQL URL | `file:./dev.db` |
| `JWT_ACCESS_SECRET` | Secret key for JWT access tokens | `devopshub_super_secret_access_jwt_key_2026_xyz` |
| `JWT_REFRESH_SECRET`| Secret key for JWT refresh tokens | `devopshub_super_secret_refresh_jwt_key_2026_abc` |
| `JWT_ACCESS_EXPIRES_IN` | Access token lifetime | `15m` |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token lifetime | `7d` |
| `CORS_ORIGIN` | Allowed client origin | `http://localhost:5173` |
| `ADMIN_EMAIL` | Seed admin email | `admin@devopshub.io` |
| `ADMIN_PASSWORD` | Seed admin password | `AdminPassword123!` |
| `ADMIN_NAME` | Seed admin display name | `DevOps Admin` |

### Frontend (`react/.env`)
| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Backend REST API endpoint | `http://localhost:5000/api` |
| `VITE_SOCKET_URL` | Socket.IO WebSocket server endpoint | `http://localhost:5000` |

---

## Quick Start & Running Locally

### 1. Install Dependencies & Seed
```bash
# Seed initial admin account
npm run seed
```

### 2. Run API & Live Verification Tests
```bash
# Run API test suite (12 tests covering auth, RBAC, CRUD, and isolation)
npm test

# Run end-to-end real-time flow verification
cd backend && node -e "require('./server'); setTimeout(() => require('./tests/verifyFlow'), 1000);"
```

### 3. Start Backend & Frontend
In Terminal 1 (Backend):
```bash
npm run dev:backend
# Backend starts on http://localhost:5000
```

In Terminal 2 (Frontend):
```bash
npm run dev:frontend
# Frontend starts on http://localhost:5173
```

---

## API Endpoints Reference

### Authentication (`/api/auth`)
- `POST /api/auth/register` — Register a new user account (returns JWT tokens & user object)
- `POST /api/auth/login` — Sign in with email & password
- `POST /api/auth/refresh` — Issue fresh access token using refresh token cookie
- `POST /api/auth/logout` — Revoke refresh token and clear cookies
- `GET /api/auth/me` — Get authenticated user details
- `PUT /api/auth/profile` — Update user profile name and preferences
- `PUT /api/auth/change-password` — Change password with current password verification

### Pipelines (`/api/pipelines`)
- `GET /api/pipelines` — List user pipelines (supports `search`, `status`, `page`, `limit`)
- `POST /api/pipelines` — Create a pipeline
- `GET /api/pipelines/:id` — Get pipeline details and recent builds
- `PUT /api/pipelines/:id` — Update pipeline configuration
- `DELETE /api/pipelines/:id` — Delete pipeline
- `POST /api/pipelines/:id/run` — Trigger pipeline execution (dispatches build and streams logs)

### Builds (`/api/builds`)
- `GET /api/builds` — List user builds (supports `search`, `status`, `pipelineId`)
- `GET /api/builds/:id` — Get build details and execution console output
- `POST /api/builds/:id/cancel` — Cancel an in-progress build

### Deployments (`/api/deployments`)
- `GET /api/deployments` — List user deployments (supports `environment`, `status`, `search`)
- `POST /api/deployments` — Trigger manual deployment
- `GET /api/deployments/:id` — Get deployment details

### Dashboard & Analytics (`/api/dashboard`, `/api/analytics`)
- `GET /api/dashboard/stats` — Real-time aggregated metrics calculated from user's records
- `GET /api/analytics` — Detailed cycle times, pass/fail ratios, and weekly distributions

### System Logs & Health (`/api/logs`, `/api/health`)
- `GET /api/logs` — Query system logs (supports `level`, `service`, `search`)
- `POST /api/logs` — Create custom system log entry
- `GET /api/health` — Service health, database latency check, and node memory statistics

---

## Real-Time WebSocket Events

The application emits and listens to the following Socket.IO events on `user_${userId}` rooms:

| Event | Direction | Description |
|---|---|---|
| `pipeline:created` | Server → Client | Pushed when a pipeline is created |
| `pipeline:updated` | Server → Client | Pushed when pipeline status changes (IDLE/RUNNING/SUCCESS) |
| `pipeline:deleted` | Server → Client | Pushed when a pipeline is deleted |
| `build:created` | Server → Client | Pushed when a build begins |
| `build:log` | Server → Client | Streams real-time container log lines into open build modals |
| `build:updated` | Server → Client | Pushed when a build completes or fails |
| `deployment:created`| Server → Client | Pushed when a deployment is recorded |
| `activity:new` | Server → Client | Pushed when a new audit event occurs |
| `stats:refresh` | Server → Client | Prompts dashboard to recalculate all counters without refresh |
