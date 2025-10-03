# ProfileCard React App

A clean, responsive Profile Card component built with React, TypeScript, and Tailwind CSS, scaffolded with Vite.

## Features

- Typed React component with well-defined props interface.
- Responsive design: full-width on mobile, max 300px width on desktop, centered.
- Tailwind CSS for styling and hover effects.
- Dockerized production-ready image for easy deployment.

## Project Setup

1. Clone this repository:
   ```
   git clone https://github.com/Mr-Ndi/profilecard
   cd profilecard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```
---

## Docker Image

You can pull and run the latest production image from Docker Hub:

```
docker pull ninshuti/profilecard-app
docker run -p 8080:80 ninshuti/profilecard-app
```

1. Basic real-time logs:
   ```
   gdocker logs -f <container_id_or_name>
   ```
Visit `http://localhost:8080` to see the app.

---

## Deploying

The image is ready to deploy on platforms like Render, Docker Hub, or any container service.

- Image: `ninshuti/profilecard-app`
- Built with multi-stage Dockerfile for minimal production size.
- No special environment variables are required for static frontend deployment.
```