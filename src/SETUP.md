# Portfolio Setup Instructions

## ✅ Resume Download Setup

To enable resume downloads:

1. **Export your resume as a PDF** named `Akarsh_Raj_Resume.pdf`
2. **Upload it to the `/public` folder** of your project
3. The download button will automatically work once the file is in place

**File path should be:** `/public/resume.pdf`

The download button is located in `/components/DownloadResume.tsx` and is already configured to download this file.

---

## 🔗 Testimonials LinkedIn Links Setup

**CRITICAL FOR CREDIBILITY:** Update testimonials with real LinkedIn profile URLs.

In `/App.tsx`, find the `TESTIMONIALS` array and replace placeholder URLs:

```tsx
const TESTIMONIALS = [
  {
    quote: "...",
    author: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "Tracelink",
    linkedIn: "https://www.linkedin.com/in/sarahjohnson" // ⚠️ REPLACE WITH REAL URL
  },
  // ...
];
```

**How to get LinkedIn URLs:**
1. Go to the person's LinkedIn profile
2. Copy the URL from your browser
3. Make sure they've given you permission to use their testimonial
4. Optionally, ask them to endorse you on LinkedIn first

**Best practice:** Only include testimonials from people who:
- Actually worked with you
- Have active LinkedIn profiles
- Have given you permission to feature them

---

## 🎨 Optional: Add Project Illustrations

Subtle, minimal illustrations are available for project cards. To use them:

In `/App.tsx`, add the `illustration` prop to any project:

```tsx
{
  title: "Agent AI Chat Experience",
  description: "...",
  tags: [...],
  impact: "...",
  illustration: "ai-chat" // Add this line
}
```

**Available illustration types:**
- `ai-chat` - Neural network nodes
- `platform` - Building blocks
- `design-system` - Modular grid
- `automotive` - Flow lines  
- `generic` - Simple geometric shape

These appear subtly on hover in the top-right corner of project cards.

---

## 📝 Next Steps

Consider adding:
- [ ] Upload resume PDF to `/public/resume.pdf`
- [ ] Add project illustrations (optional)
- [ ] Update Behance/external links with latest work
- [ ] Add LinkedIn profile photo URL if desired
- [ ] Consider adding a professional headshot in the hero section
