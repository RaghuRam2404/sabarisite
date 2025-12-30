# How to Add Instagram Reels to Your Website

## Step-by-Step Instructions:

### 1. Get Your Instagram Reel Embed URL

For each reel you want to add:
1. Go to your Instagram reel
2. Copy the reel URL (e.g., `https://www.instagram.com/reel/ABC123xyz/`)
3. Extract the reel ID from the URL (e.g., `ABC123xyz`)
4. Create the embed URL: `https://www.instagram.com/p/ABC123xyz/embed`

### 2. Update the HTML File

Open `index.html` and find the Instagram Reels Section (search for `<!-- Instagram Reels Section -->`).

Replace the placeholder `REEL_ID_1`, `REEL_ID_2`, etc. with your actual reel IDs.

**Example:**
```html
<!-- Before -->
<iframe 
    src="https://www.instagram.com/p/REEL_ID_1/embed" 
    frameborder="0" 
    scrolling="no" 
    allowtransparency="true"
    loading="lazy">
</iframe>

<!-- After -->
<iframe 
    src="https://www.instagram.com/p/ABC123xyz/embed" 
    frameborder="0" 
    scrolling="no" 
    allowtransparency="true"
    loading="lazy">
</iframe>
```

### 3. Add More Reels

To add more reels, copy this entire block and paste it inside the `reels-scroll-wrapper` div:

```html
<!-- Reel Card -->
<div class="reel-card">
    <div class="reel-embed">
        <iframe 
            src="https://www.instagram.com/p/YOUR_REEL_ID/embed" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            loading="lazy">
        </iframe>
    </div>
    <div class="reel-overlay">
        <i class="bi bi-play-circle"></i>
    </div>
</div>
```

### 4. Test Your Changes

1. Save the `index.html` file
2. Open it in your browser
3. Scroll to the "Watch My Journey" section
4. Verify all reels load correctly
5. Test horizontal scrolling on mobile and desktop

## Tips:

- **Recommended Number of Reels:** 5-10 reels for best performance
- **Reels will be horizontally scrollable** on all devices
- The section uses your site's **gold and maroon color palette**
- Each reel card has a **hover effect** with a play icon
- The section is **fully responsive** for mobile, tablet, and desktop

## Update Instagram Link

Don't forget to update the "Follow for More" button at the bottom of the reels section:

```html
<a href="https://www.instagram.com/YOUR_USERNAME/" target="_blank" class="btn btn-outline-custom btn-lg">
    <i class="bi bi-instagram me-2"></i>Follow for More
</a>
```

Replace `YOUR_USERNAME` with your actual Instagram username.

---

**Need Help?** If you have any issues, check the browser console (F12) for errors.
