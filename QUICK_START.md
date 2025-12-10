# 🎉 Quick Start Guide

Welcome to your wedding invitation website! Here's how to get started.

## ✅ What's Ready

Your complete wedding website is built and ready with:

- ✨ 11 different sections
- 🎨 Beautiful animations and responsive design
- 📱 Mobile-friendly layout
- 🇿🇦 Fully in Afrikaans
- 🗺️ Google Maps integration
- 📝 Working RSVP form
- 🖼️ Image gallery
- 🎯 Perfect for wedding guests

## 🚀 Get It Live in 5 Minutes

### Fastest Way - Use Vercel

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Done! Your site is live!
```

### Alternative - Use Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"
3. Select "Deploy manually"
4. Drag the `dist` folder (from `npm run build`)
5. Your site is live!

## 🔧 First Steps

### 1. Update Your Details

Open these files and update with your info:

**`src/pages/HomePage.tsx`**
- Change "Reinhardus & Janita" to your names
- Update the wedding date
- Change hero image

**`src/components/organisms/VenueSection.tsx`**
- Update venue name
- Change address
- Update coordinates for map

**`src/components/organisms/ScheduleSection.tsx`**
- Update ceremony times
- Change event names

**`src/components/organisms/ContactSection.tsx`**
- Add your phone numbers
- Update email address

### 2. Add Your Images

Replace these placeholder image URLs with your own:
- Hero background
- Story section photos
- Dress code images
- Gallery images
- Gift section image

Tip: You can use free image services like:
- Unsplash.com
- Pexels.com
- Your own photos hosted on Cloudinary.com

### 3. Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    600: '#d63a1e',  // Change this to your color
  },
}
```

## 📋 File Locations - Quick Reference

| What to Change | Where to Find It |
|---|---|
| Wedding date & names | `src/pages/HomePage.tsx` |
| Venue details | `src/components/organisms/VenueSection.tsx` |
| Schedule/timeline | `src/components/organisms/ScheduleSection.tsx` |
| Contact info | `src/components/organisms/ContactSection.tsx` |
| Hero image | `src/pages/HomePage.tsx` |
| Colors & fonts | `tailwind.config.js` |
| Story content | `src/components/organisms/StorySection.tsx` |
| Dress code info | `src/components/organisms/DressCodeSection.tsx` |
| Gift info | `src/components/organisms/GiftSection.tsx` |
| Gallery images | `src/components/organisms/GallerySection.tsx` |

## 🧪 Test Before Going Live

```bash
# Build the website
npm run build

# Preview it locally
npm run preview

# Open http://localhost:4173 in your browser
# Check that everything looks good
```

## 📱 Check on Mobile

1. Open the preview URL on your phone
2. Test all buttons work
3. Check images load
4. Try the RSVP form
5. Verify navigation works

## 🌐 Add a Custom Domain (Optional)

After deploying:

1. Register a domain (GoDaddy, Namecheap, etc.)
2. Point DNS to your hosting provider
3. Configure SSL certificate
4. Your site will be at `yourdomain.com`

Examples:
- `reinhardjanitwedding.com`
- `ourweddingday.co.za`
- `r-and-j-wedding.com`

## 📧 RSVP Handling

The RSVP form currently stores data in the browser. To save responses:

**Option 1: Google Forms**
- Create a Google Form
- Embed in RSVP page
- Responses auto-collected

**Option 2: Formspree**
- Go to formspree.io
- Create free form endpoint
- Update RSVP form to submit there

**Option 3: Backend Service**
- Use Firebase
- Or serverless functions
- Store in database

## 🎯 Launch Checklist

Before sharing with guests:

- [ ] Update all wedding details
- [ ] Replace all placeholder images
- [ ] Test all buttons and links
- [ ] Test on mobile phone
- [ ] Test RSVP form
- [ ] Deploy to production
- [ ] Test live site on different browsers
- [ ] Add Google Analytics (optional)
- [ ] Test on WiFi and mobile data
- [ ] Ask a friend to test

## 📞 Need Help?

### Common Questions

**Q: How do I change the RSVP deadline?**
A: Edit `src/components/organisms/RSVPForm.tsx` and change:
```typescript
const rsvpDeadline = new Date('2025-04-15');
```

**Q: Can I add more sections?**
A: Yes! Copy an organism component and add to `HomePage.tsx`

**Q: How do I add a video?**
A: Add an iframe in any section component

**Q: Can I change the language?**
A: Yes! All text is in components - just edit and change

## 🎨 Design Customization

### Change Primary Color
```javascript
// In tailwind.config.js
primary: {
  600: '#your-color-code',
}
```

### Change Fonts
```javascript
// In tailwind.config.js
fontFamily: {
  serif: ['Your Font', 'serif'],
  sans: ['Your Font', 'sans-serif'],
}
```

### Add More Images to Gallery
```typescript
// In src/components/organisms/GallerySection.tsx
const galleryImages = [
  { id: '1', src: 'your-image-url', alt: 'description' },
  { id: '2', src: 'your-image-url', alt: 'description' },
  // Add more...
];
```

## 🚀 Deploy Commands

```bash
# Install dependencies (already done)
npm install

# Development - run locally
npm run dev
# Visit http://localhost:5173

# Build for production
npm run build
# Creates optimized `dist` folder

# Preview production build
npm run preview
# Simulates live website locally

# Check for code issues
npm run lint
```

## 📊 Project Stats

- **Pages**: 2 (Home + RSVP)
- **Components**: 20+
- **Sections**: 11
- **Languages**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Size**: ~400KB gzipped
- **Performance**: Excellent ⚡

## 💡 Pro Tips

1. **Backup your changes** - Use Git to version control
2. **Test everything** - Especially forms and links
3. **Optimize images** - Use small file sizes
4. **Mobile first** - Design for phones first
5. **Get feedback** - Ask friends to review

## 🎊 You're All Set!

Your wedding website is ready. Just:

1. ✏️ Update your details
2. 🖼️ Add your images
3. 🚀 Deploy to the web
4. 📤 Share with guests
5. 💕 Celebrate your upcoming wedding!

## 📚 Full Documentation

For more details, see:
- `README.md` - Complete project documentation
- `PROJECT_SUMMARY.md` - Feature list and structure
- `DEPLOYMENT.md` - Detailed deployment guide

---

**Congratulations on your upcoming wedding!** 💕

*Your website is ready to make your guests smile*

Need help? All components are documented and easy to customize!
