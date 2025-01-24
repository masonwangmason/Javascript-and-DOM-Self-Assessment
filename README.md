# Airbnb Listings Demo

## Overview
This project dynamically displays the first 50 Airbnb listings from a provided JSON file. It showcases features such as listing images, descriptions, amenities, host details, and prices. The page is built with HTML, CSS, and JavaScript, leveraging AJAX to load the data dynamically using `fetch`.

## Features
- Dynamically loads the first 50 Airbnb listings from a JSON file.
- Displays key details for each listing:
  - Thumbnail image
  - Name and description
  - Amenities
  - Host information (name and photo)
  - Price per night
- Fallback placeholders for missing thumbnails or host images.
- Responsive and visually consistent image sizes.
- Clean, modern layout with hover effects and circular host images.

## Tech Stack
- **HTML5**: Structure of the page.
- **CSS3**: Styling for consistent and professional UI.
- **JavaScript (ES6)**: Data fetching, dynamic rendering of listings, and fallback handling for missing data.

## Installation
To run this project locally, follow these steps:

### Clone the Repository:
```bash
git clone https://github.com/yourusername/airbnb-listings-demo.git
cd airbnb-listings-demo
```

### Start a Local Server:
Since the project uses `fetch` to load local JSON files, you must serve the files with a local server. You can use one of the following commands:

#### Using Node.js:
```bash
npx http-server .
```

#### Using Python:
```bash
python -m http.server
```

### Open in a Browser:
Visit `http://localhost:8080` (or the provided URL) in your browser to view the project.

## Deployment
This project can be easily deployed to GitHub Pages or any static hosting service. To deploy on GitHub Pages:

1. Push your repository to GitHub.
2. Go to the repository settings.
3. Enable GitHub Pages and select the `main` branch.
4. Access the live project via the provided GitHub Pages URL.
