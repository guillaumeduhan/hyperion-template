#!/bin/bash

# Define green color for echo
GREEN='\033[0;32m'
NC='\033[0m' # No Color
GEAR='⚙️'

# Update package list and install prerequisites
echo -e "${GREEN}${GEAR} Updating package list and installing prerequisites...${NC}"
brew update
brew install nvm

# Install latest Node.js version
echo -e "${GREEN}${GEAR} Installing latest Node.js version...${NC}"
export NVM_DIR="$HOME/.nvm"
source "$(brew --prefix nvm)/nvm.sh"
nvm install node

# Install pnpm and vercel
echo -e "${GREEN}${GEAR} Installing pnpm and vercel...${NC}"
npm install -g pnpm
pnpm add -g vercel@latest

# Install Render CLI
echo -e "${GREEN}${GEAR} Installing Render CLI...${NC}"
brew tap render-oss/render
brew install render

# Install Next.js CLI
echo -e "${GREEN}${GEAR} Installing Next.js CLI...${NC}"
pnpm add -g next
next -h

# Install Supabase CLI
echo -e "${GREEN}${GEAR} Installing Supabase CLI...${NC}"
brew install supabase/tap/supabase

# Install Docker
echo -e "${GREEN}${GEAR} Installing Docker...${NC}"
brew install --cask docker

echo -e "${GREEN}${GEAR} All installations completed successfully!${NC}"
