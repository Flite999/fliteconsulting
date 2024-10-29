# Use an official image as the base
FROM nginx:alpine

# Copy website files into the container
COPY ./public /usr/share/nginx/html

# Expose port 80
EXPOSE 80
