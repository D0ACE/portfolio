# Deployment Guide - 3D Portfolio Website

Complete guide for deploying your portfolio to various hosting platforms.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

**Step 1: Prepare Repository**

1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio-3d.git
   git push -u origin main
   ```

**Step 2: Update Configuration**

Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-3d/', // Replace with your repo name
})
```

**Step 3: Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**Step 4: Add Deploy Scripts**

Add to `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Step 5: Deploy**
```bash
npm run deploy
```

**Step 6: Enable GitHub Pages**

1. Go to repository Settings
2. Navigate to Pages
3. Select `gh-pages` branch
4. Save

Your site will be live at: `https://USERNAME.github.io/portfolio-3d/`

---

### Option 2: Netlify (Recommended)

**Method A: Drag and Drop**

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `dist` folder
4. Done! Your site is live

**Method B: Git Integration**

1. Push your code to GitHub
2. Sign in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

**Custom Domain (Optional)**

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

---

### Option 3: Vercel

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
vercel
```

Follow the prompts to complete deployment.

**Or use Vercel Dashboard:**

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Framework preset: Vite
4. Deploy

---

### Option 4: Custom Server (VPS/Shared Hosting)

**Step 1: Build**
```bash
npm run build
```

**Step 2: Upload**

Upload the contents of the `dist` folder to your server's public directory (e.g., `public_html`, `www`, `htdocs`)

**Step 3: Configure Server**

For Apache, create `.htaccess` in the `dist` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

For Nginx, add to server block:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔧 Pre-Deployment Checklist

- [ ] Update all placeholder text (name, email, phone, etc.)
- [ ] Replace GitHub/LinkedIn URLs with your actual profiles
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update project details with your actual projects
- [ ] Test all links and buttons
- [ ] Optimize images (use WebP format)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test contact form functionality
- [ ] Update meta tags in `index.html`

---

## 🎯 Performance Optimization

**Before deploying:**

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use appropriate sizes

2. **Reduce Bundle Size**
   - Remove unused dependencies
   - Enable tree shaking
   - Use dynamic imports

3. **Enable Caching**
   - Configure cache headers
   - Use CDN for static assets

4. **Lighthouse Audit**
   ```bash
   npm run build
   npm run preview
   ```
   Then run Lighthouse in Chrome DevTools

---

## 🔒 Environment Variables (Optional)

For contact form integration (EmailJS, FormSpree, etc.):

1. Create `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Add to `.gitignore`:
   ```
   .env
   ```

3. Configure in hosting platform's environment variables

---

## 📊 Analytics (Optional)

**Google Analytics**

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Ensure all assets are in `public` folder

**Issue: 404 on refresh**
- Configure server redirects (see Custom Server section)
- For Netlify, create `_redirects` file in `public`:
  ```
  /*    /index.html   200
  ```

**Issue: Slow loading**
- Reduce particle count in `Scene3D.jsx`
- Optimize images
- Enable lazy loading

---

## 📞 Support

For deployment issues:
- Check hosting platform documentation
- Review build logs
- Test locally with `npm run preview`

---

**Happy Deploying! 🚀**
