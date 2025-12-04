#!/bin/bash

# Automatic deployment script for Kudora Landing
# Usage: ./deploy.sh [user@server_ip]

set -e

echo "🚀 Deploying Kudora Landing..."

# Variables - To configure
SERVER="${1:-user@your-server-ip}"
REMOTE_PATH="/var/www/kudora-landing"
TMP_PATH="/tmp/kudora-landing"

# Colors for messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Local build
echo -e "${YELLOW}📦 Production build...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: dist folder does not exist!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"

# Step 2: File transfer
echo -e "${YELLOW}📤 Transferring files to server...${NC}"
ssh -p 12000 $SERVER "mkdir -p $TMP_PATH"
scp -P 12000 -r dist/* $SERVER:$TMP_PATH/

echo -e "${GREEN}✅ Files transferred${NC}"

# Step 3: Deployment on server
echo -e "${YELLOW}🔄 Deploying on server...${NC}"
ssh -p 12000 $SERVER << 'EOF'
    # Backup of old version (optional)
    if [ -d "/var/www/kudora-landing" ]; then
        sudo cp -r /var/www/kudora-landing /var/www/kudora-landing.backup.$(date +%Y%m%d_%H%M%S)
    fi
    
    # Deployment
    sudo rm -rf /var/www/kudora-landing/*
    sudo mv /tmp/kudora-landing/* /var/www/kudora-landing/
    sudo chown -R www-data:www-data /var/www/kudora-landing
    
    # Cleanup
    rm -rf /tmp/kudora-landing
    
    # Test Nginx configuration
    sudo nginx -t && sudo systemctl reload nginx
EOF

echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}🌐 The site is now online${NC}"
