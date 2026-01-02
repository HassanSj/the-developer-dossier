# Deployment Checklist

Use this checklist before deploying to production:

## Pre-Deployment

- [ ] Run `npm install` to ensure all dependencies are up to date
- [ ] Test the build locally: `npm run build`
- [ ] Preview the production build: `npm run preview`
- [ ] Verify all routes work correctly (SPA routing)
- [ ] Check that all images and assets load properly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on mobile devices
- [ ] Verify environment variables are set (if any)
- [ ] Update `robots.txt` with your actual domain
- [ ] Update meta tags in `index.html` with your actual domain/URLs

## Build Optimization

- [ ] Console logs are removed in production (handled by vite-plugin-remove-console)
- [ ] Source maps are disabled (for security)
- [ ] Assets are properly chunked and optimized
- [ ] Images are optimized and compressed
- [ ] Fonts are properly loaded

## Security

- [ ] Security headers are configured (in vercel.json or netlify.toml)
- [ ] No sensitive data in client-side code
- [ ] API endpoints use HTTPS
- [ ] CORS is properly configured (if using APIs)

## Performance

- [ ] Lighthouse score > 90 for all metrics
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Bundle size is optimized
- [ ] Images use modern formats (WebP, AVIF)

## SEO

- [ ] Meta tags are complete and accurate
- [ ] Open Graph tags are set
- [ ] Twitter Card tags are set
- [ ] robots.txt is configured
- [ ] Sitemap is generated (if needed)

## Post-Deployment

- [ ] Verify the site loads correctly
- [ ] Test all interactive features
- [ ] Check analytics (if configured)
- [ ] Monitor error logs
- [ ] Test on different networks/devices
- [ ] Verify HTTPS is working
- [ ] Check redirects are working

## Platform-Specific

### Vercel
- [ ] `vercel.json` is configured
- [ ] Environment variables are set in Vercel dashboard
- [ ] Custom domain is configured (if applicable)

### Netlify
- [ ] `netlify.toml` is configured
- [ ] Environment variables are set in Netlify dashboard
- [ ] Custom domain is configured (if applicable)

### Other Platforms
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] SPA routing is configured (redirect all routes to index.html)

