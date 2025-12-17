# CinePlex - Movie Booking Website

## Overview
A static HTML/CSS/JavaScript movie theater booking simulation featuring an iOS 26 "Liquid Glass" design aesthetic. Users can browse movies, view details, select seats, and complete a simulated booking flow.

## Recent Changes
- **Dec 2024**: Complete redesign with iOS 26 Liquid Glass aesthetic
  - Added translucent glass panels with backdrop-filter blur effects
  - Implemented light refraction styling and soft shadows
  - Created unified design system in `liquid-glass.css`
  - Added About and Contact pages
  - Fixed payment page dark background issue
  - Fixed confirmation page home link

## Project Structure
```
/
├── index.html          # Main landing page
├── about.html          # About Us page
├── contact.html        # Contact page
├── style.css           # Page-specific styles for main pages
├── liquid-glass.css    # Shared Liquid Glass design system
├── script.js           # JavaScript (currently minimal)
└── sites/              # Booking flow pages
    ├── ahome.index.html    # Movie listings
    ├── s.style.css         # Movie grid styles
    ├── apage2.html         # Iron Man detail
    ├── dmovie.html         # Gundam detail
    ├── edmovie.html        # Interstellar detail
    ├── fdmovie.html        # Shrek detail
    ├── s2.style.css        # Movie detail styles
    ├── apage3.html         # Seat selection
    ├── s3.style.css        # Seat selection styles
    ├── apage4.html         # Booking form
    ├── s4.style.css        # Booking form styles
    ├── apage5.html         # Payment page
    ├── s5.style.css        # Payment styles
    ├── apage6.html         # Confirmation page
    ├── s6.style.css        # Confirmation styles
    └── zpic*.jpg           # Movie poster images
```

## User Flow
1. **Home** → Browse featured content
2. **Movies** → View all available movies
3. **Movie Detail** → See movie info and select showtime
4. **Seat Selection** → Choose seats interactively
5. **Booking Form** → Enter personal details
6. **Payment** → Enter payment info (simulation)
7. **Confirmation** → View booking confirmation with QR code

## Design System (iOS 26 Liquid Glass)
The design follows Apple's iOS 26 Liquid Glass principles:
- Translucent backgrounds with backdrop-filter blur
- Soft shadows and light highlight effects
- Rounded corners (28px for panels, full radius for buttons)
- Subtle animations and transitions
- Color palette: Blue accent (#007AFF), Green success (#30D158)

## Technology Stack
- Pure HTML5
- CSS3 (with CSS custom properties/variables)
- Vanilla JavaScript
- No build tools required

## Running Locally
```bash
python -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured for static deployment - all files served directly from root.
