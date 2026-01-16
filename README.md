# 3D Portfolio Website - Data Analyst & Data Scientist

A stunning, interactive 3D portfolio website built with React, Three.js, and premium dark theme featuring deep red accents. Designed for MCA graduates specializing in Data Analytics and Data Science.

## ✨ Features

- **3D Neural Network Visualization** - Interactive particle system using Three.js
- **Premium Dark Theme** - Black background with deep red (#ff1a1a) accents
- **Cinematic Animations** - GSAP and Framer Motion for smooth transitions
- **Glassmorphism Effects** - Modern glass-effect cards with backdrop blur
- **Fully Responsive** - Optimized for all devices
- **SEO Optimized** - Meta tags for Data Analyst/Scientist keywords
- **Performance Optimized** - Lazy loading and code splitting

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **React Icons** - Icon library

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm installed
- Git

### Setup Instructions

1. **Clone or download the project**
   ```bash
   cd portfolio-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update personal information**
   
   Replace placeholder text in the following files:
   
   - `index.html` - Update meta tags and title
   - `src/components/Hero.jsx` - Update social links (GitHub, LinkedIn, Email, Phone)
   - `src/components/Contact.jsx` - Update contact details
   - `src/components/Footer.jsx` - Update social links
   - `src/components/About.jsx` - Update bio and statistics
   - `src/components/Projects.jsx` - Update project details and GitHub links
   - `src/components/Education.jsx` - Update education details

4. **Add your resume**
   
   Place your resume PDF in the `public` folder as `resume.pdf`

5. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#ff1a1a', // Change this to your preferred accent color
  dark: '#000000',
}
```

### Fonts

Update Google Fonts link in `index.html` and font families in `tailwind.config.js`

### 3D Particle Count

Adjust particle density in `src/components/Scene3D.jsx`:

```javascript
const particlesCount = 2000; // Increase or decrease for performance
```

## 📱 Sections

1. **Hero** - 3D background, headline, social links, CTA buttons
2. **About** - Professional bio and key highlights
3. **Skills** - Categorized skills with animated progress bars
4. **Projects** - 3D tilt cards with project details
5. **Education** - Animated timeline
6. **Contact** - Contact form and information
7. **Footer** - Social links and copyright

## 🌐 Deployment

### GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   base: '/repository-name/',
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. **Deploy** - Drag and drop the `dist` folder or connect your Git repository

### Vercel

1. **Import project** from GitHub
2. **Framework preset:** Vite
3. **Deploy** - Automatic deployment on push

## 📄 File Structure

```
portfolio-3d/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Scene3D.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Performance Tips

- Reduce particle count for slower devices
- Enable lazy loading for images
- Optimize resume PDF size
- Use WebP format for images
- Enable gzip compression on server

## 📧 Contact Information

Update these placeholders with your actual information:

- **GitHub:** https://github.com/USERNAME
- **LinkedIn:** https://www.linkedin.com/in/USERNAME
- **Email:** yourname@email.com
- **Phone:** +91-XXXXXXXXXX

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with modern web technologies and best practices for Data Science professionals.

---

**Made with ❤️ for Data Analysts and Data Scientists**
