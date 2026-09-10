# Khakiya Travels & Tours (Pvt) Ltd — Official Web Application

Modern, high-performance, and responsive frontend web application for **Khakiya Travels & Tours**, Sri Lanka’s premier IATA-accredited Hajj & Umrah pilgrimage organizer.

---

## 🕋 Project Overview

- **Core Scope**: Exclusively dedicated to **Hajj & Umrah** pilgrimage journeys.
- **Brand Theme**: Royal Navy (`#0B2545`) & Pure White luxury palette with official IATA accreditation (`07302901`).
- **Official Address**: 60B, Green Lane, Kotahena, Colombo - 13, Sri Lanka.
- **Hotlines**: 0112448155 / 0112448156 | **Email**: info@khakiya.com

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 3. Production Build
```bash
npm run build
```

---

## 📁 Project Structure

```
khakiya/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies and build scripts
├── vite.config.js               # Vite bundler configuration
├── public/                      # Static assets (Favicons, background imagery)
└── src/
    ├── main.jsx                 # React root initialization
    ├── App.jsx                  # Main application orchestrator & state manager
    ├── index.css                # Tailwind CSS design system & typography tokens
    ├── data/
    │   └── packagesData.js      # Hajj & Umrah package specifications, itinerary & testimonials
    └── components/
        ├── Navbar.jsx           # Floating glassmorphic navbar with mobile menu
        ├── BrandLogo.jsx        # Official Khakiya typographic wordmark & IATA badge
        ├── Hero.jsx             # Panoramic Masjid Al-Haram hero & quick search bar
        ├── AirlineMarquee.jsx   # Infinite auto-scrolling carrier partners marquee
        ├── PackagesSection.jsx  # Umrah & Hajj package cards with LKR pricing
        ├── PackageDetailModal.jsx # Itinerary & hotel distance modal
        ├── BookingModal.jsx     # 5-step customizer & official boarding pass generator
        ├── AppointmentSchedulerModal.jsx # Colombo Head Office consultation booking
        ├── QuickVoucherModal.jsx# Pass viewer & printable voucher manager
        ├── ServicesSection.jsx  # 6-pillar pilgrimage services grid
        ├── PilgrimageGuide.jsx  # Sunnah Umrah rites guide & interactive checklist
        ├── Testimonials.jsx     # Verified pilgrim reviews
        ├── ContactSection.jsx   # Colombo Head Office details & instant inquiry form
        └── Footer.jsx           # Clean letterhead footer with quick links
```

---

## 🔒 Notes for Backend Integration

- Form states in `BookingModal.jsx`, `AppointmentSchedulerModal.jsx`, and `ContactSection.jsx` use structured payload objects ready to be connected to REST APIs or serverless functions.
- LocalStorage persistence (`khakiya_bookings`, `khakiya_appointments`) provides instant offline pass retention and printing for demo purposes.
