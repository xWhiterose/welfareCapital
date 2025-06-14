# Welfare Capital - Landing Page

A modern, responsive landing page for Welfare Capital featuring dynamic backgrounds, smooth scrolling animations, and social media integration.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM (when needed)
- **Deployment**: Vercel

## Features

- Dynamic gradient background with scroll-based animations
- Smooth scrolling sections with animated text reveals
- Interactive mouse scroll indicator
- Responsive design for all devices
- Social media integration
- Professional footer with company branding

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. **Fork/Clone** this repository
2. **Connect** to Vercel dashboard
3. **Deploy** - Vercel will automatically detect the configuration
4. **Environment Variables** (if needed):
   - Set any required environment variables in Vercel dashboard

The project includes:
- `vercel.json` configuration for proper routing
- API routes under `/api` directory
- Static build optimization
- Proper TypeScript compilation

## Project Structure

```
├── api/                 # Vercel serverless functions
├── client/             # React frontend
│   ├── src/
│   ├── components/     # Reusable UI components
│   └── pages/          # Application pages
├── server/             # Express backend (development)
├── shared/             # Shared types and schemas
└── dist/               # Build output
```

## Environment Variables

For local development, create a `.env` file:

```env
NODE_ENV=development
# Add other environment variables as needed
```

## License

Private - Welfare Capital# welfareCapital
