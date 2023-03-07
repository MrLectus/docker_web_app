FROM node:19-alpine3.16
RUN addgroup app && adduser -G app -g app -D app
USER app
WORKDIR /home/app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
