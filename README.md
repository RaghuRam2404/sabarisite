# Elite Bodybuilding Coach - Single Page Website

A professional, bold, and striking single-page website designed for bodybuilding trainers to showcase their expertise, services, and client transformations.

## 🎨 Features

- **Full-screen hero section** with trainer profile photo
- **"Meet Your Coach" section** with 4 professional posing photos
- **Trainer bio and credentials** display
- **Services pricing** (3 tiers)
- **Client testimonials** with 5-star ratings
- **Transformation gallery** (before/after)
- **Instagram DM call-to-action**
- **Fully responsive** (Mobile, Tablet, Desktop)
- **Smooth animations** and scroll effects
- **Modern color palette** (Deep Maroon, Golden Yellow, Black, White, etc.)

## 📸 Adding Your Images

### Required Images

To complete the website, you need to add the following images to the main folder:

#### 1. Main Hero Image
- **Filename:** `trainer-main.jpg`
- **Recommended size:** 800x1200px (portrait orientation)
- **Description:** Your main profile photo - full body or upper body shot showing your physique
- **Location in code:** Line 36 in `index.html`

#### 2. Posing Photos (4 images)
Place these in the main folder:

- **`pose-front-double-bicep.jpg`**
  - Front double bicep pose
  - Recommended size: 600x800px
  - Location: Line 100 in `index.html`

- **`pose-side-chest.jpg`**
  - Side chest pose
  - Recommended size: 600x800px
  - Location: Line 109 in `index.html`

- **`pose-back-lat-spread.jpg`**
  - Back lat spread pose
  - Recommended size: 600x800px
  - Location: Line 118 in `index.html`

- **`pose-most-muscular.jpg`**
  - Most muscular pose
  - Recommended size: 600x800px
  - Location: Line 127 in `index.html`

#### 3. Transformation Photos (2 types supported)

**Type 1: Single Combined Before/After Image**
- Use when you have one photo showing both before and after side-by-side
- Recommended size: 800x600px (landscape)
- Examples: `transformation-1.jpg`, `transformation-3.jpg`, `transformation-5.jpg`

**Type 2: Separate Before and After Images**
- Use when you have two separate photos (one before, one after)
- Recommended size: 400x600px (portrait) for each
- Examples: 
  - `transformation-2-before.jpg` + `transformation-2-after.jpg`
  - `transformation-4-before.jpg` + `transformation-4-after.jpg`
  - `transformation-6-before.jpg` + `transformation-6-after.jpg`

The gallery automatically displays both types beautifully!

### Image Optimization Tips

1. **Format:** Use `.jpg` or `.webp` for better compression
2. **Size:** Keep images under 500KB each for fast loading
3. **Quality:** High quality (80-90% compression)
4. **Resolution:** 2x for retina displays (will be scaled down automatically)
5. **Orientation:** Portrait for main photo, square/portrait for pose photos

### How to Add Images

1. Save your images with the exact filenames listed above
2. Place them in the `/Users/raghu-2264/Raghu/Sabari/` folder (same folder as `index.html`)
3. Open `index.html` in a browser to see them displayed

**OR**

If you want to use different filenames, update the following lines in `index.html`:
- Line 36: `<img src="your-filename.jpg" ...>`
- Line 100: `<img src="your-pose-1.jpg" ...>`
- Line 109: `<img src="your-pose-2.jpg" ...>`
- Line 118: `<img src="your-pose-3.jpg" ...>`
- Line 127: `<img src="your-pose-4.jpg" ...>`

## ✏️ Customization

### Change Trainer Name
Edit line 35 in `index.html`:
```html
<h3 class="trainer-name">COACH [YOUR NAME]</h3>
```

### Update Bio Text
Edit lines 136-139 in `index.html` to add your personal story and achievements.

### Update Credentials
Edit lines 142-157 in `index.html` to match your actual certifications and achievements.

### Change Instagram Link
Update line 420 in `index.html`:
```html
<a href="https://instagram.com/your-username" target="_blank" ...>
```

### Modify Pricing
Edit the services section (lines 169-231) to update pricing and features.

## 🚀 Launching the Site

### Local Testing
1. Simply open `index.html` in any modern browser
2. Or run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

### Deploying Online

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files (index.html, styles.css, script.js, images)
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://yourusername.github.io/repository-name`

#### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your folder to Netlify
3. Get instant live URL

#### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your project
3. Get instant deployment

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Palette

The website uses the following colors:

- **Deep Maroon:** #5A0E12, #7A1217
- **Black/Dark Grey:** #000000, #1A1A1A
- **Golden Yellow:** #D4A237, #F2C94C
- **Bright Yellow:** #F4D158, #F8E37A
- **Light Blue:** #3B6EAA, #5C8FD3
- **White:** #FFFFFF

## 📄 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript animations
├── README.md           # This file
└── [Your Images]       # Add your photos here
    ├── trainer-main.jpg
    ├── pose-front-double-bicep.jpg
    ├── pose-side-chest.jpg
    ├── pose-back-lat-spread.jpg
    └── pose-most-muscular.jpg
```

## 🔧 Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (Vanilla - no frameworks)
- Bootstrap 5.3.2 (Grid & Utilities)
- Bootstrap Icons
- Google Fonts (Bebas Neue, Montserrat)

## 📞 Support

For questions or customization requests, reach out via Instagram DM (link in the footer).

---

**Built with 💪 for elite bodybuilding professionals**
