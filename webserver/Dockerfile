FROM nginx:alpine
WORKDIR /var/www/html
COPY nginx.conf /etc/nginx/
COPY *.html /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
