
# Valipay – Backend Orchestrator

This is the backend orchestration layer for the Valipay platform. It handles routing, authentication, and wallet balance queries via Dune SIM API.

## 🛠️ Stack

- Node.js + Express
- JWT Authentication
- Dune SIM API Integration
- Docker + Docker Compose
- Bcrypt for password hashing

---

## 📁 Folder Structure

```
backend/
├── server.js               # App entry point
├── package.json            # Dependencies
├── .env.example            # Environment variable sample
├── routes/
│   └── balances.js         # Authenticated route to fetch wallet balances
├── middleware/
│   └── auth.js             # JWT middleware
├── utils/
│   └── dune.js             # Dune API handler
├── Dockerfile              # Docker configuration
└── docker-compose.yml      # Multi-container setup
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
PORT=3000
SECRET_KEY=your_secret_key
SIM_API_KEY=your_dune_sim_api_key
```

---

## 🚀 Running the Project

### Local

```bash
npm install
cp .env.example .env
node server.js
```

### Docker

```bash
cp .env.example .env
docker-compose up --build
```

---

## 🔐 Endpoints

- `POST /login` — Authenticates and returns a JWT token
- `GET /balances` — Returns wallet balances (JWT-protected)

---

## 📌 Notes

- Replace `walletAddress` in the request with a real EVM address
- Make sure your DUNE SIM API key is active

---

## 📬 Contact

For support or questions, contact the Valipay team at `juanlj90@gmail.com`.
