# Spotify Clone PWA (Vanilla JS + Express)

A **Progressive Web App (PWA)** music player inspired by Spotify.  
Built with **vanilla JavaScript, HTML, SCSS**, and a **Node.js/Express** backend that fetches data from the **Spotify Web API (Client Credentials Flow)**.

✅ Fully responsive UI (mobile-first)  
✅ Playlist management (CRUD) stored in LocalStorage  
✅ Offline support via Service Worker caching  
✅ Toast + system notifications

---

## Live Demo

- **App (Frontend + Backend):** TODO: paste your Render URL here
- **Backend API:** TODO: paste backend URL here (if separate)

> If the Render instance is sleeping, the first request may take a few seconds.

---

## Screenshots

| Home                          | Playlist                              | Mobile                            |
| ----------------------------- | ------------------------------------- | --------------------------------- |
| ![Home](screenshots/1.jpg) | ![Playlist](screenshots/2.jpg) | ![Mobile](screenshots/3.jpg) |

---

## Features

### UI / UX

- Spotify-inspired interface with modern layout
- **Responsive (mobile-first)** layout for mobile, tablet and desktop
- Custom **toast notifications** + optional system notifications

### Spotify Data (API)

- Browse genres / categories
- Browse **top tracks** and **new releases**
- Track search (Spotify API)

### Playlists (LocalStorage)

- Create / edit / delete playlists
- Add / remove tracks
- Edit playlist details:
  - title
  - description
  - cover image

### PWA

- Installable app (manifest)
- **Offline mode** (cached assets) via Service Worker

---

## Tech Stack

**Frontend**

- HTML5
- JavaScript (ES6+)
- SCSS (modular structure, mixins, responsive utilities)
- Service Worker + Web App Manifest

**Backend**

- Node.js
- Express
- node-fetch
- CORS
- Rate limiting middleware

**Storage**

- LocalStorage (playlists, tracks, UI state)

**API**

- Spotify Web API (Client Credentials Flow)

---

## Architecture Overview

- The **Express backend** handles Spotify authentication and API requests.
- The **frontend** communicates with the backend using a configured `API_URL`.
- Playlists are stored locally (LocalStorage) to keep the app lightweight and avoid auth complexity.
- Service Worker caches static assets to support offline use and faster reloads.

---

## Getting Started (Local)

### 1. Clone repository

```bash

cd Spotify-PWA
```
