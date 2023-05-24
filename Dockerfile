# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code
COPY . .

# Build the app
RUN npm run build

# Expose the desired port (e.g., 80 for a web app)
EXPOSE 80

# Start the app
CMD ["npm", "run", "dev"]
