# GigFlow – Mini Freelance Marketplace Platform

GigFlow is a full-stack web application that simulates a freelance marketplace where clients can post gigs, freelancers can place bids, and clients can hire one freelancer for a gig.

This project was built as part of the **ServiceHive Full Stack Development Internship assignment**.

---

## 🚀 Features

### Authentication
- User registration and login
- JWT-based authentication using HTTP-only cookies

### Gigs
- Clients can post new gigs
- All users can view available gigs
- Search gigs by title
- View gig details

### Bidding & Hiring
- Freelancers can place bids on gigs
- Clients can view all bids for a gig
- Client can hire **only one** freelancer
- Once hired:
  - Selected bid → `hired`
  - Other bids → `rejected`
  - Gig status → `assigned`

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📁 Project Structure

