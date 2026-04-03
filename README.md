# Nandini Salon Parlour - React Website

A modern, Gen Z-friendly React website for Nandini Salon Parlour with premium black and white aesthetic.

## Features

✨ **Modern Design**
- Minimal, clean, premium black-and-white color palette
- Smooth animations and transitions
- Interactive hover effects
- Custom cursor design

🎨 **Components**
- Responsive navigation with scroll detection
- Hero section with parallax effect
- Founder section with zoom badge effect
- Services section with interactive cards
- Trust credentials display
- Client testimonials
- Certification section
- Smooth scroll animations

📱 **Responsive**
- Mobile-first design
- Works seamlessly on all devices
- Optimized for tablets and desktops

## Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd nandini-salon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation/
│   ├── Hero/
│   ├── Intro/
│   ├── Founder/
│   ├── Services/
│   ├── Transition/
│   ├── Trust/
│   ├── Reviews/
│   ├── Certification/
│   ├── FinalCTA/
│   ├── Footer/
│   └── Cursor/
├── App.jsx
├── index.css
└── main.jsx
index.html
vite.config.js
package.json
```

## Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library (optional, included for future enhancements)
- **CSS3** - Styling with animations and transitions

## Customization

### Adding Nandini's Image

Replace the placeholder image in [Founder.jsx](src/components/Founder.jsx):

1. Add your image to the `public/` folder
2. Update the image source in the component
3. Adjust the aspect ratio if needed

### Updating Services

Edit the services array in [Services.jsx](src/components/Services.jsx) to add or modify services.

### Contact Information

Update contact details in [Footer.jsx](src/components/Footer.jsx) and [Navigation.jsx](src/components/Navigation.jsx).

## Performance Optimizations

- Lazy loading for images
- Optimized animations using CSS transforms
- Scroll-based animations with Intersection Observer
- Minimal JavaScript for smooth 60fps performance

## Future Enhancements

- [ ] Online booking system
- [ ] Instagram feed integration
- [ ] Gallery with before/after photos
- [ ] Blog section
- [ ] Newsletter signup
- [ ] Customer loyalty program dashboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. © 2026 Nandini Salon Parlour

## Contact

For inquiries, contact: +91 99999 99999
Instagram: @nandinisalonparlour
