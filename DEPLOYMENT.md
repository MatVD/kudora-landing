# Deployment Guide - Kudora Landing

## 📋 Server Prerequisites

- Ubuntu/Debian with sudo access
- Node.js 18+ and npm installed
- Nginx installed
- Configured domain (optional)

## 🚀 Step 1: Production Build

On your local machine, in the project folder:

```bash
# Install dependencies
npm install

# Create production build
npm run build
```

This will create a `dist/` folder containing the optimized static files.

## 📦 Step 2: Server Preparation

### 2.1 Create destination folder

```bash
sudo mkdir -p /var/www/kudora-landing
```

### 2.2 Transfer files

**Option A - From your local machine (with scp):**

```bash
# Replace USER and SERVER_IP with your values
scp -P 12000 -r dist/* user@server_ip:/tmp/kudora-landing/
```

Then on the server:

```bash
sudo mv /tmp/kudora-landing/* /var/www/kudora-landing/
sudo chown -R www-data:www-data /var/www/kudora-landing
```

**Option B - Directly on server (with git):**

```bash
# Clone the repo
cd /tmp
git clone https://github.com/MatVD/kudora-landing.git
cd kudora-landing

# Install and build
npm install
npm run build

# Move files
sudo cp -r dist/* /var/www/kudora-landing/
sudo chown -R www-data:www-data /var/www/kudora-landing
```

## ⚙️ Step 3: Nginx Configuration

### 3.1 Create Nginx configuration

```bash
sudo nano /etc/nginx/sites-available/kudora-landing
```

Paste the configuration (see `nginx.conf` file in this repo).

### 3.2 Enable the site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/kudora-landing /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 🔄 Site Update

To update the site after modifications:

```bash
# On your local machine
npm run build
scp -P 12000 -r dist/* user@server_ip:/tmp/kudora-landing/

# On the server
sudo rm -rf /var/www/kudora-landing/*
sudo mv /tmp/kudora-landing/* /var/www/kudora-landing/
sudo chown -R www-data:www-data /var/www/kudora-landing
```

Or use the deployment script:

```bash
./deploy.sh
```

## ✅ Verification

1. Open a browser and access your IP or domain
2. Verify that the site loads correctly
3. Test navigation and animations
4. Check social links (GitHub, Twitter, Discord)

## 🐛 Troubleshooting

### Site won't load

```bash
# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check that Nginx is running
sudo systemctl status nginx

# Check permissions
ls -la /var/www/kudora-landing
```

### 404 error on routes

Make sure the Nginx configuration includes `try_files $uri $uri/ /index.html;`

### Cache issues

```bash
# Clear browser cache or test in private browsing
# Check Cache-Control headers in nginx.conf
```

## 📊 Performance

The site is optimized for:

- Initial load < 2s
- First Contentful Paint < 1s
- Files compressed with gzip
- Static assets cache (1 year)

## 🔗 Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Vite Documentation](https://vitejs.dev/guide/build.html)
- [Let's Encrypt](https://letsencrypt.org/)
