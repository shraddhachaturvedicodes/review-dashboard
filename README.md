# Guest Review Intelligence Dashboard

An AI-powered web tool that analyzes guest reviews for eco-homestays — classifying sentiment, tagging themes, and generating management responses using Gemini AI.

## Tech Stack
- Frontend: React 18 + Vite
- Styling: Tailwind CSS
- Backend: Node.js + Express
- AI: Gemini via OpenRouter API
- Charts: Recharts
- CSV Export: PapaParse
- Deployment: Vercel (frontend)

## Core Features
- Single and bulk review input
- AI sentiment classification (Positive / Neutral / Negative)
- Theme tagging (Food, Host, Cleanliness, Location, Value, Experience)
- Management response generation
- Visual analytics dashboard
- CSV export
- Reusable component library (Button, Input, Modal, Toast, Loader)
- Dark/light mode toggle with persistence
- Backend API with saved analysis history
- Search and filter saved analyses by theme or sentiment

## Project Structure
review-dashboard/

├── src/

│   ├── components/

│   │   ├── ui/              # Reusable component library

│   │   ├── Header.jsx

│   │   ├── Footer.jsx

│   │   ├── Hero.jsx

│   │   ├── Card.jsx

│   │   ├── ReviewInput.jsx

│   │   ├── ResultsTable.jsx

│   │   ├── Dashboard.jsx

│   │   └── SummaryCard.jsx

│   ├── pages/

│   │   ├── Home.jsx

│   │   ├── About.jsx

│   │   ├── Login.jsx

│   │   ├── DashboardPage.jsx

│   │   └── History.jsx

│   ├── context/

│   │   └── ThemeContext.jsx

│   └── utils/

│       ├── gemini.js

│       └── api.js

└── backend/

├── server.js

└── package.json

## How to Run Frontend Locally

1. Clone the repo and navigate into it:
git clone https://github.com/shraddhachaturvedicodes/review-dashboard.git

cd review-dashboard
2. Install dependencies:
npm install
3. Create a `.env` file in the project root with:
VITE_GEMINI_API_KEY=your_openrouter_api_key
4. Start the dev server:
npm run dev
5. Open `http://localhost:5173`

## How to Run Backend Locally

1. Navigate to the backend folder:
cd backend
2. Install dependencies:
npm install
3. Create a `.env` file in the backend folder with:
PORT=5000
4. Start the server:
npm run dev
5. The API will be running at `http://localhost:5000/api/analyses`

**Note:** Both the frontend (port 5173) and backend (port 5000) need to run at the same time, in separate terminal windows, for the app to work fully.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/analyses` | Get all saved analyses |
| GET | `/api/analyses/:id` | Get a single analysis by ID |
| POST | `/api/analyses` | Create a new saved analysis |
| PUT | `/api/analyses/:id` | Update an existing analysis |
| DELETE | `/api/analyses/:id` | Delete an analysis |
| GET | `/api/analyses/search?theme=&sentiment=&q=` | Search/filter analyses |

All endpoints return JSON and use standard HTTP status codes (200, 201, 204, 400, 404, 500).

## Component Library

Located in `src/components/ui/`, exported via a single `index.js`:
- **Button** — variants (primary, secondary, outline), sizes (sm, md, lg)
- **Input** — labeled input with error display
- **Modal** — focus-trapped, closes on Escape or backdrop click
- **Toast** — auto-dismissing notification (success, error, info)
- **Loader** — spinner and skeleton variants

## Project Context

Built as part of the TBI-GEU Summer Internship Program 2026 — AI-Assisted Full Stack Web Development Track.

**Intern:** Shraddha Chaturvedi
**Intern ID:** TBI-26101134
**Institution:** Graphic Era University, Dehradun