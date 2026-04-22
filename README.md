# Leilac Clothing Website

A complete Next.js ecommerce showcase website for Leilac Clothing - a women-owned fashion brand in Kerala, India.

## Features

- **Product Showcase**: Browse dresses, tops, abayas, combos, and accessories
- **WhatsApp Ordering**: Click "Ask on WhatsApp" to inquire about products
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Elegant design with smooth animations

## WhatsApp Integration

All ordering happens via WhatsApp:
- Products have "Ask on WhatsApp" buttons
- Pre-filled messages with product name and price
- Floating WhatsApp button for quick contact

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: CSS Modules / Global CSS
- **Deployment**: Ready for Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
leilac-clothing/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx       # Main homepage component
│       └── globals.css    # Global styles
├── public/               # Static assets
├── package.json         # Dependencies
├── tsconfig.json       # TypeScript config
└── next.config.js      # Next.js config
```

## Customization

### Update WhatsApp Number

Edit `src/app/page.tsx` and change:

```typescript
const WHATSAPP_NUMBER = "917510188818";
```

### Update Products

Edit the `products` array in `src/app/page.tsx`:

```typescript
const products = [
  { id: 1, name: "Product Name", category: "Category", price: "₹999", badge: "New" },
];
```

### Update Colors

Edit `:root` variables in `src/app/globals.css`:

```css
:root {
  --primary: #D4A574;
  --primary-dark: #B8956A;
  --secondary: #2C2C2C;
}
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

```bash
# Using Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push code to GitHub
2. Import project on Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Brand Details

- **Name**: Leilac Clothing
- **Tagline**: "Aesthetic world built for women's"
- **Location**: Kakkemvelli, Nadapuram, Kerala 673504, India
- **WhatsApp**: +91 75101 88818
- **Email**: leilac.clothing@gmail.com
- **Instagram**: @leilac.clothing
- **Facebook**: Leilac

## License

© 2024 Leilac Clothing. All rights reserved.