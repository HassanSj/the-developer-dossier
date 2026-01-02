# The Developer Dossier

A dossier-style portfolio featuring investigated case studies, SaaS builds, and full-stack solutions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd the-developer-dossier
```

2. Install dependencies
```bash
npm install
```

**Note:** The project uses `vite-plugin-remove-console` to automatically remove console.log statements in production builds while keeping console.error and console.warn for debugging.

3. Create environment file (optional)
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

Build the production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📦 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Deploy!

The `vercel.json` file is already configured with optimal settings.

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

### Other Platforms

For other static hosting platforms (GitHub Pages, AWS S3, etc.):

1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA routing)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run build:prod` - Build with production environment
- `npm run preview:prod` - Preview with production mode

## 🔒 Security

The production build includes:
- Console log removal
- Source map disabled
- Security headers configured
- Optimized asset caching

## 📄 License

See [LICENSE](LICENSE) file for details.
