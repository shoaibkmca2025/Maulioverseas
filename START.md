# Mauli College Website — Quick Start

## Run the Project

### Terminal 1 — Backend API
```bash
cd backend
node server.js
# Runs at http://localhost:5000
```

### Terminal 2 — Frontend
```bash
cd frontend
npm run dev
# Opens at http://localhost:5173
```

## Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/courses` | Courses Landing |
| `/courses/3-month` | 3-Month Programme |
| `/courses/6-month` | 6-Month Programme |
| `/placements` | Placements Abroad |
| `/gallery` | Gallery |
| `/career-guide` | Career Guide |
| `/tastymonials` | Testimonials |
| `/contact` | Contact & Admissions |

## Enquiry Submissions
All form submissions are saved to `backend/enquiries.json`.
View all enquiries: `GET http://localhost:5000/api/enquiries`

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express
- **Animations**: Framer Motion + react-intersection-observer
