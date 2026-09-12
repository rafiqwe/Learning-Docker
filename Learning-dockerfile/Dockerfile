# Use an official image as a parent image
FROM node:22-alpine

# Set the working directory inside the container 
WORKDIR /app


# Copy all packge.json files in the working directory 
COPY package*.json ./


# Install dependencies

RUN npm install 


COPY . .

ENV PORT=3000

CMD ["node", "index.js"]