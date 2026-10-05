# Instant VDF Construction: Lead Management Website

Full-stack website for an industrial flooring contractor in Hyderabad.
Visitors submit quote and contact requests; an admin dashboard manages them.

## Tech stack
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend:** Java, Spring Boot 3.3, Spring Data JPA, Spring Security, JWT
- **Database:** PostgreSQL

## Features
- Public site: services, projects, gallery, FAQ, quote and contact forms
- JWT-secured admin dashboard (login, search, filter, sort, paginate)
- Lead status workflow: NEW, IN_PROGRESS, CONTACTED, APPROVED, COMPLETED, REJECTED
- Dynamic filtering with JPA Specifications and whitelisted sort fields
- Centralized exception handling (400, 401, 404 mapped correctly)

## Run locally
**Backend** (needs PostgreSQL; set the variables from `ivc-backend/.env.example` as environment variables):

cd ivc-backend
mvn spring-boot:run

**Frontend** (copy `.env.example` to `.env` first):

cd frontend
npm install
npm run dev

Frontend: http://localhost:5173, API: http://localhost:8080/api