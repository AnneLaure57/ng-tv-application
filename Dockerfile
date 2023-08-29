# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the whole application to the container's working directory
COPY . .

# Build the Angular app for production
RUN npm run build

# ----------------------------
# run with nginx
# ----------------------------
# Use the lightweight nginx image as the base image for serving the Angular app
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

# Copy the built Angular app from the previous stage to the nginx public directory
COPY --from=build /app/dist/rh-data /usr/share/nginx/html

RUN chown nginx:nginx /var/cache/nginx -Rv && chmod 777 -Rv /var/cache/nginx

# Expose port 8080 to the host
EXPOSE 8080

USER nginx

# The default command to start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
