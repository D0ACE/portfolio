# Setup Guide - Installing Node.js and npm

## Issue
npm is not recognized because Node.js is not installed on your system.

## Solution: Install Node.js

### Option 1: Official Node.js Installer (Recommended)

1. **Download Node.js**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose Windows installer (.msi)

2. **Run the Installer**
   - Double-click the downloaded .msi file
   - Follow the installation wizard
   - **Important**: Check "Automatically install necessary tools" option
   - Complete the installation

3. **Verify Installation**
   Open a **new** PowerShell window and run:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.x.x and 10.x.x)

4. **Install Project Dependencies**
   ```powershell
   cd "a:\abhi imp\certificate\portfolio-3d"
   npm install
   ```

5. **Run Development Server**
   ```powershell
   npm run dev
   ```
   Open http://localhost:5173 in your browser

---

### Option 2: Using Chocolatey (Package Manager)

If you have Chocolatey installed:
```powershell
choco install nodejs-lts
```

---

### Option 3: Using Winget (Windows Package Manager)

If you have winget (Windows 11):
```powershell
winget install OpenJS.NodeJS.LTS
```

---

## After Installing Node.js

### Step 1: Verify Installation
```powershell
# Close and reopen PowerShell, then run:
node --version
npm --version
```

### Step 2: Navigate to Project
```powershell
cd "a:\abhi imp\certificate\portfolio-3d"
```

### Step 3: Install Dependencies
```powershell
npm install
```
This will install all required packages (React, Three.js, Tailwind, etc.)

### Step 4: Run Development Server
```powershell
npm run dev
```

### Step 5: Open in Browser
Open http://localhost:5173 in your web browser

---

## Troubleshooting

### Issue: "npm not recognized" after installation
**Solution**: Close and reopen PowerShell/Command Prompt

### Issue: Permission errors during npm install
**Solution**: Run PowerShell as Administrator

### Issue: Slow installation
**Solution**: This is normal for first-time setup (downloading ~200MB of packages)

### Issue: Port 5173 already in use
**Solution**: 
```powershell
npm run dev -- --port 3000
```

---

## Alternative: View Project Files

While waiting to install Node.js, you can:

1. **Review the code structure**:
   - Open files in VS Code or any text editor
   - Check `src/components/` for all React components
   - Review `README.md` for full documentation

2. **Read the documentation**:
   - `README.md` - Complete guide
   - `DEPLOYMENT.md` - Deployment instructions
   - `walkthrough.md` - Feature overview

3. **Plan customizations**:
   - Prepare your resume PDF
   - List your actual projects
   - Gather your social media links

---

## Quick Reference

### Essential Commands
```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project URLs
- **Development**: http://localhost:5173
- **After build**: Check `dist/` folder

---

## Next Steps After Setup

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. 📝 Update personal information:
   - Social links (GitHub, LinkedIn, Email, Phone)
   - Projects details
   - About section bio
   - Education details
5. 📄 Add resume.pdf to `public/` folder
6. 🚀 Deploy to GitHub Pages/Netlify/Vercel

---

## Need Help?

- **Node.js Documentation**: https://nodejs.org/docs
- **npm Documentation**: https://docs.npmjs.com
- **Vite Documentation**: https://vitejs.dev

---

**Once Node.js is installed, you'll be able to run the portfolio locally and see the stunning 3D effects in action!** 🚀
