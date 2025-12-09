# Deployment Guide

This project can be deployed to different hosting platforms. Follow the instructions below based on your hosting provider.

## cPanel Hosting

### Build for cPanel

1. **Build the project for cPanel:**
   ```bash
   npm run build:cpanel
   ```

2. **Upload to cPanel:**
   - The build output is in the `out` directory
   - Upload **all contents** of the `out` directory to your cPanel's `public_html` folder
   - You can use cPanel's File Manager or FTP/SFTP

3. **File Structure on cPanel:**
   ```
   public_html/
   ├── index.html
   ├── _next/
   │   ├── static/
   │   │   ├── css/
   │   │   ├── chunks/
   │   │   └── media/
   ├── images/
   ├── data/
   ├── work/
   └── ... (other files)
   ```

4. **Important Notes:**
   - Make sure `index.html` is in the root of `public_html`
   - All `_next` folder contents must be uploaded
   - All `images`, `data`, and `work` folders must be uploaded
   - The site should be accessible at `https://yourdomain.com`

## GitHub Pages

### Build for GitHub Pages

1. **Build the project for GitHub Pages:**
   ```bash
   npm run build:github
   ```

2. **Deploy to GitHub Pages:**
   - The build output is in the `out` directory
   - Configure GitHub Pages to serve from the `out` directory or push the contents to the `gh-pages` branch
   - The site will be available at `https://username.github.io/Resume-Nextjs/`

## Build Scripts

- `npm run build:cpanel` - Builds for cPanel hosting (no basePath)
- `npm run build:github` - Builds for GitHub Pages (with `/Resume-Nextjs` basePath)
- `npm run build` - Default build (uses `BASE_PATH` environment variable or empty string)

## Environment Variables

You can also set the `BASE_PATH` environment variable before building:

```bash
# For cPanel (no basePath)
BASE_PATH="" npm run build

# For GitHub Pages
BASE_PATH="/Resume-Nextjs" npm run build
```

## Troubleshooting

### CSS Not Loading
- Make sure all files from the `out` directory are uploaded
- Verify the `_next/static/css/` folder is present
- Check that file permissions are correct (644 for files, 755 for directories)

### Images Not Showing
- Verify the `images` folder is uploaded
- Check image paths in the browser console
- Ensure file names match exactly (case-sensitive)

### 404 Errors
- Make sure `trailingSlash: true` is set in `next.config.ts` (already configured)
- Verify all HTML files are uploaded
- Check `.htaccess` file if using Apache (may need to configure rewrite rules)

