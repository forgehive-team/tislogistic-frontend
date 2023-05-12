FROM nginx:1.23.4-alpine

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy your custom nginx.conf file
COPY nginx.conf /etc/nginx/conf.d/

# Add any necessary SSL certificates (if applicable)
# COPY ssl-cert.crt /etc/nginx/ssl/
# COPY ssl-cert.key /etc/nginx/ssl/

# Document the purpose of the custom configuration
# ADDITIONAL NOTES: <Add relevant details or comments here>

# Expose the necessary ports (if applicable)
# EXPOSE 80
# EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
