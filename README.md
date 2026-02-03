# Static Website Sample using Laravel + React

A full-stack web application with Laravel REST API backend, React.js frontend, JWT authentication, and CRUD operations for a Task management system.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Backend** | Laravel 12 with REST API |
| **Frontend** | React + Vite + Tailwind CSS |
| **Database** | SQLite |
| **Authentication** | JWT via `tymon/jwt-auth` |

## Project Structure

```
laravel-react-jwt-crud-system/
├── backend/          # Laravel API
└── frontend/         # React + Vite
```

## Features

- User registration and login with JWT authentication
- Protected API routes
- Task CRUD operations (Create, Read, Update, Delete)
- Task status management (Pending, In Progress, Completed)
- Modern responsive UI with Tailwind CSS

## Getting Started

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- npm

### Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
```

Backend runs on: http://localhost:8000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Login and get JWT token |
| POST | `/api/logout` | Logout (invalidate token) |
| GET | `/api/me` | Get authenticated user |

### Tasks (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | List all tasks |
| POST | `/api/tasks` | Create new task |
| GET | `/api/tasks/{id}` | Get single task |
| PUT | `/api/tasks/{id}` | Update task |
| DELETE | `/api/tasks/{id}` | Delete task |

## License

MIT
