# CinePlex - Movie Booking Website

## Overview
A static HTML/CSS/JavaScript website for a movie theater booking experience called CinePlex. Users can browse movies, view details, and simulate seat selection.

## Project Structure
- `index.html` - Main landing page
- `style.css` - Main stylesheet
- `script.js` - Main JavaScript file
- `sites/` - Contains additional pages:
  - Movie listing pages (ahome.index.html, apage2-6.html)
  - Individual movie pages (dmovie.html, edmovie.html, fdmovie.html)
  - Additional stylesheets (s.style.css, s2-6.style.css, t.style.css)
  - Movie poster images (zpic*.jpg)

## Technology Stack
- Pure HTML5
- CSS3
- Vanilla JavaScript

## Running Locally
The site is served using Python's built-in HTTP server on port 5000:
```
python -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured for static deployment - all files in the root directory are served directly.
